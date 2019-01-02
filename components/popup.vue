<template>
	<view>
		<view class="mask" v-show="show" @tap="hide"></view>
		<view class="popup" v-show="show">
			<view class="popup-header">
				<view class="uni-icon uni-icon-close popup-close" @click="hide"></view>
				<view class="popup-title">{{t.title}}</view>
				<view class="popup-en">{{t.en}}</view>
			</view>
			<view class="popup-middle">
				<view class="sort" v-for="(item,index) in t.kind" :key="index">
					<view class="sort-label">{{item.name}}</view>
					<view class="sort-select" :class="[item.selected == i ? 'active' : '']" v-for="(t,i) in item.type" :key="i" @tap="changeTab(index,i,item)">{{t}}</view>
				</view>
				<view class="describe">
					<view class="describe-title">商品描述</view>
					<view class="describe-text">
						圣诞特别限定新品，香醇拿铁融合姜饼、香蕉风味，顶部轻盈奶油和牛奶巧克力碎奇妙相遇，甜蜜暖心。
					</view>
				</view>
			</view>
			<view class="popup-footer">
				<view class="popup-price">
					<view>
						<view class="text-main">￥{{t.price}}</view>
						<view class="text-small">{{t.title}}￥{{t.price}}+单糖￥0</view>
					</view>
					<view class="numbox">
						<view class="numbox-minus uni-icon uni-icon-minus" @tap="minus"></view>
						<view class="numbox-value">{{num}}</view>
						<view class="numbox-plus uni-icon uni-icon-plus-filled" @tap="plus1"></view>
					</view>
				</view>
				<view class="btn-group">
					<button class="btn first-btn">充2赠一，充五赠五</button>
					<button class="btn two-btn">收藏口味</button>
					<button class="btn three-btn" @tap="addTocart">加入购物车</button>
				</view>
			</view>
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
			popupData: {
				default: ""
			}
		},
		
		data() {
			return {
				num: 1,
				isActive: 0,
				specification: ['大'],
				temperature: ['冰','热'],
				cream: ['默认奶油','无奶油'],
				t: []
			}
		},
		created() {
			this.t = this.popupData;
		},
		methods: {
			hide() {
				this.$emit('hidePopup');
			},
			addTocart() {
				this.$emit('addTocart',this.t);
			},
			minus() {
				if(this.num > 1){
					this.num --;
				}else{
					this.num = 1;
				}
			},
			plus1() {
				this.num ++;
				console.log(this.num)
			},
			changeTab(index,i,item) {
				this.t.kind[index].selected = i;
			}
		}
	}
</script>
<style>
	.mask {position: fixed;z-index: 99;top: 0;right: 0;bottom: 0;left: 0;background-color: rgba(0, 0, 0, .3);}
	.popup {position: fixed;z-index: 999;background-color: #fff;box-shadow: 0 0 30upx rgba(0, 0, 0, .1);display: flex;flex-direction: column;
align-items: center;width: 690upx;height: 920upx;border-radius: 10upx;top: 50%;left: 50%;transform: translate(-50%, -50%);box-sizing: border-box;overflow: hidden;}
	.popup-header,.popup-middle,.popup-footer{width: 100%;}
	.popup-header{height: 288upx;position: relative;background: url(https://s2.luckincoffeecdn.com/luckywebrm/images/index/cooperation/part5_picture2.png) center;}
	.popup-title,.popup-en{color: #fff;margin-left: 20upx;vertical-align: bottom;}
	.popup-title{font-size: 34upx;line-height: 54upx;margin-top: 190upx;}
	.popup-en{font-size: 20upx;line-height: 20upx;}
	.popup-close{color: #fff;font-size: 56upx;position: absolute;top: 20upx;right: 20upx;}
	.popup-middle{height: 400upx;box-sizing: border-box;padding: 10upx 30upx 0;overflow: auto;}
	.popup-footer{height: 232upx;border-top: 1px solid #f1f1f1;}
	.popup-price{display: flex;justify-content: space-between;padding: 32upx 28upx 24upx 38upx;height: 120upx;box-sizing: border-box;border-bottom: 1px solid #f1f1f1;}
	.text-main{font-size: 32upx;line-height: 32upx;color: #222;margin-bottom: 15upx;}
	.text-small{font-size: 20upx;color: #333;line-height: 20upx;}
	.numbox{display: flex;}
	.numbox-minus,.numbox-plus{font-size: 56upx;line-height: 68upx;}
	.numbox-minus{color: #91b5d9;background-color: #fff;}
	.numbox-value{line-height: 68upx;margin: 0 16upx;color: #91b5d9;font-weight: 700;min-width: 20upx;}
	.numbox-plus{color: #fff;color: #91b5d9;}
	.btn-group{display: flex;justify-content: flex-end;margin-top: 26upx;}
	.btn{height: 60upx;line-height: 58upx;padding: 0;margin: 0;font-size: 24upx;text-align: center;color: #fff;border-radius: 0;margin-right: 14upx;}
	.first-btn{width: 206upx;border: 1px solid #dc5a00;background-color: #e06e11;}
	.two-btn{width: 170upx;border: 1px solid #6c9ccd;background-color: #f3f3f3;color: #73a1cf;}
	.three-btn{width: 180upx;border: 1px solid #6c9ccd;background-color: #7ca7d2;}
	.btn:after{border: none;}
	.sort{display: flex;margin-top: 30upx;}
	.sort-label{width: 120upx;line-height: 52upx;}
	.sort-select{width: 120upx;height: 50upx;text-align: center;border-radius: 30upx;border: 1px solid #e3dbd3;color: #e3dbd3;font-size: 24upx;line-height: 50upx;margin-right: 15upx;}
	.sort-select.active{background-color: #e3dbd3;color: #fff;font-weight: 400;}
	.describe{border-top: 1px solid #f1f1f1;margin-top: 30upx;padding: 30upx 0 10upx;}
	.describe-title{margin-bottom: 10upx;}
	.describe-text{color: #666;font-size: 24upx;}
</style>
