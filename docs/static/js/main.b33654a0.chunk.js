(this.webpackJsonpiamweifan=this.webpackJsonpiamweifan||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(12),c=a.n(r),s=(a(19),a(2)),o=a(3),l=a(5),E=a(4),m=a(6),u="ENG",d="CH",T={ENG:{HOME:"HOME",INTRO:"Introduction",EDUCATION:"Education",EXPERIENCE:"Experience",SKILL:"Skill",CONTACT:"Contact"},CH:{HOME:"\u9996\u9801",INTRO:"\u500b\u4eba\u7c21\u4ecb",EDUCATION:"\u5b78\u7fd2\u6b77\u7a0b",EXPERIENCE:"\u76f8\u95dc\u7d93\u6b77",SKILL:"\u5c08\u696d\u6280\u80fd",CONTACT:"\u806f\u7d61\u65b9\u5f0f"}},g=T,N=(a(20),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(E.a)(t).call(this,e))).getText=function(e){return g[a.props.language][e]},a.toggleSideBar=function(){a.setState((function(e){return{openSideBar:!e.openSideBar}}),console.log(a.state.openSideBar))},a.optionClass=function(e){return a.props.language===e?"active option":"option"},a.state={openSideBar:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"navbar"},i.a.createElement("div",{className:"language-switch"},i.a.createElement("span",{className:this.optionClass(d),onClick:function(){return e.props.switchLanguage(d)}},"\u7e41\u9ad4\u4e2d\u6587"," "),"|",i.a.createElement("span",{className:this.optionClass(u),onClick:function(){return e.props.switchLanguage(u)}}," ","English")),i.a.createElement("div",{className:"navicon",onClick:this.toggleSideBar},i.a.createElement("span",{className:"hamburger"}),i.a.createElement("span",{className:"hamburger"}),i.a.createElement("span",{className:"hamburger"})),i.a.createElement("div",{className:"sidebar ".concat(this.sidebarHidden)},i.a.createElement("div",{className:"sidebar-cross ".concat(this.sidebarHidden),onClick:this.toggleSideBar}),i.a.createElement("div",{className:"nav-item",onClick:function(){return e.props.scrollToRef("HOME_SECTION")}},this.getText("HOME")),i.a.createElement("div",{className:"nav-item",onClick:function(){return e.props.scrollToRef("INTRO_SECTION")}},this.getText("INTRO")),i.a.createElement("div",{className:"nav-item",onClick:function(){return e.props.scrollToRef("EDUCATION_SECTION")}},this.getText("EDUCATION")),i.a.createElement("div",{className:"nav-item",onClick:function(){return e.props.scrollToRef("EXPERIENCE_SECTION")}},this.getText("EXPERIENCE")),i.a.createElement("div",{className:"nav-item",onClick:function(){return e.props.scrollToRef("SKILL_SECTION")}},this.getText("SKILL")),i.a.createElement("div",{className:"nav-item",onClick:function(){return e.props.scrollToRef("CONTACT_SECTION")}},this.getText("CONTACT"))))}},{key:"sidebarHidden",get:function(){return this.state.openSideBar?"":"hidden"}}]),t}(n.Component)),I=(a(21),{ENG:{NAME:"WEI FAN CHANG",SLOGAN:"I am a software engineer."},CH:{NAME:"\u5f35\u8473\u51e1",SLOGAN:"\u6211\u662f\u8edf\u9ad4\u5de5\u7a0b\u5e2b\u54e6"}}),h=I;var f=function(e){function t(t){return h[e.language][t]}return i.a.createElement("div",{className:"home-img-container"},i.a.createElement("div",{className:"text-box"},i.a.createElement("div",{className:"title"},t("NAME")),i.a.createElement("div",{className:"subtitle"},t("SLOGAN"))))},C=(a(22),{ENG:{NAME:"Wei Fan, Chang ",INTRO1:"graduated from department of Materials Science and Engineering and finally found her passion in Computer Science. When working in a social enterprise as an intern, she got to notice the responsibility of a human being and aim to contribute to the community.",INTRO2:"She had been a fullstack engineer for one year before going to graduate school. Now, she is a M.S. student in department of Computer Science and Information Engineering at National Taiwan University. Her research interests include artificial intelligence, machine learning and nature language processing."},CH:{NAME:"\u5f35\u8473\u51e1",INTRO1:"\uff0c\u73fe\u5728\u5c31\u8b80\u65bc\u53f0\u5927\u8cc7\u8a0a\u5de5\u7a0b\u7814\u7a76\u6240\uff0c\u5728\u524d\u5f80\u5beb\u7a0b\u5f0f\u7684\u8def\u4e0a\u7e5e\u4e86\u9ede\u8def\u3002\u5927\u5b78\u6642\u5c31\u8b80\u6750\u6599\u79d1\u5b78\u8207\u5de5\u7a0b\u5b78\u7cfb\uff0c\u5076\u7136\u767c\u73fe\u96fb\u8166\u79d1\u5b78\u7684\u6a02\u8da3\uff0c\u6642\u4e0d\u6642\u8dd1\u53bb\u8cc7\u5de5\u7cfb\u4fee\u8ab2\uff0c\u73fe\u5728\u8b8a\u6210\u4e86\u8cc7\u5de5\u4eba\u3002",INTRO2:"\u66fe\u7d93\u5728\u793e\u6703\u4f01\u696d\u7576\u5de5\u7a0b\u5e2b\u5be6\u7fd2\u751f\uff0c\u7cbe\u9032\u6280\u8853\u7684\u540c\u6642\uff0c\u8a31\u4e0b\u4e86\u56de\u994b\u793e\u6703\u7684\u627f\u8afe\u3002\u5f8c\u4f86\u7576\u4e86\u4e00\u5e74\u7684\u7db2\u7ad9\u5168\u7aef\u5de5\u7a0b\u5e2b\uff0c\u6176\u5e78\u81ea\u5df1\u9084\u80fd\u9760\u5beb\u7a0b\u5f0f\u6df7\u53e3\u98ef\u5403\u3002\u60f3\u8457\u7cbe\u9032\u81ea\u5df1\uff0c\u6240\u4ee5\u56de\u5230\u5b78\u6821\u7e7c\u7e8c\u5538\u66f8\uff0c\u7576\u500b\u5c0f\u5c0f\u7814\u7a76\u751f"}}),p=C;var O=function(e){function t(t){return p[e.language][t]}return i.a.createElement("div",{className:"section-container"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"intro-wrapper"},i.a.createElement("div",{className:"intro-img-container"}),i.a.createElement("div",{className:"intro-text"},i.a.createElement("span",null,i.a.createElement("strong",null,t("NAME")),t("INTRO1"),i.a.createElement("br",null),i.a.createElement("br",null),t("INTRO2"))))))},v=(a(23),{ENG:{TITLE:"Education",PERIOD1:"09/2019 -",EDUCATION_TITLE1:"National Taiwan University, Master Degree",EDUCATION_SUBTITLE1:"Department of Computer Science and Engineering",DESC1:"Conducting researches in artificial intelligence, machine learning and nature language processing. Trying to distinguish fake news and disinformation with deep learning models.",PERIOD2:"03/2018 - 08/2018",EDUCATION_TITLE2:"Ruhr University Bochum (Germany)",EDUCATION_SUBTITLE2:"Exchange Student",DESC2:"Got to understand the thoughts and perspectives from people around the world and made friends from different countries such as German, Italy, India, Korea, etc. Improved English and German by taking courses and attending workshop.",PERIOD3:"06/2013 - 03/2018",EDUCATION_TITLE3:"National Taiwan University, Bachelor Degree",EDUCATION_SUBTITLE3:"Department of Materials Science and Engineering",DESC3:"Developed the interest in Computer Science. Got grade of A (4.0 / 4.3 ) in Interactive Web Programming course. Developed a web prototype of a platform in User Experience Course and got grade of A+ ( 4.3 / 4.3 )."},CH:{TITLE:"\u5b78\u7fd2\u6b77\u7a0b",PERIOD1:"09/2019 -",EDUCATION_TITLE1:"\u570b\u7acb\u53f0\u7063\u5927\u5b78",EDUCATION_SUBTITLE1:"\u8cc7\u8a0a\u5de5\u7a0b\u7814\u7a76\u6240",DESC1:"\u52a0\u5165\u8a31\u6c38\u771f\u6559\u6388\u667a\u6167\u4ee3\u7406\u5be6\u9a57\u5ba4\uff0c\u4e3b\u653b\u4eba\u5de5\u667a\u6167\u8207\u6a5f\u5668\u5b78\u7fd2\u3002\u78a9\u4e00\u7814\u7a76\u984c\u76ee\u70ba\u5047\u65b0\u805e\u7684\u5224\u65b7\u8207\u5075\u6e2c\uff0c\u4ee5\u6df1\u5ea6\u5b78\u7fd2\u7684\u6a21\u578b\u5224\u65b7\u65b0\u805e\u6587\u7ae0\u771f\u507d\u3002\u4e5f\u53c3\u8207\u4e2d\u7814\u9662\u300c \u4ee5 AI \u6253\u9020\u7db2\u8def\u793e\u7fa4\u5a92\u9ad4\u5b89\u5fc3\u4f7f\u7528\u74b0\u5883\u300d\u8a08\u756b\u3002",PERIOD2:"03/2018 - 08/2018",EDUCATION_TITLE2:"\u5fb7\u570b\u9b6f\u723e\u6ce2\u9d3b\u5927\u5b78",EDUCATION_SUBTITLE2:"\u4ea4\u63db\u5b78\u751f",DESC2:"\u4ea4\u63db\u671f\u9593\u52aa\u529b\u548c\u4e0d\u540c\u6587\u5316\u80cc\u666f\u7684\u4eba\u4ea4\u6d41\uff0c\u4e86\u89e3\u4e0d\u540c\u570b\u5bb6\u7684\u601d\u7dad\u8207\u50f9\u503c\u89c0\uff0c\u7d50\u4ea4\u4e86\u4f86\u81ea\u7fa9\u5927\u5229\u3001\u97d3\u570b\u3001\u5370\u5ea6\u8207\u5fb7\u570b\u7b49\u597d\u670b\u53cb\u3002\u900f\u904e\u4fee\u8ab2\u3001\u5de5\u4f5c\u574a\u589e\u9032\u82f1\u6587\u8207\u5fb7\u6587\u8a9e\u8a00\u80fd\u529b\uff0c\u66fe\u8a66\u8457\u4ee5\u5168\u82f1\u6587\u6c42\u8077\uff0c\u4e26\u62ff\u5230\u9762\u8a66\u6a5f\u6703\u3002",PERIOD3:"06/2013 - 03/2018",EDUCATION_TITLE3:"\u570b\u7acb\u53f0\u7063\u5927\u5b78",EDUCATION_SUBTITLE3:"\u6750\u6599\u79d1\u5b78\u8207\u5de5\u7a0b\u5b78\u7cfb",DESC3:"\u5728\u6821\u671f\u9593\u767c\u89ba\u5c0d\u8cc7\u8a0a\u5de5\u7a0b\u7684\u8208\u8da3\uff0c\u4fee\u7fd2\u904e\u8cc7\u6599\u7d50\u69cb\u3001\u6f14\u7b97\u6cd5\u3001\u8a08\u7b97\u6a5f\u7db2\u8def\u7b49\u5341\u9580\u4ee5\u4e0a\u8cc7\u5de5\u9818\u57df\u57fa\u790e\u8ab2\u7a0b\uff0c\u5e73\u5747\u7b49\u7b2c\u70ba A- (GPA: 3.7 /4.3) \uff0c\u4e5f\u5728\u6a5f\u5668\u5b78\u7fd2\u3001\u4f7f\u7528\u8005\u7d93\u9a57\u8a2d\u8a08\u3001\u7db2\u9801\u4e92\u52d5\u7a0b\u5f0f\u8a2d\u8a08\u7b49\u61c9\u7528\u8ab2\u7a0b\u62ff\u4e0b A \u7b49\u7b2c(4.0 / 4.3) \u4ee5\u4e0a\u6210\u7e3e"}}),R=v;a(24);var S=function(e){return i.a.createElement("div",{className:"experience-block"},i.a.createElement("div",{className:"period-textbox"},e.period),i.a.createElement("div",{className:"title-textbox"},i.a.createElement("span",{className:"title"},e.title),i.a.createElement("span",{className:"subtitle"},e.subtitle)),i.a.createElement("div",{className:"desc-textbox"},e.desc))};var D=function(e){function t(t){return R[e.language][t]}return i.a.createElement("div",{className:"section-container gray"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"section-title"},t("TITLE")),i.a.createElement("div",{className:"experience-blocks-container"},i.a.createElement(S,{title:t("EDUCATION_TITLE1"),subtitle:t("EDUCATION_SUBTITLE1"),period:t("PERIOD1"),desc:t("DESC1")}),i.a.createElement(S,{title:t("EDUCATION_TITLE2"),subtitle:t("EDUCATION_SUBTITLE2"),period:t("PERIOD2"),desc:t("DESC2")}),i.a.createElement(S,{title:t("EDUCATION_TITLE3"),subtitle:t("EDUCATION_SUBTITLE3"),period:t("PERIOD3"),desc:t("DESC3")}))))},b=(a(25),{ENG:{TITLE:"Experience",PERIOD1:"09/2018 - 09/2019",EDUCATION_TITLE1:"Kono Digital Inc.",EDUCATION_SUBTITLE1:"Fullstack Engineer",DESC1:"Developed a content management system during the probation period with React and Ruby on Rails, and then deployed it with tools including AWS, Nginx, Docker, etc.Maintained server and developed features with Ruby on Rails, also refactored the codes with the concepts of Design Pattern.Involved in developing the new website and deploying during 03/2019 - 06/2019.",PERIOD2:"07/2017 - 01/2018",EDUCATION_TITLE2:"Innovation Open House, a startup ",EDUCATION_SUBTITLE2:"IT internship",DESC2:"Built website with Ruby on Rails. Construct above ten pages and designed mySQL database. Familiar with MVC model and CRUD database operations. Put Google Analytics as well as FB Pixel in the website and managed them with Google Tag Manager."},CH:{TITLE:"\u76f8\u95dc\u7d93\u6b77",PERIOD1:"09/2018 - 09/2019",EDUCATION_TITLE1:"\u96fb\u5b50\u96dc\u8a8c\u5e73\u53f0\u516c\u53f8 Kono",EDUCATION_SUBTITLE1:"\u7db2\u7ad9\u5168\u7aef\u5de5\u7a0b\u5e2b",DESC1:"\u8a66\u7528\u671f\u9593\u7368\u7acb\u958b\u767c\u516c\u53f8\u5167\u90e8\u520a\u7269\u7ba1\u7406\u7cfb\u7d71\uff0c\u8207\u520a\u7269\u90e8\u9580\u6e9d\u901a\u9700\u6c42\u4ee5\u8a2d\u8a08\u8cc7\u6599\u5eab\u3001API \u8207\u7db2\u9801\u4e92\u52d5\uff0c\u4ee5 React, Ruby on Rails \u958b\u767c\uff0c    \u90e8\u7f72\u6642\u4f7f\u7528\u5230\u5305\u62ec AWS, Nginx, Docker \u7b49\u5de5\u5177\u3002\u5f8c\u4f86\u4e3b\u8981\u8ca0\u8cac\u7dad\u8b77\u8207\u958b\u767c Rail \u6846\u67b6\u4e0a\u7684\u5f8c\u7aef\u4f3a\u670d\u5668\uff0c\u66fe\u4e32\u63a5\u4e9e\u592a\u96fb\u4fe1\u7cfb\u7d71\u5b8c\u6210\u5408\u4f5c\u5c08\u6848\uff0c\u7dad\u8b77\u671f\u9593\u4e5f\u6301\u7e8c\u4ee5\u8a2d\u8a08\u6a21\u5f0f\u91cd\u69cb\u7a0b\u5f0f\u78bc\u3002\u65bc 03/2019 -06/2019 \u53c3\u8207\u4e26\u5b8c\u6210\u65b0\u7db2\u7ad9\u524d\u7aef\u958b\u767c\u8207\u4e0a\u67b6\u3002",PERIOD2:"07/2017 - 01/2018",EDUCATION_TITLE2:"\u65b0\u5275\u516c\u53f8 IOH",EDUCATION_SUBTITLE2:"IT \u90e8\u9580\u5be6\u7fd2\u751f",DESC2:"\u5354\u52a9\u516c\u53f8\u7528 Ruby on Rails \u67b6\u8a2d\u65b0\u7db2\u7ad9\uff0c\u671f\u9593\u719f\u6089\u4e86\u7db2\u7ad9\u7684 MVC\u67b6\u69cb\u8207 RESTFUL API \uff1b\u5728 MySQL \u4e0a\u5efa\u7acb\u4e26\u898f\u5283\u548c\u7db2\u7ad9\u76f8\u95dc\u7684\u8cc7\u6599\u8868\u4ee5\u53ca\u5176\u95dc\u806f\uff0c\u719f\u6089\u8cc7\u6599\u5eab\u7684 CRUD \u64cd\u4f5c\uff1b\u5be6\u4f5c\u904e GoogleAnalytics \u8207 FB pixel \u7684\u57cb\u653e\uff0c\u4e26\u4ee5 Google Tag Manager \u6574\u5408\u8207\u7ba1\u7406\u3002"}}),A=b;var L=function(e){function t(t){return A[e.language][t]}return i.a.createElement("div",{className:"section-container"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"section-title"},t("TITLE")),i.a.createElement("div",{className:"experience-blocks-container"},i.a.createElement(S,{title:t("EDUCATION_TITLE1"),subtitle:t("EDUCATION_SUBTITLE1"),period:t("PERIOD1"),desc:t("DESC1")}),i.a.createElement(S,{title:t("EDUCATION_TITLE2"),subtitle:t("EDUCATION_SUBTITLE2"),period:t("PERIOD2"),desc:t("DESC2")}))))},U=a(7),w=a(13),k=a(10),_=(a(31),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(E.a)(t).call(this,e))).toggleEmail=function(){a.setState((function(e){return{showEmail:!e.showEmail}}))},a.state={showEmail:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"contact-section"},i.a.createElement("div",{className:"icons-wrapper"},i.a.createElement("a",{href:"https://github.com/weifanhaha",target:"_blank",rel:"noopener noreferrer",className:"icon-link"},i.a.createElement(U.a,{icon:k.a,className:"icon"})),i.a.createElement(U.a,{icon:w.a,className:"icon icon-link",onClick:this.toggleEmail}),i.a.createElement("a",{href:"https://www.linkedin.com/in/wei-fan-chang-5a8127117/",target:"_blank",rel:"noopener noreferrer",className:"icon-link"},i.a.createElement(U.a,{icon:k.b,className:"icon"}))),i.a.createElement("a",{href:"mailto:wf.trista.chang@gmail.com",className:this.emailClass},"wf.chang.trista@gmail.com"))}},{key:"emailClass",get:function(){return this.state.showEmail?"email-addr":"email-addr hidden"}}]),t}(n.Component)),y=(a(32),{ENG:{TITLE:"Skill"},CH:{TITLE:"\u5c08\u696d\u6280\u80fd"}}),x=y,P=[{title:"ML / DL Related",contents:["Pytorch","Keras","Tensorflow","NLP","CV"]},{title:"Backend",contents:["Ruby on Rails","MySql","GCP / AWS","Docker"]},{title:"Frontend",contents:["HTML","CSS / Sass","JavaScript","React","Redux"]},{title:"More",contents:["Python","C / C++","Matlab","Git","CI / CD","Design Pattern"]}];var B=function(e){return i.a.createElement("div",{className:"section-container gray"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"section-title"},(t="TITLE",x[e.language][t])),i.a.createElement("div",{className:"skill-wrapper"},P.map((function(e){return i.a.createElement("div",{className:"skill-subwrapper",key:e.title},i.a.createElement("div",{className:"skill-title"},e.title),e.contents.map((function(e){return i.a.createElement("div",{className:"skill-item",key:e},e)})))})))));var t},M=(a(33),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(E.a)(t).call(this,e))).switchLanguage=function(e){a.setState({language:e})},a.scrollToRef=function(e){a.sectionRef(e).current.scrollIntoView({behavior:"smooth"})},a.state={language:u},a.homeRef=i.a.createRef(),a.introRef=i.a.createRef(),a.eduRef=i.a.createRef(),a.expRef=i.a.createRef(),a.contactRef=i.a.createRef(),a.skillRef=i.a.createRef(),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"sectionRef",value:function(e){switch(e){case"HOME_SECTION":return this.homeRef;case"INTRO_SECTION":return this.introRef;case"EDUCATION_SECTION":return this.eduRef;case"EXPERIENCE_SECTION":return this.expRef;case"CONTACT_SECTION":return this.contactRef;case"SKILL_SECTION":return this.skillRef;default:return this.homeRef}}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(N,{language:this.state.language,switchLanguage:this.switchLanguage,scrollToRef:this.scrollToRef}),i.a.createElement("div",{className:"container"},i.a.createElement("section",{id:"home",ref:this.homeRef},i.a.createElement(f,{language:this.state.language})),i.a.createElement("section",{id:"intro",ref:this.introRef},i.a.createElement(O,{language:this.state.language})),i.a.createElement("section",{id:"education",ref:this.eduRef},i.a.createElement(D,{language:this.state.language})),i.a.createElement("section",{id:"experience",ref:this.expRef},i.a.createElement(L,{language:this.state.language})),i.a.createElement("section",{id:"skill",ref:this.skillRef},i.a.createElement(B,{language:this.state.language})),i.a.createElement("section",{id:"project"}),i.a.createElement("section",{id:"contact",ref:this.contactRef},i.a.createElement(_,null))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.b33654a0.chunk.js.map