"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[342],{3342:function(n,e,r){r.r(e),r.d(e,{default:function(){return I}});var t,a,o,i,d,s=r(168),l=r(7691),c=l.ZP.div(t||(t=(0,s.Z)(["\n  border-radius: 10px;\n  max-width: 70%;\n  font-size: 16px;\n  color: #010101;\n  margin: 50px auto;\n  padding: 50px 20px;\n  h1 {\n    font-size: 28px;\n  }\n  /* display: block;\n  border-radius: 10px;\n  max-width: 500px;\n  font-size: 24px;\n  color: #010101;\n  background-color: lightcoral;\n  margin: 50px auto;\n  padding: 15px; */\n"]))),u=r(5861),p=r(885),x=r(4687),f=r.n(x),b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},h=l.ZP.form(a||(a=(0,s.Z)(["\n  background-color: #68e4c3;\n  display: flex;\n  gap: 20px;\n  align-items: flex-end;\n  flex-basis: 33%;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  border: 1px dashed #31615a;\n  margin-bottom: 20px;\n  border-radius: 4px;\n  padding: 20px;\n  label {\n    display: block;\n    margin-bottom: 8px;\n  }\n  input {\n    display: block;\n    height: 25px;\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid #31615a;\n    outline: none;\n    &:focus {\n      border: 1px solid #9a46aa;\n    }\n  }\n  button {\n    display: block;\n    padding: 10px;\n    border-radius: 5px;\n    border: 1px solid #31615a;\n    background-color: #31615a;\n    color: #ffffff;\n    cursor: pointer;\n    transition: ease-in 200ms;\n    :hover {\n      border: 1px solid #9a46aa;\n      background-color: #b97ac6;\n    }\n  }\n"]))),m=r(8998),g=r(184),v=function(){var n=b(),e=b(),r=(0,m.Qd)().data,t=(0,m.FY)(),a=(0,p.Z)(t,1)[0],o=function(){var n=(0,u.Z)(f().mark((function n(e){var t,o,i,d;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t=e.target,o=t.elements,i=o.name,d=o.phone,n.next=5,r.some((function(n){return n.name===i.value}));case 5:if(!n.sent){n.next=10;break}alert("Contact ".concat(i," has already added")),n.next=12;break;case 10:return n.next=12,a({name:i.value,phone:d.value});case 12:t.reset();case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,g.jsxs)(h,{onSubmit:o,children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{htmlFor:n,children:"Name"}),(0,g.jsx)("input",{id:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{htmlFor:e,children:"Number"}),(0,g.jsx)("input",{id:e,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,g.jsx)("button",{type:"submit",children:"Add contact"})]})},j=l.ZP.div(o||(o=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  input {\n    display: block;\n    height: 28px;\n    padding: 4px;\n    border-radius: 4px;\n    border: 1px solid #376761;\n    outline: none;\n    &:focus {\n      border: 1px solid #db4bff;\n    }\n  }\n"]))),k=r(5048),y=r(8268),w=function(n){return n.filter},Z=function(){var n=(0,k.I0)();return{filter:(0,k.v9)(w),setFilter:function(e){return n((0,y.Tv)(e))}}},C=b(),F=function(){var n=Z(),e=n.filter,r=n.setFilter;return(0,g.jsxs)(j,{children:[(0,g.jsx)("label",{htmlFor:C,children:"Find contacts by name"}),(0,g.jsx)("input",{onChange:function(n){r(n.target.value)},id:C,type:"text",value:e,name:"filter"})]})},P=l.ZP.li(i||(i=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px 0;\n  padding: 12px 20px;\n  background-color: #68e4c382;\n  border: 1px dashed #59c6a9;\n  border-radius: 4px;\n  transition: ease-in 200ms;\n  button {\n    display: block;\n    padding: 8px 24px;\n    border-radius: 4px;\n    border: 1px solid #31615a;\n    background-color: #31615a;\n    color: #ffffff;\n    cursor: pointer;\n    transition: ease-in 200ms;\n    :hover {\n      border: 1px solid #9a46aa;\n      background-color: #b97ac6;\n    }\n  }\n"]))),z=function(n){var e=n.contact,r=e.name,t=e.phone,a=e.id,o=(0,m.b$)(),i=(0,p.Z)(o,2),d=i[0],s=i[1].isLoading;return(0,g.jsxs)(P,{children:[(0,g.jsxs)("p",{children:[r," : ",t]}),(0,g.jsx)("button",{disabled:s,onClick:function(){return d(a)},children:s?"...Deleting":"Delete"})]})},A=r(1413),L=r(873),_=function(){var n=(0,k.v9)((function(n){return n.filter.toLowerCase()})),e=(0,L.P1)([function(n){return n.data},function(n,e){return e}],(function(n,e){var r;return null!==(r=null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(e)})))&&void 0!==r?r:[]}));return(0,m.Qd)(void 0,{selectFromResult:function(r){return(0,A.Z)((0,A.Z)({},r),{},{filteredItems:e(r,n)})}})},S=l.ZP.ul(d||(d=(0,s.Z)(["\n  padding: 0;\n  margin: 0;\n"]))),D=function(){var n=_(),e=n.filteredItems,r=n.error,t=n.isLoading;return(0,g.jsxs)(g.Fragment,{children:[r&&(0,g.jsx)("p",{children:"Oops! Something went wrong! Refresh page and try again, please."}),t?(0,g.jsx)("b",{children:"Loading..."}):(0,g.jsx)(S,{children:e.map((function(n){return(0,g.jsx)(z,{contact:n},n.id)}))})]})};function I(){return(0,g.jsxs)(c,{children:[(0,g.jsx)("h1",{children:"Phone book"}),(0,g.jsx)(v,{}),(0,g.jsx)("h2",{children:"Contacts"}),(0,g.jsx)(F,{}),(0,g.jsx)(D,{})]})}}}]);
//# sourceMappingURL=342.ed93b110.chunk.js.map