import{_ as c,o as n,c as r,a as e,b as s,w as o,e as l,r as i}from"./index-DTsRfrv9.js";const d={methods:{loadingCircle(){let a=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!0,onCancel:this.onCancel});setTimeout(()=>{a.hide()},1500)}},mounted(){this.loadingCircle()}},_={class:"container"},h={class:"row"},u={class:"col-12 d-none d-lg-block"},f={class:"list-unstyled mt-128 gy-16 d-flex flex-column"},m={class:"fs-lg-24 mb-16"},v={class:"fs-lg-24 mb-16"},g={class:"fs-lg-24 mb-16"},k={class:"fs-lg-24 mb-16"};function p(a,x,b,C,$,w){const t=i("router-link");return n(),r("div",_,[e("div",h,[e("div",u,[e("ul",f,[e("li",m,[s(t,{to:"/userBlog",class:"router-link-active text-dark hover"},{default:o(()=>[l("全部文章")]),_:1})]),e("li",v,[s(t,{to:"/blogNews",class:"router-link-active text-dark hover"},{default:o(()=>[l("最新消息")]),_:1})]),e("li",g,[s(t,{to:"/blogOnly",class:"router-link-active text-dark hover"},{default:o(()=>[l("本站獨家")]),_:1})]),e("li",k,[s(t,{to:"/blogEvent",class:"router-link-active text-dark hover"},{default:o(()=>[l("活動講座")]),_:1})])])])])])}const B=c(d,[["render",p],["__scopeId","data-v-2a974820"]]);export{B as S};
