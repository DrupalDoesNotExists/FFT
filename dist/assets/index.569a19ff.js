(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();const v={},De=(e,n)=>e===n,E={equals:De};let be=se;const w=1,T=2,z={owned:null,cleanups:null,context:null,owner:null};var p=null;let y=null,a=null,h=null,_=null,P=0;function ve(e,n){const t=a,s=p,i=e.length===0,l=i?z:{owned:null,cleanups:null,context:null,owner:n||s},r=i?e:()=>e(()=>A(()=>q(l)));p=l,a=null;try{return x(r,!0)}finally{a=t,p=s}}function ye(e,n){n=n?Object.assign({},E,n):E;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.value)),te(t,i));return[ee.bind(t),s]}function S(e,n,t){const s=ne(e,n,!1,w);k(s)}function J(e,n,t){t=t?Object.assign({},E,t):E;const s=ne(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,k(s),ee.bind(s)}function A(e){const n=a;a=null;try{return e()}finally{a=n}}function ee(){const e=y;if(this.sources&&(this.state||e))if(this.state===w||e)k(this);else{const n=h;h=null,x(()=>N(this),!1),h=n}if(a){const n=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(n)):(a.sources=[this],a.sourceSlots=[n]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function te(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&x(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=y&&y.running;r&&y.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?h.push(l):_.push(l),l.observers&&le(l)),r||(l.state=w)}if(h.length>1e6)throw h=[],new Error},!1)),n}function k(e){if(!e.fn)return;q(e);const n=p,t=a,s=P;a=p=e,_e(e,e.value,s),a=t,p=n}function _e(e,n,t){let s;try{s=e.fn(n)}catch(i){e.pure&&(e.state=w),oe(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?te(e,s):e.value=s,e.updatedAt=t)}function ne(e,n,t,s=w,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:p,context:null,pure:t};return p===null||p!==z&&(p.owned?p.owned.push(l):p.owned=[l]),l}function ie(e){const n=y;if(e.state===0||n)return;if(e.state===T||n)return N(e);if(e.suspense&&A(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<P);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===w||n)k(e);else if(e.state===T||n){const i=h;h=null,x(()=>N(e,t[0]),!1),h=i}}function x(e,n){if(h)return e();let t=!1;n||(h=[]),_?t=!0:_=[],P++;try{const s=e();return we(t),s}catch(s){h||(_=null),oe(s)}}function we(e){if(h&&(se(h),h=null),e)return;const n=_;_=null,n.length&&x(()=>be(n),!1)}function se(e){for(let n=0;n<e.length;n++)ie(e[n])}function N(e,n){const t=y;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===w||t?i!==n&&ie(i):(i.state===T||t)&&N(i,n))}}function le(e){const n=y;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=T,s.pure?h.push(s):_.push(s),s.observers&&le(s))}}function q(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),r=t.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,t.observerSlots[s]=r)}}if(e.owned){for(n=0;n<e.owned.length;n++)q(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function Be(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function oe(e){throw e=Be(e),e}function re(e,n){return A(()=>e(n||{}))}function me(e){let n=!1;const t=e.keyed,s=J(()=>e.when,void 0,{equals:(i,l)=>n?i===l:!i==!l});return J(()=>{const i=s();if(i){const l=e.children,r=typeof l=="function"&&l.length>0;return n=t||r,r?A(()=>l(i)):l}return e.fallback})}function $e(e,n,t){let s=t.length,i=n.length,l=s,r=0,o=0,f=n[i-1].nextSibling,u=null;for(;r<i||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===r){const d=l<s?o?t[o-1].nextSibling:t[l-o]:f;for(;o<l;)e.insertBefore(t[o++],d)}else if(l===o)for(;r<i;)(!u||!u.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[i-1]){const d=n[--i].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],d),n[i]=t[l]}else{if(!u){u=new Map;let g=o;for(;g<l;)u.set(t[g],g++)}const d=u.get(n[r]);if(d!=null)if(o<d&&d<l){let g=r,m=1,$;for(;++g<i&&g<l&&!(($=u.get(n[g]))==null||$!==d+m);)m++;if(m>d-o){const O=n[r];for(;o<d;)e.insertBefore(t[o++],O)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const Y="_$DX_DELEGATE";function Se(e,n,t,s={}){let i;return ve(l=>{i=l,n===document?e():ue(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function fe(e,n,t){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function Ae(e,n=window.document){const t=n[Y]||(n[Y]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,Ee))}}function xe(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function D(e,n){n==null?e.removeAttribute("class"):e.className=n}function Ce(e,n,t){return A(()=>e(n,t))}function ue(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return F(e,n,s,t);S(i=>F(e,n(),i,t),s)}function Ee(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),v.registry&&!v.done&&(v.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));t!==null;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function F(e,n,t,s,i){for(v.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(v.context)return t;if(l==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=B(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean"){if(v.context)return t;t=B(e,t,s)}else{if(l==="function")return S(()=>{let o=n();for(;typeof o=="function";)o=o();t=F(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],f=t&&Array.isArray(t);if(L(o,n,t,i))return S(()=>t=F(e,o,t,s,!0)),()=>t;if(v.context){if(!o.length)return t;for(let u=0;u<o.length;u++)if(o[u].parentNode)return t=o}if(o.length===0){if(t=B(e,t,s),r)return t}else f?t.length===0?Z(e,o,s):$e(e,t,o):(t&&B(e),Z(e,o));t=o}else if(n instanceof Node){if(v.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=B(e,t,s,n);B(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function L(e,n,t,s){let i=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],f=t&&t[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=L(e,o,f)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=L(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const u=String(o);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return i}function Z(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function B(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(i!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(i,o):e.insertBefore(i,t):f&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}const Te="_App_52brv_1",Ne="_Container_52brv_5",Fe="_Centered_52brv_10",ke="_Button_52brv_18",b={App:Te,Container:Ne,Centered:Fe,Button:ke},Oe=fe("<img>"),Le=fe('<div><div><h1>\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0424\u0443\u0440\u044C\u0435</h1><hr><p><i>\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0424\u0443\u0440\u044C\u0435 (\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u043B \u0424\u0443\u0440\u044C\u0435, \u2131)</i> \u2014 <strong>\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F</strong>, \u0441\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0449\u0430\u044F \u043E\u0434\u043D\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0434\u0440\u0443\u0433\u0443\u044E \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439. \u041D\u043E\u0432\u0430\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u044F \u043E\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 <strong>\u0430\u043C\u043F\u043B\u0438\u0442\u0443\u0434\u044B</strong> \u043F\u0440\u0438 \u0440\u0430\u0437\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u043D\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u0440\u043D\u044B\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u2014 \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043A\u043E\u043B\u0435\u0431\u0430\u043D\u0438\u044F. \u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F <strong>\u0438\u043D\u0442\u0435\u0433\u0440\u0430\u043B\u044C\u043D\u044B\u043C</strong>.</p><p><i>\u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0424\u0443\u0440\u044C\u0435 (Fast Fourier Transform, FFT)</i> \u2014 <strong>\u0443\u0441\u043A\u043E\u0440\u0435\u043D\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442</strong>\u0434\u0438\u0441\u043A\u0440\u0435\u0442\u043D\u043E\u0433\u043E \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0424\u0443\u0440\u044C\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0437\u0430 \u0441\u0447\u0451\u0442 \u043F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u043D\u043E\u0441\u0442\u0438 \u0441\u0438\u043D\u0443\u0441\u043E\u0438\u0434\u0430\u043B\u044C\u043D\u044B\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439. \u0417\u0434\u0435\u0441\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F <strong>RFFT</strong>, \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0449\u0438\u0439 \u0435\u0449\u0451 \u0431\u044B\u0441\u0442\u0440\u0435\u0435. \u042D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0432\u044B\u0447\u0438\u0441\u043B\u044F\u0442\u044C <strong>\u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u0447\u0430\u0441\u0442\u044C FFT</strong>, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0437\u0430 \u0447\u0430\u0441\u0442\u0443\u044E \u0438 \u043D\u0443\u0436\u043D\u0430.</p><h2>\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438</h2><hr><p><a href="https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%A4%D1%83%D1%80%D1%8C%D0%B5">\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0424\u0443\u0440\u044C\u0435 (Wikipedia)</a></p><p><a href="https://ru.wikipedia.org/wiki/%D0%91%D1%8B%D1%81%D1%82%D1%80%D0%BE%D0%B5_%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%A4%D1%83%D1%80%D1%8C%D0%B5">\u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0424\u0443\u0440\u044C\u0435 (Wikipedia)</a></p><p><a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9A%D1%83%D0%BB%D0%B8_%E2%80%94_%D0%A2%D1%8C%D1%8E%D0%BA%D0%B8">\u0410\u043B\u0433\u043E\u0440\u0438\u0442\u043C \u041A\u0443\u043B\u0438 \u2014 \u0422\u044C\u044E\u043A\u0438 (Wikipedia)</a></p><p>\u0413. \u041C. \u0424\u0438\u0445\u0442\u0435\u043D\u0433\u043E\u043B\u044C\u0446 \xAB\u041E\u0441\u043D\u043E\u0432\u044B \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0430\u043D\u0430\u043B\u0438\u0437\u0430. \u0422\u043E\u043C I\xBB. \u0418\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u044F\u0442\u043E\u0435.</p><h2>\u0420\u0430\u0437\u043B\u043E\u0436\u0435\u043D\u0438\u0435</h2><hr><form action="" method="POST"><label for="file">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 .wav \u0444\u0430\u0439\u043B</label><input type="file" name="file" id="file"><button>\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u044C</button></form></div></div>');function Pe(){const e="https://api.ddne.ru/fft",[n,t]=ye();let s,i,l;const r=o=>{o.preventDefault(),clearTimeout(s),l=0;let f=new FormData(i);console.log(e),fetch(e,{method:"POST",body:f}).then(async u=>{if(u.ok){let d=await u.json();s=setTimeout(async()=>{fetch(`${e}/${d.task_id}`).then(async g=>{g.ok&&++l<5&&t(await g.json())})},5e3)}})};return(()=>{const o=Le.cloneNode(!0),f=o.firstChild,u=f.firstChild,d=u.nextSibling,g=d.nextSibling,m=g.nextSibling,$=m.nextSibling,O=$.nextSibling,ce=O.nextSibling,ae=ce.nextSibling,he=ae.nextSibling,de=he.nextSibling,j=de.nextSibling,ge=j.nextSibling,C=ge.nextSibling,pe=C.firstChild,I=pe.nextSibling,U=I.nextSibling,R=i;return typeof R=="function"?Ce(R,C):i=C,U.$$click=r,ue(f,re(me,{get when(){return n()!=null},get children(){const c=Oe.cloneNode(!0);return S(()=>xe(c,"src",`data:image/png;base64,${n().result.graph}`)),c}}),null),S(c=>{const M=b.App,W=b.Container,G=b.Centered,H=b.Centered,V=b.Centered,K=b.Form,Q=b.Button,X=b.Button;return M!==c._v$&&D(o,c._v$=M),W!==c._v$2&&D(f,c._v$2=W),G!==c._v$3&&D(u,c._v$3=G),H!==c._v$4&&D($,c._v$4=H),V!==c._v$5&&D(j,c._v$5=V),K!==c._v$6&&D(C,c._v$6=K),Q!==c._v$7&&D(I,c._v$7=Q),X!==c._v$8&&D(U,c._v$8=X),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),o})()}Ae(["click"]);Se(()=>re(Pe,{}),document.getElementById("root"));
