<template>
	<view class="content">
		<view class="uni-form-item uni-column">
			<view class="with-fun">
				<view class="form-label">兑换码</view>
				<input class="uni-input" placeholder="请输入兑换码"  @input="input" />
			</view>
		</view>
		<button class="confirm" hover-class="btn-hover" :disabled="idDisabled" @tap="confirm">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				idDisabled: true
			}
		},
		onLoad() {
			
		},
		methods: {
			confirm(){
				uni.showToast({
					title: "活动码不存在",
					icon: "none"
				})
			},
			input(e) {
				if(e.detail.value !== ""){
					this.idDisabled = false;
				}else{
					this.idDisabled = true;
				}
			}
		}
	}
</script>

<style>
	.content{padding-top: 10upx;}
	.form-label{line-height: 80upx;margin-left: 30upx;}
	.confirm{width: 690upx;height: 80upx;line-height: 80upx;margin-top: 28upx;font-size: 28upx;background-color: #5c8abf;color: #fff;}
	button[disabled]:not([type]){background-color: #89afd6;color: #fff;}
	.confirm:after{border: none;}
	.btn-hover{opacity: 0.9;}
</style>
