(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{sMNc:function(n,t,e){"use strict";e.r(t),e.d(t,"CancelEvaluatorModule",function(){return p});var o=e("mrSG"),a=e("fXoL"),r=e("ofXK"),c=e("tyNb"),i=e("5eHb"),d=e("f4AX");let s=class{constructor(n,t,e){this.route=n,this.service=t,this.toastr=e,this.cancel=!1}ngOnInit(){const n=window.location.href.split("/");this.token=n[n.length-1],this.service.cancelEvaluator("?token="+this.token).subscribe(n=>this.cancel=!0,n=>{this.toastr.error("No se pudo cancelar su rol como evaluador.")})}};s.ctorParameters=()=>[{type:c.a},{type:d.a},{type:i.d}],s=Object(o.c)([Object(a.o)({selector:"app-cancel-evaluator",template:'<div *ngIf=\'cancel\' class="container-md card">\n    <div class="card-body">\n      <div class="contenidos">\n        <h3 class="card-title text-center">Asignaci\xf3n de Evaluador Rechazada</h3>\n      </div>\n  \n      <div class="card-text">\n        <p>Hemos descartado correctamente tu rol como evaluador.</p>\n      </div>\n    </div>\n  </div>',styles:[".card {\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 3rem;\n  padding-bottom: 2rem;\n  margin-top: 5rem;\n  margin-bottom: 5rem;\n  background-color: #F4F4F4;\n}\n\n\n@media (min-width: 768px) {\n  .card{\n    max-width: 50%;\n  }\n\n  .card-body{\n    padding: auto;\n  }\n }\n\n\n.card-title{\n  border-top: 1px solid #00609C;\n  border-bottom:  1px solid #00609C;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  font-weight:300;\n  padding-left: 3rem;\n  padding-right: 3rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n\nhr{\n  border: 1px #00609C solid;\n}\n\n\n.spaced{\n  padding-bottom: 8rem;\n}\n\n\n\n\n"]})],s);const l=[{path:"",component:s}];let m=class{};m=Object(o.c)([Object(a.N)({imports:[c.c.forChild(l)],exports:[c.c]})],m);let p=class{};p=Object(o.c)([Object(a.N)({declarations:[s],imports:[r.c,m]})],p)}}]);
//# sourceMappingURL=13.js.map