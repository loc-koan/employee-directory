(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{17:function(e,a,t){e.exports=t(45)},22:function(e,a,t){},23:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),c=t(2),i=t(3),o=t(5),m=t(4);var d=function(e){var a=e.users;return r.a.createElement("tbody",null,void 0!==a[0]&&void 0!==a[0].name?a.map((function(e){var a=e.login,t=e.name,n=e.picture,l=e.phone,s=e.email,c=e.dob;return r.a.createElement("tr",{key:a.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"},r.a.createElement("img",{src:n.medium,alt:"profile image for "+t.first+" "+t.last,className:"img-responsive"})),r.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},t.first," ",t.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"},l),r.a.createElement("td",{"data-th":"Email",className:"align-middle"},r.a.createElement("a",{href:"mailto:"+s,target:"__blank"},s)),r.a.createElement("td",{"data-th":"DOB",className:"align-middle"},function(e){var a=e.split("-"),t=a[0];return a[1]+"-"+a[2].split("T")[0]+"-"+t}(c.date)))})):r.a.createElement(r.a.Fragment,null))};var u=function(e){var a=e.headings,t=e.users,n=e.handleSort;return r.a.createElement("div",{className:"mt-5"},r.a.createElement("table",{id:"table",className:"table table-striped table-hover table-condensed"},r.a.createElement("thead",null,r.a.createElement("tr",null,a.map((function(e){var a=e.name,t=e.width;return r.a.createElement("th",{className:"col",key:a,style:{width:t},onClick:function(){n(a.toLowerCase())}},a,r.a.createElement("span",{className:"pointer"}))})))),r.a.createElement(d,{users:t})))};t(22);var h=function(e){var a=e.handleSearchChange;return r.a.createElement("div",{className:"container row"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group col-xl-12"},r.a.createElement("input",{onChange:function(e){return a(e)},type:"search",className:"form-control",placeholder:"Name Search",id:"search",size:"50"}))))};t(23);var f=function(e){var a=e.handleSearchChange;return r.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light"},r.a.createElement("div",{className:"navbar-collapse row",id:"navbarNav"},r.a.createElement(h,{handleSearchChange:a})))},v=t(16),E=t.n(v),p=function(e){return E.a.get("https://randomuser.me/api/?results=10&nat=us")},g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={users:[{}],order:"descend",filteredUsers:[{}]},e.headings=[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"20%"}],e.handleSort=function(a){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var t=e.state.filteredUsers.sort((function(t,n){return"ascend"===e.state.order?void 0===t[a]?1:void 0===n[a]?-1:"name"===a?t[a].first.localeCompare(n[a].first):t[a]-n[a]:void 0===t[a]?1:void 0===n[a]?-1:"name"===a?n[a].first.localeCompare(t[a].first):n[a]-t[a]}));e.setState({filteredUsers:t})},e.handleSearchChange=function(a){console.log(a.target.value);var t=a.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(t.toLowerCase())}));e.setState({filteredUsers:n})},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p().then((function(a){console.log("Result Data: "+JSON.stringify(a)),e.setState({users:a.data.results,filteredUsers:a.data.results})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{handleSearchChange:this.handleSearchChange}),r.a.createElement("div",{className:"data-area"},r.a.createElement(u,{headings:this.headings,users:this.state.filteredUsers,handleSort:this.handleSort})))}}]),t}(n.Component),b=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null))}}]),t}(n.Component);t(41);var N=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};t(42);var y=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"titleBackground"},r.a.createElement("h1",{className:"title"},"Employee Directory"),r.a.createElement("p",{className:"instructions"},"Click on name to filter alphabetically or use the search box to narrow your results")))};var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null,r.a.createElement(y,null),r.a.createElement(b,null)))};t(43),t(44);s.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a064ce68.chunk.js.map