(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{d5tx:function(t,n,e){"use strict";e.r(n),e.d(n,"AcceptAssistantModule",function(){return p});var o=e("ofXK"),r=e("tyNb"),c=e("fXoL"),i=e("7biO"),a=e("5eHb");function s(t,n){1&t&&(c.Rb(0,"div",1),c.Rb(1,"div",2),c.Rb(2,"div",3),c.Rb(3,"h3",4),c.Jc(4,"Rol de Ayudante Aceptado!"),c.Qb(),c.Qb(),c.Rb(5,"div",5),c.Rb(6,"p"),c.Jc(7,"Gracias por aceptar ser ayudante en el Congreso."),c.Qb(),c.Qb(),c.Qb(),c.Qb())}const d=[{path:"",component:(()=>{class t{constructor(t,n,e){this.route=t,this.assistantAervice=n,this.toastr=e,this.accepted=!1}ngOnInit(){this.route.queryParams.subscribe(t=>{this.token=t.token,this.assistantAervice.acceptAssistant("?token="+this.token).subscribe(t=>this.accepted=!0,t=>{this.toastr.error("No se pudo confirmar su rol como ayudante.")})})}}return t.\u0275fac=function(n){return new(n||t)(c.Mb(r.a),c.Mb(i.a),c.Mb(a.d))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-accept-assistant"]],decls:1,vars:1,consts:[["class","container-md card",4,"ngIf"],[1,"container-md","card"],[1,"card-body"],[1,"contenidos"],[1,"card-title","text-center"],[1,"card-text"]],template:function(t,n){1&t&&c.Hc(0,s,8,0,"div",0),2&t&&c.lc("ngIf",n.accepted)},directives:[o.o],styles:["@media (min-width:768px){hr[_ngcontent-%COMP%]{border:1px solid #00609c}.card[_ngcontent-%COMP%]{max-width:50%;border-radius:3rem;padding-bottom:2rem;margin:5rem auto;background-color:#f4f4f4}.card-body[_ngcontent-%COMP%]{padding:auto}}.card-title[_ngcontent-%COMP%]{border-top:1px solid #00609c;border-bottom:1px solid #00609c;width:100%;margin-left:auto;margin-right:auto;font-weight:300;padding:.5rem 3rem;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.spaced[_ngcontent-%COMP%]{padding-bottom:8rem}p[_ngcontent-%COMP%]{margin-top:20px}"]}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({imports:[[r.d.forChild(d)],r.d]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({imports:[[o.c,b]]}),t})()}}]);