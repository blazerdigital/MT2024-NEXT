(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9946:function(e,t,a){Promise.resolve().then(a.bind(a,8174))},551:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let s=a(9920);a(7437),a(2265);let n=s._(a(148));function i(e,t){var a;let s={loading:e=>{let{error:t,isLoading:a,pastDelay:s}=e;return null}};"function"==typeof e&&(s.loader=e);let i={...s,...t};return(0,n.default)({...i,modules:null==(a=i.loadableGenerated)?void 0:a.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let s=a(5592);function n(e){let{reason:t,children:a}=e;if("undefined"==typeof window)throw new s.BailoutToCSRError(t);return a}},148:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let s=a(7437),n=a(2265),i=a(912),o=a(1481);function r(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(r(()=>null)),loading:null,ssr:!0},c=function(e){let t={...l,...e},a=(0,n.lazy)(()=>t.loader().then(r)),c=t.loading;function d(e){let r=c?(0,s.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,s.jsxs)(s.Fragment,{children:["undefined"==typeof window?(0,s.jsx)(o.PreloadCss,{moduleIds:t.modules}):null,(0,s.jsx)(a,{...e})]}):(0,s.jsx)(i.BailoutToCSR,{reason:"next/dynamic",children:(0,s.jsx)(a,{...e})});return(0,s.jsx)(n.Suspense,{fallback:r,children:l})}return d.displayName="LoadableComponent",d}},1481:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return i}});let s=a(7437),n=a(8512);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let a=(0,n.getExpectedRequestStore)("next/dynamic css"),i=[];if(a.reactLoadableManifest&&t){let e=a.reactLoadableManifest;for(let a of t){if(!e[a])continue;let t=e[a].files.filter(e=>e.endsWith(".css"));i.push(...t)}}return 0===i.length?null:(0,s.jsx)(s.Fragment,{children:i.map(e=>(0,s.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:a.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},8174:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return H}});var s=a(7437),n=a(2265),i=a(3054),o=a.n(i),r=a(6962),l=a(4437),c=a.n(l),d=a(4839),m=()=>(0,s.jsx)(r.im,{className:c().wrapper,id:"herosection",children:(0,s.jsxs)("div",{className:(0,d.Z)("container",c().container),children:[(0,s.jsx)(r.zx,{url:"/video/Canvas_Alien_Loop.mp4"}),(0,s.jsxs)("div",{className:c().infoContainer,children:[(0,s.jsxs)(r.X6,{className:c().heading,children:[(0,s.jsx)(r.y$,{children:" Animated stories"})," about the past, present and future of ",(0,s.jsx)(r.y$,{children:"humanity"}),"."]}),(0,s.jsx)(r.xv,{xl2:!0,light:!0,highlight:!0,children:"Watch the Series on"}),(0,s.jsx)("div",{className:c().socialContainer,children:[{logo:"/images/youtube.png",link:"#"},{logo:"/images/rumble.png",link:"#"},{logo:"/images/odysee.png",link:"#"}].map((e,t)=>(0,s.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:(0,s.jsx)("img",{src:e.logo,alt:"#",className:c().logo})},t))})]})]})}),u=a(8513),_=a.n(u),h=a(7138),p=()=>{let[e,t]=(0,n.useState)([]);return(0,n.useEffect)(()=>{(async()=>{let e=await fetch("/api/episodes");t(await e.json())})()},[]),(0,s.jsxs)(r.im,{className:_().wrapper,id:"latestepisodes",children:[(0,s.jsx)("div",{id:"anchor-episodes",className:"anchor"}),(0,s.jsxs)("div",{className:(0,d.Z)("container",_().container),children:[(0,s.jsx)(r.X6,{xl5:!0,highlight:!0,className:_().heading,children:"Latest Episodes"}),(0,s.jsx)("div",{className:_().episodes,children:e.map((e,t)=>(0,s.jsxs)(h.default,{href:"/episodes/".concat(e.id),className:_().episode,children:[(0,s.jsx)("img",{src:e.img,alt:e.info,className:_().img}),(0,s.jsx)(r.xv,{highlight:!0,xl:!0,textCenter:!0,className:_().text,children:e.info})]},t))}),(0,s.jsx)(h.default,{href:"/allepisodes",className:_().button,children:"View All Episodes"})]})]})},x=a(7305),g=a.n(x),b=a(551);let f=a.n(b)()(()=>Promise.all([a.e(505),a.e(492),a.e(342)]).then(a.bind(a,342)),{loadableGenerated:{webpack:()=>[342]},ssr:!1});var j=e=>{let{url:t}=e;return(0,s.jsxs)(r.im,{className:g().wrapper,id:"playingnow",children:[(0,s.jsx)("div",{id:"anchor-playing-now",className:"anchor"}),(0,s.jsxs)("div",{className:(0,d.Z)("container",g().container),children:[(0,s.jsx)(r.X6,{className:g().heading,children:"Playing Now"}),(0,s.jsx)(f,{url:"https://www.youtube.com/watch?v=VkJuiXyUDmk"})]})]})},v=a(2984),y=a.n(v),w=a(581),N=a.n(w),C=()=>((0,n.useEffect)(()=>{let e=document.createElement("script");e.src="https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127",e.type="text/javascript",document.body.appendChild(e);let t=document.createElement("script");return t.type="text/javascript",t.innerHTML='fetch("https://assets.mailerlite.com/jsonp/991576/forms/124465333938423484/takel")',document.body.appendChild(t),()=>{document.body.removeChild(e),document.body.removeChild(t)}},[]),(0,s.jsx)("div",{className:N().mlFormContainer,children:(0,s.jsx)("div",{id:"mlb2-15721833",className:"".concat(N().mlFormEmbedContainer," ml-subscribe-form ml-subscribe-form-15721833"),children:(0,s.jsx)("div",{className:N().mlFormAlignCenter,children:(0,s.jsxs)("div",{className:"".concat(N().mlFormEmbedWrapper," embedForm"),children:[(0,s.jsxs)("div",{className:"".concat(N().mlFormEmbedBody," ml-form-embedBodyDefault row-form"),children:[(0,s.jsxs)("div",{className:N().mlFormEmbedContent,children:[(0,s.jsx)("h4",{className:N().newsletterhead,children:"Massive Theory Show Newsleter"}),(0,s.jsx)("p",{children:"Subscribe to Show Updates and New Release"})]}),(0,s.jsxs)("form",{className:"ml-block-form",action:"https://assets.mailerlite.com/jsonp/991576/forms/124465333938423484/subscribe","data-code":"",method:"post",target:"_blank",children:[(0,s.jsx)("div",{className:"ml-form-formContent",children:(0,s.jsx)("div",{className:"".concat(N().mlFormFieldRow," ml-last-item"),children:(0,s.jsx)("div",{className:"ml-field-group ml-field-email ml-validate-email ml-validate-required",children:(0,s.jsx)("input",{"aria-label":"email","aria-required":"true",type:"email",className:"form-control","data-inputmask":"",name:"fields[email]",placeholder:"Email",autoComplete:"email"})})})}),(0,s.jsx)("div",{className:N().mlFormEmbedPermissions,children:(0,s.jsx)("div",{className:"".concat(N().mlFormEmbedPermissionsContent," default privacy-policy"),children:(0,s.jsx)("p",{children:"You can unsubscribe anytime. For more details, review our Privacy Policy."})})}),(0,s.jsx)("div",{className:"".concat(N().mlFormCheckboxRow," ml-validate-required"),children:(0,s.jsxs)("label",{className:"checkbox",children:[(0,s.jsx)("input",{type:"checkbox"}),(0,s.jsx)("span",{className:"labelDescription",children:"Opt in to receive news and updates."})]})}),(0,s.jsx)("div",{className:"".concat(N().mlFormRecaptcha," ml-validate-required"),children:(0,s.jsx)("div",{className:"g-recaptcha","data-sitekey":"6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD"})}),(0,s.jsx)("input",{type:"hidden",name:"ml-submit",value:"1"}),(0,s.jsxs)("div",{className:N().mlFormEmbedSubmit,children:[(0,s.jsx)("button",{type:"submit",className:"primary",children:"Subscribe"}),(0,s.jsxs)("button",{disabled:"disabled",style:{display:"none"},type:"button",className:"loading",children:[(0,s.jsx)("div",{className:N().mlFormEmbedSubmitLoad}),(0,s.jsx)("span",{className:"sr-only",children:"Loading..."})]})]}),(0,s.jsx)("input",{type:"hidden",name:"anticsrf",value:"true"})]})]}),(0,s.jsx)("div",{className:"".concat(N().mlFormSuccessBody," row-success"),style:{display:"none"},children:(0,s.jsxs)("div",{className:N().mlFormSuccessContent,children:[(0,s.jsx)("h4",{children:"Thank you!"}),(0,s.jsx)("p",{children:"You have successfully joined our subscriber list."})]})})]})})})})),F=()=>(0,s.jsxs)(r.im,{className:y().mainWrapper,id:"support",children:[(0,s.jsx)("div",{id:"anchor-support",className:"anchor"}),(0,s.jsxs)("div",{className:(0,d.Z)("container",y().container),children:[(0,s.jsx)(r.zx,{url:"/video/Mountain_BG.mp4"}),(0,s.jsx)(r.X6,{xl5:!0,highlight:!0,className:y().heading,children:"Support the Show"})]}),(0,s.jsxs)("div",{className:(0,d.Z)(y().subscriberContainer,"container"),children:[(0,s.jsxs)("div",{className:y().infoContainer,children:[(0,s.jsx)(r.X6,{xl4:!0,highlight:!0,className:y().title,children:"Subscribe to Our Newsletter"}),(0,s.jsx)(r.xv,{base0:!0,xl:!0,children:"In addition to follow up on on Youtube, Rumber and Odysee. To show your support for us as content creators and help spread our message, subscribing to our newsletter is the best action you can take right now."}),(0,s.jsx)(r.xv,{base0:!0,xl:!0,children:"By subscribing, you'll be helping us achieve our goal of becoming platform-independent, allowing us to stay connected as the digital landscape continues to evolve."}),(0,s.jsx)(r.xv,{base0:!0,xl:!0,children:"Rest assured that your information will never be shared with third-parties, so you'll only receive updates when a new episode drops. Join our audience today and be a part of our journey!"})]}),(0,s.jsx)("div",{className:y().subscribeForm,children:(0,s.jsx)(C,{})})]}),(0,s.jsxs)("div",{className:(0,d.Z)(y().donationInfoContainer,"container"),children:[(0,s.jsxs)("div",{className:y().infoContainer,children:[(0,s.jsx)(r.X6,{xl4:!0,highlight:!0,className:y().title,children:"Make A Donation"}),(0,s.jsx)(r.xv,{base0:!0,xl:!0,children:"Making a donation is quick, secure, and effortless through either credit card or bank account. We appreciate your generous support."}),(0,s.jsx)(r.xv,{base0:!0,xl:!0,children:"Your generous support helps us to create more content, grow the show, and have more impact. Your donation will be used for:"}),(0,s.jsx)("ul",{className:y().helpsLists,children:["Creating New Content","Illustration","Animation","Original Music and Licenses","Website Security","Exploring New Technology","Making Us Platform Independent","Covering Operational Expenses"].map((e,t)=>(0,s.jsx)("li",{className:y().list,children:(0,s.jsx)(r.xv,{base0:!0,xl:!0,children:e})},t))})]}),(0,s.jsx)("div",{className:y().donationBox,children:(0,s.jsx)("iframe",{src:"https://donorbox.org/embed/support-massive-theory?default_interval=o",name:"donorbox",allowpaymentrequest:"allowpaymentrequest",seamless:"seamless",frameBorder:"0",scrolling:"no",height:"900px",width:"100%",style:{maxWidth:"500px",minWidth:"250px",maxHeight:"none !important"},allow:"payment"})})]})]}),S=a(7018),E=a.n(S),T=a(9082),L=a.n(T),k=e=>{let{className:t,type:a,placeholder:n,value:i,setValue:o}=e;return(0,s.jsx)("input",{type:a,placeholder:n,value:i,onChange:e=>o(e.target.value),className:(0,d.Z)(L().input,t)})},M=()=>{let[e,t]=(0,n.useState)(""),[a,i]=(0,n.useState)(""),[o,l]=(0,n.useState)(""),[c,m]=(0,n.useState)(""),[u,_]=(0,n.useState)(""),[h,p]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{p(!0)},[]),(0,s.jsxs)(r.im,{className:E().mainWrapper,id:"contact",children:[(0,s.jsx)("div",{id:"anchor-contact",className:"anchor"}),(0,s.jsxs)("div",{className:(0,d.Z)("container",E().container),children:[h&&(0,s.jsx)(r.zx,{url:"/video/UFO_BG.mp4"}),(0,s.jsx)(r.X6,{xl5:!0,highlight:!0,className:E().heading,children:"Contact"})]}),(0,s.jsxs)("div",{className:(0,d.Z)(E().header,"container"),children:[(0,s.jsx)(r.xv,{xl:!0,highlight:!0,children:"If you have an idea for the show, a business inquiry, or want to collaborate on a project, feel free to drop us a message!"}),(0,s.jsx)("div",{className:E().socialContainer,children:[{logo:"/images/youtube.png",link:"#"},{logo:"/images/rumble.png",link:"#"},{logo:"/images/odysee.png",link:"#"}].map((e,t)=>(0,s.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:(0,s.jsx)("img",{src:e.logo,alt:"#",className:E().logo})},t))})]}),(0,s.jsxs)("div",{className:(0,d.Z)("container",E().contactWrapper),children:[(0,s.jsxs)("div",{className:E().inputWrapper,children:[(0,s.jsx)(k,{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"First Name"}),(0,s.jsx)(k,{type:"text",value:a,onChange:e=>i(e.target.value),placeholder:"Last Name"}),(0,s.jsx)(k,{type:"email",value:o,onChange:e=>l(e.target.value),placeholder:"Email"}),(0,s.jsx)(k,{type:"text",value:c,onChange:e=>m(e.target.value),placeholder:"Company"}),(0,s.jsx)("textarea",{className:E().message,name:"message",id:"message",rows:"7",placeholder:"Message",value:u,onChange:e=>_(e.target.value)})]}),(0,s.jsx)("button",{type:"submit",className:E().button,children:"Submit"})]})]})},H=()=>(0,s.jsxs)(r.im,{className:o().wrapper,children:[(0,s.jsx)(m,{}),(0,s.jsx)(j,{}),(0,s.jsx)(p,{}),(0,s.jsx)(F,{}),(0,s.jsx)(M,{})]})},6962:function(e,t,a){"use strict";a.d(t,{X6:function(){return d},y$:function(){return _},xv:function(){return x},zx:function(){return f},im:function(){return r}});var s=a(7437);a(2265);var n=a(9647),i=a.n(n),o=a(4839),r=e=>{let{children:t,className:a,bg:n,id:r}=e;return(0,s.jsx)("section",{className:(0,o.Z)(a,i().wrapper),style:{background:n},id:r,children:t})},l=a(6165),c=a.n(l),d=e=>{let{children:t,highlight:a,base0:n,base950:i,xl2:r,xl3:l,xl4:d,xl6:m,xl7:u,xl5:_,textCenter:h,semiBold:p,light:x,className:g}=e;return(0,s.jsx)("h3",{className:(0,o.Z)(c().heading,r&&c().xl2,l&&c().xl3,d&&c().xl4,_&&c().xl5,m&&c().xl6,u&&c().xl7,a&&c().highlight,n&&c().base0,i&&c().base950,p&&c().semiBold,x&&c().light,h&&c().textCenter,g),children:t})},m=a(5874),u=a.n(m),_=e=>{let{children:t,className:a}=e;return(0,s.jsx)("span",{className:(0,o.Z)(u().highlight,a),children:t})},h=a(6968),p=a.n(h),x=e=>{let{children:t,light:a,base:n,sm:i,lg:r,xl:l,xl2:c,xl3:d,primaryDefault:m,highlight:u,base0:_,base400:h,base500:x,base600:g,base800:b,base950:f,bold:j,textCenter:v,className:y}=e;return(0,s.jsx)("p",{className:(0,o.Z)(p().text,m&&p().primaryDefault,a&&p().light,u&&p().highlight,_&&p().base0,h&&p().base400,x&&p().base500,g&&p().base600,b&&p().base800,f&&p().base950,i&&p().sm,n&&p().base,r&&p().lg,l&&p().xl,c&&p().xl2,d&&p().xl3,j&&p().bold,v&&p().textCenter,y),children:t})},g=a(8121),b=a.n(g),f=e=>{let{url:t}=e;return(0,s.jsx)("div",{className:b().videoContainer,children:(0,s.jsxs)("video",{className:b().video,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[(0,s.jsx)("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."]})})}},3054:function(){},7018:function(e){e.exports={mainWrapper:"ContactUs_mainWrapper___ueq_",container:"ContactUs_container__B_vqr",heading:"ContactUs_heading__XaK7B",contactWrapper:"ContactUs_contactWrapper__hx2VO",header:"ContactUs_header__vBAod",inputWrapper:"ContactUs_inputWrapper___RUNs",message:"ContactUs_message__uLs9F",button:"ContactUs_button__DSVaf",socialContainer:"ContactUs_socialContainer__Hens5",logo:"ContactUs_logo__g4_C6"}},4437:function(e){e.exports={wrapper:"HeroSection_wrapper__R2O_N",container:"HeroSection_container__aBTFs",heading:"HeroSection_heading__tl11M",infoContainer:"HeroSection_infoContainer__une4W",socialContainer:"HeroSection_socialContainer__uTC2_",logo:"HeroSection_logo__jnmIf"}},8513:function(e){e.exports={wrapper:"LatestEpisodes_wrapper__uZFr1",container:"LatestEpisodes_container__xOAKz",episodes:"LatestEpisodes_episodes__bsjVE",episode:"LatestEpisodes_episode__3HrW8",img:"LatestEpisodes_img__33B8_",text:"LatestEpisodes_text__vhqXU",heading:"LatestEpisodes_heading__cCgDJ",button:"LatestEpisodes_button__mF45W"}},581:function(e){e.exports={mlFormContainer:"MailerLiteForm_mlFormContainer__IrYXg",mlFormAlignCenter:"MailerLiteForm_mlFormAlignCenter__XdFXq",mlFormEmbedWrapper:"MailerLiteForm_mlFormEmbedWrapper__0I7q3",newsletterhead:"MailerLiteForm_newsletterhead__LQP6x",mlFormEmbedContent:"MailerLiteForm_mlFormEmbedContent__9w96C",mlFormEmbedPermissionsContent:"MailerLiteForm_mlFormEmbedPermissionsContent__tLlJq",mlFormFieldRow:"MailerLiteForm_mlFormFieldRow__mHlnd",mlFormCheckboxRow:"MailerLiteForm_mlFormCheckboxRow__uY_Ue",checkbox:"MailerLiteForm_checkbox__EE5Qc",labelDescription:"MailerLiteForm_labelDescription__n0ePJ",mlFormEmbedSubmit:"MailerLiteForm_mlFormEmbedSubmit__QorAz",primary:"MailerLiteForm_primary__LFZjl",mlFormRecaptcha:"MailerLiteForm_mlFormRecaptcha__xYy51",mlFormSuccessBody:"MailerLiteForm_mlFormSuccessBody__X70AG"}},7305:function(e){e.exports={wrapper:"PlayNow_wrapper__l4c__",container:"PlayNow_container__IJXeP",heading:"PlayNow_heading__nuilO"}},2984:function(e){e.exports={mainWrapper:"SupportTheShow_mainWrapper__EWXTh",container:"SupportTheShow_container__YEWSF",heading:"SupportTheShow_heading__kPZZH",title:"SupportTheShow_title__VZUcK",subscriberContainer:"SupportTheShow_subscriberContainer__V51qr",donationInfoContainer:"SupportTheShow_donationInfoContainer__QC2pX",donationContainer:"SupportTheShow_donationContainer__lrlws",infoContainer:"SupportTheShow_infoContainer__xBgOE",donationBox:"SupportTheShow_donationBox__BJKvt",subscribeForm:"SupportTheShow_subscribeForm__yvUCh",inputs:"SupportTheShow_inputs__UCH02",button:"SupportTheShow_button__MpTdY",img:"SupportTheShow_img__KZlFf",list:"SupportTheShow_list__kmEcx",helpsLists:"SupportTheShow_helpsLists__jUXTo"}},6165:function(e){e.exports={heading:"Heading_heading__yNl_y",highlight:"Heading_highlight__nzkiJ",base0:"Heading_base0__mnJGE",base950:"Heading_base950__yrjvE",xl2:"Heading_xl2__C7wTe",xl3:"Heading_xl3___75jW",xl4:"Heading_xl4__tBLlC",xl5:"Heading_xl5__AZViO",xl6:"Heading_xl6__oOQjn",xl7:"Heading_xl7__TOs1w",textCenter:"Heading_textCenter__dMRo8",semiBold:"Heading_semiBold__fDbXN",light:"Heading_light__f20EM"}},5874:function(e){e.exports={highlight:"Highlight_highlight__YAbgQ"}},9082:function(e){e.exports={input:"Input_input__fafau"}},6968:function(e){e.exports={text:"Text_text__9Z5G2",primaryDefault:"Text_primaryDefault__qzbwc",highlight:"Text_highlight__lKTfV",base0:"Text_base0__nmw5v",base500:"Text_base500__rLooB",base400:"Text_base400__EeAxH",base600:"Text_base600__Uj33i",base800:"Text_base800__L3MC1",base950:"Text_base950__tOHVM",sm:"Text_sm__8Jusx",base:"Text_base__mCD0h",lg:"Text_lg__oxWoe",xl:"Text_xl__glil7",xl2:"Text_xl2__vvJML",xl3:"Text_xl3__aMyX7",xl15:"Text_xl15__3vkHJ",textCenter:"Text_textCenter__ZNrws",bold:"Text_bold__TOO7V"}},8121:function(e){e.exports={videoContainer:"VideoBg_videoContainer__or1ML",video:"VideoBg_video__7_Ex0"}},9647:function(e){e.exports={wrapper:"Wrapper_wrapper__5JmV3"}}},function(e){e.O(0,[954,38,971,23,744],function(){return e(e.s=9946)}),_N_E=e.O()}]);