(this["webpackJsonpreact-ts-ql"]=this["webpackJsonpreact-ts-ql"]||[]).push([[0],{336:function(e){e.exports=JSON.parse('{"streetAddress":"test adress","phones":[],"parents":[],"gender":"male"}')},337:function(e){e.exports=JSON.parse('{"type":"object","title":"User info","properties":{"streetAddress":{"type":"string","title":"StreetA0ddress"},"city":{"type":"string","title":"City","maxLength":10},"state":{"type":"string","title":"State"},"gender":{"type":"string","title":"Gender","enum":["male","female","else"]},"phones":{"type":"array","title":"Phones","maxItems":3,"minItems":1,"items":{"title":"Phone","type":"string","minLength":1,"maxLength":255}},"parents":{"type":"array","title":"Parents","minItems":0,"maxItems":2,"items":{"type":"object","properties":{"relation":{"type":"string","title":"relation","enum":["mother","father"]},"age":{"title":"age","type":"integer"},"name":{"title":"name","type":"string"},"secondName":{"title":"secondName","type":"string"},"grandFather":{"title":"GrandFather","type":"object","properties":{"name":{"title":"name","type":"string"},"age":{"title":"age","type":"integer"},"secondName":{"title":"secondName","type":"string"},"retired":{"title":"retired","type":"boolean"}}},"grandMother":{"title":"GrandMother","type":"object","properties":{"name":{"title":"name","type":"string"},"age":{"title":"age","type":"integer"},"secondName":{"title":"secondName","type":"string"},"retired":{"title":"retired","type":"boolean"}}}}}}},"required":["streetAddress","city","state"]}')},338:function(e){e.exports=JSON.parse('[{"metrics":[{"metricName 1":1}],"time":"2022-10-26T14:23:04.952Z","colorScheme":["white","#ru590w"],"position":"1","name":"chart 1","type":"Linear","i":"a","x":0,"y":0,"w":1,"h":2,"static":true},{"metrics":[{"metricName 2":2}],"time":"2022-10-26T14:23:04.952Z","colorScheme":["white","#ru590w"],"position":"2","name":"chart 2","type":"Area","i":"b","x":1,"y":0,"w":3,"h":2,"minW":2,"maxW":4},{"metrics":[{"metricName 3":3}],"time":"2022-10-26T14:23:04.952Z","colorScheme":["white","#ru590w"],"position":"3","name":"chart 3","type":"Bar","i":"c","x":4,"y":0,"w":1,"h":2}]')},465:function(e,t){},467:function(e,t){},588:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),a=r(67),s=r.n(a),c=r(240),o=r(34),m=r(707),u=r(10),l=r(324),d=r.n(l),p=r(336),h=r(243),j=r(3),b=r(20),g=r(58),O={"ui:page":{props:{"ui:schemaErrors":!0}}},f=function e(t){return Object.assign.apply(Object,[{},O].concat(Object(b.a)(Object(g.map)(t,(function(t,r){switch(t.type){case"object":return e(t.properties);case"array":var n,i=Object(j.a)({},r,{items:{}});return Object(g.set)(i,"".concat(r,".items"),"object"===(null===(n=t.items)||void 0===n?void 0:n.type)?e(t.items.properties):t.items),Object(g.isNumber)(t.maxItems)&&Object(g.set)(i,"".concat(r,".ui:validations.maxItems"),{value:t.maxItems,message:"error"}),Object(g.isNumber)(t.minItems)&&Object(g.set)(i,"".concat(r,".ui:validations.minItems"),{value:t.minItems,message:"error"}),i;case"string":var a;return null!==(a=t.enum)&&void 0!==a&&a.length?Object(j.a)({},r,{"ui:widget":"radio","ui:options":{row:!0}}):Object(j.a)({},r,{"ui:widget":"input"});case"integer":return Object(j.a)({},r,{"ui:widget":"updown"});default:return{}}})))))},y=function(e){return Object(h.a)(Object(h.a)({},f(e.properties)),{},{required:e.required})},x=r(2),v=i.a.memo((function(e){var t=e.schema,r=i.a.useState(p),n=Object(u.a)(r,2),a=n[0],s=n[1],c=y(t);console.log(c);return Object(x.jsx)(d.a,{submitOnEnter:!0,activityIndicatorEnabled:!0,schema:t,uiSchema:c,formData:a,onChange:function(e){var t=e.formData;console.log(t),s(t)},onSubmit:function(e){!function(e){var t=Object(g.some)(e.uiSchema.required,(function(t){return Object(g.has)(e.formData,t)})),r=Object(g.some)(e.formData,(function(t,r){var n,i,a=null===(n=e.uiSchema)||void 0===n||null===(i=n[r])||void 0===i?void 0:i["ui:validations"];if(a){if(a.maxItems&&Object(g.size)(t)>a.maxItems.value)return!0;if(a.minItems&&Object(g.size)(t)<a.minItems.value)return!0;if(a.maxLength&&Object(g.size)(t)>a.maxLength.value)return!0;if(a.minLength&&Object(g.size)(t)<a.minLength.value)return!0}}));return t&&!r}(e)?alert("not ok"):alert("it`s okay")}})})),w=r(337),I=function(){return Object(x.jsx)(m.a,{children:Object(x.jsx)(v,{schema:w})})},S=r(338),N=i.a.memo((function(){return Object(x.jsx)("pre",{children:JSON.stringify(S,null,2)})})),L=r(705),F=r(706),k=function(){return Object(x.jsx)("div",{role:"presentation",children:Object(x.jsxs)(L.a,{"aria-label":"breadcrumb",children:[Object(x.jsx)(F.a,{underline:"hover",color:"inherit",href:"/test-work-for-internet-of-things/#",children:"Form"}),Object(x.jsx)(F.a,{underline:"hover",color:"inherit",href:"/test-work-for-internet-of-things/#/dashboard",children:"Dashboard"})]})})},q=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k,{}),Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/#",children:Object(x.jsx)(I,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/dashboard",children:Object(x.jsx)(N,{})})]})]})},D=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,713)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(c.a,{children:Object(x.jsx)(q,{})})}),document.getElementById("root")),D()}},[[588,1,2]]]);
//# sourceMappingURL=main.aa90af8f.chunk.js.map