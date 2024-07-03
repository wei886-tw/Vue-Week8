import{P as T,N as q,c as y}from"./NavBar-DJ78INPI.js";import{P as B}from"./PageNation-CKL4oV_y.js";import{f as m}from"./favoriteStore-5sfAr1gA.js";import{_ as F,t as P,u as x,l as r,j as t,i as _,F as p,v as f,x as g,f as L,k as b,e as n,g as k,y as h,z as w,A as S,q as I,s as M,m as C}from"./index-DO51cXig.js";const Q={components:{PageFooter:T,NavBar:q,PageNation:B},data(){return{userProducts:[],api:"https://vue3-course-api.hexschool.io",api_path:"wei123",myModal:null,tempProduct:{},searchProducts:["2"],pagination:{},filterProducts:[],category:"",qty:"",favoriteLis:[],myButton:"",searchResult:"",type:""}},computed:{...P(y,["storeCart"]),...P(m,["favoriteList","favoriteId"])},methods:{...x(y,["getCartList"]),...x(m,["handleFavorite","setStorage","getFavoriteList"]),changeQty(){this.qty=parseInt(event.target.value)},addToCart(o){this.qty!=""?this.$http.post(`${this.api}/v2/api/${this.api_path}/cart`,{data:{product_id:o,qty:this.qty}}).then(()=>{this.getCartList(),alert("成功加入購物車")}).catch(e=>{console.log(e.response.data.message)}):this.$http.post(`${this.api}/v2/api/${this.api_path}/cart`,{data:{product_id:o,qty:1}}).then(()=>{this.getCartList(),alert("成功加入購物車")}).catch(e=>{console.log(e.response.data.message)})},changeProductType(o){o==="pc"?this.category=this.$refs.type.value:this.category=this.$refs.selectMobile.value,this.category!="按金額高到低"&&this.category!="按金額低到高"&&this.category!="所有產品"?this.$http.get(`${this.api}/v2/api/${this.api_path}/products?category=${this.category}`).then(e=>{this.userProducts=e.data.products,this.pagination=e.data.pagination,this.userProducts=this.userProducts.filter(c=>c.category===this.category),alert(`顯示所有${this.category}產品`)}).catch(e=>{console.log(e.response.data.message)}):this.category==="按金額低到高"?this.$http.get(`${this.api}/v2/api/${this.api_path}/products/all`).then(e=>{this.userProducts=e.data.products,this.pagination=e.data.pagination,this.userProducts=this.userProducts.sort((c,u)=>c.price-u.price),alert("產品由低價往高價排列")}).catch(e=>{console.log(e.response.data.message)}):this.category==="按金額高到低"?this.$http.get(`${this.api}/v2/api/${this.api_path}/products/all`).then(e=>{this.userProducts=e.data.products,this.pagination=e.data.pagination,this.userProducts=this.userProducts.sort((c,u)=>u.price-c.price),alert("產品由高價往低價排列")}).catch(e=>{console.log(e.response.data.message)}):(alert("顯示所有產品"),this.getProducts(1))},getProducts(o){this.$http.get(`${this.api}/api/${this.api_path}/products?page=${o}`).then(e=>{this.userProducts=e.data.products,this.pagination=e.data.pagination,window.scrollTo(0,0)}).catch(e=>{console.log(e.response.data.message)})},openModal(){this.myModal.show()},searchProduct(o){o==="pc"?this.title=this.$refs.search.value:o==="mobile"&&(this.title=this.$refs.searchMobile.value),this.title!==void 0&&this.title!==""?this.$http.get(`${this.api}/v2/api/${this.api_path}/products/all`).then(e=>{this.userProducts=e.data.products,this.pagination={},this.userProducts=this.userProducts.filter(c=>c.title.includes(this.title)),alert(`搜尋 ${this.title} 的結果`),this.searchProducts=this.userProducts,this.searchResult="searchResult",this.title=""}).catch(e=>{console.log(e.response.data.message)}):alert("請輸入關鍵字")},backToPreviousPage(){this.getProducts(),this.$refs.search.value="",this.$refs.searchMobile.value="",this.searchProduct=["2"],this.$router.go("/userProduct")},loadingCircle(){let o=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!0,onCancel:this.onCancel});setTimeout(()=>{o.hide()},1e3)}},mounted(){this.loadingCircle(),this.getProducts(),window.scroll(0,0)}},l=o=>(I("data-v-a299699f"),o=o(),M(),o),V={class:"container-fluid px-0"},R={class:"container-fluid mx-auto"},U={class:"container pt-48 mx-auto"},z={class:"row mx-auto"},A={class:"col-10 mx-auto"},O=l(()=>t("div",{class:"container d-flex justify-content-between"},null,-1)),D={class:"table d-none d-md-block"},E=l(()=>t("th",{style:{width:"25%"},class:"align-items-bottom p-0"},[t("p",{class:"fs-24 fs-md-32 fs-lg-40"},"所有產品")],-1)),G={style:{width:"60%"}},H={class:"rounded border-2 py-0 bg-footer d-flex justify-content-between align-items-center",style:{height:"48px"}},J={type:"text",class:"rounded border-footer border-5 bg-footer py-0 px-0 form-control",placeholder:"請輸入欲搜尋產品",ref:"search",style:{width:"90%",height:"44px"}},K={for:"input",class:"border-0"},W={style:{width:"15%"}},X=C('<option value="所有產品" style="position:absolute;" readonly selected data-v-a299699f> 所有產品 </option><option value="平板" style="position:absolute;" data-v-a299699f> 平板 </option><option value="手機" style="position:absolute;" data-v-a299699f> 手機 </option><option value="筆電" style="position:absolute;" data-v-a299699f> 筆電 </option><option value="按金額低到高" style="position:absolute;" data-v-a299699f> 金額低到高 </option><option value="按金額高到低" style="position:absolute;" data-v-a299699f> 金額高到低 </option>',6),Y=[X],Z={class:"pt-32",style:{width:"20%"}},tt={class:"container",style:{position:"relative",display:"inline-block"}},et=["src"],st={class:"pt-32",style:{width:"70%"}},ot={class:"mb-16 fs-16 fs-md-24 text-dark"},it={class:"d-none d-md-block",style:{color:"#8e8e8e"}},at={class:"pt-32 fs-lg-24 fw-bold text-danger"},nt=l(()=>t("p",{class:""},"特價：",-1)),lt={class:"mb-16"},rt=["value"],ct=["onClick"],dt=l(()=>t("i",{class:"bi bi-cart-fill"}," 加入購物車 ",-1)),ht=[dt],pt=["onClick"],ut=l(()=>t("i",{class:"bi bi-heart-fill"},"加入收藏",-1)),_t=[ut],ft={key:0,class:"container"},gt=l(()=>t("p",{class:"pt-32 mb-32 text-center"},"找不到該產品",-1)),bt=[gt],vt=l(()=>t("p",{class:"fs-48 d-md-none text-center mb-16"},"所有產品",-1)),yt={class:"container d-md-none d-flex justify-content-between mb-16"},mt={class:"rounded border-2 py-0 bg-footer d-flex justify-content-between align-items-center",style:{height:"48px",width:"50%"}},Pt={type:"text",class:"rounded border-2 border-footer bg-footer py-0 px-0",placeholder:"搜尋產品",ref:"searchMobile",style:{width:"90%",height:"44px"}},xt={for:"input",class:"border-0"},kt=C('<option value="所有產品" style="position:absolute;" readonly selected data-v-a299699f> 所有產品 </option><option value="平板" style="position:absolute;" data-v-a299699f>平板</option><option value="手機" style="position:absolute;" data-v-a299699f>手機</option><option value="筆電" style="position:absolute;" data-v-a299699f>筆電</option><option value="按金額低到高" style="position:absolute;" data-v-a299699f> 金額低到高 </option><option value="按金額高到低" style="position:absolute;" data-v-a299699f> 金額高到低 </option>',6),wt=[kt],Ct=l(()=>t("hr",null,null,-1)),$t=["onClick"],jt={class:"mb-24 py-16 px-16"},Nt=["src"],Tt={class:"d-flex flex-column justify-content-between px-32"},qt={class:"mb-16 text-dark"},Bt={class:"mb-16 text-danger fw-bold"},Ft={class:"mb-16",style:{color:"#8e8e8e"}},Lt={class:"container d-flex justify-content-between px-0 mb-16"},St=["value"],It=["onClick"],Mt=l(()=>t("i",{class:"bi bi-cart-fill"},null,-1)),Qt=["onClick"],Vt=l(()=>t("i",{class:"bi bi-heart-fill"}," 加入收藏",-1)),Rt=[Vt],Ut={key:0,class:"container d-md-none"},zt=l(()=>t("p",{class:"pt-32 mb-32 text-center"},"找不到該產品",-1)),At=[zt],Ot={key:0,class:"container d-flex justify-content-center"},Dt={class:"container px-0 pt-32"},Et={class:"container-fluid px-0"};function Gt(o,e,c,u,d,a){const $=b("NavBar"),v=b("router-link"),j=b("PageNation"),N=b("PageFooter");return n(),r(p,null,[t("div",V,[_($)]),t("div",R,[t("div",U,[t("div",z,[t("div",A,[O,t("table",D,[t("thead",null,[t("tr",null,[E,t("th",G,[t("div",H,[t("input",J,null,512),t("button",K,[t("i",{class:"bi bi-search fs-12 fs-md-16 fs-lg-24 pe-8 text-dark bg-footer border-dark",onClick:e[0]||(e[0]=s=>a.searchProduct("pc"))})])])]),t("th",W,[t("select",{name:"",id:"",class:"rounded border-2 btn btn-footer",style:{width:"132px",height:"48px",position:"relative"},ref:"type",onChange:e[1]||(e[1]=s=>a.changeProductType("pc"))},Y,544)])])]),t("tbody",null,[(n(!0),r(p,null,f(d.userProducts,s=>(n(),r("tr",{key:s.id},[t("td",Z,[t("div",tt,[t("img",{src:s.imageUrl,alt:"商品圖片",style:{height:"240px",width:"240px","object-fit":"cover",position:"relative"},class:"mb-16 d-block"},null,8,et)])]),t("td",st,[_(v,{to:`/userProductInfo/${s.id}`},{default:k(()=>[t("h5",ot,h(s.title),1)]),_:2},1032,["to"]),t("p",it," 產品描述："+h(s.description),1)]),t("td",at,[nt,t("p",lt,h(s.price),1),t("select",{class:"rounded border-2 mb-16",name:"num",style:{width:"100%"},ref_for:!0,ref:"qty",onChange:e[2]||(e[2]=(...i)=>a.changeQty&&a.changeQty(...i))},[(n(),r(p,null,f(10,i=>t("option",{value:i,key:i},h(i),9,rt)),64))],544),t("button",{class:"btn btn-footer hover mb-16 color",style:{width:"100%"},onClick:i=>a.addToCart(s.id)},ht,8,ct),t("button",{class:w(["btn btn-footer hover mb-16 color",o.favoriteList.indexOf(s.id)===-1?"btn-footer":"hovered"]),style:{width:"100%"},onClick:i=>o.handleFavorite(s.id),id:"myButton"},_t,10,pt)])]))),128))]),d.searchProducts.length===0?(n(),r("div",ft,bt)):g("",!0)]),vt,t("div",yt,[t("div",mt,[t("input",Pt,null,512),t("button",xt,[t("i",{class:"bi bi-search fs-12 fs-md-16 fs-lg-24 pe-8 text-dark",onClick:e[3]||(e[3]=s=>a.searchProduct("mobile"))})])]),t("select",{name:"",class:"btn btn-footer fs-12",ref:"selectMobile",style:{width:"40%"},onChange:e[4]||(e[4]=s=>a.changeProductType("mobile"))},wt,544),Ct]),(n(!0),r(p,null,f(d.userProducts,s=>(n(),r("div",{class:"d-md-none d-flex justify-content-between",key:s.id,onClick:i=>d.tempProduct=s},[t("div",jt,[t("img",{src:s.imageUrl,alt:"商品圖片",style:{height:"280px",width:"95%","object-fit":"cover"},class:"mb-16"},null,8,Nt),t("div",Tt,[_(v,{to:`/userProductInfo/${s.id}`,target:"_blank"},{default:k(()=>[t("h5",qt,h(s.title),1)]),_:2},1032,["to"]),t("p",Bt," 特價："+h(s.price)+" 元 ",1),t("p",Ft,h(s.description),1),t("div",Lt,[t("select",{class:"btn btn-footer fs-14",style:{width:"45%"},ref_for:!0,ref:"qty",onChange:e[5]||(e[5]=(...i)=>a.changeQty&&a.changeQty(...i))},[(n(),r(p,null,f(10,i=>t("option",{value:i,key:i},h(i),9,St)),64))],544),t("button",{class:"btn btn-footer fs-14 hover",style:{width:"45%"},onClick:i=>a.addToCart(s.id)},[Mt,S(" 加入購物車 ")],8,It)]),t("button",{class:w(["btn btn-footer",o.favoriteList.indexOf(s.id)===-1?"btn-footer":"hovered"]),onClick:i=>o.handleFavorite(s.id)},Rt,10,Qt)])])],8,$t))),128)),d.searchProducts.length===0?(n(),r("div",Ut,At)):g("",!0)])])]),d.searchResult!==""?(n(),r("div",Ot,[t("button",{class:"btn btn-footer w-25 hover",onClick:e[6]||(e[6]=(...s)=>a.backToPreviousPage&&a.backToPreviousPage(...s))}," 返回上一頁 ")])):g("",!0),t("div",Dt,[d.pagination?(n(),L(j,{key:0,class:"d-flex justify-content-center",pagination:d.pagination,"get-page-products":a.getProducts},null,8,["pagination","get-page-products"])):g("",!0)])]),t("div",Et,[_(N)])],64)}const Xt=F(Q,[["render",Gt],["__scopeId","data-v-a299699f"]]);export{Xt as default};
//# sourceMappingURL=UserProduct-BN-gcUjw.js.map
