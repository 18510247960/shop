<template>
	<view class="message-list">
		<view class="message-item" v-for="(item,index) in message" :key="index">
			<view class="message-header">
				<view class="message-title">{{item.title}}</view>
				<view class="message-time">{{item.time}}</view>
			</view>
			<view class="message-text">{{item.text}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message: [
					{
						title: "送你一杯咖啡",
						time: "2018-12-26 11:10",
						text: "您送出的免费咖啡，好友已成功领取品尝！"
					},
					{
						title: "您的咖啡已在赴约途中",
						time: "2018-12-20 11:10",
						text: "您的咖啡已在赴约途中，预计16：50与您见面。"
					}
				]
			};
		}
	}
</script>

<style>
	.message-list{background-color: #fff;margin-top: 10upx;}
	.message-item{padding: 30upx;border-bottom: 1px solid #f0f0f0;}
	.message-header{display: flex;justify-content: space-between;margin-bottom: 20upx;}
	.message-title{line-height: 28upx;font-size: 28upx;}
	.message-time,.message-text{color: #999;font-size: 24upx;line-height: 28upx;}
	.message-text{color: #999;}

</style>
