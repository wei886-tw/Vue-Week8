import{_ as l,o as c,c as d,a as t,b as s,w as a,e,f as _,F as p,r}from"./index-COuicegl.js";const u={prop:["cartList"],mounted(){console.log(this.cartList)}},v={class:"container-fluid px-0"},f={class:"navbar navbar-expand-md bg-footer fixed-top py-8"},b={class:"container"},g=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),m={class:"collapse navbar-collapse",id:"navbarSupportedContent"},h={class:"navbar-nav me-auto mb-2 mb-lg-0 gap-md-24"},k={class:"nav-item"},x={class:"nav-item"},C={class:"nav-item"},L={class:"gap-md-24 list-unstyled"},y={class:"nav-item d-flex position-relative"},B={class:"bi bi-cart fs-32"},N={class:"position-absolute top-25 start-75 translate-middle badge rounded-pill bg-danger fs-12"},S=["cart-list"],$=t("div",{style:{height:"88px"}},null,-1);function R(n,V,w,F,T,D){const i=r("router-link"),o=r("RouterLink");return c(),d(p,null,[t("div",v,[t("nav",f,[t("div",b,[s(i,{to:"/",class:"fs-48 noto-serif me-16 text-dark router-link-active"},{default:a(()=>[e("3C Reuse")]),_:1}),g,t("div",m,[t("ul",h,[t("li",k,[s(i,{to:"/about",class:"fs-24 text-dark noto-serif nav-link router-link-active"},{default:a(()=>[e(" 關於 ")]),_:1})]),t("li",x,[s(o,{to:"/userBlog",class:"fs-24 noto-serif text-dark nav-link router-link-active"},{default:a(()=>[e("最新消息 ")]),_:1})]),t("li",C,[s(o,{to:"/userProduct",class:"fs-24 noto-serif text-dark nav-link router-link-active"},{default:a(()=>[e("商品 ")]),_:1})])]),t("ul",L,[t("li",y,[s(o,{to:"/userCart",class:"fs-24 noto-serif text-dark nav-link router-link-active"},{default:a(()=>[t("i",B,[t("span",N,[t("pre",{"cart-list":n.cartList},_(n.cartList),9,S)])])]),_:1})])])])])])]),$],64)}const P=l(u,[["render",R]]);export{P as N};
