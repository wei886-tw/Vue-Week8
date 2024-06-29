import{N as x,P as k,c as d}from"./NavBar-zNKNe7w4.js";import{f as h}from"./favoriteStore-C2jVm0ZX.js";import{_ as C,t as f,u as _,l as a,j as t,i as c,F as u,v as S,A as p,e as i,g as F,y as m,q as L,s as $,k as n}from"./index-CL1xOGZE.js";const T={props:["finalTotal"],data(){return{api_path:"wei123",url:"https://vue3-course-api.hexschool.io",selectValue:"",cartProducts:[],cartList:{},final_total:"",form:{user:{name:"",email:"",tel:"",address:""},message:"",qty:0},couponModal:"",onSale:!1,favoriteProducts:[]}},computed:{...f(h,["favoriteList"]),...f(d,["cartStore"])},components:{NavBar:x,PageFooter:k},methods:{..._(h,["getFavoriteList","setStorage"]),..._(d,["getCartList"]),backToShop(){this.$router.push("/userProduct")},loadingCircle(){let s=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!0,onCancel:this.onCancel});setTimeout(()=>{s.hide()},500)},getProduct(s){return this.$http.get(`${this.url}/v2/api/${this.api_path}/product/${s}`).then(e=>{if(this.favoriteProducts.indexOf(e.data.product)===-1)return e.data.product}).catch(e=>{console.log(e.response.data.message)})},async fetchFavoriteProducts(){try{const s=await Promise.all(this.favoriteList.map(e=>this.getProduct(e)));this.favoriteProducts=s.filter(Boolean)}catch(s){console.log(s.response.data.message)}},addToCart(s){this.$http.post(`${this.url}/v2/api/${this.api_path}/cart`,{data:{product_id:s,qty:1}}).then(()=>{alert("加入購物車成功"),this.favoriteProducts.splice(this.favoriteProducts.indexOf(s),1),this.favoriteList.splice(this.favoriteList.indexOf(s),1),this.setStorage(),this.getCartList()}).catch(e=>{console.log(e.response.data.message)})},removeFavorite(s){this.favoriteList.splice(this.favoriteList.indexOf(s),1),this.setStorage(),this.$router.go("/userFavorite"),window.scroll(0,0)}},mounted(){this.loadingCircle(),this.getFavoriteList(),this.fetchFavoriteProducts(),window.scroll(0,0)}},l=s=>(L("data-v-ec4d5a87"),s=s(),$(),s),B={class:"container-fluid px-0"},N={class:"container-fluid px-0",style:{"min-height":"100vh"}},I={class:"container"},O=l(()=>t("h2",{class:"text-center py-60 pb-16 fs-24 fs-lg-32"},"收藏列表",-1)),V={class:"container px-0"},q={key:0,class:"table table-responsive"},j=l(()=>t("thead",null,[t("tr",null,[t("th",{class:"fs-12 fs-md-24",style:{width:"10%"}},"X"),t("th",{class:"fs-12 fs-md-24",style:{width:"35%"}},"品名"),t("th",{class:"fs-12 fs-md-24 rwd"},"圖片"),t("th",{class:"fs-12 fs-md-24",style:{width:"20%"}},"價格"),t("th",{class:"fs-12 fs-md-24",style:{width:"25%"}},"加入購物車")])],-1)),A={class:"align-middle px-0"},U=["onClick"],D=l(()=>t("i",{class:"bi bi-trash3-fill fs-md-24"},null,-1)),E=[D],M={class:"fs-12 fs-sm-16 fs-md-24 align-middle"},X={class:"align-middle"},z=["src"],G={class:"align-middle fs-12 fs-sm-16 fs-md-24"},H={class:"align-middle"},J=["onClick"],K={key:1,class:"text-center fs-24"},Q=l(()=>t("br",null,null,-1)),R={class:"container-fluid px-0"},W={class:"container-fluid"};function Y(s,e,Z,tt,v,r){const g=n("NavBar"),b=n("router-link"),y=n("PageFooter"),P=n("router-view");return i(),a(u,null,[t("div",B,[c(g)]),t("div",N,[t("div",I,[O,t("div",V,[s.favoriteList.length!==0?(i(),a("table",q,[j,t("tbody",null,[(i(!0),a(u,null,S(v.favoriteProducts,o=>(i(),a("tr",{key:o.id},[t("td",A,[t("button",{class:"btn btn-white",onClick:w=>r.removeFavorite(o.id)},E,8,U)]),t("td",M,[c(b,{class:"text-dark",style:{"text-decoration":"underline"},to:`/userProductInfo/${o.id}`},{default:F(()=>[p(m(o.title),1)]),_:2},1032,["to"])]),t("td",X,[t("img",{alt:"產品圖片",class:"rwd",src:o.imageUrl,style:{"object-fit":"cover"}},null,8,z)]),t("td",G,m(o.price),1),t("td",H,[t("button",{class:"btn btn-footer",onClick:w=>r.addToCart(o.id)}," 加入購物車 ",8,J)])]))),128))])])):(i(),a("h2",K,[p(" 您的收藏列表沒有東西喔，請先加入商品！"),Q,t("button",{class:"btn btn-gray mt-32",onClick:e[0]||(e[0]=(...o)=>r.backToShop&&r.backToShop(...o))}," 返回商品頁面 ")]))])])]),t("div",R,[c(y)]),t("div",W,[c(P)])],64)}const at=C(T,[["render",Y],["__scopeId","data-v-ec4d5a87"]]);export{at as default};
//# sourceMappingURL=UserFavorite-DVLO9to5.js.map