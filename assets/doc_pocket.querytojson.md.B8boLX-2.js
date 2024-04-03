import{_ as t,c as s,a,a4 as e,m as i,o as p}from"./chunks/framework.C_gexpgy.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"doc/pocket.querytojson.md","filePath":"doc/pocket.querytojson.md"}'),n={name:"doc/pocket.querytojson.md"},r=e('<p><a href="./">Home</a> &gt; <a href="./pocket.html">@ailer/pocket</a> &gt; <a href="./pocket.querytojson.html">queryToJson</a></p><h2 id="querytojson-function" tabindex="-1">queryToJson() function <a class="header-anchor" href="#querytojson-function" aria-label="Permalink to &quot;queryToJson() function&quot;">​</a></h2><p>将url地址的query参数转换为JSON数据 1⃣️?a=1&amp;b=2 =&gt; {a:1, b:2} 2⃣️?a[0]=1 =&gt; {&quot;a[0]&quot;: 1} 3 支持多问号 ?a=1&amp;#/result?b=1&amp;a=2 =&gt; {b: 1, a: 2}</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes light-plus github-dark vp-code"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#0000FF;--shiki-dark:#F97583;"> declare</span><span style="--shiki-light:#0000FF;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#795E26;--shiki-dark:#B392F0;"> queryToJson</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">url</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#267F99;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#267F99;--shiki-dark:#B392F0;"> QueryToJsonOptions</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#267F99;--shiki-dark:#B392F0;"> QueryToJSONResult</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th><p>Parameter</p></th><th><p>Type</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>url</p></td><td><p>string</p></td><td><p><em>(Optional)</em> url地址</p></td></tr><tr><td><p>options</p></td><td><p>QueryToJsonOptions</p></td><td><p><em>(Optional)</em> queryToJson选项参数</p></td></tr></tbody></table>',7),o=i("p",null,"QueryToJSONResult",-1);function h(l,d,k,c,u,y){return p(),s("div",null,[r,a(" **Returns:** "),o])}const _=t(n,[["render",h]]);export{m as __pageData,_ as default};