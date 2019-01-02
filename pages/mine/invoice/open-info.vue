<template>
	<view class="content">
		<form @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item uni-column">
				<view class="with-fun">
					<view class="label-title">发票类型</view>
					<view class="form-right">电子发票</view>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="with-fun">
					<view class="label-title">发票金额</view>
					<view class="form-right">￥6</view>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="with-fun">
					<view class="label-title">开票方式</view>
					<radio-group name="openType" class="radio-group">
						<label class="radio-label"><radio value="type" class="radio" checked color="#94b7da"/>商品类别</label>
						<label class="radio-label"><radio value="detail" class="radio" color="#94b7da"/>商品明细</label>
					</radio-group>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="with-fun">
					<view class="label-title">发票抬头</view>
					<radio-group name="titleType" class="radio-group">
						<label class="radio-label"><radio value="1" class="radio" checked color="#94b7da"/>个人</label>
						<label class="radio-label"><radio value="2" class="radio" color="#94b7da"/>单位</label>
					</radio-group>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="with-fun">
					<view class="label-title">邮箱地址</view>
					<input class="uni-input" name="email" placeholder="请输入邮箱地址" @input="input"/>
				</view>
			</view>
			<view class="tips">
				<view>温馨提示：</view>
				<view>
					应国家税务总局要求，您若开具增值税普通发票，须同时提供企业抬头及纳税人识别号，否则发票将无法用于企业报销
				</view>
			</view>
			<button class="button save" hover-class="button-hover"  :disabled="isDisabled" formType="submit">提交申请</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isDisabled: true
			}
		},
		onLoad() {
			
		},
		methods: {
			formSubmit(e) {
				console.log(e.detail.value)
			},
			input(e) {
				if(e.detail.value == ''){
					this.isDisabled = true;
				}else{
					this.isDisabled = false;
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
	.tips{color: #999;font-size: 18upx;padding: 30upx;}
	.form-right{line-height: 90upx;padding-left: 28upx;}
</style>
