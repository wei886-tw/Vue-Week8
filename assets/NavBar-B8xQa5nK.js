import{l as d,q as c,m as p,g as u,_,o as g,c as h,a as t,b as s,w as o,e as n,t as r,F as m,r as v,p as f,f as b}from"./index-BsJ-fBQW.js";const i=d("cartStore",{state:()=>({storeCart:[],api_path:"wei123",url:"https://vue3-course-api.hexschool.io"}),getters:{},actions:{getCartList(){c.get(`${this.url}/v2/api/${this.api_path}/cart`).then(e=>{this.storeCart=e.data.data.carts}).catch(e=>{this.storeCart=[],console.log(e.response.data.message)})}}}),k={props:["cartProducts"],data(){return{api_path:"wei123",url:"https://vue3-course-api.hexschool.io"}},computed:{...p(i,["storeCart"])},methods:{...u(i,["getCartList"])},mounted(){this.getCartList()}},l=e=>(f("data-v-d63c3724"),e=e(),b(),e),C={class:"container-fluid px-0 w-100"},x={class:"navbar navbar-expand-md bg-footer fixed-top py-8"},S={class:"container"},$={class:"bi bi-cart fs-md-28 fs-lg-32 text-end align-middle"},w={class:"position-absolute top-25 start-75 translate-middle badge rounded-pill bg-danger fs-12 align-middle mt-4"},y=l(()=>t("button",{class:"navbar-toggler px-4 py-4",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1)),B={class:"collapse navbar-collapse",id:"navbarSupportedContent"},N={class:"navbar-nav me-auto mb-2 mb-lg-0 gap-md-24"},I={class:"nav-item"},L={class:"nav-item"},V={class:"nav-item"},F={class:"bi bi-cart fs-md-28 fs-lg-32 text-end align-middle"},P={class:"position-absolute top-25 start-75 translate-middle badge rounded-pill bg-danger fs-12 align-middle mt-4"},T=l(()=>t("div",{style:{height:"88px"}},null,-1));function q(e,A,D,E,R,j){const a=v("router-link");return g(),h(m,null,[t("div",C,[t("nav",x,[t("div",S,[s(a,{to:"/",class:"fs-48 fs-md-48 noto-serif me-md-16 text-dark router-link-active"},{default:o(()=>[n("3C Reuse")]),_:1}),s(a,{to:"/userCart",class:"fs-24 noto-serif text-dark nav-link router-link-active underline ms-auto me-24 d-md-none"},{default:o(()=>[t("i",$,[t("span",w,[t("p",null,r(e.storeCart.length?`${e.storeCart.length}`:0),1)])])]),_:1}),y,t("div",B,[t("ul",N,[t("li",I,[s(a,{to:"/about",class:"fs-24 text-dark noto-serif nav-link router-link-active underline"},{default:o(()=>[n(" 品牌故事 ")]),_:1})]),t("li",L,[s(a,{to:"/userBlog",class:"fs-24 noto-serif text-dark nav-link router-link-active underline"},{default:o(()=>[n("最新消息 ")]),_:1})]),t("li",V,[s(a,{to:"/userProduct",class:"fs-24 noto-serif text-dark nav-link router-link-active underline"},{default:o(()=>[n("商品 ")]),_:1})])])]),s(a,{to:"/userCart",class:"fs-24 noto-serif text-dark nav-link router-link-active underline ms-auto me-16 d-none d-md-block"},{default:o(()=>[t("i",F,[t("span",P,[t("p",null,r(e.storeCart.length?`${e.storeCart.length}`:0),1)])])]),_:1})])])]),T],64)}const G=_(k,[["render",q],["__scopeId","data-v-d63c3724"]]);export{G as N,i as c};
