(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3700:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(3664)}])},7834:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var s=t(5893);function r(e){let{children:n,className:t}=e;return(0,s.jsx)("div",{className:"".concat(t," max-w-max rounded-lg p-4 border-slate-300 bg-slate-50 border-2"),children:n})}},6491:function(e,n,t){"use strict";t.d(n,{H:function(){return m},a:function(){return d}});var s=t(5893),r=t(7294),l=t(1259),u=t(3977),a=t(8887),i=t(3454);let c=(0,u.ZF)({apiKey:"AIzaSyCJmEqGyvLcpp2K0AYfCrQAfIgnFLKMFm4",authDomain:"basile-drive-dev.firebaseapp.com",projectId:"basile-drive-dev",storageBucket:"basile-drive-dev.appspot.com",messagingSenderId:"924543957430",appId:"1:924543957430:web:48246f4e786716ddc62917",measurementId:i.env.NEXT_PUBLIC_MEASUREMENT_ID},"drive-dev");c.name&&(0,a.IH)(c);let o=(0,l.v0)(c);function d(){return(0,r.useContext)(f)}let f=(0,r.createContext)(null);function m(e){let{children:n}=e,[t,u]=(0,r.useState)(null),[a,i]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{let e=o.onAuthStateChanged(e=>{u(e),i(!1)});return e},[]),(0,s.jsx)(f.Provider,{value:{currentUser:t,signUp:(e,n)=>(0,l.Xb)(o,e,n),logIn:(e,n)=>(0,l.e5)(o,e,n)},children:!a&&n})}},3664:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var s=t(5893),r=t(7834),l=t(7294),u=t(1664),a=t.n(u),i=t(6491),c=t(1163);function o(){let e=(0,l.useRef)(null),n=(0,l.useRef)(null),t=(0,i.a)(),[u,o]=(0,l.useState)(""),[d,f]=(0,l.useState)(!1),m=(0,c.useRouter)();async function p(s){s.preventDefault();try{var r,l;o(""),f(!0),await (null==t?void 0:t.logIn(null===(r=e.current)||void 0===r?void 0:r.value,null===(l=n.current)||void 0===l?void 0:l.value)),m.push("/")}catch(e){o("Failed to log in")}f(!1)}return(0,s.jsxs)("div",{className:"flex flex-col gap-3 items-center justify-center h-screen",children:[u&&(0,s.jsx)(r.Z,{className:"alert-red",children:(0,s.jsx)("p",{children:u})}),(0,s.jsxs)(r.Z,{className:"w-80 max-w-xs",children:[(0,s.jsx)("h2",{className:"text-center",children:"Log In"}),(0,s.jsx)("hr",{className:"my-4"}),(0,s.jsxs)("form",{onSubmit:p,method:"post",children:[(0,s.jsx)("label",{htmlFor:"email-input",children:"E-mail"}),(0,s.jsx)("br",{}),(0,s.jsx)("input",{type:"email",ref:e,required:!0,id:"email-input",className:"w-full"}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{htmlFor:"pass-input",children:"Password"}),(0,s.jsx)("br",{}),(0,s.jsx)("input",{type:"password",ref:n,required:!0,id:"pass-input",className:"w-full"}),(0,s.jsx)("hr",{className:"my-4"}),(0,s.jsx)("button",{disabled:d,type:"submit",className:"btn-primary w-full",children:"Log In"}),(0,s.jsx)("hr",{className:"my-4"}),(0,s.jsxs)("p",{className:"w-full inline-block text-center",children:["Don't have an account?"," ",(0,s.jsx)(a(),{href:"/signup",className:"text-blue-700",children:"Sign Up"})]})]})]})]})}function d(){let e=(0,c.useRouter)(),n=(0,i.a)();return(0,s.jsx)(i.H,{children:(null==n?void 0:n.currentUser)?e.push("/"):(0,s.jsx)(o,{})})}},1163:function(e,n,t){e.exports=t(6885)}},function(e){e.O(0,[737,719,774,888,179],function(){return e(e.s=3700)}),_N_E=e.O()}]);