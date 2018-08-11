(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{235:function(e,_,v){"use strict";v.r(_);var t=v(0),o=Object(t.a)({},function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("div",{staticClass:"content"},[e._m(0),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),v("p",[e._v("A BFC is created by one of the following:")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),v("p",[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"}},[e._v("BFC"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("a",{attrs:{href:"http://www.w3cplus.com/css/understanding-block-formatting-contexts-in-css.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("理解CSS中BFC"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("a",{attrs:{href:"http://www.iyunlu.com/view/css-xhtml/55.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("那些年我们一起清除过的浮动"),v("OutboundLink")],1)])])},[function(){var e=this.$createElement,_=this._self._c||e;return _("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{attrs:{class:"token comment"}},[this._v("# 此页面贡献者：阿喵、年轻的小铲")]),this._v("\n")])])])},function(){var e=this.$createElement,_=this._self._c||e;return _("h1",{attrs:{id:"块格式化上下文-bfc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#块格式化上下文-bfc","aria-hidden":"true"}},[this._v("#")]),this._v(" 块格式化上下文 (BFC)")])},function(){var e=this.$createElement,_=this._self._c||e;return _("p",[_("code",[this._v("BFC")]),this._v(" 包含创建它的元素内的所有内容。")])},function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("p",[v("code",[e._v("BFC")]),e._v(" 对于"),v("code",[e._v("定位")]),e._v("与"),v("code",[e._v("闭合浮动")]),e._v("很重要。定位和闭合浮动的样式规则只适用于处于同一 "),v("code",[e._v("BFC")]),e._v(" 内的元素。浮动不会影响其它 "),v("code",[e._v("BFC")]),e._v(" 中元素的布局，"),v("code",[e._v("Margin collapsing")]),e._v(" 也只发生在属于同一BFC内的块级元素之间。")])},function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ul",[v("li",[v("p",[e._v("根元素，或其它包含它的元素")])]),e._v(" "),v("li",[v("p",[e._v("块元素 ( "),v("code",[e._v("overflow")]),e._v(" 值不为 "),v("code",[e._v("visible")]),e._v(" )")])]),e._v(" "),v("li",[v("p",[e._v("内联块元素 ("),v("code",[e._v("display")]),e._v(" 值为 "),v("code",[e._v("inline-block")]),e._v(" )")])]),e._v(" "),v("li",[v("p",[e._v("浮动元素 ( "),v("code",[e._v("float")]),e._v(" 值不为 "),v("code",[e._v("none")]),e._v(" )")])]),e._v(" "),v("li",[v("p",[e._v("绝对定位元素 ("),v("code",[e._v("position")]),e._v(" 值为 "),v("code",[e._v("absolute")]),e._v(" 或 "),v("code",[e._v("fixed")]),e._v(" )")])]),e._v(" "),v("li",[v("p",[e._v("弹性元素 ( 其父级元素设置了 "),v("code",[e._v("display")]),e._v(" 值为 "),v("code",[e._v("flex")]),e._v(" 或 "),v("code",[e._v("inline-flex")]),e._v(" )")])]),e._v(" "),v("li",[v("p",[e._v("网格元素 ( 其父级元素设置了 "),v("code",[e._v("display")]),e._v(" 值为 "),v("code",[e._v("grid")]),e._v(" 或 "),v("code",[e._v("inline-grid")]),e._v(" )")])]),e._v(" "),v("li",[v("p",[e._v("多列容器 (元素的 "),v("code",[e._v("column-count")]),e._v(" 或 "),v("code",[e._v("column-width")]),e._v(" 值不为 "),v("code",[e._v("auto")]),e._v("， 包括 "),v("code",[e._v("column-count: 1")]),e._v(" 的元素)")])]),e._v(" "),v("li",[v("p",[e._v("表格单元格元素 (HTML表格单元格，或者 "),v("code",[e._v("display")]),e._v(" 值为 "),v("code",[e._v("table-cell")]),e._v(" )")])]),e._v(" "),v("li",[v("p",[e._v("表格标题元素 (HTML表格标题，或者 "),v("code",[e._v("display")]),e._v(" 值为 "),v("code",[e._v("table-caption")]),e._v(" )")])]),e._v(" "),v("li",[v("p",[e._v("匿名表格元素 ("),v("code",[e._v("display")]),e._v(" 值为 "),v("code",[e._v("table")]),e._v(" | "),v("code",[e._v("table-row")]),e._v(" | "),v("code",[e._v("table-row-group")]),e._v(" | "),v("code",[e._v("table-header-group")]),e._v(" | "),v("code",[e._v("table-footer-group")]),e._v(" (分别是HTML tables | table rows, table bodies, table headers and table footers的默认属性)，或 "),v("code",[e._v("inline-table")]),e._v(")")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("display")]),e._v(" 值为 "),v("code",[e._v("flow-root")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("contain")]),e._v(" 值为 "),v("code",[e._v("layout")]),e._v(" | "),v("code",[e._v("content")]),e._v(" | "),v("code",[e._v("strict")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("column-span")]),e._v(" 值为 "),v("code",[e._v("all")]),e._v(" (即便具有 "),v("code",[e._v("column-span: all")]),e._v(" 的元素没有被包裹在一个多列容器中，也始终会创建一个新的BFC)")])])])},function(){var e=this.$createElement,_=this._self._c||e;return _("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);_.default=o.exports}}]);