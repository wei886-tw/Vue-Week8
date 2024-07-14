import{P as j,N,c as v}from"./NavBar-CkSPTveX.js";import{P as M}from"./PageNation-DT7pU48w.js";import{f as m}from"./favoriteStore-MgGDTfAq.js";import{_ as B,t as P,u as x,l,j as t,i as _,v as c,F as u,x as g,y as f,f as F,m as k,k as y,e as n,g as $,z as C,A as L,q as S,s as I}from"./index-9Q82GJaJ.js";const Q={components:{PageFooter:j,NavBar:N,PageNation:M},data(){return{userProducts:[],api:"https://vue3-course-api.hexschool.io",api_path:"wei123",myModal:null,tempProduct:{},searchProducts:["2"],pagination:{},filterProducts:[],category:"",qty:"",favoriteLis:[],myButton:"",searchResult:"",type:"",selectedCategory:this.$route.query.category||"所有產品"}},computed:{...P(v,["storeCart"]),...P(m,["favoriteList","favoriteId"])},methods:{...x(v,["getCartList"]),...x(m,["handleFavorite","setStorage","getFavoriteList"]),changeQty(){this.qty=parseInt(event.target.value),console.log(this.qty)},addToCart(o){this.qty!=""?this.$http.post(`${this.api}/v2/api/${this.api_path}/cart`,{data:{product_id:o,qty:this.qty}}).then(()=>{this.getCartList(),alert("成功加入購物車")}).catch(e=>{console.log(e.response.data.message)}):this.$http.post(`${this.api}/v2/api/${this.api_path}/cart`,{data:{product_id:o,qty:1}}).then(()=>{this.getCartList(),alert("成功加入購物車")}).catch(e=>{console.log(e.response.data.message)})},changeProductType(o){o==="pc"?(this.category=this.$refs.type.value,this.selectedCategory=this.$refs.type.value):(this.category=this.$refs.selectMobile.value,this.selectedCategory=this.$refs.selectMobile.value),this.category!="按金額高到低"&&this.category!="按金額低到高"&&this.category!="所有產品"?this.$http.get(`${this.api}/v2/api/${this.api_path}/products?category=${this.category}`).then(e=>{this.userProducts=e.data.products,this.pagination=e.data.pagination,this.userProducts=this.userProducts.filter(h=>h.category===this.category)}).catch(e=>{console.log(e.response.data.message)}):this.category==="按金額低到高"?this.$http.get(`${this.api}/v2/api/${this.api_path}/products/all`).then(e=>{this.userProducts=e.data.products,this.pagination=e.data.pagination,this.userProducts=this.userProducts.sort((h,p)=>h.price-p.price)}).catch(e=>{console.log(e.response.data.message)}):this.category==="按金額高到低"?this.$http.get(`${this.api}/v2/api/${this.api_path}/products/all`).then(e=>{this.userProducts=e.data.products,this.pagination=e.data.pagination,this.userProducts=this.userProducts.sort((h,p)=>p.price-h.price)}).catch(e=>{console.log(e.response.data.message)}):this.getProducts(1),this.loadingCircle()},getProducts(o){this.$route.query.category!=="筆電"&&this.$route.query.category!=="手機"&&this.$route.query.category!=="平板"?this.$http.get(`${this.api}/api/${this.api_path}/products?page=${o}`).then(e=>{this.$refs.type.value="所有產品",this.$refs.selectMobile.value="所有產品",this.userProducts=e.data.products,this.pagination=e.data.pagination,window.scrollTo(0,0)}).catch(e=>{console.log(e.response.data.message)}):this.$http.get(`${this.api}/v2/api/${this.api_path}/products?category=${this.$route.query.category}`).then(e=>{this.$router.push("/userProduct"),this.$refs.type.value=this.$route.query.category,this.$refs.selectMobile.value=this.$route.query.category,this.selectedCategory=this.$route.query.category,this.userProducts=e.data.products,this.pagination=e.data.pagination,window.scrollTo(0,0)})},searchProduct(o){o==="pc"?this.title=this.$refs.search.value:o==="mobile"&&(this.title=this.$refs.searchMobile.value),this.title!==void 0&&this.title!==""?this.$http.get(`${this.api}/v2/api/${this.api_path}/products/all`).then(e=>{this.userProducts=e.data.products,this.pagination={},this.userProducts=this.userProducts.filter(h=>h.title.includes(this.title)),alert(`搜尋 ${this.title} 的結果`),this.searchProducts=this.userProducts,this.searchResult="searchResult",this.title=""}).catch(e=>{console.log(e.response.data.message)}):alert("請輸入關鍵字")},backToPreviousPage(){this.getProducts(),this.$refs.search.value="",this.$refs.searchMobile.value="",this.searchProduct=["2"],this.$router.go("/userProduct")},loadingCircle(){let o=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!0,onCancel:this.onCancel});setTimeout(()=>{o.hide()},1e3)}},mounted(){this.loadingCircle(),this.getProducts(),window.scroll(0,0)}},d=o=>(S("data-v-2a8d31ee"),o=o(),I(),o),V={class:"container-fluid px-0"},R={class:"container-fluid mx-auto"},U={class:"container pt-48 mx-auto"},z={class:"row mx-auto"},A={class:"col-10 mx-auto"},O=d(()=>t("div",{class:"container d-flex justify-content-between"},null,-1)),D={class:"table d-none d-md-block"},E={style:{width:"25%"},class:"align-items-bottom p-0"},G={class:"fs-24 fs-md-32 fs-lg-40"},H={style:{width:"60%"}},J={class:"rounded border-2 py-0 bg-footer d-flex justify-content-between align-items-center",style:{height:"48px"}},K={type:"text",class:"rounded border-footer border-5 bg-footer py-0 px-0 form-control",placeholder:"請輸入欲搜尋產品",ref:"search",style:{width:"90%",height:"44px"}},W={for:"input",class:"border-0"},X={style:{width:"15%"}},Y=k('<option value="所有產品" style="position:absolute;" readonly selected data-v-2a8d31ee> 所有產品 </option><option value="平板" style="position:absolute;" data-v-2a8d31ee> 平板 </option><option value="手機" style="position:absolute;" data-v-2a8d31ee> 手機 </option><option value="筆電" style="position:absolute;" data-v-2a8d31ee> 筆電 </option><option value="按金額低到高" style="position:absolute;" data-v-2a8d31ee> 金額低到高 </option><option value="按金額高到低" style="position:absolute;" data-v-2a8d31ee> 金額高到低 </option>',6),Z=[Y],tt={class:"pt-32",style:{width:"20%"}},et={class:"container",style:{position:"relative",display:"inline-block"}},st=["src"],ot={class:"pt-32",style:{width:"70%"}},it={class:"mb-16 fs-16 fs-md-24 text-dark"},at={class:"d-none d-md-block",style:{color:"#8e8e8e"}},nt={class:"pt-32 fs-lg-24 fw-bold text-danger"},rt=d(()=>t("p",{class:""},"特價：",-1)),lt={class:"mb-16"},ct=["value"],dt=["onClick"],ht=d(()=>t("i",{class:"bi bi-cart-fill"}," 加入購物車 ",-1)),ut=[ht],pt=["onClick"],_t=d(()=>t("i",{class:"bi bi-heart-fill"},"加入收藏",-1)),gt=[_t],ft={key:0,class:"container"},yt=d(()=>t("p",{class:"pt-32 mb-32 text-center"},"找不到該產品",-1)),bt=[yt],vt={class:"fs-48 d-md-none text-center mb-16"},mt={class:"container d-md-none d-flex justify-content-between mb-16"},Pt={class:"rounded border-2 py-0 bg-footer d-flex justify-content-between align-items-center",style:{height:"48px",width:"50%"}},xt={type:"text",class:"rounded border-2 border-footer bg-footer py-0 px-0",placeholder:"搜尋產品",ref:"searchMobile",style:{width:"90%",height:"44px"}},$t={for:"input",class:"border-0"},Ct={value:"所有產品",style:{position:"absolute"},readonly:"",selected:"",ref:"selectMobile"},kt=k('<option value="平板" style="position:absolute;" data-v-2a8d31ee>平板</option><option value="手機" style="position:absolute;" data-v-2a8d31ee>手機</option><option value="筆電" style="position:absolute;" data-v-2a8d31ee>筆電</option><option value="按金額低到高" style="position:absolute;" data-v-2a8d31ee> 金額低到高 </option><option value="按金額高到低" style="position:absolute;" data-v-2a8d31ee> 金額高到低 </option>',5),wt=d(()=>t("hr",null,null,-1)),qt=["onClick"],Tt={class:"mb-24 py-16 px-16"},jt=["src"],Nt={class:"d-flex flex-column justify-content-between px-32"},Mt={class:"mb-16 text-dark"},Bt={class:"mb-16 text-danger fw-bold"},Ft={class:"mb-16",style:{color:"#8e8e8e"}},Lt={class:"container d-flex justify-content-between px-0 mb-16"},St=["value"],It=["onClick"],Qt=d(()=>t("i",{class:"bi bi-cart-fill"},null,-1)),Vt=["onClick"],Rt=d(()=>t("i",{class:"bi bi-heart-fill"}," 加入收藏",-1)),Ut=[Rt],zt={key:0,class:"container d-md-none"},At=d(()=>t("p",{class:"pt-32 mb-32 text-center"},"找不到該產品",-1)),Ot=[At],Dt={key:0,class:"container d-flex justify-content-center"},Et={class:"container px-0 pt-32"},Gt={class:"container-fluid px-0"};function Ht(o,e,h,p,r,a){const w=y("NavBar"),b=y("router-link"),q=y("PageNation"),T=y("PageFooter");return n(),l(u,null,[t("div",V,[_(w)]),t("div",R,[t("div",U,[t("div",z,[t("div",A,[O,t("table",D,[t("thead",null,[t("tr",null,[t("th",E,[t("p",G,c(r.selectedCategory),1)]),t("th",H,[t("div",J,[t("input",K,null,512),t("button",W,[t("i",{class:"bi bi-search fs-12 fs-md-16 fs-lg-24 pe-8 text-dark bg-footer border-dark",onClick:e[0]||(e[0]=s=>a.searchProduct("pc"))})])])]),t("th",X,[t("select",{name:"",id:"",class:"rounded border-2 btn btn-footer",style:{width:"132px",height:"48px",position:"relative"},ref:"type",onChange:e[1]||(e[1]=s=>a.changeProductType("pc"))},Z,544)])])]),t("tbody",null,[(n(!0),l(u,null,g(r.userProducts,s=>(n(),l("tr",{key:s.id},[t("td",tt,[t("div",et,[t("img",{src:s.imageUrl,alt:"商品圖片",style:{height:"240px",width:"240px","object-fit":"cover",position:"relative"},class:"mb-16 d-block"},null,8,st)])]),t("td",ot,[_(b,{to:`/userProductInfo/${s.id}`},{default:$(()=>[t("h5",it,c(s.title),1)]),_:2},1032,["to"]),t("p",at," 產品描述："+c(s.description),1)]),t("td",nt,[rt,t("p",lt,c(s.price),1),t("select",{class:"rounded border-2 mb-16",name:"num",style:{width:"100%"},ref_for:!0,ref:"qty",onChange:e[2]||(e[2]=(...i)=>a.changeQty&&a.changeQty(...i))},[(n(),l(u,null,g(10,i=>t("option",{value:i,key:i},c(i),9,ct)),64))],544),t("button",{class:"btn btn-footer hover mb-16 color",style:{width:"100%"},onClick:i=>a.addToCart(s.id)},ut,8,dt),t("button",{class:C(["btn btn-footer hover mb-16 color",o.favoriteList.indexOf(s.id)===-1?"btn-footer":"hovered"]),style:{width:"100%"},onClick:i=>o.handleFavorite(s.id),id:"myButton"},gt,10,pt)])]))),128))]),r.searchProducts.length===0?(n(),l("div",ft,bt)):f("",!0)]),t("p",vt,c(r.selectedCategory),1),t("div",mt,[t("div",Pt,[t("input",xt,null,512),t("button",$t,[t("i",{class:"bi bi-search fs-12 fs-md-16 fs-lg-24 pe-8 text-dark",onClick:e[3]||(e[3]=s=>a.searchProduct("mobile"))})])]),t("select",{name:"",class:"btn btn-footer fs-12",ref:"selectMobile",style:{width:"40%"},onChange:e[4]||(e[4]=s=>a.changeProductType("mobile"))},[t("option",Ct," 所有產品 ",512),kt],544),wt]),(n(!0),l(u,null,g(r.userProducts,s=>(n(),l("div",{class:"d-md-none d-flex justify-content-between",key:s.id,onClick:i=>r.tempProduct=s},[t("div",Tt,[t("img",{src:s.imageUrl,alt:"商品圖片",style:{height:"280px",width:"95%","object-fit":"cover"},class:"mb-16"},null,8,jt),t("div",Nt,[_(b,{to:`/userProductInfo/${s.id}`,target:"_blank"},{default:$(()=>[t("h5",Mt,c(s.title),1)]),_:2},1032,["to"]),t("p",Bt," 特價："+c(s.price)+" 元 ",1),t("p",Ft,c(s.description),1),t("div",Lt,[t("select",{class:"btn btn-footer fs-14",style:{width:"45%"},ref_for:!0,ref:"qty",onChange:e[5]||(e[5]=(...i)=>a.changeQty&&a.changeQty(...i))},[(n(),l(u,null,g(10,i=>t("option",{value:i,key:i},c(i),9,St)),64))],544),t("button",{class:"btn btn-footer fs-14 hover",style:{width:"45%"},onClick:i=>a.addToCart(s.id)},[Qt,L(" 加入購物車 ")],8,It)]),t("button",{class:C(["btn btn-footer",o.favoriteList.indexOf(s.id)===-1?"btn-footer":"hovered"]),onClick:i=>o.handleFavorite(s.id)},Ut,10,Vt)])])],8,qt))),128)),r.searchProducts.length===0?(n(),l("div",zt,Ot)):f("",!0)])])]),r.searchResult!==""?(n(),l("div",Dt,[t("button",{class:"btn btn-footer w-25 hover",onClick:e[6]||(e[6]=(...s)=>a.backToPreviousPage&&a.backToPreviousPage(...s))}," 返回上一頁 ")])):f("",!0),t("div",Et,[r.pagination?(n(),F(q,{key:0,class:"d-flex justify-content-center",pagination:r.pagination,"get-page-products":a.getProducts},null,8,["pagination","get-page-products"])):f("",!0)])]),t("div",Gt,[_(T)])],64)}const Yt=B(Q,[["render",Ht],["__scopeId","data-v-2a8d31ee"]]);export{Yt as default};
//# sourceMappingURL=UserProduct-Cw6tLNsz.js.map
