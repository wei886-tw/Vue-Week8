import{A as v}from"./AdminNavBar-D1MUSpzU.js";import{P as y}from"./PageNation-DT7pU48w.js";import{m as k}from"./mixin-CE07gU2g.js";import{M}from"./modal-BuG_adEk.js";import{_ as x,l as d,j as e,i as p,F as h,x as w,g as D,k as u,e as c,v as l,G as r,H as m,z as V,I as N}from"./index-9Q82GJaJ.js";const P={components:{AdminNavBar:v,PageNation:y},mixins:[k],data(){return{api_path:"wei123",url:"https://vue3-course-api.hexschool.io",title:"",is_enabled:!0,percent:"",due_date:"",code:"",myModal:"",coupons:"",couponPagination:"",date:"",tempCoupon:{},original_due_date:""}},methods:{createCoupon(){this.tempCoupon.due_date=parseInt(new Date(this.$refs.date.value).getTime()),this.tempCoupon.is_enabled===!0?this.tempCoupon.is_enabled=1:this.tempCoupon.is_enabled=0,this.$http.post(`${this.url}/v2/api/${this.api_path}/admin/coupon`,{data:{title:this.tempCoupon.title,is_enabled:this.tempCoupon.is_enabled,percent:this.tempCoupon.percent,due_date:this.tempCoupon.due_date,code:this.tempCoupon.code}}).then(()=>{alert("建立優惠券成功"),this.loadingCircle(),this.tempCoupon={},this.myModal.hide(),this.getCoupons(1)}).catch(s=>{console.log(s)})},openModal(s){s!==""?(this.tempCoupon={...s},this.tempCoupon.is_enabled=this.tempCoupon.is_enabled?"true":"false",this.original_due_date=this.tempCoupon.due_date,this.tempCoupon.due_date=new Date(this.tempCoupon.due_date).toISOString().split("T")[0]):this.tempCoupon={},this.myModal.show()},closeModal(){this.myModal.hide()},getCoupons(s){this.$http.get(`${this.url}/v2/api/${this.api_path}/admin/coupons?page=${s}`).then(t=>{this.coupons=t.data.coupons,this.couponPagination=t.data.pagination}).catch(t=>{console.log(t.response.data.message)})},adviseCoupon(){this.tempCoupon.is_enabled===!0?this.tempCoupon.is_enabled=1:this.tempCoupon.is_enabled=0,this.tempCoupon.id?this.$http.put(`${this.url}/v2/api/${this.api_path}/admin/coupon/${this.tempCoupon.id}`,{data:{title:this.tempCoupon.title,is_enabled:this.tempCoupon.is_enabled,percent:parseInt(this.tempCoupon.percent),due_date:Number(Date.parse(this.tempCoupon.due_date)),code:this.tempCoupon.code}}).then(()=>{alert("修改優惠券成功"),this.myModal.hide(),this.getCoupons(),this.loadingCircle()}).catch(s=>{console.log(s.response.data.message)}):(this.tempCoupon.due_date=Date.parse(this.tempCoupon.due_date),this.$http.post(`${this.url}/v2/api/${this.api_path}/admin/coupon`,{data:{title:this.tempCoupon.title,is_enabled:this.tempCoupon.is_enabled,percent:this.tempCoupon.percent,due_date:this.tempCoupon.due_date,code:this.tempCoupon.code}}).then(()=>{alert("優惠券建立成功"),this.myModal.hide(),this.getCoupons(),this.loadingCircle()}).catch(s=>{console.log(s.response.data.message)}))},deleteCoupon(s){this.$http.delete(`${this.url}/v2/api/${this.api_path}/admin/coupon/${s}`).then(()=>{alert("已刪除優惠券"),this.loadingCircle(),this.getCoupons(1)})}},mounted(){this.myModal=new M(this.$refs.couponModal),this.loadingCircle(),this.getCoupons(1)}},S={class:"container-fluid px-0"},U={class:"container-fluid px-0"},B={class:"container py-48"},F={class:"container mb-24 d-flex justify-content-between px-0"},I=e("h2",{class:"fs-32 fw-bold"},"優惠券管理",-1),$={class:"table mb-16"},j=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"優惠券標題"),e("th",{scope:"col"},"折價"),e("th",{scope:"col"},"到期日"),e("th",{scope:"col"},"是否啟用"),e("th",{scope:"col"},"修改"),e("th",{scope:"col"},"刪除")])],-1),A=["onClick"],T=["onClick"],z={class:"container"},q={class:"modal",tabindex:"-1",ref:"couponModal"},E={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},G={class:"modal-content"},H=e("div",{class:"modal-header"},[e("h5",{class:"modal-title"},"建立優惠券"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),L={class:"modal-body"},O={class:"form-group mb-16"},Y=e("label",{for:"title",class:"form-label"},"優惠券名稱",-1),J={class:"form-group mb-16"},K=e("label",{for:"percent",class:"form-label"},"折扣",-1),Q={class:"form-group mb-16"},R=e("label",{for:"due_date",class:"form-label"},"到期日",-1),W={class:"form-group mb-16"},X=e("label",{for:"code",class:"form-label"},"優惠券代碼",-1),Z={class:"form-check form-switch mb-16"},ee=e("label",{for:"is_enabled",class:"form-check-label"},"是否啟用優惠券",-1),te={class:"modal-footer"},oe={class:"container"};function se(s,t,ne,ie,n,a){const _=u("admin-nav-bar"),b=u("page-nation"),C=u("error-message"),g=u("v-form"),f=u("router-view");return c(),d(h,null,[e("div",S,[p(_)]),e("div",U,[e("div",B,[e("div",F,[I,e("button",{type:"button",class:"btn btn-dark",onClick:t[0]||(t[0]=o=>a.openModal(""))}," 建立優惠券 ")]),e("table",$,[j,e("tbody",null,[(c(!0),d(h,null,w(n.coupons,o=>(c(),d("tr",{key:o.id},[e("td",null,l(o.title),1),e("td",null,l(o.percent)+" %",1),e("td",null,l(new Date(o.due_date).getFullYear())+"/ "+l(String(new Date(o.due_date).getMonth()+1).padStart(2,"0"))+"/ "+l(new Date(o.due_date).getDate()),1),e("td",null,l(o.is_enabled?"是":"否"),1),e("td",null,[e("button",{class:"btn btn-success",onClick:i=>a.openModal(o)}," 修改優惠券 ",8,A)]),e("td",null,[e("button",{class:"btn btn-danger",onClick:i=>a.deleteCoupon(o.id)}," 刪除優惠券 ",8,T)])]))),128))])]),e("div",z,[p(b,{pagination:n.couponPagination,"get-page-products":a.getCoupons,class:"d-flex justify-content-end"},null,8,["pagination","get-page-products"])])])]),e("div",q,[e("div",E,[e("div",G,[H,e("div",L,[p(g,{action:"",ref:"Form"},{default:D(({errors:o})=>[e("div",O,[Y,r(e("input",{id:"title","onUpdate:modelValue":t[1]||(t[1]=i=>n.tempCoupon.title=i),type:"text",class:V(["form-control",{"is-invalid":o.優惠券名稱}]),placeholder:"請輸入優惠券名稱",rules:"required",name:"優惠券名稱"},null,2),[[m,n.tempCoupon.title]]),p(C,{name:"優惠券名稱",class:"invalid-feedback"})]),e("div",J,[K,r(e("input",{id:"percent","onUpdate:modelValue":t[2]||(t[2]=i=>n.tempCoupon.percent=i),type:"number",class:"form-control",placeholder:"請輸入折扣"},null,512),[[m,n.tempCoupon.percent]])]),e("div",Q,[R,r(e("input",{id:"due_date","onUpdate:modelValue":t[3]||(t[3]=i=>n.tempCoupon.due_date=i),value:"",type:"date",class:"form-control",placeholder:"請輸入到期日",ref:"date"},null,512),[[m,n.tempCoupon.due_date]])]),e("div",W,[X,r(e("input",{id:"code","onUpdate:modelValue":t[4]||(t[4]=i=>n.tempCoupon.code=i),type:"text",class:"form-control",placeholder:"請輸入優惠券代碼"},null,512),[[m,n.tempCoupon.code]])]),e("div",Z,[ee,r(e("input",{id:"is_enabled","onUpdate:modelValue":t[5]||(t[5]=i=>n.tempCoupon.is_enabled=i),type:"checkbox",class:"form-check-input"},null,512),[[N,n.tempCoupon.is_enabled]])])]),_:1},512)]),e("div",te,[e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",onClick:t[6]||(t[6]=(...o)=>a.closeModal&&a.closeModal(...o))}," 關閉 "),n.tempCoupon.id?(c(),d("button",{key:1,type:"button",class:"btn btn-primary",onClick:t[8]||(t[8]=(...o)=>a.adviseCoupon&&a.adviseCoupon(...o))}," 修改優惠券 ")):(c(),d("button",{key:0,type:"button",class:"btn btn-primary",onClick:t[7]||(t[7]=(...o)=>a.createCoupon&&a.createCoupon(...o))}," 建立優惠券 "))])])])],512),e("div",oe,[p(f)])],64)}const ce=x(P,[["render",se]]);export{ce as default};
//# sourceMappingURL=AdminCoupon-Dt0SKVOA.js.map
