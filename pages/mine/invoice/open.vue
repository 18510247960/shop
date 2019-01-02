<template>
	<view class="content">
		<view class="tab">
			<view class="tab-li" :class="[activeIndex == index ? 'active' : '']" v-for="(t,index) in tab" :key="t" @tap="changeTab(index)">{{t}}</view>
		</view>
		<view class="state" v-if="list == ''">目前无可开票信息</view>
		<view class="list">
			<view class="list-cell" hover-class="list-hover" v-for="(item,index) in list" :key="index" @tap="go('open-info')">
				<view class="navigate-right">
					<view><text class="list-label">开票金额：</text>￥{{item.money}}</view>
					<view><text class="list-label">订单号：</text>{{item.orderID}}</view>
					<view><text class="list-label">下单时间：</text>{{item.orderTime}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tab: ['按订单开票','咖啡钱包购买开票'],
				activeIndex: 0,
				isActive: true,
				list: [],
				orderList: [
					{
						money: 6,
						orderID: 32275744044503,
						orderTime: '2018-12-20 16:17'
					}
				],
				walletList: [],
			}
			
		},
		onLoad() {
			this.list = this.orderList;
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: 'explain'
			})
		},
		methods: {
			changeTab(index) {
				this.activeIndex = index;
				if(index == 0){
					this.list = this.orderList;
				}else if(index == 1){
					this.list = this.walletList;
				}
			},
			go(url) {
				uni.navigateTo({
					url: url
				})
			},
		}
	}
</script>

<style>
	.tab{display: flex;text-align: center;background: #fff;border-top: 1px solid #f0f0f0;border-bottom: 1px solid #f0f0f0;color: #666;}
	.tab-li{flex-grow: 1;height: 100upx;line-height: 100upx;border-left: 1px solid #f0f0f0;width: 50%;}
	.tab-li:first-child{border: none;}
	.tab-li.active{color: #5c8abf;}
	.list{background-color: #fff;}
	.list-cell{padding: 20upx 30upx;position: relative;border-bottom: 1px solid #f0f0f0;}
	.list-label{display: inline-block;width: 140upx;}
	.navigate-right:after{font-family: uniicons;content: '\E583';position: absolute;right: 12px;top: 50%;color: #bbb;-webkit-transform: translateY(-50%);-ms-transform: translateY(-50%);transform: translateY(-50%);font-size: 42upx;}
	
</style>
