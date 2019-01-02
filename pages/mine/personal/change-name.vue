<template>
	<view class="content">
		<view class="uni-form-item uni-column">
			<view class="with-fun">
				<view class="user-name">用户名</view>
				<input class="uni-input" placeholder="输入用户名" :value="inputClearValue" @input="bindClearInput" />
				<view class="uni-icon uni-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
			</view>
		</view>
		<button class="confirm" hover-class="btn-hover" :disabled="!showClearIcon" @tap="confirm">确定</button>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		computed: {
			...mapState(['userName'])
		},
		data() {
			return {
				showClearIcon: false,
				inputClearValue: "",
				isDisabled: false
			}
		},
		onLoad() {
			this.inputClearValue = this.userName;
			if (this.inputClearValue.length > 0) {
				this.showClearIcon = true;
			} else {
				this.showClearIcon = false;
			}
		},
		methods: {
			...mapMutations(['changeUserName']),
			bindClearInput: function (e) {
				this.inputClearValue = e.target.value;
				// e.target.value == '' ? isDisabled = true: isDisabled;
				if (e.target.value.length > 0) {
					this.showClearIcon = true;
				} else {
					this.showClearIcon = false;
				}
			},
			clearIcon: function () {
				this.inputClearValue = "";
				console.log(this.inputClearValue);
				this.showClearIcon = false;
			},
			confirm(){
				this.changeUserName(this.inputClearValue);
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	.content{padding-top: 10upx;}
	.user-name{line-height: 80upx;margin-left: 30upx;}
	.uni-icon-clear{color: #ccc;}
	.confirm{width: 690upx;height: 80upx;line-height: 80upx;margin-top: 28upx;font-size: 28upx;}
	.confirm,button[disabled]:not([type]){background-color: #89afd6;color: #fff;}
	.btn-hover{background-color: #5c8abf;}
	.confirm:after{border: none;}
</style>
