(this.webpackJsonpvisit=this.webpackJsonpvisit||[]).push([[0],{169:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i.n(s),a=i(16),r=i.n(a);i(95),i(96);function c(e,t){return new Array(e).fill(null).map((function(e,i){return t(i)}))}var o={logoName:"logo.png",menuItems:[{name:"\u041e\u0431\u043e \u043c\u043d\u0435",href:"#about"},{name:"\u041c\u043e\u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u044b",href:"#intrests"},{name:"\u041c\u043e\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b",href:"#projects"},{name:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",href:"#contacts"}]},u=i(23),l=i(89),d=i(55),m=i(4);var p=Math.pow;function j(e){var t,i,s,n=e.targetPosition,a=e.initialPosition,r=e.duration,c=window.requestAnimationFrame,o=window.cancelAnimationFrame,u=document.documentElement.scrollHeight-document.documentElement.clientHeight,l=a-n;s=c((function e(n){void 0===t&&(t=n);var d=n-t,m=1-p(1-d/r,4);i=a-l*Math.min(m,1),window.scrollTo(0,i),a===u||window.scrollY!==u?d<r&&(s=c(e)):o(s)}))}var b=function(){return console.error("Invalid element, are you sure you've provided element id or react ref?")},h=function(e){return e.offsetTop},v=["className","anchorQuery","margin","onClick","children"],f=function(e){var t=e.className,i=void 0===t?"":t,n=e.anchorQuery,a=e.margin,r=void 0===a?0:a,c=e.onClick,o=void 0===c?function(){}:c,p=e.children,f=Object(d.a)(e,v),g=Object(s.useState)(),x=Object(l.a)(g,2),O=x[0],q=x[1];return Object(s.useEffect)((function(){q((function(){return document.querySelector(n)}))}),[O,n]),Object(m.jsx)("span",Object(u.a)(Object(u.a)({className:"anchor-link "+i,onClick:function(){o(),function(e){var t=e.id,i=e.ref,s=void 0===i?null:i,n=e.duration,a=void 0===n?3e3:n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=window.scrollY,o=s?s.current?s.current:s:t?document.getElementById(t):null;o?j({targetPosition:h(o)-r,initialPosition:c,duration:a}):b()}({ref:O},r)}},f),{},{children:p}))},g=i(174),x=i(58)("./".concat(headerData.logoName)).default,O=function(e){var t=e.index,i=void 0===t?0:t,s=e.margin,n=void 0===s?0:s,a=e.href;return Object(m.jsx)(g.a.Item,{className:"menu__item",children:Object(m.jsx)(f,{anchorQuery:a,className:"menu__item-link",margin:n,children:o.menuItems[i].name})})},q=function(e){e.className;var t=e.margin,i=void 0===t?0:t;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"header__logo logo",children:[Object(m.jsx)("img",{src:x,alt:"logo",className:"logo__icon icon"}),Object(m.jsx)("h1",{className:"logo__title title",children:"p0ancf-36"})]}),Object(m.jsx)(g.a,{mode:"horizontal",activeKey:"",selectable:!1,selectedKeys:[],className:"header__menu menu",children:c(o.menuItems.length,(function(e){return Object(m.jsx)(O,{index:e,margin:i,href:o.menuItems[e].href},e)}))})]})},_=i(79),N=i(171),w=i(172),k={margin:64},y={bgUrl:"hack_cover.jpg",fotoName:"logo.png",name:"\u0411\u0430\u0445\u043c\u0430\u0442\u043e\u0432 \u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u042f\u043a\u043e\u0432\u043b\u0435\u0432\u0438\u0447",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.Qui, ab voluptatibus.Possimus quaerat aut, iste, accusantium velit distinctio hic dicta perferendis tenetur, maxime reiciendis reprehenderit quod neque iure pariatur ipsa sint molestias esse voluptatibus minima error eligendi ducimus ullam? Tempora, distinctio dolorum? Corporis reprehenderit aliquid sunt porro veritatis quae dolores velit fugiat nemo suscipit tempora perspiciatis numquam sit qui laboriosam nam aut amet harum, minima commodi saepe fuga quod sequi et.Architecto, placeat accusantium tenetur et esse delectus quod eaque veritatis quas at consequuntur perferendis perspiciatis sunt odit ab ipsum omnis nulla, temporibus illo quaerat quidem facere tempore quasi quae."},E=_.a.useBreakpoint,L=i(58)("./".concat(aboutMeData.fotoName)).default,Q=i(58)("./".concat(aboutMeData.bgUrl)).default,I=function(){var e=E();return Object(m.jsxs)("section",{className:"about",style:{backgroundImage:"url(".concat(Q,")")},id:"about",children:[Object(m.jsx)(N.a,{xs:24,sm:20,children:Object(m.jsxs)("article",{children:[Object(m.jsx)("h2",{className:"about__title title",children:y.name}),Object(m.jsxs)(w.a,{children:[Object(m.jsx)(N.a,{xs:24,lg:8,className:"about__foto",children:Object(m.jsx)("img",{src:L,alt:"\u0424\u043e\u0442\u043e"})}),Object(m.jsx)(N.a,{xs:24,lg:16,className:"about__text",children:Object(m.jsx)("div",{className:"about__subtitle",children:y.desc})})]})]})}),e.lg&&Object(m.jsx)(f,{className:"arrow",anchorQuery:"#intrests",margin:k.margin,children:Object(m.jsx)("div",{children:Object(m.jsx)("span",{})})})]})},D={title:"\u041c\u043e\u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u044b",intrests:[{title:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",decs:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Nisi, possimus."},{title:"\u0412\u0438\u0434\u0435\u043e\u0438\u0433\u0440\u044b",decs:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, minima!"},{title:"\u041d\u0430\u0441\u0442\u043e\u043b\u043a\u0438",decs:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quaerat?"},{title:"\u0423\u0447\u0451\u0431\u0430",decs:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ullam?"}]},C=["index","className"],F=_.a.useBreakpoint,P=function(e){var t=e.index,i=e.className,a=Object(d.a)(e,C),r="_active";var c=function(e,t){return function(i){var n=Object(s.useRef)();function a(){t(n)}return Object(s.useEffect)((function(){return document.addEventListener("scroll",a),document.addEventListener("resize",a),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[]),Object(m.jsx)(e,Object(u.a)({ref:n},i))}}(n.a.forwardRef((function(e,s){return Object(m.jsxs)("li",Object(u.a)(Object(u.a)({},e),{},{ref:s,className:"intrests__item "+i,children:[Object(m.jsx)("h2",{className:"intrests__item-title",children:D.intrests[t].title}),Object(m.jsx)("div",{className:"intrests__item-content",children:D.intrests[t].decs})]}))})),(function(e){if(null!==e.current){var t=e.current.getBoundingClientRect();t.bottom- -20>=0&&t.top+-20<=window.innerHeight?e.current.classList.add(r):e.current.classList.remove(r)}}));return Object(m.jsx)(c,Object(u.a)({},a))},H=function(){var e=F();return Object(m.jsxs)("section",{className:"intrests divider-h",id:"intrests",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"intrests__title title",children:"\u041c\u043e\u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u044b"}),Object(m.jsx)("ul",{className:"intrests__list",children:c(D.intrests.length,(function(e){return Object(m.jsx)(P,{index:e,className:1&e?"left":"right"},e)}))})]}),e.lg&&Object(m.jsx)(f,{className:"arrow",anchorQuery:"#intrests",margin:k.margin,children:Object(m.jsx)("div",{children:Object(m.jsx)("span",{})})})]})},M={title:"\u041c\u043e\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b",projects:[{name:"p1",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",link_text:"https://www.github.com/p0ancf-36/very-important-project",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex quaerat voluptate harum? Nam a commodi totam odio deserunt labore voluptatem laudantium earum culpa aut beatae iste inventore, distinctio et vitae nesciunt sequi, ad vel! Nobis corrupti facilis, repudiandae, commodi doloremque iusto asperiores optio, est adipisci consequatur suscipit distinctio! Necessitatibus dolore, sequi ad at quis saepe deleniti ullam aperiam, voluptatibus veniam voluptas, eius qui doloribus quas aliquid. Deleniti nemo nobis quia nisi repellendus reiciendis incidunt quasi sed! Quaerat, distinctio. Possimus quaerat, debitis necessitatibus cupiditate voluptatibus unde reprehenderit accusantium est temporibus, voluptates repellendus sapiente pariatur qui fuga id deserunt dolore ad nobis numquam. Quasi illum molestiae, exercitationem deserunt repudiandae architecto dignissimos cupiditate quidem veritatis voluptatem odit optio quod consectetur dolor, commodi, recusandae veniam alias porro velit excepturi vel. Hic unde quam reiciendis incidunt sint eaque molestias animi sit mollitia, fugiat consequuntur necessitatibus dicta architecto perferendis aliquam pariatur voluptatum enim eos? Expedita!"},{name:"p1",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",link_text:"https://www.github.com/p0ancf-36/very-important-project",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex quaerat voluptate harum? Nam a commodi totam odio deserunt labore voluptatem laudantium earum culpa aut beatae iste inventore, distinctio et vitae nesciunt sequi, ad vel! Nobis corrupti facilis, repudiandae, commodi doloremque iusto asperiores optio, est adipisci consequatur suscipit distinctio! Necessitatibus dolore, sequi ad at quis saepe deleniti ullam aperiam, voluptatibus veniam voluptas, eius qui doloribus quas aliquid. Deleniti nemo nobis quia nisi repellendus reiciendis incidunt quasi sed! Quaerat, distinctio. Possimus quaerat, debitis necessitatibus cupiditate voluptatibus unde reprehenderit accusantium est temporibus, voluptates repellendus sapiente pariatur qui fuga id deserunt dolore ad nobis numquam. Quasi illum molestiae, exercitationem deserunt repudiandae architecto dignissimos cupiditate quidem veritatis voluptatem odit optio quod consectetur dolor, commodi, recusandae veniam alias porro velit excepturi vel. Hic unde quam reiciendis incidunt sint eaque molestias animi sit mollitia, fugiat consequuntur necessitatibus dicta architecto perferendis aliquam pariatur voluptatum enim eos? Expedita!"}]},U=function(e){var t=e.index;return Object(m.jsxs)("div",{className:"projects__project project",children:[Object(m.jsx)("h2",{className:"project__title title",children:M.projects[t].name}),Object(m.jsx)("article",{className:"project__desc",children:M.projects[t].description}),Object(m.jsxs)("span",{className:"project__link",children:["\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0435\u043a\u0442:",Object(m.jsxs)("a",{rel:"noreferrer",href:M.projects[t].link,target:"_blank",children:[" ",M.projects[t].link_text]})]})]})},z=function(){return Object(m.jsx)("section",{className:"projects",id:"projects",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h2",{className:"projects__title title",children:M.title}),c(M.projects.length,(function(e){return Object(m.jsx)(U,{index:e},e)}))]})})},B=function(e){Object.assign({},e);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(I,{}),Object(m.jsx)(H,{}),Object(m.jsx)(z,{})]})},A=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"footer__contacts contacts",id:"contacts"})})},T=i(173);var R=function(){function e(){window.innerWidth>768?k.margin=64:k.margin=128}return Object(s.useEffect)((function(){return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(m.jsxs)(T.a,{children:[Object(m.jsx)(T.a.Header,{className:"header",children:Object(m.jsx)(q,{className:"divider-h"})}),Object(m.jsx)(T.a.Content,{children:Object(m.jsx)(B,{})}),Object(m.jsx)(T.a.Footer,{children:Object(m.jsx)(A,{})})]})};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root"))},58:function(e,t,i){var s={"./hack_cover.jpg":98,"./logo.png":99};function n(e){var t=a(e);return i(t)}function a(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=a,e.exports=n,n.id=58},96:function(e,t,i){},98:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/hack_cover.4a30d3d1.jpg"},99:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/logo.aaf8578f.png"}},[[169,1,2]]]);
//# sourceMappingURL=main.d906c1f8.chunk.js.map