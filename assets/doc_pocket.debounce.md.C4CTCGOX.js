import{_ as i,c as t,a,a4 as e,m as s,o as p}from"./chunks/framework.4aTu-Nia.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"doc/pocket.debounce.md","filePath":"doc/pocket.debounce.md"}'),h={name:"doc/pocket.debounce.md"},n=e('<p><a href="./">Home</a> &gt; <a href="./pocket.html">@zero/pocket</a> &gt; <a href="./pocket.debounce.html">debounce</a></p><h2 id="debounce-function" tabindex="-1">debounce() function <a class="header-anchor" href="#debounce-function" aria-label="Permalink to &quot;debounce() function&quot;">​</a></h2><p>防抖函数，限制某个函数在连续触发的情况下只执行一次</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes light-plus github-dark vp-code"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#B392F0;">debounce</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#795E26;--shiki-dark:#B392F0;">callback</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#267F99;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#267F99;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">delay</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#267F99;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">immediate</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#267F99;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#795E26;--shiki-dark:#B392F0;">hint</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#0000FF;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#267F99;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#267F99;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#0000FF;--shiki-dark:#F97583;"> void</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th><p>Parameter</p></th><th><p>Type</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>callback</p></td><td><p>(...args: any) =&gt; void</p></td><td><p>需要防抖的函数</p></td></tr><tr><td><p>delay</p></td><td><p>number</p></td><td><p><em>(Optional)</em> 防抖延迟时间，默认为 500 毫秒</p></td></tr><tr><td><p>immediate</p></td><td><p>boolean</p></td><td><p><em>(Optional)</em> 是否立即执行一次，默认为 true</p></td></tr><tr><td><p>hint</p></td><td><p>() =&gt; void</p></td><td><p><em>(Optional)</em> 防抖期间执行的函数，用于提示</p></td></tr></tbody></table>',7),k=s("p",null,"(...args: any) => void",-1),l=s("p",null,"防抖后的函数",-1);function d(r,o,c,g,F,y){return p(),t("div",null,[n,a(" **Returns:** "),k,l])}const E=i(h,[["render",d]]);export{m as __pageData,E as default};
