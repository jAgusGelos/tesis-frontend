(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"4aEt":function(t,e,a){"use strict";a.r(e),a.d(e,"EvaluatorModule",function(){return u});var o=a("ofXK"),r=a("tyNb"),i=a("fXoL"),n=a("y6im");function l(t,e){if(1&t){const t=i.Nb();i.Mb(0,"tr",11),i.Mb(1,"td"),i.ic(2),i.Lb(),i.Mb(3,"td"),i.Mb(4,"div",12),i.Mb(5,"a",13),i.Tb("click",function(){i.ec(t);const a=e.$implicit;return i.Vb().addEvaluator(a)}),i.Kb(6,"i",14),i.Lb(),i.Lb(),i.Lb(),i.Lb()}if(2&t){const t=e.$implicit;i.zb(2),i.lc("",t.nombreEv," ",t.apellidoEv,"")}}function c(t,e){if(1&t){const t=i.Nb();i.Mb(0,"tr",11),i.Mb(1,"td"),i.ic(2),i.Lb(),i.Mb(3,"td"),i.Mb(4,"div",12),i.Mb(5,"a",15),i.Tb("click",function(){i.ec(t);const a=e.$implicit;return i.Vb().toggleRemoveHandled(a)}),i.Kb(6,"i",16),i.Lb(),i.Lb(),i.Lb(),i.Lb()}if(2&t){const t=e.$implicit;i.zb(2),i.lc("",t.nombreEv," ",t.apellidoEv,"")}}const s=[{path:"",component:(()=>{class t{constructor(t){this.evaluatorService=t,this.evaluatorList=[],this.evaluatorSelectedList=[],this.adding=!1,this.evaluatorSelectedId=[]}ngOnInit(){window.scrollTo(0,0),this.getEvaluatorSelected(),this.getEvaluators()}getEvaluators(){this.evaluatorService.getEvaluatorsSimposio().subscribe(t=>{0!==t.data.length?this.evaluatorList=t.data.filter(t=>{if(!this.evaluatorSelectedId.includes(t.idEvaluador))return t}):alert("Lo sentimos, actualmente no disponemos de m\xe1s evaluadores.")})}getEvaluatorSelected(){this.evaluatorService.getEvaluatorsGroup().subscribe(t=>{this.evaluatorSelectedList=t.data,this.evaluatorSelectedId=t.data.map(t=>t.idEvaluador)})}addEvaluator(t){this.evaluatorService.postEvaluatorGroup(t.idEvaluador).subscribe(e=>{this.evaluatorList=this.evaluatorList.filter(e=>{if(e.idEvaluador!==t.idEvaluador)return e}),this.evaluatorSelectedList.push(t)})}loadAll(){confirm("Atenci\xf3n, los evaluadores que est\xe1 por cagar no pertenecen a su simposio. \xbfDesea hacerlo de todas formas?")&&this.evaluatorService.getEvaluatorsAll().subscribe(t=>{this.evaluatorList=t.data.filter(t=>{if(!this.evaluatorSelectedId.includes(t.idEvaluador))return t})})}toggleRemoveHandled(t){confirm("Esta seguro desea eliminar el Evaluador: "+t.nombreEv+" "+t.apellidoEv+"\nToda la configuraci\xf3n creada se perder\xe1")&&this.evaluatorService.deleteEvaluatorGroup(t.idEvaluador).subscribe(e=>{this.evaluatorList.push(t),this.evaluatorSelectedList=this.evaluatorSelectedList.filter(e=>{if(e.idEvaluador!==t.idEvaluador)return t})})}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(n.a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-evaluator"]],decls:31,vars:2,consts:[[1,"container-fluid"],[1,"contenidos"],[1,"text-center"],[1,"row"],[1,"col-md-6"],[1,"table","text-center","table-hover","table-bordered"],[1,"thead"],[1,"col-md-4"],[1,"col-md-2"],["class","align-items-center",4,"ngFor","ngForOf"],["role","button",1,"btn","btn-primary","btn-block","col-md-12","alerta",3,"click"],[1,"align-items-center"],[1,"btn-group","col-md-3","text-center"],["title","Agregar",3,"click"],[1,"fas","fa-plus"],["title","Eliminar",3,"click"],[1,"fas","fa-trash"]],template:function(t,e){1&t&&(i.Mb(0,"div",0),i.Mb(1,"div",1),i.Kb(2,"hr"),i.Mb(3,"h3",2),i.ic(4,"Evaluadores Activos"),i.Lb(),i.Kb(5,"hr"),i.Lb(),i.Kb(6,"br"),i.Mb(7,"div",3),i.Mb(8,"div",4),i.Mb(9,"table",5),i.Mb(10,"thead",6),i.Mb(11,"tr"),i.Mb(12,"th",7),i.ic(13,"Evaluadores Disponibles"),i.Lb(),i.Mb(14,"th",8),i.ic(15,"Acciones"),i.Lb(),i.Lb(),i.Lb(),i.Mb(16,"tbody"),i.hc(17,l,7,2,"tr",9),i.Lb(),i.Lb(),i.Mb(18,"a",10),i.Tb("click",function(){return e.loadAll()}),i.ic(19,"\xa1Necesito m\xe1s Evaluadores!"),i.Lb(),i.Lb(),i.Mb(20,"div",4),i.Mb(21,"table",5),i.Mb(22,"thead",6),i.Mb(23,"tr"),i.Mb(24,"th",7),i.ic(25,"Evaluadores Seleccionados"),i.Lb(),i.Mb(26,"th",8),i.ic(27,"Acciones"),i.Lb(),i.Lb(),i.Lb(),i.Mb(28,"tbody"),i.hc(29,c,7,2,"tr",9),i.Lb(),i.Lb(),i.Lb(),i.Lb(),i.Kb(30,"br"),i.Lb()),2&t&&(i.zb(17),i.Yb("ngForOf",e.evaluatorList),i.zb(12),i.Yb("ngForOf",e.evaluatorSelectedList))},directives:[o.k],styles:[".container-fluid[_ngcontent-%COMP%]{background-color:#f4f4f4}.contenidos[_ngcontent-%COMP%]{padding-bottom:3rem}.thead[_ngcontent-%COMP%]{background-color:#c8e5f1}.greyned[_ngcontent-%COMP%]{color:grey}.btn-primary[_ngcontent-%COMP%]{background-color:#3cafe0;border:none}i[_ngcontent-%COMP%]{padding-top:.5rem;cursor:pointer}i[_ngcontent-%COMP%]:hover{color:blue}.fas[_ngcontent-%COMP%]{font-size:1.25rem;color:#00609c}hr[_ngcontent-%COMP%]{border:1px solid #00609c}@media (min-width:768px){hr[_ngcontent-%COMP%]{margin-left:25%;margin-right:25%}.container-fluid[_ngcontent-%COMP%]{padding:5rem}}"]}),t})()}];let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({imports:[[r.c.forChild(s)],r.c]}),t})();var b=a("3Pt+");let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({imports:[[o.b,d,b.k]]}),t})()}}]);