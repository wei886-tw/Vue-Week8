import{N as h}from"./NavBar-ugevAGiN.js";import{P as m}from"./PageFooter-Dfy3SJuR.js";import{_ as g,c as i,b as r,a as t,h as a,F as l,g as u,i as f,o as n,p as b,f as v,r as p}from"./index-uwTm4qvF.js";const y={components:{NavBar:h,PageFooter:m},props:["id"],data(){return{url:"https://vue3-course-api.hexschool.io",api_path:"wei123",article:[],tag:[]}},methods:{getArticle(e){this.$http(`${this.url}/v2/api/${this.api_path}/article/${e}`).then(s=>{this.article=s.data.article,this.tag=s.data.article.tag}).catch(s=>{console.log(s.response.data.message)})}},mounted(){this.getArticle(this.id),console.log(this.tag)}},w=e=>(b("data-v-8ce042ab"),e=e(),v(),e),k={class:"container-fluid"},x={class:"container"},N={class:"row"},B={key:0,class:"col-lg-12 py-32"},I={class:"container d-flex flex-column align-items-center",style:{width:"80%"}},S=["src"],A={class:"fs-24 fs-lg-40 mb-16"},C={class:"container d-flex justify-content-start align-items-baseline"},F=w(()=>t("p",null,"文章分類：",-1)),V={class:"btn btn-primary"},j={class:"fs-16 fs-lg-24 new-line"};function P(e,s,D,E,o,L){const _=p("nav-bar"),d=p("page-footer");return n(),i(l,null,[r(_),t("div",k,[t("div",x,[t("div",N,[o.article?(n(),i("div",B,[t("div",I,[t("img",{src:o.article.image,alt:"文章圖片",style:{width:"70%",height:"50%","object-fit":"cover"},class:"mb-32 pt-60"},null,8,S),t("h2",A,a(o.article.title),1),t("div",C,[t("p",{class:"me-16",onClick:s[0]||(s[0]=(...c)=>e.test&&e.test(...c))},"作者："+a(o.article.author),1),F,(n(!0),i(l,null,u(o.article.tag,c=>(n(),i("button",{class:"btn btn-footer",key:c+23},a(c),1))),128)),t("button",V,a(o.article.tag),1)]),t("p",j,a(o.article.content),1)])])):f("",!0)])])]),r(d)],64)}const z=g(y,[["render",P],["__scopeId","data-v-8ce042ab"]]);export{z as default};
