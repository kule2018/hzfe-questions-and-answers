(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{238:function(t,s,a){"use strict";a.r(s);var n=a(0),c=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._v(" "),a("p",[t._v("class 在 ES5 时被 ECMAScript 列入了保留字（Reserved Words）中，意味着从 ES5 时你就不可以使用 class 作为标识符。在 ES6 时 class 终于被正式引入 ECMAScript 标准之中。class 的出现意味着我们可以不用写长串的代码来模拟其他语言中的类了。虽然 ES6 中的 class 依然是基于原型的实现（prototype-based inheritance），但是已经大大减少了我们的编码量，代码也更加简洁直观。那么 JS 引擎具体是如何实现 class 的呢？")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("ES6 中的 class 依旧是基于我们一直使用的原型的实现，本质上是一个语法糖。下面是 MDN 对 class 的简介：")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("我们如果用 babel 来编译一个 class 会得到以下结果：")]),t._v(" "),t._m(4),a("p",[t._v("从编译后的代码我们可以看到 babel 对 class 的处理，那么实际的规范又是什么呢？")]),t._v(" "),t._m(5),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMA-262"),a("OutboundLink")],1),t._v(" 14.5 节就是有关 class 的规范。")]),t._v(" "),a("p",[t._v("从规范中我们可以知道 class 的语法结构是：")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("后面一大堆的东西先不看，我们先来看 14.5.14 这一小节，这一小节的内容就是 class 运行时怎么一步步执行的。我们跟着这一小节的内容来一步步往后看。")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("从以上规范我们可以很清楚的看到，ES6 中的 class 依旧是 prototype 那一套东西。")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("我们乘胜追击，来看看 V8 引擎中 class 的具体实现")]),t._v(" "),a("p",[t._v("// 追不动追不动，先 TODO 了")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("# 此页面贡献者：树")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"js引擎怎么实现class关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js引擎怎么实现class关键字","aria-hidden":"true"}},[this._v("#")]),this._v(" js引擎怎么实现Class关键字")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"class-是个语法糖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class-是个语法糖","aria-hidden":"true"}},[this._v("#")]),this._v(" class 是个语法糖")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("The class declaration creates a new class with a given name using prototype-based inheritance.")]),this._v(" "),s("p",[this._v("You can also define a class using a class expression. But unlike the class expression, the class declaration doesn't allow an existing class to be declared again and will throw a type error if attempted.")]),this._v(" "),s("p",[this._v("Syntax\nclass name [extends] {\n// class body\n}")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 代码")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Geeku")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("constructor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'constructor'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("hello")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// babel es2015-loose 编译后")]),t._v("\n"),a("span",{attrs:{class:"token string"}},[t._v("'use strict'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("_classCallCheck")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Constructor"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Constructor")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("TypeError")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Cannot call a class as a function"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("Geeku")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Geeku")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("_classCallCheck")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Geeku"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'constructor'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  Geeku"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("hello")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("hello")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Geeku"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"ecma-262-规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ecma-262-规范","aria-hidden":"true"}},[this._v("#")]),this._v(" ECMA-262 规范")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://ws1.sinaimg.cn/large/006tKfTcgy1fl59iz3mupj30h00m075t.jpg",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://ws4.sinaimg.cn/large/006tNc79gy1fl5amfsi98j315k1sm7ui.jpg",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"v8-中的具体实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v8-中的具体实现","aria-hidden":"true"}},[this._v("#")]),this._v(" V8 中的具体实现")])}],!1,null,null,null);s.default=c.exports}}]);