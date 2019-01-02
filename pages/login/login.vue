<template>
	<view class="content" :style="{height: height}">
		<image src="../../static/logo.png" class="logo"></image>
		<form @submit="formSubmit" @reset="formReset">
			<view class="input-box">
				<input id="phone" placeholder="手机号" class="input" maxlength="11" @input="verify"/>
			</view>
			<view class="input-box">
				<input id="password" password placeholder="请输入密码" class="input code-input" @input="verify"/>
			</view>
			<button class="button enter" hover-class="button-hover" :disabled="isDisabled" formType="submit"> 确定 </button>
		</form>
	</view>
</template>

<script>
	import { mapState,mapMutations } from 'vuex'
	export default {
		data() {
			return {
				height: "100%",
				isDisabled: true,
				mynote: {
					phone: "",
					password: ""
				}
			}
		},
		onLoad() {
			this.height = uni.getSystemInfoSync().screenHeight-67 +"px";
		},
		methods: {
			...mapMutations(['login','changeUserName']),
			go(url) {
				uni.navigateTo({
					url: url
				})
			},
			login1() {
				this.login()
				uni.switchTab({
					url: '../mine/index'
				});
			},
			formSubmit(e) {
				if(this.mynote.phone == "admin" && this.mynote.password == 123456){
					this.login();
					this.changeUserName(this.mynote.phone);
					uni.setStorageSync('info',{userName: this.mynote.phone,password: this.mynote.password});
					uni.switchTab({
						url: '../mine/index'
					});
				}else{
					uni.showToast({
						title: "您输入的账号或者密码不正确",
						icon: 'none'
					})
				}
			},
			verify(e) {
				var id = e.currentTarget.id;
				var ad = this.mynote;
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
	.content{padding: 80upx 80upx 0 80upx;text-align: center;background-color: #fff;box-sizing: border-box;}
	.logo{width: 180upx;height: 180upx;margin-bottom: 60upx;}
	.input-box{height: 94upx;background: #fff;border-bottom: 1px solid #f0f0f0;margin-bottom: 50upx;text-align: left;}
	.input{width: 100%;height: 94upx;font-size: 30upx;float: left;line-height: 94upx;}
	.code{float: left;border-left: 1px solid #bebebe;line-height: 34upx;padding-left: 30upx;margin-top: 30upx;}
	.code-hover{color: #999;}
	.code-input{width: 600upx;}
	.enter{width: 100%;margin-top: 80upx;}
	.member{padding-top: 120upx;color: #28518c;}
	.line{color: #d9d9d9;margin: 0 30upx;}
	.button-hover{opacity: 0.6;}
	.navigator{display: inline-block;}
</style>
