import{z as N,A as m,l as v,B as l,G,y as E,D as u}from"./index-CiwxCZNk.js";import{v as F,F as M,x as q,y as R}from"./List-biTribfy.js";function A(e){throw new Error(e)}const O="Enumeration already finished.",$="Enumeration has not started. Call MoveNext.",I="The input sequence has an insufficient number of elements.",k="Reset is not supported on this enumerator.";function b(){throw new Error(k)}function p(){throw new Error($)}function C(){throw new Error(O)}class V{constructor(t){this.f=t}toString(){const t=this;let n=0,r="seq [";const o=m(t);try{for(;n<4&&o["System.Collections.IEnumerator.MoveNext"]();)n>0&&(r=r+"; "),r=r+v(o["System.Collections.Generic.IEnumerator`1.get_Current"]()),n=n+1|0;return n===4&&(r=r+"; ..."),r+"]"}finally{l(o)}}GetEnumerator(){return this.f()}[Symbol.iterator](){return G(m(this))}"System.Collections.IEnumerable.GetEnumerator"(){return this.f()}}function L(e){return new V(e)}class D{constructor(t,n,r){this.current=t,this.next=n,this.dispose=r}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current()}"System.Collections.IEnumerator.get_Current"(){return this.current()}"System.Collections.IEnumerator.MoveNext"(){return this.next()}"System.Collections.IEnumerator.Reset"(){b()}Dispose(){this.dispose()}}function h(e,t,n){return new D(e,t,n)}function P(e){let t,n,r=!1,o=!1,s;const y=()=>{if(o=!0,n!=null){const i=u(n);try{l(i)}finally{n=void 0}}if(t!=null){const i=u(t);try{l(i)}finally{t=void 0}}};return h(()=>(r?o&&C():p(),s!=null?u(s):C()),()=>{let i;if(r||(r=!0),o)return!1;{let a;for(;a==null;){const c=t,_=n;if(c!=null)if(_!=null){const f=u(_);if(f["System.Collections.IEnumerator.MoveNext"]())s=E(f["System.Collections.Generic.IEnumerator`1.get_Current"]()),a=!0;else try{l(f)}finally{n=void 0}}else{const f=u(c);f["System.Collections.IEnumerator.MoveNext"]()?n=(i=f["System.Collections.Generic.IEnumerator`1.get_Current"](),m(i)):(y(),a=!1)}else t=m(e)}return u(a)}},()=>{o||y()})}function T(e,t){return h(()=>t["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>t["System.Collections.IEnumerator.MoveNext"](),()=>{try{l(t)}finally{e()}})}function g(e,t,n){let r=!1,o,s=E(e());const y=()=>{if(s!=null){const a=u(s);try{n(a)}finally{s=void 0}}},i=()=>{try{y()}finally{o=void 0}};return h(()=>(r||p(),o!=null?u(o):C()),()=>{if(r||(r=!0),s!=null){const a=u(s);let c;try{c=t(a)}catch(_){throw i(),_}return c!=null?(o=c,!0):(i(),!1)}else return!1},y)}function z(e,t){let n,r=t;return h(()=>{if(n!=null){const o=u(n)[0];return u(n)[1],o}else return p()},()=>(n=e(r),n!=null?(u(n)[0],r=u(n)[1],!0):!1),()=>{})}function B(e,t){t==null&&A(e)}function d(e){return L(e)}function S(e){return B("source",e),m(e)}function w(e){return d(()=>m(e()))}function x(e){return d(()=>P(e))}function X(e,t){return d(()=>z(e,t))}function Y(e){return w(()=>R(e))}function Z(e){return N(e)?F(e):e instanceof M?e:q(e)}function W(e,t,n){return d(()=>g(e,t,n))}function j(e,t,n){return d(()=>{let r=-1;return g(e,o=>(r=r+1|0,t(r,o)),n)})}function ee(e,t){return x([e,t])}function H(e,t,n){const r=S(n);try{let o=t;for(;r["System.Collections.IEnumerator.MoveNext"]();)o=e(o,r["System.Collections.Generic.IEnumerator`1.get_Current"]());return o}finally{l(r)}}function te(e,t){H((n,r)=>{e(r)},void 0,t)}function J(e,t){return W(()=>S(t),n=>n["System.Collections.IEnumerator.MoveNext"]()?E(e(n["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,n=>{l(n)})}function ne(e,t){return d(()=>{const n=S(t);try{for(let r=1;r<=e;r++)if(!n["System.Collections.IEnumerator.MoveNext"]())throw new Error(I+"\\nParameter name: source");return T(()=>{},n)}catch(r){throw l(n),r}})}function re(e,t){return j(()=>S(t),(n,r)=>{if(n<e){if(r["System.Collections.IEnumerator.MoveNext"]())return E(r["System.Collections.Generic.IEnumerator`1.get_Current"]());throw new Error(I+"\\nParameter name: source")}else return},n=>{l(n)})}function oe(e,t){return w(()=>x(J(e,t)))}export{ee as a,ne as b,oe as c,w as d,Z as e,te as i,J as m,Y as s,re as t,X as u};
