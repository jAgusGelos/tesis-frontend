(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Pd1B:function(t,e,a){"use strict";a.r(e),a.d(e,"GraphsModule",function(){return z});var i=a("ofXK"),s=a("tyNb"),n=a("fXoL"),r=a("OXGZ"),c=a("mrSG"),o=a("LRne"),h=a("EY2u"),l=a("XNiG"),d=a("D0XW"),u=a("HDdC"),p=a("7o/Q");a("zx2A");const g={leading:!0,trailing:!1};class b{constructor(t,e,a,i){this.duration=t,this.scheduler=e,this.leading=a,this.trailing=i}call(t,e){return e.subscribe(new v(t,this.duration,this.scheduler,this.leading,this.trailing))}}class v extends p.a{constructor(t,e,a,i,s){super(t),this.duration=e,this.scheduler=a,this.leading=i,this.trailing=s,this._hasTrailingValue=!1,this._trailingValue=null}_next(t){this.throttled?this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(m,this.duration,{subscriber:this})),this.leading?this.destination.next(t):this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const t=this.throttled;t&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),t.unsubscribe(),this.remove(t),this.throttled=null)}}function m(t){const{subscriber:e}=t;e.clearThrottle()}var y=a("eIep");class f{constructor(t){this.changes=t}static of(t){return new f(t)}notEmpty(t){if(this.changes[t]){const e=this.changes[t].currentValue;if(null!=e)return Object(o.a)(e)}return h.a}has(t){if(this.changes[t]){const e=this.changes[t].currentValue;return Object(o.a)(e)}return h.a}notFirst(t){if(this.changes[t]&&!this.changes[t].isFirstChange()){const e=this.changes[t].currentValue;return Object(o.a)(e)}return h.a}notFirstAndEmpty(t){if(this.changes[t]&&!this.changes[t].isFirstChange()){const e=this.changes[t].currentValue;if(null!=e)return Object(o.a)(e)}return h.a}}const O=new n.r("NGX_ECHARTS_CONFIG");let E=(()=>{class t{constructor(t,e,a){this.el=e,this.ngZone=a,this.autoResize=!0,this.loadingType="default",this.chartInit=new n.n,this.optionsError=new n.n,this.chartClick=this.createLazyEvent("click"),this.chartDblClick=this.createLazyEvent("dblclick"),this.chartMouseDown=this.createLazyEvent("mousedown"),this.chartMouseMove=this.createLazyEvent("mousemove"),this.chartMouseUp=this.createLazyEvent("mouseup"),this.chartMouseOver=this.createLazyEvent("mouseover"),this.chartMouseOut=this.createLazyEvent("mouseout"),this.chartGlobalOut=this.createLazyEvent("globalout"),this.chartContextMenu=this.createLazyEvent("contextmenu"),this.chartLegendSelectChanged=this.createLazyEvent("legendselectchanged"),this.chartLegendSelected=this.createLazyEvent("legendselected"),this.chartLegendUnselected=this.createLazyEvent("legendunselected"),this.chartLegendScroll=this.createLazyEvent("legendscroll"),this.chartDataZoom=this.createLazyEvent("datazoom"),this.chartDataRangeSelected=this.createLazyEvent("datarangeselected"),this.chartTimelineChanged=this.createLazyEvent("timelinechanged"),this.chartTimelinePlayChanged=this.createLazyEvent("timelineplaychanged"),this.chartRestore=this.createLazyEvent("restore"),this.chartDataViewChanged=this.createLazyEvent("dataviewchanged"),this.chartMagicTypeChanged=this.createLazyEvent("magictypechanged"),this.chartPieSelectChanged=this.createLazyEvent("pieselectchanged"),this.chartPieSelected=this.createLazyEvent("pieselected"),this.chartPieUnselected=this.createLazyEvent("pieunselected"),this.chartMapSelectChanged=this.createLazyEvent("mapselectchanged"),this.chartMapSelected=this.createLazyEvent("mapselected"),this.chartMapUnselected=this.createLazyEvent("mapunselected"),this.chartAxisAreaSelected=this.createLazyEvent("axisareaselected"),this.chartFocusNodeAdjacency=this.createLazyEvent("focusnodeadjacency"),this.chartUnfocusNodeAdjacency=this.createLazyEvent("unfocusnodeadjacency"),this.chartBrush=this.createLazyEvent("brush"),this.chartBrushEnd=this.createLazyEvent("brushend"),this.chartBrushSelected=this.createLazyEvent("brushselected"),this.chartRendered=this.createLazyEvent("rendered"),this.chartFinished=this.createLazyEvent("finished"),this.animationFrameID=null,this.resize$=new l.a,this.echarts=t.echarts}ngOnChanges(t){const e=f.of(t);e.notFirstAndEmpty("options").subscribe(t=>this.onOptionsChange(t)),e.notFirstAndEmpty("merge").subscribe(t=>this.setOption(t)),e.has("loading").subscribe(t=>this.toggleLoading(!!t)),e.notFirst("theme").subscribe(()=>this.refreshChart())}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe(function(t,e=d.a,a=g){return i=>i.lift(new b(t,e,a.leading,a.trailing))}(100,d.b,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(()=>{this.animationFrameID=window.requestAnimationFrame(()=>this.resize$.next())})),this.resizeOb.observe(this.el.nativeElement))}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(t){this.chart&&(t?this.chart.showLoading(this.loadingType,this.loadingOpts):this.chart.hideLoading())}setOption(t,e){if(this.chart)try{this.chart.setOption(t,e)}catch(a){console.error(a),this.optionsError.emit(a)}}refreshChart(){return Object(c.b)(this,void 0,void 0,function*(){this.dispose(),yield this.initChart()})}createChart(){const t=this.el.nativeElement;if(window&&window.getComputedStyle){const e=window.getComputedStyle(t,null).getPropertyValue("height");e&&"0px"!==e||t.style.height&&"0px"!==t.style.height||(t.style.height="400px")}return this.ngZone.runOutsideAngular(()=>("function"==typeof this.echarts?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:e})=>e(t,this.theme,this.initOpts)))}initChart(){return Object(c.b)(this,void 0,void 0,function*(){yield this.onOptionsChange(this.options),this.merge&&this.chart&&this.setOption(this.merge)})}onOptionsChange(t){return Object(c.b)(this,void 0,void 0,function*(){t&&(this.chart||(this.chart=yield this.createChart(),this.chartInit.emit(this.chart)),this.setOption(this.options,!0))})}createLazyEvent(t){return this.chartInit.pipe(Object(y.a)(e=>new u.a(a=>(e.on(t,t=>this.ngZone.run(()=>a.next(t))),()=>{this.chart&&(this.chart.isDisposed()||e.off(t))}))))}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(O),n.Mb(n.l),n.Mb(n.A))},t.\u0275dir=n.Hb({type:t,selectors:[["echarts"],["","echarts",""]],inputs:{autoResize:"autoResize",loadingType:"loadingType",options:"options",theme:"theme",loading:"loading",initOpts:"initOpts",merge:"merge",loadingOpts:"loadingOpts"},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartPieSelectChanged:"chartPieSelectChanged",chartPieSelected:"chartPieSelected",chartPieUnselected:"chartPieUnselected",chartMapSelectChanged:"chartMapSelectChanged",chartMapSelected:"chartMapSelected",chartMapUnselected:"chartMapUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartFocusNodeAdjacency:"chartFocusNodeAdjacency",chartUnfocusNodeAdjacency:"chartUnfocusNodeAdjacency",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],features:[n.yb]}),t})(),S=(()=>{class t{static forRoot(e){return{ngModule:t,providers:[{provide:O,useValue:e}]}}static forChild(){return{ngModule:t}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({imports:[[]]}),t})();const C=[{path:"",component:(()=>{class t{constructor(t){this.statsService=t,this.data=[],this.selectedOption=!1}ngOnInit(){}selectStats(t){switch(this.selectedOption=!1,t){case"topEval":this.statsService.getTopEval().subscribe(t=>{this.data=t.data});break;case"topSimpo":this.statsService.getTopSimposioXCongreso().subscribe(t=>{this.data=t.data});break;case"topSimpoCongre":this.statsService.getTopSimpoGeneral().subscribe(t=>{this.data=t.data});break;case"topSimpoXEval":this.statsService.getTopSimpoXEval().subscribe(t=>{this.data=t.data});break;case"gEtario":this.statsService.getEdadesXCongress().subscribe(t=>{this.data=[{name:"Menores 18",value:t.data[0]["menor-18"]},{name:"Entre 18-24",value:t.data[0]["entre-18-24"]},{name:"Entre 25-40",value:t.data[0]["entre-25-40"]},{name:"Mayores de 40",value:t.data[0]["mayor-40"]}]});break;case"participSede":this.statsService.getPartXSede().subscribe(t=>{this.data=t.data});break;case"califSimposios":this.statsService.getSimpoXCalif().subscribe(t=>{this.data=t.data});break;case"topEventos":this.statsService.getTopEventos().subscribe(t=>{this.data=t.data});break;case"cancelaciones":this.statsService.getEvalXCancelXCongreso().subscribe(t=>{this.data=t.data});break;case"cancelCongre":this.statsService.getEvalXCancel().subscribe(t=>{this.data=t.data});break;case"estadoArt":this.statsService.getEstadoArticulos().subscribe(t=>{this.data=[{name:"Aprobados",value:t.data.aprobados},{name:"Reentregados",value:t.data.reentrega},{name:"Rechazados",value:t.data.rechazados}]})}}selectGraph(t){const e=[],a=[];this.selectedOption=!0;for(let i=0;i<this.data.length;i++){const t=this.data[i];e.push(t.value),a.push(t.name.substring(0,26))}switch(console.log(a),t){case"bar":this.chartOption={tooltip:{show:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",data:a},yAxis:{type:"value"},series:[{data:e,type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"},label:{show:!0,color:"white",fontSize:12}}]};break;case"pie":this.chartOption={tooltip:{show:!0},toolbox:{feature:{saveAsImage:{}}},legend:{show:!0},series:{type:"pie",radius:"75%",center:["50%","50%"],data:this.data,label:{position:"outer",alignTo:"labelLine",bleedMargin:5},left:"33.3333%",right:"33.3333%",top:0,bottom:0}}}}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(r.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-graphs"]],decls:50,vars:2,consts:[[1,"container-fluid"],[1,"contenidos"],[1,"row","justify-content-center"],[1,"text-center","col-md-3"],[1,"form-group","col-sm-6"],[1,"form-control",3,"change"],["value","-1","hidden","","selected",""],["value","topEval"],["value","topSimpo"],["value","topSimpoCongre"],["value","topSimpoXEval"],["value","gEtario"],["value","participSede"],["value","califSimposios"],["value","topEventos"],["value","cancelaciones"],["value","cancelCongre"],["value","estadoArt"],[1,"row","justify-content-center","pt-2"],["value","-1","hidden","",3,"selected"],["value","pie"],["value","bar"],[1,"row","justify-content-between","pt-3"],["echarts","",1,"demo-chart",3,"options"]],template:function(t,e){1&t&&(n.Rb(0,"div",0),n.Rb(1,"div",1),n.Nb(2,"hr"),n.Rb(3,"div",2),n.Rb(4,"h3",3),n.Jc(5,"Estad\xedsticas"),n.Qb(),n.Qb(),n.Nb(6,"hr"),n.Qb(),n.Nb(7,"br"),n.Rb(8,"div",2),n.Rb(9,"div",4),n.Rb(10,"label"),n.Jc(11,"Seleccione el gr\xe1fico a visualizar"),n.Qb(),n.Rb(12,"select",5),n.bc("change",function(t){return e.selectStats(t.target.value)}),n.Rb(13,"option",6),n.Jc(14,"--Seleccione una fuente de datos--"),n.Qb(),n.Rb(15,"option",7),n.Jc(16,"Top Evaluadores"),n.Qb(),n.Rb(17,"option",8),n.Jc(18,"Top simposios por Congreso"),n.Qb(),n.Rb(19,"option",9),n.Jc(20,"Top simposios General"),n.Qb(),n.Rb(21,"option",10),n.Jc(22,"Top simposios por Evaluadores"),n.Qb(),n.Rb(23,"option",11),n.Jc(24,"Grupo Etario por congreso"),n.Qb(),n.Rb(25,"option",12),n.Jc(26,"Participantes por sede"),n.Qb(),n.Rb(27,"option",13),n.Jc(28,"Calificaciones por Simposios"),n.Qb(),n.Rb(29,"option",14),n.Jc(30,"Top Eventos"),n.Qb(),n.Rb(31,"option",15),n.Jc(32,"Cancelaciones por evaluador general"),n.Qb(),n.Rb(33,"option",16),n.Jc(34,"Cancelaciones por evaluador por congreso"),n.Qb(),n.Rb(35,"option",17),n.Jc(36,"Estado art\xedculos"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(37,"div",18),n.Rb(38,"div",4),n.Rb(39,"label"),n.Jc(40,"Seleccione el tipo de gr\xe1fico"),n.Qb(),n.Rb(41,"select",5),n.bc("change",function(t){return e.selectGraph(t.target.value)}),n.Rb(42,"option",19),n.Jc(43,"--Seleccione un Gr\xe1fico--"),n.Qb(),n.Rb(44,"option",20),n.Jc(45,"Torta"),n.Qb(),n.Rb(46,"option",21),n.Jc(47,"Barras"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(48,"div",22),n.Nb(49,"div",23),n.Qb(),n.Qb()),2&t&&(n.Ab(42),n.lc("selected",!e.selectedOption),n.Ab(7),n.lc("options",e.chartOption))},directives:[E],styles:[".demo-chart[_ngcontent-%COMP%]{height:400px}.container-fluid[_ngcontent-%COMP%]{background-color:#f4f4f4}.contenidos[_ngcontent-%COMP%]{padding-bottom:3rem}.greyned[_ngcontent-%COMP%]{color:grey}.btn-primary[_ngcontent-%COMP%]{background-color:#3cafe0;border:none}hr[_ngcontent-%COMP%]{border:1px solid #00609c}@media (min-width:768px){hr[_ngcontent-%COMP%]{margin-left:25%;margin-right:25%}.container-fluid[_ngcontent-%COMP%]{padding:5rem}}"]}),t})()}];let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({imports:[[s.d.forChild(C)],s.d]}),t})(),z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({imports:[[i.c,w,S.forRoot({echarts:()=>a.e(54).then(a.bind(null,"MT78"))})]]}),t})()},mrSG:function(t,e,a){"use strict";a.d(e,"c",function(){return s}),a.d(e,"a",function(){return n}),a.d(e,"d",function(){return r}),a.d(e,"b",function(){return c}),a.d(e,"e",function(){return o});var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])})(t,e)};function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function a(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}var n=function(){return(n=Object.assign||function(t){for(var e,a=1,i=arguments.length;a<i;a++)for(var s in e=arguments[a])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)};function r(t,e){var a={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(a[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(a[i[s]]=t[i[s]])}return a}function c(t,e,a,i){return new(a||(a=Promise))(function(s,n){function r(t){try{o(i.next(t))}catch(e){n(e)}}function c(t){try{o(i.throw(t))}catch(e){n(e)}}function o(t){var e;t.done?s(t.value):(e=t.value,e instanceof a?e:new a(function(t){t(e)})).then(r,c)}o((i=i.apply(t,e||[])).next())})}function o(t,e,a){if(a||2===arguments.length)for(var i,s=0,n=e.length;s<n;s++)!i&&s in e||(i||(i=Array.prototype.slice.call(e,0,s)),i[s]=e[s]);return t.concat(i||e)}}}]);