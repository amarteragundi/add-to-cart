(this.webpackJsonpadobe=this.webpackJsonpadobe||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/logo.3b8b91ff.svg"},31:function(e,t,a){e.exports=a(45)},38:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=a(28),o=(a(38),a(5)),u=(a(24),a(19)),s=a(56),m=function(e){return{type:"SORT_TYPE",payLoad:e}},d=function(e){return{type:"SEARCH_TERM",payLoad:e}},p=function(e){return{type:"SELECTED_PAGE",payLoad:e}},E=function(e,t){return{type:"SHOW_MODAL",payLoad:{modal:e,show:t}}},_={filterByPrice:function(e){return{type:"PRICE_RANGE",payLoad:{min:e[0],max:e[1]}}},showModal:E},f=Object(o.b)((function(e){return{range:e.priceRange}}),_)((function(e){var t=e.filterByPrice,a=e.range,c=e.showModal,l=Object(n.useState)([a.min,a.max]),i=Object(u.a)(l,2),o=i[0],m=i[1],d={modal:"",show:!1};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sidebar__sliderLabel"},"\u20b96000",r.a.createElement("span",{className:"float-right"},"\u20b9100000")),r.a.createElement(s.a,{defaultValue:o,valueLabelDisplay:"auto",step:10,min:6e3,max:1e5,style:{width:"70%",marginLeft:"30px"},onChange:function(e,t){m(t)}}),r.a.createElement("div",{className:"sidebar__sliderLabel--bottom"},"Price"),r.a.createElement("div",{onClick:function(){return t(o)},className:"sidebar__button"},"Apply"),r.a.createElement("div",{className:"modal__button"},r.a.createElement("div",{className:"modal__button--cancel",onClick:function(){return c(d)}},"Cancel"),r.a.createElement("div",{className:"modal__button--apply",onClick:function(){t(o),c(d)}},"Apply")))})),y=function(e){return e.productList.map((function(e){return e}))},O={setSortState:m,showModal:E},v=Object(o.b)((function(e){return{productList:y(e),searchTerm:e.searchTerm,sortType:e.sort}}),O)((function(e){var t=e.setSortState,a=e.sortType,c=e.showModal,l={modal:"",show:!1},i=Object(n.useState)("HIGH_TO_LOW"),o=Object(u.a)(i,2),s=o[0],m=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sortBarM"},r.a.createElement("b",{className:"sortTitleM"},"Sort Options "),r.a.createElement("div",{className:"radioGroup"},r.a.createElement("label",{htmlFor:"high"},r.a.createElement("input",{id:"high",type:"radio",name:"sort",value:"HIGH_TO_LOW",onClick:function(){return m("HIGH_TO_LOW")},checked:"HIGH_TO_LOW"===a||"HIGH_TO_LOW"===s}),"Price -- High Low"),r.a.createElement("label",{htmlFor:"low"},r.a.createElement("input",{id:"low",type:"radio",name:"sort",value:"LOW_TO_HIGH",onClick:function(){return m("LOW_TO_HIGH")},checked:"LOW_TO_HIGH"===a||"LOW_TO_HIGH"===s}),"Price -- Low High"," "),r.a.createElement("label",{htmlFor:"discount"},r.a.createElement("input",{id:"discount",type:"radio",name:"sort",value:"SORT_BY_DISCOUNT",onClick:function(){return m("SORT_BY_DISCOUNT")},checked:"SORT_BY_DISCOUNT"===a||"SORT_BY_DISCOUNT"===s}),"Discount"))),r.a.createElement("div",{className:"modal__button"},r.a.createElement("div",{className:"modal__button--cancel",onClick:function(){return c(l)}},"Cancel"),r.a.createElement("div",{className:"modal__button--apply",onClick:function(){t(s),c(l)}},"Apply")))})),b={setSort:m},h=Object(o.b)((function(e){return{productList:y(e),searchTerm:e.searchTerm,sortType:e.sort}}),b)((function(e){var t=e.setSort,a=e.sortType;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sortBar"},r.a.createElement("b",{className:"sortTitle"},"Sort By "),r.a.createElement("span",{onClick:function(){return t("HIGH_TO_LOW")},className:"HIGH_TO_LOW"===a?"active":""},"Price -- High Low"),r.a.createElement("span",{onClick:function(){return t("LOW_TO_HIGH")},className:"LOW_TO_HIGH"===a?"active":""},"Price -- Low High"),r.a.createElement("span",{onClick:function(){return t("SORT_BY_DISCOUNT")},className:"SORT_BY_DISCOUNT"===a?"active":""},"Discount")))})),T=a(10),g=a.n(T),N={showModal:E},L=Object(o.b)(null,N)((function(e){var t=e.showModal;return r.a.createElement("div",{className:"sortBarMobile"},r.a.createElement("div",{className:"sortBarMobile__sort",onClick:function(){return t("sort",!0)}},r.a.createElement(g.a,{className:"",name:"sort",style:{color:"#000",marginRight:"10px"}}),"Sort"),r.a.createElement("div",{className:"sortBarMobile__filter",onClick:function(){return t("filter",!0)}},r.a.createElement(g.a,{className:"",name:"filter",style:{color:"#000",marginRight:"10px"}}),"Filter"))})),C=a(6),I=function(e){return e.map((function(e){return e.quantity})).reduce((function(e,t){return e+t}),0)},S={addToCart:function(e){return{type:"CART_ITEMS",payLoad:e}}},P=Object(o.b)((function(e){return{productList:y(e),searchTerm:e.searchTerm,sortType:e.sort,priceRange:e.priceRange}}),S)((function(e){var t,a=e.productList,n=void 0===a?[]:a,c=e.searchTerm,l=e.addToCart,i=e.sortType,o=e.priceRange,u=function(e,t){switch(t){case"LOW_TO_HIGH":var a=e.sort((function(e,t){return e.price.actual<t.price.actual?-1:1}));return Object(C.a)(a);case"HIGH_TO_LOW":var n=e.sort((function(e,t){return e.price.actual>t.price.actual?-1:1}));return Object(C.a)(n);case"SORT_BY_DISCOUNT":var r=e.sort((function(e,t){return e.discount>t.discount?-1:1}));return Object(C.a)(r);default:return e}}((t=o,n.filter((function(e){return e.price.actual>t.min&&e.price.actual<t.max}))),i),s=c.length>0?function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(u,c):u;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:"productList"},(null===s||void 0===s?void 0:s.length)>0?s.map((function(e,t){return r.a.createElement("div",{className:"productList__Item",key:t},r.a.createElement("img",{src:e.image,alt:"test"}),r.a.createElement("div",{className:"productList__Title"},e.name),r.a.createElement("div",{className:"productList__Price"},r.a.createElement("b",null,"\u20b9",e.price.actual)," ",r.a.createElement("span",{className:"productList__Price productList__Price--display"},e.price.display),r.a.createElement("span",{className:"productList__Price productList__Price--discount"},r.a.createElement("b",null,e.discount,"% off"))),r.a.createElement("div",{className:"productList__buttonWrapper"},r.a.createElement("button",{onClick:function(){return l(e)},className:"productList__button "},"Add To Cart")))})):r.a.createElement("div",{className:"productList__noproducts"},"No Products to display"))))})),H=(a(42),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sidebar"},r.a.createElement("h3",null,"Filters"),r.a.createElement(f,{defaultValue:[8e3,1e5],valueLabelDisplay:"auto",step:10,min:8e3,max:1e5,style:{width:"80%",margin:"20px"}})),r.a.createElement("div",{className:"wrapper"},r.a.createElement(h,null),r.a.createElement(L,null),r.a.createElement("div",{className:"productlist"},r.a.createElement(P,null))))}),j=(a(43),{removeFromCart:function(e){return{type:"REMOVE_ITEM",payLoad:e}},modifyQuantity:function(e,t){return{type:"MODIFY_QUANTITY",payLoad:{name:e,quantity:t}}},increaseQuantity:function(e,t){return{type:"INCREASE_QUANTITY",payLoad:{name:e,quantity:t}}},decreaseQuantity:function(e,t){return{type:"DECREASE_QUANTITY",payLoad:{name:e,quantity:t}}}}),w=Object(o.b)((function(e){return{cartItems:e.cart}}),j)((function(e){var t=e.cartItems,a=e.removeFromCart,n=e.modifyQuantity,c=e.increaseQuantity,l=e.decreaseQuantity;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cart"},(null===t||void 0===t?void 0:t.length)>0?t.sort((function(e,t){return e.index<t.index?-1:1})).map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cartitem"},r.a.createElement("img",{src:e.image,style:{maxHeight:"200px"},alt:"test"}),r.a.createElement("div",{className:"cartitem__title"},e.name),r.a.createElement("div",{className:"cartitem__details"},r.a.createElement("div",{className:"cartitem__Price"},r.a.createElement("b",{style:{float:"left"}},"\u20b9",e.price.actual),r.a.createElement("span",{className:"cartitem__Price--display"},e.price.display),r.a.createElement("span",{className:"cartitem__Price--discount"},r.a.createElement("b",null,e.discount,"% off"))),r.a.createElement("div",{className:"cartitem__qty"},r.a.createElement(g.a,{className:"cartitem__qty__icon cartitem__qty__icon--minus",name:"minus-circle",style:{color:"#000"},onClick:function(){e.quantity>1&&l(e.name,e.quantity)}}),r.a.createElement("input",{type:"number",value:e.quantity>=1?e.quantity:1,disabled:!0,onChange:function(t){return e.quantity>=1?n(e.name,Number(t.target.value)):n(e.name,Number(1))}}),r.a.createElement(g.a,{className:"cartitem__qty__icon cartitem__qty__icon--plus",name:"plus-circle",style:{color:"#000"},onClick:function(t){return c(e.name,e.quantity)}})),r.a.createElement("div",{className:"cartitem__remove"},r.a.createElement("span",{onClick:function(){return a(e.name)}},"REMOVE")))))})):r.a.createElement("div",{className:"cartitem__noitem"},"Start Shopping!!! There are no items in your cart.")),(null===t||void 0===t?void 0:t.length)>0?r.a.createElement("div",{className:"cartprice"},r.a.createElement("div",{className:"cartprice__title"},"PRICE DETAILS"),r.a.createElement("div",{className:"cartprice__details"},r.a.createElement("span",null,"Price(",I(t)," Item(s)) : \u20b9",function(e){return e.map((function(e){return e.quantity*e.price.display})).reduce((function(e,t){return e+t}),0)}(t)),r.a.createElement("span",null,"Discount : \u20b9",function(e){return e.map((function(e){return e.quantity*(e.price.display-e.price.actual)})).reduce((function(e,t){return e+t}),0)}(t)),r.a.createElement("span",{className:"cartprice__total"},r.a.createElement("b",null,"Total Payable"),": \u20b9",function(e){return e.map((function(e){return e.quantity*e.price.actual})).reduce((function(e,t){return e+t}),0)}(t)))):null)})),R=(a(25),{searchProduct:d}),A=Object(o.b)((function(e){return{selectedPage:e.selectedPage}}),R)((function(e){var t=e.searchProduct;return"HOMEPAGE"===e.selectedPage?r.a.createElement("input",{type:"text",placeholder:"Search...",className:"menu--search",onChange:function(e){return t(e.target.value)}}):null})),M={searchProduct:d,switchPage:p},k=Object(o.b)((function(e){return{selectedPage:e.selectedPage,cartItems:e.cart}}),M)((function(e){var t=e.selectedPage,a=e.switchPage,n=e.cartItems;return r.a.createElement(r.a.Fragment,null,"HOMEPAGE"===t?r.a.createElement("div",{onClick:function(){return a("CART")},className:"fa-stack"},r.a.createElement("div",{className:"maenu--cartBadge"},I(n)),r.a.createElement(g.a,{className:"",name:"shopping-cart",size:"2x",style:{color:"#fff"}})):null)})),G=a(27),x=a.n(G),D={switchPage:p},q=Object(o.b)(null,D)((function(e){var t=e.switchPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"menu"},r.a.createElement("img",{src:x.a,className:"menu--logo",alt:"logo",onClick:function(){return t("HOMEPAGE")}}),r.a.createElement("div",{className:"menu--rightsection"},r.a.createElement(A,null),r.a.createElement(k,null))))})),B=Object(o.b)((function(e){return{selectedPage:e.selectedPage,displayModal:e.modal}}))((function(e){var t=e.selectedPage,a=e.displayModal;return r.a.createElement(r.a.Fragment,null,a.show?r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal__content"},"sort"===a.modal?r.a.createElement(v,null):r.a.createElement(f,null))):null,r.a.createElement(q,null),"HOMEPAGE"===t?r.a.createElement(H,{style:{marginBottom:"60px"}}):r.a.createElement(w,null),r.a.createElement("div",{className:"footer"},"\xa9 Copyright"))})),F=a(8),U=a(11),W={min:6e3,max:1e5},Y=Object(F.c)({selectedPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"HOMEPAGE",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECTED_PAGE":return t.payLoad;default:return e}},searchTerm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_TERM":return t.payLoad;default:return e}},sort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"HIGH_TO_LOW",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT_TYPE":return t.payLoad;default:return e}},priceRange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRICE_RANGE":return{min:t.payLoad.min,max:t.payLoad.max};default:return e}},productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCTS_LIST":return Object(C.a)(t.data.items);default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CART_ITEMS":var a=e.filter((function(e){return e.name===t.payLoad.name}));return(null===a||void 0===a?void 0:a.length)?[].concat(Object(C.a)(e.filter((function(e){return e.name!==t.payLoad.name}))),[Object(U.a)({},a[0],{quantity:a[0].quantity+1})]):[].concat(Object(C.a)(e),[Object(U.a)({},t.payLoad,{quantity:1,index:e.length+1})]);case"REMOVE_ITEM":return Object(C.a)(e.filter((function(e){return e.name!==t.payLoad})));case"MODIFY_QUANTITY":var n=Object(C.a)(e.filter((function(e){return e.name!==t.payLoad.name})));return[].concat(Object(C.a)(n),[Object(U.a)({},e.filter((function(e){return e.name===t.payLoad.name}))[0],{quantity:t.payLoad.quantity})]);case"INCREASE_QUANTITY":var r=Object(C.a)(e.filter((function(e){return e.name!==t.payLoad.name})));return[].concat(Object(C.a)(r),[Object(U.a)({},e.filter((function(e){return e.name===t.payLoad.name}))[0],{quantity:t.payLoad.quantity+1})]);case"DECREASE_QUANTITY":var c=Object(C.a)(e.filter((function(e){return e.name!==t.payLoad.name})));return[].concat(Object(C.a)(c),[Object(U.a)({},e.filter((function(e){return e.name===t.payLoad.name}))[0],{quantity:t.payLoad.quantity-1})]);default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{modal:null,show:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_MODAL":return Object(U.a)({},t.payLoad);default:return e}}}),Q=a(16),V=a.n(Q),X=a(20),z=V.a.mark(J),$=V.a.mark(K);function J(){var e;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.jsonbin.io/b/5eabe67d07d49135ba48b4d6",{headers:{"secret-key":"$2b$10$VUeBB31uEH.4dFKQ0Gh.xu868hBSiepNDjI3LGPv9G/YzOUdOFz2C"}}).then((function(e){return e.json()}));case 2:return e=t.sent,t.next=5,Object(X.c)({type:"PRODUCTS_LIST",data:e});case 5:case"end":return t.stop()}}),z)}function K(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.a)([Object(X.b)(J)]);case 2:case"end":return e.stop()}}),$)}var Z=Object(i.a)(),ee=Object(F.e)(Y,Object(F.d)(Object(F.a)(Z),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Z.run(K),l.a.render(r.a.createElement(o.a,{store:ee},r.a.createElement(B,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.bca4c9e6.chunk.js.map