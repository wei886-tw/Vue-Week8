import{N as m,P as u}from"./NavBar-BeLDodZV.js";import{_ as b,c as _,a as e,b as n,t as a,F as f,d as h,o as v,r as l}from"./index-C3_p6ebD.js";const x={props:["id"],components:{NavBar:m,PageFooter:u},data(){return{api_path:"wei123",url:"https://vue3-course-api.hexschool.io",order:""}},methods:{getOrderResult(){this.$http.get(`${this.url}/v2/api/${this.api_path}/order/${this.id}`).then(t=>{this.order=t.data.order}).catch(t=>{console.log(t.data.response.message)})},backToHomePage(){this.$router.push("/")}},mounted(){this.getOrderResult()}},g={class:"container-fluid px-0"},w={class:"container-fluid px-0 py-32 vh-100 mb-32"},y={class:"container"},j=h('<div class="row"><div class="col-sm-6 col-lg-8 mx-auto"><ol class="pay-list pt-32 mb-32 d-flex justify-content-between list-unstyled position-relative"><li class="d-flex flex-column align-items-center"><p class="number number-active d-flex justify-content-center align-items-center mb-8"> 1 </p><p class="fw-bold mb-0">訂單確認</p></li><li class="d-flex flex-column align-items-center"><p class="number number-active d-flex justify-content-center align-items-center mb-8"> 2 </p><p class="fw-bold mb-0">結帳付款</p></li><li class="d-flex flex-column align-items-center"><p class="number number-active d-flex justify-content-center align-items-center mb-8"> 3 </p><p class="fw-bold">訂單結果</p></li></ol><p class="mb-32"> ※ 您的訂單將在付款後開始訂製，付款後，從開始製作到寄出商品為 14 個工作天。 </p></div></div>',1),k={class:"row mb-32"},N={class:"container px-0 border-2 border-dark border-top border-bottom mb-32"},P={class:"container d-flex justify-content-between pt-8 mb-8"},B=e("p",null,"訂單編號：",-1),F=e("div",{class:"container d-flex justify-content-between pt-8 mb-8"},[e("p",null,"繳費狀態："),e("p",null,"已付款")],-1),$={class:"container d-flex justify-content-between mb-8"},H=e("p",null,"訂單總額：",-1),O={class:"row mb-32"},R={class:"container-fluid px-0"};function T(t,s,c,V,i,o){const r=l("NavBar"),d=l("PageFooter");return v(),_(f,null,[e("div",g,[n(r)]),e("div",w,[e("div",y,[j,e("div",k,[e("div",N,[e("div",P,[B,e("p",null,a(c.id),1)]),F,e("div",$,[H,e("p",null,a(Math.floor(i.order.total)),1)])])]),e("div",O,[e("button",{class:"btn btn-footer w-75 mx-auto hover",onClick:s[0]||(s[0]=(...p)=>o.backToHomePage&&o.backToHomePage(...p))}," 返回首頁 ")])])]),e("div",R,[n(d)])],64)}const D=b(x,[["render",T]]);export{D as default};
