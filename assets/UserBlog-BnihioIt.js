import{N as u}from"./NavBar-BHJVETQs.js";import{P as v}from"./PageFooter-BwFVEHIO.js";import{_ as m,c as i,a as t,b as o,F as l,f,e as g,o as c,g as n,p as b,i as x,r as a}from"./index-C10YYT8w.js";const w={data(){return{url:"https://vue3-course-api.hexschool.io",api_path:"wei123",articles:{},pagination:{},isActive:!0}},components:{NavBar:u,PageFooter:v},methods:{getArticles(){this.$http(`${this.url}/v2/api/${this.api_path}/articles`).then(s=>{console.log(s),this.articles=s.data.articles,this.pagination=s.data.pagination,console.log(this.articles)}).catch(s=>{console.log(s.response.data.message)})}},mounted(){this.getArticles()}},y=s=>(b("data-v-607b010e"),s=s(),x(),s),k={class:"container-fluid px-0"},B={class:"container-fluid px-0"},N={class:"container px-0"},$={class:"row"},F=g('<div class="col-2" data-v-607b010e><ul class="list-unstyled mt-60 gy-16" data-v-607b010e><li class="fs-24 mb-16" data-v-607b010e><a href="" class="text-dark" data-v-607b010e>全部文章</a></li><li class="fs-24 mb-16" data-v-607b010e><a href="" class="text-dark" data-v-607b010e>最新消息</a></li><li class="fs-24 mb-16" data-v-607b010e><a href="" class="text-dark" data-v-607b010e>活動講座</a></li></ul></div>',1),S={class:"col-10"},V=y(()=>t("h3",{class:"fs-32 py-24 text-start"},"全部文章",-1)),A={class:"list-unstyled d-flex justify-content-between row row-cols-2"},I={class:""},P={class:"mb-8",style:{}},R=["src"],L={class:"fw-bold"},j={class:"liu-over"},C={class:"overflow-hidden w-100",style:{height:"120px"}},D={class:"container-fluid px-0"},E={class:"container"};function U(s,q,z,G,r,H){const d=a("NavBar"),_=a("RouterLink"),h=a("PageFooter"),p=a("RouterView");return c(),i(l,null,[t("div",k,[o(d)]),t("div",B,[t("div",N,[t("div",$,[F,t("div",S,[V,t("ul",A,[(c(!0),i(l,null,f(r.articles,e=>(c(),i("div",{class:"mb-16",key:e.id},[t("li",I,[o(_,{to:`/userArticle/:${e.id}`},null,8,["to"]),t("div",P,[t("img",{src:e.image,alt:"文章圖片",style:{height:"240px","object-fit":"cover"}},null,8,R)]),t("h3",L,n(e.title),1),t("h4",j,"作者： "+n(e.author),1),t("p",C,n(e.description),1)])]))),128))])])])]),t("div",D,[o(h)])]),t("div",E,[o(p)])],64)}const O=m(w,[["render",U],["__scopeId","data-v-607b010e"]]);export{O as default};
