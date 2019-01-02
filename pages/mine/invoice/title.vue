<template>
	<view class="content">
		<view class="state" v-show="addressList.length == 0">您还没有发票抬头</view>
		<view class="address-item" v-show="addressList.length !== 0" v-for="(item,index) in addressList" :key="index">
			<view class="address-title">{{item.address}}</view>
			<view class="address-footer">
				<view v-if="item.addressType !== ''" class="addressType">{{item.addressType}}</view>
				<text class="phone">{{item.phone}}</text>
				<text>{{item.linkman}}{{item.sex}}</text>
			</view>
			<view class="uni-icon uni-icon-compose" @tap="go('edit?data='+index)"></view>
		</view>
		<button class="add-address" hover-class="btn-hover" @tap="go('title-add')">
			<view class="uni-icon uni-icon-plusempty"></view>
			添加发票抬头
		</button>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		computed: {
			...mapState(['addressList'])
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			// console.log(this.addressList)
		},
		methods: {
			go(url) {
				uni.navigateTo({
					url: url
				})
			},
		}
	}
</script>

<style>
	.state{padding-top: 30%;color: #999;text-align: center;}
	.uni-icon-plusempty{line-height: 80upx;vertical-align: top;font-size: 44upx;}
	.add-address{width: 690upx;height: 80upx;line-height: 80upx;margin-top: 28upx;font-size: 28upx;background-color: #89afd6;color: #fff;position: fixed;bottom: 20upx;left: 30upx;}
	.btn-hover{background-color: #5c8abf;}
	.add-address:after{border: none;}
	.address-item{background-color: #fff;padding: 20upx 84upx 20upx 30upx;border-top: 1px solid #ececec;position: relative;}
	.address-title{line-height: 40upx;margin-bottom: 14upx;}
	.address-footer{display: flex;color: #999;font-size: 24upx;line-height: 32upx;}
	.addressType{font-size: 24upx;border: 1px solid #74a1ce;color: #74a1ce;border-radius: 8upx;line-height: 32upx;height: 32upx;padding: 0 8upx;margin-right: 14upx;}
	.phone{margin-right: 20upx;}
	.uni-icon-compose{color: #d7d7d7;font-size: 64upx;position: absolute;top: 50%;right: 34upx;transform: translateY(-50%);}
</style>
