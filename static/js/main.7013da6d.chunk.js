(this["webpackJsonpreact-ml-app"]=this["webpackJsonpreact-ml-app"]||[]).push([[0],{14:function(e,a,n){"use strict";(function(e){n.d(a,"b",(function(){return h})),n.d(a,"c",(function(){return f})),n.d(a,"e",(function(){return g})),n.d(a,"d",(function(){return v})),n.d(a,"f",(function(){return y})),n.d(a,"a",(function(){return O}));var t=n(9),r=n.n(t),i=n(23),o=n(51),c=n.n(o),l=n(40),p=n(45),s=n.n(p),u=n(10),m=n.n(u),_=n(52),d=n.n(_),h=function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},f=function(e){var a=e.split("_").map((function(e){return e.charAt(0)+e.slice(1)})).join("_");return"".concat("/ChiliClassifier","/images/").concat(a,".jpg")},g=function(){return new l.InferenceSession({backendHint:"webgl"})};function P(e){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(r.a.mark((function e(a){var n,t,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=(n=[1,3,224,224]).reduce((function(e,a){return e*a})),i=new l.Tensor(new Float32Array(t),"float32",n),o=0;o<t;o++)i.data[o]=2*Math.random()-1;return e.next=6,a.run([i]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.loadModel(d.a);case 2:return e.next=4,P(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(i.a)(r.a.mark((function e(a,n,t){var i,o,c,p,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.width,o=n.height,c=j(n),p=new l.Tensor(c,"float32",[1,3,i,o]),e.next=5,a.run([p]);case 5:s=e.sent,t(s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,a,n){setTimeout((function(){return function(e,a,n){return E.apply(this,arguments)}(e,a,n)}),10)}var j=function(e){var a=e.data,n=e.width,t=e.height,r=s()(new Float32Array(a),[n,t,4]),i=s()(new Float32Array(n*t*3),[1,3,n,t]);return m.a.assign(i.pick(0,0,null,null),r.pick(null,null,0)),m.a.assign(i.pick(0,1,null,null),r.pick(null,null,1)),m.a.assign(i.pick(0,2,null,null),r.pick(null,null,2)),m.a.divseq(i,255),m.a.subseq(i.pick(0,0,null,null),.485),m.a.subseq(i.pick(0,1,null,null),.456),m.a.subseq(i.pick(0,2,null,null),.406),m.a.divseq(i.pick(0,0,null,null),.229),m.a.divseq(i.pick(0,1,null,null),.224),m.a.divseq(i.pick(0,2,null,null),.225),i.data},k=function(a){return new Promise((function(n,t){e.setTimeout((function(){return n()}),a)}))},x={maxWidth:224,maxHeight:224,cover:!0,crop:!0,canvas:!0,crossOrigin:"Anonymous",orientation:!0},C=function(e){return new Promise((function(a,n){c()(e,(function(e){return a(e)}),x)}))},O=function(){var e=Object(i.a)(r.a.mark((function e(a,n,t){var i,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&n.current){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,C(a);case 4:if("error"!==(i=e.sent).type){e.next=7;break}throw new Error("could not load image");case 7:return(o=n.current.getContext("2d")).drawImage(i,0,0),e.next=11,k(1);case 11:c=o.getImageData(0,0,n.current.width,n.current.height),t(c);case 13:case"end":return e.stop()}}),e)})));return function(a,n,t){return e.apply(this,arguments)}}()}).call(this,n(74))},52:function(e,a,n){e.exports=n.p+"static/media/chili-resnet18.b9c461d0.onnx"},64:function(e,a,n){e.exports=n(86)},86:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(11),o=n.n(i),c=n(9),l=n.n(c),p=n(23),s=n(21),u=["7_Pot_Barrackpore","7_Pot_Brain_Strain","7_Pot_Bubblegum","7_Pot_Douglah","7_Pot_Jonah","7_Pot_Primo","Aji_Amarillo","Aji_Charapita","Aji_Chombo","Aji_Colorado","Aji_Dulce","Aji_Omnicolor","Aji_Panca","Aji_Pineapple","Aleppo_Pepper","Anaheim_Pepper","Ancho_Pepper","Apache_Pepper","Aurora_Pepper","Banana_Pepper","Beaver_Dam_Pepper","Bell_Pepper","Bhut_Jolokia_Chocolate","Bishops_Crown_Pepper","Black_Cobra_Pepper","Black_Cuban_Pepper","Black_Hungarian_Pepper","Black_Pearl_Pepper","Black_Prince_Pepper","Bode_Pepper","Bolivian_Rainbow_Pepper","Bulgarian_Carrot_Pepper","Byadgi_Chili","Cajun_Belle_Pepper","Calico_pepper","California_Wonder_Pepper","Caribbean_Red_Habanero","Carmen_Pepper","Carolina_Reaper","Cascabel_Pepper","Cayenne_Pepper","Charleston_Hot_Pepper","Cheiro_Roxa","Cherry_Bomb_Pepper","Chilaca_Pepper","Chile_De_Arbol","Chilly_Chili","Chiltepin_Pepper","Chimayo_Pepper","Chipotle_Pepper","Chocolate_Habanero","Count_Dracula_Pepper","Cowhorn_Pepper","Cubanelle_Pepper","Datil_Pepper","Devils_Tongue_Pepper","Dorset_Naga","Dragons_Breath_Pepper","Dundicut_Pepper","Espelette_Pepper","Explosive_Ember_Pepper","Fatalii_Pepper","Filius_Blue_Pepper","Fish_Pepper","Fresno_Pepper","Ghost_Pepper","Goat_Pepper","Guajillo_Pepper","Guindilla_Pepper","Gypsy_Pepper","Habanero_Pepper","Hatch_Pepper","Hinkelhatz_Pepper","Holy_Mole_Pepper","Hot_Paper_Lantern","Hungarian_Wax_Pepper","Inca_Red_Drop_Pepper","Infinity_Pepper","Italian_Long_Hot_Pepper","Jalafuego_Pepper","Jalape\ufffdo_Pepper","Japones_Pepper","Jwala_Pepper","Kashmiri_Chili","Komodo_Dragon_Pepper","Lemon_Drop_Pepper","Little_Elf_Pepper","Madame_Jeanette_Pepper","Malagueta_Pepper","Manzano_Pepper","Mariachi_Pepper","Medusa_Pepper","Melrose_Pepper","Mexibell_pepper","Mulato_Pepper","Naga_Morich","Naga_Viper","NuMex_Big_Jim","NuMex_Centennial","NuMex_Twilight","Padron_Pepper","Pasilla_Pepper","Peperone_di_Senise","Peppadew_Pepper","Pepper_X","Pepperoncini","Pequin_Pepper","Peruvian_White_Habanero","Peter_Pepper","Pimento_Pepper","Piquillo_Pepper","Poblano_Pepper","Prairie_Fire_Pepper","Pretty_in_Purple_pepper","Purple_Beauty_Pepper","Purple_Jalape\ufffdo_Pepper","Red_Savina_Habanero","Roatan_Pumpkin_Habanero","Rocotillo_Pepper","Rocoto_Pepper","Rooster_Spur_Pepper","Royal_Black_Pepper","Sandia_Pepper","Sangria_Pepper","Santa_Fe_Grande_Pepper","Satans_Kiss_Pepper","Scotch_Bonnet_Pepper","Serrano_Pepper","Shishito_Pepper","Siling_Labuyo","Sport_Pepper","Super_Chili_Pepper","Tabasco_Pepper","Tangerine_Dream_Pepper","Thai_Pepper","Tien_Tsin_Pepper","Trinidad_7_Pot_Pepper","Trinidad_Moruga_Scorpion","Trinidad_Perfume","Trinidad_Scorpion_Butch-T","Trinidad_Scorpion_Chocolate","Wiri_Wiri_Pepper"],m=n(125),_=n(121),d=n(27),h=n(122),f=n(123),g=n(124),P=n(126),b=n(127),v=n(120),w=Object(v.a)({card:{width:299,height:299},item:{paddingTop:10}});function E(e){var a=e.items,n=w();return r.a.createElement(_.a,{className:n.card},r.a.createElement(h.a,{dense:!0},a.map((function(e){var a=e.avatar,t=e.name,i=e.percentage,o="".concat(t,"-").concat(i);return r.a.createElement(f.a,{key:o,className:n.item},r.a.createElement(g.a,null,r.a.createElement(m.a,{alt:"image of ".concat(t),src:a})),r.a.createElement(P.a,{id:o,primary:t}),r.a.createElement(b.a,null,r.a.createElement(d.a,null,i,"%")))}))))}var y=n(14),j=function(e,a){var n=Array.from(e).map((function(e,a){return[e,a]})).sort((function(e,a){return e[0]<a[0]?-1:e[0]>a[0]?1:0})).reverse().slice(0,a),t=e.map((function(e){return Math.exp(e)})).reduce((function(e,a){return e+a}));return n.map((function(e,a,n){var r=Object(s.a)(e,2),i=r[0],o=r[1];return{breed:u[o],act:i,prob:Math.exp(i)/t}}))};function k(e){var a=e.output;if(!a)return null;var n=j(a,5).map((function(e){var a=e.breed,n=e.prob;return{name:Object(y.b)(a),percentage:(100*n).toFixed(2),avatar:Object(y.c)(a)}}));return r.a.createElement(E,{items:n})}var x=n(130),C=n(3),O=n(53),N=n.n(O),A=n(129),B=n(137),S=n(128),T=Object(v.a)((function(e){return{box:{width:299,padding:0,margin:0},content:{boxSizing:"border-box"},info:{backgroundColor:e.palette.primary.main},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));function R(e){var a=e.message,n=T();return r.a.createElement(B.a,{className:n.box},r.a.createElement(S.a,{className:Object(C.a)(n.info,n.content),message:r.a.createElement("span",{className:n.message},r.a.createElement(N.a,{className:Object(C.a)(n.icon,n.iconVariant)}),a)}))}function D(e){var a=e.message,n=T();return r.a.createElement(B.a,{className:n.box},r.a.createElement(S.a,{className:n.content,message:r.a.createElement("span",{className:n.message},r.a.createElement(A.a,{size:20,className:n.iconVariant}),a)}))}var I=n(55),M=n.n(I),W=n(54),H=n.n(W),L=Object(v.a)({icon:{width:"50%",height:"50%",color:"grey"}}),F=function(e){var a=e.fileLoaded,n=e.isDragActive,t=L();return a?null:n?r.a.createElement(H.a,{className:t.icon}):r.a.createElement(M.a,{className:t.icon})},J=n(57),q=Object(v.a)({card:{width:224,height:224,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:10},canvas:{width:224,height:224,zIndex:0,position:"absolute"},input:{zIndex:9999,position:"absolute"}});function z(e){var a=e.setFile,n=e.canvasRef,i=e.fileLoaded,o=q(),c=Object(t.useCallback)((function(e){if(e.length>1)return console.log("can only handle one file at a time");if(0!==e.length){var n=e[0];if(!n.type.startsWith("image"))return console.log("file must be an image");a(n)}}),[a]),l=Object(J.a)({onDrop:c}),p=l.getRootProps,s=l.getInputProps,u=l.isDragActive;return r.a.createElement(_.a,Object.assign({},p(),{className:o.card}),r.a.createElement("canvas",{className:o.canvas,ref:n,width:224,height:224}),r.a.createElement("input",Object.assign({alt:"Image Dropzone",type:"image",className:o.input},s())),r.a.createElement(F,{fileLoaded:i,isDragActive:u}))}var G=n(131),U=Object(y.e)(),V=Object(v.a)((function(e){return{root:{flexGrow:1}}}));function K(){var e=Object(t.useState)(!1),a=Object(s.a)(e,2),n=a[0],i=a[1],o=Object(t.useState)(!1),c=Object(s.a)(o,2),u=c[0],m=c[1],_=function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u&&!n){e.next=2;break}return e.abrupt("return");case 2:return m(!0),e.next=5,Object(y.d)(U);case 5:i(!0),m(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=Object(t.useState)(null),h=Object(s.a)(d,2),f=h[0],g=h[1],P=Object(t.useRef)(null),b=Object(t.useState)(null),v=Object(s.a)(b,2),w=v[0],E=v[1];Object(t.useEffect)((function(){f&&Object(y.a)(f,P,E)}),[f]);var j=Object(t.useState)(null),C=Object(s.a)(j,2),O=C[0],N=C[1];Object(t.useEffect)((function(){n&&w&&Object(y.f)(U,w,N)}),[n,w]);var A=O&&O.values().next().value.data,B=V();return r.a.createElement("div",{className:B.root},r.a.createElement(x.a,{container:!0,spacing:3},r.a.createElement(x.a,{item:!0},r.a.createElement(z,{setFile:g,canvasRef:P,fileLoaded:!!f}),!n&&!u&&r.a.createElement(G.a,{variant:"contained",onClick:_},"Load model (48 MB)"),!n&&u&&r.a.createElement(D,{message:"Loading model..."}),n&&w&&!O&&r.a.createElement(D,{message:"Running model..."}),n&&!f&&r.a.createElement(R,{message:"Add or take a picture..."}),!!f&&!w&&r.a.createElement(D,{message:"Loading image..."})),r.a.createElement(x.a,{item:!0},r.a.createElement(k,{output:A}))))}var X=n(134),$=n(136),Q=n(132),Y=n(133),Z=n(138),ee=n(139),ae=n(135),ne=n(26),te=n.n(ne),re=Object(v.a)((function(e){return{root:{flexGrow:1},content:{marginTop:20},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},table:{width:"100%"},footer:{padding:e.spacing(2),marginTop:"auto"},button:{margin:e.spacing(1)}}}));var ie=function(){var e=re();return r.a.createElement("div",{className:e.root},r.a.createElement(Q.a,{position:"static"},r.a.createElement(Y.a,null,r.a.createElement(d.a,{variant:"h6",className:e.title},"Chili Pepper Classifier"))),r.a.createElement(X.a,{className:e.content},r.a.createElement(K,null)),r.a.createElement(X.a,{className:e.content},r.a.createElement(Z.a,null,r.a.createElement(ee.a,{expandIcon:r.a.createElement(te.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{className:e.heading},"How do I use this?")),r.a.createElement(ae.a,null,r.a.createElement(d.a,{variant:"body2"},"Tab on the image icon to take a photo of a chili and drag and drop an image file of a chili on the image icon to classify the chili's type. Note ",u.length," different chili types are supported. If your image shows a different type, the prediction will be pretty meaningless."))),r.a.createElement(Z.a,null,r.a.createElement(ee.a,{expandIcon:r.a.createElement(te.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},r.a.createElement(d.a,{className:e.heading},"What chili types does the classifier know?")),r.a.createElement(ae.a,null,r.a.createElement(d.a,{variant:"body2"},"Dataset for this classifier was collected from  web search. Training dataset contains ",u.length," different types. Here is a list of all of them: ",u.map((function(e){return Object(y.b)(e)})).join(", "),"."))),r.a.createElement(Z.a,null,r.a.createElement(ee.a,{expandIcon:r.a.createElement(te.a,null),"aria-controls":"panel3a-content",id:"panel3a-header"},r.a.createElement(d.a,{className:e.heading},"What is this good for?")),r.a.createElement(ae.a,null,r.a.createElement(d.a,{variant:"body2"},"This app was meant to support fellow chili lovers to determine their chili type. It is also a showcase how machine learning can solve complex vision tasks."))),r.a.createElement(Z.a,null,r.a.createElement(ee.a,{expandIcon:r.a.createElement(te.a,null),"aria-controls":"panel3a-content",id:"panel3a-header"},r.a.createElement(d.a,{className:e.heading},"What happens to my data?")),r.a.createElement(ae.a,null,r.a.createElement(d.a,{variant:"body2"},"No image that you take with or add to this application will be uploaded or stored on my or anyone's servers by this application / website. In fact, your images never leave your device, because all the calculations are done in you browser! Only some general networking data is processed to make this website work (like all websites)."))),r.a.createElement(Z.a,null,r.a.createElement(ee.a,{expandIcon:r.a.createElement(te.a,null),"aria-controls":"panel3a-content",id:"panel3a-header"},r.a.createElement(d.a,{className:e.heading},"Credits")),r.a.createElement(ae.a,null,r.a.createElement(X.a,null,r.a.createElement(d.a,{variant:"body2"},"Machine learning idea and significant portion of ML implementation came from the excelent ",r.a.createElement($.a,{to:"https://course.fast.ai/"},"fast.ai course"),"The webpage template is the excelent work of ",r.a.createElement($.a,{to:"https://github.com/davidpfahler/react-ml-app/"},"David Pflahler")))))))},oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(ie,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ChiliClassifier",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/ChiliClassifier","/service-worker.js");oe?(!function(e,a){fetch(e).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ce(a,e)}))}}()}},[[64,1,2]]]);
//# sourceMappingURL=main.7013da6d.chunk.js.map