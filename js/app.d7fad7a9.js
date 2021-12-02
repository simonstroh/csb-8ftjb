(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],h=0,f=[];h<i.length;h++)s=i[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Caribbean Courtyard Villa")]),n("Lighting"),n("Weather")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Lighting")]),t.outlets[0]?n("button",{ref:"B1",staticClass:"on",on:{click:function(e){return t.lightsOff(0)}}},[t._v(" LIGHT 1 ")]):n("button",{ref:"B1",staticClass:"off",on:{click:function(e){return t.lightsOn(0)}}},[t._v(" LIGHT 1 ")]),t.outlets[1]?n("button",{ref:"B2",staticClass:"on",on:{click:function(e){return t.lightsOff(1)}}},[t._v(" LIGHT 2 ")]):n("button",{ref:"B2",staticClass:"off",on:{click:function(e){return t.lightsOn(1)}}},[t._v(" LIGHT 2 ")]),t.outlets[2]?n("button",{ref:"B3",staticClass:"on",on:{click:function(e){return t.lightsOff(2)}}},[t._v(" LIGHT 3 ")]):n("button",{ref:"B3",staticClass:"off",on:{click:function(e){return t.lightsOn(2)}}},[t._v(" LIGHT 3 ")])])},i=[],l={name:"Lighting",getHoursCondition:String,classname:"on",props:{},data(){return{hours:(new Date).getHours(),getHoursCondition:"",lights:!1,classname:"on",outlets:{},text:"LIGHT 1"}},methods:{lightsOn(t){this.$refs["B"+(t+1)].innerText="...",this.$forceUpdate();let e=`https://192.168.1.100/restapi/relay/outlets/${t}/state/`,n="YWRtaW46MTIzNA==",a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization","Basic "+n),fetch(e,{method:"PUT",headers:a,body:JSON.stringify(!0)}).then(t=>t.text()).then(()=>this.outlets[t]=!0).then(()=>this.$forceUpdate()).then(()=>this.$refs["B"+(t+1)].innerText="LIGHT B"+(t+1)).catch(t=>console.log(t))},lightsOff(t){this.$refs["B"+(t+1)].innerText="...";let e=`https://192.168.1.100/restapi/relay/outlets/${t}/state/`,n="YWRtaW46MTIzNA==",a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization","Basic "+n),fetch(e,{method:"PUT",headers:a,body:JSON.stringify(!1)}).then(t=>t.text()).then(()=>this.outlets[t]=!1).then(()=>this.$forceUpdate()).then(()=>this.$refs["B"+(t+1)].innerText="LIGHT B"+(t+1)).catch(t=>console.log(t))},lightsAll:function(){let t="https://192.168.1.100/restapi/relay/outlets/all;/state/",e="YWRtaW46MTIzNA==",n=new Headers;n.append("Content-Type","application/json"),n.append("Authorization","Basic "+e),fetch(t,{method:"GET",headers:n}).then(t=>t.json()).then(t=>this.outlets=t).then(t=>console.log(t)).catch(t=>console.log(t))}},mounted(){this.lightsAll()}},c=l,u=(n("c05a"),n("2877")),h=Object(u["a"])(c,s,i,!1,null,null,null),f=h.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main",[n("h2",[t._v("Weather")]),"undefined"!=typeof t.weather.main?n("div",{staticClass:"weather-wrap"},[n("div",{staticClass:"location-box"},[n("div",{staticClass:"location"},[t._v(" "+t._s(t.weather.name)+", "+t._s(t.weather.sys.country)+" ")]),n("div",{staticClass:"date"},[t._v(t._s(t.dateBuilder()))])]),n("div",{staticClass:"weather-box"},[n("div",{staticClass:"temp"},[t._v(t._s(Math.round(t.weather.main.temp))+"°c")]),n("div",{staticClass:"weather"},[t._v(t._s(t.weather.weather[0].main))])])]):t._e()])])},p=[],g={name:"Weather",getHoursCondition:String,lights:!1,classname:"on",props:{},data(){return{api_key:"e086d67ffe83c057839c3dadf9f24070",weather:{}}},methods:{async getWeather(t){try{let e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&units=metric&APPID=${this.api_key}`);this.weather=await e.json(),this.weather.weather[0].icon.includes("n")?document.body.className="night":document.body.className="day",console.log(this.weather)}catch(e){console.log(e)}},dateBuilder(){let t=new Date,e=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=n[t.getDay()],r=t.getDate(),o=e[t.getMonth()],s=t.getFullYear();return`${a} ${r} ${o} ${s}`}},mounted(){this.getWeather("Playa Chiquita, CR")}},y=g,v=(n("6ded"),Object(u["a"])(y,d,p,!1,null,null,null)),b=v.exports,m={name:"App",components:{Lighting:f,Weather:b}},w=m,_=(n("034f"),Object(u["a"])(w,r,o,!1,null,null,null)),T=_.exports;a["a"].config.productionTip=!1,new a["a"]({render:t=>t(T)}).$mount("#app")},"6ded":function(t,e,n){"use strict";n("adf1")},"85ec":function(t,e,n){},a0df:function(t,e,n){},adf1:function(t,e,n){},c05a:function(t,e,n){"use strict";n("a0df")}});
//# sourceMappingURL=app.d7fad7a9.js.map