import{a as y,f as j,w as q,b as a,t as P,h as R,u as b,i as U,c as x,j as D,U as Z,R as H,k as I,r as A,F as E,g as u,S as z,o as J,d as Q}from"./index-4b5d5d3a.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";const te={class:"layout__head"},oe={class:"title"},re={class:"layout__body"},se={key:0,class:"content"},ne={__name:"ModalCode",props:{title:{type:String,required:!0},code:{type:String,required:!0},content:{type:String}},emits:["close"],setup(l,{emit:t}){const e=t,o=l;return(n,s)=>(y(),j(b(H),{class:"modal__container","content-class":"modal__layout","overlay-class":"modal__backdrop","content-transition":"ani__modal","overlay-transition":"ani__backdrop","click-to-close":!0,"lock-scroll":!1,"reserve-scroll-bar-gap":!1},{default:q(()=>[a("div",te,[a("h4",oe,P(o.title),1),a("button",{type:"button",onClick:s[0]||(s[0]=r=>e("close"))},[R(b(U),{icon:["fas","xmark"]})])]),a("div",re,[o.content?(y(),x("div",se,P(o.content),1)):D("",!0),R(b(Z),{code:o.code,lang:"javascript"},null,8,["code"])])]),_:1}))}},le={class:"number"},ie={__name:"TheAside",props:{activeIndex:{type:Number,required:!0},steps:{type:Array,required:!0}},setup(l){const t=l,e=I(()=>t.activeIndex),o=A(!1),n=()=>{o.value=!1},s=I(()=>String(e.value+1).padStart(2,"0")+". "+t.steps[e.value].title);return(r,c)=>(y(),x(E,null,[a("aside",null,[a("button",{type:"button",class:"btn btn__code",onClick:c[0]||(c[0]=g=>o.value=!0),title:"코드보기"},[a("span",le,P(s.value),1),R(b(U),{icon:["fas","code"]})])]),R(ne,{modelValue:o.value,"onUpdate:modelValue":c[1]||(c[1]=g=>o.value=g),onClose:c[2]||(c[2]=()=>n()),title:s.value,code:l.steps[e.value].code,content:l.steps[e.value].content},null,8,["modelValue","title","code","content"])],64))}},ce=[{title:"GSAP 기본 애니메이션",code:`gsap.to(imagesRefs.value[0] // 적용할 요소, {
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
`},{title:"scrub",code:`gsap.to(imagesRefs.value[4], {
  x: 200,
  duration: 1,
  borderRadius: 100,
  rotation: 360,
  scrollTrigger: {
    trigger: imagesRefs.value[4],
    start: 'top: 50%',
    end: 'bottom: 20%',
    scrub: 0.5,
  },
})`,content:`scrub 속성은 스크롤과 애니메이션 재생을 연결하여, 스크롤이 움직이는 방향에 따라 애니메이션이 실시간으로 부드럽게 진행되거나 되돌아가도록 만드는 기능입니다.
Boolean 또는 숫자 값을 할당할 수 있으며, 숫자는 애니메이션의 부드러운 전환을 위한 시간(초)를 의미합니다.`},{title:"pin",code:` gsap.to(sectionRefs.value[5], {
  duration: 1,
  scrollTrigger: {
    trigger: imagesRefs.value[5],
    start: 'top 50%',
    end: 'bottom 200px',
    scrub: 0.5,
    pin: true,
  },
})`,content:`pin 속성은 scrollTrigger를 사용하여 스크롤 하는 동안 특정 요소를 뷰포트에 고정시키는 기능을 의미합니다.
pinSpacing: true로 설정하면, 핀이 고정된 시간동안 그 요소가 차지했던 공간을 자동으로 추가하여, 다음 요소가 고정된 요소에 의해 가려지거나 겹치지 않게 합니다.  `},{title:"toggleClass",code:`
<script>
gsap.to(imagesRefs.value[6], {
  x: 200,
  duration: 1,
  borderRadius: 100,
  rotation: 360,
  scrollTrigger: {
    trigger: imagesRefs.value[6],
    start: 'top center',
    end: 'bottom top',
    scrub: 1,
    toggleClass: 'active',
  },
})
<\/script>

<style>
.parallax__item__img.active {
  filter: hue-rotate(100deg);
}
</style>
    `,content:"toggleClass는 스크롤 이벤트가 발생할 때 지정된 요소에 특정 class를 추가, 제거하여 애니메이션을 적용하는 옵션입니다."},{title:"callBack",code:`gsap.to(imagesRefs.value[7], {
  x: 200,
  duration: 1,
  borderRadius: 100,
  rotation: 360,

  scrollTrigger: {
    trigger: imagesRefs.value[7],
    start: 'top center',
    end: 'bottom 20%',
    scrub: 1,

    // callBack
    onEnter: () => {
      // console.log('onEnter')
    },

    onLeave: () => {
      // console.log('onLeave')
    },

    onEnterBack: () => {
      // console.log('onEnterBack')
    },

    onLeaveBack: () => {
      // console.log('onLeaveBack')
    },

    onUpdate: (self) => {
      // self.progress     // 0.000 ~ 1.000
      // self.isActive     // true / false
      // self.direction    // 1 (스크롤 내려감), -1 (올라감)
      // self.trigger      // 대상 DOM

      console.log('onUpdate', self.progress.toFixed(3))
    },

    onToggle: (self) => {
      console.log('onToggle', self.isActive)
    },
  },
})`,content:`callBack은 scrollTrigger 옵션 내에서 정의되는 함수들로 요소가 스크롤 될 때 특정 이벤트가 발생할 때마다 실행되는 함수들을 말합니다.
  ㆍ onEnter: 요소가 뷰포트에 진입할 때
  ㆍ onLeave : 요소가 뷰포트를 벗어날 때
  ㆍ onEnterBack : 스크롤이 위로 올라가 요소가 뷰포트에 다시 진입할 때
  ㆍ onLeaveBack : 스크롤이 위로 올라가 요소가 뷰포트에서 이탈할 때
  ㆍ onUpdate : 스크롤 위치가 변경될 때마다 실행
  ㆍ onToggle : 트리거의 활성 상태가 변경될 때마다 실행`}];/*!
 * ScrollToPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var i,F,d,p,f,M,k,S,O=function(){return typeof window<"u"},$=function(){return i||O()&&(i=window.gsap)&&i.registerPlugin&&i},G=function(t){return typeof t=="string"},V=function(t){return typeof t=="function"},w=function(t,e){var o=e==="x"?"Width":"Height",n="scroll"+o,s="client"+o;return t===d||t===p||t===f?Math.max(p[n],f[n])-(d["inner"+o]||p[s]||f[s]):t[n]-t["offset"+o]},C=function(t,e){var o="scroll"+(e==="x"?"Left":"Top");return t===d&&(t.pageXOffset!=null?o="page"+e.toUpperCase()+"Offset":t=p[o]!=null?p:f),function(){return t[o]}},ae=function(t,e,o,n){if(V(t)&&(t=t(e,o,n)),typeof t!="object")return G(t)&&t!=="max"&&t.charAt(1)!=="="?{x:t,y:t}:{y:t};if(t.nodeType)return{y:t,x:t};var s={},r;for(r in t)s[r]=r!=="onAutoKill"&&V(t[r])?t[r](e,o,n):t[r];return s},N=function(t,e){if(t=M(t)[0],!t||!t.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var o=t.getBoundingClientRect(),n=!e||e===d||e===f,s=n?{top:p.clientTop-(d.pageYOffset||p.scrollTop||f.scrollTop||0),left:p.clientLeft-(d.pageXOffset||p.scrollLeft||f.scrollLeft||0)}:e.getBoundingClientRect(),r={x:o.left-s.left,y:o.top-s.top};return!n&&e&&(r.x+=C(e,"x")(),r.y+=C(e,"y")()),r},K=function(t,e,o,n,s){return!isNaN(t)&&typeof t!="object"?parseFloat(t)-s:G(t)&&t.charAt(1)==="="?parseFloat(t.substr(2))*(t.charAt(0)==="-"?-1:1)+n-s:t==="max"?w(e,o)-s:Math.min(w(e,o),N(t,e)[o]-s)},X=function(){i=$(),O()&&i&&typeof document<"u"&&document.body&&(d=window,f=document.body,p=document.documentElement,M=i.utils.toArray,i.config({autoKillThreshold:7}),k=i.config(),F=1)},T={version:"3.13.0",name:"scrollTo",rawVars:1,register:function(t){i=t,X()},init:function(t,e,o,n,s){F||X();var r=this,c=i.getProperty(t,"scrollSnapType");r.isWin=t===d,r.target=t,r.tween=o,e=ae(e,n,t,s),r.vars=e,r.autoKill=!!("autoKill"in e?e:k).autoKill,r.getX=C(t,"x"),r.getY=C(t,"y"),r.x=r.xPrev=r.getX(),r.y=r.yPrev=r.getY(),S||(S=i.core.globals().ScrollTrigger),i.getProperty(t,"scrollBehavior")==="smooth"&&i.set(t,{scrollBehavior:"auto"}),c&&c!=="none"&&(r.snap=1,r.snapInline=t.style.scrollSnapType,t.style.scrollSnapType="none"),e.x!=null?(r.add(r,"x",r.x,K(e.x,t,"x",r.x,e.offsetX||0),n,s),r._props.push("scrollTo_x")):r.skipX=1,e.y!=null?(r.add(r,"y",r.y,K(e.y,t,"y",r.y,e.offsetY||0),n,s),r._props.push("scrollTo_y")):r.skipY=1},render:function(t,e){for(var o=e._pt,n=e.target,s=e.tween,r=e.autoKill,c=e.xPrev,g=e.yPrev,_=e.isWin,W=e.snap,Y=e.snapInline,m,v,B,L,h;o;)o.r(t,o.d),o=o._next;m=_||!e.skipX?e.getX():c,v=_||!e.skipY?e.getY():g,B=v-g,L=m-c,h=k.autoKillThreshold,e.x<0&&(e.x=0),e.y<0&&(e.y=0),r&&(!e.skipX&&(L>h||L<-h)&&m<w(n,"x")&&(e.skipX=1),!e.skipY&&(B>h||B<-h)&&v<w(n,"y")&&(e.skipY=1),e.skipX&&e.skipY&&(s.kill(),e.vars.onAutoKill&&e.vars.onAutoKill.apply(s,e.vars.onAutoKillParams||[]))),_?d.scrollTo(e.skipX?m:e.x,e.skipY?v:e.y):(e.skipY||(n.scrollTop=e.y),e.skipX||(n.scrollLeft=e.x)),W&&(t===1||t===0)&&(v=n.scrollTop,m=n.scrollLeft,Y?n.style.scrollSnapType=Y:n.style.removeProperty("scroll-snap-type"),n.scrollTop=v+1,n.scrollLeft=m+1,n.scrollTop=v,n.scrollLeft=m),e.xPrev=e.x,e.yPrev=e.y,S&&S.update()},kill:function(t){var e=t==="scrollTo",o=this._props.indexOf(t);return(e||t==="scrollTo_x")&&(this.skipX=1),(e||t==="scrollTo_y")&&(this.skipY=1),o>-1&&this._props.splice(o,1),!this._props.length}};T.max=w;T.getOffset=N;T.buildGetter=C;T.config=function(l){k||X()||(k=i.config());for(var t in l)k[t]=l[t]};$()&&i.registerPlugin(T);const ge={id:"parallax__cont"},ue={width:"120",height:"120",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg"},pe=["fill"],de={__name:"Step1View",setup(l){u.registerPlugin(z,T);const t=Array.from({length:8},(s,r)=>r+1),e=A([]),o=A([]),n=A(0);return J(()=>{e.value.forEach((s,r)=>{u.to(s,{scrollTrigger:{trigger:s,start:"top 50%",end:"bottom 50%",onUpdate:()=>n.value=r}})}),u.to(o.value[0],{x:200,duration:1,borderRadius:100,rotation:360}),u.to(o.value[1],{x:200,duration:1,borderRadius:100,rotation:360,scrollTrigger:{trigger:o.value[1]}}),u.to(o.value[2],{x:200,duration:1,borderRadius:100,rotation:360,scrollTrigger:{trigger:o.value[2],toggleActions:"play pause reverse resume"}}),u.to(o.value[3],{x:200,duration:1,borderRadius:100,rotation:360,scrollTrigger:{trigger:o.value[3],toggleActions:"play pause reverse resume",start:"top: 50%",end:"bottom: 20%"}}),u.to(o.value[4],{x:200,duration:1,borderRadius:100,rotation:360,scrollTrigger:{trigger:o.value[4],start:"top: 50%",end:"bottom: 20%",scrub:.5}}),u.to(e.value[5],{duration:1,scrollTrigger:{trigger:o.value[5],start:"top 50%",end:"bottom 200px",scrub:.5,pin:!0}}),u.to(o.value[6],{x:200,duration:1,borderRadius:100,rotation:360,scrollTrigger:{trigger:o.value[6],start:"top center",end:"bottom top",scrub:1,toggleClass:"active",id:"toggleClass"}}),u.to(o.value[7],{x:200,duration:1,borderRadius:100,rotation:360,scrollTrigger:{trigger:o.value[7],start:"top center",end:"bottom 20%",scrub:1,onEnter:()=>{},onLeave:()=>{},onEnterBack:()=>{},onLeaveBack:()=>{},onUpdate:s=>{console.log("onUpdate",s.progress.toFixed(3))},onToggle:s=>{console.log("onToggle",s.isActive)}}})}),(s,r)=>(y(),x(E,null,[a("main",ge,[(y(!0),x(E,null,Q(b(t),(c,g)=>(y(),x("section",{key:g,ref_for:!0,ref:_=>e.value[g]=_,class:"parallax__item"},[a("div",{class:"parallax__item__img",ref_for:!0,ref:_=>o.value[g]=_},[(y(),x("svg",ue,[a("rect",{x:"0",y:"0",width:"500",height:"500",fill:g%2===0?"#f2a30f":"#ffb6c1",rx:"0"},null,8,pe),r[0]||(r[0]=a("path",{d:"M326 217C326 226.941 317.941 235 308 235C298.059 235 290 226.941 290 217C290 207.059 298.059 199 308 199C317.941 199 326 207.059 326 217Z",fill:"black"},null,-1)),r[1]||(r[1]=a("path",{d:"M210 217C210 226.941 201.941 235 192 235C182.059 235 174 226.941 174 217C174 207.059 182.059 199 192 199C201.941 199 210 207.059 210 217Z",fill:"black"},null,-1)),r[2]||(r[2]=a("path",{d:"M147 303C172 354 233 355 252 355C271 355 322.311 350.135 353 303",stroke:"black","stroke-width":"20","stroke-linecap":"round"},null,-1))]))],512)]))),128))]),R(ie,{activeIndex:n.value,steps:b(ce)},null,8,["activeIndex","steps"])],64))}},me=ee(de,[["__scopeId","data-v-5d675371"]]);export{me as default};
