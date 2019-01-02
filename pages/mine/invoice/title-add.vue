<template>
	<view class="content">
		<form @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item uni-column" v-for="(item,index) in list" :key="index">
				<view class="with-fun">
					<view class="label-title">{{item.label}}</view>
					<input :id="item.id" class="uni-input" :placeholder="item.plac" @input="input"/>
				</view>
			</view>
			<checkbox-group  name="default" class="default">
				<label>
					<checkbox value="default" class="checkbox" color="#7ba6d1"/>设为默认抬头发票
				</label>
			</checkbox-group>
			<button class="button save" hover-class="button-hover"  :disabled="isDisabled" formType="submit">保存</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isDisabled: true,
				list: [
					{
						id: "companyName",
						label: "发票抬头",
						plac: "请输入公司名称"
					},
					{
						id: "tfn",
						label: "纳税人识别号",
						plac: "(选填)"
					},
					{
						id: "email",
						label: "电子邮箱",
						plac: "(必填)"
					},
					{
						id: "regurl",
						label: "注册地址",
						plac: "(选填)"
					},
					{
						id: "regphone",
						label: "注册电话",
						plac: "(选填)"
					},
					{
						id: "bankName",
						label: "开户银行",
						plac: "(选填)"
					},
					{
						id: "bankAccount",
						label: "银行账号",
						plac: "(选填)"
					},
				],
				required: {
					companyName: "",
					email: ""
				}
			}
		},
		onLoad() {
			
		},
		methods: {
			formSubmit(e) {
				console.log(e.detail.value)
			},
			input(e) {
				var id = e.currentTarget.id;
				var ad = this.required;
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
	.uni-form-item:nth-child(2) .label-title{font-size: 24upx;}
	.uni-input{line-height: 90upx;padding: 20upx 28upx;}
	.with-fun{line-height: 90upx;border-bottom: 1px solid #efefef;}
	.label-title{width: 150upx;line-height: 90upx;}
	.radio-group{width: auto;padding-left: 28upx;}
	.radio{margin-right: 10upx;}
	.save{position: absolute;bottom: 20upx;left: 30upx;z-index: 111;}
	.default{line-height: 32upx;color: #4d4d4d;margin: 23upx 0 0 28upx;}
	.radio-label{margin-right: 100upx;line-height: 90upx;}
</style>
