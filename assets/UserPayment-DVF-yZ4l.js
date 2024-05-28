import{N as h}from"./NavBar-DQDQz50G.js";import{P as m}from"./PageFooter-Bpctn_Qd.js";import{_,c as u,a as t,b as c,t as i,F as f,d as b,o as g,r}from"./index-1YkEalHD.js";const v={props:["id"],components:{NavBar:h,PageFooter:m},data(){return{api_path:"wei123",url:"https://vue3-course-api.hexschool.io",cartList:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},paymentMethod:"",total:123,is_paid:!0}},methods:{emitIsPaidOut(){this.$emit("is-paid",this.is_paid)},getOrder(){this.$http.get(`${this.url}/v2/api/${this.api_path}/order/${this.id}`).then(e=>{this.is_paid=e.data.order.is_paid,this.total=e.data.order.total,this.$emit("emit-total",this.total)}).catch(e=>{console.log(e.response.data.message)})},getCartProducts(){this.$http.get(`${this.url}/v2/api/${this.api_path}/cart`).then(e=>{this.cartProducts=e.data.data.carts,this.cartList=e.data.data}).catch(e=>{console.log(e.response.data.message)})},payBill(e){this.$http.post(`${this.url}/v2/api/{api_path}/pay/${e}`).then(()=>{alert("成功付款"),this.$router.push(`/userOrderResult/${e}`)}).catch(s=>{console.log(s.response.data.message)})},selectChange(){this.paymentMethod=this.$refs.paymentMethod.value}},mounted(){this.getCartProducts(),this.getOrder()}},x={class:"container-fluid px-0"},y={class:"container-fluid px-0 py-32 vh-100"},$={class:"container"},w={class:"row"},P={class:"col-sm-6 col-lg-8 mx-auto"},B=b('<ol class="pay-list pt-32 mb-32 d-flex justify-content-between list-unstyled position-relative"><li class="d-flex flex-column align-items-center"><p class="number number-active d-flex justify-content-center align-items-center mb-8"> 1 </p><p class="fw-bold mb-0">訂單確認</p></li><li class="d-flex flex-column align-items-center"><p class="number number-active d-flex justify-content-center align-items-center mb-8"> 2 </p><p class="fw-bold">結帳付款</p></li><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center mb-8"> 3 </p><p class="fw-bold">訂單結果</p></li></ol>',1),C={class:"container px-0 border-2 border-dark border-top border-bottom mb-32"},j={class:"container d-flex justify-content-between pt-8 mb-8"},M=t("p",null,"訂單編號：",-1),N={class:"text-end"},F={class:"container d-flex justify-content-between pt-8 mb-8"},O=t("p",null,"繳費狀態：",-1),k={class:"container d-flex justify-content-between mb-8"},E=t("p",null,"訂單總額：",-1),V={class:"container px-0 position-relative"},A={action:""},I=t("option",{value:"",disabled:"",selected:"",class:"position-absolute"}," 請選擇付款方式 ",-1),L=t("option",{value:"刷卡"},"刷卡",-1),S=t("option",{value:"ATM 繳費"},"ATM 繳費",-1),T=[I,L,S],D={class:"container-fluid px-0"};function R(e,s,n,U,l,o){const d=r("NavBar"),p=r("PageFooter");return g(),u(f,null,[t("div",x,[c(d)]),t("div",y,[t("div",$,[t("div",w,[t("div",P,[B,t("div",C,[t("div",j,[M,t("p",N,i(n.id),1)]),t("div",F,[O,t("p",null,i(l.is_paid?"已付款":"尚未付款"),1)]),t("div",k,[E,t("p",null,i(Math.floor(l.total)),1)])]),t("div",V,[t("form",A,[t("select",{name:"payment",id:"payment",class:"w-100 border-2 mb-32",style:{height:"60px"},ref:"paymentMethod",onChange:s[0]||(s[0]=(...a)=>o.selectChange&&o.selectChange(...a))},T,544)]),t("button",{class:"btn btn-footer hover w-100",onClick:s[1]||(s[1]=a=>o.payBill(n.id)),onEmitIsPaidOut:s[2]||(s[2]=a=>e.getEmit(e.paid))}," 結帳付款 ",32)])])])])]),t("div",D,[c(p)])],64)}const H=_(v,[["render",R]]);export{H as default};
