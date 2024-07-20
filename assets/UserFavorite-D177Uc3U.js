import{N as x,P as S,c as h}from"./NavBar-CdGkvlnQ.js";import{f as _}from"./favoriteStore-CV3pP9Y3.js";import{_ as L,t as f,u,l as a,j as t,i as c,F as p,x as F,A as m,e as i,g as $,v,q as T,s as B,k as l}from"./index-Du-7DLFy.js";const N={props:["finalTotal"],data(){return{api_path:"wei123",url:"https://vue3-course-api.hexschool.io",selectValue:"",cartProducts:[],cartList:{},final_total:"",form:{user:{name:"",email:"",tel:"",address:""},message:"",qty:0},couponModal:"",onSale:!1,favoriteProducts:[]}},computed:{...f(_,["favoriteList"]),...f(h,["cartStore"])},components:{NavBar:x,PageFooter:S},methods:{...u(_,["getFavoriteList","setStorage"]),...u(h,["getCartList"]),backToShop(){this.$router.push("/userProduct")},loadingCircle(){let s=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!0,onCancel:this.onCancel});setTimeout(()=>{s.hide()},500)},getProduct(s){return this.$http.get(`${this.url}/v2/api/${this.api_path}/product/${s}`).then(e=>{if(this.favoriteProducts.indexOf(e.data.product)===-1)return e.data.product}).catch(e=>{console.log(e.response.data.message)})},async fetchFavoriteProducts(){try{const s=await Promise.all(this.favoriteList.map(e=>this.getProduct(e)));this.favoriteProducts=s.filter(Boolean)}catch(s){console.log(s.response.data.message)}},addToCart(s,e){this.$http.post(`${this.url}/v2/api/${this.api_path}/cart`,{data:{product_id:s,qty:1}}).then(()=>{alert("加入購物車成功"),this.favoriteProducts.splice(this.favoriteProducts[e],1),this.favoriteList.splice(this.favoriteList[e],1),this.setStorage(),this.getCartList()}).catch(d=>{console.log(d.response.data.message)})},removeFavorite(s){this.favoriteList.splice(this.favoriteList.indexOf(s),1),this.setStorage(),alert("已移除收藏"),this.getFavoriteList(),window.scroll(0,0)}},mounted(){this.loadingCircle(),this.getFavoriteList(),this.fetchFavoriteProducts(),window.scroll(0,0)}},n=s=>(T("data-v-d2e3dcab"),s=s(),B(),s),I={class:"container-fluid px-0"},V={class:"container-fluid px-0",style:{"min-height":"100vh"}},q={class:"container"},j=n(()=>t("h2",{class:"text-center py-60 pb-16 fs-24 fs-lg-32"},"收藏列表",-1)),A={class:"container px-0"},O={key:0,class:"table table-responsive"},U=n(()=>t("thead",null,[t("tr",null,[t("th",{class:"fs-12 fs-md-24",style:{width:"10%"}},"X"),t("th",{class:"fs-12 fs-md-24",style:{width:"35%"}},"品名"),t("th",{class:"fs-12 fs-md-24 rwd"},"圖片"),t("th",{class:"fs-12 fs-md-24",style:{width:"20%"}},"價格"),t("th",{class:"fs-12 fs-md-24",style:{width:"25%"}},"加入購物車")])],-1)),D={class:"align-middle px-0"},E=["onClick"],M=n(()=>t("i",{class:"bi bi-trash3-fill fs-md-24"},null,-1)),X=[M],z={class:"fs-12 fs-sm-16 fs-md-24 align-middle"},G={class:"align-middle"},H=["src"],J={class:"align-middle fs-12 fs-sm-16 fs-md-24"},K={class:"align-middle"},Q=["onClick"],R={key:1,class:"text-center fs-24"},W=n(()=>t("br",null,null,-1)),Y={class:"container-fluid px-0"},Z={class:"container-fluid"};function tt(s,e,d,st,g,r){const b=l("NavBar"),P=l("router-link"),w=l("PageFooter"),y=l("router-view");return i(),a(p,null,[t("div",I,[c(b)]),t("div",V,[t("div",q,[j,t("div",A,[s.favoriteList.length!==0?(i(),a("table",O,[U,t("tbody",null,[(i(!0),a(p,null,F(g.favoriteProducts,(o,k)=>(i(),a("tr",{key:o.id},[t("td",D,[t("button",{class:"btn btn-white",onClick:C=>r.removeFavorite(o.id)},X,8,E)]),t("td",z,[c(P,{class:"text-dark",style:{"text-decoration":"underline"},to:`/userProductInfo/${o.id}`},{default:$(()=>[m(v(o.title),1)]),_:2},1032,["to"])]),t("td",G,[t("img",{alt:"產品圖片",class:"rwd",src:o.imageUrl,style:{"object-fit":"cover"}},null,8,H)]),t("td",J,v(o.price),1),t("td",K,[t("button",{class:"btn btn-footer",onClick:C=>r.addToCart(o.id,k)}," 加入購物車 ",8,Q)])]))),128))])])):(i(),a("h2",R,[m(" 您的收藏列表沒有東西喔，請先加入商品！"),W,t("button",{class:"btn btn-gray mt-32",onClick:e[0]||(e[0]=(...o)=>r.backToShop&&r.backToShop(...o))}," 返回商品頁面 ")]))])])]),t("div",Y,[c(w)]),t("div",Z,[c(y)])],64)}const it=L(N,[["render",tt],["__scopeId","data-v-d2e3dcab"]]);export{it as default};
//# sourceMappingURL=UserFavorite-D177Uc3U.js.map
