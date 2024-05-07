import{N as h}from"./NavBar-CEgTuS_m.js";import{P as _}from"./PageFooter-BUnSXT9Q.js";import{_ as b,c as v,b as l,a as e,w as g,F as x,e as V,r as n,o as y,n as m}from"./index-Dq4e-JnD.js";const w={components:{NavBarVue:h,PageFooterVue:_},data(){return{api_path:"wei123",url:"https://vue3-course-api.hexschool.io",selectValue:"",cartProducts:[],cartList:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},total:"",create_at:"",orderId:"",data:""}},methods:{isPhone(s){return/^(09)[0-9]{8}$/.test(s)?!0:"需要正確的電話號碼"},getCartProducts(){this.$http.get(`${this.url}/v2/api/${this.api_path}/cart`).then(s=>{this.cartProducts=s.data.data.carts,this.cartList=s.data.data,console.log(this.cartProducts)}).catch(s=>{console.log(s.response.data.message)})},submitOrder(){this.cartList.carts.length===0?alert("目前購物車是空的，請加入產品！"):this.$http.post(`${this.url}/v2/api/${this.api_path}/order`,{data:{user:{name:this.form.user.name,email:this.form.user.email,tel:this.form.user.tel,address:this.form.user.address},message:this.form.message}}).then(s=>{this.orderId=s.data.orderId,console.log(this.orderId),alert("success"),this.$refs.form.reset(),this.data=s.data,this.total=s.data.total,this.create_at=s.create_at}).catch(s=>{console.log(s.response.data.message)})}},mounted(){this.getCartProducts()}},N={class:"container-fluid px-0"},P=V('<h1 class="fs-24 fs-md-40 mb-32 text-center pt-32">購物車</h1><div class="container"><div class="row"><div class="col-md-6 mx-auto"><ol class="pay-list mt-16 d-flex justify-content-between list-unstyled position-relative"><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center number-active mb-8"> 1 </p><p class="fw-bold mb-0">訂單確認</p></li><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center mb-8"> 2 </p><p class="fw-bold mb-0">結帳付款</p></li><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center mb-8"> 3 </p><p class="fw-bold">訂單結果</p></li></ol></div></div></div>',2),k={class:"container"},j={class:"row justify-content-center"},C={class:"col-md-6"},U={class:"mb-12"},B=e("label",{for:"email",class:"form-label"},null,-1),F={class:"mb-12"},I=e("label",{for:"inputName",class:"form-label"},null,-1),O={class:"mb-12"},q=e("label",{for:"inputTelephone",class:"form-label"},null,-1),L={class:"mb-12"},A=e("label",{for:"inputAddress",class:"form-label"},null,-1),E={class:"mb-24 d-flex flex-column"},T=e("label",{for:"message",class:"form-label"},null,-1),z={class:"d-flex justify-content-center"};function S(s,t,D,G,o,c){const u=n("nav-bar-vue"),r=n("v-field"),i=n("error-message"),f=n("v-form"),p=n("page-footer-vue");return y(),v(x,null,[l(u),e("div",N,[P,e("div",k,[e("div",j,[e("div",C,[l(f,{ref:"form",id:"form"},{default:g(({errors:d})=>[e("div",U,[B,l(r,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":d.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.form.user.email,"onUpdate:modelValue":t[0]||(t[0]=a=>o.form.user.email=a)},null,8,["class","modelValue"]),l(i,{name:"email",class:"invalid-feedback"})]),e("div",F,[I,l(r,{type:"text",class:m(["form-control",{"is-invalid":d.姓名}]),id:"inputName",name:"姓名",placeholder:"請輸入姓名",rules:"required",modelValue:o.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=a=>o.form.user.name=a)},null,8,["class","modelValue"]),l(i,{name:"姓名",class:"invalid-feedback"})]),e("div",O,[q,l(r,{type:"tel",class:m(["form-control",{"is-invalid":d.電話}]),id:"inputTelephone",name:"電話",placeholder:"請輸入電話",rules:c.isPhone,modelValue:o.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=a=>o.form.user.tel=a)},null,8,["class","rules","modelValue"]),l(i,{name:"電話",class:"invalid-feedback"})]),e("div",L,[A,l(r,{type:"text",class:m(["form-control",{"is-invalid":d.地址}]),id:"inputAddress",name:"地址",placeholder:"請輸入地址",rules:"required",modelValue:o.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=a=>o.form.user.address=a)},null,8,["class","modelValue"]),l(i,{name:"地址",class:"invalid-feedback"})]),e("div",E,[T,l(r,{name:"message",id:"message",cols:"30",style:{height:"fit-content"},class:"form-control border border-1 rounded",modelValue:o.form.message,"onUpdate:modelValue":t[4]||(t[4]=a=>o.form.message=a),as:"textarea",placeholder:"請輸入留言"},null,8,["modelValue"])]),e("div",z,[e("button",{type:"submit",class:"btn btn-footer w-100 mb-60",onClick:t[5]||(t[5]=(...a)=>c.submitOrder&&c.submitOrder(...a))}," 送出訂單 ")])]),_:1},512)])])])]),l(p)],64)}const M=b(w,[["render",S]]);export{M as default};
