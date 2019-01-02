<template>
	<view class="content">
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index" @tap="go(item.url)">
				<view class="uni-list-cell-navigate uni-navigate-right">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						name: "开具发票",
						url: "open",
						iconName: "icon-mn_yonghuziliao_fill"
					},
					{
						name: "开具记录",
						url: "record",
						iconName: "icon-kafei"
					},
					{
						name: "发票抬头",
						url: "title",
						iconName: "icon-youhuiquan"
					}
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
