import{N as h}from"./NavBar-DqkEBm7g.js";import{P as m}from"./PageFooter-B4uhhdeB.js";import{_ as u,c as i,b as n,a as t,t as r,F as l,f as g,h as f,o as c,p as v,e as b,r as p}from"./index-BF4a2MnW.js";const y={components:{NavBar:h,PageFooter:m},props:["id"],data(){return{url:"https://vue3-course-api.hexschool.io",api_path:"wei123",article:[],tag:[],tagArr:[]}},methods:{getArticle(e){this.$http(`${this.url}/v2/api/${this.api_path}/article/${e}`).then(s=>{this.article=s.data.article,this.tagArr=s.data.article.tag.split("、")}).catch(s=>{console.log(s.response.data.message)})}},mounted(){this.getArticle(this.id)}},w=e=>(v("data-v-0503e4b8"),e=e(),b(),e),k={class:"container-fluid"},x={class:"container"},A={class:"row"},N={key:0,class:"col-lg-12 py-32"},B={class:"container d-flex flex-column align-items-center",style:{width:"80%"}},I=["src"],S={class:"fs-24 fs-lg-40 mb-16"},C={class:"container d-flex justify-content-start align-items-baseline mb-8"},F=w(()=>t("p",null,"文章分類：",-1)),V={class:"fs-16 fs-lg-24 new-line"};function j(e,s,P,$,o,D){const d=p("nav-bar"),_=p("page-footer");return c(),i(l,null,[n(d),t("div",k,[t("div",x,[t("div",A,[o.article?(c(),i("div",N,[t("div",B,[t("img",{src:o.article.image,alt:"文章圖片",style:{width:"70%",height:"50%","object-fit":"cover"},class:"mb-32 pt-60"},null,8,I),t("h2",S,r(o.article.title),1),t("div",C,[t("p",{class:"me-16",onClick:s[0]||(s[0]=(...a)=>e.test&&e.test(...a))},"作者："+r(o.article.author),1),F,(c(!0),i(l,null,g(o.tagArr,a=>(c(),i("button",{class:"btn btn-dark-gray text-white me-8",key:a+1},r(a),1))),128))]),t("p",V,r(o.article.content),1)])])):f("",!0)])])]),n(_)],64)}const q=u(y,[["render",j],["__scopeId","data-v-0503e4b8"]]);export{q as default};
