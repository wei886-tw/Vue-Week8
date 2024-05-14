import{P as v}from"./PageFooter-DLD9D3IK.js";import{N as x}from"./NavBar-D8p0FtiH.js";import{P}from"./PageNation-DVOuD5qi.js";import{_ as w,c as a,b as l,a as t,F as h,g as u,r as _,o as c,w as f,t as i,p as k,f as $}from"./index-DklXiyRA.js";const N={components:{PageFooter:v,NavBar:x,PageNation:P},data(){return{userProducts:[],api:"https://vue3-course-api.hexschool.io",api_path:"wei123",myModal:null,tempProduct:{},pagination:{},filterProducts:[],category:""}},methods:{changeProductType(){this.category=this.$refs.type.value,this.category!="所有產品"?this.$http.get(`${this.api}/v2/api/${this.api_path}/products?category=${this.category}`).then(o=>{this.userProducts=o.data.products,this.pagination=o.data.pagination,console.log(this.userProducts),this.userProducts=this.userProducts.filter(n=>n.category===this.category)}).catch(o=>{console.log(o.response.data.message)}):this.getProducts(1)},getProducts(o){this.$http.get(`${this.api}/api/${this.api_path}/products?page=${o}`).then(n=>{this.userProducts=n.data.products,this.pagination=n.data.pagination})},addToCart(o){this.$http.post(`${this.api}/v2/api/${this.api_path}/cart`,{data:{product_id:o,qty:1}}).then(()=>{alert("成功加入購物車")}).catch(n=>{console.log(n)})},openModal(){this.myModal.show()}},mounted(){this.getProducts()}},e=o=>(k("data-v-ccfd5796"),o=o(),$(),o),j={class:"container-fluid py-48 mx-auto"},B={class:"container pt-32 mx-auto"},C={class:"row mx-auto"},I={class:"col-10 mx-auto"},F=e(()=>t("div",{class:"container d-flex justify-content-between"},null,-1)),S={class:"table d-none d-md-block"},T=e(()=>t("th",null,[t("p",{class:"fs-24 fs-lg-40"},"所有產品")],-1)),M=e(()=>t("th",null,null,-1)),U=e(()=>t("option",{value:"所有產品"},"所有產品",-1)),V=e(()=>t("option",{value:"平板"},"平板",-1)),q=e(()=>t("option",{value:"手機"},"手機",-1)),D=e(()=>t("option",{value:"筆電"},"筆電",-1)),E=[U,V,q,D],L={class:"pt-32",style:{width:"20%"}},z=["src"],A={class:"pt-32",style:{width:"70%"}},G={class:"mb-16 fs-16 fs-md-24 text-dark"},H={class:"d-none d-md-block",style:{color:"#8e8e8e"}},J={class:"pt-32 fs-lg-24 fw-bold text-danger"},K=e(()=>t("p",{class:""},"特價：",-1)),O={class:"mb-16"},Q={class:"container d-md-none d-flex justify-content-between"},R=e(()=>t("p",{class:"fs-24"},"全部商品",-1)),W={name:"",class:"btn btn-footer",ref:"select",style:{width:"30%"}},X=e(()=>t("option",{value:"平板"},"平板",-1)),Y=e(()=>t("option",{value:"手機"},"手機",-1)),Z=e(()=>t("option",{value:"電腦"},"電腦",-1)),tt=[X,Y,Z],st=e(()=>t("hr",null,null,-1)),et=["onClick"],ot={class:"mb-24 py-16 px-16"},nt=["src"],it={class:"d-flex flex-column justify-content-between px-32"},at={class:"mb-16 text-dark"},ct={class:"mb-16 text-danger fw-bold"},lt={class:"mb-16",style:{color:"#8e8e8e"}},dt={class:"container d-flex justify-content-between px-0"},rt={class:"btn btn-footer",style:{width:"45%"}},ht=["value"],_t=e(()=>t("button",{class:"btn btn-footer",style:{width:"45%"}}," 加入購物車 ",-1)),pt={class:"container pt-32"},ut={class:"container-fluid px-0"};function gt(o,n,ft,mt,d,p){const m=_("NavBar"),g=_("router-link"),y=_("PageNation"),b=_("PageFooter");return c(),a(h,null,[l(m),t("div",j,[t("div",B,[t("div",C,[t("div",I,[F,t("table",S,[t("thead",null,[t("tr",null,[T,M,t("th",null,[t("select",{name:"",id:"",class:"rounded border-2 btn btn-footer",style:{width:"132px",height:"48px"},ref:"type",onChange:n[0]||(n[0]=(...s)=>p.changeProductType&&p.changeProductType(...s))},E,544)])])]),t("tbody",null,[(c(!0),a(h,null,u(d.userProducts,s=>(c(),a("tr",{key:s.id},[t("td",L,[t("img",{src:s.imageUrl,alt:"商品圖片",style:{height:"240px",width:"240px","object-fit":"cover"},class:"mb-16"},null,8,z)]),t("td",A,[l(g,{to:`/userProductInfo/${s.id}`},{default:f(()=>[t("h5",G," 產品名稱："+i(s.title),1)]),_:2},1032,["to"]),t("p",H," 產品描述："+i(s.description),1)]),t("td",J,[K,t("p",O,i(s.price),1)])]))),128))])]),t("div",Q,[R,t("select",W,tt,512),st]),(c(!0),a(h,null,u(d.userProducts,s=>(c(),a("div",{class:"d-md-none d-flex justify-content-between",key:s.id,onClick:r=>d.tempProduct=s},[t("div",ot,[t("img",{src:s.imageUrl,alt:"商品圖片",style:{height:"280px",width:"280px","object-fit":"cover"},class:"mb-16"},null,8,nt),t("div",it,[l(g,{to:`/userProductInfo/${s.id}`,target:"_blank"},{default:f(()=>[t("h5",at,"產品名稱："+i(s.title),1)]),_:2},1032,["to"]),t("p",ct," 特價："+i(s.price)+" 元 ",1),t("p",lt,i(s.description),1),t("div",dt,[t("select",rt,[(c(),a(h,null,u(10,r=>t("option",{value:r,key:r},i(r),9,ht)),64))]),_t])])])],8,et))),128))])])]),t("div",pt,[l(y,{class:"d-flex justify-content-center",pagination:d.pagination,"get-page-products":p.getProducts},null,8,["pagination","get-page-products"])])]),t("div",ut,[l(b)])],64)}const Pt=w(N,[["render",gt],["__scopeId","data-v-ccfd5796"]]);export{Pt as default};
