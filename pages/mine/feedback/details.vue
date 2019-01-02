<template>
	<view class="content">
		<view class="problem" v-for="(item,index) in problem" :key="index">
			<view class="problem-title">Q{{index+1}}、{{item.title}}</view>
			<view class="problem-text">{{item.text}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				problem:[
					{
						title: "什么是咖啡库",
						text: "咖啡库是提前预存在app内的咖啡福利，在您下单结算时自动抵扣相应饮品，可通过赠送或买赠优惠活动获得。"
					}
				]
			}
		},
		onLoad() {
			
		},
		methods:{
			
		}
	}
</script>

<style>
	.content{padding: 30upx;}
	.problem{margin-bottom: 30upx;}
	.problem-title{font-size: 34upx;color: #333;}
	.problem-text{font-size: 28upx;color: #666;}
</style>
