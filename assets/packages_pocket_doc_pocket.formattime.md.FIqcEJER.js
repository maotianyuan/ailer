import{_ as e,c as s,a,a4 as i,m as t,o as p}from"./chunks/framework.C_gexpgy.js";const x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"packages/pocket/doc/pocket.formattime.md","filePath":"packages/pocket/doc/pocket.formattime.md"}'),r={name:"packages/pocket/doc/pocket.formattime.md"},n=i('<p><a href="./">Home</a> &gt; <a href="./pocket.html">@ailer/pocket</a> &gt; <a href="./pocket.formattime.html">formatTime</a></p><h2 id="formattime-function" tabindex="-1">formatTime() function <a class="header-anchor" href="#formattime-function" aria-label="Permalink to &quot;formatTime() function&quot;">​</a></h2><p>格式化时间</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes light-plus github-dark vp-code"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#B392F0;">formatTime</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">time</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#267F99;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">format</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#A31515;--shiki-dark:#9ECBFF;"> &#39;hh:mm:ss&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#A31515;--shiki-dark:#9ECBFF;"> &#39;HH小时mm分钟ss秒&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> string</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th><p>Parameter</p></th><th><p>Type</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>time</p></td><td><p>number</p></td><td><p>要格式化的时间（秒）</p></td></tr><tr><td><p>format</p></td><td><p>&#39;hh:mm:ss&#39; | &#39;HH小时mm分钟ss秒&#39;</p></td><td><p><em>(Optional)</em> 输出的时间格式，可选值为 &#39;hh:mm:ss&#39;（默认）和 &#39;HH小时mm分钟ss秒&#39;</p></td></tr></tbody></table>',7),o=t("p",null,"string",-1),h=t("p",null,"格式化后的时间字符串",-1),l=t("h2",{id:"exceptions",tabindex:"-1"},[a("Exceptions "),t("a",{class:"header-anchor",href:"#exceptions","aria-label":'Permalink to "Exceptions"'},"​")],-1),m=t("p",null,"如果传入的时间为负数，则抛出 RangeError",-1),d=t("p",null,"如果传入的格式不正确，则抛出 Error",-1),c=t("h2",{id:"example",tabindex:"-1"},[a("Example "),t("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1),k=t("p",null,`// 返回值为 "01:23:45" formatTime(5025); // 返回值为 "140小时15分钟12秒" formatTime(12121212, 'HH小时mm分钟ss秒')`,-1);function _(f,g,u,E,y,F){return p(),s("div",null,[n,a(" **Returns:** "),o,h,l,m,d,c,k])}const T=e(r,[["render",_]]);export{x as __pageData,T as default};
