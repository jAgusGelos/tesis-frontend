(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"5zbU":function(t,i,e){"use strict";e.d(i,"a",function(){return n});var s=e("AytR"),r=e("fXoL"),o=e("tk/3"),a=e("7dP1");let n=(()=>{class t{constructor(t,i){this.httpClient=t,this.auth=i,this.apiURL=s.a.apiURL,this.idCongreso=this.auth.getCongressId()}postEvaluation(t){return this.httpClient.post(this.apiURL+"articulos/altaItemEvaluacion/",{idCongreso:this.idCongreso,nombre:t.pregunta})}getEvaluation(t){return this.httpClient.get(this.apiURL+"articulos/getItemsEvaluacion/?activos="+t)}putEvaluation(t){return this.httpClient.put(this.apiURL+"articulos/editarItemEvaluacion/",{id:t.id,idCongreso:this.idCongreso,nombre:t.pregunta})}deleteEvaluation(t){return this.httpClient.delete(this.apiURL+"articulos/eliminarItemEvaluacion/?idItem="+t.id)}getItemsEvaluacion(){return this.httpClient.get(this.apiURL+"articulos/getItemsEvaluacion/")}}return t.\u0275fac=function(i){return new(i||t)(r.Qb(o.b),r.Qb(a.a))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},TJ9D:function(t,i,e){"use strict";e.d(i,"a",function(){return n});var s=e("AytR"),r=e("fXoL"),o=e("tk/3"),a=e("7dP1");let n=(()=>{class t{constructor(t,i){this.httpClient=t,this.auth=i,this.apiURL=s.a.apiURL,this.idCongress=i.getCongressId()}postPaper(t){const i=new FormData;return i.append("articulo",t.archivo),i.append("idCongreso",this.idCongress.toString()),i.append("autores",t.autores.toString()),i.append("responsable",t.responsable),i.append("simposio",t.simposio),i.append("nombre",t.nombre),this.httpClient.post(this.apiURL+"articulos/realizarEntrega/",i)}getPaper(){return this.httpClient.get(this.apiURL+"articulos/consultaArticuloXResponsable/")}getPaperById(t){return this.httpClient.get(this.apiURL+"articulos/consultaArticuloXId/?idArticulo="+t)}getPaperFile(t){return this.httpClient.get(this.apiURL+"articulos/consulta-archivo/?idArticulo="+t,{responseType:"arraybuffer"})}putPaper(t){const i=new FormData;return i.append("idArticulo",t.id),i.append("articulo",t.archivo),i.append("idCongreso",this.idCongress.toString()),i.append("autores",t.autores.toString()),i.append("responsable",t.responsable),i.append("simposio",t.simposio),i.append("nombre",t.nombre),this.httpClient.put(this.apiURL+"paper/editarEntrega/",i)}deletePaper(t){return this.httpClient.delete(this.apiURL+"articulos/deleteEntregaArticulo/?idArticulo="+t.id)}checkAutor(t){return this.httpClient.get(this.apiURL+"api/verificarUsuario/?email="+t)}sendEmail(t){return this.httpClient.post(this.apiURL+"/sendInvit",t)}getSimposiosActivos(){return this.httpClient.get(this.apiURL+"congresos/lista-simposiosxcongreso/?idCongreso="+this.idCongress)}getEvaluationDetails(t){return this.httpClient.get(this.apiURL+"articulos/consultaDetalleEvaluacion/?idArticulo="+t)}getItemsEv(){return this.httpClient.get(this.apiURL+"articulos/getItemsEvaluacion/")}getEvaluadoresXPaper(t){return this.httpClient.get(this.apiURL+"articulos/consultarEvaluadoresArticulo/?idArticulo="+t)}getPapersXSimposio(t,i){return this.httpClient.get(this.apiURL+"articulos/consultarArticulosXSimposio/?idSimposio="+t+"&idEstado="+i)}getPapersXChair(){return this.httpClient.get(this.apiURL+"articulos/consulta-articulosXChair/")}calificarPaper(t,i){return this.httpClient.put(this.apiURL+"articulos/calificarArticulo/",{idArticulo:t,calificacion:i})}}return t.\u0275fac=function(i){return new(i||t)(r.Qb(o.b),r.Qb(a.a))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},xFu8:function(t,i,e){"use strict";e.d(i,"a",function(){return n});var s=e("AytR"),r=e("fXoL"),o=e("tk/3"),a=e("7dP1");let n=(()=>{class t{constructor(t,i){this.httpClient=t,this.auth=i,this.apiURL=s.a.apiURL,this.idCongress=this.auth.getCongressId(),this.idUser=this.auth.getUserId()}postSymposium(t){return this.httpClient.post(this.apiURL+"congresos/crear-simposio/",{nombre:t.nombre,descripcion:t.descripcion})}getSymposium(){return this.httpClient.get(this.apiURL+"congresos/lista-simposios/")}putSymposium(t){return this.httpClient.put(this.apiURL+"congresos/editar-simposio/",{idSimposio:t.id,nombre:t.nombre,descripcion:t.descripcion})}deleteSymposium(t){return this.httpClient.request("delete",this.apiURL+"congresos/eliminar-simposio/",{body:{idSimposio:t.id}})}postSymposiumCongress(t){return this.httpClient.post(this.apiURL+"congresos/asignar-simposioxcongreso/",{idSimposio:t.id,idCongreso:this.idCongress,idChair:this.idUser})}deleteSymposiumCongress(t){return this.httpClient.request("delete",this.apiURL+"congresos/eliminar-simposioxcongreso/",{body:{Simposio:this.postSymposium}})}getSymposiumsChairs(){return this.httpClient.get(this.apiURL+"congresos/devolverChairsSimposios/")}getSymposiumByChair(t){return this.httpClient.get(this.apiURL+"congresos/simposio-por-chair/"+t.id)}getSymposiumCongress(){}}return t.\u0275fac=function(i){return new(i||t)(r.Qb(o.b),r.Qb(a.a))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},y6im:function(t,i,e){"use strict";e.d(i,"a",function(){return n});var s=e("AytR"),r=e("fXoL"),o=e("tk/3"),a=e("7dP1");let n=(()=>{class t{constructor(t,i){this.httpClient=t,this.auth=i,this.apiURL=s.a.apiURL,this.idUser=i.getUserId(),this.idCongress=i.getCongressId()}postEvaluator(t){return this.httpClient.post(this.apiURL+"articulos/asignarRolEvaluador/",t)}getEvaluators(t){return this.httpClient.get(this.apiURL+"articulos/lista-evaluadores/?activos="+t)}getEvaluatorsAll(){return this.httpClient.get(this.apiURL+"articulos/getEvaluadoresFueraSimposio/")}getEvaluatorsSimposio(){return this.httpClient.get(this.apiURL+"articulos/getEvaluadoresSimposio/")}getEvaluatorsGroup(){return this.httpClient.get(this.apiURL+"articulos/getPoolEvaluadores/")}postEvaluatorGroup(t){return this.httpClient.post(this.apiURL+"articulos/asignarPoolEvaluadores/",{evaluadores:[+t]})}deleteEvaluatorGroup(t){return this.httpClient.delete(this.apiURL+"articulos/eliminarEvaluadorPoolEvaluadores/?idEvaluador="+t)}getEvaluatorById(t){return this.httpClient.get(this.apiURL+"evaluador/consultarEvaluador/"+t)}putEvaluator(t){return this.httpClient.put(this.apiURL+"articulos/modificar/"+t.id,t)}deleteEvaluator(t){return this.httpClient.delete(this.apiURL+"evaluador/eliminar-evaluador/"+t.id)}calificarEvaluador(t){return this.httpClient.put(this.apiURL+"evaluador/calificarEvaluador/",t)}postEvaluatorMassive(t){const i=t.map(t=>({idEvaluadores:[t.idEval1,t.idEval2,t.idEval3],articulo:t.idArticulo,idCongreso:this.idCongress}));return console.log(i),this.httpClient.post(this.apiURL+"articulos/asignarArticuloEvaluadorMasivo/",i)}cancelarEvaluationPaper(t){return this.httpClient.delete(this.apiURL+"articulos/rechazar-evaluacion",t)}acceptEvaluationPaper(t){return this.httpClient.put(this.apiURL+"articulos/aceptar-evaluacion",t)}}return t.\u0275fac=function(i){return new(i||t)(r.Qb(o.b),r.Qb(a.a))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);