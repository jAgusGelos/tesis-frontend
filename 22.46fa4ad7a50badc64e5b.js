(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{ZNzd:function(e,t,n){"use strict";n.r(t),n.d(t,"EvaluateArticleModule",function(){return C});var a=n("ofXK"),i=n("tyNb"),c=n("fXoL"),o=n("AytR"),r=n("tk/3");let l=(()=>{class e{constructor(e){this.httpClient=e,this.apiURL=o.a.apiURL}postPaperEval(e){return this.httpClient.post(this.apiURL+"articulos/guardar-evaluacion/",e)}getPaperEval(){return this.httpClient.get(this.apiURL+"articulos/consulta-evaluaciones/")}getEvaluaciones(e){return this.httpClient.get(this.apiURL+"articulos/consultaDetalleEvaluacion/?idArticulo="+e)}getTest(e){return this.httpClient.get(this.apiURL+"articulos/consulta-evaluacion/?idArticulo="+e)}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(r.b))},e.\u0275prov=c.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=n("y6im"),s=n("TJ9D");function u(e,t){if(1&e){const e=c.Nb();c.Mb(0,"a",14),c.Tb("click",function(){c.ec(e);const t=c.Vb().$implicit;return c.Vb().toggleEvaluate(t)}),c.Kb(1,"i",15),c.Lb()}}function d(e,t){1&e&&(c.Mb(0,"a",16),c.Kb(1,"i",17),c.Lb())}function p(e,t){if(1&e){const e=c.Nb();c.Mb(0,"tr",8),c.Mb(1,"td"),c.ic(2),c.Lb(),c.Mb(3,"td"),c.ic(4),c.Lb(),c.Mb(5,"td"),c.ic(6),c.Lb(),c.Mb(7,"td"),c.Mb(8,"div",9),c.hc(9,u,2,0,"a",10),c.ic(10," \xa0 \xa0 "),c.hc(11,d,2,0,"a",11),c.Mb(12,"ul",12),c.Mb(13,"li"),c.Mb(14,"a",13),c.Tb("click",function(){c.ec(e);const n=t.$implicit;return c.Vb().toggleCancel(n)}),c.ic(15,"Rechazar Evaluaci\xf3n"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&e){const e=t.$implicit,n=t.index;c.zb(2),c.jc(n+1),c.zb(2),c.jc(e.nombreArticulo),c.zb(2),c.jc(e.estado),c.zb(3),c.Yb("ngIf","Evaluado"!==e.estado),c.zb(2),c.Yb("ngIf","Pdte Evaluacion"==e.estado)}}let m=(()=>{class e{constructor(){this.paperList=[],this.EvaluationEvent=new c.n,this.EvaluationAcceptEvent=new c.n,this.EvaluationCancelEvent=new c.n}ngOnInit(){window.scrollTo(0,0)}toggleEvaluate(e){this.EvaluationEvent.emit(e)}toggleAccept(e){this.EvaluationAcceptEvent.emit(e)}toggleCancel(e){this.EvaluationCancelEvent.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Db({type:e,selectors:[["app-evaluate-paper-list"]],inputs:{paperList:"paperList"},outputs:{EvaluationEvent:"EvaluationEvent",EvaluationAcceptEvent:"EvaluationAcceptEvent",EvaluationCancelEvent:"EvaluationCancelEvent"},decls:21,vars:1,consts:[[1,"container-fluid"],[1,"contenidos"],[1,"text-center"],[1,"table","text-center","table-hover","table-bordered"],[1,"thead"],[1,"col-md-2"],[1,"col-md-4"],["class","align-items-center",4,"ngFor","ngForOf"],[1,"align-items-center"],[1,"btn-group","col-md-3"],["title","Evaluar",3,"click",4,"ngIf"],["data-bs-toggle","dropdown","title","M\xe1s Opciones",4,"ngIf"],[1,"dropdown-menu"],["href","#",1,"dropdown-item",3,"click"],["title","Evaluar",3,"click"],[1,"fas","fa-pencil-alt"],["data-bs-toggle","dropdown","title","M\xe1s Opciones"],[1,"fas","fa-ellipsis-h"]],template:function(e,t){1&e&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Kb(2,"hr"),c.Mb(3,"h3",2),c.ic(4,"Plantilla de Evaluaci\xf3n"),c.Lb(),c.Kb(5,"hr"),c.Lb(),c.Kb(6,"br"),c.Mb(7,"table",3),c.Mb(8,"thead",4),c.Mb(9,"tr"),c.Mb(10,"th",5),c.ic(11,"Id"),c.Lb(),c.Mb(12,"th",6),c.ic(13,"Nombre"),c.Lb(),c.Mb(14,"th",6),c.ic(15,"Estado"),c.Lb(),c.Mb(16,"th",5),c.ic(17,"Acciones"),c.Lb(),c.Lb(),c.Lb(),c.Mb(18,"tbody"),c.hc(19,p,16,5,"tr",7),c.Lb(),c.Lb(),c.Kb(20,"br"),c.Lb()),2&e&&(c.zb(19),c.Yb("ngForOf",t.paperList))},directives:[a.k,a.l],styles:[".container-fluid[_ngcontent-%COMP%]{background-color:#f4f4f4}.contenidos[_ngcontent-%COMP%]{padding-bottom:3rem}.thead[_ngcontent-%COMP%]{background-color:#c8e5f1}.greyned[_ngcontent-%COMP%]{color:grey}.btn-primary[_ngcontent-%COMP%]{background-color:#3cafe0;border:none}i[_ngcontent-%COMP%]{cursor:pointer}i[_ngcontent-%COMP%]:hover{color:blue}.fas[_ngcontent-%COMP%]{font-size:1.25rem;color:#00609c}hr[_ngcontent-%COMP%]{border:1px solid #00609c}@media (min-width:768px){hr[_ngcontent-%COMP%]{margin-left:25%;margin-right:25%}.container-fluid[_ngcontent-%COMP%]{padding:5rem}}"]}),e})();function v(e,t){if(1&e&&(c.Mb(0,"div",5),c.Mb(1,"label",33),c.ic(2),c.Lb(),c.Kb(3,"input",34),c.Lb()),2&e){const e=t.$implicit;c.zb(1),c.Zb("for",e.idItemEvaluacion),c.zb(1),c.jc(e.itemEvaluacion),c.zb(1),c.Zb("id",e.idItemEvaluacion),c.Zb("value",e.calificacion)}}let h=(()=>{class e{constructor(){this.items=[],this.postEvaluation=new c.n,this.GetItemsEvent=new c.n,this.GetFileEvent=new c.n,this.CancelEvent=new c.n}ngOnInit(){window.scrollTo(0,0),this.getItems(this.paper.idArticulo),this.setReco()}submit(){let e=this.getReco(),t=document.getElementById("observaciones");if(0==t.value.length||0==e)return void alert("Porfavor, elija una recomendaci\xf3n y escriba una observaci\xf3n para terminar la evaluaci\xf3n.");let n=[];for(let c=0;c<this.items.length;c++){let e=document.getElementById((c+1).toString());n.push(e.value)}let a="",i=[];for(let c=0;c<n.length;c++){if(c==n.length-1){a=a+this.items[c].idItemEvaluacion+"-"+n[c];break}a=a+this.items[c].idItemEvaluacion+"-"+n[c]+","}i=[a],this.postEvaluation.emit({idArticulo:this.paper.idArticulo,idRecomendacion:e,observacion:t.value,itemsEvaluacion:i})}getReco(){let e,t=["fuertementeRechazar","rechazar","debilmenteRechazar","debilmenteAprobar","aprobar","fuertementeAprobar","necesitaReentrega"];for(let n=0;n<t.length;n++)if(e=document.getElementById(t[n]),1==e.checked)return parseInt(e.value);return 0}setReco(){let e;1==this.paper.recomendacion?(e=document.getElementById("fuertementeRechazar"),e.checked=!0):2==this.paper.recomendacion?(e=document.getElementById("rechazar"),e.checked=!0):3==this.paper.recomendacion?(e=document.getElementById("debilmenteRechazar"),e.checked=!0):4==this.paper.recomendacion?(e=document.getElementById("debilmenteAprobar"),e.checked=!0):5==this.paper.recomendacion?(e=document.getElementById("aprobar"),e.checked=!0):6==this.paper.recomendacion?(e=document.getElementById("fuertementeAprobar"),e.checked=!0):7==this.paper.recomendacion&&(e=document.getElementById("necesitaReentrega"),e.checked=!0)}cancel(){this.CancelEvent.emit()}getItems(e){this.GetItemsEvent.emit(e)}getFile(e){this.GetFileEvent.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Db({type:e,selectors:[["app-evaluate-paper-form"]],inputs:{paper:"paper",items:"items",evaluation:"evaluation"},outputs:{postEvaluation:"postEvaluation",GetItemsEvent:"GetItemsEvent",GetFileEvent:"GetFileEvent",CancelEvent:"CancelEvent"},decls:73,vars:3,consts:[[1,"card"],[1,"card-body"],[1,"contenidos"],[1,"card-title","text-center"],[1,"card-text"],[1,"row","justify-content-md-center"],[1,"col","col-md-6"],[1,"col","col-md-3"],["class","row justify-content-md-center",4,"ngFor","ngForOf"],["for","recomendaciones"],[1,"col","col-md-2"],[1,"form-check"],["type","radio","name","recomendaciones","id","fuertementeAprobar","value","6",1,"form-check-input"],["for","fuertementeAprobar",1,"form-check-label"],["type","radio","name","recomendaciones","id","aprobar","value","5",1,"form-check-input"],["for","aprobar",1,"form-check-label"],["type","radio","name","recomendaciones","id","debilmenteAprobar","value","4",1,"form-check-input"],["for","debilmenteAprobar",1,"form-check-label"],["type","radio","name","recomendaciones","id","debilmenteRechazar","value","3",1,"form-check-input"],["for","debilmenteRechazar",1,"form-check-label"],["type","radio","name","recomendaciones","id","rechazar","value","2",1,"form-check-input"],["for","rechazar",1,"form-check-label"],["type","radio","name","recomendaciones","id","fuertementeRechazar","value","1",1,"form-check-input"],["for","fuertementeRechazar",1,"form-check-label"],["type","radio","name","recomendaciones","id","necesitaReentrega","value","7",1,"form-check-input"],["for","necesitaReentrega",1,"form-check-label"],["for","observaciones"],[1,"col","col-md-4"],["id","observaciones",1,"form-control"],[1,"row","justify-content-md-center","pt-3"],["role","button",1,"btn","btn-warning","col-md-2",3,"click"],["role","button",1,"btn","btn-secondary","col-md-2",3,"click"],["role","button",1,"btn","btn-primary","col-md-3",3,"click"],[1,"col","col-md-3",3,"for"],["type","number","min","1","max","10",1,"col","col-md-4",3,"id","value"]],template:function(e,t){1&e&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Mb(2,"div",2),c.Kb(3,"hr"),c.Mb(4,"h3",3),c.ic(5,"Evaluando: "),c.Mb(6,"b"),c.ic(7),c.Lb(),c.Lb(),c.Kb(8,"hr"),c.Lb(),c.Mb(9,"div",4),c.Mb(10,"div",5),c.Mb(11,"div",6),c.ic(12,"La calificaci\xf3n de cada criterio abarca valores entre 1 y 10."),c.Lb(),c.Lb(),c.Mb(13,"div",5),c.Mb(14,"div",7),c.Mb(15,"h6"),c.ic(16,"Criterio"),c.Lb(),c.Lb(),c.Mb(17,"div",7),c.Mb(18,"h6"),c.ic(19,"Calificaci\xf3n"),c.Lb(),c.Lb(),c.Lb(),c.hc(20,v,4,4,"div",8),c.Mb(21,"div",5),c.Mb(22,"div",7),c.Mb(23,"label",9),c.Mb(24,"b"),c.ic(25,"Recomendaciones"),c.Lb(),c.Lb(),c.Lb(),c.Mb(26,"div",10),c.Mb(27,"div",11),c.Kb(28,"input",12),c.Mb(29,"label",13),c.ic(30," Fuertemente Aprobar "),c.Lb(),c.Lb(),c.Mb(31,"div",11),c.Kb(32,"input",14),c.Mb(33,"label",15),c.ic(34," Aprobar "),c.Lb(),c.Lb(),c.Mb(35,"div",11),c.Kb(36,"input",16),c.Mb(37,"label",17),c.ic(38," D\xe9bilmente Aprobar "),c.Lb(),c.Lb(),c.Lb(),c.Mb(39,"div",10),c.Mb(40,"div",11),c.Kb(41,"input",18),c.Mb(42,"label",19),c.ic(43," D\xe9bilmente Rechazar "),c.Lb(),c.Lb(),c.Mb(44,"div",11),c.Kb(45,"input",20),c.Mb(46,"label",21),c.ic(47," Rechazar "),c.Lb(),c.Lb(),c.Mb(48,"div",11),c.Kb(49,"input",22),c.Mb(50,"label",23),c.ic(51," Fuertemente Rechazar "),c.Lb(),c.Lb(),c.Mb(52,"div",11),c.Kb(53,"input",24),c.Mb(54,"label",25),c.ic(55," Necesita reentrega "),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(56,"div",5),c.Mb(57,"div",7),c.Mb(58,"label",26),c.Mb(59,"b"),c.ic(60,"Observaciones"),c.Lb(),c.Lb(),c.Lb(),c.Mb(61,"div",27),c.Mb(62,"textarea",28),c.ic(63),c.Lb(),c.Lb(),c.Lb(),c.Mb(64,"div",29),c.Mb(65,"a",30),c.Tb("click",function(){return t.getFile(t.paper.idArticulo)}),c.ic(66,"Ver art\xedculo"),c.Lb(),c.ic(67," \xa0 "),c.Mb(68,"a",31),c.Tb("click",function(){return t.cancel()}),c.ic(69,"Cancelar"),c.Lb(),c.Mb(70,"div",29),c.Mb(71,"a",32),c.Tb("click",function(){return t.submit()}),c.ic(72,"Guardar Cambios"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.zb(7),c.jc(t.paper.nombreArticulo),c.zb(13),c.Yb("ngForOf",t.items),c.zb(43),c.jc(t.paper.observaciones))},directives:[a.k],styles:[".card[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.row[_ngcontent-%COMP%]{margin-bottom:10px}.login-form[_ngcontent-%COMP%]{width:75%}.btn-primary[_ngcontent-%COMP%]{background-color:#3cafe0;border:none}.card[_ngcontent-%COMP%]{border-radius:3rem;padding-bottom:2rem;margin:1rem auto;background-color:#f4f4f4}.login-form[_ngcontent-%COMP%]{width:100%}.form-group[_ngcontent-%COMP%]{padding-top:.75rem;padding-bottom:.75rem}a[_ngcontent-%COMP%]{cursor:pointer}.card-title[_ngcontent-%COMP%]{width:100%;margin-left:auto;margin-right:auto;font-weight:300;padding-top:.5rem;padding-bottom:.5rem;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}hr[_ngcontent-%COMP%]{border:1px solid #00609c}input[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #8d999e}@media (min-width:768px){.card[_ngcontent-%COMP%]{max-width:80%}.card-body[_ngcontent-%COMP%]{padding:auto}hr[_ngcontent-%COMP%]{margin-left:25%;margin-right:25%}}"]}),e})();function f(e,t){if(1&e){const e=c.Nb();c.Mb(0,"app-evaluate-paper-list",3),c.Tb("EvaluationEvent",function(t){return c.ec(e),c.Vb().evaluate(t)})("EvaluationAcceptEvent",function(t){return c.ec(e),c.Vb().evaluate(t)})("EvaluationCancelEvent",function(t){return c.ec(e),c.Vb().evaluate(t)}),c.Lb()}if(2&e){const e=c.Vb();c.Yb("paperList",e.paperList)}}function g(e,t){if(1&e){const e=c.Nb();c.Mb(0,"app-evaluate-paper-form",4),c.Tb("postEvaluation",function(t){return c.ec(e),c.Vb().postEvaluation(t)})("GetItemsEvent",function(t){return c.ec(e),c.Vb().getItems(t)})("GetFileEvent",function(t){return c.ec(e),c.Vb().getFile(t)})("CancelEvent",function(t){return c.ec(e),c.Vb().toggleFlagEvaluate(t)}),c.Lb()}if(2&e){const e=c.Vb();c.Yb("paper",e.paper)("items",e.items)}}const E=[{path:"",component:(()=>{class e{constructor(e,t,n){this.paperEvalService=e,this.evaluationService=t,this.paperService=n,this.paperList=[],this.paper=[],this.items=[],this.flagEvaluate=!1}ngOnInit(){this.getPapers()}postEvaluation(e){this.paperEvalService.postPaperEval(e).subscribe(e=>{alert("Los cambios han sido guardados!")})}getPapers(){this.paperEvalService.getPaperEval().subscribe(e=>{this.paperList=e.data})}getItems(e){this.paperEvalService.getTest(e).subscribe(e=>{this.items=e.data})}evaluate(e){this.paper=e,this.flagEvaluate=!this.flagEvaluate}getFile(e){this.paperService.getPaperFile(e).subscribe(e=>{let t=new Blob([e],{type:"application/pdf"});const n=window.URL.createObjectURL(t),a=document.createElement("a");void 0!==a.download&&(a.setAttribute("href",n),a.setAttribute("target","_blank"),a.style.visibility="hidden",document.body.appendChild(a),a.click(),document.body.removeChild(a))})}toggleFlagEvaluate(){this.flagEvaluate=!this.flagEvaluate}acceptEvaluate(e){this.paper=e,this.evaluationService.acceptEvaluationPaper(this.paper).subscribe(e=>{alert("La evaluaci\xf3n ha sido aceptada.")})}cancelEvaluate(e){this.paper=e,this.evaluationService.cancelarEvaluationPaper(this.paper).subscribe(e=>{alert("La evaluaci\xf3n ha sido rechazada.")})}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(l),c.Jb(b.a),c.Jb(s.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-evaluate-article"]],decls:3,vars:2,consts:[[1,"container-fluid"],[3,"paperList","EvaluationEvent","EvaluationAcceptEvent","EvaluationCancelEvent",4,"ngIf"],[3,"paper","items","postEvaluation","GetItemsEvent","GetFileEvent","CancelEvent",4,"ngIf"],[3,"paperList","EvaluationEvent","EvaluationAcceptEvent","EvaluationCancelEvent"],[3,"paper","items","postEvaluation","GetItemsEvent","GetFileEvent","CancelEvent"]],template:function(e,t){1&e&&(c.Mb(0,"div",0),c.hc(1,f,1,1,"app-evaluate-paper-list",1),c.hc(2,g,1,2,"app-evaluate-paper-form",2),c.Lb()),2&e&&(c.zb(1),c.Yb("ngIf",!t.flagEvaluate),c.zb(1),c.Yb("ngIf",t.flagEvaluate))},directives:[a.l,m,h],styles:[""]}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({imports:[[i.c.forChild(E)],i.c]}),e})();var L=n("pKmL");let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({imports:[[a.b,M,L.a]]}),e})()}}]);