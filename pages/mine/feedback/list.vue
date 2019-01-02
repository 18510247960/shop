<template>
	<view class="content">
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index" @tap="go(item.url)">
				<view class="uni-list-cell-navigate uni-navigate-right">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" @tap="go('about')">
				<view class="uni-list-cell-navigate uni-navigate-right">
					关于我们
				</view>
			</view>
			<!-- <view class="uni-list-cell" hover-class="uni-list-cell-hover" @tap="go('')">
				<view class="uni-list-cell-navigate uni-navigate-right">
					用户隐私政策
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						name: "购买类",
						url: "details"
					},
					{
						name: "配送类",
						url: "details"
					},
					{
						name: "商品类",
						url: "details"
					},
					{
						name: "发票类",
						url: "details"
					},
					{
						name: "合作类",
						url: "details"
					},
					// #ifdef APP-PLUS 
					{
						name: "意见反馈",
						url: "feedback"
					},
					// #endif
				]
			}
		},
		onLoad() {
			
		},
		methods: {
			
			go(url) {
				uni.navigateTo({
					url: url
				})
			}	
		}
	}
</script>

<style>
	.uni-list{margin-bottom: 20upx;color: #5b5b5b;border-top: 1px solid #f0f0f0;}
	.uni-list:before,.uni-list:after{display: none;}
	.uni-list-cell:after{background-color: #f0f0f0;}
</style>
