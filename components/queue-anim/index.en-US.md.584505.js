(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1130:function(n,a){n.exports={content:["section",["h2","How To Use"],["h3","Install"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> rc-queue-anim --save'},["code","$ npm install rc-queue-anim --save"]],["h3","Usage"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> QueueAnim <span class="token keyword">from</span> <span class="token string">\'rc-queue-anim\'</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QueueAnim</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Queue entering<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Queue entering<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Queue entering<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Queue entering<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>QueueAnim</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code",'import QueueAnim from \'rc-queue-anim\';\nReactDOM.render(<QueueAnim>\n  <div key="demo1">Queue entering</div>\n  <div key="demo2">Queue entering</div>\n  <div key="demo3">Queue entering</div>\n  <div key="demo4">Queue entering</div>\n</QueueAnim>, mountNode);']],["blockquote",["p","Each subtag must have a key, and if no key is set, no animation will be performed."]]],meta:{cols:2,order:2,vertical:!0,title:"QueueAnim",filename:"components/queue-anim/index.en-US.md"},description:["section",["p","Add queue animation to a set of elements with a simple configuration. See the specific ref ",["a",{title:null,href:"/api/queue-anim"},"API"]],["h2","When To Use"],["ul",["li",["p","The transition from content A to content B can effectively attract users' attention, highlight the visual center, and improve the overall visual effect.。"]],["li",["p","Small information elements arranged or a lot of blocky cases, entering according to a certain path level, differentiate the dimension hierarchy, make page transitions smoother and more comfortable, improve overall visuals and product texture"]],["li",["p","Ideal for homepages, as well as page transitions for single-page apps."]]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#How-To-Use",title:"How To Use"},"How To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["blockquote",["p","v1.2.0 animConfig add ",["a",{title:null,href:"http://react-component.github.io/queue-anim/examples/timeline.html"},"timeline"]]],["table",["thead",["tr",["th","name"],["th","type"],["th","default"],["th","description"]]],["tbody",["tr",["td","type"],["td","string / array"],["td",["code","right"]],["td","Animation type  ",["br"]," ",["code","alpha"]," ",["code","left"]," ",["code","right"]," ",["code","top"]," ",["code","bottom"]," ",["code","scale"]," ",["code","scaleBig"]," ",["code","scaleX"]," ",["code","scaleY"]]],["tr",["td","animConfig"],["td","object / array"],["td","null"],["td","Custom config, See below for more details ",["a",{title:null,href:"#animConfig"},"animConfig"]]],["tr",["td","delay"],["td","number / array"],["td","0"],["td","Default unit: ",["code","ms"],", delay of animation"]],["tr",["td","duration"],["td","number / array"],["td","450"],["td","Default unit: ",["code","ms"],", duration of animation"]],["tr",["td","interval"],["td","number / array"],["td","100"],["td","Default unit: ",["code","ms"],", interval of duration"]],["tr",["td","leaveReverse"],["td","boolean"],["td","false"],["td","reverse animation order at leave"]],["tr",["td","ease"],["td","string / array"],["td",["code","easeOutQuart"]],["td","animation easing config like 'ease', ",["span","'easeIn', 'easeOut'"],", [",["span",".42,0,.58,1"],", ",["span",".42,0,.58,1"],"], ",["a",{title:null,href:"http://julian.com/research/velocity/#easing"},"more"]]],["tr",["td","appear"],["td","boolean"],["td","true"],["td","whether support appear anim"]],["tr",["td","animatingClassName"],["td","array"],["td",["code","['queue-anim-entering', 'queue-anim-leaving']"]],["td","className to every element of animating"]],["tr",["td","component"],["td","string"],["td",["code","div"]],["td","QueueAnim replaced tag name"]],["tr",["td","componentProps"],["td","object"],["td","{}"],["td","Replaced component props"]],["tr",["td","forcedReplay"],["td","boolean"],["td","false"],["td","Whether to forcibly replay the animation, for example: trigger the ",["code","leave"]," when the ",["code","enter"],", and immediately execute the ",["code","enter"],"."]],["tr",["td","onEnd"],["td","func"],["td","null"],["td","animation end callback({ key, type }); type: ",["code","enter"]," or ",["code","leave"]]]]],["blockquote",["p","Above props support array format, like ","[","'left', 'top'","]",", ",["code","top"]," is leave config."]],["h3","animConfig"],["p",["strong","Data fall into three categories:"]],["ul",["li",["p","Custom set start: ",["code","{ opacity:[1, 0] }"]," ；\n",["br"]," default;\n",["br"],"type: ",["code","{ opacity: Array<end, start> }"],"；\n",["br"],"leave automatic reverse: ",["code","{ opacity: Array<start, end> }"],"；\n",["br"],"\n",["br"]]],["li",["p","Custom: ",["code","{ opacity: 0 }"],"；\n",["br"]," Start position is not set.\n",["br"],"\n",["br"]]],["li",["p","Array: ",["code","[{ opacity:[1, 0] }, { opacity:[1, 0] }]"],"；\n",["br"]," type: ",["code","[{ opacity: Array<end, start> }, { opacity: Array<start, end>}]"]]]]]}}}]);