(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AdminOrderList"],{"9fe5":function(t,e,a){"use strict";var s=a("fd31"),r=a.n(s);r.a},a78c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._m(0),a("table",{staticClass:"table-rwd table table-hover table-striped table-bordered"},[t._m(1),a("tbody",t._l(t.orders,(function(e){return a("tr",{key:e.id},[a("td",{attrs:{"data-th":"申請日期"}},[a("p",[t._v(" "+t._s(t.createAt(e.create_at))+" ")])]),a("td",{attrs:{"data-th":"動物資訊"}},[a("div",{staticClass:"row products"},t._l(e.products,(function(e){return a("li",{key:e.id,staticClass:"col-12 products-list"},[a("div",{staticClass:"products-list__img",style:{backgroundImage:"url("+e.product.imageUrl+")"}}),a("div",{staticClass:"products-list__text"},[t._v(" 收容編號："+t._s(e.product.origin_price)+" "),a("br"),t._v(" 動物別："+t._s(t.isCategoryTitle(e.product.category))+" "),a("br"),t._v(" 品 種："+t._s(t.isKind(e.product.category))+" "),a("br"),t._v(" 性 別："+t._s(e.product.content)+" "),a("br"),t._v(" 毛 色："+t._s(e.product.title)+" ")])])})),0)]),a("td",{attrs:{"data-th":"認養人資訊"}},[e.user?a("p",[t._v(" 姓 名："+t._s(e.user.name)+" "),a("br"),t._v(" Email： "+t._s(e.user.email)+" "),a("br"),t._v(" 地 址："+t._s(e.user.address)+" "),a("br"),t._v(" 電 話： "+t._s(e.user.tel)+" "),a("br"),t._v(" 留 言： "+t._s(e.message)+" ")]):a("p",[t._v(" 資料庫沒寫 ")])]),a("td",{attrs:{"data-th":"認養狀態"}},[e.is_paid?a("p",[t._v(" 完成認養 ")]):a("p",{staticClass:"paid--red"},[t._v(" 尚未完成 ")])]),a("td",{attrs:{"data-th":"連結"}},[a("a",{staticClass:"btn btn-outline-primary btn-sm",attrs:{href:t.isLink(e.id),target:"_blank",role:"button"}},[a("i",{staticClass:"fas fa-link"})])]),a("td",{attrs:{"data-th":"編輯"}},[a("button",{staticClass:"btn btn-outline-info btn-sm",attrs:{type:"button","data-toggle":"modal"},on:{click:function(a){return t.openModal(t.isNewOrder=!1,e)}}},[t._v(" 編輯 ")])])])})),0)]),a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getOrders(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,(function(e,s){return a("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page===e},attrs:{value:s}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getOrders(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getOrders(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)]),a("div",{staticClass:"modal fade",attrs:{id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-row"},[t._l(t.temOrder.products,(function(e,s){return a("div",{key:s,staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("收容編號")]),a("input",{staticClass:"form-control",attrs:{id:"origin_price",type:"text",disabled:"",placeholder:t.isOriginPrice(t.temOrder)}})])})),a("div",{staticClass:"form-group col-md-6"},[a("label",{staticClass:"form-check-label",attrs:{for:"is_paid"}},[t._v(" 是否完成認養 ")]),a("div",{staticClass:"form-check check-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.temOrder.is_paid,expression:"temOrder.is_paid"}],staticClass:"form-check-input",attrs:{id:"is_paid",type:"checkbox","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.temOrder.is_paid)?t._i(t.temOrder.is_paid,null)>-1:t._q(t.temOrder.is_paid,1)},on:{change:function(e){var a=t.temOrder.is_paid,s=e.target,r=s.checked?1:0;if(Array.isArray(a)){var i=null,o=t._i(a,i);s.checked?o<0&&t.$set(t.temOrder,"is_paid",a.concat([i])):o>-1&&t.$set(t.temOrder,"is_paid",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.temOrder,"is_paid",r)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_paid"}},[t._v(" 完成 ")])])]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"name"}},[t._v("姓 名")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.temUser.name,expression:"temUser.name",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{id:"name",type:"text",placeholder:""},domProps:{value:t.temUser.name},on:{change:function(e){return t.$set(t.temUser,"name",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"tel"}},[t._v("電 話")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.temUser.tel,expression:"temUser.tel",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{id:"tel",type:"text",placeholder:""},domProps:{value:t.temUser.tel},on:{change:function(e){return t.$set(t.temUser,"tel",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.temUser.email,expression:"temUser.email",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{id:"email",type:"text",placeholder:""},domProps:{value:t.temUser.email},on:{change:function(e){return t.$set(t.temUser,"email",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"address"}},[t._v("地 址")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.temUser.address,expression:"temUser.address",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{id:"address",type:"text",placeholder:""},domProps:{value:t.temUser.address},on:{change:function(e){return t.$set(t.temUser,"address",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-12"},[a("label",{attrs:{for:"message"}},[t._v(" 留 言")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.temOrder.message,expression:"temOrder.message",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{id:"message",type:"textarea",placeholder:""},domProps:{value:t.temOrder.message},on:{change:function(e){return t.$set(t.temOrder,"message",e.target.value)}}})])],2)])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.isDisabled},on:{click:t.updateOrder}},[t._v(" 送出修改 ")])])])])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-left"},[a("h2",{staticClass:"admin__title"},[t._v(" 申請收養 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"info hidden-xs"},[a("tr",[a("td",{attrs:{width:"120"}},[t._v(" 申請日期 ")]),a("td",{staticClass:"text-center",attrs:{width:"350"}},[t._v(" 愛心動物資訊 ")]),a("td",[t._v(" 認養人資訊 ")]),a("td",{attrs:{width:"100"}},[t._v(" 認養狀態 ")]),a("td",{attrs:{width:"80"}},[t._v(" 連結 ")]),a("td",{attrs:{width:"80"}},[t._v(" 編輯 ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v(" 編輯認養資料 ")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=(a("99af"),a("ac1f"),a("1276"),a("1157")),o=a.n(i),d={name:"AdminOrderList",data:function(){return{temOrder:{},temUser:{},isNewOrder:!0,orders:[],products:[],pagination:{},isLoading:!1,isDisabled:!1}},created:function(){this.getOrders()},methods:{getOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("api-room","/admin/orders?page=").concat(e);this.isLoading=!0,this.axios.get(a).then((function(e){t.isLoading=!1,t.orders=e.data.orders,t.pagination=e.data.pagination}))},createAt:function(t){var e=t,a=new Date;return a.setTime(1e3*e),a.toLocaleDateString()},isKind:function(t){var e=t.split(",");return e[1]},isCategoryTitle:function(t){var e=t.split(",");return e[0]},isLink:function(t){var e="".concat("https://ternmayday.github.io/petAdopt","/#/check-info/").concat(t);return e},isOriginPrice:function(t){for(var e in t.products)if(t.products.hasOwnProperty(e))return t.products[e].product.origin_price},openModal:function(t,e){o()("#orderModal").modal("show"),this.isNewOrder||(this.temOrder=Object.assign({},e),this.temUser=this.temOrder.user)},updateOrder:function(){var t=this;this.isDisabled=!0;var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("api-room","/admin/order/").concat(this.temOrder.id);this.axios.put(e,{data:this.temOrder}).then((function(e){e.data.success,t.getOrders(),o()("#orderModal").modal("hide"),t.isDisabled=!1}))}}},l=d,n=(a("9fe5"),a("2877")),c=Object(n["a"])(l,s,r,!1,null,"c75e81d2",null);e["default"]=c.exports},fd31:function(t,e,a){}}]);