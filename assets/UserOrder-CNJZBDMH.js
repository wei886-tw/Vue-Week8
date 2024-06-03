import{N as h,P as _}from"./NavBar-B0Kn1OEF.js";import{_ as b,l as v,j as e,i as l,g,F as x,m as V,k as n,e as y,A as m}from"./index-DYY1owia.js";const N={components:{NavBar:h,PageFooter:_},data(){return{api_path:"wei123",url:"https://vue3-course-api.hexschool.io",cartProducts:[],cartList:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},total:"",create_at:"",orderId:"",data:""}},methods:{isPhone(s){return/^(09)[0-9]{8}$/.test(s)?!0:"需要正確的電話號碼"},getCartProducts(){this.$http.get(`${this.url}/v2/api/${this.api_path}/cart`).then(s=>{this.cartProducts=s.data.data.carts,this.cartList=s.data.data}).catch(s=>{console.log(s.response.data.message)})},submitOrder(){this.cartList.carts.length===0?alert("目前購物車是空的，請加入產品！"):this.$http.post(`${this.url}/v2/api/${this.api_path}/order`,{data:{user:{name:this.form.user.name,email:this.form.user.email,tel:this.form.user.tel,address:this.form.user.address},message:this.form.message}}).then(s=>{this.orderId=s.data.orderId,alert("成功送出訂單"),this.$router.push(`/userPayment/${this.orderId}`),this.$refs.form.reset(),this.orderId=s.data.orderId,this.total=s.data.total}).catch(s=>{console.log(s.response.data.message)})}},mounted(){this.getCartProducts()}},w={class:"container-fluid px-0"},P={class:"container-fluid px-0 pt-16"},k=V('<div class="container"><div class="row"><div class="col-md-6 col-lg-8 mx-auto"><ol class="pay-list mt-16 d-flex justify-content-between list-unstyled position-relative"><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center number-active mb-8"> 1 </p><p class="fw-bold mb-0">訂單確認</p></li><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center mb-8"> 2 </p><p class="fw-bold mb-0">結帳付款</p></li><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center mb-8"> 3 </p><p class="fw-bold">訂單結果</p></li></ol></div></div></div>',1),j={class:"container"},B={class:"row justify-content-center"},C={class:"col-md-6"},I={class:"mb-12"},U=e("label",{for:"email",class:"form-label"},null,-1),O={class:"mb-12"},q=e("label",{for:"inputName",class:"form-label"},null,-1),A={class:"mb-12"},F=e("label",{for:"inputTelephone",class:"form-label"},null,-1),L={class:"mb-12"},E=e("label",{for:"inputAddress",class:"form-label"},null,-1),T={class:"mb-24 d-flex flex-column"},z=e("label",{for:"message",class:"form-label"},null,-1),S={class:"d-flex justify-content-center"},$={class:"container-fluid px-0"};function D(s,t,G,H,a,c){const u=n("NavBar"),r=n("v-field"),i=n("error-message"),f=n("v-form"),p=n("page-footer");return y(),v(x,null,[e("div",w,[l(u)]),e("div",P,[k,e("div",j,[e("div",B,[e("div",C,[l(f,{ref:"form",id:"form"},{default:g(({errors:d})=>[e("div",I,[U,l(r,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":d.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:a.form.user.email,"onUpdate:modelValue":t[0]||(t[0]=o=>a.form.user.email=o)},null,8,["class","modelValue"]),l(i,{name:"email",class:"invalid-feedback"})]),e("div",O,[q,l(r,{type:"text",class:m(["form-control",{"is-invalid":d.姓名}]),id:"inputName",name:"姓名",placeholder:"請輸入姓名",rules:"required",modelValue:a.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=o=>a.form.user.name=o)},null,8,["class","modelValue"]),l(i,{name:"姓名",class:"invalid-feedback"})]),e("div",A,[F,l(r,{type:"tel",class:m(["form-control",{"is-invalid":d.電話}]),id:"inputTelephone",name:"電話",placeholder:"請輸入電話",rules:c.isPhone,modelValue:a.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=o=>a.form.user.tel=o)},null,8,["class","rules","modelValue"]),l(i,{name:"電話",class:"invalid-feedback"})]),e("div",L,[E,l(r,{type:"text",class:m(["form-control",{"is-invalid":d.地址}]),id:"inputAddress",name:"地址",placeholder:"請輸入地址",rules:"required",modelValue:a.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=o=>a.form.user.address=o)},null,8,["class","modelValue"]),l(i,{name:"地址",class:"invalid-feedback"})]),e("div",T,[z,l(r,{name:"message",id:"message",cols:"30",style:{height:"fit-content"},class:"form-control border border-1 rounded",modelValue:a.form.message,"onUpdate:modelValue":t[4]||(t[4]=o=>a.form.message=o),as:"textarea",placeholder:"請輸入留言"},null,8,["modelValue"])]),e("div",S,[e("button",{type:"button",class:"btn btn-footer hover w-100 mb-60",onClick:t[5]||(t[5]=(...o)=>c.submitOrder&&c.submitOrder(...o))}," 送出訂單 ")])]),_:1},512)])])])]),e("div",$,[l(p)])],64)}const M=b(N,[["render",D]]);export{M as default};
