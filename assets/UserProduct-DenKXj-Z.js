import{P as w}from"./PageFooter-BpEMEKNX.js";import{N as k}from"./NavBar-BTzUxTZI.js";import{P as C}from"./PageNation-D6IA9748.js";import{g as $,h as T,_ as A,m as I,i as S,c as r,a as t,b as h,F as _,j as p,r as u,o as d,w as m,t as c,e as g,p as N,f as j}from"./index-BYQ_fF55.js";var V={VITE_API:"https://vue3-course-api.hexschool.io",VITE_PATH:"wei123",BASE_URL:"/Vue-Week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:q,VITE_PATH:E}=V,b=$("productStore",{state:()=>({storeAllProducts:[],storPagination:{},storeCategory:""}),actions:{getAllProducts(e){const s=`${q}/api/${E}/products?page=${e}`;return T.get(s).then(l=>{this.storeAllProducts=l.data.products,this.storePagination=l.data.pagination}).catch(l=>{console.log(l.response.data.message)})},changeProductType(){console.log(123),this.storeCategory!="所有產品"?this.$http.get(`${this.api}/v2/api/${this.api_path}/products?category=${this.storeCategory}`).then(e=>{this.storeAllProducts=e.data.products,this.storePagination=e.data.pagination,this.storeAllProducts=this.storeAllProducts.filter(s=>s.category===this.category)}).catch(e=>{console.log(e.response.data.message)}):this.getProducts(1)}},getters:{storeSortedProducts:({storeAllProducts:e})=>e.sort((s,l)=>s.price-l.price)}}),B={components:{PageFooter:w,NavBar:k,PageNation:C},data(){return{userProducts:[],api:"https://vue3-course-api.hexschool.io",api_path:"wei123",myModal:null,tempProduct:{},pagination:{},filterProducts:[],category:"",qty:""}},computed:{...I(b,["storeAllProducts","storeSortedProducts"])},methods:{...S(b,["getAllProducts","changeProductType"]),changeQty(){this.qty=parseInt(event.target.value)},addToCart(e){this.qty!=""?this.$http.post(`${this.api}/v2/api/${this.api_path}/cart`,{data:{product_id:e,qty:this.qty}}).then(()=>{alert("成功加入購物車")}).catch(s=>{console.log(s.response.data.message)}):this.$http.post(`${this.api}/v2/api/${this.api_path}/cart`,{data:{product_id:e,qty:1}}).then(()=>{alert("成功加入購物車")}).catch(s=>{console.log(s.response.data.message)})},changeProductType(){this.category=this.$refs.type.value,this.category!="所有產品"?this.$http.get(`${this.api}/v2/api/${this.api_path}/products?category=${this.category}`).then(e=>{this.userProducts=e.data.products,this.pagination=e.data.pagination,this.userProducts=this.userProducts.filter(s=>s.category===this.category)}).catch(e=>{console.log(e.response.data.message)}):this.getProducts(1)},getProducts(e){this.$http.get(`${this.api}/api/${this.api_path}/products?page=${e}`).then(s=>{this.userProducts=s.data.products,this.pagination=s.data.pagination,window.scrollTo(0,0)}).catch(s=>{console.log(s.response.data.message)})},openModal(){this.myModal.show()}},mounted(){this.getProducts()}},a=e=>(N("data-v-2b0c110f"),e=e(),j(),e),F={class:"container-fluid px-0"},Q={class:"container-fluid py-48 mx-auto"},D={class:"container pt-32 mx-auto"},M={class:"row mx-auto"},U={class:"col-10 mx-auto"},R=a(()=>t("div",{class:"container d-flex justify-content-between"},null,-1)),H={class:"table d-none d-md-block"},L=a(()=>t("th",null,[t("p",{class:"fs-24 fs-lg-40"},"所有產品")],-1)),O=a(()=>t("th",null,null,-1)),W=a(()=>t("option",{value:"所有產品"},"所有產品",-1)),z=a(()=>t("option",{value:"平板"},"平板",-1)),G=a(()=>t("option",{value:"手機"},"手機",-1)),J=a(()=>t("option",{value:"筆電"},"筆電",-1)),K=[W,z,G,J],X={class:"pt-32",style:{width:"20%"}},Y=["src"],Z={class:"pt-32",style:{width:"70%"}},tt={class:"mb-16 fs-16 fs-md-24 text-dark"},et={class:"d-none d-md-block",style:{color:"#8e8e8e"}},st={class:"pt-32 fs-lg-24 fw-bold text-danger"},ot=a(()=>t("p",{class:""},"特價：",-1)),at={class:"mb-16"},nt=["value"],it=["onClick"],ct=a(()=>t("i",{class:"bi bi-cart-fill"},null,-1)),lt=a(()=>t("button",{class:"btn btn-footer hover",style:{width:"100%"}},[t("i",{class:"bi bi-heart-fill"}),g("  加入追蹤 ")],-1)),rt={class:"container d-md-none d-flex justify-content-between"},dt=a(()=>t("p",{class:"fs-24"},"全部商品",-1)),ht={name:"",class:"btn btn-footer",ref:"select",style:{width:"30%"}},_t=a(()=>t("option",{value:"所有產品"},"所有產品",-1)),pt=a(()=>t("option",{value:"平板"},"平板",-1)),ut=a(()=>t("option",{value:"手機"},"手機",-1)),gt=a(()=>t("option",{value:"筆電"},"筆電",-1)),ft=[_t,pt,ut,gt],yt=a(()=>t("hr",null,null,-1)),mt=["onClick"],bt={class:"mb-24 py-16 px-16"},vt=["src"],Pt={class:"d-flex flex-column justify-content-between px-32"},xt={class:"mb-16 text-dark"},wt={class:"mb-16 text-danger fw-bold"},kt={class:"mb-16",style:{color:"#8e8e8e"}},Ct={class:"container d-flex justify-content-between px-0 mb-16"},$t=["value"],Tt=["onClick"],At=a(()=>t("i",{class:"bi bi-cart-fill"},null,-1)),It=["onClick"],St=a(()=>t("i",{class:"bi bi-heart-fill"},null,-1)),Nt={class:"container pt-32"},jt={class:"container-fluid px-0"};function Vt(e,s,l,qt,f,i){const v=u("NavBar"),y=u("router-link"),P=u("PageNation"),x=u("PageFooter");return d(),r(_,null,[t("div",F,[h(v)]),t("div",Q,[t("div",D,[t("div",M,[t("div",U,[R,t("table",H,[t("thead",null,[t("tr",null,[L,O,t("th",null,[t("select",{name:"",id:"",class:"rounded border-2 btn btn-footer",style:{width:"132px",height:"48px"},ref:"type",onChange:s[0]||(s[0]=(...o)=>i.changeProductType&&i.changeProductType(...o))},K,544)])])]),t("tbody",null,[(d(!0),r(_,null,p(f.userProducts,o=>(d(),r("tr",{key:o.id},[t("td",X,[t("img",{src:o.imageUrl,alt:"商品圖片",style:{height:"240px",width:"240px","object-fit":"cover"},class:"mb-16"},null,8,Y)]),t("td",Z,[h(y,{to:`/userProductInfo/${o.id}`},{default:m(()=>[t("h5",tt,c(o.title),1)]),_:2},1032,["to"]),t("p",et," 產品描述："+c(o.description),1)]),t("td",st,[ot,t("p",at,c(o.price),1),t("select",{class:"rounded border-2 mb-16",name:"num",style:{width:"100%"},ref_for:!0,ref:"qty",onChange:s[1]||(s[1]=(...n)=>i.changeQty&&i.changeQty(...n))},[(d(),r(_,null,p(10,n=>t("option",{value:n,key:n},c(n),9,nt)),64))],544),t("button",{class:"btn btn-footer hover mb-16 color",style:{width:"100%"},onClick:n=>i.addToCart(o.id)},[ct,g(" 加入購物車 ")],8,it),lt])]))),128))])]),t("div",rt,[dt,t("select",ht,ft,512),yt]),(d(!0),r(_,null,p(e.storeAllProducts,o=>(d(),r("div",{class:"d-md-none d-flex justify-content-between",key:o.id,onClick:n=>f.tempProduct=o},[t("div",bt,[t("img",{src:o.imageUrl,alt:"商品圖片",style:{height:"280px",width:"280px","object-fit":"cover"},class:"mb-16"},null,8,vt),t("div",Pt,[h(y,{to:`/userProductInfo/${o.id}`,target:"_blank"},{default:m(()=>[t("h5",xt,c(o.title),1)]),_:2},1032,["to"]),t("p",wt," 特價："+c(o.price)+" 元 ",1),t("p",kt,c(o.description),1),t("div",Ct,[t("select",{class:"btn btn-footer fs-14",style:{width:"45%"},ref_for:!0,ref:"qty",onChange:s[2]||(s[2]=(...n)=>i.changeQty&&i.changeQty(...n))},[(d(),r(_,null,p(10,n=>t("option",{value:n,key:n},c(n),9,$t)),64))],544),t("button",{class:"btn btn-footer fs-14 hover",style:{width:"45%"},onClick:n=>i.addToCart(o.id)},[At,g(" 加入購物車 ")],8,Tt)]),t("button",{class:"btn btn-footer fs-14 hover",style:{width:"100%"},onClick:n=>i.addToCart(o.id)},[St,g(" 加入追蹤 ")],8,It)])])],8,mt))),128))])])]),t("div",Nt,[h(P,{class:"d-flex justify-content-center",pagination:f.pagination,"get-page-products":i.getProducts},null,8,["pagination","get-page-products"])])]),t("div",jt,[h(x)])],64)}const Dt=A(B,[["render",Vt],["__scopeId","data-v-2b0c110f"]]);export{Dt as default};
