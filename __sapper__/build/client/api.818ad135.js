import{C as t,a as o}from"./cookie-universal-common.86071cdf.js";const e=t();e.get("token");async function a({method:t,path:a,data:n,token:r,cookie:i}){const c=window.fetch,h={method:t,headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",cookie:i},mode:"no-cors"};n&&(h.body=JSON.stringify(n));let s=e.get("token");r?h.headers.Authorization=`Bearer ${r}`:s&&(h.headers.Authorization=`Bearer ${s}`);try{let t=await c(`${o}/api/${a}`,h),e=await t.text();if(!t.ok)throw e;try{return JSON.parse(e)}catch(t){return e}}catch(t){throw t}}function n(t,o,e,n){return a({method:"GET",path:t,params:o,token:e,cookie:n})}function r(t,o,e){return a({method:"POST",path:t,data:o,token:e})}function i(t,o,e){return a({method:"PUT",path:t,data:o,token:e})}export{i as a,n as g,r as p};
