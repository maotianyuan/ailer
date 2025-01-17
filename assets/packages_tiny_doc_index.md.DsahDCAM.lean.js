import{_ as i,c as a,a2 as n,o as p}from"./chunks/framework.Dvyrx0Dh.js";const c=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"packages/tiny/doc/index.md","filePath":"packages/tiny/doc/index.md"}'),l={name:"packages/tiny/doc/index.md"};function t(h,s,k,e,E,d){return p(),a("div",null,s[0]||(s[0]=[n(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">tinyLottie</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#A31515;--shiki-dark:#9ECBFF;"> &#39;@mix-ability/tiny&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="base64-压缩" tabindex="-1">Base64 压缩 <a class="header-anchor" href="#base64-压缩" aria-label="Permalink to &quot;Base64 压缩&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#B392F0;">tinyLottie</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">  type:</span><span style="--shiki-light:#A31515;--shiki-dark:#9ECBFF;"> &#39;TinyLottieBase64&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">  options:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    config:</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">      key:</span><span style="--shiki-light:#A31515;--shiki-dark:#9ECBFF;"> &#39;你的KEY&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">     * 绝对路径 input 放的文件</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">     * a.json</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">     * b.json</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">    */</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    input:</span><span style="--shiki-light:#A31515;--shiki-dark:#9ECBFF;"> &#39;./public/TinyLottieBase64/input&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    output:</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">      /** 绝对路径 */</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">      dir:</span><span style="--shiki-light:#A31515;--shiki-dark:#9ECBFF;"> &#39;./public/TinyLottieBase64/output&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="内置-转化为-外置" tabindex="-1">内置 转化为 外置 <a class="header-anchor" href="#内置-转化为-外置" aria-label="Permalink to &quot;内置 转化为 外置&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#B392F0;">tinyLottie</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">  type:</span><span style="--shiki-light:#A31515;--shiki-dark:#9ECBFF;"> &#39;TinyLottieIn2Out&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">  options:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    config:</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;"> {},</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">     * 绝对路径 input 放的文件</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">     * a.json</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">     * b.json</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">    */</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    input:</span><span style="--shiki-light:#A31515;--shiki-dark:#9ECBFF;"> &#39;./public/TinyLottieIn2Out/input&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    output:</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">      /** 绝对路径 */</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">      dir:</span><span style="--shiki-light:#A31515;--shiki-dark:#9ECBFF;"> &#39;./public/TinyLottieIn2Out/output&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="外置-转化为-内置" tabindex="-1">外置 转化为 内置 <a class="header-anchor" href="#外置-转化为-内置" aria-label="Permalink to &quot;外置 转化为 内置&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#B392F0;">tinyLottie</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">  type:</span><span style="--shiki-light:#A31515;--shiki-dark:#9ECBFF;"> &#39;TinyLottieOut2In&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">  options:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    config:</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;"> {},</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">     * 绝对路径 input 放的文件</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">     * 文件夹A/xxx.json</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">     * 文件夹B/xxx.json</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">    */</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    input:</span><span style="--shiki-light:#A31515;--shiki-dark:#9ECBFF;"> &#39;./public/TinyLottieOut2In/input&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">    output:</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">      /**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">       * 绝对路径 output 放的文件</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">       * A.json</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">       * B.json</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A737D;">      */</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;">      dir:</span><span style="--shiki-light:#A31515;--shiki-dark:#9ECBFF;"> &#39;./public/TinyLottieOut2In/output&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div>`,9)]))}const y=i(l,[["render",t]]);export{c as __pageData,y as default};
