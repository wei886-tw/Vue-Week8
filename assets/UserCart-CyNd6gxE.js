import{N as y}from"./NavBar-BuOmGpcM.js";import{P as x}from"./PageFooter-BSiwNxRe.js";import{_ as V,c,b as a,a as e,F as p,d as k,f as _,i as C,r as m,o as u,j as P,v as N,n as h}from"./index-BhsGTwAS.js";const U={data(){return{api_path:"wei123",url:"https://vue3-course-api.hexschool.io",cartProducts:[],cartList:{},form:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{NavBar:y,PageFooter:x},methods:{getCartProducts(){this.$http.get(`${this.url}/v2/api/${this.api_path}/cart`).then(n=>{this.cartProducts=n.data.data.carts,this.cartList=n.data.data}).catch(n=>{console.log(n.response.data.message)})},reviseQty(n,s){this.$http.post(`${this.url}/v2/api/${this.api_path}/cart`,{data:{product_id:n,qty:s}}).then(()=>{alert("修改購物車成功"),this.getCartProducts()}).catch(f=>{console.log(f.message)})},delCartItem(n){this.$http.delete(`${this.url}/v2/api/${this.api_path}/cart/${n}`).then(()=>{alert("已經刪除"),this.getCartProducts()}).cath(s=>{console.log(s.message)})},isPhone(n){return/^(09)[0-9]{8}$/.test(n)?!0:"需要正確的電話號碼"},submitOrder(){this.cartList.carts.length===0?alert("目前購物車是空的，請加入產品！"):this.$http.post(`${this.url}/v2/api/${this.api_path}/order`,{data:{user:{name:this.form.user.name,email:this.form.user.email,tel:this.form.user.tel,address:this.form.user.address},message:this.form.message}}).then(()=>{this.$refs.form.resetForm(),alert("成功送出訂單")}).catch(n=>{console.log(n.message)})}},mounted(){this.getCartProducts()}},q={class:"container-fluid"},w={class:"container py-48"},B=e("h2",{class:"text-center py-60 fs-24 fs-lg-32"},"購物車列表",-1),F={class:"container-sm"},L={class:"table table-responsive"},A=e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"fs-md-24"},"品名"),e("th",{scope:"col",class:"fs-md-24"},"數量"),e("th",{scope:"col",class:"fs-md-24"},"價格")])],-1),$={class:"fs-md-24"},j={class:""},E=["onClick"],Q=["onClick"],T=e("i",{class:"bi bi-trash text-center"},null,-1),D=[T],I=["onUpdate:modelValue"],O=["onClick"],S={class:"fs-md-24"},z=e("td",null,null,-1),M=e("td",null,null,-1),G={class:"fs-md-24"},H={class:"container"},J={class:"row justify-content-center"},K={class:"col-md-6"},R=e("h2",{class:"text-center fs-24 fs-lg-32 mb-12"},"購物人資料",-1),W={class:"mb-12"},X=e("label",{for:"email",class:"form-label"},"Email",-1),Y={class:"mb-12"},Z=e("label",{for:"inputName",class:"form-label"},"收件人姓名",-1),ee={class:"mb-12"},se=e("label",{for:"inputTelephone",class:"form-label"},"收件人電話",-1),te={class:"mb-12"},le=e("label",{for:"inputAddress",class:"form-label"},"收件人地址",-1),oe={class:"mb-12"},ae=e("label",{for:"inputAddress",class:"form-label"},"收件人地址",-1),ne={class:"mb-24 d-flex flex-column"},ie=e("label",{for:"message",class:"form-label"},"留言",-1),re=e("div",{class:"d-flex justify-content-center"},[e("button",{type:"submit",class:"btn btn-footer w-100 mb-60"}," 送出訂單 ")],-1);function de(n,s,f,ce,o,r){const b=m("NavBar"),i=m("v-field"),d=m("error-message"),v=m("v-form"),g=m("PageFooter");return u(),c(p,null,[a(b),e("div",q,[e("div",w,[B,e("div",F,[e("table",L,[A,e("tbody",null,[(u(!0),c(p,null,k(o.cartProducts,t=>(u(),c("tr",{key:t.id},[e("td",$,_(t.product.title),1),e("td",j,[t.qty>=2?(u(),c("button",{key:0,class:"btn d-flex d-md-inline",onClick:l=>r.reviseQty(t.product.id,-1)}," - ",8,E)):(u(),c("button",{key:1,class:"rounded btn d-flex d-md-inline",style:{width:"35px",height:"38px"},onClick:l=>r.delCartItem(t.id)},D,8,Q)),P(e("input",{type:"number",class:"border border-gray border-1 rounded me-4 d-flex d-md-inline",readonly:"",style:{width:"40px",height:"36px"},"onUpdate:modelValue":l=>t.qty=l},null,8,I),[[N,t.qty]]),e("button",{class:"btn d-flex d-md-inline",onClick:l=>r.reviseQty(t.product.id,1)}," + ",8,O)]),e("td",S,_(t.final_total),1)]))),128))]),e("tfoot",null,[z,M,e("td",G,"總計： "+_(o.cartList.final_total),1)])])])]),e("div",H,[e("div",J,[e("div",K,[R,a(v,{onSubmit:s[6]||(s[6]=t=>r.submitOrder()),ref:"form"},{default:C(({errors:t})=>[e("div",W,[X,a(i,{id:"email",name:"email",type:"email",class:h(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=l=>o.form.user.email=l)},null,8,["class","modelValue"]),a(d,{name:"email",class:"invalid-feedback"})]),e("div",Y,[Z,a(i,{type:"text",class:h(["form-control",{"is-invalid":t.姓名}]),id:"inputName",name:"姓名",placeholder:"請輸入姓名",rules:"required",modelValue:o.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=l=>o.form.user.name=l)},null,8,["class","modelValue"]),a(d,{name:"姓名",class:"invalid-feedback"})]),e("div",ee,[se,a(i,{type:"tel",class:h(["form-control",{"is-invalid":t.電話}]),id:"inputTelephone",name:"電話",placeholder:"請輸入電話",rules:r.isPhone,modelValue:o.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=l=>o.form.user.tel=l)},null,8,["class","rules","modelValue"]),a(d,{name:"電話",class:"invalid-feedback"})]),e("div",te,[le,a(i,{type:"text",class:h(["form-control",{"is-invalid":t.地址}]),id:"inputAddress",name:"地址",placeholder:"請輸入地址",rules:"required",modelValue:o.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=l=>o.form.user.address=l)},null,8,["class","modelValue"]),a(d,{name:"地址",class:"invalid-feedback"})]),e("div",oe,[ae,a(i,{type:"text",class:h(["form-control",{"is-invalid":t.地址}]),id:"inputAddress",name:"地址",placeholder:"請輸入地址",rules:"required",modelValue:o.form.user.address,"onUpdate:modelValue":s[4]||(s[4]=l=>o.form.user.address=l)},null,8,["class","modelValue"]),a(d,{name:"地址",class:"invalid-feedback"})]),e("div",ne,[ie,a(i,{name:"message",id:"message",cols:"30",style:{height:"fit-content"},class:"form-control border border-1 rounded",modelValue:o.form.message,"onUpdate:modelValue":s[5]||(s[5]=l=>o.form.message=l),as:"textarea"},null,8,["modelValue"])]),re]),_:1},512)])])])]),a(g)],64)}const _e=V(U,[["render",de]]);export{_e as default};
