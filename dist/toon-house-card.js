var kp=Object.create;var Bu=Object.defineProperty;var zp=Object.getOwnPropertyDescriptor;var Vp=Object.getOwnPropertyNames;var Gp=Object.getPrototypeOf,Hp=Object.prototype.hasOwnProperty;var Wp=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var Xp=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Vp(t))!Hp.call(i,s)&&s!==e&&Bu(i,s,{get:()=>t[s],enumerable:!(n=zp(t,s))||n.enumerable});return i};var Yp=(i,t,e)=>(e=i!=null?kp(Gp(i)):{},Xp(t||!i||!i.__esModule?Bu(e,"default",{value:i,enumerable:!0}):e,i));var Jf=Wp((MM,sc)=>{(function(){"use strict";var i={};i.version="6.4.2.2",i.use_lines=!0,i.use_xyz=!1;var t=!1;typeof sc<"u"&&sc.exports?(sc.exports=i,t=!0):(typeof define=="function"&&define.amd&&define(i),typeof document<"u"?window.ClipperLib=i:self.ClipperLib=i);var e;if(t){var n="chrome";e="Netscape"}else{var n=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var s={};n.indexOf("chrome")!=-1&&n.indexOf("chromium")==-1?s.chrome=1:s.chrome=0,n.indexOf("chromium")!=-1?s.chromium=1:s.chromium=0,n.indexOf("safari")!=-1&&n.indexOf("chrome")==-1&&n.indexOf("chromium")==-1?s.safari=1:s.safari=0,n.indexOf("firefox")!=-1?s.firefox=1:s.firefox=0,n.indexOf("firefox/17")!=-1?s.firefox17=1:s.firefox17=0,n.indexOf("firefox/15")!=-1?s.firefox15=1:s.firefox15=0,n.indexOf("firefox/3")!=-1?s.firefox3=1:s.firefox3=0,n.indexOf("opera")!=-1?s.opera=1:s.opera=0,n.indexOf("msie 10")!=-1?s.msie10=1:s.msie10=0,n.indexOf("msie 9")!=-1?s.msie9=1:s.msie9=0,n.indexOf("msie 8")!=-1?s.msie8=1:s.msie8=0,n.indexOf("msie 7")!=-1?s.msie7=1:s.msie7=0,n.indexOf("msie ")!=-1?s.msie=1:s.msie=0,i.biginteger_used=null;var r,a=0xdeadbeefcafe,c=(a&16777215)==15715070;function h(o,l,u){i.biginteger_used=1,o!=null&&(typeof o=="number"&&typeof l>"u"?this.fromInt(o):typeof o=="number"?this.fromNumber(o,l,u):l==null&&typeof o!="string"?this.fromString(o,256):this.fromString(o,l))}function d(){return new h(null,void 0,void 0)}function f(o,l,u,p,v,M){for(;--M>=0;){var L=l*this[o++]+u[p]+v;v=Math.floor(L/67108864),u[p++]=L&67108863}return v}function _(o,l,u,p,v,M){for(var L=l&32767,z=l>>15;--M>=0;){var G=this[o]&32767,q=this[o++]>>15,ht=z*G+q*L;G=L*G+((ht&32767)<<15)+u[p]+(v&1073741823),v=(G>>>30)+(ht>>>15)+z*q+(v>>>30),u[p++]=G&1073741823}return v}function m(o,l,u,p,v,M){for(var L=l&16383,z=l>>14;--M>=0;){var G=this[o]&16383,q=this[o++]>>14,ht=z*G+q*L;G=L*G+((ht&16383)<<14)+u[p]+v,v=(G>>28)+(ht>>14)+z*q,u[p++]=G&268435455}return v}c&&e=="Microsoft Internet Explorer"?(h.prototype.am=_,r=30):c&&e!="Netscape"?(h.prototype.am=f,r=26):(h.prototype.am=m,r=28),h.prototype.DB=r,h.prototype.DM=(1<<r)-1,h.prototype.DV=1<<r;var g=52;h.prototype.FV=Math.pow(2,g),h.prototype.F1=g-r,h.prototype.F2=2*r-g;var b="0123456789abcdefghijklmnopqrstuvwxyz",w=new Array,x,y;for(x=48,y=0;y<=9;++y)w[x++]=y;for(x=97,y=10;y<36;++y)w[x++]=y;for(x=65,y=10;y<36;++y)w[x++]=y;function A(o){return b.charAt(o)}function C(o,l){var u=w[o.charCodeAt(l)];return u??-1}function S(o){for(var l=this.t-1;l>=0;--l)o[l]=this[l];o.t=this.t,o.s=this.s}function I(o){this.t=1,this.s=o<0?-1:0,o>0?this[0]=o:o<-1?this[0]=o+this.DV:this.t=0}function R(o){var l=d();return l.fromInt(o),l}function O(o,l){var u;if(l==16)u=4;else if(l==8)u=3;else if(l==256)u=8;else if(l==2)u=1;else if(l==32)u=5;else if(l==4)u=2;else{this.fromRadix(o,l);return}this.t=0,this.s=0;for(var p=o.length,v=!1,M=0;--p>=0;){var L=u==8?o[p]&255:C(o,p);if(L<0){o.charAt(p)=="-"&&(v=!0);continue}v=!1,M==0?this[this.t++]=L:M+u>this.DB?(this[this.t-1]|=(L&(1<<this.DB-M)-1)<<M,this[this.t++]=L>>this.DB-M):this[this.t-1]|=L<<M,M+=u,M>=this.DB&&(M-=this.DB)}u==8&&o[0]&128&&(this.s=-1,M>0&&(this[this.t-1]|=(1<<this.DB-M)-1<<M)),this.clamp(),v&&h.ZERO.subTo(this,this)}function E(){for(var o=this.s&this.DM;this.t>0&&this[this.t-1]==o;)--this.t}function D(o){if(this.s<0)return"-"+this.negate().toString(o);var l;if(o==16)l=4;else if(o==8)l=3;else if(o==2)l=1;else if(o==32)l=5;else if(o==4)l=2;else return this.toRadix(o);var u=(1<<l)-1,p,v=!1,M="",L=this.t,z=this.DB-L*this.DB%l;if(L-- >0)for(z<this.DB&&(p=this[L]>>z)>0&&(v=!0,M=A(p));L>=0;)z<l?(p=(this[L]&(1<<z)-1)<<l-z,p|=this[--L]>>(z+=this.DB-l)):(p=this[L]>>(z-=l)&u,z<=0&&(z+=this.DB,--L)),p>0&&(v=!0),v&&(M+=A(p));return v?M:"0"}function U(){var o=d();return h.ZERO.subTo(this,o),o}function F(){return this.s<0?this.negate():this}function V(o){var l=this.s-o.s;if(l!=0)return l;var u=this.t;if(l=u-o.t,l!=0)return this.s<0?-l:l;for(;--u>=0;)if((l=this[u]-o[u])!=0)return l;return 0}function H(o){var l=1,u;return(u=o>>>16)!=0&&(o=u,l+=16),(u=o>>8)!=0&&(o=u,l+=8),(u=o>>4)!=0&&(o=u,l+=4),(u=o>>2)!=0&&(o=u,l+=2),(u=o>>1)!=0&&(o=u,l+=1),l}function B(){return this.t<=0?0:this.DB*(this.t-1)+H(this[this.t-1]^this.s&this.DM)}function X(o,l){var u;for(u=this.t-1;u>=0;--u)l[u+o]=this[u];for(u=o-1;u>=0;--u)l[u]=0;l.t=this.t+o,l.s=this.s}function K(o,l){for(var u=o;u<this.t;++u)l[u-o]=this[u];l.t=Math.max(this.t-o,0),l.s=this.s}function J(o,l){var u=o%this.DB,p=this.DB-u,v=(1<<p)-1,M=Math.floor(o/this.DB),L=this.s<<u&this.DM,z;for(z=this.t-1;z>=0;--z)l[z+M+1]=this[z]>>p|L,L=(this[z]&v)<<u;for(z=M-1;z>=0;--z)l[z]=0;l[M]=L,l.t=this.t+M+1,l.s=this.s,l.clamp()}function at(o,l){l.s=this.s;var u=Math.floor(o/this.DB);if(u>=this.t){l.t=0;return}var p=o%this.DB,v=this.DB-p,M=(1<<p)-1;l[0]=this[u]>>p;for(var L=u+1;L<this.t;++L)l[L-u-1]|=(this[L]&M)<<v,l[L-u]=this[L]>>p;p>0&&(l[this.t-u-1]|=(this.s&M)<<v),l.t=this.t-u,l.clamp()}function tt(o,l){for(var u=0,p=0,v=Math.min(o.t,this.t);u<v;)p+=this[u]-o[u],l[u++]=p&this.DM,p>>=this.DB;if(o.t<this.t){for(p-=o.s;u<this.t;)p+=this[u],l[u++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;u<o.t;)p-=o[u],l[u++]=p&this.DM,p>>=this.DB;p-=o.s}l.s=p<0?-1:0,p<-1?l[u++]=this.DV+p:p>0&&(l[u++]=p),l.t=u,l.clamp()}function nt(o,l){var u=this.abs(),p=o.abs(),v=u.t;for(l.t=v+p.t;--v>=0;)l[v]=0;for(v=0;v<p.t;++v)l[v+u.t]=u.am(0,p[v],l,v,0,u.t);l.s=0,l.clamp(),this.s!=o.s&&h.ZERO.subTo(l,l)}function st(o){for(var l=this.abs(),u=o.t=2*l.t;--u>=0;)o[u]=0;for(u=0;u<l.t-1;++u){var p=l.am(u,l[u],o,2*u,0,1);(o[u+l.t]+=l.am(u+1,2*l[u],o,2*u+1,p,l.t-u-1))>=l.DV&&(o[u+l.t]-=l.DV,o[u+l.t+1]=1)}o.t>0&&(o[o.t-1]+=l.am(u,l[u],o,2*u,0,1)),o.s=0,o.clamp()}function Tt(o,l,u){var p=o.abs();if(!(p.t<=0)){var v=this.abs();if(v.t<p.t){l?.fromInt(0),u!=null&&this.copyTo(u);return}u==null&&(u=d());var M=d(),L=this.s,z=o.s,G=this.DB-H(p[p.t-1]);G>0?(p.lShiftTo(G,M),v.lShiftTo(G,u)):(p.copyTo(M),v.copyTo(u));var q=M.t,ht=M[q-1];if(ht!=0){var ct=ht*(1<<this.F1)+(q>1?M[q-2]>>this.F2:0),_t=this.FV/ct,Xt=(1<<this.F1)/ct,le=1<<this.F2,fe=u.t,Ie=fe-q,fi=l??d();for(M.dlShiftTo(Ie,fi),u.compareTo(fi)>=0&&(u[u.t++]=1,u.subTo(fi,u)),h.ONE.dlShiftTo(q,fi),fi.subTo(M,M);M.t<q;)M[M.t++]=0;for(;--Ie>=0;){var Wi=u[--fe]==ht?this.DM:Math.floor(u[fe]*_t+(u[fe-1]+le)*Xt);if((u[fe]+=M.am(0,Wi,u,Ie,0,q))<Wi)for(M.dlShiftTo(Ie,fi),u.subTo(fi,u);u[fe]<--Wi;)u.subTo(fi,u)}l!=null&&(u.drShiftTo(q,l),L!=z&&h.ZERO.subTo(l,l)),u.t=q,u.clamp(),G>0&&u.rShiftTo(G,u),L<0&&h.ZERO.subTo(u,u)}}}function Et(o){var l=d();return this.abs().divRemTo(o,null,l),this.s<0&&l.compareTo(h.ZERO)>0&&o.subTo(l,l),l}function Zt(o){this.m=o}function re(o){return o.s<0||o.compareTo(this.m)>=0?o.mod(this.m):o}function xe(o){return o}function lt(o){o.divRemTo(this.m,null,o)}function ft(o,l,u){o.multiplyTo(l,u),this.reduce(u)}function Ft(o,l){o.squareTo(l),this.reduce(l)}Zt.prototype.convert=re,Zt.prototype.revert=xe,Zt.prototype.reduce=lt,Zt.prototype.mulTo=ft,Zt.prototype.sqrTo=Ft;function te(){if(this.t<1)return 0;var o=this[0];if(!(o&1))return 0;var l=o&3;return l=l*(2-(o&15)*l)&15,l=l*(2-(o&255)*l)&255,l=l*(2-((o&65535)*l&65535))&65535,l=l*(2-o*l%this.DV)%this.DV,l>0?this.DV-l:-l}function Nt(o){this.m=o,this.mp=o.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<o.DB-15)-1,this.mt2=2*o.t}function ne(o){var l=d();return o.abs().dlShiftTo(this.m.t,l),l.divRemTo(this.m,null,l),o.s<0&&l.compareTo(h.ZERO)>0&&this.m.subTo(l,l),l}function Se(o){var l=d();return o.copyTo(l),this.reduce(l),l}function pt(o){for(;o.t<=this.mt2;)o[o.t++]=0;for(var l=0;l<this.m.t;++l){var u=o[l]&32767,p=u*this.mpl+((u*this.mph+(o[l]>>15)*this.mpl&this.um)<<15)&o.DM;for(u=l+this.m.t,o[u]+=this.m.am(0,p,o,l,0,this.m.t);o[u]>=o.DV;)o[u]-=o.DV,o[++u]++}o.clamp(),o.drShiftTo(this.m.t,o),o.compareTo(this.m)>=0&&o.subTo(this.m,o)}function xt(o,l){o.squareTo(l),this.reduce(l)}function yt(o,l,u){o.multiplyTo(l,u),this.reduce(u)}Nt.prototype.convert=ne,Nt.prototype.revert=Se,Nt.prototype.reduce=pt,Nt.prototype.mulTo=yt,Nt.prototype.sqrTo=xt;function vt(){return(this.t>0?this[0]&1:this.s)==0}function St(o,l){if(o>4294967295||o<1)return h.ONE;var u=d(),p=d(),v=l.convert(this),M=H(o)-1;for(v.copyTo(u);--M>=0;)if(l.sqrTo(u,p),(o&1<<M)>0)l.mulTo(p,v,u);else{var L=u;u=p,p=L}return l.revert(u)}function Qt(o,l){var u;return o<256||l.isEven()?u=new Zt(l):u=new Nt(l),this.exp(o,u)}h.prototype.copyTo=S,h.prototype.fromInt=I,h.prototype.fromString=O,h.prototype.clamp=E,h.prototype.dlShiftTo=X,h.prototype.drShiftTo=K,h.prototype.lShiftTo=J,h.prototype.rShiftTo=at,h.prototype.subTo=tt,h.prototype.multiplyTo=nt,h.prototype.squareTo=st,h.prototype.divRemTo=Tt,h.prototype.invDigit=te,h.prototype.isEven=vt,h.prototype.exp=St,h.prototype.toString=D,h.prototype.negate=U,h.prototype.abs=F,h.prototype.compareTo=V,h.prototype.bitLength=B,h.prototype.mod=Et,h.prototype.modPowInt=Qt,h.ZERO=R(0),h.ONE=R(1);function Jt(){var o=d();return this.copyTo(o),o}function se(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function oe(){return this.t==0?this.s:this[0]<<24>>24}function W(){return this.t==0?this.s:this[0]<<16>>16}function ve(o){return Math.floor(Math.LN2*this.DB/Math.log(o))}function me(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function N(o){if(o==null&&(o=10),this.signum()==0||o<2||o>36)return"0";var l=this.chunkSize(o),u=Math.pow(o,l),p=R(u),v=d(),M=d(),L="";for(this.divRemTo(p,v,M);v.signum()>0;)L=(u+M.intValue()).toString(o).substr(1)+L,v.divRemTo(p,v,M);return M.intValue().toString(o)+L}function T(o,l){this.fromInt(0),l==null&&(l=10);for(var u=this.chunkSize(l),p=Math.pow(l,u),v=!1,M=0,L=0,z=0;z<o.length;++z){var G=C(o,z);if(G<0){o.charAt(z)=="-"&&this.signum()==0&&(v=!0);continue}L=l*L+G,++M>=u&&(this.dMultiply(p),this.dAddOffset(L,0),M=0,L=0)}M>0&&(this.dMultiply(Math.pow(l,M)),this.dAddOffset(L,0)),v&&h.ZERO.subTo(this,this)}function Z(o,l,u){if(typeof l=="number")if(o<2)this.fromInt(1);else for(this.fromNumber(o,u),this.testBit(o-1)||this.bitwiseTo(h.ONE.shiftLeft(o-1),Gt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(l);)this.dAddOffset(2,0),this.bitLength()>o&&this.subTo(h.ONE.shiftLeft(o-1),this);else{var p=new Array,v=o&7;p.length=(o>>3)+1,l.nextBytes(p),v>0?p[0]&=(1<<v)-1:p[0]=0,this.fromString(p,256)}}function et(){var o=this.t,l=new Array;l[0]=this.s;var u=this.DB-o*this.DB%8,p,v=0;if(o-- >0)for(u<this.DB&&(p=this[o]>>u)!=(this.s&this.DM)>>u&&(l[v++]=p|this.s<<this.DB-u);o>=0;)u<8?(p=(this[o]&(1<<u)-1)<<8-u,p|=this[--o]>>(u+=this.DB-8)):(p=this[o]>>(u-=8)&255,u<=0&&(u+=this.DB,--o)),p&128&&(p|=-256),v==0&&(this.s&128)!=(p&128)&&++v,(v>0||p!=this.s)&&(l[v++]=p);return l}function rt(o){return this.compareTo(o)==0}function bt(o){return this.compareTo(o)<0?this:o}function wt(o){return this.compareTo(o)>0?this:o}function ot(o,l,u){var p,v,M=Math.min(o.t,this.t);for(p=0;p<M;++p)u[p]=l(this[p],o[p]);if(o.t<this.t){for(v=o.s&this.DM,p=M;p<this.t;++p)u[p]=l(this[p],v);u.t=this.t}else{for(v=this.s&this.DM,p=M;p<o.t;++p)u[p]=l(v,o[p]);u.t=o.t}u.s=l(this.s,o.s),u.clamp()}function dt(o,l){return o&l}function Pt(o){var l=d();return this.bitwiseTo(o,dt,l),l}function Gt(o,l){return o|l}function Dt(o){var l=d();return this.bitwiseTo(o,Gt,l),l}function At(o,l){return o^l}function Wt(o){var l=d();return this.bitwiseTo(o,At,l),l}function Kt(o,l){return o&~l}function ue(o){var l=d();return this.bitwiseTo(o,Kt,l),l}function $(){for(var o=d(),l=0;l<this.t;++l)o[l]=this.DM&~this[l];return o.t=this.t,o.s=~this.s,o}function It(o){var l=d();return o<0?this.rShiftTo(-o,l):this.lShiftTo(o,l),l}function ut(o){var l=d();return o<0?this.lShiftTo(-o,l):this.rShiftTo(o,l),l}function Rt(o){if(o==0)return-1;var l=0;return o&65535||(o>>=16,l+=16),o&255||(o>>=8,l+=8),o&15||(o>>=4,l+=4),o&3||(o>>=2,l+=2),o&1||++l,l}function Ut(){for(var o=0;o<this.t;++o)if(this[o]!=0)return o*this.DB+Rt(this[o]);return this.s<0?this.t*this.DB:-1}function gt(o){for(var l=0;o!=0;)o&=o-1,++l;return l}function $t(){for(var o=0,l=this.s&this.DM,u=0;u<this.t;++u)o+=gt(this[u]^l);return o}function Vt(o){var l=Math.floor(o/this.DB);return l>=this.t?this.s!=0:(this[l]&1<<o%this.DB)!=0}function Ce(o,l){var u=h.ONE.shiftLeft(o);return this.bitwiseTo(u,l,u),u}function be(o){return this.changeBit(o,Gt)}function bi(o){return this.changeBit(o,Kt)}function Ci(o){return this.changeBit(o,At)}function xc(o,l){for(var u=0,p=0,v=Math.min(o.t,this.t);u<v;)p+=this[u]+o[u],l[u++]=p&this.DM,p>>=this.DB;if(o.t<this.t){for(p+=o.s;u<this.t;)p+=this[u],l[u++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;u<o.t;)p+=o[u],l[u++]=p&this.DM,p>>=this.DB;p+=o.s}l.s=p<0?-1:0,p>0?l[u++]=p:p<-1&&(l[u++]=this.DV+p),l.t=u,l.clamp()}function yc(o){var l=d();return this.addTo(o,l),l}function Fo(o){var l=d();return this.subTo(o,l),l}function yr(o){var l=d();return this.multiplyTo(o,l),l}function vc(){var o=d();return this.squareTo(o),o}function No(o){var l=d();return this.divRemTo(o,l,null),l}function Oo(o){var l=d();return this.divRemTo(o,null,l),l}function on(o){var l=d(),u=d();return this.divRemTo(o,l,u),new Array(l,u)}function vr(o){this[this.t]=this.am(0,o-1,this,0,0,this.t),++this.t,this.clamp()}function Bo(o,l){if(o!=0){for(;this.t<=l;)this[this.t++]=0;for(this[l]+=o;this[l]>=this.DV;)this[l]-=this.DV,++l>=this.t&&(this[this.t++]=0),++this[l]}}function bn(){}function qn(o){return o}function Uo(o,l,u){o.multiplyTo(l,u)}function ps(o,l){o.squareTo(l)}bn.prototype.convert=qn,bn.prototype.revert=qn,bn.prototype.mulTo=Uo,bn.prototype.sqrTo=ps;function ko(o){return this.exp(o,new bn)}function zo(o,l,u){var p=Math.min(this.t+o.t,l);for(u.s=0,u.t=p;p>0;)u[--p]=0;var v;for(v=u.t-this.t;p<v;++p)u[p+this.t]=this.am(0,o[p],u,p,0,this.t);for(v=Math.min(o.t,l);p<v;++p)this.am(0,o[p],u,p,0,l-p);u.clamp()}function bc(o,l,u){--l;var p=u.t=this.t+o.t-l;for(u.s=0;--p>=0;)u[p]=0;for(p=Math.max(l-this.t,0);p<o.t;++p)u[this.t+p-l]=this.am(l-p,o[p],u,0,0,this.t+p-l);u.clamp(),u.drShiftTo(1,u)}function wn(o){this.r2=d(),this.q3=d(),h.ONE.dlShiftTo(2*o.t,this.r2),this.mu=this.r2.divide(o),this.m=o}function wc(o){if(o.s<0||o.t>2*this.m.t)return o.mod(this.m);if(o.compareTo(this.m)<0)return o;var l=d();return o.copyTo(l),this.reduce(l),l}function Sc(o){return o}function Vo(o){for(o.drShiftTo(this.m.t-1,this.r2),o.t>this.m.t+1&&(o.t=this.m.t+1,o.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);o.compareTo(this.r2)<0;)o.dAddOffset(1,this.m.t+1);for(o.subTo(this.r2,o);o.compareTo(this.m)>=0;)o.subTo(this.m,o)}function P(o,l){o.squareTo(l),this.reduce(l)}function Y(o,l,u){o.multiplyTo(l,u),this.reduce(u)}wn.prototype.convert=wc,wn.prototype.revert=Sc,wn.prototype.reduce=Vo,wn.prototype.mulTo=Y,wn.prototype.sqrTo=P;function it(o,l){var u=o.bitLength(),p,v=R(1),M;if(u<=0)return v;u<18?p=1:u<48?p=3:u<144?p=4:u<768?p=5:p=6,u<8?M=new Zt(l):l.isEven()?M=new wn(l):M=new Nt(l);var L=new Array,z=3,G=p-1,q=(1<<p)-1;if(L[1]=M.convert(this),p>1){var ht=d();for(M.sqrTo(L[1],ht);z<=q;)L[z]=d(),M.mulTo(ht,L[z-2],L[z]),z+=2}var ct=o.t-1,_t,Xt=!0,le=d(),fe;for(u=H(o[ct])-1;ct>=0;){for(u>=G?_t=o[ct]>>u-G&q:(_t=(o[ct]&(1<<u+1)-1)<<G-u,ct>0&&(_t|=o[ct-1]>>this.DB+u-G)),z=p;!(_t&1);)_t>>=1,--z;if((u-=z)<0&&(u+=this.DB,--ct),Xt)L[_t].copyTo(v),Xt=!1;else{for(;z>1;)M.sqrTo(v,le),M.sqrTo(le,v),z-=2;z>0?M.sqrTo(v,le):(fe=v,v=le,le=fe),M.mulTo(le,L[_t],v)}for(;ct>=0&&!(o[ct]&1<<u);)M.sqrTo(v,le),fe=v,v=le,le=fe,--u<0&&(u=this.DB-1,--ct)}return M.revert(v)}function j(o){var l=this.s<0?this.negate():this.clone(),u=o.s<0?o.negate():o.clone();if(l.compareTo(u)<0){var p=l;l=u,u=p}var v=l.getLowestSetBit(),M=u.getLowestSetBit();if(M<0)return l;for(v<M&&(M=v),M>0&&(l.rShiftTo(M,l),u.rShiftTo(M,u));l.signum()>0;)(v=l.getLowestSetBit())>0&&l.rShiftTo(v,l),(v=u.getLowestSetBit())>0&&u.rShiftTo(v,u),l.compareTo(u)>=0?(l.subTo(u,l),l.rShiftTo(1,l)):(u.subTo(l,u),u.rShiftTo(1,u));return M>0&&u.lShiftTo(M,u),u}function Q(o){if(o<=0)return 0;var l=this.DV%o,u=this.s<0?o-1:0;if(this.t>0)if(l==0)u=this[0]%o;else for(var p=this.t-1;p>=0;--p)u=(l*u+this[p])%o;return u}function Bt(o){var l=o.isEven();if(this.isEven()&&l||o.signum()==0)return h.ZERO;for(var u=o.clone(),p=this.clone(),v=R(1),M=R(0),L=R(0),z=R(1);u.signum()!=0;){for(;u.isEven();)u.rShiftTo(1,u),l?((!v.isEven()||!M.isEven())&&(v.addTo(this,v),M.subTo(o,M)),v.rShiftTo(1,v)):M.isEven()||M.subTo(o,M),M.rShiftTo(1,M);for(;p.isEven();)p.rShiftTo(1,p),l?((!L.isEven()||!z.isEven())&&(L.addTo(this,L),z.subTo(o,z)),L.rShiftTo(1,L)):z.isEven()||z.subTo(o,z),z.rShiftTo(1,z);u.compareTo(p)>=0?(u.subTo(p,u),l&&v.subTo(L,v),M.subTo(z,M)):(p.subTo(u,p),l&&L.subTo(v,L),z.subTo(M,z))}if(p.compareTo(h.ONE)!=0)return h.ZERO;if(z.compareTo(o)>=0)return z.subtract(o);if(z.signum()<0)z.addTo(o,z);else return z;return z.signum()<0?z.add(o):z}var Mt=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Ot=(1<<26)/Mt[Mt.length-1];function kt(o){var l,u=this.abs();if(u.t==1&&u[0]<=Mt[Mt.length-1]){for(l=0;l<Mt.length;++l)if(u[0]==Mt[l])return!0;return!1}if(u.isEven())return!1;for(l=1;l<Mt.length;){for(var p=Mt[l],v=l+1;v<Mt.length&&p<Ot;)p*=Mt[v++];for(p=u.modInt(p);l<v;)if(p%Mt[l++]==0)return!1}return u.millerRabin(o)}function Ht(o){var l=this.subtract(h.ONE),u=l.getLowestSetBit();if(u<=0)return!1;var p=l.shiftRight(u);o=o+1>>1,o>Mt.length&&(o=Mt.length);for(var v=d(),M=0;M<o;++M){v.fromInt(Mt[Math.floor(Math.random()*Mt.length)]);var L=v.modPow(p,this);if(L.compareTo(h.ONE)!=0&&L.compareTo(l)!=0){for(var z=1;z++<u&&L.compareTo(l)!=0;)if(L=L.modPowInt(2,this),L.compareTo(h.ONE)==0)return!1;if(L.compareTo(l)!=0)return!1}}return!0}h.prototype.chunkSize=ve,h.prototype.toRadix=N,h.prototype.fromRadix=T,h.prototype.fromNumber=Z,h.prototype.bitwiseTo=ot,h.prototype.changeBit=Ce,h.prototype.addTo=xc,h.prototype.dMultiply=vr,h.prototype.dAddOffset=Bo,h.prototype.multiplyLowerTo=zo,h.prototype.multiplyUpperTo=bc,h.prototype.modInt=Q,h.prototype.millerRabin=Ht,h.prototype.clone=Jt,h.prototype.intValue=se,h.prototype.byteValue=oe,h.prototype.shortValue=W,h.prototype.signum=me,h.prototype.toByteArray=et,h.prototype.equals=rt,h.prototype.min=bt,h.prototype.max=wt,h.prototype.and=Pt,h.prototype.or=Dt,h.prototype.xor=Wt,h.prototype.andNot=ue,h.prototype.not=$,h.prototype.shiftLeft=It,h.prototype.shiftRight=ut,h.prototype.getLowestSetBit=Ut,h.prototype.bitCount=$t,h.prototype.testBit=Vt,h.prototype.setBit=be,h.prototype.clearBit=bi,h.prototype.flipBit=Ci,h.prototype.add=yc,h.prototype.subtract=Fo,h.prototype.multiply=yr,h.prototype.divide=No,h.prototype.remainder=Oo,h.prototype.divideAndRemainder=on,h.prototype.modPow=it,h.prototype.modInverse=Bt,h.prototype.pow=ko,h.prototype.gcd=j,h.prototype.isProbablePrime=kt,h.prototype.square=vc;var Lt=h;Lt.prototype.IsNegative=function(){return this.compareTo(Lt.ZERO)==-1},Lt.op_Equality=function(o,l){return o.compareTo(l)==0},Lt.op_Inequality=function(o,l){return o.compareTo(l)!=0},Lt.op_GreaterThan=function(o,l){return o.compareTo(l)>0},Lt.op_LessThan=function(o,l){return o.compareTo(l)<0},Lt.op_Addition=function(o,l){return new Lt(o,void 0,void 0).add(new Lt(l,void 0,void 0))},Lt.op_Subtraction=function(o,l){return new Lt(o,void 0,void 0).subtract(new Lt(l,void 0,void 0))},Lt.Int128Mul=function(o,l){return new Lt(o,void 0,void 0).multiply(new Lt(l,void 0,void 0))},Lt.op_Division=function(o,l){return o.divide(l)},Lt.prototype.ToDouble=function(){return parseFloat(this.toString())};var de=function(o,l){var u;if(typeof Object.getOwnPropertyNames>"u"){for(u in l.prototype)(typeof o.prototype[u]>"u"||o.prototype[u]===Object.prototype[u])&&(o.prototype[u]=l.prototype[u]);for(u in l)typeof o[u]>"u"&&(o[u]=l[u]);o.$baseCtor=l}else{for(var p=Object.getOwnPropertyNames(l.prototype),v=0;v<p.length;v++)typeof Object.getOwnPropertyDescriptor(o.prototype,p[v])>"u"&&Object.defineProperty(o.prototype,p[v],Object.getOwnPropertyDescriptor(l.prototype,p[v]));for(u in l)typeof o[u]>"u"&&(o[u]=l[u]);o.$baseCtor=l}};i.Path=function(){return[]},i.Path.prototype.push=Array.prototype.push,i.Paths=function(){return[]},i.Paths.prototype.push=Array.prototype.push,i.DoublePoint=function(){var o=arguments;this.X=0,this.Y=0,o.length===1?(this.X=o[0].X,this.Y=o[0].Y):o.length===2&&(this.X=o[0],this.Y=o[1])},i.DoublePoint0=function(){this.X=0,this.Y=0},i.DoublePoint0.prototype=i.DoublePoint.prototype,i.DoublePoint1=function(o){this.X=o.X,this.Y=o.Y},i.DoublePoint1.prototype=i.DoublePoint.prototype,i.DoublePoint2=function(o,l){this.X=o,this.Y=l},i.DoublePoint2.prototype=i.DoublePoint.prototype,i.PolyNode=function(){this.m_Parent=null,this.m_polygon=new i.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},i.PolyNode.prototype.IsHoleNode=function(){for(var o=!0,l=this.m_Parent;l!==null;)o=!o,l=l.m_Parent;return o},i.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},i.PolyNode.prototype.Contour=function(){return this.m_polygon},i.PolyNode.prototype.AddChild=function(o){var l=this.m_Childs.length;this.m_Childs.push(o),o.m_Parent=this,o.m_Index=l},i.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},i.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},i.PolyNode.prototype.Childs=function(){return this.m_Childs},i.PolyNode.prototype.Parent=function(){return this.m_Parent},i.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},i.PolyTree=function(){this.m_AllPolys=[],i.PolyNode.call(this)},i.PolyTree.prototype.Clear=function(){for(var o=0,l=this.m_AllPolys.length;o<l;o++)this.m_AllPolys[o]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},i.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},i.PolyTree.prototype.Total=function(){var o=this.m_AllPolys.length;return o>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&o--,o},de(i.PolyTree,i.PolyNode),i.Math_Abs_Int64=i.Math_Abs_Int32=i.Math_Abs_Double=function(o){return Math.abs(o)},i.Math_Max_Int32_Int32=function(o,l){return Math.max(o,l)},s.msie||s.opera||s.safari?i.Cast_Int32=function(o){return o|0}:i.Cast_Int32=function(o){return~~o},typeof Number.toInteger>"u"&&(Number.toInteger=null),s.chrome?i.Cast_Int64=function(o){return o<-2147483648||o>2147483647?o<0?Math.ceil(o):Math.floor(o):~~o}:s.firefox&&typeof Number.toInteger=="function"?i.Cast_Int64=function(o){return Number.toInteger(o)}:s.msie7||s.msie8?i.Cast_Int64=function(o){return parseInt(o,10)}:s.msie?i.Cast_Int64=function(o){return o<-2147483648||o>2147483647?o<0?Math.ceil(o):Math.floor(o):o|0}:i.Cast_Int64=function(o){return o<0?Math.ceil(o):Math.floor(o)},i.Clear=function(o){o.length=0},i.PI=3.141592653589793,i.PI2=2*3.141592653589793,i.IntPoint=function(){var o=arguments,l=o.length;if(this.X=0,this.Y=0,i.use_xyz)if(this.Z=0,l===3)this.X=o[0],this.Y=o[1],this.Z=o[2];else if(l===2)this.X=o[0],this.Y=o[1],this.Z=0;else if(l===1)if(o[0]instanceof i.DoublePoint){var u=o[0];this.X=i.Clipper.Round(u.X),this.Y=i.Clipper.Round(u.Y),this.Z=0}else{var p=o[0];typeof p.Z>"u"&&(p.Z=0),this.X=p.X,this.Y=p.Y,this.Z=p.Z}else this.X=0,this.Y=0,this.Z=0;else if(l===2)this.X=o[0],this.Y=o[1];else if(l===1)if(o[0]instanceof i.DoublePoint){var u=o[0];this.X=i.Clipper.Round(u.X),this.Y=i.Clipper.Round(u.Y)}else{var p=o[0];this.X=p.X,this.Y=p.Y}else this.X=0,this.Y=0},i.IntPoint.op_Equality=function(o,l){return o.X===l.X&&o.Y===l.Y},i.IntPoint.op_Inequality=function(o,l){return o.X!==l.X||o.Y!==l.Y},i.IntPoint0=function(){this.X=0,this.Y=0,i.use_xyz&&(this.Z=0)},i.IntPoint0.prototype=i.IntPoint.prototype,i.IntPoint1=function(o){this.X=o.X,this.Y=o.Y,i.use_xyz&&(typeof o.Z>"u"?this.Z=0:this.Z=o.Z)},i.IntPoint1.prototype=i.IntPoint.prototype,i.IntPoint1dp=function(o){this.X=i.Clipper.Round(o.X),this.Y=i.Clipper.Round(o.Y),i.use_xyz&&(this.Z=0)},i.IntPoint1dp.prototype=i.IntPoint.prototype,i.IntPoint2=function(o,l,u){this.X=o,this.Y=l,i.use_xyz&&(typeof u>"u"?this.Z=0:this.Z=u)},i.IntPoint2.prototype=i.IntPoint.prototype,i.IntRect=function(){var o=arguments,l=o.length;if(l===4)this.left=o[0],this.top=o[1],this.right=o[2],this.bottom=o[3];else if(l===1){var u=o[0];this.left=u.left,this.top=u.top,this.right=u.right,this.bottom=u.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},i.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},i.IntRect0.prototype=i.IntRect.prototype,i.IntRect1=function(o){this.left=o.left,this.top=o.top,this.right=o.right,this.bottom=o.bottom},i.IntRect1.prototype=i.IntRect.prototype,i.IntRect4=function(o,l,u,p){this.left=o,this.top=l,this.right=u,this.bottom=p},i.IntRect4.prototype=i.IntRect.prototype,i.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},i.PolyType={ptSubject:0,ptClip:1},i.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},i.JoinType={jtSquare:0,jtRound:1,jtMiter:2},i.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},i.EdgeSide={esLeft:0,esRight:1},i.Direction={dRightToLeft:0,dLeftToRight:1},i.TEdge=function(){this.Bot=new i.IntPoint0,this.Curr=new i.IntPoint0,this.Top=new i.IntPoint0,this.Delta=new i.IntPoint0,this.Dx=0,this.PolyTyp=i.PolyType.ptSubject,this.Side=i.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},i.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new i.IntPoint0},i.MyIntersectNodeSort=function(){},i.MyIntersectNodeSort.Compare=function(o,l){var u=l.Pt.Y-o.Pt.Y;return u>0?1:u<0?-1:0},i.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},i.Scanbeam=function(){this.Y=0,this.Next=null},i.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},i.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},i.OutPt=function(){this.Idx=0,this.Pt=new i.IntPoint0,this.Next=null,this.Prev=null},i.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new i.IntPoint0},i.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},i.ClipperBase.horizontal=-9007199254740992,i.ClipperBase.Skip=-2,i.ClipperBase.Unassigned=-1,i.ClipperBase.tolerance=1e-20,i.ClipperBase.loRange=47453132,i.ClipperBase.hiRange=0xfffffffffffff,i.ClipperBase.near_zero=function(o){return o>-i.ClipperBase.tolerance&&o<i.ClipperBase.tolerance},i.ClipperBase.IsHorizontal=function(o){return o.Delta.Y===0},i.ClipperBase.prototype.PointIsVertex=function(o,l){var u=l;do{if(i.IntPoint.op_Equality(u.Pt,o))return!0;u=u.Next}while(u!==l);return!1},i.ClipperBase.prototype.PointOnLineSegment=function(o,l,u,p){return p?o.X===l.X&&o.Y===l.Y||o.X===u.X&&o.Y===u.Y||o.X>l.X==o.X<u.X&&o.Y>l.Y==o.Y<u.Y&&Lt.op_Equality(Lt.Int128Mul(o.X-l.X,u.Y-l.Y),Lt.Int128Mul(u.X-l.X,o.Y-l.Y)):o.X===l.X&&o.Y===l.Y||o.X===u.X&&o.Y===u.Y||o.X>l.X==o.X<u.X&&o.Y>l.Y==o.Y<u.Y&&(o.X-l.X)*(u.Y-l.Y)===(u.X-l.X)*(o.Y-l.Y)},i.ClipperBase.prototype.PointOnPolygon=function(o,l,u){for(var p=l;;){if(this.PointOnLineSegment(o,p.Pt,p.Next.Pt,u))return!0;if(p=p.Next,p===l)break}return!1},i.ClipperBase.prototype.SlopesEqual=i.ClipperBase.SlopesEqual=function(){var o=arguments,l=o.length,u,p,v,M,L,z,G;return l===3?(u=o[0],p=o[1],G=o[2],G?Lt.op_Equality(Lt.Int128Mul(u.Delta.Y,p.Delta.X),Lt.Int128Mul(u.Delta.X,p.Delta.Y)):i.Cast_Int64(u.Delta.Y*p.Delta.X)===i.Cast_Int64(u.Delta.X*p.Delta.Y)):l===4?(v=o[0],M=o[1],L=o[2],G=o[3],G?Lt.op_Equality(Lt.Int128Mul(v.Y-M.Y,M.X-L.X),Lt.Int128Mul(v.X-M.X,M.Y-L.Y)):i.Cast_Int64((v.Y-M.Y)*(M.X-L.X))-i.Cast_Int64((v.X-M.X)*(M.Y-L.Y))===0):(v=o[0],M=o[1],L=o[2],z=o[3],G=o[4],G?Lt.op_Equality(Lt.Int128Mul(v.Y-M.Y,L.X-z.X),Lt.Int128Mul(v.X-M.X,L.Y-z.Y)):i.Cast_Int64((v.Y-M.Y)*(L.X-z.X))-i.Cast_Int64((v.X-M.X)*(L.Y-z.Y))===0)},i.ClipperBase.SlopesEqual3=function(o,l,u){return u?Lt.op_Equality(Lt.Int128Mul(o.Delta.Y,l.Delta.X),Lt.Int128Mul(o.Delta.X,l.Delta.Y)):i.Cast_Int64(o.Delta.Y*l.Delta.X)===i.Cast_Int64(o.Delta.X*l.Delta.Y)},i.ClipperBase.SlopesEqual4=function(o,l,u,p){return p?Lt.op_Equality(Lt.Int128Mul(o.Y-l.Y,l.X-u.X),Lt.Int128Mul(o.X-l.X,l.Y-u.Y)):i.Cast_Int64((o.Y-l.Y)*(l.X-u.X))-i.Cast_Int64((o.X-l.X)*(l.Y-u.Y))===0},i.ClipperBase.SlopesEqual5=function(o,l,u,p,v){return v?Lt.op_Equality(Lt.Int128Mul(o.Y-l.Y,u.X-p.X),Lt.Int128Mul(o.X-l.X,u.Y-p.Y)):i.Cast_Int64((o.Y-l.Y)*(u.X-p.X))-i.Cast_Int64((o.X-l.X)*(u.Y-p.Y))===0},i.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var o=0,l=this.m_edges.length;o<l;++o){for(var u=0,p=this.m_edges[o].length;u<p;++u)this.m_edges[o][u]=null;i.Clear(this.m_edges[o])}i.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},i.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var o=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=o}this.m_CurrentLM=null},i.ClipperBase.prototype.RangeTest=function(o,l){l.Value?(o.X>i.ClipperBase.hiRange||o.Y>i.ClipperBase.hiRange||-o.X>i.ClipperBase.hiRange||-o.Y>i.ClipperBase.hiRange)&&i.Error("Coordinate outside allowed range in RangeTest()."):(o.X>i.ClipperBase.loRange||o.Y>i.ClipperBase.loRange||-o.X>i.ClipperBase.loRange||-o.Y>i.ClipperBase.loRange)&&(l.Value=!0,this.RangeTest(o,l))},i.ClipperBase.prototype.InitEdge=function(o,l,u,p){o.Next=l,o.Prev=u,o.Curr.X=p.X,o.Curr.Y=p.Y,i.use_xyz&&(o.Curr.Z=p.Z),o.OutIdx=-1},i.ClipperBase.prototype.InitEdge2=function(o,l){o.Curr.Y>=o.Next.Curr.Y?(o.Bot.X=o.Curr.X,o.Bot.Y=o.Curr.Y,i.use_xyz&&(o.Bot.Z=o.Curr.Z),o.Top.X=o.Next.Curr.X,o.Top.Y=o.Next.Curr.Y,i.use_xyz&&(o.Top.Z=o.Next.Curr.Z)):(o.Top.X=o.Curr.X,o.Top.Y=o.Curr.Y,i.use_xyz&&(o.Top.Z=o.Curr.Z),o.Bot.X=o.Next.Curr.X,o.Bot.Y=o.Next.Curr.Y,i.use_xyz&&(o.Bot.Z=o.Next.Curr.Z)),this.SetDx(o),o.PolyTyp=l},i.ClipperBase.prototype.FindNextLocMin=function(o){for(var l;;){for(;i.IntPoint.op_Inequality(o.Bot,o.Prev.Bot)||i.IntPoint.op_Equality(o.Curr,o.Top);)o=o.Next;if(o.Dx!==i.ClipperBase.horizontal&&o.Prev.Dx!==i.ClipperBase.horizontal)break;for(;o.Prev.Dx===i.ClipperBase.horizontal;)o=o.Prev;for(l=o;o.Dx===i.ClipperBase.horizontal;)o=o.Next;if(o.Top.Y!==o.Prev.Bot.Y){l.Prev.Bot.X<o.Bot.X&&(o=l);break}}return o},i.ClipperBase.prototype.ProcessBound=function(o,l){var u,p=o,v;if(p.OutIdx===i.ClipperBase.Skip){if(o=p,l){for(;o.Top.Y===o.Next.Bot.Y;)o=o.Next;for(;o!==p&&o.Dx===i.ClipperBase.horizontal;)o=o.Prev}else{for(;o.Top.Y===o.Prev.Bot.Y;)o=o.Prev;for(;o!==p&&o.Dx===i.ClipperBase.horizontal;)o=o.Next}if(o===p)l?p=o.Next:p=o.Prev;else{l?o=p.Next:o=p.Prev;var M=new i.LocalMinima;M.Next=null,M.Y=o.Bot.Y,M.LeftBound=null,M.RightBound=o,o.WindDelta=0,p=this.ProcessBound(o,l),this.InsertLocalMinima(M)}return p}if(o.Dx===i.ClipperBase.horizontal&&(l?u=o.Prev:u=o.Next,u.Dx===i.ClipperBase.horizontal?u.Bot.X!==o.Bot.X&&u.Top.X!==o.Bot.X&&this.ReverseHorizontal(o):u.Bot.X!==o.Bot.X&&this.ReverseHorizontal(o)),u=o,l){for(;p.Top.Y===p.Next.Bot.Y&&p.Next.OutIdx!==i.ClipperBase.Skip;)p=p.Next;if(p.Dx===i.ClipperBase.horizontal&&p.Next.OutIdx!==i.ClipperBase.Skip){for(v=p;v.Prev.Dx===i.ClipperBase.horizontal;)v=v.Prev;v.Prev.Top.X>p.Next.Top.X&&(p=v.Prev)}for(;o!==p;)o.NextInLML=o.Next,o.Dx===i.ClipperBase.horizontal&&o!==u&&o.Bot.X!==o.Prev.Top.X&&this.ReverseHorizontal(o),o=o.Next;o.Dx===i.ClipperBase.horizontal&&o!==u&&o.Bot.X!==o.Prev.Top.X&&this.ReverseHorizontal(o),p=p.Next}else{for(;p.Top.Y===p.Prev.Bot.Y&&p.Prev.OutIdx!==i.ClipperBase.Skip;)p=p.Prev;if(p.Dx===i.ClipperBase.horizontal&&p.Prev.OutIdx!==i.ClipperBase.Skip){for(v=p;v.Next.Dx===i.ClipperBase.horizontal;)v=v.Next;(v.Next.Top.X===p.Prev.Top.X||v.Next.Top.X>p.Prev.Top.X)&&(p=v.Next)}for(;o!==p;)o.NextInLML=o.Prev,o.Dx===i.ClipperBase.horizontal&&o!==u&&o.Bot.X!==o.Next.Top.X&&this.ReverseHorizontal(o),o=o.Prev;o.Dx===i.ClipperBase.horizontal&&o!==u&&o.Bot.X!==o.Next.Top.X&&this.ReverseHorizontal(o),p=p.Prev}return p},i.ClipperBase.prototype.AddPath=function(o,l,u){i.use_lines?!u&&l===i.PolyType.ptClip&&i.Error("AddPath: Open paths must be subject."):u||i.Error("AddPath: Open paths have been disabled.");var p=o.length-1;if(u)for(;p>0&&i.IntPoint.op_Equality(o[p],o[0]);)--p;for(;p>0&&i.IntPoint.op_Equality(o[p],o[p-1]);)--p;if(u&&p<2||!u&&p<1)return!1;for(var v=new Array,M=0;M<=p;M++)v.push(new i.TEdge);var L=!0;v[1].Curr.X=o[1].X,v[1].Curr.Y=o[1].Y,i.use_xyz&&(v[1].Curr.Z=o[1].Z);var z={Value:this.m_UseFullRange};this.RangeTest(o[0],z),this.m_UseFullRange=z.Value,z.Value=this.m_UseFullRange,this.RangeTest(o[p],z),this.m_UseFullRange=z.Value,this.InitEdge(v[0],v[1],v[p],o[0]),this.InitEdge(v[p],v[0],v[p-1],o[p]);for(var M=p-1;M>=1;--M)z.Value=this.m_UseFullRange,this.RangeTest(o[M],z),this.m_UseFullRange=z.Value,this.InitEdge(v[M],v[M+1],v[M-1],o[M]);for(var G=v[0],q=G,ht=G;;){if(q.Curr===q.Next.Curr&&(u||q.Next!==G)){if(q===q.Next)break;q===G&&(G=q.Next),q=this.RemoveEdge(q),ht=q;continue}if(q.Prev===q.Next)break;if(u&&i.ClipperBase.SlopesEqual4(q.Prev.Curr,q.Curr,q.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(q.Prev.Curr,q.Curr,q.Next.Curr))){q===G&&(G=q.Next),q=this.RemoveEdge(q),q=q.Prev,ht=q;continue}if(q=q.Next,q===ht||!u&&q.Next===G)break}if(!u&&q===q.Next||u&&q.Prev===q.Next)return!1;u||(this.m_HasOpenPaths=!0,G.Prev.OutIdx=i.ClipperBase.Skip),q=G;do this.InitEdge2(q,l),q=q.Next,L&&q.Curr.Y!==G.Curr.Y&&(L=!1);while(q!==G);if(L){if(u)return!1;q.Prev.OutIdx=i.ClipperBase.Skip;var ct=new i.LocalMinima;for(ct.Next=null,ct.Y=q.Bot.Y,ct.LeftBound=null,ct.RightBound=q,ct.RightBound.Side=i.EdgeSide.esRight,ct.RightBound.WindDelta=0;q.Bot.X!==q.Prev.Top.X&&this.ReverseHorizontal(q),q.Next.OutIdx!==i.ClipperBase.Skip;)q.NextInLML=q.Next,q=q.Next;return this.InsertLocalMinima(ct),this.m_edges.push(v),!0}this.m_edges.push(v);var _t,Xt=null;for(i.IntPoint.op_Equality(q.Prev.Bot,q.Prev.Top)&&(q=q.Next);q=this.FindNextLocMin(q),q!==Xt;){Xt===null&&(Xt=q);var ct=new i.LocalMinima;ct.Next=null,ct.Y=q.Bot.Y,q.Dx<q.Prev.Dx?(ct.LeftBound=q.Prev,ct.RightBound=q,_t=!1):(ct.LeftBound=q,ct.RightBound=q.Prev,_t=!0),ct.LeftBound.Side=i.EdgeSide.esLeft,ct.RightBound.Side=i.EdgeSide.esRight,u?ct.LeftBound.Next===ct.RightBound?ct.LeftBound.WindDelta=-1:ct.LeftBound.WindDelta=1:ct.LeftBound.WindDelta=0,ct.RightBound.WindDelta=-ct.LeftBound.WindDelta,q=this.ProcessBound(ct.LeftBound,_t),q.OutIdx===i.ClipperBase.Skip&&(q=this.ProcessBound(q,_t));var le=this.ProcessBound(ct.RightBound,!_t);le.OutIdx===i.ClipperBase.Skip&&(le=this.ProcessBound(le,!_t)),ct.LeftBound.OutIdx===i.ClipperBase.Skip?ct.LeftBound=null:ct.RightBound.OutIdx===i.ClipperBase.Skip&&(ct.RightBound=null),this.InsertLocalMinima(ct),_t||(q=le)}return!0},i.ClipperBase.prototype.AddPaths=function(o,l,u){for(var p=!1,v=0,M=o.length;v<M;++v)this.AddPath(o[v],l,u)&&(p=!0);return p},i.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(o,l,u){return i.IntPoint.op_Equality(o,u)||i.IntPoint.op_Equality(o,l)||i.IntPoint.op_Equality(u,l)?!1:o.X!==u.X?l.X>o.X==l.X<u.X:l.Y>o.Y==l.Y<u.Y},i.ClipperBase.prototype.RemoveEdge=function(o){o.Prev.Next=o.Next,o.Next.Prev=o.Prev;var l=o.Next;return o.Prev=null,l},i.ClipperBase.prototype.SetDx=function(o){o.Delta.X=o.Top.X-o.Bot.X,o.Delta.Y=o.Top.Y-o.Bot.Y,o.Delta.Y===0?o.Dx=i.ClipperBase.horizontal:o.Dx=o.Delta.X/o.Delta.Y},i.ClipperBase.prototype.InsertLocalMinima=function(o){if(this.m_MinimaList===null)this.m_MinimaList=o;else if(o.Y>=this.m_MinimaList.Y)o.Next=this.m_MinimaList,this.m_MinimaList=o;else{for(var l=this.m_MinimaList;l.Next!==null&&o.Y<l.Next.Y;)l=l.Next;o.Next=l.Next,l.Next=o}},i.ClipperBase.prototype.PopLocalMinima=function(o,l){return l.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===o?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},i.ClipperBase.prototype.ReverseHorizontal=function(o){var l=o.Top.X;o.Top.X=o.Bot.X,o.Bot.X=l,i.use_xyz&&(l=o.Top.Z,o.Top.Z=o.Bot.Z,o.Bot.Z=l)},i.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var o=this.m_MinimaList;o!==null;){this.InsertScanbeam(o.Y);var l=o.LeftBound;l!==null&&(l.Curr.X=l.Bot.X,l.Curr.Y=l.Bot.Y,i.use_xyz&&(l.Curr.Z=l.Bot.Z),l.OutIdx=i.ClipperBase.Unassigned),l=o.RightBound,l!==null&&(l.Curr.X=l.Bot.X,l.Curr.Y=l.Bot.Y,i.use_xyz&&(l.Curr.Z=l.Bot.Z),l.OutIdx=i.ClipperBase.Unassigned),o=o.Next}this.m_ActiveEdges=null}},i.ClipperBase.prototype.InsertScanbeam=function(o){if(this.m_Scanbeam===null)this.m_Scanbeam=new i.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=o;else if(o>this.m_Scanbeam.Y){var l=new i.Scanbeam;l.Y=o,l.Next=this.m_Scanbeam,this.m_Scanbeam=l}else{for(var u=this.m_Scanbeam;u.Next!==null&&o<=u.Next.Y;)u=u.Next;if(o===u.Y)return;var p=new i.Scanbeam;p.Y=o,p.Next=u.Next,u.Next=p}},i.ClipperBase.prototype.PopScanbeam=function(o){return this.m_Scanbeam===null?(o.v=0,!1):(o.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},i.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},i.ClipperBase.prototype.CreateOutRec=function(){var o=new i.OutRec;return o.Idx=i.ClipperBase.Unassigned,o.IsHole=!1,o.IsOpen=!1,o.FirstLeft=null,o.Pts=null,o.BottomPt=null,o.PolyNode=null,this.m_PolyOuts.push(o),o.Idx=this.m_PolyOuts.length-1,o},i.ClipperBase.prototype.DisposeOutRec=function(o){var l=this.m_PolyOuts[o];l.Pts=null,l=null,this.m_PolyOuts[o]=null},i.ClipperBase.prototype.UpdateEdgeIntoAEL=function(o){o.NextInLML===null&&i.Error("UpdateEdgeIntoAEL: invalid call");var l=o.PrevInAEL,u=o.NextInAEL;return o.NextInLML.OutIdx=o.OutIdx,l!==null?l.NextInAEL=o.NextInLML:this.m_ActiveEdges=o.NextInLML,u!==null&&(u.PrevInAEL=o.NextInLML),o.NextInLML.Side=o.Side,o.NextInLML.WindDelta=o.WindDelta,o.NextInLML.WindCnt=o.WindCnt,o.NextInLML.WindCnt2=o.WindCnt2,o=o.NextInLML,o.Curr.X=o.Bot.X,o.Curr.Y=o.Bot.Y,o.PrevInAEL=l,o.NextInAEL=u,i.ClipperBase.IsHorizontal(o)||this.InsertScanbeam(o.Top.Y),o},i.ClipperBase.prototype.SwapPositionsInAEL=function(o,l){if(!(o.NextInAEL===o.PrevInAEL||l.NextInAEL===l.PrevInAEL)){if(o.NextInAEL===l){var u=l.NextInAEL;u!==null&&(u.PrevInAEL=o);var p=o.PrevInAEL;p!==null&&(p.NextInAEL=l),l.PrevInAEL=p,l.NextInAEL=o,o.PrevInAEL=l,o.NextInAEL=u}else if(l.NextInAEL===o){var v=o.NextInAEL;v!==null&&(v.PrevInAEL=l);var M=l.PrevInAEL;M!==null&&(M.NextInAEL=o),o.PrevInAEL=M,o.NextInAEL=l,l.PrevInAEL=o,l.NextInAEL=v}else{var L=o.NextInAEL,z=o.PrevInAEL;o.NextInAEL=l.NextInAEL,o.NextInAEL!==null&&(o.NextInAEL.PrevInAEL=o),o.PrevInAEL=l.PrevInAEL,o.PrevInAEL!==null&&(o.PrevInAEL.NextInAEL=o),l.NextInAEL=L,l.NextInAEL!==null&&(l.NextInAEL.PrevInAEL=l),l.PrevInAEL=z,l.PrevInAEL!==null&&(l.PrevInAEL.NextInAEL=l)}o.PrevInAEL===null?this.m_ActiveEdges=o:l.PrevInAEL===null&&(this.m_ActiveEdges=l)}},i.ClipperBase.prototype.DeleteFromAEL=function(o){var l=o.PrevInAEL,u=o.NextInAEL;l===null&&u===null&&o!==this.m_ActiveEdges||(l!==null?l.NextInAEL=u:this.m_ActiveEdges=u,u!==null&&(u.PrevInAEL=l),o.NextInAEL=null,o.PrevInAEL=null)},i.Clipper=function(o){typeof o>"u"&&(o=0),this.m_PolyOuts=null,this.m_ClipType=i.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=i.PolyFillType.pftEvenOdd,this.m_SubjFillType=i.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,i.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=i.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&o)!==0,this.StrictlySimple=(2&o)!==0,this.PreserveCollinear=(4&o)!==0,i.use_xyz&&(this.ZFillFunction=null)},i.Clipper.ioReverseSolution=1,i.Clipper.ioStrictlySimple=2,i.Clipper.ioPreserveCollinear=4,i.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),i.ClipperBase.prototype.Clear.call(this))},i.Clipper.prototype.InsertMaxima=function(o){var l=new i.Maxima;if(l.X=o,this.m_Maxima===null)this.m_Maxima=l,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(o<this.m_Maxima.X)l.Next=this.m_Maxima,l.Prev=null,this.m_Maxima=l;else{for(var u=this.m_Maxima;u.Next!==null&&o>=u.Next.X;)u=u.Next;if(o===u.X)return;l.Next=u.Next,l.Prev=u,u.Next!==null&&(u.Next.Prev=l),u.Next=l}},i.Clipper.prototype.Execute=function(){var o=arguments,l=o.length,u=o[1]instanceof i.PolyTree;if(l===4&&!u){var p=o[0],v=o[1],M=o[2],L=o[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&i.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,i.Clear(v),this.m_SubjFillType=M,this.m_ClipFillType=L,this.m_ClipType=p,this.m_UsingPolyTree=!1;try{var z=this.ExecuteInternal();z&&this.BuildResult(v)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return z}else if(l===4&&u){var p=o[0],G=o[1],M=o[2],L=o[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=M,this.m_ClipFillType=L,this.m_ClipType=p,this.m_UsingPolyTree=!0;try{var z=this.ExecuteInternal();z&&this.BuildResult2(G)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return z}else if(l===2&&!u){var p=o[0],v=o[1];return this.Execute(p,v,i.PolyFillType.pftEvenOdd,i.PolyFillType.pftEvenOdd)}else if(l===2&&u){var p=o[0],G=o[1];return this.Execute(p,G,i.PolyFillType.pftEvenOdd,i.PolyFillType.pftEvenOdd)}},i.Clipper.prototype.FixHoleLinkage=function(o){if(!(o.FirstLeft===null||o.IsHole!==o.FirstLeft.IsHole&&o.FirstLeft.Pts!==null)){for(var l=o.FirstLeft;l!==null&&(l.IsHole===o.IsHole||l.Pts===null);)l=l.FirstLeft;o.FirstLeft=l}},i.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var o={},l={};if(!this.PopScanbeam(o))return!1;for(this.InsertLocalMinimaIntoAEL(o.v);this.PopScanbeam(l)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(l.v))return!1;this.ProcessEdgesAtTopOfScanbeam(l.v),o.v=l.v,this.InsertLocalMinimaIntoAEL(o.v)}var u,p,v;for(p=0,v=this.m_PolyOuts.length;p<v;p++)u=this.m_PolyOuts[p],!(u.Pts===null||u.IsOpen)&&(u.IsHole^this.ReverseSolution)==this.Area$1(u)>0&&this.ReversePolyPtLinks(u.Pts);for(this.JoinCommonEdges(),p=0,v=this.m_PolyOuts.length;p<v;p++)u=this.m_PolyOuts[p],u.Pts!==null&&(u.IsOpen?this.FixupOutPolyline(u):this.FixupOutPolygon(u));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},i.Clipper.prototype.DisposeAllPolyPts=function(){for(var o=0,l=this.m_PolyOuts.length;o<l;++o)this.DisposeOutRec(o);i.Clear(this.m_PolyOuts)},i.Clipper.prototype.AddJoin=function(o,l,u){var p=new i.Join;p.OutPt1=o,p.OutPt2=l,p.OffPt.X=u.X,p.OffPt.Y=u.Y,i.use_xyz&&(p.OffPt.Z=u.Z),this.m_Joins.push(p)},i.Clipper.prototype.AddGhostJoin=function(o,l){var u=new i.Join;u.OutPt1=o,u.OffPt.X=l.X,u.OffPt.Y=l.Y,i.use_xyz&&(u.OffPt.Z=l.Z),this.m_GhostJoins.push(u)},i.Clipper.prototype.SetZ=function(o,l,u){if(this.ZFillFunction!==null){if(o.Z!==0||this.ZFillFunction===null)return;i.IntPoint.op_Equality(o,l.Bot)?o.Z=l.Bot.Z:i.IntPoint.op_Equality(o,l.Top)?o.Z=l.Top.Z:i.IntPoint.op_Equality(o,u.Bot)?o.Z=u.Bot.Z:i.IntPoint.op_Equality(o,u.Top)?o.Z=u.Top.Z:this.ZFillFunction(l.Bot,l.Top,u.Bot,u.Top,o)}},i.Clipper.prototype.InsertLocalMinimaIntoAEL=function(o){for(var l={},u,p;this.PopLocalMinima(o,l);){u=l.v.LeftBound,p=l.v.RightBound;var v=null;if(u===null?(this.InsertEdgeIntoAEL(p,null),this.SetWindingCount(p),this.IsContributing(p)&&(v=this.AddOutPt(p,p.Bot))):p===null?(this.InsertEdgeIntoAEL(u,null),this.SetWindingCount(u),this.IsContributing(u)&&(v=this.AddOutPt(u,u.Bot)),this.InsertScanbeam(u.Top.Y)):(this.InsertEdgeIntoAEL(u,null),this.InsertEdgeIntoAEL(p,u),this.SetWindingCount(u),p.WindCnt=u.WindCnt,p.WindCnt2=u.WindCnt2,this.IsContributing(u)&&(v=this.AddLocalMinPoly(u,p,u.Bot)),this.InsertScanbeam(u.Top.Y)),p!==null&&(i.ClipperBase.IsHorizontal(p)?(p.NextInLML!==null&&this.InsertScanbeam(p.NextInLML.Top.Y),this.AddEdgeToSEL(p)):this.InsertScanbeam(p.Top.Y)),!(u===null||p===null)){if(v!==null&&i.ClipperBase.IsHorizontal(p)&&this.m_GhostJoins.length>0&&p.WindDelta!==0)for(var M=0,L=this.m_GhostJoins.length;M<L;M++){var z=this.m_GhostJoins[M];this.HorzSegmentsOverlap(z.OutPt1.Pt.X,z.OffPt.X,p.Bot.X,p.Top.X)&&this.AddJoin(z.OutPt1,v,z.OffPt)}if(u.OutIdx>=0&&u.PrevInAEL!==null&&u.PrevInAEL.Curr.X===u.Bot.X&&u.PrevInAEL.OutIdx>=0&&i.ClipperBase.SlopesEqual5(u.PrevInAEL.Curr,u.PrevInAEL.Top,u.Curr,u.Top,this.m_UseFullRange)&&u.WindDelta!==0&&u.PrevInAEL.WindDelta!==0){var G=this.AddOutPt(u.PrevInAEL,u.Bot);this.AddJoin(v,G,u.Top)}if(u.NextInAEL!==p){if(p.OutIdx>=0&&p.PrevInAEL.OutIdx>=0&&i.ClipperBase.SlopesEqual5(p.PrevInAEL.Curr,p.PrevInAEL.Top,p.Curr,p.Top,this.m_UseFullRange)&&p.WindDelta!==0&&p.PrevInAEL.WindDelta!==0){var G=this.AddOutPt(p.PrevInAEL,p.Bot);this.AddJoin(v,G,p.Top)}var q=u.NextInAEL;if(q!==null)for(;q!==p;)this.IntersectEdges(p,q,u.Curr),q=q.NextInAEL}}}},i.Clipper.prototype.InsertEdgeIntoAEL=function(o,l){if(this.m_ActiveEdges===null)o.PrevInAEL=null,o.NextInAEL=null,this.m_ActiveEdges=o;else if(l===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,o))o.PrevInAEL=null,o.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=o,this.m_ActiveEdges=o;else{for(l===null&&(l=this.m_ActiveEdges);l.NextInAEL!==null&&!this.E2InsertsBeforeE1(l.NextInAEL,o);)l=l.NextInAEL;o.NextInAEL=l.NextInAEL,l.NextInAEL!==null&&(l.NextInAEL.PrevInAEL=o),o.PrevInAEL=l,l.NextInAEL=o}},i.Clipper.prototype.E2InsertsBeforeE1=function(o,l){return l.Curr.X===o.Curr.X?l.Top.Y>o.Top.Y?l.Top.X<i.Clipper.TopX(o,l.Top.Y):o.Top.X>i.Clipper.TopX(l,o.Top.Y):l.Curr.X<o.Curr.X},i.Clipper.prototype.IsEvenOddFillType=function(o){return o.PolyTyp===i.PolyType.ptSubject?this.m_SubjFillType===i.PolyFillType.pftEvenOdd:this.m_ClipFillType===i.PolyFillType.pftEvenOdd},i.Clipper.prototype.IsEvenOddAltFillType=function(o){return o.PolyTyp===i.PolyType.ptSubject?this.m_ClipFillType===i.PolyFillType.pftEvenOdd:this.m_SubjFillType===i.PolyFillType.pftEvenOdd},i.Clipper.prototype.IsContributing=function(o){var l,u;switch(o.PolyTyp===i.PolyType.ptSubject?(l=this.m_SubjFillType,u=this.m_ClipFillType):(l=this.m_ClipFillType,u=this.m_SubjFillType),l){case i.PolyFillType.pftEvenOdd:if(o.WindDelta===0&&o.WindCnt!==1)return!1;break;case i.PolyFillType.pftNonZero:if(Math.abs(o.WindCnt)!==1)return!1;break;case i.PolyFillType.pftPositive:if(o.WindCnt!==1)return!1;break;default:if(o.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case i.ClipType.ctIntersection:switch(u){case i.PolyFillType.pftEvenOdd:case i.PolyFillType.pftNonZero:return o.WindCnt2!==0;case i.PolyFillType.pftPositive:return o.WindCnt2>0;default:return o.WindCnt2<0}case i.ClipType.ctUnion:switch(u){case i.PolyFillType.pftEvenOdd:case i.PolyFillType.pftNonZero:return o.WindCnt2===0;case i.PolyFillType.pftPositive:return o.WindCnt2<=0;default:return o.WindCnt2>=0}case i.ClipType.ctDifference:if(o.PolyTyp===i.PolyType.ptSubject)switch(u){case i.PolyFillType.pftEvenOdd:case i.PolyFillType.pftNonZero:return o.WindCnt2===0;case i.PolyFillType.pftPositive:return o.WindCnt2<=0;default:return o.WindCnt2>=0}else switch(u){case i.PolyFillType.pftEvenOdd:case i.PolyFillType.pftNonZero:return o.WindCnt2!==0;case i.PolyFillType.pftPositive:return o.WindCnt2>0;default:return o.WindCnt2<0}case i.ClipType.ctXor:if(o.WindDelta===0)switch(u){case i.PolyFillType.pftEvenOdd:case i.PolyFillType.pftNonZero:return o.WindCnt2===0;case i.PolyFillType.pftPositive:return o.WindCnt2<=0;default:return o.WindCnt2>=0}else return!0}return!0},i.Clipper.prototype.SetWindingCount=function(o){for(var l=o.PrevInAEL;l!==null&&(l.PolyTyp!==o.PolyTyp||l.WindDelta===0);)l=l.PrevInAEL;if(l===null){var u=o.PolyTyp===i.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;o.WindDelta===0?o.WindCnt=u===i.PolyFillType.pftNegative?-1:1:o.WindCnt=o.WindDelta,o.WindCnt2=0,l=this.m_ActiveEdges}else if(o.WindDelta===0&&this.m_ClipType!==i.ClipType.ctUnion)o.WindCnt=1,o.WindCnt2=l.WindCnt2,l=l.NextInAEL;else if(this.IsEvenOddFillType(o)){if(o.WindDelta===0){for(var p=!0,v=l.PrevInAEL;v!==null;)v.PolyTyp===l.PolyTyp&&v.WindDelta!==0&&(p=!p),v=v.PrevInAEL;o.WindCnt=p?0:1}else o.WindCnt=o.WindDelta;o.WindCnt2=l.WindCnt2,l=l.NextInAEL}else l.WindCnt*l.WindDelta<0?Math.abs(l.WindCnt)>1?l.WindDelta*o.WindDelta<0?o.WindCnt=l.WindCnt:o.WindCnt=l.WindCnt+o.WindDelta:o.WindCnt=o.WindDelta===0?1:o.WindDelta:o.WindDelta===0?o.WindCnt=l.WindCnt<0?l.WindCnt-1:l.WindCnt+1:l.WindDelta*o.WindDelta<0?o.WindCnt=l.WindCnt:o.WindCnt=l.WindCnt+o.WindDelta,o.WindCnt2=l.WindCnt2,l=l.NextInAEL;if(this.IsEvenOddAltFillType(o))for(;l!==o;)l.WindDelta!==0&&(o.WindCnt2=o.WindCnt2===0?1:0),l=l.NextInAEL;else for(;l!==o;)o.WindCnt2+=l.WindDelta,l=l.NextInAEL},i.Clipper.prototype.AddEdgeToSEL=function(o){this.m_SortedEdges===null?(this.m_SortedEdges=o,o.PrevInSEL=null,o.NextInSEL=null):(o.NextInSEL=this.m_SortedEdges,o.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=o,this.m_SortedEdges=o)},i.Clipper.prototype.PopEdgeFromSEL=function(o){if(o.v=this.m_SortedEdges,o.v===null)return!1;var l=o.v;return this.m_SortedEdges=o.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),l.NextInSEL=null,l.PrevInSEL=null,!0},i.Clipper.prototype.CopyAELToSEL=function(){var o=this.m_ActiveEdges;for(this.m_SortedEdges=o;o!==null;)o.PrevInSEL=o.PrevInAEL,o.NextInSEL=o.NextInAEL,o=o.NextInAEL},i.Clipper.prototype.SwapPositionsInSEL=function(o,l){if(!(o.NextInSEL===null&&o.PrevInSEL===null)&&!(l.NextInSEL===null&&l.PrevInSEL===null)){if(o.NextInSEL===l){var u=l.NextInSEL;u!==null&&(u.PrevInSEL=o);var p=o.PrevInSEL;p!==null&&(p.NextInSEL=l),l.PrevInSEL=p,l.NextInSEL=o,o.PrevInSEL=l,o.NextInSEL=u}else if(l.NextInSEL===o){var u=o.NextInSEL;u!==null&&(u.PrevInSEL=l);var p=l.PrevInSEL;p!==null&&(p.NextInSEL=o),o.PrevInSEL=p,o.NextInSEL=l,l.PrevInSEL=o,l.NextInSEL=u}else{var u=o.NextInSEL,p=o.PrevInSEL;o.NextInSEL=l.NextInSEL,o.NextInSEL!==null&&(o.NextInSEL.PrevInSEL=o),o.PrevInSEL=l.PrevInSEL,o.PrevInSEL!==null&&(o.PrevInSEL.NextInSEL=o),l.NextInSEL=u,l.NextInSEL!==null&&(l.NextInSEL.PrevInSEL=l),l.PrevInSEL=p,l.PrevInSEL!==null&&(l.PrevInSEL.NextInSEL=l)}o.PrevInSEL===null?this.m_SortedEdges=o:l.PrevInSEL===null&&(this.m_SortedEdges=l)}},i.Clipper.prototype.AddLocalMaxPoly=function(o,l,u){this.AddOutPt(o,u),l.WindDelta===0&&this.AddOutPt(l,u),o.OutIdx===l.OutIdx?(o.OutIdx=-1,l.OutIdx=-1):o.OutIdx<l.OutIdx?this.AppendPolygon(o,l):this.AppendPolygon(l,o)},i.Clipper.prototype.AddLocalMinPoly=function(o,l,u){var p,v,M;if(i.ClipperBase.IsHorizontal(l)||o.Dx>l.Dx?(p=this.AddOutPt(o,u),l.OutIdx=o.OutIdx,o.Side=i.EdgeSide.esLeft,l.Side=i.EdgeSide.esRight,v=o,v.PrevInAEL===l?M=l.PrevInAEL:M=v.PrevInAEL):(p=this.AddOutPt(l,u),o.OutIdx=l.OutIdx,o.Side=i.EdgeSide.esRight,l.Side=i.EdgeSide.esLeft,v=l,v.PrevInAEL===o?M=o.PrevInAEL:M=v.PrevInAEL),M!==null&&M.OutIdx>=0&&M.Top.Y<u.Y&&v.Top.Y<u.Y){var L=i.Clipper.TopX(M,u.Y),z=i.Clipper.TopX(v,u.Y);if(L===z&&v.WindDelta!==0&&M.WindDelta!==0&&i.ClipperBase.SlopesEqual5(new i.IntPoint2(L,u.Y),M.Top,new i.IntPoint2(z,u.Y),v.Top,this.m_UseFullRange)){var G=this.AddOutPt(M,u);this.AddJoin(p,G,v.Top)}}return p},i.Clipper.prototype.AddOutPt=function(o,l){if(o.OutIdx<0){var u=this.CreateOutRec();u.IsOpen=o.WindDelta===0;var p=new i.OutPt;return u.Pts=p,p.Idx=u.Idx,p.Pt.X=l.X,p.Pt.Y=l.Y,i.use_xyz&&(p.Pt.Z=l.Z),p.Next=p,p.Prev=p,u.IsOpen||this.SetHoleState(o,u),o.OutIdx=u.Idx,p}else{var u=this.m_PolyOuts[o.OutIdx],v=u.Pts,M=o.Side===i.EdgeSide.esLeft;if(M&&i.IntPoint.op_Equality(l,v.Pt))return v;if(!M&&i.IntPoint.op_Equality(l,v.Prev.Pt))return v.Prev;var p=new i.OutPt;return p.Idx=u.Idx,p.Pt.X=l.X,p.Pt.Y=l.Y,i.use_xyz&&(p.Pt.Z=l.Z),p.Next=v,p.Prev=v.Prev,p.Prev.Next=p,v.Prev=p,M&&(u.Pts=p),p}},i.Clipper.prototype.GetLastOutPt=function(o){var l=this.m_PolyOuts[o.OutIdx];return o.Side===i.EdgeSide.esLeft?l.Pts:l.Pts.Prev},i.Clipper.prototype.SwapPoints=function(o,l){var u=new i.IntPoint1(o.Value);o.Value.X=l.Value.X,o.Value.Y=l.Value.Y,i.use_xyz&&(o.Value.Z=l.Value.Z),l.Value.X=u.X,l.Value.Y=u.Y,i.use_xyz&&(l.Value.Z=u.Z)},i.Clipper.prototype.HorzSegmentsOverlap=function(o,l,u,p){var v;return o>l&&(v=o,o=l,l=v),u>p&&(v=u,u=p,p=v),o<p&&u<l},i.Clipper.prototype.SetHoleState=function(o,l){for(var u=o.PrevInAEL,p=null;u!==null;)u.OutIdx>=0&&u.WindDelta!==0&&(p===null?p=u:p.OutIdx===u.OutIdx&&(p=null)),u=u.PrevInAEL;p===null?(l.FirstLeft=null,l.IsHole=!1):(l.FirstLeft=this.m_PolyOuts[p.OutIdx],l.IsHole=!l.FirstLeft.IsHole)},i.Clipper.prototype.GetDx=function(o,l){return o.Y===l.Y?i.ClipperBase.horizontal:(l.X-o.X)/(l.Y-o.Y)},i.Clipper.prototype.FirstIsBottomPt=function(o,l){for(var u=o.Prev;i.IntPoint.op_Equality(u.Pt,o.Pt)&&u!==o;)u=u.Prev;var p=Math.abs(this.GetDx(o.Pt,u.Pt));for(u=o.Next;i.IntPoint.op_Equality(u.Pt,o.Pt)&&u!==o;)u=u.Next;var v=Math.abs(this.GetDx(o.Pt,u.Pt));for(u=l.Prev;i.IntPoint.op_Equality(u.Pt,l.Pt)&&u!==l;)u=u.Prev;var M=Math.abs(this.GetDx(l.Pt,u.Pt));for(u=l.Next;i.IntPoint.op_Equality(u.Pt,l.Pt)&&u!==l;)u=u.Next;var L=Math.abs(this.GetDx(l.Pt,u.Pt));return Math.max(p,v)===Math.max(M,L)&&Math.min(p,v)===Math.min(M,L)?this.Area(o)>0:p>=M&&p>=L||v>=M&&v>=L},i.Clipper.prototype.GetBottomPt=function(o){for(var l=null,u=o.Next;u!==o;)u.Pt.Y>o.Pt.Y?(o=u,l=null):u.Pt.Y===o.Pt.Y&&u.Pt.X<=o.Pt.X&&(u.Pt.X<o.Pt.X?(l=null,o=u):u.Next!==o&&u.Prev!==o&&(l=u)),u=u.Next;if(l!==null)for(;l!==u;)for(this.FirstIsBottomPt(u,l)||(o=l),l=l.Next;i.IntPoint.op_Inequality(l.Pt,o.Pt);)l=l.Next;return o},i.Clipper.prototype.GetLowermostRec=function(o,l){o.BottomPt===null&&(o.BottomPt=this.GetBottomPt(o.Pts)),l.BottomPt===null&&(l.BottomPt=this.GetBottomPt(l.Pts));var u=o.BottomPt,p=l.BottomPt;return u.Pt.Y>p.Pt.Y?o:u.Pt.Y<p.Pt.Y?l:u.Pt.X<p.Pt.X?o:u.Pt.X>p.Pt.X||u.Next===u?l:p.Next===p||this.FirstIsBottomPt(u,p)?o:l},i.Clipper.prototype.OutRec1RightOfOutRec2=function(o,l){do if(o=o.FirstLeft,o===l)return!0;while(o!==null);return!1},i.Clipper.prototype.GetOutRec=function(o){for(var l=this.m_PolyOuts[o];l!==this.m_PolyOuts[l.Idx];)l=this.m_PolyOuts[l.Idx];return l},i.Clipper.prototype.AppendPolygon=function(o,l){var u=this.m_PolyOuts[o.OutIdx],p=this.m_PolyOuts[l.OutIdx],v;this.OutRec1RightOfOutRec2(u,p)?v=p:this.OutRec1RightOfOutRec2(p,u)?v=u:v=this.GetLowermostRec(u,p);var M=u.Pts,L=M.Prev,z=p.Pts,G=z.Prev;o.Side===i.EdgeSide.esLeft?l.Side===i.EdgeSide.esLeft?(this.ReversePolyPtLinks(z),z.Next=M,M.Prev=z,L.Next=G,G.Prev=L,u.Pts=G):(G.Next=M,M.Prev=G,z.Prev=L,L.Next=z,u.Pts=z):l.Side===i.EdgeSide.esRight?(this.ReversePolyPtLinks(z),L.Next=G,G.Prev=L,z.Next=M,M.Prev=z):(L.Next=z,z.Prev=L,M.Prev=G,G.Next=M),u.BottomPt=null,v===p&&(p.FirstLeft!==u&&(u.FirstLeft=p.FirstLeft),u.IsHole=p.IsHole),p.Pts=null,p.BottomPt=null,p.FirstLeft=u;var q=o.OutIdx,ht=l.OutIdx;o.OutIdx=-1,l.OutIdx=-1;for(var ct=this.m_ActiveEdges;ct!==null;){if(ct.OutIdx===ht){ct.OutIdx=q,ct.Side=o.Side;break}ct=ct.NextInAEL}p.Idx=u.Idx},i.Clipper.prototype.ReversePolyPtLinks=function(o){if(o!==null){var l,u;l=o;do u=l.Next,l.Next=l.Prev,l.Prev=u,l=u;while(l!==o)}},i.Clipper.SwapSides=function(o,l){var u=o.Side;o.Side=l.Side,l.Side=u},i.Clipper.SwapPolyIndexes=function(o,l){var u=o.OutIdx;o.OutIdx=l.OutIdx,l.OutIdx=u},i.Clipper.prototype.IntersectEdges=function(o,l,u){var p=o.OutIdx>=0,v=l.OutIdx>=0;if(i.use_xyz&&this.SetZ(u,o,l),i.use_lines&&(o.WindDelta===0||l.WindDelta===0)){if(o.WindDelta===0&&l.WindDelta===0)return;o.PolyTyp===l.PolyTyp&&o.WindDelta!==l.WindDelta&&this.m_ClipType===i.ClipType.ctUnion?o.WindDelta===0?v&&(this.AddOutPt(o,u),p&&(o.OutIdx=-1)):p&&(this.AddOutPt(l,u),v&&(l.OutIdx=-1)):o.PolyTyp!==l.PolyTyp&&(o.WindDelta===0&&Math.abs(l.WindCnt)===1&&(this.m_ClipType!==i.ClipType.ctUnion||l.WindCnt2===0)?(this.AddOutPt(o,u),p&&(o.OutIdx=-1)):l.WindDelta===0&&Math.abs(o.WindCnt)===1&&(this.m_ClipType!==i.ClipType.ctUnion||o.WindCnt2===0)&&(this.AddOutPt(l,u),v&&(l.OutIdx=-1)));return}if(o.PolyTyp===l.PolyTyp)if(this.IsEvenOddFillType(o)){var M=o.WindCnt;o.WindCnt=l.WindCnt,l.WindCnt=M}else o.WindCnt+l.WindDelta===0?o.WindCnt=-o.WindCnt:o.WindCnt+=l.WindDelta,l.WindCnt-o.WindDelta===0?l.WindCnt=-l.WindCnt:l.WindCnt-=o.WindDelta;else this.IsEvenOddFillType(l)?o.WindCnt2=o.WindCnt2===0?1:0:o.WindCnt2+=l.WindDelta,this.IsEvenOddFillType(o)?l.WindCnt2=l.WindCnt2===0?1:0:l.WindCnt2-=o.WindDelta;var L,z,G,q;o.PolyTyp===i.PolyType.ptSubject?(L=this.m_SubjFillType,G=this.m_ClipFillType):(L=this.m_ClipFillType,G=this.m_SubjFillType),l.PolyTyp===i.PolyType.ptSubject?(z=this.m_SubjFillType,q=this.m_ClipFillType):(z=this.m_ClipFillType,q=this.m_SubjFillType);var ht,ct;switch(L){case i.PolyFillType.pftPositive:ht=o.WindCnt;break;case i.PolyFillType.pftNegative:ht=-o.WindCnt;break;default:ht=Math.abs(o.WindCnt);break}switch(z){case i.PolyFillType.pftPositive:ct=l.WindCnt;break;case i.PolyFillType.pftNegative:ct=-l.WindCnt;break;default:ct=Math.abs(l.WindCnt);break}if(p&&v)ht!==0&&ht!==1||ct!==0&&ct!==1||o.PolyTyp!==l.PolyTyp&&this.m_ClipType!==i.ClipType.ctXor?this.AddLocalMaxPoly(o,l,u):(this.AddOutPt(o,u),this.AddOutPt(l,u),i.Clipper.SwapSides(o,l),i.Clipper.SwapPolyIndexes(o,l));else if(p)(ct===0||ct===1)&&(this.AddOutPt(o,u),i.Clipper.SwapSides(o,l),i.Clipper.SwapPolyIndexes(o,l));else if(v)(ht===0||ht===1)&&(this.AddOutPt(l,u),i.Clipper.SwapSides(o,l),i.Clipper.SwapPolyIndexes(o,l));else if((ht===0||ht===1)&&(ct===0||ct===1)){var _t,Xt;switch(G){case i.PolyFillType.pftPositive:_t=o.WindCnt2;break;case i.PolyFillType.pftNegative:_t=-o.WindCnt2;break;default:_t=Math.abs(o.WindCnt2);break}switch(q){case i.PolyFillType.pftPositive:Xt=l.WindCnt2;break;case i.PolyFillType.pftNegative:Xt=-l.WindCnt2;break;default:Xt=Math.abs(l.WindCnt2);break}if(o.PolyTyp!==l.PolyTyp)this.AddLocalMinPoly(o,l,u);else if(ht===1&&ct===1)switch(this.m_ClipType){case i.ClipType.ctIntersection:_t>0&&Xt>0&&this.AddLocalMinPoly(o,l,u);break;case i.ClipType.ctUnion:_t<=0&&Xt<=0&&this.AddLocalMinPoly(o,l,u);break;case i.ClipType.ctDifference:(o.PolyTyp===i.PolyType.ptClip&&_t>0&&Xt>0||o.PolyTyp===i.PolyType.ptSubject&&_t<=0&&Xt<=0)&&this.AddLocalMinPoly(o,l,u);break;case i.ClipType.ctXor:this.AddLocalMinPoly(o,l,u);break}else i.Clipper.SwapSides(o,l)}},i.Clipper.prototype.DeleteFromSEL=function(o){var l=o.PrevInSEL,u=o.NextInSEL;l===null&&u===null&&o!==this.m_SortedEdges||(l!==null?l.NextInSEL=u:this.m_SortedEdges=u,u!==null&&(u.PrevInSEL=l),o.NextInSEL=null,o.PrevInSEL=null)},i.Clipper.prototype.ProcessHorizontals=function(){for(var o={};this.PopEdgeFromSEL(o);)this.ProcessHorizontal(o.v)},i.Clipper.prototype.GetHorzDirection=function(o,l){o.Bot.X<o.Top.X?(l.Left=o.Bot.X,l.Right=o.Top.X,l.Dir=i.Direction.dLeftToRight):(l.Left=o.Top.X,l.Right=o.Bot.X,l.Dir=i.Direction.dRightToLeft)},i.Clipper.prototype.ProcessHorizontal=function(o){var l={Dir:null,Left:null,Right:null};this.GetHorzDirection(o,l);for(var u=l.Dir,p=l.Left,v=l.Right,M=o.WindDelta===0,L=o,z=null;L.NextInLML!==null&&i.ClipperBase.IsHorizontal(L.NextInLML);)L=L.NextInLML;L.NextInLML===null&&(z=this.GetMaximaPair(L));var G=this.m_Maxima;if(G!==null)if(u===i.Direction.dLeftToRight){for(;G!==null&&G.X<=o.Bot.X;)G=G.Next;G!==null&&G.X>=L.Top.X&&(G=null)}else{for(;G.Next!==null&&G.Next.X<o.Bot.X;)G=G.Next;G.X<=L.Top.X&&(G=null)}for(var q=null;;){for(var ht=o===L,ct=this.GetNextInAEL(o,u);ct!==null;){if(G!==null)if(u===i.Direction.dLeftToRight)for(;G!==null&&G.X<ct.Curr.X;)o.OutIdx>=0&&!M&&this.AddOutPt(o,new i.IntPoint2(G.X,o.Bot.Y)),G=G.Next;else for(;G!==null&&G.X>ct.Curr.X;)o.OutIdx>=0&&!M&&this.AddOutPt(o,new i.IntPoint2(G.X,o.Bot.Y)),G=G.Prev;if(u===i.Direction.dLeftToRight&&ct.Curr.X>v||u===i.Direction.dRightToLeft&&ct.Curr.X<p||ct.Curr.X===o.Top.X&&o.NextInLML!==null&&ct.Dx<o.NextInLML.Dx)break;if(o.OutIdx>=0&&!M){i.use_xyz&&(u===i.Direction.dLeftToRight?this.SetZ(ct.Curr,o,ct):this.SetZ(ct.Curr,ct,o)),q=this.AddOutPt(o,ct.Curr);for(var _t=this.m_SortedEdges;_t!==null;){if(_t.OutIdx>=0&&this.HorzSegmentsOverlap(o.Bot.X,o.Top.X,_t.Bot.X,_t.Top.X)){var Xt=this.GetLastOutPt(_t);this.AddJoin(Xt,q,_t.Top)}_t=_t.NextInSEL}this.AddGhostJoin(q,o.Bot)}if(ct===z&&ht){o.OutIdx>=0&&this.AddLocalMaxPoly(o,z,o.Top),this.DeleteFromAEL(o),this.DeleteFromAEL(z);return}if(u===i.Direction.dLeftToRight){var le=new i.IntPoint2(ct.Curr.X,o.Curr.Y);this.IntersectEdges(o,ct,le)}else{var le=new i.IntPoint2(ct.Curr.X,o.Curr.Y);this.IntersectEdges(ct,o,le)}var fe=this.GetNextInAEL(ct,u);this.SwapPositionsInAEL(o,ct),ct=fe}if(o.NextInLML===null||!i.ClipperBase.IsHorizontal(o.NextInLML))break;o=this.UpdateEdgeIntoAEL(o),o.OutIdx>=0&&this.AddOutPt(o,o.Bot),l={Dir:u,Left:p,Right:v},this.GetHorzDirection(o,l),u=l.Dir,p=l.Left,v=l.Right}if(o.OutIdx>=0&&q===null){q=this.GetLastOutPt(o);for(var _t=this.m_SortedEdges;_t!==null;){if(_t.OutIdx>=0&&this.HorzSegmentsOverlap(o.Bot.X,o.Top.X,_t.Bot.X,_t.Top.X)){var Xt=this.GetLastOutPt(_t);this.AddJoin(Xt,q,_t.Top)}_t=_t.NextInSEL}this.AddGhostJoin(q,o.Top)}if(o.NextInLML!==null)if(o.OutIdx>=0){if(q=this.AddOutPt(o,o.Top),o=this.UpdateEdgeIntoAEL(o),o.WindDelta===0)return;var Ie=o.PrevInAEL,fe=o.NextInAEL;if(Ie!==null&&Ie.Curr.X===o.Bot.X&&Ie.Curr.Y===o.Bot.Y&&Ie.WindDelta===0&&Ie.OutIdx>=0&&Ie.Curr.Y>Ie.Top.Y&&i.ClipperBase.SlopesEqual3(o,Ie,this.m_UseFullRange)){var Xt=this.AddOutPt(Ie,o.Bot);this.AddJoin(q,Xt,o.Top)}else if(fe!==null&&fe.Curr.X===o.Bot.X&&fe.Curr.Y===o.Bot.Y&&fe.WindDelta!==0&&fe.OutIdx>=0&&fe.Curr.Y>fe.Top.Y&&i.ClipperBase.SlopesEqual3(o,fe,this.m_UseFullRange)){var Xt=this.AddOutPt(fe,o.Bot);this.AddJoin(q,Xt,o.Top)}}else o=this.UpdateEdgeIntoAEL(o);else o.OutIdx>=0&&this.AddOutPt(o,o.Top),this.DeleteFromAEL(o)},i.Clipper.prototype.GetNextInAEL=function(o,l){return l===i.Direction.dLeftToRight?o.NextInAEL:o.PrevInAEL},i.Clipper.prototype.IsMinima=function(o){return o!==null&&o.Prev.NextInLML!==o&&o.Next.NextInLML!==o},i.Clipper.prototype.IsMaxima=function(o,l){return o!==null&&o.Top.Y===l&&o.NextInLML===null},i.Clipper.prototype.IsIntermediate=function(o,l){return o.Top.Y===l&&o.NextInLML!==null},i.Clipper.prototype.GetMaximaPair=function(o){return i.IntPoint.op_Equality(o.Next.Top,o.Top)&&o.Next.NextInLML===null?o.Next:i.IntPoint.op_Equality(o.Prev.Top,o.Top)&&o.Prev.NextInLML===null?o.Prev:null},i.Clipper.prototype.GetMaximaPairEx=function(o){var l=this.GetMaximaPair(o);return l===null||l.OutIdx===i.ClipperBase.Skip||l.NextInAEL===l.PrevInAEL&&!i.ClipperBase.IsHorizontal(l)?null:l},i.Clipper.prototype.ProcessIntersections=function(o){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(o),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,i.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},i.Clipper.prototype.BuildIntersectList=function(o){if(this.m_ActiveEdges!==null){var l=this.m_ActiveEdges;for(this.m_SortedEdges=l;l!==null;)l.PrevInSEL=l.PrevInAEL,l.NextInSEL=l.NextInAEL,l.Curr.X=i.Clipper.TopX(l,o),l=l.NextInAEL;for(var u=!0;u&&this.m_SortedEdges!==null;){for(u=!1,l=this.m_SortedEdges;l.NextInSEL!==null;){var p=l.NextInSEL,v=new i.IntPoint0;if(l.Curr.X>p.Curr.X){this.IntersectPoint(l,p,v),v.Y<o&&(v=new i.IntPoint2(i.Clipper.TopX(l,o),o));var M=new i.IntersectNode;M.Edge1=l,M.Edge2=p,M.Pt.X=v.X,M.Pt.Y=v.Y,i.use_xyz&&(M.Pt.Z=v.Z),this.m_IntersectList.push(M),this.SwapPositionsInSEL(l,p),u=!0}else l=p}if(l.PrevInSEL!==null)l.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},i.Clipper.prototype.EdgesAdjacent=function(o){return o.Edge1.NextInSEL===o.Edge2||o.Edge1.PrevInSEL===o.Edge2},i.Clipper.IntersectNodeSort=function(o,l){return l.Pt.Y-o.Pt.Y},i.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var o=this.m_IntersectList.length,l=0;l<o;l++){if(!this.EdgesAdjacent(this.m_IntersectList[l])){for(var u=l+1;u<o&&!this.EdgesAdjacent(this.m_IntersectList[u]);)u++;if(u===o)return!1;var p=this.m_IntersectList[l];this.m_IntersectList[l]=this.m_IntersectList[u],this.m_IntersectList[u]=p}this.SwapPositionsInSEL(this.m_IntersectList[l].Edge1,this.m_IntersectList[l].Edge2)}return!0},i.Clipper.prototype.ProcessIntersectList=function(){for(var o=0,l=this.m_IntersectList.length;o<l;o++){var u=this.m_IntersectList[o];this.IntersectEdges(u.Edge1,u.Edge2,u.Pt),this.SwapPositionsInAEL(u.Edge1,u.Edge2)}this.m_IntersectList.length=0};var zt=function(o){return o<0?Math.ceil(o-.5):Math.round(o)},we=function(o){return o<0?Math.ceil(o-.5):Math.floor(o+.5)},Oe=function(o){return o<0?-Math.round(Math.abs(o)):Math.round(o)},Pe=function(o){return o<0?(o-=.5,o<-2147483648?Math.ceil(o):o|0):(o+=.5,o>2147483647?Math.floor(o):o|0)};s.msie?i.Clipper.Round=zt:s.chromium?i.Clipper.Round=Oe:s.safari?i.Clipper.Round=Pe:i.Clipper.Round=we,i.Clipper.TopX=function(o,l){return l===o.Top.Y?o.Top.X:o.Bot.X+i.Clipper.Round(o.Dx*(l-o.Bot.Y))},i.Clipper.prototype.IntersectPoint=function(o,l,u){u.X=0,u.Y=0;var p,v;if(o.Dx===l.Dx){u.Y=o.Curr.Y,u.X=i.Clipper.TopX(o,u.Y);return}if(o.Delta.X===0)u.X=o.Bot.X,i.ClipperBase.IsHorizontal(l)?u.Y=l.Bot.Y:(v=l.Bot.Y-l.Bot.X/l.Dx,u.Y=i.Clipper.Round(u.X/l.Dx+v));else if(l.Delta.X===0)u.X=l.Bot.X,i.ClipperBase.IsHorizontal(o)?u.Y=o.Bot.Y:(p=o.Bot.Y-o.Bot.X/o.Dx,u.Y=i.Clipper.Round(u.X/o.Dx+p));else{p=o.Bot.X-o.Bot.Y*o.Dx,v=l.Bot.X-l.Bot.Y*l.Dx;var M=(v-p)/(o.Dx-l.Dx);u.Y=i.Clipper.Round(M),Math.abs(o.Dx)<Math.abs(l.Dx)?u.X=i.Clipper.Round(o.Dx*M+p):u.X=i.Clipper.Round(l.Dx*M+v)}if(u.Y<o.Top.Y||u.Y<l.Top.Y){if(o.Top.Y>l.Top.Y)return u.Y=o.Top.Y,u.X=i.Clipper.TopX(l,o.Top.Y),u.X<o.Top.X;u.Y=l.Top.Y,Math.abs(o.Dx)<Math.abs(l.Dx)?u.X=i.Clipper.TopX(o,u.Y):u.X=i.Clipper.TopX(l,u.Y)}u.Y>o.Curr.Y&&(u.Y=o.Curr.Y,Math.abs(o.Dx)>Math.abs(l.Dx)?u.X=i.Clipper.TopX(l,u.Y):u.X=i.Clipper.TopX(o,u.Y))},i.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(o){for(var l=this.m_ActiveEdges;l!==null;){var u=this.IsMaxima(l,o);if(u){var p=this.GetMaximaPairEx(l);u=p===null||!i.ClipperBase.IsHorizontal(p)}if(u){this.StrictlySimple&&this.InsertMaxima(l.Top.X);var v=l.PrevInAEL;this.DoMaxima(l),v===null?l=this.m_ActiveEdges:l=v.NextInAEL}else{if(this.IsIntermediate(l,o)&&i.ClipperBase.IsHorizontal(l.NextInLML)?(l=this.UpdateEdgeIntoAEL(l),l.OutIdx>=0&&this.AddOutPt(l,l.Bot),this.AddEdgeToSEL(l)):(l.Curr.X=i.Clipper.TopX(l,o),l.Curr.Y=o),i.use_xyz&&(l.Top.Y===o?l.Curr.Z=l.Top.Z:l.Bot.Y===o?l.Curr.Z=l.Bot.Z:l.Curr.Z=0),this.StrictlySimple){var v=l.PrevInAEL;if(l.OutIdx>=0&&l.WindDelta!==0&&v!==null&&v.OutIdx>=0&&v.Curr.X===l.Curr.X&&v.WindDelta!==0){var M=new i.IntPoint1(l.Curr);i.use_xyz&&this.SetZ(M,v,l);var L=this.AddOutPt(v,M),z=this.AddOutPt(l,M);this.AddJoin(L,z,M)}}l=l.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,l=this.m_ActiveEdges;l!==null;){if(this.IsIntermediate(l,o)){var L=null;l.OutIdx>=0&&(L=this.AddOutPt(l,l.Top)),l=this.UpdateEdgeIntoAEL(l);var v=l.PrevInAEL,G=l.NextInAEL;if(v!==null&&v.Curr.X===l.Bot.X&&v.Curr.Y===l.Bot.Y&&L!==null&&v.OutIdx>=0&&v.Curr.Y===v.Top.Y&&i.ClipperBase.SlopesEqual5(l.Curr,l.Top,v.Curr,v.Top,this.m_UseFullRange)&&l.WindDelta!==0&&v.WindDelta!==0){var z=this.AddOutPt(ePrev2,l.Bot);this.AddJoin(L,z,l.Top)}else if(G!==null&&G.Curr.X===l.Bot.X&&G.Curr.Y===l.Bot.Y&&L!==null&&G.OutIdx>=0&&G.Curr.Y===G.Top.Y&&i.ClipperBase.SlopesEqual5(l.Curr,l.Top,G.Curr,G.Top,this.m_UseFullRange)&&l.WindDelta!==0&&G.WindDelta!==0){var z=this.AddOutPt(G,l.Bot);this.AddJoin(L,z,l.Top)}}l=l.NextInAEL}},i.Clipper.prototype.DoMaxima=function(o){var l=this.GetMaximaPairEx(o);if(l===null){o.OutIdx>=0&&this.AddOutPt(o,o.Top),this.DeleteFromAEL(o);return}for(var u=o.NextInAEL;u!==null&&u!==l;)this.IntersectEdges(o,u,o.Top),this.SwapPositionsInAEL(o,u),u=o.NextInAEL;o.OutIdx===-1&&l.OutIdx===-1?(this.DeleteFromAEL(o),this.DeleteFromAEL(l)):o.OutIdx>=0&&l.OutIdx>=0?(o.OutIdx>=0&&this.AddLocalMaxPoly(o,l,o.Top),this.DeleteFromAEL(o),this.DeleteFromAEL(l)):i.use_lines&&o.WindDelta===0?(o.OutIdx>=0&&(this.AddOutPt(o,o.Top),o.OutIdx=i.ClipperBase.Unassigned),this.DeleteFromAEL(o),l.OutIdx>=0&&(this.AddOutPt(l,o.Top),l.OutIdx=i.ClipperBase.Unassigned),this.DeleteFromAEL(l)):i.Error("DoMaxima error")},i.Clipper.ReversePaths=function(o){for(var l=0,u=o.length;l<u;l++)o[l].reverse()},i.Clipper.Orientation=function(o){return i.Clipper.Area(o)>=0},i.Clipper.prototype.PointCount=function(o){if(o===null)return 0;var l=0,u=o;do l++,u=u.Next;while(u!==o);return l},i.Clipper.prototype.BuildResult=function(o){i.Clear(o);for(var l=0,u=this.m_PolyOuts.length;l<u;l++){var p=this.m_PolyOuts[l];if(p.Pts!==null){var v=p.Pts.Prev,M=this.PointCount(v);if(!(M<2)){for(var L=new Array(M),z=0;z<M;z++)L[z]=v.Pt,v=v.Prev;o.push(L)}}}},i.Clipper.prototype.BuildResult2=function(o){o.Clear();for(var l=0,u=this.m_PolyOuts.length;l<u;l++){var p=this.m_PolyOuts[l],v=this.PointCount(p.Pts);if(!(p.IsOpen&&v<2||!p.IsOpen&&v<3)){this.FixHoleLinkage(p);var M=new i.PolyNode;o.m_AllPolys.push(M),p.PolyNode=M,M.m_polygon.length=v;for(var L=p.Pts.Prev,z=0;z<v;z++)M.m_polygon[z]=L.Pt,L=L.Prev}}for(var l=0,u=this.m_PolyOuts.length;l<u;l++){var p=this.m_PolyOuts[l];p.PolyNode!==null&&(p.IsOpen?(p.PolyNode.IsOpen=!0,o.AddChild(p.PolyNode)):p.FirstLeft!==null&&p.FirstLeft.PolyNode!==null?p.FirstLeft.PolyNode.AddChild(p.PolyNode):o.AddChild(p.PolyNode))}},i.Clipper.prototype.FixupOutPolyline=function(o){for(var l=o.Pts,u=l.Prev;l!==u;)if(l=l.Next,i.IntPoint.op_Equality(l.Pt,l.Prev.Pt)){l===u&&(u=l.Prev);var p=l.Prev;p.Next=l.Next,l.Next.Prev=p,l=p}l===l.Prev&&(o.Pts=null)},i.Clipper.prototype.FixupOutPolygon=function(o){var l=null;o.BottomPt=null;for(var u=o.Pts,p=this.PreserveCollinear||this.StrictlySimple;;){if(u.Prev===u||u.Prev===u.Next){o.Pts=null;return}if(i.IntPoint.op_Equality(u.Pt,u.Next.Pt)||i.IntPoint.op_Equality(u.Pt,u.Prev.Pt)||i.ClipperBase.SlopesEqual4(u.Prev.Pt,u.Pt,u.Next.Pt,this.m_UseFullRange)&&(!p||!this.Pt2IsBetweenPt1AndPt3(u.Prev.Pt,u.Pt,u.Next.Pt)))l=null,u.Prev.Next=u.Next,u.Next.Prev=u.Prev,u=u.Prev;else{if(u===l)break;l===null&&(l=u),u=u.Next}}o.Pts=u},i.Clipper.prototype.DupOutPt=function(o,l){var u=new i.OutPt;return u.Pt.X=o.Pt.X,u.Pt.Y=o.Pt.Y,i.use_xyz&&(u.Pt.Z=o.Pt.Z),u.Idx=o.Idx,l?(u.Next=o.Next,u.Prev=o,o.Next.Prev=u,o.Next=u):(u.Prev=o.Prev,u.Next=o,o.Prev.Next=u,o.Prev=u),u},i.Clipper.prototype.GetOverlap=function(o,l,u,p,v){return o<l?u<p?(v.Left=Math.max(o,u),v.Right=Math.min(l,p)):(v.Left=Math.max(o,p),v.Right=Math.min(l,u)):u<p?(v.Left=Math.max(l,u),v.Right=Math.min(o,p)):(v.Left=Math.max(l,p),v.Right=Math.min(o,u)),v.Left<v.Right},i.Clipper.prototype.JoinHorz=function(o,l,u,p,v,M){var L=o.Pt.X>l.Pt.X?i.Direction.dRightToLeft:i.Direction.dLeftToRight,z=u.Pt.X>p.Pt.X?i.Direction.dRightToLeft:i.Direction.dLeftToRight;if(L===z)return!1;if(L===i.Direction.dLeftToRight){for(;o.Next.Pt.X<=v.X&&o.Next.Pt.X>=o.Pt.X&&o.Next.Pt.Y===v.Y;)o=o.Next;M&&o.Pt.X!==v.X&&(o=o.Next),l=this.DupOutPt(o,!M),i.IntPoint.op_Inequality(l.Pt,v)&&(o=l,o.Pt.X=v.X,o.Pt.Y=v.Y,i.use_xyz&&(o.Pt.Z=v.Z),l=this.DupOutPt(o,!M))}else{for(;o.Next.Pt.X>=v.X&&o.Next.Pt.X<=o.Pt.X&&o.Next.Pt.Y===v.Y;)o=o.Next;!M&&o.Pt.X!==v.X&&(o=o.Next),l=this.DupOutPt(o,M),i.IntPoint.op_Inequality(l.Pt,v)&&(o=l,o.Pt.X=v.X,o.Pt.Y=v.Y,i.use_xyz&&(o.Pt.Z=v.Z),l=this.DupOutPt(o,M))}if(z===i.Direction.dLeftToRight){for(;u.Next.Pt.X<=v.X&&u.Next.Pt.X>=u.Pt.X&&u.Next.Pt.Y===v.Y;)u=u.Next;M&&u.Pt.X!==v.X&&(u=u.Next),p=this.DupOutPt(u,!M),i.IntPoint.op_Inequality(p.Pt,v)&&(u=p,u.Pt.X=v.X,u.Pt.Y=v.Y,i.use_xyz&&(u.Pt.Z=v.Z),p=this.DupOutPt(u,!M))}else{for(;u.Next.Pt.X>=v.X&&u.Next.Pt.X<=u.Pt.X&&u.Next.Pt.Y===v.Y;)u=u.Next;!M&&u.Pt.X!==v.X&&(u=u.Next),p=this.DupOutPt(u,M),i.IntPoint.op_Inequality(p.Pt,v)&&(u=p,u.Pt.X=v.X,u.Pt.Y=v.Y,i.use_xyz&&(u.Pt.Z=v.Z),p=this.DupOutPt(u,M))}return L===i.Direction.dLeftToRight===M?(o.Prev=u,u.Next=o,l.Next=p,p.Prev=l):(o.Next=u,u.Prev=o,l.Prev=p,p.Next=l),!0},i.Clipper.prototype.JoinPoints=function(o,l,u){var p=o.OutPt1,v=new i.OutPt,M=o.OutPt2,L=new i.OutPt,z=o.OutPt1.Pt.Y===o.OffPt.Y;if(z&&i.IntPoint.op_Equality(o.OffPt,o.OutPt1.Pt)&&i.IntPoint.op_Equality(o.OffPt,o.OutPt2.Pt)){if(l!==u)return!1;for(v=o.OutPt1.Next;v!==p&&i.IntPoint.op_Equality(v.Pt,o.OffPt);)v=v.Next;var G=v.Pt.Y>o.OffPt.Y;for(L=o.OutPt2.Next;L!==M&&i.IntPoint.op_Equality(L.Pt,o.OffPt);)L=L.Next;var q=L.Pt.Y>o.OffPt.Y;return G===q?!1:G?(v=this.DupOutPt(p,!1),L=this.DupOutPt(M,!0),p.Prev=M,M.Next=p,v.Next=L,L.Prev=v,o.OutPt1=p,o.OutPt2=v,!0):(v=this.DupOutPt(p,!0),L=this.DupOutPt(M,!1),p.Next=M,M.Prev=p,v.Prev=L,L.Next=v,o.OutPt1=p,o.OutPt2=v,!0)}else if(z){for(v=p;p.Prev.Pt.Y===p.Pt.Y&&p.Prev!==v&&p.Prev!==M;)p=p.Prev;for(;v.Next.Pt.Y===v.Pt.Y&&v.Next!==p&&v.Next!==M;)v=v.Next;if(v.Next===p||v.Next===M)return!1;for(L=M;M.Prev.Pt.Y===M.Pt.Y&&M.Prev!==L&&M.Prev!==v;)M=M.Prev;for(;L.Next.Pt.Y===L.Pt.Y&&L.Next!==M&&L.Next!==p;)L=L.Next;if(L.Next===M||L.Next===p)return!1;var ht={Left:null,Right:null};if(!this.GetOverlap(p.Pt.X,v.Pt.X,M.Pt.X,L.Pt.X,ht))return!1;var ct=ht.Left,_t=ht.Right,Xt=new i.IntPoint0,le;return p.Pt.X>=ct&&p.Pt.X<=_t?(Xt.X=p.Pt.X,Xt.Y=p.Pt.Y,i.use_xyz&&(Xt.Z=p.Pt.Z),le=p.Pt.X>v.Pt.X):M.Pt.X>=ct&&M.Pt.X<=_t?(Xt.X=M.Pt.X,Xt.Y=M.Pt.Y,i.use_xyz&&(Xt.Z=M.Pt.Z),le=M.Pt.X>L.Pt.X):v.Pt.X>=ct&&v.Pt.X<=_t?(Xt.X=v.Pt.X,Xt.Y=v.Pt.Y,i.use_xyz&&(Xt.Z=v.Pt.Z),le=v.Pt.X>p.Pt.X):(Xt.X=L.Pt.X,Xt.Y=L.Pt.Y,i.use_xyz&&(Xt.Z=L.Pt.Z),le=L.Pt.X>M.Pt.X),o.OutPt1=p,o.OutPt2=M,this.JoinHorz(p,v,M,L,Xt,le)}else{for(v=p.Next;i.IntPoint.op_Equality(v.Pt,p.Pt)&&v!==p;)v=v.Next;var fe=v.Pt.Y>p.Pt.Y||!i.ClipperBase.SlopesEqual4(p.Pt,v.Pt,o.OffPt,this.m_UseFullRange);if(fe){for(v=p.Prev;i.IntPoint.op_Equality(v.Pt,p.Pt)&&v!==p;)v=v.Prev;if(v.Pt.Y>p.Pt.Y||!i.ClipperBase.SlopesEqual4(p.Pt,v.Pt,o.OffPt,this.m_UseFullRange))return!1}for(L=M.Next;i.IntPoint.op_Equality(L.Pt,M.Pt)&&L!==M;)L=L.Next;var Ie=L.Pt.Y>M.Pt.Y||!i.ClipperBase.SlopesEqual4(M.Pt,L.Pt,o.OffPt,this.m_UseFullRange);if(Ie){for(L=M.Prev;i.IntPoint.op_Equality(L.Pt,M.Pt)&&L!==M;)L=L.Prev;if(L.Pt.Y>M.Pt.Y||!i.ClipperBase.SlopesEqual4(M.Pt,L.Pt,o.OffPt,this.m_UseFullRange))return!1}return v===p||L===M||v===L||l===u&&fe===Ie?!1:fe?(v=this.DupOutPt(p,!1),L=this.DupOutPt(M,!0),p.Prev=M,M.Next=p,v.Next=L,L.Prev=v,o.OutPt1=p,o.OutPt2=v,!0):(v=this.DupOutPt(p,!0),L=this.DupOutPt(M,!1),p.Next=M,M.Prev=p,v.Prev=L,L.Next=v,o.OutPt1=p,o.OutPt2=v,!0)}},i.Clipper.GetBounds=function(o){for(var l=0,u=o.length;l<u&&o[l].length===0;)l++;if(l===u)return new i.IntRect(0,0,0,0);var p=new i.IntRect;for(p.left=o[l][0].X,p.right=p.left,p.top=o[l][0].Y,p.bottom=p.top;l<u;l++)for(var v=0,M=o[l].length;v<M;v++)o[l][v].X<p.left?p.left=o[l][v].X:o[l][v].X>p.right&&(p.right=o[l][v].X),o[l][v].Y<p.top?p.top=o[l][v].Y:o[l][v].Y>p.bottom&&(p.bottom=o[l][v].Y);return p},i.Clipper.prototype.GetBounds2=function(o){var l=o,u=new i.IntRect;for(u.left=o.Pt.X,u.right=o.Pt.X,u.top=o.Pt.Y,u.bottom=o.Pt.Y,o=o.Next;o!==l;)o.Pt.X<u.left&&(u.left=o.Pt.X),o.Pt.X>u.right&&(u.right=o.Pt.X),o.Pt.Y<u.top&&(u.top=o.Pt.Y),o.Pt.Y>u.bottom&&(u.bottom=o.Pt.Y),o=o.Next;return u},i.Clipper.PointInPolygon=function(o,l){var u=0,p=l.length;if(p<3)return 0;for(var v=l[0],M=1;M<=p;++M){var L=M===p?l[0]:l[M];if(L.Y===o.Y&&(L.X===o.X||v.Y===o.Y&&L.X>o.X==v.X<o.X))return-1;if(v.Y<o.Y!=L.Y<o.Y){if(v.X>=o.X)if(L.X>o.X)u=1-u;else{var z=(v.X-o.X)*(L.Y-o.Y)-(L.X-o.X)*(v.Y-o.Y);if(z===0)return-1;z>0==L.Y>v.Y&&(u=1-u)}else if(L.X>o.X){var z=(v.X-o.X)*(L.Y-o.Y)-(L.X-o.X)*(v.Y-o.Y);if(z===0)return-1;z>0==L.Y>v.Y&&(u=1-u)}}v=L}return u},i.Clipper.prototype.PointInPolygon=function(o,l){var u=0,p=l,v=o.X,M=o.Y,L=l.Pt.X,z=l.Pt.Y;do{l=l.Next;var G=l.Pt.X,q=l.Pt.Y;if(q===M&&(G===v||z===M&&G>v==L<v))return-1;if(z<M!=q<M){if(L>=v)if(G>v)u=1-u;else{var ht=(L-v)*(q-M)-(G-v)*(z-M);if(ht===0)return-1;ht>0==q>z&&(u=1-u)}else if(G>v){var ht=(L-v)*(q-M)-(G-v)*(z-M);if(ht===0)return-1;ht>0==q>z&&(u=1-u)}}L=G,z=q}while(p!==l);return u},i.Clipper.prototype.Poly2ContainsPoly1=function(o,l){var u=o;do{var p=this.PointInPolygon(u.Pt,l);if(p>=0)return p>0;u=u.Next}while(u!==o);return!0},i.Clipper.prototype.FixupFirstLefts1=function(o,l){for(var u,p,v=0,M=this.m_PolyOuts.length;v<M;v++)u=this.m_PolyOuts[v],p=i.Clipper.ParseFirstLeft(u.FirstLeft),u.Pts!==null&&p===o&&this.Poly2ContainsPoly1(u.Pts,l.Pts)&&(u.FirstLeft=l)},i.Clipper.prototype.FixupFirstLefts2=function(o,l){for(var u=l.FirstLeft,p,v,M=0,L=this.m_PolyOuts.length;M<L;M++)p=this.m_PolyOuts[M],!(p.Pts===null||p===l||p===o)&&(v=i.Clipper.ParseFirstLeft(p.FirstLeft),!(v!==u&&v!==o&&v!==l)&&(this.Poly2ContainsPoly1(p.Pts,o.Pts)?p.FirstLeft=o:this.Poly2ContainsPoly1(p.Pts,l.Pts)?p.FirstLeft=l:(p.FirstLeft===o||p.FirstLeft===l)&&(p.FirstLeft=u)))},i.Clipper.prototype.FixupFirstLefts3=function(o,l){for(var u,p,v=0,M=this.m_PolyOuts.length;v<M;v++)u=this.m_PolyOuts[v],p=i.Clipper.ParseFirstLeft(u.FirstLeft),u.Pts!==null&&p===o&&(u.FirstLeft=l)},i.Clipper.ParseFirstLeft=function(o){for(;o!==null&&o.Pts===null;)o=o.FirstLeft;return o},i.Clipper.prototype.JoinCommonEdges=function(){for(var o=0,l=this.m_Joins.length;o<l;o++){var u=this.m_Joins[o],p=this.GetOutRec(u.OutPt1.Idx),v=this.GetOutRec(u.OutPt2.Idx);if(!(p.Pts===null||v.Pts===null)&&!(p.IsOpen||v.IsOpen)){var M;p===v?M=p:this.OutRec1RightOfOutRec2(p,v)?M=v:this.OutRec1RightOfOutRec2(v,p)?M=p:M=this.GetLowermostRec(p,v),this.JoinPoints(u,p,v)&&(p===v?(p.Pts=u.OutPt1,p.BottomPt=null,v=this.CreateOutRec(),v.Pts=u.OutPt2,this.UpdateOutPtIdxs(v),this.Poly2ContainsPoly1(v.Pts,p.Pts)?(v.IsHole=!p.IsHole,v.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts2(v,p),(v.IsHole^this.ReverseSolution)==this.Area$1(v)>0&&this.ReversePolyPtLinks(v.Pts)):this.Poly2ContainsPoly1(p.Pts,v.Pts)?(v.IsHole=p.IsHole,p.IsHole=!v.IsHole,v.FirstLeft=p.FirstLeft,p.FirstLeft=v,this.m_UsingPolyTree&&this.FixupFirstLefts2(p,v),(p.IsHole^this.ReverseSolution)==this.Area$1(p)>0&&this.ReversePolyPtLinks(p.Pts)):(v.IsHole=p.IsHole,v.FirstLeft=p.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(p,v))):(v.Pts=null,v.BottomPt=null,v.Idx=p.Idx,p.IsHole=M.IsHole,M===v&&(p.FirstLeft=v.FirstLeft),v.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts3(v,p)))}}},i.Clipper.prototype.UpdateOutPtIdxs=function(o){var l=o.Pts;do l.Idx=o.Idx,l=l.Prev;while(l!==o.Pts)},i.Clipper.prototype.DoSimplePolygons=function(){for(var o=0;o<this.m_PolyOuts.length;){var l=this.m_PolyOuts[o++],u=l.Pts;if(!(u===null||l.IsOpen))do{for(var p=u.Next;p!==l.Pts;){if(i.IntPoint.op_Equality(u.Pt,p.Pt)&&p.Next!==u&&p.Prev!==u){var v=u.Prev,M=p.Prev;u.Prev=M,M.Next=u,p.Prev=v,v.Next=p,l.Pts=u;var L=this.CreateOutRec();L.Pts=p,this.UpdateOutPtIdxs(L),this.Poly2ContainsPoly1(L.Pts,l.Pts)?(L.IsHole=!l.IsHole,L.FirstLeft=l,this.m_UsingPolyTree&&this.FixupFirstLefts2(L,l)):this.Poly2ContainsPoly1(l.Pts,L.Pts)?(L.IsHole=l.IsHole,l.IsHole=!L.IsHole,L.FirstLeft=l.FirstLeft,l.FirstLeft=L,this.m_UsingPolyTree&&this.FixupFirstLefts2(l,L)):(L.IsHole=l.IsHole,L.FirstLeft=l.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(l,L)),p=u}p=p.Next}u=u.Next}while(u!==l.Pts)}},i.Clipper.Area=function(o){if(!Array.isArray(o))return 0;var l=o.length;if(l<3)return 0;for(var u=0,p=0,v=l-1;p<l;++p)u+=(o[v].X+o[p].X)*(o[v].Y-o[p].Y),v=p;return-u*.5},i.Clipper.prototype.Area=function(o){var l=o;if(o===null)return 0;var u=0;do u=u+(o.Prev.Pt.X+o.Pt.X)*(o.Prev.Pt.Y-o.Pt.Y),o=o.Next;while(o!==l);return u*.5},i.Clipper.prototype.Area$1=function(o){return this.Area(o.Pts)},i.Clipper.SimplifyPolygon=function(o,l){var u=new Array,p=new i.Clipper(0);return p.StrictlySimple=!0,p.AddPath(o,i.PolyType.ptSubject,!0),p.Execute(i.ClipType.ctUnion,u,l,l),u},i.Clipper.SimplifyPolygons=function(o,l){typeof l>"u"&&(l=i.PolyFillType.pftEvenOdd);var u=new Array,p=new i.Clipper(0);return p.StrictlySimple=!0,p.AddPaths(o,i.PolyType.ptSubject,!0),p.Execute(i.ClipType.ctUnion,u,l,l),u},i.Clipper.DistanceSqrd=function(o,l){var u=o.X-l.X,p=o.Y-l.Y;return u*u+p*p},i.Clipper.DistanceFromLineSqrd=function(o,l,u){var p=l.Y-u.Y,v=u.X-l.X,M=p*l.X+v*l.Y;return M=p*o.X+v*o.Y-M,M*M/(p*p+v*v)},i.Clipper.SlopesNearCollinear=function(o,l,u,p){return Math.abs(o.X-l.X)>Math.abs(o.Y-l.Y)?o.X>l.X==o.X<u.X?i.Clipper.DistanceFromLineSqrd(o,l,u)<p:l.X>o.X==l.X<u.X?i.Clipper.DistanceFromLineSqrd(l,o,u)<p:i.Clipper.DistanceFromLineSqrd(u,o,l)<p:o.Y>l.Y==o.Y<u.Y?i.Clipper.DistanceFromLineSqrd(o,l,u)<p:l.Y>o.Y==l.Y<u.Y?i.Clipper.DistanceFromLineSqrd(l,o,u)<p:i.Clipper.DistanceFromLineSqrd(u,o,l)<p},i.Clipper.PointsAreClose=function(o,l,u){var p=o.X-l.X,v=o.Y-l.Y;return p*p+v*v<=u},i.Clipper.ExcludeOp=function(o){var l=o.Prev;return l.Next=o.Next,o.Next.Prev=l,l.Idx=0,l},i.Clipper.CleanPolygon=function(o,l){typeof l>"u"&&(l=1.415);var u=o.length;if(u===0)return new Array;for(var p=new Array(u),v=0;v<u;++v)p[v]=new i.OutPt;for(var v=0;v<u;++v)p[v].Pt=o[v],p[v].Next=p[(v+1)%u],p[v].Next.Prev=p[v],p[v].Idx=0;for(var M=l*l,L=p[0];L.Idx===0&&L.Next!==L.Prev;)i.Clipper.PointsAreClose(L.Pt,L.Prev.Pt,M)?(L=i.Clipper.ExcludeOp(L),u--):i.Clipper.PointsAreClose(L.Prev.Pt,L.Next.Pt,M)?(i.Clipper.ExcludeOp(L.Next),L=i.Clipper.ExcludeOp(L),u-=2):i.Clipper.SlopesNearCollinear(L.Prev.Pt,L.Pt,L.Next.Pt,M)?(L=i.Clipper.ExcludeOp(L),u--):(L.Idx=1,L=L.Next);u<3&&(u=0);for(var z=new Array(u),v=0;v<u;++v)z[v]=new i.IntPoint1(L.Pt),L=L.Next;return p=null,z},i.Clipper.CleanPolygons=function(o,l){for(var u=new Array(o.length),p=0,v=o.length;p<v;p++)u[p]=i.Clipper.CleanPolygon(o[p],l);return u},i.Clipper.Minkowski=function(o,l,u,p){var v=p?1:0,M=o.length,L=l.length,z=new Array;if(u)for(var G=0;G<L;G++){for(var q=new Array(M),ht=0,ct=o.length,_t=o[ht];ht<ct;ht++,_t=o[ht])q[ht]=new i.IntPoint2(l[G].X+_t.X,l[G].Y+_t.Y);z.push(q)}else for(var G=0;G<L;G++){for(var q=new Array(M),ht=0,ct=o.length,_t=o[ht];ht<ct;ht++,_t=o[ht])q[ht]=new i.IntPoint2(l[G].X-_t.X,l[G].Y-_t.Y);z.push(q)}for(var Xt=new Array,G=0;G<L-1+v;G++)for(var ht=0;ht<M;ht++){var le=new Array;le.push(z[G%L][ht%M]),le.push(z[(G+1)%L][ht%M]),le.push(z[(G+1)%L][(ht+1)%M]),le.push(z[G%L][(ht+1)%M]),i.Clipper.Orientation(le)||le.reverse(),Xt.push(le)}return Xt},i.Clipper.MinkowskiSum=function(o,l,u){if(l[0]instanceof Array){for(var v=l,L=new i.Paths,M=new i.Clipper,z=0;z<v.length;++z){var G=i.Clipper.Minkowski(o,v[z],!0,u);if(M.AddPaths(G,i.PolyType.ptSubject,!0),u){var p=i.Clipper.TranslatePath(v[z],o[0]);M.AddPath(p,i.PolyType.ptClip,!0)}}return M.Execute(i.ClipType.ctUnion,L,i.PolyFillType.pftNonZero,i.PolyFillType.pftNonZero),L}else{var p=l,v=i.Clipper.Minkowski(o,p,!0,u),M=new i.Clipper;return M.AddPaths(v,i.PolyType.ptSubject,!0),M.Execute(i.ClipType.ctUnion,v,i.PolyFillType.pftNonZero,i.PolyFillType.pftNonZero),v}},i.Clipper.TranslatePath=function(o,l){for(var u=new i.Path,p=0;p<o.length;p++)u.push(new i.IntPoint2(o[p].X+l.X,o[p].Y+l.Y));return u},i.Clipper.MinkowskiDiff=function(o,l){var u=i.Clipper.Minkowski(o,l,!1,!0),p=new i.Clipper;return p.AddPaths(u,i.PolyType.ptSubject,!0),p.Execute(i.ClipType.ctUnion,u,i.PolyFillType.pftNonZero,i.PolyFillType.pftNonZero),u},i.Clipper.PolyTreeToPaths=function(o){var l=new Array;return i.Clipper.AddPolyNodeToPaths(o,i.Clipper.NodeType.ntAny,l),l},i.Clipper.AddPolyNodeToPaths=function(o,l,u){var p=!0;switch(l){case i.Clipper.NodeType.ntOpen:return;case i.Clipper.NodeType.ntClosed:p=!o.IsOpen;break;default:break}o.m_polygon.length>0&&p&&u.push(o.m_polygon);for(var v=0,M=o.Childs(),L=M.length,z=M[v];v<L;v++,z=M[v])i.Clipper.AddPolyNodeToPaths(z,l,u)},i.Clipper.OpenPathsFromPolyTree=function(o){for(var l=new i.Paths,u=0,p=o.ChildCount();u<p;u++)o.Childs()[u].IsOpen&&l.push(o.Childs()[u].m_polygon);return l},i.Clipper.ClosedPathsFromPolyTree=function(o){var l=new i.Paths;return i.Clipper.AddPolyNodeToPaths(o,i.Clipper.NodeType.ntClosed,l),l},de(i.Clipper,i.ClipperBase),i.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},i.ClipperOffset=function(o,l){typeof o>"u"&&(o=2),typeof l>"u"&&(l=i.ClipperOffset.def_arc_tolerance),this.m_destPolys=new i.Paths,this.m_srcPoly=new i.Path,this.m_destPoly=new i.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new i.IntPoint0,this.m_polyNodes=new i.PolyNode,this.MiterLimit=o,this.ArcTolerance=l,this.m_lowest.X=-1},i.ClipperOffset.two_pi=6.28318530717959,i.ClipperOffset.def_arc_tolerance=.25,i.ClipperOffset.prototype.Clear=function(){i.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},i.ClipperOffset.Round=i.Clipper.Round,i.ClipperOffset.prototype.AddPath=function(o,l,u){var p=o.length-1;if(!(p<0)){var v=new i.PolyNode;if(v.m_jointype=l,v.m_endtype=u,u===i.EndType.etClosedLine||u===i.EndType.etClosedPolygon)for(;p>0&&i.IntPoint.op_Equality(o[0],o[p]);)p--;v.m_polygon.push(o[0]);for(var M=0,L=0,z=1;z<=p;z++)i.IntPoint.op_Inequality(v.m_polygon[M],o[z])&&(M++,v.m_polygon.push(o[z]),(o[z].Y>v.m_polygon[L].Y||o[z].Y===v.m_polygon[L].Y&&o[z].X<v.m_polygon[L].X)&&(L=M));if(!(u===i.EndType.etClosedPolygon&&M<2)&&(this.m_polyNodes.AddChild(v),u===i.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new i.IntPoint2(this.m_polyNodes.ChildCount()-1,L);else{var G=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(v.m_polygon[L].Y>G.Y||v.m_polygon[L].Y===G.Y&&v.m_polygon[L].X<G.X)&&(this.m_lowest=new i.IntPoint2(this.m_polyNodes.ChildCount()-1,L))}}},i.ClipperOffset.prototype.AddPaths=function(o,l,u){for(var p=0,v=o.length;p<v;p++)this.AddPath(o[p],l,u)},i.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!i.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var o=0;o<this.m_polyNodes.ChildCount();o++){var l=this.m_polyNodes.Childs()[o];(l.m_endtype===i.EndType.etClosedPolygon||l.m_endtype===i.EndType.etClosedLine&&i.Clipper.Orientation(l.m_polygon))&&l.m_polygon.reverse()}else for(var o=0;o<this.m_polyNodes.ChildCount();o++){var l=this.m_polyNodes.Childs()[o];l.m_endtype===i.EndType.etClosedLine&&!i.Clipper.Orientation(l.m_polygon)&&l.m_polygon.reverse()}},i.ClipperOffset.GetUnitNormal=function(o,l){var u=l.X-o.X,p=l.Y-o.Y;if(u===0&&p===0)return new i.DoublePoint2(0,0);var v=1/Math.sqrt(u*u+p*p);return u*=v,p*=v,new i.DoublePoint2(p,-u)},i.ClipperOffset.prototype.DoOffset=function(o){if(this.m_destPolys=new Array,this.m_delta=o,i.ClipperBase.near_zero(o)){for(var l=0;l<this.m_polyNodes.ChildCount();l++){var u=this.m_polyNodes.Childs()[l];u.m_endtype===i.EndType.etClosedPolygon&&this.m_destPolys.push(u.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var p;this.ArcTolerance<=0?p=i.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(o)*i.ClipperOffset.def_arc_tolerance?p=Math.abs(o)*i.ClipperOffset.def_arc_tolerance:p=this.ArcTolerance;var v=3.14159265358979/Math.acos(1-p/Math.abs(o));this.m_sin=Math.sin(i.ClipperOffset.two_pi/v),this.m_cos=Math.cos(i.ClipperOffset.two_pi/v),this.m_StepsPerRad=v/i.ClipperOffset.two_pi,o<0&&(this.m_sin=-this.m_sin);for(var l=0;l<this.m_polyNodes.ChildCount();l++){var u=this.m_polyNodes.Childs()[l];this.m_srcPoly=u.m_polygon;var M=this.m_srcPoly.length;if(!(M===0||o<=0&&(M<3||u.m_endtype!==i.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,M===1){if(u.m_jointype===i.JoinType.jtRound)for(var L=1,z=0,G=1;G<=v;G++){this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[0].X+L*o),i.ClipperOffset.Round(this.m_srcPoly[0].Y+z*o)));var q=L;L=L*this.m_cos-this.m_sin*z,z=q*this.m_sin+z*this.m_cos}else for(var L=-1,z=-1,G=0;G<4;++G)this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[0].X+L*o),i.ClipperOffset.Round(this.m_srcPoly[0].Y+z*o))),L<0?L=1:z<0?z=1:L=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var G=0;G<M-1;G++)this.m_normals.push(i.ClipperOffset.GetUnitNormal(this.m_srcPoly[G],this.m_srcPoly[G+1]));if(u.m_endtype===i.EndType.etClosedLine||u.m_endtype===i.EndType.etClosedPolygon?this.m_normals.push(i.ClipperOffset.GetUnitNormal(this.m_srcPoly[M-1],this.m_srcPoly[0])):this.m_normals.push(new i.DoublePoint1(this.m_normals[M-2])),u.m_endtype===i.EndType.etClosedPolygon){for(var ht=M-1,G=0;G<M;G++)ht=this.OffsetPoint(G,ht,u.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(u.m_endtype===i.EndType.etClosedLine){for(var ht=M-1,G=0;G<M;G++)ht=this.OffsetPoint(G,ht,u.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var ct=this.m_normals[M-1],G=M-1;G>0;G--)this.m_normals[G]=new i.DoublePoint2(-this.m_normals[G-1].X,-this.m_normals[G-1].Y);this.m_normals[0]=new i.DoublePoint2(-ct.X,-ct.Y),ht=0;for(var G=M-1;G>=0;G--)ht=this.OffsetPoint(G,ht,u.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var ht=0,G=1;G<M-1;++G)ht=this.OffsetPoint(G,ht,u.m_jointype);var _t;if(u.m_endtype===i.EndType.etOpenButt){var G=M-1;_t=new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[G].X+this.m_normals[G].X*o),i.ClipperOffset.Round(this.m_srcPoly[G].Y+this.m_normals[G].Y*o)),this.m_destPoly.push(_t),_t=new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[G].X-this.m_normals[G].X*o),i.ClipperOffset.Round(this.m_srcPoly[G].Y-this.m_normals[G].Y*o)),this.m_destPoly.push(_t)}else{var G=M-1;ht=M-2,this.m_sinA=0,this.m_normals[G]=new i.DoublePoint2(-this.m_normals[G].X,-this.m_normals[G].Y),u.m_endtype===i.EndType.etOpenSquare?this.DoSquare(G,ht):this.DoRound(G,ht)}for(var G=M-1;G>0;G--)this.m_normals[G]=new i.DoublePoint2(-this.m_normals[G-1].X,-this.m_normals[G-1].Y);this.m_normals[0]=new i.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),ht=M-1;for(var G=ht-1;G>0;--G)ht=this.OffsetPoint(G,ht,u.m_jointype);u.m_endtype===i.EndType.etOpenButt?(_t=new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*o),i.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*o)),this.m_destPoly.push(_t),_t=new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*o),i.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*o)),this.m_destPoly.push(_t)):(ht=1,this.m_sinA=0,u.m_endtype===i.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},i.ClipperOffset.prototype.Execute=function(){var o=arguments,l=o[0]instanceof i.PolyTree;if(l){var u=o[0],p=o[1];u.Clear(),this.FixOrientations(),this.DoOffset(p);var v=new i.Clipper(0);if(v.AddPaths(this.m_destPolys,i.PolyType.ptSubject,!0),p>0)v.Execute(i.ClipType.ctUnion,u,i.PolyFillType.pftPositive,i.PolyFillType.pftPositive);else{var M=i.Clipper.GetBounds(this.m_destPolys),L=new i.Path;if(L.push(new i.IntPoint2(M.left-10,M.bottom+10)),L.push(new i.IntPoint2(M.right+10,M.bottom+10)),L.push(new i.IntPoint2(M.right+10,M.top-10)),L.push(new i.IntPoint2(M.left-10,M.top-10)),v.AddPath(L,i.PolyType.ptSubject,!0),v.ReverseSolution=!0,v.Execute(i.ClipType.ctUnion,u,i.PolyFillType.pftNegative,i.PolyFillType.pftNegative),u.ChildCount()===1&&u.Childs()[0].ChildCount()>0){var z=u.Childs()[0];u.Childs()[0]=z.Childs()[0],u.Childs()[0].m_Parent=u;for(var G=1;G<z.ChildCount();G++)u.AddChild(z.Childs()[G])}else u.Clear()}}else{var u=o[0],p=o[1];i.Clear(u),this.FixOrientations(),this.DoOffset(p);var v=new i.Clipper(0);if(v.AddPaths(this.m_destPolys,i.PolyType.ptSubject,!0),p>0)v.Execute(i.ClipType.ctUnion,u,i.PolyFillType.pftPositive,i.PolyFillType.pftPositive);else{var M=i.Clipper.GetBounds(this.m_destPolys),L=new i.Path;L.push(new i.IntPoint2(M.left-10,M.bottom+10)),L.push(new i.IntPoint2(M.right+10,M.bottom+10)),L.push(new i.IntPoint2(M.right+10,M.top-10)),L.push(new i.IntPoint2(M.left-10,M.top-10)),v.AddPath(L,i.PolyType.ptSubject,!0),v.ReverseSolution=!0,v.Execute(i.ClipType.ctUnion,u,i.PolyFillType.pftNegative,i.PolyFillType.pftNegative),u.length>0&&u.splice(0,1)}}},i.ClipperOffset.prototype.OffsetPoint=function(o,l,u){if(this.m_sinA=this.m_normals[l].X*this.m_normals[o].Y-this.m_normals[o].X*this.m_normals[l].Y,Math.abs(this.m_sinA*this.m_delta)<1){var p=this.m_normals[l].X*this.m_normals[o].X+this.m_normals[o].Y*this.m_normals[l].Y;if(p>0)return this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[o].X+this.m_normals[l].X*this.m_delta),i.ClipperOffset.Round(this.m_srcPoly[o].Y+this.m_normals[l].Y*this.m_delta))),l}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[o].X+this.m_normals[l].X*this.m_delta),i.ClipperOffset.Round(this.m_srcPoly[o].Y+this.m_normals[l].Y*this.m_delta))),this.m_destPoly.push(new i.IntPoint1(this.m_srcPoly[o])),this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[o].X+this.m_normals[o].X*this.m_delta),i.ClipperOffset.Round(this.m_srcPoly[o].Y+this.m_normals[o].Y*this.m_delta)));else switch(u){case i.JoinType.jtMiter:{var v=1+(this.m_normals[o].X*this.m_normals[l].X+this.m_normals[o].Y*this.m_normals[l].Y);v>=this.m_miterLim?this.DoMiter(o,l,v):this.DoSquare(o,l);break}case i.JoinType.jtSquare:this.DoSquare(o,l);break;case i.JoinType.jtRound:this.DoRound(o,l);break}return l=o,l},i.ClipperOffset.prototype.DoSquare=function(o,l){var u=Math.tan(Math.atan2(this.m_sinA,this.m_normals[l].X*this.m_normals[o].X+this.m_normals[l].Y*this.m_normals[o].Y)/4);this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[o].X+this.m_delta*(this.m_normals[l].X-this.m_normals[l].Y*u)),i.ClipperOffset.Round(this.m_srcPoly[o].Y+this.m_delta*(this.m_normals[l].Y+this.m_normals[l].X*u)))),this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[o].X+this.m_delta*(this.m_normals[o].X+this.m_normals[o].Y*u)),i.ClipperOffset.Round(this.m_srcPoly[o].Y+this.m_delta*(this.m_normals[o].Y-this.m_normals[o].X*u))))},i.ClipperOffset.prototype.DoMiter=function(o,l,u){var p=this.m_delta/u;this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[o].X+(this.m_normals[l].X+this.m_normals[o].X)*p),i.ClipperOffset.Round(this.m_srcPoly[o].Y+(this.m_normals[l].Y+this.m_normals[o].Y)*p)))},i.ClipperOffset.prototype.DoRound=function(o,l){for(var u=Math.atan2(this.m_sinA,this.m_normals[l].X*this.m_normals[o].X+this.m_normals[l].Y*this.m_normals[o].Y),p=Math.max(i.Cast_Int32(i.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(u))),1),v=this.m_normals[l].X,M=this.m_normals[l].Y,L,z=0;z<p;++z)this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[o].X+v*this.m_delta),i.ClipperOffset.Round(this.m_srcPoly[o].Y+M*this.m_delta))),L=v,v=v*this.m_cos-this.m_sin*M,M=L*this.m_sin+M*this.m_cos;this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[o].X+this.m_normals[o].X*this.m_delta),i.ClipperOffset.Round(this.m_srcPoly[o].Y+this.m_normals[o].Y*this.m_delta)))},i.Error=function(o){try{throw new Error(o)}catch(l){alert(l.message)}},i.JS={},i.JS.AreaOfPolygon=function(o,l){return l||(l=1),i.Clipper.Area(o)/(l*l)},i.JS.AreaOfPolygons=function(o,l){l||(l=1);for(var u=0,p=0;p<o.length;p++)u+=i.Clipper.Area(o[p]);return u/(l*l)},i.JS.BoundsOfPath=function(o,l){return i.JS.BoundsOfPaths([o],l)},i.JS.BoundsOfPaths=function(o,l){l||(l=1);var u=i.Clipper.GetBounds(o);return u.left/=l,u.bottom/=l,u.right/=l,u.top/=l,u},i.JS.Clean=function(p,l){if(!(p instanceof Array))return[];var u=p[0]instanceof Array,p=i.JS.Clone(p);if(typeof l!="number"||l===null)return i.Error("Delta is not a number in Clean()."),p;if(p.length===0||p.length===1&&p[0].length===0||l<0)return p;u||(p=[p]);for(var v=p.length,M,L,z,G,q,ht,ct,_t=[],Xt=0;Xt<v;Xt++)if(L=p[Xt],M=L.length,M!==0){if(M<3){z=L,_t.push(z);continue}for(z=L,G=l*l,q=L[0],ht=1,ct=1;ct<M;ct++)(L[ct].X-q.X)*(L[ct].X-q.X)+(L[ct].Y-q.Y)*(L[ct].Y-q.Y)<=G||(z[ht]=L[ct],q=L[ct],ht++);q=L[ht-1],(L[0].X-q.X)*(L[0].X-q.X)+(L[0].Y-q.Y)*(L[0].Y-q.Y)<=G&&ht--,ht<M&&z.splice(ht,M-ht),z.length&&_t.push(z)}return!u&&_t.length?_t=_t[0]:!u&&_t.length===0?_t=[]:u&&_t.length===0&&(_t=[[]]),_t},i.JS.Clone=function(o){if(!(o instanceof Array))return[];if(o.length===0)return[];if(o.length===1&&o[0].length===0)return[[]];var l=o[0]instanceof Array;l||(o=[o]);var u=o.length,p,v,M,L,z=new Array(u);for(v=0;v<u;v++){for(p=o[v].length,L=new Array(p),M=0;M<p;M++)L[M]={X:o[v][M].X,Y:o[v][M].Y};z[v]=L}return l||(z=z[0]),z},i.JS.Lighten=function(o,l){if(!(o instanceof Array))return[];if(typeof l!="number"||l===null)return i.Error("Tolerance is not a number in Lighten()."),i.JS.Clone(o);if(o.length===0||o.length===1&&o[0].length===0||l<0)return i.JS.Clone(o);var u=o[0]instanceof Array;u||(o=[o]);var p,v,M,L,z,G,q,ht,ct,_t,Xt,le,fe,Ie,fi,Wi,ms,Bp=o.length,Up=l*l,gs=[];for(p=0;p<Bp;p++)if(M=o[p],G=M.length,G!==0){for(L=0;L<1e6;L++){for(z=[],G=M.length,M[G-1].X!==M[0].X||M[G-1].Y!==M[0].Y?(le=1,M.push({X:M[0].X,Y:M[0].Y}),G=M.length):le=0,Xt=[],v=0;v<G-2;v++)q=M[v],ct=M[v+1],ht=M[v+2],Wi=q.X,ms=q.Y,fe=ht.X-Wi,Ie=ht.Y-ms,(fe!==0||Ie!==0)&&(fi=((ct.X-Wi)*fe+(ct.Y-ms)*Ie)/(fe*fe+Ie*Ie),fi>1?(Wi=ht.X,ms=ht.Y):fi>0&&(Wi+=fe*fi,ms+=Ie*fi)),fe=ct.X-Wi,Ie=ct.Y-ms,_t=fe*fe+Ie*Ie,_t<=Up&&(Xt[v+1]=1,v++);for(z.push({X:M[0].X,Y:M[0].Y}),v=1;v<G-1;v++)Xt[v]||z.push({X:M[v].X,Y:M[v].Y});if(z.push({X:M[G-1].X,Y:M[G-1].Y}),le&&M.pop(),Xt.length)M=z;else break}G=z.length,z[G-1].X===z[0].X&&z[G-1].Y===z[0].Y&&z.pop(),z.length>2&&gs.push(z)}return u||(gs=gs[0]),typeof gs>"u"&&(gs=[]),gs},i.JS.PerimeterOfPath=function(o,l,u){if(typeof o>"u")return 0;var p=Math.sqrt,v=0,M,L,z=0,G=0,q=0,ht=0,ct=o.length;if(ct<2)return 0;for(l&&(o[ct]=o[0],ct++);--ct;)M=o[ct],z=M.X,G=M.Y,L=o[ct-1],q=L.X,ht=L.Y,v+=p((z-q)*(z-q)+(G-ht)*(G-ht));return l&&o.pop(),v/u},i.JS.PerimeterOfPaths=function(o,l,u){u||(u=1);for(var p=0,v=0;v<o.length;v++)p+=i.JS.PerimeterOfPath(o[v],l,u);return p},i.JS.ScaleDownPath=function(o,l){var u,p;for(l||(l=1),u=o.length;u--;)p=o[u],p.X=p.X/l,p.Y=p.Y/l},i.JS.ScaleDownPaths=function(o,l){var u,p,v;for(l||(l=1),u=o.length;u--;)for(p=o[u].length;p--;)v=o[u][p],v.X=v.X/l,v.Y=v.Y/l},i.JS.ScaleUpPath=function(o,l){var u,p,v=Math.round;for(l||(l=1),u=o.length;u--;)p=o[u],p.X=v(p.X*l),p.Y=v(p.Y*l)},i.JS.ScaleUpPaths=function(o,l){var u,p,v,M=Math.round;for(l||(l=1),u=o.length;u--;)for(p=o[u].length;p--;)v=o[u][p],v.X=M(v.X*l),v.Y=M(v.Y*l)},i.ExPolygons=function(){return[]},i.ExPolygon=function(){this.outer=null,this.holes=null},i.JS.AddOuterPolyNodeToExPolygons=function(o,l){var u=new i.ExPolygon;u.outer=o.Contour();var p=o.Childs(),v=p.length;u.holes=new Array(v);var M,L,z,G,q,ht;for(z=0;z<v;z++)for(M=p[z],u.holes[z]=M.Contour(),G=0,q=M.Childs(),ht=q.length;G<ht;G++)L=q[G],i.JS.AddOuterPolyNodeToExPolygons(L,l);l.push(u)},i.JS.ExPolygonsToPaths=function(o){var l,u,p,v,M=new i.Paths;for(l=0,p=o.length;l<p;l++)for(M.push(o[l].outer),u=0,v=o[l].holes.length;u<v;u++)M.push(o[l].holes[u]);return M},i.JS.PolyTreeToExPolygons=function(o){var l=new i.ExPolygons,u,p,v,M;for(p=0,v=o.Childs(),M=v.length;p<M;p++)u=v[p],i.JS.AddOuterPolyNodeToExPolygons(u,l);return l}})()});var il="186",Bn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Un={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vd=0,hh=1,bd=2;var uo=1,wd=2,tr=3,kn=0,Ke=1,_i=2,ji=0,er=1,uh=2,dh=3,fh=4,Sd=5;var os=100,Md=101,Td=102,Ed=103,Ad=104,Cd=200,Pd=201,Id=202,Rd=203,ph=204,mh=205,Ld=206,Dd=207,Fd=208,Nd=209,Od=210,Bd=211,Ud=212,kd=213,zd=214,va=0,ba=1,wa=2,Us=3,Sa=4,Ma=5,Ta=6,Ea=7,gh=0,Vd=1,Gd=2,Ui=0,_h=1,xh=2,yh=3,vh=4,bh=5,wh=6,Sh=7;var Mh=300,zn=301,as=302,nl=303,sl=304,fo=306,ts=1e3,$i=1001,Aa=1002,Ue=1003,Hd=1004;var po=1005;var qe=1006,rl=1007;var Vn=1008;var xi=1009,Th=1010,Eh=1011,ir=1012,ol=1013,ki=1014,zi=1015,Vi=1016,al=1017,ll=1018,nr=1020,Ah=35902,Ch=35899,Ph=1021,Ih=1022,Ii=1023,Ji=1026,Gn=1027,mo=1028,cl=1029,Hn=1030,hl=1031;var ul=1033,go=33776,_o=33777,xo=33778,yo=33779,dl=35840,fl=35841,pl=35842,ml=35843,gl=36196,_l=37492,xl=37496,yl=37488,vl=37489,vo=37490,bl=37491,wl=37808,Sl=37809,Ml=37810,Tl=37811,El=37812,Al=37813,Cl=37814,Pl=37815,Il=37816,Rl=37817,Ll=37818,Dl=37819,Fl=37820,Nl=37821,Ol=36492,Bl=36494,Ul=36495,kl=36283,zl=36284,bo=36285,Vl=36286;var Lr=2300,Ca=2301,xa=2302,Kc=2303,jc=2400,Qc=2401,th=2402;var Wd=3200;var Gl=0,Xd=1,mn="",ze="srgb",Dr="srgb-linear",Fr="linear",Me="srgb";var ya=7680;var Yd=519,$d=512,qd=513,Zd=514,Hl=515,Jd=516,Kd=517,Wl=518,jd=519,Rh=35044;var Lh="300 es",Ni=2e3,ks=2001;function $p(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qd(){let i=Nr("canvas");return i.style.display="block",i}var Uu={},zs=null;function Or(...i){let t="THREE."+i.shift();zs?zs("log",t,...i):console.log(t,...i)}function tf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ie(...i){i=tf(i);let t="THREE."+i.shift();if(zs)zs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=tf(i);let t="THREE."+i.shift();if(zs)zs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Qn(...i){let t=i.join(" ");t in Uu||(Uu[t]=!0,ie(...i))}function ef(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var nf={[va]:ba,[wa]:Ta,[Sa]:Ea,[Us]:Ma,[ba]:va,[Ta]:wa,[Ea]:Sa,[Ma]:Us},Oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ku=1234567,Os=Math.PI/180,Vs=180/Math.PI;function Zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ni[i&255]+ni[i>>8&255]+ni[i>>16&255]+ni[i>>24&255]+"-"+ni[t&255]+ni[t>>8&255]+"-"+ni[t>>16&15|64]+ni[t>>24&255]+"-"+ni[e&63|128]+ni[e>>8&255]+"-"+ni[e>>16&255]+ni[e>>24&255]+ni[n&255]+ni[n>>8&255]+ni[n>>16&255]+ni[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function Dh(i,t){return(i%t+t)%t}function Zp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jp(i,t,e){return i!==t?(e-i)/(t-i):0}function Pr(i,t,e){return(1-e)*i+e*t}function Kp(i,t,e,n){return Pr(i,t,1-Math.exp(-e*n))}function jp(i,t=1){return t-Math.abs(Dh(i,t*2)-t)}function Qp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function tm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function em(i,t){return i+Math.floor(Math.random()*(t-i+1))}function im(i,t){return i+Math.random()*(t-i)}function nm(i){return i*(.5-Math.random())}function sm(i){i!==void 0&&(ku=i);let t=ku+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rm(i){return i*Os}function om(i){return i*Vs}function am(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function lm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hm(i,t,e,n,s){let r=Math.cos,a=Math.sin,c=r(e/2),h=a(e/2),d=r((t+n)/2),f=a((t+n)/2),_=r((t-n)/2),m=a((t-n)/2),g=r((n-t)/2),b=a((n-t)/2);switch(s){case"XYX":i.set(c*f,h*_,h*m,c*d);break;case"YZY":i.set(h*m,c*f,h*_,c*d);break;case"ZXZ":i.set(h*_,h*m,c*f,c*d);break;case"XZX":i.set(c*f,h*b,h*g,c*d);break;case"YXY":i.set(h*g,c*f,h*b,c*d);break;case"ZYZ":i.set(h*b,h*g,c*f,c*d);break;default:ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var wo={DEG2RAD:Os,RAD2DEG:Vs,generateUUID:Zi,clamp:ae,euclideanModulo:Dh,mapLinear:Zp,inverseLerp:Jp,lerp:Pr,damp:Kp,pingpong:jp,smoothstep:Qp,smootherstep:tm,randInt:em,randFloat:im,randFloatSpread:nm,seededRandom:sm,degToRad:rm,radToDeg:om,isPowerOfTwo:am,ceilPowerOfTwo:lm,floorPowerOfTwo:cm,setQuaternionFromProperEuler:hm,normalize:Ee,denormalize:Fi},kh=class kh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kh.prototype.isVector2=!0;var mt=kh,Mi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,c){let h=n[s+0],d=n[s+1],f=n[s+2],_=n[s+3],m=r[a+0],g=r[a+1],b=r[a+2],w=r[a+3];if(_!==w||h!==m||d!==g||f!==b){let x=h*m+d*g+f*b+_*w;x<0&&(m=-m,g=-g,b=-b,w=-w,x=-x);let y=1-c;if(x<.9995){let A=Math.acos(x),C=Math.sin(A);y=Math.sin(y*A)/C,c=Math.sin(c*A)/C,h=h*y+m*c,d=d*y+g*c,f=f*y+b*c,_=_*y+w*c}else{h=h*y+m*c,d=d*y+g*c,f=f*y+b*c,_=_*y+w*c;let A=1/Math.sqrt(h*h+d*d+f*f+_*_);h*=A,d*=A,f*=A,_*=A}}t[e]=h,t[e+1]=d,t[e+2]=f,t[e+3]=_}static multiplyQuaternionsFlat(t,e,n,s,r,a){let c=n[s],h=n[s+1],d=n[s+2],f=n[s+3],_=r[a],m=r[a+1],g=r[a+2],b=r[a+3];return t[e]=c*b+f*_+h*g-d*m,t[e+1]=h*b+f*m+d*_-c*g,t[e+2]=d*b+f*g+c*m-h*_,t[e+3]=f*b-c*_-h*m-d*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,c=Math.cos,h=Math.sin,d=c(n/2),f=c(s/2),_=c(r/2),m=h(n/2),g=h(s/2),b=h(r/2);switch(a){case"XYZ":this._x=m*f*_+d*g*b,this._y=d*g*_-m*f*b,this._z=d*f*b+m*g*_,this._w=d*f*_-m*g*b;break;case"YXZ":this._x=m*f*_+d*g*b,this._y=d*g*_-m*f*b,this._z=d*f*b-m*g*_,this._w=d*f*_+m*g*b;break;case"ZXY":this._x=m*f*_-d*g*b,this._y=d*g*_+m*f*b,this._z=d*f*b+m*g*_,this._w=d*f*_-m*g*b;break;case"ZYX":this._x=m*f*_-d*g*b,this._y=d*g*_+m*f*b,this._z=d*f*b-m*g*_,this._w=d*f*_+m*g*b;break;case"YZX":this._x=m*f*_+d*g*b,this._y=d*g*_+m*f*b,this._z=d*f*b-m*g*_,this._w=d*f*_-m*g*b;break;case"XZY":this._x=m*f*_-d*g*b,this._y=d*g*_-m*f*b,this._z=d*f*b+m*g*_,this._w=d*f*_+m*g*b;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],c=e[5],h=e[9],d=e[2],f=e[6],_=e[10],m=n+c+_;if(m>0){let g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-h)*g,this._y=(r-d)*g,this._z=(a-s)*g}else if(n>c&&n>_){let g=2*Math.sqrt(1+n-c-_);this._w=(f-h)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+d)/g}else if(c>_){let g=2*Math.sqrt(1+c-n-_);this._w=(r-d)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(h+f)/g}else{let g=2*Math.sqrt(1+_-n-c);this._w=(a-s)/g,this._x=(r+d)/g,this._y=(h+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,c=e._x,h=e._y,d=e._z,f=e._w;return this._x=n*f+a*c+s*d-r*h,this._y=s*f+a*h+r*c-n*d,this._z=r*f+a*d+n*h-s*c,this._w=a*f-n*c-s*h-r*d,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,c=this.dot(t);c<0&&(n=-n,s=-s,r=-r,a=-a,c=-c);let h=1-e;if(c<.9995){let d=Math.acos(c),f=Math.sin(d);h=Math.sin(h*d)/f,e=Math.sin(e*d)/f,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},zh=class zh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,c=t.z,h=t.w,d=2*(a*s-c*n),f=2*(c*e-r*s),_=2*(r*n-a*e);return this.x=e+h*d+a*_-c*f,this.y=n+h*f+c*d-r*_,this.z=s+h*_+r*f-a*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,c=e.y,h=e.z;return this.x=s*h-r*c,this.y=r*a-n*h,this.z=n*c-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mc.copy(this).projectOnVector(t),this.sub(Mc)}reflect(t){return this.sub(Mc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zh.prototype.isVector3=!0;var k=zh,Mc=new k,zu=new Mi,Vh=class Vh{constructor(t,e,n,s,r,a,c,h,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,c,h,d)}set(t,e,n,s,r,a,c,h,d){let f=this.elements;return f[0]=t,f[1]=s,f[2]=c,f[3]=e,f[4]=r,f[5]=h,f[6]=n,f[7]=a,f[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],c=n[3],h=n[6],d=n[1],f=n[4],_=n[7],m=n[2],g=n[5],b=n[8],w=s[0],x=s[3],y=s[6],A=s[1],C=s[4],S=s[7],I=s[2],R=s[5],O=s[8];return r[0]=a*w+c*A+h*I,r[3]=a*x+c*C+h*R,r[6]=a*y+c*S+h*O,r[1]=d*w+f*A+_*I,r[4]=d*x+f*C+_*R,r[7]=d*y+f*S+_*O,r[2]=m*w+g*A+b*I,r[5]=m*x+g*C+b*R,r[8]=m*y+g*S+b*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],c=t[5],h=t[6],d=t[7],f=t[8];return e*a*f-e*c*d-n*r*f+n*c*h+s*r*d-s*a*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],c=t[5],h=t[6],d=t[7],f=t[8],_=f*a-c*d,m=c*h-f*r,g=d*r-a*h,b=e*_+n*m+s*g;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/b;return t[0]=_*w,t[1]=(s*d-f*n)*w,t[2]=(c*n-s*a)*w,t[3]=m*w,t[4]=(f*e-s*h)*w,t[5]=(s*r-c*e)*w,t[6]=g*w,t[7]=(n*h-d*e)*w,t[8]=(a*e-n*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,c){let h=Math.cos(r),d=Math.sin(r);return this.set(n*h,n*d,-n*(h*a+d*c)+a+t,-s*d,s*h,-s*(-d*a+h*c)+c+e,0,0,1),this}scale(t,e){return Qn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tc.makeScale(t,e)),this}rotate(t){return Qn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tc.makeRotation(-t)),this}translate(t,e){return Qn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Vh.prototype.isMatrix3=!0;var ce=Vh,Tc=new ce,Vu=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gu=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function um(){let i={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Me&&(s.r=dn(s.r),s.g=dn(s.g),s.b=dn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Me&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mn?Fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Dr]:{primaries:t,whitePoint:n,transfer:Fr,toXYZ:Vu,fromXYZ:Gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:Vu,fromXYZ:Gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}var ge=um();function dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _s,Pa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_s===void 0&&(_s=Nr("canvas")),_s.width=t.width,_s.height=t.height;let s=_s.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=_s}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=dn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(dn(e[n]/255)*255):e[n]=dn(e[n]);return{data:e,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dm=0,Gs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,c=s.length;a<c;a++)s[a].isDataTexture?r.push(Ec(s[a].image)):r.push(Ec(s[a]))}else r=Ec(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ec(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}var fm=0,Ac=new k,Ze=class i extends Oi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$i,s=$i,r=qe,a=Vn,c=Ii,h=xi,d=i.DEFAULT_ANISOTROPY,f=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Zi(),this.name="",this.source=new Gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ac).x}get height(){return this.source.getSize(Ac).y}get depth(){return this.source.getSize(Ac).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ts:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case Aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ts:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case Aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Mh;Ze.DEFAULT_ANISOTROPY=1;var Gh=class Gh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,d=h[0],f=h[4],_=h[8],m=h[1],g=h[5],b=h[9],w=h[2],x=h[6],y=h[10];if(Math.abs(f-m)<.01&&Math.abs(_-w)<.01&&Math.abs(b-x)<.01){if(Math.abs(f+m)<.1&&Math.abs(_+w)<.1&&Math.abs(b+x)<.1&&Math.abs(d+g+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(d+1)/2,S=(g+1)/2,I=(y+1)/2,R=(f+m)/4,O=(_+w)/4,E=(b+x)/4;return C>S&&C>I?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=R/n,r=O/n):S>I?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=R/s,r=E/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=O/r,s=E/r),this.set(n,s,r,e),this}let A=Math.sqrt((x-b)*(x-b)+(_-w)*(_-w)+(m-f)*(m-f));return Math.abs(A)<.001&&(A=1),this.x=(x-b)/A,this.y=(_-w)/A,this.z=(m-f)/A,this.w=Math.acos((d+g+y-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gh.prototype.isVector4=!0;var Te=Gh,Ia=class extends Oi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ze(s),a=n.count;for(let c=0;c<a;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Gs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends Ia{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Br=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ra=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var el=class el{constructor(t,e,n,s,r,a,c,h,d,f,_,m,g,b,w,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,c,h,d,f,_,m,g,b,w,x)}set(t,e,n,s,r,a,c,h,d,f,_,m,g,b,w,x){let y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=s,y[1]=r,y[5]=a,y[9]=c,y[13]=h,y[2]=d,y[6]=f,y[10]=_,y[14]=m,y[3]=g,y[7]=b,y[11]=w,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new el().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/xs.setFromMatrixColumn(t,0).length(),r=1/xs.setFromMatrixColumn(t,1).length(),a=1/xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s),f=Math.cos(r),_=Math.sin(r);if(t.order==="XYZ"){let m=a*f,g=a*_,b=c*f,w=c*_;e[0]=h*f,e[4]=-h*_,e[8]=d,e[1]=g+b*d,e[5]=m-w*d,e[9]=-c*h,e[2]=w-m*d,e[6]=b+g*d,e[10]=a*h}else if(t.order==="YXZ"){let m=h*f,g=h*_,b=d*f,w=d*_;e[0]=m+w*c,e[4]=b*c-g,e[8]=a*d,e[1]=a*_,e[5]=a*f,e[9]=-c,e[2]=g*c-b,e[6]=w+m*c,e[10]=a*h}else if(t.order==="ZXY"){let m=h*f,g=h*_,b=d*f,w=d*_;e[0]=m-w*c,e[4]=-a*_,e[8]=b+g*c,e[1]=g+b*c,e[5]=a*f,e[9]=w-m*c,e[2]=-a*d,e[6]=c,e[10]=a*h}else if(t.order==="ZYX"){let m=a*f,g=a*_,b=c*f,w=c*_;e[0]=h*f,e[4]=b*d-g,e[8]=m*d+w,e[1]=h*_,e[5]=w*d+m,e[9]=g*d-b,e[2]=-d,e[6]=c*h,e[10]=a*h}else if(t.order==="YZX"){let m=a*h,g=a*d,b=c*h,w=c*d;e[0]=h*f,e[4]=w-m*_,e[8]=b*_+g,e[1]=_,e[5]=a*f,e[9]=-c*f,e[2]=-d*f,e[6]=g*_+b,e[10]=m-w*_}else if(t.order==="XZY"){let m=a*h,g=a*d,b=c*h,w=c*d;e[0]=h*f,e[4]=-_,e[8]=d*f,e[1]=m*_+w,e[5]=a*f,e[9]=g*_-b,e[2]=b*_-g,e[6]=c*f,e[10]=w*_+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pm,t,mm)}lookAt(t,e,n){let s=this.elements;return wi.subVectors(t,e),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),Sn.crossVectors(n,wi),Sn.lengthSq()===0&&(Math.abs(n.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),Sn.crossVectors(n,wi)),Sn.normalize(),Go.crossVectors(wi,Sn),s[0]=Sn.x,s[4]=Go.x,s[8]=wi.x,s[1]=Sn.y,s[5]=Go.y,s[9]=wi.y,s[2]=Sn.z,s[6]=Go.z,s[10]=wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],c=n[4],h=n[8],d=n[12],f=n[1],_=n[5],m=n[9],g=n[13],b=n[2],w=n[6],x=n[10],y=n[14],A=n[3],C=n[7],S=n[11],I=n[15],R=s[0],O=s[4],E=s[8],D=s[12],U=s[1],F=s[5],V=s[9],H=s[13],B=s[2],X=s[6],K=s[10],J=s[14],at=s[3],tt=s[7],nt=s[11],st=s[15];return r[0]=a*R+c*U+h*B+d*at,r[4]=a*O+c*F+h*X+d*tt,r[8]=a*E+c*V+h*K+d*nt,r[12]=a*D+c*H+h*J+d*st,r[1]=f*R+_*U+m*B+g*at,r[5]=f*O+_*F+m*X+g*tt,r[9]=f*E+_*V+m*K+g*nt,r[13]=f*D+_*H+m*J+g*st,r[2]=b*R+w*U+x*B+y*at,r[6]=b*O+w*F+x*X+y*tt,r[10]=b*E+w*V+x*K+y*nt,r[14]=b*D+w*H+x*J+y*st,r[3]=A*R+C*U+S*B+I*at,r[7]=A*O+C*F+S*X+I*tt,r[11]=A*E+C*V+S*K+I*nt,r[15]=A*D+C*H+S*J+I*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],c=t[5],h=t[9],d=t[13],f=t[2],_=t[6],m=t[10],g=t[14],b=t[3],w=t[7],x=t[11],y=t[15],A=h*g-d*m,C=c*g-d*_,S=c*m-h*_,I=a*g-d*f,R=a*m-h*f,O=a*_-c*f;return e*(w*A-x*C+y*S)-n*(b*A-x*I+y*R)+s*(b*C-w*I+y*O)-r*(b*S-w*R+x*O)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],c=t[9],h=t[2],d=t[6],f=t[10];return e*(a*f-c*d)-n*(r*f-c*h)+s*(r*d-a*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],c=t[5],h=t[6],d=t[7],f=t[8],_=t[9],m=t[10],g=t[11],b=t[12],w=t[13],x=t[14],y=t[15],A=e*c-n*a,C=e*h-s*a,S=e*d-r*a,I=n*h-s*c,R=n*d-r*c,O=s*d-r*h,E=f*w-_*b,D=f*x-m*b,U=f*y-g*b,F=_*x-m*w,V=_*y-g*w,H=m*y-g*x,B=A*H-C*V+S*F+I*U-R*D+O*E;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/B;return t[0]=(c*H-h*V+d*F)*X,t[1]=(s*V-n*H-r*F)*X,t[2]=(w*O-x*R+y*I)*X,t[3]=(m*R-_*O-g*I)*X,t[4]=(h*U-a*H-d*D)*X,t[5]=(e*H-s*U+r*D)*X,t[6]=(x*S-b*O-y*C)*X,t[7]=(f*O-m*S+g*C)*X,t[8]=(a*V-c*U+d*E)*X,t[9]=(n*U-e*V-r*E)*X,t[10]=(b*R-w*S+y*A)*X,t[11]=(_*S-f*R-g*A)*X,t[12]=(c*D-a*F-h*E)*X,t[13]=(e*F-n*D+s*E)*X,t[14]=(w*C-b*I-x*A)*X,t[15]=(f*I-_*C+m*A)*X,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,c=t.y,h=t.z,d=r*a,f=r*c;return this.set(d*a+n,d*c-s*h,d*h+s*c,0,d*c+s*h,f*c+n,f*h-s*a,0,d*h-s*c,f*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,c=e._z,h=e._w,d=r+r,f=a+a,_=c+c,m=r*d,g=r*f,b=r*_,w=a*f,x=a*_,y=c*_,A=h*d,C=h*f,S=h*_,I=n.x,R=n.y,O=n.z;return s[0]=(1-(w+y))*I,s[1]=(g+S)*I,s[2]=(b-C)*I,s[3]=0,s[4]=(g-S)*R,s[5]=(1-(m+y))*R,s[6]=(x+A)*R,s[7]=0,s[8]=(b+C)*O,s[9]=(x-A)*O,s[10]=(1-(m+w))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=xs.set(s[0],s[1],s[2]).length(),c=xs.set(s[4],s[5],s[6]).length(),h=xs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ri.copy(this);let d=1/a,f=1/c,_=1/h;return Ri.elements[0]*=d,Ri.elements[1]*=d,Ri.elements[2]*=d,Ri.elements[4]*=f,Ri.elements[5]*=f,Ri.elements[6]*=f,Ri.elements[8]*=_,Ri.elements[9]*=_,Ri.elements[10]*=_,e.setFromRotationMatrix(Ri),n.x=a,n.y=c,n.z=h,this}makePerspective(t,e,n,s,r,a,c=Ni,h=!1){let d=this.elements,f=2*r/(e-t),_=2*r/(n-s),m=(e+t)/(e-t),g=(n+s)/(n-s),b,w;if(h)b=r/(a-r),w=a*r/(a-r);else if(c===Ni)b=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(c===ks)b=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=f,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=_,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,n,s,r,a,c=Ni,h=!1){let d=this.elements,f=2/(e-t),_=2/(n-s),m=-(e+t)/(e-t),g=-(n+s)/(n-s),b,w;if(h)b=1/(a-r),w=a/(a-r);else if(c===Ni)b=-2/(a-r),w=-(a+r)/(a-r);else if(c===ks)b=-1/(a-r),w=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=f,d[4]=0,d[8]=0,d[12]=m,d[1]=0,d[5]=_,d[9]=0,d[13]=g,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};el.prototype.isMatrix4=!0;var _e=el,xs=new k,Ri=new _e,pm=new k(0,0,0),mm=new k(1,1,1),Sn=new k,Go=new k,wi=new k,Hu=new _e,Wu=new Mi,Cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],c=s[8],h=s[1],d=s[5],f=s[9],_=s[2],m=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-_,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,g),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-ae(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-f,d),this._y=Math.atan2(-_,r)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-f,g),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var Hs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gm=0,Xu=new k,ys=new Mi,an=new _e,Ho=new k,br=new k,_m=new k,xm=new Mi,Yu=new k(1,0,0),$u=new k(0,1,0),qu=new k(0,0,1),Zu={type:"added"},ym={type:"removed"},vs={type:"childadded",child:null},Cc={type:"childremoved",child:null},$e=class i extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Cn,n=new Mi,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new ce}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(Yu,t)}rotateY(t){return this.rotateOnAxis($u,t)}rotateZ(t){return this.rotateOnAxis(qu,t)}translateOnAxis(t,e){return Xu.copy(t).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yu,t)}translateY(t){return this.translateOnAxis($u,t)}translateZ(t){return this.translateOnAxis(qu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ho.copy(t):Ho.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(br,Ho,this.up):an.lookAt(Ho,br,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(an),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zu),vs.child=t,this.dispatchEvent(vs),vs.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ym),Cc.child=t,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zu),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,_m),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,xm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,c=r.length;a<c;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let h=c.shapes;if(Array.isArray(h))for(let d=0,f=h.length;d<f;d++){let _=h[d];r(t.shapes,_)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(r(t.materials,this.material[h]));s.material=c}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let h=this.animations[c];s.animations.push(r(t.animations,h))}}if(e){let c=a(t.geometries),h=a(t.materials),d=a(t.textures),f=a(t.images),_=a(t.shapes),m=a(t.skeletons),g=a(t.animations),b=a(t.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),f.length>0&&(n.images=f),_.length>0&&(n.shapes=_),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),b.length>0&&(n.nodes=b)}return n.object=s,n;function a(c){let h=[];for(let d in c){let f=c[d];delete f.metadata,h.push(f)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$e.DEFAULT_UP=new k(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},vm={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,c=this._targetRay,h=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){a=!0;for(let w of t.hand.values()){let x=e.getJointPose(w,n),y=this._getHandJoint(d,w);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}let f=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],m=f.position.distanceTo(_.position),g=.02,b=.005;d.inputState.pinching&&m>g+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&m<=g-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));c!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(vm)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=r!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new oi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function Pc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var he=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=Dh(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Pc(a,r,t+1/3),this.g=Pc(a,r,t),this.b=Pc(a,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],c=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ie("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=sf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dn(t.r),this.g=dn(t.g),this.b=dn(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return ge.workingToColorSpace(si.copy(this),t),Math.round(ae(si.r*255,0,255))*65536+Math.round(ae(si.g*255,0,255))*256+Math.round(ae(si.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(si.copy(this),e);let n=si.r,s=si.g,r=si.b,a=Math.max(n,s,r),c=Math.min(n,s,r),h,d,f=(c+a)/2;if(c===a)h=0,d=0;else{let _=a-c;switch(d=f<=.5?_/(a+c):_/(2-a-c),a){case n:h=(s-r)/_+(s<r?6:0);break;case s:h=(r-n)/_+2;break;case r:h=(n-s)/_+4;break}h/=6}return t.h=h,t.s=d,t.l=f,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(si.copy(this),e),t.r=si.r,t.g=si.g,t.b=si.b,t}getStyle(t=ze){ge.workingToColorSpace(si.copy(this),t);let e=si.r,n=si.g,s=si.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),this.setHSL(Mn.h+t,Mn.s+e,Mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(Wo);let n=Pr(Mn.h,Wo.h,e),s=Pr(Mn.s,Wo.s,e),r=Pr(Mn.l,Wo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},si=new he;he.NAMES=sf;var Ur=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},kr=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Li=new k,ln=new k,Ic=new k,cn=new k,bs=new k,ws=new k,Ju=new k,Rc=new k,Lc=new k,Dc=new k,Fc=new Te,Nc=new Te,Oc=new Te,Yi=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Li.subVectors(t,e),s.cross(Li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Li.subVectors(s,e),ln.subVectors(n,e),Ic.subVectors(t,e);let a=Li.dot(Li),c=Li.dot(ln),h=Li.dot(Ic),d=ln.dot(ln),f=ln.dot(Ic),_=a*d-c*c;if(_===0)return r.set(0,0,0),null;let m=1/_,g=(d*h-c*f)*m,b=(a*f-c*h)*m;return r.set(1-g-b,b,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,n,s,r,a,c,h){return this.getBarycoord(t,e,n,s,cn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,cn.x),h.addScaledVector(a,cn.y),h.addScaledVector(c,cn.z),h)}static getInterpolatedAttribute(t,e,n,s,r,a){return Fc.setScalar(0),Nc.setScalar(0),Oc.setScalar(0),Fc.fromBufferAttribute(t,e),Nc.fromBufferAttribute(t,n),Oc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Fc,r.x),a.addScaledVector(Nc,r.y),a.addScaledVector(Oc,r.z),a}static isFrontFacing(t,e,n,s){return Li.subVectors(n,e),ln.subVectors(t,e),Li.cross(ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Li.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,c;bs.subVectors(s,n),ws.subVectors(r,n),Rc.subVectors(t,n);let h=bs.dot(Rc),d=ws.dot(Rc);if(h<=0&&d<=0)return e.copy(n);Lc.subVectors(t,s);let f=bs.dot(Lc),_=ws.dot(Lc);if(f>=0&&_<=f)return e.copy(s);let m=h*_-f*d;if(m<=0&&h>=0&&f<=0)return a=h/(h-f),e.copy(n).addScaledVector(bs,a);Dc.subVectors(t,r);let g=bs.dot(Dc),b=ws.dot(Dc);if(b>=0&&g<=b)return e.copy(r);let w=g*d-h*b;if(w<=0&&d>=0&&b<=0)return c=d/(d-b),e.copy(n).addScaledVector(ws,c);let x=f*b-g*_;if(x<=0&&_-f>=0&&g-b>=0)return Ju.subVectors(r,s),c=(_-f)/(_-f+(g-b)),e.copy(s).addScaledVector(Ju,c);let y=1/(x+w+m);return a=w*y,c=m*y,e.copy(n).addScaledVector(bs,a).addScaledVector(ws,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ti=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,c=r.count;a<c;a++)t.isMesh===!0?t.getVertexPosition(a,Di):Di.fromBufferAttribute(r,a),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(t.matrixWorld),this.union(Xo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),Yo.subVectors(this.max,wr),Ss.subVectors(t.a,wr),Ms.subVectors(t.b,wr),Ts.subVectors(t.c,wr),Tn.subVectors(Ms,Ss),En.subVectors(Ts,Ms),Zn.subVectors(Ss,Ts);let e=[0,-Tn.z,Tn.y,0,-En.z,En.y,0,-Zn.z,Zn.y,Tn.z,0,-Tn.x,En.z,0,-En.x,Zn.z,0,-Zn.x,-Tn.y,Tn.x,0,-En.y,En.x,0,-Zn.y,Zn.x,0];return!Bc(e,Ss,Ms,Ts,Yo)||(e=[1,0,0,0,1,0,0,0,1],!Bc(e,Ss,Ms,Ts,Yo))?!1:($o.crossVectors(Tn,En),e=[$o.x,$o.y,$o.z],Bc(e,Ss,Ms,Ts,Yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},hn=[new k,new k,new k,new k,new k,new k,new k,new k],Di=new k,Xo=new Ti,Ss=new k,Ms=new k,Ts=new k,Tn=new k,En=new k,Zn=new k,wr=new k,Yo=new k,$o=new k,Jn=new k;function Bc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Jn.fromArray(i,r);let c=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),h=t.dot(Jn),d=e.dot(Jn),f=n.dot(Jn);if(Math.max(-Math.max(h,d,f),Math.min(h,d,f))>c)return!1}return!0}var Be=new k,qo=new mt,bm=0,Ye=class extends Oi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rh,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qo.fromBufferAttribute(this,e),qo.applyMatrix3(t),this.setXY(e,qo.x,qo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var zr=class extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vr=class extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ye=class extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},wm=new Ti,Sr=new k,Uc=new k,Bi=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);let e=Sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(Uc)),this.expandByPoint(Sr.copy(t.center).sub(Uc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Sm=0,Pi=new _e,kc=new $e,Es=new k,Si=new Ti,Mr=new Ti,Xe=new k,Re=class i extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($p(t)?Vr:zr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,e,n){return Pi.makeTranslation(t,e,n),this.applyMatrix4(Pi),this}scale(t,e,n){return Pi.makeScale(t,e,n),this.applyMatrix4(Pi),this}lookAt(t){return kc.lookAt(t),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Si.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let c=e[r];Mr.setFromBufferAttribute(c),this.morphTargetsRelative?(Xe.addVectors(Si.min,Mr.min),Si.expandByPoint(Xe),Xe.addVectors(Si.max,Mr.max),Si.expandByPoint(Xe)):(Si.expandByPoint(Mr.min),Si.expandByPoint(Mr.max))}Si.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let c=e[r],h=this.morphTargetsRelative;for(let d=0,f=c.count;d<f;d++)Xe.fromBufferAttribute(c,d),h&&(Es.fromBufferAttribute(t,d),Xe.add(Es)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let c=[],h=[];for(let E=0;E<n.count;E++)c[E]=new k,h[E]=new k;let d=new k,f=new k,_=new k,m=new mt,g=new mt,b=new mt,w=new k,x=new k;function y(E,D,U){d.fromBufferAttribute(n,E),f.fromBufferAttribute(n,D),_.fromBufferAttribute(n,U),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,D),b.fromBufferAttribute(r,U),f.sub(d),_.sub(d),g.sub(m),b.sub(m);let F=1/(g.x*b.y-b.x*g.y);isFinite(F)&&(w.copy(f).multiplyScalar(b.y).addScaledVector(_,-g.y).multiplyScalar(F),x.copy(_).multiplyScalar(g.x).addScaledVector(f,-b.x).multiplyScalar(F),c[E].add(w),c[D].add(w),c[U].add(w),h[E].add(x),h[D].add(x),h[U].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let E=0,D=A.length;E<D;++E){let U=A[E],F=U.start,V=U.count;for(let H=F,B=F+V;H<B;H+=3)y(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let C=new k,S=new k,I=new k,R=new k;function O(E){I.fromBufferAttribute(s,E),R.copy(I);let D=c[E];C.copy(D),C.sub(I.multiplyScalar(I.dot(D))).normalize(),S.crossVectors(R,D);let F=S.dot(h[E])<0?-1:1;a.setXYZW(E,C.x,C.y,C.z,F)}for(let E=0,D=A.length;E<D;++E){let U=A[E],F=U.start,V=U.count;for(let H=F,B=F+V;H<B;H+=3)O(t.getX(H+0)),O(t.getX(H+1)),O(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);let s=new k,r=new k,a=new k,c=new k,h=new k,d=new k,f=new k,_=new k;if(t)for(let m=0,g=t.count;m<g;m+=3){let b=t.getX(m+0),w=t.getX(m+1),x=t.getX(m+2);s.fromBufferAttribute(e,b),r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,x),f.subVectors(a,r),_.subVectors(s,r),f.cross(_),c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,x),c.add(f),h.add(f),d.add(f),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(w,h.x,h.y,h.z),n.setXYZ(x,d.x,d.y,d.z)}else for(let m=0,g=e.count;m<g;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),a.fromBufferAttribute(e,m+2),f.subVectors(a,r),_.subVectors(s,r),f.cross(_),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(c,h){let d=c.array,f=c.itemSize,_=c.normalized,m=new d.constructor(h.length*f),g=0,b=0;for(let w=0,x=h.length;w<x;w++){c.isInterleavedBufferAttribute?g=h[w]*c.data.stride+c.offset:g=h[w]*f;for(let y=0;y<f;y++)m[b++]=d[g++]}return new Ye(m,f,_)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let c in s){let h=s[c],d=t(h,n);e.setAttribute(c,d)}let r=this.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,_=d.length;f<_;f++){let m=d[f],g=t(m,n);h.push(g)}e.morphAttributes[c]=h}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let d in h)h[d]!==void 0&&(t[d]=h[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let d=n[h];t.data.attributes[h]=d.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let d=this.morphAttributes[h],f=[];for(let _=0,m=d.length;_<m;_++){let g=d[_];f.push(g.toJSON(t.data))}f.length>0&&(s[h]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let d in s){let f=s[d];this.setAttribute(d,f.clone(e))}let r=t.morphAttributes;for(let d in r){let f=[],_=r[d];for(let m=0,g=_.length;m<g;m++)f.push(_[m].clone(e));this.morphAttributes[d]=f}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let d=0,f=a.length;d<f;d++){let _=a[d];this.addGroup(_.start,_.count,_.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xs=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rh,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},li=new k,mi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)li.fromBufferAttribute(this,e),li.applyMatrix4(t),this.setXYZ(e,li.x,li.y,li.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)li.fromBufferAttribute(this,e),li.applyNormalMatrix(t),this.setXYZ(e,li.x,li.y,li.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)li.fromBufferAttribute(this,e),li.transformDirection(t),this.setXYZ(e,li.x,li.y,li.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Or("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Or("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zc=new k,Mm=new k,Tm=new ce,ci=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=zc.subVectors(n,e).cross(Mm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(zc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Tm.getNormalMatrix(t),s=this.coplanarPoint(zc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Em=0,Ki=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=er,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ie(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let c in r){let h=r[c];delete h.metadata,a.push(h)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new he().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ci().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ys=class extends Ki{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},As,Tr=new k,Cs=new k,Ps=new k,Is=new mt,Er=new mt,rf=new _e,Zo=new k,Ar=new k,Jo=new k,Ku=new mt,Vc=new mt,ju=new mt,Gr=class extends $e{constructor(t=new Ys){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new Re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xs(e,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new mi(n,3,0,!1)),As.setAttribute("uv",new mi(n,2,3,!1))}this.geometry=As,this.material=t,this.center=new mt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),rf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Ps.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ko(Zo.set(-.5,-.5,0),Ps,a,Cs,s,r),Ko(Ar.set(.5,-.5,0),Ps,a,Cs,s,r),Ko(Jo.set(.5,.5,0),Ps,a,Cs,s,r),Ku.set(0,0),Vc.set(1,0),ju.set(1,1);let c=t.ray.intersectTriangle(Zo,Ar,Jo,!1,Tr);if(c===null&&(Ko(Ar.set(-.5,.5,0),Ps,a,Cs,s,r),Vc.set(0,1),c=t.ray.intersectTriangle(Zo,Jo,Ar,!1,Tr),c===null))return;let h=t.ray.origin.distanceTo(Tr);h<t.near||h>t.far||e.push({distance:h,point:Tr.clone(),uv:Yi.getInterpolation(Tr,Zo,Ar,Jo,Ku,Vc,ju,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ko(i,t,e,n,s,r){Is.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Er.x=r*Is.x-s*Is.y,Er.y=s*Is.x+r*Is.y):Er.copy(Is),i.copy(t),i.x+=Er.x,i.y+=Er.y,i.applyMatrix4(rf)}var un=new k,Gc=new k,jo=new k,Qo=new k,Pn=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Gc.copy(t).add(e).multiplyScalar(.5),jo.copy(e).sub(t).normalize(),Qo.copy(this.origin).sub(Gc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(jo),c=Qo.dot(this.direction),h=-Qo.dot(jo),d=Qo.lengthSq(),f=Math.abs(1-a*a),_,m,g,b;if(f>0)if(_=a*h-c,m=a*c-h,b=r*f,_>=0)if(m>=-b)if(m<=b){let w=1/f;_*=w,m*=w,g=_*(_+a*m+2*c)+m*(a*_+m+2*h)+d}else m=r,_=Math.max(0,-(a*m+c)),g=-_*_+m*(m+2*h)+d;else m=-r,_=Math.max(0,-(a*m+c)),g=-_*_+m*(m+2*h)+d;else m<=-b?(_=Math.max(0,-(-a*r+c)),m=_>0?-r:Math.min(Math.max(-r,-h),r),g=-_*_+m*(m+2*h)+d):m<=b?(_=0,m=Math.min(Math.max(-r,-h),r),g=m*(m+2*h)+d):(_=Math.max(0,-(a*r+c)),m=_>0?r:Math.min(Math.max(-r,-h),r),g=-_*_+m*(m+2*h)+d);else m=a>0?-r:r,_=Math.max(0,-(a*m+c)),g=-_*_+m*(m+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(Gc).addScaledVector(jo,m),g}intersectSphere(t,e){if(t.radius<0)return null;un.subVectors(t.center,this.origin);let n=un.dot(this.direction),s=un.dot(un)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),c=n-a,h=n+a;return h<0?null:c<0?this.at(h,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,c,h,d=1/this.direction.x,f=1/this.direction.y,_=1/this.direction.z,m=this.origin;return d>=0?(n=(t.min.x-m.x)*d,s=(t.max.x-m.x)*d):(n=(t.max.x-m.x)*d,s=(t.min.x-m.x)*d),f>=0?(r=(t.min.y-m.y)*f,a=(t.max.y-m.y)*f):(r=(t.max.y-m.y)*f,a=(t.min.y-m.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),_>=0?(c=(t.min.z-m.z)*_,h=(t.max.z-m.z)*_):(c=(t.max.z-m.z)*_,h=(t.min.z-m.z)*_),n>h||c>s)||((c>n||n!==n)&&(n=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,c=this.direction,h=c.x,d=c.y,f=c.z,_=t.x-a.x,m=t.y-a.y,g=t.z-a.z,b=e.x-a.x,w=e.y-a.y,x=e.z-a.z,y=n.x-a.x,A=n.y-a.y,C=n.z-a.z,S=Math.abs(h),I=Math.abs(d),R=Math.abs(f),O,E,D,U,F,V,H,B,X,K,J,at;if(S>=I&&S>=R?(D=h,V=_,X=b,at=y,h>=0?(O=d,E=f,U=m,F=g,H=w,B=x,K=A,J=C):(O=f,E=d,U=g,F=m,H=x,B=w,K=C,J=A)):I>=R?(D=d,V=m,X=w,at=A,d>=0?(O=f,E=h,U=g,F=_,H=x,B=b,K=C,J=y):(O=h,E=f,U=_,F=g,H=b,B=x,K=y,J=C)):(D=f,V=g,X=x,at=C,f>=0?(O=h,E=d,U=_,F=m,H=b,B=w,K=y,J=A):(O=d,E=h,U=m,F=_,H=w,B=b,K=A,J=y)),D===0)return null;let tt=O/D,nt=E/D,st=1/D,Tt=U-tt*V,Et=F-nt*V,Zt=H-tt*X,re=B-nt*X,xe=K-tt*at,lt=J-nt*at,ft=xe*re-lt*Zt,Ft=Tt*lt-Et*xe,te=Zt*Et-re*Tt;if(s){if(ft<0||Ft<0||te<0)return null}else if((ft<0||Ft<0||te<0)&&(ft>0||Ft>0||te>0))return null;let Nt=ft+Ft+te;if(Nt===0)return null;let ne=st*(ft*V+Ft*X+te*at);return(Nt>0?ne<0:ne>0)?null:this.at(ne/Nt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class extends Ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Qu=new _e,Kn=new Pn,ta=new Bi,td=new k,ea=new k,ia=new k,na=new k,Hc=new k,sa=new k,ed=new k,ra=new k,De=class extends $e{constructor(t=new Re,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let c=this.morphTargetInfluences;if(r&&c){sa.set(0,0,0);for(let h=0,d=r.length;h<d;h++){let f=c[h],_=r[h];f!==0&&(Hc.fromBufferAttribute(_,t),a?sa.addScaledVector(Hc,f):sa.addScaledVector(Hc.sub(e),f))}e.add(sa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(r),Kn.copy(t.ray).recast(t.near),!(ta.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(ta,td)===null||Kn.origin.distanceToSquared(td)>(t.far-t.near)**2))&&(Qu.copy(r).invert(),Kn.copy(t.ray).applyMatrix4(Qu),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,c=r.index,h=r.attributes.position,d=r.attributes.uv,f=r.attributes.uv1,_=r.attributes.normal,m=r.groups,g=r.drawRange;if(c!==null)if(Array.isArray(a))for(let b=0,w=m.length;b<w;b++){let x=m[b],y=a[x.materialIndex],A=Math.max(x.start,g.start),C=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let S=A,I=C;S<I;S+=3){let R=c.getX(S),O=c.getX(S+1),E=c.getX(S+2);s=oa(this,y,t,n,d,f,_,R,O,E),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let b=Math.max(0,g.start),w=Math.min(c.count,g.start+g.count);for(let x=b,y=w;x<y;x+=3){let A=c.getX(x),C=c.getX(x+1),S=c.getX(x+2);s=oa(this,a,t,n,d,f,_,A,C,S),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let b=0,w=m.length;b<w;b++){let x=m[b],y=a[x.materialIndex],A=Math.max(x.start,g.start),C=Math.min(h.count,Math.min(x.start+x.count,g.start+g.count));for(let S=A,I=C;S<I;S+=3){let R=S,O=S+1,E=S+2;s=oa(this,y,t,n,d,f,_,R,O,E),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let b=Math.max(0,g.start),w=Math.min(h.count,g.start+g.count);for(let x=b,y=w;x<y;x+=3){let A=x,C=x+1,S=x+2;s=oa(this,a,t,n,d,f,_,A,C,S),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function Am(i,t,e,n,s,r,a,c){let h;if(t.side===Ke?h=n.intersectTriangle(a,r,s,!0,c):h=n.intersectTriangle(s,r,a,t.side===kn,c),h===null)return null;ra.copy(c),ra.applyMatrix4(i.matrixWorld);let d=e.ray.origin.distanceTo(ra);return d<e.near||d>e.far?null:{distance:d,point:ra.clone(),object:i}}function oa(i,t,e,n,s,r,a,c,h,d){i.getVertexPosition(c,ea),i.getVertexPosition(h,ia),i.getVertexPosition(d,na);let f=Am(i,t,e,n,ea,ia,na,ed);if(f){let _=new k;Yi.getBarycoord(ed,ea,ia,na,_),s&&(f.uv=Yi.getInterpolatedAttribute(s,c,h,d,_,new mt)),r&&(f.uv1=Yi.getInterpolatedAttribute(r,c,h,d,_,new mt)),a&&(f.normal=Yi.getInterpolatedAttribute(a,c,h,d,_,new k),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let m={a:c,b:h,c:d,normal:new k,materialIndex:0};Yi.getNormal(ea,ia,na,m.normal),f.face=m,f.barycoord=_}return f}var $s=class extends Ze{constructor(t=null,e=1,n=1,s,r,a,c,h,d=Ue,f=Ue,_,m){super(null,a,c,h,d,f,s,r,_,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jn=new Bi,Cm=new mt(.5,.5),aa=new k,qs=class{constructor(t=new ci,e=new ci,n=new ci,s=new ci,r=new ci,a=new ci){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(s),c[4].copy(r),c[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ni,n=!1){let s=this.planes,r=t.elements,a=r[0],c=r[1],h=r[2],d=r[3],f=r[4],_=r[5],m=r[6],g=r[7],b=r[8],w=r[9],x=r[10],y=r[11],A=r[12],C=r[13],S=r[14],I=r[15];if(s[0].setComponents(d-a,g-f,y-b,I-A).normalize(),s[1].setComponents(d+a,g+f,y+b,I+A).normalize(),s[2].setComponents(d+c,g+_,y+w,I+C).normalize(),s[3].setComponents(d-c,g-_,y-w,I-C).normalize(),n)s[4].setComponents(h,m,x,S).normalize(),s[5].setComponents(d-h,g-m,y-x,I-S).normalize();else if(s[4].setComponents(d-h,g-m,y-x,I-S).normalize(),e===Ni)s[5].setComponents(d+h,g+m,y+x,I+S).normalize();else if(e===ks)s[5].setComponents(h,m,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){jn.center.set(0,0,0);let e=Cm.distanceTo(t.center);return jn.radius=.7071067811865476+e,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(aa.x=s.normal.x>0?t.max.x:t.min.x,aa.y=s.normal.y>0?t.max.y:t.min.y,aa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(aa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var es=class extends Ki{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},id=new _e,eh=new Pn,la=new Bi,ca=new k,Zs=class extends $e{constructor(t=new Re,e=new es){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=r,t.ray.intersectsSphere(la)===!1)return;id.copy(s).invert(),eh.copy(t.ray).applyMatrix4(id);let c=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=n.index,_=n.attributes.position;if(d!==null){let m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=m,w=g;b<w;b++){let x=d.getX(b);ca.fromBufferAttribute(_,x),nd(ca,x,h,s,t,e,this)}}else{let m=Math.max(0,a.start),g=Math.min(_.count,a.start+a.count);for(let b=m,w=g;b<w;b++)ca.fromBufferAttribute(_,b),nd(ca,b,h,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}};function nd(i,t,e,n,s,r,a){let c=eh.distanceSqToPoint(i);if(c<e){let h=new k;eh.closestPointToPoint(i,h),h.applyMatrix4(n);let d=s.ray.origin.distanceTo(h);if(d<s.near||d>s.far)return;r.push({distance:d,distanceToRay:Math.sqrt(c),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Hr=class extends Ze{constructor(t=[],e=zn,n,s,r,a,c,h,d,f){super(t,e,n,s,r,a,c,h,d,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},In=class extends Ze{constructor(t,e,n,s,r,a,c,h,d){super(t,e,n,s,r,a,c,h,d),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Rn=class extends Ze{constructor(t,e,n=ki,s,r,a,c=Ue,h=Ue,d,f=Ji,_=1){if(f!==Ji&&f!==Gn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:_};super(m,s,r,a,c,h,f,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},La=class extends Rn{constructor(t,e=ki,n=zn,s,r,a=Ue,c=Ue,h,d=Ji){let f={width:t,height:t,depth:1},_=[f,f,f,f,f,f];super(t,t,e,n,s,r,a,c,h,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Wr=class extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Je=class i extends Re{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let c=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],d=[],f=[],_=[],m=0,g=0;b("z","y","x",-1,-1,n,e,t,a,r,0),b("z","y","x",1,-1,n,e,-t,a,r,1),b("x","z","y",1,1,t,n,e,s,a,2),b("x","z","y",1,-1,t,n,-e,s,a,3),b("x","y","z",1,-1,t,e,n,s,r,4),b("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(f,3)),this.setAttribute("uv",new ye(_,2));function b(w,x,y,A,C,S,I,R,O,E,D){let U=S/O,F=I/E,V=S/2,H=I/2,B=R/2,X=O+1,K=E+1,J=0,at=0,tt=new k;for(let nt=0;nt<K;nt++){let st=nt*F-H;for(let Tt=0;Tt<X;Tt++){let Et=Tt*U-V;tt[w]=Et*A,tt[x]=st*C,tt[y]=B,d.push(tt.x,tt.y,tt.z),tt[w]=0,tt[x]=0,tt[y]=R>0?1:-1,f.push(tt.x,tt.y,tt.z),_.push(Tt/O),_.push(1-nt/E),J+=1}}for(let nt=0;nt<E;nt++)for(let st=0;st<O;st++){let Tt=m+st+X*nt,Et=m+st+X*(nt+1),Zt=m+(st+1)+X*(nt+1),re=m+(st+1)+X*nt;h.push(Tt,Et,re),h.push(Et,Zt,re),at+=6}c.addGroup(g,at,D),g+=at,m+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Xr=class i extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],c=[],h=[],d=new k,f=new mt;a.push(0,0,0),c.push(0,0,1),h.push(.5,.5);for(let _=0,m=3;_<=e;_++,m+=3){let g=n+_/e*s;d.x=t*Math.cos(g),d.y=t*Math.sin(g),a.push(d.x,d.y,d.z),c.push(0,0,1),f.x=(a[m]/t+1)/2,f.y=(a[m+1]/t+1)/2,h.push(f.x,f.y)}for(let _=1;_<=e;_++)r.push(_,_+1,0);this.setIndex(r),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fn=class i extends Re{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:c,thetaLength:h};let d=this;s=Math.floor(s),r=Math.floor(r);let f=[],_=[],m=[],g=[],b=0,w=[],x=n/2,y=0;A(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(f),this.setAttribute("position",new ye(_,3)),this.setAttribute("normal",new ye(m,3)),this.setAttribute("uv",new ye(g,2));function A(){let S=new k,I=new k,R=0,O=(e-t)/n;for(let E=0;E<=r;E++){let D=[],U=E/r,F=U*(e-t)+t;for(let V=0;V<=s;V++){let H=V/s,B=H*h+c,X=Math.sin(B),K=Math.cos(B);I.x=F*X,I.y=-U*n+x,I.z=F*K,_.push(I.x,I.y,I.z),S.set(X,O,K).normalize(),m.push(S.x,S.y,S.z),g.push(H,1-U),D.push(b++)}w.push(D)}for(let E=0;E<s;E++)for(let D=0;D<r;D++){let U=w[D][E],F=w[D+1][E],V=w[D+1][E+1],H=w[D][E+1];(t>0||D!==0)&&(f.push(U,F,H),R+=3),(e>0||D!==r-1)&&(f.push(F,V,H),R+=3)}d.addGroup(y,R,0),y+=R}function C(S){let I=b,R=new mt,O=new k,E=0,D=S===!0?t:e,U=S===!0?1:-1;for(let V=1;V<=s;V++)_.push(0,x*U,0),m.push(0,U,0),g.push(.5,.5),b++;let F=b;for(let V=0;V<=s;V++){let B=V/s*h+c,X=Math.cos(B),K=Math.sin(B);O.x=D*K,O.y=x*U,O.z=D*X,_.push(O.x,O.y,O.z),m.push(0,U,0),R.x=X*.5+.5,R.y=K*.5*U+.5,g.push(R.x,R.y),b++}for(let V=0;V<s;V++){let H=I+V,B=F+V;S===!0?f.push(B,B+1,H):f.push(B+1,B,H),E+=3}d.addGroup(y,E,S===!0?1:2),y+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ha=new k,ua=new k,Wc=new k,da=new Yi,Yr=class extends Re{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Os*e),a=t.getIndex(),c=t.getAttribute("position"),h=a?a.count:c.count,d=[0,0,0],f=["a","b","c"],_=new Array(3),m={},g=[];for(let b=0;b<h;b+=3){a?(d[0]=a.getX(b),d[1]=a.getX(b+1),d[2]=a.getX(b+2)):(d[0]=b,d[1]=b+1,d[2]=b+2);let{a:w,b:x,c:y}=da;if(w.fromBufferAttribute(c,d[0]),x.fromBufferAttribute(c,d[1]),y.fromBufferAttribute(c,d[2]),da.getNormal(Wc),_[0]=`${Math.round(w.x*s)},${Math.round(w.y*s)},${Math.round(w.z*s)}`,_[1]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,_[2]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let A=0;A<3;A++){let C=(A+1)%3,S=_[A],I=_[C],R=da[f[A]],O=da[f[C]],E=`${S}_${I}`,D=`${I}_${S}`;D in m&&m[D]?(Wc.dot(m[D].normal)<=r&&(g.push(R.x,R.y,R.z),g.push(O.x,O.y,O.z)),m[D]=null):E in m||(m[E]={index0:d[A],index1:d[C],normal:Wc.clone()})}}for(let b in m)if(m[b]){let{index0:w,index1:x}=m[b];ha.fromBufferAttribute(c,w),ua.fromBufferAttribute(c,x),g.push(ha.x,ha.y,ha.z),g.push(ua.x,ua.y,ua.z)}this.setAttribute("position",new ye(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ie("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let c=0,h=r-1,d;for(;c<=h;)if(s=Math.floor(c+(h-c)/2),d=n[s]-a,d<0)c=s+1;else if(d>0)h=s-1;else{h=s;break}if(s=h,n[s]===a)return s/(r-1);let f=n[s],m=n[s+1]-f,g=(a-f)/m;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),c=this.getPoint(r),h=e||(a.isVector2?new mt:new k);return h.copy(c).sub(a).normalize(),h}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new k,s=[],r=[],a=[],c=new k,h=new _e;for(let g=0;g<=t;g++){let b=g/t;s[g]=this.getTangentAt(b,new k)}r[0]=new k,a[0]=new k;let d=Number.MAX_VALUE,f=Math.abs(s[0].x),_=Math.abs(s[0].y),m=Math.abs(s[0].z);f<=d&&(d=f,n.set(1,0,0)),_<=d&&(d=_,n.set(0,1,0)),m<=d&&n.set(0,0,1),c.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],c),a[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),a[g]=a[g-1].clone(),c.crossVectors(s[g-1],s[g]),c.length()>Number.EPSILON){c.normalize();let b=Math.acos(ae(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(h.makeRotationAxis(c,b))}a[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(ae(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(c.crossVectors(r[0],r[t]))>0&&(g=-g);for(let b=1;b<=t;b++)r[b].applyMatrix4(h.makeRotationAxis(s[b],g*b)),a[b].crossVectors(s[b],r[b])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Js=class extends Ei{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,c=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=c,this.aRotation=h}getPoint(t,e=new mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let c=this.aStartAngle+t*r,h=this.aX+this.xRadius*Math.cos(c),d=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){let f=Math.cos(this.aRotation),_=Math.sin(this.aRotation),m=h-this.aX,g=d-this.aY;h=m*f-g*_+this.aX,d=m*_+g*f+this.aY}return n.set(h,d)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Da=class extends Js{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Fh(){let i=0,t=0,e=0,n=0;function s(r,a,c,h){i=r,t=c,e=-3*r+3*a-2*c-h,n=2*r-2*a+c+h}return{initCatmullRom:function(r,a,c,h,d){s(a,c,d*(c-r),d*(h-a))},initNonuniformCatmullRom:function(r,a,c,h,d,f,_){let m=(a-r)/d-(c-r)/(d+f)+(c-a)/f,g=(c-a)/f-(h-a)/(f+_)+(h-c)/_;m*=f,g*=f,s(a,c,m,g)},calc:function(r){let a=r*r,c=a*r;return i+t*r+e*a+n*c}}}var sd=new k,rd=new k,Xc=new Fh,Yc=new Fh,$c=new Fh,Fa=class extends Ei{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/r)+1)*r:h===0&&c===r-1&&(c=r-2,h=1);let d,f;this.closed||c>0?d=s[(c-1)%r]:(rd.subVectors(s[0],s[1]).add(s[0]),d=rd);let _=s[c%r],m=s[(c+1)%r];if(this.closed||c+2<r?f=s[(c+2)%r]:(sd.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=sd),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,b=Math.pow(d.distanceToSquared(_),g),w=Math.pow(_.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(f),g);w<1e-4&&(w=1),b<1e-4&&(b=w),x<1e-4&&(x=w),Xc.initNonuniformCatmullRom(d.x,_.x,m.x,f.x,b,w,x),Yc.initNonuniformCatmullRom(d.y,_.y,m.y,f.y,b,w,x),$c.initNonuniformCatmullRom(d.z,_.z,m.z,f.z,b,w,x)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(d.x,_.x,m.x,f.x,this.tension),Yc.initCatmullRom(d.y,_.y,m.y,f.y,this.tension),$c.initCatmullRom(d.z,_.z,m.z,f.z,this.tension));return n.set(Xc.calc(h),Yc.calc(h),$c.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function od(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,c=i*i,h=i*c;return(2*e-2*n+r+a)*h+(-3*e+3*n-2*r-a)*c+r*i+e}function Pm(i,t){let e=1-i;return e*e*t}function Im(i,t){return 2*(1-i)*i*t}function Rm(i,t){return i*i*t}function Ir(i,t,e,n){return Pm(i,t)+Im(i,e)+Rm(i,n)}function Lm(i,t){let e=1-i;return e*e*e*t}function Dm(i,t){let e=1-i;return 3*e*e*i*t}function Fm(i,t){return 3*(1-i)*i*i*t}function Nm(i,t){return i*i*i*t}function Rr(i,t,e,n,s){return Lm(i,t)+Dm(i,e)+Fm(i,n)+Nm(i,s)}var $r=class extends Ei{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,a=this.v2,c=this.v3;return n.set(Rr(t,s.x,r.x,a.x,c.x),Rr(t,s.y,r.y,a.y,c.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Na=class extends Ei{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,a=this.v2,c=this.v3;return n.set(Rr(t,s.x,r.x,a.x,c.x),Rr(t,s.y,r.y,a.y,c.y),Rr(t,s.z,r.z,a.z,c.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qr=class extends Ei{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oa=class extends Ei{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zr=class extends Ei{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ir(t,s.x,r.x,a.x),Ir(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends Ei{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ir(t,s.x,r.x,a.x),Ir(t,s.y,r.y,a.y),Ir(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends Ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),c=r-a,h=s[a===0?a:a-1],d=s[a],f=s[a>s.length-2?s.length-1:a+1],_=s[a>s.length-3?s.length-1:a+2];return n.set(od(c,h.x,d.x,f.x,_.x),od(c,h.y,d.y,f.y,_.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new mt().fromArray(s))}return this}},ih=Object.freeze({__proto__:null,ArcCurve:Da,CatmullRomCurve3:Fa,CubicBezierCurve:$r,CubicBezierCurve3:Na,EllipseCurve:Js,LineCurve:qr,LineCurve3:Oa,QuadraticBezierCurve:Zr,QuadraticBezierCurve3:Ba,SplineCurve:Jr}),Ua=class extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ih[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,c=this.curves[r],h=c.getLength(),d=h===0?0:1-a/h;return c.getPointAt(d,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],c=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,h=a.getPoints(c);for(let d=0;d<h.length;d++){let f=h[d];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ih[s.type]().fromJSON(s))}return this}},is=class extends Ua{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new qr(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Zr(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let c=new $r(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(r,a));return this.curves.push(c),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Jr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+c,e+h,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,c,h){let d=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+d,e+f,n,s,r,a,c,h),this}absellipse(t,e,n,s,r,a,c,h){let d=new Js(t,e,n,s,r,a,c,h);if(this.curves.length>0){let _=d.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(d);let f=d.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},pn=class extends is{constructor(t){super(t),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new is().fromJSON(s))}return this}};function Om(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=of(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let c,h,d;if(n&&(r=Vm(i,t,r,e)),i.length>80*e){c=i[0],h=i[1];let f=c,_=h;for(let m=e;m<s;m+=e){let g=i[m],b=i[m+1];g<c&&(c=g),b<h&&(h=b),g>f&&(f=g),b>_&&(_=b)}d=Math.max(f-c,_-h),d=d!==0?32767/d:0}return Kr(r,a,e,c,h,d,0),a}function of(i,t,e,n,s){let r;if(s===jm(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=ad(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ad(a/n|0,i[a],i[a+1],r);return r&&Ks(r,r.next)&&(Qr(r),r=r.next),r}function ns(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ks(e,e.next)||Ne(e.prev,e,e.next)===0)){if(Qr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Kr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ym(i,n,s,r);let c=i;for(;i.prev!==i.next;){let h=i.prev,d=i.next;if(r?Um(i,n,s,r):Bm(i)){t.push(h.i,i.i,d.i),Qr(i),i=d.next,c=d.next;continue}if(i=d,i===c){a?a===1?(i=km(ns(i),t),Kr(i,t,e,n,s,r,2)):a===2&&zm(i,t,e,n,s,r):Kr(ns(i),t,e,n,s,r,1);break}}}function Bm(i){let t=i.prev,e=i,n=i.next;if(Ne(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,c=t.y,h=e.y,d=n.y,f=Math.min(s,r,a),_=Math.min(c,h,d),m=Math.max(s,r,a),g=Math.max(c,h,d),b=n.next;for(;b!==t;){if(b.x>=f&&b.x<=m&&b.y>=_&&b.y<=g&&Cr(s,c,r,h,a,d,b.x,b.y)&&Ne(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function Um(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ne(s,r,a)>=0)return!1;let c=s.x,h=r.x,d=a.x,f=s.y,_=r.y,m=a.y,g=Math.min(c,h,d),b=Math.min(f,_,m),w=Math.max(c,h,d),x=Math.max(f,_,m),y=nh(g,b,t,e,n),A=nh(w,x,t,e,n),C=i.prevZ,S=i.nextZ;for(;C&&C.z>=y&&S&&S.z<=A;){if(C.x>=g&&C.x<=w&&C.y>=b&&C.y<=x&&C!==s&&C!==a&&Cr(c,f,h,_,d,m,C.x,C.y)&&Ne(C.prev,C,C.next)>=0||(C=C.prevZ,S.x>=g&&S.x<=w&&S.y>=b&&S.y<=x&&S!==s&&S!==a&&Cr(c,f,h,_,d,m,S.x,S.y)&&Ne(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;C&&C.z>=y;){if(C.x>=g&&C.x<=w&&C.y>=b&&C.y<=x&&C!==s&&C!==a&&Cr(c,f,h,_,d,m,C.x,C.y)&&Ne(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;S&&S.z<=A;){if(S.x>=g&&S.x<=w&&S.y>=b&&S.y<=x&&S!==s&&S!==a&&Cr(c,f,h,_,d,m,S.x,S.y)&&Ne(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function km(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ks(n,s)&&lf(n,e,e.next,s)&&jr(n,s)&&jr(s,n)&&(t.push(n.i,e.i,s.i),Qr(e),Qr(e.next),e=i=s),e=e.next}while(e!==i);return ns(e)}function zm(i,t,e,n,s,r){let a=i;do{let c=a.next.next;for(;c!==a.prev;){if(a.i!==c.i&&Zm(a,c)){let h=cf(a,c);a=ns(a,a.next),h=ns(h,h.next),Kr(a,t,e,n,s,r,0),Kr(h,t,e,n,s,r,0);return}c=c.next}a=a.next}while(a!==i)}function Vm(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let c=t[r]*n,h=r<a-1?t[r+1]*n:i.length,d=of(i,c,h,n,!1);d===d.next&&(d.steiner=!0),s.push(qm(d))}s.sort(Gm);for(let r=0;r<s.length;r++)e=Hm(s[r],e);return e}function Gm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Hm(i,t){let e=Wm(i,t);if(!e)return t;let n=cf(e,i);return ns(n,n.next),ns(e,e.next)}function Wm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ks(i,e))return e;do{if(Ks(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let _=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(_<=n&&_>r&&(r=_,a=e.x<e.next.x?e:e.next,_===n))return a}e=e.next}while(e!==t);if(!a)return null;let c=a,h=a.x,d=a.y,f=1/0;e=a;do{if(n>=e.x&&e.x>=h&&n!==e.x&&af(s<d?n:r,s,h,d,s<d?r:n,s,e.x,e.y)){let _=Math.abs(s-e.y)/(n-e.x);jr(e,i)&&(_<f||_===f&&(e.x>a.x||e.x===a.x&&Xm(a,e)))&&(a=e,f=_)}e=e.next}while(e!==c);return a}function Xm(i,t){return Ne(i.prev,i,t.prev)<0&&Ne(t.next,i,i.next)<0}function Ym(i,t,e,n){let s=i;do s.z===0&&(s.z=nh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$m(s)}function $m(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,c=0;for(let d=0;d<e&&(c++,a=a.nextZ,!!a);d++);let h=e;for(;c>0||h>0&&a;)c!==0&&(h===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,c--):(s=a,a=a.nextZ,h--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function nh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function qm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function af(i,t,e,n,s,r,a,c){return(s-a)*(t-c)>=(i-a)*(r-c)&&(i-a)*(n-c)>=(e-a)*(t-c)&&(e-a)*(r-c)>=(s-a)*(n-c)}function Cr(i,t,e,n,s,r,a,c){return!(i===a&&t===c)&&af(i,t,e,n,s,r,a,c)}function Zm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jm(i,t)&&(jr(i,t)&&jr(t,i)&&Km(i,t)&&(Ne(i.prev,i,t.prev)||Ne(i,t.prev,t))||Ks(i,t)&&Ne(i.prev,i,i.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ks(i,t){return i.x===t.x&&i.y===t.y}function lf(i,t,e,n){let s=pa(Ne(i,t,e)),r=pa(Ne(i,t,n)),a=pa(Ne(e,n,i)),c=pa(Ne(e,n,t));return!!(s!==r&&a!==c||s===0&&fa(i,e,t)||r===0&&fa(i,n,t)||a===0&&fa(e,i,n)||c===0&&fa(e,t,n))}function fa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function pa(i){return i>0?1:i<0?-1:0}function Jm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&lf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function jr(i,t){return Ne(i.prev,i,i.next)<0?Ne(i,t,i.next)>=0&&Ne(i,i.prev,t)>=0:Ne(i,t,i.prev)<0||Ne(i,i.next,t)<0}function Km(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function cf(i,t){let e=sh(i.i,i.x,i.y),n=sh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ad(i,t,e,n){let s=sh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var rh=class{static triangulate(t,e,n=2){return Om(t,e,n)}},qi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ld(t),cd(n,t);let a=t.length;e.forEach(ld);for(let h=0;h<e.length;h++)s.push(a),a+=e[h].length,cd(n,e[h]);let c=rh.triangulate(n,s);for(let h=0;h<c.length;h+=3)r.push(c.slice(h,h+3));return r}};function ld(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function cd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ss=class i extends Re{constructor(t=new pn([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let c=0,h=t.length;c<h;c++){let d=t[c];a(d)}this.setAttribute("position",new ye(s,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals();function a(c){let h=[],d=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,_=e.depth!==void 0?e.depth:1,m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,b=e.bevelSize!==void 0?e.bevelSize:g-.1,w=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,y=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:Qm,C,S=!1,I,R,O,E;if(y){C=y.getSpacedPoints(f),S=!0,m=!1;let pt=y.isCatmullRomCurve3?y.closed:!1;I=y.computeFrenetFrames(f,pt),R=new k,O=new k,E=new k}m||(x=0,g=0,b=0,w=0);let D=c.extractPoints(d),U=D.shape,F=D.holes;if(!qi.isClockWise(U)){U=U.reverse();for(let pt=0,xt=F.length;pt<xt;pt++){let yt=F[pt];qi.isClockWise(yt)&&(F[pt]=yt.reverse())}}function H(pt){let yt=10000000000000001e-36,vt=pt[0];for(let St=1;St<=pt.length;St++){let Qt=St%pt.length,Jt=pt[Qt],se=Jt.x-vt.x,oe=Jt.y-vt.y,W=se*se+oe*oe,ve=Math.max(Math.abs(Jt.x),Math.abs(Jt.y),Math.abs(vt.x),Math.abs(vt.y)),me=yt*ve*ve;if(W<=me){pt.splice(Qt,1),St--;continue}vt=Jt}}H(U),F.forEach(H);let B=F.length,X=U;for(let pt=0;pt<B;pt++){let xt=F[pt];U=U.concat(xt)}function K(pt,xt,yt){return xt||ee("ExtrudeGeometry: vec does not exist"),pt.clone().addScaledVector(xt,yt)}let J=U.length;function at(pt,xt,yt){let vt,St,Qt,Jt=pt.x-xt.x,se=pt.y-xt.y,oe=yt.x-pt.x,W=yt.y-pt.y,ve=Jt*Jt+se*se,me=Jt*W-se*oe;if(Math.abs(me)>Number.EPSILON){let N=Math.sqrt(ve),T=Math.sqrt(oe*oe+W*W),Z=xt.x-se/N,et=xt.y+Jt/N,rt=yt.x-W/T,bt=yt.y+oe/T,wt=((rt-Z)*W-(bt-et)*oe)/(Jt*W-se*oe);vt=Z+Jt*wt-pt.x,St=et+se*wt-pt.y;let ot=vt*vt+St*St;if(ot<=2)return new mt(vt,St);Qt=Math.sqrt(ot/2)}else{let N=!1;Jt>Number.EPSILON?oe>Number.EPSILON&&(N=!0):Jt<-Number.EPSILON?oe<-Number.EPSILON&&(N=!0):Math.sign(se)===Math.sign(W)&&(N=!0),N?(vt=-se,St=Jt,Qt=Math.sqrt(ve)):(vt=Jt,St=se,Qt=Math.sqrt(ve/2))}return new mt(vt/Qt,St/Qt)}let tt=[];for(let pt=0,xt=X.length,yt=xt-1,vt=pt+1;pt<xt;pt++,yt++,vt++)yt===xt&&(yt=0),vt===xt&&(vt=0),tt[pt]=at(X[pt],X[yt],X[vt]);let nt=[],st,Tt=tt.concat();for(let pt=0,xt=B;pt<xt;pt++){let yt=F[pt];st=[];for(let vt=0,St=yt.length,Qt=St-1,Jt=vt+1;vt<St;vt++,Qt++,Jt++)Qt===St&&(Qt=0),Jt===St&&(Jt=0),st[vt]=at(yt[vt],yt[Qt],yt[Jt]);nt.push(st),Tt=Tt.concat(st)}let Et;if(x===0)Et=qi.triangulateShape(X,F);else{let pt=[],xt=[];for(let yt=0;yt<x;yt++){let vt=yt/x,St=g*Math.cos(vt*Math.PI/2),Qt=b*Math.sin(vt*Math.PI/2)+w;for(let Jt=0,se=X.length;Jt<se;Jt++){let oe=K(X[Jt],tt[Jt],Qt);Ft(oe.x,oe.y,-St),vt===0&&pt.push(oe)}for(let Jt=0,se=B;Jt<se;Jt++){let oe=F[Jt];st=nt[Jt];let W=[];for(let ve=0,me=oe.length;ve<me;ve++){let N=K(oe[ve],st[ve],Qt);Ft(N.x,N.y,-St),vt===0&&W.push(N)}vt===0&&xt.push(W)}}Et=qi.triangulateShape(pt,xt)}let Zt=Et.length,re=b+w;for(let pt=0;pt<J;pt++){let xt=m?K(U[pt],Tt[pt],re):U[pt];S?(O.copy(I.normals[0]).multiplyScalar(xt.x),R.copy(I.binormals[0]).multiplyScalar(xt.y),E.copy(C[0]).add(O).add(R),Ft(E.x,E.y,E.z)):Ft(xt.x,xt.y,0)}for(let pt=1;pt<=f;pt++)for(let xt=0;xt<J;xt++){let yt=m?K(U[xt],Tt[xt],re):U[xt];S?(O.copy(I.normals[pt]).multiplyScalar(yt.x),R.copy(I.binormals[pt]).multiplyScalar(yt.y),E.copy(C[pt]).add(O).add(R),Ft(E.x,E.y,E.z)):Ft(yt.x,yt.y,_/f*pt)}for(let pt=x-1;pt>=0;pt--){let xt=pt/x,yt=g*Math.cos(xt*Math.PI/2),vt=b*Math.sin(xt*Math.PI/2)+w;for(let St=0,Qt=X.length;St<Qt;St++){let Jt=K(X[St],tt[St],vt);Ft(Jt.x,Jt.y,_+yt)}for(let St=0,Qt=F.length;St<Qt;St++){let Jt=F[St];st=nt[St];for(let se=0,oe=Jt.length;se<oe;se++){let W=K(Jt[se],st[se],vt);S?Ft(W.x,W.y+C[f-1].y,C[f-1].x+yt):Ft(W.x,W.y,_+yt)}}}xe(),lt();function xe(){let pt=s.length/3;if(m){let xt=0,yt=J*xt;for(let vt=0;vt<Zt;vt++){let St=Et[vt];te(St[2]+yt,St[1]+yt,St[0]+yt)}xt=f+x*2,yt=J*xt;for(let vt=0;vt<Zt;vt++){let St=Et[vt];te(St[0]+yt,St[1]+yt,St[2]+yt)}}else{for(let xt=0;xt<Zt;xt++){let yt=Et[xt];te(yt[2],yt[1],yt[0])}for(let xt=0;xt<Zt;xt++){let yt=Et[xt];te(yt[0]+J*f,yt[1]+J*f,yt[2]+J*f)}}n.addGroup(pt,s.length/3-pt,0)}function lt(){let pt=s.length/3,xt=0;ft(X,xt),xt+=X.length;for(let yt=0,vt=F.length;yt<vt;yt++){let St=F[yt];ft(St,xt),xt+=St.length}n.addGroup(pt,s.length/3-pt,1)}function ft(pt,xt){let yt=pt.length;for(;--yt>=0;){let vt=yt,St=yt-1;St<0&&(St=pt.length-1);for(let Qt=0,Jt=f+x*2;Qt<Jt;Qt++){let se=J*Qt,oe=J*(Qt+1),W=xt+vt+se,ve=xt+St+se,me=xt+St+oe,N=xt+vt+oe;Nt(W,ve,me,N)}}}function Ft(pt,xt,yt){h.push(pt),h.push(xt),h.push(yt)}function te(pt,xt,yt){ne(pt),ne(xt),ne(yt);let vt=s.length/3,St=A.generateTopUV(n,s,vt-3,vt-2,vt-1);Se(St[0]),Se(St[1]),Se(St[2])}function Nt(pt,xt,yt,vt){ne(pt),ne(xt),ne(vt),ne(xt),ne(yt),ne(vt);let St=s.length/3,Qt=A.generateSideWallUV(n,s,St-6,St-3,St-2,St-1);Se(Qt[0]),Se(Qt[1]),Se(Qt[3]),Se(Qt[1]),Se(Qt[2]),Se(Qt[3])}function ne(pt){s.push(h[pt*3+0]),s.push(h[pt*3+1]),s.push(h[pt*3+2])}function Se(pt){r.push(pt.x),r.push(pt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return t0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let c=e[t.shapes[r]];n.push(c)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ih[s.type]().fromJSON(s)),new i(n,t.options)}},Qm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],c=t[n*3],h=t[n*3+1],d=t[s*3],f=t[s*3+1];return[new mt(r,a),new mt(c,h),new mt(d,f)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],c=t[e*3+1],h=t[e*3+2],d=t[n*3],f=t[n*3+1],_=t[n*3+2],m=t[s*3],g=t[s*3+1],b=t[s*3+2],w=t[r*3],x=t[r*3+1],y=t[r*3+2];return Math.abs(c-f)<Math.abs(a-d)?[new mt(a,1-h),new mt(d,1-_),new mt(m,1-b),new mt(w,1-y)]:[new mt(c,1-h),new mt(f,1-_),new mt(g,1-b),new mt(x,1-y)]}};function t0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var to=class i extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,c=Math.floor(n),h=Math.floor(s),d=c+1,f=h+1,_=t/c,m=e/h,g=[],b=[],w=[],x=[];for(let y=0;y<f;y++){let A=y*m-a;for(let C=0;C<d;C++){let S=C*_-r;b.push(S,-A,0),w.push(0,0,1),x.push(C/c),x.push(1-y/h)}}for(let y=0;y<h;y++)for(let A=0;A<c;A++){let C=A+d*y,S=A+d*(y+1),I=A+1+d*(y+1),R=A+1+d*y;g.push(C,S,R),g.push(S,I,R)}this.setIndex(g),this.setAttribute("position",new ye(b,3)),this.setAttribute("normal",new ye(w,3)),this.setAttribute("uv",new ye(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ln=class i extends Re{constructor(t=new pn([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],c=0,h=0;if(Array.isArray(t)===!1)d(t);else for(let f=0;f<t.length;f++)d(t[f]),this.addGroup(c,h,f),c+=h,h=0;this.setIndex(n),this.setAttribute("position",new ye(s,3)),this.setAttribute("normal",new ye(r,3)),this.setAttribute("uv",new ye(a,2));function d(f){let _=s.length/3,m=f.extractPoints(e),g=m.shape,b=m.holes;qi.isClockWise(g)===!1&&(g=g.reverse());for(let x=0,y=b.length;x<y;x++){let A=b[x];qi.isClockWise(A)===!0&&(b[x]=A.reverse())}let w=qi.triangulateShape(g,b);for(let x=0,y=b.length;x<y;x++){let A=b[x];g=g.concat(A)}for(let x=0,y=g.length;x<y;x++){let A=g[x];s.push(A.x,A.y,0),r.push(0,0,1),a.push(A.x,A.y)}for(let x=0,y=w.length;x<y;x++){let A=w[x],C=A[0]+_,S=A[1]+_,I=A[2]+_;n.push(C,S,I),h+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return e0(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function e0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var gi=class i extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:c},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let h=Math.min(a+c,Math.PI),d=0,f=[],_=new k,m=new k,g=[],b=[],w=[],x=[];for(let y=0;y<=n;y++){let A=[],C=y/n,S=a+C*c,I=t*Math.cos(S),R=Math.sqrt(t*t-I*I),O=0;y===0&&a===0?O=.5/e:y===n&&h===Math.PI&&(O=-.5/e);for(let E=0;E<=e;E++){let D=E/e,U=s+D*r;_.x=-R*Math.cos(U),_.y=I,_.z=R*Math.sin(U),b.push(_.x,_.y,_.z),m.copy(_).normalize(),w.push(m.x,m.y,m.z),x.push(D+O,1-C),A.push(d++)}f.push(A)}for(let y=0;y<n;y++)for(let A=0;A<e;A++){let C=f[y][A+1],S=f[y][A],I=f[y+1][A],R=f[y+1][A+1];(y!==0||a>0)&&g.push(C,S,R),(y!==n-1||h<Math.PI)&&g.push(S,I,R)}this.setIndex(g),this.setAttribute("position",new ye(b,3)),this.setAttribute("normal",new ye(w,3)),this.setAttribute("uv",new ye(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var eo=class extends Re{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new k,r=new k;if(t.index!==null){let a=t.attributes.position,c=t.index,h=t.groups;h.length===0&&(h=[{start:0,count:c.count,materialIndex:0}]);for(let d=0,f=h.length;d<f;++d){let _=h[d],m=_.start,g=_.count;for(let b=m,w=m+g;b<w;b+=3)for(let x=0;x<3;x++){let y=c.getX(b+x),A=c.getX(b+(x+1)%3);s.fromBufferAttribute(a,y),r.fromBufferAttribute(a,A),hd(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let c=0,h=a.count/3;c<h;c++)for(let d=0;d<3;d++){let f=3*c+d,_=3*c+(d+1)%3;s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,_),hd(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ye(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function hd(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function ls(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ud(s))s.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ud(s[0])){let r=[];for(let a=0,c=s.length;a<c;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ai(i){let t={};for(let e=0;e<i.length;e++){let n=ls(i[e]);for(let s in n)t[s]=n[s]}return t}function ud(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function i0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var So={clone:ls,merge:ai},n0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hi=class extends Ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n0,this.fragmentShader=s0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=i0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new he().setHex(s.value);break;case"v2":this.uniforms[n].value=new mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ce().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ka=class extends hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var rs=class extends Ki{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new he(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gl,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var za=class extends Ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Va=class extends Ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Rs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function qc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Dn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];i:{t:{let a;e:{n:if(!(t<s)){for(let c=n+2;;){if(s===void 0){if(t<r)break n;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let c=e[1];t<c&&(n=2,r=c);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break i}for(;n<a;){let c=n+a>>>1;t<e[c]?a=c:n=c+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ga=class extends Dn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jc,endingEnd:jc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,c=s[r],h=s[a];if(c===void 0)switch(this.getSettings_().endingStart){case Qc:r=t,c=2*e-n;break;case th:r=s.length-2,c=e+s[r]-s[r+1];break;default:r=t,c=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Qc:a=t,h=2*n-e;break;case th:a=1,h=n+s[1]-s[0];break;default:a=t-1,h=e}let d=(n-e)*.5,f=this.valueSize;this._weightPrev=d/(e-c),this._weightNext=d/(h-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,c=this.valueSize,h=t*c,d=h-c,f=this._offsetPrev,_=this._offsetNext,m=this._weightPrev,g=this._weightNext,b=(n-e)/(s-e),w=b*b,x=w*b,y=-m*x+2*m*w-m*b,A=(1+m)*x+(-1.5-2*m)*w+(-.5+m)*b+1,C=(-1-g)*x+(1.5+g)*w+.5*b,S=g*x-g*w;for(let I=0;I!==c;++I)r[I]=y*a[f+I]+A*a[d+I]+C*a[h+I]+S*a[_+I];return r}},Ha=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,c=this.valueSize,h=t*c,d=h-c,f=(n-e)/(s-e),_=1-f;for(let m=0;m!==c;++m)r[m]=a[d+m]*_+a[h+m]*f;return r}},Wa=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Xa=class extends Dn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,c=this.valueSize,h=t*c,d=h-c,f=this.inTangents,_=this.outTangents;if(!f||!_){let b=(n-e)/(s-e),w=1-b;for(let x=0;x!==c;++x)r[x]=a[d+x]*w+a[h+x]*b;return r}let m=c*2,g=t-1;for(let b=0;b!==c;++b){let w=a[d+b],x=a[h+b],y=g*m+b*2,A=_[y],C=_[y+1],S=t*m+b*2,I=f[S],R=f[S+1],O=o0(n,e,A,I,s);r[b]=hf(O,w,C,R,x)}return r}};function hf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function r0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function o0(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let c=hf(r,t,e,n,s)-i;if(Math.abs(c)<1e-10)break;let h=r0(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-c/h))}return r}var Ai=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rs(e,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rs(t.times,Array),values:Rs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),qc(t.settings)&&(n.settings={inTangents:Rs(t.settings.inTangents,Array),outTangents:Rs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Xa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Lr:e=this.InterpolantFactoryMethodDiscrete;break;case Ca:e=this.InterpolantFactoryMethodLinear;break;case xa:e=this.InterpolantFactoryMethodSmooth;break;case Kc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ie("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return xa;case this.InterpolantFactoryMethodBezier:return Kc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;qc(this.settings)&&(dd(this.settings.inTangents,t),dd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let c=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*c,a*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let c=0;c!==r;c++){let h=n[c];if(typeof h=="number"&&isNaN(h)){ee("KeyframeTrack: Time is not a valid number.",this,c,h),t=!1;break}if(a!==null&&a>h){ee("KeyframeTrack: Out of order keys.",this,c,h,a),t=!1;break}a=h}if(s!==void 0&&qp(s))for(let c=0,h=s.length;c!==h;++c){let d=s[c];if(isNaN(d)){ee("KeyframeTrack: Value is not a valid number.",this,c,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xa,r=t.length-1,a=1;for(let c=1;c<r;++c){let h=!1,d=t[c],f=t[c+1];if(d!==f&&(c!==1||d!==t[0]))if(s)h=!0;else{let _=c*n,m=_-n,g=_+n;for(let b=0;b!==n;++b){let w=e[_+b];if(w!==e[m+b]||w!==e[g+b]){h=!0;break}}}if(h){if(c!==a){t[a]=t[c];let _=c*n,m=a*n;for(let g=0;g!==n;++g)e[m+g]=e[_+g]}++a}}if(r>0){t[a]=t[r];for(let c=r*n,h=a*n,d=0;d!==n;++d)e[h+d]=e[c+d];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,qc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function dd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ai.prototype.ValueTypeName="";Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=Ca;var Fn=class extends Ai{constructor(t,e,n){super(t,e,n)}};Fn.prototype.ValueTypeName="bool";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=Lr;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}};Ya.prototype.ValueTypeName="color";var $a=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}};$a.prototype.ValueTypeName="number";var qa=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,c=this.valueSize,h=(n-e)/(s-e),d=t*c;for(let f=d+c;d!==f;d+=4)Mi.slerpFlat(r,0,a,d-c,a,d,h);return r}},io=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new qa(this.times,this.values,this.getValueSize(),t)}};io.prototype.ValueTypeName="quaternion";io.prototype.InterpolantFactoryMethodSmooth=void 0;var Nn=class extends Ai{constructor(t,e,n){super(t,e,n)}};Nn.prototype.ValueTypeName="string";Nn.prototype.ValueBufferType=Array;Nn.prototype.DefaultInterpolation=Lr;Nn.prototype.InterpolantFactoryMethodLinear=void 0;Nn.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}};Za.prototype.ValueTypeName="vector";var Ja=class{constructor(t,e,n){let s=this,r=!1,a=0,c=0,h,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){c++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,c),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,c),a===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),h?h(f):f},this.setURLModifier=function(f){return h=f,this},this.addHandler=function(f,_){return d.push(f,_),this},this.removeHandler=function(f){let _=d.indexOf(f);return _!==-1&&d.splice(_,2),this},this.getHandler=function(f){for(let _=0,m=d.length;_<m;_+=2){let g=d[_],b=d[_+1];if(g.global&&(g.lastIndex=0),g.test(f))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},uf=new Ja,Ka=class{constructor(t){this.manager=t!==void 0?t:uf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ka.DEFAULT_MATERIAL_NAME="__DEFAULT";var no=class extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},so=class extends no{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Zc=new _e,fd=new k,pd=new k,ja=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;fd.setFromMatrixPosition(t.matrixWorld),e.position.copy(fd),pd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Zc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,c=s?s.w/r.y:1,h=s?s.x/r.x:0,d=s?s.y/r.y:0;t.coordinateSystem===ks||t.reversedDepth?e.set(.5*a,0,0,.5*a+h,0,.5*c,0,.5*c+d,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+h,0,.5*c,0,.5*c+d,0,0,.5,.5,0,0,0,1),e.multiply(Zc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ma=new k,ga=new Mi,Xi=new k,ro=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ma,ga,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,Xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ma,ga,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},An=new k,md=new mt,gd=new mt,ri=class extends ro{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(An.x,An.y).multiplyScalar(-t/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-t/An.z)}getViewSize(t,e){return this.getViewBounds(t,md,gd),e.subVectors(gd,md)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Os*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,d=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/d,s*=a.width/h,n*=a.height/d}let c=this.filmOffset;c!==0&&(r+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var js=class extends ro{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,c=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,a=r+d*this.view.width,c-=f*this.view.offsetY,h=c-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,c,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},oh=class extends ja{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oo=class extends no{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new oh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ao=class extends Re{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Ls=-90,Ds=1,Qa=class extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ri(Ls,Ds,t,e);s.layers=this.layers,this.add(s);let r=new ri(Ls,Ds,t,e);r.layers=this.layers,this.add(r);let a=new ri(Ls,Ds,t,e);a.layers=this.layers,this.add(a);let c=new ri(Ls,Ds,t,e);c.layers=this.layers,this.add(c);let h=new ri(Ls,Ds,t,e);h.layers=this.layers,this.add(h);let d=new ri(Ls,Ds,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,c,h]=e;for(let d of e)this.remove(d);if(t===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,c,h,d,f]=this.children,_=t.getRenderTarget(),m=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;let w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(_,m,g),t.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},tl=class extends ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Oh="\\[\\]\\.:\\/",a0=new RegExp("["+Oh+"]","g"),Bh="[^"+Oh+"]",l0="[^"+Oh.replace("\\.","")+"]",c0=/((?:WC+[\/:])*)/.source.replace("WC",Bh),h0=/(WCOD+)?/.source.replace("WCOD",l0),u0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bh),d0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bh),f0=new RegExp("^"+c0+h0+u0+d0+"$"),p0=["material","materials","bones","map"],ah=class{constructor(t,e,n){let s=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(a0,"")}static parseTrackName(t){let e=f0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);p0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let c=r[a];if(c.name===e||c.uuid===e)return c;let h=n(c.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===d){d=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(d!==void 0){if(t[d]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let a=t[s];if(a===void 0){let d=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=ah;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mb=new Float32Array(1);var On=class extends Xs{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var _d=new _e,lo=class{constructor(t,e,n=0,s=1/0){this.ray=new Pn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return _d.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_d),this}intersectObject(t,e=!0,n=[]){return lh(t,this,n,e),n.sort(xd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)lh(t[s],this,n,e);return n.sort(xd),n}};function xd(i,t){return i.distance-t.distance}function lh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,c=r.length;a<c;a++)lh(r[a],t,e,!0)}}var Qs=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ae(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Hh=class Hh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Hh.prototype.isMatrix2=!0;var ch=Hh;var yd=new k,_a=new k,Fs=new k,Ns=new k,Jc=new k,m0=new k,g0=new k,co=class{constructor(t=new k,e=new k){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){yd.subVectors(t,this.start),_a.subVectors(this.end,this.start);let n=_a.dot(_a);if(n===0)return 0;let r=_a.dot(yd)/n;return e&&(r=ae(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=m0,n=g0){let s=10000000000000001e-32,r,a,c=this.start,h=t.start,d=this.end,f=t.end;Fs.subVectors(d,c),Ns.subVectors(f,h),Jc.subVectors(c,h);let _=Fs.dot(Fs),m=Ns.dot(Ns),g=Ns.dot(Jc);if(_<=s&&m<=s)return e.copy(c),n.copy(h),e.sub(n),e.dot(e);if(_<=s)r=0,a=g/m,a=ae(a,0,1);else{let b=Fs.dot(Jc);if(m<=s)a=0,r=ae(-b/_,0,1);else{let w=Fs.dot(Ns),x=_*m-w*w;x!==0?r=ae((w*g-b*m)/x,0,1):r=0,a=(w*r+g)/m,a<0?(a=0,r=ae(-b/_,0,1)):a>1&&(a=1,r=ae((w-b)/_,0,1))}}return e.copy(c).addScaledVector(Fs,r),n.copy(h).addScaledVector(Ns,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var ho=class extends Oi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Uh(i,t,e,n){let s=_0(n);switch(e){case Ph:return i*t;case mo:return i*t/s.components*s.byteLength;case cl:return i*t/s.components*s.byteLength;case Hn:return i*t*2/s.components*s.byteLength;case hl:return i*t*2/s.components*s.byteLength;case Ih:return i*t*3/s.components*s.byteLength;case Ii:return i*t*4/s.components*s.byteLength;case ul:return i*t*4/s.components*s.byteLength;case go:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xo:case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fl:case ml:return Math.max(i,16)*Math.max(t,8)/4;case dl:case pl:return Math.max(i,8)*Math.max(t,8)/2;case gl:case _l:case yl:case vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xl:case vo:case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ol:case Bl:case Ul:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kl:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case bo:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _0(i){switch(i){case xi:case Th:return{byteLength:1,components:1};case ir:case Eh:case Vi:return{byteLength:2,components:1};case al:case ll:return{byteLength:2,components:4};case ki:case ol:case zi:return{byteLength:4,components:1};case Ah:case Ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);function Df(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function w0(i){let t=new WeakMap;function e(c,h){let d=c.array,f=c.usage,_=d.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)g=i.HALF_FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=i.SHORT;else if(d instanceof Uint32Array)g=i.UNSIGNED_INT;else if(d instanceof Int32Array)g=i.INT;else if(d instanceof Int8Array)g=i.BYTE;else if(d instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:_}}function n(c,h,d){let f=h.array,_=h.updateRanges;if(i.bindBuffer(d,c),_.length===0)i.bufferSubData(d,0,f);else{_.sort((g,b)=>g.start-b.start);let m=0;for(let g=1;g<_.length;g++){let b=_[m],w=_[g];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++m,_[m]=w)}_.length=m+1;for(let g=0,b=_.length;g<b;g++){let w=_[g];i.bufferSubData(d,w.start*f.BYTES_PER_ELEMENT,f,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=t.get(c);h&&(i.deleteBuffer(h.buffer),t.delete(c))}function a(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let f=t.get(c);(!f||f.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let d=t.get(c);if(d===void 0)t.set(c,e(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,c,h),d.version=c.version}}return{get:s,remove:r,update:a}}var S0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,I0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,L0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,O0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,B0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Y0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",tg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,mg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_g=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ug=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,a_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,l_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,c_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,u_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,f_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,__=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,x_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,w_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,S_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,I_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,R_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,L_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,j_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ex=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:S0,alphahash_pars_fragment:M0,alphamap_fragment:T0,alphamap_pars_fragment:E0,alphatest_fragment:A0,alphatest_pars_fragment:C0,aomap_fragment:P0,aomap_pars_fragment:I0,batching_pars_vertex:R0,batching_vertex:L0,begin_vertex:D0,beginnormal_vertex:F0,bsdfs:N0,iridescence_fragment:O0,bumpmap_pars_fragment:B0,clipping_planes_fragment:U0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:V0,color_fragment:G0,color_pars_fragment:H0,color_pars_vertex:W0,color_vertex:X0,common:Y0,cube_uv_reflection_fragment:$0,defaultnormal_vertex:q0,displacementmap_pars_vertex:Z0,displacementmap_vertex:J0,emissivemap_fragment:K0,emissivemap_pars_fragment:j0,colorspace_fragment:Q0,colorspace_pars_fragment:tg,envmap_fragment:eg,envmap_common_pars_fragment:ig,envmap_pars_fragment:ng,envmap_pars_vertex:sg,envmap_physical_pars_fragment:mg,envmap_vertex:rg,fog_vertex:og,fog_pars_vertex:ag,fog_fragment:lg,fog_pars_fragment:cg,gradientmap_pars_fragment:hg,lightmap_pars_fragment:ug,lights_lambert_fragment:dg,lights_lambert_pars_fragment:fg,lights_pars_begin:pg,lights_toon_fragment:gg,lights_toon_pars_fragment:_g,lights_phong_fragment:xg,lights_phong_pars_fragment:yg,lights_physical_fragment:vg,lights_physical_pars_fragment:bg,lights_fragment_begin:wg,lights_fragment_maps:Sg,lights_fragment_end:Mg,lightprobes_pars_fragment:Tg,logdepthbuf_fragment:Eg,logdepthbuf_pars_fragment:Ag,logdepthbuf_pars_vertex:Cg,logdepthbuf_vertex:Pg,map_fragment:Ig,map_pars_fragment:Rg,map_particle_fragment:Lg,map_particle_pars_fragment:Dg,metalnessmap_fragment:Fg,metalnessmap_pars_fragment:Ng,morphinstance_vertex:Og,morphcolor_vertex:Bg,morphnormal_vertex:Ug,morphtarget_pars_vertex:kg,morphtarget_vertex:zg,normal_fragment_begin:Vg,normal_fragment_maps:Gg,normal_pars_fragment:Hg,normal_pars_vertex:Wg,normal_vertex:Xg,normalmap_pars_fragment:Yg,clearcoat_normal_fragment_begin:$g,clearcoat_normal_fragment_maps:qg,clearcoat_pars_fragment:Zg,iridescence_pars_fragment:Jg,opaque_fragment:Kg,packing:jg,premultiplied_alpha_fragment:Qg,project_vertex:t_,dithering_fragment:e_,dithering_pars_fragment:i_,roughnessmap_fragment:n_,roughnessmap_pars_fragment:s_,shadowmap_pars_fragment:r_,shadowmap_pars_vertex:o_,shadowmap_vertex:a_,shadowmask_pars_fragment:l_,skinbase_vertex:c_,skinning_pars_vertex:h_,skinning_vertex:u_,skinnormal_vertex:d_,specularmap_fragment:f_,specularmap_pars_fragment:p_,tonemapping_fragment:m_,tonemapping_pars_fragment:g_,transmission_fragment:__,transmission_pars_fragment:x_,uv_pars_fragment:y_,uv_pars_vertex:v_,uv_vertex:b_,worldpos_vertex:w_,background_vert:S_,background_frag:M_,backgroundCube_vert:T_,backgroundCube_frag:E_,cube_vert:A_,cube_frag:C_,depth_vert:P_,depth_frag:I_,distance_vert:R_,distance_frag:L_,equirect_vert:D_,equirect_frag:F_,linedashed_vert:N_,linedashed_frag:O_,meshbasic_vert:B_,meshbasic_frag:U_,meshlambert_vert:k_,meshlambert_frag:z_,meshmatcap_vert:V_,meshmatcap_frag:G_,meshnormal_vert:H_,meshnormal_frag:W_,meshphong_vert:X_,meshphong_frag:Y_,meshphysical_vert:$_,meshphysical_frag:q_,meshtoon_vert:Z_,meshtoon_frag:J_,points_vert:K_,points_frag:j_,shadow_vert:Q_,shadow_frag:tx,sprite_vert:ex,sprite_frag:ix},Ct={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},ui={basic:{uniforms:ai([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:ai([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new he(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:ai([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:ai([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:ai([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new he(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:ai([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:ai([Ct.points,Ct.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:ai([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:ai([Ct.common,Ct.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:ai([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:ai([Ct.sprite,Ct.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:ai([Ct.common,Ct.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:ai([Ct.lights,Ct.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};ui.physical={uniforms:ai([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};var Xl={r:0,b:0,g:0},nx=new _e,Ff=new ce;Ff.set(-1,0,0,0,1,0,0,0,1);function sx(i,t,e,n,s,r){let a=new he(0),c=s===!0?0:1,h,d,f=null,_=0,m=null;function g(A){let C=A.isScene===!0?A.background:null;if(C&&C.isTexture){let S=A.backgroundBlurriness>0;C=t.get(C,S)}return C}function b(A){let C=!1,S=g(A);S===null?x(a,c):S&&S.isColor&&(x(S,1),C=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(A,C){let S=g(C);S&&(S.isCubeTexture||S.mapping===fo)?(d===void 0&&(d=new De(new Je(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:ls(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=S,d.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(nx.makeRotationFromEuler(C.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Ff),d.material.toneMapped=ge.getTransfer(S.colorSpace)!==Me,(f!==S||_!==S.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,f=S,_=S.version,m=i.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(h===void 0&&(h=new De(new to(2,2),new hi({name:"BackgroundMaterial",uniforms:ls(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=S,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=ge.getTransfer(S.colorSpace)!==Me,S.matrixAutoUpdate===!0&&S.updateMatrix(),h.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||_!==S.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=S,_=S.version,m=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null))}function x(A,C){A.getRGB(Xl,Nh(i)),e.buffers.color.setClear(Xl.r,Xl.g,Xl.b,C,r)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,C=1){a.set(A),c=C,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,x(a,c)},render:b,addToRenderList:w,dispose:y}}function rx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,a=!1;function c(F,V,H,B,X){let K=!1,J=_(F,B,H,V);r!==J&&(r=J,d(r.object)),K=g(F,B,H,X),K&&b(F,B,H,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(F,V,H,B),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function h(){return i.createVertexArray()}function d(F){return i.bindVertexArray(F)}function f(F){return i.deleteVertexArray(F)}function _(F,V,H,B){let X=B.wireframe===!0,K=n[V.id];K===void 0&&(K={},n[V.id]=K);let J=F.isInstancedMesh===!0?F.id:0,at=K[J];at===void 0&&(at={},K[J]=at);let tt=at[H.id];tt===void 0&&(tt={},at[H.id]=tt);let nt=tt[X];return nt===void 0&&(nt=m(h()),tt[X]=nt),nt}function m(F){let V=[],H=[],B=[];for(let X=0;X<e;X++)V[X]=0,H[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:H,attributeDivisors:B,object:F,attributes:{},index:null}}function g(F,V,H,B){let X=r.attributes,K=V.attributes,J=0,at=H.getAttributes();for(let tt in at)if(at[tt].location>=0){let st=X[tt],Tt=K[tt];if(Tt===void 0&&(tt==="instanceMatrix"&&F.instanceMatrix&&(Tt=F.instanceMatrix),tt==="instanceColor"&&F.instanceColor&&(Tt=F.instanceColor)),st===void 0||st.attribute!==Tt||Tt&&st.data!==Tt.data)return!0;J++}return r.attributesNum!==J||r.index!==B}function b(F,V,H,B){let X={},K=V.attributes,J=0,at=H.getAttributes();for(let tt in at)if(at[tt].location>=0){let st=K[tt];st===void 0&&(tt==="instanceMatrix"&&F.instanceMatrix&&(st=F.instanceMatrix),tt==="instanceColor"&&F.instanceColor&&(st=F.instanceColor));let Tt={};Tt.attribute=st,st&&st.data&&(Tt.data=st.data),X[tt]=Tt,J++}r.attributes=X,r.attributesNum=J,r.index=B}function w(){let F=r.newAttributes;for(let V=0,H=F.length;V<H;V++)F[V]=0}function x(F){y(F,0)}function y(F,V){let H=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;H[F]=1,B[F]===0&&(i.enableVertexAttribArray(F),B[F]=1),X[F]!==V&&(i.vertexAttribDivisor(F,V),X[F]=V)}function A(){let F=r.newAttributes,V=r.enabledAttributes;for(let H=0,B=V.length;H<B;H++)V[H]!==F[H]&&(i.disableVertexAttribArray(H),V[H]=0)}function C(F,V,H,B,X,K,J){J===!0?i.vertexAttribIPointer(F,V,H,X,K):i.vertexAttribPointer(F,V,H,B,X,K)}function S(F,V,H,B){w();let X=B.attributes,K=H.getAttributes(),J=V.defaultAttributeValues;for(let at in K){let tt=K[at];if(tt.location>=0){let nt=X[at];if(nt===void 0&&(at==="instanceMatrix"&&F.instanceMatrix&&(nt=F.instanceMatrix),at==="instanceColor"&&F.instanceColor&&(nt=F.instanceColor)),nt!==void 0){let st=nt.normalized,Tt=nt.itemSize,Et=t.get(nt);if(Et===void 0)continue;let Zt=Et.buffer,re=Et.type,xe=Et.bytesPerElement,lt=re===i.INT||re===i.UNSIGNED_INT||nt.gpuType===ol;if(nt.isInterleavedBufferAttribute){let ft=nt.data,Ft=ft.stride,te=nt.offset;if(ft.isInstancedInterleavedBuffer){for(let Nt=0;Nt<tt.locationSize;Nt++)y(tt.location+Nt,ft.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Nt=0;Nt<tt.locationSize;Nt++)x(tt.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Nt=0;Nt<tt.locationSize;Nt++)C(tt.location+Nt,Tt/tt.locationSize,re,st,Ft*xe,(te+Tt/tt.locationSize*Nt)*xe,lt)}else{if(nt.isInstancedBufferAttribute){for(let ft=0;ft<tt.locationSize;ft++)y(tt.location+ft,nt.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ft=0;ft<tt.locationSize;ft++)x(tt.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let ft=0;ft<tt.locationSize;ft++)C(tt.location+ft,Tt/tt.locationSize,re,st,Tt*xe,Tt/tt.locationSize*ft*xe,lt)}}else if(J!==void 0){let st=J[at];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(tt.location,st);break;case 3:i.vertexAttrib3fv(tt.location,st);break;case 4:i.vertexAttrib4fv(tt.location,st);break;default:i.vertexAttrib1fv(tt.location,st)}}}}A()}function I(){D();for(let F in n){let V=n[F];for(let H in V){let B=V[H];for(let X in B){let K=B[X];for(let J in K)f(K[J].object),delete K[J];delete B[X]}}delete n[F]}}function R(F){if(n[F.id]===void 0)return;let V=n[F.id];for(let H in V){let B=V[H];for(let X in B){let K=B[X];for(let J in K)f(K[J].object),delete K[J];delete B[X]}}delete n[F.id]}function O(F){for(let V in n){let H=n[V];for(let B in H){let X=H[B];if(X[F.id]===void 0)continue;let K=X[F.id];for(let J in K)f(K[J].object),delete K[J];delete X[F.id]}}}function E(F){for(let V in n){let H=n[V],B=F.isInstancedMesh===!0?F.id:0,X=H[B];if(X!==void 0){for(let K in X){let J=X[K];for(let at in J)f(J[at].object),delete J[at];delete X[K]}delete H[B],Object.keys(H).length===0&&delete n[V]}}}function D(){U(),a=!0,r!==s&&(r=s,d(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:D,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:x,disableUnusedAttributes:A}}function ox(i,t,e){let n;function s(h){n=h}function r(h,d){i.drawArrays(n,h,d),e.update(d,n,1)}function a(h,d,f){f!==0&&(i.drawArraysInstanced(n,h,d,f),e.update(d,n,f))}function c(h,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,f);let m=0;for(let g=0;g<f;g++)m+=d[g];e.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=c}function ax(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let O=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(O){return!(O!==Ii&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(O){let E=O===Vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==xi&&O!==zi&&!E&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp",f=h(d);f!==d&&(ie("WebGLRenderer:",d,"not supported, using",f,"instead."),d=f);let _=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:S,maxSamples:I,samples:R}}function lx(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ci,c=new ce,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){let g=_.length!==0||m||n!==0||s;return s=m,n=_.length,g},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(_,m){e=f(_,m,0)},this.setState=function(_,m,g){let b=_.clippingPlanes,w=_.clipIntersection,x=_.clipShadows,y=i.get(_);if(!s||b===null||b.length===0||r&&!x)r?f(null):d();else{let A=r?0:n,C=A*4,S=y.clippingState||null;h.value=S,S=f(b,m,C,g);for(let I=0;I!==C;++I)S[I]=e[I];y.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=A}};function d(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(_,m,g,b){let w=_!==null?_.length:0,x=null;if(w!==0){if(x=h.value,b!==!0||x===null){let y=g+w*4,A=m.matrixWorldInverse;c.getNormalMatrix(A),(x===null||x.length<y)&&(x=new Float32Array(y));for(let C=0,S=g;C!==w;++C,S+=4)a.copy(_[C]).applyMatrix4(A,c),a.normal.toArray(x,S),x[S+3]=a.constant}h.value=x,h.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,x}}var rr=4,cx=6,hx=20,ux=256,Mo=new js,df=new he,Wh=null,Xh=0,Yh=0,$h=!1,dx=new k,cs=new k,$l=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:c=dx}=r;Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,c),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wh,Xh,Yh),this._renderer.xr.enabled=$h,t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zn||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:Vi,format:Ii,colorSpace:Dr,depthBuffer:!1},s=ff(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ff(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fx(r)),this._blurMaterial=mx(r,t,e),this._ggxMaterial=px(r,t,e)}return s}_compileMaterial(t){let e=new De(new Re,t);this._renderer.compile(e,Mo)}_sceneToCubeUV(t,e,n,s,r){let h=new ri(90,1,e,n),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,g=_.toneMapping;_.getClearColor(df),_.toneMapping=Ui,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new Je,new ke({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,x=w.material,y=!1,A=t.background;A?A.isColor&&(x.color.copy(A),t.background=null,y=!0):(x.color.copy(df),y=!0);for(let C=0;C<6;C++){let S=C%3;S===0?(h.up.set(0,d[C],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+f[C],r.y,r.z)):S===1?(h.up.set(0,0,d[C]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+f[C],r.z)):(h.up.set(0,d[C],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+f[C]));let I=this._cubeSize;sr(s,S*I,C>2?I:0,I,I),_.setRenderTarget(s),y&&_.render(w,h),_.render(t,h)}_.toneMapping=g,_.autoClear=m,t.background=A}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===zn||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let c=r.uniforms;c.envMap.value=t;let h=this._cubeSize;sr(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,Mo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,c=this._lodMeshes[n];c.material=a;let h=a.uniforms,d=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),_=Math.sqrt(d*d-f*f),m=d*1.25,g=_*m,{_lodMax:b}=this,w=this._sizeLods[n],x=3*w*(n>b-rr?n-b+rr:0),y=4*(this._cubeSize-w);h.envMap.value=t.texture,h.roughness.value=g,h.mipInt.value=b-e,sr(r,x,y,3*w,2*w),s.setRenderTarget(r),s.render(c,Mo),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=b-n,sr(t,x,y,3*w,2*w),s.setRenderTarget(t),s.render(c,Mo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,c=this._blurMaterial,h=this._lodMeshes[s];h.material=c;let d=c.uniforms;d.envMap.value=t.texture,d.sigma.value=r,d.mipInt.value=this._lodMax-n;let f=this._sizeLods[s],_=3*f*(s>this._lodMax-rr?s-this._lodMax+rr:0),m=4*(this._cubeSize-f);sr(e,_,m,3*f,2*f),a.setRenderTarget(e),a.render(h,Mo)}};function fx(i){let t=[],e=[],n=i,s=i-rr+1+cx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],_=6,m=6,g=3,b=new Float32Array(g*m*_),w=new Float32Array(g*m*_);for(let y=0;y<_;y++){let A=y%3*2/3-1,C=y>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];b.set(S,g*m*y);for(let I=0;I<m;I++){let R=f[I*2]*2-1,O=f[I*2+1]*2-1;y===0?cs.set(1,O,R):y===1?cs.set(-R,1,-O):y===2?cs.set(-R,O,1):y===3?cs.set(-1,O,-R):y===4?cs.set(-R,-1,O):cs.set(R,O,-1),cs.toArray(w,(y*m+I)*g)}}let x=new Re;x.setAttribute("position",new Ye(b,g)),x.setAttribute("outputDirection",new Ye(w,g)),e.push(new De(x,null)),n>rr&&n--}return{lodMeshes:e,sizeLods:t}}function ff(i,t,e){let n=new pi(i,t,e);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function px(i,t,e){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ux,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function mx(i,t,e){return new hi({name:"SphericalGaussianBlur",defines:{SAMPLES:hx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function pf(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function mf(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Jl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ql=class extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Je(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:ji});r.uniforms.tEquirect.value=e;let a=new De(s,r),c=e.minFilter;return e.minFilter===Vn&&(e.minFilter=qe),new Qa(1,10,this).update(t,a),e.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function gx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(m,g=!1){return m==null?null:g?a(m):r(m)}function r(m){if(m&&m.isTexture){let g=m.mapping;if(g===nl||g===sl)if(t.has(m)){let b=t.get(m).texture;return c(b,m.mapping)}else{let b=m.image;if(b&&b.height>0){let w=new ql(b.height);return w.fromEquirectangularTexture(i,m),t.set(m,w),m.addEventListener("dispose",d),c(w.texture,m.mapping)}else return null}}return m}function a(m){if(m&&m.isTexture){let g=m.mapping,b=g===nl||g===sl,w=g===zn||g===as;if(b||w){let x=e.get(m),y=x!==void 0?x.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==y)return n===null&&(n=new $l(i)),x=b?n.fromEquirectangular(m,x):n.fromCubemap(m,x),x.texture.pmremVersion=m.pmremVersion,e.set(m,x),x.texture;if(x!==void 0)return x.texture;{let A=m.image;return b&&A&&A.height>0||w&&A&&h(A)?(n===null&&(n=new $l(i)),x=b?n.fromEquirectangular(m):n.fromCubemap(m),x.texture.pmremVersion=m.pmremVersion,e.set(m,x),m.addEventListener("dispose",f),x.texture):null}}}return m}function c(m,g){return g===nl?m.mapping=zn:g===sl&&(m.mapping=as),m}function h(m){let g=0,b=6;for(let w=0;w<b;w++)m[w]!==void 0&&g++;return g===b}function d(m){let g=m.target;g.removeEventListener("dispose",d);let b=t.get(g);b!==void 0&&(t.delete(g),b.dispose())}function f(m){let g=m.target;g.removeEventListener("dispose",f);let b=e.get(g);b!==void 0&&(e.delete(g),b.dispose())}function _(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:_}}function _x(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Qn("WebGLRenderer: "+n+" extension not supported."),s}}}function xx(i,t,e,n){let s={},r=new WeakMap;function a(_){let m=_.target;m.index!==null&&t.remove(m.index);for(let b in m.attributes)t.remove(m.attributes[b]);m.removeEventListener("dispose",a),delete s[m.id];let g=r.get(m);g&&(t.remove(g),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(_,m){return s[m.id]===!0||(m.addEventListener("dispose",a),s[m.id]=!0,e.memory.geometries++),m}function h(_){let m=_.attributes;for(let g in m)t.update(m[g],i.ARRAY_BUFFER)}function d(_){let m=[],g=_.index,b=_.attributes.position,w=0;if(b===void 0)return;if(g!==null){let A=g.array;w=g.version;for(let C=0,S=A.length;C<S;C+=3){let I=A[C+0],R=A[C+1],O=A[C+2];m.push(I,R,R,O,O,I)}}else{let A=b.array;w=b.version;for(let C=0,S=A.length/3-1;C<S;C+=3){let I=C+0,R=C+1,O=C+2;m.push(I,R,R,O,O,I)}}let x=new(b.count>=65535?Vr:zr)(m,1);x.version=w;let y=r.get(_);y&&t.remove(y),r.set(_,x)}function f(_){let m=r.get(_);if(m){let g=_.index;g!==null&&m.version<g.version&&d(_)}else d(_);return r.get(_)}return{get:c,update:h,getWireframeAttribute:f}}function yx(i,t,e){let n;function s(_){n=_}let r,a;function c(_){r=_.type,a=_.bytesPerElement}function h(_,m){i.drawElements(n,m,r,_*a),e.update(m,n,1)}function d(_,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,_*a,g),e.update(m,n,g))}function f(_,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,_,0,g);let w=0;for(let x=0;x<g;x++)w+=m[x];e.update(w,n,1)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function vx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,c){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=c*(r/3);break;case i.LINES:e.lines+=c*(r/2);break;case i.LINE_STRIP:e.lines+=c*(r-1);break;case i.LINE_LOOP:e.lines+=c*r;break;case i.POINTS:e.points+=c*r;break;default:ee("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function bx(i,t,e){let n=new WeakMap,s=new Te;function r(a,c,h){let d=a.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=f!==void 0?f.length:0,m=n.get(c);if(m===void 0||m.count!==_){let D=function(){O.dispose(),n.delete(c),c.removeEventListener("dispose",D)};m!==void 0&&m.texture.dispose();let g=c.morphAttributes.position!==void 0,b=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],A=c.morphAttributes.color||[],C=0;g===!0&&(C=1),b===!0&&(C=2),w===!0&&(C=3);let S=c.attributes.position.count*C,I=1;S>t.maxTextureSize&&(I=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let R=new Float32Array(S*I*4*_),O=new Br(R,S,I,_);O.type=zi,O.needsUpdate=!0;let E=C*4;for(let U=0;U<_;U++){let F=x[U],V=y[U],H=A[U],B=S*I*4*U;for(let X=0;X<F.count;X++){let K=X*E;g===!0&&(s.fromBufferAttribute(F,X),R[B+K+0]=s.x,R[B+K+1]=s.y,R[B+K+2]=s.z,R[B+K+3]=0),b===!0&&(s.fromBufferAttribute(V,X),R[B+K+4]=s.x,R[B+K+5]=s.y,R[B+K+6]=s.z,R[B+K+7]=0),w===!0&&(s.fromBufferAttribute(H,X),R[B+K+8]=s.x,R[B+K+9]=s.y,R[B+K+10]=s.z,R[B+K+11]=H.itemSize===4?s.w:1)}}m={count:_,texture:O,size:new mt(S,I)},n.set(c,m),c.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let w=0;w<d.length;w++)g+=d[w];let b=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function wx(i,t,e,n,s){let r=new WeakMap;function a(d){let f=s.render.frame,_=d.geometry,m=t.get(d,_);if(r.get(m)!==f&&(t.update(m),r.set(m,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),r.get(d)!==f&&(e.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,i.ARRAY_BUFFER),r.set(d,f))),d.isSkinnedMesh){let g=d.skeleton;r.get(g)!==f&&(g.update(),r.set(g,f))}return m}function c(){r=new WeakMap}function h(d){let f=d.target;f.removeEventListener("dispose",h),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:c}}var Sx={[_h]:"LINEAR_TONE_MAPPING",[xh]:"REINHARD_TONE_MAPPING",[yh]:"CINEON_TONE_MAPPING",[vh]:"ACES_FILMIC_TONE_MAPPING",[wh]:"AGX_TONE_MAPPING",[Sh]:"NEUTRAL_TONE_MAPPING",[bh]:"CUSTOM_TONE_MAPPING"};function Mx(i,t,e,n,s,r){let a=new pi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,h=null,d=new Re;d.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ye([0,2,0,0,2,0],2));let f=new ka({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new De(d,f),m=new js(-1,1,1,-1,0,1),g=null,b=null,w=!1,x,y=null,A=[],C=!1;this.setSize=function(S,I){a.setSize(S,I),c!==null&&c.setSize(S,I),h!==null&&h.setSize(S,I);for(let R=0;R<A.length;R++){let O=A[R];O.setSize&&O.setSize(S,I)}},this.setEffects=function(S){A=S,C=A.length>0&&A[0].isRenderPass===!0;let I=a.width,R=a.height;A.length>0&&c===null&&(c=new pi(I,R,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),h=new pi(I,R,{type:Vi,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<A.length;O++){let E=A[O];E.setSize&&E.setSize(I,R)}},this.begin=function(S,I){if(w||S.toneMapping===Ui&&A.length===0)return!1;if(y=I,I!==null){let R=I.width,O=I.height;(a.width!==R||a.height!==O)&&this.setSize(R,O)}return C===!1&&S.setRenderTarget(a),x=S.toneMapping,S.toneMapping=Ui,!0},this.hasRenderPass=function(){return C},this.end=function(S,I){S.toneMapping=x,w=!0;let R=a,O=c;for(let E=0;E<A.length;E++){let D=A[E];D.enabled!==!1&&(D.render(S,O,R,I),D.needsSwap!==!1&&(R=O,O=O===c?h:c))}if(g!==S.outputColorSpace||b!==S.toneMapping){g=S.outputColorSpace,b=S.toneMapping,f.defines={},ge.getTransfer(g)===Me&&(f.defines.SRGB_TRANSFER="");let E=Sx[b];E&&(f.defines[E]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=R.texture,S.setRenderTarget(y),S.render(_,m),y=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){a.dispose(),c!==null&&c.dispose(),h!==null&&h.dispose(),d.dispose(),f.dispose()}}var Nf=new Ze,Jh=new Rn(1,1),Of=new Br,Bf=new Ra,Uf=new Hr,gf=[],_f=[],xf=new Float32Array(16),yf=new Float32Array(9),vf=new Float32Array(4);function ar(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=gf[s];if(r===void 0&&(r=new Float32Array(s),gf[s]=r),t!==0){n.toArray(r,0);for(let a=1,c=0;a!==t;++a)c+=e,i[a].toArray(r,c)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Kl(i,t){let e=_f[t];e===void 0&&(e=new Int32Array(t),_f[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function Ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function Cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function Px(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;vf.set(n),i.uniformMatrix2fv(this.addr,!1,vf),Ge(e,n)}}function Ix(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;yf.set(n),i.uniformMatrix3fv(this.addr,!1,yf),Ge(e,n)}}function Rx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;xf.set(n),i.uniformMatrix4fv(this.addr,!1,xf),Ge(e,n)}}function Lx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function Fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function Nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function Ox(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function Ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function zx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jh.compareFunction=e.isReversedDepthBuffer()?Wl:Hl,r=Jh):r=Nf,e.setTexture2D(t||r,s)}function Vx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Bf,s)}function Gx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Uf,s)}function Hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Of,s)}function Wx(i){switch(i){case 5126:return Tx;case 35664:return Ex;case 35665:return Ax;case 35666:return Cx;case 35674:return Px;case 35675:return Ix;case 35676:return Rx;case 5124:case 35670:return Lx;case 35667:case 35671:return Dx;case 35668:case 35672:return Fx;case 35669:case 35673:return Nx;case 5125:return Ox;case 36294:return Bx;case 36295:return Ux;case 36296:return kx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Hx}}function Xx(i,t){i.uniform1fv(this.addr,t)}function Yx(i,t){let e=ar(t,this.size,2);i.uniform2fv(this.addr,e)}function $x(i,t){let e=ar(t,this.size,3);i.uniform3fv(this.addr,e)}function qx(i,t){let e=ar(t,this.size,4);i.uniform4fv(this.addr,e)}function Zx(i,t){let e=ar(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Jx(i,t){let e=ar(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kx(i,t){let e=ar(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jx(i,t){i.uniform1iv(this.addr,t)}function Qx(i,t){i.uniform2iv(this.addr,t)}function ty(i,t){i.uniform3iv(this.addr,t)}function ey(i,t){i.uniform4iv(this.addr,t)}function iy(i,t){i.uniform1uiv(this.addr,t)}function ny(i,t){i.uniform2uiv(this.addr,t)}function sy(i,t){i.uniform3uiv(this.addr,t)}function ry(i,t){i.uniform4uiv(this.addr,t)}function oy(i,t,e){let n=this.cache,s=t.length,r=Kl(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Jh:a=Nf;for(let c=0;c!==s;++c)e.setTexture2D(t[c]||a,r[c])}function ay(i,t,e){let n=this.cache,s=t.length,r=Kl(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Bf,r[a])}function ly(i,t,e){let n=this.cache,s=t.length,r=Kl(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Uf,r[a])}function cy(i,t,e){let n=this.cache,s=t.length,r=Kl(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Of,r[a])}function hy(i){switch(i){case 5126:return Xx;case 35664:return Yx;case 35665:return $x;case 35666:return qx;case 35674:return Zx;case 35675:return Jx;case 35676:return Kx;case 5124:case 35670:return jx;case 35667:case 35671:return Qx;case 35668:case 35672:return ty;case 35669:case 35673:return ey;case 5125:return iy;case 36294:return ny;case 36295:return sy;case 36296:return ry;case 35678:case 36198:case 36298:case 36306:case 35682:return oy;case 35679:case 36299:case 36307:return ay;case 35680:case 36300:case 36308:case 36293:return ly;case 36289:case 36303:case 36311:case 36292:return cy}}var Kh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wx(e.type)}},jh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hy(e.type)}},Qh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let c=s[r];c.setValue(t,e[c.id],n)}}},qh=/(\w+)(\])?(\[|\.)?/g;function bf(i,t){i.seq.push(t),i.map[t.id]=t}function uy(i,t,e){let n=i.name,s=n.length;for(qh.lastIndex=0;;){let r=qh.exec(n),a=qh.lastIndex,c=r[1],h=r[2]==="]",d=r[3];if(h&&(c=c|0),d===void 0||d==="["&&a+2===s){bf(e,d===void 0?new Kh(c,i,t):new jh(c,i,t));break}else{let _=e.map[c];_===void 0&&(_=new Qh(c),bf(e,_)),e=_}}}var or=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let c=t.getActiveUniform(e,a),h=t.getUniformLocation(e,c.name);uy(c,h,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let c=e[r],h=n[c.id];h.needsUpdate!==!1&&c.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function wf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var dy=37297,fy=0;function py(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let c=a+1;n.push(`${c===t?">":" "} ${c}: ${e[a]}`)}return n.join(`
`)}var Sf=new ce;function my(i){ge._getMatrix(Sf,ge.workingColorSpace,i);let t=`mat3( ${Sf.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case Fr:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let c=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+py(i.getShaderSource(t),c)}else return r}function gy(i,t){let e=my(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var _y={[_h]:"Linear",[xh]:"Reinhard",[yh]:"Cineon",[vh]:"ACESFilmic",[wh]:"AgX",[Sh]:"Neutral",[bh]:"Custom"};function xy(i,t){let e=_y[t];return e===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Yl=new k;function yy(){ge.getLuminanceCoefficients(Yl);let i=Yl.x.toFixed(4),t=Yl.y.toFixed(4),e=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function by(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,c=1;r.type===i.FLOAT_MAT2&&(c=2),r.type===i.FLOAT_MAT3&&(c=3),r.type===i.FLOAT_MAT4&&(c=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:c}}return e}function Eo(i){return i!==""}function Tf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ef(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Sy=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(i){return i.replace(Sy,Ty)}var My=new Map;function Ty(i,t){let e=pe[t];if(e===void 0){let n=My.get(t);if(n!==void 0)e=pe[n],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return tu(e)}var Ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Af(i){return i.replace(Ey,Ay)}function Ay(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Cy={[uo]:"SHADOWMAP_TYPE_PCF",[tr]:"SHADOWMAP_TYPE_VSM"};function Py(i){return Cy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Iy={[zn]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE_UV"};function Ry(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Iy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ly={[as]:"ENVMAP_MODE_REFRACTION"};function Dy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ly[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Fy={[gh]:"ENVMAP_BLENDING_MULTIPLY",[Vd]:"ENVMAP_BLENDING_MIX",[Gd]:"ENVMAP_BLENDING_ADD"};function Ny(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Fy[i.combine]||"ENVMAP_BLENDING_NONE"}function Oy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function By(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,c=e.fragmentShader,h=Py(e),d=Ry(e),f=Dy(e),_=Ny(e),m=Oy(e),g=vy(e),b=by(r),w=s.createProgram(),x,y,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Eo).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Eo).join(`
`),y.length>0&&(y+=`
`)):(x=[Cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),y=[Cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",e.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?pe.tonemapping_pars_fragment:"",e.toneMapping!==Ui?xy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,gy("linearToOutputTexel",e.outputColorSpace),yy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Eo).join(`
`)),a=tu(a),a=Tf(a,e),a=Ef(a,e),c=tu(c),c=Tf(c,e),c=Ef(c,e),a=Af(a),c=Af(c),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let C=A+x+a,S=A+y+c,I=wf(s,s.VERTEX_SHADER,C),R=wf(s,s.FRAGMENT_SHADER,S);s.attachShader(w,I),s.attachShader(w,R),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function O(F){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(w)||"",H=s.getShaderInfoLog(I)||"",B=s.getShaderInfoLog(R)||"",X=V.trim(),K=H.trim(),J=B.trim(),at=!0,tt=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,w,I,R);else{let nt=Mf(s,I,"vertex"),st=Mf(s,R,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+nt+`
`+st)}else X!==""?ie("WebGLProgram: Program Info Log:",X):(K===""||J==="")&&(tt=!1);tt&&(F.diagnostics={runnable:at,programLog:X,vertexShader:{log:K,prefix:x},fragmentShader:{log:J,prefix:y}})}s.deleteShader(I),s.deleteShader(R),E=new or(s,w),D=wy(s,w)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(w,dy)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fy++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=R,this}var Uy=0,eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new iu(t),e.set(t,n)),n}},iu=class{constructor(t){this.id=Uy++,this.code=t,this.usedTimes=0}};function ky(i){return i===Hn||i===vo||i===bo}function zy(i,t,e,n,s,r){let a=new Hs,c=new eu,h=new Set,d=[],f=new Map,_=n.logarithmicDepthBuffer,m=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return h.add(E),E===0?"uv":`uv${E}`}function w(E,D,U,F,V,H){let B=F.fog,X=V.geometry,K=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,J=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,at=t.get(E.envMap||K,J),tt=at&&at.mapping===fo?at.image.height:null,nt=g[E.type];E.precision!==null&&(m=n.getMaxPrecision(E.precision),m!==E.precision&&ie("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let st=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Tt=st!==void 0?st.length:0,Et=0;X.morphAttributes.position!==void 0&&(Et=1),X.morphAttributes.normal!==void 0&&(Et=2),X.morphAttributes.color!==void 0&&(Et=3);let Zt,re,xe,lt;if(nt){let Ce=ui[nt];Zt=Ce.vertexShader,re=Ce.fragmentShader}else{Zt=E.vertexShader,re=E.fragmentShader;let Ce=c.getVertexShaderStage(E),be=c.getFragmentShaderStage(E);c.update(E,Ce,be),xe=Ce.id,lt=be.id}let ft=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),te=V.isInstancedMesh===!0,Nt=V.isBatchedMesh===!0,ne=!!E.map,Se=!!E.matcap,pt=!!at,xt=!!E.aoMap,yt=!!E.lightMap,vt=!!E.bumpMap&&E.wireframe===!1,St=!!E.normalMap,Qt=!!E.displacementMap,Jt=!!E.emissiveMap,se=!!E.metalnessMap,oe=!!E.roughnessMap,W=E.anisotropy>0,ve=E.clearcoat>0,me=E.dispersion>0,N=E.retroreflectivity>0,T=E.iridescence>0,Z=E.sheen>0,et=E.transmission>0,rt=W&&!!E.anisotropyMap,bt=ve&&!!E.clearcoatMap,wt=ve&&!!E.clearcoatNormalMap,ot=ve&&!!E.clearcoatRoughnessMap,dt=T&&!!E.iridescenceMap,Pt=T&&!!E.iridescenceThicknessMap,Gt=Z&&!!E.sheenColorMap,Dt=Z&&!!E.sheenRoughnessMap,At=!!E.specularMap,Wt=!!E.specularColorMap,Kt=!!E.specularIntensityMap,ue=et&&!!E.transmissionMap,$=et&&!!E.thicknessMap,It=!!E.gradientMap,ut=!!E.alphaMap,Rt=E.alphaTest>0,Ut=!!E.alphaHash,gt=!!E.extensions,$t=Ui;E.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&($t=i.toneMapping);let Vt={shaderID:nt,shaderType:E.type,shaderName:E.name,vertexShader:Zt,fragmentShader:re,defines:E.defines,customVertexShaderID:xe,customFragmentShaderID:lt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Nt,batchingColor:Nt&&V._colorsTexture!==null,instancing:te,instancingColor:te&&V.instanceColor!==null,instancingMorph:te&&V.morphTexture!==null,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ne,matcap:Se,envMap:pt,envMapMode:pt&&at.mapping,envMapCubeUVHeight:tt,aoMap:xt,lightMap:yt,bumpMap:vt,normalMap:St,displacementMap:Qt,emissiveMap:Jt,normalMapObjectSpace:St&&E.normalMapType===Xd,normalMapTangentSpace:St&&E.normalMapType===Gl,packedNormalMap:St&&E.normalMapType===Gl&&ky(E.normalMap.format),metalnessMap:se,roughnessMap:oe,anisotropy:W,anisotropyMap:rt,clearcoat:ve,clearcoatMap:bt,clearcoatNormalMap:wt,clearcoatRoughnessMap:ot,dispersion:me,retroreflection:N,iridescence:T,iridescenceMap:dt,iridescenceThicknessMap:Pt,sheen:Z,sheenColorMap:Gt,sheenRoughnessMap:Dt,specularMap:At,specularColorMap:Wt,specularIntensityMap:Kt,transmission:et,transmissionMap:ue,thicknessMap:$,gradientMap:It,opaque:E.transparent===!1&&E.blending===er&&E.alphaToCoverage===!1,alphaMap:ut,alphaTest:Rt,alphaHash:Ut,combine:E.combine,mapUv:ne&&b(E.map.channel),aoMapUv:xt&&b(E.aoMap.channel),lightMapUv:yt&&b(E.lightMap.channel),bumpMapUv:vt&&b(E.bumpMap.channel),normalMapUv:St&&b(E.normalMap.channel),displacementMapUv:Qt&&b(E.displacementMap.channel),emissiveMapUv:Jt&&b(E.emissiveMap.channel),metalnessMapUv:se&&b(E.metalnessMap.channel),roughnessMapUv:oe&&b(E.roughnessMap.channel),anisotropyMapUv:rt&&b(E.anisotropyMap.channel),clearcoatMapUv:bt&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:wt&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&b(E.sheenRoughnessMap.channel),specularMapUv:At&&b(E.specularMap.channel),specularColorMapUv:Wt&&b(E.specularColorMap.channel),specularIntensityMapUv:Kt&&b(E.specularIntensityMap.channel),transmissionMapUv:ue&&b(E.transmissionMap.channel),thicknessMapUv:$&&b(E.thicknessMap.channel),alphaMapUv:ut&&b(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(St||W),vertexNormals:!!X.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(ne||ut),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||X.attributes.normal===void 0&&St===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ft,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Et,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:ne&&E.map.isVideoTexture===!0&&ge.getTransfer(E.map.colorSpace)===Me,decodeVideoTextureEmissive:Jt&&E.emissiveMap.isVideoTexture===!0&&ge.getTransfer(E.emissiveMap.colorSpace)===Me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_i,flipSided:E.side===Ke,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:gt&&E.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&E.extensions.multiDraw===!0||Nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Vt.vertexUv1s=h.has(1),Vt.vertexUv2s=h.has(2),Vt.vertexUv3s=h.has(3),h.clear(),Vt}function x(E){let D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(let U in E.defines)D.push(U),D.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(y(D,E),A(D,E),D.push(i.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function y(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numSunLights),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numSunLightShadows),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function A(E,D){a.disableAll(),D.instancing&&a.enable(0),D.instancingColor&&a.enable(1),D.instancingMorph&&a.enable(2),D.matcap&&a.enable(3),D.envMap&&a.enable(4),D.normalMapObjectSpace&&a.enable(5),D.normalMapTangentSpace&&a.enable(6),D.clearcoat&&a.enable(7),D.iridescence&&a.enable(8),D.alphaTest&&a.enable(9),D.vertexColors&&a.enable(10),D.vertexAlphas&&a.enable(11),D.vertexUv1s&&a.enable(12),D.vertexUv2s&&a.enable(13),D.vertexUv3s&&a.enable(14),D.vertexTangents&&a.enable(15),D.anisotropy&&a.enable(16),D.alphaHash&&a.enable(17),D.batching&&a.enable(18),D.dispersion&&a.enable(19),D.retroreflection&&a.enable(24),D.batchingColor&&a.enable(20),D.gradientMap&&a.enable(21),D.packedNormalMap&&a.enable(22),D.vertexNormals&&a.enable(23),E.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.reversedDepthBuffer&&a.enable(4),D.skinning&&a.enable(5),D.morphTargets&&a.enable(6),D.morphNormals&&a.enable(7),D.morphColors&&a.enable(8),D.premultipliedAlpha&&a.enable(9),D.shadowMapEnabled&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.opaque&&a.enable(17),D.pointsUvs&&a.enable(18),D.decodeVideoTexture&&a.enable(19),D.decodeVideoTextureEmissive&&a.enable(20),D.alphaToCoverage&&a.enable(21),D.numLightProbeGrids>0&&a.enable(22),D.hasPositionAttribute&&a.enable(23),E.push(a.mask)}function C(E){let D=g[E.type],U;if(D){let F=ui[D];U=So.clone(F.uniforms)}else U=E.uniforms;return U}function S(E,D){let U=f.get(D);return U!==void 0?++U.usedTimes:(U=new By(i,D,E,s),d.push(U),f.set(D,U)),U}function I(E){if(--E.usedTimes===0){let D=d.indexOf(E);d[D]=d[d.length-1],d.pop(),f.delete(E.cacheKey),E.destroy()}}function R(E){c.remove(E)}function O(){c.dispose()}return{getParameters:w,getProgramCacheKey:x,getUniforms:C,acquireProgram:S,releaseProgram:I,releaseShaderCache:R,programs:d,dispose:O}}function Vy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let c=i.get(a);return c===void 0&&(c={},i.set(a,c)),c}function n(a){i.delete(a)}function s(a,c,h){i.get(a)[c]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Gy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Pf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function If(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(m){let g=0;return m.isInstancedMesh&&(g+=2),m.isSkinnedMesh&&(g+=1),g}function c(m,g,b,w,x,y){let A=i[t];return A===void 0?(A={id:m.id,object:m,geometry:g,material:b,materialVariant:a(m),groupOrder:w,renderOrder:m.renderOrder,z:x,group:y},i[t]=A):(A.id=m.id,A.object=m,A.geometry=g,A.material=b,A.materialVariant=a(m),A.groupOrder=w,A.renderOrder=m.renderOrder,A.z=x,A.group=y),t++,A}function h(m,g,b,w,x,y,A){A.reversedDepth===!0&&(x=-x);let C=c(m,g,b,w,x,y);b.transmission>0?n.push(C):b.transparent===!0?s.push(C):e.push(C)}function d(m,g,b,w,x,y){let A=c(m,g,b,w,x,y);b.transmission>0?n.unshift(A):b.transparent===!0?s.unshift(A):e.unshift(A)}function f(m,g){e.length>1&&e.sort(m||Gy),n.length>1&&n.sort(g||Pf),s.length>1&&s.sort(g||Pf)}function _(){for(let m=t,g=i.length;m<g;m++){let b=i[m];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:d,finish:_,sort:f}}function Hy(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new If,i.set(n,[a])):s>=r.length?(a=new If,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new he};break;case"SpotLight":e={position:new k,direction:new k,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function Xy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Yy=0;function $y(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qy(i){let t=new Wy,e=Xy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new k);let s=new k,r=new _e,a=new _e;function c(d){let f=0,_=0,m=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let g=0,b=0,w=0,x=0,y=0,A=0,C=0,S=0,I=0,R=0,O=0,E=0,D=0,U=0;d.sort($y);for(let V=0,H=d.length;V<H;V++){let B=d[V],X=B.color,K=B.intensity,J=B.distance,at=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Hn?at=B.shadow.map.texture:at=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)f+=X.r*K,_+=X.g*K,m+=X.b*K;else if(B.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(B.sh.coefficients[tt],K);U++}else if(B.isSunLight){let tt=t.get(B);if(tt.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let nt=B.shadow,st=e.get(B);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[b]=st,n.sunShadowMap[b]=at;let Tt=nt.getViewportCount();for(let Et=0;Et<Tt;Et++)n.sunShadowMatrix[w+Et]=nt.getMatrix(Et),n.sunShadowCascade[w+Et]=nt._cascadeData[Et];w+=Tt,b++}n.sun[g]=tt,g++}else if(B.isDirectionalLight){let tt=t.get(B);if(tt.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let nt=B.shadow,st=e.get(B);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,n.directionalShadow[x]=st,n.directionalShadowMap[x]=at,n.directionalShadowMatrix[x]=B.shadow.matrix,I++}n.directional[x]=tt,x++}else if(B.isSpotLight){let tt=t.get(B);tt.position.setFromMatrixPosition(B.matrixWorld),tt.color.copy(X).multiplyScalar(K),tt.distance=J,tt.coneCos=Math.cos(B.angle),tt.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),tt.decay=B.decay,n.spot[A]=tt;let nt=B.shadow;if(B.map&&(n.spotLightMap[E]=B.map,E++,nt.updateMatrices(B),B.castShadow&&D++),n.spotLightMatrix[A]=nt.matrix,B.castShadow){let st=e.get(B);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,n.spotShadow[A]=st,n.spotShadowMap[A]=at,O++}A++}else if(B.isRectAreaLight){let tt=t.get(B);tt.color.copy(X).multiplyScalar(K),tt.halfWidth.set(B.width*.5,0,0),tt.halfHeight.set(0,B.height*.5,0),n.rectArea[C]=tt,C++}else if(B.isPointLight){let tt=t.get(B);if(tt.color.copy(B.color).multiplyScalar(B.intensity),tt.distance=B.distance,tt.decay=B.decay,B.castShadow){let nt=B.shadow,st=e.get(B);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,st.shadowCameraNear=nt.camera.near,st.shadowCameraFar=nt.camera.far,n.pointShadow[y]=st,n.pointShadowMap[y]=at,n.pointShadowMatrix[y]=B.shadow.matrix,R++}n.point[y]=tt,y++}else if(B.isHemisphereLight){let tt=t.get(B);tt.skyColor.copy(B.color).multiplyScalar(K),tt.groundColor.copy(B.groundColor).multiplyScalar(K),n.hemi[S]=tt,S++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=_,n.ambient[2]=m;let F=n.hash;(F.sunLength!==g||F.directionalLength!==x||F.pointLength!==y||F.spotLength!==A||F.rectAreaLength!==C||F.hemiLength!==S||F.numSunShadows!==b||F.numDirectionalShadows!==I||F.numPointShadows!==R||F.numSpotShadows!==O||F.numSpotMaps!==E||F.numLightProbes!==U)&&(n.sun.length=g,n.directional.length=x,n.spot.length=A,n.rectArea.length=C,n.point.length=y,n.hemi.length=S,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=w,n.sunShadowCascade.length=w,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=O,n.spotShadowMap.length=O,n.spotLightMatrix.length=O+E-D,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=U,F.sunLength=g,F.directionalLength=x,F.pointLength=y,F.spotLength=A,F.rectAreaLength=C,F.hemiLength=S,F.numSunShadows=b,F.numDirectionalShadows=I,F.numPointShadows=R,F.numSpotShadows=O,F.numSpotMaps=E,F.numLightProbes=U,n.version=Yy++)}function h(d,f){let _=0,m=0,g=0,b=0,w=0,x=0,y=f.matrixWorldInverse;for(let A=0,C=d.length;A<C;A++){let S=d[A];if(S.isSunLight){let I=n.sun[_];I.direction.setFromMatrixPosition(S.matrixWorld),I.direction.transformDirection(y),_++}else if(S.isDirectionalLight){let I=n.directional[m];I.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(y),m++}else if(S.isSpotLight){let I=n.spot[b];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(y),I.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(y),b++}else if(S.isRectAreaLight){let I=n.rectArea[w];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(y),a.identity(),r.copy(S.matrixWorld),r.premultiply(y),a.extractRotation(r),I.halfWidth.set(S.width*.5,0,0),I.halfHeight.set(0,S.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),w++}else if(S.isPointLight){let I=n.point[g];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(y),g++}else if(S.isHemisphereLight){let I=n.hemi[x];I.direction.setFromMatrixPosition(S.matrixWorld),I.direction.transformDirection(y),x++}}}return{setup:c,setupView:h,state:n}}function Rf(i){let t=new qy(i),e=[],n=[],s=[];function r(m){_.camera=m,e.length=0,n.length=0,s.length=0}function a(m){e.push(m)}function c(m){n.push(m)}function h(m){s.push(m)}function d(){t.setup(e)}function f(m){t.setupView(e,m)}let _={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:_,setupLights:d,setupLightsView:f,pushLight:a,pushShadow:c,pushLightProbeGrid:h}}function Zy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),c;return a===void 0?(c=new Rf(i),t.set(s,[c])):r>=a.length?(c=new Rf(i),a.push(c)):c=a[r],c}function n(){t=new WeakMap}return{get:e,dispose:n}}var Jy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ky=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jy=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Qy=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Lf=new _e,To=new k,Zh=new k;function tv(i,t,e){let n=new qs,s=new mt,r=new mt,a=new Te,c=new za,h=new Va,d={},f=e.maxTextureSize,_={[kn]:Ke,[Ke]:kn,[_i]:_i},m=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Jy,fragmentShader:Ky}),g=m.clone();g.defines.HORIZONTAL_PASS=1;let b=new Re;b.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new De(b,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let y=this.type;this.render=function(R,O,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;this.type===wd&&(ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=uo);let D=i.getRenderTarget(),U=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),V=i.state;V.setBlending(ji),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let H=y!==this.type;H&&O.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(X=>X.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,X=R.length;B<X;B++){let K=R[B],J=K.shadow;if(J===void 0){ie("WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let at=J.getFrameExtents();s.multiply(at),r.copy(J.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/at.x),s.x=r.x*at.x,J.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/at.y),s.y=r.y*at.y,J.mapSize.y=r.y));let tt=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=tt,J.map===null||H===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===tr){if(K.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new pi(s.x,s.y,{format:Hn,type:Vi,minFilter:qe,magFilter:qe,generateMipmaps:!1}),J.map.texture.name=K.name+".shadowMap",J.map.depthTexture=new Rn(s.x,s.y,zi),J.map.depthTexture.name=K.name+".shadowMapDepth",J.map.depthTexture.format=Ji,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Ue,J.map.depthTexture.magFilter=Ue}else K.isPointLight?(J.map=new ql(s.x),J.map.depthTexture=new La(s.x,ki)):(J.map=new pi(s.x,s.y),J.map.depthTexture=new Rn(s.x,s.y,ki)),J.map.depthTexture.name=K.name+".shadowMap",J.map.depthTexture.format=Ji,this.type===uo?(J.map.depthTexture.compareFunction=tt?Wl:Hl,J.map.depthTexture.minFilter=qe,J.map.depthTexture.magFilter=qe):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Ue,J.map.depthTexture.magFilter=Ue);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let nt=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();K.isPointLight!==!0&&J.updateMatrices(K,E);for(let st=0;st<nt;st++){let Tt=J.getCamera(st);if(K.isPointLight){let Et=J.camera,Zt=J.matrix,re=K.distance||Et.far;re!==Et.far&&(Et.far=re,Et.updateProjectionMatrix()),To.setFromMatrixPosition(K.matrixWorld),Et.position.copy(To),Zh.copy(Et.position),Zh.add(jy[st]),Et.up.copy(Qy[st]),Et.lookAt(Zh),Et.updateMatrixWorld(),Zt.makeTranslation(-To.x,-To.y,-To.z),Lf.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Lf,Et.coordinateSystem,Et.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,st),i.clear();else{st===0&&(i.setRenderTarget(J.map),i.clear());let Et=J.getViewport(st);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),V.viewport(a)}n=J.getFrustum(st),S(O,E,Tt,K,this.type)}J.isPointLightShadow!==!0&&this.type===tr&&A(J,E),J.needsUpdate=!1}y=this.type,x.needsUpdate=!1,i.setRenderTarget(D,U,F)};function A(R,O){let E=t.update(w);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null?R.mapPass=new pi(s.x,s.y,{format:Hn,type:Vi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),m.uniforms.shadow_pass.value=R.map.depthTexture,m.uniforms.resolution.value.set(R.map.width,R.map.height),m.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(O,null,E,m,w,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value.set(R.map.width,R.map.height),g.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(O,null,E,g,w,null)}function C(R,O,E,D){let U=null,F=E.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)U=F;else if(U=E.isPointLight===!0?h:c,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let V=U.uuid,H=O.uuid,B=d[V];B===void 0&&(B={},d[V]=B);let X=B[H];X===void 0&&(X=U.clone(),B[H]=X,O.addEventListener("dispose",I)),U=X}if(U.visible=O.visible,U.wireframe=O.wireframe,D===tr?U.side=O.shadowSide!==null?O.shadowSide:O.side:U.side=O.shadowSide!==null?O.shadowSide:_[O.side],U.alphaMap=O.alphaMap,U.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,U.map=O.map,U.clipShadows=O.clipShadows,U.clippingPlanes=O.clippingPlanes,U.clipIntersection=O.clipIntersection,U.displacementMap=O.displacementMap,U.displacementScale=O.displacementScale,U.displacementBias=O.displacementBias,U.wireframeLinewidth=O.wireframeLinewidth,U.linewidth=O.linewidth,E.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let V=i.properties.get(U);V.light=E}return U}function S(R,O,E,D,U){if(R.visible===!1)return;if(R.layers.test(O.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&U===tr)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,R.matrixWorld);let H=t.update(R),B=R.material;if(Array.isArray(B)){let X=H.groups;for(let K=0,J=X.length;K<J;K++){let at=X[K],tt=B[at.materialIndex];if(tt&&tt.visible){let nt=C(R,tt,D,U);R.onBeforeShadow(i,R,O,E,H,nt,at),i.renderBufferDirect(E,null,H,nt,R,at),R.onAfterShadow(i,R,O,E,H,nt,at)}}}else if(B.visible){let X=C(R,B,D,U);R.onBeforeShadow(i,R,O,E,H,X,null),i.renderBufferDirect(E,null,H,X,R,null),R.onAfterShadow(i,R,O,E,H,X,null)}}let V=R.children;for(let H=0,B=V.length;H<B;H++)S(V[H],O,E,D,U)}function I(R){R.target.removeEventListener("dispose",I);for(let E in d){let D=d[E],U=R.target.uuid;U in D&&(D[U].dispose(),delete D[U])}}}function ev(i,t){function e(){let $=!1,It=new Te,ut=null,Rt=new Te(0,0,0,0);return{setMask:function(Ut){ut!==Ut&&!$&&(i.colorMask(Ut,Ut,Ut,Ut),ut=Ut)},setLocked:function(Ut){$=Ut},setClear:function(Ut,gt,$t,Vt,Ce){Ce===!0&&(Ut*=Vt,gt*=Vt,$t*=Vt),It.set(Ut,gt,$t,Vt),Rt.equals(It)===!1&&(i.clearColor(Ut,gt,$t,Vt),Rt.copy(It))},reset:function(){$=!1,ut=null,Rt.set(-1,0,0,0)}}}function n(){let $=!1,It=!1,ut=null,Rt=null,Ut=null;return{setReversed:function(gt){if(It!==gt){let $t=t.get("EXT_clip_control");gt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),It=gt;let Vt=Ut;Ut=null,this.setClear(Vt)}},getReversed:function(){return It},setTest:function(gt){gt?ft(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(gt){ut!==gt&&!$&&(i.depthMask(gt),ut=gt)},setFunc:function(gt){if(It&&(gt=nf[gt]),Rt!==gt){switch(gt){case va:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case wa:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case Sa:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case Ta:i.depthFunc(i.GREATER);break;case Ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Rt=gt}},setLocked:function(gt){$=gt},setClear:function(gt){Ut!==gt&&(Ut=gt,It&&(gt=1-gt),i.clearDepth(gt))},reset:function(){$=!1,ut=null,Rt=null,Ut=null,It=!1}}}function s(){let $=!1,It=null,ut=null,Rt=null,Ut=null,gt=null,$t=null,Vt=null,Ce=null;return{setTest:function(be){$||(be?ft(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(be){It!==be&&!$&&(i.stencilMask(be),It=be)},setFunc:function(be,bi,Ci){(ut!==be||Rt!==bi||Ut!==Ci)&&(i.stencilFunc(be,bi,Ci),ut=be,Rt=bi,Ut=Ci)},setOp:function(be,bi,Ci){(gt!==be||$t!==bi||Vt!==Ci)&&(i.stencilOp(be,bi,Ci),gt=be,$t=bi,Vt=Ci)},setLocked:function(be){$=be},setClear:function(be){Ce!==be&&(i.clearStencil(be),Ce=be)},reset:function(){$=!1,It=null,ut=null,Rt=null,Ut=null,gt=null,$t=null,Vt=null,Ce=null}}}let r=new e,a=new n,c=new s,h=new WeakMap,d=new WeakMap,f={},_={},m={},g=new WeakMap,b=[],w=null,x=!1,y=null,A=null,C=null,S=null,I=null,R=null,O=null,E=new he(0,0,0),D=0,U=!1,F=null,V=null,H=null,B=null,X=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,at=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(tt)[1]),J=at>=1):tt.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),J=at>=2);let nt=null,st={},Tt=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),Zt=new Te().fromArray(Tt),re=new Te().fromArray(Et);function xe($,It,ut,Rt){let Ut=new Uint8Array(4),gt=i.createTexture();i.bindTexture($,gt),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<ut;$t++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(It,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(It+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return gt}let lt={};lt[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),c.setClear(0),ft(i.DEPTH_TEST),a.setFunc(Us),vt(!1),St(hh),ft(i.CULL_FACE),xt(ji);function ft($){f[$]!==!0&&(i.enable($),f[$]=!0)}function Ft($){f[$]!==!1&&(i.disable($),f[$]=!1)}function te($,It){return m[$]!==It?(i.bindFramebuffer($,It),m[$]=It,$===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=It),$===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=It),!0):!1}function Nt($,It){let ut=b,Rt=!1;if($){ut=g.get(It),ut===void 0&&(ut=[],g.set(It,ut));let Ut=$.textures;if(ut.length!==Ut.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,$t=Ut.length;gt<$t;gt++)ut[gt]=i.COLOR_ATTACHMENT0+gt;ut.length=Ut.length,Rt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,Rt=!0);Rt&&i.drawBuffers(ut)}function ne($){return w!==$?(i.useProgram($),w=$,!0):!1}let Se={[os]:i.FUNC_ADD,[Md]:i.FUNC_SUBTRACT,[Td]:i.FUNC_REVERSE_SUBTRACT};Se[Ed]=i.MIN,Se[Ad]=i.MAX;let pt={[Cd]:i.ZERO,[Pd]:i.ONE,[Id]:i.SRC_COLOR,[ph]:i.SRC_ALPHA,[Od]:i.SRC_ALPHA_SATURATE,[Fd]:i.DST_COLOR,[Ld]:i.DST_ALPHA,[Rd]:i.ONE_MINUS_SRC_COLOR,[mh]:i.ONE_MINUS_SRC_ALPHA,[Nd]:i.ONE_MINUS_DST_COLOR,[Dd]:i.ONE_MINUS_DST_ALPHA,[Bd]:i.CONSTANT_COLOR,[Ud]:i.ONE_MINUS_CONSTANT_COLOR,[kd]:i.CONSTANT_ALPHA,[zd]:i.ONE_MINUS_CONSTANT_ALPHA};function xt($,It,ut,Rt,Ut,gt,$t,Vt,Ce,be){if($===ji){x===!0&&(Ft(i.BLEND),x=!1);return}if(x===!1&&(ft(i.BLEND),x=!0),$!==Sd){if($!==y||be!==U){if((A!==os||I!==os)&&(i.blendEquation(i.FUNC_ADD),A=os,I=os),be)switch($){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uh:i.blendFunc(i.ONE,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",$);break}else switch($){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dh:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fh:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",$);break}C=null,S=null,R=null,O=null,E.set(0,0,0),D=0,y=$,U=be}return}Ut=Ut||It,gt=gt||ut,$t=$t||Rt,(It!==A||Ut!==I)&&(i.blendEquationSeparate(Se[It],Se[Ut]),A=It,I=Ut),(ut!==C||Rt!==S||gt!==R||$t!==O)&&(i.blendFuncSeparate(pt[ut],pt[Rt],pt[gt],pt[$t]),C=ut,S=Rt,R=gt,O=$t),(Vt.equals(E)===!1||Ce!==D)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Ce),E.copy(Vt),D=Ce),y=$,U=!1}function yt($,It){$.side===_i?Ft(i.CULL_FACE):ft(i.CULL_FACE);let ut=$.side===Ke;It&&(ut=!ut),vt(ut),$.blending===er&&$.transparent===!1?xt(ji):xt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),a.setFunc($.depthFunc),a.setTest($.depthTest),a.setMask($.depthWrite),r.setMask($.colorWrite);let Rt=$.stencilWrite;c.setTest(Rt),Rt&&(c.setMask($.stencilWriteMask),c.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),c.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Jt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt($){F!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),F=$)}function St($){$!==vd?(ft(i.CULL_FACE),$!==V&&($===hh?i.cullFace(i.BACK):$===bd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),V=$}function Qt($){$!==H&&(J&&i.lineWidth($),H=$)}function Jt($,It,ut){$?(ft(i.POLYGON_OFFSET_FILL),(B!==It||X!==ut)&&(B=It,X=ut,a.getReversed()&&(It=-It),i.polygonOffset(It,ut))):Ft(i.POLYGON_OFFSET_FILL)}function se($){$?ft(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function oe($){$===void 0&&($=i.TEXTURE0+K-1),nt!==$&&(i.activeTexture($),nt=$)}function W($,It,ut){ut===void 0&&(nt===null?ut=i.TEXTURE0+K-1:ut=nt);let Rt=st[ut];Rt===void 0&&(Rt={type:void 0,texture:void 0},st[ut]=Rt),(Rt.type!==$||Rt.texture!==It)&&(nt!==ut&&(i.activeTexture(ut),nt=ut),i.bindTexture($,It||lt[$]),Rt.type=$,Rt.texture=It)}function ve(){let $=st[nt];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function me(){try{i.compressedTexImage2D(...arguments)}catch($){ee("WebGLState:",$)}}function N(){try{i.compressedTexImage3D(...arguments)}catch($){ee("WebGLState:",$)}}function T(){try{i.texSubImage2D(...arguments)}catch($){ee("WebGLState:",$)}}function Z(){try{i.texSubImage3D(...arguments)}catch($){ee("WebGLState:",$)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch($){ee("WebGLState:",$)}}function rt(){try{i.compressedTexSubImage3D(...arguments)}catch($){ee("WebGLState:",$)}}function bt(){try{i.texStorage2D(...arguments)}catch($){ee("WebGLState:",$)}}function wt(){try{i.texStorage3D(...arguments)}catch($){ee("WebGLState:",$)}}function ot(){try{i.texImage2D(...arguments)}catch($){ee("WebGLState:",$)}}function dt(){try{i.texImage3D(...arguments)}catch($){ee("WebGLState:",$)}}function Pt($){return _[$]!==void 0?_[$]:i.getParameter($)}function Gt($,It){_[$]!==It&&(i.pixelStorei($,It),_[$]=It)}function Dt($){Zt.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),Zt.copy($))}function At($){re.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),re.copy($))}function Wt($,It){let ut=d.get(It);ut===void 0&&(ut=new WeakMap,d.set(It,ut));let Rt=ut.get($);Rt===void 0&&(Rt=i.getUniformBlockIndex(It,$.name),ut.set($,Rt))}function Kt($,It){let Rt=d.get(It).get($);h.get(It)!==Rt&&(i.uniformBlockBinding(It,Rt,$.__bindingPointIndex),h.set(It,Rt))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},_={},nt=null,st={},m={},g=new WeakMap,b=[],w=null,x=!1,y=null,A=null,C=null,S=null,I=null,R=null,O=null,E=new he(0,0,0),D=0,U=!1,F=null,V=null,H=null,B=null,X=null,Zt.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),c.reset()}return{buffers:{color:r,depth:a,stencil:c},enable:ft,disable:Ft,bindFramebuffer:te,drawBuffers:Nt,useProgram:ne,setBlending:xt,setMaterial:yt,setFlipSided:vt,setCullFace:St,setLineWidth:Qt,setPolygonOffset:Jt,setScissorTest:se,activeTexture:oe,bindTexture:W,unbindTexture:ve,compressedTexImage2D:me,compressedTexImage3D:N,texImage2D:ot,texImage3D:dt,pixelStorei:Gt,getParameter:Pt,updateUBOMapping:Wt,uniformBlockBinding:Kt,texStorage2D:bt,texStorage3D:wt,texSubImage2D:T,texSubImage3D:Z,compressedTexSubImage2D:et,compressedTexSubImage3D:rt,scissor:Dt,viewport:At,reset:ue}}function iv(i,t,e,n,s,r,a){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new mt,f=new WeakMap,_=new Set,m,g=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,T){return b?new OffscreenCanvas(N,T):Nr("canvas")}function x(N,T,Z){let et=1,rt=me(N);if((rt.width>Z||rt.height>Z)&&(et=Z/Math.max(rt.width,rt.height)),et<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let bt=Math.floor(et*rt.width),wt=Math.floor(et*rt.height);m===void 0&&(m=w(bt,wt));let ot=T?w(bt,wt):m;return ot.width=bt,ot.height=wt,ot.getContext("2d").drawImage(N,0,0,bt,wt),ie("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+bt+"x"+wt+")."),ot}else return"data"in N&&ie("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),N;return N}function y(N){return N.generateMipmaps}function A(N){i.generateMipmap(N)}function C(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(N,T,Z,et,rt,bt=!1){if(N!==null){if(i[N]!==void 0)return i[N];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let wt;et&&(wt=t.get("EXT_texture_norm16"),wt||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=T;if(T===i.RED&&(Z===i.FLOAT&&(ot=i.R32F),Z===i.HALF_FLOAT&&(ot=i.R16F),Z===i.UNSIGNED_BYTE&&(ot=i.R8),Z===i.UNSIGNED_SHORT&&wt&&(ot=wt.R16_EXT),Z===i.SHORT&&wt&&(ot=wt.R16_SNORM_EXT)),T===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ot=i.R8UI),Z===i.UNSIGNED_SHORT&&(ot=i.R16UI),Z===i.UNSIGNED_INT&&(ot=i.R32UI),Z===i.BYTE&&(ot=i.R8I),Z===i.SHORT&&(ot=i.R16I),Z===i.INT&&(ot=i.R32I)),T===i.RG&&(Z===i.FLOAT&&(ot=i.RG32F),Z===i.HALF_FLOAT&&(ot=i.RG16F),Z===i.UNSIGNED_BYTE&&(ot=i.RG8),Z===i.UNSIGNED_SHORT&&wt&&(ot=wt.RG16_EXT),Z===i.SHORT&&wt&&(ot=wt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ot=i.RG8UI),Z===i.UNSIGNED_SHORT&&(ot=i.RG16UI),Z===i.UNSIGNED_INT&&(ot=i.RG32UI),Z===i.BYTE&&(ot=i.RG8I),Z===i.SHORT&&(ot=i.RG16I),Z===i.INT&&(ot=i.RG32I)),T===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),Z===i.UNSIGNED_INT&&(ot=i.RGB32UI),Z===i.BYTE&&(ot=i.RGB8I),Z===i.SHORT&&(ot=i.RGB16I),Z===i.INT&&(ot=i.RGB32I)),T===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),Z===i.UNSIGNED_INT&&(ot=i.RGBA32UI),Z===i.BYTE&&(ot=i.RGBA8I),Z===i.SHORT&&(ot=i.RGBA16I),Z===i.INT&&(ot=i.RGBA32I)),T===i.RGB&&(Z===i.UNSIGNED_SHORT&&wt&&(ot=wt.RGB16_EXT),Z===i.SHORT&&wt&&(ot=wt.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),T===i.RGBA){let dt=bt?Fr:ge.getTransfer(rt);Z===i.FLOAT&&(ot=i.RGBA32F),Z===i.HALF_FLOAT&&(ot=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(ot=dt===Me?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&wt&&(ot=wt.RGBA16_EXT),Z===i.SHORT&&wt&&(ot=wt.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function I(N,T){let Z;return N?T===null||T===ki||T===nr?Z=i.DEPTH24_STENCIL8:T===zi?Z=i.DEPTH32F_STENCIL8:T===ir&&(Z=i.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ki||T===nr?Z=i.DEPTH_COMPONENT24:T===zi?Z=i.DEPTH_COMPONENT32F:T===ir&&(Z=i.DEPTH_COMPONENT16),Z}function R(N,T){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ue&&N.minFilter!==qe?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function O(N){let T=N.target;T.removeEventListener("dispose",O),D(T),T.isVideoTexture&&f.delete(T),T.isHTMLTexture&&_.delete(T)}function E(N){let T=N.target;T.removeEventListener("dispose",E),F(T)}function D(N){let T=n.get(N);if(T.__webglInit===void 0)return;let Z=N.source,et=g.get(Z);if(et){let rt=et[T.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&U(N),Object.keys(et).length===0&&g.delete(Z)}n.remove(N)}function U(N){let T=n.get(N);i.deleteTexture(T.__webglTexture);let Z=N.source,et=g.get(Z);delete et[T.__cacheKey],a.memory.textures--}function F(N){let T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(T.__webglFramebuffer[et]))for(let rt=0;rt<T.__webglFramebuffer[et].length;rt++)i.deleteFramebuffer(T.__webglFramebuffer[et][rt]);else i.deleteFramebuffer(T.__webglFramebuffer[et]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[et])}else{if(Array.isArray(T.__webglFramebuffer))for(let et=0;et<T.__webglFramebuffer.length;et++)i.deleteFramebuffer(T.__webglFramebuffer[et]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let et=0;et<T.__webglColorRenderbuffer.length;et++)T.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[et]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let Z=N.textures;for(let et=0,rt=Z.length;et<rt;et++){let bt=n.get(Z[et]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),a.memory.textures--),n.remove(Z[et])}n.remove(N)}let V=0;function H(){V=0}function B(){return V}function X(N){V=N}function K(){let N=V;return N>=s.maxTextures&&ie("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,N}function J(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function at(N,T){let Z=n.get(N);if(N.isVideoTexture&&W(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Z.__version!==N.version){let et=N.image;if(et===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(Z,N,T);return}}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+T)}function tt(N,T){let Z=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){Ft(Z,N,T);return}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+T)}function nt(N,T){let Z=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){Ft(Z,N,T);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+T)}function st(N,T){let Z=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Z.__version!==N.version){te(Z,N,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+T)}let Tt={[ts]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[Aa]:i.MIRRORED_REPEAT},Et={[Ue]:i.NEAREST,[Hd]:i.NEAREST_MIPMAP_NEAREST,[po]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[rl]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},Zt={[$d]:i.NEVER,[jd]:i.ALWAYS,[qd]:i.LESS,[Hl]:i.LEQUAL,[Zd]:i.EQUAL,[Wl]:i.GEQUAL,[Jd]:i.GREATER,[Kd]:i.NOTEQUAL};function re(N,T){if(T.type===zi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===qe||T.magFilter===rl||T.magFilter===po||T.magFilter===Vn||T.minFilter===qe||T.minFilter===rl||T.minFilter===po||T.minFilter===Vn)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Tt[T.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Tt[T.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Tt[T.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Et[T.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Et[T.minFilter]),T.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Zt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ue||T.minFilter!==po&&T.minFilter!==Vn||T.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function xe(N,T){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",O));let et=T.source,rt=g.get(et);rt===void 0&&(rt={},g.set(et,rt));let bt=J(T);if(bt!==N.__cacheKey){rt[bt]===void 0&&(rt[bt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),rt[bt].usedTimes++;let wt=rt[N.__cacheKey];wt!==void 0&&(rt[N.__cacheKey].usedTimes--,wt.usedTimes===0&&U(T)),N.__cacheKey=bt,N.__webglTexture=rt[bt].texture}return Z}function lt(N,T,Z){return Math.floor(Math.floor(N/Z)/T)}function ft(N,T,Z,et){let bt=N.updateRanges;if(bt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,Z,et,T.data);else{bt.sort((Gt,Dt)=>Gt.start-Dt.start);let wt=0;for(let Gt=1;Gt<bt.length;Gt++){let Dt=bt[wt],At=bt[Gt],Wt=Dt.start+Dt.count,Kt=lt(At.start,T.width,4),ue=lt(Dt.start,T.width,4);At.start<=Wt+1&&Kt===ue&&lt(At.start+At.count-1,T.width,4)===Kt?Dt.count=Math.max(Dt.count,At.start+At.count-Dt.start):(++wt,bt[wt]=At)}bt.length=wt+1;let ot=e.getParameter(i.UNPACK_ROW_LENGTH),dt=e.getParameter(i.UNPACK_SKIP_PIXELS),Pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Gt=0,Dt=bt.length;Gt<Dt;Gt++){let At=bt[Gt],Wt=Math.floor(At.start/4),Kt=Math.ceil(At.count/4),ue=Wt%T.width,$=Math.floor(Wt/T.width),It=Kt,ut=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),e.pixelStorei(i.UNPACK_SKIP_ROWS,$),e.texSubImage2D(i.TEXTURE_2D,0,ue,$,It,ut,Z,et,T.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ot),e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function Ft(N,T,Z){let et=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(et=i.TEXTURE_3D);let rt=xe(N,T),bt=T.source;e.bindTexture(et,N.__webglTexture,i.TEXTURE0+Z);let wt=n.get(bt);if(bt.version!==wt.__version||rt===!0){if(e.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ut=ge.getPrimaries(ge.workingColorSpace),Rt=T.colorSpace===mn?null:ge.getPrimaries(T.colorSpace),Ut=T.colorSpace===mn||ut===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let dt=x(T.image,!1,s.maxTextureSize);dt=ve(T,dt);let Pt=r.convert(T.format,T.colorSpace),Gt=r.convert(T.type),Dt=S(T.internalFormat,Pt,Gt,T.normalized,T.colorSpace,T.isVideoTexture);re(et,T);let At,Wt=T.mipmaps,Kt=T.isVideoTexture!==!0,ue=wt.__version===void 0||rt===!0,$=bt.dataReady,It=R(T,dt);if(T.isDepthTexture)Dt=I(T.format===Gn,T.type),ue&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Dt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,dt.width,dt.height,0,Pt,Gt,null));else if(T.isDataTexture)if(Wt.length>0){Kt&&ue&&e.texStorage2D(i.TEXTURE_2D,It,Dt,Wt[0].width,Wt[0].height);for(let ut=0,Rt=Wt.length;ut<Rt;ut++)At=Wt[ut],Kt?$&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,At.width,At.height,Pt,Gt,At.data):e.texImage2D(i.TEXTURE_2D,ut,Dt,At.width,At.height,0,Pt,Gt,At.data);T.generateMipmaps=!1}else Kt?(ue&&e.texStorage2D(i.TEXTURE_2D,It,Dt,dt.width,dt.height),$&&ft(T,dt,Pt,Gt)):e.texImage2D(i.TEXTURE_2D,0,Dt,dt.width,dt.height,0,Pt,Gt,dt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Kt&&ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Dt,Wt[0].width,Wt[0].height,dt.depth);for(let ut=0,Rt=Wt.length;ut<Rt;ut++)if(At=Wt[ut],T.format!==Ii)if(Pt!==null)if(Kt){if($)if(T.layerUpdates.size>0){let Ut=Uh(At.width,At.height,T.format,T.type);for(let gt of T.layerUpdates){let $t=At.data.subarray(gt*Ut/At.data.BYTES_PER_ELEMENT,(gt+1)*Ut/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,gt,At.width,At.height,1,Pt,$t)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,At.width,At.height,dt.depth,Pt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Dt,At.width,At.height,dt.depth,0,At.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?$&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,At.width,At.height,dt.depth,Pt,Gt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Dt,At.width,At.height,dt.depth,0,Pt,Gt,At.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Kt&&ue&&e.texStorage2D(i.TEXTURE_2D,It,Dt,Wt[0].width,Wt[0].height);for(let ut=0,Rt=Wt.length;ut<Rt;ut++)At=Wt[ut],T.format!==Ii?Pt!==null?Kt?$&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,At.width,At.height,Pt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Dt,At.width,At.height,0,At.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?$&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,At.width,At.height,Pt,Gt,At.data):e.texImage2D(i.TEXTURE_2D,ut,Dt,At.width,At.height,0,Pt,Gt,At.data)}else if(T.isDataArrayTexture)if(Kt){if(ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Dt,dt.width,dt.height,dt.depth),$)if(T.layerUpdates.size>0){let ut=Uh(dt.width,dt.height,T.format,T.type);for(let Rt of T.layerUpdates){let Ut=dt.data.subarray(Rt*ut/dt.data.BYTES_PER_ELEMENT,(Rt+1)*ut/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Rt,dt.width,dt.height,1,Pt,Gt,Ut)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Pt,Gt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,dt.width,dt.height,dt.depth,0,Pt,Gt,dt.data);else if(T.isData3DTexture)Kt?(ue&&e.texStorage3D(i.TEXTURE_3D,It,Dt,dt.width,dt.height,dt.depth),$&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Pt,Gt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,dt.width,dt.height,dt.depth,0,Pt,Gt,dt.data);else if(T.isFramebufferTexture){if(ue)if(Kt)e.texStorage2D(i.TEXTURE_2D,It,Dt,dt.width,dt.height);else{let ut=dt.width,Rt=dt.height;for(let Ut=0;Ut<It;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Dt,ut,Rt,0,Pt,Gt,null),ut>>=1,Rt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let ut=i.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),dt.parentNode!==ut){ut.appendChild(dt),_.add(T),ut.onpaint=Rt=>{let Ut=Rt.changedElements;for(let gt of _)Ut.includes(gt.image)&&(gt.needsUpdate=!0)},ut.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,dt);else{let Ut=i.RGBA,gt=i.RGBA,$t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ut,gt,$t,dt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(Kt&&ue){let ut=me(Wt[0]);e.texStorage2D(i.TEXTURE_2D,It,Dt,ut.width,ut.height)}for(let ut=0,Rt=Wt.length;ut<Rt;ut++)At=Wt[ut],Kt?$&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Pt,Gt,At):e.texImage2D(i.TEXTURE_2D,ut,Dt,Pt,Gt,At);T.generateMipmaps=!1}else if(Kt){if(ue){let ut=me(dt);e.texStorage2D(i.TEXTURE_2D,It,Dt,ut.width,ut.height)}$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Gt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,Pt,Gt,dt);y(T)&&A(et),wt.__version=bt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function te(N,T,Z){if(T.image.length!==6)return;let et=xe(N,T),rt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+Z);let bt=n.get(rt);if(rt.version!==bt.__version||et===!0){e.activeTexture(i.TEXTURE0+Z);let wt=ge.getPrimaries(ge.workingColorSpace),ot=T.colorSpace===mn?null:ge.getPrimaries(T.colorSpace),dt=T.colorSpace===mn||wt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Pt=T.isCompressedTexture||T.image[0].isCompressedTexture,Gt=T.image[0]&&T.image[0].isDataTexture,Dt=[];for(let gt=0;gt<6;gt++)!Pt&&!Gt?Dt[gt]=x(T.image[gt],!0,s.maxCubemapSize):Dt[gt]=Gt?T.image[gt].image:T.image[gt],Dt[gt]=ve(T,Dt[gt]);let At=Dt[0],Wt=r.convert(T.format,T.colorSpace),Kt=r.convert(T.type),ue=S(T.internalFormat,Wt,Kt,T.normalized,T.colorSpace),$=T.isVideoTexture!==!0,It=bt.__version===void 0||et===!0,ut=rt.dataReady,Rt=R(T,At);re(i.TEXTURE_CUBE_MAP,T);let Ut;if(Pt){$&&It&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,ue,At.width,At.height);for(let gt=0;gt<6;gt++){Ut=Dt[gt].mipmaps;for(let $t=0;$t<Ut.length;$t++){let Vt=Ut[$t];T.format!==Ii?Wt!==null?$?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,$t,0,0,Vt.width,Vt.height,Wt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,$t,ue,Vt.width,Vt.height,0,Vt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,$t,0,0,Vt.width,Vt.height,Wt,Kt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,$t,ue,Vt.width,Vt.height,0,Wt,Kt,Vt.data)}}}else{if(Ut=T.mipmaps,$&&It){Ut.length>0&&Rt++;let gt=me(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,ue,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Gt){$?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Dt[gt].width,Dt[gt].height,Wt,Kt,Dt[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ue,Dt[gt].width,Dt[gt].height,0,Wt,Kt,Dt[gt].data);for(let $t=0;$t<Ut.length;$t++){let Ce=Ut[$t].image[gt].image;$?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,$t+1,0,0,Ce.width,Ce.height,Wt,Kt,Ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,$t+1,ue,Ce.width,Ce.height,0,Wt,Kt,Ce.data)}}else{$?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Wt,Kt,Dt[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ue,Wt,Kt,Dt[gt]);for(let $t=0;$t<Ut.length;$t++){let Vt=Ut[$t];$?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,$t+1,0,0,Wt,Kt,Vt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,$t+1,ue,Wt,Kt,Vt.image[gt])}}}y(T)&&A(i.TEXTURE_CUBE_MAP),bt.__version=rt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Nt(N,T,Z,et,rt,bt){let wt=r.convert(Z.format,Z.colorSpace),ot=r.convert(Z.type),dt=S(Z.internalFormat,wt,ot,Z.normalized,Z.colorSpace),Pt=n.get(T),Gt=n.get(Z);if(Gt.__renderTarget=T,!Pt.__hasExternalTextures){let Dt=Math.max(1,T.width>>bt),At=Math.max(1,T.height>>bt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,bt,dt,Dt,At,T.depth,0,wt,ot,null):e.texImage2D(rt,bt,dt,Dt,At,0,wt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),oe(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,rt,Gt.__webglTexture,0,se(T)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,rt,Gt.__webglTexture,bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(N,T,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,N),T.depthBuffer){let et=T.depthTexture,rt=et&&et.isDepthTexture?et.type:null,bt=I(T.stencilBuffer,rt),wt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;oe(T)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se(T),bt,T.width,T.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,se(T),bt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,bt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,N)}else{let et=T.textures;for(let rt=0;rt<et.length;rt++){let bt=et[rt],wt=r.convert(bt.format,bt.colorSpace),ot=r.convert(bt.type),dt=S(bt.internalFormat,wt,ot,bt.normalized,bt.colorSpace);oe(T)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se(T),dt,T.width,T.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,se(T),dt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,dt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(N,T,Z){let et=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=n.get(T.depthTexture);if(rt.__renderTarget=T,(!rt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),et){if(rt.__webglInit===void 0&&(rt.__webglInit=!0,T.depthTexture.addEventListener("dispose",O)),rt.__webglTexture===void 0){rt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),re(i.TEXTURE_CUBE_MAP,T.depthTexture);let Pt=r.convert(T.depthTexture.format),Gt=r.convert(T.depthTexture.type),Dt;T.depthTexture.format===Ji?Dt=i.DEPTH_COMPONENT24:T.depthTexture.format===Gn&&(Dt=i.DEPTH24_STENCIL8);for(let At=0;At<6;At++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Dt,T.width,T.height,0,Pt,Gt,null)}}else at(T.depthTexture,0);let bt=rt.__webglTexture,wt=se(T),ot=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,dt=T.depthTexture.format===Gn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ji)oe(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,ot,bt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,dt,ot,bt,0);else if(T.depthTexture.format===Gn)oe(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,ot,bt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,dt,ot,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(N){let T=n.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let et=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),et){let rt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,et.removeEventListener("dispose",rt)};et.addEventListener("dispose",rt),T.__depthDisposeCallback=rt}T.__boundDepthTexture=et}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let et=0;et<6;et++)Se(T.__webglFramebuffer[et],N,et);else{let et=N.texture.mipmaps;et&&et.length>0?Se(T.__webglFramebuffer[0],N,0):Se(T.__webglFramebuffer,N,0)}else if(Z){T.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[et]),T.__webglDepthbuffer[et]===void 0)T.__webglDepthbuffer[et]=i.createRenderbuffer(),ne(T.__webglDepthbuffer[et],N,!1);else{let rt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=T.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,bt)}}else{let et=N.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ne(T.__webglDepthbuffer,N,!1);else{let rt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,bt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(N,T,Z){let et=n.get(N);T!==void 0&&Nt(et.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&pt(N)}function yt(N){let T=N.texture,Z=n.get(N),et=n.get(T);N.addEventListener("dispose",E);let rt=N.textures,bt=N.isWebGLCubeRenderTarget===!0,wt=rt.length>1;if(wt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=T.version,a.memory.textures++),bt){Z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[ot]=[];for(let dt=0;dt<T.mipmaps.length;dt++)Z.__webglFramebuffer[ot][dt]=i.createFramebuffer()}else Z.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ot=0;ot<T.mipmaps.length;ot++)Z.__webglFramebuffer[ot]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(wt)for(let ot=0,dt=rt.length;ot<dt;ot++){let Pt=n.get(rt[ot]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&oe(N)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ot=0;ot<rt.length;ot++){let dt=rt[ot];Z.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[ot]);let Pt=r.convert(dt.format,dt.colorSpace),Gt=r.convert(dt.type),Dt=S(dt.internalFormat,Pt,Gt,dt.normalized,dt.colorSpace,N.isXRRenderTarget===!0),At=se(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Dt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,Z.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(Z.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(bt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),re(i.TEXTURE_CUBE_MAP,T);for(let ot=0;ot<6;ot++)if(T.mipmaps&&T.mipmaps.length>0)for(let dt=0;dt<T.mipmaps.length;dt++)Nt(Z.__webglFramebuffer[ot][dt],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else Nt(Z.__webglFramebuffer[ot],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);y(T)&&A(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ot=0,dt=rt.length;ot<dt;ot++){let Pt=rt[ot],Gt=n.get(Pt),Dt=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Dt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Dt,Gt.__webglTexture),re(Dt,Pt),Nt(Z.__webglFramebuffer,N,Pt,i.COLOR_ATTACHMENT0+ot,Dt,0),y(Pt)&&A(Dt)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ot=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,et.__webglTexture),re(ot,T),T.mipmaps&&T.mipmaps.length>0)for(let dt=0;dt<T.mipmaps.length;dt++)Nt(Z.__webglFramebuffer[dt],N,T,i.COLOR_ATTACHMENT0,ot,dt);else Nt(Z.__webglFramebuffer,N,T,i.COLOR_ATTACHMENT0,ot,0);y(T)&&A(ot),e.unbindTexture()}N.depthBuffer&&pt(N)}function vt(N){let T=N.textures;for(let Z=0,et=T.length;Z<et;Z++){let rt=T[Z];if(y(rt)){let bt=C(N),wt=n.get(rt).__webglTexture;e.bindTexture(bt,wt),A(bt),e.unbindTexture()}}}let St=[],Qt=[];function Jt(N){if(N.samples>0){if(oe(N)===!1){let T=N.textures,Z=N.width,et=N.height,rt=i.COLOR_BUFFER_BIT,bt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(N),ot=T.length>1;if(ot)for(let Pt=0;Pt<T.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let dt=N.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Pt=0;Pt<T.length;Pt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Pt]);let Gt=n.get(T[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,Z,et,0,0,Z,et,rt,i.NEAREST),h===!0&&(St.length=0,Qt.length=0,St.push(i.COLOR_ATTACHMENT0+Pt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(St.push(bt),Qt.push(bt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Qt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let Pt=0;Pt<T.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Pt]);let Gt=n.get(T[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&h){let T=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function se(N){return Math.min(s.maxSamples,N.samples)}function oe(N){let T=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function W(N){let T=a.render.frame;f.get(N)!==T&&(f.set(N,T),N.update())}function ve(N,T){let Z=N.colorSpace,et=N.format,rt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==Dr&&Z!==mn&&(ge.getTransfer(Z)===Me?(et!==Ii||rt!==xi)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",Z)),T}function me(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=K,this.resetTextureUnits=H,this.getTextureUnits=B,this.setTextureUnits=X,this.setTexture2D=at,this.setTexture2DArray=tt,this.setTexture3D=nt,this.setTextureCube=st,this.rebindTextures=xt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=oe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function nv(i,t){function e(n,s=mn){let r,a=ge.getTransfer(s);if(n===xi)return i.UNSIGNED_BYTE;if(n===al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Th)return i.BYTE;if(n===Eh)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===ol)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===zi)return i.FLOAT;if(n===Vi)return i.HALF_FLOAT;if(n===Ph)return i.ALPHA;if(n===Ih)return i.RGB;if(n===Ii)return i.RGBA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===Gn)return i.DEPTH_STENCIL;if(n===mo)return i.RED;if(n===cl)return i.RED_INTEGER;if(n===Hn)return i.RG;if(n===hl)return i.RG_INTEGER;if(n===ul)return i.RGBA_INTEGER;if(n===go||n===_o||n===xo||n===yo)if(a===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dl||n===fl||n===pl||n===ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gl||n===_l||n===xl||n===yl||n===vl||n===vo||n===bl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gl||n===_l)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yl)return r.COMPRESSED_R11_EAC;if(n===vl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===vo)return r.COMPRESSED_RG11_EAC;if(n===bl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wl||n===Sl||n===Ml||n===Tl||n===El||n===Al||n===Cl||n===Pl||n===Il||n===Rl||n===Ll||n===Dl||n===Fl||n===Nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ml)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===El)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Al)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ll)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ol||n===Bl||n===Ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ol)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kl||n===zl||n===bo||n===Vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Wr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hi({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new to(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},su=class extends Oi{constructor(t,e){super();let n=this,s=null,r=1,a=null,c="local-floor",h=1,d=null,f=null,_=null,m=null,g=null,b=null,w=typeof XRWebGLBinding<"u",x=new nu,y={},A=e.getContextAttributes(),C=null,S=null,I=[],R=[],O=new mt,E=null,D=null,U=new ri;U.viewport=new Te;let F=new ri;F.viewport=new Te;let V=[U,F],H=new tl,B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let ft=I[lt];return ft===void 0&&(ft=new Ws,I[lt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(lt){let ft=I[lt];return ft===void 0&&(ft=new Ws,I[lt]=ft),ft.getGripSpace()},this.getHand=function(lt){let ft=I[lt];return ft===void 0&&(ft=new Ws,I[lt]=ft),ft.getHandSpace()};function K(lt){let ft=R.indexOf(lt.inputSource);if(ft===-1)return;let Ft=I[ft];Ft!==void 0&&(Ft.update(lt.inputSource,lt.frame,d||a),Ft.dispatchEvent({type:lt.type,data:lt.inputSource}))}function J(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",at);for(let lt=0;lt<I.length;lt++){let ft=R[lt];ft!==null&&(R[lt]=null,I[lt].disconnect(ft))}B=null,X=null,x.reset();for(let lt in y)delete y[lt];if(t.setRenderTarget(C),g=null,m=null,_=null,s=null,S=null,xe.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(O.width,O.height,!1),D!==null){let lt=D.camera;lt.fov=D.fov,lt.zoom=D.zoom,lt.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,n.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){c=lt,n.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(lt){d=lt},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(s,e)),_},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",J),s.addEventListener("inputsourceschange",at),A.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ft=null,te=null,Nt=null;A.depth&&(Nt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ft=A.stencil?Gn:Ji,te=A.stencil?nr:ki);let ne={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};_=this.getBinding(),m=_.createProjectionLayer(ne),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),S=new pi(m.textureWidth,m.textureHeight,{format:Ii,type:xi,depthTexture:new Rn(m.textureWidth,m.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Ft),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let Ft={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,Ft),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new pi(g.framebufferWidth,g.framebufferHeight,{format:Ii,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(h),d=null,a=await s.requestReferenceSpace(c),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function at(lt){for(let ft=0;ft<lt.removed.length;ft++){let Ft=lt.removed[ft],te=R.indexOf(Ft);te>=0&&(R[te]=null,I[te].disconnect(Ft))}for(let ft=0;ft<lt.added.length;ft++){let Ft=lt.added[ft],te=R.indexOf(Ft);if(te===-1){for(let ne=0;ne<I.length;ne++)if(ne>=R.length){R.push(Ft),te=ne;break}else if(R[ne]===null){R[ne]=Ft,te=ne;break}if(te===-1)break}let Nt=I[te];Nt&&Nt.connect(Ft)}}let tt=new k,nt=new k;function st(lt,ft,Ft){tt.setFromMatrixPosition(ft.matrixWorld),nt.setFromMatrixPosition(Ft.matrixWorld);let te=tt.distanceTo(nt),Nt=ft.projectionMatrix.elements,ne=Ft.projectionMatrix.elements,Se=Nt[14]/(Nt[10]-1),pt=Nt[14]/(Nt[10]+1),xt=(Nt[9]+1)/Nt[5],yt=(Nt[9]-1)/Nt[5],vt=(Nt[8]-1)/Nt[0],St=(ne[8]+1)/ne[0],Qt=Se*vt,Jt=Se*St,se=te/(-vt+St),oe=se*-vt;if(ft.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(oe),lt.translateZ(se),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),Nt[10]===-1)lt.projectionMatrix.copy(ft.projectionMatrix),lt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let W=Se+se,ve=pt+se,me=Qt-oe,N=Jt+(te-oe),T=xt*pt/ve*W,Z=yt*pt/ve*W;lt.projectionMatrix.makePerspective(me,N,T,Z,W,ve),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function Tt(lt,ft){ft===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(ft.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let ft=lt.near,Ft=lt.far;x.texture!==null&&(x.depthNear>0&&(ft=x.depthNear),x.depthFar>0&&(Ft=x.depthFar)),H.near=F.near=U.near=ft,H.far=F.far=U.far=Ft,(B!==H.near||X!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),B=H.near,X=H.far),H.layers.mask=lt.layers.mask|6,U.layers.mask=H.layers.mask&-5,F.layers.mask=H.layers.mask&-3;let te=lt.parent,Nt=H.cameras;Tt(H,te);for(let ne=0;ne<Nt.length;ne++)Tt(Nt[ne],te);Nt.length===2?st(H,U,F):H.projectionMatrix.copy(U.projectionMatrix),D===null&&lt.isPerspectiveCamera&&(D={camera:lt,fov:lt.fov,zoom:lt.zoom}),Et(lt,H,te)};function Et(lt,ft,Ft){Ft===null?lt.matrix.copy(ft.matrixWorld):(lt.matrix.copy(Ft.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(ft.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(ft.projectionMatrix),lt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=Vs*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(m===null&&g===null))return h},this.setFoveation=function(lt){h=lt,m!==null&&(m.fixedFoveation=lt),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=lt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(H)},this.getCameraTexture=function(lt){return y[lt]};let Zt=null;function re(lt,ft){if(f=ft.getViewerPose(d||a),b=ft,f!==null){let Ft=f.views;g!==null&&(t.setRenderTargetFramebuffer(S,g.framebuffer),t.setRenderTarget(S));let te=!1;Ft.length!==H.cameras.length&&(H.cameras.length=0,te=!0);for(let pt=0;pt<Ft.length;pt++){let xt=Ft[pt],yt=null;if(g!==null)yt=g.getViewport(xt);else{let St=_.getViewSubImage(m,xt);yt=St.viewport,pt===0&&(t.setRenderTargetTextures(S,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(S))}let vt=V[pt];vt===void 0&&(vt=new ri,vt.layers.enable(pt),vt.viewport=new Te,V[pt]=vt),vt.matrix.fromArray(xt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(xt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(yt.x,yt.y,yt.width,yt.height),pt===0&&(H.matrix.copy(vt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),te===!0&&H.cameras.push(vt)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){_=n.getBinding();let pt=_.getDepthInformation(Ft[0]);pt&&pt.isValid&&pt.texture&&x.init(pt,s.renderState)}if(Nt&&Nt.includes("camera-access")&&w){t.state.unbindTexture(),_=n.getBinding();for(let pt=0;pt<Ft.length;pt++){let xt=Ft[pt].camera;if(xt){let yt=y[xt];yt||(yt=new Wr,y[xt]=yt);let vt=_.getCameraImage(xt);yt.sourceTexture=vt}}}}for(let Ft=0;Ft<I.length;Ft++){let te=R[Ft],Nt=I[Ft];te!==null&&Nt!==void 0&&Nt.update(te,ft,d||a)}Zt&&Zt(lt,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),b=null}let xe=new Df;xe.setAnimationLoop(re),this.setAnimationLoop=function(lt){Zt=lt},this.dispose=function(){}}},ov=new _e,kf=new ce;kf.set(-1,0,0,0,1,0,0,0,1);function av(i,t){function e(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function n(x,y){y.color.getRGB(x.fogColor.value,Nh(i)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function s(x,y,A,C,S){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?r(x,y):y.isMeshLambertMaterial?(r(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(r(x,y),_(x,y)):y.isMeshPhongMaterial?(r(x,y),f(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(r(x,y),m(x,y),y.isMeshPhysicalMaterial&&g(x,y,S)):y.isMeshMatcapMaterial?(r(x,y),b(x,y)):y.isMeshDepthMaterial?r(x,y):y.isMeshDistanceMaterial?(r(x,y),w(x,y)):y.isMeshNormalMaterial?r(x,y):y.isLineBasicMaterial?(a(x,y),y.isLineDashedMaterial&&c(x,y)):y.isPointsMaterial?h(x,y,A,C):y.isSpriteMaterial?d(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function r(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,e(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,e(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,e(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Ke&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,e(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Ke&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,e(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,e(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);let A=t.get(y),C=A.envMap,S=A.envMapRotation;C&&(x.envMap.value=C,x.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(S)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(kf),x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,x.aoMapTransform))}function a(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,e(y.map,x.mapTransform))}function c(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function h(x,y,A,C){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*A,x.scale.value=C*.5,y.map&&(x.map.value=y.map,e(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,e(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function d(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,e(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,e(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function f(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function m(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function g(x,y,A){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Ke&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.retroreflectivity>0&&(x.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=A.texture,x.transmissionSamplerSize.value.set(A.width,A.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,y){y.matcap&&(x.matcap.value=y.matcap)}function w(x,y){let A=t.get(y).light;x.referencePosition.value.setFromMatrixPosition(A.matrixWorld),x.nearDistance.value=A.shadow.camera.near,x.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lv(i,t,e,n){let s={},r={},a=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(S,I){let R=I.program;n.uniformBlockBinding(S,R)}function d(S,I){let R=s[S.id];R===void 0&&(x(S),R=f(S),s[S.id]=R,S.addEventListener("dispose",A));let O=I.program;n.updateUBOMapping(S,O);let E=t.render.frame;r[S.id]!==E&&(m(S),r[S.id]=E)}function f(S){let I=_();S.__bindingPointIndex=I;let R=i.createBuffer(),O=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,O,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,R),R}function _(){for(let S=0;S<c;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(S){let I=s[S.id],R=S.uniforms,O=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let E=0,D=R.length;E<D;E++){let U=R[E];if(Array.isArray(U))for(let F=0,V=U.length;F<V;F++)g(U[F],E,F,O);else g(U,E,0,O)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(S,I,R,O){if(w(S,I,R,O)===!0){let E=S.__offset,D=S.value;if(Array.isArray(D)){let U=0;for(let F=0;F<D.length;F++){let V=D[F],H=y(V);b(V,S.__data,U),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(U+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(D,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,S.__data)}}function b(S,I,R){typeof S=="number"||typeof S=="boolean"?I[0]=S:S.isMatrix3?(I[0]=S.elements[0],I[1]=S.elements[1],I[2]=S.elements[2],I[3]=0,I[4]=S.elements[3],I[5]=S.elements[4],I[6]=S.elements[5],I[7]=0,I[8]=S.elements[6],I[9]=S.elements[7],I[10]=S.elements[8],I[11]=0):ArrayBuffer.isView(S)?I.set(new S.constructor(S.buffer,S.byteOffset,I.length)):S.toArray(I,R)}function w(S,I,R,O){let E=S.value,D=I+"_"+R;if(O[D]===void 0)return typeof E=="number"||typeof E=="boolean"?O[D]=E:ArrayBuffer.isView(E)?O[D]=E.slice():O[D]=E.clone(),!0;{let U=O[D];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return O[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(U.equals(E)===!1)return U.copy(E),!0}}return!1}function x(S){let I=S.uniforms,R=0,O=16;for(let D=0,U=I.length;D<U;D++){let F=Array.isArray(I[D])?I[D]:[I[D]];for(let V=0,H=F.length;V<H;V++){let B=F[V],X=Array.isArray(B.value)?B.value:[B.value];for(let K=0,J=X.length;K<J;K++){let at=X[K],tt=y(at),nt=R%O,st=nt%tt.boundary,Tt=nt+st;R+=st,Tt!==0&&O-Tt<tt.storage&&(R+=O-Tt),B.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=R,R+=tt.storage}}}let E=R%O;return E>0&&(R+=O-E),S.__size=R,S.__cache={},this}function y(S){let I={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(I.boundary=4,I.storage=4):S.isVector2?(I.boundary=8,I.storage=8):S.isVector3||S.isColor?(I.boundary=16,I.storage=12):S.isVector4?(I.boundary=16,I.storage=16):S.isMatrix3?(I.boundary=48,I.storage=48):S.isMatrix4?(I.boundary=64,I.storage=64):S.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(I.boundary=16,I.storage=S.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",S),I}function A(S){let I=S.target;I.removeEventListener("dispose",A);let R=a.indexOf(I.__bindingPointIndex);a.splice(R,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function C(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:h,update:d,dispose:C}}var cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qi=null;function hv(){return Qi===null&&(Qi=new $s(cv,16,16,Hn,Vi),Qi.name="DFG_LUT",Qi.minFilter=qe,Qi.magFilter=qe,Qi.wrapS=$i,Qi.wrapT=$i,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}var Zl=class{constructor(t={}){let{canvas:e=Qd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1,outputBufferType:g=xi}=t;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=a;let w=g,x=new Set([ul,hl,cl]),y=new Set([xi,ki,ir,nr,al,ll]),A=new Uint32Array(4),C=new Int32Array(4),S=new k,I=null,R=null,O=[],E=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,F=!1,V=null,H=null,B=null,X=null;this._outputColorSpace=ze;let K=0,J=0,at=null,tt=-1,nt=null,st=new Te,Tt=new Te,Et=null,Zt=new he(0),re=0,xe=e.width,lt=e.height,ft=1,Ft=null,te=null,Nt=new Te(0,0,xe,lt),ne=new Te(0,0,xe,lt),Se=!1,pt=new qs,xt=!1,yt=!1,vt=new _e,St=new k,Qt=new Te,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function oe(){return at===null?ft:1}let W=n;function ve(P,Y){return e.getContext(P,Y)}let me,N,T,Z,et,rt,bt,wt,ot,dt,Pt,Gt,Dt,At,Wt,Kt,ue,$,It,ut,Rt,Ut,gt;try{let P={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:f,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${il}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",bi,!1),W===null){let Y="webgl2";if(W=ve(Y,P),W===null)throw ve(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(P){throw e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",bi,!1),ee("WebGLRenderer: "+P.message),P}function $t(){me=new _x(W),me.init(),Rt=new nv(W,me),N=new ax(W,me,t,Rt),T=new ev(W,me),N.reversedDepthBuffer&&m&&T.buffers.depth.setReversed(!0),H=W.createFramebuffer(),B=W.createFramebuffer(),X=W.createFramebuffer(),Z=new vx(W),et=new Vy,rt=new iv(W,me,T,et,N,Rt,Z),bt=new gx(U),wt=new w0(W),Ut=new rx(W,wt),ot=new xx(W,wt,Z,Ut),dt=new wx(W,ot,wt,Ut,Z),$=new bx(W,N,rt),Wt=new lx(et),Pt=new zy(U,bt,me,N,Ut,Wt),Gt=new av(U,et),Dt=new Hy,At=new Zy(me),ue=new sx(U,bt,T,dt,b,h),Kt=new tv(U,dt,N),gt=new lv(W,Z,N,T),It=new ox(W,me,Z),ut=new yx(W,me,Z),Z.programs=Pt.programs,U.capabilities=N,U.extensions=me,U.properties=et,U.renderLists=Dt,U.shadowMap=Kt,U.state=T,U.info=Z}w!==xi&&(D=new Mx(w,e.width,e.height,c,s,r));let Vt=new su(U,W);this.xr=Vt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let P=me.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=me.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(P){P!==void 0&&(ft=P,this.setSize(xe,lt,!1))},this.getSize=function(P){return P.set(xe,lt)},this.setSize=function(P,Y,it=!0){if(Vt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=P,lt=Y,e.width=Math.floor(P*ft),e.height=Math.floor(Y*ft),it===!0&&(e.style.width=P+"px",e.style.height=Y+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(xe*ft,lt*ft).floor()},this.setDrawingBufferSize=function(P,Y,it){xe=P,lt=Y,ft=it,e.width=Math.floor(P*it),e.height=Math.floor(Y*it),this.setViewport(0,0,P,Y)},this.setEffects=function(P){if(w===xi){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let Y=0;Y<P.length;Y++)if(P[Y].isOutputPass===!0){ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(st)},this.getViewport=function(P){return P.copy(Nt)},this.setViewport=function(P,Y,it,j){P.isVector4?Nt.set(P.x,P.y,P.z,P.w):Nt.set(P,Y,it,j),T.viewport(st.copy(Nt).multiplyScalar(ft).round())},this.getScissor=function(P){return P.copy(ne)},this.setScissor=function(P,Y,it,j){P.isVector4?ne.set(P.x,P.y,P.z,P.w):ne.set(P,Y,it,j),T.scissor(Tt.copy(ne).multiplyScalar(ft).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(P){T.setScissorTest(Se=P)},this.setOpaqueSort=function(P){Ft=P},this.setTransparentSort=function(P){te=P},this.getClearColor=function(P){return P.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(P=!0,Y=!0,it=!0){let j=0;if(P){let Q=!1;if(at!==null){let Bt=at.texture.format;Q=x.has(Bt)}if(Q){let Bt=at.texture.type,Mt=y.has(Bt),Ot=ue.getClearColor(),kt=ue.getClearAlpha(),Ht=Ot.r,Lt=Ot.g,de=Ot.b;Mt?(A[0]=Ht,A[1]=Lt,A[2]=de,A[3]=kt,W.clearBufferuiv(W.COLOR,0,A)):(C[0]=Ht,C[1]=Lt,C[2]=de,C[3]=kt,W.clearBufferiv(W.COLOR,0,C))}else j|=W.COLOR_BUFFER_BIT}Y&&(j|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(j|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&W.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),V=P},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",bi,!1),ue.dispose(),Dt.dispose(),At.dispose(),et.dispose(),bt.dispose(),dt.dispose(),Ut.dispose(),gt.dispose(),Pt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",No),Vt.removeEventListener("sessionend",Oo),on.stop()};function Ce(P){P.preventDefault(),Or("WebGLRenderer: Context Lost."),F=!0}function be(){Or("WebGLRenderer: Context Restored."),F=!1;let P=Z.autoReset,Y=Kt.enabled,it=Kt.autoUpdate,j=Kt.needsUpdate,Q=Kt.type;$t(),Z.autoReset=P,Kt.enabled=Y,Kt.autoUpdate=it,Kt.needsUpdate=j,Kt.type=Q}function bi(P){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ci(P){let Y=P.target;Y.removeEventListener("dispose",Ci),xc(Y)}function xc(P){yc(P),et.remove(P)}function yc(P){let Y=et.get(P).programs;Y!==void 0&&(Y.forEach(function(it){Pt.releaseProgram(it)}),P.isShaderMaterial&&Pt.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,it,j,Q,Bt){Y===null&&(Y=Jt);let Mt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ot=wn(P,Y,it,j,Q);T.setMaterial(j,Mt);let kt=it.index,Ht=1;if(j.wireframe===!0){if(kt=ot.getWireframeAttribute(it),kt===void 0)return;Ht=2}let Lt=it.drawRange,de=it.attributes.position,zt=Lt.start*Ht,we=(Lt.start+Lt.count)*Ht;Bt!==null&&(zt=Math.max(zt,Bt.start*Ht),we=Math.min(we,(Bt.start+Bt.count)*Ht)),kt!==null?(zt=Math.max(zt,0),we=Math.min(we,kt.count)):de!=null&&(zt=Math.max(zt,0),we=Math.min(we,de.count));let Oe=we-zt;if(Oe<0||Oe===1/0)return;Ut.setup(Q,j,Ot,it,kt);let Pe,o=It;if(kt!==null&&(Pe=wt.get(kt),o=ut,o.setIndex(Pe)),Q.isMesh)j.wireframe===!0?(T.setLineWidth(j.wireframeLinewidth*oe()),o.setMode(W.LINES)):o.setMode(W.TRIANGLES);else if(Q.isLine){let l=j.linewidth;l===void 0&&(l=1),T.setLineWidth(l*oe()),Q.isLineSegments?o.setMode(W.LINES):Q.isLineLoop?o.setMode(W.LINE_LOOP):o.setMode(W.LINE_STRIP)}else Q.isPoints?o.setMode(W.POINTS):Q.isSprite&&o.setMode(W.TRIANGLES);if(Q.isBatchedMesh)if(me.get("WEBGL_multi_draw"))o.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let l=Q._multiDrawStarts,u=Q._multiDrawCounts,p=Q._multiDrawCount,v=kt?wt.get(kt).bytesPerElement:1,M=et.get(j).currentProgram.getUniforms();for(let L=0;L<p;L++)M.setValue(W,"_gl_DrawID",L),o.render(l[L]/v,u[L])}else if(Q.isInstancedMesh)o.renderInstances(zt,Oe,Q.count);else if(it.isInstancedBufferGeometry){let l=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,u=Math.min(it.instanceCount,l);o.renderInstances(zt,Oe,u)}else o.render(zt,Oe)};function Fo(P,Y,it,j){V!==null&&P.isNodeMaterial&&V.setObject(j,P),xt===!0&&Wt.setState(P,it,!1),P.transparent===!0&&P.side===_i&&P.forceSinglePass===!1?(P.side=Ke,P.needsUpdate=!0,ps(P,Y,j),P.side=kn,P.needsUpdate=!0,ps(P,Y,j),P.side=_i):ps(P,Y,j)}this.compile=function(P,Y,it=null){it===null&&(it=P),V!==null&&V.renderStart(P,Y,it),R=At.get(it),R.init(Y),E.push(R),it.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),P!==it&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),R.setupLights(),V!==null&&V.updateLights(R.state.lightsArray),yt=this.localClippingEnabled,xt=Wt.init(this.clippingPlanes,yt),xt===!0&&Wt.setGlobalState(this.clippingPlanes,Y),V!==null&&Kt.render(R.state.shadowsArray,it,Y);let j=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Bt=Q.material;if(Bt)if(Array.isArray(Bt))for(let Mt=0;Mt<Bt.length;Mt++){let Ot=Bt[Mt];Fo(Ot,it,Y,Q),j.add(Ot)}else Fo(Bt,it,Y,Q),j.add(Bt)}),R=E.pop(),V!==null&&V.renderEnd(),j},this.compileAsync=function(P,Y,it=null){let j=this.compile(P,Y,it);return new Promise(Q=>{function Bt(){if(j.forEach(function(Mt){let kt=et.get(Mt).currentProgram;(kt===void 0||kt.isReady())&&j.delete(Mt)}),j.size===0){Q(P);return}setTimeout(Bt,10)}me.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let yr=null;function vc(P){yr&&yr(P)}function No(){on.stop()}function Oo(){on.start()}let on=new Df;on.setAnimationLoop(vc),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(P){yr=P,Vt.setAnimationLoop(P),P===null?on.stop():on.start()},Vt.addEventListener("sessionstart",No),Vt.addEventListener("sessionend",Oo),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;V!==null&&V.renderStart(P,Y);let it=Vt.enabled===!0&&Vt.isPresenting===!0,j=D!==null&&(at===null||it)&&D.begin(U,at);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(Y),Y=Vt.getCamera()),P.isScene===!0&&P.onBeforeRender(U,P,Y,at),R=At.get(P,E.length),R.init(Y),R.state.textureUnits=rt.getTextureUnits(),E.push(R),vt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),pt.setFromProjectionMatrix(vt,Ni,Y.reversedDepth),yt=this.localClippingEnabled,xt=Wt.init(this.clippingPlanes,yt),I=Dt.get(P,O.length),I.init(),O.push(I),Vt.enabled===!0&&Vt.isPresenting===!0){let Mt=U.xr.getDepthSensingMesh();Mt!==null&&vr(Mt,Y,-1/0,U.sortObjects)}vr(P,Y,0,U.sortObjects),I.finish(),V!==null&&V.updateLights(R.state.lightsArray),U.sortObjects===!0&&I.sort(Ft,te),se=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,se&&ue.addToRenderList(I,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Wt.beginShadows();let Q=R.state.shadowsArray;if(Kt.render(Q,P,Y),xt===!0&&Wt.endShadows(),(j&&D.hasRenderPass())===!1){let Mt=I.opaque,Ot=I.transmissive;if(R.setupLights(),Y.isArrayCamera){let kt=Y.cameras;if(Ot.length>0)for(let Ht=0,Lt=kt.length;Ht<Lt;Ht++){let de=kt[Ht];bn(Mt,Ot,P,de)}se&&ue.render(P);for(let Ht=0,Lt=kt.length;Ht<Lt;Ht++){let de=kt[Ht];Bo(I,P,de,de.viewport)}}else Ot.length>0&&bn(Mt,Ot,P,Y),se&&ue.render(P),Bo(I,P,Y)}at!==null&&J===0&&(rt.updateMultisampleRenderTarget(at),rt.updateRenderTargetMipmap(at)),j&&D.end(U),P.isScene===!0&&P.onAfterRender(U,P,Y),Ut.resetDefaultState(),tt=-1,nt=null,E.pop(),E.length>0?(R=E[E.length-1],rt.setTextureUnits(R.state.textureUnits),xt===!0&&Wt.setGlobalState(U.clippingPlanes,R.state.camera)):R=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,V!==null&&V.renderEnd()};function vr(P,Y,it,j){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)it=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLightProbeGrid)R.pushLightProbeGrid(P);else if(P.isLight)R.pushLight(P),P.castShadow&&R.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(pt)){j&&Qt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(vt);let Mt=dt.update(P),Ot=P.material;Ot.visible&&I.push(P,Mt,Ot,it,Qt.z,null,Y)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(pt))){let Mt=dt.update(P),Ot=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Qt.copy(P.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Qt.copy(Mt.boundingSphere.center)),Qt.applyMatrix4(P.matrixWorld).applyMatrix4(vt)),Array.isArray(Ot)){let kt=Mt.groups;for(let Ht=0,Lt=kt.length;Ht<Lt;Ht++){let de=kt[Ht],zt=Ot[de.materialIndex];zt&&zt.visible&&I.push(P,Mt,zt,it,Qt.z,de,Y)}}else Ot.visible&&I.push(P,Mt,Ot,it,Qt.z,null,Y)}}let Bt=P.children;for(let Mt=0,Ot=Bt.length;Mt<Ot;Mt++)vr(Bt[Mt],Y,it,j)}function Bo(P,Y,it,j){let{opaque:Q,transmissive:Bt,transparent:Mt}=P;R.setupLightsView(it),xt===!0&&Wt.setGlobalState(U.clippingPlanes,it),j&&T.viewport(st.copy(j)),Q.length>0&&qn(Q,Y,it),Bt.length>0&&qn(Bt,Y,it),Mt.length>0&&qn(Mt,Y,it),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function bn(P,Y,it,j){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[j.id]===void 0){let zt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[j.id]=new pi(1,1,{generateMipmaps:!0,type:zt?Vi:xi,minFilter:Vn,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}let Bt=R.state.transmissionRenderTarget[j.id],Mt=j.viewport||st;Bt.setSize(Mt.z*U.transmissionResolutionScale,Mt.w*U.transmissionResolutionScale);let Ot=U.getRenderTarget(),kt=U.getActiveCubeFace(),Ht=U.getActiveMipmapLevel();U.setRenderTarget(Bt),U.getClearColor(Zt),re=U.getClearAlpha(),re<1&&U.setClearColor(16777215,.5),U.clear(),se&&ue.render(it);let Lt=U.toneMapping;U.toneMapping=Ui;let de=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),R.setupLightsView(j),xt===!0&&Wt.setGlobalState(U.clippingPlanes,j),qn(P,it,j),rt.updateMultisampleRenderTarget(Bt),rt.updateRenderTargetMipmap(Bt),me.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let we=0,Oe=Y.length;we<Oe;we++){let Pe=Y[we],{object:o,geometry:l,material:u,group:p}=Pe;if(u.side===_i&&o.layers.test(j.layers)){let v=u.side;u.side=Ke,u.needsUpdate=!0,Uo(o,it,j,l,u,p),u.side=v,u.needsUpdate=!0,zt=!0}}zt===!0&&(rt.updateMultisampleRenderTarget(Bt),rt.updateRenderTargetMipmap(Bt))}U.setRenderTarget(Ot,kt,Ht),U.setClearColor(Zt,re),de!==void 0&&(j.viewport=de),U.toneMapping=Lt}function qn(P,Y,it){let j=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Bt=P.length;Q<Bt;Q++){let Mt=P[Q],{object:Ot,geometry:kt,group:Ht}=Mt,Lt=Mt.material;Lt.allowOverride===!0&&j!==null&&(Lt=j),Ot.layers.test(it.layers)&&Uo(Ot,Y,it,kt,Lt,Ht)}}function Uo(P,Y,it,j,Q,Bt){V!==null&&Q.isNodeMaterial&&V.setObject(P,Q),P.onBeforeRender(U,Y,it,j,Q,Bt),P.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(U,Y,it,j,P,Bt),Q.transparent===!0&&Q.side===_i&&Q.forceSinglePass===!1?(Q.side=Ke,Q.needsUpdate=!0,U.renderBufferDirect(it,Y,j,Q,P,Bt),Q.side=kn,Q.needsUpdate=!0,U.renderBufferDirect(it,Y,j,Q,P,Bt),Q.side=_i):U.renderBufferDirect(it,Y,j,Q,P,Bt),P.onAfterRender(U,Y,it,j,Q,Bt)}function ps(P,Y,it){Y.isScene!==!0&&(Y=Jt);let j=et.get(P),Q=R.state.lights,Bt=R.state.shadowsArray,Mt=Q.state.version,Ot=Pt.getParameters(P,Q.state,Bt,Y,it,R.state.lightProbeGridArray),kt=Pt.getProgramCacheKey(Ot),Ht=j.programs;j.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?Y.environment:null,j.fog=Y.fog;let Lt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;j.envMap=bt.get(P.envMap||j.environment,Lt),j.envMapRotation=j.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,Ht===void 0&&(P.addEventListener("dispose",Ci),Ht=new Map,j.programs=Ht);let de=Ht.get(kt);if(de!==void 0){if(j.currentProgram===de&&j.lightsStateVersion===Mt)return zo(P,Ot),de}else Ot.uniforms=Pt.getUniforms(P),V!==null&&P.isNodeMaterial&&V.build(P,it,Ot),P.onBeforeCompile(Ot,U),de=Pt.acquireProgram(Ot,kt),Ht.set(kt,de),j.uniforms=Ot.uniforms;let zt=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(zt.clippingPlanes=Wt.uniform),zo(P,Ot),j.needsLights=Sc(P),j.lightsStateVersion=Mt,j.needsLights&&(zt.ambientLightColor.value=Q.state.ambient,zt.lightProbe.value=Q.state.probe,zt.sunLights.value=Q.state.sun,zt.sunLightShadows.value=Q.state.sunShadow,zt.directionalLights.value=Q.state.directional,zt.directionalLightShadows.value=Q.state.directionalShadow,zt.spotLights.value=Q.state.spot,zt.spotLightShadows.value=Q.state.spotShadow,zt.rectAreaLights.value=Q.state.rectArea,zt.ltc_1.value=Q.state.rectAreaLTC1,zt.ltc_2.value=Q.state.rectAreaLTC2,zt.pointLights.value=Q.state.point,zt.pointLightShadows.value=Q.state.pointShadow,zt.hemisphereLights.value=Q.state.hemi,zt.sunShadowMatrix.value=Q.state.sunShadowMatrix,zt.sunShadowCascade.value=Q.state.sunShadowCascade,zt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,zt.spotLightMatrix.value=Q.state.spotLightMatrix,zt.spotLightMap.value=Q.state.spotLightMap,zt.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=R.state.lightProbeGridArray.length>0,j.currentProgram=de,j.uniformsList=null,de}function ko(P){if(P.uniformsList===null){let Y=P.currentProgram.getUniforms();P.uniformsList=or.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function zo(P,Y){let it=et.get(P);it.outputColorSpace=Y.outputColorSpace,it.batching=Y.batching,it.batchingColor=Y.batchingColor,it.instancing=Y.instancing,it.instancingColor=Y.instancingColor,it.instancingMorph=Y.instancingMorph,it.skinning=Y.skinning,it.morphTargets=Y.morphTargets,it.morphNormals=Y.morphNormals,it.morphColors=Y.morphColors,it.morphTargetsCount=Y.morphTargetsCount,it.numClippingPlanes=Y.numClippingPlanes,it.numIntersection=Y.numClipIntersection,it.vertexAlphas=Y.vertexAlphas,it.vertexTangents=Y.vertexTangents,it.toneMapping=Y.toneMapping}function bc(P,Y){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;S.setFromMatrixPosition(Y.matrixWorld);for(let it=0,j=P.length;it<j;it++){let Q=P[it];if(Q.texture!==null&&Q.boundingBox.containsPoint(S))return Q}return null}function wn(P,Y,it,j,Q){Y.isScene!==!0&&(Y=Jt),rt.resetTextureUnits();let Bt=Y.fog,Mt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?Y.environment:null,Ot=at===null?U.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ge.workingColorSpace,kt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ht=bt.get(j.envMap||Mt,kt),Lt=j.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,de=!!it.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),zt=!!it.morphAttributes.position,we=!!it.morphAttributes.normal,Oe=!!it.morphAttributes.color,Pe=Ui;j.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Pe=U.toneMapping);let o=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,l=o!==void 0?o.length:0,u=et.get(j),p=R.state.lights;if(xt===!0&&(yt===!0||P!==nt)){let _t=P===nt&&j.id===tt;Wt.setState(j,P,_t)}let v=!1;j.version===u.__version?(u.needsLights&&u.lightsStateVersion!==p.state.version||u.outputColorSpace!==Ot||Q.isBatchedMesh&&u.batching===!1||!Q.isBatchedMesh&&u.batching===!0||Q.isBatchedMesh&&u.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&u.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&u.instancing===!1||!Q.isInstancedMesh&&u.instancing===!0||Q.isSkinnedMesh&&u.skinning===!1||!Q.isSkinnedMesh&&u.skinning===!0||Q.isInstancedMesh&&u.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&u.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&u.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&u.instancingMorph===!1&&Q.morphTexture!==null||u.envMap!==Ht||j.fog===!0&&u.fog!==Bt||u.numClippingPlanes!==void 0&&(u.numClippingPlanes!==Wt.numPlanes||u.numIntersection!==Wt.numIntersection)||u.vertexAlphas!==Lt||u.vertexTangents!==de||u.morphTargets!==zt||u.morphNormals!==we||u.morphColors!==Oe||u.toneMapping!==Pe||u.morphTargetsCount!==l||!!u.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(v=!0):(v=!0,u.__version=j.version);let M=u.currentProgram;v===!0&&(M=ps(j,Y,Q),V&&j.isNodeMaterial&&V.onUpdateProgram(j,M,u));let L=!1,z=!1,G=!1,q=M.getUniforms(),ht=u.uniforms;if(T.useProgram(M.program)&&(L=!0,z=!0,G=!0),j.id!==tt&&(tt=j.id,z=!0),u.needsLights){let _t=bc(R.state.lightProbeGridArray,Q);u.lightProbeGrid!==_t&&(u.lightProbeGrid=_t,z=!0)}if(L||nt!==P){T.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),q.setValue(W,"projectionMatrix",P.projectionMatrix),q.setValue(W,"viewMatrix",P.matrixWorldInverse);let Xt=q.map.cameraPosition;Xt!==void 0&&Xt.setValue(W,St.setFromMatrixPosition(P.matrixWorld)),N.logarithmicDepthBuffer&&q.setValue(W,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&q.setValue(W,"isOrthographic",P.isOrthographicCamera===!0),nt!==P&&(nt=P,z=!0,G=!0)}if(u.needsLights&&(p.state.sunShadowMap.length>0&&q.setValue(W,"sunShadowMap",p.state.sunShadowMap,rt),p.state.directionalShadowMap.length>0&&q.setValue(W,"directionalShadowMap",p.state.directionalShadowMap,rt),p.state.spotShadowMap.length>0&&q.setValue(W,"spotShadowMap",p.state.spotShadowMap,rt),p.state.pointShadowMap.length>0&&q.setValue(W,"pointShadowMap",p.state.pointShadowMap,rt)),Q.isSkinnedMesh){q.setOptional(W,Q,"bindMatrix"),q.setOptional(W,Q,"bindMatrixInverse");let _t=Q.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),q.setValue(W,"boneTexture",_t.boneTexture,rt))}Q.isBatchedMesh&&(q.setOptional(W,Q,"batchingTexture"),q.setValue(W,"batchingTexture",Q._matricesTexture,rt),q.setOptional(W,Q,"batchingIdTexture"),q.setValue(W,"batchingIdTexture",Q._indirectTexture,rt),q.setOptional(W,Q,"batchingColorTexture"),Q._colorsTexture!==null&&q.setValue(W,"batchingColorTexture",Q._colorsTexture,rt));let ct=it.morphAttributes;if((ct.position!==void 0||ct.normal!==void 0||ct.color!==void 0)&&$.update(Q,it,M),(z||u.receiveShadow!==Q.receiveShadow)&&(u.receiveShadow=Q.receiveShadow,q.setValue(W,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&Y.environment!==null&&(ht.envMapIntensity.value=Y.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=hv()),z){if(q.setValue(W,"toneMappingExposure",U.toneMappingExposure),u.needsLights&&wc(ht,G),Bt&&j.fog===!0&&Gt.refreshFogUniforms(ht,Bt),Gt.refreshMaterialUniforms(ht,j,ft,lt,R.state.transmissionRenderTarget[P.id]),u.needsLights&&u.lightProbeGrid){let _t=u.lightProbeGrid;ht.probesSH.value=_t.texture,ht.probesMin.value.copy(_t.boundingBox.min),ht.probesMax.value.copy(_t.boundingBox.max),ht.probesResolution.value.copy(_t.resolution)}or.upload(W,ko(u),ht,rt)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(or.upload(W,ko(u),ht,rt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&q.setValue(W,"center",Q.center),q.setValue(W,"modelViewMatrix",Q.modelViewMatrix),q.setValue(W,"normalMatrix",Q.normalMatrix),q.setValue(W,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let _t=j.uniformsGroups;for(let Xt=0,le=_t.length;Xt<le;Xt++){let fe=_t[Xt];gt.update(fe,M),gt.bind(fe,M)}}return M}function wc(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.sunLights.needsUpdate=Y,P.sunLightShadows.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function Sc(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(P,Y,it){let j=et.get(P);j.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),et.get(P.texture).__webglTexture=Y,et.get(P.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:it,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Y){let it=et.get(P);it.__webglFramebuffer=Y,it.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,it=0){at=P,K=Y,J=it;let j=null,Q=!1,Bt=!1;if(P){let Ot=et.get(P);if(Ot.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(W.FRAMEBUFFER,Ot.__webglFramebuffer),st.copy(P.viewport),Tt.copy(P.scissor),Et=P.scissorTest,T.viewport(st),T.scissor(Tt),T.setScissorTest(Et),tt=-1;return}else if(Ot.__webglFramebuffer===void 0)rt.setupRenderTarget(P);else if(Ot.__hasExternalTextures)rt.rebindTextures(P,et.get(P.texture).__webglTexture,et.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Lt=P.depthTexture;if(Ot.__boundDepthTexture!==Lt){if(Lt!==null&&et.has(Lt)&&(P.width!==Lt.image.width||P.height!==Lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(P)}}let kt=P.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Bt=!0);let Ht=et.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ht[Y])?j=Ht[Y][it]:j=Ht[Y],Q=!0):P.samples>0&&rt.useMultisampledRTT(P)===!1?j=et.get(P).__webglMultisampledFramebuffer:Array.isArray(Ht)?j=Ht[it]:j=Ht,st.copy(P.viewport),Tt.copy(P.scissor),Et=P.scissorTest}else st.copy(Nt).multiplyScalar(ft).floor(),Tt.copy(ne).multiplyScalar(ft).floor(),Et=Se;if(it!==0&&(j=H),T.bindFramebuffer(W.FRAMEBUFFER,j)&&T.drawBuffers(P,j),T.viewport(st),T.scissor(Tt),T.setScissorTest(Et),Q){let Ot=et.get(P.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ot.__webglTexture,it)}else if(Bt){let Ot=Y;for(let kt=0;kt<P.textures.length;kt++){let Ht=et.get(P.textures[kt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+kt,Ht.__webglTexture,it,Ot)}}else if(P!==null&&it!==0){let Ot=et.get(P.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ot.__webglTexture,it)}tt=-1};function Vo(P){let Y=et.get(P);return(Y.__readFormat!==P.format||Y.__readType!==P.type)&&(Y.__readFormat=P.format,Y.__readType=P.type,Y.__formatReadable=N.textureFormatReadable(P.format),Y.__typeReadable=N.textureTypeReadable(P.type)),Y}this.readRenderTargetPixels=function(P,Y,it,j,Q,Bt,Mt,Ot=0){if(!(P&&P.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=et.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Mt!==void 0&&(kt=kt[Mt]),kt){T.bindFramebuffer(W.FRAMEBUFFER,kt);try{let Ht=P.textures[Ot],Lt=Ht.format,de=Ht.type;P.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ot);let zt=Vo(Ht);if(zt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-j&&it>=0&&it<=P.height-Q&&W.readPixels(Y,it,j,Q,Rt.convert(Lt),Rt.convert(de),Bt)}finally{let Ht=at!==null?et.get(at).__webglFramebuffer:null;T.bindFramebuffer(W.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(P,Y,it,j,Q,Bt,Mt,Ot=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=et.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Mt!==void 0&&(kt=kt[Mt]),kt)if(Y>=0&&Y<=P.width-j&&it>=0&&it<=P.height-Q){T.bindFramebuffer(W.FRAMEBUFFER,kt);let Ht=P.textures[Ot],Lt=Ht.format,de=Ht.type;P.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ot);let zt=Vo(Ht);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let we=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,we),W.bufferData(W.PIXEL_PACK_BUFFER,Bt.byteLength,W.STREAM_READ),W.readPixels(Y,it,j,Q,Rt.convert(Lt),Rt.convert(de),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let Oe=at!==null?et.get(at).__webglFramebuffer:null;T.bindFramebuffer(W.FRAMEBUFFER,Oe);let Pe=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await ef(W,Pe,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,we),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Bt),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(we),W.deleteSync(Pe),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Y=null,it=0){let j=Math.pow(2,-it),Q=Math.floor(P.image.width*j),Bt=Math.floor(P.image.height*j),Mt=Y!==null?Y.x:0,Ot=Y!==null?Y.y:0;rt.setTexture2D(P,0),W.copyTexSubImage2D(W.TEXTURE_2D,it,0,0,Mt,Ot,Q,Bt),T.unbindTexture()},this.copyTextureToTexture=function(P,Y,it=null,j=null,Q=0,Bt=0){let Mt,Ot,kt,Ht,Lt,de,zt,we,Oe,Pe=P.isCompressedTexture?P.mipmaps[Bt]:P.image;if(it!==null)Mt=it.max.x-it.min.x,Ot=it.max.y-it.min.y,kt=it.isBox3?it.max.z-it.min.z:1,Ht=it.min.x,Lt=it.min.y,de=it.isBox3?it.min.z:0;else{let ht=Math.pow(2,-Q);Mt=Math.floor(Pe.width*ht),Ot=Math.floor(Pe.height*ht),P.isDataArrayTexture?kt=Pe.depth:P.isData3DTexture?kt=Math.floor(Pe.depth*ht):kt=1,Ht=0,Lt=0,de=0}j!==null?(zt=j.x,we=j.y,Oe=j.z):(zt=0,we=0,Oe=0);let o=Rt.convert(Y.format),l=Rt.convert(Y.type),u;Y.isData3DTexture?(rt.setTexture3D(Y,0),u=W.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(rt.setTexture2DArray(Y,0),u=W.TEXTURE_2D_ARRAY):(rt.setTexture2D(Y,0),u=W.TEXTURE_2D),T.activeTexture(W.TEXTURE0),T.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Y.flipY),T.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),T.pixelStorei(W.UNPACK_ALIGNMENT,Y.unpackAlignment);let p=T.getParameter(W.UNPACK_ROW_LENGTH),v=T.getParameter(W.UNPACK_IMAGE_HEIGHT),M=T.getParameter(W.UNPACK_SKIP_PIXELS),L=T.getParameter(W.UNPACK_SKIP_ROWS),z=T.getParameter(W.UNPACK_SKIP_IMAGES);T.pixelStorei(W.UNPACK_ROW_LENGTH,Pe.width),T.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Pe.height),T.pixelStorei(W.UNPACK_SKIP_PIXELS,Ht),T.pixelStorei(W.UNPACK_SKIP_ROWS,Lt),T.pixelStorei(W.UNPACK_SKIP_IMAGES,de);let G=P.isDataArrayTexture||P.isData3DTexture,q=Y.isDataArrayTexture||Y.isData3DTexture;if(P.isDepthTexture){let ht=et.get(P),ct=et.get(Y),_t=et.get(ht.__renderTarget),Xt=et.get(ct.__renderTarget);T.bindFramebuffer(W.READ_FRAMEBUFFER,_t.__webglFramebuffer),T.bindFramebuffer(W.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let le=0;le<kt;le++)G&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,et.get(P).__webglTexture,Q,de+le),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,et.get(Y).__webglTexture,Bt,Oe+le)),W.blitFramebuffer(Ht,Lt,Mt,Ot,zt,we,Mt,Ot,W.DEPTH_BUFFER_BIT,W.NEAREST);T.bindFramebuffer(W.READ_FRAMEBUFFER,null),T.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(Q!==0||P.isRenderTargetTexture||et.has(P)){let ht=et.get(P),ct=et.get(Y);T.bindFramebuffer(W.READ_FRAMEBUFFER,B),T.bindFramebuffer(W.DRAW_FRAMEBUFFER,X);for(let _t=0;_t<kt;_t++)G?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ht.__webglTexture,Q,de+_t):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ht.__webglTexture,Q),q?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ct.__webglTexture,Bt,Oe+_t):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ct.__webglTexture,Bt),Q!==0?W.blitFramebuffer(Ht,Lt,Mt,Ot,zt,we,Mt,Ot,W.COLOR_BUFFER_BIT,W.NEAREST):q?W.copyTexSubImage3D(u,Bt,zt,we,Oe+_t,Ht,Lt,Mt,Ot):W.copyTexSubImage2D(u,Bt,zt,we,Ht,Lt,Mt,Ot);T.bindFramebuffer(W.READ_FRAMEBUFFER,null),T.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else q?P.isDataTexture||P.isData3DTexture?W.texSubImage3D(u,Bt,zt,we,Oe,Mt,Ot,kt,o,l,Pe.data):Y.isCompressedArrayTexture?W.compressedTexSubImage3D(u,Bt,zt,we,Oe,Mt,Ot,kt,o,Pe.data):W.texSubImage3D(u,Bt,zt,we,Oe,Mt,Ot,kt,o,l,Pe):P.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Bt,zt,we,Mt,Ot,o,l,Pe.data):P.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Bt,zt,we,Pe.width,Pe.height,o,Pe.data):W.texSubImage2D(W.TEXTURE_2D,Bt,zt,we,Mt,Ot,o,l,Pe);T.pixelStorei(W.UNPACK_ROW_LENGTH,p),T.pixelStorei(W.UNPACK_IMAGE_HEIGHT,v),T.pixelStorei(W.UNPACK_SKIP_PIXELS,M),T.pixelStorei(W.UNPACK_SKIP_ROWS,L),T.pixelStorei(W.UNPACK_SKIP_IMAGES,z),Bt===0&&Y.generateMipmaps&&W.generateMipmap(u),T.unbindTexture()},this.initRenderTarget=function(P){et.get(P).__webglFramebuffer===void 0&&rt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?rt.setTextureCube(P,0):P.isData3DTexture?rt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?rt.setTexture2DArray(P,0):rt.setTexture2D(P,0),T.unbindTexture()},this.resetState=function(){K=0,J=0,at=null,T.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};var Vf={type:"change"},ou={type:"start"},Hf={type:"end"},jl=new Pn,Gf=new ci,uv=Math.cos(70*wo.DEG2RAD),He=new k,yi=2*Math.PI,Ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ru=1e-6,Ql=class extends ho{constructor(t,e=null){super(t,e),this.state=Ae.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bn.ROTATE,MIDDLE:Bn.DOLLY,RIGHT:Bn.PAN},this.touches={ONE:Un.ROTATE,TWO:Un.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Mi,this._lastTargetPosition=new k,this._quat=new Mi().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qs,this._sphericalDelta=new Qs,this._scale=1,this._panOffset=new k,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new k,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fv.bind(this),this._onPointerDown=dv.bind(this),this._onPointerUp=pv.bind(this),this._onContextMenu=bv.bind(this),this._onMouseWheel=_v.bind(this),this._onKeyDown=xv.bind(this),this._onTouchStart=yv.bind(this),this._onTouchMove=vv.bind(this),this._onMouseDown=mv.bind(this),this._onMouseMove=gv.bind(this),this._interceptControlDown=wv.bind(this),this._interceptControlUp=Sv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ae.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vf),this.update(),this.state=Ae.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;He.copy(e).sub(this.target),He.applyQuaternion(this._quat),this._spherical.setFromVector3(He),this.autoRotate&&this.state===Ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=yi:n>Math.PI&&(n-=yi),s<-Math.PI?s+=yi:s>Math.PI&&(s-=yi),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(He.setFromSpherical(this._spherical),He.applyQuaternion(this._quatInverse),e.copy(this.target).add(He),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let c=He.length();a=this._clampDistance(c*this._scale);let h=c-a;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),r=!!h}else if(this.object.isOrthographicCamera){let c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object);let h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=h!==this.object.zoom;let d=new k(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(c),this.object.updateMatrixWorld(),a=He.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(jl.origin.copy(this.object.position),jl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jl.direction))<uv?this.object.lookAt(this.target):(Gf.setFromNormalAndCoplanarPoint(this.object.up,this.target),jl.intersectPlane(Gf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ru||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ru||this._lastTargetPosition.distanceToSquared(this.target)>ru?(this.dispatchEvent(Vf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?yi/60*this.autoRotateSpeed*t:yi/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){He.setFromMatrixColumn(e,0),He.multiplyScalar(-t),this._panOffset.add(He)}_panUp(t,e){this.screenSpacePanning===!0?He.setFromMatrixColumn(e,1):(He.setFromMatrixColumn(e,0),He.crossVectors(this.object.up,He)),He.multiplyScalar(t),this._panOffset.add(He)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;He.copy(s).sub(this.target);let r=He.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,c=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(yi*this._rotateDelta.x/e.clientHeight),this._rotateUp(yi*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(yi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-yi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(yi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-yi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(yi*this._rotateDelta.x/e.clientHeight),this._rotateUp(yi*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,c=(t.pageY+e.y)*.5;this._updateZoomParameters(a,c)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function dv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function fv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function pv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hf),this.state=Ae.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function mv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Bn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ae.DOLLY;break;case Bn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ae.ROTATE}break;case Bn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ae.PAN}break;default:this.state=Ae.NONE}this.state!==Ae.NONE&&this.dispatchEvent(ou)}function gv(i){switch(this.state){case Ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function _v(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ae.NONE||(i.preventDefault(),this.dispatchEvent(ou),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hf))}function xv(i){this.enabled!==!1&&this._handleKeyDown(i)}function yv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Un.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ae.TOUCH_ROTATE;break;case Un.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ae.TOUCH_PAN;break;default:this.state=Ae.NONE}break;case 2:switch(this.touches.TWO){case Un.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ae.TOUCH_DOLLY_PAN;break;case Un.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ae.TOUCH_DOLLY_ROTATE;break;default:this.state=Ae.NONE}break;default:this.state=Ae.NONE}this.state!==Ae.NONE&&this.dispatchEvent(ou)}function vv(i){switch(this._trackPointer(i),this.state){case Ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ae.NONE}}function bv(i){this.enabled!==!1&&i.preventDefault()}function wv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Wf=new Ti,tc=new k,lr=class extends ao{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ye(t,3)),this.setAttribute("uv",new ye(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new On(e,6,1);return this.setAttribute("instanceStart",new mi(n,3,0)),this.setAttribute("instanceEnd",new mi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new On(e,6,1);return this.setAttribute("instanceColorStart",new mi(n,3,0)),this.setAttribute("instanceColorEnd",new mi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new eo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Wf.setFromBufferAttribute(e),this.boundingBox.union(Wf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)tc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(tc)),tc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(tc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ct.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new mt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ui.line={uniforms:So.merge([Ct.common,Ct.fog,Ct.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var cr=class extends hi{constructor(t){super({type:"LineMaterial",uniforms:So.clone(ui.line.uniforms),vertexShader:ui.line.vertexShader,fragmentShader:ui.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var au=new Te,Xf=new k,Yf=new k,je=new Te,Qe=new Te,tn=new Te,lu=new k,cu=new _e,ti=new co,$f=new k,ec=new Ti,ic=new Bi,en=new Te,nn,hs;function qf(i,t,e){return en.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),en.multiplyScalar(1/en.w),en.x=hs/e.width,en.y=hs/e.height,en.applyMatrix4(i.projectionMatrixInverse),en.multiplyScalar(1/en.w),Math.abs(Math.max(en.x,en.y))}function Mv(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let c=0,h=a;c<h;c++){ti.start.fromBufferAttribute(s,c),ti.end.fromBufferAttribute(r,c),ti.applyMatrix4(e);let d=new k,f=new k;nn.distanceSqToSegment(ti.start,ti.end,f,d),f.distanceTo(d)<hs*.5&&t.push({point:f,pointOnLine:d,distance:nn.origin.distanceTo(f),object:i,face:null,faceIndex:c,uv:null,uv1:null})}}function Tv(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,c=i.geometry,h=c.attributes.instanceStart,d=c.attributes.instanceEnd,f=Math.min(c.instanceCount,h.count),_=-t.near;nn.at(1,tn),tn.w=1,tn.applyMatrix4(t.matrixWorldInverse),tn.applyMatrix4(n),tn.multiplyScalar(1/tn.w),tn.x*=r.x/2,tn.y*=r.y/2,tn.z=0,lu.copy(tn),cu.multiplyMatrices(t.matrixWorldInverse,a);for(let m=0,g=f;m<g;m++){if(je.fromBufferAttribute(h,m),Qe.fromBufferAttribute(d,m),je.w=1,Qe.w=1,je.applyMatrix4(cu),Qe.applyMatrix4(cu),je.z>_&&Qe.z>_)continue;if(je.z>_){let C=je.z-Qe.z,S=(je.z-_)/C;je.lerp(Qe,S)}else if(Qe.z>_){let C=Qe.z-je.z,S=(Qe.z-_)/C;Qe.lerp(je,S)}je.applyMatrix4(n),Qe.applyMatrix4(n),je.multiplyScalar(1/je.w),Qe.multiplyScalar(1/Qe.w),je.x*=r.x/2,je.y*=r.y/2,Qe.x*=r.x/2,Qe.y*=r.y/2,ti.start.copy(je),ti.start.z=0,ti.end.copy(Qe),ti.end.z=0;let w=ti.closestPointToPointParameter(lu,!0);ti.at(w,$f);let x=wo.lerp(je.z,Qe.z,w),y=x>=-1&&x<=1,A=lu.distanceTo($f)<hs*.5;if(y&&A){ti.start.fromBufferAttribute(h,m),ti.end.fromBufferAttribute(d,m),ti.start.applyMatrix4(a),ti.end.applyMatrix4(a);let C=new k,S=new k;nn.distanceSqToSegment(ti.start,ti.end,S,C),e.push({point:S,pointOnLine:C,distance:nn.origin.distanceTo(S),object:i,face:null,faceIndex:m,uv:null,uv1:null})}}}var nc=class extends De{constructor(t=new lr,e=new cr({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,c=0,h=e.count;a<h;a++,c+=2)Xf.fromBufferAttribute(e,a),Yf.fromBufferAttribute(n,a),s[c]=c===0?0:s[c-1],s[c+1]=s[c]+Xf.distanceTo(Yf);let r=new On(s,2,1);return t.setAttribute("instanceDistanceStart",new mi(r,1,0)),t.setAttribute("instanceDistanceEnd",new mi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;nn=t.ray;let a=this.matrixWorld,c=this.geometry,h=this.material;hs=h.linewidth+r,c.boundingSphere===null&&c.computeBoundingSphere(),ic.copy(c.boundingSphere).applyMatrix4(a);let d;if(n)d=hs*.5;else{let _=Math.max(s.near,ic.distanceToPoint(nn.origin));d=qf(s,_,h.resolution)}if(ic.radius+=d,nn.intersectsSphere(ic)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),ec.copy(c.boundingBox).applyMatrix4(a);let f;if(n)f=hs*.5;else{let _=Math.max(s.near,ec.distanceToPoint(nn.origin));f=qf(s,_,h.resolution)}ec.expandByScalar(f),nn.intersectsBox(ec)!==!1&&(n?Mv(this,e):Tv(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(au),this.material.uniforms.resolution.value.set(au.z,au.w))}};function hu(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},c=i[0].morphTargetsRelative,h=new Re,d=0;for(let f=0;f<i.length;++f){let _=i[f],m=0;if(e!==(_.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in _.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(_.attributes[g]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(c!==_.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in _.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;a[g]===void 0&&(a[g]=[]),a[g].push(_.morphAttributes[g])}if(t){let g;if(e)g=_.index.count;else if(_.attributes.position!==void 0)g=_.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;h.addGroup(d,g,f),d+=g}}if(e){let f=0,_=[];for(let m=0;m<i.length;++m){let g=i[m].index;for(let b=0;b<g.count;++b)_.push(g.getX(b)+f);f+=i[m].attributes.position.count}h.setIndex(_)}for(let f in r){let _=Zf(r[f]);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;h.setAttribute(f,_)}for(let f in a){let _=a[f][0].length;if(_!==0){h.morphAttributes=h.morphAttributes||{},h.morphAttributes[f]=[];for(let m=0;m<_;++m){let g=[];for(let w=0;w<a[f].length;++w)g.push(a[f][w][m]);let b=Zf(g);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;h.morphAttributes[f].push(b)}}}return h}function Zf(i){let t,e,n,s=-1,r=0;for(let d=0;d<i.length;++d){let f=i[d];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*e}let a=new t(r),c=new Ye(a,e,n),h=0;for(let d=0;d<i.length;++d){let f=i[d];if(f.isInterleavedBufferAttribute){let _=h/e;for(let m=0,g=f.count;m<g;m++)for(let b=0;b<e;b++){let w=f.getComponent(m,b);c.setComponent(m+_,b,w)}}else a.set(f.array,h);h+=f.count*e}return s!==void 0&&(c.gpuType=s),c}var di=Yp(Jf(),1),gn=1e3,{ClipType:Wn,PolyType:Kf,PolyFillType:jf,JoinType:Ev,EndType:Av}=di.default,Xn=.24,Cv=.06,Pv={n:[0,-1],s:[0,1],w:[-1,0],e:[1,0]};function ei(i){let t=1/0,e=1/0,n=-1/0,s=-1/0;for(let[r,a]of i)r<t&&(t=r),a<e&&(e=a),r>n&&(n=r),a>s&&(s=a);return{x0:t,y0:e,x1:n,y1:s}}function sn(i){if(i.points)return i.points;if(i.rect){let[t,e,n,s]=i.rect;return[[t,e],[n,e],[n,s],[t,s]]}throw new Error(`Room "${i.name||i.id}" needs "rect" or "points"`)}function rc(i){let t=i.map(([e,n])=>({X:Math.round(e*gn),Y:Math.round(n*gn)}));return di.default.Clipper.Orientation(t)||t.reverse(),t}var uu=i=>i.map(t=>[t.X/gn,t.Y/gn]);function hr(i,t,e,n){return rc([[i,t],[e,t],[e,n],[i,n]])}function Ao(i,t){let e=new di.default.ClipperOffset(4,.25);e.AddPaths(i,Ev.jtMiter,Av.etClosedPolygon);let n=new di.default.Paths;return e.Execute(n,t*gn),n}function us(i,t,e){let n=new di.default.Clipper;n.AddPaths(t,Kf.ptSubject,!0),e&&e.length&&n.AddPaths(e,Kf.ptClip,!0);let s=new di.default.PolyTree;return n.Execute(i,s,jf.pftNonZero,jf.pftNonZero),s}function Qf(i,t,e){return di.default.Clipper.PolyTreeToPaths(us(i,t,e))}function tp(i){return di.default.Clipper.CleanPolygons(i,2).filter(t=>t.length>=3&&Math.abs(di.default.Clipper.Area(t))>400)}function ur(i){return di.default.JS.PolyTreeToExPolygons(i).map(t=>({o:uu(t.outer),h:t.holes.map(uu)})).filter(t=>t.o.length>=3)}function ep(i,t,e){let n=0,s={X:Math.round(t*gn),Y:Math.round(e*gn)};for(let r of i)di.default.Clipper.PointInPolygon(s,r)!==0&&n++;return n%2===1}function ip(i,t,e){let n=[hr(0,0,i,t)],s=e.map(r=>hr(r.u0,r.v0,r.u1,r.v1));return ur(us(Wn.ctDifference,n,s))}function oc(i){let t=i.rooms.map(m=>({room:m,pts:sn(m)})),e=t.map(m=>rc(m.pts)),n=tp(Ao(Ao(e,.08),-.08)),s=tp(Ao(n,Xn)),r=[];for(let m of e)r.push(...Ao([m],-Cv));let a=us(Wn.ctDifference,s,r),c=di.default.Clipper.PolyTreeToPaths(a),h=[],d=[],f=[];for(let m of i.openings||[]){let g=t.find(X=>X.room.id===m.room);if(!g){h.push(`Opening "${m.name||m.kind}" points at room "${m.room}", which does not exist on ${i.name||i.id}.`);continue}let b=Pv[m.wall];if(!b){h.push(`Opening "${m.name||m.kind}" in ${g.room.name}: "wall" must be n, s, e or w.`);continue}let w=ei(g.pts),x=m.at,y=m.width,A={n:[x,w.y0-.5,x+y,w.y0+.25],s:[x,w.y1-.25,x+y,w.y1+.5],w:[w.x0-.5,x,w.x0+.25,x+y],e:[w.x1-.25,x,w.x1+.5,x+y]}[m.wall],C=hr(...A),S=Qf(Wn.ctIntersection,[C],c);if(!S.length){h.push(`${m.name||m.kind} in ${g.room.name}: no wall found at ${m.at} m on the ${m.wall} side.`);continue}let I=b[0]===0,R=y*.3,O=I?hr(A[0]+R,A[1],A[2]-R,A[3]):hr(A[0],A[1]+R,A[2],A[3]-R),E=Qf(Wn.ctIntersection,[O],c),D=ei((E.length?E:S).flatMap(uu)),U=I?{x0:x,x1:x+y,y0:D.y0,y1:D.y1}:{x0:D.x0,x1:D.x1,y0:x,y1:x+y},F=(U.x0+U.x1)/2,V=(U.y0+U.y1)/2,H=!ep(n,F+b[0]*.45,V+b[1]*.45),B=m.kind||"door";["window","bifold","garage","frontdoor","extdoor"].includes(B)&&!H&&h.push(`${m.name||B} in ${g.room.name} is on an inside wall (${m.wall} side). Windows and outside doors need an outside wall.`),["door","opening"].includes(B)&&H&&h.push(`A plain door in ${g.room.name} (${m.wall} side) opens to the outside. Use kind "extdoor" or "frontdoor" if that is right.`),d.push({...m,kind:B,b:[U.x0,U.y0,U.x1,U.y1],n:b,ext:H,rect:A}),B==="opening"&&f.push(C)}let _=f.length?us(Wn.ctDifference,c,f):a;return{inside:n,rooms:t,slab:ur(us(Wn.ctUnion,s,[])),solid:ur(_),openings:d,warnings:h,isInside:(m,g)=>ep(n,m,g),roomAt:(m,g)=>{for(let b=0;b<e.length;b++)if(di.default.Clipper.PointInPolygon({X:Math.round(m*gn),Y:Math.round(g*gn)},e[b])!==0)return t[b].room;return null},cap:m=>m.length?ur(us(Wn.ctDifference,di.default.Clipper.PolyTreeToPaths(_),m.map(g=>hr(...g.rect)))):ur(_)}}function np(i,t,e){let n=t.map(s=>rc(s.o.map(([r,a])=>[r+e[0],a+e[1]])));return ur(us(Wn.ctDifference,i.map(s=>rc(s.o)),Ao(n,.02)))}var Iv={living:{wall:"#F78FB3",floor:"#9C8CE8",pattern:"plain"},kitchen:{wall:"#7FD8BE",floor:"#FFD93B",floor2:"#FFF8D6",pattern:"check"},dining:{wall:"#FFC857",floor:"#DE8F4E",floor2:"#C97A3B",pattern:"wood"},hall:{wall:"#FFE27A",floor:"#DE8F4E",floor2:"#C97A3B",pattern:"wood"},bath:{wall:"#6FD3F5",floor:"#FFFFFF",floor2:"#8FDDF7",pattern:"check"},bedroom:[{wall:"#8FC4FA",floor:"#F9BFD8",pattern:"plain"},{wall:"#F9A8CB",floor:"#B7E4A6",pattern:"plain"},{wall:"#B4E68E",floor:"#FAD592",pattern:"plain"},{wall:"#CDB1F7",floor:"#FBE59A",pattern:"plain"}],study:{wall:"#A6DE83",floor:"#DE8F4E",floor2:"#C97A3B",pattern:"wood"},utility:{wall:"#BCE3F7",floor:"#E9EDF2",floor2:"#C3CCD6",pattern:"check"},garage:{wall:"#D9D9E3",floor:"#C2C4CF",floor2:"#B3B5C1",pattern:"tile"},stairs:{wall:"#FFE27A",floor:"#DE8F4E",floor2:"#C97A3B",pattern:"wood"},store:{wall:"#E3D2F7",floor:"#D9C7A8",pattern:"plain"},other:{wall:"#FCE3B8",floor:"#F3D9A4",pattern:"plain"}},Rv={living:{wall:"#F6E7CF",floor:"#F0BE96",pattern:"plain"},kitchen:{wall:"#F3F0E4",floor:"#F7E08C",floor2:"#FBF1C4",pattern:"check"},dining:{wall:"#F6E7CF",floor:"#D99A62",floor2:"#C98850",pattern:"wood"},hall:{wall:"#F3ECE0",floor:"#D5C6F2",pattern:"plain"},bath:{wall:"#E4F3F8",floor:"#FFFFFF",floor2:"#B5E1EE",pattern:"check"},bedroom:[{wall:"#EEF2F8",floor:"#C6D8F7",pattern:"plain"},{wall:"#F8EEF2",floor:"#F5C3DA",pattern:"plain"},{wall:"#F0F6EA",floor:"#C9E7B3",pattern:"plain"},{wall:"#F8F2E4",floor:"#FFD9A6",pattern:"plain"}],study:{wall:"#EEF5E6",floor:"#BFE4A9",pattern:"plain"},utility:{wall:"#F1F1F1",floor:"#EADFC8",pattern:"plain"},garage:{wall:"#E2E2E2",floor:"#D0D0D0",floor2:"#C2C2C2",pattern:"tile"},stairs:{wall:"#F3ECE0",floor:"#D99A62",floor2:"#C98850",pattern:"wood"},store:{wall:"#F1EBE0",floor:"#E6E0D2",pattern:"plain"},other:{wall:"#FFF3D6",floor:"#EEE4CF",pattern:"plain"}},Co={toon:{sky:"#6CCBFA",cloud:"#FFFFFF",sun:"#FFDD33",ink:"#1b1b1b",lawn:"#62CE3C",lawn2:"#56C232",earth:"#B57E4E",drive:"#CFC6E0",drive2:"#BDB3D1",path:"#F0E2BF",patio:"#F4D9A8",patio2:"#E6C68E",road:"#807C90",kerb:"#DAD7E3",fence:"#E9A85C",fencePost:"#C98238",hedge:"#3FB03A",leaf:["#3FB03A","#56C245","#2F9E44"],blossom:"#E64980",trunk:"#9A5B34",flowers:["#FF5D8F","#FFD23F","#FFFFFF","#B197FC"],exterior:"#F9B58B",exteriorPattern:null,exterior2:"#F0A377",trim:"#FFFFFF",roof:"#C4513A",roof2:"#A8432F",roofPattern:"rooftile",chimney:"#D9744F",door:"#7A4FC4",doorInner:"#FFF7E6",knob:"#FFD23F",garage:"#FFF0D6",garage2:"#E5C9A0",wallCut:"#FFFDF4",inner:"#FCE3B8",slab:"#8C6A4A",glass:"#BDEBFF",curtain:"#9B6BE0",shutter:"#DDE4EA",shutter2:"#8793A0",shutterBox:"#8793A0",wood:"#9A5B34",woodLight:"#DBA15B",steel:"#C3CAD2",white:"#FBFBFB",water:"#9FE3FA",sofa:"#E07B2E",sofaDark:"#BE6220",duvet:["#5BA8F5","#F58FB7","#7FD069","#F5C24B"],rug:"#F2645A",cabinet:"#59B9E0",worktop:"#FFF4DC",tvUnit:"#6C56A8",fridge:"#D5F0F5",plant:"#3FB03A",pot:"#D9744F",dark:"#2B2F3A",planned:"#C4C4C4",bulbOn:"#FFE033",heat:"#FF8A3D",ok:"#69D14A",bad:"#FF5C5C",play:"#B79CFF",screen:"#7FD9FF",rooms:Iv,shade:[165,255]},brick:{sky:"#8FD3FF",cloud:"#FFFFFF",sun:"#FFD83A",ink:"#1b1b1b",lawn:"#7CC53F",lawn2:"#6DB634",earth:"#9A7448",drive:"#DDA98A",drive2:"#CC9778",path:"#E7D8BC",patio:"#E7D8BC",patio2:"#D8C7A6",road:"#70737C",kerb:"#C9CBD1",fence:"#C98E4E",fencePost:"#8A5A3C",hedge:"#3F9A35",leaf:["#3F9A35","#4FB03F","#2F8A3A"],blossom:"#A3243B",trunk:"#8A5A3C",flowers:["#E64980","#FFD23F","#FFFFFF","#9775FA"],exterior:"#D2603F",exteriorPattern:"brick",exterior2:"#B94E30",trim:"#FFFFFF",roof:"#4B4F5A",roof2:"#3A3D46",roofPattern:"rooftile",chimney:"#B94E30",door:"#2F5D8C",doorInner:"#FFFFFF",knob:"#D9D9D9",garage:"#F4F4F4",garage2:"#CFCFCF",wallCut:"#FFFDF4",inner:"#FFF3D6",slab:"#7A6652",glass:"#BDE8FF",curtain:"#E6DCC8",shutter:"#D9E0E6",shutter2:"#7d8a94",shutterBox:"#8B949C",wood:"#8A5A3C",woodLight:"#C9A063",steel:"#B9BEC5",white:"#F6F6F6",water:"#BFE9FF",sofa:"#E8734A",sofaDark:"#C95A33",duvet:["#A5C8F5","#F5B5D6","#C9E7B3","#FFD9A6"],rug:"#F2D8A0",cabinet:"#F3F3F3",worktop:"#B9BEC5",tvUnit:"#8A5A3C",fridge:"#B9BEC5",plant:"#3F9A35",pot:"#B94E30",dark:"#2B2F33",planned:"#BDBDBD",bulbOn:"#FFE033",heat:"#FF8A3D",ok:"#7CC44A",bad:"#FF6B6B",play:"#B79CFF",screen:"#7FD0FF",rooms:Rv,shade:[150,255]}};function ac(i,t){let e=Co[i]||Co.toon;return{...e,...t||{},rooms:{...e.rooms,...t&&t.rooms||{}}}}var Lv=[["stairs",/stair/i],["garage",/garage|carport/i],["kitchen",/kitchen/i],["dining",/dining|breakfast/i],["bath",/bath|ensuite|en-suite|shower|wc|toilet|cloak|wet room/i],["bedroom",/bed|nursery|guest/i],["living",/living|lounge|sitting|family|snug|tv room|den/i],["study",/study|office|play|games|gym|library/i],["utility",/utility|laundry|boot|pantry/i],["hall",/hall|landing|porch|entrance|lobby|corridor/i],["store",/store|robe|wardrobe|closet|cupboard|loft|attic/i]];function Dv(i){if(i.type)return i.type;let t=`${i.name||""} ${i.id||""}`;for(let[e,n]of Lv)if(n.test(t))return e;return"other"}function lc(i,t,e){let n=Dv(t),s=i.rooms[n]||i.rooms.other;return Array.isArray(s)&&(s=s[e%s.length]),{type:n,wall:t.wall_colour||s.wall,floor:t.floor_colour||s.floor,floor2:t.floor_colour2||s.floor2||null,pattern:t.pattern||(t.floor_colour?"plain":s.pattern)}}function Fv(i,t){let e=parseInt(i.slice(1),16),n=s=>Math.max(0,Math.min(255,Math.round(s*t)));return`rgb(${n(e>>16)},${n(e>>8&255)},${n(e&255)})`}var du={check:1,wood:1.2,tile:1,brick:.9,rooftile:.42,stripes:3.2,paving:1.2,planks:.5};function sp(i,t,e){let n=document.createElement("canvas"),s=128;n.width=n.height=s;let r=n.getContext("2d");switch(e=e||Fv(t,.86),r.fillStyle=t,r.fillRect(0,0,s,s),r.fillStyle=e,r.strokeStyle=e,r.lineWidth=4,i){case"check":r.fillRect(0,0,s/2,s/2),r.fillRect(s/2,s/2,s/2,s/2);break;case"wood":for(let a=0;a<4;a++)r.fillRect(0,a*32,s,3),r.fillRect((a*53+20)%s,a*32,3,32);break;case"tile":r.fillRect(0,0,s,3),r.fillRect(0,0,3,s),r.fillRect(0,s/2,s,3),r.fillRect(s/2,0,3,s);break;case"brick":case"paving":for(let a=0;a<4;a++){r.fillRect(0,a*32,s,4);for(let c=a%2*32;c<s;c+=64)r.fillRect(c,a*32,4,32)}break;case"rooftile":r.fillRect(0,s-10,s,10);for(let a=0;a<s;a+=32)r.fillRect(a,0,3,s);break;case"stripes":r.fillRect(0,0,s,s/2);break;case"planks":r.fillRect(0,0,5,s),r.fillRect(s/2,0,5,s);break;default:}return n}var Nv={sofa:[2.2,.95,.85],sofa_l:[2.6,1.8,.85],armchair:[.95,.9,.85],tv_board:[1.8,.42,.5],coffee_table:[1.1,.6,.45],rug:[2,1.4,.02],table:[1.8,.9,.76],chair:[.46,.5,.9],stool:[.45,.45,.44],sideboard:[1.4,.45,.85],shelf:[.9,.35,1.8],desk:[1.3,.65,.75],kitchen:[2.4,.62,.92],worktop:[2,.9,.92],sink:[.9,.62,.92],stove:[.6,.62,.92],fridge:[.6,.65,1.8],washer:[.6,.6,.85],bed:[1.6,2.05,.9],single_bed:[.9,2,.9],wardrobe:[1.8,.6,2.1],bedside:[.45,.4,.55],bathtub:[1.7,.75,.58],wc:[.38,.6,.8],washbasin:[.6,.46,.85],shower:[.9,.9,2],plant:[.45,.45,1.1],car:[1.8,4.2,1.45]};function rp(i,t,e=0){let n=Nv[i.type]||[.6,.6,.6],s=i.w||n[0],r=i.d||n[1],a=i.h||n[2],c=[],h=(f,_,m)=>{for(let g of[-1,1])for(let b of[-1,1])c.push([g*(s/2-_),b*(r/2-_),_,_,0,f,m])},d=Array.isArray(t.duvet)?t.duvet[e%t.duvet.length]:t.duvet;switch(i.type){case"sofa":case"sofa_l":case"armchair":c.push([0,.08,s,r-.16,.12,.45,t.sofa],[0,-r/2+.14,s,.28,.12,.88,t.sofaDark],[-s/2+.12,.08,.24,r-.16,.45,.66,t.sofaDark],[s/2-.12,.08,.24,r-.16,.45,.66,t.sofaDark]);break;case"tv_board":c.push([0,0,s,r,0,a,t.tvUnit]);break;case"coffee_table":c.push([0,0,s,r,.36,.45,t.woodLight]),h(.36,.07,t.wood);break;case"rug":c.push([0,0,s,r,.03,.06,t.rug]);break;case"table":case"desk":c.push([0,0,s,r,a-.07,a,t.woodLight]),h(a-.07,.08,t.wood);break;case"chair":c.push([0,0,s,r,.4,.47,t.wood],[0,-r/2+.03,s,.06,.47,a,t.wood]),h(.4,.05,t.wood);break;case"stool":c.push([0,0,s,r,.36,.44,t.wood,"cyl"],[0,0,.1,.1,0,.36,t.steel,"cyl"]);break;case"sideboard":c.push([0,0,s,r,.06,a,t.wood]);break;case"shelf":case"wardrobe":case"bedside":c.push([0,0,s,r,0,a,t.woodLight]);break;case"fridge":c.push([0,0,s,r,0,a,t.fridge]);break;case"washer":c.push([0,0,s,r,0,a,t.white],[0,r/2,.36,.04,.25,.61,t.steel]);break;case"kitchen":case"worktop":c.push([0,0,s,r,0,a-.05,t.cabinet],[0,0,s+.04,r+.04,a-.05,a,t.worktop]);break;case"sink":c.push([0,0,s,r,0,a-.05,t.cabinet],[0,0,s+.04,r+.04,a-.05,a,t.worktop],[0,0,s-.3,r-.24,a,a+.02,t.water]);break;case"stove":c.push([0,0,s,r,0,a-.05,t.white],[0,0,s+.04,r+.04,a-.05,a,t.dark]);for(let f of[-1,1])for(let _ of[-1,1])c.push([f*.14,_*.14,.18,.18,a,a+.02,t.bad,"cyl"]);break;case"bed":case"single_bed":c.push([0,0,s,r,.12,.36,t.wood],[0,.06,s-.06,r-.16,.36,.56,d],[0,-r/2+.05,s,.1,0,1,t.wood]),s>1.2?c.push([-s/4,-r/2+.38,s/2-.16,.4,.56,.68,t.white],[s/4,-r/2+.38,s/2-.16,.4,.56,.68,t.white]):c.push([0,-r/2+.38,s-.2,.4,.56,.68,t.white]);break;case"bathtub":c.push([0,0,s,r,0,a,t.white],[0,0,s-.2,r-.2,a,a+.02,t.water]);break;case"wc":c.push([0,-r/2+.1,s+.06,.2,0,.8,t.white],[0,.1,s,s,0,.42,t.white,"cyl"]);break;case"washbasin":c.push([0,-.05,.2,.2,0,.72,t.white],[0,0,s,r,.72,a,t.white],[0,.02,s-.2,r-.18,a,a+.02,t.water]);break;case"shower":c.push([0,0,s,r,0,.1,t.white],[0,0,s-.06,r-.06,.1,1.95,"glass"]);break;case"plant":c.push([0,0,s*.7,s*.7,0,.35,t.pot,"cyl"],[0,0,s,s,.55,.55+s,t.plant,"ball"],[0,0,s*.75,s*.75,.9,.9+s*.75,t.plant,"ball"]);break;case"car":{let f=i.colour||"#E8483F";c.push([0,0,s,r,.3,.8,f],[0,.15,s-.16,r*.5,.8,a,f],[0,.15,s-.12,r*.5-.3,.86,a-.1,"glass"]);for(let _ of[-1,1])for(let m of[-1,1])c.push([_*(s/2-.05),m*(r/2-.8),.66,.24,0,.66,t.dark,"wheel"]);break}default:c.push([0,0,s,r,0,a,t.planned])}return c}function dr(i){return String(i||"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")}function Ov(i){let t=new Set,e=(i.floors||[]).flatMap(s=>s.devices||[]);for(let s of e)s.id&&t.add(String(s.id));let n=0;for(let s of e){if(s.id)continue;let r=dr(s.name)||`${s.kind||"device"}_${++n}`,a=r,c=2;for(;t.has(a);)a=`${r}_${c++}`;t.add(a),s.id=a}return i}var op=["x","y","room","wall","at"];function Po(i,t){let e=i.floors||[];if(e.forEach((n,s)=>{n.id=n.id||`floor${s}`}),Ov(i),!t||typeof t!="object"||Array.isArray(t))return i;for(let[n,s]of Object.entries(t)){let r=null;for(let h of e){let d=(h.devices||[]).findIndex(f=>f.id===n);if(d>=0){r={f:h,i:d};break}}if(s===null){r&&r.f.devices.splice(r.i,1);continue}if(!s||typeof s!="object")continue;let{floor:a,...c}=s;if(r){let h=r.f.devices[r.i];if(op.some(f=>c[f]!=null))for(let f of op)delete h[f];Object.assign(h,c);let d=a&&a!==r.f.id?e.find(f=>f.id===a):null;d&&(r.f.devices.splice(r.i,1),(d.devices=d.devices||[]).push(h))}else if(c.kind){let h=e.find(d=>d.id===a)||e[0];h&&(h.devices=h.devices||[]).push({id:n,entity:null,...c})}}return i}var ap="data:font/woff2;base64,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";var lp="data:font/woff2;base64,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";var Yn='"Toon House","Trebuchet MS","Segoe UI",system-ui,sans-serif';function _n(){if(document.getElementById("toon-house-font"))return;let i=document.createElement("style");i.id="toon-house-font",i.textContent=`@font-face{font-family:"Toon House";src:url(${ap}) format("woff2");font-weight:500;font-display:swap}@font-face{font-family:"Toon House";src:url(${lp}) format("woff2");font-weight:700 900;font-display:swap}`,document.head.appendChild(i)}var ii="#1b1b1b",Yt=(i,t="0 0 32 32")=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" aria-hidden="true"><g fill="none" stroke="${ii}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${i}</g></svg>`;function xn(i="happy"){let t={happy:`<circle cx="42" cy="66" r="7" fill="#fff"/><circle cx="78" cy="66" r="7" fill="#fff"/><circle class="pupil" cx="43.5" cy="67" r="3" fill="${ii}" stroke="none"/><circle class="pupil" cx="79.5" cy="67" r="3" fill="${ii}" stroke="none"/>`,wow:`<circle cx="42" cy="65" r="8.5" fill="#fff"/><circle cx="78" cy="65" r="8.5" fill="#fff"/><circle cx="42" cy="65" r="3.4" fill="${ii}" stroke="none"/><circle cx="78" cy="65" r="3.4" fill="${ii}" stroke="none"/>`,think:`<circle cx="42" cy="66" r="7" fill="#fff"/><circle cx="78" cy="66" r="7" fill="#fff"/><circle cx="45" cy="62.5" r="3" fill="${ii}" stroke="none"/><circle cx="81" cy="62.5" r="3" fill="${ii}" stroke="none"/><path d="M33 53l14-3M73 50l14 3"/>`,oops:`<circle cx="42" cy="67" r="7" fill="#fff"/><circle cx="78" cy="67" r="7" fill="#fff"/><circle cx="42" cy="69" r="3" fill="${ii}" stroke="none"/><circle cx="78" cy="69" r="3" fill="${ii}" stroke="none"/><path d="M34 55l13 4M86 55l-13 4"/><path d="M95 56c4 6 4 10 0 12-4-2-4-6 0-12z" fill="#9FE3FA"/>`,party:'<path d="M35 67q7-9 14 0M71 67q7-9 14 0" stroke-width="3.4"/>'}[i]||"",e={happy:'<path d="M50 82q10 9 20 0" stroke-width="3.2"/>',wow:'<ellipse cx="60" cy="85" rx="6" ry="7.5" fill="#7A2E2E"/>',think:'<path d="M52 85h15" stroke-width="3.2"/>',oops:'<path d="M50 88q10-8 20 0" stroke-width="3.2"/>',party:'<path d="M47 80q13 17 26 0z" fill="#7A2E2E"/><path d="M53 87q7 5 14 0" stroke="#FF8FA3" stroke-width="3"/>'}[i]||"";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 124" role="img" aria-label="Roofus the house">
    <g fill="none" stroke="${ii}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round">
      <g class="puff"><circle cx="93" cy="12" r="6" fill="#fff"/><circle cx="103" cy="5" r="4" fill="#fff"/></g>
      <rect x="82" y="20" width="14" height="24" fill="#D9744F"/>
      <rect x="20" y="50" width="80" height="62" rx="10" fill="#F9B58B"/>
      <path d="M8 56 60 12l52 44z" fill="#C4513A"/>
      <path d="M24 44h72M33 36h54" stroke="#A8432F" stroke-width="2.4"/>
      <circle cx="29" cy="80" r="5" fill="#F78FB3" stroke="none" opacity=".8"/><circle cx="91" cy="80" r="5" fill="#F78FB3" stroke="none" opacity=".8"/>
      ${t}${e}
      <rect x="51" y="96" width="18" height="16" rx="3" fill="#7A4FC4"/><circle cx="64.5" cy="105" r="1.6" fill="#FFD83A" stroke="none"/>
      <path d="M20 86q-12 2-13 13M100 86q12 2 13 13" stroke-width="3.2"/>
    </g></svg>`}var jt={upload:Yt('<path d="M16 22V7M10 12l6-6 6 6" stroke-width="3"/><path d="M5 20v5h22v-5"/>'),example:Yt('<rect x="5" y="6" width="22" height="20" rx="2" fill="#fff"/><path d="M5 15h12v11M17 15V6M17 20h10" stroke="#3A6FD8" stroke-width="2.8"/>'),wall:Yt('<rect x="4" y="8" width="24" height="16" rx="2" fill="#F9B58B"/><path d="M4 16h24M13 8v8M21 16v8M9 16v8M17 8v8"/>'),join:Yt('<rect x="4" y="8" width="11" height="16" rx="2" fill="#C9B6FF"/><rect x="17" y="8" width="11" height="16" rx="2" fill="#7FD8BE"/><path d="M11 16h10M18 13l3 3-3 3M14 13l-3 3 3 3" stroke-width="2.6"/>'),remove:Yt('<circle cx="16" cy="16" r="11" fill="#FF9F8A"/><path d="M11 11l10 10M21 11L11 21" stroke-width="3"/>'),measure:Yt('<rect x="3" y="11" width="26" height="10" rx="2" fill="#FFD83A"/><path d="M8 11v4M13 11v6M18 11v4M23 11v6"/>'),floor:Yt('<rect x="5" y="6" width="22" height="20" rx="2" stroke-dasharray="4 3.5" fill="#fff"/><path d="M11 20v-6l5-4 5 4v6z" fill="#F9B58B"/>'),colour:Yt('<path d="M20 5l7 7-3 3-7-7z" fill="#C9B6FF"/><path d="M18 9L7 20l-1 6 6-1 11-11" fill="#fff"/><path d="M6 26l2-2"/>'),turn:Yt('<path d="M26 16a10 10 0 1 1-4-8" stroke-width="3"/><path d="M23 3v6h-6" stroke-width="3"/>'),undo:Yt('<path d="M10 9l-6 6 6 6" stroke-width="3"/><path d="M4 15h14a8 8 0 0 1 0 16h-3" stroke-width="3" transform="translate(0 -5)"/>'),back:Yt('<path d="M19 6l-10 10 10 10" stroke-width="3.4"/>'),next:Yt('<path d="M13 6l10 10-10 10" stroke-width="3.4"/>'),save:Yt('<path d="M16 5v15M10 14l6 6 6-6" stroke-width="3"/><path d="M5 22v5h22v-5"/>'),copy:Yt('<rect x="11" y="10" width="15" height="17" rx="2" fill="#fff"/><path d="M21 10V6H7v17h4"/>'),yes:Yt('<circle cx="16" cy="16" r="11" fill="#9BE37A"/><path d="M10 16l4 5 8-9" stroke-width="3"/>'),no:Yt(`<circle cx="16" cy="16" r="11" fill="#FFD83A"/><path d="M16 9v8" stroke-width="3"/><circle cx="16" cy="22" r="1.4" fill="${ii}"/>`),eye:Yt('<path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16z" fill="#fff"/><circle cx="16" cy="16" r="4" fill="#7A4FC4"/>'),close:Yt('<path d="M8 8l16 16M24 8L8 24" stroke-width="3.4"/>'),up:Yt('<path d="M6 19l10-10 10 10" stroke-width="3.4"/>'),down:Yt('<path d="M6 13l10 10 10-10" stroke-width="3.4"/>'),kitchen:Yt('<path d="M7 14h18v9a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3z" fill="#FFD83A"/><path d="M4 14h24M12 14v-3a4 4 0 0 1 8 0v3M11 7q1-2 0-4M16 6q1-2 0-4"/>'),living:Yt('<path d="M6 17v-5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v5" fill="#E07B2E"/><rect x="3" y="15" width="26" height="9" rx="3" fill="#F0974F"/><path d="M7 24v3M25 24v3"/>'),dining:Yt('<circle cx="16" cy="17" r="8" fill="#fff"/><circle cx="16" cy="17" r="4"/><path d="M5 6v8M3 6v4a2 2 0 0 0 4 0V6M28 6v20M28 6c-3 2-3 8 0 9"/>'),bedroom:Yt('<path d="M4 9v17M4 20h24v6M28 20v-3a4 4 0 0 0-4-4H13v7" fill="none"/><rect x="13" y="13" width="15" height="7" rx="3" fill="#5BA8F5"/><circle cx="9" cy="16" r="3" fill="#fff"/>'),bathroom:Yt('<path d="M3 16h26v3a7 7 0 0 1-7 7H10a7 7 0 0 1-7-7z" fill="#9FE3FA"/><path d="M8 16V8a3 3 0 0 1 6 0M9 26l-1 3M23 26l1 3"/>'),ensuite:Yt('<path d="M9 28V9a5 5 0 0 1 10 0" /><path d="M14 12h10l-1 3h-8z" fill="#9FE3FA"/><path d="M16 18v3M19.5 18v5M23 18v3" stroke="#3AA7D8"/>'),wc:Yt('<rect x="9" y="4" width="14" height="9" rx="2" fill="#fff"/><path d="M7 15h18a9 9 0 0 1-18 0z" fill="#fff"/><path d="M13 24v4h6v-4"/>'),hall:Yt(`<rect x="9" y="4" width="14" height="24" rx="2" fill="#DBA15B"/><circle cx="19" cy="17" r="1.5" fill="${ii}"/><path d="M5 28h22"/>`),landing:Yt('<path d="M4 27h7v-6h7v-6h7V9" stroke-width="3"/><path d="M22 6l3-3 3 3" stroke-width="2.6"/>'),stairs:Yt('<path d="M4 27h6v-5h6v-5h6v-5h6V6" stroke-width="3"/>'),garage:Yt('<path d="M4 13 16 5l12 8v14H4z" fill="#D9D9E3"/><path d="M9 27v-9h14v9M9 21h14M9 24h14"/>'),utility:Yt('<rect x="6" y="4" width="20" height="24" rx="3" fill="#fff"/><circle cx="16" cy="18" r="6" fill="#9FE3FA"/><path d="M10 8h3M17 8h5"/>'),study:Yt('<path d="M16 9c-3-3-8-3-12-2v17c4-1 9-1 12 2 3-3 8-3 12-2V7c-4-1-9-1-12 2z" fill="#B4E68E"/><path d="M16 9v17"/>'),playroom:Yt('<rect x="4" y="16" width="11" height="11" rx="2" fill="#FF8FA3"/><rect x="17" y="16" width="11" height="11" rx="2" fill="#5BA8F5"/><rect x="10.5" y="5" width="11" height="11" rx="2" fill="#FFD83A"/>'),store:Yt('<path d="M4 11l12-6 12 6v12l-12 6-12-6z" fill="#DBA15B"/><path d="M4 11l12 6 12-6M16 17v12"/>'),own:Yt('<path d="M5 27l2-7L21 6l5 5L12 25z" fill="#FFD83A"/><path d="M18 9l5 5"/>'),light:Yt('<path d="M16 4a8 8 0 0 0-5 14v3h10v-3a8 8 0 0 0-5-14z" fill="#FFD83A"/><path d="M12 25h8M13 28h6"/>'),cover:Yt(`<rect x="5" y="5" width="22" height="22" rx="2" fill="#BDEBFF"/><rect x="5" y="5" width="22" height="12" fill="#DDE4EA"/><path d="M5 9h22M5 13h22M5 17h22M16 17v6"/><circle cx="16" cy="24" r="1.4" fill="${ii}"/>`),climate:Yt('<rect x="4" y="9" width="24" height="14" rx="3" fill="#FF8A3D"/><path d="M10 9v14M16 9v14M22 9v14M7 26v2M25 26v2"/>'),lock:Yt(`<rect x="7" y="14" width="18" height="13" rx="3" fill="#9BE37A"/><path d="M11 14v-4a5 5 0 0 1 10 0v4"/><circle cx="16" cy="20" r="1.6" fill="${ii}"/>`),motion:Yt('<circle cx="16" cy="16" r="5" fill="#FFB347"/><path d="M6 9a13 13 0 0 0 0 14M26 9a13 13 0 0 1 0 14M10 12a7 7 0 0 0 0 8M22 12a7 7 0 0 1 0 8"/>'),contact:Yt('<rect x="6" y="5" width="9" height="22" rx="2" fill="#fff"/><rect x="18" y="9" width="8" height="14" rx="2" fill="#FF8A73"/><path d="M15 16h3"/>'),camera:Yt('<rect x="4" y="10" width="17" height="13" rx="3" fill="#7FD9FF"/><path d="M21 14l7-4v13l-7-4z" fill="#fff"/><circle cx="12" cy="16.5" r="3" fill="#fff"/>'),speaker:Yt(`<rect x="9" y="4" width="14" height="24" rx="3" fill="#C9B6FF"/><circle cx="16" cy="19" r="4" fill="#fff"/><circle cx="16" cy="9.5" r="1.6" fill="${ii}"/>`),tv:Yt('<rect x="4" y="7" width="24" height="15" rx="2" fill="#7FD9FF"/><path d="M11 27h10M16 22v5"/>'),sensor:Yt('<path d="M13 18V7a3 3 0 0 1 6 0v11a6 6 0 1 1-6 0z" fill="#fff"/><circle cx="16" cy="23" r="3" fill="#FF8A73"/><path d="M16 21v-9"/>'),switch:Yt('<rect x="5" y="10" width="22" height="12" rx="6" fill="#9BE37A"/><circle cx="21" cy="16" r="4" fill="#fff"/>'),house:Yt('<path d="M5 15 16 6l11 9v12H5z" fill="#F9B58B"/><path d="M3 16 16 5l13 11" stroke-width="3"/><rect x="13" y="19" width="6" height="8" rx="1" fill="#7A4FC4"/>'),paint:Yt('<path d="M5 8h18v8H5z" fill="#F78FB3"/><path d="M23 12h4v7H16v3" /><rect x="14" y="22" width="4" height="6" rx="1" fill="#DBA15B"/>'),pin:Yt('<path d="M16 29s9-9.5 9-16a9 9 0 0 0-18 0c0 6.5 9 16 9 16z" fill="#FF8A73"/><circle cx="16" cy="13" r="3.4" fill="#fff"/>'),plug:Yt('<path d="M11 4v7M21 4v7"/><path d="M8 11h16v4a8 8 0 0 1-16 0z" fill="#FFD83A"/><path d="M16 23v5"/>'),window:Yt('<rect x="6" y="6" width="20" height="20" rx="2" fill="#BDEBFF"/><path d="M16 6v20M6 16h20"/>'),door:Yt(`<rect x="9" y="4" width="14" height="24" rx="2" fill="#FFF7E6"/><circle cx="19" cy="17" r="1.5" fill="${ii}"/>`),opening:Yt('<path d="M7 28V8a9 9 0 0 1 18 0v20" stroke-width="3"/>'),extdoor:Yt(`<rect x="9" y="4" width="14" height="24" rx="2" fill="#FF8A73"/><circle cx="19" cy="17" r="1.5" fill="${ii}"/>`),frontdoor:Yt('<rect x="9" y="4" width="14" height="24" rx="2" fill="#7A4FC4"/><rect x="12.5" y="8" width="7" height="6" rx="1" fill="#BDEBFF"/><circle cx="19.5" cy="19" r="1.6" fill="#FFD83A" stroke="none"/>'),bifold:Yt('<rect x="4" y="5" width="24" height="22" rx="2" fill="#BDEBFF"/><path d="M12 5v22M20 5v22"/>'),garageDoor:Yt('<rect x="4" y="7" width="24" height="20" rx="2" fill="#FFF0D6"/><path d="M4 12h24M4 17h24M4 22h24"/>'),none:Yt('<circle cx="16" cy="16" r="11" fill="#eee"/><path d="M9 23L23 9" stroke-width="3"/>')};var cp={light:["light","switch","input_boolean"],switch:["switch","input_boolean","light","fan"],cover:["cover","input_number"],climate:["climate","sensor","input_number"],lock:["lock"],motion:["binary_sensor"],contact:["binary_sensor"],camera:["camera"],speaker:["media_player"],tv:["media_player"],sensor:["sensor","binary_sensor"]},hp={climate:["temperature"],motion:["motion","occupancy","presence","moving"],contact:["door","window","opening","garage_door","lock"],tv:["tv","receiver"],speaker:["speaker"]},kv=[["living room","living","lounge","sitting room","front room","family room"],["kitchen","diner"],["dining room","dining","diner"],["hall","hallway","entrance","porch"],["landing","upstairs hall"],["bathroom","bath","shower room"],["ensuite","en suite"],["wc","toilet","cloakroom","loo"],["office","study"],["utility","utility room","laundry"],["main bedroom","master bedroom","master","bedroom 1"],["nursery","baby"],["garage"],["conservatory","sun room","garden room"]],zv=new Set(["unavailable","unknown"]),hc=i=>` ${String(i||"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()} `,fu=(i,t)=>i.includes(` ${t} `);function fr(i){let t=hc(i),e=t.trim();if(!e)return[];let n=new Set([e]);for(let s of kv)s.some(r=>fu(t,r))&&s.forEach(r=>n.add(r));return[...n]}function pu(i,t){let e=(i.entities||{})[t];if(!e)return"";let n=e.area_id||((i.devices||{})[e.device_id]||{}).area_id;return n&&((i.areas||{})[n]||{}).name||""}function Gi(i){if(!i)return"not found";let t=i.attributes||{},e=i.entity_id?i.entity_id.split(".")[0]:"";return zv.has(i.state)?"not answering":e==="climate"?t.current_temperature!=null?`${t.current_temperature}\xB0`:i.state:e==="cover"?t.current_position!=null?`${t.current_position}% open`:i.state:`${i.state}${t.unit_of_measurement?` ${t.unit_of_measurement}`:""}`}function Io(i,t,e,{wide:n=!1,query:s="",used:r={}}={}){if(!i||!i.states)return[];let a=cp[t]||cp.sensor,c=hp[t]||[],h=fr(e),d=hc(s).trim(),f=[];for(let _ of Object.keys(i.states)){let m=i.states[_],g=_.split(".")[0],b=m.attributes||{},w=(i.entities||{})[_]||{};if(w.hidden||!n&&(!a.includes(g)||w.entity_category||t==="climate"&&g==="sensor"&&b.device_class!=="temperature"))continue;let x=b.friendly_name||_,y=pu(i,_),A=hc(`${x} ${_.split(".")[1]}`),C=hc(y);if(d&&!`${A}${C}`.includes(d))continue;let S=0;for(let R of h)fu(C,R)?S=Math.max(S,3):fu(A,R)&&(S=Math.max(S,2));let I=g===a[0]?2:0;c.includes(b.device_class)&&(I+=1),f.push({id:_,name:x,area:y,near:S,fit:I,guess:S>0,usedBy:r[_]||""})}return f.sort((_,m)=>m.near-_.near||(_.usedBy?1:0)-(m.usedBy?1:0)||m.fit-_.fit||_.name.localeCompare(m.name)),f}var cc=i=>String(i||"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function up(i,t){let e=Object.entries(i&&i.areas||{}),n=cc(t.area);if(n){let a=e.find(([c,h])=>cc(c)===n||cc(h.name)===n);if(a)return{id:a[0],name:a[1].name||a[0]}}let s=fr(t.name),r=null;for(let[a,c]of e){let h=cc(c.name),d=h===s[0]?2:s.includes(h)?1:0;d&&(!r||d>r.score)&&(r={id:a,name:c.name||a,score:d})}return r?{id:r.id,name:r.name}:null}function Vv(i,t){let e=i.states[t],n=t.split(".")[0],s=e&&e.attributes&&e.attributes.device_class||"";return n==="light"?{kind:"light",sure:!0}:n==="cover"?{kind:"cover",sure:!0}:n==="climate"?{kind:"climate",sure:!0}:n==="lock"?{kind:"lock",sure:!0}:n==="camera"?{kind:"camera",sure:!0}:n==="media_player"?{kind:s==="tv"||s==="receiver"?"tv":"speaker",sure:!0}:n==="binary_sensor"?hp.motion.includes(s)?{kind:"motion",sure:!0}:["door","window","opening","garage_door"].includes(s)?{kind:"contact",sure:!0}:null:n==="sensor"?s==="temperature"||s==="humidity"?{kind:"sensor",sure:!1}:null:n==="switch"||n==="fan"?{kind:"switch",sure:!1}:null}function mu(i,t,e={}){let n=[];if(!i||!i.states||!t)return n;for(let r of Object.keys(i.states)){let a=(i.entities||{})[r]||{};if(a.hidden||a.entity_category||e[r]||(a.area_id||((i.devices||{})[a.device_id]||{}).area_id)!==t)continue;let h=Vv(i,r);h&&n.push({id:r,name:(i.states[r].attributes||{}).friendly_name||r,...h})}let s=["light","cover","climate","lock","contact","motion","camera","tv","speaker","switch","sensor"];return n.sort((r,a)=>s.indexOf(r.kind)-s.indexOf(a.kind)||r.name.localeCompare(a.name))}var pr=i=>String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),gu=["light","switch","input_boolean","fan"],dp={light:"Light",switch:"Switch",cover:"Blind",climate:"Heating",lock:"Lock",motion:"Motion",contact:"Door or window",camera:"Camera",speaker:"Speaker",tv:"TV",sensor:"Sensor"},fp=`
  .room{position:absolute;right:10px;top:58px;bottom:34px;width:min(330px,calc(100% - 20px));display:none;flex-direction:column;background:#FFFDF4;border:3px solid #1b1b1b;border-radius:18px;box-shadow:3px 4px 0 #1b1b1b;overflow:hidden;pointer-events:auto;z-index:2}
  .room.open{display:flex}
  .room header{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#FFD83A;border-bottom:3px solid #1b1b1b;font-weight:900;font-size:17px}
  .room header span{flex:1;min-width:0;overflow-wrap:anywhere}
  .room header button{width:38px;height:38px;padding:0;display:grid;place-items:center;flex:none}
  .room header svg,.room .rb svg{width:20px;height:20px}
  .room .list{flex:1;overflow:auto;overscroll-behavior:contain;padding:4px 10px 10px}
  .room .it{padding:8px 0;border-top:2px dashed #1b1b1b33}
  .room .it:first-child{border-top:0}
  .room .hd{display:grid;grid-template-columns:34px 1fr auto;gap:0 8px;align-items:center;cursor:pointer}
  .room .hd .ic{width:34px;height:34px;border:3px solid #1b1b1b;border-radius:10px;display:grid;place-items:center;background:#eee}
  .room .it.on .ic{background:#FFD83A}
  .room .it.grey{opacity:.6}
  .room .hd svg{width:22px;height:22px}
  .room .nm{font-weight:800;font-size:14px;line-height:1.15;overflow-wrap:anywhere}
  .room .nm small{display:block;font-weight:500;font-size:12px}
  .room .val{font-weight:800;font-size:13px;border:2px solid #1b1b1b;border-radius:999px;padding:1px 9px;background:#fff;white-space:nowrap}
  .room .ctl{display:flex;gap:6px;align-items:center;margin-top:6px}
  .room .rb{flex:1;min-height:40px;padding:4px 8px;font-size:13px;display:inline-flex;align-items:center;justify-content:center;gap:4px;box-shadow:2px 2px 0 #1b1b1b}
  .room .rb.act{background:#FFD83A}
  .room input[type=range]{flex:1;min-width:0;height:36px;accent-color:#7A4FC4}
  .room .empty{padding:14px 4px;font-size:14px}
  @media (max-width:600px){.room{left:8px;right:8px;top:auto;bottom:30px;width:auto;max-height:58%}}
`,uc=class{constructor(t){this.card=t;let e=this.el=document.createElement("div");e.className="room",e.innerHTML=`<header><span></span><button data-act="close" aria-label="Close">${jt.close}</button></header><div class="list"></div>`,t._wrap.appendChild(e),e.addEventListener("click",n=>{let s=n.target.closest("[data-act]");if(!s)return;let r=s.dataset.act,a=s.closest(".it");r==="close"?this.close():a&&this._act(r,a.dataset.id)}),e.addEventListener("change",n=>{let s=n.target.closest(".it");s&&n.target.dataset.set&&this._act(n.target.dataset.set,s.dataset.id,Number(n.target.value))})}get isOpen(){return this.el.classList.contains("open")}close(){this.el.classList.remove("open"),this.key=null}open(t,e){this.F=t,this.roomId=e.id,this.key=`${t.floor.id}|${e.id}`,this.el.querySelector("header span").textContent=e.name||"Room",this.el.classList.add("open"),this.render(),this.el.querySelector(".list").scrollTop=0}_devices(){let t=this.F;return(t.floor.devices||[]).filter(e=>e.room?e.room===this.roomId:e.x!=null&&(t.walls.roomAt(e.x,e.y)||{}).id===this.roomId)}_state(t){let e=this.card._hass;return t.entity&&e&&e.states[t.entity]||null}render(){let t=this.el.querySelector(".list"),e=this._devices();if(!e.length){t.innerHTML='<div class="empty">Nothing in here yet. Edit the card to add lights, blinds and radiators to this room.</div>';return}t.innerHTML=e.map(n=>{let s=this._state(n),r=n.entity?n.entity.split(".")[0]:"",a=s&&s.attributes||{},c="";return s&&gu.includes(r)?(c='<button class="rb" data-act="toggle"></button>',r==="light"&&(a.brightness!=null||(a.supported_color_modes||[]).some(h=>h!=="onoff"))&&(c+=`<input type="range" min="1" max="100" data-set="dim" aria-label="Brightness of ${pr(n.name||"light")}">`)):s&&r==="cover"?(c=`<button class="rb" data-act="open" aria-label="Open">${jt.up}</button><button class="rb" data-act="stop">Stop</button><button class="rb" data-act="shut" aria-label="Close">${jt.down}</button>`,a.current_position!=null&&(c+=`<input type="range" min="0" max="100" data-set="pos" aria-label="Position of ${pr(n.name||"blind")}">`)):s&&r==="input_number"&&(n.kind==="cover"||n.kind==="climate")?c=`<input type="range" min="${Number(a.min)||0}" max="${a.max!=null?Number(a.max):100}" step="${Number(a.step)||1}" data-set="num" aria-label="${pr(n.name||"value")}">`:s&&r==="climate"&&typeof a.temperature=="number"&&(c=`<button class="rb" data-act="cooler" aria-label="Cooler">${jt.down}</button><span class="val tgt"></span><button class="rb" data-act="warmer" aria-label="Warmer">${jt.up}</button>`),`<div class="it${n.entity?"":" grey"}" data-id="${pr(n.id)}"><div class="hd" data-act="more"><span class="ic">${jt[n.kind]||jt.sensor}</span><span class="nm">${pr(n.name||dp[n.kind]||"Device")}<small>${pr(dp[n.kind]||n.kind)}</small></span><span class="val st"></span></div>${c?`<div class="ctl">${c}</div>`:""}</div>`}).join(""),this._sig=e.map(n=>`${n.id}|${n.entity||""}|${this._state(n)?1:0}`).join(";"),this.refresh()}refresh(){if(!this.isOpen)return;let t=this._devices();if(t.map(e=>`${e.id}|${e.entity||""}|${this._state(e)?1:0}`).join(";")!==this._sig){this.render();return}for(let e of t){let n=[...this.el.querySelectorAll(".it")].find(_=>_.dataset.id===e.id);if(!n)continue;let s=this._state(e),r=s&&s.attributes||{},a=e.entity?e.entity.split(".")[0]:"",c=!!s&&(s.state==="on"||s.state==="open"||r.hvac_action==="heating"||s.state==="playing");n.classList.toggle("on",c),n.querySelector(".st").textContent=e.entity?gu.includes(a)&&s?c?"On":"Off":Gi(s):"planned";let h=n.querySelector("[data-act='toggle']");h&&(h.textContent=c?"Turn off":"Turn on",h.classList.toggle("act",c));let d=n.querySelector(".tgt");d&&(d.textContent=`${r.temperature}\xB0`);let f=n.querySelector("input[type=range]");f&&!f.matches(":active")&&(f.value=f.dataset.set==="num"?s.state:f.dataset.set==="dim"?r.brightness!=null?Math.max(1,Math.round(r.brightness/255*100)):c?100:1:r.current_position)}}_act(t,e,n){let s=this._devices().find(f=>f.id===e),r=this.card._hass;if(!s||!s.entity)return;if(t==="more"){this.card.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:s.entity}}));return}let a=this._state(s);if(!a||!r||!r.callService)return;let c=s.entity.split(".")[0],h=a.attributes||{},d={entity_id:s.entity};if(t==="toggle"&&gu.includes(c))r.callService(c,"toggle",d);else if(t==="dim"&&c==="light")r.callService("light","turn_on",{...d,brightness_pct:Math.max(1,Math.min(100,n))});else if(t==="num"&&c==="input_number")r.callService("input_number","set_value",{...d,value:n});else if(c==="cover"&&t==="pos")r.callService("cover","set_cover_position",{...d,position:Math.max(0,Math.min(100,n))});else if(c==="cover"&&["open","stop","shut"].includes(t))r.callService("cover",{open:"open_cover",stop:"stop_cover",shut:"close_cover"}[t],d);else if(c==="climate"&&(t==="warmer"||t==="cooler")&&typeof h.temperature=="number"){let f=h.target_temp_step||.5,_=h.min_temp!=null?h.min_temp:5,m=h.max_temp!=null?h.max_temp:30;r.callService("climate","set_temperature",{...d,temperature:Math.round(Math.min(m,Math.max(_,h.temperature+(t==="warmer"?f:-f)))*10)/10})}}};var _u=i=>String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),pp='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.5l3.800 8 8.700 1.100-6.400 6 1.700 8.700L16 23l-7.800 4.300 1.700-8.700-6.400-6 8.700-1.100z" fill="#FFD83A" stroke="#1b1b1b" stroke-width="2.400" stroke-linejoin="round"/></svg>'.replace(/\.(\d)00/g,".$1"),Gv='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"><g fill="none" stroke="#1b1b1b" stroke-width="2.400" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="24" height="21" rx="3" fill="#fff"/><path d="M4 13h24" /><rect x="4" y="7" width="24" height="6" rx="3" fill="#FF8A73"/><path d="M10 4v6M22 4v6"/><circle cx="11" cy="19" r="1.500" fill="#1b1b1b"/><circle cx="16" cy="19" r="1.500" fill="#1b1b1b"/><circle cx="21" cy="19" r="1.500" fill="#1b1b1b"/><circle cx="11" cy="24" r="1.500" fill="#1b1b1b"/></g></svg>'.replace(/\.(\d)00/g,".$1"),Hv={...jt,star:pp,chores:pp,calendar:Gv},dc=`
  .links{display:flex;gap:8px;flex-wrap:wrap;pointer-events:none}
  .links a{pointer-events:auto;font:inherit;font-weight:800;font-size:15px;min-height:44px;padding:5px 12px 5px 8px;border:3px solid #1b1b1b;border-radius:14px;background:#fff;color:#1b1b1b;cursor:pointer;box-shadow:2px 3px 0 #1b1b1b;display:inline-flex;align-items:center;gap:6px;text-decoration:none;-webkit-tap-highlight-color:transparent}
  .links a:active{transform:translate(2px,3px);box-shadow:none}
  .links a.here{background:#FFD83A}
  .links a:focus-visible{outline:4px solid #7A4FC4;outline-offset:2px}
  .links svg{width:26px;height:26px;flex:none}
  @media (max-width:600px){.links a{font-size:13px;min-height:40px;padding:4px 9px 4px 6px}.links svg{width:22px;height:22px}}
`;function Wv(i){try{let t=new URL(i,location.href),e=new URLSearchParams(location.search);if(t.origin!==location.origin||t.pathname.replace(/\/+$/,"")!==location.pathname.replace(/\/+$/,""))return!1;for(let[n,s]of t.searchParams)if(e.get(n)!==s)return!1;return!0}catch{return!1}}function Ro(i){return(Array.isArray(i)?i:[]).filter(t=>t&&t.path).map(t=>{let e=String(t.path),n=Wv(e);return`<a href="${_u(e)}" data-link="${_u(e)}" class="${n?"here":""}"${n?' aria-current="page"':""}>${Hv[t.icon]||""}<span>${_u(t.name||e)}</span></a>`}).join("")}function Lo(i){let t=i.target.closest?i.target.closest("[data-link]"):null;if(!t)return!1;let e=t.dataset.link;return/^https?:/.test(e)||/\.html(\?|#|$)/.test(e)||(i.preventDefault(),new URLSearchParams(location.search).has("kiosk")&&!/[?&]kiosk/.test(e)&&(e+=`${e.includes("?")?"&":"?"}kiosk`),history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))),!0}var Xv=`
  .thc-saver{position:fixed;inset:0;z-index:2147483000;background:#1b1b1b;display:none;font-family:${Yn};color:#fff;overflow:hidden;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}
  .thc-saver.on{display:block;animation:thc-in .8s ease}
  @keyframes thc-in{from{opacity:0}}
  .thc-saver .bg,.thc-saver .pic{position:absolute;inset:0;background-position:center 30%;background-repeat:no-repeat;opacity:0;transition:opacity 1.6s ease}
  .thc-saver .bg{background-size:cover;filter:blur(26px) brightness(.55);transform:scale(1.15)}
  .thc-saver .pic{background-size:contain;inset:3vh 3vw;animation:thc-drift 40s ease-in-out infinite alternate}
  .thc-saver .show{opacity:1}
  @keyframes thc-drift{from{transform:scale(1)}to{transform:scale(1.045)}}
  .thc-saver .clock{position:absolute;left:4vw;bottom:5vh;text-shadow:0 0 0 #000,3px 4px 0 #1b1b1b,-2px -2px 0 #1b1b1b,2px -2px 0 #1b1b1b,-2px 2px 0 #1b1b1b;line-height:1}
  .thc-saver .time{font-weight:700;font-size:min(9vw,12vh)}
  .thc-saver .date{font-weight:700;font-size:min(3vw,3.8vh);margin-top:.6vh}
  .thc-saver .wx{font-weight:500;font-size:min(2.4vw,3vh);margin-top:.5vh}
  .thc-saver.night .bg{filter:blur(26px) brightness(.25)}
  .thc-saver.night .pic{filter:brightness(.5)}
  @media (prefers-reduced-motion:reduce){.thc-saver .pic{animation:none}.thc-saver .bg,.thc-saver .pic{transition:none}}
`,qt={config:null,key:"",el:null,idle:null,turn:null,tick:null,i:0,layer:0,hass:null,users:new Set},_p=["pointerdown","keydown","wheel","touchstart"];function mp(){let i=qt.config,t=qt.hass,e=new Date,n=i&&i.weather&&t&&t.states[i.weather],s=i?Number(i.clock):0;qt.el.querySelector(".time").textContent=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",...s===24?{hourCycle:"h23"}:s===12?{hour12:!0}:{}}),qt.el.querySelector(".date").textContent=e.toLocaleDateString([],{weekday:"long",day:"numeric",month:"long"}),qt.el.querySelector(".wx").textContent=n&&typeof n.attributes.temperature=="number"?`${Math.round(n.attributes.temperature)}\xB0 outside`:"";let r=t&&t.states[i&&i.sun||"sun.sun"];qt.el.classList.toggle("night",!!(i&&i.dim!==!1&&r&&r.state==="below_horizon"))}function gp(){let i=qt.config.pictures;if(!i.length)return;let t=String(i[qt.i%i.length]),e=new Image;qt.i++,e.onload=()=>{if(!qt.el)return;let n=qt.el.querySelectorAll(".bg"),s=qt.el.querySelectorAll(".pic"),r=qt.layer=1-qt.layer;for(let a of[n,s])a[r].style.backgroundImage=`url("${t.replace(/"/g,"%22")}")`,a[r].classList.add("show"),a[1-r].classList.remove("show")},e.src=t}function xu(){!qt.config||!qt.el||qt.el.classList.contains("on")||(qt.el.classList.add("on"),mp(),gp(),qt.turn=setInterval(gp,Math.max(5,Number(qt.config.every)||30)*1e3),qt.tick=setInterval(mp,1e4))}function yu(){return!qt.el||!qt.el.classList.contains("on")?!1:(qt.el.classList.remove("on"),clearInterval(qt.turn),clearInterval(qt.tick),!0)}function xp(){clearTimeout(qt.idle),qt.config&&(qt.idle=setTimeout(xu,Math.max(5,Number(qt.config.after)||300)*1e3))}function yp(i){yu()&&(i.stopPropagation(),i.preventDefault(),qt.swallow=Date.now()+600),xp()}function vp(i){Date.now()<(qt.swallow||0)&&(i.stopPropagation(),i.preventDefault())}function Yv(){clearTimeout(qt.idle),yu();for(let i of _p)window.removeEventListener(i,yp,!0);window.removeEventListener("click",vp,!0),qt.el&&qt.el.remove(),qt.el=null,qt.config=null,qt.key=""}function yn(i,t,e){e&&(qt.hass=e);let n=t&&typeof t=="object"?{...t,pictures:[].concat(t.pictures||t.picture||[]).filter(Boolean)}:null;if(!n||!n.pictures.length){mr(i);return}qt.users.add(i);let s=JSON.stringify(n);if(s!==qt.key){if(!qt.el){_n();let r=qt.el=document.createElement("div");r.className="thc-saver",r.setAttribute("role","button"),r.setAttribute("aria-label","Screensaver. Touch to go back."),r.innerHTML=`<style>${Xv}</style><div class="bg"></div><div class="bg"></div><div class="pic"></div><div class="pic"></div><div class="clock"><div class="time"></div><div class="date"></div><div class="wx"></div></div>`,document.body.appendChild(r);for(let a of _p)window.addEventListener(a,yp,{capture:!0,passive:!1});window.addEventListener("click",vp,!0)}qt.config=n,qt.key=s,qt.el.querySelector(".clock").style.display=n.clock===!1?"none":"",xp(),new URLSearchParams(location.search).has("screensaver")&&xu()}}function mr(i){qt.users.delete(i),qt.users.size||Yv()}var $v=()=>({on:!!(qt.el&&qt.el.classList.contains("on")),users:qt.users.size,pictures:qt.config?qt.config.pictures.length:0,index:qt.i,shown:qt.el?[...qt.el.querySelectorAll(".pic.show")].map(i=>i.style.backgroundImage):[],time:qt.el?qt.el.querySelector(".time").textContent:""});typeof window<"u"&&(window.toonScreensaver={show:xu,hide:yu,state:$v});var bp=`
  .replay{position:absolute;left:10px;right:10px;bottom:30px;display:none;align-items:center;gap:8px;padding:8px 10px;background:#FFFDF4;border:3px solid #1b1b1b;border-radius:16px;box-shadow:3px 4px 0 #1b1b1b;pointer-events:auto;z-index:3}
  .replay.open{display:flex}
  .replay button{flex:none;min-width:44px;min-height:40px;padding:4px 10px}
  .replay input{flex:1;min-width:60px;height:36px;accent-color:#7A4FC4}
  .replay .when{flex:none;font-weight:900;font-size:14px;min-width:112px;text-align:center}
  .wrap.past .foot{display:none}
  @media (max-width:600px){.replay{flex-wrap:wrap}.replay input{order:5;flex-basis:100%}.replay .when{flex:1;text-align:left}}
`;function qv(i,t){let e={};for(let[n,s]of Object.entries(i||{})){let r=0,a=s.length-1,c=-1;for(;r<=a;){let d=r+a>>1;s[d].lu*1e3<=t?(c=d,r=d+1):a=d-1}if(c<0&&(c=0),!s.length)continue;let h=null;for(let d=c;d>=0&&!h;d--)h=s[d].a||null;e[n]={entity_id:n,state:s[c].s,attributes:h||{}}}return e}function Zv(i,t=Date.now()){let e=new Date(i),n=new Date(t),s=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return`${e.getDate()===n.getDate()?"Today":"Yesterday"} ${s}`}var fc=class{constructor(t){this.card=t;let e=this.el=document.createElement("div");e.className="replay",e.innerHTML='<button data-act="play" aria-label="Play">Play</button><span class="when" aria-live="off"></span><input type="range" min="0" max="288" step="1" aria-label="Time in the last day"><button data-act="now">Back to now</button>',t._wrap.appendChild(e),e.addEventListener("click",n=>{let s=n.target.closest("[data-act]");s&&(s.dataset.act==="now"?this.stop():this.play(!this.timer))}),e.querySelector("input").addEventListener("input",n=>{this.play(!1),this.seek(Number(n.target.value))})}get on(){return!!this.history}async start(){let t=this.card,e=t._live;if(this.on||this.loading||!e||!e.callWS)return;let n=new Set([t._config.weather,t._config.sun||"sun.sun"].filter(s=>s&&s.includes(".")));for(let s of t._floors||[])for(let r of s.floor.devices||[])r.entity&&n.add(r.entity);for(let s of t._config.people||[])for(let r of[s.person,s.room])r&&n.add(r);this.end=Date.now(),this.loading=!0,t._say("Fetching the last day...","",2e4);try{this.history=await e.callWS({type:"history/history_during_period",start_time:new Date(this.end-864e5).toISOString(),end_time:new Date(this.end).toISOString(),entity_ids:[...n],minimal_response:!1,no_attributes:!1,significant_changes_only:!1})}catch(s){this.history=null,t._say(`I couldn't fetch the history: ${s&&s.message?s.message:"Home Assistant said no"}.`,"",8e3)}this.loading=!1,this.history&&(t._toast.style.display="none",this.el.classList.add("open"),t._wrap.classList.add("past"),this.seek(252))}seek(t){if(!this.on)return;this.step=Math.max(0,Math.min(288,t));let e=this.end-864e5+this.step*3e5,n=this.card,s=n._live;this.el.querySelector("input").value=this.step,this.el.querySelector(".when").textContent=Zv(e,this.end),n._hass={...s,states:{...s.states,...qv(this.history,e)},callService:()=>n._say("This is the past. Press Back to now to switch things.","",4e3)},n._hassChanged()}play(t){clearInterval(this.timer),this.timer=null,t&&this.on&&(this.step>=288&&this.seek(0),this.timer=setInterval(()=>{this.step>=288?this.play(!1):this.seek(this.step+1)},110));let e=this.el.querySelector("[data-act='play']");e.textContent=this.timer?"Pause":"Play",e.classList.toggle("on",!!this.timer)}stop(){this.play(!1),this.on&&(this.history=null,this.el.classList.remove("open"),this.card._wrap.classList.remove("past"),this.card._hass=this.card._live,this.card._hassChanged())}};var vn="#1b1b1b",vu={peach:"#FFD2B0",fair:"#FFE3CF",tan:"#E8B48A",brown:"#B97A56",dark:"#7A4A32",sunny:"#FFD83A"},bu={dad:{hair:"#6B4226",top:"#3A8FD8",skin:"peach"},mum:{hair:"#8A3B1E",top:"#E0569B",skin:"peach"},girl:{hair:"#D9A441",top:"#B197FC",skin:"peach"},boy:{hair:"#4A3524",top:"#58C472",skin:"peach"},baby:{hair:"#D9A441",top:"#FFD83A",skin:"peach"},gran:{hair:"#D9D9E3",top:"#7FD8BE",skin:"peach",glasses:!0},grandad:{hair:"#C9CBD1",top:"#F0974F",skin:"peach",glasses:!0}},WM=Object.keys(bu),gr=["#5BA8F5","#F58FB7","#B197FC","#FFD23F","#7FD069","#FF8A73","#7FD8BE"];function Jv(i){let t=typeof i=="string"?{type:i}:{...i||{}},e=bu[t.type]?t.type:"dad",n=bu[e],s=t.style==="sunny";return{type:e,sunny:s,hair:t.hair||n.hair,top:t.top||n.top,skin:vu[t.skin]||t.skin||(s?vu.sunny:vu[n.skin]),glasses:t.glasses!=null?!!t.glasses:!!n.glasses,beard:!!t.beard}}function wu(i,t){let e=Jv(i),n=e.type,s=`stroke="${vn}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"`,r=`stroke="${vn}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"`,a=n==="baby",c=a?31:28,h=a?17:15.5,d="",f="";n==="mum"&&(d=`<path d="M13 30c0-15 8-22 19-22s19 7 19 22c0 9 1 14 4 19H9c3-5 4-10 4-19z" fill="${e.hair}" ${s}/>`),n==="gran"&&(d=`<circle cx="32" cy="10" r="7" fill="${e.hair}" ${s}/>`),n==="girl"&&(d=`<circle cx="11" cy="24" r="7.5" fill="${e.hair}" ${s}/><circle cx="53" cy="24" r="7.5" fill="${e.hair}" ${s}/>`),(n==="dad"||n==="boy")&&(f=`<path d="M16.5 25c-1-11 6-16.5 15.5-16.5S48.5 14 47.5 25c-4-6-9-8-15.5-8s-11.5 2-15.5 8z" fill="${e.hair}" ${s}/>`),n==="grandad"&&(f=`<path d="M16.5 27c-2-3-2-7 1-9M47.5 27c2-3 2-7-1-9" fill="none" ${s}/><path d="M15.5 24q1.5-5 5-7M48.5 24q-1.5-5-5-7" fill="none" stroke="${e.hair}" stroke-width="5" stroke-linecap="round"/>`),(n==="mum"||n==="gran")&&(f=`<path d="M16.5 25c0-10 7-15.5 15.5-15.5S47.5 15 47.5 25c-6-1-11-4-14-9-3 5-9 8-17 9z" fill="${e.hair}" ${s}/>`),n==="girl"&&(f=`<path d="M16.5 25c0-10 7-15.5 15.5-15.5S47.5 15 47.5 25c-5-2-9-5-11-9-4 5-11 8-20 9z" fill="${e.hair}" ${s}/><path d="M9 17l5 4-6 2zM55 17l-5 4 6 2z" fill="#FF5D8F" ${s}/>`),a&&(f=`<path d="M32 14c-1-5 3-8 6-5s-1 6-4 4" fill="none" stroke="${e.hair}" stroke-width="3.4" stroke-linecap="round"/>`);let _=c-1,m=a?2.6:2.1,g=`<circle cx="${32-h-1}" cy="${c+1}" r="3.2" fill="${e.skin}" ${s}/><circle cx="${32+h+1}" cy="${c+1}" r="3.2" fill="${e.skin}" ${s}/>
    <circle cx="32" cy="${c}" r="${h}" fill="${e.skin}" ${s}/>
    ${e.sunny?`<circle cx="26.4" cy="${c+2}" r="${a?6:5.4}" fill="#fff" ${r}/><circle cx="37.6" cy="${c+2}" r="${a?6:5.4}" fill="#fff" ${r}/><circle cx="27.6" cy="${c+2.4}" r="1.6" fill="${vn}"/><circle cx="36.4" cy="${c+2.4}" r="1.6" fill="${vn}"/>`:`<circle cx="25" cy="${c+5}" r="3" fill="#F78FB3" opacity=".65"/><circle cx="39" cy="${c+5}" r="3" fill="#F78FB3" opacity=".65"/>
    <circle cx="26" cy="${_}" r="${m}" fill="${vn}"/><circle cx="38" cy="${_}" r="${m}" fill="${vn}"/>`}
    ${a?`<circle cx="32" cy="${c+(e.sunny?11:8)}" r="4" fill="#7FD9FF" ${s}/><circle cx="32" cy="${c+(e.sunny?11:8)}" r="1.3" fill="#fff"/>`:e.sunny?`<path d="M27 ${c+9.6}q5 3.6 10 0" fill="none" ${s}/>`:`<path d="M26.5 ${c+5.5}q5.5 5 11 0" fill="none" ${s}/>`}
    ${e.beard&&!a?`<g${e.sunny?' transform="translate(0 3.4)"':""}><path d="M18 ${c+3}c1 12 7 15 14 15s13-3 14-15c-3 4-7 4-9 2-2 3-8 3-10 0-2 2-6 2-9-2z" fill="${e.hair}" ${s}/><path d="M27.5 ${c+6.5}q4.5 3 9 0" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/></g>`:""}
    ${e.glasses?`<circle cx="26" cy="${_}" r="5" fill="#ffffff55" ${r}/><circle cx="38" cy="${_}" r="5" fill="#ffffff55" ${r}/><path d="M31 ${_}h2" ${r}/>`:""}`,b=`<path d="M12 64c1-11 8-17 20-17s19 6 20 17z" fill="${e.top}" ${s}/>${a?`<path d="M25 49q7 8 14 0" fill="#fff" ${s}/>`:""}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">${t?`<defs><clipPath id="thc-face"><circle cx="32" cy="32" r="29"/></clipPath></defs><circle cx="32" cy="32" r="30.5" fill="${t}" stroke="${vn}" stroke-width="3"/>`:""}<g${t?' clip-path="url(#thc-face)"':""}>${d}${b}${g}${f}</g>${t?`<circle cx="32" cy="32" r="30.5" fill="none" stroke="${vn}" stroke-width="3"/>`:""}</svg>`}function Su(i,t,e){let n=i.person&&t&&t.states[i.person],s=i.picture||n&&n.attributes&&n.attributes.entity_picture||"";return s&&i.picture!==!1&&(i.picture||!i.look)?`<img src="${String(s).replace(/"/g,"&quot;")}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;border:3px solid ${vn};background:${e||"#fff"};box-sizing:border-box">`:wu(i.look,e)}var wp={sunny:"clear","clear-night":"clear",partlycloudy:"partly",cloudy:"cloudy",windy:"partly","windy-variant":"cloudy",fog:"fog",rainy:"rain",pouring:"pour",hail:"pour",lightning:"storm","lightning-rainy":"storm",snowy:"snow","snowy-rainy":"sleet",exceptional:"cloudy"},Kv={clear:"Sunny",partly:"Some cloud",cloudy:"Cloudy",fog:"Foggy",rain:"Rain",pour:"Heavy rain",storm:"Thunder",snow:"Snow",sleet:"Sleet"},Mp={clear:[null,"#FFFFFF",1.55,2.1,0],partly:[null,"#FFFFFF",1.55,1.9,3],cloudy:["#A9C4D6","#E6EBF0",1.5,1.4,7],fog:["#C9D2D8","#E3E8EC",1.55,1,5],rain:["#8FA6B8","#B3BEC9",1.4,1.1,7],pour:["#74899B","#8E9AA7",1.3,.9,8],storm:["#5F7385","#77828F",1.2,.8,8],snow:["#C4D4E3","#EEF2F6",1.6,1.3,7],sleet:["#A3B6C6","#C6CFD8",1.45,1.1,7]},jv={clear:"#1B2A57",partly:"#1D2A52"},Qv="#252D42",tb="#56628A";function Tp(i,t){let e=t&&t.weather;if(!e)return null;let n=typeof e=="string"&&!e.includes(".")?e.split("-"):null;if(n)return Mp[n[0]]?{kind:n[0],night:n[1]==="night",text:"",temp:null}:null;let s=i&&i.states&&i.states[e];if(!s||!wp[s.state])return null;let r=i.states[t&&t.sun||"sun.sun"],a=s.attributes||{},c=r?r.state==="below_horizon":s.state==="clear-night",h=wp[s.state],d=typeof a.temperature=="number"?`${Math.round(a.temperature)}\xB0`:null;return{kind:h,night:c,text:c&&h==="clear"?"Clear night":Kv[h],temp:d}}var Mu=i=>i?`${i.kind}|${i.night?1:0}`:"";function Ep(i,t,e){if(!t)return i;let n={...i};return t.kind==="snow"&&Object.assign(n,{lawn:"#F6F9FF",lawn2:"#E6EDF6",roof:"#F8FAFF",roof2:"#DCE5EF",hedge:"#DDEBDD",drive:"#E9EBF2",drive2:"#DADDE8",path:"#F1F2F5",patio:"#EEF0F4",patio2:"#DFE3EA"}),t.night&&(n.glass=e?"#FFD75E":"#3C4C7A"),n}var Tu=(i,t)=>i?`${i.kind==="snow"?"s":""}${i.night?t?"n1":"n0":""}`:"";function Sp(i){let t=document.createElement("canvas");t.width=t.height=64,i(t.getContext("2d"));let e=new In(t);return e.colorSpace=ze,e}var eb=i=>{i.lineCap="round",i.strokeStyle="#2B4A6B",i.lineWidth=9,i.beginPath(),i.moveTo(38,8),i.lineTo(26,56),i.stroke(),i.strokeStyle="#CDEBFF",i.lineWidth=5,i.stroke()},ib=i=>{i.fillStyle="#fff",i.strokeStyle="#5C6F86",i.lineWidth=5,i.beginPath(),i.arc(32,32,22,0,7),i.fill(),i.stroke()},nb=i=>{i.fillStyle="#FFF6C2",i.beginPath();for(let t=0;t<8;t++){let e=t%2?9:28,n=t*Math.PI/4;i.lineTo(32+e*Math.sin(n),32-e*Math.cos(n))}i.fill()},pc=class{constructor(t,e,n,s){this.scene=t,this.hemi=e,this.sun=n,this.outlined=s,this.group=new oi,t.add(this.group),this.still=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}get moving(){return!this.still&&!!(this.fall||this.flashAt)}_empty(){this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())}),this.group.clear(),this.fall=null,this.flashAt=0,this.lit=this.flashed=!1}dispose(){this._empty(),this.scene.remove(this.group),this.scene.fog=null}_points(t,e,n,s,r,a){let c=new Float32Array(t*3),{cx:h,cz:d}=this.box;for(let g=0;g<t;g++)c[g*3]=h+(Math.random()-.5)*s,c[g*3+1]=Math.random()*r,c[g*3+2]=d+(Math.random()-.5)*s;let f=new Re;f.setAttribute("position",new Ye(c,3));let _=new es({size:e,map:Sp(n),transparent:!0,alphaTest:.25,depthWrite:!1,fog:!1,color:a||16777215}),m=new Zs(f,_);return m.frustumCulled=!1,this.group.add(m),m}apply(t,e){this._empty(),this.box=e.box;let n=e.theme,s=t?t.kind:"clear",r=!!(t&&t.night),a=Mp[s],c=a[4]>=5,h=r?c?Qv:jv[s]:a[0]||n.sky,d=r?tb:a[1]==="#FFFFFF"?n.cloud:a[1];this.sky=new he(h),this.scene.background=this.sky.clone(),this.hemi.intensity=this.hemiBase=a[2]*(r?.62:1),this.sun.intensity=a[3]*(r?.42:1),this.hemi.color.set(r?"#A9B8FF":"#FFFFFF"),this.sun.color.set(r?"#B9C6FF":"#FFFFFF");for(let w of e.clouds||[])w.color.set(d);e.sunBall&&(e.sunBall.visible=!c&&s!=="fog"),e.sunMat&&e.sunMat.color.set(r?"#F6F2CF":n.sun);let{cx:f,cz:_,far:m}=e.box,g=[[-.2,11,.1,2.4],[.7,12.5,-.7,2.1],[-1.2,11.5,-.9,2.2],[.1,13.5,-1.5,2.6],[1.4,11,.4,1.8],[-.7,13,.9,2],[.9,14,1,2.3],[-1.6,12,.3,1.9]],b=e.low?.5:1;if(e.whole)for(let[w,x,y,A]of g.slice(0,Math.ceil(a[4]*b)))for(let[C,S,I,R]of[[0,0,0,1],[1.1,-.15,.1,.75],[-1.1,-.2,0,.7],[.3,.45,-.1,.7]]){let O=this.outlined(new gi(R*A,16,10),new ke({color:d}),.09);O.position.set(f+w*m*.55+C*A,x+S*A,_+y*m*.5+I*A),O.scale.y=.65,this.group.add(O)}if(r&&!c&&e.whole){let w=e.low?140:320,x=new Float32Array(w*3),y=m*4;for(let S=0;S<w;S++){let I=Math.random()*Math.PI*2,R=-.75+Math.random()*1.7;x[S*3]=f+y*Math.cos(R)*Math.cos(I),x[S*3+1]=y*Math.sin(R),x[S*3+2]=_+y*Math.cos(R)*Math.sin(I)}let A=new Re;A.setAttribute("position",new Ye(x,3));let C=new Zs(A,new es({size:13,sizeAttenuation:!1,map:Sp(nb),transparent:!0,alphaTest:.2,depthWrite:!1,fog:!1}));C.frustumCulled=!1,this.group.add(C)}if(this.mist=s==="fog"?[.55,1.9]:["rain","pour","storm","snow","sleet"].includes(s)?[.9,4]:null,this.scene.fog=this.mist?new Ur(h,1,2):null,this.range(e.dist||m*3),e.whole){let w=m*1.5,x=17;["rain","pour","storm","sleet"].includes(s)&&(this.fall=[{p:this._points((s==="rain"||s==="sleet"?520:1e3)*b,1.5,eb,w,x),speed:s==="rain"||s==="sleet"?17:23,drift:-3.2,sway:0,top:x}]),(s==="snow"||s==="sleet")&&(this.fall=this.fall||[]).push({p:this._points((s==="snow"?520:200)*b,.42,ib,w,x),speed:2.3,drift:.5,sway:.7,top:x})}s==="storm"&&!this.still&&(this.flashAt=performance.now()+1500+Math.random()*3e3),this.spread=m*1.5}range(t){!this.scene.fog||!this.mist||(this.scene.fog.near=t*this.mist[0],this.scene.fog.far=t*this.mist[1])}step(t,e){if(!this.still){for(let n of this.fall||[]){let s=n.p.geometry.attributes.position,r=s.array,{cx:a}=this.box,c=this.spread/2;for(let h=0;h<r.length;h+=3)r[h+1]-=n.speed*t*(.8+h*7%5*.1),r[h]+=(n.drift+(n.sway?Math.sin(e/900+h)*n.sway:0))*t,r[h+1]<-.2&&(r[h+1]+=n.top),r[h]<a-c?r[h]+=this.spread:r[h]>a+c&&(r[h]-=this.spread);s.needsUpdate=!0}if(this.flashAt){let n=e-this.flashAt,s=n>=0&&(!this.flashed||n<90||n>170&&n<260);s!==!!this.lit&&(this.lit=s,this.hemi.intensity=this.hemiBase*(s?2.6:1),this.scene.background.copy(s?new he("#F3F6FF"):this.sky)),n>=0&&(this.flashed=!0),n>320&&(this.flashed=!1,this.flashAt=e+3500+Math.random()*6e3)}}}};var Fe=i=>String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),Eu=40,sb=[["pick","Pick it"],["try","Try it"],["done","Finish"]],mc=["light","switch","input_boolean","fan"],Au={light:"light or lamp",switch:"switch or plug",cover:"blind, shutter or garage door",climate:"radiator valve (TRV), thermostat or temperature sensor",lock:"lock",motion:"motion sensor",contact:"door or window sensor",camera:"camera",speaker:"speaker",tv:"TV",sensor:"sensor"},Ap=`
  dialog.setup{font:inherit;color:var(--ink);border:4px solid var(--ink);border-radius:22px;padding:0;background:linear-gradient(#6CCBFA,#9ADCFC);box-shadow:5px 7px 0 var(--ink);width:min(540px,calc(100vw - 16px));max-width:none;max-height:calc(100vh - 16px);max-height:calc(100dvh - 16px);overflow:hidden}
  dialog.setup[open]{display:flex;flex-direction:column;animation:pop .22s cubic-bezier(.3,1.5,.6,1)}
  dialog.setup:focus{outline:none}
  dialog.setup::backdrop{background:rgba(27,27,27,.55)}
  @keyframes pop{from{transform:scale(.85) rotate(-2deg);opacity:0}}
  @media (prefers-reduced-motion:reduce){dialog.setup[open]{animation:none}}
  .s-top{display:flex;align-items:center;gap:10px;padding:10px 12px 0}
  .s-ic{flex:none;width:52px;height:52px;border:3px solid var(--ink);border-radius:15px;background:#eee;display:grid;place-items:center;box-shadow:2px 3px 0 var(--ink)}
  .s-ic.live{background:#9BE37A}
  .s-ic svg{width:34px;height:34px}
  .s-ttl{flex:1;min-width:0;font-weight:700;font-size:20px;line-height:1.15;color:var(--ink)}
  .s-ttl small{display:block;font-weight:500;font-size:13px}
  .s-top .x{min-height:44px;width:44px;padding:0;flex:none}
  .s-talk{display:flex;gap:10px;align-items:flex-start;padding:10px 12px 0}
  .s-talk .roofus{width:64px}
  .s-talk .bubble{min-height:52px;font-size:14px}
  .s-talk .bubble b{font-size:16px}
  .s-steps{display:flex;gap:6px;padding:10px 12px 0}
  .s-steps .btn{flex:1;min-height:40px;font-size:13px;padding:4px 6px;border-radius:999px}
  .s-steps .btn i{font-style:normal;width:22px;height:22px;border-radius:50%;border:2px solid var(--ink);display:grid;place-items:center;background:#fff;font-size:12px;flex:none}
  .s-steps .btn.on i{background:var(--ink);color:#fff}
  .s-body{flex:1;min-height:0;overflow:auto;margin:10px 12px 12px;background:var(--paper);border:3px solid var(--ink);border-radius:16px;padding:10px;overscroll-behavior:contain}
  .s-body h4{margin:10px 2px 6px;font-size:14px;font-weight:700}
  .s-body h4:first-of-type{margin-top:8px}
  .opt{font:inherit;color:var(--ink);width:100%;display:grid;grid-template-columns:1fr auto;gap:0 8px;align-items:center;text-align:left;min-height:52px;padding:6px 10px;margin:0 0 6px;border:3px solid var(--ink);border-radius:13px;background:#fff;cursor:pointer;box-shadow:2px 3px 0 var(--ink)}
  .opt:active{transform:translate(2px,3px);box-shadow:none}
  .opt.on{background:#9BE37A}
  .opt b{font-weight:700;font-size:15px;line-height:1.2;overflow-wrap:anywhere}
  .opt small{grid-column:1;font-size:12px;opacity:.8;overflow-wrap:anywhere}
  .opt .val{grid-column:2;grid-row:1 / span 2;font-weight:700;font-size:13px;border:2px solid var(--ink);border-radius:999px;padding:1px 9px;background:var(--paper);white-space:nowrap;max-width:120px;overflow:hidden;text-overflow:ellipsis}
  .opt.none{background:#eee;border-style:dashed;box-shadow:none}
  .opt.new{background:#FFF3B8}
  .opt.new.lead,.opt.found{background:#9BE37A}
  .wait{display:flex;justify-content:center;gap:10px;padding:14px 0 4px}
  .wait span{width:16px;height:16px;border-radius:50%;background:#7A4FC4;border:3px solid var(--ink);animation:hop 1s infinite ease-in-out}
  .wait span:nth-child(2){animation-delay:.15s;background:var(--sun)}
  .wait span:nth-child(3){animation-delay:.3s;background:#FF8A73}
  @keyframes hop{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-12px)}}
  @media (prefers-reduced-motion:reduce){.wait span{animation:none}}
  .how{margin:8px 0;padding-left:22px;font-size:14px;line-height:1.4}
  .how li{margin:4px 0}
  .opt:focus-visible{outline:4px solid #7A4FC4;outline-offset:2px}
  .now{border:3px solid var(--ink);border-radius:16px;background:#fff;padding:12px;text-align:center;box-shadow:2px 3px 0 var(--ink)}
  .now.hot{background:#FFD83A}
  .now .big{font-weight:700;font-size:40px;line-height:1.1;overflow-wrap:anywhere}
  .now .sub{font-size:14px;margin-top:2px}
  .now .who{font-size:12px;opacity:.8;margin-top:6px;overflow-wrap:anywhere}
  .s-body .row{justify-content:center}
  .s-body .row .btn{flex:1 1 120px}
  .btn.go{background:#9BE37A}
  .s-ask{font-weight:700;font-size:15px;text-align:center;margin:14px 0 0}
`,gc=class{constructor(t){this.ed=t;let e=this.dlg=document.createElement("dialog");e.className="setup",e.setAttribute("aria-label","Set up this thing"),e.tabIndex=-1,e.innerHTML=`<div class="s-top"><div class="s-ic"></div><div class="s-ttl"></div><button class="btn x" data-act="close" aria-label="Close">${jt.close}</button></div>
      <div class="s-talk talk"><div class="roofus"></div><div class="bubble" aria-live="polite"></div></div>
      <div class="s-steps"></div>
      <div class="s-body"></div>`,t.shadowRoot.appendChild(e),e.addEventListener("click",n=>{if(n.target===e){e.close();return}let s=n.target.closest("[data-act],[data-step],[data-ent]");s&&(s.dataset.step?this.go(s.dataset.step):s.dataset.ent!=null?this._choose(s.dataset.ent):this._act(s.dataset.act))}),e.addEventListener("input",n=>{n.target.id==="sq"&&(this.query=n.target.value,this._options())}),e.addEventListener("change",n=>{n.target.id==="sName"&&(this.ed._rename(this.id,n.target.value),this._head())}),this._esc=n=>{n.key!=="Escape"||!e.open||(n.stopPropagation(),n.preventDefault(),e.close())},e.addEventListener("close",()=>{window.removeEventListener("keydown",this._esc,!0),this.id=null,this.ed._setupClosed()})}get isOpen(){return this.dlg.open}_q(t){return this.dlg.querySelector(t)}_now(){let t=this.id?this.ed._find(this.id):null;if(!t)return null;let e=this.ed._hass,n=this.ed._entityOf(t.d);return{...t,room:this.ed._roomName(t.f,t.d),ent:n,st:n&&e&&e.states[n]||null,hass:e}}open(t,e,n=!1){this.id=t,this.query="",this.wide=!1,this.watch=null,this.fresh=n;let s=this._now();s&&(this.dlg.open||(this.dlg.showModal(),this.dlg.focus(),window.addEventListener("keydown",this._esc,!0)),this.go(e||(s.ent?"try":"pick")))}close(){this.dlg.open&&this.dlg.close()}go(t){t!=="pick"&&(this.watch=null),this.step=t,this.render(),this._q(".s-body").scrollTop=0}_say(t,e,n="happy"){this._q(".roofus").innerHTML=xn(n),this._q(".bubble").innerHTML=`<b>${Fe(t)}</b>${Fe(e)}`}_head(){let t=this._now();if(!t)return;let{d:e,room:n,ent:s}=t,r=this.ed.kindName(e.kind);this._q(".s-ic").innerHTML=jt[e.kind]||jt.sensor,this._q(".s-ic").classList.toggle("live",!!s),this._q(".s-ttl").innerHTML=`${Fe(e.name||r)}<small>${Fe([r,n].filter(Boolean).join(" in "))}</small>`,this._q(".s-steps").innerHTML=sb.map(([a,c],h)=>`<button class="btn${a===this.step?" on":""}" data-step="${a}"${a===this.step?' aria-current="step"':""}><i>${h+1}</i>${c}</button>`).join("")}render(){let t=this._now();if(!t){this.close();return}this._head();let{d:e,room:n,ent:s,st:r}=t,a=this._q(".s-body"),c=Au[e.kind]||"device",h=e.name||"this";if(this.step==="pick"&&this.watch)this._waiting(!0);else if(this.step==="pick")a.innerHTML=`<input id="sq" type="search" placeholder="Search your devices" autocomplete="off" spellcheck="false" aria-label="Search your devices" value="${Fe(this.query)}"><div id="opts"></div>`,this._say(this.fresh?`${h} is on the plan!`:`Which one is ${h}?`,`Tap the real ${c} from Home Assistant.${n?` My best guesses for the ${n} are at the top.`:""}`,this.fresh?"party":"think"),this._options();else if(this.step==="try"){if(!s){a.innerHTML='<p class="s-ask">Nothing is picked for this yet.</p><div class="row"><button class="btn go" data-step="pick">Pick one</button><button class="btn" data-step="done">Leave it grey</button></div>',this._say("Not connected yet","It stays grey on the card until you pick its real device.","think");return}a.innerHTML=`<div class="now"></div><div class="row" id="acts">${this._buttons(e,s,r)}</div><p class="hint" id="tip" style="text-align:center"></p>
        <p class="s-ask">Is that the right one?</p><div class="row"><button class="btn" data-step="pick">No, pick another</button><button class="btn go" data-step="done">${jt.yes}Yes!</button></div>`,this._q("#tip").textContent=this._tip(e,s),this._say("Let's check it",`This is what ${h} says right now. Is that the right ${c.split(",")[0].replace(/ \(.*/,"")}?`,"wow"),this._live()}else a.innerHTML=`<label class="f" for="sName">Its name</label><input id="sName" type="text" autocomplete="off" value="${Fe(e.name||"")}">
        <p class="hint">${s?`Connected to <b>${Fe(this._friendly(s))}</b>.`:"Not connected yet, so it stays grey on the card."}</p>
        <div class="row"><button class="btn" data-act="move">${jt.pin}Move it</button><button class="btn" data-act="remove">${jt.remove}Remove it</button></div>
        <div class="row"><button class="btn go" data-act="close">${jt.yes}Done</button></div>`,s?this._say("All set!",`${h} is connected. Tap it on the card to use it.`,"party"):this._say("Saved for later",`${h} is on the plan as "planned". Come back when you have fitted it.`,"happy")}_friendly(t){let e=this.ed._hass&&this.ed._hass.states[t];return e&&e.attributes&&e.attributes.friendly_name||t}_options(){let t=this._now(),e=this._q("#opts");if(!t||!e)return;let{d:n,room:s,ent:r,hass:a}=t;if(!a){e.innerHTML='<p class="hint">Home Assistant has not told me about your devices yet.</p>';return}this._count=Object.keys(a.states).length;let c=Io(a,n.kind,s,{wide:this.wide,query:this.query,used:this.ed.usedBy(n.id)}),h=g=>`<button class="opt${g.id===r?" on":""}" data-ent="${Fe(g.id)}"><b>${Fe(g.name)}</b><small>${Fe([g.area,g.id,g.usedBy?`already used by ${g.usedBy}`:""].filter(Boolean).join(" \xB7 "))}</small><span class="val">${Fe(Gi(a.states[g.id]))}</span></button>`,d=c.slice(0,Eu),f=d.filter(g=>g.guess),_=d.filter(g=>!g.guess),m="";f.length&&(m+=`<h4>My best guesses${s?` for the ${Fe(s)}`:""}</h4>${f.map(h).join("")}`),_.length&&(m+=`<h4>${f.length?"Everything else":"Your devices"}</h4>${_.map(h).join("")}`),c.length||(m+=`<p class="hint">${this.query?"Nothing matches that. Try fewer letters.":`I can't find a ${Fe(Au[n.kind]||"device")} in Home Assistant yet.`}</p>`),c.length>Eu&&(m+=`<p class="hint">${c.length-Eu} more. Type in the search box to find them.</p>`),m+=`<h4>Or</h4><button class="opt new${c.length?"":" lead"}" data-act="new"><b>I've got a new one to add</b><small>Pair it with Home Assistant now and I'll spot it</small></button>`,this.wide||(m+='<button class="opt none" data-act="wide"><b>Show every kind of device</b><small>If yours is not in the list</small></button>'),m+=`<button class="opt none${r?"":" on"}" data-ent=""><b>I haven't got it yet</b><small>Keep it grey on the card as "planned"</small></button>`,e.innerHTML=m}_arrivals(){let t=this._now();if(!t||!t.hass||!this.watch)return{fit:[],other:0};let e=Object.keys(t.hass.states).filter(r=>!this.watch.base.has(r));if(!e.length)return{fit:[],other:0};let n={...t.hass,states:Object.fromEntries(e.map(r=>[r,t.hass.states[r]]))},s=Io(n,t.d.kind,t.room,{used:this.ed.usedBy(t.d.id)});return{fit:s,other:this.watch.all?0:Io(n,t.d.kind,t.room,{wide:!0}).length-s.length,all:this.watch.all?Io(n,t.d.kind,t.room,{wide:!0}):null}}_waiting(t){let e=this._now(),n=this._q(".s-body");if(!e)return;let{d:s,room:r,hass:a}=e,c=Au[s.kind]||"device",h=this._arrivals(),d=h.all||h.fit,f=`${d.map(g=>g.id).join(",")}|${h.other}`;if(!t&&f===this.watch.sig)return;this.watch.sig=f;let _=a&&typeof a.hassUrl=="function"?a.hassUrl("/config/devices/dashboard"):"",m=g=>`<button class="opt found" data-ent="${Fe(g.id)}"><b>${Fe(g.name)}</b><small>${Fe([g.area,g.id].filter(Boolean).join(" \xB7 "))}</small><span class="val">${Fe(Gi(a.states[g.id]))}</span></button>`;if(d.length){n.innerHTML=`<h4>Just appeared in Home Assistant</h4>${d.map(m).join("")}<div class="row"><button class="btn" data-act="list">Back to the list</button></div>`,this._say(d.length===1?"I spotted a new one!":`I spotted ${d.length} new ones!`,`Is ${d.length===1?`"${d[0].name}"`:"one of these"} your ${s.name||c}? Tap it and we'll try it.`,"party");return}n.innerHTML=`<div class="wait"><span></span><span></span><span></span></div>
      <ol class="how"><li>Open Home Assistant's devices page${_?"":" (Settings, Devices and services)"} and press <b>Add device</b>.</li><li>Put your new ${Fe(c.split(",")[0].replace(/ \(.*/,""))} into pairing mode. Its leaflet says how: usually you hold its button.</li><li>When Home Assistant asks, give it the area${r?` <b>${Fe(r)}</b>`:""} and finish.</li></ol>
      ${_?`<div class="row"><a class="btn go" href="${Fe(_)}" target="_blank" rel="noopener">${jt.plug}Open the devices page</a></div>`:""}
      ${h.other?`<p class="hint" style="text-align:center">${h.other} new thing${h.other===1?" has":"s have"} appeared, but ${h.other===1?"it does":"they do"} not look like a ${Fe(c.split(",")[0].replace(/ \(.*/,""))}.</p><div class="row"><button class="btn" data-act="showall">Show ${h.other===1?"it":"them"} anyway</button></div>`:""}
      <div class="row"><button class="btn" data-act="list">Back to the list</button></div>`,this._say("I'm watching for it...",`Leave this window open and pair your new ${c.split(",")[0].replace(/ \(.*/,"")} with Home Assistant. The moment it appears, I'll show it here.`,"think")}_choose(t){let e=this._now();e&&this.ed._link(e.d,t)&&(this.fresh=!1,this.watch=null,this.go(t?"try":"done"))}_buttons(t,e,n){let s=e.split(".")[0],r=n&&n.attributes||{};return n?mc.includes(s)?`<button class="btn" data-act="toggle">${jt[t.kind]||jt.switch}Switch it</button>`:s==="cover"?`<button class="btn" data-act="open">${jt.up}Open</button><button class="btn" data-act="stop">Stop</button><button class="btn" data-act="shut">${jt.down}Close</button>`:s==="climate"&&typeof r.temperature=="number"?`<button class="btn" data-act="cooler">${jt.down}Cooler</button><button class="btn" data-act="warmer">${jt.up}Warmer</button>`:"":""}_tip(t,e){let n=e.split(".")[0];return mc.includes(n)?"Press it and watch the real one.":n==="cover"?"Press a button and watch the real one move.":n==="climate"?"Nudge it and listen for the radiator valve, or look at the thermostat.":n==="lock"?"I never lock or unlock doors from here. Try the lock yourself and watch this change.":t.kind==="motion"?"Wave at it and watch this change.":t.kind==="contact"?"Open and close it and watch this change.":""}_live(){let t=this._now(),e=this._q(".now");if(!t||!e||!t.ent)return;let{d:n,ent:s,st:r}=t,a=s.split(".")[0],c=r&&r.attributes||{},h=Gi(r),d="",f=!1;r?r.state==="unavailable"||r.state==="unknown"?d="It may be switched off or out of range.":a==="climate"?(f=c.hvac_action==="heating",d=[c.hvac_action?c.hvac_action[0].toUpperCase()+c.hvac_action.slice(1):r.state,typeof c.temperature=="number"?`set to ${c.temperature}\xB0`:""].filter(Boolean).join(", ")):a==="cover"?(f=r.state==="open",d="0% is closed, 100% is open"):mc.includes(a)?(f=r.state==="on",h=f?"On":"Off"):a==="lock"?h=r.state==="locked"?"Locked":r.state==="unlocked"?"Unlocked":r.state:a==="binary_sensor"&&(f=r.state==="on",h=n.kind==="motion"?f?"Movement!":"All quiet":n.kind==="contact"?f?"Open":"Closed":f?"On":"Off"):d="Home Assistant can't find this one right now.",e.classList.toggle("hot",f),e.innerHTML=`<div class="big">${Fe(h)}</div><div class="sub">${Fe(d)}</div><div class="who">${Fe([this._friendly(s),pu(t.hass,s)].filter(Boolean).join(" \xB7 "))}</div>`}_act(t){let e=this._now();if(t==="close"){this.close();return}if(!e)return;if(t==="wide"){this.wide=!0,this._options();return}if(t==="new"){this.watch={base:new Set(Object.keys(e.hass&&e.hass.states||{})),sig:""},this.render(),this._q(".s-body").scrollTop=0;return}if(t==="showall"){this.watch.all=!0,this._waiting(!0);return}if(t==="list"){this.watch=null,this.render();return}if(t==="move"){let d=this.id;this.close(),this.ed._moveMode(d);return}if(t==="remove"){let d=this.id;this.close(),this.ed._remove(d);return}let{ent:n,st:s,hass:r}=e;if(!n||!s||!r||!r.callService)return;let a=n.split(".")[0],c=s.attributes||{},h={entity_id:n};if(t==="toggle"&&mc.includes(a))r.callService(a,"toggle",h);else if(a==="cover"&&["open","stop","shut"].includes(t))r.callService("cover",{open:"open_cover",stop:"stop_cover",shut:"close_cover"}[t],h);else if(a==="climate"&&(t==="warmer"||t==="cooler")&&typeof c.temperature=="number"){let d=c.target_temp_step||.5,f=c.min_temp!=null?c.min_temp:5,_=c.max_temp!=null?c.max_temp:30,m=Math.min(_,Math.max(f,c.temperature+(t==="warmer"?d:-d)));r.callService("climate","set_temperature",{...h,temperature:Math.round(m*10)/10})}}refresh(){if(!this.dlg.open)return;let t=this._now();if(!t){this.close();return}if(this.step==="try")this._live();else if(this.step==="pick"&&this.watch)this._waiting(!1);else if(this.step==="pick"&&t.hass){if(Object.keys(t.hass.states).length!==this._count){this._options();return}this.dlg.querySelectorAll(".opt[data-ent]").forEach(e=>{let n=e.querySelector(".val");n&&e.dataset.ent&&(n.textContent=Gi(t.hass.states[e.dataset.ent]))})}}};var rn=i=>String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),Cp=`
  dialog.fill .row .btn{flex:1 1 120px}
  .f-room{border:3px solid var(--ink);border-radius:14px;background:#fff;margin:0 0 10px;overflow:hidden}
  .f-room h4{margin:0;padding:8px 10px;font-size:15px;background:var(--sun);border-bottom:3px solid var(--ink);display:flex;gap:8px;align-items:center;flex-wrap:wrap}
  .f-room h4 small{font-weight:500;font-size:12px}
  .f-thing{display:grid;grid-template-columns:28px 30px 1fr auto;gap:0 8px;align-items:center;padding:6px 10px;min-height:48px;border-top:2px dashed #1b1b1b33;cursor:pointer}
  .f-thing:first-of-type{border-top:0}
  .f-thing input{width:24px;height:24px;accent-color:#7A4FC4;margin:0}
  .f-thing svg{width:28px;height:28px}
  .f-thing b{font-size:14px;line-height:1.2;overflow-wrap:anywhere}
  .f-thing small{display:block;font-weight:500;font-size:12px;opacity:.8}
  .f-thing .val{font-weight:700;font-size:12px;border:2px solid var(--ink);border-radius:999px;padding:1px 8px;white-space:nowrap}
`,_c=class{constructor(t){this.ed=t;let e=this.dlg=document.createElement("dialog");e.className="setup fill",e.tabIndex=-1,e.setAttribute("aria-label","Find my things by room"),e.innerHTML=`<div class="s-top"><div class="s-ic live">${jt.house}</div><div class="s-ttl">Find my things<small>Room by room, from Home Assistant</small></div><button class="btn x" data-act="close" aria-label="Close">${jt.close}</button></div>
      <div class="s-talk talk"><div class="roofus"></div><div class="bubble" aria-live="polite"></div></div>
      <div class="s-body"></div>
      <div class="row" style="margin:0 12px 12px"><button class="btn" data-act="close">Not now</button><button class="btn go" data-act="add"></button></div>`,t.shadowRoot.appendChild(e),e.addEventListener("click",n=>{if(n.target===e){e.close();return}let s=n.target.closest("[data-act]");s&&(s.dataset.act==="close"?e.close():s.dataset.act==="add"&&this._add())}),e.addEventListener("change",()=>this._count()),this._esc=n=>{n.key!=="Escape"||!e.open||(n.stopPropagation(),n.preventDefault(),e.close())},e.addEventListener("close",()=>window.removeEventListener("keydown",this._esc,!0))}_q(t){return this.dlg.querySelector(t)}_say(t,e,n){this._q(".roofus").innerHTML=xn(n),this._q(".bubble").innerHTML=`<b>${rn(t)}</b>${rn(e)}`}open(){let t=this.ed,e=t._hass,n=t._house,s=this._q(".s-body");if(!n)return;let r=t.usedBy(null),a=[],c=[],h="",d=0;if(this.found=[],n.floors.forEach((f,_)=>{for(let m of f.rooms||[]){let g=e?up(e,m):null;if(!g){m.name&&a.push(m.name);continue}let b=mu(e,g.id,r),w=mu(e,g.id,{});if(c.push({room:m.name||"Room",area:g.name,total:w.length}),!!b.length){h+=`<div class="f-room"><h4>${rn(m.name||"Room")}<small>${rn(g.name===m.name?f.name||"":`"${g.name}" in Home Assistant`)}</small></h4>`;for(let x of b)this.found.push({...x,fi:_,room:m.id}),h+=`<label class="f-thing"><input type="checkbox" data-i="${d++}"${x.sure?" checked":""}>${jt[x.kind]||jt.sensor}<span><b>${rn(x.name)}</b><small>${rn(t.kindName(x.kind))}</small></span><span class="val">${rn(Gi(e.states[x.id]))}</span></label>`;h+="</div>"}}}),!e||!Object.keys(e.areas||{}).length)h='<p class="hint">Home Assistant has no areas set up yet. Give your devices an area (Settings, Areas) and I can sort them into rooms for you.</p>',this._say("No areas yet","I use Home Assistant's areas to know which room a device is in.","think");else if(!c.length)h=`<p class="hint">Your areas in Home Assistant are: ${rn(Object.values(e.areas).map(f=>f.name).join(", "))}. None of them sounds like a room on the plan. Rename an area to match a room, or add <b>area: Area name</b> to the room in the house file.</p>`,this._say("I can't match the rooms","None of your rooms has the same name as an area in Home Assistant.","think");else if(d)this._say(`I found ${d} thing${d===1?"":"s"}!`,"I matched your rooms to Home Assistant's areas. Untick anything you don't want, then I'll put the rest on the plan, already connected.","wow");else{let f=c.every(m=>!m.total),_=c.map(m=>m.room===m.area?m.room:`${m.room} = "${m.area}"`).join(", ");h=`<p class="hint">Rooms I matched to areas: ${rn(_)}.</p><p class="hint">${f?"Those areas have no lights, blinds, radiators or sensors in them yet. In Home Assistant, open a device and set its area, then come back.":"Everything in those areas is already on the plan."}</p>`,f?this._say("The areas are empty","I found the rooms, but Home Assistant has no devices in those areas yet.","think"):this._say("Nothing new","Everything in your matching areas is already on the plan.","happy")}a.length&&d&&(h+=`<p class="hint">No matching area for: ${rn(a.join(", "))}.</p>`),s.innerHTML=h,this._count(),this.dlg.open||(this.dlg.showModal(),this.dlg.focus(),window.addEventListener("keydown",this._esc,!0)),s.scrollTop=0}_picked(){return[...this.dlg.querySelectorAll("input[data-i]:checked")].map(t=>this.found[Number(t.dataset.i)])}_count(){let t=this._picked().length,e=this._q("[data-act='add']");e.innerHTML=`${jt.yes}Add ${t} thing${t===1?"":"s"}`,e.style.display=this.found.length?"":"none",e.disabled=!t,e.style.opacity=t?"":".5"}_add(){let t=this._picked();this.dlg.close(),t.length&&this.ed._fillRooms(t)}};var rb="https://digitaladaption.github.io/toon-house-card/importer/",ob={light:"Light",switch:"Switch",cover:"Blind or shutter",climate:"Heating",lock:"Lock",motion:"Motion sensor",contact:"Door or window sensor",camera:"Camera",speaker:"Speaker",tv:"TV",sensor:"Sensor"},Cu=[["light","Light","Tap where the light goes."],["cover","Blind","Tap the window it covers."],["climate","Radiator","Tap by the wall it is on. Away from a wall makes a thermostat."],["lock","Lock","Tap the door it is on."],["motion","Motion sensor","Tap where the sensor is."],["contact","Door sensor","Tap the door or window it is on."],["camera","Camera","Tap where the camera is. It can be outside."],["speaker","Speaker","Tap where the speaker is."],["tv","TV","Tap where the TV is."],["sensor","Sensor","Tap where the sensor is."],["switch","Switch","Tap where the switch is."]],ab=["x","y","room","wall","at"],Pu=i=>JSON.parse(JSON.stringify(i)),$n=i=>String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),lb=`
  :host{display:block;font-family:${Yn};font-weight:500;color:#1b1b1b;--ink:#1b1b1b;--sun:#FFD83A;--paper:#FFFDF4}
  *{box-sizing:border-box}
  .wrap{background:linear-gradient(#6CCBFA,#9ADCFC);border:3px solid var(--ink);border-radius:18px;padding:12px}
  .talk{display:flex;gap:10px;align-items:flex-start;margin-bottom:12px}
  .roofus{flex:none;width:76px}
  .roofus svg{display:block;width:100%}
  .bubble{position:relative;flex:1;background:#fff;border:3px solid var(--ink);border-radius:16px;padding:8px 12px;box-shadow:2px 3px 0 var(--ink);font-size:15px;line-height:1.35;min-height:60px}
  .bubble::before{content:"";position:absolute;left:-12px;top:22px;width:18px;height:18px;background:#fff;border-left:3px solid var(--ink);border-bottom:3px solid var(--ink);transform:rotate(45deg)}
  .bubble.bad{background:#FFE1D8}.bubble.bad::before{background:#FFE1D8}
  .bubble b{font-weight:700;font-size:17px;display:block}
  section{background:var(--paper);border:3px solid var(--ink);border-radius:16px;box-shadow:2px 3px 0 var(--ink);padding:10px 12px;margin-top:12px}
  h3{margin:0 0 8px;font-size:18px;font-weight:700;display:flex;align-items:center;gap:8px}
  h3 svg{width:28px;height:28px}
  .row{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin:8px 0}
  .btn{font:inherit;font-weight:700;font-size:15px;min-height:44px;padding:6px 12px;border:3px solid var(--ink);border-radius:13px;background:#fff;color:var(--ink);cursor:pointer;box-shadow:2px 3px 0 var(--ink);display:inline-flex;align-items:center;justify-content:center;gap:6px;text-decoration:none}
  .btn:active{transform:translate(2px,3px);box-shadow:none}
  .btn.on{background:var(--sun)}
  .btn svg{width:24px;height:24px;flex:none}
  @media (hover:hover){.btn:hover{transform:translate(-1px,-1px) rotate(-1deg)}}
  input[type=text],input[type=number],input[type=search],input:not([type]){font:inherit;font-size:16px;min-height:44px;padding:6px 10px;border:3px solid var(--ink);border-radius:12px;background:#fff;color:var(--ink);min-width:0;width:100%}
  input:focus,.btn:focus-visible,summary:focus-visible{outline:4px solid #7A4FC4;outline-offset:2px}
  label.f{display:block;font-weight:700;font-size:14px;margin:8px 0 2px}
  .hint{font-size:13px;opacity:.85;margin:4px 0}
  .pill{display:inline-flex;align-items:center;gap:6px;border:2px solid var(--ink);border-radius:999px;padding:2px 10px;background:#fff;font-size:13px;font-weight:700}
  .theme{flex-direction:column;gap:4px;min-width:112px;padding:8px}
  .sw{display:flex;border:2px solid var(--ink);border-radius:8px;overflow:hidden}
  .sw i{width:20px;height:20px;display:block}
  details{border:3px solid var(--ink);border-radius:14px;background:#fff;margin:8px 0;overflow:hidden}
  summary{cursor:pointer;font-weight:700;font-size:16px;padding:10px 12px;display:flex;align-items:center;gap:8px;list-style:none}
  summary::-webkit-details-marker{display:none}
  summary::before{content:"";width:0;height:0;border:7px solid transparent;border-left-color:var(--ink);margin-right:-2px;transition:transform .15s}
  details[open] summary::before{transform:rotate(90deg) translate(3px,-3px)}
  summary .pill{margin-left:auto}
  .dev{font:inherit;color:var(--ink);width:100%;text-align:left;background:none;border:0;border-top:2px dashed #1b1b1b33;cursor:pointer;display:grid;grid-template-columns:40px 1fr auto;gap:2px 10px;align-items:center;padding:10px 12px;min-height:60px}
  .dev .ic{width:40px;height:40px;border:3px solid var(--ink);border-radius:12px;display:grid;place-items:center;background:#eee;grid-row:span 2}
  .dev.live .ic{background:#9BE37A}
  .dev .ic svg{width:26px;height:26px}
  .dev .nm{font-weight:700;font-size:15px;line-height:1.2}
  .dev .nm small{display:block;font-weight:500;font-size:12px;opacity:.75}
  .dev .lk{grid-column:2;font-size:13px;overflow-wrap:anywhere}
  .dev.live .lk{font-weight:700}
  .dev .go{grid-column:3;grid-row:1 / span 2;background:var(--sun);box-shadow:2px 2px 0 var(--ink)}
  .dev.live .go{background:#fff}
  .dev:focus-visible{outline:4px solid #7A4FC4;outline-offset:-4px}
  @media (hover:hover){.dev:hover{background:#FFF3B8}}
  .slider{display:flex;gap:8px;align-items:center}
  .kinds{display:grid;grid-template-columns:repeat(auto-fill,minmax(84px,1fr));gap:6px;margin:8px 0}
  .kind{flex-direction:column;gap:1px;font-size:12px;min-height:62px;padding:4px 2px;line-height:1.1;text-align:center}
  .kind svg{width:28px;height:28px}
  #planBox{border:3px solid var(--ink);border-radius:14px;background:#62CE3C;overflow:hidden}
  #planBox.arm{outline:4px dashed #7A4FC4;outline-offset:2px;cursor:crosshair}
  #plan{display:block;width:100%;height:auto}
  #plan .pin{touch-action:none;cursor:grab}
  #plan text{font-family:inherit;font-weight:700;pointer-events:none}
  .tabs .btn{min-height:40px;padding:4px 12px;font-size:14px}
  .dev.sel{background:#FFF3B8}
  .slider input{flex:1}
${Ap}${Cp}`,Iu=class extends HTMLElement{setConfig(t){this._config={...t},this.shadowRoot||(_n(),this.attachShadow({mode:"open"}),this._skeleton(),this._setup=new gc(this),this._fill=new _c(this)),this._loadHouse(),this._overlayChanged(),this._sync(),this._states()}set hass(t){this._hass=t,this.shadowRoot&&(this._weathers(),this._states(),this._setup.refresh())}connectedCallback(){this._onCardTap=this._onCardTap||(t=>{let e=t.detail&&t.detail.id;!e||!this._setup||!this.getClientRects().length||!this._find(e)||(t.preventDefault(),this._open(e))}),window.addEventListener("toon-house-setup",this._onCardTap)}disconnectedCallback(){window.removeEventListener("toon-house-setup",this._onCardTap)}_fire(t){t.entities&&!Object.keys(t.entities).length&&delete t.entities,t.devices&&!Object.keys(t.devices).length&&delete t.devices;for(let e of["title","theme","height","weather","quality"])(t[e]===""||t[e]==null)&&delete t[e];this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0})),this._overlayChanged(),this._sync()}_overlayChanged(){!this._file||JSON.stringify(this._config.devices||null)===this._overKey||(this._rebuildHouse(),this._devices(),this._plan())}_rebuildHouse(){this._overKey=JSON.stringify(this._config.devices||null),this._house=Po(Pu(this._file),this._config.devices),this._house.floors.forEach(t=>(t.rooms||[]).forEach((e,n)=>{e.id=e.id||`${t.id}_room${n}`}))}_set(t,e){this._fire({...this._config,[t]:e})}_say(t,e,n="happy",s=!1){let r=a=>this.shadowRoot.querySelector(a);r(".roofus").innerHTML=xn(s?"oops":n),r(".bubble").classList.toggle("bad",s),r(".bubble").innerHTML=`<b>${$n(t)}</b>${$n(e)}`}_skeleton(){let t=r=>`<span class="sw">${[r.exterior,r.roof,r.door,r.lawn].map(a=>`<i style="background:${a}"></i>`).join("")}</span>`;this.shadowRoot.innerHTML=`<style>${lb}</style>
    <div class="wrap">
      <div class="talk"><div class="roofus"></div><div class="bubble" aria-live="polite"></div></div>

      <section>
        <h3>${jt.house}Your house</h3>
        <div class="pill" id="src"></div>
        <div id="urlBox">
          <label class="f" for="url">House file address</label>
          <input id="url" type="text" placeholder="/local/toon-house/house.json" autocomplete="off" spellcheck="false">
        </div>
        <div class="row">
          <label class="btn">${jt.upload}Load a house file<input id="file" type="file" accept=".json,application/json" hidden></label>
          <button class="btn" id="useUrl">Use a file address</button>
          <a class="btn" href="${rb}" target="_blank" rel="noopener">${jt.example}Build one from a floor plan</a>
        </div>
      </section>

      <section>
        <h3>${jt.paint}The look</h3>
        <div class="row">
          <button class="btn theme" data-theme="toon">${t(Co.toon)}Cartoon</button>
          <button class="btn theme" data-theme="brick">${t(Co.brick)}Brick</button>
        </div>
        <label class="f">Opens on</label>
        <div class="row" id="views"></div>
        <label class="f" for="title">Name shown on the card</label>
        <input id="title" type="text" autocomplete="off">
        <label class="f">Weather outside</label>
        <div class="row" id="wxs"></div>
        <p class="hint" id="wxHint"></p>
        <label class="f">Detail</label>
        <div class="row" id="gfx"><button class="btn" data-q="auto">Auto</button><button class="btn" data-q="full">Full</button><button class="btn" data-q="light">Light</button></div>
        <p class="hint">Light is for older tablets: softer edges, and less rain and snow. Auto switches to it if the card starts to stutter.</p>
        <label class="f">Height</label>
        <div class="row"><button class="btn" id="fill">Fill the screen</button><button class="btn" id="fixed">Set a height</button></div>
        <div class="slider" id="hBox"><input id="height" type="range" min="300" max="1000" step="20" aria-label="Card height"><span class="pill" id="hVal"></span></div>
      </section>

      <section>
        <h3>${jt.pin}Add or move things</h3>
        <p class="hint">Pick a sticker, then tap the plan where it goes. Tap anything on the plan to set it up, or drag it to move it.</p>
        <div class="row"><button class="btn" id="fillBtn">${jt.house}Find my things by room</button></div>
        <div class="kinds" id="kinds"></div>
        <div class="row tabs" id="ptabs"></div>
        <div id="planBox"><svg id="plan" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan of this floor"></svg></div>
        <div class="row" id="hiddenBox" style="display:none"><span class="pill" id="hiddenN"></span><button class="btn" id="restore">Put them back</button></div>
      </section>

      <section>
        <h3>${jt.plug}Connect your things</h3>
        <p class="hint">Tap one and I'll help you set it up. Grey ones are not connected yet and stay grey on the card.</p>
        <div id="devs"></div>
      </section>
      <p class="hint" style="color:#1b1b1b;margin:10px 4px 0">Prefer typing? "Show code editor" below still works.</p>
    </div>`;let e=r=>this.shadowRoot.querySelector(r);e("#url").addEventListener("change",r=>{let a=r.target.value.trim();a&&this._set("layout",a)}),e("#useUrl").addEventListener("click",()=>{this._showUrl=!0,this._sync(),e("#url").focus()}),e("#file").addEventListener("change",r=>{let a=r.target.files[0];if(!a)return;let c=new FileReader;c.onload=()=>{try{let h=JSON.parse(String(c.result));if(!h||!Array.isArray(h.floors)||!h.floors.length)throw new Error("it has no floors in it");this._showUrl=!1,this._set("layout",h)}catch(h){this._tell("That file didn't work",`I couldn't read it as a house file: ${h.message}.`,"oops",!0)}},c.readAsText(a),r.target.value=""}),this.shadowRoot.querySelectorAll("[data-theme]").forEach(r=>r.addEventListener("click",()=>this._set("theme",r.dataset.theme))),this.shadowRoot.querySelectorAll("[data-q]").forEach(r=>r.addEventListener("click",()=>this._set("quality",r.dataset.q==="auto"?null:r.dataset.q))),e("#title").addEventListener("change",r=>this._set("title",r.target.value)),e("#fill").addEventListener("click",()=>this._set("height",null)),e("#fixed").addEventListener("click",()=>this._set("height",520)),e("#height").addEventListener("change",r=>this._set("height",Number(r.target.value))),e("#height").addEventListener("input",r=>{e("#hVal").textContent=`${r.target.value} px`});for(let[r,a]of Cu){let c=document.createElement("button");c.className="btn kind",c.dataset.kind=r,c.innerHTML=`${jt[r]||jt.sensor}<span>${a}</span>`,c.addEventListener("click",()=>this._armKind(this._arm===r?null:r)),e("#kinds").appendChild(c)}e("#restore").addEventListener("click",()=>{let r={...this._config.devices||{}};for(let a of Object.keys(r))r[a]===null&&delete r[a];this._fire({...this._config,devices:r})}),e("#fillBtn").addEventListener("click",()=>this._fill.open());let n=e("#plan");n.addEventListener("pointerdown",r=>{let a=r.target.closest?r.target.closest(".pin"):null;!a||this._arm||(this._dragging={id:a.dataset.dev,el:a,from:this._point(r),moved:!1},a.setPointerCapture(r.pointerId))}),n.addEventListener("pointermove",r=>{let a=this._dragging;if(!a)return;let c=this._point(r);!a.moved&&Math.hypot(c.x-a.from.x,c.y-a.from.y)<.2||(a.moved=!0,a.el.setAttribute("transform",`translate(${c.x} ${c.y})`))});let s=r=>{let a=this._dragging;if(this._dragging=null,!a)return;if(this._swallow=!0,setTimeout(()=>{this._swallow=!1},350),!a.moved){this._open(a.id);return}let c=this._point(r);this._move(a.id,c.x,c.y)};n.addEventListener("touchstart",r=>{!this._arm&&r.target.closest&&r.target.closest(".pin")&&r.preventDefault()},{passive:!1}),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",()=>{this._dragging=null,this._plan()}),n.addEventListener("click",r=>{if(this._swallow)return;let a=r.target.closest?r.target.closest(".pin"):null,c=this._point(r);this._arm?this._place(this._arm,c.x,c.y):a?this._open(a.dataset.dev):this._select(null)})}async _loadHouse(){let t=this._config.layout,e=typeof t=="string"?t:JSON.stringify(t||null);if(e!==this._houseKey){this._houseKey=e,this._house=null,this._file=null,this._houseError="";try{if(typeof t=="string"){let s=await fetch(`${t}${t.includes("?")?"&":"?"}v=${Date.now()}`);if(!s.ok)throw new Error(`the server answered ${s.status}`);this._house=await s.json()}else t&&(this._house=JSON.parse(JSON.stringify(t)));if(!this._house||!Array.isArray(this._house.floors))throw new Error("it has no floors in it");this._file=this._house;let n=Po(Pu(this._file),null);n.floors.forEach(s=>(s.rooms||[]).forEach((r,a)=>{r.id=r.id||`${s.id}_room${a}`})),this._fileIds=new Set(n.floors.flatMap(s=>(s.devices||[]).map(r=>r.id))),this._fw=[],this._problems=[];for(let s of n.floors)try{let r=oc(Pu(s));this._fw.push(r),this._problems.push(...r.warnings)}catch(r){this._fw.push(null),this._problems.push(r.message)}this._rebuildHouse()}catch(n){this._house=null,this._file=null,this._houseError=n.message}e===this._houseKey&&(this._sel=null,this._sync(),this._devices(),this._plan())}}_roomName(t,e){let n=t.rooms||[],s=n.find(r=>r.id===e.room);return!s&&e.x!=null&&(s=n.find(r=>{let a=ei(sn(r));return e.x>=a.x0&&e.x<=a.x1&&e.y>=a.y0&&e.y<=a.y1})),s&&s.name||""}_entityOf(t){let e=this._config.entities||{},n=s=>Object.prototype.hasOwnProperty.call(e,s);return n(t.id)?e[t.id]:t.name&&n(t.name)?e[t.name]:t.entity||null}_sync(){if(!this.shadowRoot)return;let t=m=>this.shadowRoot.querySelector(m),e=this._config,n=this.shadowRoot.activeElement,s=typeof e.layout=="string",r=this._house;t("#src").textContent=s?"From a file on Home Assistant":r?`Built into this card: ${r.floors.length} floor${r.floors.length>1?"s":""}, ${r.floors.reduce((m,g)=>m+(g.rooms||[]).length,0)} rooms`:"Built into this card",t("#urlBox").style.display=s||this._showUrl?"":"none",t("#useUrl").style.display=s||this._showUrl?"none":"",n!==t("#url")&&(t("#url").value=s?e.layout:"");let a=e.theme||r&&r.theme||"toon";this.shadowRoot.querySelectorAll("[data-theme]").forEach(m=>m.classList.toggle("on",m.dataset.theme===a)),n!==t("#title")&&(t("#title").value=e.title!=null?e.title:"",t("#title").placeholder=r&&r.title||"My house"),this.shadowRoot.querySelectorAll("[data-q]").forEach(m=>m.classList.toggle("on",m.dataset.q===(e.quality||"auto")));let c=typeof e.height=="number";t("#fill").classList.toggle("on",!e.height),t("#fixed").classList.toggle("on",!!e.height),t("#hBox").style.display=c?"":"none",c&&(t("#height").value=e.height,t("#hVal").textContent=`${e.height} px`);let h=t("#views"),d=String(e.view!=null?e.view:"outside"),f=[["outside","Outside"],...(r&&r.floors||[]).map((m,g)=>[m.id||`floor${g}`,m.name||(g===0?"Ground":`Floor ${g}`)])],_=JSON.stringify([f,d]);if(_!==this._viewSig){this._viewSig=_,h.innerHTML="";for(let[m,g]of f){let b=document.createElement("button");b.className=`btn${d===m||m==="outside"&&d==="whole"?" on":""}`,b.textContent=g,b.addEventListener("click",()=>this._set("view",m)),h.appendChild(b)}}this._weathers(),this._talk()}_weathers(){let t=this.shadowRoot.querySelector("#wxs"),e=this._config.weather||"",n=this._hass?Object.keys(this._hass.states).filter(c=>c.startsWith("weather.")).sort():[];e&&e.includes(".")&&!n.includes(e)&&n.push(e);let s=c=>this._hass&&this._hass.states[c]&&this._hass.states[c].attributes.friendly_name||c,r=JSON.stringify([n.map(s),e]);if(r===this._wxSig)return;this._wxSig=r,t.innerHTML="";let a=(c,h)=>{let d=document.createElement("button");d.className=`btn${e===c?" on":""}`,d.textContent=h,d.addEventListener("click",()=>this._fire({...this._config,weather:c})),t.appendChild(d)};a("","Always sunny");for(let c of n)a(c,s(c));this.shadowRoot.querySelector("#wxHint").textContent=n.length?"Pick a weather report and the sky follows it: rain, snow, fog, thunder, and stars at night.":"Add a weather integration in Home Assistant (Met Office or Met.no, say) and the sky can follow it."}_tell(t,e,n,s){this._hold=Date.now()+6e3,this._say(t,e,n,s)}_talk(){if(Date.now()<(this._hold||0))return;if(this._houseError){this._say("I can't find your house",`Something is wrong with the house file: ${this._houseError}.`,"oops",!0);return}if(!this._house){this._say("One moment","I'm fetching your house.","think");return}let t=this._house.floors.flatMap(n=>n.devices||[]),e=t.filter(n=>this._entityOf(n)).length;this._problems&&this._problems.length?this._say("Something to check",`${this._problems[0]}${this._problems.length>1?` (and ${this._problems.length-1} more)`:""}`,"oops",!0):t.length?e>=t.length?this._say("Everything is connected!","Tap things on the card to try them.","party"):this._say("Let's connect your home",`${e} of ${t.length} things are connected. Tap a grey one and I'll help you set it up.`,e?"happy":"wow"):this._say("Your house is ready","Now add your lights and blinds: pick a sticker below and tap the plan where it goes.","happy")}_devices(){if(!this.shadowRoot)return;let t=this.shadowRoot.querySelector("#devs"),e=this._house;if(!e){t.innerHTML="";return}let n=new Set([...t.querySelectorAll("details[open]")].map(r=>r.dataset.floor)),s=!t.children.length;t.innerHTML="",e.floors.forEach((r,a)=>{let c=r.devices||[];if(!c.length)return;let h=document.createElement("details"),d=r.id||`floor${a}`;h.dataset.floor=d,h.open=s?a===0:n.has(d),h.innerHTML=`<summary>${$n(r.name||(a===0?"Ground":`Floor ${a}`))}<span class="pill"></span></summary>`;for(let f of c){let _=document.createElement("button"),m=this._roomName(r,f);_.className="dev",_.dataset.id=f.id,_.innerHTML=`<span class="ic">${jt[f.kind]||jt.sensor}</span>
          <span class="nm">${$n(f.name||this.kindName(f.kind))}<small>${$n([this.kindName(f.kind),m].filter(Boolean).join(" in "))}</small></span>
          <span class="pill go"></span><span class="lk"></span>`,_.addEventListener("click",()=>this._open(f.id)),_.classList.toggle("sel",f.id===this._sel),h.appendChild(_)}t.appendChild(h)}),this._states()}_link(t,e){if(e&&this._hass&&!this._hass.states[e])return this._tell("I don't know that one",`"${e}" isn't a device in Home Assistant.`,"oops",!0),!1;let n={...this._config.entities||{}},s=t.entity||null;return(e||null)===s?delete n[t.id]:n[t.id]=e||null,this._fire({...this._config,entities:n}),this._states(),!0}kindName(t){return ob[t]||t||"Device"}usedBy(t){let e={};for(let n of this._house?this._house.floors:[])for(let s of n.devices||[]){let r=s.id===t?null:this._entityOf(s);r&&(e[r]=s.name||this.kindName(s.kind))}return e}_open(t,e){let n=this._find(t);n&&(this._pf=n.fi,this._arm=null,this._sel=t,this._plan(),this._selBox(),this._setup.open(t,null,!!e))}_setupClosed(){this._talk()}_moveMode(t){let e=this._find(t);e&&(this._pf=e.fi,this._select(t,!0),this._tell("Drag it",`Drag ${e.d.name||"it"} on the plan to its new place.`,"think"))}_states(){if(!this.shadowRoot||!this._house)return;let t=this.shadowRoot.querySelector("#devs");this._house.floors.forEach((e,n)=>{let s=t.querySelector(`details[data-floor="${e.id||`floor${n}`}"]`);if(!s)return;let r=0;for(let a of e.devices||[]){let c=[...s.querySelectorAll(".dev")].find(f=>f.dataset.id===a.id),h=this._entityOf(a),d=h&&this._hass?this._hass.states[h]:null;c&&(h&&r++,c.classList.toggle("live",!!h),c.querySelector(".lk").textContent=h?`${d&&d.attributes&&d.attributes.friendly_name||h}: ${Gi(d)}`:"Not connected yet",c.querySelector(".go").textContent=h?"Change":"Set up")}s.querySelector("summary .pill").textContent=`${r} of ${(e.devices||[]).length} connected`})}_floorNow(){let t=this._house;return!t||!t.floors.length?null:((this._pf==null||!t.floors[this._pf])&&(this._pf=0),{f:t.floors[this._pf],w:this._fw[this._pf],i:this._pf})}_point(t){let e=this.shadowRoot.querySelector("#plan"),n=e.createSVGPoint();return n.x=t.clientX,n.y=t.clientY,n.matrixTransform(e.getScreenCTM().inverse())}_spot(t,e){if(e.x!=null)return[e.x,e.y];let n=(t.rooms||[]).find(a=>a.id===e.room);if(!n)return null;let s=ei(sn(n)),r=e.kind==="cover"||e.kind==="contact"?0:.32;return e.wall==="n"?[e.at,s.y0+r]:e.wall==="s"?[e.at,s.y1-r]:e.wall==="w"?[s.x0+r,e.at]:[s.x1-r,e.at]}_plan(){if(!this.shadowRoot)return;let t=w=>this.shadowRoot.querySelector(w),e=this._floorNow(),n=t("#plan"),s=t("#ptabs");if(!e){n.innerHTML="",s.innerHTML="";return}let{f:r,w:a}=e,c=this._house;s.innerHTML="",c.floors.length>1&&c.floors.forEach((w,x)=>{let y=document.createElement("button");y.className=`btn${x===this._pf?" on":""}`,y.textContent=w.name||(x===0?"Ground":`Floor ${x}`),y.addEventListener("click",()=>{this._pf=x,this._sel=null,this._plan(),this._selBox()}),s.appendChild(y)});let h=ac(this._config.theme||c.theme,{...c.colours||{},...this._config.colours||{}}),d=(r.rooms||[]).map(w=>({r:w,pts:sn(w)})),f=ei(d.flatMap(w=>w.pts)),_=.8,m=0,g="";for(let{r:w,pts:x}of d){let y=lc(h,w,m);y.type==="bedroom"&&m++,g+=`<polygon points="${x.map(A=>A.join(",")).join(" ")}" fill="${y.floor}" stroke="#1b1b1b" stroke-width="0.14" stroke-linejoin="round"/>`}for(let w of a&&a.openings||[]){if(w.kind==="opening")continue;let[x,y,A,C]=w.b,S=w.kind==="window"||w.kind==="bifold"?"#7FD9FF":w.kind==="frontdoor"?"#7A4FC4":"#FFFDF4";g+=`<rect x="${x}" y="${y}" width="${A-x}" height="${C-y}" fill="${S}" stroke="#1b1b1b" stroke-width="0.05"/>`}for(let{r:w,pts:x}of d){if(!w.name)continue;let y=ei(x),A=Math.min(.34,Math.max(.2,(y.x1-y.x0-.3)/(.6*w.name.length)));g+=`<text x="${(y.x0+y.x1)/2}" y="${y.y0+.5}" font-size="${A.toFixed(2)}" text-anchor="middle" fill="#1b1b1b" stroke="#fff" stroke-width="0.08" paint-order="stroke">${$n(w.name)}</text>`}for(let w of r.devices||[]){let x=this._spot(r,w);if(!x)continue;let y=w.id===this._sel,A=y?"#FFD83A":this._entityOf(w)?"#9BE37A":"#E9E9E9",C=(jt[w.kind]||jt.sensor).replace("<svg ",'<svg x="-0.3" y="-0.3" width="0.6" height="0.6" ');g+=`<g class="pin" data-dev="${$n(w.id)}" transform="translate(${x[0]} ${x[1]})"><title>${$n(w.name||w.kind)}</title><circle r="${y?.5:.42}" fill="${A}" stroke="#1b1b1b" stroke-width="${y?.11:.07}"/>${C}</g>`}n.setAttribute("viewBox",`${f.x0-_} ${f.y0-_} ${f.x1-f.x0+2*_} ${f.y1-f.y0+2*_}`),n.innerHTML=g,t("#planBox").classList.toggle("arm",!!this._arm),this.shadowRoot.querySelectorAll(".kind").forEach(w=>w.classList.toggle("on",w.dataset.kind===this._arm));let b=Object.values(this._config.devices||{}).filter(w=>w===null).length;t("#hiddenBox").style.display=b?"":"none",t("#hiddenN").textContent=`${b} thing${b===1?"":"s"} from your house file hidden`}_find(t){for(let[e,n]of(this._house?this._house.floors:[]).entries()){let s=(n.devices||[]).find(r=>r.id===t);if(s)return{d:s,f:n,fi:e}}return null}_selBox(){this.shadowRoot.querySelectorAll(".dev").forEach(t=>t.classList.toggle("sel",t.dataset.id===this._sel))}_select(t,e){this._sel=t||null,this._plan(),this._selBox(),e&&this.shadowRoot.querySelector("#planBox").scrollIntoView({behavior:"smooth",block:"center"})}_armKind(t){this._arm=t,this._sel=null,this._plan(),this._selBox();let e=Cu.find(n=>n[0]===t);e?this._tell(`Adding a ${e[1].toLowerCase()}`,e[2],"think"):(this._hold=0,this._talk())}_where(t,e,n,s){let r=s!=null?this._fw[s]:(this._floorNow()||{}).w;if(!r)return{error:"I can't read this floor's walls, so I can't place things on it."};let a=f=>Math.round(f*20)/20,c=r.roomAt(e,n),h=f=>{let _=null;for(let m of r.openings){if(!f.includes(m.kind))continue;let[g,b,w,x]=m.b,y=Math.hypot(Math.max(g-e,0,e-w),Math.max(b-n,0,n-x));(!_||y<_.d)&&(_={o:m,d:y})}return _&&_.d<=1?_.o:null},d=f=>({room:f.room,wall:f.wall,at:a(f.at+f.width/2)});if(t==="cover"){let f=h(["window","bifold","garage"]);return f?d(f):{error:"Blinds go on a window. Tap on a window, patio door or garage door (the blue and cream strips on the walls)."}}if(t==="contact"||t==="lock"){let f=h(t==="lock"?["frontdoor","extdoor","door","garage"]:["window","bifold","frontdoor","extdoor","door","garage"]);if(f&&t==="contact")return d(f);if(f){let[_,m,g,b]=f.b;return{x:a((_+g)/2-f.n[0]*.3),y:a((m+b)/2-f.n[1]*.3)}}}if(t==="camera"&&!c)return{x:a(e),y:a(n)};if(!c)return{error:"Tap inside one of the rooms."};if(t==="climate"){let f=ei(sn(c)),_=[["n",n-f.y0,e,f.x0,f.x1],["s",f.y1-n,e,f.x0,f.x1],["w",e-f.x0,n,f.y0,f.y1],["e",f.x1-e,n,f.y0,f.y1]].sort((y,A)=>y[1]-A[1]),[m,g,b,w,x]=_[0];if(g<=.8)return{room:c.id,wall:m,at:a(Math.min(x-.55,Math.max(w+.55,b)))}}return{x:a(e),y:a(n)}}_place(t,e,n){let s=this._floorNow(),r=this._where(t,e,n);if(r.error){this._tell("Not there",r.error,"oops",!0);return}let a=s.w,c=r.room?(s.f.rooms||[]).find(x=>x.id===r.room):a.roomAt(r.x,r.y),h=Cu.find(x=>x[0]===t)[1].toLowerCase(),d=c&&c.name?c.name:"Outside",f=new Set(this._house.floors.flatMap(x=>(x.devices||[]).map(y=>y.name))),_=`${d} ${h}`,m=2;for(;f.has(_);)_=`${d} ${h} ${m++}`;let g=new Set([...this._fileIds,...Object.keys(this._config.devices||{})]),b=`added_${dr(_)}`,w=2;for(;g.has(b);)b=`added_${dr(_)}_${w++}`;this._arm=null,this._sel=b,this._fire({...this._config,devices:{...this._config.devices||{},[b]:{floor:s.f.id,kind:t,name:_,...r}}}),this._selBox(),this._tell(`${_} added!`,`To see it in 3D, switch the card to ${s.f.name||"that floor"}.`,"party"),this._setup.open(b,"pick",!0)}_move(t,e,n){let s=this._find(t);if(!s)return;let r=this._where(s.d.kind,e,n);if(r.error){this._tell("Not there",r.error,"oops",!0),this._plan();return}let a={...this._config.devices||{}},c={...a[t]||{}};for(let h of ab)delete c[h];a[t]={...c,...r},this._sel=t,this._fire({...this._config,devices:a}),this._selBox(),this._tell("Moved",`${s.d.name||"It"} is in its new place.`,"happy")}_remove(t){let e=t?this._find(t):null;if(!e)return;let n={...this._config.devices||{}},s={...this._config.entities||{}};this._fileIds.has(t)?n[t]=null:delete n[t],delete s[t],this._sel=null,this._fire({...this._config,devices:n,entities:s}),this._selBox(),this._tell("Removed",this._fileIds.has(t)?`${e.d.name||"It"} is hidden. "Put them back" under the plan brings it back.`:`${e.d.name||"It"} is gone.`,"happy")}_fillRooms(t){let e={...this._config.devices||{}},n={...this._config.entities||{}},s=new Set([...this._fileIds,...Object.keys(e)]),r={},a=[],c=0,h=0,d=new Set,f={cover:new Set,contact:new Set,lock:new Set};this._house.floors.forEach((g,b)=>(g.devices||[]).forEach(w=>{f[w.kind]&&w.room&&f[w.kind].add(`${b}|${w.room}|${w.wall}|${Math.round(w.at*2)}`)}));for(let g of t){let b=this._house.floors[g.fi],w=this._fw[g.fi],x=(b.rooms||[]).find(R=>R.id===g.room);if(!w||!x){a.push(g.name);continue}let y=(b.devices||[]).find(R=>R.kind===g.kind&&!d.has(R.id)&&!this._entityOf(R)&&(R.room?R.room===x.id:R.x!=null&&(w.roomAt(R.x,R.y)||{}).id===x.id));if(y){d.add(y.id),n[y.id]=g.id,h++;continue}let A=(r[`${g.fi}|${g.room}|${g.kind}`]=(r[`${g.fi}|${g.room}|${g.kind}`]||0)+1)-1,C=this._autoSpot(g.kind,g.fi,x,w,A,f);if(!C){a.push(g.name);continue}let S=`added_${dr(g.name)}`,I=2;for(;s.has(S);)S=`added_${dr(g.name)}_${I++}`;s.add(S),e[S]={floor:b.id,kind:g.kind,name:g.name,...C},n[S]=g.id,c++}(c||h)&&this._fire({...this._config,devices:e,entities:n}),this._states();let _=a.length?` I couldn't find a spot for ${a.slice(0,3).join(", ")}${a.length>3?` and ${a.length-3} more`:""}: add ${a.length===1?"it":"them"} with a sticker.`:" Drag any of them to the right spot.",m=[c?`${c} added to the plan`:"",h?`${h} connected to grey ones that were waiting`:""].filter(Boolean).join(", ");this._tell(c+h?`${c+h} thing${c+h===1?"":"s"} sorted!`:"Nothing added",`${m?`${m[0].toUpperCase()}${m.slice(1)}.`:""}${_}`,c+h?"party":"oops",!(c+h))}_autoSpot(t,e,n,s,r,a){let c=ei(sn(n)),h=A=>Math.round(A*20)/20,d=(A,C)=>{let S=s.roomAt(A,C);return!!S&&S.id===n.id},f=(c.x0+c.x1)/2,_=(c.y0+c.y1)/2;if(!d(f,_)){let A=sn(n),C=n.label||[A.reduce((S,I)=>S+I[0],0)/A.length,A.reduce((S,I)=>S+I[1],0)/A.length];if(!d(C[0],C[1]))return null;[f,_]=C}let m=(A,C)=>{for(let S of A)for(let I of s.openings){if(I.kind!==S||I.room!==n.id)continue;let R=h(I.at+I.width/2),O=`${e}|${I.room}|${I.wall}|${Math.round(R*2)}`;if(!C.has(O))return C.add(O),{o:I,at:R}}return null};if(t==="cover"){let A=m(["window","bifold","garage"],a.cover);return A?{room:n.id,wall:A.o.wall,at:A.at}:null}if(t==="contact"){let A=m(["frontdoor","extdoor","bifold","garage","door","window"],a.contact);return A?{room:n.id,wall:A.o.wall,at:A.at}:null}if(t==="lock"){let A=m(["frontdoor","extdoor","garage"],a.lock);if(!A)return null;let[C,S,I,R]=A.o.b;return{x:h((C+I)/2-A.o.n[0]*.3),y:h((S+R)/2-A.o.n[1]*.3)}}let g=c.x1-c.x0>=c.y1-c.y0,b=.45,w=[[c.x0+b,c.y0+b],[c.x1-b,c.y0+b],[c.x1-b,c.y1-b],[c.x0+b,c.y1-b]],x=[["w",c.x0,_],["e",c.x1,_],["n",f,c.y0],["s",f,c.y1]],y;if(t==="light"){let A=[0,-.25,.25,-.4,.4][r%5];y=g?[f+A*(c.x1-c.x0),_]:[f,_+A*(c.y1-c.y0)]}else if(t==="climate"){let[A,C,S]=[x[r%4][0],x[r%4][1],x[r%4][2]],I=A==="n"||A==="s",R=I?c.x0:c.y0,O=I?c.x1:c.y1;return O-R>1.3?{room:n.id,wall:A,at:h(Math.min(O-.6,Math.max(R+.6,I?f:_)))}:{x:h(f),y:h(_)}}else t==="tv"?y=[f,c.y0+.35]:t==="motion"||t==="camera"?y=w[r%4]:t==="speaker"?y=w[(r+1)%4]:y=[c.x0+b+(r%4+1)*((c.x1-c.x0-2*b)/5),c.y1-b];return d(y[0],y[1])||(y=[f+r%3*.3,_+.3]),d(y[0],y[1])?{x:h(y[0]),y:h(y[1])}:null}_rename(t,e){let n=t?this._find(t):null;if(e=(e||"").trim(),!n||!e||e===n.d.name)return;let s={...this._config.devices||{}};s[t]={...s[t]||{},name:e},this._fire({...this._config,devices:s}),this._selBox(),this._states()}};customElements.get("toon-house-card-editor")||customElements.define("toon-house-card-editor",Iu);var We=i=>String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),Du='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.500l3.800 8 8.700 1.100-6.400 6 1.700 8.700L16 23l-7.800 4.300 1.700-8.700-6.400-6 8.700-1.100z" fill="var(--star,#fff)" stroke="#1b1b1b" stroke-width="2.400" stroke-linejoin="round"/></svg>'.replace(/\.(\d)00/g,".$1"),cb=["Make my bed","Brush my teeth","Tidy my toys","Get dressed","Set the table","Feed the pet","Put clothes away","Read a book"],Lp=`${dc}
  .links{margin:0 0 10px}
  :host{display:block;font-family:${Yn};font-weight:500;color:#1b1b1b;--ink:#1b1b1b;--sun:#FFD83A;--paper:#FFFDF4}
  *{box-sizing:border-box}
  ha-card{display:block;background:linear-gradient(#6CCBFA,#9ADCFC);border:3px solid var(--ink);border-radius:18px;padding:12px;overflow:hidden;position:relative;min-height:var(--toon-family-min-h,0);display:flex;flex-direction:column}
  .week{flex:1}
  .top{display:flex;gap:10px;align-items:flex-start;flex-wrap:wrap}
  .roofus{flex:none;width:70px}
  .roofus svg{display:block;width:100%}
  .bubble{position:relative;flex:1;min-width:180px;background:#fff;border:3px solid var(--ink);border-radius:16px;padding:8px 12px;box-shadow:2px 3px 0 var(--ink);font-size:15px;line-height:1.3;min-height:56px}
  .bubble::before{content:"";position:absolute;left:-12px;top:20px;width:18px;height:18px;background:#fff;border-left:3px solid var(--ink);border-bottom:3px solid var(--ink);transform:rotate(45deg)}
  .bubble b{display:block;font-weight:700;font-size:18px}
  .btn{font:inherit;font-weight:700;font-size:15px;min-height:44px;padding:6px 12px;border:3px solid var(--ink);border-radius:13px;background:#fff;color:var(--ink);cursor:pointer;box-shadow:2px 3px 0 var(--ink);display:inline-flex;align-items:center;justify-content:center;gap:6px}
  .btn:active{transform:translate(2px,3px);box-shadow:none}
  .btn.on{background:var(--sun)}
  .btn.go{background:#9BE37A}
  .btn svg{width:22px;height:22px;flex:none}
  .btn:focus-visible,.chore:focus-visible,input:focus{outline:4px solid #7A4FC4;outline-offset:2px}
  .face{flex:none;display:block;border-radius:50%}
  .face svg{display:block;width:100%;height:100%}
  dialog{font:inherit;color:var(--ink);border:4px solid var(--ink);border-radius:22px;padding:14px;background:var(--paper);box-shadow:5px 7px 0 var(--ink);width:min(460px,calc(100vw - 16px));max-height:calc(100dvh - 16px);overflow:auto}
  dialog::backdrop{background:rgba(27,27,27,.55)}
  dialog h3{margin:0 0 8px;font-size:20px}
  dialog label{display:block;font-weight:700;font-size:14px;margin:10px 0 4px}
  dialog input[type=text],dialog input[type=time]{font:inherit;font-size:17px;min-height:46px;padding:6px 10px;border:3px solid var(--ink);border-radius:12px;background:#fff;color:var(--ink);width:100%}
  .row{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin:8px 0 0}
  .pick{min-height:40px;font-size:13px;padding:4px 9px}
  .who{flex-direction:column;gap:2px;font-size:12px;min-width:66px;padding:6px 4px}
  .who .face{width:40px;height:40px}
  .err{background:#FFE1D8;border:3px solid var(--ink);border-radius:12px;padding:8px 10px;margin-top:10px;font-size:14px}
`;function Dp(i){return(i.people||[]).map((t,e)=>({...t,colour:t.colour||gr[e%gr.length],name:t.name||`Person ${e+1}`}))}var Fp=async(i,t)=>(await i.callWS({type:"todo/item/list",entity_id:t})||{}).items||[];function Np(i){let t=e=>{e.key==="Escape"&&i.open&&(e.stopPropagation(),e.preventDefault(),i.close())};return i.addEventListener("close",()=>window.removeEventListener("keydown",t,!0)),()=>{i.showModal(),window.addEventListener("keydown",t,!0)}}var hb=`
  .kids{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px;margin-top:12px}
  .kid{background:var(--paper);border:3px solid var(--ink);border-radius:16px;box-shadow:2px 3px 0 var(--ink);padding:10px;position:relative;overflow:hidden}
  .kid header{display:flex;align-items:center;gap:10px;margin-bottom:8px}
  .kid .face{width:64px;height:64px}
  .kid h2{margin:0;font-size:22px;font-weight:700;line-height:1.1;flex:1;min-width:0;overflow-wrap:anywhere}
  .kid h2 small{display:block;font-size:13px;font-weight:500}
  .stars{display:inline-flex;align-items:center;gap:4px;font-weight:700;font-size:20px;border:3px solid var(--ink);border-radius:999px;padding:2px 10px 2px 6px;background:var(--sun);--star:#fff}
  .stars svg{width:26px;height:26px}
  .stars.bump{animation:bump .5s}
  @keyframes bump{40%{transform:scale(1.35) rotate(-6deg)}}
  .chore{font:inherit;color:var(--ink);width:100%;display:grid;grid-template-columns:38px 1fr auto;gap:8px;align-items:center;text-align:left;min-height:56px;padding:6px 10px;margin:0 0 7px;border:3px solid var(--ink);border-radius:14px;background:#fff;cursor:pointer;box-shadow:2px 3px 0 var(--ink);font-weight:700;font-size:17px;line-height:1.15}
  .chore:active{transform:translate(2px,3px);box-shadow:none}
  .chore svg{width:36px;height:36px;--star:#fff}
  .chore.done{background:#9BE37A}
  .chore.done svg{--star:#FFD83A;animation:spin .6s}
  .chore.done span{text-decoration:line-through;text-decoration-thickness:2px}
  .chore .x{display:none;width:34px;height:34px;border:3px solid var(--ink);border-radius:10px;background:#FF9F8A;place-items:center}
  .chore .x svg{width:18px;height:18px;animation:none}
  .edit .chore .x{display:grid}
  @keyframes spin{from{transform:scale(.3) rotate(-180deg)}}
  .none{font-size:14px;padding:6px 2px 10px}
  .kid .btn{width:100%;min-height:42px;font-size:14px;box-shadow:2px 2px 0 var(--ink)}
  .kid .newday{display:none;margin-top:7px}
  .edit .kid .newday{display:inline-flex}
  .bar{display:flex;gap:8px;justify-content:flex-end;margin-top:10px}
  .bar .btn{min-height:38px;font-size:13px;box-shadow:2px 2px 0 var(--ink)}
  .confetti{position:absolute;inset:0;pointer-events:none;overflow:hidden}
  .confetti i{position:absolute;top:-12px;width:9px;height:14px;border:2px solid var(--ink);border-radius:3px;animation:drop 1.5s ease-in forwards}
  @keyframes drop{to{transform:translateY(520px) rotate(540deg);opacity:.2}}
  @media (prefers-reduced-motion:reduce){.chore.done svg,.stars.bump,.confetti i{animation:none}.confetti{display:none}}
`,Fu=class extends HTMLElement{static getStubConfig(t){let e=Object.keys(t&&t.states||{}).filter(n=>n.startsWith("todo."));return{people:[{name:"Mia",look:"girl",chores:e[0]||"todo.mia_chores"},{name:"Sam",look:"boy",chores:e[1]||"todo.sam_chores"}]}}setConfig(t){if(!t||!Array.isArray(t.people)||!t.people.length)throw new Error('Add a "people" list, each with a name and a "chores" to-do list.');if(this._config=t,t.fill?this.style.setProperty("--toon-family-min-h","100vh"):this.style.removeProperty("--toon-family-min-h"),this._people=Dp(t),this._items=this._items||{},this._seen={},!this.shadowRoot){_n(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`<style>${Lp}${hb}</style><ha-card><div class="links"></div><div class="top"><div class="roofus"></div><div class="bubble" aria-live="polite"></div></div><div class="kids"></div>
        <div class="bar"><button class="btn" data-act="edit">Grown-ups</button></div>
        <dialog><h3></h3><label for="what">What is the chore?</label><input id="what" type="text" autocomplete="off" maxlength="60"><div class="row" id="ideas"></div><div class="row" style="justify-content:flex-end"><button class="btn" data-act="cancel">Not now</button><button class="btn go" data-act="add">${jt.yes}Add it</button></div></dialog></ha-card>`;let e=this.shadowRoot,n=e.querySelector("dialog");this._show=Np(n),e.querySelector("#ideas").innerHTML=cb.map(s=>`<button class="btn pick" data-idea="${We(s)}">${We(s)}</button>`).join(""),e.addEventListener("click",s=>this._click(s)),e.querySelector("#what").addEventListener("keydown",s=>{s.key==="Enter"&&this._add()})}this._render(),this._load()}set hass(t){this._hass=t,this.isConnected&&this._config&&this._config.screensaver&&yn(this,this._config.screensaver,t),this._load()}connectedCallback(){this._config&&yn(this,this._config.screensaver,this._hass)}disconnectedCallback(){mr(this)}getCardSize(){return 8}_say(t,e,n="happy"){this.shadowRoot.querySelector(".roofus").innerHTML=xn(n),this.shadowRoot.querySelector(".bubble").innerHTML=`<b>${We(t)}</b>${We(e)}`}async _load(t){let e=this._hass;if(!e||!e.callWS||!this._people)return;let n=!1;await Promise.all(this._people.map(async r=>{if(!r.chores)return;let a=e.states[r.chores],c=a?`${a.state}|${a.last_updated||""}`:"missing";if(!(!t&&this._seen[r.chores]===c)){this._seen[r.chores]=c;try{this._items[r.chores]=a?await Fp(e,r.chores):null}catch{this._items[r.chores]=null}n=!0}}));let s=this._people.map(r=>r.stars&&e.states[r.stars]?e.states[r.stars].state:"").join("|");(n||s!==this._starSig)&&(this._starSig=s,this._render())}_stars(t){let e=t.stars&&this._hass?this._hass.states[t.stars]:null,n=this._items[t.chores]||[];return e&&Number.isFinite(Number(e.state))?Math.round(Number(e.state)):n.filter(s=>s.status==="completed").length}_render(){let t=this.shadowRoot,e=t.querySelector(".kids"),n=this._edit;t.querySelector("ha-card").classList.toggle("edit",!!n),t.querySelector(".links").innerHTML=Ro(this._config.links),t.querySelector("[data-act='edit']").classList.toggle("on",!!n),t.querySelector("[data-act='edit']").textContent=n?"Done":"Grown-ups";let s=0,r=0;e.innerHTML=this._people.map((a,c)=>{let h=this._items[a.chores],d=(h||[]).filter(_=>_.status==="completed").length;h&&(r+=h.length,s+=h.length-d);let f=a.chores?h===null?`<p class="none">I can't find the list ${We(a.chores)} in Home Assistant.</p>`:h?h.length?h.map(_=>`<button class="chore${_.status==="completed"?" done":""}" data-p="${c}" data-uid="${We(_.uid)}" aria-pressed="${_.status==="completed"}">${Du}<span>${We(_.summary)}</span><i class="x" data-act="remove" title="Take this chore away">${jt.close}</i></button>`).join(""):'<p class="none">No chores yet. Add one below.</p>':'<p class="none">Fetching...</p>':`<p class="none">Give ${We(a.name)} a "chores" to-do list in the card settings.</p>`;return`<section class="kid" data-p="${c}"><header><span class="face">${Su(a,this._hass,a.colour)}</span><h2>${We(a.name)}<small>${h&&h.length?`${d} of ${h.length} done`:""}</small></h2><span class="stars" title="Stars">${Du}<b>${this._stars(a)}</b></span></header>${f}
        ${a.chores&&h?`<button class="btn" data-act="new" data-p="${c}">+ Add a chore</button><button class="btn newday" data-act="newday" data-p="${c}">Start a new day</button>`:""}</section>`}).join(""),!(this._hold>Date.now())&&(r?s?this._say(this._config.title||"Chore chart",`${s} chore${s===1?"":"s"} left to do. Tap a chore when it's done to win a star.`,"happy"):this._say("Everything is done!","What a team. Stars all round.","party"):this._say(this._config.title||"Chore chart","Add a chore for each person to get started.","think"))}_cheer(t,e,n){this._hold=Date.now()+5e3,this._say(t,e,n)}async _click(t){if(Lo(t))return;let e=this.shadowRoot,n=t.target.closest("[data-act]"),s=t.target.closest("[data-idea]"),r=t.target.closest(".chore");if(s){e.querySelector("#what").value=s.dataset.idea;return}if(n){let a=n.dataset.act;if(a==="edit"){this._edit=!this._edit,this._render();return}if(a==="cancel"){e.querySelector("dialog").close();return}if(a==="add"){this._add();return}if(a==="new"){this._for=Number(n.dataset.p),e.querySelector("dialog h3").textContent=`A new chore for ${this._people[this._for].name}`,e.querySelector("#what").value="",this._show(),e.querySelector("#what").focus();return}if(a==="newday"){this._newDay(Number(n.dataset.p));return}if(a==="remove"&&r){t.stopPropagation(),this._remove(Number(r.dataset.p),r.dataset.uid);return}}r&&this._tick(Number(r.dataset.p),r.dataset.uid)}async _call(t,e,n,s){try{return await this._hass.callService(t,e,n,s?{entity_id:s}:void 0),!0}catch(r){return this._cheer("That didn't work",`Home Assistant said: ${r&&r.message?r.message:"no"}.`,"oops"),!1}}async _tick(t,e){let n=this._people[t],s=this._items[n.chores]||[],r=s.find(d=>d.uid===e);if(!r||this._edit)return;let a=r.status!=="completed";r.status=a?"completed":"needs_action";let c=a&&s.every(d=>d.status==="completed");this._cheer(a?c?`${n.name} has finished everything!`:`Well done, ${n.name}!`:"Oops, not done yet",a?`"${r.summary}" is done. That's a star!`:`"${r.summary}" is back on the list.`,a?"party":"think"),this._render();let h=this.shadowRoot.querySelector(`.kid[data-p="${t}"]`);if(a&&h&&h.querySelector(".stars").classList.add("bump"),c&&this._confetti(this.shadowRoot.querySelector("ha-card")),!await this._call("todo","update_item",{item:e,status:r.status},n.chores)){this._load(!0);return}n.stars&&this._hass.states[n.stars]&&await this._call(n.stars.split(".")[0],a?"increment":"decrement",{},n.stars),this._load(!0)}_confetti(t){let e=document.createElement("div");e.className="confetti",e.innerHTML=Array.from({length:26},(n,s)=>`<i style="left:${s*37%100}%;background:${["#FFD83A","#FF8FA3","#7FD8BE","#B197FC","#5BA8F5"][s%5]};animation-delay:${s%7*.07}s"></i>`).join(""),t.appendChild(e),setTimeout(()=>e.remove(),2300)}async _add(){let t=this.shadowRoot,e=t.querySelector("#what").value.trim(),n=this._people[this._for];!e||!n||(t.querySelector("dialog").close(),await this._call("todo","add_item",{item:e},n.chores)&&this._cheer("Added!",`"${e}" is on ${n.name}'s list.`,"happy"),this._load(!0))}async _remove(t,e){let n=this._people[t];await this._call("todo","remove_item",{item:e},n.chores),this._load(!0)}async _newDay(t){let e=this._people[t];for(let n of(this._items[e.chores]||[]).filter(s=>s.status==="completed"))await this._call("todo","update_item",{item:n.uid,status:"needs_action"},e.chores);this._cheer("A fresh day!",`${e.name}'s chores are ready to do again. The stars are kept.`,"happy"),this._load(!0)}},ub=`
  .nav{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:12px 0 8px}
  .nav h2{margin:0;font-size:20px;font-weight:700;flex:1;min-width:140px;text-shadow:0 0 4px #fff,0 0 4px #fff}
  .nav .btn{min-height:42px}
  .week{display:grid;grid-template-columns:repeat(var(--days,7),minmax(0,1fr));gap:8px}
  .day{background:var(--paper);border:3px solid var(--ink);border-radius:14px;box-shadow:2px 3px 0 var(--ink);min-height:150px;overflow:hidden;display:flex;flex-direction:column}
  .day h3{margin:0;padding:5px 8px;font-size:15px;font-weight:700;background:#fff;border-bottom:3px solid var(--ink);display:flex;justify-content:space-between;gap:6px}
  .day.today h3{background:var(--sun)}
  .day.past{opacity:.72}
  .evs{padding:6px;display:flex;flex-direction:column;gap:6px;flex:1}
  .ev{display:grid;grid-template-columns:30px 1fr;gap:6px;align-items:center;border:3px solid var(--ink);border-radius:12px;padding:4px 6px;background:var(--c,#fff);font-size:13px;line-height:1.15;font-weight:700;overflow-wrap:anywhere}
  .ev .face{width:30px;height:30px}
  .ev .face svg.ic{width:26px;height:26px;margin:2px}
  .ev small{display:block;font-weight:500;font-size:12px}
  .free{font-size:13px;opacity:.7;padding:4px 2px}
  .hw{background:var(--paper);border:3px solid var(--ink);border-radius:14px;box-shadow:2px 3px 0 var(--ink);margin-top:10px;padding:8px 10px}
  .hw h3{margin:0 0 6px;font-size:16px;display:flex;align-items:center;gap:8px}
  .hw h3 svg{width:26px;height:26px}
  .hw .list{display:flex;gap:8px;flex-wrap:wrap}
  .hwi{font:inherit;color:var(--ink);font-weight:700;font-size:14px;min-height:44px;padding:4px 12px 4px 6px;border:3px solid var(--ink);border-radius:999px;background:#fff;cursor:pointer;display:inline-flex;align-items:center;gap:6px;box-shadow:2px 2px 0 var(--ink)}
  .hwi svg{width:28px;height:28px;--star:#fff}
  .hwi.done{background:#9BE37A;text-decoration:line-through}
  .hwi.done svg{--star:#FFD83A}
  .hwi small{font-weight:500}
  @media (max-width:700px){.week{grid-template-columns:1fr}.day{min-height:0;flex-direction:row}.day h3{flex:none;width:74px;flex-direction:column;border-bottom:0;border-right:3px solid var(--ink);justify-content:center;align-items:center;gap:0}.evs{flex-direction:column}}
`,Ru=i=>new Date(i.getFullYear(),i.getMonth(),i.getDate()),Hi=(i,t)=>new Date(i.getFullYear(),i.getMonth(),i.getDate()+t),Lu=i=>`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`,Pp=i=>i.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),Ip=i=>i.dateTime?new Date(i.dateTime):new Date(`${i.date}T00:00:00`);function Rp(i,t,e){let n=[];for(let s=0;s<e;s++){let r=Hi(t,s),a=Hi(t,s+1);i.start<a&&i.end>r&&!(i.allDay&&+i.end==+r)&&n.push(s)}return n}var Nu=class extends HTMLElement{static getStubConfig(t){let e=Object.keys(t&&t.states||{}).filter(n=>n.startsWith("calendar."));return{people:[{name:"Mum",look:"mum",calendar:e[0]||"calendar.mum"},{name:"Dad",look:"dad",calendar:e[1]||"calendar.dad"}]}}setConfig(t){if(!t||!Array.isArray(t.people)&&!Array.isArray(t.calendars))throw new Error('Add a "people" list (each with a name and a calendar) or a "calendars" list.');this._config=t,t.fill?this.style.setProperty("--toon-family-min-h","100vh"):this.style.removeProperty("--toon-family-min-h"),this._people=Dp(t),this._days=Math.max(1,Math.min(14,Number(t.days)||7)),this._sources=[],this._people.forEach((e,n)=>[].concat(e.calendar||[]).forEach((s,r)=>this._sources.push({entity:s,person:n,colour:e.colour,name:e.name,add:r===0}))),(t.calendars||[]).forEach((e,n)=>{let s=typeof e=="string"?{entity:e}:e;s&&s.entity&&this._sources.push({entity:s.entity,person:-1,colour:s.colour||"#FFFDF4",name:s.name||"",icon:s.icon,add:s.add!==!1})}),this._from||(this._from=this._start(new Date)),this.shadowRoot||(_n(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`<style>${Lp}${ub}</style><ha-card><div class="links"></div><div class="top"><div class="roofus"></div><div class="bubble" aria-live="polite"></div></div>
        <div class="nav"><h2></h2><button class="btn" data-act="prev" aria-label="Earlier">${jt.back}</button><button class="btn" data-act="today">Today</button><button class="btn" data-act="next" aria-label="Later">${jt.next}</button><button class="btn go" data-act="new">+ Add</button></div>
        <div class="week"></div><div class="hw" style="display:none"><h3>${jt.study}<span></span></h3><div class="list"></div></div>
        <dialog><h3>Something new on the calendar</h3><label for="what">What is it?</label><input id="what" type="text" autocomplete="off" maxlength="80">
          <label>Who is it for?</label><div class="row" id="whos"></div><label>Which day?</label><div class="row" id="whens"></div>
          <label for="time">What time? Leave empty for all day</label><input id="time" type="time">
          <div class="row" style="justify-content:flex-end"><button class="btn" data-act="cancel">Not now</button><button class="btn go" data-act="add">${jt.yes}Add it</button></div></dialog></ha-card>`,this._show=Np(this.shadowRoot.querySelector("dialog")),this.shadowRoot.addEventListener("click",e=>this._click(e))),this._events=null,this._render(),this._load(!0)}set hass(t){let e=!this._hass;this._hass=t,this.isConnected&&this._config&&this._config.screensaver&&yn(this,this._config.screensaver,t),e?this._load(!0):(this._load(!1),this._homework(!1))}connectedCallback(){this._config&&yn(this,this._config.screensaver,this._hass),this._timer=setInterval(()=>this._load(!0),5*60*1e3)}disconnectedCallback(){clearInterval(this._timer),mr(this)}getCardSize(){return 9}_start(t){let e=Ru(t);return this._config.start==="today"||this._days!==7?e:Hi(e,-((e.getDay()+6)%7))}_say(t,e,n="happy"){this.shadowRoot.querySelector(".roofus").innerHTML=xn(n),this.shadowRoot.querySelector(".bubble").innerHTML=`<b>${We(t)}</b>${We(e)}`}async _load(t){let e=this._hass;if(!e||!e.callApi||!this._sources)return;let n=this._from,s=Hi(n,this._days),r=`${+n}|${this._sources.map(h=>h.entity).join(",")}`;if(!t&&r===this._key)return;this._key=r;let a=[],c=[];await Promise.all(this._sources.map(async(h,d)=>{let f=e.states[h.entity],_=f&&f.attributes.friendly_name||h.name||h.entity;if(!f||f.state==="unavailable"){c.push(_);return}try{let m=await e.callApi("GET",`calendars/${h.entity}?start=${encodeURIComponent(n.toISOString())}&end=${encodeURIComponent(s.toISOString())}`);for(let g of m||[])a.push({title:g.summary||"(no name)",start:Ip(g.start),end:Ip(g.end),allDay:!g.start.dateTime,src:d})}catch{c.push(_)}})),r===this._key&&(this._events=a,this._missing=c,this._render(),this._homework(!0))}async _homework(t){let e=this._hass,n=this._config.homework,s=this.shadowRoot.querySelector(".hw");if(!n||!e||!e.callWS){s.style.display="none";return}let r=e.states[n],a=r?`${r.state}|${r.last_updated||""}`:"missing";if(!t&&a===this._hwKey)return;this._hwKey=a;let c=[];try{c=r?await Fp(e,n):[]}catch{c=[]}this._hw=c,s.style.display="",s.querySelector("h3 span").textContent=this._config.homework_title||r&&r.attributes.friendly_name||"Homework",s.querySelector(".list").innerHTML=c.length?c.map(h=>`<button class="hwi${h.status==="completed"?" done":""}" data-hw="${We(h.uid)}" aria-pressed="${h.status==="completed"}">${Du}<span>${We(h.summary)}${h.due?` <small>by ${We(new Date(`${String(h.due).slice(0,10)}T00:00:00`).toLocaleDateString([],{weekday:"short",day:"numeric",month:"short"}))}</small>`:""}</span></button>`).join(""):`<span class="free">${r?"Nothing to do. Hooray!":`I can't find ${We(n)} in Home Assistant.`}</span>`}_face(t){return t.person>=0?`<span class="face">${Su(this._people[t.person],this._hass,t.colour)}</span>`:`<span class="face">${(jt[t.icon]||jt.house).replace("<svg ",'<svg class="ic" ')}</span>`}_render(){let t=this.shadowRoot,e=this._from,n=Ru(new Date),s=t.querySelector(".week"),r=this._events;t.querySelector(".week").style.setProperty("--days",this._days),t.querySelector(".links").innerHTML=Ro(this._config.links);let a=Hi(e,this._days-1),c=(_,m)=>_.toLocaleDateString([],m);t.querySelector(".nav h2").textContent=this._days===1?c(e,{weekday:"long",day:"numeric",month:"long"}):`${c(e,{day:"numeric",month:e.getMonth()===a.getMonth()?void 0:"short"})} to ${c(a,{day:"numeric",month:"long"})}`;let h=Array.from({length:this._days},()=>[]);for(let _ of r||[])for(let m of Rp(_,e,this._days))h[m].push(_);if(s.innerHTML=h.map((_,m)=>{let g=Hi(e,m),b=+g==+n?" today":g<n?" past":"";_.sort((x,y)=>x.allDay===y.allDay?x.start-y.start:x.allDay?-1:1);let w=r?_.length?_.map(x=>{let y=this._sources[x.src];return`<div class="ev" style="--c:${We(y.colour)}${y.person>=0?"55":""}" title="${We(y.name)}">${this._face(y)}<span>${We(x.title)}<small>${x.allDay?"All day":x.start<g?`until ${Pp(x.end)}`:Pp(x.start)}</small></span></div>`}).join(""):'<span class="free">Nothing on</span>':'<span class="free">Fetching...</span>';return`<section class="day${b}"><h3><span>${c(g,{weekday:"short"})}</span><span>${g.getDate()}</span></h3><div class="evs">${w}</div></section>`}).join(""),this._hold>Date.now())return;let d=(r||[]).filter(_=>Rp(_,n,1).length),f=this._config.title||"Our week";this._missing&&this._missing.length?this._say("A calendar is not answering",`I can't read ${this._missing.join(", ")}. In Home Assistant it may need signing in to again. The others are shown.`,"oops"):r?+e>+n||+Hi(e,this._days)<=+n?this._say(f,`${r.length} thing${r.length===1?"":"s"} on in these days.`,"happy"):d.length?this._say(f,`Today: ${d.slice(0,3).map(_=>_.title).join(", ")}${d.length>3?` and ${d.length-3} more`:""}.`,"happy"):this._say(f,"Nothing on today. A free day!","party"):this._say(f,"Fetching the calendars...","think")}_writable(){return this._sources.map((t,e)=>({...t,i:e})).filter(t=>{let e=this._hass&&this._hass.states[t.entity];return t.add&&e&&e.state!=="unavailable"&&Number(e.attributes.supported_features)&1})}async _click(t){if(Lo(t))return;let e=this.shadowRoot,n=t.target.closest("[data-act]"),s=t.target.closest("[data-hw]"),r=t.target.closest("[data-who]"),a=t.target.closest("[data-when]");if(r){this._who=Number(r.dataset.who),e.querySelectorAll("[data-who]").forEach(h=>h.classList.toggle("on",h===r));return}if(a){this._when=Number(a.dataset.when),e.querySelectorAll("[data-when]").forEach(h=>h.classList.toggle("on",h===a));return}if(s){this._tickHomework(s.dataset.hw);return}if(!n)return;let c=n.dataset.act;if(c==="prev"||c==="next")this._from=Hi(this._from,(c==="next"?1:-1)*this._days),this._events=null,this._render(),this._load(!0);else if(c==="today")this._from=this._start(new Date),this._events=null,this._render(),this._load(!0);else if(c==="cancel")e.querySelector("dialog").close();else if(c==="add")this._add();else if(c==="new"){let h=this._writable(),d=Ru(new Date);if(!h.length){this._hold=Date.now()+7e3,this._say("I can't add to these","None of these calendars lets Home Assistant add events. A Local Calendar does.","oops");return}this._who=h[0].i;let f=Math.round((d-this._from)/864e5);this._when=f>=0&&f<this._days?f:0,e.querySelector("#whos").innerHTML=h.map(_=>`<button class="btn who${_.i===this._who?" on":""}" data-who="${_.i}">${this._face(_)}${We(_.name||"Everyone")}</button>`).join(""),e.querySelector("#whens").innerHTML=Array.from({length:this._days},(_,m)=>{let g=Hi(this._from,m);return`<button class="btn pick${m===this._when?" on":""}" data-when="${m}">${g.toLocaleDateString([],{weekday:"short"})} ${g.getDate()}</button>`}).join(""),e.querySelector("#what").value="",e.querySelector("#time").value="",this._show(),e.querySelector("#what").focus()}}async _add(){let t=this.shadowRoot,e=t.querySelector("#what").value.trim(),n=t.querySelector("#time").value,s=this._sources[this._who];if(!e||!s){t.querySelector("#what").focus();return}let r=Hi(this._from,this._when||0),a;if(n){let[c,h]=n.split(":").map(Number),d=new Date(r.getFullYear(),r.getMonth(),r.getDate(),c,h),f=new Date(+d+36e5),_=m=>`${Lu(m)} ${String(m.getHours()).padStart(2,"0")}:${String(m.getMinutes()).padStart(2,"0")}:00`;a={summary:e,start_date_time:_(d),end_date_time:_(f)}}else a={summary:e,start_date:Lu(r),end_date:Lu(Hi(r,1))};t.querySelector("dialog").close(),this._hold=Date.now()+5e3;try{await this._hass.callService("calendar","create_event",a,{entity_id:s.entity}),this._say("It's on the calendar!",`"${e}" on ${r.toLocaleDateString([],{weekday:"long"})}${n?` at ${n}`:""}.`,"party")}catch(c){this._say("That didn't work",`Home Assistant said: ${c&&c.message?c.message:"no"}.`,"oops")}this._load(!0)}async _tickHomework(t){let e=(this._hw||[]).find(r=>r.uid===t),n=this._config.homework;if(!e)return;let s=e.status==="completed"?"needs_action":"completed";this._hold=Date.now()+5e3;try{await this._hass.callService("todo","update_item",{item:t,status:s},{entity_id:n}),this._say(s==="completed"?"Homework done!":"Back on the list",`"${e.summary}"${s==="completed"?" is finished. Brilliant.":" still needs doing."}`,s==="completed"?"party":"think")}catch(r){this._say("That didn't work",`Home Assistant said: ${r&&r.message?r.message:"no"}.`,"oops")}this._homework(!0)}};customElements.get("toon-chores-card")||customElements.define("toon-chores-card",Fu);customElements.get("toon-calendar-card")||customElements.define("toon-calendar-card",Nu);window.customCards=window.customCards||[];for(let[i,t,e]of[["toon-chores-card","Toon Chores Card","A cartoon chore chart with stars, from your to-do lists"],["toon-calendar-card","Toon Calendar Card","A cartoon family week, with a face for each person"]])window.customCards.some(n=>n.type===i)||window.customCards.push({type:i,name:t,description:e,preview:!1,documentationURL:"https://github.com/digitaladaption/toon-house-card"});var db="0.9.4",ds=.9,vi=2.1,_r=2.05,xr=.2,fs=(i,t,e)=>`tex|${i}|${t}|${e||""}`,fb=i=>String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),Do=i=>i*Math.PI/180;function Op(i,t){let e=i.entity&&t&&t.states[i.entity];if(!e)return{planned:!0,active:!1,level:1,text:""};let n=e.attributes||{},s=i.entity.split(".")[0],r=Number(e.state);switch(i.kind){case"light":case"switch":return{active:e.state==="on",text:""};case"cover":{let a=n.current_position!=null?Number(n.current_position):s==="input_number"?r:e.state==="open"?100:0;return{active:a<99,level:Math.max(0,Math.min(100,a))/100,text:`${Math.round(a)}%`}}case"climate":{let a=n.current_temperature!=null?n.current_temperature:n.temperature!=null?n.temperature:r;return{active:n.hvac_action==="heating"||s==="input_number"&&r>=21,text:Number.isFinite(Number(a))?`${Number(a).toFixed(1)}\xB0`:e.state}}case"lock":return{active:e.state==="locked",text:e.state==="locked"?"locked":"unlocked"};case"motion":return{active:e.state==="on",text:""};case"contact":return{active:e.state==="on",text:e.state==="on"?"open":""};case"camera":return{active:["streaming","recording"].includes(e.state),text:""};case"speaker":case"tv":return{active:["playing","on"].includes(e.state),text:e.state==="playing"?"playing":""};default:return{active:!1,text:`${e.state}${n.unit_of_measurement||""}`}}}var Ou=class extends HTMLElement{static getStubConfig(){return{view:"ground",layout:{title:"My house",floors:[{id:"ground",name:"Ground",rooms:[{id:"living",name:"Living room",rect:[0,0,5,4]},{id:"kitchen",name:"Kitchen",rect:[5,0,8.5,4]},{id:"hall",name:"Hall",rect:[0,4,8.5,5.6]}],openings:[{room:"hall",wall:"s",at:3.8,width:1,kind:"frontdoor"},{room:"living",wall:"n",at:1.5,width:2,kind:"window"},{room:"kitchen",wall:"n",at:6,width:1.5,kind:"window"},{room:"living",wall:"s",at:2,width:.85,kind:"door"},{room:"kitchen",wall:"s",at:6.2,width:.85,kind:"door"}],furniture:[{type:"sofa",x:2.5,y:3.3,rot:180},{type:"table",x:6.8,y:2.2}],devices:[{name:"Living room light",kind:"light",x:2.5,y:2,entity:null}]}]}}}static getConfigElement(){return document.createElement("toon-house-card-editor")}setConfig(t){if(!t||!t.layout)throw new Error('Set "layout" to the address of your house file (for example /local/toon-house/house.json) or put the house in the card config.');let e=this._config&&t.view!==void 0&&this._config.view!==t.view;e&&(this._mode=null),this._config={view:"outside",cut_height:1.2,...t},this.shadowRoot||(_n(),this.attachShadow({mode:"open"}),this._dom()),this._config.height?this.style.setProperty("--toon-house-h",typeof this._config.height=="number"?`${this._config.height}px`:this._config.height):this.style.removeProperty("--toon-house-h");let n=JSON.stringify([this._config.layout,this._config.theme||null,this._config.colours||null,this._config.cut_height]),s=JSON.stringify(this._config.devices||null);if(n===this._srcKey&&this._raw&&this._floors){if(s!==this._overKey){this._overKey=s,this._rebuild(e);return}if(this._applyEntities(),this._header(),this._renderer&&(this._config.quality||"auto")!==this._gfx){this._autoLow=!1,this._teardown(),this._ensure();return}if(!e&&this._weatherCheck())return;e?(this._pickMode(),this._renderer&&this._build(!0)):this._devs&&(this._sig=this._signature(),this._syncDevices(),this._req());return}this._srcKey=n,this._overKey=s,this._loadLayout()}getCardSize(){return 12}set hass(t){this._live=t,this._connected&&this._config&&this._config.screensaver&&yn(this,this._config.screensaver,t);let e=this.shadowRoot&&this.shadowRoot.querySelector(".rp");e&&(e.style.display=t&&t.callWS&&this._config.replay!==!1?"":"none"),!(this._replay&&this._replay.on)&&(this._hass=t,this._hassChanged())}_hassChanged(){if(this._room&&this._room.refresh(),this._root&&this._peopleSig()!==this._peopleKey&&(this._placePeople(),this._req()),!this._devs||this._weatherCheck())return;let t=this._signature();t!==this._sig&&(this._sig=t,this._syncDevices(),this._req())}connectedCallback(){this._connected=!0,this._config&&yn(this,this._config.screensaver,this._hass),this._ensure()}disconnectedCallback(){this._connected=!1,mr(this),this._replay&&this._replay.stop(),this._teardown()}_dom(){this.shadowRoot.innerHTML=`<style>
      :host{display:block}
      ha-card{position:relative;overflow:hidden;font-family:${Yn};font-weight:500;color:#1b1b1b}
      .wrap{position:relative;height:var(--toon-house-h,calc(100vh - 60px));min-height:var(--toon-house-min-h,380px)}
      canvas{display:block;width:100%;height:100%;touch-action:none;outline:none;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}
      .bar{position:absolute;left:12px;top:10px;right:12px;display:flex;gap:8px;flex-wrap:wrap;align-items:center;pointer-events:none}
      h1{margin:0 8px 0 0;font-size:22px;font-weight:900;text-shadow:0 0 4px #fff,0 0 4px #fff}
      button{pointer-events:auto;font:inherit;font-weight:800;font-size:14px;padding:7px 12px;border:3px solid #1b1b1b;border-radius:12px;background:#fff;color:#1b1b1b;cursor:pointer;box-shadow:2px 3px 0 #1b1b1b}
      button.on{background:#FFD83A}
      button.warn{background:#FF8A3D;margin-left:auto}
      .wx{font-weight:800;font-size:13px;padding:3px 10px;border:3px solid #1b1b1b;border-radius:999px;background:#fff;box-shadow:2px 3px 0 #1b1b1b}
      .labels{position:absolute;inset:0;pointer-events:none;overflow:hidden}
      .rl{position:absolute;transform:translate(-50%,-50%);font-weight:900;font-size:13px;white-space:nowrap;text-shadow:-2px 0 #fff,2px 0 #fff,0 -2px #fff,0 2px #fff,-1px -1px #fff,1px 1px #fff,-1px 1px #fff,1px -1px #fff}
      .chip{position:absolute;transform:translate(-50%,-140%);pointer-events:auto;cursor:pointer;font-weight:900;font-size:12px;padding:2px 7px;border:2px solid #1b1b1b;border-radius:10px;background:#fff;white-space:nowrap;box-shadow:1px 2px 0 #1b1b1b}
      .chip.active{background:#FFD83A}
      .rl.who{font-size:12px;background:#fff;border:2px solid #1b1b1b;border-radius:9px;padding:0 6px;text-shadow:none}
      .toast{position:absolute;left:50%;bottom:44px;transform:translateX(-50%);padding:8px 14px;border:3px solid #1b1b1b;border-radius:12px;background:#fff;font-weight:800;font-size:14px;box-shadow:2px 3px 0 #1b1b1b;display:none;pointer-events:auto;cursor:pointer;max-width:86%;text-align:left;white-space:pre-line}
      .foot{position:absolute;left:12px;bottom:8px;right:12px;font-size:12px;font-weight:700;text-shadow:0 0 3px #fff,0 0 3px #fff;pointer-events:none;display:flex;gap:14px;flex-wrap:wrap}
      .err{padding:18px;background:#fff;white-space:pre-line}
      ${fp}${bp}${dc}
      .bar .links{margin-left:auto}
      .bar .links+button.warn{margin-left:0}
      @media (max-width:600px){.rl{font-size:11px}.chip{font-size:11px;padding:1px 5px}h1{font-size:19px}.foot span+span{display:none}button{font-size:13px;padding:6px 9px}}
    </style>
    <ha-card><div class="wrap">
      <div class="labels"></div>
      <div class="bar"><h1></h1><span class="modes" style="display:contents"></span><span class="wx" style="display:none"></span><button class="rp" style="display:none" title="See the last day again">Replay</button><span class="links"></span><button class="warn" style="display:none">!</button></div>
      <div class="toast"></div>
      <div class="foot"><span class="counts"></span><span>Drag to turn, pinch or scroll to zoom. Tap a device or a room. Hold a device for more.</span></div>
    </div></ha-card>`,this._wrap=this.shadowRoot.querySelector(".wrap"),this._labels=this.shadowRoot.querySelector(".labels"),this._toast=this.shadowRoot.querySelector(".toast"),this._toast.addEventListener("click",()=>{let t=this._toast.dataset.nav;this._toast.style.display="none",t&&this._navigate(t)}),this.shadowRoot.querySelector(".links").addEventListener("click",t=>Lo(t)),this._room=new uc(this),this._replay=new fc(this),this.shadowRoot.querySelector(".rp").addEventListener("click",()=>this._replay.on?this._replay.stop():this._replay.start()),this.shadowRoot.querySelector(".warn").addEventListener("click",()=>this._say(`Check your house file:
- ${this._warnings.join(`
- `)}`,"",2e4))}async _loadLayout(){let t=this._config.layout,e=this._srcKey;this._failed&&(this._failed=!1,this._dom());try{let n=t;if(typeof t=="string"){let s=await fetch(`${t}${t.includes("?")?"&":"?"}v=${Date.now()}`);if(!s.ok)throw new Error(`the server answered ${s.status}`);n=await s.json()}if(e!==this._srcKey)return;this._raw=JSON.stringify(n),this._layout=JSON.parse(this._raw),this._prepare()}catch(n){this._fail(`Could not read the house file${typeof t=="string"?` at ${t}`:""}: ${n.message}`);return}this._renderer?this._build(!0):this._ensure()}_rebuild(t){try{this._layout=JSON.parse(this._raw),this._prepare()}catch(e){this._fail(`Something is wrong with the devices in the card settings: ${e.message}`);return}this._renderer?this._build(!!t):this._ensure()}_prepare(){let t=this._layout;if(!t||!Array.isArray(t.floors)||!t.floors.length)throw new Error('it needs a "floors" list with at least one floor');this.theme=this._theme0=ac(this._config.theme||t.theme,{...t.colours||{},...this._config.colours||{}}),this._H=t.storey_height||2.4,this._warnings=[];let e=0;Po(t,this._config.devices),this._floors=t.floors.map((h,d)=>{if(h.id=h.id||`floor${d}`,h.name=h.name||(d===0?"Ground":d===1?"Upstairs":`Floor ${d}`),h.rooms=h.rooms||[],!h.rooms.length)throw new Error(`floor "${h.name}" has no rooms`);h.rooms.forEach((m,g)=>{m.id=m.id||`${h.id}_room${g}`,m.name=m.name||"",m.points=sn(m)});for(let m of h.devices||[])m._file=m.entity===void 0?null:m.entity;let f=oc(h);this._warnings.push(...f.warnings);let _={};for(let m of h.rooms)_[m.id]=lc(this.theme,m,e),_[m.id].type==="bedroom"&&e++;for(let m of h.devices||[])m.x==null&&!(m.room&&m.wall&&m.at!=null)?this._warnings.push(`Device "${m.name||m.id}" needs either x and y, or room, wall and at.`):m.room&&!h.rooms.some(g=>g.id===m.room)&&this._warnings.push(`Device "${m.name||m.id}" points at room "${m.room}", which is not on ${h.name}.`);return{floor:h,walls:f,styles:_,off:h.offset||[0,0],baseY:d*(this._H+xr)}}),this._applyEntities(),this._pickMode(),this._header();let n=this.shadowRoot.querySelector(".modes");n.innerHTML="";let s=(h,d)=>{let f=document.createElement("button");f.textContent=h,f.dataset.mode=String(d),f.addEventListener("click",()=>this._setMode(d)),n.appendChild(f)};this._floors.forEach((h,d)=>s(h.floor.name,d)),s("Outside","whole");let r=this.shadowRoot.querySelector(".warn");r.style.display=this._warnings.length?"":"none",r.textContent=`! ${this._warnings.length}`;let a=ei(this._floors.flatMap(h=>h.floor.rooms.flatMap(d=>d.points.map(([f,_])=>[f+h.off[0],_+h.off[1]]))));this._house=a;let c=t.outside||{};this._plot={x0:a.x0-2,x1:a.x1+2,back:a.y0-9,front:a.y1+7,...c.plot||t.plot||{}}}_pickMode(){if(typeof this._mode=="number"&&this._mode>=this._floors.length&&(this._mode=null),this._mode!=null)return;let t=String(this._config.view),e=this._floors.findIndex(n=>n.floor.id===t);this._mode=e>=0?e:/^\d+$/.test(t)&&Number(t)<this._floors.length?Number(t):t==="ground"?0:"whole"}_header(){this._connected&&yn(this,this._config.screensaver,this._hass),this.shadowRoot.querySelector(".links").innerHTML=Ro(this._config.links),this.shadowRoot.querySelector("h1").textContent=this._config.title!=null?this._config.title:this._layout&&this._layout.title||""}_applyEntities(){let t=this._config.entities||{},e=n=>Object.prototype.hasOwnProperty.call(t,n);for(let n of this._floors||[])for(let s of n.floor.devices||[])s.entity=e(s.id)?t[s.id]:s.name&&e(s.name)?t[s.name]:s._file}_fail(t){this._failed=!0,this._floors=null,this._srcKey=null,this._raw=null,this._teardown(),this._wrap.innerHTML=`<div class="err">${fb(t)}</div>`}_ensure(){if(!this._connected||!this._layout||!this._floors||this._renderer)return;let t;try{this._gfx=this._config.quality||"auto",t=new Zl({antialias:this._gfx!=="light",alpha:!1,powerPreference:"low-power"})}catch{this._fail("This browser could not start 3D graphics (WebGL2), so the house cannot be drawn here.");return}this._renderer=t,t.setPixelRatio(this._low()?1:Math.min(window.devicePixelRatio||1,1.5)),this._slow=0,this._wrap.insertBefore(t.domElement,this._wrap.firstChild),this._scene=new kr,this._camera=new ri(32,1,.5,600);let e=new so(16777215,14207928,1.55),n=new oo(16777215,2.1);n.position.set(-9,14,12),this._scene.add(e,n),this._wx=new pc(this._scene,e,n,(r,a,c)=>this._outlined(r,a,c)),this._seen=!0,this._io=new IntersectionObserver(r=>{this._seen=r[r.length-1].isIntersecting,this._seen&&this._req()}),this._io.observe(this._wrap),this._onShow=()=>{document.hidden||this._req()},document.addEventListener("visibilitychange",this._onShow),this._controls=new Ql(this._camera,t.domElement),this._controls.enableDamping=!1,this._controls.minDistance=4,this._controls.maxDistance=160,this._controls.maxPolarAngle=1.48,this._controls.addEventListener("change",()=>{this._wx&&this._wx.range(this._camera.position.distanceTo(this._controls.target)),this._req()});let s=t.domElement;this._onDown=r=>{this._down=[r.clientX,r.clientY],this._at=[r.clientX,r.clientY],this._held=!1,clearTimeout(this._holdT),this._holdT=setTimeout(()=>{if(!this._down||Math.hypot(this._at[0]-this._down[0],this._at[1]-this._down[1])>=6)return;let a=this._deviceAt(this._down[0],this._down[1]);!a||!a.d.entity||(this._held=!0,this._toast.style.display="none",this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:a.d.entity}})))},550)},this._onMove=r=>{this._down&&(this._at=[r.clientX,r.clientY])},this._onUp=r=>{clearTimeout(this._holdT),this._down&&!this._held&&Math.hypot(r.clientX-this._down[0],r.clientY-this._down[1])<6&&this._pick(r.clientX,r.clientY),this._down=null},this._onMenu=r=>{(this._held||this._down)&&r.preventDefault()},s.addEventListener("pointerdown",this._onDown),s.addEventListener("pointermove",this._onMove),s.addEventListener("pointerup",this._onUp),s.addEventListener("pointercancel",this._onUp),s.addEventListener("contextmenu",this._onMenu),this._ro=new ResizeObserver(()=>this._resize()),this._ro.observe(this._wrap),this._resize(),this._build(!0)}_teardown(){if(this._raf&&cancelAnimationFrame(this._raf),this._raf=0,this._ro&&this._ro.disconnect(),this._ro=null,this._controls&&this._controls.dispose(),this._controls=null,this._io&&this._io.disconnect(),this._io=null,document.removeEventListener("visibilitychange",this._onShow),this._clear(),this._wx&&this._wx.dispose(),this._wx=null,this._renderer){let t=this._renderer.domElement;clearTimeout(this._holdT),t.removeEventListener("pointerdown",this._onDown),t.removeEventListener("pointermove",this._onMove),t.removeEventListener("pointerup",this._onUp),t.removeEventListener("pointercancel",this._onUp),t.removeEventListener("contextmenu",this._onMenu),this._renderer.dispose(),this._renderer.forceContextLoss(),t.remove()}this._renderer=null,this._scene=null,this._devs=null}_clear(){this._root&&(this._root.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())}),this._scene.remove(this._root),this._root=null,this._gradient&&this._gradient.dispose(),this._labels.innerHTML="")}_resize(){if(!this._renderer)return;let t=this._wrap.clientWidth,e=this._wrap.clientHeight;!t||!e||(this._renderer.setSize(t,e,!1),this._camera.aspect=t/e,this._camera.updateProjectionMatrix(),this._needView&&this._view(),this._req())}_setMode(t){t!==this._mode&&(this._mode=t,this._renderer&&this._build(!0))}_material(t,e){let n={gradientMap:this._gradient,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,side:_i,...e};if(!t.startsWith("tex|"))return new rs({color:t,...n});let[,s,r,a]=t.split("|"),c=new In(sp(s,r,a||null));c.wrapS=c.wrapT=ts,c.colorSpace=ze,c.anisotropy=4;let h=du[s]||1;return c.repeat.set(1/h,1/h),new rs({color:16777215,map:c,...n})}_batch(){let t=this;return{by:new Map,glass:[],edges:[],add(e,n,s=!0){let r=e.index?e.toNonIndexed():e;if(r!==e&&e.dispose(),s){let a=new Yr(r,28);this.edges.push(a.attributes.position.array),a.dispose()}if(n==="glass"){r.deleteAttribute("uv"),this.glass.push(r);return}n.startsWith("tex|")||r.deleteAttribute("uv"),(this.by.get(n)||this.by.set(n,[]).get(n)).push(r)},box(e,n,s,r,a,c,h,d=0,f=!0){if(c-a<.004||s<.004||r<.004)return;let _=new Je(s,c-a,r);d&&_.rotateY(-Do(d)),_.translate(e,(a+c)/2,n),this.add(_,h,f)},flat(e,n,s,r=!0){let a=new Ln(t._shape(e));a.rotateX(Math.PI/2),a.translate(0,n,0),this.add(a,s,r)},rect(e,n,s,r,a,c,h=!0){this.flat({o:[[e,n],[s,n],[s,r],[e,r]],h:[]},a,c,h)},shape(e,n,s,r=!0){let a=new Ln(t._shape(e));a.applyMatrix4(n),this.add(a,s,r)},prism(e,n,s,r,a=!0){let c=new ss(t._shape(e),{depth:s-n,bevelEnabled:!1});c.rotateX(Math.PI/2),c.translate(0,s,0),this.add(c,r,a)},quad(e,n,s,r,a,c=!0){let h=new Re,d=[e,n,s,e,s,r].flat();h.setAttribute("position",new ye(d,3)),h.setAttribute("uv",new ye(new Array(12).fill(0),2)),h.computeVertexNormals(),this.add(h,a,c)},build(e){for(let[n,s]of this.by){let r=new De(hu(s),t._material(n));s.forEach(a=>a.dispose()),e.add(r)}if(this.glass.length){let n=new De(hu(this.glass),new ke({color:t.theme.glass,transparent:!0,opacity:.45,depthWrite:!1,side:_i}));this.glass.forEach(s=>s.dispose()),n.renderOrder=2,e.add(n)}if(this.edges.length){let n=this.edges.reduce((c,h)=>c+h.length,0),s=new Float32Array(n),r=0;for(let c of this.edges)s.set(c,r),r+=c.length;let a=new lr;a.setPositions(s),e.add(new nc(a,new cr({color:t.theme.ink,linewidth:t._ink()})))}}}}_shape(t){let e=new pn(t.o.map(n=>new mt(n[0],n[1])));for(let n of t.h||[])e.holes.push(new is(n.map(s=>new mt(s[0],s[1]))));return e}_ink(){return this._wrap.clientWidth<600?1.6:2.4}_outlined(t,e,n=.035){let s=new oi,r=new De(t,e);t.computeBoundingSphere();let a=t.boundingSphere.radius||.2,c=1+n/a,h=new De(t,new ke({color:this.theme.ink,side:Ke}));return h.scale.set(c,c,c),s.add(h,r),s.userData.mesh=r,s}_toon(t){return new rs({color:t,gradientMap:this._gradient})}_build(t){let e=this._weather();this.theme=Ep(this._theme0,e.w,e.lit),this._tintKey=Tu(e.w,e.lit);let n=this.theme,s=this._H,r=this._config.cut_height,a=this._mode;this._clear(),this._cloudMats=[];let c=new $s(new Uint8Array(n.shade),n.shade.length,1,mo);c.minFilter=c.magFilter=Ue,c.needsUpdate=!0,this._gradient=c,this._scene.background=new he(n.sky),this.shadowRoot.querySelector("ha-card").style.background=n.sky;let h=this._root=new oi;if(this._scene.add(h),this._devs=[],this._room&&this._room.isOpen){let d=typeof a=="number"?this._floors[a]:null,f=d&&this._room.key===`${d.floor.id}|${this._room.roomId}`?d.floor.rooms.find(_=>_.id===this._room.roomId):null;f?this._room.open(d,f):this._room.close()}this._pickables=[],this._roomLabels=[],this._peopleKey=null,this._tweens=[],this._outside(h),this._floors.forEach((d,f)=>{if(a!=="whole"&&f>a)return;let _=a===f;this._floor(h,d,f,_?r:s,_)}),a==="whole"&&this._roofs(h),this.shadowRoot.querySelectorAll("button[data-mode]").forEach(d=>d.classList.toggle("on",d.dataset.mode===String(a))),this._sig=this._signature(),this._syncDevices(),t&&this._view(),this._placePeople(),this._applyWeather(e.w),this._req()}_low(){return this._gfx==="light"||this._gfx==="auto"&&!!this._autoLow}_peopleSig(){let t=this._hass,e=n=>n&&t&&t.states[n]?t.states[n].state:"";return`${this._mode}|${(this._config.people||[]).map(n=>`${e(n.person)},${e(n.room)}`).join(";")}`}_roomNamed(t){let e=String(t||"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();if(!e||["unknown","unavailable","not home","none","away"].includes(e))return null;for(let[n,s]of this._floors.entries())for(let r of s.floor.rooms)if(r.name&&(fr(r.name).includes(e)||fr(e).includes(fr(r.name)[0])||String(r.area||"").toLowerCase()===e||r.id===e))return{fi:n,room:r};return null}_placePeople(){let t=this._config.people||[],e=this._hass;if(this._peopleGroup&&(this._peopleGroup.traverse(d=>{d.material&&(d.material.map&&d.material.map.dispose(),d.material.dispose())}),this._root.remove(this._peopleGroup)),(this._peopleTags||[]).forEach(d=>d.el.remove()),this._peopleTags=[],this._peopleGroup=null,this._peopleKey=this._peopleSig(),this._peopleWhere={},!t.length||!e||!this._root)return;let n=this._peopleGroup=new oi,s=this._mode,r={};this._root.add(n);let a=this._floors[0],c=a.walls.openings.find(d=>d.kind==="frontdoor"),h=this._plot;t.forEach((d,f)=>{let _=d.name||`Person ${f+1}`,m=E=>E&&e.states[E]?e.states[E].state:null,g=this._roomNamed(m(d.room)),b=d.person?m(d.person)==="home":null,w=null,x="away";if(g){if(x=g.room.name,s===g.fi){let E=this._floors[g.fi],D=ei(g.room.points),U=[(D.x0+D.x1)/2,(D.y0+D.y1)/2];(E.walls.roomAt(U[0],U[1])||{}).id!==g.room.id&&(U=g.room.label||g.room.points.reduce((H,B)=>[H[0]+B[0]/g.room.points.length,H[1]+B[1]/g.room.points.length],[0,0]));let F=(r[`${g.fi}|${g.room.id}`]=(r[`${g.fi}|${g.room.id}`]||0)+1)-1,V=Math.min(1,(D.x1-D.x0)/4);w=[E.off[0]+U[0]+(F%2?1:-1)*Math.ceil(F/2)*V,E.baseY+1.05,E.off[1]+U[1]+.45]}}else if((b===!0||b===null&&!d.room)&&(x="home",s==="whole"||s===0)){let E=(r.door=(r.door||0)+1)-1,D=c?(c.b[0]+c.b[2])/2+a.off[0]:(h.x0+h.x1)/2,U=c?(c.b[1]+c.b[3])/2+a.off[1]+c.n[1]*1.5:h.front-2,F=c?c.n[0]*1.5:0;w=[D+F+(E%2?1:-1)*Math.ceil(E/2)*.95+1.3,1,U]}if(this._peopleWhere[_]={where:x,shown:!!w},!w)return;let y=new Ze,A=new Ys({map:y,transparent:!0,depthWrite:!1,fog:!1}),C=new Gr(A);y.colorSpace=ze,C.scale.set(1.05,1.05,1),C.position.set(...w),C.renderOrder=5,C.visible=!1;let S=d.colour||gr[f%gr.length],I=new Image,R=d.picture||!d.look&&d.person&&e.states[d.person]&&e.states[d.person].attributes.entity_picture||"";I.crossOrigin="anonymous",I.onload=()=>{let E=document.createElement("canvas"),D=E.getContext("2d");E.width=E.height=160,R?(D.fillStyle=S,D.beginPath(),D.arc(80,80,74,0,7),D.fill(),D.save(),D.clip(),D.drawImage(I,6,6,148,148),D.restore(),D.lineWidth=8,D.strokeStyle="#1b1b1b",D.beginPath(),D.arc(80,80,74,0,7),D.stroke()):D.drawImage(I,0,0,160,160),y.image=E,y.needsUpdate=!0,C.visible=!0,this._req()},I.src=R||`data:image/svg+xml;charset=utf-8,${encodeURIComponent(wu(d.look,S).replace("<svg ",'<svg width="160" height="160" '))}`,n.add(C);let O=document.createElement("div");O.className="rl who",O.textContent=_,this._labels.appendChild(O),this._peopleTags.push({el:O,pos:new k(w[0],w[1]-.72,w[2])})})}_weather(){let t=Tp(this._hass,this._config),e=!!(t&&t.night&&this._hass&&(this._floors||[]).some(n=>(n.floor.devices||[]).some(s=>s.kind==="light"&&s.entity&&(this._hass.states[s.entity]||{}).state==="on")));return{w:t,lit:e}}_applyWeather(t){if(!this._wx||!this._root)return;let e=this._plot,n=Math.max(e.x1-e.x0,e.front-e.back);this._wxKey=Mu(t),this._wx.apply(t,{theme:this.theme,box:{cx:(e.x0+e.x1)/2,cz:(e.back+e.front)/2,far:n},whole:this._mode==="whole",low:this._low(),clouds:this._cloudMats,sunBall:this._sunBall,sunMat:this._sunMat,dist:this._camera.position.distanceTo(this._controls.target)||this._dist}),this.shadowRoot.querySelector("ha-card").style.background=`#${this._scene.background.getHexString()}`;let s=this.shadowRoot.querySelector(".wx"),r=t?[t.text,t.temp].filter(Boolean).join(" "):"";s.textContent=r,s.style.display=r?"":"none",this._last=0}_weatherCheck(){if(!this._renderer||!this._root)return!1;let t=this._weather();if(Tu(t.w,t.lit)!==this._tintKey)return this._build(!1),!0;let e=t.w?[t.w.text,t.w.temp].filter(Boolean).join(" "):"";if(Mu(t.w)!==this._wxKey)this._applyWeather(t.w),this._req();else if(e!==this.shadowRoot.querySelector(".wx").textContent){let n=this.shadowRoot.querySelector(".wx");n.textContent=e,n.style.display=e?"":"none"}return!1}_view(){let t=this._mode,e=this._wrap.clientWidth,n=this._wrap.clientHeight;if(!e||!n){this._needView=!0;return}this._needView=!1;let s=this._house,r=(s.x0+s.x1)/2,a=(s.y0+s.y1)/2,c=Math.max(s.x1-s.x0,s.y1-s.y0,6),h=e/n,d=Math.max(1,.95/h),f=t==="whole",_=this._floors.length*(this._H+xr),m=f?[r,_*.4,a+c*.1]:[r,this._floors[t].baseY+.4,a+c*.04],g=new k(...f?[.46,.36,.81]:[.22,.8,.56]).normalize().multiplyScalar((f?c*3.3+_*.8:c*2.45)*d);this._dist=g.length(),this._controls.target.set(...m),this._camera.position.set(m[0]+g.x,m[1]+g.y,m[2]+g.z),this._controls.update()}_outside(t){let e=this.theme,n=this._plot,s=this._layout.outside||{},r=this._batch(),a=new oi,c=(n.x0+n.x1)/2,h=n.x1-n.x0,d=this._house,f=this._floors[0];if(r.box(c,(n.back+n.front)/2,h+.4,n.front-n.back+.4,-1.4,-.3,e.earth),r.box(c,(n.back+n.front)/2,h,n.front-n.back,-.3,-.08,e.lawn),r.rect(n.x0+.05,n.back+.05,n.x1-.05,n.front-.05,-.075,fs("stripes",e.lawn,e.lawn2),!1),s.road!==!1){r.box(c,n.front+.9,h+.4,1.4,-1.4,-.14,e.kerb),r.box(c,n.front+3.9,h+.4,4.6,-1.4,-.22,e.road);for(let F=n.x0+1;F<n.x1-1;F+=3)r.rect(F,n.front+3.8,F+1.5,n.front+3.98,-.215,e.white,!1)}let _=f.walls.openings.find(F=>F.kind==="frontdoor"),m=f.walls.openings.find(F=>F.kind==="garage"&&F.n[1]===1),g=s.drive||s.drives,b=s.path||s.paths,w=F=>!F||!F.length?[]:Array.isArray(F[0])?F:[F];g==null&&m&&(g=[[m.b[0]-.4,m.b[3],m.b[2]+.4,n.front]]),b==null&&_&&_.n[1]===1&&(b=[[_.b[0]-.1,_.b[3],_.b[2]+.1,n.front]]),g=w(g),b=w(b);for(let F of b)r.box((F[0]+F[2])/2,(F[1]+F[3])/2,F[2]-F[0],F[3]-F[1],-.08,-.05,e.path);for(let F of g)r.box((F[0]+F[2])/2,(F[1]+F[3])/2,F[2]-F[0],F[3]-F[1],-.08,-.045,e.drive),r.rect(F[0]+.03,F[1]+.03,F[2]-.03,F[3]-.03,-.04,fs("paving",e.drive,e.drive2),!1);for(let F of w(s.patio||s.patios))r.box((F[0]+F[2])/2,(F[1]+F[3])/2,F[2]-F[0],F[3]-F[1],-.08,-.04,e.patio),r.rect(F[0]+.03,F[1]+.03,F[2]-.03,F[3]-.03,-.035,fs("tile",e.patio,e.patio2),!1);let x=(F,V)=>[...g,...b].some(H=>F>H[0]-.3&&F<H[2]+.3&&V>H[1]-.3&&V<H[3]+.3),y=Math.min(d.y1,Math.max(d.y0+2,(d.y0+d.y1)/2)),A=s.fence||["w","n","e"],C=s.hedge||[],S=F=>F==="n"?[n.x0,n.back+.06,n.x1,n.back+.06]:F==="w"?[n.x0+.06,n.back,n.x0+.06,y]:F==="e"?[n.x1-.06,n.back,n.x1-.06,y]:[n.x0,n.front-.06,n.x1,n.front-.06];for(let F of A){if(C.includes(F))continue;let[V,H,B,X]=S(F),K=Math.hypot(B-V,X-H),J=H===X,at=F==="s",tt=at?.9:1.6,nt=new Ln(this._shape({o:[[0,-.08],[K,-.08],[K,tt],[0,tt]],h:[]})),st=new _e().makeBasis(J?new k(1,0,0):new k(0,0,1),new k(0,1,0),J?new k(0,0,1):new k(-1,0,0)).setPosition(V,0,H);nt.applyMatrix4(st),r.add(nt,fs("planks",e.fence,e.fencePost),!0);for(let Tt=0;Tt<=K+.01;Tt+=K/Math.max(1,Math.round(K/1.9)))r.box(J?V+Tt:V,J?H:H+Tt,.16,.16,-.08,tt+.14,e.fencePost)}r.build(a);let I=(F,V,H,B,X,K=1,J=.07)=>{let at=this._outlined(new gi(B,18,12),this._toon(X),J);at.position.set(F,V,H),at.scale.y=K,a.add(at)};for(let F of C){let[V,H,B,X]=S(F),K=Math.hypot(B-V,X-H),J=Math.max(2,Math.round(K/1.15)),at=F==="w"?.7:F==="e"?-.7:0,tt=F==="n"?.7:F==="s"?-.7:0;for(let nt=0;nt<=J;nt++){let st=V+(B-V)*nt/J+at,Tt=H+(X-H)*nt/J+tt;st>d.x0-1.3&&st<d.x1+1.3&&Tt>d.y0-1.3&&Tt<d.y1+1.3||I(st,.75+nt%2*.1,Tt,.95,e.leaf[nt%2?0:2],.95)}}let R=F=>{let V=F.size||1,H=F.colour||(F.blossom?e.blossom:e.leaf[0]),B=this._outlined(new fn(.16*V,.24*V,1.7*V,10),this._toon(e.trunk));B.position.set(F.x,.85*V-.08,F.y),a.add(B);for(let[X,K,J,at]of[[0,2.35,0,1.2],[-.85,1.85,.2,.85],[.9,1.9,-.1,.8],[.1,1.8,.85,.75],[-.2,1.9,-.8,.7]])I(F.x+X*V,K*V,F.y+J*V,at*V,H)};(s.trees||[{x:n.x0+2.2,y:n.back+2.6,size:1.2},{x:n.x1-2.6,y:n.back+4.2,size:.95,colour:e.leaf[1]},{x:n.x1-1.7,y:n.front-2.2,size:.8,blossom:!0}]).forEach(R);for(let F of f.walls.openings){if(F.kind!=="window"||!F.ext||s.bushes===!1)continue;let V=(F.b[0]+F.b[2])/2+F.n[0]*.75,H=(F.b[1]+F.b[3])/2+F.n[1]*.75;if(x(V,H))continue;let B=F.n[0]===0?1:0,X=F.n[0]===0?0:1;I(V-B*.4,.3,H-X*.4,.5,e.leaf[1],.85,.05),I(V+B*.4,.26,H+X*.4,.44,e.leaf[0],.85,.05)}if(s.flowers!==!1){let F=this._batch();for(let V=n.x0+1,H=0;V<n.x1-1;V+=.55,H++){let B=new gi(.13,8,6);B.translate(V,.12+H%3*.05,n.back+.6+H%2*.3),F.add(B,e.flowers[H%e.flowers.length],!1)}F.build(a)}if(s.mailbox!==!1&&_&&b.length){let F=b[0],V=F[2]+.5,H=n.front-.6,B=this._batch();B.box(V,H,.1,.1,-.08,.95,e.fencePost),B.box(V,H,.32,.5,.95,1.25,e.bad),B.build(a)}let E=()=>new ke({color:e.cloud}),D=Math.max(h,n.front-n.back);for(let[F,V,H,B]of[[-.9,10,-.5,1.5],[1.3,12,-.2,1.9],[.4,14,-1.3,2.3],[-1.1,9,.6,1.2],[1.6,15,-1.2,2]])for(let[X,K,J,at]of[[0,0,0,1],[1.1,-.15,.1,.75],[-1.1,-.2,0,.7],[.3,.45,-.1,.7]]){let tt=this._outlined(new gi(at*B,16,10),E(),.09);this._cloudMats.push(tt.userData.mesh.material),tt.position.set(c+F*D*.55+X*B,V+K*B,(n.back+n.front)/2+H*D*.5+J*B),tt.scale.y=.7,a.add(tt)}let U=this._outlined(new gi(2.4,24,16),new ke({color:e.sun}),.12);U.position.set(c+D*.9,19,n.back-D*.4),a.add(U),this._sunBall=U,this._sunMat=U.userData.mesh.material,t.add(a)}_floor(t,e,n,s,r){let a=this.theme,{floor:c,walls:h,styles:d,off:f,baseY:_}=e,m=this._batch(),g=new oi;g.position.set(f[0],_,f[1]);for(let A of h.slab)m.prism(A,n===0?-.22:-xr,0,n===0?a.slab:this._exteriorKey());for(let A of c.rooms){let C=d[A.id];m.flat({o:A.points,h:[]},.02,C.pattern==="plain"||!du[C.pattern]?C.floor:fs(C.pattern,C.floor,C.floor2),!1)}this._walls(m,e,s);let b=new Set((c.devices||[]).filter(A=>A.kind==="cover").map(A=>this._openingFor(e,A)).filter(Boolean));for(let A of h.openings)this._opening(m,e,A,s,b.has(A));for(let A of c.rooms){if(d[A.id].type!=="stairs"||n!==0||this._floors.length<2)continue;let C=ei(A.points),S=C.y1-C.y0>=C.x1-C.x0,I=12,R=A.up||(S?"n":"e"),O=(S?C.y1-C.y0:C.x1-C.x0)-.5,E=O/I,D=(S?C.x1-C.x0:C.y1-C.y0)-.2;for(let U=0;U<I;U++){let F=.1+E*(U+.5),V=Math.min(s+.6,(this._H+xr)/I*(U+1));S?m.box((C.x0+C.x1)/2,R==="n"?C.y1-F:C.y0+F,D,E,0,V,a.woodLight):m.box(R==="e"?C.x0+F:C.x1-F,(C.y0+C.y1)/2,E,D,0,V,a.woodLight)}}let w=s<2?s+.2:9,x=0;for(let A of c.furniture||[]){let C=I=>(I.rotateY(-Do(A.rot||0)),I.translate(A.x,0,A.y),I),S=A.type==="bed"||A.type==="single_bed";for(let[I,R,O,E,D,U,F,V]of rp(A,a,x)){let H=Math.min(U,w);if(H-D<.01)continue;let B,X=A.type!=="rug";V==="cyl"?(B=new fn(O/2,O/2,H-D,14),X=!1):V==="ball"?(B=new gi(O/2,12,8),X=!1):V==="wheel"?(B=new fn(O/2,O/2,E,14),B.rotateZ(Math.PI/2),X=!1):B=new Je(O,H-D,E),B.translate(I,(D+H)/2,R),m.add(C(B),F,X)}S&&x++}m.build(g),t.add(g);let y=this._mode==="whole";for(let A of c.devices||[]){if(A.x==null&&!(A.room&&A.wall&&A.at!=null)||A.room&&!c.rooms.some(S=>S.id===A.room))continue;let C=A.kind==="cover"&&this._openingFor(e,A);!r&&!(y&&A.kind==="camera")&&!C||this._device(g,e,A,s,r||y)}if(r)for(let A of c.rooms){if(!A.name)continue;let C=ei(A.points),S=document.createElement("div");S.className="rl",S.textContent=A.name,this._labels.appendChild(S);let I=A.label||[(C.x0+C.x1)/2,(C.y0+C.y1)/2];this._roomLabels.push({el:S,pos:new k(f[0]+I[0],_+.1,f[1]+I[1]),small:C.x1-C.x0<1.7||C.y1-C.y0<1.7})}}_exteriorKey(){let t=this.theme;return t.exteriorPattern?fs(t.exteriorPattern,t.exterior,t.exterior2):t.exterior}_cutRange(t,e){let n=t.kind==="window"?ds:0,s=t.kind==="window"||t.kind==="bifold"||t.kind==="garage"?vi:_r;return n>=e-.02?null:[n,s>=e-.05?e:s]}_walls(t,e,n){let s=this.theme,r=e.walls,a=this._exteriorKey(),c=r.openings.filter(m=>m.kind!=="opening").map(m=>({o:m,r:this._cutRange(m,n)})).filter(m=>m.r),h=new k,d=new k(0,1,0),f=new k,_=new _e;for(let m of r.solid)for(let g of[m.o,...m.h])for(let b=0;b<g.length;b++){let w=g[b],x=g[(b+1)%g.length],y=x[0]-w[0],A=x[1]-w[1],C=Math.hypot(y,A);if(C<.004)continue;let S=A/C,I=-y/C,R=(w[0]+x[0])/2+S*.07,O=(w[1]+x[1])/2+I*.07,E=r.roomAt(R,O),D=E?e.styles[E.id].wall:r.isInside(R,O)?s.inner:a,U=Math.abs(A)<1e-6,F=Math.abs(y)<1e-6,V=[];for(let{o:B,r:X}of c){let K=B.n[0]===0;if(K&&!U||!K&&!F)continue;let[J,at,tt,nt]=B.b;if(K){if(w[1]<at-.012||w[1]>nt+.012)continue;let st=Math.max(J,Math.min(w[0],x[0])),Tt=Math.min(tt,Math.max(w[0],x[0]));if(Tt-st<.02)continue;let Et=Math.abs(st-x[0]),Zt=Math.abs(Tt-x[0]);V.push({u0:Math.min(Et,Zt),u1:Math.max(Et,Zt),v0:X[0],v1:X[1]})}else{if(w[0]<J-.012||w[0]>tt+.012)continue;let st=Math.max(at,Math.min(w[1],x[1])),Tt=Math.min(nt,Math.max(w[1],x[1]));if(Tt-st<.02)continue;let Et=Math.abs(st-x[1]),Zt=Math.abs(Tt-x[1]);V.push({u0:Math.min(Et,Zt),u1:Math.max(Et,Zt),v0:X[0],v1:X[1]})}}h.set(-y/C,0,-A/C),f.crossVectors(h,d),_.makeBasis(h,d,f).setPosition(x[0],0,x[1]);let H=V.length?ip(C,n,V):[{o:[[0,0],[C,0],[C,n],[0,n]],h:[]}];for(let B of H)t.shape(B,_,D,!0)}for(let{o:m,r:g}of c){let[b,w,x,y]=m.b,[A,C]=g,S=s.wallCut;m.n[0]===0?(t.quad([b,A,w],[b,A,y],[b,C,y],[b,C,w],S),t.quad([x,A,w],[x,A,y],[x,C,y],[x,C,w],S)):(t.quad([b,A,w],[x,A,w],[x,C,w],[b,C,w],S),t.quad([b,A,y],[x,A,y],[x,C,y],[b,C,y],S)),A>0&&t.quad([b,A,w],[x,A,w],[x,A,y],[b,A,y],S),C<n-.001&&t.quad([b,C,w],[x,C,w],[x,C,y],[b,C,y],S)}for(let m of r.cap(c.filter(g=>g.r[1]>=n-.001).map(g=>g.o)))t.flat(m,n,s.wallCut,!0)}_obox(t,e,n,s,r,a=1,c=0,h=1,d=!0,f=0){if(s-n<.01)return;let[_,m,g,b]=e.b;if(e.n[0]===0){let x=g-_,y=(b-m)*a;t.box(_+x*(c+h)/2,(m+b)/2+e.n[1]*f,x*(h-c),y,n,s,r,0,d)}else{let x=b-m,y=(g-_)*a;t.box((_+g)/2+e.n[0]*f,m+x*(c+h)/2,y,x*(h-c),n,s,r,0,d)}}_opening(t,e,n,s,r){let a=this.theme,c=n.n[0]===0,h=c?n.b[2]-n.b[0]:n.b[3]-n.b[1],d=c?n.b[3]-n.b[1]:n.b[2]-n.b[0],f=.07/h,_=(g,b,w)=>{this._obox(t,n,g,b,a.trim,.45,0,f),this._obox(t,n,g,b,a.trim,.45,1-f,1),this._obox(t,n,b-.07,b,a.trim,.45,f,1-f);for(let x=1;x<w;x++)this._obox(t,n,g,b-.07,a.trim,.45,x/w-f/2,x/w+f/2);this._obox(t,n,g,b-.07,"glass",.12,f,1-f,!1)},m=s>=vi;switch(n.kind){case"window":{if(this._obox(t,n,ds-.07,ds+.03,a.trim,1+.2/d,-.04/h,1+.04/h,!0,.06),_(ds+.03,vi,h>1.25?3:h>.8?2:1),m&&n.ext){let g=Math.min(.32,h*.2)/h,b=-(d/2+.05);this._obox(t,n,ds-.15,vi+.08,a.curtain,.06/d,0,g,!0,b),this._obox(t,n,ds-.15,vi+.08,a.curtain,.06/d,1-g,1,!0,b)}break}case"bifold":_(0,vi,Math.max(2,Math.round(h/.75)));break;case"frontdoor":case"extdoor":{let g=n.colour||(n.kind==="frontdoor"?a.door:a.doorInner);this._obox(t,n,0,_r-.06,g,.3,f,1-f),this._obox(t,n,0,_r,a.trim,.5,0,f),this._obox(t,n,0,_r,a.trim,.5,1-f,1),this._obox(t,n,_r-.06,_r,a.trim,.5,f,1-f),this._obox(t,n,.95,1.07,a.knob,.1/d,1-f-.14/h,1-f-.04/h,!0,d*.15+.06),n.kind==="frontdoor"&&(this._obox(t,n,1.35,1.75,"glass",.34,.3,.7,!1),this._obox(t,n,-.08,.02,a.path,.6/d,-.15/h,1+.15/h,!0,d/2+.3));break}case"garage":if(!r){this._obox(t,n,0,Math.min(vi,s),a.garage,.2);for(let g=.5;g<Math.min(vi,s)-.1;g+=.5)this._obox(t,n,g,g+.03,a.garage2,.24,.03,.97,!1)}break;case"door":{let g=Math.min(2,s),[b,w,x,y]=n.b,A=h-.06,C=Do(72),S=c?b+.03:(b+x)/2,I=c?(w+y)/2:w+.03,R=c?1:0,O=c?0:1,E=Math.cos(C)*R-Math.sin(C)*n.n[0],D=Math.cos(C)*O-Math.sin(C)*n.n[1],U=new Je(A,g,.05);U.rotateY(Math.atan2(-D,E)),U.translate(S+E*A/2,g/2,I+D*A/2),t.add(U,a.doorInner,!0);break}default:}}_roofs(t){let e=this._layout,n=this.theme,s=this._H,r=this._batch(),a=new oi,c=g=>g*(s+xr)-xr,h=e.roofs;if(!Array.isArray(h)){h=[];let g=this._floors[this._floors.length-1],b=ei(g.floor.rooms.flatMap(w=>w.points.map(([x,y])=>[x+g.off[0],y+g.off[1]])));h.push({type:"gable",rect:[b.x0,b.y0,b.x1,b.y1],level:this._floors.length,ridge:b.x1-b.x0>=b.y1-b.y0?"x":"y"});for(let w=0;w<this._floors.length-1;w++){let x=this._floors[w],y=this._floors[w+1];for(let A of np(x.walls.slab,y.walls.slab,[y.off[0]-x.off[0],y.off[1]-x.off[1]]))h.push({type:"flat",points:A.o.map(([C,S])=>[C+x.off[0],S+x.off[1]]),level:w+1})}}let d=n.roofPattern?fs(n.roofPattern,n.roof,n.roof2):n.roof,f=this._exteriorKey(),_=(g,b,w,x,y,A)=>{let C=new _e().makeBasis(w,x,new k().crossVectors(w,x)).setPosition(b).premultiply(g),S=new Ln(this._shape({o:[[0,0],[y,0],[y,A],[0,A]],h:[]}));S.translate(0,0,.012),S.applyMatrix4(C),r.add(S,d,!0);let I=new Je(y,A,.13);I.translate(y/2,A/2,-.065),I.applyMatrix4(C),r.add(I,n.trim,!0)},m=g=>new _e().makeRotationY(g);for(let g of h){let b=g.base!=null?g.base:c(g.level||this._floors.length);if(g.type==="flat"){let E=g.points||[[g.rect[0],g.rect[1]],[g.rect[2],g.rect[1]],[g.rect[2],g.rect[3]],[g.rect[0],g.rect[3]]],D=ei(E),U=F=>({o:E.map(([V,H])=>[V+Math.sign(V-(D.x0+D.x1)/2)*F,H+Math.sign(H-(D.y0+D.y1)/2)*F]),h:[]});r.prism(U(Xn+.14),b,b+.16,n.trim),r.prism(U(Xn+.02),b+.16,b+.22,n.roof);continue}let[w,x,y,A]=g.rect,C=w-Xn,S=y+Xn,I=x-Xn,R=A+Xn,O=g.overhang!=null?g.overhang:.45;if(g.type==="gable"){let E=(g.ridge||"y")==="y",D=E?new _e:m(Math.PI/2),[U,F,V,H]=E?[C,S,I,R]:[-R,-I,C,S],B=Do(g.pitch||30),X=(F-U)/2,K=X*Math.tan(B),J=(U+F)/2,at=O*.8,tt=new ss(new pn([new mt(U,0),new mt(F,0),new mt(J,K)]),{depth:H-V,bevelEnabled:!1});tt.translate(0,b,V),tt.applyMatrix4(D),r.add(tt,f);let nt=(X+O)/Math.cos(B)+.05,st=H-V+2*at,Tt=b-O*Math.tan(B);_(D,new k(J-X-O,Tt,V-at),new k(0,0,1),new k(Math.cos(B),Math.sin(B),0),st,nt),_(D,new k(J+X+O,Tt,H+at),new k(0,0,-1),new k(-Math.cos(B),Math.sin(B),0),st,nt)}else if(g.type==="lean"){let E=g.high||"n",D=g.rise!=null?g.rise:.6,U=m({n:0,s:Math.PI,w:Math.PI/2,e:-Math.PI/2}[E]||0),[F,V,H,B]={n:[C,S,I,R],s:[-S,-C,-R,-I],w:[-R,-I,C,S],e:[I,R,-S,-C]}[E]||[C,S,I,R],X=B-H,K=Math.atan2(D,X),J=g.side_overhang!=null?g.side_overhang:.2,at=new ss(new pn([new mt(0,0),new mt(X,0),new mt(X,D+.06)]),{depth:V-F,bevelEnabled:!1});at.applyMatrix4(new _e().makeBasis(new k(0,0,-1),new k(0,1,0),new k(1,0,0)).setPosition(F,b,B).premultiply(U)),r.add(at,f),_(U,new k(F-J,b+.08-O*Math.tan(K),B+O),new k(1,0,0),new k(0,Math.sin(K),-Math.cos(K)),V-F+2*J,(X+O)/Math.cos(K))}}for(let g of e.chimneys||[]){let b=g.w||.6,w=g.d||.6,x=g.top||c(this._floors.length)+3.2,y=g.from!=null?g.from:c(this._floors.length);r.box(g.x,g.y,b,w,y,x,n.chimney),r.box(g.x,g.y,b+.16,w+.16,x,x+.12,n.trim),r.box(g.x,g.y,b*.45,w*.45,x+.12,x+.42,n.chimney),g.smoke!==!1&&[[.15,.95,.28],[.5,1.6,.4],[.2,2.5,.55]].forEach(([A,C,S])=>{let I=this._outlined(new gi(S,14,10),new ke({color:n.cloud}),.05);I.position.set(g.x+A,x+C,g.y),a.add(I)})}r.build(a),t.add(a)}_openingFor(t,e){return!e.wall||e.at==null?null:t.walls.openings.find(n=>n.room===e.room&&n.wall===e.wall&&n.at<=e.at&&e.at<=n.at+n.width)||null}_device(t,e,n,s,r){let a=this.theme,c=e.floor,h=e.off,d=c.rooms.find(C=>C.id===n.room),f=d?ei(d.points):null,_=C=>new ke({color:C,transparent:!0}),m=C=>n.wall==="n"?[n.at,f.y0+C]:n.wall==="s"?[n.at,f.y1-C]:n.wall==="w"?[f.x0+C,n.at]:[f.x1-C,n.at],[g,b]=n.x!=null?[n.x,n.y]:m(.14),w=n.wall==="n"||n.wall==="s",x={d:n,anchor:new k,pick:null},y=(C,S,I,R)=>(C.position.set(S,I,R),t.add(C),C),A=1;switch(n.kind){case"light":{let C=Math.max(1.75,s+.5);y(new De(new fn(.015,.015,.45,6),_(a.ink)),g,C+.35,b);let S=y(this._outlined(new fn(.1,.27,.2,16,1,!0),new ke({color:a.white,side:_i}),.03),g,C+.14,b);S.userData.mesh.material.transparent=!0;let I=y(this._outlined(new gi(.15,16,12),_("#ffffff")),g,C,b),R=new De(new Xr(1.3,28),new ke({color:a.bulbOn,transparent:!0,opacity:.42,depthWrite:!1}));R.rotation.x=-Math.PI/2,R.renderOrder=1,y(R,g,.07,b),x.set=O=>{I.userData.mesh.material.color.set(O.planned?a.planned:O.active?a.bulbOn:"#ffffff"),S.userData.mesh.material.color.set(O.planned?a.planned:a.white),R.visible=!!O.active},A=C;break}case"cover":{let C=this._openingFor(e,n);if(!C){A=this._marker(x,y,g,1.6,b,.3,.3,.12);break}let[S,I,R,O]=C.b,E=C.n[0]===0,D=C.kind==="garage",U=E?R-S:O-I,F=E?O-I:R-S,V=D?0:F/2+.09,H=(S+R)/2+C.n[0]*V,B=(I+O)/2+C.n[1]*V,X=D||C.kind==="bifold"?0:ds,K=vi-X,J=(Et,Zt,re)=>E?new Je(Et,Zt,re):new Je(re,Zt,Et),at=document.createElement("canvas");at.width=8,at.height=32;let tt=at.getContext("2d");tt.fillStyle=D?a.garage:a.shutter,tt.fillRect(0,0,8,32),tt.fillStyle=D?a.garage2:a.shutter2,tt.fillRect(0,0,8,4);let nt=new In(at);nt.wrapT=ts,nt.colorSpace=ze;let st=new De(J(U-.04,1,.05),new ke({map:nt,transparent:!0}));t.add(st),D||y(this._outlined(J(U+.14,.24,.22),this._toon(a.shutterBox)),H,vi+.12,B),x.level=null,x.apply=Et=>{let Zt=Math.max(0,Math.min(1,1-Et)),re=Math.max(.02,K*Zt);st.scale.y=re,st.position.set(H,vi-re/2,B),nt.repeat.set(1,Math.max(1,Math.round(re/(D?.4:.11)))),st.visible=Zt>.015},x.set=Et=>{let Zt=Et.planned?D?0:.55:Et.level;st.material.opacity=Et.planned&&!D?.45:1,x.level==null?(x.level=Zt,x.apply(Zt)):Math.abs(Zt-x.level)>.001&&this._tween(x,Zt)};let Tt=new De(J(U,D?vi:K+.3,.5),new ke({transparent:!0,opacity:0,depthWrite:!1}));y(Tt,H,D?vi/2:X+(K+.3)/2,B),x.pick=Tt,x.anchor.set(H+C.n[0]*.2,vi+.3,B+C.n[1]*.2),x.facing=new k(C.n[0],0,C.n[1]),A=null;break}case"climate":{if(n.wall){let C=y(this._outlined(w?new Je(.95,.5,.1):new Je(.1,.5,.95),this._toon("#ffffff")),g,.42,b);x.set=S=>C.userData.mesh.material.color.set(S.planned?a.planned:S.active?a.heat:"#ffffff"),A=.75}else A=this._marker(x,y,g,1.35,b,.2,.26,.08,a.heat);break}case"tv":{let C=y(this._outlined(new Je(1.3,.75,.07),_(a.dark)),g,.95,b);C.rotation.y=-Do(n.rot||0),x.set=S=>C.userData.mesh.material.color.set(S.active?a.screen:S.planned?"#5a5f6a":a.dark),A=1.4;break}case"speaker":A=this._marker(x,y,g,.72,b,.24,.44,.24,a.play);break;case"lock":A=this._marker(x,y,g,1.05,b,.2,.26,.2,a.ok,a.bad);break;case"motion":A=this._marker(x,y,g,Math.max(1.5,s+.25),b,.26,.14,.26,a.heat);break;case"contact":A=this._marker(x,y,g,1.6,b,.16,.3,.16,a.bad,a.ok);break;case"camera":A=this._marker(x,y,g,2.15,b,.3,.2,.42,a.screen);break;default:A=this._marker(x,y,g,1.2,b,.22,.22,.22,a.ok)}if(A!=null&&x.anchor.set(g,A+.25,b),x.anchor.x+=h[0],x.anchor.z+=h[1],x.anchor.y+=t.position.y,!x.pick){let C=new De(new gi(.42,8,6),new ke({transparent:!0,opacity:0,depthWrite:!1}));C.position.set(x.anchor.x-h[0],x.anchor.y-t.position.y-.25,x.anchor.z-h[1]),t.add(C),x.pick=C}if(x.pick.userData.dev=x,this._pickables.push(x.pick),r){let C=document.createElement("div");C.className="chip",C.style.display="none",C.addEventListener("click",S=>{S.stopPropagation(),this._tap(x)}),this._labels.appendChild(C),x.chip=C}this._devs.push(x)}_marker(t,e,n,s,r,a,c,h,d,f="#ffffff"){let _=this.theme,m=e(this._outlined(new Je(a,c,h),new ke({color:"#ffffff",transparent:!0})),n,s,r);return t.set=g=>{m.userData.mesh.material.color.set(g.planned?_.planned:g.active?d||_.ok:f),m.userData.mesh.material.opacity=g.planned?.8:1},s+c/2}_tween(t,e){t.from=t.level,t.to=e,t.t0=performance.now(),this._tweens.includes(t)||this._tweens.push(t)}_signature(){return!this._hass||!this._devs?"":this._devs.map(t=>{let e=t.d.entity&&this._hass.states[t.d.entity];return e?`${e.state}|${e.attributes.current_position??""}|${e.attributes.current_temperature??""}|${e.attributes.hvac_action??""}`:"-"}).join(";")}_syncDevices(){if(!this._devs)return;let t=0,e=0;for(let n of this._devs){let s=Op(n.d,this._hass);n.st=s,n.set&&n.set(s),s.planned?e++:t++,n.chip&&(n.chip.textContent=s.text,n.chip.classList.toggle("active",!!s.active),n.chip.dataset.show=s.text?"1":"")}this.shadowRoot.querySelector(".counts").textContent=this._devs.length?`${t} live, ${e} planned (grey)`:""}_ray(t,e){let n=this._renderer.domElement.getBoundingClientRect(),s=new mt((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),r=new lo;return r.setFromCamera(s,this._camera),r}_deviceAt(t,e){let n=this._ray(t,e).intersectObjects(this._pickables,!1)[0];return n?n.object.userData.dev:null}_roomAt(t,e){let n=typeof this._mode=="number"?this._floors[this._mode]:null;if(!n)return null;let s=this._ray(t,e).ray.intersectPlane(new ci(new k(0,1,0),-n.baseY),new k),r=s?n.walls.roomAt(s.x-n.off[0],s.z-n.off[1]):null;return r?{F:n,room:r}:null}_pick(t,e){let n=this._deviceAt(t,e);if(n){this._tap(n);return}this._toast.style.display="none";let s=this._roomAt(t,e);s&&this._room.key!==`${s.F.floor.id}|${s.room.id}`?this._room.open(s.F,s.room):this._room.close()}_tap(t){let e=t.d,n=t.st||Op(e,this._hass);if(e.id&&!window.dispatchEvent(new CustomEvent("toon-house-setup",{cancelable:!0,detail:{id:e.id}}))){this._toast.style.display="none";return}if(n.planned){let r=e.nav||this._config.planned_path||"";this._say(`${e.name||e.kind}: planned, not fitted yet.${r?" Tap here for more.":""}`,r);return}let s=e.entity.split(".")[0];if((e.kind==="light"||e.kind==="switch")&&["light","switch","input_boolean","fan"].includes(s)){this._hass.callService(s,"toggle",{entity_id:e.entity});return}this._toast.style.display="none",this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e.entity}}))}_say(t,e,n=6e3){this._toast.textContent=t,this._toast.dataset.nav=e||"",this._toast.style.display="block",clearTimeout(this._toastT),this._toastT=setTimeout(()=>{this._toast.style.display="none"},n)}_navigate(t){history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}_req(){this._raf||!this._renderer||(this._raf=requestAnimationFrame(()=>{this._raf=0,this._frame()}))}_frame(){if(!this._renderer||!this._root)return;let t=performance.now();if(this._wx&&this._wx.moving&&this._seen&&!document.hidden){this._req();let h=t-(this._last||0);if(this._last&&h<(this._low()?46:30)&&!this._tweens.length)return;this._gfx==="auto"&&!this._autoLow&&this._last&&h<1e3&&(this._slow=h>70?this._slow+1:Math.max(0,this._slow-1),this._slow>24&&(this._autoLow=!0,this._renderer.setPixelRatio(1),this._resize(),this._applyWeather(this._weather().w))),this._wx.step(this._last?Math.min(h,100)/1e3:0,t),this._last=t}this._tweens.length&&(this._tweens=this._tweens.filter(h=>{let d=Math.min(1,(t-h.t0)/900),f=d*d*(3-2*d);return h.level=h.from+(h.to-h.from)*f,h.apply(h.level),d<1}),this._req()),this._renderer.render(this._scene,this._camera);let e=this._wrap.clientWidth,n=this._wrap.clientHeight,s=new k,r=(h,d,f)=>{s.copy(d).project(this._camera);let _=f&&s.z<1&&Math.abs(s.x)<1.05&&Math.abs(s.y)<1.05;h.style.display=_?"block":"none",_&&(h.style.left=`${(s.x+1)/2*e}px`,h.style.top=`${(1-s.y)/2*n}px`)},a=this._camera.position.distanceTo(this._controls.target)>42;for(let h of this._roomLabels)r(h.el,h.pos,!(a&&h.small));for(let h of this._peopleTags||[])r(h.el,h.pos,!0);let c=this._mode==="whole";for(let h of this._devs){if(!h.chip)continue;let d=c&&h.facing&&s.copy(this._camera.position).sub(h.anchor).dot(h.facing)<=0;r(h.chip,h.anchor,!!h.chip.dataset.show&&!d)}}debug(){let t=this._renderer.domElement.getBoundingClientRect(),e=new k,n={};for(let r of this._devs)r.pick.getWorldPosition(e).project(this._camera),n[r.d.id]={x:Math.round(t.left+(e.x+1)/2*t.width),y:Math.round(t.top+(1-e.y)/2*t.height),planned:!!(r.st&&r.st.planned),text:r.st&&r.st.text,level:r.level};let s=this._renderer.info;return{mode:this._mode,calls:s.render.calls,triangles:s.render.triangles,geometries:s.memory.geometries,warnings:this._warnings,devices:n}}};customElements.get("toon-house-card")||customElements.define("toon-house-card",Ou);window.customCards=window.customCards||[];window.customCards.some(i=>i.type==="toon-house-card")||window.customCards.push({type:"toon-house-card",name:"Toon House Card",description:"A cartoon 3D dollhouse of your home with live devices",preview:!1,documentationURL:"https://github.com/digitaladaption/toon-house-card"});console.info(`%c TOON-HOUSE-CARD %c ${db} `,"background:#FFD83A;color:#1b1b1b;font-weight:900","background:#1b1b1b;color:#fff");
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
