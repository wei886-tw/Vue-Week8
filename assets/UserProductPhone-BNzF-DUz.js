import{P,N as x}from"./NavBar-B0Kn1OEF.js";import{P as w}from"./PageNation-DeAidPBQ.js";import{_ as k,l,j as t,i as r,F as h,v as p,k as u,e as d,g as y,y as c,z as g,q as C,s as $}from"./index-DYY1owia.js";const N={components:{PageFooter:P,NavBar:x,PageNation:w},data(){return{userProducts:[],api:"https://vue3-course-api.hexschool.io",api_path:"wei123",myModal:null,tempProduct:{},pagination:{},filterProducts:[],category:"",qty:""}},methods:{changeQty(){this.qty=parseInt(event.target.value)},addToCart(o){this.qty!=""?this.$http.post(`${this.api}/v2/api/${this.api_path}/cart`,{data:{product_id:o,qty:this.qty}}).then(()=>{alert("成功加入購物車")}).catch(n=>{console.log(n.response.data.message)}):this.$http.post(`${this.api}/v2/api/${this.api_path}/cart`,{data:{product_id:o,qty:1}}).then(()=>{alert("成功加入購物車")}).catch(n=>{console.log(n.response.data.message)})},changeProductType(){this.category=this.$refs.type.value,this.category!="所有產品"?this.$http.get(`${this.api}/v2/api/${this.api_path}/products?category=${this.category}`).then(o=>{this.userProducts=o.data.products,this.pagination=o.data.pagination,this.userProducts=this.userProducts.filter(n=>n.category===this.category),alert(`顯示所有${this.category}產品`)}).catch(o=>{console.log(o.response.data.message)}):this.getProducts(1)},getPhoneProducts(){this.$http.get(`${this.api}/v2/api/${this.api_path}/products?category=手機`).then(o=>{this.userProducts=o.data.products,this.pagination=o.data.pagination,window.scrollTo(0,0)})},getProducts(o){this.$http.get(`${this.api}/api/${this.api_path}/products?page=${o}`).then(n=>{this.userProducts=n.data.products,this.pagination=n.data.pagination,window.scrollTo(0,0)}).catch(n=>{console.log(n.response.data.message)})},openModal(){this.myModal.show()}},mounted(){this.getPhoneProducts()}},s=o=>(C("data-v-df364210"),o=o(),$(),o),T={class:"container-fluid px-0"},j={class:"container-fluid py-48 mx-auto"},q={class:"container pt-32 mx-auto"},I={class:"row mx-auto"},B={class:"col-10 mx-auto"},F=s(()=>t("div",{class:"container d-flex justify-content-between"},null,-1)),Q={class:"table d-none d-md-block"},S=s(()=>t("th",null,[t("p",{class:"fs-24 fs-lg-40"},"所有產品")],-1)),M=s(()=>t("th",null,null,-1)),U=s(()=>t("option",{value:"所有產品"},"所有產品",-1)),V=s(()=>t("option",{value:"平板"},"平板",-1)),z=s(()=>t("option",{value:"手機",selected:""},"手機",-1)),D=s(()=>t("option",{value:"筆電"},"筆電",-1)),E=[U,V,z,D],L={class:"pt-32",style:{width:"20%"}},A=["src"],G={class:"pt-32",style:{width:"70%"}},H={class:"mb-16 fs-16 fs-md-24 text-dark"},J={class:"d-none d-md-block",style:{color:"#8e8e8e"}},K={class:"pt-32 fs-lg-24 fw-bold text-danger"},O=s(()=>t("p",{class:""},"特價：",-1)),R={class:"mb-16"},W=["value"],X=["onClick"],Y=s(()=>t("i",{class:"bi bi-cart-fill"},null,-1)),Z=s(()=>t("button",{class:"btn btn-footer hover",style:{width:"100%"}},[t("i",{class:"bi bi-heart-fill"}),g("  加入追蹤 ")],-1)),tt={class:"container d-md-none d-flex justify-content-between"},et=s(()=>t("p",{class:"fs-24"},"全部商品",-1)),st={name:"",class:"btn btn-footer",ref:"select",style:{width:"30%"}},ot=s(()=>t("option",{value:"所有產品"},"所有產品",-1)),nt=s(()=>t("option",{value:"平板"},"平板",-1)),at=s(()=>t("option",{value:"手機"},"手機",-1)),it=s(()=>t("option",{value:"筆電"},"筆電",-1)),ct=[ot,nt,at,it],lt=s(()=>t("hr",null,null,-1)),dt=["onClick"],rt={class:"mb-24 py-16 px-16"},ht=["src"],_t={class:"d-flex flex-column justify-content-between px-32"},pt={class:"mb-16 text-dark"},ut={class:"mb-16 text-danger fw-bold"},gt={class:"mb-16",style:{color:"#8e8e8e"}},ft={class:"container d-flex justify-content-between px-0 mb-16"},yt=["value"],bt=["onClick"],mt=s(()=>t("i",{class:"bi bi-cart-fill"},null,-1)),vt=["onClick"],Pt=s(()=>t("i",{class:"bi bi-heart-fill"},null,-1)),xt={class:"container pt-32"},wt={class:"container-fluid px-0"};function kt(o,n,Ct,$t,_,i){const b=u("NavBar"),f=u("router-link"),m=u("PageNation"),v=u("PageFooter");return d(),l(h,null,[t("div",T,[r(b)]),t("div",j,[t("div",q,[t("div",I,[t("div",B,[F,t("table",Q,[t("thead",null,[t("tr",null,[S,M,t("th",null,[t("select",{name:"",id:"",class:"rounded border-2 btn btn-footer",style:{width:"132px",height:"48px"},ref:"type",onChange:n[0]||(n[0]=(...e)=>i.changeProductType&&i.changeProductType(...e))},E,544)])])]),t("tbody",null,[(d(!0),l(h,null,p(_.userProducts,e=>(d(),l("tr",{key:e.id},[t("td",L,[t("img",{src:e.imageUrl,alt:"商品圖片",style:{height:"240px",width:"240px","object-fit":"cover"},class:"mb-16"},null,8,A)]),t("td",G,[r(f,{to:`/userProductInfo/${e.id}`},{default:y(()=>[t("h5",H," 產品名稱："+c(e.title),1)]),_:2},1032,["to"]),t("p",J," 產品描述："+c(e.description),1)]),t("td",K,[O,t("p",R,c(e.price),1),t("select",{class:"rounded border-2 mb-16",name:"num",style:{width:"100%"},ref_for:!0,ref:"qty",onChange:n[1]||(n[1]=(...a)=>i.changeQty&&i.changeQty(...a))},[(d(),l(h,null,p(10,a=>t("option",{value:a,key:a},c(a),9,W)),64))],544),t("button",{class:"btn btn-footer hover mb-16 color",style:{width:"100%"},onClick:a=>i.addToCart(e.id)},[Y,g(" 加入購物車 ")],8,X),Z])]))),128))])]),t("div",tt,[et,t("select",st,ct,512),lt]),(d(!0),l(h,null,p(_.userProducts,e=>(d(),l("div",{class:"d-md-none d-flex justify-content-between",key:e.id,onClick:a=>_.tempProduct=e},[t("div",rt,[t("img",{src:e.imageUrl,alt:"商品圖片",style:{height:"280px",width:"280px","object-fit":"cover"},class:"mb-16"},null,8,ht),t("div",_t,[r(f,{to:`/userProductInfo/${e.id}`,target:"_blank"},{default:y(()=>[t("h5",pt,"產品名稱："+c(e.title),1)]),_:2},1032,["to"]),t("p",ut," 特價："+c(e.price)+" 元 ",1),t("p",gt,c(e.description),1),t("div",ft,[t("select",{class:"btn btn-footer fs-14",style:{width:"45%"},ref_for:!0,ref:"qty",onChange:n[2]||(n[2]=(...a)=>i.changeQty&&i.changeQty(...a))},[(d(),l(h,null,p(10,a=>t("option",{value:a,key:a},c(a),9,yt)),64))],544),t("button",{class:"btn btn-footer fs-14 hover",style:{width:"45%"},onClick:a=>i.addToCart(e.id)},[mt,g(" 加入購物車 ")],8,bt)]),t("button",{class:"btn btn-footer fs-14 hover",style:{width:"100%"},onClick:a=>i.addToCart(e.id)},[Pt,g(" 加入追蹤 ")],8,vt)])])],8,dt))),128))])])]),t("div",xt,[r(m,{class:"d-flex justify-content-center",pagination:_.pagination,"get-page-products":i.getProducts},null,8,["pagination","get-page-products"])])]),t("div",wt,[r(v)])],64)}const qt=k(N,[["render",kt],["__scopeId","data-v-df364210"]]);export{qt as default};
