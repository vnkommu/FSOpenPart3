(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=t(2),l=function(e){var n=e.value,t=e.onChange,a=e.persons;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:n,onChange:t}),a.map((function(e){return r.a.createElement("p",{key:e.name}," ",e.name.toLowerCase().includes(n.toLowerCase())&&""!==n?"".concat(e.name," ").concat(e.number):"")})))},i=function(e){var n=e.addPerson,t=e.newName,a=e.newNum,o=e.handleNameChange,u=e.handleNumChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:t,onChange:o})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:a,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"Submit"},"add"))))},m=function(e){var n=e.persons,t=e.deletePerson;return r.a.createElement(r.a.Fragment,null,n.map((function(e){return r.a.createElement("p",{key:e.name},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return t(e.id)}}," delete "))})))},d=t(3),f=t.n(d),s="http://localhost:3001/api/persons",h=function(){return f.a.get(s).then((function(e){return e.data}))},b=function(e){return f.a.post(s,e).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},g=function(e,n){return f.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){var n=e.msg;if(null===n)return null;return r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},v=function(e){var n=e.msg;if(null===n)return null;return r.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},w=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),d=Object(c.a)(u,2),f=d[0],s=d[1],w=Object(a.useState)(""),j=Object(c.a)(w,2),k=j[0],C=j[1],O=Object(a.useState)(""),S=Object(c.a)(O,2),y=S[0],N=S[1],P=Object(a.useState)(null),R=Object(c.a)(P,2),T=R[0],A=R[1],B=Object(a.useState)(null),F=Object(c.a)(B,2),z=F[0],D=F[1];Object(a.useEffect)((function(){h().then((function(e){o(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement("h2",null,"Search"),r.a.createElement(l,{value:y,onChange:function(e){return N(e.target.value)},persons:t}),r.a.createElement(E,{msg:T}),r.a.createElement(v,{msg:z}),r.a.createElement("h2",null,"Add New Person"),r.a.createElement(i,{addPerson:function(e){e.preventDefault();var n={name:f,number:k};if(t.some((function(e){return e.name===f}))){var a="".concat(f," is already included in the phonebook. Replace the old number with a new one?"),r=t.find((function(e){return e.name===f}));window.confirm(a)&&g(r.id,n).then((function(e){o(t.map((function(n){return n.id!==r.id?n:e}))),A("Changed the phone number of ".concat(f)),setTimeout((function(){A(null)}),5e3)})).catch((function(e){D("".concat(f," has already been removed from phonebook")),setTimeout((function(){D(null)}),5e3),o(t.filter((function(e){return e.name!==f})))})),s(""),C("")}else b(n).then((function(e){o(t.concat(e)),A("Added ".concat(f)),setTimeout((function(){A(null)}),5e3),s(""),C("")}))},newName:f,newNum:k,handleNameChange:function(e){return s(e.target.value)},handleNumChange:function(e){return C(e.target.value)}}),r.a.createElement("h2",null,"All Numbers"),r.a.createElement(m,{persons:t,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&p(e).then((function(e){o(t.filter((function(n){return n.id!==e.id}))),A("Removed ".concat(n.name," from phonebook")),setTimeout((function(){A(null)}),5e3)}))}}))};t(36);u.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.752a0983.chunk.js.map