(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"7hs+":function(t,e,i){"use strict";i.r(e),i.d(e,"EvaluatePapersChairSecModule",function(){return C});var a=i("ofXK"),o=i("tyNb"),d=i("fXoL"),n=i("TJ9D"),c=i("5zbU");function b(t,e){if(1&t&&(d.Mb(0,"div",51),d.Mb(1,"div",17),d.Mb(2,"p",52),d.ic(3),d.Lb(),d.Lb(),d.Mb(4,"div",17),d.Mb(5,"p",53),d.ic(6),d.Lb(),d.Lb(),d.Lb()),2&t){const t=e.$implicit;d.zb(3),d.kc("\xa0\xa0\xa0\xa0",t.evaluador,":"),d.zb(3),d.jc(t.recomendacion)}}function s(t,e){if(1&t){const t=d.Nb();d.Mb(0,"a",54),d.Tb("click",function(){d.ec(t);const e=d.Vb().index;return d.Vb().toggleEdit(e)}),d.Kb(1,"i",55),d.ic(2," Editar"),d.Lb()}}function r(t,e){if(1&t){const t=d.Nb();d.Mb(0,"a",62),d.Tb("click",function(){d.ec(t);const e=d.Vb(2).index;return d.Vb().evaluar(e,1)}),d.ic(1,"Aprobar"),d.Lb()}}function l(t,e){if(1&t){const t=d.Nb();d.Mb(0,"a",63),d.Tb("click",function(){d.ec(t);const e=d.Vb(2).index;return d.Vb().evaluar(e,2)}),d.ic(1,"Rechazar"),d.Lb()}}function u(t,e){if(1&t){const t=d.Nb();d.Mb(0,"a",64),d.Tb("click",function(){d.ec(t);const e=d.Vb(2).index;return d.Vb().evaluar(e,3)}),d.ic(1,"Reentrega"),d.Lb()}}function v(t,e){if(1&t){const t=d.Nb();d.Mb(0,"div",56),d.hc(1,r,2,0,"a",57),d.ic(2," \xa0 "),d.hc(3,l,2,0,"a",58),d.ic(4," \xa0 "),d.hc(5,u,2,0,"a",59),d.ic(6," \xa0 "),d.Mb(7,"a",60),d.Tb("click",function(){d.ec(t);const e=d.Vb().index;return d.Vb().toggleEdit(e)}),d.Kb(8,"i",61),d.Lb(),d.Lb()}if(2&t){const t=d.Vb().$implicit;d.zb(1),d.Yb("ngIf",6!==t.idEstado&&8!==t.idEstado),d.zb(2),d.Yb("ngIf",7!==t.idEstado&&9!==t.idEstado),d.zb(2),d.Yb("ngIf",5!==t.idEstado)}}function h(t,e){if(1&t){const t=d.Nb();d.Mb(0,"div"),d.Mb(1,"div",40),d.Mb(2,"div",41),d.Mb(3,"div",42),d.Mb(4,"div",30),d.Mb(5,"h5",43),d.ic(6),d.Lb(),d.Lb(),d.Mb(7,"div",17),d.Mb(8,"h5",43),d.Mb(9,"span",15),d.ic(10),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Kb(11,"br"),d.Mb(12,"div",42),d.Mb(13,"h6",44),d.ic(14,"Evaluadores:"),d.Lb(),d.Lb(),d.hc(15,b,7,2,"div",45),d.Lb(),d.Mb(16,"div",46),d.Mb(17,"a",47),d.Tb("click",function(){d.ec(t);const i=e.index;return d.Vb().getArchivo(i)}),d.Kb(18,"i",32),d.ic(19," Ver art\xedculo"),d.Lb(),d.ic(20," \xa0 "),d.Mb(21,"a",47),d.Tb("click",function(){d.ec(t);const i=e.index;return d.Vb().verDetalle(i)}),d.Kb(22,"i",48),d.ic(23," Ver detalle"),d.Lb(),d.hc(24,s,3,0,"a",49),d.hc(25,v,9,3,"div",50),d.Lb(),d.Lb(),d.Lb()}if(2&t){const t=e.$implicit;d.zb(6),d.jc(t.nombre),d.zb(3),d.Bb("bg-warning",5===t.idEstado)("text-dark",5===t.idEstado)("bg-success",6===t.idEstado||8===t.idEstado)("bg-danger",7===t.idEstado||9===t.idEstado),d.zb(1),d.jc(t.estado),d.zb(5),d.Yb("ngForOf",t.evaluaciones),d.zb(9),d.Yb("ngIf",!t.edit),d.zb(1),d.Yb("ngIf",t.edit)}}function g(t,e){1&t&&(d.Mb(0,"option",65),d.ic(1,"Aprobar"),d.Lb())}function m(t,e){1&t&&(d.Mb(0,"option",66),d.ic(1,"Rechazar"),d.Lb())}function f(t,e){1&t&&(d.Mb(0,"option",67),d.ic(1,"Para reentregar"),d.Lb())}function p(t,e){if(1&t&&(d.Mb(0,"tr"),d.Mb(1,"td"),d.ic(2),d.Lb(),d.Mb(3,"td"),d.ic(4),d.Lb(),d.Mb(5,"td"),d.ic(6),d.Lb(),d.Mb(7,"td"),d.ic(8),d.Lb(),d.Lb()),2&t){const t=e.$implicit;d.zb(2),d.jc(t.criterio),d.zb(2),d.jc(t.res1),d.zb(2),d.jc(t.res2),d.zb(2),d.jc(t.res3)}}const M=[{path:"",component:(()=>{class t{constructor(t,e){this.paperService=t,this.evaluationService=e,this.edit=!1,this.articulos=[],this.detailed=!1,this.index=0,this.criterios=[],this.detalles=[{criterio:"",res1:"",res2:"",res3:""}],this.detNombreArticulo="",this.detResponsable="",this.detIdEstado=0,this.detEstado="",this.detEvUno={id:0,nombre:"Evaluador 1"},this.detEvDos={id:0,nombre:"Evaluador 2"},this.detEvTres={id:0,nombre:"Evaluador 3"},this.messageHeader="",this.messageBody=""}ngOnInit(){this.getArticulos()}evaluarDetalle(t){let e=document.getElementById("selectStateDetalle"),i=e.options[e.selectedIndex].value;""!=i?this.evaluar(t,i):document.getElementById("selectStateDetalle").classList.add("is-invalid")}evaluar(t,e){let i=this.articulos[t].idEstado,a=!1;i>=5&&(a=!0),1==e&&a?i=8:2==e&&a?i=9:1==e?i=6:2==e?i=7:3==e&&(i=5),this.paperService.calificarPaper(this.articulos[t].id,i).subscribe(i=>{this.cambiarEstado(t,e),this.toggleEdit(t)})}cambiarEstado(t,e){let i=!1;return this.articulos[t].idEstado>=5&&(i=!0),1==e&&i?(this.articulos[t].idEstado=8,this.articulos[t].estado="Aprobado Reentrega",this.detIdEstado=8,void(this.detEstado="Aprobado Reentrega")):2==e&&i?(this.articulos[t].idEstado=9,this.articulos[t].estado="Rechazado Reentrega",this.detIdEstado=9,void(this.detEstado="Rechazado Reentrega")):1==e?(this.articulos[t].idEstado=6,this.articulos[t].estado="Aprobado",this.detIdEstado=6,void(this.detEstado="Aprobado")):2==e?(this.articulos[t].idEstado=7,this.articulos[t].estado="Rechazado",this.detIdEstado=7,void(this.detEstado="Rechazado")):3==e?(this.articulos[t].idEstado=5,this.articulos[t].estado="Para Reentregar",this.detIdEstado=5,void(this.detEstado="Para Reentregar")):void 0}getArticulos(){this.articulos=[],this.paperService.getPapersXChair().subscribe(t=>{this.articulos=t.data[0].articulos,this.articulos=this.articulos.map(t=>({estado:t.estado,evaluaciones:t.evaluaciones,id:t.id,idCongreso:t.idCongreso,idEstado:t.idEstado,idSimposio:t.idSimposio,nombre:t.nombre,responsable:t.responsable,url:t.url,edit:!1}))})}verDetalle(t){this.index=t,this.detEvUno.nombre="Evaluador 1",this.detEvDos.nombre="Evaluador 2",this.detEvTres.nombre="Evaluador 3";const e=this.articulos[t],i=e.evaluaciones;this.detNombreArticulo=e.nombre,this.detResponsable=e.responsable,this.detIdEstado=e.idEstado,this.detEstado=e.estado,i.length>=1&&(this.detEvUno.id=i[0].idEvaluador,this.detEvUno.nombre=i[0].evaluador),i.length>=2&&(this.detEvDos.id=i[1].idEvaluador,this.detEvDos.nombre=i[1].evaluador),i.length>=3&&(this.detEvTres.id=i[2].idEvaluador,this.detEvTres.nombre=i[2].evaluador),this.evaluationService.getItemsEvaluacion().subscribe(i=>{const a=i.data;this.paperService.getEvaluationDetails(e.id).subscribe(e=>{let i,o,d;e.data.forEach(t=>{t.idEvaluador==this.detEvUno.id?i=t:t.idEvaluador==this.detEvDos.id?o=t:d=t});let n=null,c=null,b=null;for(let t=0;t<a.length;t++)void 0!==i.itemsEvaluados[t].calificacion&&(n=i.itemsEvaluados[t].calificacion),void 0!==o.itemsEvaluados[t].calificacion&&(c=o.itemsEvaluados[t].calificacion),void 0!==d.itemsEvaluados[t].calificacion&&(b=d.itemsEvaluados[t].calificacion),this.detalles.push({criterio:a[t].nombre,res1:n,res2:c,res3:b}),n=null,c=null,b=null;this.detalles.shift(),this.detalles.push({criterio:"Recomendaci\xf3n",res1:this.articulos[t].evaluaciones[0].recomendacion,res2:this.articulos[t].evaluaciones[1].recomendacion,res3:this.articulos[t].evaluaciones[2].recomendacion})})}),document.getElementById("activar-modal").click()}getArchivo(t){this.paperService.getPaperFile(this.articulos[t].id).subscribe(t=>{const e=new Blob([t],{type:"application/pdf"}),i=window.URL.createObjectURL(e),a=document.createElement("a");void 0!==a.download&&(a.setAttribute("href",i),a.setAttribute("target","_blank"),a.style.visibility="hidden",document.body.appendChild(a),a.click(),document.body.removeChild(a))})}modalOnClose(t){this.detalles=[],this.articulos[t].edit=!1}toggleEdit(t){this.articulos[t].edit=!this.articulos[t].edit}}return t.\u0275fac=function(e){return new(e||t)(d.Jb(n.a),d.Jb(c.a))},t.\u0275cmp=d.Db({type:t,selectors:[["app-evaluate-papers-chair-sec"]],decls:76,vars:21,consts:[[1,"container-fluid"],[1,"evaluation-cards"],[1,"card-title","text-center"],[4,"ngFor","ngForOf"],["hidden","","id","activar-modal","data-bs-toggle","modal","data-bs-target","#detallesModal"],["id","detallesModal","data-bs-backdrop","static","data-bs-keyboard","false","tabindex","-1","aria-labelledby","detallesModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-lg","modal-dialog-scrollable"],[1,"modal-content"],[1,"modal-header"],["id","detallesModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"container"],[1,"row","row-detalle"],[1,"card-subtitle","mb-2","text-muted"],[1,"badge","bg-primary"],[1,"row","row-detalle","align-items-center"],[1,"col-auto"],["for","selectStateDetalle",1,"col-form-label"],["id","spanEvaluacion"],["id","selectStateDetalle",1,"form-select"],["disabled","","selected","","value",""],["value","1",4,"ngIf"],["value","2",4,"ngIf"],["value","3",4,"ngIf"],["id","btnGuardar",1,"btn","btn-outline-success",3,"click"],[1,"fa","fa-save","fa-lg"],[1,"table","table-bordered"],[1,"text-center"],[1,"modal-footer"],[1,"col-auto","me-auto"],[1,"btn","btn-primary","btn-border",3,"click"],[1,"fas","fa-file-pdf"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary","btn-border",3,"click"],["hidden","","id","modal-mensaje","type","button","data-bs-toggle","modal","data-bs-target","#exampleModal",1,"btn","btn-primary"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],[1,"card","col-md-6","offset-3"],[1,"card-body"],[1,"row"],[1,"card-title"],["id","evaluadores",1,"card-text"],["class","row ev-reco",4,"ngFor","ngForOf"],[1,"card-footer"],[1,"btn","btn-outline-primary",3,"click"],[1,"fa","fa-search-plus"],["class","btn btn-outline-primary","id","editar",3,"click",4,"ngIf"],["id","evaluation-select",4,"ngIf"],[1,"row","ev-reco"],["id","nombreEvaluador"],[1,"card-text"],["id","editar",1,"btn","btn-outline-primary",3,"click"],[1,"fa","fa-pencil"],["id","evaluation-select"],["class","btn btn-outline-success",3,"click",4,"ngIf"],["class","btn btn-outline-danger",3,"click",4,"ngIf"],["class","btn btn-outline-warning",3,"click",4,"ngIf"],["title","Cancelar",1,"btn","btn-outline-secondary",3,"click"],[1,"fas","fa-times","fa-lg"],[1,"btn","btn-outline-success",3,"click"],[1,"btn","btn-outline-danger",3,"click"],[1,"btn","btn-outline-warning",3,"click"],["value","1"],["value","2"],["value","3"]],template:function(t,e){1&t&&(d.Mb(0,"div",0),d.Mb(1,"div",1),d.Kb(2,"hr"),d.Mb(3,"h3",2),d.ic(4,"Evaluaci\xf3n de Art\xedculos"),d.Lb(),d.Kb(5,"hr"),d.Lb(),d.hc(6,h,26,13,"div",3),d.Lb(),d.Kb(7,"button",4),d.Mb(8,"div",5),d.Mb(9,"div",6),d.Mb(10,"div",7),d.Mb(11,"div",8),d.Mb(12,"h5",9),d.ic(13),d.Lb(),d.Mb(14,"button",10),d.Tb("click",function(){return e.modalOnClose(e.index)}),d.Lb(),d.Lb(),d.Mb(15,"div",11),d.Mb(16,"div",12),d.Mb(17,"div",13),d.Mb(18,"h6"),d.Mb(19,"span",14),d.ic(20,"Subido por "),d.Lb(),d.ic(21),d.Lb(),d.Lb(),d.Mb(22,"div",13),d.Mb(23,"h6"),d.ic(24,"Estado:\xa0\xa0"),d.Mb(25,"span",15),d.ic(26),d.Lb(),d.Lb(),d.Lb(),d.Mb(27,"div",16),d.Mb(28,"div",17),d.Mb(29,"label",18),d.Mb(30,"span",19),d.ic(31,"Evaluaci\xf3n:"),d.Lb(),d.Lb(),d.Lb(),d.Mb(32,"div",17),d.Mb(33,"select",20),d.Kb(34,"option",21),d.hc(35,g,2,0,"option",22),d.hc(36,m,2,0,"option",23),d.hc(37,f,2,0,"option",24),d.Lb(),d.Lb(),d.Mb(38,"div",17),d.Mb(39,"a",25),d.Tb("click",function(){return e.evaluarDetalle(e.index)}),d.ic(40,"Guardar "),d.Kb(41,"i",26),d.Lb(),d.Lb(),d.Lb(),d.Mb(42,"table",27),d.Mb(43,"thead",28),d.Mb(44,"tr"),d.Mb(45,"th"),d.ic(46,"Criterio"),d.Lb(),d.Mb(47,"th"),d.ic(48),d.Lb(),d.Mb(49,"th"),d.ic(50),d.Lb(),d.Mb(51,"th"),d.ic(52),d.Lb(),d.Lb(),d.Lb(),d.Mb(53,"tbody",28),d.hc(54,p,9,4,"tr",3),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(55,"div",29),d.Mb(56,"div",30),d.Mb(57,"a",31),d.Tb("click",function(){return e.getArchivo(e.index)}),d.Kb(58,"i",32),d.ic(59," Ver art\xedculo"),d.Lb(),d.Lb(),d.Mb(60,"div",17),d.Mb(61,"button",33),d.Tb("click",function(){return e.modalOnClose(e.index)}),d.ic(62,"Cerrar"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Kb(63,"button",34),d.Mb(64,"div",35),d.Mb(65,"div",36),d.Mb(66,"div",7),d.Mb(67,"div",8),d.Mb(68,"h5",37),d.ic(69),d.Lb(),d.Kb(70,"button",38),d.Lb(),d.Mb(71,"div",11),d.ic(72),d.Lb(),d.Mb(73,"div",29),d.Mb(74,"button",39),d.ic(75,"Close"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb()),2&t&&(d.zb(6),d.Yb("ngForOf",e.articulos),d.zb(7),d.jc(e.detNombreArticulo),d.zb(8),d.jc(e.detResponsable),d.zb(4),d.Bb("bg-warning",5===e.detIdEstado)("text-dark",5===e.detIdEstado)("bg-success",6===e.detIdEstado||8===e.detIdEstado)("bg-danger",7===e.detIdEstado||9===e.detIdEstado),d.zb(1),d.jc(e.detEstado),d.zb(9),d.Yb("ngIf",6!==e.detIdEstado&&8!==e.detIdEstado),d.zb(1),d.Yb("ngIf",7!==e.detIdEstado&&9!==e.detIdEstado),d.zb(1),d.Yb("ngIf",5!==e.detIdEstado),d.zb(11),d.jc(e.detEvUno.nombre),d.zb(2),d.jc(e.detEvDos.nombre),d.zb(2),d.jc(e.detEvTres.nombre),d.zb(2),d.Yb("ngForOf",e.detalles),d.zb(15),d.jc(e.messageHeader),d.zb(3),d.kc(" ",e.messageBody," "))},directives:[a.k,a.l],styles:[".container-fluid[_ngcontent-%COMP%]{background-color:#f4f4f4}hr[_ngcontent-%COMP%]{border:1px solid #00609c}@media (min-width:768px){hr[_ngcontent-%COMP%]{margin-left:25%;margin-right:25%}.container-fluid[_ngcontent-%COMP%]{padding:5rem}}.ev-reco[_ngcontent-%COMP%]{margin-bottom:-15px}.evaluation-cards[_ngcontent-%COMP%]{padding-bottom:20px}.card[_ngcontent-%COMP%]{margin-top:20px}.card-footer[_ngcontent-%COMP%]{background-color:#fff}.modal-footer[_ngcontent-%COMP%], .modal-header[_ngcontent-%COMP%]{padding-left:29px;padding-right:29px}.row-detalle[_ngcontent-%COMP%]{margin-bottom:10px}.table[_ngcontent-%COMP%]{margin-top:30px}.btn-primary[_ngcontent-%COMP%]{background-color:#00609c;color:#fff}.btn-border[_ngcontent-%COMP%]{border:none}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#0080cf}.btn-outline-primary[_ngcontent-%COMP%]{color:#00609c;background:#0000;border:#0000}.btn-outline-primary[_ngcontent-%COMP%]:hover{color:#3cafe0}#selectStateDetalle[_ngcontent-%COMP%]{float:left}#btnGuardar[_ngcontent-%COMP%]{float:right}#evaluadores[_ngcontent-%COMP%]{font-style:italic;color:#383838}#nombreEvaluador[_ngcontent-%COMP%]{font-weight:500}#responsable[_ngcontent-%COMP%]{font-style:italic}#editar[_ngcontent-%COMP%], #evaluation-select[_ngcontent-%COMP%]{float:right}#evaluation-select-detalle[_ngcontent-%COMP%]{white-space:nowrap}#spanEvaluacion[_ngcontent-%COMP%]{font-weight:500}"]}),t})()}];let E=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Hb({type:t}),t.\u0275inj=d.Gb({imports:[[o.c.forChild(M)],o.c]}),t})();var L=i("pKmL"),k=i("tk/3");let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Hb({type:t}),t.\u0275inj=d.Gb({imports:[[a.b,E,L.a,k.c]]}),t})()}}]);