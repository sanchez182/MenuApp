(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,a,t){},116:function(e,a,t){var n={"./about.jpg":72,"./agency_bg.jpg":117,"./imgPrincipal.jpg":118,"./platillo1.jpg":119,"./sangria.jpg":120};function c(e){var a=i(e);return t(a)}function i(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=i,e.exports=c,c.id=116},117:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/agency_bg.516c7f9b.jpg"},118:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/imgPrincipal.852760e2.jpg"},119:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/platillo1.bfda117d.jpg"},120:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/sangria.df8d98d8.jpg"},124:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(13),r=t.n(i),s=t(46),o=t(12),l=(t(109),t(16)),j=t(38),d="SET_LANGUAGE",b=t(56),u=t(80),p=t(81),O=function(e,a){var t={};return"EN"===a?t=u:"ES"===a&&(t=p),t[e]},x=t(2),m=function(e){e.fixed,e.transparent;var a=Object(l.c)((function(e){return e.lang})).language,t=Object(l.b)(),c=Object(n.useState)(!1),i=Object(j.a)(c,2),r=i[0],s=i[1],o=Object(n.useRef)(null),u=Object(n.useCallback)((function(e){r&&e.target.closest(".dropdown")!==o.current&&s(!1)}),[r,s,o]);Object(n.useEffect)((function(){return document.addEventListener("click",u),function(){document.removeEventListener("click",u)}}),[u]);var p=function(e){var a;s(!1),t((a=e,localStorage.setItem("language",a),{type:d,payload:a}))};return Object(x.jsx)("header",{className:"header header--fixed",id:"myHeader",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)(b.a,{variant:"h4",component:"h4",align:"center",children:[O("textSelectTable",a),"  "]}),Object(x.jsx)("div",{className:"header__nav",children:Object(x.jsxs)("div",{className:"header__nav_lang",children:[Object(x.jsx)("p",{className:"selected",onClick:function(){return s(!0)},children:a}),r&&Object(x.jsxs)("ul",{className:"dropdown",ref:o,children:[Object(x.jsx)("li",{onClick:function(){return p("EN")},children:"EN"}),Object(x.jsx)("li",{onClick:function(){return p("ES")},children:"ES"})]})]})})]})})},h=t(72),g=function(){var e=Object(l.c)((function(e){return e.lang})).language;return Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)(m,{}),Object(x.jsx)("section",{className:"about",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{children:O("about",e)}),Object(x.jsx)("img",{src:h.default,alt:""}),Object(x.jsx)("p",{children:O("aboutUsText",e)})]})})]})},f=function(){var e=Object(l.c)((function(e){return e.lang})).language;return Object(x.jsx)("div",{className:"page-404",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{children:"404"}),Object(x.jsx)("p",{children:O("pageDoesNotExist",e)}),Object(x.jsx)("p",{children:Object(x.jsx)(s.b,{to:"/",children:O("returnToHomepage",e)})})]})})},v=t(170),y=t(171),T=t(172),N=t(173),S=t(75),k=t.n(S),A=t(83),C=t.n(A),D=Object(o.f)((function(e){var a=e.numberTable,t=e.isAvailable;return Object(x.jsx)(v.a,{item:!0,xs:4,md:4,children:Object(x.jsx)(s.b,{to:"/menu",children:Object(x.jsx)(y.a,{style:{backgroundColor:" #f1f1f196"},children:Object(x.jsx)(T.a,{children:Object(x.jsxs)(N.a,{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[Object(x.jsx)(C.a,{fontSize:"large",color:t}),Object(x.jsxs)("p",{style:{marginLeft:"16px",marginTop:"8px"},children:[" #",a]})]})})})})})})),E=function(){var e=Object(l.c)((function(e){return e.lang})).language;return Object(x.jsxs)(v.a,{container:!0,children:[Object(x.jsx)(v.a,{item:!0,xs:12,md:12,children:Object(x.jsx)(m,{fixed:!0,transparent:!0})}),Object(x.jsxs)(v.a,{container:!0,style:{marginTop:"158px"},children:[Object(x.jsx)(v.a,{item:!0,xs:6,md:6,children:Object(x.jsx)(y.a,{style:{backgroundColor:"rgb(128 63 63 / 47%)"},children:Object(x.jsx)(T.a,{children:Object(x.jsx)(N.a,{children:Object(x.jsxs)(b.a,{variant:"body2",color:"textSecondary",component:"p",align:"center",children:[Object(x.jsx)(k.a,{color:"error"}),Object(x.jsx)("p",{children:O("busy",e)})]})})})})}),Object(x.jsx)(v.a,{item:!0,xs:6,md:6,children:Object(x.jsx)(y.a,{style:{backgroundColor:"rgb(128 63 63 / 47%)"},children:Object(x.jsx)(T.a,{children:Object(x.jsx)(N.a,{children:Object(x.jsxs)(b.a,{variant:"body2",color:"textSecondary",component:"p",align:"center",children:[Object(x.jsx)(k.a,{color:"primary"}),Object(x.jsx)("p",{children:O("available",e)}),"  "]})})})})})]}),Object(x.jsxs)(v.a,{container:!0,children:[Object(x.jsx)(D,{numberTable:1,isAvailable:"error"}),Object(x.jsx)(D,{numberTable:2,isAvailable:"primary"}),Object(x.jsx)(D,{numberTable:3,isAvailable:"primary"}),Object(x.jsx)(D,{numberTable:4,isAvailable:"primary"}),Object(x.jsx)(D,{numberTable:5,isAvailable:"error"}),Object(x.jsx)(D,{numberTable:6,isAvailable:"primary"}),Object(x.jsx)(D,{numberTable:7,isAvailable:"primary"}),Object(x.jsx)(D,{numberTable:8,isAvailable:"error"}),Object(x.jsx)(D,{numberTable:9,isAvailable:"primary"}),Object(x.jsx)(D,{numberTable:10,isAvailable:"error"}),Object(x.jsx)(D,{numberTable:11,isAvailable:"primary"}),Object(x.jsx)(D,{numberTable:12,isAvailable:"error"}),Object(x.jsx)(D,{numberTable:12,isAvailable:"error"}),Object(x.jsx)(D,{numberTable:12,isAvailable:"error"}),Object(x.jsx)(D,{numberTable:12,isAvailable:"error"}),Object(x.jsx)(D,{numberTable:12,isAvailable:"error"}),Object(x.jsx)(D,{numberTable:12,isAvailable:"error"}),Object(x.jsx)(D,{numberTable:12,isAvailable:"error"}),Object(x.jsx)(D,{numberTable:12,isAvailable:"error"}),Object(x.jsx)(D,{numberTable:12,isAvailable:"error"})]})]})},I=t(19),w=t(66),M=t(174),L=t(186),R=t(190),_=t(187),B=t(188),P=t(92),U=t.n(P),z=t(94),H=t.n(z),F=t(93),J=t.n(F),G=t(192),W=t(191),Q=t(179),q=t(180),K=t(87),V=t.n(K),X=t(175),Y=t(176),Z=t(177),$=t(67),ee=t(85),ae=t.n(ee),te=t(86),ne=t.n(te),ce=t(129),ie=t(126),re=Object(M.a)((function(e){return Object(G.a)({media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:$.a[500]}})})),se=function(e){var a=e.addItem,n=e.cant,c=e.description,i=e.itemName,r=e.image,s=re();return Object(x.jsxs)(y.a,{children:[Object(x.jsx)(X.a,{title:i}),Object(x.jsx)(Y.a,{className:s.media,image:t(116)("./".concat(r)).default,title:"Paella dish"}),Object(x.jsx)(N.a,{children:Object(x.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:c})}),Object(x.jsxs)(Z.a,{disableSpacing:!0,style:{justifyContent:"flex-end"},children:[Object(x.jsxs)("strong",{style:{marginRight:"8px"},children:[" ",n]}),Object(x.jsx)(ce.a,{title:"Agregar plato","aria-label":"Add",children:Object(x.jsx)(ie.a,{size:"small",color:"primary",onClick:function(){return a(1)},"aria-label":"add",children:Object(x.jsx)(ae.a,{})})}),Object(x.jsx)(ce.a,{title:"Quitar plato","aria-label":"remove",children:Object(x.jsx)(ie.a,{size:"small",color:"secondary",style:{marginLeft:"6px"},onClick:function(){return a(-1)},"aria-label":"add",children:Object(x.jsx)(ne.a,{})})})]})]})},oe="SET_MENUITEM",le=Object(M.a)((function(e){return Object(G.a)({root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}})})),je=function(e){var a=e.item,t=e.itemType,n=e.itemName,c=le(),i=Object(l.b)(),r=Object(l.c)((function(e){return e.menuItemReducer})).items,s=a.cant>0?{backgroundColor:"lightgreen",marginTop:"4px"}:{marginTop:"4px"};return Object(x.jsx)("div",{className:c.root,children:Object(x.jsxs)(W.a,{style:s,children:[Object(x.jsx)(Q.a,{expandIcon:Object(x.jsx)(V.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(x.jsxs)(v.a,{container:!0,children:[Object(x.jsxs)(v.a,{item:!0,xs:9,children:[Object(x.jsxs)(b.a,{className:c.heading,children:[a[n]," ",Object(x.jsx)("br",{})]}),Object(x.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:a.shortDescription})]}),a.cant>0&&Object(x.jsx)(v.a,{item:!0,xs:3,children:Object(x.jsxs)("p",{children:["Cant: ",a.cant]})})]})}),Object(x.jsx)(q.a,{style:{display:"block"},children:Object(x.jsx)(se,{addItem:function(e){var n=e+a.cant,c=r[t].findIndex((function(e){return e.id==a.id}));r[t][c].cant=n,n>=0&&i(function(e){return{type:oe,payload:e}}(r))},cant:a.cant,image:a.image,itemName:a[n],description:a.description})})]})})},de=t(193),be=t(194),ue=t(185),pe=t(90),Oe=t.n(pe),xe=t(89),me=t.n(xe),he=t(91),ge=t.n(he),fe=t(5),ve=t(184),ye=t(189),Te=t(181),Ne=t(182),Se=t(183),ke=t(127),Ae=t(88),Ce=t.n(Ae),De=Object(fe.a)((function(e){return Object(G.a)({root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})}))((function(e){var a=e.children,t=e.classes,n=e.onClose,c=Object(w.a)(e,["children","classes","onClose"]);return Object(x.jsxs)(Te.a,Object(I.a)(Object(I.a)({disableTypography:!0,className:t.root},c),{},{children:[Object(x.jsx)(b.a,{variant:"h6",children:a}),n?Object(x.jsx)(ke.a,{"aria-label":"close",className:t.closeButton,onClick:n,children:Object(x.jsx)(Ce.a,{})}):null]}))})),Ee=Object(fe.a)((function(e){return{root:{padding:e.spacing(2)}}}))(Ne.a),Ie=Object(fe.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(Se.a),we=function(e){var a=e.open,t=e.setOpenMenu,n=Object(l.c)((function(e){return e.menuItemReducer})).items,c=n.food.filter((function(e){return e.cant>0})),i=n.drink.filter((function(e){return e.cant>0}));return Object(x.jsxs)(ye.a,{onClose:t,"aria-labelledby":"customized-dialog-title",open:a,children:[Object(x.jsx)(De,{id:"customized-dialog-title",onClose:t,children:"Listado de productos seleccionados"}),Object(x.jsxs)(Ee,{dividers:!0,children:[Object(x.jsx)("h4",{children:"Platillos"}),c.length>0?c.map((function(e){return Object(x.jsxs)(y.a,{children:[Object(x.jsx)(X.a,{title:"".concat(e.plateName,"   Cant.").concat(e.cant)}),Object(x.jsx)(N.a,{children:Object(x.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:e.description})})]})})):Object(x.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:"A\xfan no has seleccionado ning\xfan platillo para pedir."}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("h4",{children:"Bebidas"}),i.length>0?i.map((function(e){return Object(x.jsxs)(y.a,{children:[Object(x.jsx)(X.a,{title:"".concat(e.drinkName,"   Cant.").concat(e.cant)}),Object(x.jsx)(N.a,{children:Object(x.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:e.description})})]})})):Object(x.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:"A\xfan no has seleccionado ninguna bebida para pedir."})]}),Object(x.jsxs)(Ie,{children:[Object(x.jsx)(ve.a,{autoFocus:!0,onClick:t,color:"primary",children:"Pedir comida"}),Object(x.jsx)(ve.a,{autoFocus:!0,onClick:t,color:"primary",children:"Salir"})]})]})},Me=Object(M.a)((function(e){return Object(G.a)({speedDial:{position:"fixed","&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{bottom:e.spacing(2),right:e.spacing(2)},"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{top:e.spacing(2),left:e.spacing(2)}},staticTooltipLabel:{width:150}})})),Le=[{icon:Object(x.jsx)(me.a,{}),name:"hand",id:"hand",action:"Mesero"},{icon:Object(x.jsx)(Oe.a,{}),name:"Save",id:"Save",action:"Pedir comida"},{icon:Object(x.jsx)(ge.a,{}),name:"foodSeleted",id:"foodSeleted",action:"Items elegidos"}];function Re(){var e=Me(),a=c.a.useState(!1),t=Object(j.a)(a,2),n=t[0],i=t[1],r=c.a.useState(!1),s=Object(j.a)(r,2),o=s[0],l=s[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(de.a,{ariaLabel:"SpeedDial example",className:e.speedDial,icon:Object(x.jsx)(be.a,{}),onClose:function(){i(!1)},onOpen:function(){i(!0)},open:n,direction:"up",children:Le.map((function(a){return Object(x.jsx)(ue.a,{classes:e,icon:a.icon,id:a.id,tooltipTitle:a.action,tooltipOpen:!0,onClick:function(){return function(e){"foodSeleted"===e.name&&l(!0),i(!1)}(a)}},a.name)}))}),o&&Object(x.jsx)(we,{setOpenMenu:function(){l(!o)},open:o})]})}function _e(e){var a=e.children,t=e.value,n=e.index,c=Object(w.a)(e,["children","value","index"]);return Object(x.jsx)("div",Object(I.a)(Object(I.a)({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},c),{},{children:t===n&&Object(x.jsx)(B.a,{p:3,children:Object(x.jsx)(b.a,{children:a})})}))}function Be(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Pe=Object(M.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function Ue(){var e=Pe(),a=Object(l.c)((function(e){return e.menuItemReducer})).items,t=c.a.useState(0),n=Object(j.a)(t,2),i=n[0],r=n[1];return Object(x.jsxs)("div",{className:e.root,children:[Object(x.jsx)(L.a,{position:"static",children:Object(x.jsxs)(R.a,{centered:!0,value:i,onChange:function(e,a){r(a)},"aria-label":"simple tabs example",children:[Object(x.jsx)(_.a,Object(I.a)({label:"Platillos",icon:Object(x.jsx)(U.a,{})},Be(0))),Object(x.jsx)(_.a,Object(I.a)({label:"Bebidas",icon:Object(x.jsx)(J.a,{})},Be(1))),Object(x.jsx)(_.a,Object(I.a)({label:"Ofertas/Combos",icon:Object(x.jsx)(H.a,{})},Be(2)))]})}),Object(x.jsx)(_e,{value:i,index:0,children:a.food.map((function(e){return Object(x.jsx)(je,{item:e,itemType:"food",itemName:e.plateName})}))}),Object(x.jsx)(_e,{value:i,index:1,children:a.drink.map((function(e){return Object(x.jsx)(je,{item:e,itemType:"drink",itemName:e.drinkName})}))}),Object(x.jsx)(_e,{value:i,index:2,children:"Item Three"}),Object(x.jsx)(Re,{})]})}var ze=function(){return Object(x.jsx)(s.a,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/MenuApp",exact:!0,children:Object(x.jsx)(E,{})}),Object(x.jsx)(o.a,{path:"/about",exact:!0,children:Object(x.jsx)(g,{})}),Object(x.jsx)(o.a,{path:"/menu",exact:!0,children:Object(x.jsx)(Ue,{})}),Object(x.jsx)(o.a,{path:"*",children:Object(x.jsx)(f,{})})]})})},He=t(76),Fe=localStorage.getItem("language"),Je={language:Fe||"EN"},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d:return Object(I.a)(Object(I.a)({},e),{},{language:a.payload});default:return e}},We={items:{food:[{plateName:"primerPlato",description:"descripcion larga jajsd asd asda sda sdasd",shortDescription:"descripcion corta",image:"platillo1.jpg",cant:0,id:1},{plateName:"segundo plato",description:"descripcion larga jajsd asd asda sda sdasd",shortDescription:"descripcion corta",image:"platillo1.jpg",cant:0,id:2},{plateName:"Tercer plato",description:"descripcion larga jajsd asd asda sda sdasd",shortDescription:"descripcion corta",image:"platillo1.jpg",cant:0,id:3},{plateName:"Tercer plato",description:"descripcion larga jajsd asd asda sda sdasd",shortDescription:"descripcion corta",image:"platillo1.jpg",cant:0,id:4}],drink:[{drinkName:"Bebida 1",description:"Descripcion larga de bebida 1 safasdasdasdasdas",shortDescription:"Descripcion corta de bebida 1",image:"sangria.jpg",cant:0,id:1},{drinkName:"Bebida 2",description:"Descripcion larga de bebida 2 safasdasdasdasdas",shortDescription:"Descripcion corta de bebida 2",image:"sangria.jpg",cant:0,id:2}]}},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case oe:return Object(I.a)(Object(I.a)({},e),{},{item:a.payload});default:return e}},qe=Object(He.a)({lang:Ge,menuItemReducer:Qe}),Ke=Object(He.b)(qe);r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(l.a,{store:Ke,children:Object(x.jsx)(ze,{})})}),document.getElementById("root"))},72:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/about.b42a20a2.jpg"},80:function(e){e.exports=JSON.parse('{"home":"Home","about":"About Us","available":"Available","busy":"Busy","textSelectTable":"Select your table","returnToHomepage":"Return to homepage"}')},81:function(e){e.exports=JSON.parse('{"home":"Home","about":"About Us","available":"Disponible","busy":"Ocupada","textSelectTable":"Seleccione su mesa","returnToHomepage":"Return to homepage"}')}},[[124,1,2]]]);
//# sourceMappingURL=main.fb7ca201.chunk.js.map