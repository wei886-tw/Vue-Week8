import{A as _}from"./AdminNavBar-CtInpAAG.js";import{P as g}from"./PageNation-DeAidPBQ.js";import{_ as m,l as n,i as r,j as t,F as d,v as f,k as l,e as o,y as i}from"./index-DYY1owia.js";const k={components:{AdminNavBar:_,PageNation:g},data(){return{allProducts:[],url:"https://vue3-course-api.hexschool.io",api_path:"wei123",pagination:{}}},methods:{checkAdmin(){const s=`${this.url}/api/user/check`;this.$http.post(s).then(()=>{this.getPageProducts()}).catch(e=>{alert(e.response.data.message),this.$router.push("/adminLogin")})},getPageProducts(s=1){this.$http.get(`${this.url}/v2/api/${this.api_path}/admin/products?page=${s}`).then(e=>{this.pagination=e.data.pagination,this.allProducts=e.data.products,window.scrollTo(0,0)}).catch(e=>{alert(e.response.data.message)})}},mounted(){const s=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=s,this.checkAdmin()}},P={class:"container py-48"},$=t("h2",{class:"text-center fs-16 fs-md-24 fs-lg-32"},"後台產品列表",-1),v={class:"table mt-4"},y=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用")])],-1),x={key:0,class:""},w={key:1,class:"text-danger"},b={class:"container d-flex justify-content-end"};function A(s,e,B,N,c,h){const p=l("admin-nav-bar"),u=l("page-nation");return o(),n(d,null,[r(p),t("div",P,[$,t("table",v,[y,t("tbody",null,[(o(!0),n(d,null,f(c.allProducts,a=>(o(),n("tr",{key:a.id},[t("td",null,i(a.category),1),t("td",null,i(a.title),1),t("td",null,i(a.origin_price),1),t("td",null,i(a.price),1),t("td",null,[a.is_enabled?(o(),n("span",x,"啟用")):(o(),n("span",w,"未啟用"))])]))),128))])])]),t("div",b,[r(u,{class:"",pagination:c.pagination,"get-page-products":h.getPageProducts},null,8,["pagination","get-page-products"])])],64)}const T=m(k,[["render",A]]);export{T as default};
