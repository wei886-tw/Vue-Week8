import{_ as l,o as s,c as o,a as e,n as r,u as c,F as g,h as p,t as _,p as u,f as h}from"./index-WfpBXQx9.js";const P={props:["pagination","getPageProducts","ordersPagination","blogPagination","getCoupons","couponPagination"],data(){return{url:"https://vue3-course-api.hexschool.io",api_path:"wei123"}}},d=i=>(u("data-v-c2dd0b78"),i=i(),h(),i),m={"aria-label":"Page navigation example"},v={class:"pagination"},f={class:"page-item"},k=d(()=>e("span",{"aria-hidden":"true"},"«",-1)),b=[k],x=["onClick"],C={class:"page-item"},y=d(()=>e("span",{"aria-hidden":"true"},"»",-1)),I=[y];function S(i,n,a,w,B,N){return s(),o("nav",m,[e("ul",v,[e("li",f,[e("a",{class:r(["page-link text-primary",{disabled:!a.pagination.has_pre}]),href:"#","aria-label":"Previous",onClick:n[0]||(n[0]=c(t=>a.getPageProducts(i.page=a.pagination.current_page-1),["prevent"]))},b,2)]),(s(!0),o(g,null,p(a.pagination.total_pages,t=>(s(),o("li",{class:"page-item",key:t},[e("a",{class:r(["page-link text-primary",{activate:t===a.pagination.current_pagePage}]),href:"#",onClick:c(F=>a.getPageProducts(t=t),["prevent"])},_(t),11,x)]))),128)),e("li",C,[e("a",{class:r(["page-link text-primary",{disabled:!a.pagination.has_next}]),href:"#","aria-label":"Next",onClick:n[1]||(n[1]=c(t=>a.getPageProducts(i.page=a.pagination.current_page+1),["prevent"]))},I,2)])])])}const D=l(P,[["render",S],["__scopeId","data-v-c2dd0b78"]]);export{D as P};