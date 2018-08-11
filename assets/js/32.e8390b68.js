(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{202:function(t,e,r){"use strict";r.r(e);var _=r(0),i=Object(_.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("简单地说，内容分发网络（content delivery network）就是对特定内容进行分发的专门网络。这个网络中的节点可以是 Web 服务器、反向代理或缓存。")]),t._v(" "),r("p",[t._v("最简单的 CDN 由一个DNS服务器和几台缓存服务器组成：")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("CDN 可以帮助网站更快地加载。分散网络流量，避免拥塞。分发内容，使之更靠近终端用户，这样从服务器到客户端的传输时间就变短了。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("p",[r("a",{attrs:{href:"https://div.io/topic/745",target:"_blank",rel:"noopener noreferrer"}},[t._v("变态的静态资源缓存与更新"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://div.io/topic/930",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端工程之CDN部署"),r("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),r("p",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Content_delivery_network",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki - Content_delivery_network"),r("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"what"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what","aria-hidden":"true"}},[this._v("#")]),this._v(" what")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[t._v("当用户点击网站页面上的内容 URL ，经过本地 DNS 系统解析， DNS 系统会最终将域名的解析权交给 CNAME 指向的 CDN 专用 DNS 服务器。")]),t._v(" "),r("li",[t._v("CDN 的 DNS 服务器将 CDN 的全局负载均衡设备 IP 地址返回用户。")]),t._v(" "),r("li",[t._v("用户向 CDN 的全局负载均衡设备发起内容 URL 访问请求。")]),t._v(" "),r("li",[t._v("CDN 全局负载均衡设备根据用户 IP 地址，以及用户请求的内容 URL，选择一台用户所属区域的区域负载均衡设备，告诉用户向这台设备发起请求。")]),t._v(" "),r("li",[t._v("区域负载均衡设备会为用户选择一台合适的缓存服务器提供服务，选择的依据包括：根据用户 IP 地址，判断哪一台服务器距用户最近；根据用户所请求的 URL 中携带的内容名称，判断哪一台服务器上有用户所需内容；查询各个服务器当前的负载情况，判断哪一台服务器尚有服务能力。基于以上这些条件的综合分析之后，区域负载均衡设备会向全局负载均衡设备返回一台缓存服务器的 IP 地址。")]),t._v(" "),r("li",[t._v("全局负载均衡设备把服务器的 IP 地址返回给用户。")]),t._v(" "),r("li",[t._v("用户向缓存服务器发起请求，缓存服务器响应用户请求，将用户所需内容传送到用户终端。如果这台缓存服务器上并没有用户想要的内容，而区域均衡设备依然将它分配给了用户，那么这台服务器就要向它的上一级缓存服务器请求内容，直至追溯到网站的源服务器将内容拉到本地。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"why"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why","aria-hidden":"true"}},[this._v("#")]),this._v(" why")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("p",[t._v("减小请求压力")]),t._v(" "),r("p",[t._v("通过 CDN 向用户传输静态资源文件，可以降低我们自身服务器的请求压力。")])]),t._v(" "),r("li",[r("p",[t._v("提高访问速度")]),t._v(" "),r("p",[t._v("大多数 CDN 在全球都有服务器，所以 CDNs 上的服务器在地理位置上，可能比你自己的服务器更接近你的用户。对于 TCP 传输而言，TCP 的速度 "),r("code",[t._v("throughput")]),t._v(" 会受到延迟时间 "),r("code",[t._v("latency")]),t._v(" 与数据包漏失率 "),r("code",[t._v("packet loss")]),t._v(" 影响。为了改善这些负面因素，CDN 通常会指派较近、较顺畅的服务器节点将数据传输给用户。虽然距离并不是绝对因素，但这么做可以尽可能提高性能，用户将会觉得比较顺畅。这使得一些比较高带宽的应用（传输高清画质的视频）更容易推动。")])]),t._v(" "),r("li",[r("p",[t._v("可靠性")]),t._v(" "),r("p",[t._v("有异地备援。当某个服务器故障时，系统将会调用其他邻近地区的服务器服务，进而提供接近100%的可靠度。")]),t._v(" "),r("p",[t._v("CDNs已经配置了恰当的缓存设置。使用 CDN 节省了在你的服务器中对静态资源文件的配置。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"how"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how","aria-hidden":"true"}},[this._v("#")]),this._v(" how")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"学习资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#学习资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 学习资料")])}],!1,null,null,null);e.default=i.exports}}]);