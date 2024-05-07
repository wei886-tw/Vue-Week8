import{P}from"./PageFooter-Bf35z97v.js";import{N as $}from"./NavBar-Gs0nM2OC.js";import{P as x}from"./PageNation-Du7F9fmv.js";import{_ as h,o as c,c as d,a as e,m as I,t as k,b as a,F as p,f as y,r,w as F,g as m}from"./index-DtRc9h0J.js";const C={data(){return{allItem:[],filterItem:[],api:"https://vue3-course-api.hexschool.io",api_path:"wei123"}},methods:{filter(s){s==="所有產品"?this.filterItem=this.allItem.map(t=>t):this.filterItem=this.allItem.filter(t=>t.category===s),this.$emit("emitFilterItem",this.filterItem)},getAllProducts(){this.$http.get(`${this.api}/api/${this.api_path}/products/all`).then(s=>{this.allItem=s.data.products}).catch(s=>{alert(s.response.message)})}},mounted(){this.getAllProducts()}},w={class:"container"},N={class:"d-flex justify-content-center"};function j(s,t,u,_,l,o){return c(),d("div",w,[e("div",N,[e("div",I({class:"btn-group mb-32"},k(o.filter,!0)),[e("a",{href:"#",class:"btn btn-secondary active btn-lg","aria-current":"page",onClick:t[0]||(t[0]=i=>o.filter("所有產品"))},"所有產品"),e("a",{href:"#",class:"btn btn-footer btn-lg",onClick:t[1]||(t[1]=i=>o.filter("筆電"))},"筆電"),e("a",{href:"#",class:"btn btn-footer btn-lg",onClick:t[2]||(t[2]=i=>o.filter("手機"))},"手機"),e("a",{href:"#",class:"btn btn-footer btn-lg",onClick:t[3]||(t[3]=i=>o.filter("平板"))},"平板")],16)])])}const B=h(C,[["render",j]]),E={components:{PageFooter:P,NavBar:$,PageNation:x,FilterComponents:B},data(){return{userProducts:[],api:"https://vue3-course-api.hexschool.io",api_path:"wei123",myModal:null,tempProduct:{},pagination:{},filterItem:[]}},methods:{getFilterItem(s){this.userProducts=s},getProducts(s){this.$http.get(`${this.api}/api/${this.api_path}/products?page=${s}`).then(t=>{this.userProducts=t.data.products,this.pagination=t.data.pagination})},addToCart(s){this.$http.post(`${this.api}/v2/api/${this.api_path}/cart`,{data:{product_id:s,qty:1}}).then(()=>{alert("成功加入購物車")}).catch(t=>{console.log(t)})},openModal(){this.myModal.show()}},mounted(){this.getProducts()}},M={class:"container-fluid py-48"},A={class:"container pt-60"},U={class:"row"},V=["onClick"],q={class:"mb-24 py-16 px-16"},D=["src"],H={class:"d-flex flex-column justify-content-between px-32"},L={class:"mb-16 text-dark"},S={class:"mb-16 text-dark"},T={class:"container pt-32"},z={class:"container-fluid px-0"};function G(s,t,u,_,l,o){const i=r("nav-bar"),f=r("filter-components"),g=r("router-link"),v=r("PageNation"),b=r("PageFooter");return c(),d(p,null,[a(i),e("div",M,[e("div",A,[a(f,{onEmitFilterItem:o.getFilterItem},null,8,["onEmitFilterItem"]),e("div",U,[(c(!0),d(p,null,y(l.userProducts,n=>(c(),d("div",{class:"col-12 col-md-6 col-lg-4 d-flex justify-content-between",key:n.id,onClick:J=>l.tempProduct=n},[e("div",q,[a(g,{to:`/userProductInfo/${n.id}`},{default:F(()=>[e("img",{src:n.imageUrl,alt:"商品圖片",style:{height:"360px",width:"100%","object-fit":"cover"},class:"mb-16"},null,8,D),e("div",H,[e("h5",L,"產品名稱："+m(n.title),1),e("p",S,"特價："+m(n.price)+" 元",1)])]),_:2},1032,["to"])])],8,V))),128))])]),e("div",T,[a(v,{class:"d-flex justify-content-center",pagination:l.pagination,"get-page-products":o.getProducts},null,8,["pagination","get-page-products"])])]),e("div",z,[a(b)])],64)}const W=h(E,[["render",G]]);export{W as default};
