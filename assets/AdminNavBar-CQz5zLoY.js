import{_ as d,e as _,l as u,j as t,i as s,g as e,z as o,k as i}from"./index-B5HPSdAc.js";const f={data(){return{api_path:"wei123",url:"https://vue3-course-api.hexschool.io"}},methods:{logOut(){this.$http.post(`${this.url}/v2/logout`).then(()=>{alert("成功登出"),this.$router.push("/")}).catch(n=>{console.log(n.data.message)})}},mounted(){window.scroll(0,0)}},p={class:"navbar navbar-expand-lg bg-footer"},m={class:"container"},h=t("p",{class:"noto-serif fs-48 text-dark me-16"},"3C Reuse",-1),v=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),g={class:"collapse navbar-collapse",id:"navbarSupportedContent"},x={class:"navbar-nav me-auto mb-2 mb-lg-0 gap-24"},b={class:"nav-item"},k={class:"nav-item"},C={class:"nav-item"},$={class:"nav-item"},B={class:"d-flex list-unstyled gap-md-24"},w={class:"nav-item"},y={class:"nav-item d-flex justify-content-end"},N={class:"nav-item d-flex justify-content-end"};function j(n,l,L,O,R,r){const a=i("RouterLink"),c=i("router-link");return _(),u("nav",p,[t("div",m,[h,v,t("div",g,[t("ul",x,[t("li",b,[s(a,{to:"/adminProducts",class:"fs-24 noto-serif text-dark"},{default:e(()=>[o("後台產品列表 ")]),_:1})]),t("li",k,[s(a,{to:"/adminOrders",class:"fs-24 noto-serif text-dark"},{default:e(()=>[o(" 訂單管理 ")]),_:1})]),t("li",C,[s(a,{to:"/adminCoupon",class:"fs-24 noto-serif text-dark"},{default:e(()=>[o(" 優惠券管理 ")]),_:1})]),t("li",$,[s(a,{to:"/adminBlog",class:"fs-24 noto-serif text-dark"},{default:e(()=>[o(" 文章管理 ")]),_:1})])]),t("ul",B,[t("li",w,[s(a,{to:"/",class:"fs-24 noto-serif text-dark"},{default:e(()=>[o("回到前台 ")]),_:1})]),t("li",y,[s(c,{to:"/adminLogin",class:"fs-24 noto-serif text-dark"},{default:e(()=>[o("登入 ")]),_:1})]),t("li",N,[t("a",{class:"fs-24 noto-serif text-dark",onClick:l[0]||(l[0]=S=>r.logOut())},"登出 ")])])])])])}const A=d(f,[["render",j]]);export{A};
