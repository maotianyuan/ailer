<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@ailer/pocket](./pocket.md) &gt; [queryToJson](./pocket.querytojson.md)

## queryToJson() function

将url地址的query参数转换为JSON数据 1⃣️?a=1&amp;b=2 =<!-- -->&gt; {<!-- -->a:1, b:2<!-- -->} 2⃣️?a\[0\]=1 =<!-- -->&gt; {<!-- -->"a\[0\]": 1<!-- -->} 3 支持多问号 ?a=1&amp;\#/result?b=1&amp;a=2 =<!-- -->&gt; {<!-- -->b: 1, a: 2<!-- -->}

**Signature:**

```typescript
export declare function queryToJson(url?: string, options?: QueryToJsonOptions): QueryToJSONResult;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

url


</td><td>

string


</td><td>

_(Optional)_ url地址


</td></tr>
<tr><td>

options


</td><td>

QueryToJsonOptions


</td><td>

_(Optional)_ queryToJson选项参数


</td></tr>
</tbody></table>
**Returns:**

QueryToJSONResult

