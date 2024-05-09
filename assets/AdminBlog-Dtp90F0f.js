import{A as b}from"./AdminNavBar-nAnw4QMS.js";import{P as v}from"./PageNation-BXSZyN9b.js";import{_ as A,c,b as i,a as t,w as $,F as h,g as k,r as o,o as l,d as f,h as r}from"./index-BjxMaSOI.js";const P={components:{AdminNavBar:b,PageNation:v},data(){return{url:"https://vue3-course-api.hexschool.io",api_path:"wei123",blogPagination:{},title:"",content:"",author:"",articleCategory:"",tag:[],description:"",isPublic:!0,create_at:"",articles:"",bsModal:"",id:""}},methods:{checkAdmin(){const a=`${this.url}/api/user/check`;this.$http.post(a).then(()=>{this.getPageArticle(1)}).catch(e=>{alert(e.response.data.message),this.$router.push("/adminLogin")})},getPageArticle(a){this.$http.get(`${this.url}/v2/api/${this.api_path}/admin/articles?page=${a}`).then(e=>{this.articles=e.data.articles,this.blogPagination=e.data.pagination,this.title=e.data.articles.title,this.create_at=e.data.articles.create_at,this.description=e.data.articles.description,this.isPublic=e.data.articles.isPublic,this.tag=e.data.articles.tag,this.author=e.data.articles.author,this.content=e.data.articles.content,this.imageUrl=e.data.articles.imageUrl}).catch(e=>{console.log(e.response.data.message)})},deleteArticle(a){this.$http.delete(`${this.url}/v2/api/${this.api_path}/admin/article/${a}`).then(()=>{alert("刪除成功"),this.getPageArticle(1)}).catch(e=>{console.log(e.response.data.message)})},goAdviseArticle(a){this.$router.push(`/adviseArticle/${a}`)}},mounted(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a,this.checkAdmin()}},x={class:"container-fluid px-0"},w={class:"container py-48"},y={class:"container d-flex justify-content-between mb-24"},C=t("h2",{class:"fs-32"},"文章管理",-1),B={type:"button",class:"btn btn-dark"},N={class:"table mb-32"},V=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"標題文章"),t("th",{scope:"col"},"標題作者"),t("th",{scope:"col"},"是否公開"),t("th",{scope:"col"},"修改"),t("th",{scope:"col"},"刪除")])],-1),j=["onClick"],F=["onClick"],L={class:"container"},T={class:"container"};function U(a,e,z,D,d,n){const p=o("admin-nav-bar"),u=o("router-link"),_=o("page-nation"),g=o("router-view");return l(),c(h,null,[i(p),t("div",x,[t("div",w,[t("div",y,[C,t("button",B,[i(u,{to:"/newArticle",class:"text-white"},{default:$(()=>[f("建立新文章")]),_:1})])]),t("table",N,[V,t("tbody",null,[(l(!0),c(h,null,k(d.articles,s=>(l(),c("tr",{key:s.id},[t("td",null,r(s.title),1),t("td",null,r(s.author),1),t("td",null,r(s.isPublic?"是":"否"),1),t("td",null,[t("button",{class:"btn btn-success",onClick:m=>n.goAdviseArticle(s.id)}," 修改文章 ",8,j)]),t("td",null,[t("button",{class:"btn btn-danger",onClick:m=>n.deleteArticle(s.id)}," 刪除文章 ",8,F)])]))),128))])]),t("div",L,[i(_,{pagination:d.blogPagination,"get-page-products":n.getPageArticle,class:"d-flex justify-content-end"},null,8,["pagination","get-page-products"])])])]),t("div",T,[i(g)])],64)}const q=A(P,[["render",U]]);export{q as default};
