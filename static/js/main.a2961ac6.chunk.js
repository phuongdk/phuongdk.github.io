(window["webpackJsonpphuongdk-portfolio"]=window["webpackJsonpphuongdk-portfolio"]||[]).push([[0],{41:function(e,a,t){e.exports=t(88)},49:function(e,a,t){},50:function(e,a,t){},88:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(36),c=t.n(r),i=(t(46),t(47),t(48),t(49),t(37)),o=t(2),m=t(98),s=t(7),u=t(11),p=(t(50),t(4)),d=t.n(p),g=t(38),E=t.n(g),v=t(89),h=t(9),b=t.n(h);var f=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),i=Object(o.a)(c,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){d.a.get("/api/information").then((function(e){r(e.data)}))}),[]),l.a.createElement("nav",{className:m?"mi-header is-visible":"mi-header"},l.a.createElement("button",{onClick:function(){u(!m)},className:"mi-header-toggler"},m?l.a.createElement(b.a,{name:"close"}):l.a.createElement(b.a,{name:"menu"})),l.a.createElement("div",{className:"mi-header-inner"},l.a.createElement("div",{className:"mi-header-image"},l.a.createElement(s.b,{to:"/"},l.a.createElement("img",{style:{position:"relative",top:"-10px"},src:t.brandImage,alt:"brandimage"}))),l.a.createElement("ul",{className:"mi-header-menu"},l.a.createElement("li",null,l.a.createElement(s.c,{exact:!0,to:"/"},l.a.createElement("span",null,"Home"))),l.a.createElement("li",null,l.a.createElement(s.c,{to:"/about"},l.a.createElement("span",null,"About"))),l.a.createElement("li",null,l.a.createElement(s.c,{to:"/resume"},l.a.createElement("span",null,"Resume"))),l.a.createElement("li",null,l.a.createElement(s.c,{to:"/hands-on-projects"},l.a.createElement("span",null,"Hands-on Projects"))),l.a.createElement("li",null,l.a.createElement(s.c,{to:"/university-projects"},l.a.createElement("span",null,"University Projects"))),l.a.createElement("li",null,l.a.createElement(s.c,{to:"/contact"},l.a.createElement("span",null,"Contact")))),l.a.createElement("p",{className:"mi-header-copyright"},"\xa9 ",(new Date).getFullYear()," ",l.a.createElement("b",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://phuongdk.github.io"},"by Phuongdk with ",l.a.createElement(v.a,null))))))};var k=function(e){return l.a.createElement("div",{className:"mi-bglines"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))};var y=function(e){return l.a.createElement("div",{className:"mi-wrapper"},l.a.createElement(k,null),l.a.createElement(f,null),e.children)};var N=function(e){var a={},t=Object(n.useState)(""),r=Object(o.a)(t,2),c=r[0],i=r[1],m=Object(n.useState)(a),s=Object(o.a)(m,2),u=s[0],p=s[1];return Object(n.useEffect)((function(){d.a.get("/api/information").then((function(e){i(e.data)}))}),[]),Object(n.useEffect)((function(){a=e.lightMode?{particles:{color:{value:"#037fff"},line_linked:{shadow:{enable:!0,color:"#037fff",blur:5}},number:{value:120,density:{enable:!0,value_area:2e3}},size:{value:5,random:!0}},interactivity:{events:{onhover:{enable:!0,mode:"bounce"},onclick:{enable:!0,mode:"repulse"}}}}:{particles:{color:{value:"#00e7ff"},line_linked:{shadow:{enable:!0,color:"#00e7ff",blur:5}},number:{value:120,density:{enable:!0,value_area:2e3}},size:{value:5,random:!0}},interactivity:{events:{onhover:{enable:!0,mode:"bounce"},onclick:{enable:!0,mode:"repulse"}}}},p(a)}),[e.lightMode]),l.a.createElement(y,null,l.a.createElement("div",{className:"mi-home-area mi-padding-section"},l.a.createElement(E.a,{className:"mi-home-particle",params:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-10 col-12"},l.a.createElement("div",{className:"mi-home-content"},l.a.createElement("h1",null,"Hi, I am"," ",l.a.createElement("span",{className:"color-theme"},c.name)),l.a.createElement("p",null,c.aboutHome)))))))},j=t(17),w=t.n(j);var O=function(e){return l.a.createElement("div",{className:"mi-sectiontitle"},l.a.createElement("h2",null,e.title),l.a.createElement("span",null,e.title))};var S=function(e){return l.a.createElement("div",{className:"mi-service"},l.a.createElement("span",{className:"mi-service-icon"},l.a.createElement(b.a,{name:e.content.icon})),l.a.createElement("h5",null,e.content.title),l.a.createElement("p",null,e.content.details))};var P=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=(a[0],a[1],Object(n.useState)("")),r=Object(o.a)(t,2),c=r[0],i=r[1],m=Object(n.useState)([]),s=Object(o.a)(m,2),u=s[0],p=s[1];return Object(n.useEffect)((function(){d.a.get("/api/information").then((function(e){i(e.data)})),d.a.get("/api/services").then((function(e){p(e.data)}))}),[]),l.a.createElement(y,null,l.a.createElement("div",{className:"mi-about-area mi-section mi-padding-top"},l.a.createElement("div",{className:"container"},l.a.createElement(O,{title:"About Me"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"mi-about-content"},l.a.createElement("h3",null,"My name is"," ",l.a.createElement("span",{className:"color-theme"},c.name_vi)),l.a.createElement("p",null,c.aboutContent),l.a.createElement("ul",null,c.name?l.a.createElement("li",null,l.a.createElement("b",null,"Full Name")," ",c.name_vi):null,c.dob?l.a.createElement("li",null,l.a.createElement("b",null,"Date of Birth")," ",c.dob):null,c.phone?l.a.createElement("li",null,l.a.createElement("b",null,"Phone")," ",c.phone):null,c.nationality?l.a.createElement("li",null,l.a.createElement("b",null,"Nationality")," ",c.nationality):null,c.language?l.a.createElement("li",null,l.a.createElement("b",null,"Languages")," ",c.language):null,c.email?l.a.createElement("li",null,l.a.createElement("b",null,"Email")," ",c.email):null,c.address?l.a.createElement("li",null,l.a.createElement("b",null,"Address")," ",c.address):null,c.freelanceStatus?l.a.createElement("li",null,l.a.createElement("b",null,"Freelance")," ",c.freelanceStatus):null,l.a.createElement("li",null,l.a.createElement("b",null,"Experience")," ",c.experience),l.a.createElement("li",null,l.a.createElement("b",null,"Hobbies")," ",c.hobby),l.a.createElement("li",null,l.a.createElement("b",null,"Personalities")," ",c.personality)),l.a.createElement("a",{href:c.cvfile,rel:"noopener noreferrer",target:"_blank",className:"mi-button"},"Inspect CV"),l.a.createElement("a",{style:{marginLeft:"40px"},href:c.cert1,rel:"noopener noreferrer",target:"_blank",className:"mi-button"},"Inspect IELTS CERTIFICATE")))))),l.a.createElement("div",{className:"mi-service-area mi-section mi-padding-top",style:{marginBottom:"40px"}},l.a.createElement("div",{className:"container"},l.a.createElement(O,{title:"Services"}),l.a.createElement("div",{className:"mi-service-wrapper"},l.a.createElement("div",{className:"row mt-30-reverse"},u.map((function(e){return l.a.createElement("div",{className:"col-lg-4 col-md-6 col-12 mt-30",key:e.title},l.a.createElement(S,{content:e}))})))))))},I=t(14),x=t.n(I);var D=function(e){return l.a.createElement("div",{className:"mi-smalltitle"},l.a.createElement("span",{className:"mi-smalltitle-icon"},l.a.createElement(b.a,{name:e.icon})),l.a.createElement("h4",null,e.title))};var C=function(e){var a=window.innerWidth;return l.a.createElement("div",{className:"mi-progress"},l.a.createElement("h6",{className:"mi-progress-title"},e.title),l.a.createElement("div",{className:"mi-progress-inner"},l.a.createElement("div",{className:"mi-progress-percentage"},e.level),l.a.createElement("div",{className:"mi-progress-container"},a&&a>767?l.a.createElement("span",{className:"mi-progress-active",style:e.isVisible?{width:"".concat(e.percentage,"%")}:{width:0}}):l.a.createElement("span",{className:"mi-progress-active",style:{width:"".concat(e.percentage,"%")}}))))},A=t(90),L=t(91);var M=function(e){var a=e.resumeData,t=a.year,r=a.position,c=a.graduation,i=a.university,m=a.company,s=a.companyLink,u=a.details,p=a.projects;console.log("props",e);var d=Object(n.useState)(!1),g=Object(o.a)(d,2),E=g[0],v=g[1];return l.a.createElement("div",{className:"mi-resume mt-30"},l.a.createElement("div",{className:"mi-resume-summary"},l.a.createElement("h6",{className:"mi-resume-year"},t)),l.a.createElement("div",{className:"mi-resume-details"},l.a.createElement("h5",null,r||c),l.a.createElement("a",{className:"mi-resume-company",href:s||"#",rel:"noopener noreferrer",target:"_blank"},m||i),l.a.createElement("p",null,u),Array.isArray(p)&&p.length>0&&l.a.createElement("div",{className:"project-involve-wrapper"},l.a.createElement("h5",{className:"title",onClick:function(){v(!E)}},l.a.createElement("span",null,E?l.a.createElement(A.a,null):l.a.createElement(L.a,null))," ","Projects involved"),l.a.createElement("div",{className:"mi-resume-wrapper mi-resume-project-wrapper ".concat(E?"show":"")},p.map((function(e,a){return l.a.createElement("div",{key:a,className:"mi-resume-summary mi-resume-project"},l.a.createElement("div",{className:"field name"},l.a.createElement("span",null,"Project about:"),l.a.createElement("span",null,e.name)),e.description&&l.a.createElement("div",{className:"field description"},l.a.createElement("span",null,"Description:"),l.a.createElement("span",null,e.description)),l.a.createElement("div",{className:"field technology"},l.a.createElement("span",null,"Technologies applied:"),l.a.createElement("span",null,e.technologies)),l.a.createElement("div",{className:"field responsibility"},l.a.createElement("span",null,"Responsibility:"),l.a.createElement("span",null,e.responsibility)))}))))))};var B=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),m=i[0],s=i[1],u=Object(n.useState)([]),p=Object(o.a)(u,2),g=p[0],E=p[1];return Object(n.useEffect)((function(){d.a.get("/api/skills").then((function(e){r(e.data)})),d.a.get("/api/experience").then((function(e){s(e.data.workingExperience),E(e.data.educationExperience)}))}),[]),l.a.createElement(y,null,l.a.createElement("div",{className:"mi-skills-area mi-section mi-padding-top"},l.a.createElement("div",{className:"container"},l.a.createElement(O,{title:"My Skills"}),l.a.createElement("div",{className:"mi-skills"},l.a.createElement("div",{className:"row mt-30-reverse"},t.map((function(e){return l.a.createElement(x.a,{once:!0,className:"col-lg-6 mt-30",key:e.title},l.a.createElement(C,{title:e.title,level:e.level,percentage:e.value}))})))))),l.a.createElement("div",{className:"mi-resume-area mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(O,{title:"Resume"}),l.a.createElement(D,{title:"Working Experience",icon:"briefcase"}),l.a.createElement("div",{className:"mi-resume-wrapper"},m.map((function(e){return l.a.createElement(M,{key:e.id,resumeData:e})}))),l.a.createElement("div",{className:"mt-30"}),l.a.createElement(D,{title:"Educational Qualifications",icon:"book"}),l.a.createElement("div",{className:"mi-resume-wrapper"},g.map((function(e){return l.a.createElement(M,{key:e.id,resumeData:e})}))))))};var _=function(e){var a=e.data,t=a.featuredImage,n=a.title,r=a.createMonth,c=a.createYear,i=a.link,o=a.link2,m=void 0===o?null:o,s=a.link3,u=void 0===s?null:s,p=a.download;return l.a.createElement("div",{className:"mi-blog"},l.a.createElement("div",{className:"mi-blog-image"},l.a.createElement("a",{download:p,href:i,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("img",{src:t,alt:n})),l.a.createElement("div",{className:"mi-blog-date"},l.a.createElement("span",{className:"month"},r.slice(0,3)),l.a.createElement("span",{className:"year"},c))),l.a.createElement("div",{className:"mi-blog-content"},l.a.createElement("h5",null,l.a.createElement("a",{download:p,href:i,rel:"noopener noreferrer",target:"_blank"},n)),m&&l.a.createElement("div",{style:{marginBottom:"5px"}},l.a.createElement("a",{href:m.link,rel:"noopener noreferrer",target:"_blank"},m.name)),u&&l.a.createElement("div",{style:{marginBottom:"5px"}},l.a.createElement("a",{href:u.link,rel:"noopener noreferrer",target:"_blank"},u.name))))};var G=function(e){var a=e.blogs;return l.a.createElement("div",{className:"row mt-30-reverse"},a.map((function(e){return l.a.createElement("div",{className:"col-lg-6 col-md-6 col-12 mt-30",key:e.id},l.a.createElement(_,{data:e}))})))};var F=function(e){for(var a=e.itemsPerPage,t=e.totalItems,n=e.paginate,r=e.currentPage,c=e.className,i=[],o=1;o<=Math.ceil(t/a);o++)i.push(o);return l.a.createElement("div",{className:c?"mi-pagination "+c:"mi-pagination"},l.a.createElement("ul",null,1===r?null:l.a.createElement("li",null,l.a.createElement("a",{onClick:function(e){return n(e,r-1)},href:"!#"},l.a.createElement(b.a,{name:"chevron-left"}))),i.map((function(e){return l.a.createElement("li",{key:e,className:r===e?"is-active":null},l.a.createElement("a",{onClick:function(a){return n(a,e)},href:"!#"},e))})),r===i[i.length-1]?null:l.a.createElement("li",null,l.a.createElement("a",{onClick:function(e){return n(e,r+1)},href:"!#"},l.a.createElement(b.a,{name:"chevron-right"})))))};var R=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(1),i=Object(o.a)(c,2),m=i[0],s=i[1],u=Object(n.useState)(6),p=Object(o.a)(u,1)[0];Object(n.useEffect)((function(){var e=!0;return d.a.get("/api/petProjects").then((function(a){e&&r(a.data)})),function(){return e=!1}}),[t]);var g=m*p,E=g-p,v=t.slice(E,g);return l.a.createElement(y,null,l.a.createElement("div",{className:"mi-about mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(O,{title:"Hands-on Projects"}),l.a.createElement(G,{blogs:v}),t.length>p?l.a.createElement(F,{className:"mt-50",itemsPerPage:p,totalItems:t.length,paginate:function(e,a){e.preventDefault(),s(a)},currentPage:m}):null)))},H=t(92),T=t(93);var U=function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],c=t[1],i=e.content,m=i.title,s=i.subtitle,u=i.imageUrl,p=i.largeImageUrl,d=i.url;return l.a.createElement("div",{className:e.isVisible?"mi-portfolio mi-portfolio-visible":"mi-portfolio"},l.a.createElement("div",{className:"mi-portfolio-image"},l.a.createElement("img",{src:u,alt:m}),l.a.createElement("ul",null,p?l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){c(!r)}},l.a.createElement(H.a,null))):null,d?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:d},l.a.createElement(T.a,null))):null)),d?l.a.createElement("h5",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:d},m)):l.a.createElement("h5",null,m),s?l.a.createElement("h6",null,s):null,p?l.a.createElement(w.a,{toggler:r,sources:p}):null)};var W=function(e){var a=e.uProjects;return l.a.createElement("div",{className:"row mt-30-reverse"},a.map((function(e){return l.a.createElement(x.a,{once:!0,offset:200,className:"col-lg-4 col-md-6 col-12 mt-30",key:e.id},l.a.createElement(U,{content:e}))})))};var V=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(1),i=Object(o.a)(c,2),m=i[0],s=i[1],u=Object(n.useState)(9),p=Object(o.a)(u,1)[0];Object(n.useEffect)((function(){var e=!0;return d.a.get("/api/uProjects").then((function(a){e&&r(a.data)})),function(){return e=!1}}),[t]);var g=m*p,E=g-p,v=t.slice(E,g);return l.a.createElement(y,null,l.a.createElement("div",{className:"mi-about mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(O,{title:"University Projects"}),l.a.createElement(W,{uProjects:v}),t.length>p?l.a.createElement(F,{className:"mt-50",itemsPerPage:p,totalItems:t.length,paginate:function(e,a){e.preventDefault(),s(a)},currentPage:m}):null)))},Y=t(94),J=t(95),Q=t(96),q=t(97);var z=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),m=i[0],s=i[1],u=Object(n.useState)([]),p=Object(o.a)(u,2),g=p[0],E=p[1],v=Object(n.useState)([]),h=Object(o.a)(v,2),b=h[0],f=h[1];return Object(n.useEffect)((function(){d.a.get("/api/contactinfo").then((function(e){r(e.data.phoneNumbers),s(e.data.emailAddress),E(e.data.githubLink),f(e.data.linkedinLink)}))}),[]),l.a.createElement(y,null,l.a.createElement("div",{className:"mi-contact-area mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(O,{title:"Contact Me"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"mi-contact-info"},t?l.a.createElement("div",{className:"mi-contact-infoblock"},l.a.createElement("span",{className:"mi-contact-infoblock-icon"},l.a.createElement(Y.a,null)),l.a.createElement("div",{className:"mi-contact-infoblock-content"},l.a.createElement("h6",null,"Phone"),t.map((function(e){return l.a.createElement("p",{key:e},l.a.createElement("a",{href:(a=e,a)},e));var a})))):null,m?l.a.createElement("div",{className:"mi-contact-infoblock"},l.a.createElement("span",{className:"mi-contact-infoblock-icon"},l.a.createElement(J.a,null)),l.a.createElement("div",{className:"mi-contact-infoblock-content"},l.a.createElement("h6",null,"Email"),m.map((function(e){return l.a.createElement("p",{key:e},l.a.createElement("a",{href:"mailto:".concat(e)},e))})))):null,l.a.createElement("div",{className:"mi-contact-infoblock"},l.a.createElement("span",{className:"mi-contact-infoblock-icon"},l.a.createElement(Q.a,null)),l.a.createElement("div",{className:"mi-contact-infoblock-content"},l.a.createElement("h6",null,"Github"),l.a.createElement("a",{rel:"noopener noreferrer",href:g,target:"_blank"},g))),l.a.createElement("div",{className:"mi-contact-infoblock"},l.a.createElement("span",{className:"mi-contact-infoblock-icon"},l.a.createElement(q.a,null)),l.a.createElement("div",{className:"mi-contact-infoblock-content"},l.a.createElement("h6",null,"Linkedin"),l.a.createElement("a",{rel:"noopener noreferrer",href:b,target:"_blank"},b)))))))))};var K=function(){return l.a.createElement(y,null,l.a.createElement("div",{className:"mi-about-area mi-section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-8"},l.a.createElement("div",{className:"notfound"},l.a.createElement("div",{className:"notfound-inner text-center"},l.a.createElement("h1",null,"404"),l.a.createElement("h3",null,"Whoops!!! Page not found!"),l.a.createElement(s.b,{to:"/",className:"mi-button"},"Back to Home"))))))))};var $=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],r=a[1];return t?document.body.classList.add("light"):document.body.classList.remove("light"),l.a.createElement(s.a,null,l.a.createElement("div",{className:"light-mode"},l.a.createElement("span",{className:"icon"},l.a.createElement(m.a,null)),l.a.createElement("button",{className:t?"light-mode-switch active":"light-mode-switch",onClick:function(){t?(r(!1),document.body.classList.remove("light")):(r(!0),document.body.classList.add("light"))}})),l.a.createElement(u.c,null,l.a.createElement(u.a,Object(i.a)({path:"/",exact:!0,component:N},"component",(function(){return l.a.createElement(N,{lightMode:t})}))),l.a.createElement(u.a,{path:"/about",component:P}),l.a.createElement(u.a,{path:"/resume",component:B}),l.a.createElement(u.a,{path:"/hands-on-projects",exact:!0,component:R}),l.a.createElement(u.a,{path:"/university-projects",component:V}),l.a.createElement(u.a,{path:"/contact",component:z}),l.a.createElement(u.a,{path:"*",component:K})))},X=new(t(75))(t(4)),Z={information:{name:"Phuong Do Ky",name_vi:"Do Ky Phuong",aboutHome:"I am a software developer. I can tackle with both front-end and back-end issues. I can provide clean code and work with data structures as well.",aboutContent:"I am a software engineer who excels in web and react native development. I am also passionate about building applications in javascript and nodejs platform. I prefer talking about tech discussions and surfing tech groups like topdev, techtalk, medium... when I have free time to comprehend as well as update knowledge from the communities.",dob:"17 / 03 / 1993",phone:"",nationality:"Viet Nam",language:"Vietnamese, English",hobby:"Tech discussion, books, games, traveling, cuisine",personality:"gentle, harmony",experience:"4 years",email:"",address:"",socialLinks:{facebook:"https://facebook.com",twitter:"https://twitter.com",pinterest:"",behance:"",dribbble:"",github:"https://github.com",linkedin:""},brandImage:"/images/brand-image.jpg",aboutImage:"/images/about-image.jpg",aboutImageLg:"/images/about-image-lg.jpg",cvfile:"http://phuongdk.com/cv_sub.jpg",cert1:"http://phuongdk.com/ielts_cert.jpg"},services:[{title:"Web Design",icon:"color-pallet"},{title:"Web Development",icon:"code"},{title:"Mobile Application",icon:"mobile"}],skills:[{title:"HTML5 / CSS3 / Javascript ES8",level:"Good",value:80},{title:"React / React Native",level:"Good",value:80},{title:"Angular",level:"Good",value:80},{title:"Electron",level:"Normal",value:60},{title:"Nodejs / Express",level:"Good",value:80},{title:"PHP / Code Igniter / Laravel",level:"Normal",value:60},{title:"Python / Flask",level:"Normal",value:60},{title:"Docker / Docker compose",level:"Normal",value:60},{title:"Gitlab CI/CD",level:"Normal",value:60},{title:"Support tools: Git, Jira, Trello, Slack, Postman, Vagrant",level:"Normal",value:60},{title:"Third party services: Google firebase; AWS: S3, DynamoDB, Elastic Beanstalk",level:"Normal",value:60}],experience:{workingExperience:[{id:1,year:"2016 - 2017",position:"Theme and Plug-in Developer",company:"BrainOS",companyLink:"https://brainos.vn/",details:"Take in charge of creating and coding theme and plug-in on three platforms, namely Wordpress, Shopify and Big Commerce.",projects:[]},{id:2,year:"2017 - 2019",position:"Frontend & Backend Developer",company:"Rikkeisoft",companyLink:"https://rikkeisoft.com/",details:"Working on many out-sourcing products for Japanese clients in both front-end and back-end issues.",projects:[{name:"Skillsheet application",description:"",technologies:"Angular 2, PHP / Laravel",responsibility:"Front-end & Back-end development"},{name:"Embedded management system",description:"",technologies:"Ractivejs, Backbonejs",responsibility:"Front-end development"},{name:"Car booking application",description:"",technologies:"React, React Native, Nextjs, Nodejs, Typescript, GraphQL, Apollo, Twillio, mobx-state-tree, docker / compose",responsibility:"Front-end development"},{name:"E-learning system",description:"",technologies:"PHP / Cake2, MySQL",responsibility:"Mentoring fresher, supporting and debugging application"},{name:"Medical management system",description:"",technologies:"PHP / Laravel, MySQL",responsibility:"Back-end development"},{name:"Hotel, restaurant, spa,... management system",description:"",technologies:"React, redux, ant-design",responsibility:"Front-end development"},{name:"An online hiring performer platform",description:"",technologies:"React, PHP / Laravel, MaterialUI, Vagrant",responsibility:"Front-end development"}]},{id:3,year:"2019 - 2020",position:"Frontend & Backend Developer",company:"Viettel Cyber Security",companyLink:"https://viettelcybersecurity.com/",details:"Working on Viettel software products, concentrate on Angular, Electron and Python Flask.",projects:[{name:"Anti-Fraud Phone Charges System",description:"",technologies:"Angular 7, Python / Flask, MongoDB, docker",responsibility:"Front-end & Back-end development"},{name:"Supervising and Monitoring System",description:"",technologies:"Angular 7, Electron, Python / Flask, MongoDB, docker",responsibility:"Front-end & Back-end development, setup Gitlab CI / CD"}]}],educationExperience:[{id:1,year:"2008 - 2011",graduation:"Student",university:"Le Quy Don High School",companyLink:"http://thptlequydon-dd.edu.vn/"},{id:2,year:"2011 - 2016",graduation:"Bachelor Degree of Information Technology",university:"Ha Noi University",companyLink:"http://www.hanu.vn/vn/",details:"Graduate from Ha Noi University, IT department"}]},petProjects:[{id:1,title:"React Dumbo Chat Application",featuredImage:"/images/dumbo-bg1.jpg",link:"https://dumbo-chat-app-phuongdk.herokuapp.com",download:!1,createDay:"1",createMonth:"June",createYear:"2020"},{id:2,title:"React Native Car Booking Application ( Pure UI )",featuredImage:"/images/car-app-bg.jpg",link:"https://expo.io/@phuongdk/projects/CarBookingAppUI",link2:{name:"Download expo client android app",link:"https://play.google.com/store/apps/details?id=host.exp.exponent&hl=vi&gl=US"},link3:{name:"Scan application's QR Code with expo",link:"http://phuongdk.com/car-app-qr-code.jpg"},download:!1,createDay:"1",createMonth:"August",createYear:"2020"},{id:3,title:"React Native Estate Full Application",featuredImage:"/images/estate-bg.jpg",link:"https://expo.io/@phuongdk/projects/pumahousing",link2:{name:"Download apk file",link:"https://www.phuongdk.com/puma-housing-app.apk"},link3:{name:"Scan application's QR Code with expo",link:"https://www.phuongdk.com/puma-housing-app-qr-code.jpg"},download:!1,createDay:"1",createMonth:"November",createYear:"2020"},{id:4,title:"Electron CPU Monitor Application",featuredImage:"/images/cpu-monitor-bg1.jpg",link:"http://phuongdk.com/cpu-monitor-app/CpuMonitor Setup 1.0.0.exe",download:!0,createDay:"1",createMonth:"October",createYear:"2020"},{id:5,title:"Oxygen Shopify Theme",featuredImage:"/images/oxygen-bg1.jpg",link:"https://ap-oxygen.myshopify.com/",download:!1,createDay:"1",createMonth:"January",createYear:"2016"},{id:6,title:"Over Shopify Theme",featuredImage:"/images/over-bg1.jpg",link:"https://ap-over.myshopify.com/",download:!1,createDay:"1",createMonth:"April",createYear:"2016"},{id:7,title:"Casper Shopify Theme",featuredImage:"/images/casper-bg1.jpg",link:"https://ap-cp.myshopify.com/",download:!1,createDay:"1",createMonth:"June",createYear:"2016"}],universityProjects:[{id:1,title:"Dice Game",subtitle:"Pure javascript Application",imageUrl:"/images/dice-bg.jpg",largeImageUrl:["/images/dice-bg.jpg"],url:"http://phuongdk.com/dice-game"},{id:2,title:"Small budget Application",subtitle:"Pure javascript application",imageUrl:"/images/budget-bg.jpg",largeImageUrl:["/images/budget-bg.jpg"],url:"http://phuongdk.com/budget-web-app"},{id:3,title:"Alpha Blog Application",subtitle:"Build on top of Ruby on Rails framework",imageUrl:"/images/alpha-blog.jpg",largeImageUrl:["/images/alpha-blog.jpg"],url:"https://alpha-blog-phuongdk.herokuapp.com/"}],contactInfo:{phoneNumbers:["(+84) 393 167 157"],emailAddress:["phuongdkk@gmail.com"],githubLink:"https://github.com/phuongdk",linkedinLink:"https://linkedin.com/in/phuongdk"}};X.onGet("/api/information").reply((function(e){return[200,Z.information]})),X.onGet("/api/services").reply((function(e){return[200,Z.services]})),X.onGet("/api/reviews").reply((function(e){return[200,Z.reviews]})),X.onGet("/api/skills").reply((function(e){return[200,Z.skills]})),X.onGet("/api/experience").reply((function(e){return[200,Z.experience]})),X.onGet("/api/petProjects").reply((function(e){return[200,Z.petProjects]})),X.onGet("/api/uProjects").reply((function(e){return[200,Z.universityProjects]})),X.onGet("/api/contactinfo").reply((function(e){return[200,Z.contactInfo]})),X.onAny().passThrough();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.a2961ac6.chunk.js.map