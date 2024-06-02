import{N as f,P as v}from"./NavBar-DEUIZtxQ.js";import{_ as b,c as g,a as t,b as o,t as i,w as l,F as x,d as y,r as a,o as $,n as w}from"./index-BCXuYK8v.js";const C={props:["id"],components:{NavBar:f,PageFooter:v},data(){return{api_path:"wei123",url:"https://vue3-course-api.hexschool.io",cartList:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},paymentMethod:"",total:123,is_paid:!0}},methods:{emitIsPaidOut(){this.$emit("is-paid",this.is_paid)},getOrder(){this.$http.get(`${this.url}/v2/api/${this.api_path}/order/${this.id}`).then(e=>{this.is_paid=e.data.order.is_paid,this.total=e.data.order.total,this.$emit("emit-total",this.total)}).catch(e=>{console.log(e.response.data.message)})},getCartProducts(){this.$http.get(`${this.url}/v2/api/${this.api_path}/cart`).then(e=>{this.cartProducts=e.data.data.carts,this.cartList=e.data.data}).catch(e=>{console.log(e.response.data.message)})},payBill(e){this.$http.post(`${this.url}/v2/api/{api_path}/pay/${e}`).then(()=>{alert("成功付款"),this.$router.push(`/userOrderResult/${e}`)}).catch(s=>{console.log(s.response.data.message)})},selectChange(){this.paymentMethod=this.$refs.paymentMethod.value}},mounted(){this.getCartProducts(),this.getOrder()}},P={class:"container-fluid px-0"},B={class:"container-fluid px-0 py-32 vh-100 mb-32"},j={class:"container"},M={class:"row"},N={class:"col-sm-6 col-lg-8 mx-auto"},k=y('<ol class="pay-list pt-32 mb-32 d-flex justify-content-between list-unstyled position-relative"><li class="d-flex flex-column align-items-center"><p class="number number-active d-flex justify-content-center align-items-center mb-8"> 1 </p><p class="fw-bold mb-0">訂單確認</p></li><li class="d-flex flex-column align-items-center"><p class="number number-active d-flex justify-content-center align-items-center mb-8"> 2 </p><p class="fw-bold">結帳付款</p></li><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center mb-8"> 3 </p><p class="fw-bold">訂單結果</p></li></ol>',1),F={class:"container px-0 border-2 border-dark border-top border-bottom mb-32"},O={class:"container d-flex justify-content-between pt-8 mb-8"},E=t("p",null,"訂單編號：",-1),V={class:"text-end"},A={class:"container d-flex justify-content-between pt-8 mb-8"},I=t("p",null,"繳費狀態：",-1),L={class:"container d-flex justify-content-between mb-8"},S=t("p",null,"訂單總額：",-1),T={class:"container px-0 position-relative"},q=t("option",{value:"請選擇付款方式",disabled:"",selected:""}," 請選擇付款方式 ",-1),z=t("option",{value:"刷卡"},"刷卡",-1),D=t("option",{value:"ATM 繳費"},"ATM 繳費",-1),R=t("span",{class:"text-danger"},"付款方式必選",-1),U={class:"container-fluid px-0"};function G(e,s,c,H,r,d){const p=a("NavBar"),m=a("v-field"),h=a("error-message"),_=a("v-form"),u=a("PageFooter");return $(),g(x,null,[t("div",P,[o(p)]),t("div",B,[t("div",j,[t("div",M,[t("div",N,[k,t("div",F,[t("div",O,[E,t("p",V,i(c.id),1)]),t("div",A,[I,t("p",null,i(r.is_paid?"已付款":"尚未付款"),1)]),t("div",L,[S,t("p",null,i(Math.floor(r.total)),1)])]),t("div",T,[o(_,null,{default:l(({errors:n})=>[o(m,{name:"付款方式",id:"payment",as:"select",class:w(["w-100 border-2 mb-32 form-control",{"is-invalid":n.付款方式}]),placeholder:"請選擇付款方式",ref:"paymentMethod",rules:"required",onChange:d.selectChange},{default:l(()=>[q,z,D]),_:2},1032,["class","onChange"]),o(h,{name:"付款方式",class:"invalid-feedback"},{default:l(()=>[R]),_:1})]),_:1}),t("button",{class:"btn btn-footer hover w-100",onClick:s[0]||(s[0]=n=>d.payBill(c.id)),onEmitIsPaidOut:s[1]||(s[1]=n=>e.getEmit(e.paid))}," 結帳付款 ",32)])])])])]),t("div",U,[o(u)])],64)}const Q=b(C,[["render",G]]);export{Q as default};
