(this["webpackJsonpreact-ml-app"]=this["webpackJsonpreact-ml-app"]||[]).push([[0],{54:function(e,a,n){e.exports=n.p+"static/media/chili-resnet18.b9c461d0.onnx"},68:function(e,a,n){e.exports=n(90)},9:function(e,a,n){"use strict";(function(e){n.d(a,"b",(function(){return h})),n.d(a,"c",(function(){return g})),n.d(a,"e",(function(){return f})),n.d(a,"d",(function(){return w})),n.d(a,"f",(function(){return E})),n.d(a,"a",(function(){return x}));var t=n(10),r=n.n(t),i=n(24),o=n(53),l=n.n(o),c=n(42),p=n(47),s=n.n(p),u=n(11),m=n.n(u),d=n(54),_=n.n(d),h=function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},g=function(e){var a=e.split("_").map((function(e){return e.charAt(0).toLowerCase()+e.slice(1).toLowerCase()})).join("_");return"/images/".concat(a,".jpg")},f=function(){return new c.InferenceSession({backendHint:"webgl"})};function b(e){return P.apply(this,arguments)}function P(){return(P=Object(i.a)(r.a.mark((function e(a){var n,t,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=(n=[1,3,224,224]).reduce((function(e,a){return e*a})),i=new c.Tensor(new Float32Array(t),"float32",n),o=0;o<t;o++)i.data[o]=2*Math.random()-1;return e.next=6,a.run([i]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.loadModel(_.a);case 2:return e.next=4,b(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(i.a)(r.a.mark((function e(a,n,t){var i,o,l,p,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.width,o=n.height,l=C(n),p=new c.Tensor(l,"float32",[1,3,i,o]),e.next=5,a.run([p]);case 5:s=e.sent,t(s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,a,n){setTimeout((function(){return function(e,a,n){return v.apply(this,arguments)}(e,a,n)}),10)}var C=function(e){var a=e.data,n=e.width,t=e.height,r=s()(new Float32Array(a),[n,t,4]),i=s()(new Float32Array(n*t*3),[1,3,n,t]);return m.a.assign(i.pick(0,0,null,null),r.pick(null,null,0)),m.a.assign(i.pick(0,1,null,null),r.pick(null,null,1)),m.a.assign(i.pick(0,2,null,null),r.pick(null,null,2)),m.a.divseq(i,255),m.a.subseq(i.pick(0,0,null,null),.485),m.a.subseq(i.pick(0,1,null,null),.456),m.a.subseq(i.pick(0,2,null,null),.406),m.a.divseq(i.pick(0,0,null,null),.229),m.a.divseq(i.pick(0,1,null,null),.224),m.a.divseq(i.pick(0,2,null,null),.225),i.data},y=function(a){return new Promise((function(n,t){e.setTimeout((function(){return n()}),a)}))},j={maxWidth:224,maxHeight:224,cover:!0,crop:!0,canvas:!0,crossOrigin:"Anonymous",orientation:!0},S=function(e){return new Promise((function(a,n){l()(e,(function(e){return a(e)}),j)}))},x=function(){var e=Object(i.a)(r.a.mark((function e(a,n,t){var i,o,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&n.current){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,S(a);case 4:if("error"!==(i=e.sent).type){e.next=7;break}throw new Error("could not load image");case 7:return(o=n.current.getContext("2d")).drawImage(i,0,0),e.next=11,y(1);case 11:l=o.getImageData(0,0,n.current.width,n.current.height),t(l);case 13:case"end":return e.stop()}}),e)})));return function(a,n,t){return e.apply(this,arguments)}}()}).call(this,n(78))},90:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(12),o=n.n(i),l=n(10),c=n.n(l),p=n(24),s=n(15),u=["7_Pot_Barrackpore","7_Pot_Brain_Strain","7_Pot_Bubblegum","7_Pot_Douglah","7_Pot_Jonah","7_Pot_Primo","Aji_Amarillo","Aji_Charapita","Aji_Chombo","Aji_Colorado","Aji_Dulce","Aji_Omnicolor","Aji_Panca","Aji_Pineapple","Aleppo_Pepper","Anaheim_Pepper","Ancho_Pepper","Apache_Pepper","Aurora_Pepper","Banana_Pepper","Beaver_Dam_Pepper","Bell_Pepper","Bhut_Jolokia_Chocolate","Bishops_Crown_Pepper","Black_Cobra_Pepper","Black_Cuban_Pepper","Black_Hungarian_Pepper","Black_Pearl_Pepper","Black_Prince_Pepper","Bode_Pepper","Bolivian_Rainbow_Pepper","Bulgarian_Carrot_Pepper","Byadgi_Chili","Cajun_Belle_Pepper","Calico_pepper","California_Wonder_Pepper","Caribbean_Red_Habanero","Carmen_Pepper","Carolina_Reaper","Cascabel_Pepper","Cayenne_Pepper","Charleston_Hot_Pepper","Cheiro_Roxa","Cherry_Bomb_Pepper","Chilaca_Pepper","Chile_De_Arbol","Chilly_Chili","Chiltepin_Pepper","Chimayo_Pepper","Chipotle_Pepper","Chocolate_Habanero","Count_Dracula_Pepper","Cowhorn_Pepper","Cubanelle_Pepper","Datil_Pepper","Devils_Tongue_Pepper","Dorset_Naga","Dragons_Breath_Pepper","Dundicut_Pepper","Espelette_Pepper","Explosive_Ember_Pepper","Fatalii_Pepper","Filius_Blue_Pepper","Fish_Pepper","Fresno_Pepper","Ghost_Pepper","Goat_Pepper","Guajillo_Pepper","Guindilla_Pepper","Gypsy_Pepper","Habanero_Pepper","Hatch_Pepper","Hinkelhatz_Pepper","Holy_Mole_Pepper","Hot_Paper_Lantern","Hungarian_Wax_Pepper","Inca_Red_Drop_Pepper","Infinity_Pepper","Italian_Long_Hot_Pepper","Jalafuego_Pepper","Jalape\ufffdo_Pepper","Japones_Pepper","Jwala_Pepper","Kashmiri_Chili","Komodo_Dragon_Pepper","Lemon_Drop_Pepper","Little_Elf_Pepper","Madame_Jeanette_Pepper","Malagueta_Pepper","Manzano_Pepper","Mariachi_Pepper","Medusa_Pepper","Melrose_Pepper","Mexibell_pepper","Mulato_Pepper","Naga_Morich","Naga_Viper","NuMex_Big_Jim","NuMex_Centennial","NuMex_Twilight","Padron_Pepper","Pasilla_Pepper","Peperone_di_Senise","Peppadew_Pepper","Pepper_X","Pepperoncini","Pequin_Pepper","Peruvian_White_Habanero","Peter_Pepper","Pimento_Pepper","Piquillo_Pepper","Poblano_Pepper","Prairie_Fire_Pepper","Pretty_in_Purple_pepper","Purple_Beauty_Pepper","Purple_Jalape\ufffdo_Pepper","Red_Savina_Habanero","Roatan_Pumpkin_Habanero","Rocotillo_Pepper","Rocoto_Pepper","Rooster_Spur_Pepper","Royal_Black_Pepper","Sandia_Pepper","Sangria_Pepper","Santa_Fe_Grande_Pepper","Satans_Kiss_Pepper","Scotch_Bonnet_Pepper","Serrano_Pepper","Shishito_Pepper","Siling_Labuyo","Sport_Pepper","Super_Chili_Pepper","Tabasco_Pepper","Tangerine_Dream_Pepper","Thai_Pepper","Tien_Tsin_Pepper","Trinidad_7_Pot_Pepper","Trinidad_Moruga_Scorpion","Trinidad_Perfume","Trinidad_Scorpion_Butch-T","Trinidad_Scorpion_Chocolate","Wiri_Wiri_Pepper"],m=n(132),d=n(128),_=n(28),h=n(129),g=n(130),f=n(131),b=n(133),P=n(134),w=n(127),k=Object(w.a)({card:{width:299,height:299},item:{paddingTop:10}});function v(e){var a=e.items,n=k();return r.a.createElement(d.a,{className:n.card},r.a.createElement(h.a,{dense:!0},a.map((function(e){var a=e.avatar,t=e.name,i=e.percentage,o="".concat(t,"-").concat(i);return r.a.createElement(g.a,{key:o,className:n.item},r.a.createElement(f.a,null,r.a.createElement(m.a,{alt:"image of ".concat(t),src:a})),r.a.createElement(b.a,{id:o,primary:t}),r.a.createElement(P.a,null,r.a.createElement(_.a,null,i,"%")))}))))}var E=n(9),C=function(e,a){var n=Array.from(e).map((function(e,a){return[e,a]})).sort((function(e,a){return e[0]<a[0]?-1:e[0]>a[0]?1:0})).reverse().slice(0,a),t=e.map((function(e){return Math.exp(e)})).reduce((function(e,a){return e+a}));return n.map((function(e,a,n){var r=Object(s.a)(e,2),i=r[0],o=r[1];return{breed:u[o],act:i,prob:Math.exp(i)/t}}))};function y(e){var a=e.output;if(!a)return null;var n=C(a,5).map((function(e){var a=e.breed,n=e.prob;return{name:Object(E.b)(a),percentage:(100*n).toFixed(2),avatar:Object(E.c)(a)}}));return r.a.createElement(v,{items:n})}var j=n(137),S=n(3),x=n(55),B=n.n(x),A=n(136),O=n(149),N=n(135),T=Object(w.a)((function(e){return{box:{width:299,padding:0,margin:0},content:{boxSizing:"border-box"},info:{backgroundColor:e.palette.primary.main},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));function F(e){var a=e.message,n=T();return r.a.createElement(O.a,{className:n.box},r.a.createElement(N.a,{className:Object(S.a)(n.info,n.content),message:r.a.createElement("span",{className:n.message},r.a.createElement(B.a,{className:Object(S.a)(n.icon,n.iconVariant)}),a)}))}function D(e){var a=e.message,n=T();return r.a.createElement(O.a,{className:n.box},r.a.createElement(N.a,{className:n.content,message:r.a.createElement("span",{className:n.message},r.a.createElement(A.a,{size:20,className:n.iconVariant}),a)}))}var I=n(57),M=n.n(I),W=n(56),R=n.n(W),H=Object(w.a)({icon:{width:"50%",height:"50%",color:"grey"}}),L=function(e){var a=e.fileLoaded,n=e.isDragActive,t=H();return a?null:n?r.a.createElement(R.a,{className:t.icon}):r.a.createElement(M.a,{className:t.icon})},Y=n(59),G=Object(w.a)({card:{width:224,height:224,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:10},canvas:{width:224,height:224,zIndex:0,position:"absolute"},input:{zIndex:9999,position:"absolute"}});function J(e){var a=e.setFile,n=e.canvasRef,i=e.fileLoaded,o=G(),l=Object(t.useCallback)((function(e){if(e.length>1)return console.log("can only handle one file at a time");if(0!==e.length){var n=e[0];if(!n.type.startsWith("image"))return console.log("file must be an image");a(n)}}),[a]),c=Object(Y.a)({onDrop:l}),p=c.getRootProps,s=c.getInputProps,u=c.isDragActive;return r.a.createElement(d.a,Object.assign({},p(),{className:o.card}),r.a.createElement("canvas",{className:o.canvas,ref:n,width:224,height:224}),r.a.createElement("input",Object.assign({alt:"Image Dropzone",type:"image",className:o.input},s())),r.a.createElement(L,{fileLoaded:i,isDragActive:u}))}var q=n(138),z=Object(E.e)(),K=Object(w.a)((function(e){return{root:{flexGrow:1}}}));function U(){var e=Object(t.useState)(!1),a=Object(s.a)(e,2),n=a[0],i=a[1],o=Object(t.useState)(!1),l=Object(s.a)(o,2),u=l[0],m=l[1],d=function(){var e=Object(p.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u&&!n){e.next=2;break}return e.abrupt("return");case 2:return m(!0),e.next=5,Object(E.d)(z);case 5:i(!0),m(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=Object(t.useState)(null),h=Object(s.a)(_,2),g=h[0],f=h[1],b=Object(t.useRef)(null),P=Object(t.useState)(null),w=Object(s.a)(P,2),k=w[0],v=w[1];Object(t.useEffect)((function(){g&&Object(E.a)(g,b,v)}),[g]);var C=Object(t.useState)(null),S=Object(s.a)(C,2),x=S[0],B=S[1];Object(t.useEffect)((function(){n&&k&&Object(E.f)(z,k,B)}),[n,k]);var A=x&&x.values().next().value.data,O=K();return r.a.createElement("div",{className:O.root},r.a.createElement(j.a,{container:!0,spacing:3},r.a.createElement(j.a,{item:!0},r.a.createElement(J,{setFile:f,canvasRef:b,fileLoaded:!!g}),!n&&!u&&r.a.createElement(q.a,{variant:"contained",onClick:d},"Load model (48 MB)"),!n&&u&&r.a.createElement(D,{message:"Loading model..."}),n&&k&&!x&&r.a.createElement(D,{message:"Running model..."}),n&&!g&&r.a.createElement(F,{message:"Add or take a picture..."}),!!g&&!k&&r.a.createElement(D,{message:"Loading image..."})),r.a.createElement(j.a,{item:!0},r.a.createElement(y,{output:A}))))}var V=n(141),X=n(143),$=n(139),Q=n(140),Z=n(150),ee=n(151),ae=n(142),ne=n(27),te=n.n(ne),re=n(144),ie=n(148),oe=n(147),le=n(145),ce=n(146),pe="Bouvier_des_Flandres,https://commons.wikimedia.org/wiki/File:Ygor_Raiza.jpg,Eva Nordlund,CC BY-SA 2.5\nBrabancon_griffon,https://en.wikipedia.org/wiki/Griffon_Bruxellois#/media/File:0709_gucci_stolt.jpg,Maria Micha\xeblsson,CC BY-SA 3.0\nCardigan,https://en.wikipedia.org/wiki/Cardigan_Welsh_Corgi#/media/File:Wystawa_Rybnik_02.10.2011_welsh_corgi_cardigan_g%C5%82owa_pl.jpg,Pleple2000,CC BY-SA 3.0\nDandie_Dinmont,https://commons.wikimedia.org/wiki/File:A_Dandie_Dinmont.jpg,audrey_sel,CC BY-SA 2.0\nEnglish_foxhound,https://commons.wikimedia.org/wiki/English_Foxhound#/media/File:English_Foxhound_portrait.jpg,Thowra_uk,CC BY 2.0\nIrish_water_spaniel,https://commons.wikimedia.org/wiki/File:Irish_Water_Spaniel_4.jpg,Canarian,CC BY-SA 4.0 International\nJapanese_spaniel,https://commons.wikimedia.org/wiki/File:Japanese_ChinJapanese_Spaniel.jpg,T.shinzaemon,CC BY-SA 4.0 International\nKerry_blue_terrier,https://commons.wikimedia.org/wiki/Kerry_Blue_Terrier#/media/File:Kerry_Blue_Terrier_puppy.png,Vbi20,CC BY-SA 3.0\nMexican_Hairless,https://commons.wikimedia.org/wiki/File:Mexican_Hairless.jpg,Dagon Hoyohoy,CC-BY 2.0 Generic\nNorwich_terrier,https://commons.wikimedia.org/wiki/Norwich_Terrier#/media/File:Norwich_Terrier1.JPG,Helene Gisin Hgisin,CC BY-SA 4.0\nOld_English_sheepdog,https://commons.wikimedia.org/wiki/Old_English_Sheepdog#/media/File:Old_English_Sheep_Dog.JPG,Squigman,Public Domain\nscotch_terrier,https://en.wikipedia.org/wiki/Scottish_Terrier#/media/File:Scottish_Terrier_Photo_of_Face.jpg,Elise Carroll,CC BY-SA 4.0\nScottish_deerhound,https://en.wikipedia.org/wiki/Scottish_Deerhound#/media/File:Modhish_Archie_MacTavish-foto_hanna_Wo%C5%BAna-Gil.jpg,Hanna Wo\u017ana - Gil,CC BY-SA 3.0\nSealyham_terrier,https://en.wikipedia.org/wiki/Sealyham_Terrier#/media/File:Adult_Sealyham_Terrier.jpg,Chuck in MA,CC BY-SA 4.0\nSussex_spaniel,https://de.wikipedia.org/wiki/Datei:Sussex_spaniel_t43.jpg,Pleple2000,CC BY 3.0\nWalker_hound,https://en.wikipedia.org/wiki/Treeing_Walker_Coonhound#/media/File:Treeing-walker-coonhound-standing.jpg,Kingkong954,Public Domain\nblack-and-tan_coonhound,https://en.wikipedia.org/wiki/Black_and_Tan_Coonhound#/media/File:BTCoonhnd.jpg,Scraig,CC BY-SA 3.0\nclumber,https://en.wikipedia.org/wiki/Clumber_Spaniel#/media/File:Clumber_spaniel_rybnik_kamien_pppl.jpg,Pleple2000,CC BY-SA 4.0\ncollie,https://commons.wikimedia.org/wiki/File:Rough_Collie_600.jpg,sannse,CC BY-SA 3.0 Unported\notterhound,https://en.wikipedia.org/wiki/Otterhound#/media/File:Two_otterhounds.jpg,Machinecha~commonswiki,Public Domain\nredbone,https://commons.wikimedia.org/wiki/File:Memphis_the_Redbone_Coonhound_(7_Nov_2004).jpg,Arlawson,CC BY-SA 3.0 Unported\nschipperke,https://commons.wikimedia.org/wiki/Schipperke#/media/File:G%C5%82owa_gismo_-_schipperke.jpg,Lilly M,CC BY-SA 3.0\nwire-haired_fox_terrier,https://en.wikipedia.org/wiki/Wire_Fox_Terrier#/media/File:Wera.JPG,Duspivova,CC BY-SA 3.0".split("\n").map((function(e){var a=e.split(","),n=Object(s.a)(a,4),t=n[0],r=n[1],i=n[2],o=n[3];return{img:Object(E.c)(t),breed:t,source:r,author:i,license:o}})),se=Object(w.a)((function(e){return{root:{flexGrow:1},content:{marginTop:20},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},table:{width:"100%"},footer:{padding:e.spacing(2),marginTop:"auto"},button:{margin:e.spacing(1)}}}));var ue=function(){var e=se();return r.a.createElement("div",{className:e.root},r.a.createElement($.a,{position:"static"},r.a.createElement(Q.a,null,r.a.createElement(_.a,{variant:"h6",className:e.title},"Chili Pepper Classifier"))),r.a.createElement(V.a,{className:e.content},r.a.createElement(U,null)),r.a.createElement(V.a,{className:e.content},r.a.createElement(Z.a,null,r.a.createElement(ee.a,{expandIcon:r.a.createElement(te.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(_.a,{className:e.heading},"How do I use this?")),r.a.createElement(ae.a,null,r.a.createElement(_.a,{variant:"body2"},"Tab on the image icon to take a photo of a dog and drag and drop an image file of a dog on the image icon to classify the dog's breed. Note that only ",u.length," different dog breeds are supported. If your image shows a different dog bread, the prediction will be pretty meaningless."))),r.a.createElement(Z.a,null,r.a.createElement(ee.a,{expandIcon:r.a.createElement(te.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},r.a.createElement(_.a,{className:e.heading},"What dog breeds does the classifier know?")),r.a.createElement(ae.a,null,r.a.createElement(_.a,{variant:"body2"},"This classifier is based on the ",r.a.createElement(X.a,{to:"http://vision.stanford.edu/aditya86/ImageNetDogs/"},"Stanford Dogs Dataset"),", which contains ",u.length," different breeds. Here is a list of all of them: ",u.map((function(e){return Object(E.b)(e)})).join(", "),"."))),r.a.createElement(Z.a,null,r.a.createElement(ee.a,{expandIcon:r.a.createElement(te.a,null),"aria-controls":"panel3a-content",id:"panel3a-header"},r.a.createElement(_.a,{className:e.heading},"What is this good for?")),r.a.createElement(ae.a,null,r.a.createElement(_.a,{variant:"body2"},"This app is not made to actually classify dog breeds. It does not cover enough breeds and important breeds are missing altogether. Rather, it is an end-to-end example that shows how to train machine learning models and run them in the browser. If you want to learn more, check out the ",r.a.createElement(X.a,{to:"https://github.com/davidpfahler/react-ml-app"},"GitHub repository"),"."))),r.a.createElement(Z.a,null,r.a.createElement(ee.a,{expandIcon:r.a.createElement(te.a,null),"aria-controls":"panel3a-content",id:"panel3a-header"},r.a.createElement(_.a,{className:e.heading},"What happens to my data?")),r.a.createElement(ae.a,null,r.a.createElement(_.a,{variant:"body2"},"No image that you take with or add to this application will be uploaded or stored on my or anyone's servers by this application / website. In fact, your images never leave your device, because all the calculations are done in you browser! Only some general networking data is processed to make this website work (like all websites). Please see my ",r.a.createElement(X.a,{to:"https://davidpfahler.com/privacy-policy/"},"privacy policy")," for further details."))),r.a.createElement(Z.a,null,r.a.createElement(ee.a,{expandIcon:r.a.createElement(te.a,null),"aria-controls":"panel3a-content",id:"panel3a-header"},r.a.createElement(_.a,{className:e.heading},"Image credits")),r.a.createElement(ae.a,null,r.a.createElement(V.a,null,r.a.createElement(_.a,{variant:"body2"},"Most images to illustrate the different dog breeds are sourced from pixabay.com, which are free for commercial use and do not require attribution. Some images are sourced from Wikipedia or Wikimedia and are licensed under a variant of the Creative Commons License. The below table contains the required attribution:"),r.a.createElement(re.a,{className:e.table},r.a.createElement(le.a,null,r.a.createElement(ce.a,null,r.a.createElement(oe.a,null),r.a.createElement(oe.a,null,"Breed"),r.a.createElement(oe.a,null,"Source Link"),r.a.createElement(oe.a,null,"Author"),r.a.createElement(oe.a,null,"License"))),r.a.createElement(ie.a,null,pe.map((function(e){return r.a.createElement(ce.a,{key:e.breed},r.a.createElement(oe.a,null,r.a.createElement(m.a,{alt:"image of ".concat(e.breed),src:e.img})),r.a.createElement(oe.a,{component:"th",scope:"row"},e.breed),r.a.createElement(oe.a,null,r.a.createElement(X.a,{to:e.source},"Link to source")),r.a.createElement(oe.a,null,e.author),r.a.createElement(oe.a,null,e.license))}))))))),r.a.createElement("footer",{className:e.footer},r.a.createElement(q.a,{className:e.button,href:"https://davidpfahler.com/privacy-policy/"},"Privacy Policy"),r.a.createElement(q.a,{className:e.button,href:"https://davidpfahler.com/impressum/"},"Impressum"))))},me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function de(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(ue,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ChiliClassifier",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/ChiliClassifier","/service-worker.js");me?(!function(e,a){fetch(e).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):de(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):de(a,e)}))}}()}},[[68,1,2]]]);
//# sourceMappingURL=main.dc3aa3db.chunk.js.map