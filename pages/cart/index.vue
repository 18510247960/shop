<template>
	<view class="content">
		<view class="nodata" v-if="order.length < 1">
			<image src="../../static/cart-nodata.png" class="nodata-img" mode="aspectFit"></image>
			<view class="state">您的购物车有点寂寞</view>
			<button class="nodata-btn" hover-class="btn-hover" @tap="goMenu">去喝一杯</button>
		</view>
		<scroll-view scroll-y class="scroll">
			<view class="cart-list" v-show="order.length > 0">
				<view class="cart-item" v-for="(item,index) in order" :key="index">
					<checkbox-group name="checkbox" class="cart-checkbox">
						<checkbox value="checkbox1" :checked="item.isChecked" />
					</checkbox-group>
					<view class="cart-info">
						<view class="cart-title">{{item.title}}</view>
						<view class="cart-type">{{item.type}}</view>
						<view class="cart-hint">仅限打包带走</view>
					</view>
					<view class="numbox">
						<view class="cart-price">￥{{item.price}}</view>
						<view class="numbox-minus uni-icon uni-icon-minus" @tap="minus(index)"></view>
						<view class="numbox-value">{{item.num}}</view>
						<view class="numbox-plus uni-icon uni-icon-plus-filled" @tap="plus(index)"></view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="cart-footer" v-show="order.length > 0">
			<view class="total-price-box">
				应付合计<text class="total-price">￥{{total}}</text>
			</view>
			<button class="clear button">去结算</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				order: [],
				num: 1,
				height: '100%'
			}
		},
		computed: {
			...mapState(['cartList','total'])
		},
		onLoad() {
			this.order = this.cartList;
			var h = uni.getSystemInfoSync().windowHeight - 100;
		},
		methods: {
			...mapMutations(['removeCart','calcTotal']),
			goMenu(){
				uni.switchTab({
					url: '/pages/menu/index'
				})
			},
			minus(i) {
				if(this.order[i].num >1){
					this.order[i].num -- ;
				}else{
					this.order[i].num = 1;
					var _this = this;
					uni.showModal({
						content: '确认不要了吗？',
						success: function (res) {
							if (res.confirm) {
								_this.removeCart(i)
							}
						}
					});
				}
				this.calcTotal(this.order)
			},
			plus(i) {
				this.order[i].num ++;
				this.calcTotal(this.order);
			}
		}
	}
</script>

<style>
	.content{text-align: center;border-top: 1px solid #f0f0f0;}
	.state{margin: 40upx 0 60upx 0;color: #999;}
	.nodata{padding-top: 200upx;}
	.nodata-img{width: 160upx;height: 144upx;}
	.nodata-btn{border: 1px solid #6999cb;width: 200upx;height: 66upx;color: #6999cb;line-height: 66upx;font-size: 28upx;background: #fff;box-shadow: 0px 2px 6px #999;}
	.btn-hover{background: #fff;}
	.scroll{padding-bottom: 100upx;}
	.cart-list{background-color: #fff;}
	.cart-item{display: flex;padding: 26upx 24upx 24upx 0;border-bottom: 1px solid #f0f0f0;}
	.cart-checkbox{width: 44upx;text-align: center;margin: 0 22upx 0 30upx;}
	.cart-checkbox .uni-checkbox-input{margin: 0;}
	.cart-info{flex-grow: 2;text-align: left;padding-left: 15upx;}
	.cart-title{font-weight: 700;font-size: 32upx;line-height: 32upx;margin-bottom: 14upx;}
	.cart-type,.cart-hint{font-size: 20upx;line-height: 20upx;}
	.cart-type{color: #666;margin-bottom: 8upx;}
	.cart-hint{color: #88afd6;}
	.cart-price{margin-right: 10upx;font-weight: 700;}
	.numbox{display: flex;}
	.numbox-minus,.numbox-plus{font-size: 56upx;}
	.numbox-minus{color: #91b5d9;background-color: #fff;}
	.numbox-value{margin: 0 16upx;color: #91b5d9;font-weight: 700;min-width: 20upx;}
	.numbox-plus{color: #fff;color: #91b5d9;}
	.cart-checkbox,.numbox-minus,.numbox-plus,.numbox-value,.cart-price{line-height: 100upx;}
	.cart-footer{display: flex;width: 100%;justify-content: space-between;height: 100upx;background-color: #fff;position: fixed;bottom: 0;left: 0;border-top: 1px solid #f0f0f0;}
	.total-price-box{flex-grow: 2;text-align: left;line-height: 100upx;padding-left: 20upx;}
	.total-price{font-size: 48upx;font-weight: 700;}
	.clear{width: 200upx;height: 100upx;line-height: 100upx;border-radius: 0;margin: 0;}
	/* #ifdef H5 */
	.cart-footer{bottom: 50px;}
	/* #endif */
</style>
