import{N as v}from"./NavBar-CUr7E4n9.js";import{P as b}from"./PageFooter-kT9upyOK.js";import{_ as y,c as a,a as t,b as r,F as m,h as x,t as h,e as k,i as C,o as n,j as P,v as w,p as $,f as N,r as _}from"./index-Dkh5B9Ci.js";const S={props:["finalTotal"],data(){return{api_path:"wei123",url:"https://vue3-course-api.hexschool.io",selectValue:"",cartProducts:[],cartList:{},final_total:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{NavBar:v,PageFooter:b},methods:{getCartProducts(){this.$http.get(`${this.url}/v2/api/${this.api_path}/cart`).then(s=>{this.cartProducts=s.data.data.carts,this.cartList=s.data.data}).catch(s=>{console.log(s.response.data.message)})},reviseQty(s,o){this.$http.post(`${this.url}/v2/api/${this.api_path}/cart`,{data:{product_id:s,qty:o}}).then(()=>{alert("修改購物車成功"),this.getCartProducts()}).catch(u=>{console.log(u.response.data.message)})},delCartItem(s){this.$http.delete(`${this.url}/v2/api/${this.api_path}/cart/${s}`).then(()=>{alert("已經刪除"),this.getCartProducts()}).cath(o=>{console.log(o.message)})},enterPayment(){this.$router.push("/userOrder"),window.scrollTo(0,0),this.$emit("emit-cart-list",this.cartList)},backToShop(){this.$router.push("/userProduct")}},mounted(){this.getCartProducts()}},i=s=>($("data-v-7a2d5663"),s=s(),N(),s),T={class:"container-fluid px-0"},V={class:"container-fluid px-0",style:{"min-height":"100vh"}},B={class:"container py-48"},I=i(()=>t("h2",{class:"text-center py-60 fs-24 fs-lg-32"},"購物車列表",-1)),F={class:"container px-0"},L={key:0,class:"table table-responsive"},U=i(()=>t("thead",null,[t("tr",null,[t("th",{class:"fs-md-24"},"品名"),t("th",{class:"fs-md-24"},"圖片"),t("th",{class:"fs-md-24"},"數量"),t("th",{class:"fs-md-24"},"價格")])],-1)),j={class:"fs-12 fs-sm-16 fs-md-24 align-middle"},q={class:"align-middle"},M=["src"],Q={class:"align-middle"},D=["onClick"],E=["onClick"],O=i(()=>t("i",{class:"bi bi-trash text-center"},null,-1)),z=[O],A=["onUpdate:modelValue"],G=["onClick"],H={class:"fs-12 fs-sm-16 fs-md-24 align-middle"},J=i(()=>t("td",null,null,-1)),K=i(()=>t("td",null,null,-1)),R=i(()=>t("td",null,null,-1)),W={class:"fs-md-16 fs-lg-24 pt-32"},X={class:"container d-lg-flex justify-content-between"},Y={key:1,class:"text-center fs-24"},Z=i(()=>t("br",null,null,-1)),tt={class:"container d-flex px-0 justify-content-end"},et={class:"container-fluid px-0"},st={class:"container-fluid"};function ot(s,o,u,at,c,l){const p=_("NavBar"),f=_("PageFooter"),g=_("router-view");return n(),a(m,null,[t("div",T,[r(p)]),t("div",V,[t("div",B,[I,t("div",F,[c.cartProducts.length!==0?(n(),a("table",L,[U,t("tbody",null,[(n(!0),a(m,null,x(c.cartProducts,e=>(n(),a("tr",{key:e.id},[t("td",j,h(e.product.title),1),t("td",q,[t("img",{src:e.product.imageUrl,alt:"產品圖片",class:"rwd"},null,8,M)]),t("td",Q,[e.qty>=2?(n(),a("button",{key:0,class:"btn d-flex d-md-inline",onClick:d=>l.reviseQty(e.product.id,-1)}," - ",8,D)):(n(),a("button",{key:1,class:"rounded btn d-flex d-md-inline",style:{width:"35px",height:"38px"},onClick:d=>l.delCartItem(e.id)},z,8,E)),P(t("input",{type:"number",class:"border border-gray border-1 rounded me-4 d-flex d-md-inline",style:{height:"36px"},"onUpdate:modelValue":d=>e.qty=d},null,8,A),[[w,e.qty]]),t("button",{class:"btn d-flex d-md-inline",onClick:d=>l.reviseQty(e.product.id,1)}," + ",8,G)]),t("td",H,h(Math.floor(e.final_total)),1)]))),128))]),t("tfoot",null,[J,K,R,t("td",W,[t("div",X,[t("p",null,"總價: $"+h(Math.floor(c.cartList.final_total)),1)])])])])):(n(),a("h2",Y,[k(" 您的購物車沒有東西喔，請先加入商品！"),Z,t("button",{class:"btn btn-gray mt-32",onClick:o[0]||(o[0]=(...e)=>l.backToShop&&l.backToShop(...e))}," 返回商品頁面 ")])),t("div",tt,[c.cartProducts.length!==0?(n(),a("button",{key:0,type:"button",class:"btn w-50 mb-60 btn-footer",onClick:o[1]||(o[1]=(...e)=>l.enterPayment&&l.enterPayment(...e))}," 進入付款頁面 ")):C("",!0)])])])]),t("div",et,[r(f)]),t("div",st,[r(g)])],64)}const ct=y(S,[["render",ot],["__scopeId","data-v-7a2d5663"]]);export{ct as default};
