(function(e){function t(t){for(var s,i,l=t[0],o=t[1],c=t[2],d=0,f=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,l=1;l<n.length;l++){var o=n[l];0!==a[o]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},a={app:0},r=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("v-container",[n("v-card",{staticClass:"pa-5"},[e.hasError?n("p",{staticClass:"display-1 error--text"},[e._v("Something went wrong! Please check the logs in devtool.")]):e._e(),n("v-form",[n("h2",[e._v("Name")]),n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"店名","hide-details":"",disabled:e.disabled},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1),n("h2",[e._v("Location")]),n("v-row",[n("v-col",{attrs:{cols:"8"}},[n("v-text-field",{attrs:{label:"地址","hide-details":"",disabled:e.disabled},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-text-field",{attrs:{label:"經度",type:"number","hide-details":"",disabled:e.disabled},model:{value:e.lng,callback:function(t){e.lng=t},expression:"lng"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-text-field",{attrs:{label:"緯度",type:"number","hide-details":"",disabled:e.disabled},model:{value:e.lat,callback:function(t){e.lat=t},expression:"lat"}})],1)],1),n("h2",[e._v("Images")]),n("v-row",e._l(e.images,(function(t,s){return n("v-col",{key:"img-column-"+s,attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"圖片 "+(s+1)+" 連結","hide-details":"",disabled:e.disabled},model:{value:t.url,callback:function(n){e.$set(t,"url",n)},expression:"image.url"}})],1)})),1),n("h2",[e._v("Business Hours")]),n("v-row",e._l(e.businessHours,(function(t,s){return n("v-col",{key:"bns-column-"+s,attrs:{cols:"3"}},[n("v-card",{staticClass:"pa-3"},[n("v-card-title",[e._v(e._s("星期"+["一","二","三","四","五","六","日"][s]))]),n("v-card-text",[n("v-switch",{attrs:{label:"休息",disabled:e.disabled},model:{value:t.off,callback:function(n){e.$set(t,"off",n)},expression:"businessHour.off"}}),n("v-text-field",{attrs:{label:"開店時間",type:"number","hide-details":"",disabled:e.disabled},model:{value:t.begin,callback:function(n){e.$set(t,"begin",n)},expression:"businessHour.begin"}}),n("v-text-field",{attrs:{label:"關店時間",type:"number","hide-details":"",disabled:e.disabled},model:{value:t.end,callback:function(n){e.$set(t,"end",n)},expression:"businessHour.end"}})],1)],1)],1)})),1),n("h2",[e._v("Courses")]),n("v-row",e._l(e.courses,(function(t,s){return n("v-col",{key:"course-column-"+s,attrs:{cols:"3"}},[n("v-card",{staticClass:"pa-5"},[n("v-text-field",{attrs:{label:"餐點名","hide-details":"",disabled:e.disabled},model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"course.name"}}),n("v-switch",{attrs:{label:"是拉麵",disabled:e.disabled},model:{value:t.isRamen,callback:function(n){e.$set(t,"isRamen",n)},expression:"course.isRamen"}}),n("v-text-field",{attrs:{label:"餐點價格",type:"number","hide-details":"",disabled:e.disabled},model:{value:t.price,callback:function(n){e.$set(t,"price",n)},expression:"course.price"}})],1)],1)})),1),n("h2",[e._v("Tags")]),n("v-row",e._l(e.tags,(function(t,s){return n("v-col",{key:"tag-column-"+s,attrs:{cols:"3"}},[n("v-card",{staticClass:"pa-5"},[n("v-text-field",{attrs:{label:"標籤","hide-details":"",disabled:e.disabled},model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"tag.name"}})],1)],1)})),1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"success",disabled:e.disabled,loading:e.disabled},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1)],1)},r=[],i=(n("99af"),n("cb29"),n("4de4"),n("d81d"),n("b0c0"),n("498a"),n("96cf"),n("1da1")),l=n("2909"),o=n("5530"),c=n("bc3a"),u=n.n(c),d={name:"App",data:function(){return{disabled:!1,hasError:!1,name:"",address:"",lng:0,lat:0,images:[{url:""}],businessHours:new Array(7).fill((function(){return{off:!1,begin:8,end:20}})).map((function(e){return e()})),courses:[{name:"",isRamen:!1,price:0}],tags:[{name:""}]}},computed:{_courses:function(){return this.courses.filter((function(e){return!!e.name.trim()})).map((function(e){var t=Object(o["a"])({},e);return t.price=+t.price,t}))},_businessHours:function(){return this.businessHours.map((function(e){var t=Object(o["a"])({},e);return t.begin=+t.begin,t.end=+t.end,t}))},imagesUrl:function(){return this.images.filter((function(e){return!!e.url.trim()})).map((function(e){return e.url.trim()}))},_tags:function(){return this.tags.filter((function(e){return!!e.name.trim()})).map((function(e){return e.name.trim()}))},formdata:function(){return{name:this.name,location:{address:this.address,lng:+this.lng,lat:+this.lat},images:this.imagesUrl,businessHours:this._businessHours,courses:this._courses,tags:this._tags}}},watch:{"imagesUrl.length":function(){this.images=[].concat(Object(l["a"])(this.imagesUrl.map((function(e){return{url:e}}))),[{url:""}])},"_courses.length":function(){this.courses=[].concat(Object(l["a"])(this._courses),[{name:"",isRamen:!1,price:0}])},"_tags.length":function(){this.tags=[].concat(Object(l["a"])(this._tags.map((function(e){return{name:e}}))),[{name:""}])}},methods:{reset:function(){this.disabled=!1,this.hasError=!1,this.name="",this.address="",this.lng=0,this.lat=0,this.images=[{url:""}],this.businessHours=new Array(7).fill((function(){return{off:!1,begin:8,end:20}})).map((function(e){return e()})),this.courses=[{name:"",isRamen:!1,price:0}],this.tags=[{name:""}]},submit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.disabled=!0,e.hasError=!1,t.prev=2,t.next=5,u.a.post("https://api.virtualquantum.tw/stores",e.formdata);case 5:e.reset(),t.next=13;break;case 8:t.prev=8,t.t0=t["catch"](2),console.error(t.t0),e.hasError=!0,e.disabled=!1;case 13:case"end":return t.stop()}}),t,null,[[2,8]])})))()}}},f=d,b=n("2877"),m=Object(b["a"])(f,a,r,!1,null,null,null),p=m.exports,v=n("ce5b"),h=n.n(v),g=(n("bf40"),n("aa47")),x=n.n(g);s["default"].use(h.a);var _=new h.a({lang:{locales:{zhHant:x.a},current:"zh-Hant"}});s["default"].config.productionTip=!1,new s["default"]({vuetify:_,render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=app.550bf2bf.js.map