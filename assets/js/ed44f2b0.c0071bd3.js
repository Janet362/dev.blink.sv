(self.webpackChunkdev_blink_sv=self.webpackChunkdev_blink_sv||[]).push([[26],{1089:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>x,contentTitle:()=>h,default:()=>y,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var s=i(4848),n=i(8453),l=i(6540);const a=e=>{const[t,i]=(0,l.useState)(e?"loading":"idle");return(0,l.useEffect)((()=>{if(!e)return void i("idle");let t=document.querySelector(`script[src="${e}"]`);if(!t)return t=document.createElement("script"),t.src=e,t.async=!0,t.onload=()=>i("ready"),t.onerror=()=>i("error"),document.body.appendChild(t),()=>{document.body.removeChild(t)};i("ready")}),[e]),t};var r=i(1396),d=i.n(r);function o(){const[e,t]=(0,l.useState)(""),[i,n]=(0,l.useState)(""),[r,o]=(0,l.useState)(null),[c,h]=(0,l.useState)(null),[p,x]=(0,l.useState)({}),[m,g]=(0,l.useState)(null),[y,u]=(0,l.useState)(""),[v,j]=(0,l.useState)(!1),[f,b]=(0,l.useState)(!0),[w,k]=(0,l.useState)([]),[S,T]=(0,l.useState)(null),[N,L]=(0,l.useState)(""),[C,P]=(0,l.useState)(null),[$,D]=(0,l.useState)(!1);(0,l.useEffect)((()=>{const e=new URLSearchParams(window.location.search);let i=e.get("invoice")||"",s=e.get("lnaddress")||"";i=i.startsWith("lightning:")?i.substring(10):i,s=s.startsWith("lightning:")?s.substring(10):s,i?t(i):s&&t(s)}),[]),(0,l.useEffect)((()=>{i&&""!==e&&i&&J(i)}),[i,e]);const W=a("/js/bolt11.min.js");if("loading"===W)return(0,s.jsx)("p",{children:"Loading script..."});if("error"===W)return(0,s.jsx)("p",{children:"Error loading script."});const H=()=>{try{let t,s,n,l=i.toLowerCase();l.toLowerCase().startsWith("lightning:")&&(l=l.substring(10)),l.startsWith("lnbc")?(t="mainnet",s={bech32:"bc",pubKeyHash:66,scriptHash:255,validWitnessVersions:[0,2,3,4,5]}):l.startsWith("lntbs")?(t="signet",s={bech32:"tbs",pubKeyHash:66,scriptHash:255,validWitnessVersions:[0,2,3,4,5]}):l.startsWith("lntb")&&(t="testnet",s={bech32:"tb",pubKeyHash:66,scriptHash:255,validWitnessVersions:[0,2,3,4,5]});try{n=lightningPayReq.decode(l,s),o(n);const e=n.tags.find((e=>"payment_hash"===e.tagName))?.data,i=new Date(1e3*n.timestamp),a=i.toISOString().replace("T"," ").replace(/\.\d{3}Z$/,"Z"),r=n.tags.find((e=>"expire_time"===e.tagName))?.data;let d;if(r){const e=new Date(i.getTime()+1e3*r),t=new Date;if(e<t){d=`expired since ${Math.round((t-e)/6e4)} minutes`}else{const i=Math.round(r/60);d=`${Math.round((e-t)/6e4)} minutes remaining out of ${i}`}}else d="N/A";const c=n.tags?.find((e=>"description"===e.tagName))?.data||"",p=n.tags?.some((e=>"routing_info"===e.tagName&&e.data&&e.data.length>0));let m=[];p&&(m=n.tags.filter((e=>"routing_info"===e.tagName)).flatMap((e=>e.data.map((e=>e.pubkey))))),x({invoice:n.paymentRequest,network:t,payeeNodeKey:n.payeeNodeKey,satoshis:n.satoshis,millisatoshis:n.millisatoshis,paymentHash:e,timestampString:a,expirationStatus:d,memo:c,link:_(n.payeeNodeKey,t),routingHintPubKeys:m}),"mainnet"===t&&n.payeeNodeKey?F(n.payeeNodeKey):n.payeeNodeKey?h({message:`No more details are fetched for ${t}`}):h(null),"mainnet"===t&&m.length>0?(k([]),m.forEach((e=>R(e)))):m.length>0?m.forEach((e=>k((i=>[...i,{hintPubkey:e,message:`No more details are fetched for ${t}`}])))):k([]),g(null)}catch(e){b(!1),console.error("Decoding failed: ",e.message),g("Decoding failed: "+e.message)}}catch(t){x({}),g("Failed to decode invoice. Please check the format.")}},_=(e,t)=>({mainnet:[{url:`https://mempool.space/lightning/node/${e}`,name:"mempool.space"},{url:`https://amboss.space/node/${e}`,name:"amboss.space"},{url:`https://1ml.com/node/${e}`,name:"1ml.com"},{url:`https://lightningnetwork.plus/nodes/${e}`,name:"lightningnetwork.plus"}],testnet:[{url:`https://mempool.space/${t}/lightning/node/${e}`,name:"mempool.space/testnet"},{url:`https://1ml.com/testnet/node/${e}`,name:"1ml.com/testnet"}],signet:[{url:`https://mempool.space/${t}/lightning/node/${e}`,name:"mempool.space/signet"}]}[t]||[]),F=async e=>{try{console.log(`Fetching node data for ${e}`);const t=await fetch(`https://mempool.space/api/v1/lightning/nodes/${e}`);if(!t.ok)throw h(null),new Error("Network response was not ok");const i=await t.json();"This node does not exist, or our node is not seeing it yet"===i.message?h(null):h(i)}catch(t){console.error("Failed to fetch node data:",t),h(null)}},R=async e=>{try{console.log(`Fetching routing hint data for ${e}`);const t=await fetch(`https://mempool.space/api/v1/lightning/nodes/${e}`);if(!t.ok)return void k((t=>[...t,{hintPubkey:e,message:"Network response was not ok"}]));const i=await t.json();"This node does not exist, or our node is not seeing it yet"===i.message?k((t=>[...t,{hintPubkey:e,message:"This node does not exist or the mempool.space node is not seeing it yet"}])):k((t=>[...t,{hintPubkey:e,...i}]))}catch(t){console.error("Failed to fetch routing hint data:",t),k((i=>[...i,{hintPubkey:e,message:`Failed to fetch routing hint data: ${t.toString()}`}]))}},K=async e=>{try{const[t,i]=e.split("@"),s=await fetch(`https://${i}/.well-known/lnurlp/${t}`);if(!s.ok)throw new Error("Network response was not ok");const n=await s.json();T(n)}catch(t){console.error("Failed to resolve lightning address:",t),g("Failed to resolve lightning address: "+t.message),T(null)}},E={display:"flex",marginBottom:"5px"},M={minWidth:"130px",fontWeight:"bold",marginLeft:"10px"},A={border:"none",background:"none",width:"100%",maxWidth:"500px",overflow:"auto",whiteSpace:"nowrap",fontSize:"inherit",fontFamily:"inherit",cursor:"pointer",outline:"none",textOverflow:"ellipsis"},O=e=>{navigator.clipboard.writeText(e).then((()=>{u("Copied to clipboard"),setTimeout((()=>{u("")}),2e3)}),(e=>{console.error("Could not copy text: ",e),u("Failed to copy to clipboard."),setTimeout((()=>{u("")}),2e3)}))},B=()=>{o(null),h(null),x({}),g(null),j(!1),b(!0),k([]),T(null)},I=()=>{n(""),t(""),L(""),D(!1),B()},J=()=>{B();let e=i.toLowerCase();e.startsWith("lightning:")&&(e=e.substring(10)),e.startsWith("ln")?H():e.includes("@")?K(e):g("Invalid input. Please enter a valid lightning invoice or lightning address.")};if(e&&!r&&f&&!S){(e=>{e.toLowerCase().startsWith("ln")?(n(e),H()):e.includes("@")&&K(e)})(e)}return(0,s.jsxs)("div",{children:[""===e&&(0,s.jsxs)("div",{children:[(0,s.jsx)("textarea",{value:i,onChange:e=>n(e.target.value),style:{width:"100%",maxWidth:"500px",height:"7em",overflow:"auto"},placeholder:"Paste a lightning invoice or a lightning address"}),(0,s.jsx)("br",{}),(0,s.jsx)("button",{onClick:J,children:"Decode"}),i&&(0,s.jsx)("button",{style:{marginLeft:"10px"},onClick:I,children:"Clear"})]}),e&&(0,s.jsxs)("div",{children:[(0,s.jsx)("input",{type:"text",value:e,style:A,readOnly:!0,onClick:()=>O(e),title:"Click to copy"}),(0,s.jsx)("br",{}),(0,s.jsx)("button",{style:{marginLeft:"10px"},onClick:I,children:"Clear"})]}),(0,s.jsx)("div",{style:{marginTop:"10px"}}),(()=>{if(!S)return null;const e={minWidth:"150px",fontWeight:"bold",marginLeft:"10px"};let t={};try{JSON.parse(S.metadata).forEach((e=>{"text/plain"===e[0]?t.description=e[1]:"text/identifier"===e[0]&&(t.lnaddress=e[1])}))}catch(i){console.error("Error parsing metadata:",i)}return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Lightning Address Data"}),(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:e,children:"Callback URL:"}),(0,s.jsx)("div",{children:S.callback})]}),(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:e,children:"Min Sendable:"}),(0,s.jsxs)("div",{children:[S.minSendable/1e3," sats"]})]}),(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:e,children:"Max Sendable:"}),(0,s.jsxs)("div",{children:[S.maxSendable/1e3," sats"]})]}),t.description&&(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:e,children:"Description:"}),(0,s.jsx)("div",{children:t.description})]}),t.lnaddress&&(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:e,children:"Lightning Address:"}),(0,s.jsx)("div",{children:t.lnaddress})]}),null!=S.commentAllowed&&(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:e,children:"Comment Allowed:"}),(0,s.jsxs)("div",{children:[S.commentAllowed," characters"]})]}),(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:e,children:"Tag:"}),(0,s.jsx)("div",{children:S.tag})]}),S.allowsNostr&&(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:e,children:"Nostr:"}),(0,s.jsx)("div",{children:"Allowed"})]}),S.nostrPubkey&&(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:e,children:"Nostr Pubkey:"}),(0,s.jsx)("div",{children:S.nostrPubkey})]})]})})(),m&&(0,s.jsx)("div",{style:{color:"red"},children:m}),r&&(0,s.jsxs)("div",{children:[p&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Invoice data"}),(0,s.jsx)("div",{style:{marginTop:"10px"}}),(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:M,children:"network:"}),(0,s.jsx)("div",{children:p.network})]}),(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:M,children:"amount:"}),(0,s.jsx)("div",{children:(U=p.satoshis,V=p.millisatoshis,U&&U>=1?`${U} sats`:V?`${V} millisats`:"N/A")})]}),""!==p.memo&&(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:M,children:"description:"}),(0,s.jsx)("div",{children:p.memo})]}),(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:M,children:"expiry:"}),(0,s.jsx)("div",{children:p.expirationStatus})]}),(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:M,children:"created at:"}),(0,s.jsx)("div",{children:p.timestampString})]}),(0,s.jsx)("div",{style:M,children:"payment hash:"}),(0,s.jsx)("input",{type:"text",value:p.paymentHash,style:{...A,marginLeft:"20px"},readOnly:!0,onClick:()=>O(p.paymentHash),title:"Click to copy and scroll"}),w&&w.length>0&&(0,s.jsxs)("div",{style:{marginTop:"10px"},children:[(0,s.jsx)("h3",{children:"Routing Hint Data"}),w.map(((e,t)=>(0,s.jsxs)("div",{style:{marginBottom:"20px"},children:[!e.message&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:M,children:"alias:"}),(0,s.jsx)("div",{children:e.alias})]}),(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:M,children:"public channels:"}),(0,s.jsx)("div",{children:e.active_channel_count})]}),(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:M,children:"public capacity:"}),(0,s.jsxs)("div",{children:[e.capacity/1e8," btc"]})]}),(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:M,children:"last update:"}),(0,s.jsxs)("div",{children:[Math.round((Date.now()/1e3-e.updated_at)/60)," minutes ago"]})]})]}),(0,s.jsx)("div",{style:M,children:"public key:"}),(0,s.jsx)("input",{type:"text",value:e.hintPubkey,style:{...A,marginLeft:"20px"},readOnly:!0,onClick:()=>O(e.hintPubkey),title:"Click to copy and scroll"}),"038f8f113c580048d847d6949371726653e02b928196bad310e3eda39ff61723f6"===e.hintPubkey&&(0,s.jsx)("div",{style:{marginLeft:"10px",marginTop:"10px",marginBottom:"10px"},children:"This invoice was likely generated with Muun wallet."}),"03a6ce61fcaacd38d31d4e3ce2d506602818e3856b4b44faff1dde9642ba705976"===e.hintPubkey&&(0,s.jsx)("div",{style:{marginLeft:"10px",marginTop:"10px",marginBottom:"10px"},children:"This invoice was likely generated with Muun wallet."}),"03864ef025fde8fb587d989186ce6a4a186895ee44a926bfc370e2c366597a3f8f"===e.hintPubkey&&(0,s.jsx)("div",{style:{marginLeft:"10px",marginTop:"10px",marginBottom:"10px"},children:"This invoice was likely generated with Phoenix wallet."}),"03933884aaf1d6b108397e5efe5c86bcf2d8ca8d2f700eda99db9214fc2712b134"===e.hintPubkey&&(0,s.jsx)("div",{style:{marginLeft:"10px",marginTop:"10px",marginBottom:"10px"},children:"This invoice was likely generated with Phoenix wallet on testnet."}),e.message&&(0,s.jsx)("div",{style:E,children:(0,s.jsx)("div",{style:{marginLeft:"10px",marginTop:"10px",marginBottom:"10px"},children:e.message})}),(0,s.jsx)("div",{style:E,children:(0,s.jsx)("div",{style:M,children:"explore:"})}),(0,s.jsx)("div",{children:_(e.hintPubkey,p.network).map(((e,t)=>(0,s.jsx)("div",{style:{display:"inline-block",paddingLeft:"20px"},children:(0,s.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.name})},t)))})]},t)))]}),(0,s.jsx)("div",{style:{marginTop:"10px"}}),(0,s.jsx)("h3",{children:"Destination node data"}),c&&!c.message&&(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:M,children:"alias:"}),(0,s.jsx)("div",{children:c.alias})]}),(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:M,children:"public channels:"}),(0,s.jsx)("div",{children:c.active_channel_count})]}),(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:M,children:"public capacity:"}),(0,s.jsxs)("div",{children:[c.capacity/1e8," btc"]})]}),(0,s.jsxs)("div",{style:E,children:[(0,s.jsx)("div",{style:M,children:"last update:"}),(0,s.jsxs)("div",{children:[Math.round((Date.now()/1e3-c.updated_at)/60)," minutes ago"]})]})]}),(0,s.jsx)("div",{style:M,children:"public key:"}),(0,s.jsx)("input",{type:"text",value:p.payeeNodeKey,style:{...A,marginLeft:"20px"},readOnly:!0,onClick:()=>O(p.payeeNodeKey),title:"Click to copy and scroll"}),c&&c.message&&(0,s.jsx)("div",{style:{marginLeft:"10px",marginTop:"10px",marginBottom:"10px"},children:c.message}),c?(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{style:E,children:(0,s.jsx)("div",{style:M,children:"explore:"})}),_(p.payeeNodeKey,p.network).map(((e,t)=>(0,s.jsx)("div",{style:{display:"inline-block",paddingLeft:"20px"},children:(0,s.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.name})},t)))]}):(0,s.jsx)("div",{style:{marginLeft:"10px",marginTop:"10px"},children:"No public data is available about this node"})]}),y&&(0,s.jsx)("div",{style:{position:"fixed",top:"20px",left:"50%",transform:"translateX(-50%)",backgroundColor:"orange",color:"black",padding:"10px",borderRadius:"10px",zIndex:1e3},children:y})]}),(0,s.jsxs)("div",{style:{marginTop:"20px"},children:[(r||S)&&(0,s.jsx)("button",{onClick:()=>{j(!v)},children:v?"Hide Raw Data":"Show Raw Data"}),v&&(0,s.jsxs)("div",{style:{marginTop:"20px"},children:[r&&(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Raw Invoice Data"}),(0,s.jsx)("pre",{style:{marginLeft:"10px",marginTop:"10px"},children:JSON.stringify(r,null,2)})]}),c&&(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Raw Node Data"}),(0,s.jsx)("pre",{style:{marginLeft:"10px",marginTop:"10px"},children:JSON.stringify(c,null,2)})]}),w&&w.length>0&&(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Raw Routing Hint Data"}),(0,s.jsx)("pre",{style:{marginLeft:"10px",marginTop:"10px"},children:JSON.stringify(w,null,2)})]}),S&&(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Raw Lightning Address Data"}),(0,s.jsx)("pre",{style:{marginLeft:"10px",marginTop:"10px"},children:JSON.stringify(S,null,2)})]})]})]}),p.paymentHash&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{style:{marginTop:"20px"},children:[(0,s.jsx)("h3",{children:"Know the preimage? Verify it below:"}),(0,s.jsx)("input",{type:"text",value:N,onChange:e=>L(e.target.value),placeholder:"Enter the preimage",style:{width:"100%",maxWidth:"500px"}}),(0,s.jsx)("div",{}),(0,s.jsx)("button",{onClick:()=>{try{const e=d().enc.Hex.parse(N),t=d().SHA256(e).toString(d().enc.Hex);t===p.paymentHash?(P("The preimage hashed matches the payment hash. This proves that the invoice was paid."),D(!0)):(P("The preimage hashed does not match the payment hash."),D(!1))}catch(e){g("Error verifying payment: "+e.message)}},children:"Verify Payment"})]}),C&&(0,s.jsx)("div",{style:{marginTop:"10px",color:$?"green":"red",fontWeight:"bold"},children:C})]})]});var U,V}const c={id:"decode",title:"Decode a lightning invoice",slug:"/decode"},h="LN invoice decoder",p={id:"decode",title:"Decode a lightning invoice",description:"Using the bolt11 nodejs package in the browser.",source:"@site/docs/decode.mdx",sourceDirName:".",slug:"/decode",permalink:"/decode",draft:!1,unlisted:!1,editUrl:"https://github.com/GaloyMoney/dev.blink.sv/edit/main/docs/decode.mdx",tags:[],version:"current",frontMatter:{id:"decode",title:"Decode a lightning invoice",slug:"/decode"}},x={},m=[];function g(e){const t={a:"a",h1:"h1",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"ln-invoice-decoder",children:"LN invoice decoder"}),"\n","\n",(0,s.jsx)(o,{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.p,{children:["Using the ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/bolt11",children:"bolt11 nodejs package"})," in the browser.",(0,s.jsx)("br",{}),"\nThe destination node data is queried from the ",(0,s.jsx)(t.a,{href:"https://mempool.space/docs/api/rest#get-node-stats",children:"mempool.space API"}),"."]})]})}function y(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},477:()=>{}}]);