<template>
	<view class="content">
		<view class="tab-ul">
			<view class="pr tab">
				<view class="tab-li" :class="[activeIndex == index ? 'active' : '']" v-for="(item,index) in tabUl" :key="index" @tap="tabChange(index)">
					<text :id="item.id">{{item.name}}</text>
				</view>
				<view class="line" :style="{width: lineWidth,left: lineLeft}"></view>
			</view>
        </view>
		<view class="tab-content">
			<view class="nodata" v-show="order == ''">
				<image src="../../static/nodata.png" class="nodata-img" mode="aspectFit"></image>
				<view class="state">您还没有订单哦</view>
				<button class="nodata-btn" hover-class="btn-hover" @tap="goMenu">去喝一杯</button>
			</view>
			<!-- <view class="order-list" v-show="order !== ''">
				<view class="order-item">
					<view class="order-status">
						<text>外卖订单：54654646</text>
						<text>已完成</text>
					</view>
					
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabUl: [{
					name: "全部",
					id: "all"
				},{
					name: "未完成",
					id: "backlog"
				},{
					name: "已完成",
					id: "completed"
				}],
				order: "",
				allOrder: "",
				backlog: "",
				completed: "",
				activeIndex: 0,
				lineWidth: "56upx",
				lineLeft: "89upx"
			}
		},
		onLoad() {
			this.allOrder = this.order;
		},
		methods: {
			async tabChange(index) {
				this.activeIndex = index;
				if(index == 0){
					this.order = this.allOrder;
				}else if(index == 1){
					this.order = this.backlog;
				}else if(index == 2){
					this.order = this.completed;
				}
				var w = await this.getElSize(this.tabUl[index].id);
				this.lineLeft = w.left + "px";
				this.lineWidth = w.width + "px";
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true,
						rect: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			goMenu(){
				uni.switchTab({
					url: '/pages/menu/index'
				})
			},
		}
	}
</script>

<style>
	.content{height: 100%;text-align: center;}
	.tab{display: flex;}
	.tab-ul{width: 100%;height: 86upx;border-top: 2upx solid #e7e7e7;background-color: #fff;color: #444;position: fixed;top: 0;left: 0;}
	// #ifdef H5
	.tab-ul{top: 44px;}
	// #endif
	.line{width: 56upx;height: 6upx;background-color: #7da7d2;position: absolute;bottom: 0;left: 89upx;transition: .2s;}
	.tab-li{flex-grow: 1;line-height: 86upx;}
	.tab-li.active{color: #74a1cf;}
	.tab-content{height: 100%;padding-top: 86upx;box-sizing: border-box;}
	.state{margin: 108upx 0 88upx 0;color: #999;}
	.nodata{padding-top: 230upx;}
	.nodata-img{width: 160upx;height: 144upx;}
	.nodata-btn{border: 1px solid #6999cb;width: 250upx;height: 66upx;color: #6999cb;line-height: 66upx;font-size: 28upx;background: #fff;}
	.btn-hover{background: #fff;}
	.nodata-btn:after{border: none;}
</style>
