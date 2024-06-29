import{A as U}from"./AdminNavBar-IVILVFVy.js";import{P as v}from"./PageNation-640G2dqo.js";import{m as w}from"./mixin-CE07gU2g.js";import{_ as x,l,j as t,i as m,F as u,v as g,G as a,H as r,I as k,y as p,k as _,e as n}from"./index-CL1xOGZE.js";const P={components:{AdminNavBar:U,PageNation:v},mixins:[w],data(){return{allProducts:[],url:"https://vue3-course-api.hexschool.io",api_path:"wei123",pagination:{},myModal:"",product:"",title:"",category:"",origin_price:"",price:"",unit:"",description:"",content:"",is_enabled:!1,imageUrl:"",imagesUrl:[]}},methods:{getPageProducts(c=1){this.$http.get(`${this.url}/v2/api/${this.api_path}/admin/products?page=${c}`).then(s=>{this.pagination=s.data.pagination,this.allProducts=s.data.products,window.scrollTo(0,0)}).catch(s=>{alert(s.response.data.message)})},openModal(c,s){c==="old"?this.$http.get(`${this.url}/v2/api/${this.api_path}/product/${s}`).then(o=>{this.product=o.data.product,this.title=o.data.product.title,this.category=o.data.product.category,this.origin_price=parseInt(o.data.product.origin_price),this.price=parseInt(o.data.product.price),this.unit=o.data.product.unit,this.description=o.data.product.description,this.content=o.data.product.content,this.is_enabled=o.data.product.is_enabled,this.imageUrl=o.data.product.imageUrl,this.imagesUrl=o.data.product.imagesUrl,this.loadingCircle(),this.myModal.show()}).catch(o=>{console.log(o.response.data.message)}):(this.title="",this.category="",this.origin_price="",this.price="",this.unit="",this.description="",this.content="",this.is_enabled="",this.imageUrl="",this.imagesUrl="",this.myModal.show())},updateProduct(c,s){c==="old"?(this.openModal("old",s),this.$http.put(`${this.url}/v2/api/${this.api_path}/admin/product/${s}`,{data:{title:this.title,category:this.category,origin_price:this.origin_price,price:this.price,unit:this.unit,description:this.description,content:this.content,is_enabled:this.is_enabled,imageUrl:this.imageUrl,imagesUrl:this.imagesUrl}}).then(()=>{alert("產品修改成功"),this.title="",this.category="",this.origin_price="",this.price="",this.unit="",this.description="",this.content="",this.is_enabled="",this.imageUrl="",this.imagesUrl="",this.myModal.hide(),this.getPageProducts(1)}).catch(o=>{console.log(o.response.data.message)})):this.$http.post(`${this.url}/v2/api/${this.api_path}/admin/product/`,{data:{title:this.title,category:this.category,origin_price:this.origin_price,price:this.price,unit:this.unit,description:this.description,content:this.content,is_enabled:this.is_enabled,imageUrl:this.imageUrl,imagesUrl:this.imagesUrl}}).then(()=>{alert("建立產品成功"),this.loading(),this.getPageProducts(1),this.myModal.hide()}).catch(o=>{console.log(o.response.data.message)})},deleteProduct(c){this.$http.delete(`${this.url}/v2/api/${this.api_path}/admin/product/${c}`).then(()=>{alert("刪除產品成功"),this.loading(),this.getPageProducts(1)}).catch(s=>{console.log(s.response.data.message)})},imagesUrlPush(){this.imagesUrl=[],this.imagesUrl.push()},imagesUrlPop(){this.imagesUrl.pop()}},mounted(){this.myModal=new bootstrap.Modal(this.$refs.detailModal),this.getPageProducts(),this.loadingCircle()}},M={class:"container-fluid px-0"},C={class:"container py-48"},V={class:"container d-flex justify-content-between px-0"},j=t("h2",{class:"text-start fs-16 fs-md-24 fs-lg-32 fw-bold"},"後台產品列表",-1),A={class:"table mt-4"},B=t("thead",null,[t("tr",null,[t("th",{width:"80"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"售價"),t("th",{width:"120"},"啟用與否"),t("th",{width:"150"},"修改產品內容"),t("th",{width:"150"},"刪除產品")])],-1),D={key:0,class:""},L={key:1,class:"text-danger"},N=["onClick"],I=["onClick"],S={class:"container"},F={class:"modal fade",id:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"detailModal"},T={class:"modal-dialog modal-xl"},E={class:"modal-content"},G={class:"modal-header bg-dark"},H={key:0,class:"modal-title fs-32 text-white",id:"exampleModalLabel"},q={key:1,class:"modal-title fs-32 text-white",id:"exampleModalLabel"},z=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),J={class:"modal-body"},K={ref:"form"},O={class:"row justify-content-center"},Q={class:"col-4"},R=t("label",{class:"fs-24 mb-8 fw-bold",for:"title"},"產品主圖網址",-1),W=["src"],X=t("label",{class:"fs-24 mb-8 fw-bold",for:"title"},"產品多圖設置",-1),Y={key:0},Z={class:"form-group"},$=["for"],tt=["id","onUpdate:modelValue"],st=["src"],et={key:0},it={key:1},ot={key:1},lt={class:"col-8"},nt=t("label",{class:"fs-24 mb-8 fw-bold",for:"title"},"產品名稱",-1),dt={class:"row justify-content-end"},at={class:"col-6"},rt=t("label",{class:"fs-24 mb-8 fw-bold",for:"title"},"產品原價",-1),ct={class:"col-6"},ht=t("label",{class:"fs-24 mb-8 fw-bold",for:"title"},"產品特價",-1),pt={class:"row justify-content-end"},ut={class:"col-6"},mt=t("label",{class:"fs-24 mb-8 fw-bold",for:"title"},"產品單位",-1),gt={class:"col-6"},_t=t("label",{class:"fs-24 mb-8 fw-bold",for:"title"},"產品分類",-1),bt={class:"row justify-content-end"},ft={class:"col-12"},yt=t("label",{class:"fs-24 mb-8 fw-bold",for:"title"},"產品描述",-1),Ut={class:"col-12"},vt=t("label",{class:"fs-24 mb-8 fw-bold",for:"title"},"產品內容",-1),wt={class:"col-12"},xt=t("h3",{class:"fs-24 fw-bold"},"產品狀態",-1),kt={class:"form-check form-switch"},Pt={class:"form-check-label",for:"flexSwitchCheckDefault"},Mt={class:"modal-footer"},Ct=t("button",{type:"button",class:"btn btn-secondary border","data-bs-dismiss":"modal"}," 關閉 ",-1),Vt={class:"container d-flex justify-content-end"};function jt(c,s,o,At,i,d){const b=_("admin-nav-bar"),f=_("page-nation");return n(),l(u,null,[t("div",M,[m(b)]),t("div",C,[t("div",V,[j,t("button",{class:"btn btn-dark",onClick:s[0]||(s[0]=e=>d.openModal("new"))},"建立新產品")]),t("table",A,[B,t("tbody",null,[(n(!0),l(u,null,g(i.allProducts,e=>(n(),l("tr",{key:e.id},[t("td",null,p(e.category),1),t("td",null,p(e.title),1),t("td",null,p(e.price),1),t("td",null,[e.is_enabled?(n(),l("span",D,"啟用")):(n(),l("span",L,"未啟用"))]),t("td",null,[t("button",{class:"btn btn-success",onClick:h=>d.openModal("old",e.id)}," 修改產品內容 ",8,N)]),t("td",null,[t("button",{class:"btn btn-danger",onClick:h=>d.deleteProduct(e.id)}," 刪除產品 ",8,I)])]))),128))])])]),t("div",S,[t("div",F,[t("div",T,[t("div",E,[t("div",G,[i.imagesUrl.length!==0?(n(),l("h1",H," 修改產品 ")):(n(),l("h1",q," 新增產品 ")),z]),t("div",J,[t("form",K,[t("div",O,[t("div",Q,[R,a(t("input",{type:"text",class:"rounded mb-32 form-control",style:{width:"100%",height:"40px"},"onUpdate:modelValue":s[1]||(s[1]=e=>i.imageUrl=e),name:"imageUrl",id:"imageUrl",placeholder:"請輸入網址"},null,512),[[r,i.imageUrl]]),t("img",{src:i.imageUrl,alt:"",width:"100%",style:{"object-fit":"cover"}},null,8,W),X,Array.isArray(i.imagesUrl)?(n(),l("div",Y,[(n(!0),l(u,null,g(i.imagesUrl,(e,h)=>(n(),l("div",{class:"mb-8",key:h},[t("div",Z,[t("label",{for:`imagesUrl${h}`,class:"form-label"},"圖片網址",8,$),a(t("input",{id:`imagesUrl${h}`,"onUpdate:modelValue":y=>i.imagesUrl[h]=y,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,tt),[[r,i.imagesUrl[h]]])]),t("img",{class:"img-fluid",src:e},null,8,st)]))),128)),!i.imagesUrl.length||i.imagesUrl[i.imagesUrl.length-1]?(n(),l("div",et,[t("button",{class:"btn btn-primary btn-sm d-block w-100",onClick:s[2]||(s[2]=e=>i.imagesUrl.push(""))}," 新增圖片 ")])):(n(),l("div",it,[t("button",{class:"btn btn-danger btn-sm d-block w-100",onClick:s[3]||(s[3]=(...e)=>d.imagesUrlPop&&d.imagesUrlPop(...e))}," 刪除圖片 ")]))])):(n(),l("div",ot,[t("button",{class:"btn btn-primary btn-sm d-block w-100",onClick:s[4]||(s[4]=(...e)=>d.imagesUrlPush&&d.imagesUrlPush(...e))}," 新增圖片 ")]))]),t("div",lt,[nt,a(t("input",{type:"text",class:"rounded mb-32 form-check-input",style:{width:"100%",height:"40px"},"onUpdate:modelValue":s[5]||(s[5]=e=>i.title=e),name:"title",id:"title"},null,512),[[r,i.title]]),t("div",dt,[t("div",at,[rt,a(t("input",{type:"number",class:"rounded mb-32 form-check-input",style:{width:"100%",height:"40px"},"onUpdate:modelValue":s[6]||(s[6]=e=>i.origin_price=e),name:"origin_price",id:"origin_price"},null,512),[[r,i.origin_price]])]),t("div",ct,[ht,a(t("input",{type:"number",class:"rounded mb-32 form-check-input",style:{width:"100%",height:"40px"},"onUpdate:modelValue":s[7]||(s[7]=e=>i.price=e),name:"price",id:"price"},null,512),[[r,i.price]])])]),t("div",pt,[t("div",ut,[mt,a(t("input",{type:"text",class:"rounded mb-32 form-check-input",style:{width:"100%",height:"40px"},"onUpdate:modelValue":s[8]||(s[8]=e=>i.unit=e),name:"unit",id:"unit"},null,512),[[r,i.unit]])]),t("div",gt,[_t,a(t("input",{type:"text",class:"rounded mb-32 form-check-input",style:{width:"100%",height:"40px"},"onUpdate:modelValue":s[9]||(s[9]=e=>i.category=e),name:"category",id:"category"},null,512),[[r,i.category]])])]),t("div",bt,[t("div",ft,[yt,a(t("textarea",{type:"text",class:"rounded mb-32 form-control",style:{width:"100%"},"onUpdate:modelValue":s[10]||(s[10]=e=>i.description=e),name:"description",id:"description"},null,512),[[r,i.description]])]),t("div",Ut,[vt,a(t("textarea",{type:"text",class:"rounded mb-32 form-control",style:{width:"100%"},"onUpdate:modelValue":s[11]||(s[11]=e=>i.content=e),name:"content",id:"content",rows:"10"},`
                      `,512),[[r,i.content]])]),t("div",wt,[xt,t("div",kt,[a(t("input",{class:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault","onUpdate:modelValue":s[12]||(s[12]=e=>i.is_enabled=e)},null,512),[[k,i.is_enabled]]),t("label",Pt,p(i.is_enabled?"產品公開":"產品不公開"),1)])])])])])],512)]),t("div",Mt,[Ct,i.product.id?(n(),l("button",{key:0,type:"button",class:"btn btn-primary",onClick:s[13]||(s[13]=e=>d.updateProduct("old",i.product.id))}," 修改產品 ")):(n(),l("button",{key:1,class:"btn btn-primary",onClick:s[14]||(s[14]=e=>d.updateProduct("new"))}," 新增產品 "))])])])],512)]),t("div",Vt,[m(f,{class:"",pagination:i.pagination,"get-page-products":d.getPageProducts},null,8,["pagination","get-page-products"])])],64)}const It=x(P,[["render",jt]]);export{It as default};
//# sourceMappingURL=AdminProducts-CnOBsSfJ.js.map
