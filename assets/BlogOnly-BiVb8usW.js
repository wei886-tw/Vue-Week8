import{N as x,P as b}from"./NavBar-cGQiUeEF.js";import{S as w}from"./SideNavbar-DqhH3zYF.js";import{_ as k,l as c,j as t,i as e,g as i,F as u,x as y,k as l,e as r,A as n,z as d,q as N,s as $}from"./index-BNNAF0AP.js";const B={data(){return{url:"https://vue3-course-api.hexschool.io",api_path:"wei123",articles:{},pagination:{},isActive:!0}},components:{NavBar:x,PageFooter:b,SideNavbar:w},methods:{getArticles(){this.$http(`${this.url}/v2/api/${this.api_path}/articles`).then(s=>{this.articles=s.data.articles,this.articles=this.articles.filter(h=>h.tag.indexOf("本站獨家")!==-1),this.pagination=s.data.pagination}).catch(s=>{console.log(s.response.data.message)})},loadingCircle(){let s=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!0,onCancel:this.onCancel});setTimeout(()=>{s.hide()},500)}},mounted(){this.getArticles(),this.loadingCircle()}},_=s=>(N("data-v-354ab0c5"),s=s(),$(),s),C={class:"container-fluid px-0"},S={class:"container-fluid px-0"},j={class:"container pt-32"},A={class:"row d-flex"},F={class:"col-lg-10"},P=_(()=>t("h3",{class:"fs-40 py-24 text-start"},"本站獨家",-1)),V=_(()=>t("hr",null,null,-1)),I={class:"list-unstyled gy-16 d-flex d-block d-lg-none justify-content-between"},O={class:"fs-16 fs-md-24 mb-16"},E={class:"fs-16 fs-md-24 mb-16"},R={class:"fs-16 fs-md-24 mb-16"},T={class:"fs-16 fs-md-24 mb-16"},q=_(()=>t("hr",null,null,-1)),z={class:"list-unstyled d-flex justify-content-between row row-cols-1 row-cols-md-2 row-sm-cols-1"},D={class:""},L={class:"mb-8 d-flex flex-column justify-content-between"},G=["src"],H={class:"fw-bold text-dark"},J={style:{color:"#7b7b7b"}},K={class:"overflow-hidden text-dark w-100",style:{height:"120px"}};function M(s,h,Q,U,p,W){const f=l("NavBar"),m=l("SideNavbar"),a=l("router-link"),g=l("PageFooter"),v=l("RouterView");return r(),c(u,null,[t("div",C,[e(f)]),t("div",S,[t("div",j,[t("div",A,[e(m,{class:"col-2"}),t("div",F,[P,V,t("ul",I,[t("li",O,[e(a,{to:"/userBlog",class:"router-link-active text-dark hover"},{default:i(()=>[n("全部文章")]),_:1})]),t("li",E,[e(a,{to:"/blogNews",class:"router-link-active text-dark hover"},{default:i(()=>[n("最新消息")]),_:1})]),t("li",R,[e(a,{to:"/blogOnly",class:"router-link-active text-dark hover"},{default:i(()=>[n("本站獨家")]),_:1})]),t("li",T,[e(a,{to:"/blogEvent",class:"router-link-active text-dark hover"},{default:i(()=>[n("活動講座")]),_:1})]),q]),t("ul",z,[(r(!0),c(u,null,y(p.articles,o=>(r(),c("div",{class:"mb-16 d-flex flex-column justify-content-between",key:o.id},[t("li",D,[e(a,{to:`/userArticle/${o.id}`},{default:i(()=>[t("div",L,[t("img",{src:o.image,alt:"文章圖片",style:{height:"240px",width:"100%","object-fit":"cover"},class:"mb-16"},null,8,G),t("h3",H,d(o.title),1),t("h4",J,"作者： "+d(o.author),1),t("p",K,d(o.description),1)])]),_:2},1032,["to"])])]))),128))])])])]),e(g)]),e(v)],64)}const tt=k(B,[["render",M],["__scopeId","data-v-354ab0c5"]]);export{tt as default};
