(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7781d802"],{"03ad":function(e,n,t){"use strict";t("10d5")},"10d5":function(e,n,t){},"51bc":function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("aside",{staticClass:"aside-menu",class:{"aside-menu--open":e.menuOpen}},[t("nav",{staticClass:"aside-menu__content"},[e._m(0),t("ul",{staticClass:"aside-menu__menu"},[e._l(e.menuData,(function(n,s){return[t("li",{key:"menu-item-"+s,staticClass:"aside-menu__menu__item",class:{"aside-menu__menu__item--active":e.$route.name==n.nombreRuta}},[t("router-link",{staticClass:"aside-menu__menu__item__lnk",attrs:{to:{name:n.nombreRuta}}},[n.hasOwnProperty("numero")?t("span",[t("strong",[e._v(e._s(n.numero))])]):e._e(),t("span",[t("strong",[e._v(e._s(n.titulo))])])])],1),n.hasOwnProperty("subMenu")&&n.subMenu.length?e._l(n.subMenu,(function(u,a){return t("li",{key:"submenu-item-"+s+"-"+a,staticClass:"aside-menu__menu__item--sub-menu",class:{"aside-menu__menu__item--sub-menu--active":e.$route.hash=="#"+u.hash}},[t("router-link",{staticClass:"aside-menu__menu__item__lnk",attrs:{to:{name:n.nombreRuta,hash:"#"+u.hash}}},[t("i",{class:u.icono}),t("span",[e._v(e._s(u.numero))]),t("span",[e._v(e._s(u.titulo))])])],1)})):e._e()]}))],2),t("ul",{staticClass:"aside-menu__sec-menu"},e._l(e.subMenuData,(function(n,s){return t("li",{key:"SecMenu-item-"+s,staticClass:"aside-menu__sec-menu__item"},[n.hasOwnProperty("download")?t("a",{staticClass:"aside-menu__sec-menu__item__lnk",attrs:{href:e.obtenerLink(n.download),target:"_blank"}},[t("i",{class:n.icono}),t("span",[e._v(e._s(n.titulo))])]):t("router-link",{staticClass:"aside-menu__sec-menu__item__lnk",attrs:{to:{name:n.nombreRuta}}},[t("i",{class:n.icono}),t("span",[e._v(e._s(n.titulo))])])],1)})),0)])])},u=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"aside-menu__header"},[t("h4",[e._v("Desarrollo de contenidos")])])}],a=(t("b0c0"),{name:"AsideMenu",computed:{menuData:function(){return this.$config.menuPrincipal.menu},subMenuData:function(){return this.$config.menuPrincipal.subMenu},menuOpen:function(){return this.$store.getters.isMenuOpen}},watch:{$route:function(e){("inicio"===e.name||window.innerWidth<=991)&&this.toggleMenu(!1)}},methods:{toggleMenu:function(e){this.$store.dispatch("toggleMenu",e)}}}),i=a,o=(t("03ad"),t("2877")),_=Object(o["a"])(i,s,u,!1,null,null,null);n["default"]=_.exports},b0c0:function(e,n,t){var s=t("83ab"),u=t("9bf2").f,a=Function.prototype,i=a.toString,o=/^\s*function ([^ (]*)/,_="name";s&&!(_ in a)&&u(a,_,{configurable:!0,get:function(){try{return i.call(this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-7781d802.55c5a79e.js.map