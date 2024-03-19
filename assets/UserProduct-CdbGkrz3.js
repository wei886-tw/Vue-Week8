import{P as m}from"./PageFooter-DTCqW81V.js";import{A as u}from"./NavBar-DHIraSfg.js";import{_ as f,c as o,b as r,a as t,F as n,e as v,o as a,t as c,f as g,r as d}from"./index-_i-aAT-g.js";const x={data(){return{userProducts:[],api:"https://vue3-course-api.hexschool.io",api_path:"wei123"}},components:{PageFooter:m,NavBar:u},methods:{getProducts(){this.$http.get(`${this.api}/api/${this.api_path}/products/all`).then(s=>{this.userProducts=s.data.products})},addToCart(s){this.$http.post(`${this.api}/v2/api/${this.api_path}/cart`,{data:{product_id:s,qty:1}}).then(()=>{alert("成功加入購物車")}).catch(i=>{console.log(i)})}},mounted(){this.getProducts()}},y={class:"container-fluid py-48 bg-footer"},b={class:"container"},P={class:"row"},$={class:"card mb-24",style:{width:"18rem",height:"36rem"}},k=["src"],w={class:"card-body d-flex flex-column justify-content-between"},B={class:"card-title"},C={class:"card-text"},F={class:"card-text"},j=["onClick"],N={class:"container-fluid px-0"};function A(s,i,T,U,l,h){const _=d("nav-bar"),p=d("PageFooter");return a(),o(n,null,[r(_),t("div",y,[t("div",b,[t("div",P,[(a(!0),o(n,null,v(l.userProducts,e=>(a(),o("div",{class:"col-12 col-md-6 col-lg-4 d-flex justify-content-center",key:e.id},[t("div",$,[t("img",{src:e.imageUrl,class:"card-img-top",alt:"商品圖片",style:{height:"24rem","object-fit":"cover"}},null,8,k),t("div",w,[t("h5",B,"產品名稱："+c(e.title),1),t("p",C,"產品描述："+c(e.description),1),t("p",F,"產品特價："+c(e.price),1),t("a",{href:"#",class:"btn btn-outline-primary d-flex justify-content-center",onClick:g(V=>h.addToCart(e.id),["prevent"])},"加入購物車",8,j)])])]))),128))])])]),t("div",N,[r(p)])],64)}const L=f(x,[["render",A]]);export{L as default};
