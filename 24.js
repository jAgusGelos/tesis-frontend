(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{d5tx:function(t,n,e){"use strict";e.r(n),e.d(n,"AcceptAssistantModule",function(){return l});var a=e("mrSG"),o=e("fXoL"),i=e("ofXK"),r=e("tyNb"),s=e("5eHb"),c=e("7biO");let d=class{constructor(t,n,e){this.route=t,this.assistantAervice=n,this.toastr=e,this.accepted=!1}ngOnInit(){this.route.queryParams.subscribe(t=>{this.token=t.token,this.assistantAervice.acceptAssistant("?token="+this.token).subscribe(t=>this.accepted=!0,t=>{this.toastr.error("No se pudo confirmar su rol como ayudante.")})})}};d.ctorParameters=()=>[{type:r.a},{type:c.a},{type:s.d}],d=Object(a.c)([Object(o.o)({selector:"app-accept-assistant",template:'<div *ngIf=\'accepted\' class="container-md card">\n    <div class="card-body">\n      <div class="contenidos">\n        <h3 class="card-title text-center">Rol de Ayudante Aceptado!</h3>\n      </div>\n      <div class="card-text">\n        <p>Gracias por aceptar ser ayudante en el Congreso.</p>\n      </div>\n    </div>\n  </div>',styles:["@media (min-width: 768px) {\n    hr{\n        border: 1px #00609C solid;\n    }\n    \n    .card{\n        max-width: 50%;\n        margin-left: auto;\n        margin-right: auto;\n        border-radius: 3rem;\n        padding-bottom: 2rem;\n        margin-top: 5rem;\n        margin-bottom: 5rem;\n        background-color: #F4F4F4;\n    }\n  \n    .card-body{\n      padding: auto;\n    }\n   }\n  \n.card-title{\n    border-top: 1px solid #00609C;\n    border-bottom:  1px solid #00609C;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    font-weight:300;\n    padding-left: 3rem;\n    padding-right: 3rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    max-width: -webkit-fit-content;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n}\n  \n.spaced{\n    padding-bottom: 8rem;\n}\n  \np {\n    margin-top: 20px;\n}\n"]})],d);const p=[{path:"",component:d}];let m=class{};m=Object(a.c)([Object(o.N)({imports:[r.c.forChild(p)],exports:[r.c]})],m);let l=class{};l=Object(a.c)([Object(o.N)({declarations:[d],imports:[i.c,m]})],l)}}]);
//# sourceMappingURL=24.js.map