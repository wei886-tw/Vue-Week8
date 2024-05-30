import{P as w}from"./PageFooter-Bpihe044.js";import{N as k,c as y}from"./NavBar-DgyHiNze.js";import{P as C}from"./PageNation-CM2yJhab.js";import{_ as T,m as j,g as $,c as r,a as t,b as u,F as h,h as _,i as f,j as N,r as p,o as c,w as m,t as l,e as g,p as M,f as q}from"./index-Dzj-gzPR.js";const B={components:{PageFooter:w,NavBar:k,PageNation:C},data(){return{userProducts:[],api:"https://vue3-course-api.hexschool.io",api_path:"wei123",myModal:null,tempProduct:{},searchProducts:["2"],pagination:{},filterProducts:[],category:"",qty:""}},computed:{...j(y,["storeCart"])},methods:{...$(y,["getCartList"]),changeQty(){this.qty=parseInt(event.target.value)},addToCart(o){this.qty!=""?this.$http.post(`${this.api}/v2/api/${this.api_path}/cart`,{data:{product_id:o,qty:this.qty}}).then(()=>{this.getCartList(),alert("成功加入購物車")}).catch(e=>{console.log(e.response.data.message)}):this.$http.post(`${this.api}/v2/api/${this.api_path}/cart`,{data:{product_id:o,qty:1}}).then(()=>{this.getCartList(),alert("成功加入購物車")}).catch(e=>{console.log(e.response.data.message)})},changeProductType(){this.category=this.$refs.type.value,this.category!="所有產品"?this.$http.get(`${this.api}/v2/api/${this.api_path}/products?category=${this.category}`).then(o=>{this.userProducts=o.data.products,this.pagination=o.data.pagination,this.userProducts=this.userProducts.filter(e=>e.category===this.category)}).catch(o=>{console.log(o.response.data.message)}):this.getProducts(1)},getProducts(o){this.$http.get(`${this.api}/api/${this.api_path}/products?page=${o}`).then(e=>{this.userProducts=e.data.products,this.pagination=e.data.pagination,window.scrollTo(0,0)}).catch(e=>{console.log(e.response.data.message)})},openModal(){this.myModal.show()},searchProduct(){this.title=this.$refs.search.value,this.$http.get(`${this.api}/v2/api/${this.api_path}/products/all`).then(o=>{this.userProducts=o.data.products,this.pagination={},this.userProducts=this.userProducts.filter(e=>e.title.includes(this.title)),alert(`搜尋 ${this.title} 的結果`),this.searchProducts=this.userProducts,this.title=""}).catch(o=>{console.log(o.response.data.message)})},backToPreviousPage(){this.getProducts(),this.$refs.search.value="",this.$refs.searchMobile.value=""},searchProductMobile(){this.title=this.$refs.searchMobile.value,this.$http.get(`${this.api}/v2/api/${this.api_path}/products/all`).then(o=>{this.userProducts=o.data.products,this.pagination={},this.userProducts=this.userProducts.filter(e=>e.title.includes(this.title)),alert(`搜尋 ${this.title} 的結果`),this.searchProducts=this.userProducts,this.title=""}).catch(o=>{console.log(o.response.data.message)})}},mounted(){this.getProducts()}},i=o=>(M("data-v-e2a0d659"),o=o(),q(),o),I={class:"container-fluid px-0"},S={class:"container-fluid py-48 mx-auto"},F={class:"container pt-32 mx-auto"},Q={class:"row mx-auto"},L={class:"col-10 mx-auto"},V=i(()=>t("div",{class:"container d-flex justify-content-between"},null,-1)),U={class:"table d-none d-md-block"},A=i(()=>t("th",{style:{width:"25%"},class:"align-items-bottom p-0"},[t("p",{class:"fs-24 fs-md-32 fs-lg-40"},"所有產品")],-1)),D={style:{width:"60%"}},E={class:"rounded border-2 py-0 bg-footer d-flex justify-content-between align-items-center",style:{height:"48px"}},z={type:"text",class:"rounded border-2 border-white bg-footer py-0 px-0",placeholder:"請輸入欲搜尋產品",ref:"search",style:{width:"90%",height:"44px"}},G={for:"input",class:"border-0"},H={style:{width:"15%"}},J=i(()=>t("option",{value:"所有產品"},"所有產品",-1)),K=i(()=>t("option",{value:"平板"},"平板",-1)),O=i(()=>t("option",{value:"手機"},"手機",-1)),R=i(()=>t("option",{value:"筆電"},"筆電",-1)),W=[J,K,O,R],X={class:"pt-32",style:{width:"20%"}},Y=["src"],Z={class:"pt-32",style:{width:"70%"}},tt={class:"mb-16 fs-16 fs-md-24 text-dark"},et={class:"d-none d-md-block",style:{color:"#8e8e8e"}},st={class:"pt-32 fs-lg-24 fw-bold text-danger"},ot=i(()=>t("p",{class:""},"特價：",-1)),it={class:"mb-16"},at=["value"],nt=["onClick"],ct=i(()=>t("i",{class:"bi bi-cart-fill"},null,-1)),rt=i(()=>t("button",{class:"btn btn-footer hover",style:{width:"100%"}},[t("i",{class:"bi bi-heart-fill"}),g("  加入追蹤 ")],-1)),lt={key:0,class:"container"},dt=i(()=>t("p",{class:"pt-32 mb-32 text-center"},"找不到該產品",-1)),ht={class:"container d-flex justify-content-center"},ut=i(()=>t("p",{class:"fs-48 d-md-none text-center mb-16"},"所有產品",-1)),_t={class:"container d-md-none d-flex justify-content-between mb-16"},pt={class:"rounded border-2 py-0 bg-footer d-flex justify-content-between align-items-center",style:{height:"48px",width:"50%"}},gt={type:"text",class:"rounded border-2 border-white bg-footer py-0 px-0",placeholder:"搜尋產品",ref:"searchMobile",style:{width:"90%",height:"44px"}},ft={for:"input",class:"border-0"},bt={name:"",class:"btn btn-footer fs-12",ref:"select",style:{width:"40%"}},yt=i(()=>t("option",{value:"所有產品"},"所有產品",-1)),mt=i(()=>t("option",{value:"平板"},"平板",-1)),vt=i(()=>t("option",{value:"手機"},"手機",-1)),Pt=i(()=>t("option",{value:"筆電"},"筆電",-1)),xt=[yt,mt,vt,Pt],wt=i(()=>t("hr",null,null,-1)),kt=["onClick"],Ct={class:"mb-24 py-16 px-16"},Tt=["src"],jt={class:"d-flex flex-column justify-content-between px-32"},$t={class:"mb-16 text-dark"},Nt={class:"mb-16 text-danger fw-bold"},Mt={class:"mb-16",style:{color:"#8e8e8e"}},qt={class:"container d-flex justify-content-between px-0 mb-16"},Bt=["value"],It=["onClick"],St=i(()=>t("i",{class:"bi bi-cart-fill"},null,-1)),Ft=["onClick"],Qt=i(()=>t("i",{class:"bi bi-heart-fill"},null,-1)),Lt={key:0,class:"container"},Vt=i(()=>t("p",{class:"pt-32 mb-32 text-center"},"找不到該產品",-1)),Ut={class:"container d-flex justify-content-center"},At={class:"container px-0 pt-32"},Dt={class:"container-fluid px-0"};function Et(o,e,zt,Gt,d,a){const v=p("NavBar"),b=p("router-link"),P=p("PageNation"),x=p("PageFooter");return c(),r(h,null,[t("div",I,[u(v)]),t("div",S,[t("div",F,[t("div",Q,[t("div",L,[V,t("table",U,[t("thead",null,[t("tr",null,[A,t("th",D,[t("div",E,[t("input",z,null,512),t("button",G,[t("i",{class:"bi bi-search fs-12 fs-md-16 fs-lg-24 pe-8 text-dark",onClick:e[0]||(e[0]=(...s)=>a.searchProduct&&a.searchProduct(...s))})])])]),t("th",H,[t("select",{name:"",id:"",class:"rounded border-2 btn btn-footer",style:{width:"132px",height:"48px"},ref:"type",onChange:e[1]||(e[1]=(...s)=>a.changeProductType&&a.changeProductType(...s))},W,544)])])]),t("tbody",null,[(c(!0),r(h,null,_(d.userProducts,s=>(c(),r("tr",{key:s.id},[t("td",X,[t("img",{src:s.imageUrl,alt:"商品圖片",style:{height:"240px",width:"240px","object-fit":"cover"},class:"mb-16"},null,8,Y)]),t("td",Z,[u(b,{to:`/userProductInfo/${s.id}`},{default:m(()=>[t("h5",tt,l(s.title),1)]),_:2},1032,["to"]),t("p",et," 產品描述："+l(s.description),1)]),t("td",st,[ot,t("p",it,l(s.price),1),t("select",{class:"rounded border-2 mb-16",name:"num",style:{width:"100%"},ref_for:!0,ref:"qty",onChange:e[2]||(e[2]=(...n)=>a.changeQty&&a.changeQty(...n))},[(c(),r(h,null,_(10,n=>t("option",{value:n,key:n},l(n),9,at)),64))],544),t("button",{class:"btn btn-footer hover mb-16 color",style:{width:"100%"},onClick:n=>a.addToCart(s.id)},[ct,g(" 加入購物車 ")],8,nt),rt])]))),128))]),d.searchProducts.length===0?(c(),r("div",lt,[dt,t("div",ht,[t("button",{class:"btn btn-footer w-50",onClick:e[3]||(e[3]=(...s)=>a.backToPreviousPage&&a.backToPreviousPage(...s))}," 返回上一頁 ")])])):f("",!0)]),ut,t("div",_t,[t("div",pt,[t("input",gt,null,512),t("button",ft,[t("i",{class:"bi bi-search fs-12 fs-md-16 fs-lg-24 pe-8 text-dark",onClick:e[4]||(e[4]=(...s)=>a.searchProductMobile&&a.searchProductMobile(...s))})])]),t("select",bt,xt,512),wt]),(c(!0),r(h,null,_(d.userProducts,s=>(c(),r("div",{class:"d-md-none d-flex justify-content-between",key:s.id,onClick:n=>d.tempProduct=s},[t("div",Ct,[t("img",{src:s.imageUrl,alt:"商品圖片",style:{height:"280px",width:"95%","object-fit":"cover"},class:"mb-16"},null,8,Tt),t("div",jt,[u(b,{to:`/userProductInfo/${s.id}`,target:"_blank"},{default:m(()=>[t("h5",$t,l(s.title),1)]),_:2},1032,["to"]),t("p",Nt," 特價："+l(s.price)+" 元 ",1),t("p",Mt,l(s.description),1),t("div",qt,[t("select",{class:"btn btn-footer fs-14",style:{width:"45%"},ref_for:!0,ref:"qty",onChange:e[5]||(e[5]=(...n)=>a.changeQty&&a.changeQty(...n))},[(c(),r(h,null,_(10,n=>t("option",{value:n,key:n},l(n),9,Bt)),64))],544),t("button",{class:"btn btn-footer fs-14 hover",style:{width:"45%"},onClick:n=>a.addToCart(s.id)},[St,g(" 加入購物車 ")],8,It)]),t("button",{class:"btn btn-footer fs-14 hover",style:{width:"100%"},onClick:n=>a.addToCart(s.id)},[Qt,g(" 加入追蹤 ")],8,Ft)])])],8,kt))),128)),d.searchProducts.length===0?(c(),r("div",Lt,[Vt,t("div",Ut,[t("button",{class:"btn btn-footer w-50",onClick:e[6]||(e[6]=(...s)=>a.backToPreviousPage&&a.backToPreviousPage(...s))}," 返回上一頁 ")])])):f("",!0)])])]),t("div",At,[d.userProducts.length!==0?(c(),N(P,{key:0,class:"d-flex justify-content-center",pagination:d.pagination,"get-page-products":a.getProducts},null,8,["pagination","get-page-products"])):f("",!0)])]),t("div",Dt,[u(x)])],64)}const Rt=T(B,[["render",Et],["__scopeId","data-v-e2a0d659"]]);export{Rt as default};
