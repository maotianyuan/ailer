import{_ as t,c as e,a as s,a4 as i,m as a,o as p}from"./chunks/framework.C_gexpgy.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"packages/pocket/doc/pocket.compose.md","filePath":"packages/pocket/doc/pocket.compose.md"}'),n={name:"packages/pocket/doc/pocket.compose.md"},o=i('<p><a href="./">Home</a> &gt; <a href="./pocket.html">@ailer/pocket</a> &gt; <a href="./pocket.compose.html">compose</a></p><h2 id="compose-function" tabindex="-1">compose() function <a class="header-anchor" href="#compose-function" aria-label="Permalink to &quot;compose() function&quot;">​</a></h2><p>函数组合，执行顺序从右到左 最后一个函数参数可以传递多个参数，其他函数必须是单参数函数</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes light-plus github-dark vp-code"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#B392F0;">compose</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">fns</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#267F99;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">[]) </span><span style="--shiki-light:#0000FF;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#267F99;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">[]) </span><span style="--shiki-light:#0000FF;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> any</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th><p>Parameter</p></th><th><p>Type</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>fns</p></td><td><p>any[]</p></td><td><p>要组合的函数数组</p></td></tr></tbody></table>',7),h=a("p",null,"(...args: any[]) => any",-1),r=a("p",null,"组合后的函数",-1),l=a("h2",{id:"example",tabindex:"-1"},[s("Example "),a("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1),c=a("p",null,"const fn1 = (a0, a1, a3) => a0 + a1 + a2; const fn2 = (a0) => a0 * 10; const fn3 = (a0) => a0 + 2; const fn = compose(fn3, fn2, fn1); const result = fn(1, 2, 3) // => 1 * 2 * 3 = 6 * 10 = 60 + 2 => 62",-1);function k(d,m,g,_,y,f){return p(),e("div",null,[o,s(" **Returns:** "),h,r,l,c])}const E=t(n,[["render",k]]);export{F as __pageData,E as default};
