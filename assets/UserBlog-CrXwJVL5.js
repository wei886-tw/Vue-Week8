import{N as u}from"./NavBar-B3qpa_Ln.js";import{P as v}from"./PageFooter-DA5hyR9J.js";import{_ as f,c,a as t,b as e,F as n,f as m,e as g,o as i,w as x,g as l,p as w,i as k,r as o}from"./index-C5LY68Hd.js";const y={data(){return{url:"https://vue3-course-api.hexschool.io",api_path:"wei123",articles:{},pagination:{},isActive:!0}},components:{NavBar:u,PageFooter:v},methods:{getArticles(){this.$http(`${this.url}/v2/api/${this.api_path}/articles`).then(s=>{console.log(s),this.articles=s.data.articles,this.pagination=s.data.pagination,console.log(this.articles)}).catch(s=>{console.log(s.response.data.message)})}},mounted(){this.getArticles()}},b=s=>(w("data-v-3c16c814"),s=s(),k(),s),B={class:"container-fluid px-0"},N={class:"container-fluid px-0"},$={class:"container px-0"},F={class:"row"},S=g('<div class="col-2" data-v-3c16c814><ul class="list-unstyled mt-60 gy-16" data-v-3c16c814><li class="fs-24 mb-16" data-v-3c16c814><a href="" class="text-dark special" data-v-3c16c814>全部文章</a></li><li class="fs-24 mb-16" data-v-3c16c814><a href="" class="text-dark special" data-v-3c16c814>最新消息</a></li><li class="fs-24 mb-16" data-v-3c16c814><a href="" class="text-dark special" data-v-3c16c814>本站獨家</a></li><li class="fs-24 mb-16" data-v-3c16c814><a href="" class="text-dark special" data-v-3c16c814>活動消息</a></li></ul></div>',1),V={class:"col-10"},A=b(()=>t("h3",{class:"fs-32 py-24 text-start"},"全部文章",-1)),I={class:"list-unstyled d-flex justify-content-between row row-cols-2"},P={class:""},j={class:"mb-8",style:{}},C=["src"],R={class:"fw-bold text-dark"},D={style:{color:"#7B7B7B"}},E={class:"overflow-hidden text-dark w-100",style:{height:"120px"}},L={class:"container-fluid px-0"},U={class:"container"};function q(s,z,G,H,r,J){const d=o("NavBar"),_=o("router-link"),p=o("PageFooter"),h=o("RouterView");return i(),c(n,null,[t("div",B,[e(d)]),t("div",N,[t("div",$,[t("div",F,[S,t("div",V,[A,t("ul",I,[(i(!0),c(n,null,m(r.articles,a=>(i(),c("div",{class:"mb-16",key:a.id},[t("li",P,[e(_,{to:`/userArticle/${a.id}`},{default:x(()=>[t("div",j,[t("img",{src:a.image,alt:"文章圖片",style:{height:"240px","object-fit":"cover"}},null,8,C)]),t("h3",R,l(a.title),1),t("h4",D,"作者： "+l(a.author),1),t("p",E,l(a.description),1)]),_:2},1032,["to"])])]))),128))])])])]),t("div",L,[e(p)])]),t("div",U,[e(h)])],64)}const Q=f(y,[["render",q],["__scopeId","data-v-3c16c814"]]);export{Q as default};
