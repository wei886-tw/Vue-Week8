import{N as d}from"./NavBar-BHJVETQs.js";import{P as h}from"./PageFooter-BwFVEHIO.js";import{_ as m,c,b as i,a as t,g as a,h as f,F as g,o as r,r as n}from"./index-C10YYT8w.js";const u={components:{NavBar:d,PageFooter:h},props:["id"],data(){return{url:"https://vue3-course-api.hexschool.io",api_path:"wei123",article:[]}},methods:{getArticle(o){this.$http(`${this.url}/v2/api/${this.api_path}/article/${o}`).then(e=>{this.article=e.data.article}).catch(e=>{console.log(e.response.data.message)})}},mounted(){this.getArticle(this.id)}},v={class:"container-fluid"},b={class:"container"},w={class:"row"},y={key:0,class:"col-lg-12 py-40"},N={class:"container d-flex flex-column align-items-center",style:{width:"80%"}},k=["src"],x={class:"fs-24 fs-lg-40 mb-16"},B={class:"fs-16 fs-lg-24 new-line"};function A(o,e,C,F,s,V){const l=n("nav-bar"),p=n("page-footer");return r(),c(g,null,[i(l),t("div",v,[t("div",b,[t("div",w,[s.article?(r(),c("div",y,[t("div",N,[t("img",{src:s.article.image,alt:"文章圖片",style:{width:"70%",height:"50%","object-fit":"cover"},class:"mb-32 pt-60"},null,8,k),t("h2",x,a(s.article.title),1),t("p",{class:"mb-16",onClick:e[0]||(e[0]=(..._)=>o.test&&o.test(..._))},"作者："+a(s.article.author),1),t("p",B,a(s.article.content),1)])])):f("",!0)])])]),i(p)],64)}const D=m(u,[["render",A],["__scopeId","data-v-641b60da"]]);export{D as default};
