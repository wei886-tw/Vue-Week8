import{P as x}from"./PageFooter-BMSCVopH.js";import{N as P}from"./NavBar-xnXw3f95.js";import{P as w}from"./PageNation-ClEcnESE.js";import{_ as k,c as l,b as r,a as t,F as h,f as p,r as u,o as d,w as y,t as c,g as f,p as C,e as N}from"./index-5odNNkip.js";const $={components:{PageFooter:x,NavBar:P,PageNation:w},data(){return{userProducts:[],api:"https://vue3-course-api.hexschool.io",api_path:"wei123",myModal:null,tempProduct:{},pagination:{},filterProducts:[],category:"",qty:""}},methods:{changeQty(){this.qty=parseInt(event.target.value)},addToCart(o){this.qty!=""?this.$http.post(`${this.api}/v2/api/${this.api_path}/cart`,{data:{product_id:o,qty:this.qty}}).then(()=>{alert("成功加入購物車")}).catch(a=>{console.log(a.response.data.message)}):this.$http.post(`${this.api}/v2/api/${this.api_path}/cart`,{data:{product_id:o,qty:1}}).then(()=>{alert("成功加入購物車")}).catch(a=>{console.log(a.response.data.message)})},changeProductType(){this.category=this.$refs.type.value,this.category!="所有產品"?this.$http.get(`${this.api}/v2/api/${this.api_path}/products?category=${this.category}`).then(o=>{this.userProducts=o.data.products,this.pagination=o.data.pagination,this.userProducts=this.userProducts.filter(a=>a.category===this.category)}).catch(o=>{console.log(o.response.data.message)}):this.getProducts(1)},getProducts(){this.$http.get(`${this.api}/v2/api/${this.api_path}/products?category=筆電`).then(o=>{this.userProducts=o.data.products,this.pagination=o.data.pagination})},openModal(){this.myModal.show()}},mounted(){this.getProducts()}},s=o=>(C("data-v-83306463"),o=o(),N(),o),j={class:"container-fluid py-48 mx-auto"},q={class:"container pt-32 mx-auto"},T={class:"row mx-auto"},I={class:"col-10 mx-auto"},B=s(()=>t("div",{class:"container d-flex justify-content-between"},null,-1)),F={class:"table d-none d-md-block"},Q=s(()=>t("th",null,[t("p",{class:"fs-24 fs-lg-40"},"所有產品")],-1)),S=s(()=>t("th",null,null,-1)),M=s(()=>t("option",{value:"所有產品"},"所有產品",-1)),U=s(()=>t("option",{value:"平板"},"平板",-1)),V=s(()=>t("option",{value:"手機"},"手機",-1)),D=s(()=>t("option",{value:"筆電",selected:""},"筆電",-1)),E=[M,U,V,D],L={class:"pt-32",style:{width:"20%"}},z=["src"],A={class:"pt-32",style:{width:"70%"}},G={class:"mb-16 fs-16 fs-md-24 text-dark"},H={class:"d-none d-md-block",style:{color:"#8e8e8e"}},J={class:"pt-32 fs-lg-24 fw-bold text-danger"},K=s(()=>t("p",{class:""},"特價：",-1)),O={class:"mb-16"},R=["value"],W=["onClick"],X=s(()=>t("i",{class:"bi bi-cart-fill"},null,-1)),Y=s(()=>t("button",{class:"btn btn-footer hover",style:{width:"100%"}},[t("i",{class:"bi bi-heart-fill"}),f("  加入追蹤 ")],-1)),Z={class:"container d-md-none d-flex justify-content-between"},tt=s(()=>t("p",{class:"fs-24"},"全部商品",-1)),et={name:"",class:"btn btn-footer",ref:"select",style:{width:"30%"}},st=s(()=>t("option",{value:"所有產品"},"所有產品",-1)),ot=s(()=>t("option",{value:"平板"},"平板",-1)),nt=s(()=>t("option",{value:"手機"},"手機",-1)),at=s(()=>t("option",{value:"筆電"},"筆電",-1)),it=[st,ot,nt,at],ct=s(()=>t("hr",null,null,-1)),lt=["onClick"],dt={class:"mb-24 py-16 px-16"},rt=["src"],ht={class:"d-flex flex-column justify-content-between px-32"},_t={class:"mb-16 text-dark"},pt={class:"mb-16 text-danger fw-bold"},ut={class:"mb-16",style:{color:"#8e8e8e"}},ft={class:"container d-flex justify-content-between px-0 mb-16"},gt=["value"],yt=["onClick"],bt=s(()=>t("i",{class:"bi bi-cart-fill"},null,-1)),mt=["onClick"],vt=s(()=>t("i",{class:"bi bi-heart-fill"},null,-1)),xt={class:"container pt-32"},Pt={class:"container-fluid px-0"};function wt(o,a,kt,Ct,_,i){const b=u("NavBar"),g=u("router-link"),m=u("PageNation"),v=u("PageFooter");return d(),l(h,null,[r(b),t("div",j,[t("div",q,[t("div",T,[t("div",I,[B,t("table",F,[t("thead",null,[t("tr",null,[Q,S,t("th",null,[t("select",{name:"",id:"",class:"rounded border-2 btn btn-footer",style:{width:"132px",height:"48px"},ref:"type",onChange:a[0]||(a[0]=(...e)=>i.changeProductType&&i.changeProductType(...e))},E,544)])])]),t("tbody",null,[(d(!0),l(h,null,p(_.userProducts,e=>(d(),l("tr",{key:e.id},[t("td",L,[t("img",{src:e.imageUrl,alt:"商品圖片",style:{height:"240px",width:"240px","object-fit":"cover"},class:"mb-16"},null,8,z)]),t("td",A,[r(g,{to:`/userProductInfo/${e.id}`},{default:y(()=>[t("h5",G," 產品名稱："+c(e.title),1)]),_:2},1032,["to"]),t("p",H," 產品描述："+c(e.description),1)]),t("td",J,[K,t("p",O,c(e.price),1),t("select",{class:"rounded border-2 mb-16",name:"num",style:{width:"100%"},ref_for:!0,ref:"qty",onChange:a[1]||(a[1]=(...n)=>i.changeQty&&i.changeQty(...n))},[(d(),l(h,null,p(10,n=>t("option",{value:n,key:n},c(n),9,R)),64))],544),t("button",{class:"btn btn-footer hover mb-16 color",style:{width:"100%"},onClick:n=>i.addToCart(e.id)},[X,f(" 加入購物車 ")],8,W),Y])]))),128))])]),t("div",Z,[tt,t("select",et,it,512),ct]),(d(!0),l(h,null,p(_.userProducts,e=>(d(),l("div",{class:"d-md-none d-flex justify-content-between",key:e.id,onClick:n=>_.tempProduct=e},[t("div",dt,[t("img",{src:e.imageUrl,alt:"商品圖片",style:{height:"280px",width:"280px","object-fit":"cover"},class:"mb-16"},null,8,rt),t("div",ht,[r(g,{to:`/userProductInfo/${e.id}`,target:"_blank"},{default:y(()=>[t("h5",_t,"產品名稱："+c(e.title),1)]),_:2},1032,["to"]),t("p",pt," 特價："+c(e.price)+" 元 ",1),t("p",ut,c(e.description),1),t("div",ft,[t("select",{class:"btn btn-footer fs-14",style:{width:"45%"},ref_for:!0,ref:"qty",onChange:a[2]||(a[2]=(...n)=>i.changeQty&&i.changeQty(...n))},[(d(),l(h,null,p(10,n=>t("option",{value:n,key:n},c(n),9,gt)),64))],544),t("button",{class:"btn btn-footer fs-14 hover",style:{width:"45%"},onClick:n=>i.addToCart(e.id)},[bt,f(" 加入購物車 ")],8,yt)]),t("button",{class:"btn btn-footer fs-14 hover",style:{width:"100%"},onClick:n=>i.addToCart(e.id)},[vt,f(" 加入追蹤 ")],8,mt)])])],8,lt))),128))])])]),t("div",xt,[r(m,{class:"d-flex justify-content-center",pagination:_.pagination,"get-page-products":i.getProducts},null,8,["pagination","get-page-products"])])]),t("div",Pt,[r(v)])],64)}const Tt=k($,[["render",wt],["__scopeId","data-v-83306463"]]);export{Tt as default};
