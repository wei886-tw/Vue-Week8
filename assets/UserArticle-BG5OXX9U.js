import{N as g,P as u}from"./NavBar-Dnb3yVVR.js";import{_ as m,l as i,i as r,j as e,y as n,F as l,v as f,x as v,e as c,q as b,s as y,k as d}from"./index-JOr-UfGT.js";const C={components:{NavBar:g,PageFooter:u},props:["id"],data(){return{url:"https://vue3-course-api.hexschool.io",api_path:"wei123",article:[],tag:[],tagArr:[]}},methods:{getArticle(t){this.$http(`${this.url}/v2/api/${this.api_path}/article/${t}`).then(s=>{this.article=s.data.article,this.tagArr=s.data.article.tag.split("、")}).catch(s=>{console.log(s.response.data.message)})},loadingCircle(){let t=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!0,onCancel:this.onCancel});setTimeout(()=>{t.hide()},1500)},goTagPage(t){this.$router.push({name:"userBlog",query:{category:t}})}},mounted(){this.getArticle(this.id),this.loadingCircle()}},k=t=>(b("data-v-1e1c2bfb"),t=t(),y(),t),w={class:"container-fluid"},x={class:"container"},A={class:"row"},B={key:0,class:"col-lg-12 py-32"},N={class:"container d-flex flex-column align-items-center",style:{width:"80%"}},P=["src"],$={class:"fs-24 fs-lg-40 mb-16"},I={class:"container px-0 d-flex justify-content-start align-items-baseline mb-8"},S=k(()=>e("p",null,"文章分類：",-1)),j=["onClick"],F={class:"fs-16 fs-lg-24 new-line"};function T(t,s,V,q,o,h){const p=d("nav-bar"),_=d("page-footer");return c(),i(l,null,[r(p),e("div",w,[e("div",x,[e("div",A,[o.article?(c(),i("div",B,[e("div",N,[e("img",{src:o.article.image,alt:"文章圖片",style:{width:"70%",height:"50%","object-fit":"cover"},class:"mb-32 pt-60"},null,8,P),e("h2",$,n(o.article.title),1),e("div",I,[e("p",{class:"me-16",onClick:s[0]||(s[0]=(...a)=>t.test&&t.test(...a))},"作者："+n(o.article.author),1),S,(c(!0),i(l,null,f(o.tagArr,a=>(c(),i("button",{class:"btn btn-dark-gray text-white me-8",key:a+1,onClick:D=>h.goTagPage(a)},n(a),9,j))),128))]),e("p",F,n(o.article.content),1)])])):v("",!0)])])]),r(_)],64)}const U=m(C,[["render",T],["__scopeId","data-v-1e1c2bfb"]]);export{U as default};
//# sourceMappingURL=UserArticle-BG5OXX9U.js.map
