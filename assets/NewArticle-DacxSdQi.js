import{A as _}from"./AdminNavBar-BQieauP5.js";import{U as f}from"./UploadImageModal-rrNdB97S.js";import{_ as b,c as v,b as p,a as t,l as a,v as r,j as n,s as d,t as h,u as x,F as y,o as w,p as k,e as U,r as m}from"./index-ZYOWyxkg.js";const C={components:{AdminNavBar:_,UploadImageModal:f},data(){return{myModal:null,tempArticleInfo:{imageUrl:""},imageUrl:"",title:"",content:"",author:"",articleCategory:"",tag:[],description:"",isPublic:!0,create_at:"",url:"https://vue3-course-api.hexschool.io",api_path:"wei123"}},methods:{getUrl(i){this.imageUrl=i},postArticle(){this.create_at=new Date().getTime(),this.$http.post(`${this.url}/v2/api/${this.api_path}/admin/article`,{data:{title:this.title,description:this.description,image:this.imageUrl,tag:this.tag,create_at:this.create_at,author:this.author,isPublic:this.isPublic,content:this.content}}).then(()=>{alert("文章建立成功"),this.$refs.form.reset(),this.imageUrl="",this.$router.push("/adminBlog")}).catch(i=>{console.log(i.response.data.message)})},addTag(i){this.tag.length===0?this.tag=i:this.tag.indexOf(i)===-1&&(this.tag=this.tag.concat("、",i))},emitImg(i){this.imageUrl=i}},mounted(){}},l=i=>(k("data-v-172728a5"),i=i(),U(),i),A={class:"container-fluid"},V={class:"container py-48"},T={ref:"form"},B={class:"row"},I={class:"col"},N=l(()=>t("label",{class:"fs-24 mb-8",for:"title"},[n("文章標題"),t("span",{class:"text-danger"},"*")],-1)),P={class:"row"},S={class:"col-6"},D=l(()=>t("label",{class:"fs-24",for:"author"},[n(" 文章作者"),t("span",{class:"text-danger"},"*")],-1)),M={class:"col-6"},j=l(()=>t("label",{class:"fs-24",for:"articleCategory"},[n(" 文章分類"),t("span",{class:"text-danger"},"*")],-1)),F={class:"row mb-24"},E={class:"col"},O=l(()=>t("label",{class:"fs-24",for:"description"},[n("文章簡述"),t("span",{class:"text-danger"},"*")],-1)),q=l(()=>t("label",{class:"fs-24",for:"description"},[n("文章內容"),t("span",{class:"text-danger"},"*")],-1)),z=l(()=>t("h3",{class:"fs-24 mb-16"},"封面圖片",-1)),G={class:"card mb-32",style:{width:"240px"}},H=["src"],J={class:"card-body"},K={class:"row"},L={class:"col-6"},Q=l(()=>t("h3",{class:"fs-24"},"文章發佈狀態",-1)),R={class:"form-check form-switch"},W={class:"form-check-label",for:"flexSwitchCheckDefault"},X={class:"col-6 d-flex justify-content-end"};function Y(i,e,Z,$,o,c){const u=m("AdminNavBar"),g=m("upload-image-modal");return w(),v(y,null,[p(u),t("div",A,[t("div",V,[t("form",T,[t("div",B,[t("div",I,[N,a(t("input",{type:"text",class:"rounded mb-32 form-check-input",style:{width:"100%",height:"40px"},"onUpdate:modelValue":e[0]||(e[0]=s=>o.title=s),name:"title",id:"title"},null,512),[[r,o.title]])])]),t("div",P,[t("div",S,[D,a(t("input",{type:"text",class:"rounded mb-32 form-check-input",style:{width:"100%",height:"40px"},placeholder:"請填入作者",name:"author",id:"author","onUpdate:modelValue":e[1]||(e[1]=s=>o.author=s)},null,512),[[r,o.author]])]),t("div",M,[j,a(t("input",{type:"text",class:"rounded mb-16 form-check-input",style:{width:"100%",height:"40px"},placeholder:"請點擊按鈕填入文章分類",name:"articleCategory",id:"articleCategory","onUpdate:modelValue":e[2]||(e[2]=s=>o.tag=s),ref:"tagText"},null,512),[[r,o.tag]]),t("p",null,[n(" 點擊帶入文章分類： "),t("button",{class:"btn btn-gray me-8",onClick:e[3]||(e[3]=d(s=>c.addTag("最新消息"),["prevent"]))}," 最新消息 "),t("button",{class:"btn btn-gray me-8",onClick:e[4]||(e[4]=d(s=>c.addTag("活動講座"),["prevent"]))}," 活動講座 "),t("button",{class:"btn btn-gray me-8",onClick:e[5]||(e[5]=d(s=>c.addTag("本站獨家"),["prevent"]))}," 本站獨家 ")])]),t("pre",null,h(typeof o.tag),1)]),t("div",F,[t("div",E,[O,a(t("textarea",{"onUpdate:modelValue":e[6]||(e[6]=s=>o.description=s),class:"rounded mb-24 form-check-input",style:{width:"100%",height:"120px"},placeholder:"請填入 100 字內描述",name:"description",id:"description"},null,512),[[r,o.description]]),q,a(t("textarea",{type:"text","onUpdate:modelValue":e[7]||(e[7]=s=>o.content=s),class:"rounded mb-24 form-check-input",style:{width:"100%",height:"240px"},placeholder:"請輸入文章內容",name:"content",id:"content"},null,512),[[r,o.content]])])]),z,t("div",G,[t("img",{src:o.imageUrl,class:"card-img-top"},null,8,H),t("div",J,[p(g)])]),t("div",K,[t("div",L,[Q,t("div",R,[a(t("input",{class:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault","onUpdate:modelValue":e[8]||(e[8]=s=>o.isPublic=s)},null,512),[[x,o.isPublic]]),t("label",W,h(o.isPublic?"文章公開":"文章不公開"),1)])]),t("div",X,[t("button",{class:"btn btn-footer",onClick:e[9]||(e[9]=d((...s)=>c.postArticle&&c.postArticle(...s),["prevent"]))}," 送出文章 ")])])],512)])])],64)}const ot=b(C,[["render",Y],["__scopeId","data-v-172728a5"]]);export{ot as default};
