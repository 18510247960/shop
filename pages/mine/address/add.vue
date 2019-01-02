<template>
	<view class="content">
		<form @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item uni-column">
				<view class="with-fun">
					<view class="label-title">联系人</view>
					<input id="linkman" class="uni-input" name="linkman" placeholder="用于取餐时对您的称呼" @input="input"/>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="with-fun">
					<view class="label-title">性别</view>
					<radio-group name="sex" class="radio-group">
						<label class="radio-label"><radio value="先生" class="radio" :checked="sexChecked" color="#94b7da"/>先生</label>
						<label class="radio-label"><radio value="女士" class="radio" :checked="!sexChecked" color="#94b7da"/>女士</label>
					</radio-group>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="with-fun">
					<view class="label-title">手机号码</view>
					<input id="phone" class="uni-input" name="phone" maxlength="11" placeholder="联系人电话" @input="input"/>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="with-fun">
					<view class="label-title">收货地址</view>
					<input id="address" class="uni-input" name="address" placeholder="请选择您的地址" @input="input"/>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="with-fun">
					<view class="label-title">门牌号</view>
					<input id="tower" class="uni-input" name="tower" placeholder="例: 5号楼203室" @input="input"/>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="with-fun">
					<view class="label-title">标签</view>
					<view class="tag-group">
						<view class="tab" :class="[activeIndex == index ? 'active' : '']" v-for="(item,index) in tag" :key="index"  @tap="tagChange(index)">{{item}}</view>
					</view>
				</view>
			</view>
			<checkbox-group  name="default" class="default-address">
				<label>
					<checkbox value="default" class="checkbox" color="#7ba6d1"/>设为默认地址
				</label>
			</checkbox-group>
			<button class="button save" hover-class="button-hover"  :disabled="isDisabled" formType="submit">保存</button>
		</form>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		computed: {
			...mapState(['gender'])
		},
		data() {
			return {
				sexChecked: true,
				tag: ['公司','家','学校'],
				activeIndex: -1,
				addressData: {
					linkman: "",
					phone: "",
					address:"",
					tower: ""
				},
				isDisabled: true
			}
		},
		onLoad() {
			this.gender == "男" ? this.sexChecked = true : this.sexChecked = false;
		},
		methods: {
			...mapMutations(['changeAddress']),
			tagChange(index) {
				this.activeIndex = index;
			},
			formSubmit(e) {
				var _this = this;
				var i = this.activeIndex;
				var d = e.detail.value;
				var thisTag;
				i == -1 ? thisTag = "" : thisTag = _this.tag[i];
				this.addressData = {
					linkman: d.linkman,
					sex: d.sex,
					phone: d.phone,
					address: d.address,
					addressType: thisTag,
					isDefault: d.default,
					tower: d.tower
				}
				this.changeAddress(this.addressData);
				uni.navigateBack();
			},
			input(e) {
				var id = e.currentTarget.id;
				var ad = this.addressData;
				var _this = this;
				for(var key in ad){
					key == id ? ad[key] = e.detail.value : ad[key];
					if(ad[key] !== ""){
						_this.isDisabled = false;
					}
					for(var k in ad){
						if(ad[k] == ""){
							_this.isDisabled = true
						}
					}
				}
			}
		}
	}
</script>

<style>
	.content{border-top: 1px solid #efefef;padding-bottom: 100upx;overflow: hidden;}
	.uni-form-item{padding: 0;padding-left: 28upx;background-color: #fff;}
	.uni-input{line-height: 90upx;padding: 20upx 28upx;}
	.with-fun{line-height: 90upx;border-bottom: 1px solid #efefef;}
	.label-title{width: 150upx;line-height: 90upx;}
	.radio-group{width: auto;padding-left: 28upx;}
	.radio{margin-right: 10upx;}
	.save{position: absolute;bottom: 20upx;left: 30upx;z-index: 111;}
	.tag-group{display: flex;color: #4a4a4a;padding: 20upx 28upx;}
	.tab{width: 120upx;height: 50upx;line-height: 50upx;text-align: center;border: 1px solid #e9e9e9;border-radius: 30upx;margin-right: 20upx;}
	.active{border: 1px solid #7ba6d1;background-color: #94b7da;color: #fff;}
	.default-address{line-height: 32upx;color: #4d4d4d;margin: 23upx 0 0 28upx;}
	.radio-label{margin-right: 100upx;line-height: 90upx;}
</style>
