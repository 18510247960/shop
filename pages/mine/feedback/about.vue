<template>
	<view class="about">
		<view class="content">
			<view class="qrcode">
				<image src="../../../static/logo.png"></image>
				<text style="margin-top:20px;">正量网</text>
			</view>
		</view>
		<view class="version">
			当前版本：{{version}}
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				providerList:[],
				version:'v1.0'
			}
		},
		onLoad() {
			
		},
		methods:{
			
		}
	}
</script>

<style>
	page,
	view {
		display: flex;
	}

	page {
		min-height: 100%;
		background-color: #FFFFFF;
	}
	image{
		width: 200upx;
		height: 200upx;
		margin-top: 100upx;
	}
	.about{
		flex-direction: column;
		flex: 1;
	}
	.content{
		flex: 1;
		flex-direction: column;
		justify-content: top;
	}
	.qrcode{
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.version{
		height: 80upx;
		line-height: 80upx;
		justify-content: center;
		color: #ccc;
	}
</style>
