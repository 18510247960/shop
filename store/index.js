import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userHeadimg: "/static/logo.png",
		userName: "",
		gender: "男",
		addressList: [],
		cartList: [],
		total: 0
	},
	mutations: {
		login(state) {
			state.hasLogin = true;
		},
		logout(state) {
			state.hasLogin = false;
		},
		changeHeadimg(state,newUrl){
			state.userHeadimg = newUrl;
		},
		changeUserName(state,newName){
			state.userName = newName;
		},
		changeGender(state,gender){
			state.gender = gender;
		},
		changeAddress(state,newAddress){
			state.addressList.push(newAddress)
		},
		editAddress(state,obj){
			state.addressList[obj.num] = obj.d;
		},
		removeAddress(state,i){
			state.addressList.splice(i,1)
		},
		addCart(state,newCart){
			for(var i = 0; i<state.cartList.length; i++){
				console.log(state.cartList[i].id,newCart.id)
				if(state.cartList[i].id == newCart.id){
					state.cartList[i].num = state.cartList[i].num + newCart.num;
				}else{
					state.cartList.push(newCart)
				}
			}
		},
		removeCart(state,i){
			state.cartList.splice(i,1)
		},
		calcTotal(state,cartList){
			state.total = cartList[0].price;
			var t = 0;
			for(var i = 0; i< cartList.length; i++){
				t += cartList[i].num * cartList[i].price;
			}
			state.total = t;
		}
	}
})

export default store
