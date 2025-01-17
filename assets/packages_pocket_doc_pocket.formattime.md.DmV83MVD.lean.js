import{_ as a,c as e,a2 as s,o as i}from"./chunks/framework.Dvyrx0Dh.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"packages/pocket/doc/pocket.formattime.md","filePath":"packages/pocket/doc/pocket.formattime.md"}'),p={name:"packages/pocket/doc/pocket.formattime.md"};function r(o,t,h,n,m,l){return i(),e("div",null,t[0]||(t[0]=[s('<p><a href="./">Home</a> &gt; <a href="./pocket.html">@ailer/pocket</a> &gt; <a href="./pocket.formattime.html">formatTime</a></p><h2 id="formattime-function" tabindex="-1">formatTime() function <a class="header-anchor" href="#formattime-function" aria-label="Permalink to &quot;formatTime() function&quot;">​</a></h2><p>格式化时间</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes light-plus github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#B392F0;">formatTime</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">time</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#267F99;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">format</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#A31515;--shiki-dark:#9ECBFF;"> &#39;hh:mm:ss&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#A31515;--shiki-dark:#9ECBFF;"> &#39;HH小时mm分钟ss秒&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> string</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th><p>Parameter</p></th><th><p>Type</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>time</p></td><td><p>number</p></td><td><p>要格式化的时间（秒）</p></td></tr><tr><td><p>format</p></td><td><p>&#39;hh:mm:ss&#39; | &#39;HH小时mm分钟ss秒&#39;</p></td><td><p><em>(Optional)</em> 输出的时间格式，可选值为 &#39;hh:mm:ss&#39;（默认）和 &#39;HH小时mm分钟ss秒&#39;</p></td></tr></tbody></table> **Returns:** <p>string</p><p>格式化后的时间字符串</p><h2 id="exceptions" tabindex="-1">Exceptions <a class="header-anchor" href="#exceptions" aria-label="Permalink to &quot;Exceptions&quot;">​</a></h2><p>如果传入的时间为负数，则抛出 RangeError</p><p>如果传入的格式不正确，则抛出 Error</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>// 返回值为 &quot;01:23:45&quot; formatTime(5025); // 返回值为 &quot;140小时15分钟12秒&quot; formatTime(12121212, &#39;HH小时mm分钟ss秒&#39;)</p>',15)]))}const c=a(p,[["render",r]]);export{k as __pageData,c as default};
