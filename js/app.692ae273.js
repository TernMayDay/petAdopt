(function(t){function e(e){for(var i,r,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);f&&f(e);while(d.length)d.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(i=!1)}i&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},r={app:0},s={app:0},n=[];function o(t){return c.p+"js/"+({AdminDashboard:"AdminDashboard",AdminOrderList:"AdminOrderList",AdminProducts:"AdminProducts",CheckInfo:"CheckInfo",Dashboard:"Dashboard",Login:"Login",PetDetails:"PetDetails"}[t]||t)+"."+{AdminDashboard:"fce7dc38",AdminOrderList:"cd8d3b03",AdminProducts:"f33376e7",CheckInfo:"14d36231",Dashboard:"f4aed0e0",Login:"a7236171",PetDetails:"c417120f"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={AdminDashboard:1,AdminOrderList:1,AdminProducts:1,CheckInfo:1,Dashboard:1,Login:1,PetDetails:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var i="css/"+({AdminDashboard:"AdminDashboard",AdminOrderList:"AdminOrderList",AdminProducts:"AdminProducts",CheckInfo:"CheckInfo",Dashboard:"Dashboard",Login:"Login",PetDetails:"PetDetails"}[t]||t)+"."+{AdminDashboard:"928c22a6",AdminOrderList:"2b097a13",AdminProducts:"670fd053",CheckInfo:"a18e7519",Dashboard:"b70593e7",Login:"676f07aa",PetDetails:"be47d360"}[t]+".css",s=c.p+i,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var u=n[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===i||l===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var i=e&&e.target&&e.target.src||s,n=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=i,delete r[t],f.parentNode.removeChild(f),a(n)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var i=s[t];if(0!==i)if(i)e.push(i[2]);else{var n=new Promise((function(e,a){i=s[t]=[e,a]}));e.push(i[2]=n);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var a=s[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,a[1](d)}s[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/petAdopt/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01bf":function(t,e,a){"use strict";var i=a("2131"),r=a.n(i);r.a},2131:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=a("2f62"),s=a("58ca"),n=a("bc3a"),o=a.n(n),c=a("a7fe"),u=a.n(c),l=a("9062"),d=a.n(l),f=(a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),p=a("7bb1"),m=a("4c93");function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){Object(f["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var v={install:function(t){t.component("ValidationObserver",p["a"]),t.component("ValidationProvider",p["b"]),Object(p["c"])("required",g({},m["b"],{message:"必填"})),Object(p["c"])("Email",g({},m["a"],{message:"請填寫正確格式"})),Object(p["c"])(" mobile",{validate:function(t){return 10===t.length&&/^09\d{8}$/.test(t)},message:"請填寫正確電話格式"})}},b=(a("99af"),a("d3b7"),{namespaced:!0,state:{products:[]},actions:{getProducts:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("api-room","/products/all");return t.commit("LOADING",!0,{root:!0}),new Promise((function(a,i){o.a.get(e).then((function(e){e.data.success&&(t.commit("PRODUCTS",e.data.products),t.commit("LOADING",!1,{root:!0}),a())}))}))}},mutations:{PRODUCTS:function(t,e){t.products=e}},getters:{products:function(t){return t.products}}}),y=(a("a434"),{namespaced:!0,state:{messages:[]},actions:{updateMessage:function(t,e){var a=e.message,i=e.status,r=Math.floor(new Date/1e3);t.commit("MESSAGE",{message:a,status:i,timestamp:r}),t.dispatch("removeMessageWithTiming",r)},removeMessage:function(t,e){t.commit("REMOVE_MESSAGE",e)},removeMessageWithTiming:function(t,e){setTimeout((function(){t.state.messages.forEach((function(a,i){a.timestamp===e&&t.commit("REMOVE_MESSAGE",i)}))}),5e3)}},mutations:{MESSAGE:function(t,e){t.messages.push(e)},REMOVE_MESSAGE:function(t,e){t.messages.splice(e,1)}},getters:{messages:function(t){return t.messages}}}),O=(a("c975"),a("d81d"),{namespaced:!0,state:{favoriteQty:0,favorite:[],favorite_class:""},actions:{getFavorite:function(t){var e=JSON.parse(window.localStorage.getItem("favoriteStored"))||[];t.commit("FAVORITE",e),t.commit("FAVORITE_TOTAL",e.length)},changeFavoriteClass:function(t,e){t.dispatch("getFavorite");var a=t.state.favorite.map((function(t){return t.id})).indexOf(e);-1===a?t.commit("FAVORITE_CLASS","far fa-heart"):t.commit("FAVORITE_CLASS","fas fa-heart")},addFavorite:function(t,e){var a={id:e.id,title:e.title};t.commit("ADD_FAVORITE",a),localStorage.setItem("favoriteStored",JSON.stringify(t.state.favorite)),t.dispatch("getFavorite"),t.dispatch("messagesModules/updateMessage",{message:"已加入我的最愛",status:"success"},{root:!0})},deleteFavoriteItem:function(t,e){t.commit("DELETE_FAVORITE",e),localStorage.setItem("favoriteStored",JSON.stringify(t.state.favorite)),t.dispatch("getFavorite"),t.dispatch("changeFavoriteClass",e),t.dispatch("messagesModules/updateMessage",{message:"已移出我的最愛",status:"danger"},{root:!0})},isFavoriteItem:function(t,e){t.dispatch("getFavorite");var a=t.state.favorite.map((function(t){return t.id})).indexOf(e.id);-1===a?(t.dispatch("addFavorite",e),t.dispatch("changeFavoriteClass",e.id)):(t.dispatch("deleteFavoriteItem",e.id),t.dispatch("changeFavoriteClass",e.id))}},mutations:{FAVORITE:function(t,e){t.favorite=e},FAVORITE_TOTAL:function(t,e){t.favoriteQty=e},ADD_FAVORITE:function(t,e){t.favorite.push(e)},DELETE_FAVORITE:function(t,e){t.favorite.forEach((function(a,i){a.id===e&&t.favorite.splice(i,1)}))},FAVORITE_CLASS:function(t,e){t.favorite_class=e}},getters:{favorites:function(t){return t.favorite},favoritesQty:function(t){return t.favoriteQty},favoriteClass:function(t){return t.favorite_class}}});i["a"].use(r["a"]);var _=new r["a"].Store({strict:!0,state:{isLoading:!1},actions:{updateLoading:function(t,e){t.commit("LOADING",e)}},mutations:{LOADING:function(t,e){t.isLoading=e}},modules:{productsModules:b,messagesModules:y,favoritesModules:O}}),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("router-view")],1)},A=[],P={name:"App",computed:{isLoading:function(){return this.$store.state.isLoading}}},E=P,x=(a("5c0b"),a("2877")),D=Object(x["a"])(E,C,A,!1,null,null,null),w=D.exports,L=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("Carousel"),a("form",{staticClass:"form-inline input-group mb-3 input-group-lg search",on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"form-control",attrs:{type:"text",placeholder:"晶片號碼、收容編號、收容所、品種..."},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),t._m(0)]),a("div",{staticClass:"category-tab w-100"},[a("ul",{staticClass:"row nav nav-pills nav-fill"},t._l(t.categories,(function(e,i){return a("li",{key:i,staticClass:"col-3 py-2 nav-item"},[a("a",{staticClass:"category-tab-link",class:{active:t.category==e.title},attrs:{href:"#/shop"},on:{click:function(a){return t.getCategory(e.title)}}},[t._v(t._s(e.title))])])})),0),t.filter?a("div",{staticClass:"col-12 my-2 text-left text-muted filter-state"},[0===t.filterProducts.length?a("span",[t._v('未找到任何有關 "'+t._s(t.filter)+'" 的動物')]):a("span",[t._v("總共找到 "+t._s(t.filterProducts.length)+' 樣有關 "'+t._s(t.filter)+'" 的動物')])]):t._e()]),a("div",{staticClass:"row mt-4"},t._l(t.filterProducts,(function(e){return a("div",{key:e.id,staticClass:"col-md-6 col-lg-4 mb-4"},[a("div",{staticClass:"card step h-100 shadow-sm"},[a("div",{staticStyle:{height:"250px","background-size":"cover","background-position":"center","border-top-left-radius":"0.25rem","border-top-right-radius":"0.25rem"},style:{backgroundImage:"url("+e.imageUrl+")"}},[a("div",{staticClass:"card-layer"},[a("div",{staticClass:"card-button-costomize"},[a("button",{staticClass:"btn btn-sm mx-2",attrs:{type:"button"},on:{click:function(a){return t.getProduct(e.id)}}},[a("i",{staticClass:"fas fa-paw"}),t._v(" 查看更多 ")]),a("button",{staticClass:"btn btn-sm mx-2",attrs:{type:"button",disabled:t.status.loadingItem===e.id},on:{click:function(a){return a.preventDefault(),t.is_favoriteItem(e)}}},[a("i",{staticClass:"favorite-icon",class:t.favoriteClass}),t._v(" 加入收藏 ")])])])]),a("div",{staticClass:"row card-body"},[a("h5",{staticClass:"col-12 card-body__title"},[a("span",{class:t.hasPriceClass(e.price)},[t._v(" "+t._s(t.hasPrice(e.price))+" ")])]),a("p",{staticClass:"col-12 card-body__text"},[t._v(" 收容編號："+t._s(e.origin_price)+" ")]),a("p",{staticClass:"col-6 card-body__text"},[t._v(" 性別："+t._s(e.content)+" ")]),a("p",{staticClass:"col-6 card-body__text"},[t._v(" 毛色："+t._s(e.title)+" ")]),a("div",{staticClass:"badge badge-costomize col-12"},[t._v(" "+t._s(t.isCategoryTitle(e.category))+" / "+t._s(t.isKind(e.category))+" ")])])])])})),0)],1)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"input-group-text bg-light"},[a("i",{staticClass:"fas fa-search"})])])}],S=(a("ac1f"),a("1276"),a("6e55")),T=a("d2ba"),k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"carousel slide runPic",attrs:{id:"carouselExampleIndicators","data-ride":"carousel"}},[i("div",{staticClass:"carousel-inner"},[i("div",{staticClass:"carousel-item active"},[i("p",[i("span",{staticClass:"slogan-1"},[t._v(" 以領養代替購買")])]),i("img",{staticClass:"d-block w-100 carousel-item__img",attrs:{src:a("c3f1"),alt:"貓咪圖"}})]),i("div",{staticClass:"carousel-item"},[i("p",[i("span",{staticClass:"fa-text"},[i("i",{staticClass:"far fa-smile-beam"}),t._v(" 謝謝你!!"),i("br"),t._v(" 嚷我擁有一個家")]),i("i",{staticClass:"fas fa-comment fas-icon"})]),i("img",{staticClass:"d-block w-100 carousel-item__img",attrs:{src:a("c0eb"),alt:"貓咪圖"}})]),i("div",{staticClass:"carousel-item"},[i("p",[i("span",{staticClass:"slogan-2"},[t._v(" 以結紮代替撲殺")])]),i("img",{staticClass:"d-block w-100 carousel-item__img carousel-item__img--2",attrs:{src:a("b919"),alt:"貓咪圖"}})])]),i("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"prev"}},[i("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"sr-only"},[t._v("Previous")])]),i("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"next"}},[i("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"sr-only"},[t._v("Next")])])])}],M={name:"Carousel"},R=M,V=Object(x["a"])(R,k,F,!1,null,null,null),N=V.exports;function $(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function G(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?$(Object(a),!0).forEach((function(e){Object(f["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var B={name:"Home",components:{Carousel:N},mixins:[T["a"]],data:function(){return{scrollReveal:Object(S["a"])(),title:"Home",products:[],isLoading:!1,status:{loadingItem:""},filter:"",categories:[{title:"全部"},{title:"犬"},{title:"貓"},{title:"其他"}],category:"全部",searchText:"",productId:""}},computed:G({filterProducts:function(){var t=this;return this.filter&&"全部"===this.category?this.products.filter((function(e){return e.price?-1!==e.price.indexOf(t.filter):-1!==t.isKind(e.category).indexOf(t.filter)||-1!==e.title.indexOf(t.filter)||-1!==e.origin_price.indexOf(t.filter)||-1!==e.unit.indexOf(t.filter)})):"全部"!==this.category?this.products.filter((function(e){return t.isCategoryTitle(e.category)===t.category})):this.products}},Object(r["c"])("favoritesModules",["favorites","favoritesQty","favoriteClass"])),created:function(){this.getProducts(),this.getFavorite(),this.$store.dispatch("favoritesModules/changeFavoriteClass",this.productId)},updated:function(){this.scrollReveal.reveal(".card",{duration:500,delay:100,origin:"bottom",reset:!0,mobile:!0,distance:"100px",opacity:.1,easing:"linear",scale:1,rotate:{x:0,y:90,z:0}})},methods:G({getProducts:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("api-room","/products/all");this.isLoading=!0,this.axios.get(e).then((function(e){t.products=e.data.products,t.displayProduct(),t.isLoading=!1}))},displayProduct:function(){var t=this,e=[];return this.products.map((function(a,i,r){0!==a.is_enabled&&e.push(a),t.products=e}))},getProduct:function(t){this.$router.push("/pet-details/".concat(t))},getCategory:function(t){this.category=t,this.filter&&(this.filter="")},isScroll:function(t){var e=t.element,a=(t.index,t.direction);"down"===a&&e.classList.add("active")},isKind:function(t){var e=t.split(",");return e[1]},isCategoryTitle:function(t){var e=t.split(",");return e[0]},hasPrice:function(t){var e={isA:"待認領",isB:"適合領養",isC:"尚未確認"},a=e.isA,i=e.isB,r=e.isC;return"0"===t?r:t&&t.length>2?a:i},hasPriceClass:function(t){var e={isA:"card-body__title--red",isB:"card-body__title--blue",isC:"card-body__title--yellow"},a=e.isA,i=e.isB,r=e.isC;return"0"===t?r:t&&t.length>2?a:i},search:function(){this.filter=this.searchText,this.searchText=""},is_favoriteItem:function(t){this.$store.dispatch("favoritesModules/isFavoriteItem",t)}},Object(r["b"])("favoritesModules",["getFavorite","changeFavoriteClass","isFavoriteItem"]))},q=B,H=(a("01bf"),Object(x["a"])(q,j,I,!1,null,null,null)),J=H.exports;i["a"].use(L["a"]);var Q=[{path:"/login.html",name:"Login",component:function(){return a.e("Login").then(a.bind(null,"8b48"))}},{path:"/admin",name:"AdminDashboard",component:function(){return a.e("AdminDashboard").then(a.bind(null,"2dd1"))},children:[{path:"admin-products.html",name:"AdminProducts",component:function(){return a.e("AdminProducts").then(a.bind(null,"de4c"))},meta:{requiresAuth:!0}},{path:"admin-order-list.html",name:"AdminOrderList",component:function(){return a.e("AdminOrderList").then(a.bind(null,"a78c"))},meta:{requiresAuth:!0}}]},{path:"/",name:"Dashboard",component:function(){return a.e("Dashboard").then(a.bind(null,"7277"))},children:[{path:"index.html",name:"Home",component:J},{path:"pet-details/:productId",name:"PetDetails",component:function(){return a.e("PetDetails").then(a.bind(null,"ffdf"))},meta:{title:"Pet_Home",breadcrumb:[{name:"首頁",link:"/home"}]}},{path:"check-info/:orderId",name:"CheckInfo",component:function(){return a.e("CheckInfo").then(a.bind(null,"fc2b"))}},{path:"*",redirect:"index.html"}]}],z=new L["a"]({routes:Q}),K=z;i["a"].prototype.$bus=new i["a"];a("e40d"),a("4989");i["a"].config.productionTip=!1,i["a"].use(r["a"]),i["a"].use(s["a"]),i["a"].use(u.a,o.a),o.a.defaults.withCredentials=!0,i["a"].component("Loading",d.a),i["a"].use(v),new i["a"]({router:K,store:_,render:function(t){return t(w)}}).$mount("#app"),K.beforeEach((function(t,e,a){function i(){var t="".concat("https://vue-course-api.hexschool.io","/api/user/check");o.a.post(t).then((function(t){!0===t.data.success?a():a({path:"/login.html"})}))}!0===t.meta.requiresAuth?i():a()}))},"5c0b":function(t,e,a){"use strict";var i=a("7694"),r=a.n(i);r.a},7694:function(t,e,a){},b919:function(t,e,a){t.exports=a.p+"img/pic_3.c9884e24.jpg"},c0eb:function(t,e,a){t.exports=a.p+"img/pic_2.f2d433cb.jpg"},c3f1:function(t,e,a){t.exports=a.p+"img/pic_1.61dfa2c1.jpg"},d2ba:function(t,e,a){"use strict";e["a"]={metaInfo:function(){return{title:this.title,meta:[{property:"og:title",content:"this is my ".concat(this.title," page")}]}}}}});