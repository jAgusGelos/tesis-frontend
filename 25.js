(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{kR1t:function(t,n,e){"use strict";e.r(n),e.d(n,"AcceptEvaluatePaperModule",function(){return h});var a=e("mrSG"),r=e("fXoL"),c=e("ofXK"),o=e("tyNb"),i=e("5eHb"),d=e("f4AX");let s=class{constructor(t,n,e){this.route=t,this.service=n,this.toastr=e,this.accepted=!1}ngOnInit(){const t=window.location.href.split("/");this.token=t[t.length-1],this.service.acceptEvaluatePaper("?token="+this.token).subscribe(t=>this.accept(),t=>{this.toastr.error("No se pudo aceptar la evaluaci\xf3n del paper.")})}accept(){this.accepted=!0,console.log("SI")}};s.ctorParameters=()=>[{type:o.a},{type:d.a},{type:i.d}],s=Object(a.c)([Object(r.o)({selector:"app-accept-evaluate-paper",template:'<div class="container-md card" *ngIf=\'accepted\'>\n    <div class="card-body">\n      <div class="contenidos">\n        <h3 class="card-title text-center">Evaluaci\xf3n de Paper Aceptada!</h3>\n      </div>\n  \n      <div class="card-text">\n        <p>Encontrar\xe1s el paper a evaluar en la secci\xf3n "Evaluar"</p>\n      </div>\n\n    </div>\n  </div>',styles:[".card {\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 3rem;\n    padding-bottom: 2rem;\n    margin-top: 5rem;\n    margin-bottom: 5rem;\n    background-color: #F4F4F4;\n  }\n  \n  \n  @media (min-width: 768px) {\n    .card{\n      max-width: 50%;\n    }\n  \n    .card-body{\n      padding: auto;\n    }\n   }\n  \n  \n  .card-title{\n    border-top: 1px solid #00609C;\n    border-bottom:  1px solid #00609C;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    font-weight:300;\n    padding-left: 3rem;\n    padding-right: 3rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    max-width: -webkit-fit-content;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n  }\n  \n  \n  hr{\n    border: 1px #00609C solid;\n  }\n  \n  \n  .spaced{\n    padding-bottom: 8rem;\n  }\n  "]})],s);const p=[{path:"",component:s}];let l=class{};l=Object(a.c)([Object(r.N)({imports:[o.c.forChild(p)],exports:[o.c]})],l);var m=e("pKmL");let h=class{};h=Object(a.c)([Object(r.N)({declarations:[s],imports:[c.c,l,m.a]})],h)}}]);
//# sourceMappingURL=25.js.map