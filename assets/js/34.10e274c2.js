(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{176:function(t,s,a){t.exports=a.p+"assets/img/repaint_reflow_1.620ebe80.png"},200:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("# 此页面贡献者：阿喵、年轻的小铲")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"css重绘与回流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css重绘与回流","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS重绘与回流")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"浏览器渲染过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染过程","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器渲染过程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们先来讨论一下浏览器在接收到HTML、CSS和JavasSript后，怎样把页面呈现在屏幕上的？\n不同的浏览器的渲染过程存在些许不同，但大体的机制是一样的，下图展示了浏览器下载完所有代码后的大致工作流程：\n"),s("img",{attrs:{src:a(176),alt:"img"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("h5",{attrs:{id:"首先，浏览器解析html源码并构建一个dom树：在dom树中，每个html标签都有相应的节点，并且在介于两个标签中间的文字块也对应一个text节点。dom树的根节点是documentelement，也就是-html-标签；"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首先，浏览器解析html源码并构建一个dom树：在dom树中，每个html标签都有相应的节点，并且在介于两个标签中间的文字块也对应一个text节点。dom树的根节点是documentelement，也就是-html-标签；","aria-hidden":"true"}},[t._v("#")]),t._v(" 首先，浏览器解析HTML源码并构建一个DOM树：在DOM树中，每个HTML标签都有相应的节点，并且在介于两个标签中间的文字块也对应一个text节点。DOM树的根节点是documentElement，也就是"),a("code",[t._v("<html>")]),t._v("标签；")])]),t._v(" "),a("li",[a("h5",{attrs:{id:"然后，浏览器对css代码进行解析，一些当前浏览器不能识别的css-hack写法（如-webkit前缀）将被忽略。css样式中包括浏览器默认样式（user-agent-stylesheet），用户自定义样式表（通过-import引入的外部样式-行内样式）。最终样式会写入html标签的style属性中；"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#然后，浏览器对css代码进行解析，一些当前浏览器不能识别的css-hack写法（如-webkit前缀）将被忽略。css样式中包括浏览器默认样式（user-agent-stylesheet），用户自定义样式表（通过-import引入的外部样式-行内样式）。最终样式会写入html标签的style属性中；","aria-hidden":"true"}},[t._v("#")]),t._v(" 然后，浏览器对CSS代码进行解析，一些当前浏览器不能识别的CSS hack写法（如-webkit前缀）将被忽略。CSS样式中包括浏览器默认样式（user agent stylesheet），用户自定义样式表（通过"),a("link"),t._v(" / import引入的外部样式&行内样式）。最终样式会写入HTML标签的style属性中；")])]),t._v(" "),a("li",[a("h5",{attrs:{id:"接着，构建render树。render树跟dom树有点像但不完全一样。render树能识别样式。假如你用display-none隐藏一个div，这个标签不会在render树中出现。这个规则适用于其他不可视元素，比如head标签等；另外，一个dom元素在render树中可以有多个节点，比如代表p标签的一个文本节点中的每一行文字，又有一个渲染节点。render树中的节点叫做frame-结构体-box-盒子，这些节点都有css盒子属性：width-height-border-margin-等等"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接着，构建render树。render树跟dom树有点像但不完全一样。render树能识别样式。假如你用display-none隐藏一个div，这个标签不会在render树中出现。这个规则适用于其他不可视元素，比如head标签等；另外，一个dom元素在render树中可以有多个节点，比如代表p标签的一个文本节点中的每一行文字，又有一个渲染节点。render树中的节点叫做frame-结构体-box-盒子，这些节点都有css盒子属性：width-height-border-margin-等等","aria-hidden":"true"}},[t._v("#")]),t._v(" 接着，构建render树。render树跟DOM树有点像但不完全一样。render树能识别样式。假如你用display: none隐藏一个div，这个标签不会在render树中出现。这个规则适用于其他不可视元素，比如head标签等；另外，一个DOM元素在render树中可以有多个节点，比如代表p标签的一个文本节点中的每一行文字，又有一个渲染节点。render树中的节点叫做frame-结构体/box-盒子，这些节点都有CSS盒子属性：width, height, border, margin 等等")])]),t._v(" "),a("li",[a("h5",{attrs:{id:"最后，render树构建完毕，浏览器便开始将渲染节点绘制到屏幕上。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后，render树构建完毕，浏览器便开始将渲染节点绘制到屏幕上。","aria-hidden":"true"}},[t._v("#")]),t._v(" 最后，render树构建完毕，浏览器便开始将渲染节点绘制到屏幕上。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"森林和树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#森林和树","aria-hidden":"true"}},[this._v("#")]),this._v(" 森林和树")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Beautiful page"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    \n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Once upon a time there was \n    a looong paragraph...\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token property"}},[t._v("display")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Secret message\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("..."),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n \n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[this._v("documentElement (html)\n  head\n    title\n  body\n    p\n      [text node]\n      \n    div \n      [text node]\n  \n    div\n      img\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascipt extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("root (RenderView)\n  body\n    p\n      line 1\n      line 2\n    div\n      img\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"what-repaints-and-reflows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-repaints-and-reflows","aria-hidden":"true"}},[this._v("#")]),this._v(" WHAT - Repaints and reflows")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("h5",{attrs:{id:"render树的局部或全部需要重新验证，节点大小需要重新计算。这种行为成为reflow回流。请注意这里存在至少一次reflow行为：就是初始化页面布局时的那次。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#render树的局部或全部需要重新验证，节点大小需要重新计算。这种行为成为reflow回流。请注意这里存在至少一次reflow行为：就是初始化页面布局时的那次。","aria-hidden":"true"}},[this._v("#")]),this._v(" render树的局部或全部需要重新验证，节点大小需要重新计算。这种行为成为reflow回流。请注意这里存在至少一次reflow行为：就是初始化页面布局时的那次。")])]),this._v(" "),s("li",[s("h5",{attrs:{id:"屏幕的部分区域需要进行更新：可能是因为节点的几何结构改变，或样式改变（如背景色变化）。这种屏幕更新动作叫repaint-redraw。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#屏幕的部分区域需要进行更新：可能是因为节点的几何结构改变，或样式改变（如背景色变化）。这种屏幕更新动作叫repaint-redraw。","aria-hidden":"true"}},[this._v("#")]),this._v(" 屏幕的部分区域需要进行更新：可能是因为节点的几何结构改变，或样式改变（如背景色变化）。这种屏幕更新动作叫repaint/redraw。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"when-触发重绘-回流的机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-触发重绘-回流的机制","aria-hidden":"true"}},[this._v("#")]),this._v(" WHEN - 触发重绘/回流的机制")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("1.DOM元素的增删改\n2.通过display:none隐藏节点"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("重绘+回流"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，通过visibility:hidden隐藏"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("重绘，因为没有几何结构的改变"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n3.节点的移动、动画\n4.样式表的增删改\n5.浏览器窗口变化（滚动或缩放）\n······（待补充）\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// cache")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bstyle "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// reflow, repaint")]),t._v("\nbstyle"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("padding "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"20px"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{attrs:{class:"token comment"}},[t._v("// another reflow and a repaint")]),t._v("\nbstyle"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("border "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"10px solid red"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{attrs:{class:"token comment"}},[t._v("// repaint only")]),t._v("\nbstyle"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"blue"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// repaint only")]),t._v("\nbstyle"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"#fad"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// reflow, repaint")]),t._v("\nbstyle"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2em"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// reflow, repaint (new DOM element)")]),t._v("\ndocument"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createTextNode")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'dude!'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/*  以下Css Property改变  */")]),t._v("\n\n"),a("span",{attrs:{class:"token number"}},[t._v("1.")]),t._v("background"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("color\n\n"),a("span",{attrs:{class:"token number"}},[t._v("2.")]),t._v("color\n\n"),a("span",{attrs:{class:"token number"}},[t._v("3.")]),t._v("visibility\n\n······（待补充）\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"how-减少重绘和回流-开发优化策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-减少重绘和回流-开发优化策略","aria-hidden":"true"}},[this._v("#")]),this._v(" HOW - 减少重绘和回流: 开发优化策略")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("offsetTop"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offsetLeft"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offsetWidth"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offsetHeight\nscrollTop"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Left"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Width"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Height\nclientTop"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Left"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Width"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Height\n"),a("span",{attrs:{class:"token function"}},[t._v("getComputedStyle")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 或者"),a("span",{attrs:{class:"token constant"}},[t._v("IE")]),t._v("下的currentStyle\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"px"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 最终只有一次重绘和回流被触发")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" $body "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'body'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("css")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'padding'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'1px'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 触发重绘与回流")]),t._v("\n$body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("css")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'color'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 触发重绘")]),t._v("\n$body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("css")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'margin'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'2px'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 触发重绘与回流")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("//两次回流")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" $body "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'body'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("css")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'padding'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'1px'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("css")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'padding'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 此处触发强制回流")]),t._v("\n$body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("css")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'color'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("css")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'margin'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'2px'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("h5",{attrs:{id:"不要一个一个的去改样式。最明智及可维护的是去改变class名，而不是样式。但是这种是指静态的样式修改。假如样式是动态变化的，可以选择修改csstext，而不是每次有变动就直接操作元素的每个style属性。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不要一个一个的去改样式。最明智及可维护的是去改变class名，而不是样式。但是这种是指静态的样式修改。假如样式是动态变化的，可以选择修改csstext，而不是每次有变动就直接操作元素的每个style属性。","aria-hidden":"true"}},[this._v("#")]),this._v(" 不要一个一个的去改样式。最明智及可维护的是去改变class名，而不是样式。但是这种是指静态的样式修改。假如样式是动态变化的，可以选择修改cssText，而不是每次有变动就直接操作元素的每个style属性。")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// bad")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    top  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"px"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" top  "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"px"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// better ")]),t._v("\nel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('" theclassname"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// better")]),t._v("\nel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cssText "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"; left: "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"px; top: "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" top "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"px;"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("h5",{attrs:{id:"离线-处理多个dom操作。“离线”的意思是将需要进行的dom操作脱离dom树，比如："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#离线-处理多个dom操作。“离线”的意思是将需要进行的dom操作脱离dom树，比如：","aria-hidden":"true"}},[this._v("#")]),this._v(' "离线"处理多个DOM操作。“离线”的意思是将需要进行的DOM操作脱离DOM树，比如：')])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token number"}},[t._v("1.")]),t._v("用documentFragment集中处理临时操作；\n"),a("span",{attrs:{class:"token number"}},[t._v("2.")]),t._v("将需要更新的节点克隆，在克隆节点上进行更新操作，然后把原始节点替换为克隆节点；\n"),a("span",{attrs:{class:"token number"}},[t._v("3.")]),t._v("先通过设置display"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none将节点隐藏（此时出发一次回流和重绘），然后对隐藏的节点进行"),a("span",{attrs:{class:"token number"}},[t._v("100")]),t._v("个操作（这些操作都会单独触发回流和重绘），完毕后将节点的display恢复显示（此时再次触发一次回流和重绘）。通过这种方法，将可能存在的多次repaints"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("reflows缩减为"),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("次。\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("h5",{attrs:{id:"不要过度进行计算样式的操作。如果你需要用到一个样式值，请用局部变量储存，然后利用这个局部变量进行相关操作。例如："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不要过度进行计算样式的操作。如果你需要用到一个样式值，请用局部变量储存，然后利用这个局部变量进行相关操作。例如：","aria-hidden":"true"}},[this._v("#")]),this._v(" 不要过度进行计算样式的操作。如果你需要用到一个样式值，请用局部变量储存，然后利用这个局部变量进行相关操作。例如：")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// bad")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("big"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" loop"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" here"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"px"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop  "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"px"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n"),a("span",{attrs:{class:"token comment"}},[t._v("// better")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    top  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop\n    esty "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("big"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" loop"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" here"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    left "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    top  "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    esty"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"px"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    esty"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" top  "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"px"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"怎样使用devtools查看回流和重绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎样使用devtools查看回流和重绘","aria-hidden":"true"}},[this._v("#")]),this._v(" 怎样使用devtools查看回流和重绘")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"学习资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学习资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 学习资料")])}],e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),a("p",[t._v("这个HTML文档对应的DOM树：每个标签对应一个节点，以及每个标签之间的文本也为一个节点。（实际上，空白区域也会被映射为一个text节点，为了简单说明，在此忽略）。因此DOM树：")]),t._v(" "),t._m(7),a("p",[t._v("render树包含了DOM树的可视部分。因此他丢掉了一些东西，比如头部head标签和隐藏的div，同时他也为文本块增加了节点（又称作frames，boxs）。因此render树：")]),t._v(" "),t._m(8),a("p",[t._v("渲染树的root根节点是一个包括了所有其他节点的结构体（盒子）。你可以将它理解为浏览器窗口的内部区域，毕竟页面被限制在这个区域内。从技术上，WebKit把root节点称为RenderView（渲染视图），他与CSS初始包含块相对应，从坐标(0,0)到(window.innerWidth,window.innerHeight)。")]),t._v(" "),a("p",[t._v("接下来，我们将研究浏览器是如何通过循环遍历渲染树把页面展示到屏幕上的。")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("你的页面中至少存在一个初始页面布局，并且和一次绘制动作。当然这仅仅是第一次绘制，在此之后，在用户的交互行为中，页面结构以及CSS可能会有变化。任何影响到渲染树的行为都会触发以下一种或者多种动作：")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("重绘和回流可能是昂贵的，它们可能会伤害用户体验，并使用户界面显得迟钝。")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("任何影响到构造渲染树的行为都会触发repaint或reflow，例如")]),t._v(" "),t._m(12),a("p",[t._v("举个栗子：")]),t._v(" "),t._m(13),a("p",[t._v("可见，repaint是指元素的样式改变不影响文档流整体结构时，渲染树结构也就没有变化，因此仅仅是重新显示样式。重绘的代价是比较小的。注意，这并不是说样式改变不会导致回流，只是特定样式改变，才不会导致回流。第二个需要注意的点是，reflow一定需要repaint，但是repaint却不需要reflow。")]),t._v(" "),t._m(14),a("p",[t._v("有些reflow行为要比其他的花销大一些。比如你对body中最后的一个直属子元素乱搞，你可能不会影响到什么其他的节点，但是如果你对body中最前面的一个节点添加动画，或者改变这个div的尺寸，这就会将后面跟着的所有元素都推下去了，这种行为是非常消耗性能的。")]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("由于reflows和repaints带来的render树的改变会导致昂贵的性能消耗，而浏览器的目标就是减少这种副作用。浏览器的策略就是不执行/推迟执行。他会设置一个队列用来存放这些行为变动的需求，并且一次性执行他们。也就是说，存在多个需要reflow的动作会被合并为一个reflow动作。浏览器将这些动作加入到缓存队列中，当到达一定的时间间隔，或者累积了足够多个后执行它们。")]),t._v(" "),a("p",[t._v("但是，有时候某些的代码会破坏上述的浏览器优化机制，导致浏览器刷新缓存队列并且执行所有已缓存的操作行为。这种情况发生在获取下面这些样式信息的行为中：")]),t._v(" "),t._m(16),a("p",[t._v("以上的行为本质上是获取一个节点的样式信息，浏览器必须提供最新的值。为了达到此目的，浏览器需要将缓存队列中的所有行为全部执行完毕，并且被强制回流。所以，在一条逻辑中同时执行set和get样式操作时非常不好的，如下：")]),t._v(" "),t._m(17),t._m(18),a("p",[t._v("减少reflows/repaints引起的用户体验上的负面影响的策略是尽量少的引起reflows/repaints，以及尽量少的请求获得样式信息，由此，浏览器则可以利用其机制优化合并reflows行为。那么怎么做呢？")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),a("p",[t._v("理解浏览器重绘以及回流的主要目的是为了优化性能。当你在打算改变样式时，首先考虑一下渲染树的机制，并且评估一下你的操作会引发多少刷新渲染树的行为。例如，浏览器认为 position 为 absolute 或 fixed 的元素更改只会影响其本身和子元素，而 static 的元素变化则会影响之后的所有元素，也就是说，一个绝对定位的节点是会脱离文档流，所以当对此节点应用动画时不会对其他节点产生很大影响，当绝对定位的节点置于其他节点上层时，其他节点只会触发重绘，而不会触发回流。")]),t._v(" "),t._m(25),t._v(" "),a("p",[a("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool?hl=zh-cn#profile-painting",target:"_blank",rel:"noopener noreferrer"}},[t._v("分析绘制"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/rendering/?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("渲染性能"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://taobaofed.org/blog/2016/04/25/performance-composite/",target:"_blank",rel:"noopener noreferrer"}},[t._v("无线性能优化：Composite"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.chromium.org/developers/design-documents/gpu-accelerated-compositing-in-chrome",target:"_blank",rel:"noopener noreferrer"}},[t._v("GPU Accelerated Compositing in Chrome"),a("OutboundLink")],1)]),t._v(" "),t._m(26),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.phpied.com/rendering-repaint-reflowrelayout-restyle/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rendering: repaint, reflow/relayout, restyle"),a("OutboundLink")],1),t._v(" (以上内容97%翻译自此原文)")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.cnblogs.com/ihardcoder/p/3927709.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("[翻译]浏览器渲染Rendering那些事"),a("OutboundLink")],1),t._v(" (以上内容参考了此翻译文章，并修正了不准确的翻译或错误部分)")])])},n,!1,null,null,null);s.default=r.exports}}]);