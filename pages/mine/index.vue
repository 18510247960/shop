<template>
	<view class="content">
		<view class="info">
			<view class="per" v-show="!hasLogin" @tap="go('/pages/login/login')">
				<view class="buddha" :style="{backgroundImage: 'url(../../static/noData.png)'}"></view>
				<view class="nickname">立即登录</view>
			</view>
			<view class="per" v-show="hasLogin" @tap="go('personal/list')">
				<view class="buddha" :style="{backgroundImage: 'url('+userHeadimg+')'}"></view>
				<view class="nickname">{{userName}}</view>
			</view>
			<view class="message iconfont icon-xiaoxi" v-show="!hasLogin" @tap="go('/pages/login/login')"></view>
			<view class="message iconfont icon-xiaoxi" v-show="hasLogin" @tap="go('message')"></view>
		</view>
		<view class="uni-list" v-show="!hasLogin" @tap="go('/pages/login/login')">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index">
				<view class="list-icon iconfont" :class="item.iconName"></view>
				<view class="uni-list-cell-navigate uni-navigate-right">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="uni-list" v-show="hasLogin">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index" @tap="go(item.url)">
				<view class="list-icon iconfont" :class="item.iconName"></view>
				<view class="uni-list-cell-navigate uni-navigate-right">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" @tap="go('feedback/list')">
				<view class="list-icon iconfont icon-yijianfankui"></view>
				<view class="uni-list-cell-navigate uni-navigate-right">
					帮助反馈
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import uniIcon from "@/components/uni-icon.vue"
	export default {
		components: {
			uniIcon
		},
		computed: mapState(['hasLogin','userHeadimg','userName']),
		data() {
			return {
				list: [
					{
						name: "个人资料",
						url: "personal/list",
						iconName: "icon-mn_yonghuziliao_fill"
					},
					{
						name: "咖啡钱包",
						url: "wallet/index",
						iconName: "icon-kafei"
					},
					{
						name: "优惠券",
						url: "coupon/index",
						iconName: "icon-youhuiquan"
					},
					{
						name: "兑换优惠",
						url: "cash/index",
						iconName: "icon-youhuiquan1"
					},
					{
						name: "发票管理",
						url: "invoice/index",
						iconName: "icon-fapiaosel"
					}
				]
			}
		},
		onLoad() {
			var info = uni.getStorageSync('info');
			if(info){
				 this.login();
				 this.changeUserName(info.userName);
			}
		},
		methods: {
			...mapMutations(['login','changeUserName']),
			go(url) {
				uni.navigateTo({
					url: url
				})
			},
			t() {
				this.login()
			}
		}
	}
</script>

<style>
	.uni-list{margin-bottom: 20upx;color: #5b5b5b;}
	.uni-list:before,.uni-list:after{display: none;}
	.uni-list-cell:after{background-color: #f0f0f0;left: 96upx;}
	.uni-list-cell-navigate{padding: 22upx 30upx 22upx 0;}
	.info{background: #663333;height: 260upx;overflow: hidden;;color: #fff;}
	.per{padding: 0 38upx;position: relative;display: flex;margin-top: 100upx;}
	.buddha{width: 106upx;height: 106upx;border-radius: 50%;background-size: cover;background-position: center;}
	.num{font-size: 34upx;font-weight: 700;line-height: 30upx;}
	.nickname{margin-left: 20upx;font-size: 36upx;line-height: 106upx;}
	.nickname:after{font-family: uniicons;content: '\e470';position: absolute;right: 29upx;top: 50%;color: #bbb;-webkit-transform: translateY(-50%);-ms-transform: translateY(-50%);transform: translateY(-50%);font-size: 54upx;}
	.message{position: absolute;top: 36upx;right: 36upx;font-size: 44upx;}
	.list-icon{color: #cbcbcb;margin-right: 10upx;width: 87upx;text-align: center;}
</style>
