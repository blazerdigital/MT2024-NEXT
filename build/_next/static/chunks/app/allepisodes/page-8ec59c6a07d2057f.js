(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{1128:function(e,s,t){Promise.resolve().then(t.bind(t,8883))},8883:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return u}});var _=t(7437),i=t(2265),l=t(2123),a=t.n(l),n=t(9647),o=t.n(n),r=t(4839),x=e=>{let{children:s,className:t,bg:i,id:l}=e;return(0,_.jsx)("section",{className:(0,r.Z)(t,o().wrapper),style:{background:i},id:l,children:s})},d=t(6165),h=t.n(d),g=e=>{let{children:s,highlight:t,base0:i,base950:l,xl2:a,xl3:n,xl4:o,xl6:x,xl7:d,xl5:g,textCenter:c,semiBold:p,light:b,className:f}=e;return(0,_.jsx)("h3",{className:(0,r.Z)(h().heading,a&&h().xl2,n&&h().xl3,o&&h().xl4,g&&h().xl5,x&&h().xl6,d&&h().xl7,t&&h().highlight,i&&h().base0,l&&h().base950,p&&h().semiBold,b&&h().light,c&&h().textCenter,f),children:s})};t(5874);var c=t(6968),p=t.n(c),b=e=>{let{children:s,light:t,base:i,sm:l,lg:a,xl:n,xl2:o,xl3:x,primaryDefault:d,highlight:h,base0:g,base400:c,base500:b,base600:f,base800:u,base950:m,bold:T,textCenter:j,className:E}=e;return(0,_.jsx)("p",{className:(0,r.Z)(p().text,d&&p().primaryDefault,t&&p().light,h&&p().highlight,g&&p().base0,c&&p().base400,b&&p().base500,f&&p().base600,u&&p().base800,m&&p().base950,l&&p().sm,i&&p().base,a&&p().lg,n&&p().xl,o&&p().xl2,x&&p().xl3,T&&p().bold,j&&p().textCenter,E),children:s})};t(8121);var f=t(7138),u=()=>{let[e,s]=(0,i.useState)([]);return((0,i.useEffect)(()=>{(async()=>{try{let e=await fetch("/episodes/episodes.json");if(e.ok){let t=await e.json();console.log("Fetched episodes:",t),s(t)}else console.error("Failed to fetch episodes:",e.statusText)}catch(e){console.error("Error fetching episodes:",e)}})()},[]),console.log("Episodes state:",e),0===e.length)?(0,_.jsx)("div",{children:"Loading..."}):(0,_.jsx)(x,{className:a().wrapper,children:(0,_.jsxs)("div",{className:(0,r.Z)("container",a().container),children:[(0,_.jsx)(g,{xl5:!0,highlight:!0,children:"All Episodes"}),(0,_.jsx)("div",{className:a().episodes,children:e.map(e=>(0,_.jsx)(f.default,{href:"/episodes/".concat(e.id),passHref:!0,children:(0,_.jsxs)("div",{className:a().episode,children:[(0,_.jsx)("img",{src:e.img,alt:e.info,className:a().img}),(0,_.jsx)(b,{highlight:!0,xl:!0,textCenter:!0,className:a().text,children:e.info})]})},e.id))})]})})}},2123:function(e){e.exports={container:"AllEpisodes_container__hVo83",episodes:"AllEpisodes_episodes__G10i9",episode:"AllEpisodes_episode__PAfc3",img:"AllEpisodes_img__q1xGZ",text:"AllEpisodes_text__GCu7b",wrapper:"AllEpisodes_wrapper__nJwaJ"}},6165:function(e){e.exports={heading:"Heading_heading__yNl_y",highlight:"Heading_highlight__nzkiJ",base0:"Heading_base0__mnJGE",base950:"Heading_base950__yrjvE",xl2:"Heading_xl2__C7wTe",xl3:"Heading_xl3___75jW",xl4:"Heading_xl4__tBLlC",xl5:"Heading_xl5__AZViO",xl6:"Heading_xl6__oOQjn",xl7:"Heading_xl7__TOs1w",textCenter:"Heading_textCenter__dMRo8",semiBold:"Heading_semiBold__fDbXN",light:"Heading_light__f20EM"}},5874:function(e){e.exports={highlight:"Highlight_highlight__YAbgQ"}},6968:function(e){e.exports={text:"Text_text__9Z5G2",primaryDefault:"Text_primaryDefault__qzbwc",highlight:"Text_highlight__lKTfV",base0:"Text_base0__nmw5v",base500:"Text_base500__rLooB",base400:"Text_base400__EeAxH",base600:"Text_base600__Uj33i",base800:"Text_base800__L3MC1",base950:"Text_base950__tOHVM",sm:"Text_sm__8Jusx",base:"Text_base__mCD0h",lg:"Text_lg__oxWoe",xl:"Text_xl__glil7",xl2:"Text_xl2__vvJML",xl3:"Text_xl3__aMyX7",xl15:"Text_xl15__3vkHJ",textCenter:"Text_textCenter__ZNrws",bold:"Text_bold__TOO7V"}},8121:function(e){e.exports={videoContainer:"VideoBg_videoContainer__or1ML",video:"VideoBg_video__7_Ex0"}},9647:function(e){e.exports={wrapper:"Wrapper_wrapper__5JmV3"}}},function(e){e.O(0,[204,449,38,971,23,744],function(){return e(e.s=1128)}),_N_E=e.O()}]);