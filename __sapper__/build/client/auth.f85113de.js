import{C as t}from"./cookie-universal-common.86071cdf.js";import{w as a}from"./app.3fad8882.js";import{g as r,p as s,a as e}from"./api.818ad135.js";const o=t();const n=function(){const{subscribe:t,set:n}=a({});return{subscribe:t,me:async()=>{try{let t=await r("users/me",null,o.get("token"));return t.token=o.get("token"),n(t),t}catch(t){throw n({}),t}},login:async({phone:t,password:a})=>{try{let r=await s("auth/local",{phone:t,password:a});return n(r),o.set("token",r.token),r}catch(t){throw o.remove("token"),n({}),t}},verification:async t=>{try{const a=await s("/api/signup/verification",t);return n(a),o.set("token",a.token),a}catch(t){throw n({}),t}},signup:async t=>{console.log(t)},logout:async()=>{try{return o.remove("token"),n({}),response}catch(t){throw n({}),t}},forgotPassword:async t=>{try{return await s("/users/forgot",t)}catch(t){throw t}},async changePassword(t){try{return await e("/users/password",t)}catch(t){throw t}},async resetPassword(t){try{const a=await s("/users/reset/"+t.id,t);return a&&console.log("info",a,{root:!0}),a}catch(t){throw t}},async updateProfile({firstName:t,lastName:a,state:r,city:s,zip:o,avatar:c,gender:i,dob:u,language:w,address:p}){try{const h=await e("/users/profile",{firstName:t,lastName:a,state:r,city:s,zip:o,avatar:c,gender:i,dob:u,language:w,address:p});return n(h),h}catch(t){throw t}}}}();export{n as a};
