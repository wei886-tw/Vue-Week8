import{_ as c,o as s,c as a,a as t,u as m,i as p,j as h,v as u,F as _}from"./index-BjxMaSOI.js";const g={data(){return{api:"https://vue3-course-api.hexschool.io",api_path:"wei123",myModal:"",imageUrl:"",isCover:!1}},methods:{checkAdmin(){const l=`${this.api}/api/user/check`;this.$http.post(l).then(()=>{}).catch(e=>{alert(e.response.data.message),this.$router.push("/adminLogin")})},submitImgUrl(){const e=this.$refs.dropArea.files[0],d=new FormData;d.append("file-to-upload",e),this.$http.post(`${this.api}/v2/api/${this.api_path}/admin/upload`,d).then(i=>{this.imageUrl=i.data.imageUrl,this.$emit("emit-imgUrl",this.imageUrl),this.imageUrl=""}).catch(i=>{console.log(i.response.data.message)})}},mounted(){const l=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=l,this.checkAdmin(),this.myModal=new bootstrap.Modal(this.$refs.uploadImageModal)}},b={type:"button",class:"btn btn-gray w-100","data-bs-toggle":"modal","data-bs-target":"#exampleModal",ref:"btn"},f={ref:"uploadImageModal",class:"modal fade","aria-hidden":"true",id:"exampleModal","aria-labelledby":"uploadImageModal",tabindex:"-1"},v={class:"modal-dialog modal-lg modal-dialog-centered"},y={class:"modal-content"},U={class:"modal-header"},k={key:0,class:"modal-title text-bold fw-bold"},x={key:1,class:"modal-title text-bold fw-bold"},M=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),w={class:"modal-body container"},I={class:"row g-16"},$={class:"col-12 col-md-4"},A={class:"drop-area ratio-1x1"},C=["src"],j={key:2},B={class:"col-12 col-md-8"},F=t("p",{class:"mb-16"}," 僅限使用 jpg、jpeg 與 png 格式，檔案大小限制為 3MB 以下 ",-1),D={ref:"imgForm"},V={class:"form-control",type:"file",ref:"dropArea",name:"file-to-upload"},z={class:"modal-footer"};function N(l,e,d,i,o,r){return s(),a(_,null,[t("button",b," 新增圖片 ",512),t("div",f,[t("div",v,[t("div",y,[t("div",U,[o.isCover?(s(),a("h5",k,"上傳封面")):(s(),a("h5",x,"上傳圖片")),M]),t("div",w,[t("div",I,[t("div",$,[t("div",A,[o.imageUrl?(s(),a("div",{key:0,style:m(`background-image:url(${o.imageUrl})`),class:"w-100 h-100"},null,4)):p("",!0),o.imageUrl?(s(),a("img",{key:1,src:o.imageUrl,alt:"picture",style:{width:"250px","object-fit":"cover"}},null,8,C)):(s(),a("p",j,"圖片預覽"))])]),t("div",B,[F,t("form",D,[h(t("input",{class:"form-control mb-16",type:"text",ref:"imgInput",id:"test",placeholder:"請填入圖片網址","onUpdate:modelValue":e[0]||(e[0]=n=>o.imageUrl=n)},null,512),[[u,o.imageUrl]]),t("input",V,null,512)],512)])])]),t("div",z,[t("button",{type:"button",class:"btn btn-dark",onClick:e[1]||(e[1]=(...n)=>r.submitImgUrl&&r.submitImgUrl(...n))}," 送出 ")])])])],512)],64)}const E=c(g,[["render",N]]);export{E as U};
