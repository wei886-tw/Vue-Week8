import{N as m,P as u}from"./NavBar-CdZSKITH.js";import{_ as g,l as i,i as n,j as t,y as c,F as d,v as f,x as v,e as r,g as x,A as b,q as k,s as w,k as l}from"./index-CFdjDOx5.js";const y={components:{NavBar:m,PageFooter:u},props:["id"],data(){return{url:"https://vue3-course-api.hexschool.io",api_path:"wei123",article:[],tag:[],tagArr:[]}},methods:{getArticle(e){this.$http(`${this.url}/v2/api/${this.api_path}/article/${e}`).then(s=>{this.article=s.data.article,this.tagArr=s.data.article.tag.split("、")}).catch(s=>{console.log(s.response.data.message)})}},mounted(){this.getArticle(this.id)}},A=e=>(k("data-v-62ed6207"),e=e(),w(),e),N={class:"container-fluid"},B={class:"container"},C={class:"row"},I={key:0,class:"col-lg-12 py-32"},S={class:"container d-flex flex-column align-items-center",style:{width:"80%"}},V=["src"],j={class:"fs-24 fs-lg-40 mb-16"},F={class:"container px-0 d-flex justify-content-start align-items-baseline mb-8"},P=A(()=>t("p",null,"文章分類：",-1)),$={class:"fs-16 fs-lg-24 new-line"};function q(e,s,D,E,o,L){const p=l("nav-bar"),_=l("router-link"),h=l("page-footer");return r(),i(d,null,[n(p),t("div",N,[t("div",B,[t("div",C,[o.article?(r(),i("div",I,[t("div",S,[t("img",{src:o.article.image,alt:"文章圖片",style:{width:"70%",height:"50%","object-fit":"cover"},class:"mb-32 pt-60"},null,8,V),t("h2",j,c(o.article.title),1),t("div",F,[t("p",{class:"me-16",onClick:s[0]||(s[0]=(...a)=>e.test&&e.test(...a))},"作者："+c(o.article.author),1),P,(r(!0),i(d,null,f(o.tagArr,a=>(r(),i("button",{class:"btn btn-dark-gray text-white me-8",key:a+1},[n(_,{class:"text-white"},{default:x(()=>[b(c(a),1)]),_:2},1024)]))),128))]),t("p",$,c(o.article.content),1)])])):v("",!0)])])]),n(h)],64)}const z=g(y,[["render",q],["__scopeId","data-v-62ed6207"]]);export{z as default};
//# sourceMappingURL=UserArticle-CWuV37MR.js.map
