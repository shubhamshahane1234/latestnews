(this.webpackJsonprjspractice=this.webpackJsonprjspractice||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},44:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(21),i=c.n(s),a=(c(34),c(35),c.p+"static/media/logo.11082828.png"),l=c(3),o=c(0);var j=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("nav",{children:Object(o.jsxs)("div",{class:"nav-wrapper",style:{backgroundColor:"#27a69a"},children:[Object(o.jsx)("a",{href:"#!",class:"brand-logo center",children:Object(o.jsx)("img",{style:{marginLeft:"15px",marginTop:"5px"},width:"50px",height:"50px",src:a})}),Object(o.jsx)("a",{href:"#","data-target":"slide-out",class:"sidenav-trigger",children:Object(o.jsxs)("i",{class:"material-icons",children:[Object(o.jsx)("div",{style:{width:"35px",height:"5px",backgroundColor:"black",marginTop:"20px"}}),Object(o.jsx)("div",{style:{width:"35px",height:"5px",backgroundColor:"black",margin:"6px 0"}}),Object(o.jsx)("div",{style:{width:"35px",height:"5px",backgroundColor:"black",margin:"6px 0"}})]})}),Object(o.jsxs)("ul",{class:"right hide-on-med-and-down",children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/home",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"badges.html",Services:!0})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/contactus",children:"ContactUs"})})]})]})}),Object(o.jsxs)("ul",{id:"slide-out",class:"sidenav",children:[Object(o.jsx)("li",{children:Object(o.jsxs)("div",{class:"user-view",children:[Object(o.jsx)("div",{class:"background",style:{backgroundColor:"#27a69a"}}),Object(o.jsx)("a",{href:"#user",children:Object(o.jsx)("img",{class:"circle",style:{marginLeft:"15px",marginTop:"5px"},width:"50px",height:"50px",src:a})}),Object(o.jsx)("a",{href:"#name",children:Object(o.jsx)("span",{class:"white-text name",children:"Latest News"})})]})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"badges.html",children:"Services"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/contactus",children:"ContactUs"})})]})]})},d=c(13);c(23);var b=c(12),h=c.n(b);var x=c(19),u=c.n(x),p=c(24);c(44);var O=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],s=function(){var e=Object(p.a)(u.a.mark((function e(){var t,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n=c.articles,r(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return s()})),Object(o.jsx)(o.Fragment,{children:c.map((function(e){return Object(o.jsx)(h.a,{children:Object(o.jsxs)("div",{id:"boundary",className:"card",style:{margin:"30px",display:"inline-grid",width:"300px"},children:[Object(o.jsx)("img",{id:"inew",style:{width:"300px",height:"250px"},src:e.urlToImage,className:"card-img-top",alt:""}),Object(o.jsxs)("div",{id:"desc",className:"card-body",style:{height:"auto"},children:[Object(o.jsx)("h5",{style:{textAlign:"justify"},className:"card-title",children:e.title}),Object(o.jsx)("a",{href:e.url,className:"btn btn-info",children:"Read More"})]})]})})}))})},m=c(25),g=c(26),f=c(29),v=c(28),y=c(27),w=c.n(y),F=function(e){Object(f.a)(c,e);var t=Object(v.a)(c);function c(){return Object(m.a)(this,c),t.apply(this,arguments)}return Object(g.a)(c,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)(w.a,{children:Object(o.jsx)("h2",{id:"bnews",style:{marginLeft:"35%",marginTop:"100px",fontFamily:"'Playfair Display",fontSize:"5vw"},children:"  Daily Latest News "})})})}}]),c}(r.a.Component),k=c(9),S=c.n(k);var C=function(){return Object(o.jsx)("div",{style:{color:"#B29E3F",fontFamily:"monospace",fontSize:"15px",backgroundColor:"black"},children:Object(o.jsx)(S.a,{onInit:function(e){e.typeString("welcome to my website").start()}})})};var I=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{style:{fontSize:"5vw"},children:"About this project"}),Object(o.jsx)("p",{style:{textAlign:"justify",margin:"200px 50px",marginBottom:"311px"},children:"In this project, i fetch the news api and diplayed it on the website through cards.I used props and useState() hooks. I have also used bootstrap and materialize ,which give attractive user interface. furthermore, I have given a typing effect to the heading. For routing i have used react router."})]})};var N=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{style:{backgroundColor:"black",color:"white",textAlign:"center",position:"relative",width:"100%",bottom:"0px"},children:" Footer"})})};var E=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{style:{fontSize:"6vw"},children:"Contactus"}),Object(o.jsxs)("form",{class:"p-5 ",style:{maxWidth:"500px",margin:"50px",marginBottom:"185px"},children:[Object(o.jsxs)("div",{class:"mb-3 w-50",children:[Object(o.jsx)("div",{children:"NAME :"}),Object(o.jsx)("input",{type:"email",placeholder:"name here",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(o.jsxs)("div",{class:"mb-3 w-50",children:[Object(o.jsx)("div",{children:"SURNAME :"}),Object(o.jsx)("input",{type:"text",placeholder:"surname here",class:"form-control",id:"exampleInputPassword1"})]}),Object(o.jsxs)("div",{class:"mb-3 w-50",children:[Object(o.jsx)("div",{children:"PHONE NUMBER :"}),Object(o.jsx)("input",{type:"text",placeholder:"phone number here",class:"form-control",id:"exampleInputPassword1"})]}),Object(o.jsxs)("div",{class:"mb-3 w-50",children:[Object(o.jsx)("div",{children:"COMMENT HERE :"}),Object(o.jsx)("textarea",{class:"form-control",placeholder:"comment here",id:"exampleFormControlTextarea1",rows:"3"})]}),Object(o.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})]})};var M=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{style:{maxWidth:"100%",backgroundImage:"url(".concat("https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3BhcGVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh",display:"flow-root"},children:Object(o.jsxs)("h1",{style:{fontFamily:"Karla",fontSize:"5vw",marginLeft:"70px",position:"relative",top:"100px"},children:["Hello, ",Object(o.jsx)("div",{style:{fontFamily:"Karla",fontSize:"5vw",color:"black"},children:Object(o.jsx)(S.a,{options:{strings:["i am a web developer","i am a frontend developer","i am a backend developer"],autoStart:!0,loop:!0,cursor:" "}})})]})})})};var A=c(2);var H=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(j,{}),Object(o.jsxs)(A.c,{children:[Object(o.jsx)(A.a,{exact:!0,path:"/about",render:function(){return Object(o.jsxs)(o.Fragment,{children:["     ",Object(o.jsx)(I,{}),"    "]})}}),Object(o.jsx)(A.a,{exact:!0,path:"/home",render:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(C,{}),Object(o.jsx)(M,{}),Object(o.jsx)(F,{}),Object(o.jsx)(O,{})]})}}),Object(o.jsx)(A.a,{exact:!0,path:"/contactus",render:function(){return Object(o.jsxs)(o.Fragment,{children:["   ",Object(o.jsx)(E,{}),"   "]})}})]}),Object(o.jsx)(N,{})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(H,{})}),document.getElementById("root")),T()}},[[46,1,2]]]);
//# sourceMappingURL=main.423e2c97.chunk.js.map