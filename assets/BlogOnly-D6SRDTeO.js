import{N as x,P as b}from"./NavBar-_ajjfRyu.js";import{S as w}from"./SideNavbar-CC2bHiTL.js";import{_ as k,l as n,j as t,i as e,g as c,F as u,v as y,k as i,e as r,z as l,y as d,q as N,s as B}from"./index-B5HPSdAc.js";const S={data(){return{url:"https://vue3-course-api.hexschool.io",api_path:"wei123",articles:{},pagination:{},isActive:!0}},components:{NavBar:x,PageFooter:b,SideNavbar:w},methods:{getArticles(){this.$http(`${this.url}/v2/api/${this.api_path}/articles`).then(s=>{this.articles=s.data.articles,this.articles=this.articles.filter(h=>h.tag.indexOf("本站獨家")!==-1),this.pagination=s.data.pagination}).catch(s=>{console.log(s.response.data.message)})}},mounted(){this.getArticles()}},_=s=>(N("data-v-f719efc7"),s=s(),B(),s),$={class:"container-fluid px-0"},j={class:"container-fluid px-0"},F={class:"container pt-32"},V={class:"row d-flex"},A={class:"col-lg-10"},I=_(()=>t("h3",{class:"fs-40 py-24 text-start"},"本站獨家",-1)),P=_(()=>t("hr",null,null,-1)),O={class:"list-unstyled gy-16 d-flex d-block d-lg-none justify-content-between"},C={class:"fs-16 fs-md-24 mb-16"},E={class:"fs-16 fs-md-24 mb-16"},R={class:"fs-16 fs-md-24 mb-16"},q={class:"fs-16 fs-md-24 mb-16"},z=_(()=>t("hr",null,null,-1)),D={class:"list-unstyled d-flex justify-content-between row row-cols-1 row-cols-md-2 row-sm-cols-1"},L={class:""},T={class:"mb-8 d-flex flex-column justify-content-between"},G=["src"],H={class:"fw-bold text-dark"},J={style:{color:"#7b7b7b"}},K={class:"overflow-hidden text-dark w-100",style:{height:"120px"}};function M(s,h,Q,U,p,W){const f=i("NavBar"),m=i("SideNavbar"),a=i("router-link"),v=i("PageFooter"),g=i("RouterView");return r(),n(u,null,[t("div",$,[e(f)]),t("div",j,[t("div",F,[t("div",V,[e(m,{class:"col-2"}),t("div",A,[I,P,t("ul",O,[t("li",C,[e(a,{to:"/userBlog",class:"router-link-active text-dark hover"},{default:c(()=>[l("全部文章")]),_:1})]),t("li",E,[e(a,{to:"/blogNews",class:"router-link-active text-dark hover"},{default:c(()=>[l("最新消息")]),_:1})]),t("li",R,[e(a,{to:"/blogOnly",class:"router-link-active text-dark hover"},{default:c(()=>[l("本站獨家")]),_:1})]),t("li",q,[e(a,{to:"/blogEvent",class:"router-link-active text-dark hover"},{default:c(()=>[l("活動講座")]),_:1})]),z]),t("ul",D,[(r(!0),n(u,null,y(p.articles,o=>(r(),n("div",{class:"mb-16 d-flex flex-column justify-content-between",key:o.id},[t("li",L,[e(a,{to:`/userArticle/${o.id}`},{default:c(()=>[t("div",T,[t("img",{src:o.image,alt:"文章圖片",style:{height:"240px",width:"100%","object-fit":"cover"},class:"mb-16"},null,8,G),t("h3",H,d(o.title),1),t("h4",J,"作者： "+d(o.author),1),t("p",K,d(o.description),1)])]),_:2},1032,["to"])])]))),128))])])])]),e(v)]),e(g)],64)}const tt=k(S,[["render",M],["__scopeId","data-v-f719efc7"]]);export{tt as default};
