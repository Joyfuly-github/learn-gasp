import{a as y,f as W,w as j,b as a,t as M,h as R,u as h,i as V,c as v,j as q,U as D,R as Z,k as H,r as A,F as X,g as u,S as z,o as J,d as Q}from"./index-6ea9696f.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";const te={class:"layout__head"},oe={class:"title"},re={class:"layout__body"},se={key:0,class:"content"},ne={__name:"ModalCode",props:{title:{type:String,required:!0},code:{type:String,required:!0},content:{type:String}},emits:["close"],setup(i,{emit:t}){const e=t,r=i;return(s,n)=>(y(),W(h(Z),{class:"modal__container","content-class":"modal__layout","overlay-class":"modal__backdrop","content-transition":"ani__modal","overlay-transition":"ani__backdrop","click-to-close":!0,"lock-scroll":!1,"reserve-scroll-bar-gap":!1},{default:j(()=>[a("div",te,[a("h4",oe,M(r.title),1),a("button",{type:"button",onClick:n[0]||(n[0]=o=>e("close"))},[R(h(V),{icon:["fas","xmark"]})])]),a("div",re,[r.content?(y(),v("div",se,M(r.content),1)):q("",!0),R(h(D),{code:r.code,lang:"javascript"},null,8,["code"])])]),_:1}))}},ie={class:"number"},le={__name:"TheAside",props:{activeIndex:{type:Number,required:!0},steps:{type:Array,required:!0}},setup(i){const t=i,e=H(()=>t.activeIndex),r=A(!1),s=()=>{r.value=!1};return(n,o)=>(y(),v(X,null,[a("aside",null,[a("button",{type:"button",class:"btn btn__code",onClick:o[0]||(o[0]=l=>r.value=!0),title:"코드보기"},[R(h(V),{icon:["fas","code"]}),a("span",ie,M(e.value+1),1)])]),R(ne,{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=l=>r.value=l),onClose:o[2]||(o[2]=()=>s()),title:String(e.value+1).padStart(2,"0")+". "+i.steps[e.value].title,code:i.steps[e.value].code,content:i.steps[e.value].content},null,8,["modelValue","title","code","content"])],64))}};/*!
 * ScrollToPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var c,K,d,p,f,$,x,w,F=function(){return typeof window<"u"},O=function(){return c||F()&&(c=window.gsap)&&c.registerPlugin&&c},U=function(t){return typeof t=="string"},G=function(t){return typeof t=="function"},S=function(t,e){var r=e==="x"?"Width":"Height",s="scroll"+r,n="client"+r;return t===d||t===p||t===f?Math.max(p[s],f[s])-(d["inner"+r]||p[n]||f[n]):t[s]-t["offset"+r]},C=function(t,e){var r="scroll"+(e==="x"?"Left":"Top");return t===d&&(t.pageXOffset!=null?r="page"+e.toUpperCase()+"Offset":t=p[r]!=null?p:f),function(){return t[r]}},ce=function(t,e,r,s){if(G(t)&&(t=t(e,r,s)),typeof t!="object")return U(t)&&t!=="max"&&t.charAt(1)!=="="?{x:t,y:t}:{y:t};if(t.nodeType)return{y:t,x:t};var n={},o;for(o in t)n[o]=o!=="onAutoKill"&&G(t[o])?t[o](e,r,s):t[o];return n},N=function(t,e){if(t=$(t)[0],!t||!t.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var r=t.getBoundingClientRect(),s=!e||e===d||e===f,n=s?{top:p.clientTop-(d.pageYOffset||p.scrollTop||f.scrollTop||0),left:p.clientLeft-(d.pageXOffset||p.scrollLeft||f.scrollLeft||0)}:e.getBoundingClientRect(),o={x:r.left-n.left,y:r.top-n.top};return!s&&e&&(o.x+=C(e,"x")(),o.y+=C(e,"y")()),o},I=function(t,e,r,s,n){return!isNaN(t)&&typeof t!="object"?parseFloat(t)-n:U(t)&&t.charAt(1)==="="?parseFloat(t.substr(2))*(t.charAt(0)==="-"?-1:1)+s-n:t==="max"?S(e,r)-n:Math.min(S(e,r),N(t,e)[r]-n)},Y=function(){c=O(),F()&&c&&typeof document<"u"&&document.body&&(d=window,f=document.body,p=document.documentElement,$=c.utils.toArray,c.config({autoKillThreshold:7}),x=c.config(),K=1)},b={version:"3.13.0",name:"scrollTo",rawVars:1,register:function(t){c=t,Y()},init:function(t,e,r,s,n){K||Y();var o=this,l=c.getProperty(t,"scrollSnapType");o.isWin=t===d,o.target=t,o.tween=r,e=ce(e,s,t,n),o.vars=e,o.autoKill=!!("autoKill"in e?e:x).autoKill,o.getX=C(t,"x"),o.getY=C(t,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),w||(w=c.core.globals().ScrollTrigger),c.getProperty(t,"scrollBehavior")==="smooth"&&c.set(t,{scrollBehavior:"auto"}),l&&l!=="none"&&(o.snap=1,o.snapInline=t.style.scrollSnapType,t.style.scrollSnapType="none"),e.x!=null?(o.add(o,"x",o.x,I(e.x,t,"x",o.x,e.offsetX||0),s,n),o._props.push("scrollTo_x")):o.skipX=1,e.y!=null?(o.add(o,"y",o.y,I(e.y,t,"y",o.y,e.offsetY||0),s,n),o._props.push("scrollTo_y")):o.skipY=1},render:function(t,e){for(var r=e._pt,s=e.target,n=e.tween,o=e.autoKill,l=e.xPrev,P=e.yPrev,g=e.isWin,k=e.snap,E=e.snapInline,_,m,B,L,T;r;)r.r(t,r.d),r=r._next;_=g||!e.skipX?e.getX():l,m=g||!e.skipY?e.getY():P,B=m-P,L=_-l,T=x.autoKillThreshold,e.x<0&&(e.x=0),e.y<0&&(e.y=0),o&&(!e.skipX&&(L>T||L<-T)&&_<S(s,"x")&&(e.skipX=1),!e.skipY&&(B>T||B<-T)&&m<S(s,"y")&&(e.skipY=1),e.skipX&&e.skipY&&(n.kill(),e.vars.onAutoKill&&e.vars.onAutoKill.apply(n,e.vars.onAutoKillParams||[]))),g?d.scrollTo(e.skipX?_:e.x,e.skipY?m:e.y):(e.skipY||(s.scrollTop=e.y),e.skipX||(s.scrollLeft=e.x)),k&&(t===1||t===0)&&(m=s.scrollTop,_=s.scrollLeft,E?s.style.scrollSnapType=E:s.style.removeProperty("scroll-snap-type"),s.scrollTop=m+1,s.scrollLeft=_+1,s.scrollTop=m,s.scrollLeft=_),e.xPrev=e.x,e.yPrev=e.y,w&&w.update()},kill:function(t){var e=t==="scrollTo",r=this._props.indexOf(t);return(e||t==="scrollTo_x")&&(this.skipX=1),(e||t==="scrollTo_y")&&(this.skipY=1),r>-1&&this._props.splice(r,1),!this._props.length}};b.max=S;b.getOffset=N;b.buildGetter=C;b.config=function(i){x||Y()||(x=c.config());for(var t in i)x[t]=i[t]};O()&&c.registerPlugin(b);const ae={id:"parallax__cont"},ue={width:"120",height:"120",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg"},pe=["fill"],de={__name:"Step1View",setup(i){u.registerPlugin(z,b);const t=Array.from({length:9},(o,l)=>l+1),e=A([]),r=A([]),s=A(0),n=[{title:"GSAP 기본 애니메이션",code:`gsap.to(imagesRefs.value[0] // 적용할 요소, {
  // x로부터 200이동
  x: 200,
  // animaiton 재생시간
  duration: 1,
  // 360도 회전시키기
  rotation: 360,
})`},{title:"Scroll Trigger",code:`gsap.to(imagesRefs.value[1], {
  x: 200,
  duration: 1,
  borderRadius: 100,
  rotation: 360,
  scrollTrigger: {
    trigger: imagesRefs.value[1],
  },
})`,content:"ScrollTrigger는 웹 페이지 스크롤 동작에 따라 애니메이션을 제어할 수 있게 해주는 GSAP 플러그인 입니다."},{title:"Toggle Action",code:`
  gsap.to(imagesRefs.value[2], {
    x: 200,
    duration: 1,
    borderRadius: 100,
    rotation: 360,
    scrollTrigger: {
      trigger: imagesRefs.value[2],
      // toggleActions: 'onEnter onLeave onEnterBack onLeaveBack',
      // play, pause, resume, reset, restart, complete, reverse, none
      toggleActions: 'play pause reverse resume',
    },
  })
    `,content:`toggleAction 주로 4가지 스크롤 이벤트를 기준으로 동작합니다.
  ㆍ onEnter: 요소가 스크롤 영역에 진입할 때
  ㆍ onLeave : 요소가 스크롤 영역을 벗어날 때
  ㆍ onEnterBack : 스크롤이 다시 돌아와서 요소가 스크롤 영역에 진입할 때
  ㆍ onLeaveBack : 스크롤이 다시 돌아와서 요소가 스크롤 영역을 벗어날 때


  스크롤 이벤트에 대해 다음과 같은 동작을 설정할 수 있습니다.
  ㆍ play : 애니메이션 재생
  ㆍ pause : 애니메이션 일시정지
  ㆍ resume : 일시정지된 애니메이션을 재개
  ㆍ reset : 애니메이션을 초기 상태로 되돌림
  ㆍ restart : 애니메이션을 처음부터 다시 시작
  ㆍ complate : 애니메이션을 완료 상태로 즉시 이동
  ㆍ reverse : 애니메이션 되감기
  ㆍ none : 아무 동작도 수행하지 않음
    `},{title:"start와 end 속성",code:`gsap.to(imagesRefs.value[3], {
  x: 200,
  duration: 1,
  borderRadius: 100,
  rotation: 360,
  scrollTrigger: {
    trigger: imagesRefs.value[3],
    toggleActions: 'play pause reverse resume',
    start: 'top 50%',
    end: 'bottom 20%',
    // markers: true,
  },
})`,content:`start와 end속성은 스크롤 시 애니메이션의 시작 및 종료 시점을 정의합니다.
키워드(top, center, bottom), 뷰포트 비율, 픽셀값, 동적 계산 함수 등 다양한 값으로 정의할 수 있습니다.

start: 'top 50%',
→ 트리거 요소의 상단이 뷰포트 50% 지점에 닿으면 애니메이션이 시작

end: 'bottom 20%'
→ 트리거 요소의 하단이 뷰포트 하단 20%지점을 넘어가면 애니메이션 종료

markers: true
→ 위에 정의된 뷰포트 start, end 기준점을 화면에 표시
`},{title:"GSAP 기본 애니메이션",code:"onMounted(() => { gsap.to(imagesRefs.value[0], { x: 200,duration: 1,borderRadius: 100,rotation: 360 })}"},{title:"GSAP 기본 애니메이션",code:"onMounted(() => { gsap.to(imagesRefs.value[0], { x: 200,duration: 1,borderRadius: 100,rotation: 360 })}"},{title:"GSAP 기본 애니메이션",code:"onMounted(() => { gsap.to(imagesRefs.value[0], { x: 200,duration: 1,borderRadius: 100,rotation: 360 })}"},{title:"GSAP 기본 애니메이션",code:"onMounted(() => { gsap.to(imagesRefs.value[0], { x: 200,duration: 1,borderRadius: 100,rotation: 360 })}"},{title:"GSAP 기본 애니메이션",code:"onMounted(() => { gsap.to(imagesRefs.value[0], { x: 200,duration: 1,borderRadius: 100,rotation: 360 })}"}];return J(()=>{e.value.forEach((o,l)=>{u.to(o,{scrollTrigger:{trigger:o,start:"top 50%",end:"bottom 50%",onUpdate:()=>s.value=l}})}),u.to(r.value[0],{x:200,duration:1,borderRadius:100,rotation:360}),u.to(r.value[1],{x:200,duration:1,rotation:360,scrollTrigger:{trigger:r.value[1]}}),u.to(r.value[2],{x:200,duration:1,borderRadius:100,rotation:360,scrollTrigger:{trigger:r.value[2],toggleActions:"play pause reverse resume"}}),u.to(r.value[3],{x:200,duration:1,borderRadius:100,rotation:360,scrollTrigger:{trigger:r.value[3],toggleActions:"play pause reverse resume",start:"top: 50%",end:"bottom: 20%"}}),u.to(r.value[4],{x:200,duration:1,borderRadius:100,rotation:360,scrollTrigger:{trigger:r.value[4],start:"top: 50%",end:"bottom: 20%",scrub:.5}}),u.to(r.value[5],{x:200,duration:1,borderRadius:100,rotation:360,scrollTrigger:{trigger:r.value[5],start:"top 50%",end:"bottom 200px",scrub:.5,pin:!0}}),u.to(r.value[6],{x:200,duration:1,borderRadius:100,rotation:360,scrollTrigger:{trigger:r.value[6],start:"top center",end:"bottom top",scrub:1,toggleClass:"active",id:"toggleClass"}}),u.to(r.value[7],{x:200,duration:1,borderRadius:100,rotation:360,scrollTrigger:{trigger:r.value[7],start:"top center",end:"bottom 20%",scrub:1,onEnter:()=>{},onLeave:()=>{},onEnterBack:()=>{},onLeaveBack:()=>{},onUpdate:o=>{console.log("onUpdate",o.progress.toFixed(3))},onToggle:o=>{console.log("onToggle",o.isActive)}}})}),(o,l)=>(y(),v(X,null,[a("main",ae,[(y(!0),v(X,null,Q(h(t),(P,g)=>(y(),v("section",{key:g,ref_for:!0,ref:k=>e.value[g]=k,class:"parallax__item"},[a("div",{class:"parallax__item__img",ref_for:!0,ref:k=>r.value[g]=k},[(y(),v("svg",ue,[a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M254.166 0C392.534 0 500 116.3 500 254.092C500 389.601 390.241 500 254.166 500C115.777 500 0 391.906 0 254.092C0 114.032 113.521 0 254.166 0Z",fill:g%2===0?"#f2a30f":"#ffb6c1"},null,8,pe),l[0]||(l[0]=a("path",{d:"M326 217C326 226.941 317.941 235 308 235C298.059 235 290 226.941 290 217C290 207.059 298.059 199 308 199C317.941 199 326 207.059 326 217Z",fill:"black"},null,-1)),l[1]||(l[1]=a("path",{d:"M210 217C210 226.941 201.941 235 192 235C182.059 235 174 226.941 174 217C174 207.059 182.059 199 192 199C201.941 199 210 207.059 210 217Z",fill:"black"},null,-1)),l[2]||(l[2]=a("path",{d:"M147 303C172 354 233 355 252 355C271 355 322.311 350.135 353 303",stroke:"black","stroke-width":"20","stroke-linecap":"round"},null,-1))]))],512)]))),128))]),R(le,{activeIndex:s.value,steps:n},null,8,["activeIndex"])],64))}},_e=ee(de,[["__scopeId","data-v-7b4c5cc4"]]);export{_e as default};
