import{N as h}from"./NavBar-Cv5XLuYE.js";import{P as m}from"./PageFooter-BVJIngsi.js";import{_ as u,c as _,b as r,a as t,t as i,F as f,e as b,o as g,r as c}from"./index-Djt5uYPB.js";const v={props:["id"],components:{NavBarVue:h,PageFooterVue:m},data(){return{api_path:"wei123",url:"https://vue3-course-api.hexschool.io",cartList:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},paymentMethod:"",total:123,is_paid:!0}},methods:{emitIsPaidOut(){this.$emit("is-paid",this.is_paid)},getOrder(){this.$http.get(`${this.url}/v2/api/${this.api_path}/order/${this.id}`).then(e=>{this.is_paid=e.data.order.is_paid,this.total=e.data.order.total,this.$emit("emit-total",this.total)}).catch(e=>{console.log(e.response.data.message)})},getCartProducts(){this.$http.get(`${this.url}/v2/api/${this.api_path}/cart`).then(e=>{this.cartProducts=e.data.data.carts,this.cartList=e.data.data}).catch(e=>{console.log(e.response.data.message)})},payBill(e){this.$http.post(`${this.url}/v2/api/{api_path}/pay/${e}`).then(()=>{alert("成功付款"),this.$router.push(`/userOrderResult/${e}`)}).catch(s=>{console.log(s.response.data.message)})},selectChange(){this.paymentMethod=this.$refs.paymentMethod.value}},mounted(){this.getCartProducts(),this.getOrder()}},y={class:"container-fluid px-0 py-32 vh-100"},x={class:"container"},$={class:"row"},w={class:"col-sm-6 col-lg-8 mx-auto"},B=b('<ol class="pay-list pt-32 mb-32 d-flex justify-content-between list-unstyled position-relative"><li class="d-flex flex-column align-items-center"><p class="number number-active d-flex justify-content-center align-items-center mb-8"> 1 </p><p class="fw-bold mb-0">訂單確認</p></li><li class="d-flex flex-column align-items-center"><p class="number number-active d-flex justify-content-center align-items-center mb-8"> 2 </p><p class="fw-bold mb-0">結帳付款</p></li><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center mb-8"> 3 </p><p class="fw-bold">訂單結果</p></li></ol>',1),P={class:"container px-0 border-2 border-dark border-top border-bottom mb-32"},C={class:"container d-flex justify-content-between pt-8 mb-8"},N=t("p",null,"訂單編號：",-1),j={class:"container d-flex justify-content-between pt-8 mb-8"},V=t("p",null,"繳費狀態：",-1),M={class:"container d-flex justify-content-between mb-8"},O=t("p",null,"訂單總額：",-1),k={class:"container px-0 position-relative"},F={action:""},E=t("option",{value:"",disabled:"",selected:"",class:"position-absolute"}," 請選擇付款方式 ",-1),A=t("option",{value:"刷卡"},"刷卡",-1),I=t("option",{value:"ATM 繳費"},"ATM 繳費",-1),L=[E,A,I];function S(e,s,n,T,l,o){const d=c("NavBarVue"),p=c("page-footer-vue");return g(),_(f,null,[r(d),t("div",y,[t("div",x,[t("div",$,[t("div",w,[B,t("div",P,[t("div",C,[N,t("p",null,i(n.id),1)]),t("div",j,[V,t("p",null,i(l.is_paid?"已付款":"尚未付款"),1)]),t("div",M,[O,t("p",null,i(l.total),1)])]),t("div",k,[t("form",F,[t("select",{name:"payment",id:"payment",class:"w-100 border-2 mb-32",style:{height:"60px"},ref:"paymentMethod",onChange:s[0]||(s[0]=(...a)=>o.selectChange&&o.selectChange(...a))},L,544)]),t("button",{class:"btn btn-footer hover w-100",onClick:s[1]||(s[1]=a=>o.payBill(n.id)),onEmitIsPaidOut:s[2]||(s[2]=a=>e.getEmit(e.paid))}," 結帳付款 ",32)])])])])]),r(p)],64)}const q=u(v,[["render",S]]);export{q as default};
