import{A as _}from"./AdminNavBar-BQieauP5.js";import{U as f}from"./UploadImageModal-rrNdB97S.js";import{_ as b,c as v,b as h,a as t,l as c,v as r,j as n,s as d,u as y,t as x,F as U,o as k,p as w,e as V,r as p}from"./index-ZYOWyxkg.js";const A={props:["id"],components:{AdminNavBarVue:_,UploadImageModalVue:f},data(){return{myModal:null,tempArticleInfo:{imageUrl:""},imageUrl:"",title:"",content:"",author:"",tag:[],description:"",articleCategory:"",isPublic:!0,create_at:"",url:"https://vue3-course-api.hexschool.io",api_path:"wei123"}},methods:{getUrl(s){this.imageUrl=s},getArticle(s){this.$http.get(`${this.url}/v2/api/${this.api_path}/admin/article/${s}`).then(e=>{this.article=e.data.article,this.title=e.data.article.title,this.create_at=e.data.article.create_at,this.description=e.data.article.description,this.isPublic=e.data.article.isPublic,this.tag=e.data.article.tag,this.author=e.data.article.author,this.content=e.data.article.content,this.imageUrl=e.data.article.image}).catch(e=>{console.log(e.response.data.message)})},adviseArticle(s){this.$http.put(`${this.url}/v2/api/${this.api_path}/admin/article/${s}`,{data:{title:this.title,description:this.description,image:this.imageUrl,tag:this.tag,create_at:this.create_at,author:this.author,isPublic:this.isPublic,content:this.content}}).then(()=>{alert("修改文章成功"),this.$router.push("/adminBlog")}).catch(e=>{console.log(e.response.data.message)})},addTag(s){this.tag===void 0?this.tag=s:this.tag.search(s)===-1&&this.tag.length!==0&&(this.tag=this.tag.concat("、",s))}},mounted(){this.getArticle(this.id),this.getUrl()}},o=s=>(w("data-v-19f71b12"),s=s(),V(),s),C={class:"container-fluid"},I={class:"container py-48",id:"id"},B=o(()=>t("h2",{class:"fs-40 mb-32 text-center"},"修改文章",-1)),M={ref:"form"},P={class:"row justify-content-center"},N={class:"col-10"},j=o(()=>t("label",{class:"fs-24 mb-8",for:"title"},[n("文章標題"),t("span",{class:"text-danger"},"*")],-1)),S={class:"row mb-32 justify-content-center"},T={class:"col-5"},D=o(()=>t("label",{class:"fs-24",for:"author"},[n(" 文章作者"),t("span",{class:"text-danger"},"*")],-1)),F={class:"col-5"},$=o(()=>t("label",{class:"fs-24",for:"articleCategory"},[n(" 文章分類"),t("span",{class:"text-danger"},"*")],-1)),E={class:"row justify-content-center"},q={class:"col-5 d-flex flex-column justify-content-between align-items-start"},z=o(()=>t("h3",{class:"fs-24"},"文章發佈狀態",-1)),G={class:"form-check form-switch"},H={class:"form-check-label",for:"flexSwitchCheckDefault"},J={class:"col-5"},K=o(()=>t("p",{class:"fs-24"},"圖片預覽",-1)),L=["src"];function O(s,e,u,Q,a,l){const m=p("AdminNavBarVue"),g=p("UploadImageModalVue");return k(),v(U,null,[h(m),t("div",C,[t("div",I,[B,t("form",M,[t("div",P,[t("div",N,[j,c(t("input",{type:"text",class:"rounded mb-32 form-check-input",style:{width:"100%",height:"40px"},"onUpdate:modelValue":e[0]||(e[0]=i=>a.title=i),name:"title",id:"title"},null,512),[[r,a.title]])])]),t("div",S,[t("div",T,[D,c(t("input",{type:"text",class:"rounded mb-32 form-check-input",style:{width:"100%",height:"40px"},placeholder:"請填入作者",name:"author",id:"author","onUpdate:modelValue":e[1]||(e[1]=i=>a.author=i)},null,512),[[r,a.author]])]),t("div",F,[$,c(t("input",{type:"text",class:"rounded mb-16 form-check-input",style:{width:"100%",height:"40px"},placeholder:"請填入文章分類",name:"articleCategory",id:"articleCategory","onUpdate:modelValue":e[2]||(e[2]=i=>a.tag=i)},null,512),[[r,a.tag]]),t("p",null,[n(" 點擊帶入文章分類： "),t("button",{class:"btn btn-gray me-8",onClick:e[3]||(e[3]=d(i=>l.addTag("最新消息"),["prevent"]))}," 最新消息 "),t("button",{class:"btn btn-gray me-8",onClick:e[4]||(e[4]=d(i=>l.addTag("活動消息"),["prevent"]))}," 活動消息 "),t("button",{class:"btn btn-gray me-8",onClick:e[5]||(e[5]=d(i=>l.addTag("本站獨家"),["prevent"]))}," 本站獨家 ")])])]),t("div",E,[t("div",q,[z,t("div",G,[c(t("input",{class:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault","onUpdate:modelValue":e[6]||(e[6]=i=>a.isPublic=i)},null,512),[[y,a.isPublic]]),t("label",H,x(a.isPublic?"文章公開":"文章不公開"),1)]),h(g),t("button",{type:"button",class:"btn btn-gray w-100",onClick:e[7]||(e[7]=i=>l.adviseArticle(u.id))}," 修改文章 ")]),t("div",J,[K,t("img",{src:a.imageUrl,alt:"",style:{width:"416px",height:"440px","object-fit":"cover"}},null,8,L)])])],512)])])],64)}const Y=b(A,[["render",O],["__scopeId","data-v-19f71b12"]]);export{Y as default};
