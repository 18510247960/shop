<template>
	<view>
		<view class="uni-mask" v-show="show" :style="{top:offsetTop + 'px'}" @tap="hide"></view>
		<view :class="['uni-popup','uni-popup-'+type]" v-show="show">
			<view class="popup-item" :class="index == 0? 'popup-item-first' : ''" v-for="(item,index) in msg" :key="index" @tap="go(item.url)">{{item.name}}</view>
			<view class="popup-cancel" @tap="hide">取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			},
			type: {
				type: String,
				//top - 顶部， middle - 居中, bottom - 底部
				default: 'middle'
			},
			msg: {
				default: ""
			}
		},
		data() {
			let offsetTop = 0;
			//#ifdef H5
			offsetTop = 44;
			//#endif
			return {
				offsetTop: offsetTop
			}
		},
		methods: {
			hide: function() {
				this.$emit('hidePopup');
			},
			go(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>
<style>
	.uni-mask {
		position: fixed;
		z-index: 998;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .3);
	}

	.uni-popup {
		position: fixed;
		z-index: 999;
		background-color: #f4f5f6;
		box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
	}

	.uni-popup-middle {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 380upx;
		height: 380upx;
		border-radius: 10upx;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		justify-content: center;
		padding: 30upx;
	}

	.uni-popup-top {
		top: 0;
		left: 0;
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		text-align: center;
	}

	.uni-popup-bottom {
		left: 0;
		bottom: 0;
		width: 100%;
		text-align: center;
	}
	.popup-item{line-height: 100upx;background-color: #fff;border-top: 1px solid #e6e6e6;font-size: 32upx;}
	.popup-item-first{border: none;}
	.popup-cancel{margin-top: 20upx;line-height: 100upx;background-color: #fff;font-size: 32upx;}
</style>
