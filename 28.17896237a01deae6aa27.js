(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{kR1t:function(t,e,n){"use strict";n.r(e),n.d(e,"AcceptEvaluatePaperModule",function(){return u});var a=n("ofXK"),c=n("tyNb"),r=n("fXoL"),o=n("f4AX"),i=n("5eHb");function d(t,e){1&t&&(r.Rb(0,"div",1),r.Rb(1,"div",2),r.Rb(2,"div",3),r.Rb(3,"h3",4),r.Jc(4,"Evaluaci\xf3n de Paper Aceptada!"),r.Qb(),r.Qb(),r.Rb(5,"div",5),r.Rb(6,"p"),r.Jc(7,'Encontrar\xe1s el paper a evaluar en la secci\xf3n "Evaluar"'),r.Qb(),r.Qb(),r.Qb(),r.Qb())}const s=[{path:"",component:(()=>{class t{constructor(t,e,n){this.route=t,this.service=e,this.toastr=n,this.accepted=!1}ngOnInit(){this.route.queryParams.subscribe(t=>{this.token=t.token,this.service.acceptEvaluatePaper("?token="+this.token).subscribe(t=>this.accept(),t=>{this.toastr.error("No se pudo aceptar la evaluaci\xf3n del paper.")})})}accept(){this.accepted=!0,console.log("SI")}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(c.a),r.Mb(o.a),r.Mb(i.d))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-accept-evaluate-paper"]],decls:1,vars:1,consts:[["class","container-md card",4,"ngIf"],[1,"container-md","card"],[1,"card-body"],[1,"contenidos"],[1,"card-title","text-center"],[1,"card-text"]],template:function(t,e){1&t&&r.Hc(0,d,8,0,"div",0),2&t&&r.lc("ngIf",e.accepted)},directives:[a.o],styles:[".card[_ngcontent-%COMP%]{border-radius:3rem;padding-bottom:2rem;margin:5rem auto;background-color:#f4f4f4}@media (min-width:768px){.card[_ngcontent-%COMP%]{max-width:50%}.card-body[_ngcontent-%COMP%]{padding:auto}}.card-title[_ngcontent-%COMP%]{border-top:1px solid #00609c;border-bottom:1px solid #00609c;width:100%;margin-left:auto;margin-right:auto;font-weight:300;padding:.5rem 3rem;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}hr[_ngcontent-%COMP%]{border:1px solid #00609c}.spaced[_ngcontent-%COMP%]{padding-bottom:8rem}"]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[[c.d.forChild(s)],c.d]}),t})();var b=n("pKmL");let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[[a.c,p,b.a]]}),t})()}}]);