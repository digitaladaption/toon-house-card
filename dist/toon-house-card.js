var Of=Object.create;var fh=Object.defineProperty;var Uf=Object.getOwnPropertyDescriptor;var Bf=Object.getOwnPropertyNames;var zf=Object.getPrototypeOf,kf=Object.prototype.hasOwnProperty;var Vf=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var Gf=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Bf(t))!kf.call(n,s)&&s!==e&&fh(n,s,{get:()=>t[s],enumerable:!(i=Uf(t,s))||i.enumerable});return n};var Hf=(n,t,e)=>(e=n!=null?Of(zf(n)):{},Gf(t||!n||!n.__esModule?fh(e,"default",{value:n,enumerable:!0}):e,n));var yf=Vf((KS,ml)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof ml<"u"&&ml.exports?(ml.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var s={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?s.chrome=1:s.chrome=0,i.indexOf("chromium")!=-1?s.chromium=1:s.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?s.safari=1:s.safari=0,i.indexOf("firefox")!=-1?s.firefox=1:s.firefox=0,i.indexOf("firefox/17")!=-1?s.firefox17=1:s.firefox17=0,i.indexOf("firefox/15")!=-1?s.firefox15=1:s.firefox15=0,i.indexOf("firefox/3")!=-1?s.firefox3=1:s.firefox3=0,i.indexOf("opera")!=-1?s.opera=1:s.opera=0,i.indexOf("msie 10")!=-1?s.msie10=1:s.msie10=0,i.indexOf("msie 9")!=-1?s.msie9=1:s.msie9=0,i.indexOf("msie 8")!=-1?s.msie8=1:s.msie8=0,i.indexOf("msie 7")!=-1?s.msie7=1:s.msie7=0,i.indexOf("msie ")!=-1?s.msie=1:s.msie=0,n.biginteger_used=null;var o,l=0xdeadbeefcafe,h=(l&16777215)==15715070;function u(r,a,c){n.biginteger_used=1,r!=null&&(typeof r=="number"&&typeof a>"u"?this.fromInt(r):typeof r=="number"?this.fromNumber(r,a,c):a==null&&typeof r!="string"?this.fromString(r,256):this.fromString(r,a))}function f(){return new u(null,void 0,void 0)}function m(r,a,c,d,_,M){for(;--M>=0;){var I=a*this[r++]+c[d]+_;_=Math.floor(I/67108864),c[d++]=I&67108863}return _}function x(r,a,c,d,_,M){for(var I=a&32767,k=a>>15;--M>=0;){var V=this[r]&32767,Z=this[r++]>>15,ht=k*V+Z*I;V=I*V+((ht&32767)<<15)+c[d]+(_&1073741823),_=(V>>>30)+(ht>>>15)+k*Z+(_>>>30),c[d++]=V&1073741823}return _}function p(r,a,c,d,_,M){for(var I=a&16383,k=a>>14;--M>=0;){var V=this[r]&16383,Z=this[r++]>>14,ht=k*V+Z*I;V=I*V+((ht&16383)<<14)+c[d]+_,_=(V>>28)+(ht>>14)+k*Z,c[d++]=V&268435455}return _}h&&e=="Microsoft Internet Explorer"?(u.prototype.am=x,o=30):h&&e!="Netscape"?(u.prototype.am=m,o=26):(u.prototype.am=p,o=28),u.prototype.DB=o,u.prototype.DM=(1<<o)-1,u.prototype.DV=1<<o;var g=52;u.prototype.FV=Math.pow(2,g),u.prototype.F1=g-o,u.prototype.F2=2*o-g;var S="0123456789abcdefghijklmnopqrstuvwxyz",w=new Array,y,v;for(y=48,v=0;v<=9;++v)w[y++]=v;for(y=97,v=10;v<36;++v)w[y++]=v;for(y=65,v=10;v<36;++v)w[y++]=v;function P(r){return S.charAt(r)}function A(r,a){var c=w[r.charCodeAt(a)];return c??-1}function E(r){for(var a=this.t-1;a>=0;--a)r[a]=this[a];r.t=this.t,r.s=this.s}function R(r){this.t=1,this.s=r<0?-1:0,r>0?this[0]=r:r<-1?this[0]=r+this.DV:this.t=0}function L(r){var a=f();return a.fromInt(r),a}function O(r,a){var c;if(a==16)c=4;else if(a==8)c=3;else if(a==256)c=8;else if(a==2)c=1;else if(a==32)c=5;else if(a==4)c=2;else{this.fromRadix(r,a);return}this.t=0,this.s=0;for(var d=r.length,_=!1,M=0;--d>=0;){var I=c==8?r[d]&255:A(r,d);if(I<0){r.charAt(d)=="-"&&(_=!0);continue}_=!1,M==0?this[this.t++]=I:M+c>this.DB?(this[this.t-1]|=(I&(1<<this.DB-M)-1)<<M,this[this.t++]=I>>this.DB-M):this[this.t-1]|=I<<M,M+=c,M>=this.DB&&(M-=this.DB)}c==8&&r[0]&128&&(this.s=-1,M>0&&(this[this.t-1]|=(1<<this.DB-M)-1<<M)),this.clamp(),_&&u.ZERO.subTo(this,this)}function T(){for(var r=this.s&this.DM;this.t>0&&this[this.t-1]==r;)--this.t}function D(r){if(this.s<0)return"-"+this.negate().toString(r);var a;if(r==16)a=4;else if(r==8)a=3;else if(r==2)a=1;else if(r==32)a=5;else if(r==4)a=2;else return this.toRadix(r);var c=(1<<a)-1,d,_=!1,M="",I=this.t,k=this.DB-I*this.DB%a;if(I-- >0)for(k<this.DB&&(d=this[I]>>k)>0&&(_=!0,M=P(d));I>=0;)k<a?(d=(this[I]&(1<<k)-1)<<a-k,d|=this[--I]>>(k+=this.DB-a)):(d=this[I]>>(k-=a)&c,k<=0&&(k+=this.DB,--I)),d>0&&(_=!0),_&&(M+=P(d));return _?M:"0"}function B(){var r=f();return u.ZERO.subTo(this,r),r}function N(){return this.s<0?this.negate():this}function G(r){var a=this.s-r.s;if(a!=0)return a;var c=this.t;if(a=c-r.t,a!=0)return this.s<0?-a:a;for(;--c>=0;)if((a=this[c]-r[c])!=0)return a;return 0}function H(r){var a=1,c;return(c=r>>>16)!=0&&(r=c,a+=16),(c=r>>8)!=0&&(r=c,a+=8),(c=r>>4)!=0&&(r=c,a+=4),(c=r>>2)!=0&&(r=c,a+=2),(c=r>>1)!=0&&(r=c,a+=1),a}function U(){return this.t<=0?0:this.DB*(this.t-1)+H(this[this.t-1]^this.s&this.DM)}function W(r,a){var c;for(c=this.t-1;c>=0;--c)a[c+r]=this[c];for(c=r-1;c>=0;--c)a[c]=0;a.t=this.t+r,a.s=this.s}function K(r,a){for(var c=r;c<this.t;++c)a[c-r]=this[c];a.t=Math.max(this.t-r,0),a.s=this.s}function $(r,a){var c=r%this.DB,d=this.DB-c,_=(1<<d)-1,M=Math.floor(r/this.DB),I=this.s<<c&this.DM,k;for(k=this.t-1;k>=0;--k)a[k+M+1]=this[k]>>d|I,I=(this[k]&_)<<c;for(k=M-1;k>=0;--k)a[k]=0;a[M]=I,a.t=this.t+M+1,a.s=this.s,a.clamp()}function at(r,a){a.s=this.s;var c=Math.floor(r/this.DB);if(c>=this.t){a.t=0;return}var d=r%this.DB,_=this.DB-d,M=(1<<d)-1;a[0]=this[c]>>d;for(var I=c+1;I<this.t;++I)a[I-c-1]|=(this[I]&M)<<_,a[I-c]=this[I]>>d;d>0&&(a[this.t-c-1]|=(this.s&M)<<_),a.t=this.t-c,a.clamp()}function tt(r,a){for(var c=0,d=0,_=Math.min(r.t,this.t);c<_;)d+=this[c]-r[c],a[c++]=d&this.DM,d>>=this.DB;if(r.t<this.t){for(d-=r.s;c<this.t;)d+=this[c],a[c++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;c<r.t;)d-=r[c],a[c++]=d&this.DM,d>>=this.DB;d-=r.s}a.s=d<0?-1:0,d<-1?a[c++]=this.DV+d:d>0&&(a[c++]=d),a.t=c,a.clamp()}function it(r,a){var c=this.abs(),d=r.abs(),_=c.t;for(a.t=_+d.t;--_>=0;)a[_]=0;for(_=0;_<d.t;++_)a[_+c.t]=c.am(0,d[_],a,_,0,c.t);a.s=0,a.clamp(),this.s!=r.s&&u.ZERO.subTo(a,a)}function st(r){for(var a=this.abs(),c=r.t=2*a.t;--c>=0;)r[c]=0;for(c=0;c<a.t-1;++c){var d=a.am(c,a[c],r,2*c,0,1);(r[c+a.t]+=a.am(c+1,2*a[c],r,2*c+1,d,a.t-c-1))>=a.DV&&(r[c+a.t]-=a.DV,r[c+a.t+1]=1)}r.t>0&&(r[r.t-1]+=a.am(c,a[c],r,2*c,0,1)),r.s=0,r.clamp()}function Tt(r,a,c){var d=r.abs();if(!(d.t<=0)){var _=this.abs();if(_.t<d.t){a?.fromInt(0),c!=null&&this.copyTo(c);return}c==null&&(c=f());var M=f(),I=this.s,k=r.s,V=this.DB-H(d[d.t-1]);V>0?(d.lShiftTo(V,M),_.lShiftTo(V,c)):(d.copyTo(M),_.copyTo(c));var Z=M.t,ht=M[Z-1];if(ht!=0){var ct=ht*(1<<this.F1)+(Z>1?M[Z-2]>>this.F2:0),gt=this.FV/ct,Wt=(1<<this.F1)/ct,re=1<<this.F2,ce=c.t,Ae=ce-Z,rn=a??f();for(M.dlShiftTo(Ae,rn),c.compareTo(rn)>=0&&(c[c.t++]=1,c.subTo(rn,c)),u.ONE.dlShiftTo(Z,rn),rn.subTo(M,M);M.t<Z;)M[M.t++]=0;for(;--Ae>=0;){var Fn=c[--ce]==ht?this.DM:Math.floor(c[ce]*gt+(c[ce-1]+re)*Wt);if((c[ce]+=M.am(0,Fn,c,Ae,0,Z))<Fn)for(M.dlShiftTo(Ae,rn),c.subTo(rn,c);c[ce]<--Fn;)c.subTo(rn,c)}a!=null&&(c.drShiftTo(Z,a),I!=k&&u.ZERO.subTo(a,a)),c.t=Z,c.clamp(),V>0&&c.rShiftTo(V,c),I<0&&u.ZERO.subTo(c,c)}}}function Et(r){var a=f();return this.abs().divRemTo(r,null,a),this.s<0&&a.compareTo(u.ZERO)>0&&r.subTo(a,a),a}function qt(r){this.m=r}function ne(r){return r.s<0||r.compareTo(this.m)>=0?r.mod(this.m):r}function pe(r){return r}function lt(r){r.divRemTo(this.m,null,r)}function dt(r,a,c){r.multiplyTo(a,c),this.reduce(c)}function Nt(r,a){r.squareTo(a),this.reduce(a)}qt.prototype.convert=ne,qt.prototype.revert=pe,qt.prototype.reduce=lt,qt.prototype.mulTo=dt,qt.prototype.sqrTo=Nt;function Kt(){if(this.t<1)return 0;var r=this[0];if(!(r&1))return 0;var a=r&3;return a=a*(2-(r&15)*a)&15,a=a*(2-(r&255)*a)&255,a=a*(2-((r&65535)*a&65535))&65535,a=a*(2-r*a%this.DV)%this.DV,a>0?this.DV-a:-a}function Ft(r){this.m=r,this.mp=r.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<r.DB-15)-1,this.mt2=2*r.t}function Qt(r){var a=f();return r.abs().dlShiftTo(this.m.t,a),a.divRemTo(this.m,null,a),r.s<0&&a.compareTo(u.ZERO)>0&&this.m.subTo(a,a),a}function ve(r){var a=f();return r.copyTo(a),this.reduce(a),a}function pt(r){for(;r.t<=this.mt2;)r[r.t++]=0;for(var a=0;a<this.m.t;++a){var c=r[a]&32767,d=c*this.mpl+((c*this.mph+(r[a]>>15)*this.mpl&this.um)<<15)&r.DM;for(c=a+this.m.t,r[c]+=this.m.am(0,d,r,a,0,this.m.t);r[c]>=r.DV;)r[c]-=r.DV,r[++c]++}r.clamp(),r.drShiftTo(this.m.t,r),r.compareTo(this.m)>=0&&r.subTo(this.m,r)}function xt(r,a){r.squareTo(a),this.reduce(a)}function yt(r,a,c){r.multiplyTo(a,c),this.reduce(c)}Ft.prototype.convert=Qt,Ft.prototype.revert=ve,Ft.prototype.reduce=pt,Ft.prototype.mulTo=yt,Ft.prototype.sqrTo=xt;function vt(){return(this.t>0?this[0]&1:this.s)==0}function bt(r,a){if(r>4294967295||r<1)return u.ONE;var c=f(),d=f(),_=a.convert(this),M=H(r)-1;for(_.copyTo(c);--M>=0;)if(a.sqrTo(c,d),(r&1<<M)>0)a.mulTo(d,_,c);else{var I=c;c=d,d=I}return a.revert(c)}function $t(r,a){var c;return r<256||a.isEven()?c=new qt(a):c=new Ft(a),this.exp(r,c)}u.prototype.copyTo=E,u.prototype.fromInt=R,u.prototype.fromString=O,u.prototype.clamp=T,u.prototype.dlShiftTo=W,u.prototype.drShiftTo=K,u.prototype.lShiftTo=$,u.prototype.rShiftTo=at,u.prototype.subTo=tt,u.prototype.multiplyTo=it,u.prototype.squareTo=st,u.prototype.divRemTo=Tt,u.prototype.invDigit=Kt,u.prototype.isEven=vt,u.prototype.exp=bt,u.prototype.toString=D,u.prototype.negate=B,u.prototype.abs=N,u.prototype.compareTo=G,u.prototype.bitLength=U,u.prototype.mod=Et,u.prototype.modPowInt=$t,u.ZERO=L(0),u.ONE=L(1);function Zt(){var r=f();return this.copyTo(r),r}function te(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function ie(){return this.t==0?this.s:this[0]<<24>>24}function X(){return this.t==0?this.s:this[0]<<16>>16}function _e(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function ue(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function F(r){if(r==null&&(r=10),this.signum()==0||r<2||r>36)return"0";var a=this.chunkSize(r),c=Math.pow(r,a),d=L(c),_=f(),M=f(),I="";for(this.divRemTo(d,_,M);_.signum()>0;)I=(c+M.intValue()).toString(r).substr(1)+I,_.divRemTo(d,_,M);return M.intValue().toString(r)+I}function b(r,a){this.fromInt(0),a==null&&(a=10);for(var c=this.chunkSize(a),d=Math.pow(a,c),_=!1,M=0,I=0,k=0;k<r.length;++k){var V=A(r,k);if(V<0){r.charAt(k)=="-"&&this.signum()==0&&(_=!0);continue}I=a*I+V,++M>=c&&(this.dMultiply(d),this.dAddOffset(I,0),M=0,I=0)}M>0&&(this.dMultiply(Math.pow(a,M)),this.dAddOffset(I,0)),_&&u.ZERO.subTo(this,this)}function J(r,a,c){if(typeof a=="number")if(r<2)this.fromInt(1);else for(this.fromNumber(r,c),this.testBit(r-1)||this.bitwiseTo(u.ONE.shiftLeft(r-1),Gt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(a);)this.dAddOffset(2,0),this.bitLength()>r&&this.subTo(u.ONE.shiftLeft(r-1),this);else{var d=new Array,_=r&7;d.length=(r>>3)+1,a.nextBytes(d),_>0?d[0]&=(1<<_)-1:d[0]=0,this.fromString(d,256)}}function et(){var r=this.t,a=new Array;a[0]=this.s;var c=this.DB-r*this.DB%8,d,_=0;if(r-- >0)for(c<this.DB&&(d=this[r]>>c)!=(this.s&this.DM)>>c&&(a[_++]=d|this.s<<this.DB-c);r>=0;)c<8?(d=(this[r]&(1<<c)-1)<<8-c,d|=this[--r]>>(c+=this.DB-8)):(d=this[r]>>(c-=8)&255,c<=0&&(c+=this.DB,--r)),d&128&&(d|=-256),_==0&&(this.s&128)!=(d&128)&&++_,(_>0||d!=this.s)&&(a[_++]=d);return a}function rt(r){return this.compareTo(r)==0}function St(r){return this.compareTo(r)<0?this:r}function Mt(r){return this.compareTo(r)>0?this:r}function ot(r,a,c){var d,_,M=Math.min(r.t,this.t);for(d=0;d<M;++d)c[d]=a(this[d],r[d]);if(r.t<this.t){for(_=r.s&this.DM,d=M;d<this.t;++d)c[d]=a(this[d],_);c.t=this.t}else{for(_=this.s&this.DM,d=M;d<r.t;++d)c[d]=a(_,r[d]);c.t=r.t}c.s=a(this.s,r.s),c.clamp()}function ft(r,a){return r&a}function Ct(r){var a=f();return this.bitwiseTo(r,ft,a),a}function Gt(r,a){return r|a}function Dt(r){var a=f();return this.bitwiseTo(r,Gt,a),a}function At(r,a){return r^a}function Xt(r){var a=f();return this.bitwiseTo(r,At,a),a}function Jt(r,a){return r&~a}function ae(r){var a=f();return this.bitwiseTo(r,Jt,a),a}function q(){for(var r=f(),a=0;a<this.t;++a)r[a]=this.DM&~this[a];return r.t=this.t,r.s=~this.s,r}function It(r){var a=f();return r<0?this.rShiftTo(-r,a):this.lShiftTo(r,a),a}function ut(r){var a=f();return r<0?this.lShiftTo(-r,a):this.rShiftTo(r,a),a}function Rt(r){if(r==0)return-1;var a=0;return r&65535||(r>>=16,a+=16),r&255||(r>>=8,a+=8),r&15||(r>>=4,a+=4),r&3||(r>>=2,a+=2),r&1||++a,a}function Bt(){for(var r=0;r<this.t;++r)if(this[r]!=0)return r*this.DB+Rt(this[r]);return this.s<0?this.t*this.DB:-1}function mt(r){for(var a=0;r!=0;)r&=r-1,++a;return a}function Yt(){for(var r=0,a=this.s&this.DM,c=0;c<this.t;++c)r+=mt(this[c]^a);return r}function Vt(r){var a=Math.floor(r/this.DB);return a>=this.t?this.s!=0:(this[a]&1<<r%this.DB)!=0}function Te(r,a){var c=u.ONE.shiftLeft(r);return this.bitwiseTo(c,a,c),c}function xe(r){return this.changeBit(r,Gt)}function un(r){return this.changeBit(r,Jt)}function vn(r){return this.changeBit(r,At)}function _l(r,a){for(var c=0,d=0,_=Math.min(r.t,this.t);c<_;)d+=this[c]+r[c],a[c++]=d&this.DM,d>>=this.DB;if(r.t<this.t){for(d+=r.s;c<this.t;)d+=this[c],a[c++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;c<r.t;)d+=r[c],a[c++]=d&this.DM,d>>=this.DB;d+=r.s}a.s=d<0?-1:0,d>0?a[c++]=d:d<-1&&(a[c++]=this.DV+d),a.t=c,a.clamp()}function xl(r){var a=f();return this.addTo(r,a),a}function Jr(r){var a=f();return this.subTo(r,a),a}function Xs(r){var a=f();return this.multiplyTo(r,a),a}function yl(){var r=f();return this.squareTo(r),r}function $r(r){var a=f();return this.divRemTo(r,a,null),a}function Kr(r){var a=f();return this.divRemTo(r,null,a),a}function qn(r){var a=f(),c=f();return this.divRemTo(r,a,c),new Array(a,c)}function Ws(r){this[this.t]=this.am(0,r-1,this,0,0,this.t),++this.t,this.clamp()}function jr(r,a){if(r!=0){for(;this.t<=a;)this[this.t++]=0;for(this[a]+=r;this[a]>=this.DV;)this[a]-=this.DV,++a>=this.t&&(this[this.t++]=0),++this[a]}}function oi(){}function Ii(r){return r}function Qr(r,a,c){r.multiplyTo(a,c)}function $i(r,a){r.squareTo(a)}oi.prototype.convert=Ii,oi.prototype.revert=Ii,oi.prototype.mulTo=Qr,oi.prototype.sqrTo=$i;function to(r){return this.exp(r,new oi)}function eo(r,a,c){var d=Math.min(this.t+r.t,a);for(c.s=0,c.t=d;d>0;)c[--d]=0;var _;for(_=c.t-this.t;d<_;++d)c[d+this.t]=this.am(0,r[d],c,d,0,this.t);for(_=Math.min(r.t,a);d<_;++d)this.am(0,r[d],c,d,0,a-d);c.clamp()}function vl(r,a,c){--a;var d=c.t=this.t+r.t-a;for(c.s=0;--d>=0;)c[d]=0;for(d=Math.max(a-this.t,0);d<r.t;++d)c[this.t+d-a]=this.am(a-d,r[d],c,0,0,this.t+d-a);c.clamp(),c.drShiftTo(1,c)}function ai(r){this.r2=f(),this.q3=f(),u.ONE.dlShiftTo(2*r.t,this.r2),this.mu=this.r2.divide(r),this.m=r}function Sl(r){if(r.s<0||r.t>2*this.m.t)return r.mod(this.m);if(r.compareTo(this.m)<0)return r;var a=f();return r.copyTo(a),this.reduce(a),a}function Ml(r){return r}function no(r){for(r.drShiftTo(this.m.t-1,this.r2),r.t>this.m.t+1&&(r.t=this.m.t+1,r.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);r.compareTo(this.r2)<0;)r.dAddOffset(1,this.m.t+1);for(r.subTo(this.r2,r);r.compareTo(this.m)>=0;)r.subTo(this.m,r)}function C(r,a){r.squareTo(a),this.reduce(a)}function Y(r,a,c){r.multiplyTo(a,c),this.reduce(c)}ai.prototype.convert=Sl,ai.prototype.revert=Ml,ai.prototype.reduce=no,ai.prototype.mulTo=Y,ai.prototype.sqrTo=C;function nt(r,a){var c=r.bitLength(),d,_=L(1),M;if(c<=0)return _;c<18?d=1:c<48?d=3:c<144?d=4:c<768?d=5:d=6,c<8?M=new qt(a):a.isEven()?M=new ai(a):M=new Ft(a);var I=new Array,k=3,V=d-1,Z=(1<<d)-1;if(I[1]=M.convert(this),d>1){var ht=f();for(M.sqrTo(I[1],ht);k<=Z;)I[k]=f(),M.mulTo(ht,I[k-2],I[k]),k+=2}var ct=r.t-1,gt,Wt=!0,re=f(),ce;for(c=H(r[ct])-1;ct>=0;){for(c>=V?gt=r[ct]>>c-V&Z:(gt=(r[ct]&(1<<c+1)-1)<<V-c,ct>0&&(gt|=r[ct-1]>>this.DB+c-V)),k=d;!(gt&1);)gt>>=1,--k;if((c-=k)<0&&(c+=this.DB,--ct),Wt)I[gt].copyTo(_),Wt=!1;else{for(;k>1;)M.sqrTo(_,re),M.sqrTo(re,_),k-=2;k>0?M.sqrTo(_,re):(ce=_,_=re,re=ce),M.mulTo(re,I[gt],_)}for(;ct>=0&&!(r[ct]&1<<c);)M.sqrTo(_,re),ce=_,_=re,re=ce,--c<0&&(c=this.DB-1,--ct)}return M.revert(_)}function j(r){var a=this.s<0?this.negate():this.clone(),c=r.s<0?r.negate():r.clone();if(a.compareTo(c)<0){var d=a;a=c,c=d}var _=a.getLowestSetBit(),M=c.getLowestSetBit();if(M<0)return a;for(_<M&&(M=_),M>0&&(a.rShiftTo(M,a),c.rShiftTo(M,c));a.signum()>0;)(_=a.getLowestSetBit())>0&&a.rShiftTo(_,a),(_=c.getLowestSetBit())>0&&c.rShiftTo(_,c),a.compareTo(c)>=0?(a.subTo(c,a),a.rShiftTo(1,a)):(c.subTo(a,c),c.rShiftTo(1,c));return M>0&&c.lShiftTo(M,c),c}function Q(r){if(r<=0)return 0;var a=this.DV%r,c=this.s<0?r-1:0;if(this.t>0)if(a==0)c=this[0]%r;else for(var d=this.t-1;d>=0;--d)c=(a*c+this[d])%r;return c}function Ut(r){var a=r.isEven();if(this.isEven()&&a||r.signum()==0)return u.ZERO;for(var c=r.clone(),d=this.clone(),_=L(1),M=L(0),I=L(0),k=L(1);c.signum()!=0;){for(;c.isEven();)c.rShiftTo(1,c),a?((!_.isEven()||!M.isEven())&&(_.addTo(this,_),M.subTo(r,M)),_.rShiftTo(1,_)):M.isEven()||M.subTo(r,M),M.rShiftTo(1,M);for(;d.isEven();)d.rShiftTo(1,d),a?((!I.isEven()||!k.isEven())&&(I.addTo(this,I),k.subTo(r,k)),I.rShiftTo(1,I)):k.isEven()||k.subTo(r,k),k.rShiftTo(1,k);c.compareTo(d)>=0?(c.subTo(d,c),a&&_.subTo(I,_),M.subTo(k,M)):(d.subTo(c,d),a&&I.subTo(_,I),k.subTo(M,k))}if(d.compareTo(u.ONE)!=0)return u.ZERO;if(k.compareTo(r)>=0)return k.subtract(r);if(k.signum()<0)k.addTo(r,k);else return k;return k.signum()<0?k.add(r):k}var wt=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Ot=(1<<26)/wt[wt.length-1];function zt(r){var a,c=this.abs();if(c.t==1&&c[0]<=wt[wt.length-1]){for(a=0;a<wt.length;++a)if(c[0]==wt[a])return!0;return!1}if(c.isEven())return!1;for(a=1;a<wt.length;){for(var d=wt[a],_=a+1;_<wt.length&&d<Ot;)d*=wt[_++];for(d=c.modInt(d);a<_;)if(d%wt[a++]==0)return!1}return c.millerRabin(r)}function Ht(r){var a=this.subtract(u.ONE),c=a.getLowestSetBit();if(c<=0)return!1;var d=a.shiftRight(c);r=r+1>>1,r>wt.length&&(r=wt.length);for(var _=f(),M=0;M<r;++M){_.fromInt(wt[Math.floor(Math.random()*wt.length)]);var I=_.modPow(d,this);if(I.compareTo(u.ONE)!=0&&I.compareTo(a)!=0){for(var k=1;k++<c&&I.compareTo(a)!=0;)if(I=I.modPowInt(2,this),I.compareTo(u.ONE)==0)return!1;if(I.compareTo(a)!=0)return!1}}return!0}u.prototype.chunkSize=_e,u.prototype.toRadix=F,u.prototype.fromRadix=b,u.prototype.fromNumber=J,u.prototype.bitwiseTo=ot,u.prototype.changeBit=Te,u.prototype.addTo=_l,u.prototype.dMultiply=Ws,u.prototype.dAddOffset=jr,u.prototype.multiplyLowerTo=eo,u.prototype.multiplyUpperTo=vl,u.prototype.modInt=Q,u.prototype.millerRabin=Ht,u.prototype.clone=Zt,u.prototype.intValue=te,u.prototype.byteValue=ie,u.prototype.shortValue=X,u.prototype.signum=ue,u.prototype.toByteArray=et,u.prototype.equals=rt,u.prototype.min=St,u.prototype.max=Mt,u.prototype.and=Ct,u.prototype.or=Dt,u.prototype.xor=Xt,u.prototype.andNot=ae,u.prototype.not=q,u.prototype.shiftLeft=It,u.prototype.shiftRight=ut,u.prototype.getLowestSetBit=Bt,u.prototype.bitCount=Yt,u.prototype.testBit=Vt,u.prototype.setBit=xe,u.prototype.clearBit=un,u.prototype.flipBit=vn,u.prototype.add=xl,u.prototype.subtract=Jr,u.prototype.multiply=Xs,u.prototype.divide=$r,u.prototype.remainder=Kr,u.prototype.divideAndRemainder=qn,u.prototype.modPow=nt,u.prototype.modInverse=Ut,u.prototype.pow=to,u.prototype.gcd=j,u.prototype.isProbablePrime=zt,u.prototype.square=yl;var Lt=u;Lt.prototype.IsNegative=function(){return this.compareTo(Lt.ZERO)==-1},Lt.op_Equality=function(r,a){return r.compareTo(a)==0},Lt.op_Inequality=function(r,a){return r.compareTo(a)!=0},Lt.op_GreaterThan=function(r,a){return r.compareTo(a)>0},Lt.op_LessThan=function(r,a){return r.compareTo(a)<0},Lt.op_Addition=function(r,a){return new Lt(r,void 0,void 0).add(new Lt(a,void 0,void 0))},Lt.op_Subtraction=function(r,a){return new Lt(r,void 0,void 0).subtract(new Lt(a,void 0,void 0))},Lt.Int128Mul=function(r,a){return new Lt(r,void 0,void 0).multiply(new Lt(a,void 0,void 0))},Lt.op_Division=function(r,a){return r.divide(a)},Lt.prototype.ToDouble=function(){return parseFloat(this.toString())};var le=function(r,a){var c;if(typeof Object.getOwnPropertyNames>"u"){for(c in a.prototype)(typeof r.prototype[c]>"u"||r.prototype[c]===Object.prototype[c])&&(r.prototype[c]=a.prototype[c]);for(c in a)typeof r[c]>"u"&&(r[c]=a[c]);r.$baseCtor=a}else{for(var d=Object.getOwnPropertyNames(a.prototype),_=0;_<d.length;_++)typeof Object.getOwnPropertyDescriptor(r.prototype,d[_])>"u"&&Object.defineProperty(r.prototype,d[_],Object.getOwnPropertyDescriptor(a.prototype,d[_]));for(c in a)typeof r[c]>"u"&&(r[c]=a[c]);r.$baseCtor=a}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var r=arguments;this.X=0,this.Y=0,r.length===1?(this.X=r[0].X,this.Y=r[0].Y):r.length===2&&(this.X=r[0],this.Y=r[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(r){this.X=r.X,this.Y=r.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(r,a){this.X=r,this.Y=a},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var r=!0,a=this.m_Parent;a!==null;)r=!r,a=a.m_Parent;return r},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(r){var a=this.m_Childs.length;this.m_Childs.push(r),r.m_Parent=this,r.m_Index=a},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var r=0,a=this.m_AllPolys.length;r<a;r++)this.m_AllPolys[r]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var r=this.m_AllPolys.length;return r>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&r--,r},le(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(r){return Math.abs(r)},n.Math_Max_Int32_Int32=function(r,a){return Math.max(r,a)},s.msie||s.opera||s.safari?n.Cast_Int32=function(r){return r|0}:n.Cast_Int32=function(r){return~~r},typeof Number.toInteger>"u"&&(Number.toInteger=null),s.chrome?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):~~r}:s.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(r){return Number.toInteger(r)}:s.msie7||s.msie8?n.Cast_Int64=function(r){return parseInt(r,10)}:s.msie?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):r|0}:n.Cast_Int64=function(r){return r<0?Math.ceil(r):Math.floor(r)},n.Clear=function(r){r.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var r=arguments,a=r.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,a===3)this.X=r[0],this.Y=r[1],this.Z=r[2];else if(a===2)this.X=r[0],this.Y=r[1],this.Z=0;else if(a===1)if(r[0]instanceof n.DoublePoint){var c=r[0];this.X=n.Clipper.Round(c.X),this.Y=n.Clipper.Round(c.Y),this.Z=0}else{var d=r[0];typeof d.Z>"u"&&(d.Z=0),this.X=d.X,this.Y=d.Y,this.Z=d.Z}else this.X=0,this.Y=0,this.Z=0;else if(a===2)this.X=r[0],this.Y=r[1];else if(a===1)if(r[0]instanceof n.DoublePoint){var c=r[0];this.X=n.Clipper.Round(c.X),this.Y=n.Clipper.Round(c.Y)}else{var d=r[0];this.X=d.X,this.Y=d.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(r,a){return r.X===a.X&&r.Y===a.Y},n.IntPoint.op_Inequality=function(r,a){return r.X!==a.X||r.Y!==a.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(r){this.X=r.X,this.Y=r.Y,n.use_xyz&&(typeof r.Z>"u"?this.Z=0:this.Z=r.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(r){this.X=n.Clipper.Round(r.X),this.Y=n.Clipper.Round(r.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(r,a,c){this.X=r,this.Y=a,n.use_xyz&&(typeof c>"u"?this.Z=0:this.Z=c)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var r=arguments,a=r.length;if(a===4)this.left=r[0],this.top=r[1],this.right=r[2],this.bottom=r[3];else if(a===1){var c=r[0];this.left=c.left,this.top=c.top,this.right=c.right,this.bottom=c.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(r){this.left=r.left,this.top=r.top,this.right=r.right,this.bottom=r.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(r,a,c,d){this.left=r,this.top=a,this.right=c,this.bottom=d},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(r,a){var c=a.Pt.Y-r.Pt.Y;return c>0?1:c<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(r){return r>-n.ClipperBase.tolerance&&r<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(r){return r.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(r,a){var c=a;do{if(n.IntPoint.op_Equality(c.Pt,r))return!0;c=c.Next}while(c!==a);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(r,a,c,d){return d?r.X===a.X&&r.Y===a.Y||r.X===c.X&&r.Y===c.Y||r.X>a.X==r.X<c.X&&r.Y>a.Y==r.Y<c.Y&&Lt.op_Equality(Lt.Int128Mul(r.X-a.X,c.Y-a.Y),Lt.Int128Mul(c.X-a.X,r.Y-a.Y)):r.X===a.X&&r.Y===a.Y||r.X===c.X&&r.Y===c.Y||r.X>a.X==r.X<c.X&&r.Y>a.Y==r.Y<c.Y&&(r.X-a.X)*(c.Y-a.Y)===(c.X-a.X)*(r.Y-a.Y)},n.ClipperBase.prototype.PointOnPolygon=function(r,a,c){for(var d=a;;){if(this.PointOnLineSegment(r,d.Pt,d.Next.Pt,c))return!0;if(d=d.Next,d===a)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var r=arguments,a=r.length,c,d,_,M,I,k,V;return a===3?(c=r[0],d=r[1],V=r[2],V?Lt.op_Equality(Lt.Int128Mul(c.Delta.Y,d.Delta.X),Lt.Int128Mul(c.Delta.X,d.Delta.Y)):n.Cast_Int64(c.Delta.Y*d.Delta.X)===n.Cast_Int64(c.Delta.X*d.Delta.Y)):a===4?(_=r[0],M=r[1],I=r[2],V=r[3],V?Lt.op_Equality(Lt.Int128Mul(_.Y-M.Y,M.X-I.X),Lt.Int128Mul(_.X-M.X,M.Y-I.Y)):n.Cast_Int64((_.Y-M.Y)*(M.X-I.X))-n.Cast_Int64((_.X-M.X)*(M.Y-I.Y))===0):(_=r[0],M=r[1],I=r[2],k=r[3],V=r[4],V?Lt.op_Equality(Lt.Int128Mul(_.Y-M.Y,I.X-k.X),Lt.Int128Mul(_.X-M.X,I.Y-k.Y)):n.Cast_Int64((_.Y-M.Y)*(I.X-k.X))-n.Cast_Int64((_.X-M.X)*(I.Y-k.Y))===0)},n.ClipperBase.SlopesEqual3=function(r,a,c){return c?Lt.op_Equality(Lt.Int128Mul(r.Delta.Y,a.Delta.X),Lt.Int128Mul(r.Delta.X,a.Delta.Y)):n.Cast_Int64(r.Delta.Y*a.Delta.X)===n.Cast_Int64(r.Delta.X*a.Delta.Y)},n.ClipperBase.SlopesEqual4=function(r,a,c,d){return d?Lt.op_Equality(Lt.Int128Mul(r.Y-a.Y,a.X-c.X),Lt.Int128Mul(r.X-a.X,a.Y-c.Y)):n.Cast_Int64((r.Y-a.Y)*(a.X-c.X))-n.Cast_Int64((r.X-a.X)*(a.Y-c.Y))===0},n.ClipperBase.SlopesEqual5=function(r,a,c,d,_){return _?Lt.op_Equality(Lt.Int128Mul(r.Y-a.Y,c.X-d.X),Lt.Int128Mul(r.X-a.X,c.Y-d.Y)):n.Cast_Int64((r.Y-a.Y)*(c.X-d.X))-n.Cast_Int64((r.X-a.X)*(c.Y-d.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var r=0,a=this.m_edges.length;r<a;++r){for(var c=0,d=this.m_edges[r].length;c<d;++c)this.m_edges[r][c]=null;n.Clear(this.m_edges[r])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var r=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=r}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(r,a){a.Value?(r.X>n.ClipperBase.hiRange||r.Y>n.ClipperBase.hiRange||-r.X>n.ClipperBase.hiRange||-r.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(r.X>n.ClipperBase.loRange||r.Y>n.ClipperBase.loRange||-r.X>n.ClipperBase.loRange||-r.Y>n.ClipperBase.loRange)&&(a.Value=!0,this.RangeTest(r,a))},n.ClipperBase.prototype.InitEdge=function(r,a,c,d){r.Next=a,r.Prev=c,r.Curr.X=d.X,r.Curr.Y=d.Y,n.use_xyz&&(r.Curr.Z=d.Z),r.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(r,a){r.Curr.Y>=r.Next.Curr.Y?(r.Bot.X=r.Curr.X,r.Bot.Y=r.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Curr.Z),r.Top.X=r.Next.Curr.X,r.Top.Y=r.Next.Curr.Y,n.use_xyz&&(r.Top.Z=r.Next.Curr.Z)):(r.Top.X=r.Curr.X,r.Top.Y=r.Curr.Y,n.use_xyz&&(r.Top.Z=r.Curr.Z),r.Bot.X=r.Next.Curr.X,r.Bot.Y=r.Next.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Next.Curr.Z)),this.SetDx(r),r.PolyTyp=a},n.ClipperBase.prototype.FindNextLocMin=function(r){for(var a;;){for(;n.IntPoint.op_Inequality(r.Bot,r.Prev.Bot)||n.IntPoint.op_Equality(r.Curr,r.Top);)r=r.Next;if(r.Dx!==n.ClipperBase.horizontal&&r.Prev.Dx!==n.ClipperBase.horizontal)break;for(;r.Prev.Dx===n.ClipperBase.horizontal;)r=r.Prev;for(a=r;r.Dx===n.ClipperBase.horizontal;)r=r.Next;if(r.Top.Y!==r.Prev.Bot.Y){a.Prev.Bot.X<r.Bot.X&&(r=a);break}}return r},n.ClipperBase.prototype.ProcessBound=function(r,a){var c,d=r,_;if(d.OutIdx===n.ClipperBase.Skip){if(r=d,a){for(;r.Top.Y===r.Next.Bot.Y;)r=r.Next;for(;r!==d&&r.Dx===n.ClipperBase.horizontal;)r=r.Prev}else{for(;r.Top.Y===r.Prev.Bot.Y;)r=r.Prev;for(;r!==d&&r.Dx===n.ClipperBase.horizontal;)r=r.Next}if(r===d)a?d=r.Next:d=r.Prev;else{a?r=d.Next:r=d.Prev;var M=new n.LocalMinima;M.Next=null,M.Y=r.Bot.Y,M.LeftBound=null,M.RightBound=r,r.WindDelta=0,d=this.ProcessBound(r,a),this.InsertLocalMinima(M)}return d}if(r.Dx===n.ClipperBase.horizontal&&(a?c=r.Prev:c=r.Next,c.Dx===n.ClipperBase.horizontal?c.Bot.X!==r.Bot.X&&c.Top.X!==r.Bot.X&&this.ReverseHorizontal(r):c.Bot.X!==r.Bot.X&&this.ReverseHorizontal(r)),c=r,a){for(;d.Top.Y===d.Next.Bot.Y&&d.Next.OutIdx!==n.ClipperBase.Skip;)d=d.Next;if(d.Dx===n.ClipperBase.horizontal&&d.Next.OutIdx!==n.ClipperBase.Skip){for(_=d;_.Prev.Dx===n.ClipperBase.horizontal;)_=_.Prev;_.Prev.Top.X>d.Next.Top.X&&(d=_.Prev)}for(;r!==d;)r.NextInLML=r.Next,r.Dx===n.ClipperBase.horizontal&&r!==c&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),r=r.Next;r.Dx===n.ClipperBase.horizontal&&r!==c&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),d=d.Next}else{for(;d.Top.Y===d.Prev.Bot.Y&&d.Prev.OutIdx!==n.ClipperBase.Skip;)d=d.Prev;if(d.Dx===n.ClipperBase.horizontal&&d.Prev.OutIdx!==n.ClipperBase.Skip){for(_=d;_.Next.Dx===n.ClipperBase.horizontal;)_=_.Next;(_.Next.Top.X===d.Prev.Top.X||_.Next.Top.X>d.Prev.Top.X)&&(d=_.Next)}for(;r!==d;)r.NextInLML=r.Prev,r.Dx===n.ClipperBase.horizontal&&r!==c&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),r=r.Prev;r.Dx===n.ClipperBase.horizontal&&r!==c&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),d=d.Prev}return d},n.ClipperBase.prototype.AddPath=function(r,a,c){n.use_lines?!c&&a===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):c||n.Error("AddPath: Open paths have been disabled.");var d=r.length-1;if(c)for(;d>0&&n.IntPoint.op_Equality(r[d],r[0]);)--d;for(;d>0&&n.IntPoint.op_Equality(r[d],r[d-1]);)--d;if(c&&d<2||!c&&d<1)return!1;for(var _=new Array,M=0;M<=d;M++)_.push(new n.TEdge);var I=!0;_[1].Curr.X=r[1].X,_[1].Curr.Y=r[1].Y,n.use_xyz&&(_[1].Curr.Z=r[1].Z);var k={Value:this.m_UseFullRange};this.RangeTest(r[0],k),this.m_UseFullRange=k.Value,k.Value=this.m_UseFullRange,this.RangeTest(r[d],k),this.m_UseFullRange=k.Value,this.InitEdge(_[0],_[1],_[d],r[0]),this.InitEdge(_[d],_[0],_[d-1],r[d]);for(var M=d-1;M>=1;--M)k.Value=this.m_UseFullRange,this.RangeTest(r[M],k),this.m_UseFullRange=k.Value,this.InitEdge(_[M],_[M+1],_[M-1],r[M]);for(var V=_[0],Z=V,ht=V;;){if(Z.Curr===Z.Next.Curr&&(c||Z.Next!==V)){if(Z===Z.Next)break;Z===V&&(V=Z.Next),Z=this.RemoveEdge(Z),ht=Z;continue}if(Z.Prev===Z.Next)break;if(c&&n.ClipperBase.SlopesEqual4(Z.Prev.Curr,Z.Curr,Z.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(Z.Prev.Curr,Z.Curr,Z.Next.Curr))){Z===V&&(V=Z.Next),Z=this.RemoveEdge(Z),Z=Z.Prev,ht=Z;continue}if(Z=Z.Next,Z===ht||!c&&Z.Next===V)break}if(!c&&Z===Z.Next||c&&Z.Prev===Z.Next)return!1;c||(this.m_HasOpenPaths=!0,V.Prev.OutIdx=n.ClipperBase.Skip),Z=V;do this.InitEdge2(Z,a),Z=Z.Next,I&&Z.Curr.Y!==V.Curr.Y&&(I=!1);while(Z!==V);if(I){if(c)return!1;Z.Prev.OutIdx=n.ClipperBase.Skip;var ct=new n.LocalMinima;for(ct.Next=null,ct.Y=Z.Bot.Y,ct.LeftBound=null,ct.RightBound=Z,ct.RightBound.Side=n.EdgeSide.esRight,ct.RightBound.WindDelta=0;Z.Bot.X!==Z.Prev.Top.X&&this.ReverseHorizontal(Z),Z.Next.OutIdx!==n.ClipperBase.Skip;)Z.NextInLML=Z.Next,Z=Z.Next;return this.InsertLocalMinima(ct),this.m_edges.push(_),!0}this.m_edges.push(_);var gt,Wt=null;for(n.IntPoint.op_Equality(Z.Prev.Bot,Z.Prev.Top)&&(Z=Z.Next);Z=this.FindNextLocMin(Z),Z!==Wt;){Wt===null&&(Wt=Z);var ct=new n.LocalMinima;ct.Next=null,ct.Y=Z.Bot.Y,Z.Dx<Z.Prev.Dx?(ct.LeftBound=Z.Prev,ct.RightBound=Z,gt=!1):(ct.LeftBound=Z,ct.RightBound=Z.Prev,gt=!0),ct.LeftBound.Side=n.EdgeSide.esLeft,ct.RightBound.Side=n.EdgeSide.esRight,c?ct.LeftBound.Next===ct.RightBound?ct.LeftBound.WindDelta=-1:ct.LeftBound.WindDelta=1:ct.LeftBound.WindDelta=0,ct.RightBound.WindDelta=-ct.LeftBound.WindDelta,Z=this.ProcessBound(ct.LeftBound,gt),Z.OutIdx===n.ClipperBase.Skip&&(Z=this.ProcessBound(Z,gt));var re=this.ProcessBound(ct.RightBound,!gt);re.OutIdx===n.ClipperBase.Skip&&(re=this.ProcessBound(re,!gt)),ct.LeftBound.OutIdx===n.ClipperBase.Skip?ct.LeftBound=null:ct.RightBound.OutIdx===n.ClipperBase.Skip&&(ct.RightBound=null),this.InsertLocalMinima(ct),gt||(Z=re)}return!0},n.ClipperBase.prototype.AddPaths=function(r,a,c){for(var d=!1,_=0,M=r.length;_<M;++_)this.AddPath(r[_],a,c)&&(d=!0);return d},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(r,a,c){return n.IntPoint.op_Equality(r,c)||n.IntPoint.op_Equality(r,a)||n.IntPoint.op_Equality(c,a)?!1:r.X!==c.X?a.X>r.X==a.X<c.X:a.Y>r.Y==a.Y<c.Y},n.ClipperBase.prototype.RemoveEdge=function(r){r.Prev.Next=r.Next,r.Next.Prev=r.Prev;var a=r.Next;return r.Prev=null,a},n.ClipperBase.prototype.SetDx=function(r){r.Delta.X=r.Top.X-r.Bot.X,r.Delta.Y=r.Top.Y-r.Bot.Y,r.Delta.Y===0?r.Dx=n.ClipperBase.horizontal:r.Dx=r.Delta.X/r.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(r){if(this.m_MinimaList===null)this.m_MinimaList=r;else if(r.Y>=this.m_MinimaList.Y)r.Next=this.m_MinimaList,this.m_MinimaList=r;else{for(var a=this.m_MinimaList;a.Next!==null&&r.Y<a.Next.Y;)a=a.Next;r.Next=a.Next,a.Next=r}},n.ClipperBase.prototype.PopLocalMinima=function(r,a){return a.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===r?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(r){var a=r.Top.X;r.Top.X=r.Bot.X,r.Bot.X=a,n.use_xyz&&(a=r.Top.Z,r.Top.Z=r.Bot.Z,r.Bot.Z=a)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var r=this.m_MinimaList;r!==null;){this.InsertScanbeam(r.Y);var a=r.LeftBound;a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),a=r.RightBound,a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),r=r.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(r){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=r;else if(r>this.m_Scanbeam.Y){var a=new n.Scanbeam;a.Y=r,a.Next=this.m_Scanbeam,this.m_Scanbeam=a}else{for(var c=this.m_Scanbeam;c.Next!==null&&r<=c.Next.Y;)c=c.Next;if(r===c.Y)return;var d=new n.Scanbeam;d.Y=r,d.Next=c.Next,c.Next=d}},n.ClipperBase.prototype.PopScanbeam=function(r){return this.m_Scanbeam===null?(r.v=0,!1):(r.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var r=new n.OutRec;return r.Idx=n.ClipperBase.Unassigned,r.IsHole=!1,r.IsOpen=!1,r.FirstLeft=null,r.Pts=null,r.BottomPt=null,r.PolyNode=null,this.m_PolyOuts.push(r),r.Idx=this.m_PolyOuts.length-1,r},n.ClipperBase.prototype.DisposeOutRec=function(r){var a=this.m_PolyOuts[r];a.Pts=null,a=null,this.m_PolyOuts[r]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(r){r.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var a=r.PrevInAEL,c=r.NextInAEL;return r.NextInLML.OutIdx=r.OutIdx,a!==null?a.NextInAEL=r.NextInLML:this.m_ActiveEdges=r.NextInLML,c!==null&&(c.PrevInAEL=r.NextInLML),r.NextInLML.Side=r.Side,r.NextInLML.WindDelta=r.WindDelta,r.NextInLML.WindCnt=r.WindCnt,r.NextInLML.WindCnt2=r.WindCnt2,r=r.NextInLML,r.Curr.X=r.Bot.X,r.Curr.Y=r.Bot.Y,r.PrevInAEL=a,r.NextInAEL=c,n.ClipperBase.IsHorizontal(r)||this.InsertScanbeam(r.Top.Y),r},n.ClipperBase.prototype.SwapPositionsInAEL=function(r,a){if(!(r.NextInAEL===r.PrevInAEL||a.NextInAEL===a.PrevInAEL)){if(r.NextInAEL===a){var c=a.NextInAEL;c!==null&&(c.PrevInAEL=r);var d=r.PrevInAEL;d!==null&&(d.NextInAEL=a),a.PrevInAEL=d,a.NextInAEL=r,r.PrevInAEL=a,r.NextInAEL=c}else if(a.NextInAEL===r){var _=r.NextInAEL;_!==null&&(_.PrevInAEL=a);var M=a.PrevInAEL;M!==null&&(M.NextInAEL=r),r.PrevInAEL=M,r.NextInAEL=a,a.PrevInAEL=r,a.NextInAEL=_}else{var I=r.NextInAEL,k=r.PrevInAEL;r.NextInAEL=a.NextInAEL,r.NextInAEL!==null&&(r.NextInAEL.PrevInAEL=r),r.PrevInAEL=a.PrevInAEL,r.PrevInAEL!==null&&(r.PrevInAEL.NextInAEL=r),a.NextInAEL=I,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=a),a.PrevInAEL=k,a.PrevInAEL!==null&&(a.PrevInAEL.NextInAEL=a)}r.PrevInAEL===null?this.m_ActiveEdges=r:a.PrevInAEL===null&&(this.m_ActiveEdges=a)}},n.ClipperBase.prototype.DeleteFromAEL=function(r){var a=r.PrevInAEL,c=r.NextInAEL;a===null&&c===null&&r!==this.m_ActiveEdges||(a!==null?a.NextInAEL=c:this.m_ActiveEdges=c,c!==null&&(c.PrevInAEL=a),r.NextInAEL=null,r.PrevInAEL=null)},n.Clipper=function(r){typeof r>"u"&&(r=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&r)!==0,this.StrictlySimple=(2&r)!==0,this.PreserveCollinear=(4&r)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(r){var a=new n.Maxima;if(a.X=r,this.m_Maxima===null)this.m_Maxima=a,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(r<this.m_Maxima.X)a.Next=this.m_Maxima,a.Prev=null,this.m_Maxima=a;else{for(var c=this.m_Maxima;c.Next!==null&&r>=c.Next.X;)c=c.Next;if(r===c.X)return;a.Next=c.Next,a.Prev=c,c.Next!==null&&(c.Next.Prev=a),c.Next=a}},n.Clipper.prototype.Execute=function(){var r=arguments,a=r.length,c=r[1]instanceof n.PolyTree;if(a===4&&!c){var d=r[0],_=r[1],M=r[2],I=r[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(_),this.m_SubjFillType=M,this.m_ClipFillType=I,this.m_ClipType=d,this.m_UsingPolyTree=!1;try{var k=this.ExecuteInternal();k&&this.BuildResult(_)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return k}else if(a===4&&c){var d=r[0],V=r[1],M=r[2],I=r[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=M,this.m_ClipFillType=I,this.m_ClipType=d,this.m_UsingPolyTree=!0;try{var k=this.ExecuteInternal();k&&this.BuildResult2(V)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return k}else if(a===2&&!c){var d=r[0],_=r[1];return this.Execute(d,_,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(a===2&&c){var d=r[0],V=r[1];return this.Execute(d,V,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(r){if(!(r.FirstLeft===null||r.IsHole!==r.FirstLeft.IsHole&&r.FirstLeft.Pts!==null)){for(var a=r.FirstLeft;a!==null&&(a.IsHole===r.IsHole||a.Pts===null);)a=a.FirstLeft;r.FirstLeft=a}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var r={},a={};if(!this.PopScanbeam(r))return!1;for(this.InsertLocalMinimaIntoAEL(r.v);this.PopScanbeam(a)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(a.v))return!1;this.ProcessEdgesAtTopOfScanbeam(a.v),r.v=a.v,this.InsertLocalMinimaIntoAEL(r.v)}var c,d,_;for(d=0,_=this.m_PolyOuts.length;d<_;d++)c=this.m_PolyOuts[d],!(c.Pts===null||c.IsOpen)&&(c.IsHole^this.ReverseSolution)==this.Area$1(c)>0&&this.ReversePolyPtLinks(c.Pts);for(this.JoinCommonEdges(),d=0,_=this.m_PolyOuts.length;d<_;d++)c=this.m_PolyOuts[d],c.Pts!==null&&(c.IsOpen?this.FixupOutPolyline(c):this.FixupOutPolygon(c));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var r=0,a=this.m_PolyOuts.length;r<a;++r)this.DisposeOutRec(r);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(r,a,c){var d=new n.Join;d.OutPt1=r,d.OutPt2=a,d.OffPt.X=c.X,d.OffPt.Y=c.Y,n.use_xyz&&(d.OffPt.Z=c.Z),this.m_Joins.push(d)},n.Clipper.prototype.AddGhostJoin=function(r,a){var c=new n.Join;c.OutPt1=r,c.OffPt.X=a.X,c.OffPt.Y=a.Y,n.use_xyz&&(c.OffPt.Z=a.Z),this.m_GhostJoins.push(c)},n.Clipper.prototype.SetZ=function(r,a,c){if(this.ZFillFunction!==null){if(r.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(r,a.Bot)?r.Z=a.Bot.Z:n.IntPoint.op_Equality(r,a.Top)?r.Z=a.Top.Z:n.IntPoint.op_Equality(r,c.Bot)?r.Z=c.Bot.Z:n.IntPoint.op_Equality(r,c.Top)?r.Z=c.Top.Z:this.ZFillFunction(a.Bot,a.Top,c.Bot,c.Top,r)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(r){for(var a={},c,d;this.PopLocalMinima(r,a);){c=a.v.LeftBound,d=a.v.RightBound;var _=null;if(c===null?(this.InsertEdgeIntoAEL(d,null),this.SetWindingCount(d),this.IsContributing(d)&&(_=this.AddOutPt(d,d.Bot))):d===null?(this.InsertEdgeIntoAEL(c,null),this.SetWindingCount(c),this.IsContributing(c)&&(_=this.AddOutPt(c,c.Bot)),this.InsertScanbeam(c.Top.Y)):(this.InsertEdgeIntoAEL(c,null),this.InsertEdgeIntoAEL(d,c),this.SetWindingCount(c),d.WindCnt=c.WindCnt,d.WindCnt2=c.WindCnt2,this.IsContributing(c)&&(_=this.AddLocalMinPoly(c,d,c.Bot)),this.InsertScanbeam(c.Top.Y)),d!==null&&(n.ClipperBase.IsHorizontal(d)?(d.NextInLML!==null&&this.InsertScanbeam(d.NextInLML.Top.Y),this.AddEdgeToSEL(d)):this.InsertScanbeam(d.Top.Y)),!(c===null||d===null)){if(_!==null&&n.ClipperBase.IsHorizontal(d)&&this.m_GhostJoins.length>0&&d.WindDelta!==0)for(var M=0,I=this.m_GhostJoins.length;M<I;M++){var k=this.m_GhostJoins[M];this.HorzSegmentsOverlap(k.OutPt1.Pt.X,k.OffPt.X,d.Bot.X,d.Top.X)&&this.AddJoin(k.OutPt1,_,k.OffPt)}if(c.OutIdx>=0&&c.PrevInAEL!==null&&c.PrevInAEL.Curr.X===c.Bot.X&&c.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(c.PrevInAEL.Curr,c.PrevInAEL.Top,c.Curr,c.Top,this.m_UseFullRange)&&c.WindDelta!==0&&c.PrevInAEL.WindDelta!==0){var V=this.AddOutPt(c.PrevInAEL,c.Bot);this.AddJoin(_,V,c.Top)}if(c.NextInAEL!==d){if(d.OutIdx>=0&&d.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(d.PrevInAEL.Curr,d.PrevInAEL.Top,d.Curr,d.Top,this.m_UseFullRange)&&d.WindDelta!==0&&d.PrevInAEL.WindDelta!==0){var V=this.AddOutPt(d.PrevInAEL,d.Bot);this.AddJoin(_,V,d.Top)}var Z=c.NextInAEL;if(Z!==null)for(;Z!==d;)this.IntersectEdges(d,Z,c.Curr),Z=Z.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(r,a){if(this.m_ActiveEdges===null)r.PrevInAEL=null,r.NextInAEL=null,this.m_ActiveEdges=r;else if(a===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,r))r.PrevInAEL=null,r.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=r,this.m_ActiveEdges=r;else{for(a===null&&(a=this.m_ActiveEdges);a.NextInAEL!==null&&!this.E2InsertsBeforeE1(a.NextInAEL,r);)a=a.NextInAEL;r.NextInAEL=a.NextInAEL,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=r),r.PrevInAEL=a,a.NextInAEL=r}},n.Clipper.prototype.E2InsertsBeforeE1=function(r,a){return a.Curr.X===r.Curr.X?a.Top.Y>r.Top.Y?a.Top.X<n.Clipper.TopX(r,a.Top.Y):r.Top.X>n.Clipper.TopX(a,r.Top.Y):a.Curr.X<r.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(r){var a,c;switch(r.PolyTyp===n.PolyType.ptSubject?(a=this.m_SubjFillType,c=this.m_ClipFillType):(a=this.m_ClipFillType,c=this.m_SubjFillType),a){case n.PolyFillType.pftEvenOdd:if(r.WindDelta===0&&r.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(r.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(r.WindCnt!==1)return!1;break;default:if(r.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctUnion:switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}case n.ClipType.ctDifference:if(r.PolyTyp===n.PolyType.ptSubject)switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctXor:if(r.WindDelta===0)switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(r){for(var a=r.PrevInAEL;a!==null&&(a.PolyTyp!==r.PolyTyp||a.WindDelta===0);)a=a.PrevInAEL;if(a===null){var c=r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;r.WindDelta===0?r.WindCnt=c===n.PolyFillType.pftNegative?-1:1:r.WindCnt=r.WindDelta,r.WindCnt2=0,a=this.m_ActiveEdges}else if(r.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)r.WindCnt=1,r.WindCnt2=a.WindCnt2,a=a.NextInAEL;else if(this.IsEvenOddFillType(r)){if(r.WindDelta===0){for(var d=!0,_=a.PrevInAEL;_!==null;)_.PolyTyp===a.PolyTyp&&_.WindDelta!==0&&(d=!d),_=_.PrevInAEL;r.WindCnt=d?0:1}else r.WindCnt=r.WindDelta;r.WindCnt2=a.WindCnt2,a=a.NextInAEL}else a.WindCnt*a.WindDelta<0?Math.abs(a.WindCnt)>1?a.WindDelta*r.WindDelta<0?r.WindCnt=a.WindCnt:r.WindCnt=a.WindCnt+r.WindDelta:r.WindCnt=r.WindDelta===0?1:r.WindDelta:r.WindDelta===0?r.WindCnt=a.WindCnt<0?a.WindCnt-1:a.WindCnt+1:a.WindDelta*r.WindDelta<0?r.WindCnt=a.WindCnt:r.WindCnt=a.WindCnt+r.WindDelta,r.WindCnt2=a.WindCnt2,a=a.NextInAEL;if(this.IsEvenOddAltFillType(r))for(;a!==r;)a.WindDelta!==0&&(r.WindCnt2=r.WindCnt2===0?1:0),a=a.NextInAEL;else for(;a!==r;)r.WindCnt2+=a.WindDelta,a=a.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(r){this.m_SortedEdges===null?(this.m_SortedEdges=r,r.PrevInSEL=null,r.NextInSEL=null):(r.NextInSEL=this.m_SortedEdges,r.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=r,this.m_SortedEdges=r)},n.Clipper.prototype.PopEdgeFromSEL=function(r){if(r.v=this.m_SortedEdges,r.v===null)return!1;var a=r.v;return this.m_SortedEdges=r.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),a.NextInSEL=null,a.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var r=this.m_ActiveEdges;for(this.m_SortedEdges=r;r!==null;)r.PrevInSEL=r.PrevInAEL,r.NextInSEL=r.NextInAEL,r=r.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(r,a){if(!(r.NextInSEL===null&&r.PrevInSEL===null)&&!(a.NextInSEL===null&&a.PrevInSEL===null)){if(r.NextInSEL===a){var c=a.NextInSEL;c!==null&&(c.PrevInSEL=r);var d=r.PrevInSEL;d!==null&&(d.NextInSEL=a),a.PrevInSEL=d,a.NextInSEL=r,r.PrevInSEL=a,r.NextInSEL=c}else if(a.NextInSEL===r){var c=r.NextInSEL;c!==null&&(c.PrevInSEL=a);var d=a.PrevInSEL;d!==null&&(d.NextInSEL=r),r.PrevInSEL=d,r.NextInSEL=a,a.PrevInSEL=r,a.NextInSEL=c}else{var c=r.NextInSEL,d=r.PrevInSEL;r.NextInSEL=a.NextInSEL,r.NextInSEL!==null&&(r.NextInSEL.PrevInSEL=r),r.PrevInSEL=a.PrevInSEL,r.PrevInSEL!==null&&(r.PrevInSEL.NextInSEL=r),a.NextInSEL=c,a.NextInSEL!==null&&(a.NextInSEL.PrevInSEL=a),a.PrevInSEL=d,a.PrevInSEL!==null&&(a.PrevInSEL.NextInSEL=a)}r.PrevInSEL===null?this.m_SortedEdges=r:a.PrevInSEL===null&&(this.m_SortedEdges=a)}},n.Clipper.prototype.AddLocalMaxPoly=function(r,a,c){this.AddOutPt(r,c),a.WindDelta===0&&this.AddOutPt(a,c),r.OutIdx===a.OutIdx?(r.OutIdx=-1,a.OutIdx=-1):r.OutIdx<a.OutIdx?this.AppendPolygon(r,a):this.AppendPolygon(a,r)},n.Clipper.prototype.AddLocalMinPoly=function(r,a,c){var d,_,M;if(n.ClipperBase.IsHorizontal(a)||r.Dx>a.Dx?(d=this.AddOutPt(r,c),a.OutIdx=r.OutIdx,r.Side=n.EdgeSide.esLeft,a.Side=n.EdgeSide.esRight,_=r,_.PrevInAEL===a?M=a.PrevInAEL:M=_.PrevInAEL):(d=this.AddOutPt(a,c),r.OutIdx=a.OutIdx,r.Side=n.EdgeSide.esRight,a.Side=n.EdgeSide.esLeft,_=a,_.PrevInAEL===r?M=r.PrevInAEL:M=_.PrevInAEL),M!==null&&M.OutIdx>=0&&M.Top.Y<c.Y&&_.Top.Y<c.Y){var I=n.Clipper.TopX(M,c.Y),k=n.Clipper.TopX(_,c.Y);if(I===k&&_.WindDelta!==0&&M.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(I,c.Y),M.Top,new n.IntPoint2(k,c.Y),_.Top,this.m_UseFullRange)){var V=this.AddOutPt(M,c);this.AddJoin(d,V,_.Top)}}return d},n.Clipper.prototype.AddOutPt=function(r,a){if(r.OutIdx<0){var c=this.CreateOutRec();c.IsOpen=r.WindDelta===0;var d=new n.OutPt;return c.Pts=d,d.Idx=c.Idx,d.Pt.X=a.X,d.Pt.Y=a.Y,n.use_xyz&&(d.Pt.Z=a.Z),d.Next=d,d.Prev=d,c.IsOpen||this.SetHoleState(r,c),r.OutIdx=c.Idx,d}else{var c=this.m_PolyOuts[r.OutIdx],_=c.Pts,M=r.Side===n.EdgeSide.esLeft;if(M&&n.IntPoint.op_Equality(a,_.Pt))return _;if(!M&&n.IntPoint.op_Equality(a,_.Prev.Pt))return _.Prev;var d=new n.OutPt;return d.Idx=c.Idx,d.Pt.X=a.X,d.Pt.Y=a.Y,n.use_xyz&&(d.Pt.Z=a.Z),d.Next=_,d.Prev=_.Prev,d.Prev.Next=d,_.Prev=d,M&&(c.Pts=d),d}},n.Clipper.prototype.GetLastOutPt=function(r){var a=this.m_PolyOuts[r.OutIdx];return r.Side===n.EdgeSide.esLeft?a.Pts:a.Pts.Prev},n.Clipper.prototype.SwapPoints=function(r,a){var c=new n.IntPoint1(r.Value);r.Value.X=a.Value.X,r.Value.Y=a.Value.Y,n.use_xyz&&(r.Value.Z=a.Value.Z),a.Value.X=c.X,a.Value.Y=c.Y,n.use_xyz&&(a.Value.Z=c.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(r,a,c,d){var _;return r>a&&(_=r,r=a,a=_),c>d&&(_=c,c=d,d=_),r<d&&c<a},n.Clipper.prototype.SetHoleState=function(r,a){for(var c=r.PrevInAEL,d=null;c!==null;)c.OutIdx>=0&&c.WindDelta!==0&&(d===null?d=c:d.OutIdx===c.OutIdx&&(d=null)),c=c.PrevInAEL;d===null?(a.FirstLeft=null,a.IsHole=!1):(a.FirstLeft=this.m_PolyOuts[d.OutIdx],a.IsHole=!a.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(r,a){return r.Y===a.Y?n.ClipperBase.horizontal:(a.X-r.X)/(a.Y-r.Y)},n.Clipper.prototype.FirstIsBottomPt=function(r,a){for(var c=r.Prev;n.IntPoint.op_Equality(c.Pt,r.Pt)&&c!==r;)c=c.Prev;var d=Math.abs(this.GetDx(r.Pt,c.Pt));for(c=r.Next;n.IntPoint.op_Equality(c.Pt,r.Pt)&&c!==r;)c=c.Next;var _=Math.abs(this.GetDx(r.Pt,c.Pt));for(c=a.Prev;n.IntPoint.op_Equality(c.Pt,a.Pt)&&c!==a;)c=c.Prev;var M=Math.abs(this.GetDx(a.Pt,c.Pt));for(c=a.Next;n.IntPoint.op_Equality(c.Pt,a.Pt)&&c!==a;)c=c.Next;var I=Math.abs(this.GetDx(a.Pt,c.Pt));return Math.max(d,_)===Math.max(M,I)&&Math.min(d,_)===Math.min(M,I)?this.Area(r)>0:d>=M&&d>=I||_>=M&&_>=I},n.Clipper.prototype.GetBottomPt=function(r){for(var a=null,c=r.Next;c!==r;)c.Pt.Y>r.Pt.Y?(r=c,a=null):c.Pt.Y===r.Pt.Y&&c.Pt.X<=r.Pt.X&&(c.Pt.X<r.Pt.X?(a=null,r=c):c.Next!==r&&c.Prev!==r&&(a=c)),c=c.Next;if(a!==null)for(;a!==c;)for(this.FirstIsBottomPt(c,a)||(r=a),a=a.Next;n.IntPoint.op_Inequality(a.Pt,r.Pt);)a=a.Next;return r},n.Clipper.prototype.GetLowermostRec=function(r,a){r.BottomPt===null&&(r.BottomPt=this.GetBottomPt(r.Pts)),a.BottomPt===null&&(a.BottomPt=this.GetBottomPt(a.Pts));var c=r.BottomPt,d=a.BottomPt;return c.Pt.Y>d.Pt.Y?r:c.Pt.Y<d.Pt.Y?a:c.Pt.X<d.Pt.X?r:c.Pt.X>d.Pt.X||c.Next===c?a:d.Next===d||this.FirstIsBottomPt(c,d)?r:a},n.Clipper.prototype.OutRec1RightOfOutRec2=function(r,a){do if(r=r.FirstLeft,r===a)return!0;while(r!==null);return!1},n.Clipper.prototype.GetOutRec=function(r){for(var a=this.m_PolyOuts[r];a!==this.m_PolyOuts[a.Idx];)a=this.m_PolyOuts[a.Idx];return a},n.Clipper.prototype.AppendPolygon=function(r,a){var c=this.m_PolyOuts[r.OutIdx],d=this.m_PolyOuts[a.OutIdx],_;this.OutRec1RightOfOutRec2(c,d)?_=d:this.OutRec1RightOfOutRec2(d,c)?_=c:_=this.GetLowermostRec(c,d);var M=c.Pts,I=M.Prev,k=d.Pts,V=k.Prev;r.Side===n.EdgeSide.esLeft?a.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks(k),k.Next=M,M.Prev=k,I.Next=V,V.Prev=I,c.Pts=V):(V.Next=M,M.Prev=V,k.Prev=I,I.Next=k,c.Pts=k):a.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks(k),I.Next=V,V.Prev=I,k.Next=M,M.Prev=k):(I.Next=k,k.Prev=I,M.Prev=V,V.Next=M),c.BottomPt=null,_===d&&(d.FirstLeft!==c&&(c.FirstLeft=d.FirstLeft),c.IsHole=d.IsHole),d.Pts=null,d.BottomPt=null,d.FirstLeft=c;var Z=r.OutIdx,ht=a.OutIdx;r.OutIdx=-1,a.OutIdx=-1;for(var ct=this.m_ActiveEdges;ct!==null;){if(ct.OutIdx===ht){ct.OutIdx=Z,ct.Side=r.Side;break}ct=ct.NextInAEL}d.Idx=c.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(r){if(r!==null){var a,c;a=r;do c=a.Next,a.Next=a.Prev,a.Prev=c,a=c;while(a!==r)}},n.Clipper.SwapSides=function(r,a){var c=r.Side;r.Side=a.Side,a.Side=c},n.Clipper.SwapPolyIndexes=function(r,a){var c=r.OutIdx;r.OutIdx=a.OutIdx,a.OutIdx=c},n.Clipper.prototype.IntersectEdges=function(r,a,c){var d=r.OutIdx>=0,_=a.OutIdx>=0;if(n.use_xyz&&this.SetZ(c,r,a),n.use_lines&&(r.WindDelta===0||a.WindDelta===0)){if(r.WindDelta===0&&a.WindDelta===0)return;r.PolyTyp===a.PolyTyp&&r.WindDelta!==a.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?r.WindDelta===0?_&&(this.AddOutPt(r,c),d&&(r.OutIdx=-1)):d&&(this.AddOutPt(a,c),_&&(a.OutIdx=-1)):r.PolyTyp!==a.PolyTyp&&(r.WindDelta===0&&Math.abs(a.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||a.WindCnt2===0)?(this.AddOutPt(r,c),d&&(r.OutIdx=-1)):a.WindDelta===0&&Math.abs(r.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||r.WindCnt2===0)&&(this.AddOutPt(a,c),_&&(a.OutIdx=-1)));return}if(r.PolyTyp===a.PolyTyp)if(this.IsEvenOddFillType(r)){var M=r.WindCnt;r.WindCnt=a.WindCnt,a.WindCnt=M}else r.WindCnt+a.WindDelta===0?r.WindCnt=-r.WindCnt:r.WindCnt+=a.WindDelta,a.WindCnt-r.WindDelta===0?a.WindCnt=-a.WindCnt:a.WindCnt-=r.WindDelta;else this.IsEvenOddFillType(a)?r.WindCnt2=r.WindCnt2===0?1:0:r.WindCnt2+=a.WindDelta,this.IsEvenOddFillType(r)?a.WindCnt2=a.WindCnt2===0?1:0:a.WindCnt2-=r.WindDelta;var I,k,V,Z;r.PolyTyp===n.PolyType.ptSubject?(I=this.m_SubjFillType,V=this.m_ClipFillType):(I=this.m_ClipFillType,V=this.m_SubjFillType),a.PolyTyp===n.PolyType.ptSubject?(k=this.m_SubjFillType,Z=this.m_ClipFillType):(k=this.m_ClipFillType,Z=this.m_SubjFillType);var ht,ct;switch(I){case n.PolyFillType.pftPositive:ht=r.WindCnt;break;case n.PolyFillType.pftNegative:ht=-r.WindCnt;break;default:ht=Math.abs(r.WindCnt);break}switch(k){case n.PolyFillType.pftPositive:ct=a.WindCnt;break;case n.PolyFillType.pftNegative:ct=-a.WindCnt;break;default:ct=Math.abs(a.WindCnt);break}if(d&&_)ht!==0&&ht!==1||ct!==0&&ct!==1||r.PolyTyp!==a.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(r,a,c):(this.AddOutPt(r,c),this.AddOutPt(a,c),n.Clipper.SwapSides(r,a),n.Clipper.SwapPolyIndexes(r,a));else if(d)(ct===0||ct===1)&&(this.AddOutPt(r,c),n.Clipper.SwapSides(r,a),n.Clipper.SwapPolyIndexes(r,a));else if(_)(ht===0||ht===1)&&(this.AddOutPt(a,c),n.Clipper.SwapSides(r,a),n.Clipper.SwapPolyIndexes(r,a));else if((ht===0||ht===1)&&(ct===0||ct===1)){var gt,Wt;switch(V){case n.PolyFillType.pftPositive:gt=r.WindCnt2;break;case n.PolyFillType.pftNegative:gt=-r.WindCnt2;break;default:gt=Math.abs(r.WindCnt2);break}switch(Z){case n.PolyFillType.pftPositive:Wt=a.WindCnt2;break;case n.PolyFillType.pftNegative:Wt=-a.WindCnt2;break;default:Wt=Math.abs(a.WindCnt2);break}if(r.PolyTyp!==a.PolyTyp)this.AddLocalMinPoly(r,a,c);else if(ht===1&&ct===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:gt>0&&Wt>0&&this.AddLocalMinPoly(r,a,c);break;case n.ClipType.ctUnion:gt<=0&&Wt<=0&&this.AddLocalMinPoly(r,a,c);break;case n.ClipType.ctDifference:(r.PolyTyp===n.PolyType.ptClip&&gt>0&&Wt>0||r.PolyTyp===n.PolyType.ptSubject&&gt<=0&&Wt<=0)&&this.AddLocalMinPoly(r,a,c);break;case n.ClipType.ctXor:this.AddLocalMinPoly(r,a,c);break}else n.Clipper.SwapSides(r,a)}},n.Clipper.prototype.DeleteFromSEL=function(r){var a=r.PrevInSEL,c=r.NextInSEL;a===null&&c===null&&r!==this.m_SortedEdges||(a!==null?a.NextInSEL=c:this.m_SortedEdges=c,c!==null&&(c.PrevInSEL=a),r.NextInSEL=null,r.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var r={};this.PopEdgeFromSEL(r);)this.ProcessHorizontal(r.v)},n.Clipper.prototype.GetHorzDirection=function(r,a){r.Bot.X<r.Top.X?(a.Left=r.Bot.X,a.Right=r.Top.X,a.Dir=n.Direction.dLeftToRight):(a.Left=r.Top.X,a.Right=r.Bot.X,a.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(r){var a={Dir:null,Left:null,Right:null};this.GetHorzDirection(r,a);for(var c=a.Dir,d=a.Left,_=a.Right,M=r.WindDelta===0,I=r,k=null;I.NextInLML!==null&&n.ClipperBase.IsHorizontal(I.NextInLML);)I=I.NextInLML;I.NextInLML===null&&(k=this.GetMaximaPair(I));var V=this.m_Maxima;if(V!==null)if(c===n.Direction.dLeftToRight){for(;V!==null&&V.X<=r.Bot.X;)V=V.Next;V!==null&&V.X>=I.Top.X&&(V=null)}else{for(;V.Next!==null&&V.Next.X<r.Bot.X;)V=V.Next;V.X<=I.Top.X&&(V=null)}for(var Z=null;;){for(var ht=r===I,ct=this.GetNextInAEL(r,c);ct!==null;){if(V!==null)if(c===n.Direction.dLeftToRight)for(;V!==null&&V.X<ct.Curr.X;)r.OutIdx>=0&&!M&&this.AddOutPt(r,new n.IntPoint2(V.X,r.Bot.Y)),V=V.Next;else for(;V!==null&&V.X>ct.Curr.X;)r.OutIdx>=0&&!M&&this.AddOutPt(r,new n.IntPoint2(V.X,r.Bot.Y)),V=V.Prev;if(c===n.Direction.dLeftToRight&&ct.Curr.X>_||c===n.Direction.dRightToLeft&&ct.Curr.X<d||ct.Curr.X===r.Top.X&&r.NextInLML!==null&&ct.Dx<r.NextInLML.Dx)break;if(r.OutIdx>=0&&!M){n.use_xyz&&(c===n.Direction.dLeftToRight?this.SetZ(ct.Curr,r,ct):this.SetZ(ct.Curr,ct,r)),Z=this.AddOutPt(r,ct.Curr);for(var gt=this.m_SortedEdges;gt!==null;){if(gt.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,gt.Bot.X,gt.Top.X)){var Wt=this.GetLastOutPt(gt);this.AddJoin(Wt,Z,gt.Top)}gt=gt.NextInSEL}this.AddGhostJoin(Z,r.Bot)}if(ct===k&&ht){r.OutIdx>=0&&this.AddLocalMaxPoly(r,k,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(k);return}if(c===n.Direction.dLeftToRight){var re=new n.IntPoint2(ct.Curr.X,r.Curr.Y);this.IntersectEdges(r,ct,re)}else{var re=new n.IntPoint2(ct.Curr.X,r.Curr.Y);this.IntersectEdges(ct,r,re)}var ce=this.GetNextInAEL(ct,c);this.SwapPositionsInAEL(r,ct),ct=ce}if(r.NextInLML===null||!n.ClipperBase.IsHorizontal(r.NextInLML))break;r=this.UpdateEdgeIntoAEL(r),r.OutIdx>=0&&this.AddOutPt(r,r.Bot),a={Dir:c,Left:d,Right:_},this.GetHorzDirection(r,a),c=a.Dir,d=a.Left,_=a.Right}if(r.OutIdx>=0&&Z===null){Z=this.GetLastOutPt(r);for(var gt=this.m_SortedEdges;gt!==null;){if(gt.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,gt.Bot.X,gt.Top.X)){var Wt=this.GetLastOutPt(gt);this.AddJoin(Wt,Z,gt.Top)}gt=gt.NextInSEL}this.AddGhostJoin(Z,r.Top)}if(r.NextInLML!==null)if(r.OutIdx>=0){if(Z=this.AddOutPt(r,r.Top),r=this.UpdateEdgeIntoAEL(r),r.WindDelta===0)return;var Ae=r.PrevInAEL,ce=r.NextInAEL;if(Ae!==null&&Ae.Curr.X===r.Bot.X&&Ae.Curr.Y===r.Bot.Y&&Ae.WindDelta===0&&Ae.OutIdx>=0&&Ae.Curr.Y>Ae.Top.Y&&n.ClipperBase.SlopesEqual3(r,Ae,this.m_UseFullRange)){var Wt=this.AddOutPt(Ae,r.Bot);this.AddJoin(Z,Wt,r.Top)}else if(ce!==null&&ce.Curr.X===r.Bot.X&&ce.Curr.Y===r.Bot.Y&&ce.WindDelta!==0&&ce.OutIdx>=0&&ce.Curr.Y>ce.Top.Y&&n.ClipperBase.SlopesEqual3(r,ce,this.m_UseFullRange)){var Wt=this.AddOutPt(ce,r.Bot);this.AddJoin(Z,Wt,r.Top)}}else r=this.UpdateEdgeIntoAEL(r);else r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r)},n.Clipper.prototype.GetNextInAEL=function(r,a){return a===n.Direction.dLeftToRight?r.NextInAEL:r.PrevInAEL},n.Clipper.prototype.IsMinima=function(r){return r!==null&&r.Prev.NextInLML!==r&&r.Next.NextInLML!==r},n.Clipper.prototype.IsMaxima=function(r,a){return r!==null&&r.Top.Y===a&&r.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(r,a){return r.Top.Y===a&&r.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(r){return n.IntPoint.op_Equality(r.Next.Top,r.Top)&&r.Next.NextInLML===null?r.Next:n.IntPoint.op_Equality(r.Prev.Top,r.Top)&&r.Prev.NextInLML===null?r.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(r){var a=this.GetMaximaPair(r);return a===null||a.OutIdx===n.ClipperBase.Skip||a.NextInAEL===a.PrevInAEL&&!n.ClipperBase.IsHorizontal(a)?null:a},n.Clipper.prototype.ProcessIntersections=function(r){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(r),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(r){if(this.m_ActiveEdges!==null){var a=this.m_ActiveEdges;for(this.m_SortedEdges=a;a!==null;)a.PrevInSEL=a.PrevInAEL,a.NextInSEL=a.NextInAEL,a.Curr.X=n.Clipper.TopX(a,r),a=a.NextInAEL;for(var c=!0;c&&this.m_SortedEdges!==null;){for(c=!1,a=this.m_SortedEdges;a.NextInSEL!==null;){var d=a.NextInSEL,_=new n.IntPoint0;if(a.Curr.X>d.Curr.X){this.IntersectPoint(a,d,_),_.Y<r&&(_=new n.IntPoint2(n.Clipper.TopX(a,r),r));var M=new n.IntersectNode;M.Edge1=a,M.Edge2=d,M.Pt.X=_.X,M.Pt.Y=_.Y,n.use_xyz&&(M.Pt.Z=_.Z),this.m_IntersectList.push(M),this.SwapPositionsInSEL(a,d),c=!0}else a=d}if(a.PrevInSEL!==null)a.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(r){return r.Edge1.NextInSEL===r.Edge2||r.Edge1.PrevInSEL===r.Edge2},n.Clipper.IntersectNodeSort=function(r,a){return a.Pt.Y-r.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var r=this.m_IntersectList.length,a=0;a<r;a++){if(!this.EdgesAdjacent(this.m_IntersectList[a])){for(var c=a+1;c<r&&!this.EdgesAdjacent(this.m_IntersectList[c]);)c++;if(c===r)return!1;var d=this.m_IntersectList[a];this.m_IntersectList[a]=this.m_IntersectList[c],this.m_IntersectList[c]=d}this.SwapPositionsInSEL(this.m_IntersectList[a].Edge1,this.m_IntersectList[a].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var r=0,a=this.m_IntersectList.length;r<a;r++){var c=this.m_IntersectList[r];this.IntersectEdges(c.Edge1,c.Edge2,c.Pt),this.SwapPositionsInAEL(c.Edge1,c.Edge2)}this.m_IntersectList.length=0};var kt=function(r){return r<0?Math.ceil(r-.5):Math.round(r)},ye=function(r){return r<0?Math.ceil(r-.5):Math.floor(r+.5)},Re=function(r){return r<0?-Math.round(Math.abs(r)):Math.round(r)},Ee=function(r){return r<0?(r-=.5,r<-2147483648?Math.ceil(r):r|0):(r+=.5,r>2147483647?Math.floor(r):r|0)};s.msie?n.Clipper.Round=kt:s.chromium?n.Clipper.Round=Re:s.safari?n.Clipper.Round=Ee:n.Clipper.Round=ye,n.Clipper.TopX=function(r,a){return a===r.Top.Y?r.Top.X:r.Bot.X+n.Clipper.Round(r.Dx*(a-r.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(r,a,c){c.X=0,c.Y=0;var d,_;if(r.Dx===a.Dx){c.Y=r.Curr.Y,c.X=n.Clipper.TopX(r,c.Y);return}if(r.Delta.X===0)c.X=r.Bot.X,n.ClipperBase.IsHorizontal(a)?c.Y=a.Bot.Y:(_=a.Bot.Y-a.Bot.X/a.Dx,c.Y=n.Clipper.Round(c.X/a.Dx+_));else if(a.Delta.X===0)c.X=a.Bot.X,n.ClipperBase.IsHorizontal(r)?c.Y=r.Bot.Y:(d=r.Bot.Y-r.Bot.X/r.Dx,c.Y=n.Clipper.Round(c.X/r.Dx+d));else{d=r.Bot.X-r.Bot.Y*r.Dx,_=a.Bot.X-a.Bot.Y*a.Dx;var M=(_-d)/(r.Dx-a.Dx);c.Y=n.Clipper.Round(M),Math.abs(r.Dx)<Math.abs(a.Dx)?c.X=n.Clipper.Round(r.Dx*M+d):c.X=n.Clipper.Round(a.Dx*M+_)}if(c.Y<r.Top.Y||c.Y<a.Top.Y){if(r.Top.Y>a.Top.Y)return c.Y=r.Top.Y,c.X=n.Clipper.TopX(a,r.Top.Y),c.X<r.Top.X;c.Y=a.Top.Y,Math.abs(r.Dx)<Math.abs(a.Dx)?c.X=n.Clipper.TopX(r,c.Y):c.X=n.Clipper.TopX(a,c.Y)}c.Y>r.Curr.Y&&(c.Y=r.Curr.Y,Math.abs(r.Dx)>Math.abs(a.Dx)?c.X=n.Clipper.TopX(a,c.Y):c.X=n.Clipper.TopX(r,c.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(r){for(var a=this.m_ActiveEdges;a!==null;){var c=this.IsMaxima(a,r);if(c){var d=this.GetMaximaPairEx(a);c=d===null||!n.ClipperBase.IsHorizontal(d)}if(c){this.StrictlySimple&&this.InsertMaxima(a.Top.X);var _=a.PrevInAEL;this.DoMaxima(a),_===null?a=this.m_ActiveEdges:a=_.NextInAEL}else{if(this.IsIntermediate(a,r)&&n.ClipperBase.IsHorizontal(a.NextInLML)?(a=this.UpdateEdgeIntoAEL(a),a.OutIdx>=0&&this.AddOutPt(a,a.Bot),this.AddEdgeToSEL(a)):(a.Curr.X=n.Clipper.TopX(a,r),a.Curr.Y=r),n.use_xyz&&(a.Top.Y===r?a.Curr.Z=a.Top.Z:a.Bot.Y===r?a.Curr.Z=a.Bot.Z:a.Curr.Z=0),this.StrictlySimple){var _=a.PrevInAEL;if(a.OutIdx>=0&&a.WindDelta!==0&&_!==null&&_.OutIdx>=0&&_.Curr.X===a.Curr.X&&_.WindDelta!==0){var M=new n.IntPoint1(a.Curr);n.use_xyz&&this.SetZ(M,_,a);var I=this.AddOutPt(_,M),k=this.AddOutPt(a,M);this.AddJoin(I,k,M)}}a=a.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,a=this.m_ActiveEdges;a!==null;){if(this.IsIntermediate(a,r)){var I=null;a.OutIdx>=0&&(I=this.AddOutPt(a,a.Top)),a=this.UpdateEdgeIntoAEL(a);var _=a.PrevInAEL,V=a.NextInAEL;if(_!==null&&_.Curr.X===a.Bot.X&&_.Curr.Y===a.Bot.Y&&I!==null&&_.OutIdx>=0&&_.Curr.Y===_.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,_.Curr,_.Top,this.m_UseFullRange)&&a.WindDelta!==0&&_.WindDelta!==0){var k=this.AddOutPt(ePrev2,a.Bot);this.AddJoin(I,k,a.Top)}else if(V!==null&&V.Curr.X===a.Bot.X&&V.Curr.Y===a.Bot.Y&&I!==null&&V.OutIdx>=0&&V.Curr.Y===V.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,V.Curr,V.Top,this.m_UseFullRange)&&a.WindDelta!==0&&V.WindDelta!==0){var k=this.AddOutPt(V,a.Bot);this.AddJoin(I,k,a.Top)}}a=a.NextInAEL}},n.Clipper.prototype.DoMaxima=function(r){var a=this.GetMaximaPairEx(r);if(a===null){r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r);return}for(var c=r.NextInAEL;c!==null&&c!==a;)this.IntersectEdges(r,c,r.Top),this.SwapPositionsInAEL(r,c),c=r.NextInAEL;r.OutIdx===-1&&a.OutIdx===-1?(this.DeleteFromAEL(r),this.DeleteFromAEL(a)):r.OutIdx>=0&&a.OutIdx>=0?(r.OutIdx>=0&&this.AddLocalMaxPoly(r,a,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(a)):n.use_lines&&r.WindDelta===0?(r.OutIdx>=0&&(this.AddOutPt(r,r.Top),r.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(r),a.OutIdx>=0&&(this.AddOutPt(a,r.Top),a.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(a)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(r){for(var a=0,c=r.length;a<c;a++)r[a].reverse()},n.Clipper.Orientation=function(r){return n.Clipper.Area(r)>=0},n.Clipper.prototype.PointCount=function(r){if(r===null)return 0;var a=0,c=r;do a++,c=c.Next;while(c!==r);return a},n.Clipper.prototype.BuildResult=function(r){n.Clear(r);for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var d=this.m_PolyOuts[a];if(d.Pts!==null){var _=d.Pts.Prev,M=this.PointCount(_);if(!(M<2)){for(var I=new Array(M),k=0;k<M;k++)I[k]=_.Pt,_=_.Prev;r.push(I)}}}},n.Clipper.prototype.BuildResult2=function(r){r.Clear();for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var d=this.m_PolyOuts[a],_=this.PointCount(d.Pts);if(!(d.IsOpen&&_<2||!d.IsOpen&&_<3)){this.FixHoleLinkage(d);var M=new n.PolyNode;r.m_AllPolys.push(M),d.PolyNode=M,M.m_polygon.length=_;for(var I=d.Pts.Prev,k=0;k<_;k++)M.m_polygon[k]=I.Pt,I=I.Prev}}for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var d=this.m_PolyOuts[a];d.PolyNode!==null&&(d.IsOpen?(d.PolyNode.IsOpen=!0,r.AddChild(d.PolyNode)):d.FirstLeft!==null&&d.FirstLeft.PolyNode!==null?d.FirstLeft.PolyNode.AddChild(d.PolyNode):r.AddChild(d.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(r){for(var a=r.Pts,c=a.Prev;a!==c;)if(a=a.Next,n.IntPoint.op_Equality(a.Pt,a.Prev.Pt)){a===c&&(c=a.Prev);var d=a.Prev;d.Next=a.Next,a.Next.Prev=d,a=d}a===a.Prev&&(r.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(r){var a=null;r.BottomPt=null;for(var c=r.Pts,d=this.PreserveCollinear||this.StrictlySimple;;){if(c.Prev===c||c.Prev===c.Next){r.Pts=null;return}if(n.IntPoint.op_Equality(c.Pt,c.Next.Pt)||n.IntPoint.op_Equality(c.Pt,c.Prev.Pt)||n.ClipperBase.SlopesEqual4(c.Prev.Pt,c.Pt,c.Next.Pt,this.m_UseFullRange)&&(!d||!this.Pt2IsBetweenPt1AndPt3(c.Prev.Pt,c.Pt,c.Next.Pt)))a=null,c.Prev.Next=c.Next,c.Next.Prev=c.Prev,c=c.Prev;else{if(c===a)break;a===null&&(a=c),c=c.Next}}r.Pts=c},n.Clipper.prototype.DupOutPt=function(r,a){var c=new n.OutPt;return c.Pt.X=r.Pt.X,c.Pt.Y=r.Pt.Y,n.use_xyz&&(c.Pt.Z=r.Pt.Z),c.Idx=r.Idx,a?(c.Next=r.Next,c.Prev=r,r.Next.Prev=c,r.Next=c):(c.Prev=r.Prev,c.Next=r,r.Prev.Next=c,r.Prev=c),c},n.Clipper.prototype.GetOverlap=function(r,a,c,d,_){return r<a?c<d?(_.Left=Math.max(r,c),_.Right=Math.min(a,d)):(_.Left=Math.max(r,d),_.Right=Math.min(a,c)):c<d?(_.Left=Math.max(a,c),_.Right=Math.min(r,d)):(_.Left=Math.max(a,d),_.Right=Math.min(r,c)),_.Left<_.Right},n.Clipper.prototype.JoinHorz=function(r,a,c,d,_,M){var I=r.Pt.X>a.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,k=c.Pt.X>d.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(I===k)return!1;if(I===n.Direction.dLeftToRight){for(;r.Next.Pt.X<=_.X&&r.Next.Pt.X>=r.Pt.X&&r.Next.Pt.Y===_.Y;)r=r.Next;M&&r.Pt.X!==_.X&&(r=r.Next),a=this.DupOutPt(r,!M),n.IntPoint.op_Inequality(a.Pt,_)&&(r=a,r.Pt.X=_.X,r.Pt.Y=_.Y,n.use_xyz&&(r.Pt.Z=_.Z),a=this.DupOutPt(r,!M))}else{for(;r.Next.Pt.X>=_.X&&r.Next.Pt.X<=r.Pt.X&&r.Next.Pt.Y===_.Y;)r=r.Next;!M&&r.Pt.X!==_.X&&(r=r.Next),a=this.DupOutPt(r,M),n.IntPoint.op_Inequality(a.Pt,_)&&(r=a,r.Pt.X=_.X,r.Pt.Y=_.Y,n.use_xyz&&(r.Pt.Z=_.Z),a=this.DupOutPt(r,M))}if(k===n.Direction.dLeftToRight){for(;c.Next.Pt.X<=_.X&&c.Next.Pt.X>=c.Pt.X&&c.Next.Pt.Y===_.Y;)c=c.Next;M&&c.Pt.X!==_.X&&(c=c.Next),d=this.DupOutPt(c,!M),n.IntPoint.op_Inequality(d.Pt,_)&&(c=d,c.Pt.X=_.X,c.Pt.Y=_.Y,n.use_xyz&&(c.Pt.Z=_.Z),d=this.DupOutPt(c,!M))}else{for(;c.Next.Pt.X>=_.X&&c.Next.Pt.X<=c.Pt.X&&c.Next.Pt.Y===_.Y;)c=c.Next;!M&&c.Pt.X!==_.X&&(c=c.Next),d=this.DupOutPt(c,M),n.IntPoint.op_Inequality(d.Pt,_)&&(c=d,c.Pt.X=_.X,c.Pt.Y=_.Y,n.use_xyz&&(c.Pt.Z=_.Z),d=this.DupOutPt(c,M))}return I===n.Direction.dLeftToRight===M?(r.Prev=c,c.Next=r,a.Next=d,d.Prev=a):(r.Next=c,c.Prev=r,a.Prev=d,d.Next=a),!0},n.Clipper.prototype.JoinPoints=function(r,a,c){var d=r.OutPt1,_=new n.OutPt,M=r.OutPt2,I=new n.OutPt,k=r.OutPt1.Pt.Y===r.OffPt.Y;if(k&&n.IntPoint.op_Equality(r.OffPt,r.OutPt1.Pt)&&n.IntPoint.op_Equality(r.OffPt,r.OutPt2.Pt)){if(a!==c)return!1;for(_=r.OutPt1.Next;_!==d&&n.IntPoint.op_Equality(_.Pt,r.OffPt);)_=_.Next;var V=_.Pt.Y>r.OffPt.Y;for(I=r.OutPt2.Next;I!==M&&n.IntPoint.op_Equality(I.Pt,r.OffPt);)I=I.Next;var Z=I.Pt.Y>r.OffPt.Y;return V===Z?!1:V?(_=this.DupOutPt(d,!1),I=this.DupOutPt(M,!0),d.Prev=M,M.Next=d,_.Next=I,I.Prev=_,r.OutPt1=d,r.OutPt2=_,!0):(_=this.DupOutPt(d,!0),I=this.DupOutPt(M,!1),d.Next=M,M.Prev=d,_.Prev=I,I.Next=_,r.OutPt1=d,r.OutPt2=_,!0)}else if(k){for(_=d;d.Prev.Pt.Y===d.Pt.Y&&d.Prev!==_&&d.Prev!==M;)d=d.Prev;for(;_.Next.Pt.Y===_.Pt.Y&&_.Next!==d&&_.Next!==M;)_=_.Next;if(_.Next===d||_.Next===M)return!1;for(I=M;M.Prev.Pt.Y===M.Pt.Y&&M.Prev!==I&&M.Prev!==_;)M=M.Prev;for(;I.Next.Pt.Y===I.Pt.Y&&I.Next!==M&&I.Next!==d;)I=I.Next;if(I.Next===M||I.Next===d)return!1;var ht={Left:null,Right:null};if(!this.GetOverlap(d.Pt.X,_.Pt.X,M.Pt.X,I.Pt.X,ht))return!1;var ct=ht.Left,gt=ht.Right,Wt=new n.IntPoint0,re;return d.Pt.X>=ct&&d.Pt.X<=gt?(Wt.X=d.Pt.X,Wt.Y=d.Pt.Y,n.use_xyz&&(Wt.Z=d.Pt.Z),re=d.Pt.X>_.Pt.X):M.Pt.X>=ct&&M.Pt.X<=gt?(Wt.X=M.Pt.X,Wt.Y=M.Pt.Y,n.use_xyz&&(Wt.Z=M.Pt.Z),re=M.Pt.X>I.Pt.X):_.Pt.X>=ct&&_.Pt.X<=gt?(Wt.X=_.Pt.X,Wt.Y=_.Pt.Y,n.use_xyz&&(Wt.Z=_.Pt.Z),re=_.Pt.X>d.Pt.X):(Wt.X=I.Pt.X,Wt.Y=I.Pt.Y,n.use_xyz&&(Wt.Z=I.Pt.Z),re=I.Pt.X>M.Pt.X),r.OutPt1=d,r.OutPt2=M,this.JoinHorz(d,_,M,I,Wt,re)}else{for(_=d.Next;n.IntPoint.op_Equality(_.Pt,d.Pt)&&_!==d;)_=_.Next;var ce=_.Pt.Y>d.Pt.Y||!n.ClipperBase.SlopesEqual4(d.Pt,_.Pt,r.OffPt,this.m_UseFullRange);if(ce){for(_=d.Prev;n.IntPoint.op_Equality(_.Pt,d.Pt)&&_!==d;)_=_.Prev;if(_.Pt.Y>d.Pt.Y||!n.ClipperBase.SlopesEqual4(d.Pt,_.Pt,r.OffPt,this.m_UseFullRange))return!1}for(I=M.Next;n.IntPoint.op_Equality(I.Pt,M.Pt)&&I!==M;)I=I.Next;var Ae=I.Pt.Y>M.Pt.Y||!n.ClipperBase.SlopesEqual4(M.Pt,I.Pt,r.OffPt,this.m_UseFullRange);if(Ae){for(I=M.Prev;n.IntPoint.op_Equality(I.Pt,M.Pt)&&I!==M;)I=I.Prev;if(I.Pt.Y>M.Pt.Y||!n.ClipperBase.SlopesEqual4(M.Pt,I.Pt,r.OffPt,this.m_UseFullRange))return!1}return _===d||I===M||_===I||a===c&&ce===Ae?!1:ce?(_=this.DupOutPt(d,!1),I=this.DupOutPt(M,!0),d.Prev=M,M.Next=d,_.Next=I,I.Prev=_,r.OutPt1=d,r.OutPt2=_,!0):(_=this.DupOutPt(d,!0),I=this.DupOutPt(M,!1),d.Next=M,M.Prev=d,_.Prev=I,I.Next=_,r.OutPt1=d,r.OutPt2=_,!0)}},n.Clipper.GetBounds=function(r){for(var a=0,c=r.length;a<c&&r[a].length===0;)a++;if(a===c)return new n.IntRect(0,0,0,0);var d=new n.IntRect;for(d.left=r[a][0].X,d.right=d.left,d.top=r[a][0].Y,d.bottom=d.top;a<c;a++)for(var _=0,M=r[a].length;_<M;_++)r[a][_].X<d.left?d.left=r[a][_].X:r[a][_].X>d.right&&(d.right=r[a][_].X),r[a][_].Y<d.top?d.top=r[a][_].Y:r[a][_].Y>d.bottom&&(d.bottom=r[a][_].Y);return d},n.Clipper.prototype.GetBounds2=function(r){var a=r,c=new n.IntRect;for(c.left=r.Pt.X,c.right=r.Pt.X,c.top=r.Pt.Y,c.bottom=r.Pt.Y,r=r.Next;r!==a;)r.Pt.X<c.left&&(c.left=r.Pt.X),r.Pt.X>c.right&&(c.right=r.Pt.X),r.Pt.Y<c.top&&(c.top=r.Pt.Y),r.Pt.Y>c.bottom&&(c.bottom=r.Pt.Y),r=r.Next;return c},n.Clipper.PointInPolygon=function(r,a){var c=0,d=a.length;if(d<3)return 0;for(var _=a[0],M=1;M<=d;++M){var I=M===d?a[0]:a[M];if(I.Y===r.Y&&(I.X===r.X||_.Y===r.Y&&I.X>r.X==_.X<r.X))return-1;if(_.Y<r.Y!=I.Y<r.Y){if(_.X>=r.X)if(I.X>r.X)c=1-c;else{var k=(_.X-r.X)*(I.Y-r.Y)-(I.X-r.X)*(_.Y-r.Y);if(k===0)return-1;k>0==I.Y>_.Y&&(c=1-c)}else if(I.X>r.X){var k=(_.X-r.X)*(I.Y-r.Y)-(I.X-r.X)*(_.Y-r.Y);if(k===0)return-1;k>0==I.Y>_.Y&&(c=1-c)}}_=I}return c},n.Clipper.prototype.PointInPolygon=function(r,a){var c=0,d=a,_=r.X,M=r.Y,I=a.Pt.X,k=a.Pt.Y;do{a=a.Next;var V=a.Pt.X,Z=a.Pt.Y;if(Z===M&&(V===_||k===M&&V>_==I<_))return-1;if(k<M!=Z<M){if(I>=_)if(V>_)c=1-c;else{var ht=(I-_)*(Z-M)-(V-_)*(k-M);if(ht===0)return-1;ht>0==Z>k&&(c=1-c)}else if(V>_){var ht=(I-_)*(Z-M)-(V-_)*(k-M);if(ht===0)return-1;ht>0==Z>k&&(c=1-c)}}I=V,k=Z}while(d!==a);return c},n.Clipper.prototype.Poly2ContainsPoly1=function(r,a){var c=r;do{var d=this.PointInPolygon(c.Pt,a);if(d>=0)return d>0;c=c.Next}while(c!==r);return!0},n.Clipper.prototype.FixupFirstLefts1=function(r,a){for(var c,d,_=0,M=this.m_PolyOuts.length;_<M;_++)c=this.m_PolyOuts[_],d=n.Clipper.ParseFirstLeft(c.FirstLeft),c.Pts!==null&&d===r&&this.Poly2ContainsPoly1(c.Pts,a.Pts)&&(c.FirstLeft=a)},n.Clipper.prototype.FixupFirstLefts2=function(r,a){for(var c=a.FirstLeft,d,_,M=0,I=this.m_PolyOuts.length;M<I;M++)d=this.m_PolyOuts[M],!(d.Pts===null||d===a||d===r)&&(_=n.Clipper.ParseFirstLeft(d.FirstLeft),!(_!==c&&_!==r&&_!==a)&&(this.Poly2ContainsPoly1(d.Pts,r.Pts)?d.FirstLeft=r:this.Poly2ContainsPoly1(d.Pts,a.Pts)?d.FirstLeft=a:(d.FirstLeft===r||d.FirstLeft===a)&&(d.FirstLeft=c)))},n.Clipper.prototype.FixupFirstLefts3=function(r,a){for(var c,d,_=0,M=this.m_PolyOuts.length;_<M;_++)c=this.m_PolyOuts[_],d=n.Clipper.ParseFirstLeft(c.FirstLeft),c.Pts!==null&&d===r&&(c.FirstLeft=a)},n.Clipper.ParseFirstLeft=function(r){for(;r!==null&&r.Pts===null;)r=r.FirstLeft;return r},n.Clipper.prototype.JoinCommonEdges=function(){for(var r=0,a=this.m_Joins.length;r<a;r++){var c=this.m_Joins[r],d=this.GetOutRec(c.OutPt1.Idx),_=this.GetOutRec(c.OutPt2.Idx);if(!(d.Pts===null||_.Pts===null)&&!(d.IsOpen||_.IsOpen)){var M;d===_?M=d:this.OutRec1RightOfOutRec2(d,_)?M=_:this.OutRec1RightOfOutRec2(_,d)?M=d:M=this.GetLowermostRec(d,_),this.JoinPoints(c,d,_)&&(d===_?(d.Pts=c.OutPt1,d.BottomPt=null,_=this.CreateOutRec(),_.Pts=c.OutPt2,this.UpdateOutPtIdxs(_),this.Poly2ContainsPoly1(_.Pts,d.Pts)?(_.IsHole=!d.IsHole,_.FirstLeft=d,this.m_UsingPolyTree&&this.FixupFirstLefts2(_,d),(_.IsHole^this.ReverseSolution)==this.Area$1(_)>0&&this.ReversePolyPtLinks(_.Pts)):this.Poly2ContainsPoly1(d.Pts,_.Pts)?(_.IsHole=d.IsHole,d.IsHole=!_.IsHole,_.FirstLeft=d.FirstLeft,d.FirstLeft=_,this.m_UsingPolyTree&&this.FixupFirstLefts2(d,_),(d.IsHole^this.ReverseSolution)==this.Area$1(d)>0&&this.ReversePolyPtLinks(d.Pts)):(_.IsHole=d.IsHole,_.FirstLeft=d.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(d,_))):(_.Pts=null,_.BottomPt=null,_.Idx=d.Idx,d.IsHole=M.IsHole,M===_&&(d.FirstLeft=_.FirstLeft),_.FirstLeft=d,this.m_UsingPolyTree&&this.FixupFirstLefts3(_,d)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(r){var a=r.Pts;do a.Idx=r.Idx,a=a.Prev;while(a!==r.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var r=0;r<this.m_PolyOuts.length;){var a=this.m_PolyOuts[r++],c=a.Pts;if(!(c===null||a.IsOpen))do{for(var d=c.Next;d!==a.Pts;){if(n.IntPoint.op_Equality(c.Pt,d.Pt)&&d.Next!==c&&d.Prev!==c){var _=c.Prev,M=d.Prev;c.Prev=M,M.Next=c,d.Prev=_,_.Next=d,a.Pts=c;var I=this.CreateOutRec();I.Pts=d,this.UpdateOutPtIdxs(I),this.Poly2ContainsPoly1(I.Pts,a.Pts)?(I.IsHole=!a.IsHole,I.FirstLeft=a,this.m_UsingPolyTree&&this.FixupFirstLefts2(I,a)):this.Poly2ContainsPoly1(a.Pts,I.Pts)?(I.IsHole=a.IsHole,a.IsHole=!I.IsHole,I.FirstLeft=a.FirstLeft,a.FirstLeft=I,this.m_UsingPolyTree&&this.FixupFirstLefts2(a,I)):(I.IsHole=a.IsHole,I.FirstLeft=a.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(a,I)),d=c}d=d.Next}c=c.Next}while(c!==a.Pts)}},n.Clipper.Area=function(r){if(!Array.isArray(r))return 0;var a=r.length;if(a<3)return 0;for(var c=0,d=0,_=a-1;d<a;++d)c+=(r[_].X+r[d].X)*(r[_].Y-r[d].Y),_=d;return-c*.5},n.Clipper.prototype.Area=function(r){var a=r;if(r===null)return 0;var c=0;do c=c+(r.Prev.Pt.X+r.Pt.X)*(r.Prev.Pt.Y-r.Pt.Y),r=r.Next;while(r!==a);return c*.5},n.Clipper.prototype.Area$1=function(r){return this.Area(r.Pts)},n.Clipper.SimplifyPolygon=function(r,a){var c=new Array,d=new n.Clipper(0);return d.StrictlySimple=!0,d.AddPath(r,n.PolyType.ptSubject,!0),d.Execute(n.ClipType.ctUnion,c,a,a),c},n.Clipper.SimplifyPolygons=function(r,a){typeof a>"u"&&(a=n.PolyFillType.pftEvenOdd);var c=new Array,d=new n.Clipper(0);return d.StrictlySimple=!0,d.AddPaths(r,n.PolyType.ptSubject,!0),d.Execute(n.ClipType.ctUnion,c,a,a),c},n.Clipper.DistanceSqrd=function(r,a){var c=r.X-a.X,d=r.Y-a.Y;return c*c+d*d},n.Clipper.DistanceFromLineSqrd=function(r,a,c){var d=a.Y-c.Y,_=c.X-a.X,M=d*a.X+_*a.Y;return M=d*r.X+_*r.Y-M,M*M/(d*d+_*_)},n.Clipper.SlopesNearCollinear=function(r,a,c,d){return Math.abs(r.X-a.X)>Math.abs(r.Y-a.Y)?r.X>a.X==r.X<c.X?n.Clipper.DistanceFromLineSqrd(r,a,c)<d:a.X>r.X==a.X<c.X?n.Clipper.DistanceFromLineSqrd(a,r,c)<d:n.Clipper.DistanceFromLineSqrd(c,r,a)<d:r.Y>a.Y==r.Y<c.Y?n.Clipper.DistanceFromLineSqrd(r,a,c)<d:a.Y>r.Y==a.Y<c.Y?n.Clipper.DistanceFromLineSqrd(a,r,c)<d:n.Clipper.DistanceFromLineSqrd(c,r,a)<d},n.Clipper.PointsAreClose=function(r,a,c){var d=r.X-a.X,_=r.Y-a.Y;return d*d+_*_<=c},n.Clipper.ExcludeOp=function(r){var a=r.Prev;return a.Next=r.Next,r.Next.Prev=a,a.Idx=0,a},n.Clipper.CleanPolygon=function(r,a){typeof a>"u"&&(a=1.415);var c=r.length;if(c===0)return new Array;for(var d=new Array(c),_=0;_<c;++_)d[_]=new n.OutPt;for(var _=0;_<c;++_)d[_].Pt=r[_],d[_].Next=d[(_+1)%c],d[_].Next.Prev=d[_],d[_].Idx=0;for(var M=a*a,I=d[0];I.Idx===0&&I.Next!==I.Prev;)n.Clipper.PointsAreClose(I.Pt,I.Prev.Pt,M)?(I=n.Clipper.ExcludeOp(I),c--):n.Clipper.PointsAreClose(I.Prev.Pt,I.Next.Pt,M)?(n.Clipper.ExcludeOp(I.Next),I=n.Clipper.ExcludeOp(I),c-=2):n.Clipper.SlopesNearCollinear(I.Prev.Pt,I.Pt,I.Next.Pt,M)?(I=n.Clipper.ExcludeOp(I),c--):(I.Idx=1,I=I.Next);c<3&&(c=0);for(var k=new Array(c),_=0;_<c;++_)k[_]=new n.IntPoint1(I.Pt),I=I.Next;return d=null,k},n.Clipper.CleanPolygons=function(r,a){for(var c=new Array(r.length),d=0,_=r.length;d<_;d++)c[d]=n.Clipper.CleanPolygon(r[d],a);return c},n.Clipper.Minkowski=function(r,a,c,d){var _=d?1:0,M=r.length,I=a.length,k=new Array;if(c)for(var V=0;V<I;V++){for(var Z=new Array(M),ht=0,ct=r.length,gt=r[ht];ht<ct;ht++,gt=r[ht])Z[ht]=new n.IntPoint2(a[V].X+gt.X,a[V].Y+gt.Y);k.push(Z)}else for(var V=0;V<I;V++){for(var Z=new Array(M),ht=0,ct=r.length,gt=r[ht];ht<ct;ht++,gt=r[ht])Z[ht]=new n.IntPoint2(a[V].X-gt.X,a[V].Y-gt.Y);k.push(Z)}for(var Wt=new Array,V=0;V<I-1+_;V++)for(var ht=0;ht<M;ht++){var re=new Array;re.push(k[V%I][ht%M]),re.push(k[(V+1)%I][ht%M]),re.push(k[(V+1)%I][(ht+1)%M]),re.push(k[V%I][(ht+1)%M]),n.Clipper.Orientation(re)||re.reverse(),Wt.push(re)}return Wt},n.Clipper.MinkowskiSum=function(r,a,c){if(a[0]instanceof Array){for(var _=a,I=new n.Paths,M=new n.Clipper,k=0;k<_.length;++k){var V=n.Clipper.Minkowski(r,_[k],!0,c);if(M.AddPaths(V,n.PolyType.ptSubject,!0),c){var d=n.Clipper.TranslatePath(_[k],r[0]);M.AddPath(d,n.PolyType.ptClip,!0)}}return M.Execute(n.ClipType.ctUnion,I,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),I}else{var d=a,_=n.Clipper.Minkowski(r,d,!0,c),M=new n.Clipper;return M.AddPaths(_,n.PolyType.ptSubject,!0),M.Execute(n.ClipType.ctUnion,_,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),_}},n.Clipper.TranslatePath=function(r,a){for(var c=new n.Path,d=0;d<r.length;d++)c.push(new n.IntPoint2(r[d].X+a.X,r[d].Y+a.Y));return c},n.Clipper.MinkowskiDiff=function(r,a){var c=n.Clipper.Minkowski(r,a,!1,!0),d=new n.Clipper;return d.AddPaths(c,n.PolyType.ptSubject,!0),d.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),c},n.Clipper.PolyTreeToPaths=function(r){var a=new Array;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntAny,a),a},n.Clipper.AddPolyNodeToPaths=function(r,a,c){var d=!0;switch(a){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:d=!r.IsOpen;break;default:break}r.m_polygon.length>0&&d&&c.push(r.m_polygon);for(var _=0,M=r.Childs(),I=M.length,k=M[_];_<I;_++,k=M[_])n.Clipper.AddPolyNodeToPaths(k,a,c)},n.Clipper.OpenPathsFromPolyTree=function(r){for(var a=new n.Paths,c=0,d=r.ChildCount();c<d;c++)r.Childs()[c].IsOpen&&a.push(r.Childs()[c].m_polygon);return a},n.Clipper.ClosedPathsFromPolyTree=function(r){var a=new n.Paths;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntClosed,a),a},le(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(r,a){typeof r>"u"&&(r=2),typeof a>"u"&&(a=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=r,this.ArcTolerance=a,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(r,a,c){var d=r.length-1;if(!(d<0)){var _=new n.PolyNode;if(_.m_jointype=a,_.m_endtype=c,c===n.EndType.etClosedLine||c===n.EndType.etClosedPolygon)for(;d>0&&n.IntPoint.op_Equality(r[0],r[d]);)d--;_.m_polygon.push(r[0]);for(var M=0,I=0,k=1;k<=d;k++)n.IntPoint.op_Inequality(_.m_polygon[M],r[k])&&(M++,_.m_polygon.push(r[k]),(r[k].Y>_.m_polygon[I].Y||r[k].Y===_.m_polygon[I].Y&&r[k].X<_.m_polygon[I].X)&&(I=M));if(!(c===n.EndType.etClosedPolygon&&M<2)&&(this.m_polyNodes.AddChild(_),c===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,I);else{var V=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(_.m_polygon[I].Y>V.Y||_.m_polygon[I].Y===V.Y&&_.m_polygon[I].X<V.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,I))}}},n.ClipperOffset.prototype.AddPaths=function(r,a,c){for(var d=0,_=r.length;d<_;d++)this.AddPath(r[d],a,c)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var r=0;r<this.m_polyNodes.ChildCount();r++){var a=this.m_polyNodes.Childs()[r];(a.m_endtype===n.EndType.etClosedPolygon||a.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(a.m_polygon))&&a.m_polygon.reverse()}else for(var r=0;r<this.m_polyNodes.ChildCount();r++){var a=this.m_polyNodes.Childs()[r];a.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(a.m_polygon)&&a.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(r,a){var c=a.X-r.X,d=a.Y-r.Y;if(c===0&&d===0)return new n.DoublePoint2(0,0);var _=1/Math.sqrt(c*c+d*d);return c*=_,d*=_,new n.DoublePoint2(d,-c)},n.ClipperOffset.prototype.DoOffset=function(r){if(this.m_destPolys=new Array,this.m_delta=r,n.ClipperBase.near_zero(r)){for(var a=0;a<this.m_polyNodes.ChildCount();a++){var c=this.m_polyNodes.Childs()[a];c.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(c.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var d;this.ArcTolerance<=0?d=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(r)*n.ClipperOffset.def_arc_tolerance?d=Math.abs(r)*n.ClipperOffset.def_arc_tolerance:d=this.ArcTolerance;var _=3.14159265358979/Math.acos(1-d/Math.abs(r));this.m_sin=Math.sin(n.ClipperOffset.two_pi/_),this.m_cos=Math.cos(n.ClipperOffset.two_pi/_),this.m_StepsPerRad=_/n.ClipperOffset.two_pi,r<0&&(this.m_sin=-this.m_sin);for(var a=0;a<this.m_polyNodes.ChildCount();a++){var c=this.m_polyNodes.Childs()[a];this.m_srcPoly=c.m_polygon;var M=this.m_srcPoly.length;if(!(M===0||r<=0&&(M<3||c.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,M===1){if(c.m_jointype===n.JoinType.jtRound)for(var I=1,k=0,V=1;V<=_;V++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+I*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+k*r)));var Z=I;I=I*this.m_cos-this.m_sin*k,k=Z*this.m_sin+k*this.m_cos}else for(var I=-1,k=-1,V=0;V<4;++V)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+I*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+k*r))),I<0?I=1:k<0?k=1:I=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var V=0;V<M-1;V++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[V],this.m_srcPoly[V+1]));if(c.m_endtype===n.EndType.etClosedLine||c.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[M-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[M-2])),c.m_endtype===n.EndType.etClosedPolygon){for(var ht=M-1,V=0;V<M;V++)ht=this.OffsetPoint(V,ht,c.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(c.m_endtype===n.EndType.etClosedLine){for(var ht=M-1,V=0;V<M;V++)ht=this.OffsetPoint(V,ht,c.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var ct=this.m_normals[M-1],V=M-1;V>0;V--)this.m_normals[V]=new n.DoublePoint2(-this.m_normals[V-1].X,-this.m_normals[V-1].Y);this.m_normals[0]=new n.DoublePoint2(-ct.X,-ct.Y),ht=0;for(var V=M-1;V>=0;V--)ht=this.OffsetPoint(V,ht,c.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var ht=0,V=1;V<M-1;++V)ht=this.OffsetPoint(V,ht,c.m_jointype);var gt;if(c.m_endtype===n.EndType.etOpenButt){var V=M-1;gt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[V].X+this.m_normals[V].X*r),n.ClipperOffset.Round(this.m_srcPoly[V].Y+this.m_normals[V].Y*r)),this.m_destPoly.push(gt),gt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[V].X-this.m_normals[V].X*r),n.ClipperOffset.Round(this.m_srcPoly[V].Y-this.m_normals[V].Y*r)),this.m_destPoly.push(gt)}else{var V=M-1;ht=M-2,this.m_sinA=0,this.m_normals[V]=new n.DoublePoint2(-this.m_normals[V].X,-this.m_normals[V].Y),c.m_endtype===n.EndType.etOpenSquare?this.DoSquare(V,ht):this.DoRound(V,ht)}for(var V=M-1;V>0;V--)this.m_normals[V]=new n.DoublePoint2(-this.m_normals[V-1].X,-this.m_normals[V-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),ht=M-1;for(var V=ht-1;V>0;--V)ht=this.OffsetPoint(V,ht,c.m_jointype);c.m_endtype===n.EndType.etOpenButt?(gt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*r)),this.m_destPoly.push(gt),gt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*r)),this.m_destPoly.push(gt)):(ht=1,this.m_sinA=0,c.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var r=arguments,a=r[0]instanceof n.PolyTree;if(a){var c=r[0],d=r[1];c.Clear(),this.FixOrientations(),this.DoOffset(d);var _=new n.Clipper(0);if(_.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),d>0)_.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var M=n.Clipper.GetBounds(this.m_destPolys),I=new n.Path;if(I.push(new n.IntPoint2(M.left-10,M.bottom+10)),I.push(new n.IntPoint2(M.right+10,M.bottom+10)),I.push(new n.IntPoint2(M.right+10,M.top-10)),I.push(new n.IntPoint2(M.left-10,M.top-10)),_.AddPath(I,n.PolyType.ptSubject,!0),_.ReverseSolution=!0,_.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),c.ChildCount()===1&&c.Childs()[0].ChildCount()>0){var k=c.Childs()[0];c.Childs()[0]=k.Childs()[0],c.Childs()[0].m_Parent=c;for(var V=1;V<k.ChildCount();V++)c.AddChild(k.Childs()[V])}else c.Clear()}}else{var c=r[0],d=r[1];n.Clear(c),this.FixOrientations(),this.DoOffset(d);var _=new n.Clipper(0);if(_.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),d>0)_.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var M=n.Clipper.GetBounds(this.m_destPolys),I=new n.Path;I.push(new n.IntPoint2(M.left-10,M.bottom+10)),I.push(new n.IntPoint2(M.right+10,M.bottom+10)),I.push(new n.IntPoint2(M.right+10,M.top-10)),I.push(new n.IntPoint2(M.left-10,M.top-10)),_.AddPath(I,n.PolyType.ptSubject,!0),_.ReverseSolution=!0,_.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),c.length>0&&c.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(r,a,c){if(this.m_sinA=this.m_normals[a].X*this.m_normals[r].Y-this.m_normals[r].X*this.m_normals[a].Y,Math.abs(this.m_sinA*this.m_delta)<1){var d=this.m_normals[a].X*this.m_normals[r].X+this.m_normals[r].Y*this.m_normals[a].Y;if(d>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[a].Y*this.m_delta))),a}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[a].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[r])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)));else switch(c){case n.JoinType.jtMiter:{var _=1+(this.m_normals[r].X*this.m_normals[a].X+this.m_normals[r].Y*this.m_normals[a].Y);_>=this.m_miterLim?this.DoMiter(r,a,_):this.DoSquare(r,a);break}case n.JoinType.jtSquare:this.DoSquare(r,a);break;case n.JoinType.jtRound:this.DoRound(r,a);break}return a=r,a},n.ClipperOffset.prototype.DoSquare=function(r,a){var c=Math.tan(Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[r].X+this.m_normals[a].Y*this.m_normals[r].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[a].X-this.m_normals[a].Y*c)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[a].Y+this.m_normals[a].X*c)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[r].X+this.m_normals[r].Y*c)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[r].Y-this.m_normals[r].X*c))))},n.ClipperOffset.prototype.DoMiter=function(r,a,c){var d=this.m_delta/c;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+(this.m_normals[a].X+this.m_normals[r].X)*d),n.ClipperOffset.Round(this.m_srcPoly[r].Y+(this.m_normals[a].Y+this.m_normals[r].Y)*d)))},n.ClipperOffset.prototype.DoRound=function(r,a){for(var c=Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[r].X+this.m_normals[a].Y*this.m_normals[r].Y),d=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(c))),1),_=this.m_normals[a].X,M=this.m_normals[a].Y,I,k=0;k<d;++k)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+_*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+M*this.m_delta))),I=_,_=_*this.m_cos-this.m_sin*M,M=I*this.m_sin+M*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)))},n.Error=function(r){try{throw new Error(r)}catch(a){alert(a.message)}},n.JS={},n.JS.AreaOfPolygon=function(r,a){return a||(a=1),n.Clipper.Area(r)/(a*a)},n.JS.AreaOfPolygons=function(r,a){a||(a=1);for(var c=0,d=0;d<r.length;d++)c+=n.Clipper.Area(r[d]);return c/(a*a)},n.JS.BoundsOfPath=function(r,a){return n.JS.BoundsOfPaths([r],a)},n.JS.BoundsOfPaths=function(r,a){a||(a=1);var c=n.Clipper.GetBounds(r);return c.left/=a,c.bottom/=a,c.right/=a,c.top/=a,c},n.JS.Clean=function(d,a){if(!(d instanceof Array))return[];var c=d[0]instanceof Array,d=n.JS.Clone(d);if(typeof a!="number"||a===null)return n.Error("Delta is not a number in Clean()."),d;if(d.length===0||d.length===1&&d[0].length===0||a<0)return d;c||(d=[d]);for(var _=d.length,M,I,k,V,Z,ht,ct,gt=[],Wt=0;Wt<_;Wt++)if(I=d[Wt],M=I.length,M!==0){if(M<3){k=I,gt.push(k);continue}for(k=I,V=a*a,Z=I[0],ht=1,ct=1;ct<M;ct++)(I[ct].X-Z.X)*(I[ct].X-Z.X)+(I[ct].Y-Z.Y)*(I[ct].Y-Z.Y)<=V||(k[ht]=I[ct],Z=I[ct],ht++);Z=I[ht-1],(I[0].X-Z.X)*(I[0].X-Z.X)+(I[0].Y-Z.Y)*(I[0].Y-Z.Y)<=V&&ht--,ht<M&&k.splice(ht,M-ht),k.length&&gt.push(k)}return!c&&gt.length?gt=gt[0]:!c&&gt.length===0?gt=[]:c&&gt.length===0&&(gt=[[]]),gt},n.JS.Clone=function(r){if(!(r instanceof Array))return[];if(r.length===0)return[];if(r.length===1&&r[0].length===0)return[[]];var a=r[0]instanceof Array;a||(r=[r]);var c=r.length,d,_,M,I,k=new Array(c);for(_=0;_<c;_++){for(d=r[_].length,I=new Array(d),M=0;M<d;M++)I[M]={X:r[_][M].X,Y:r[_][M].Y};k[_]=I}return a||(k=k[0]),k},n.JS.Lighten=function(r,a){if(!(r instanceof Array))return[];if(typeof a!="number"||a===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(r);if(r.length===0||r.length===1&&r[0].length===0||a<0)return n.JS.Clone(r);var c=r[0]instanceof Array;c||(r=[r]);var d,_,M,I,k,V,Z,ht,ct,gt,Wt,re,ce,Ae,rn,Fn,Ki,Nf=r.length,Ff=a*a,ji=[];for(d=0;d<Nf;d++)if(M=r[d],V=M.length,V!==0){for(I=0;I<1e6;I++){for(k=[],V=M.length,M[V-1].X!==M[0].X||M[V-1].Y!==M[0].Y?(re=1,M.push({X:M[0].X,Y:M[0].Y}),V=M.length):re=0,Wt=[],_=0;_<V-2;_++)Z=M[_],ct=M[_+1],ht=M[_+2],Fn=Z.X,Ki=Z.Y,ce=ht.X-Fn,Ae=ht.Y-Ki,(ce!==0||Ae!==0)&&(rn=((ct.X-Fn)*ce+(ct.Y-Ki)*Ae)/(ce*ce+Ae*Ae),rn>1?(Fn=ht.X,Ki=ht.Y):rn>0&&(Fn+=ce*rn,Ki+=Ae*rn)),ce=ct.X-Fn,Ae=ct.Y-Ki,gt=ce*ce+Ae*Ae,gt<=Ff&&(Wt[_+1]=1,_++);for(k.push({X:M[0].X,Y:M[0].Y}),_=1;_<V-1;_++)Wt[_]||k.push({X:M[_].X,Y:M[_].Y});if(k.push({X:M[V-1].X,Y:M[V-1].Y}),re&&M.pop(),Wt.length)M=k;else break}V=k.length,k[V-1].X===k[0].X&&k[V-1].Y===k[0].Y&&k.pop(),k.length>2&&ji.push(k)}return c||(ji=ji[0]),typeof ji>"u"&&(ji=[]),ji},n.JS.PerimeterOfPath=function(r,a,c){if(typeof r>"u")return 0;var d=Math.sqrt,_=0,M,I,k=0,V=0,Z=0,ht=0,ct=r.length;if(ct<2)return 0;for(a&&(r[ct]=r[0],ct++);--ct;)M=r[ct],k=M.X,V=M.Y,I=r[ct-1],Z=I.X,ht=I.Y,_+=d((k-Z)*(k-Z)+(V-ht)*(V-ht));return a&&r.pop(),_/c},n.JS.PerimeterOfPaths=function(r,a,c){c||(c=1);for(var d=0,_=0;_<r.length;_++)d+=n.JS.PerimeterOfPath(r[_],a,c);return d},n.JS.ScaleDownPath=function(r,a){var c,d;for(a||(a=1),c=r.length;c--;)d=r[c],d.X=d.X/a,d.Y=d.Y/a},n.JS.ScaleDownPaths=function(r,a){var c,d,_;for(a||(a=1),c=r.length;c--;)for(d=r[c].length;d--;)_=r[c][d],_.X=_.X/a,_.Y=_.Y/a},n.JS.ScaleUpPath=function(r,a){var c,d,_=Math.round;for(a||(a=1),c=r.length;c--;)d=r[c],d.X=_(d.X*a),d.Y=_(d.Y*a)},n.JS.ScaleUpPaths=function(r,a){var c,d,_,M=Math.round;for(a||(a=1),c=r.length;c--;)for(d=r[c].length;d--;)_=r[c][d],_.X=M(_.X*a),_.Y=M(_.Y*a)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(r,a){var c=new n.ExPolygon;c.outer=r.Contour();var d=r.Childs(),_=d.length;c.holes=new Array(_);var M,I,k,V,Z,ht;for(k=0;k<_;k++)for(M=d[k],c.holes[k]=M.Contour(),V=0,Z=M.Childs(),ht=Z.length;V<ht;V++)I=Z[V],n.JS.AddOuterPolyNodeToExPolygons(I,a);a.push(c)},n.JS.ExPolygonsToPaths=function(r){var a,c,d,_,M=new n.Paths;for(a=0,d=r.length;a<d;a++)for(M.push(r[a].outer),c=0,_=r[a].holes.length;c<_;c++)M.push(r[a].holes[c]);return M},n.JS.PolyTreeToExPolygons=function(r){var a=new n.ExPolygons,c,d,_,M;for(d=0,_=r.Childs(),M=_.length;d<M;d++)c=_[d],n.JS.AddOuterPolyNodeToExPolygons(c,a);return a}})()});var da="186",Si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wh=0,ac=1,Yh=2;var Lr=1,qh=2,Is=3,bi=0,Ge=1,an=2,Gn=0,Rs=1,lc=2,cc=3,hc=4,Zh=5;var Gi=100,Jh=101,$h=102,Kh=103,jh=104,Qh=200,tu=201,eu=202,nu=203,uc=204,fc=205,iu=206,su=207,ru=208,ou=209,au=210,lu=211,cu=212,hu=213,uu=214,Ro=0,Lo=1,Do=2,gs=3,No=4,Fo=5,Oo=6,Uo=7,dc=0,fu=1,du=2,Rn=0,pc=1,mc=2,gc=3,_c=4,xc=5,yc=6,vc=7;var Sc=300,wi=301,Hi=302,pa=303,ma=304,Dr=306,Oi=1e3,Un=1001,Bo=1002,Ne=1003,pu=1004;var Nr=1005;var ke=1006,ga=1007;var Ti=1008;var ln=1009,Mc=1010,bc=1011,Ls=1012,_a=1013,Ln=1014,Dn=1015,Nn=1016,xa=1017,ya=1018,Ds=1020,wc=35902,Tc=35899,Ec=1021,Ac=1022,wn=1023,kn=1026,Ei=1027,Fr=1028,va=1029,Ai=1030,Sa=1031;var Ma=1033,Or=33776,Ur=33777,Br=33778,zr=33779,ba=35840,wa=35841,Ta=35842,Ea=35843,Aa=36196,Pa=37492,Ca=37496,Ia=37488,Ra=37489,kr=37490,La=37491,Da=37808,Na=37809,Fa=37810,Oa=37811,Ua=37812,Ba=37813,za=37814,ka=37815,Va=37816,Ga=37817,Ha=37818,Xa=37819,Wa=37820,Ya=37821,qa=36492,Za=36494,Ja=36495,$a=36283,Ka=36284,Vr=36285,ja=36286;var tr=2300,zo=2301,Co=2302,Jl=2303,$l=2400,Kl=2401,jl=2402;var mu=3200;var Qa=0,gu=1,ii="",Ze="srgb",er="srgb-linear",nr="linear",Se="srgb";var Io=7680;var _u=519,xu=512,yu=513,vu=514,tl=515,Su=516,Mu=517,el=518,bu=519,Pc=35044;var Cc="300 es",Cn=2e3,_s=2001;function Xf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Wf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ir(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wu(){let n=ir("canvas");return n.style.display="block",n}var dh={},xs=null;function sr(...n){let t="THREE."+n.shift();xs?xs("log",t,...n):console.log(t,...n)}function Tu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function jt(...n){n=Tu(n);let t="THREE."+n.shift();if(xs)xs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ee(...n){n=Tu(n);let t="THREE."+n.shift();if(xs)xs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Fi(...n){let t=n.join(" ");t in dh||(dh[t]=!0,jt(...n))}function Eu(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}var Au={[Ro]:Lo,[Do]:Oo,[No]:Uo,[gs]:Fo,[Lo]:Ro,[Oo]:Do,[Uo]:No,[Fo]:gs},In=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=1234567,ps=Math.PI/180,ys=180/Math.PI;function zn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function se(n,t,e){return Math.max(t,Math.min(e,n))}function Ic(n,t){return(n%t+t)%t}function Yf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function qf(n,t,e){return n!==t?(e-n)/(t-n):0}function Ks(n,t,e){return(1-e)*n+e*t}function Zf(n,t,e,i){return Ks(n,t,1-Math.exp(-e*i))}function Jf(n,t=1){return t-Math.abs(Ic(n,t*2)-t)}function $f(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Kf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function jf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Qf(n,t){return n+Math.random()*(t-n)}function td(n){return n*(.5-Math.random())}function ed(n){n!==void 0&&(ph=n);let t=ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nd(n){return n*ps}function id(n){return n*ys}function sd(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function rd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function od(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ad(n,t,e,i,s){let o=Math.cos,l=Math.sin,h=o(e/2),u=l(e/2),f=o((t+i)/2),m=l((t+i)/2),x=o((t-i)/2),p=l((t-i)/2),g=o((i-t)/2),S=l((i-t)/2);switch(s){case"XYX":n.set(h*m,u*x,u*p,h*f);break;case"YZY":n.set(u*p,h*m,u*x,h*f);break;case"ZXZ":n.set(u*x,u*p,h*m,h*f);break;case"XZX":n.set(h*m,u*S,u*g,h*f);break;case"YXY":n.set(u*g,h*m,u*S,h*f);break;case"ZYZ":n.set(u*S,u*g,h*m,h*f);break;default:jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function be(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Gr={DEG2RAD:ps,RAD2DEG:ys,generateUUID:zn,clamp:se,euclideanModulo:Ic,mapLinear:Yf,inverseLerp:qf,lerp:Ks,damp:Zf,pingpong:Jf,smoothstep:$f,smootherstep:Kf,randInt:jf,randFloat:Qf,randFloatSpread:td,seededRandom:ed,degToRad:nd,radToDeg:id,isPowerOfTwo:sd,ceilPowerOfTwo:rd,floorPowerOfTwo:od,setQuaternionFromProperEuler:ad,normalize:be,denormalize:Pn},Oc=class Oc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*i-l*s+t.x,this.y=o*s+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Oc.prototype.isVector2=!0;var _t=Oc,gn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,l,h){let u=i[s+0],f=i[s+1],m=i[s+2],x=i[s+3],p=o[l+0],g=o[l+1],S=o[l+2],w=o[l+3];if(x!==w||u!==p||f!==g||m!==S){let y=u*p+f*g+m*S+x*w;y<0&&(p=-p,g=-g,S=-S,w=-w,y=-y);let v=1-h;if(y<.9995){let P=Math.acos(y),A=Math.sin(P);v=Math.sin(v*P)/A,h=Math.sin(h*P)/A,u=u*v+p*h,f=f*v+g*h,m=m*v+S*h,x=x*v+w*h}else{u=u*v+p*h,f=f*v+g*h,m=m*v+S*h,x=x*v+w*h;let P=1/Math.sqrt(u*u+f*f+m*m+x*x);u*=P,f*=P,m*=P,x*=P}}t[e]=u,t[e+1]=f,t[e+2]=m,t[e+3]=x}static multiplyQuaternionsFlat(t,e,i,s,o,l){let h=i[s],u=i[s+1],f=i[s+2],m=i[s+3],x=o[l],p=o[l+1],g=o[l+2],S=o[l+3];return t[e]=h*S+m*x+u*g-f*p,t[e+1]=u*S+m*p+f*x-h*g,t[e+2]=f*S+m*g+h*p-u*x,t[e+3]=m*S-h*x-u*p-f*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,o=t._z,l=t._order,h=Math.cos,u=Math.sin,f=h(i/2),m=h(s/2),x=h(o/2),p=u(i/2),g=u(s/2),S=u(o/2);switch(l){case"XYZ":this._x=p*m*x+f*g*S,this._y=f*g*x-p*m*S,this._z=f*m*S+p*g*x,this._w=f*m*x-p*g*S;break;case"YXZ":this._x=p*m*x+f*g*S,this._y=f*g*x-p*m*S,this._z=f*m*S-p*g*x,this._w=f*m*x+p*g*S;break;case"ZXY":this._x=p*m*x-f*g*S,this._y=f*g*x+p*m*S,this._z=f*m*S+p*g*x,this._w=f*m*x-p*g*S;break;case"ZYX":this._x=p*m*x-f*g*S,this._y=f*g*x+p*m*S,this._z=f*m*S-p*g*x,this._w=f*m*x+p*g*S;break;case"YZX":this._x=p*m*x+f*g*S,this._y=f*g*x+p*m*S,this._z=f*m*S-p*g*x,this._w=f*m*x-p*g*S;break;case"XZY":this._x=p*m*x-f*g*S,this._y=f*g*x-p*m*S,this._z=f*m*S+p*g*x,this._w=f*m*x+p*g*S;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],o=e[8],l=e[1],h=e[5],u=e[9],f=e[2],m=e[6],x=e[10],p=i+h+x;if(p>0){let g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(m-u)*g,this._y=(o-f)*g,this._z=(l-s)*g}else if(i>h&&i>x){let g=2*Math.sqrt(1+i-h-x);this._w=(m-u)/g,this._x=.25*g,this._y=(s+l)/g,this._z=(o+f)/g}else if(h>x){let g=2*Math.sqrt(1+h-i-x);this._w=(o-f)/g,this._x=(s+l)/g,this._y=.25*g,this._z=(u+m)/g}else{let g=2*Math.sqrt(1+x-i-h);this._w=(l-s)/g,this._x=(o+f)/g,this._y=(u+m)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,o=t._z,l=t._w,h=e._x,u=e._y,f=e._z,m=e._w;return this._x=i*m+l*h+s*f-o*u,this._y=s*m+l*u+o*h-i*f,this._z=o*m+l*f+i*u-s*h,this._w=l*m-i*h-s*u-o*f,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,o=t._z,l=t._w,h=this.dot(t);h<0&&(i=-i,s=-s,o=-o,l=-l,h=-h);let u=1-e;if(h<.9995){let f=Math.acos(h),m=Math.sin(f);u=Math.sin(u*f)/m,e=Math.sin(e*f)/m,this._x=this._x*u+i*e,this._y=this._y*u+s*e,this._z=this._z*u+o*e,this._w=this._w*u+l*e,this._onChangeCallback()}else this._x=this._x*u+i*e,this._y=this._y*u+s*e,this._z=this._z*u+o*e,this._w=this._w*u+l*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Uc=class Uc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=t.elements,l=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*l,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*l,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*l,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,o=t.x,l=t.y,h=t.z,u=t.w,f=2*(l*s-h*i),m=2*(h*e-o*s),x=2*(o*i-l*e);return this.x=e+u*f+l*x-h*m,this.y=i+u*m+h*f-o*x,this.z=s+u*x+o*m-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,o=t.z,l=e.x,h=e.y,u=e.z;return this.x=s*u-o*h,this.y=o*l-i*u,this.z=i*h-s*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bl.copy(this).projectOnVector(t),this.sub(bl)}reflect(t){return this.sub(bl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uc.prototype.isVector3=!0;var z=Uc,bl=new z,mh=new gn,Bc=class Bc{constructor(t,e,i,s,o,l,h,u,f){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,l,h,u,f)}set(t,e,i,s,o,l,h,u,f){let m=this.elements;return m[0]=t,m[1]=s,m[2]=h,m[3]=e,m[4]=o,m[5]=u,m[6]=i,m[7]=l,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,l=i[0],h=i[3],u=i[6],f=i[1],m=i[4],x=i[7],p=i[2],g=i[5],S=i[8],w=s[0],y=s[3],v=s[6],P=s[1],A=s[4],E=s[7],R=s[2],L=s[5],O=s[8];return o[0]=l*w+h*P+u*R,o[3]=l*y+h*A+u*L,o[6]=l*v+h*E+u*O,o[1]=f*w+m*P+x*R,o[4]=f*y+m*A+x*L,o[7]=f*v+m*E+x*O,o[2]=p*w+g*P+S*R,o[5]=p*y+g*A+S*L,o[8]=p*v+g*E+S*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],l=t[4],h=t[5],u=t[6],f=t[7],m=t[8];return e*l*m-e*h*f-i*o*m+i*h*u+s*o*f-s*l*u}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],l=t[4],h=t[5],u=t[6],f=t[7],m=t[8],x=m*l-h*f,p=h*u-m*o,g=f*o-l*u,S=e*x+i*p+s*g;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/S;return t[0]=x*w,t[1]=(s*f-m*i)*w,t[2]=(h*i-s*l)*w,t[3]=p*w,t[4]=(m*e-s*u)*w,t[5]=(s*o-h*e)*w,t[6]=g*w,t[7]=(i*u-f*e)*w,t[8]=(l*e-i*o)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,l,h){let u=Math.cos(o),f=Math.sin(o);return this.set(i*u,i*f,-i*(u*l+f*h)+l+t,-s*f,s*u,-s*(-f*l+u*h)+h+e,0,0,1),this}scale(t,e){return Fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wl.makeScale(t,e)),this}rotate(t){return Fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wl.makeRotation(-t)),this}translate(t,e){return Fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Bc.prototype.isMatrix3=!0;var oe=Bc,wl=new oe,gh=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_h=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ld(){let n={enabled:!0,workingColorSpace:er,spaces:{},convert:function(s,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Se&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Se&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,l){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Fi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Fi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[er]:{primaries:t,whitePoint:i,transfer:nr,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),n}var de=ld();function ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Qi,ko=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Qi===void 0&&(Qi=ir("canvas")),Qi.width=t.width,Qi.height=t.height;let s=Qi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Qi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ir("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=ti(o[l]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ti(e[i]/255)*255):e[i]=ti(e[i]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cd=0,vs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,h=s.length;l<h;l++)s[l].isDataTexture?o.push(Tl(s[l].image)):o.push(Tl(s[l]))}else o=Tl(s);i.url=o}return e||(t.images[this.uuid]=i),i}};function Tl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ko.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var hd=0,El=new z,tn=class n extends In{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Un,s=Un,o=ke,l=Ti,h=wn,u=ln,f=n.DEFAULT_ANISOTROPY,m=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=zn(),this.name="",this.source=new vs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=f,this.format=h,this.internalFormat=null,this.type=u,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(El).x}get height(){return this.source.getSize(El).y}get depth(){return this.source.getSize(El).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oi:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case Bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oi:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case Bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Sc;tn.DEFAULT_ANISOTROPY=1;var zc=class zc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*s+l[12]*o,this.y=l[1]*e+l[5]*i+l[9]*s+l[13]*o,this.z=l[2]*e+l[6]*i+l[10]*s+l[14]*o,this.w=l[3]*e+l[7]*i+l[11]*s+l[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o,u=t.elements,f=u[0],m=u[4],x=u[8],p=u[1],g=u[5],S=u[9],w=u[2],y=u[6],v=u[10];if(Math.abs(m-p)<.01&&Math.abs(x-w)<.01&&Math.abs(S-y)<.01){if(Math.abs(m+p)<.1&&Math.abs(x+w)<.1&&Math.abs(S+y)<.1&&Math.abs(f+g+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(f+1)/2,E=(g+1)/2,R=(v+1)/2,L=(m+p)/4,O=(x+w)/4,T=(S+y)/4;return A>E&&A>R?A<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(A),s=L/i,o=O/i):E>R?E<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(E),i=L/s,o=T/s):R<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(R),i=O/o,s=T/o),this.set(i,s,o,e),this}let P=Math.sqrt((y-S)*(y-S)+(x-w)*(x-w)+(p-m)*(p-m));return Math.abs(P)<.001&&(P=1),this.x=(y-S)/P,this.y=(x-w)/P,this.z=(p-m)/P,this.w=Math.acos((f+g+v-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zc.prototype.isVector4=!0;var Me=zc,Vo=class extends In{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},o=new tn(s),l=i.count;for(let h=0;h<l;h++)this.textures[h]=o.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends Vo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},rr=class extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Go=class extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var fa=class fa{constructor(t,e,i,s,o,l,h,u,f,m,x,p,g,S,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,l,h,u,f,m,x,p,g,S,w,y)}set(t,e,i,s,o,l,h,u,f,m,x,p,g,S,w,y){let v=this.elements;return v[0]=t,v[4]=e,v[8]=i,v[12]=s,v[1]=o,v[5]=l,v[9]=h,v[13]=u,v[2]=f,v[6]=m,v[10]=x,v[14]=p,v[3]=g,v[7]=S,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fa().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),o=1/ts.setFromMatrixColumn(t,1).length(),l=1/ts.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,o=t.z,l=Math.cos(i),h=Math.sin(i),u=Math.cos(s),f=Math.sin(s),m=Math.cos(o),x=Math.sin(o);if(t.order==="XYZ"){let p=l*m,g=l*x,S=h*m,w=h*x;e[0]=u*m,e[4]=-u*x,e[8]=f,e[1]=g+S*f,e[5]=p-w*f,e[9]=-h*u,e[2]=w-p*f,e[6]=S+g*f,e[10]=l*u}else if(t.order==="YXZ"){let p=u*m,g=u*x,S=f*m,w=f*x;e[0]=p+w*h,e[4]=S*h-g,e[8]=l*f,e[1]=l*x,e[5]=l*m,e[9]=-h,e[2]=g*h-S,e[6]=w+p*h,e[10]=l*u}else if(t.order==="ZXY"){let p=u*m,g=u*x,S=f*m,w=f*x;e[0]=p-w*h,e[4]=-l*x,e[8]=S+g*h,e[1]=g+S*h,e[5]=l*m,e[9]=w-p*h,e[2]=-l*f,e[6]=h,e[10]=l*u}else if(t.order==="ZYX"){let p=l*m,g=l*x,S=h*m,w=h*x;e[0]=u*m,e[4]=S*f-g,e[8]=p*f+w,e[1]=u*x,e[5]=w*f+p,e[9]=g*f-S,e[2]=-f,e[6]=h*u,e[10]=l*u}else if(t.order==="YZX"){let p=l*u,g=l*f,S=h*u,w=h*f;e[0]=u*m,e[4]=w-p*x,e[8]=S*x+g,e[1]=x,e[5]=l*m,e[9]=-h*m,e[2]=-f*m,e[6]=g*x+S,e[10]=p-w*x}else if(t.order==="XZY"){let p=l*u,g=l*f,S=h*u,w=h*f;e[0]=u*m,e[4]=-x,e[8]=f*m,e[1]=p*x+w,e[5]=l*m,e[9]=g*x-S,e[2]=S*x-g,e[6]=h*m,e[10]=w*x+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ud,t,fd)}lookAt(t,e,i){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),li.crossVectors(i,fn),li.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),li.crossVectors(i,fn)),li.normalize(),io.crossVectors(fn,li),s[0]=li.x,s[4]=io.x,s[8]=fn.x,s[1]=li.y,s[5]=io.y,s[9]=fn.y,s[2]=li.z,s[6]=io.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,l=i[0],h=i[4],u=i[8],f=i[12],m=i[1],x=i[5],p=i[9],g=i[13],S=i[2],w=i[6],y=i[10],v=i[14],P=i[3],A=i[7],E=i[11],R=i[15],L=s[0],O=s[4],T=s[8],D=s[12],B=s[1],N=s[5],G=s[9],H=s[13],U=s[2],W=s[6],K=s[10],$=s[14],at=s[3],tt=s[7],it=s[11],st=s[15];return o[0]=l*L+h*B+u*U+f*at,o[4]=l*O+h*N+u*W+f*tt,o[8]=l*T+h*G+u*K+f*it,o[12]=l*D+h*H+u*$+f*st,o[1]=m*L+x*B+p*U+g*at,o[5]=m*O+x*N+p*W+g*tt,o[9]=m*T+x*G+p*K+g*it,o[13]=m*D+x*H+p*$+g*st,o[2]=S*L+w*B+y*U+v*at,o[6]=S*O+w*N+y*W+v*tt,o[10]=S*T+w*G+y*K+v*it,o[14]=S*D+w*H+y*$+v*st,o[3]=P*L+A*B+E*U+R*at,o[7]=P*O+A*N+E*W+R*tt,o[11]=P*T+A*G+E*K+R*it,o[15]=P*D+A*H+E*$+R*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],l=t[1],h=t[5],u=t[9],f=t[13],m=t[2],x=t[6],p=t[10],g=t[14],S=t[3],w=t[7],y=t[11],v=t[15],P=u*g-f*p,A=h*g-f*x,E=h*p-u*x,R=l*g-f*m,L=l*p-u*m,O=l*x-h*m;return e*(w*P-y*A+v*E)-i*(S*P-y*R+v*L)+s*(S*A-w*R+v*O)-o*(S*E-w*L+y*O)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[1],l=t[5],h=t[9],u=t[2],f=t[6],m=t[10];return e*(l*m-h*f)-i*(o*m-h*u)+s*(o*f-l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],l=t[4],h=t[5],u=t[6],f=t[7],m=t[8],x=t[9],p=t[10],g=t[11],S=t[12],w=t[13],y=t[14],v=t[15],P=e*h-i*l,A=e*u-s*l,E=e*f-o*l,R=i*u-s*h,L=i*f-o*h,O=s*f-o*u,T=m*w-x*S,D=m*y-p*S,B=m*v-g*S,N=x*y-p*w,G=x*v-g*w,H=p*v-g*y,U=P*H-A*G+E*N+R*B-L*D+O*T;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/U;return t[0]=(h*H-u*G+f*N)*W,t[1]=(s*G-i*H-o*N)*W,t[2]=(w*O-y*L+v*R)*W,t[3]=(p*L-x*O-g*R)*W,t[4]=(u*B-l*H-f*D)*W,t[5]=(e*H-s*B+o*D)*W,t[6]=(y*E-S*O-v*A)*W,t[7]=(m*O-p*E+g*A)*W,t[8]=(l*G-h*B+f*T)*W,t[9]=(i*B-e*G-o*T)*W,t[10]=(S*L-w*E+v*P)*W,t[11]=(x*E-m*L-g*P)*W,t[12]=(h*D-l*N-u*T)*W,t[13]=(e*N-i*D+s*T)*W,t[14]=(w*A-S*R-y*P)*W,t[15]=(m*R-x*A+p*P)*W,this}scale(t){let e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),o=1-i,l=t.x,h=t.y,u=t.z,f=o*l,m=o*h;return this.set(f*l+i,f*h-s*u,f*u+s*h,0,f*h+s*u,m*h+i,m*u-s*l,0,f*u-s*h,m*u+s*l,o*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,l){return this.set(1,i,o,0,t,1,l,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,o=e._x,l=e._y,h=e._z,u=e._w,f=o+o,m=l+l,x=h+h,p=o*f,g=o*m,S=o*x,w=l*m,y=l*x,v=h*x,P=u*f,A=u*m,E=u*x,R=i.x,L=i.y,O=i.z;return s[0]=(1-(w+v))*R,s[1]=(g+E)*R,s[2]=(S-A)*R,s[3]=0,s[4]=(g-E)*L,s[5]=(1-(p+v))*L,s[6]=(y+P)*L,s[7]=0,s[8]=(S+A)*O,s[9]=(y-P)*O,s[10]=(1-(p+w))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),e.identity(),this;let l=ts.set(s[0],s[1],s[2]).length(),h=ts.set(s[4],s[5],s[6]).length(),u=ts.set(s[8],s[9],s[10]).length();o<0&&(l=-l),Tn.copy(this);let f=1/l,m=1/h,x=1/u;return Tn.elements[0]*=f,Tn.elements[1]*=f,Tn.elements[2]*=f,Tn.elements[4]*=m,Tn.elements[5]*=m,Tn.elements[6]*=m,Tn.elements[8]*=x,Tn.elements[9]*=x,Tn.elements[10]*=x,e.setFromRotationMatrix(Tn),i.x=l,i.y=h,i.z=u,this}makePerspective(t,e,i,s,o,l,h=Cn,u=!1){let f=this.elements,m=2*o/(e-t),x=2*o/(i-s),p=(e+t)/(e-t),g=(i+s)/(i-s),S,w;if(u)S=o/(l-o),w=l*o/(l-o);else if(h===Cn)S=-(l+o)/(l-o),w=-2*l*o/(l-o);else if(h===_s)S=-l/(l-o),w=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=m,f[4]=0,f[8]=p,f[12]=0,f[1]=0,f[5]=x,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,i,s,o,l,h=Cn,u=!1){let f=this.elements,m=2/(e-t),x=2/(i-s),p=-(e+t)/(e-t),g=-(i+s)/(i-s),S,w;if(u)S=1/(l-o),w=l/(l-o);else if(h===Cn)S=-2/(l-o),w=-(l+o)/(l-o);else if(h===_s)S=-1/(l-o),w=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=m,f[4]=0,f[8]=0,f[12]=p,f[1]=0,f[5]=x,f[9]=0,f[13]=g,f[2]=0,f[6]=0,f[10]=S,f[14]=w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};fa.prototype.isMatrix4=!0;var ge=fa,ts=new z,Tn=new ge,ud=new z(0,0,0),fd=new z(1,1,1),li=new z,io=new z,fn=new z,xh=new ge,yh=new gn,di=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,o=s[0],l=s[4],h=s[8],u=s[1],f=s[5],m=s[9],x=s[2],p=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,g),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(p,f),this._z=0);break;case"YXZ":this._x=Math.asin(-se(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,g),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-x,o),this._z=0);break;case"ZXY":this._x=Math.asin(se(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-x,g),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-se(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-x,o)):(this._x=0,this._y=Math.atan2(h,g));break;case"XZY":this._z=Math.asin(-se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(p,f),this._y=Math.atan2(h,o)):(this._x=Math.atan2(-m,g),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yh.setFromEuler(this),this.setFromQuaternion(yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dd=0,vh=new z,es=new gn,Zn=new ge,so=new z,Ys=new z,pd=new z,md=new gn,Sh=new z(1,0,0),Mh=new z(0,1,0),bh=new z(0,0,1),wh={type:"added"},gd={type:"removed"},ns={type:"childadded",child:null},Al={type:"childremoved",child:null},$e=class n extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new z,e=new di,i=new gn,s=new z(1,1,1);function o(){i.setFromEuler(e,!1)}function l(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new oe}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Sh,t)}rotateY(t){return this.rotateOnAxis(Mh,t)}rotateZ(t){return this.rotateOnAxis(bh,t)}translateOnAxis(t,e){return vh.copy(t).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sh,t)}translateY(t){return this.translateOnAxis(Mh,t)}translateZ(t){return this.translateOnAxis(bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?so.copy(t):so.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Ys,so,this.up):Zn.lookAt(so,Ys,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Zn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wh),ns.child=t,this.dispatchEvent(ns),ns.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gd),Al.child=t,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wh),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let l=this.children[i].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*i-o[8]*s,o[13]+=i-o[1]*e-o[5]*i-o[9]*s,o[14]+=s-o[2]*e-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let o=this.children;for(let l=0,h=o.length;l<h;l++)o[l].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(h=>({...h})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(h,u){return h[u.uuid]===void 0&&(h[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let u=h.shapes;if(Array.isArray(u))for(let f=0,m=u.length;f<m;f++){let x=u[f];o(t.shapes,x)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let u=0,f=this.material.length;u<f;u++)h.push(o(t.materials,this.material[u]));s.material=h}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let h=0;h<this.children.length;h++)s.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let h=0;h<this.animations.length;h++){let u=this.animations[h];s.animations.push(o(t.animations,u))}}if(e){let h=l(t.geometries),u=l(t.materials),f=l(t.textures),m=l(t.images),x=l(t.shapes),p=l(t.skeletons),g=l(t.animations),S=l(t.nodes);h.length>0&&(i.geometries=h),u.length>0&&(i.materials=u),f.length>0&&(i.textures=f),m.length>0&&(i.images=m),x.length>0&&(i.shapes=x),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),S.length>0&&(i.nodes=S)}return i.object=s,i;function l(h){let u=[];for(let f in h){let m=h[f];delete m.metadata,u.push(m)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$e.DEFAULT_UP=new z(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},_d={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,l=null,h=this._targetRay,u=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(let w of t.hand.values()){let y=e.getJointPose(w,i),v=this._getHandJoint(f,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}let m=f.joints["index-finger-tip"],x=f.joints["thumb-tip"],p=m.position.distanceTo(x.position),g=.02,S=.005;f.inputState.pinching&&p>g+S?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&p<=g-S&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(_d)))}return h!==null&&(h.visible=s!==null),u!==null&&(u.visible=o!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new mn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Pl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var fe=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=i,de.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=de.workingColorSpace){if(t=Ic(t,1),e=se(e,0,1),i=se(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,l=2*i-o;this.r=Pl(l,o,t+1/3),this.g=Pl(l,o,t),this.b=Pl(l,o,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=Ze){function i(o){o!==void 0&&parseFloat(o)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,l=s[1],h=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){let i=Pu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return de.workingToColorSpace(qe.copy(this),t),Math.round(se(qe.r*255,0,255))*65536+Math.round(se(qe.g*255,0,255))*256+Math.round(se(qe.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(qe.copy(this),e);let i=qe.r,s=qe.g,o=qe.b,l=Math.max(i,s,o),h=Math.min(i,s,o),u,f,m=(h+l)/2;if(h===l)u=0,f=0;else{let x=l-h;switch(f=m<=.5?x/(l+h):x/(2-l-h),l){case i:u=(s-o)/x+(s<o?6:0);break;case s:u=(o-i)/x+2;break;case o:u=(i-s)/x+4;break}u/=6}return t.h=u,t.s=f,t.l=m,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ze){de.workingToColorSpace(qe.copy(this),t);let e=qe.r,i=qe.g,s=qe.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(ro);let i=Ks(ci.h,ro.h,e),s=Ks(ci.s,ro.s,e),o=Ks(ci.l,ro.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new fe;fe.NAMES=Pu;var or=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},En=new z,Jn=new z,Cl=new z,$n=new z,is=new z,ss=new z,Th=new z,Il=new z,Rl=new z,Ll=new z,Dl=new Me,Nl=new Me,Fl=new Me,Qn=class n{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),En.subVectors(t,e),s.cross(En);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){En.subVectors(s,e),Jn.subVectors(i,e),Cl.subVectors(t,e);let l=En.dot(En),h=En.dot(Jn),u=En.dot(Cl),f=Jn.dot(Jn),m=Jn.dot(Cl),x=l*f-h*h;if(x===0)return o.set(0,0,0),null;let p=1/x,g=(f*u-h*m)*p,S=(l*m-h*u)*p;return o.set(1-g-S,S,g)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,i,s,o,l,h,u){return this.getBarycoord(t,e,i,s,$n)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,$n.x),u.addScaledVector(l,$n.y),u.addScaledVector(h,$n.z),u)}static getInterpolatedAttribute(t,e,i,s,o,l){return Dl.setScalar(0),Nl.setScalar(0),Fl.setScalar(0),Dl.fromBufferAttribute(t,e),Nl.fromBufferAttribute(t,i),Fl.fromBufferAttribute(t,s),l.setScalar(0),l.addScaledVector(Dl,o.x),l.addScaledVector(Nl,o.y),l.addScaledVector(Fl,o.z),l}static isFrontFacing(t,e,i,s){return En.subVectors(i,e),Jn.subVectors(t,e),En.cross(Jn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),En.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,o=this.c,l,h;is.subVectors(s,i),ss.subVectors(o,i),Il.subVectors(t,i);let u=is.dot(Il),f=ss.dot(Il);if(u<=0&&f<=0)return e.copy(i);Rl.subVectors(t,s);let m=is.dot(Rl),x=ss.dot(Rl);if(m>=0&&x<=m)return e.copy(s);let p=u*x-m*f;if(p<=0&&u>=0&&m<=0)return l=u/(u-m),e.copy(i).addScaledVector(is,l);Ll.subVectors(t,o);let g=is.dot(Ll),S=ss.dot(Ll);if(S>=0&&g<=S)return e.copy(o);let w=g*f-u*S;if(w<=0&&f>=0&&S<=0)return h=f/(f-S),e.copy(i).addScaledVector(ss,h);let y=m*S-g*x;if(y<=0&&x-m>=0&&g-S>=0)return Th.subVectors(o,s),h=(x-m)/(x-m+(g-S)),e.copy(s).addScaledVector(Th,h);let v=1/(y+w+p);return l=w*v,h=p*v,e.copy(i).addScaledVector(is,l).addScaledVector(ss,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_n=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let l=0,h=o.count;l<h;l++)t.isMesh===!0?t.getVertexPosition(l,An):An.fromBufferAttribute(o,l),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox)),oo.applyMatrix4(t.matrixWorld),this.union(oo)}let s=t.children;for(let o=0,l=s.length;o<l;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),ao.subVectors(this.max,qs),rs.subVectors(t.a,qs),os.subVectors(t.b,qs),as.subVectors(t.c,qs),hi.subVectors(os,rs),ui.subVectors(as,os),Ri.subVectors(rs,as);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ri.z,Ri.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ri.z,0,-Ri.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ri.y,Ri.x,0];return!Ol(e,rs,os,as,ao)||(e=[1,0,0,0,1,0,0,0,1],!Ol(e,rs,os,as,ao))?!1:(lo.crossVectors(hi,ui),e=[lo.x,lo.y,lo.z],Ol(e,rs,os,as,ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Kn=[new z,new z,new z,new z,new z,new z,new z,new z],An=new z,oo=new _n,rs=new z,os=new z,as=new z,hi=new z,ui=new z,Ri=new z,qs=new z,ao=new z,lo=new z,Li=new z;function Ol(n,t,e,i,s){for(let o=0,l=n.length-3;o<=l;o+=3){Li.fromArray(n,o);let h=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),u=t.dot(Li),f=e.dot(Li),m=i.dot(Li);if(Math.max(-Math.max(u,f,m),Math.min(u,f,m))>h)return!1}return!0}var De=new z,co=new _t,xd=0,Qe=class extends In{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Pc,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)co.fromBufferAttribute(this,e),co.applyMatrix3(t),this.setXY(e,co.x,co.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array),o=be(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ar=class extends Qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var lr=class extends Qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var me=class extends Qe{constructor(t,e,i){super(new Float32Array(t),e,i)}},yd=new _n,Zs=new z,Ul=new z,Vn=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):yd.setFromPoints(t).getCenter(i);let s=0;for(let o=0,l=t.length;o<l;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);let e=Zs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Zs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(Ul)),this.expandByPoint(Zs.copy(t.center).sub(Ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vd=0,Sn=new ge,Bl=new $e,ls=new z,dn=new _n,Js=new _n,Be=new z,Le=class n extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xf(t)?lr:ar)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new oe().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,i){return Sn.makeTranslation(t,e,i),this.applyMatrix4(Sn),this}scale(t,e,i){return Sn.makeScale(t,e,i),this.applyMatrix4(Sn),this}lookAt(t){return Bl.lookAt(t),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,o=t.length;s<o;s++){let l=t[s];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new me(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let o=e[i];dn.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let i=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){let h=e[o];Js.setFromBufferAttribute(h),this.morphTargetsRelative?(Be.addVectors(dn.min,Js.min),dn.expandByPoint(Be),Be.addVectors(dn.max,Js.max),dn.expandByPoint(Be)):(dn.expandByPoint(Js.min),dn.expandByPoint(Js.max))}dn.getCenter(i);let s=0;for(let o=0,l=t.count;o<l;o++)Be.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(Be));if(e)for(let o=0,l=e.length;o<l;o++){let h=e[o],u=this.morphTargetsRelative;for(let f=0,m=h.count;f<m;f++)Be.fromBufferAttribute(h,f),u&&(ls.fromBufferAttribute(t,f),Be.add(ls)),s=Math.max(s,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,o=e.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==i.count)&&(l=new Qe(new Float32Array(4*i.count),4),this.setAttribute("tangent",l));let h=[],u=[];for(let T=0;T<i.count;T++)h[T]=new z,u[T]=new z;let f=new z,m=new z,x=new z,p=new _t,g=new _t,S=new _t,w=new z,y=new z;function v(T,D,B){f.fromBufferAttribute(i,T),m.fromBufferAttribute(i,D),x.fromBufferAttribute(i,B),p.fromBufferAttribute(o,T),g.fromBufferAttribute(o,D),S.fromBufferAttribute(o,B),m.sub(f),x.sub(f),g.sub(p),S.sub(p);let N=1/(g.x*S.y-S.x*g.y);isFinite(N)&&(w.copy(m).multiplyScalar(S.y).addScaledVector(x,-g.y).multiplyScalar(N),y.copy(x).multiplyScalar(g.x).addScaledVector(m,-S.x).multiplyScalar(N),h[T].add(w),h[D].add(w),h[B].add(w),u[T].add(y),u[D].add(y),u[B].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let T=0,D=P.length;T<D;++T){let B=P[T],N=B.start,G=B.count;for(let H=N,U=N+G;H<U;H+=3)v(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let A=new z,E=new z,R=new z,L=new z;function O(T){R.fromBufferAttribute(s,T),L.copy(R);let D=h[T];A.copy(D),A.sub(R.multiplyScalar(R.dot(D))).normalize(),E.crossVectors(L,D);let N=E.dot(u[T])<0?-1:1;l.setXYZW(T,A.x,A.y,A.z,N)}for(let T=0,D=P.length;T<D;++T){let B=P[T],N=B.start,G=B.count;for(let H=N,U=N+G;H<U;H+=3)O(t.getX(H+0)),O(t.getX(H+1)),O(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);let s=new z,o=new z,l=new z,h=new z,u=new z,f=new z,m=new z,x=new z;if(t)for(let p=0,g=t.count;p<g;p+=3){let S=t.getX(p+0),w=t.getX(p+1),y=t.getX(p+2);s.fromBufferAttribute(e,S),o.fromBufferAttribute(e,w),l.fromBufferAttribute(e,y),m.subVectors(l,o),x.subVectors(s,o),m.cross(x),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,y),h.add(m),u.add(m),f.add(m),i.setXYZ(S,h.x,h.y,h.z),i.setXYZ(w,u.x,u.y,u.z),i.setXYZ(y,f.x,f.y,f.z)}else for(let p=0,g=e.count;p<g;p+=3)s.fromBufferAttribute(e,p+0),o.fromBufferAttribute(e,p+1),l.fromBufferAttribute(e,p+2),m.subVectors(l,o),x.subVectors(s,o),m.cross(x),i.setXYZ(p+0,m.x,m.y,m.z),i.setXYZ(p+1,m.x,m.y,m.z),i.setXYZ(p+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(h,u){let f=h.array,m=h.itemSize,x=h.normalized,p=new f.constructor(u.length*m),g=0,S=0;for(let w=0,y=u.length;w<y;w++){h.isInterleavedBufferAttribute?g=u[w]*h.data.stride+h.offset:g=u[w]*m;for(let v=0;v<m;v++)p[S++]=f[g++]}return new Qe(p,m,x)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let h in s){let u=s[h],f=t(u,i);e.setAttribute(h,f)}let o=this.morphAttributes;for(let h in o){let u=[],f=o[h];for(let m=0,x=f.length;m<x;m++){let p=f[m],g=t(p,i);u.push(g)}e.morphAttributes[h]=u}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let h=0,u=l.length;h<u;h++){let f=l[h];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let f in u)u[f]!==void 0&&(t[f]=u[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let u in i){let f=i[u];t.data.attributes[u]=f.toJSON(t.data)}let s={},o=!1;for(let u in this.morphAttributes){let f=this.morphAttributes[u],m=[];for(let x=0,p=f.length;x<p;x++){let g=f[x];m.push(g.toJSON(t.data))}m.length>0&&(s[u]=m,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let f in s){let m=s[f];this.setAttribute(f,m.clone(e))}let o=t.morphAttributes;for(let f in o){let m=[],x=o[f];for(let p=0,g=x.length;p<g;p++)m.push(x[p].clone(e));this.morphAttributes[f]=m}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let f=0,m=l.length;f<m;f++){let x=l[f];this.addGroup(x.start,x.count,x.materialIndex)}let h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},cr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pc,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},je=new z,Mn=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array),o=be(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){sr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){sr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zl=new z,Sd=new z,Md=new oe,pn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=zl.subVectors(i,e).cross(Sd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(zl),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let l=-(t.start.dot(this.normal)+this.constant)/o;return i===!0&&(l<0||l>1)?null:e.copy(t.start).addScaledVector(s,l)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Md.getNormalMatrix(t),s=this.coplanarPoint(zl).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},bd=0,pi=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=Rs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=fc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Io,this.stencilZFail=Io,this.stencilZPass=Io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}if(e){let o=s(t.textures),l=s(t.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new pn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new _t().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var jn=new z,kl=new z,ho=new z,uo=new z,Ui=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){kl.copy(t).add(e).multiplyScalar(.5),ho.copy(e).sub(t).normalize(),uo.copy(this.origin).sub(kl);let o=t.distanceTo(e)*.5,l=-this.direction.dot(ho),h=uo.dot(this.direction),u=-uo.dot(ho),f=uo.lengthSq(),m=Math.abs(1-l*l),x,p,g,S;if(m>0)if(x=l*u-h,p=l*h-u,S=o*m,x>=0)if(p>=-S)if(p<=S){let w=1/m;x*=w,p*=w,g=x*(x+l*p+2*h)+p*(l*x+p+2*u)+f}else p=o,x=Math.max(0,-(l*p+h)),g=-x*x+p*(p+2*u)+f;else p=-o,x=Math.max(0,-(l*p+h)),g=-x*x+p*(p+2*u)+f;else p<=-S?(x=Math.max(0,-(-l*o+h)),p=x>0?-o:Math.min(Math.max(-o,-u),o),g=-x*x+p*(p+2*u)+f):p<=S?(x=0,p=Math.min(Math.max(-o,-u),o),g=p*(p+2*u)+f):(x=Math.max(0,-(l*o+h)),p=x>0?o:Math.min(Math.max(-o,-u),o),g=-x*x+p*(p+2*u)+f);else p=l>0?-o:o,x=Math.max(0,-(l*p+h)),g=-x*x+p*(p+2*u)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(kl).addScaledVector(ho,p),g}intersectSphere(t,e){if(t.radius<0)return null;jn.subVectors(t.center,this.origin);let i=jn.dot(this.direction),s=jn.dot(jn)-i*i,o=t.radius*t.radius;if(s>o)return null;let l=Math.sqrt(o-s),h=i-l,u=i+l;return u<0?null:h<0?this.at(u,e):this.at(h,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,l,h,u,f=1/this.direction.x,m=1/this.direction.y,x=1/this.direction.z,p=this.origin;return f>=0?(i=(t.min.x-p.x)*f,s=(t.max.x-p.x)*f):(i=(t.max.x-p.x)*f,s=(t.min.x-p.x)*f),m>=0?(o=(t.min.y-p.y)*m,l=(t.max.y-p.y)*m):(o=(t.max.y-p.y)*m,l=(t.min.y-p.y)*m),i>l||o>s||((o>i||isNaN(i))&&(i=o),(l<s||isNaN(s))&&(s=l),x>=0?(h=(t.min.z-p.z)*x,u=(t.max.z-p.z)*x):(h=(t.max.z-p.z)*x,u=(t.min.z-p.z)*x),i>u||h>s)||((h>i||i!==i)&&(i=h),(u<s||s!==s)&&(s=u),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,i,s,o){let l=this.origin,h=this.direction,u=h.x,f=h.y,m=h.z,x=t.x-l.x,p=t.y-l.y,g=t.z-l.z,S=e.x-l.x,w=e.y-l.y,y=e.z-l.z,v=i.x-l.x,P=i.y-l.y,A=i.z-l.z,E=Math.abs(u),R=Math.abs(f),L=Math.abs(m),O,T,D,B,N,G,H,U,W,K,$,at;if(E>=R&&E>=L?(D=u,G=x,W=S,at=v,u>=0?(O=f,T=m,B=p,N=g,H=w,U=y,K=P,$=A):(O=m,T=f,B=g,N=p,H=y,U=w,K=A,$=P)):R>=L?(D=f,G=p,W=w,at=P,f>=0?(O=m,T=u,B=g,N=x,H=y,U=S,K=A,$=v):(O=u,T=m,B=x,N=g,H=S,U=y,K=v,$=A)):(D=m,G=g,W=y,at=A,m>=0?(O=u,T=f,B=x,N=p,H=S,U=w,K=v,$=P):(O=f,T=u,B=p,N=x,H=w,U=S,K=P,$=v)),D===0)return null;let tt=O/D,it=T/D,st=1/D,Tt=B-tt*G,Et=N-it*G,qt=H-tt*W,ne=U-it*W,pe=K-tt*at,lt=$-it*at,dt=pe*ne-lt*qt,Nt=Tt*lt-Et*pe,Kt=qt*Et-ne*Tt;if(s){if(dt<0||Nt<0||Kt<0)return null}else if((dt<0||Nt<0||Kt<0)&&(dt>0||Nt>0||Kt>0))return null;let Ft=dt+Nt+Kt;if(Ft===0)return null;let Qt=st*(dt*G+Nt*W+Kt*at);return(Ft>0?Qt<0:Qt>0)?null:this.at(Qt/Ft,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Eh=new ge,Di=new Ui,fo=new Vn,Ah=new z,po=new z,mo=new z,go=new z,Vl=new z,_o=new z,Ph=new z,xo=new z,Ce=class extends $e{constructor(t=new Le,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){let h=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let h=this.morphTargetInfluences;if(o&&h){_o.set(0,0,0);for(let u=0,f=o.length;u<f;u++){let m=h[u],x=o[u];m!==0&&(Vl.fromBufferAttribute(x,t),l?_o.addScaledVector(Vl,m):_o.addScaledVector(Vl.sub(e),m))}e.add(_o)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(o),Di.copy(t.ray).recast(t.near),!(fo.containsPoint(Di.origin)===!1&&(Di.intersectSphere(fo,Ah)===null||Di.origin.distanceToSquared(Ah)>(t.far-t.near)**2))&&(Eh.copy(o).invert(),Di.copy(t.ray).applyMatrix4(Eh),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,i){let s,o=this.geometry,l=this.material,h=o.index,u=o.attributes.position,f=o.attributes.uv,m=o.attributes.uv1,x=o.attributes.normal,p=o.groups,g=o.drawRange;if(h!==null)if(Array.isArray(l))for(let S=0,w=p.length;S<w;S++){let y=p[S],v=l[y.materialIndex],P=Math.max(y.start,g.start),A=Math.min(h.count,Math.min(y.start+y.count,g.start+g.count));for(let E=P,R=A;E<R;E+=3){let L=h.getX(E),O=h.getX(E+1),T=h.getX(E+2);s=yo(this,v,t,i,f,m,x,L,O,T),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let S=Math.max(0,g.start),w=Math.min(h.count,g.start+g.count);for(let y=S,v=w;y<v;y+=3){let P=h.getX(y),A=h.getX(y+1),E=h.getX(y+2);s=yo(this,l,t,i,f,m,x,P,A,E),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(l))for(let S=0,w=p.length;S<w;S++){let y=p[S],v=l[y.materialIndex],P=Math.max(y.start,g.start),A=Math.min(u.count,Math.min(y.start+y.count,g.start+g.count));for(let E=P,R=A;E<R;E+=3){let L=E,O=E+1,T=E+2;s=yo(this,v,t,i,f,m,x,L,O,T),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let S=Math.max(0,g.start),w=Math.min(u.count,g.start+g.count);for(let y=S,v=w;y<v;y+=3){let P=y,A=y+1,E=y+2;s=yo(this,l,t,i,f,m,x,P,A,E),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};function wd(n,t,e,i,s,o,l,h){let u;if(t.side===Ge?u=i.intersectTriangle(l,o,s,!0,h):u=i.intersectTriangle(s,o,l,t.side===bi,h),u===null)return null;xo.copy(h),xo.applyMatrix4(n.matrixWorld);let f=e.ray.origin.distanceTo(xo);return f<e.near||f>e.far?null:{distance:f,point:xo.clone(),object:n}}function yo(n,t,e,i,s,o,l,h,u,f){n.getVertexPosition(h,po),n.getVertexPosition(u,mo),n.getVertexPosition(f,go);let m=wd(n,t,e,i,po,mo,go,Ph);if(m){let x=new z;Qn.getBarycoord(Ph,po,mo,go,x),s&&(m.uv=Qn.getInterpolatedAttribute(s,h,u,f,x,new _t)),o&&(m.uv1=Qn.getInterpolatedAttribute(o,h,u,f,x,new _t)),l&&(m.normal=Qn.getInterpolatedAttribute(l,h,u,f,x,new z),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));let p={a:h,b:u,c:f,normal:new z,materialIndex:0};Qn.getNormal(po,mo,go,p.normal),m.face=p,m.barycoord=x}return m}var bs=class extends tn{constructor(t=null,e=1,i=1,s,o,l,h,u,f=Ne,m=Ne,x,p){super(null,l,h,u,f,m,s,o,x,p),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ni=new Vn,Td=new _t(.5,.5),vo=new z,ws=class{constructor(t=new pn,e=new pn,i=new pn,s=new pn,o=new pn,l=new pn){this.planes=[t,e,i,s,o,l]}set(t,e,i,s,o,l){let h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(i),h[3].copy(s),h[4].copy(o),h[5].copy(l),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Cn,i=!1){let s=this.planes,o=t.elements,l=o[0],h=o[1],u=o[2],f=o[3],m=o[4],x=o[5],p=o[6],g=o[7],S=o[8],w=o[9],y=o[10],v=o[11],P=o[12],A=o[13],E=o[14],R=o[15];if(s[0].setComponents(f-l,g-m,v-S,R-P).normalize(),s[1].setComponents(f+l,g+m,v+S,R+P).normalize(),s[2].setComponents(f+h,g+x,v+w,R+A).normalize(),s[3].setComponents(f-h,g-x,v-w,R-A).normalize(),i)s[4].setComponents(u,p,y,E).normalize(),s[5].setComponents(f-u,g-p,v-y,R-E).normalize();else if(s[4].setComponents(f-u,g-p,v-y,R-E).normalize(),e===Cn)s[5].setComponents(f+u,g+p,v+y,R+E).normalize();else if(e===_s)s[5].setComponents(u,p,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){Ni.center.set(0,0,0);let e=Td.distanceTo(t.center);return Ni.radius=.7071067811865476+e,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(vo.x=s.normal.x>0?t.max.x:t.min.x,vo.y=s.normal.y>0?t.max.y:t.min.y,vo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var hr=class extends tn{constructor(t=[],e=wi,i,s,o,l,h,u,f,m){super(t,e,i,s,o,l,h,u,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ts=class extends tn{constructor(t,e,i,s,o,l,h,u,f){super(t,e,i,s,o,l,h,u,f),this.isCanvasTexture=!0,this.needsUpdate=!0}};var mi=class extends tn{constructor(t,e,i=Ln,s,o,l,h=Ne,u=Ne,f,m=kn,x=1){if(m!==kn&&m!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:x};super(p,s,o,l,h,u,m,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ho=class extends mi{constructor(t,e=Ln,i=wi,s,o,l=Ne,h=Ne,u,f=kn){let m={width:t,height:t,depth:1},x=[m,m,m,m,m,m];super(t,t,e,i,s,o,l,h,u,f),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ur=class extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ve=class n extends Le{constructor(t=1,e=1,i=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:l};let h=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);let u=[],f=[],m=[],x=[],p=0,g=0;S("z","y","x",-1,-1,i,e,t,l,o,0),S("z","y","x",1,-1,i,e,-t,l,o,1),S("x","z","y",1,1,t,i,e,s,l,2),S("x","z","y",1,-1,t,i,-e,s,l,3),S("x","y","z",1,-1,t,e,i,s,o,4),S("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(u),this.setAttribute("position",new me(f,3)),this.setAttribute("normal",new me(m,3)),this.setAttribute("uv",new me(x,2));function S(w,y,v,P,A,E,R,L,O,T,D){let B=E/O,N=R/T,G=E/2,H=R/2,U=L/2,W=O+1,K=T+1,$=0,at=0,tt=new z;for(let it=0;it<K;it++){let st=it*N-H;for(let Tt=0;Tt<W;Tt++){let Et=Tt*B-G;tt[w]=Et*P,tt[y]=st*A,tt[v]=U,f.push(tt.x,tt.y,tt.z),tt[w]=0,tt[y]=0,tt[v]=L>0?1:-1,m.push(tt.x,tt.y,tt.z),x.push(Tt/O),x.push(1-it/T),$+=1}}for(let it=0;it<T;it++)for(let st=0;st<O;st++){let Tt=p+st+W*it,Et=p+st+W*(it+1),qt=p+(st+1)+W*(it+1),ne=p+(st+1)+W*it;u.push(Tt,Et,ne),u.push(Et,qt,ne),at+=6}h.addGroup(g,at,D),g+=at,p+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fr=class n extends Le{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let o=[],l=[],h=[],u=[],f=new z,m=new _t;l.push(0,0,0),h.push(0,0,1),u.push(.5,.5);for(let x=0,p=3;x<=e;x++,p+=3){let g=i+x/e*s;f.x=t*Math.cos(g),f.y=t*Math.sin(g),l.push(f.x,f.y,f.z),h.push(0,0,1),m.x=(l[p]/t+1)/2,m.y=(l[p+1]/t+1)/2,u.push(m.x,m.y)}for(let x=1;x<=e;x++)o.push(x,x+1,0);this.setIndex(o),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ei=class n extends Le{constructor(t=1,e=1,i=1,s=32,o=1,l=!1,h=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:l,thetaStart:h,thetaLength:u};let f=this;s=Math.floor(s),o=Math.floor(o);let m=[],x=[],p=[],g=[],S=0,w=[],y=i/2,v=0;P(),l===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(m),this.setAttribute("position",new me(x,3)),this.setAttribute("normal",new me(p,3)),this.setAttribute("uv",new me(g,2));function P(){let E=new z,R=new z,L=0,O=(e-t)/i;for(let T=0;T<=o;T++){let D=[],B=T/o,N=B*(e-t)+t;for(let G=0;G<=s;G++){let H=G/s,U=H*u+h,W=Math.sin(U),K=Math.cos(U);R.x=N*W,R.y=-B*i+y,R.z=N*K,x.push(R.x,R.y,R.z),E.set(W,O,K).normalize(),p.push(E.x,E.y,E.z),g.push(H,1-B),D.push(S++)}w.push(D)}for(let T=0;T<s;T++)for(let D=0;D<o;D++){let B=w[D][T],N=w[D+1][T],G=w[D+1][T+1],H=w[D][T+1];(t>0||D!==0)&&(m.push(B,N,H),L+=3),(e>0||D!==o-1)&&(m.push(N,G,H),L+=3)}f.addGroup(v,L,0),v+=L}function A(E){let R=S,L=new _t,O=new z,T=0,D=E===!0?t:e,B=E===!0?1:-1;for(let G=1;G<=s;G++)x.push(0,y*B,0),p.push(0,B,0),g.push(.5,.5),S++;let N=S;for(let G=0;G<=s;G++){let U=G/s*u+h,W=Math.cos(U),K=Math.sin(U);O.x=D*K,O.y=y*B,O.z=D*W,x.push(O.x,O.y,O.z),p.push(0,B,0),L.x=W*.5+.5,L.y=K*.5*B+.5,g.push(L.x,L.y),S++}for(let G=0;G<s;G++){let H=R+G,U=N+G;E===!0?m.push(U,U+1,H):m.push(U+1,U,H),T+=3}f.addGroup(v,T,E===!0?1:2),v+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var So=new z,Mo=new z,Gl=new z,bo=new Qn,dr=class extends Le{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),o=Math.cos(ps*e),l=t.getIndex(),h=t.getAttribute("position"),u=l?l.count:h.count,f=[0,0,0],m=["a","b","c"],x=new Array(3),p={},g=[];for(let S=0;S<u;S+=3){l?(f[0]=l.getX(S),f[1]=l.getX(S+1),f[2]=l.getX(S+2)):(f[0]=S,f[1]=S+1,f[2]=S+2);let{a:w,b:y,c:v}=bo;if(w.fromBufferAttribute(h,f[0]),y.fromBufferAttribute(h,f[1]),v.fromBufferAttribute(h,f[2]),bo.getNormal(Gl),x[0]=`${Math.round(w.x*s)},${Math.round(w.y*s)},${Math.round(w.z*s)}`,x[1]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,x[2]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let P=0;P<3;P++){let A=(P+1)%3,E=x[P],R=x[A],L=bo[m[P]],O=bo[m[A]],T=`${E}_${R}`,D=`${R}_${E}`;D in p&&p[D]?(Gl.dot(p[D].normal)<=o&&(g.push(L.x,L.y,L.z),g.push(O.x,O.y,O.z)),p[D]=null):T in p||(p[T]={index0:f[P],index1:f[A],normal:Gl.clone()})}}for(let S in p)if(p[S]){let{index0:w,index1:y}=p[S];So.fromBufferAttribute(h,w),Mo.fromBufferAttribute(h,y),g.push(So.x,So.y,So.z),g.push(Mo.x,Mo.y,Mo.z)}this.setAttribute("position",new me(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),o=0;e.push(0);for(let l=1;l<=t;l++)i=this.getPoint(l/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,o=i.length,l;e?l=e:l=t*i[o-1];let h=0,u=o-1,f;for(;h<=u;)if(s=Math.floor(h+(u-h)/2),f=i[s]-l,f<0)h=s+1;else if(f>0)u=s-1;else{u=s;break}if(s=u,i[s]===l)return s/(o-1);let m=i[s],p=i[s+1]-m,g=(l-m)/p;return(s+g)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);let l=this.getPoint(s),h=this.getPoint(o),u=e||(l.isVector2?new _t:new z);return u.copy(h).sub(l).normalize(),u}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new z,s=[],o=[],l=[],h=new z,u=new ge;for(let g=0;g<=t;g++){let S=g/t;s[g]=this.getTangentAt(S,new z)}o[0]=new z,l[0]=new z;let f=Number.MAX_VALUE,m=Math.abs(s[0].x),x=Math.abs(s[0].y),p=Math.abs(s[0].z);m<=f&&(f=m,i.set(1,0,0)),x<=f&&(f=x,i.set(0,1,0)),p<=f&&i.set(0,0,1),h.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],h),l[0].crossVectors(s[0],o[0]);for(let g=1;g<=t;g++){if(o[g]=o[g-1].clone(),l[g]=l[g-1].clone(),h.crossVectors(s[g-1],s[g]),h.length()>Number.EPSILON){h.normalize();let S=Math.acos(se(s[g-1].dot(s[g]),-1,1));o[g].applyMatrix4(u.makeRotationAxis(h,S))}l[g].crossVectors(s[g],o[g])}if(e===!0){let g=Math.acos(se(o[0].dot(o[t]),-1,1));g/=t,s[0].dot(h.crossVectors(o[0],o[t]))>0&&(g=-g);for(let S=1;S<=t;S++)o[S].applyMatrix4(u.makeRotationAxis(s[S],g*S)),l[S].crossVectors(s[S],o[S])}return{tangents:s,normals:o,binormals:l}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Es=class extends xn{constructor(t=0,e=0,i=1,s=1,o=0,l=Math.PI*2,h=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=l,this.aClockwise=h,this.aRotation=u}getPoint(t,e=new _t){let i=e,s=Math.PI*2,o=this.aEndAngle-this.aStartAngle,l=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(l?o=0:o=s),this.aClockwise===!0&&!l&&(o===s?o=-s:o=o-s);let h=this.aStartAngle+t*o,u=this.aX+this.xRadius*Math.cos(h),f=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){let m=Math.cos(this.aRotation),x=Math.sin(this.aRotation),p=u-this.aX,g=f-this.aY;u=p*m-g*x+this.aX,f=p*x+g*m+this.aY}return i.set(u,f)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Xo=class extends Es{constructor(t,e,i,s,o,l){super(t,e,i,i,s,o,l),this.isArcCurve=!0,this.type="ArcCurve"}};function Rc(){let n=0,t=0,e=0,i=0;function s(o,l,h,u){n=o,t=h,e=-3*o+3*l-2*h-u,i=2*o-2*l+h+u}return{initCatmullRom:function(o,l,h,u,f){s(l,h,f*(h-o),f*(u-l))},initNonuniformCatmullRom:function(o,l,h,u,f,m,x){let p=(l-o)/f-(h-o)/(f+m)+(h-l)/m,g=(h-l)/m-(u-l)/(m+x)+(u-h)/x;p*=m,g*=m,s(l,h,p,g)},calc:function(o){let l=o*o,h=l*o;return n+t*o+e*l+i*h}}}var Ch=new z,Ih=new z,Hl=new Rc,Xl=new Rc,Wl=new Rc,Wo=class extends xn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new z){let i=e,s=this.points,o=s.length,l=(o-(this.closed?0:1))*t,h=Math.floor(l),u=l-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/o)+1)*o:u===0&&h===o-1&&(h=o-2,u=1);let f,m;this.closed||h>0?f=s[(h-1)%o]:(Ih.subVectors(s[0],s[1]).add(s[0]),f=Ih);let x=s[h%o],p=s[(h+1)%o];if(this.closed||h+2<o?m=s[(h+2)%o]:(Ch.subVectors(s[o-1],s[o-2]).add(s[o-1]),m=Ch),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,S=Math.pow(f.distanceToSquared(x),g),w=Math.pow(x.distanceToSquared(p),g),y=Math.pow(p.distanceToSquared(m),g);w<1e-4&&(w=1),S<1e-4&&(S=w),y<1e-4&&(y=w),Hl.initNonuniformCatmullRom(f.x,x.x,p.x,m.x,S,w,y),Xl.initNonuniformCatmullRom(f.y,x.y,p.y,m.y,S,w,y),Wl.initNonuniformCatmullRom(f.z,x.z,p.z,m.z,S,w,y)}else this.curveType==="catmullrom"&&(Hl.initCatmullRom(f.x,x.x,p.x,m.x,this.tension),Xl.initCatmullRom(f.y,x.y,p.y,m.y,this.tension),Wl.initCatmullRom(f.z,x.z,p.z,m.z,this.tension));return i.set(Hl.calc(u),Xl.calc(u),Wl.calc(u)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Rh(n,t,e,i,s){let o=(i-t)*.5,l=(s-e)*.5,h=n*n,u=n*h;return(2*e-2*i+o+l)*u+(-3*e+3*i-2*o-l)*h+o*n+e}function Ed(n,t){let e=1-n;return e*e*t}function Ad(n,t){return 2*(1-n)*n*t}function Pd(n,t){return n*n*t}function js(n,t,e,i){return Ed(n,t)+Ad(n,e)+Pd(n,i)}function Cd(n,t){let e=1-n;return e*e*e*t}function Id(n,t){let e=1-n;return 3*e*e*n*t}function Rd(n,t){return 3*(1-n)*n*n*t}function Ld(n,t){return n*n*n*t}function Qs(n,t,e,i,s){return Cd(n,t)+Id(n,e)+Rd(n,i)+Ld(n,s)}var pr=class extends xn{constructor(t=new _t,e=new _t,i=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new _t){let i=e,s=this.v0,o=this.v1,l=this.v2,h=this.v3;return i.set(Qs(t,s.x,o.x,l.x,h.x),Qs(t,s.y,o.y,l.y,h.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yo=class extends xn{constructor(t=new z,e=new z,i=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new z){let i=e,s=this.v0,o=this.v1,l=this.v2,h=this.v3;return i.set(Qs(t,s.x,o.x,l.x,h.x),Qs(t,s.y,o.y,l.y,h.y),Qs(t,s.z,o.z,l.z,h.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mr=class extends xn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qo=class extends xn{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gr=class extends xn{constructor(t=new _t,e=new _t,i=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new _t){let i=e,s=this.v0,o=this.v1,l=this.v2;return i.set(js(t,s.x,o.x,l.x),js(t,s.y,o.y,l.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zo=class extends xn{constructor(t=new z,e=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new z){let i=e,s=this.v0,o=this.v1,l=this.v2;return i.set(js(t,s.x,o.x,l.x),js(t,s.y,o.y,l.y),js(t,s.z,o.z,l.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_r=class extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let i=e,s=this.points,o=(s.length-1)*t,l=Math.floor(o),h=o-l,u=s[l===0?l:l-1],f=s[l],m=s[l>s.length-2?s.length-1:l+1],x=s[l>s.length-3?s.length-1:l+2];return i.set(Rh(h,u.x,f.x,m.x,x.x),Rh(h,u.y,f.y,m.y,x.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},Ql=Object.freeze({__proto__:null,ArcCurve:Xo,CatmullRomCurve3:Wo,CubicBezierCurve:pr,CubicBezierCurve3:Yo,EllipseCurve:Es,LineCurve:mr,LineCurve3:qo,QuadraticBezierCurve:gr,QuadraticBezierCurve3:Zo,SplineCurve:_r}),Jo=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ql[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),o=0;for(;o<s.length;){if(s[o]>=i){let l=s[o]-i,h=this.curves[o],u=h.getLength(),f=u===0?0:1-l/u;return h.getPointAt(f,e)}o++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,o=this.curves;s<o.length;s++){let l=o[s],h=l.isEllipseCurve?t*2:l.isLineCurve||l.isLineCurve3?1:l.isSplineCurve?t*l.points.length:t,u=l.getPoints(h);for(let f=0;f<u.length;f++){let m=u[f];i&&i.equals(m)||(e.push(m),i=m)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Ql[s.type]().fromJSON(s))}return this}},Bi=class extends Jo{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new mr(this.currentPoint.clone(),new _t(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let o=new gr(this.currentPoint.clone(),new _t(t,e),new _t(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,l){let h=new pr(this.currentPoint.clone(),new _t(t,e),new _t(i,s),new _t(o,l));return this.curves.push(h),this.currentPoint.set(o,l),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new _r(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,l){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(t+h,e+u,i,s,o,l),this}absarc(t,e,i,s,o,l){return this.absellipse(t,e,i,i,s,o,l),this}ellipse(t,e,i,s,o,l,h,u){let f=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(t+f,e+m,i,s,o,l,h,u),this}absellipse(t,e,i,s,o,l,h,u){let f=new Es(t,e,i,s,o,l,h,u);if(this.curves.length>0){let x=f.getPoint(0);x.equals(this.currentPoint)||this.lineTo(x.x,x.y)}this.curves.push(f);let m=f.getPoint(1);return this.currentPoint.copy(m),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ni=class extends Bi{constructor(t){super(t),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Bi().fromJSON(s))}return this}};function Dd(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,o=Cu(n,0,s,e,!0),l=[];if(!o||o.next===o.prev)return l;let h,u,f;if(i&&(o=Bd(n,t,o,e)),n.length>80*e){h=n[0],u=n[1];let m=h,x=u;for(let p=e;p<s;p+=e){let g=n[p],S=n[p+1];g<h&&(h=g),S<u&&(u=S),g>m&&(m=g),S>x&&(x=S)}f=Math.max(m-h,x-u),f=f!==0?32767/f:0}return xr(o,l,e,h,u,f,0),l}function Cu(n,t,e,i,s){let o;if(s===Jd(n,t,e,i)>0)for(let l=t;l<e;l+=i)o=Lh(l/i|0,n[l],n[l+1],o);else for(let l=e-i;l>=t;l-=i)o=Lh(l/i|0,n[l],n[l+1],o);return o&&As(o,o.next)&&(vr(o),o=o.next),o}function zi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(As(e,e.next)||Ie(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function xr(n,t,e,i,s,o,l){if(!n)return;!l&&o&&Hd(n,i,s,o);let h=n;for(;n.prev!==n.next;){let u=n.prev,f=n.next;if(o?Fd(n,i,s,o):Nd(n)){t.push(u.i,n.i,f.i),vr(n),n=f.next,h=f.next;continue}if(n=f,n===h){l?l===1?(n=Od(zi(n),t),xr(n,t,e,i,s,o,2)):l===2&&Ud(n,t,e,i,s,o):xr(zi(n),t,e,i,s,o,1);break}}}function Nd(n){let t=n.prev,e=n,i=n.next;if(Ie(t,e,i)>=0)return!1;let s=t.x,o=e.x,l=i.x,h=t.y,u=e.y,f=i.y,m=Math.min(s,o,l),x=Math.min(h,u,f),p=Math.max(s,o,l),g=Math.max(h,u,f),S=i.next;for(;S!==t;){if(S.x>=m&&S.x<=p&&S.y>=x&&S.y<=g&&$s(s,h,o,u,l,f,S.x,S.y)&&Ie(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function Fd(n,t,e,i){let s=n.prev,o=n,l=n.next;if(Ie(s,o,l)>=0)return!1;let h=s.x,u=o.x,f=l.x,m=s.y,x=o.y,p=l.y,g=Math.min(h,u,f),S=Math.min(m,x,p),w=Math.max(h,u,f),y=Math.max(m,x,p),v=tc(g,S,t,e,i),P=tc(w,y,t,e,i),A=n.prevZ,E=n.nextZ;for(;A&&A.z>=v&&E&&E.z<=P;){if(A.x>=g&&A.x<=w&&A.y>=S&&A.y<=y&&A!==s&&A!==l&&$s(h,m,u,x,f,p,A.x,A.y)&&Ie(A.prev,A,A.next)>=0||(A=A.prevZ,E.x>=g&&E.x<=w&&E.y>=S&&E.y<=y&&E!==s&&E!==l&&$s(h,m,u,x,f,p,E.x,E.y)&&Ie(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;A&&A.z>=v;){if(A.x>=g&&A.x<=w&&A.y>=S&&A.y<=y&&A!==s&&A!==l&&$s(h,m,u,x,f,p,A.x,A.y)&&Ie(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;E&&E.z<=P;){if(E.x>=g&&E.x<=w&&E.y>=S&&E.y<=y&&E!==s&&E!==l&&$s(h,m,u,x,f,p,E.x,E.y)&&Ie(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Od(n,t){let e=n;do{let i=e.prev,s=e.next.next;!As(i,s)&&Ru(i,e,e.next,s)&&yr(i,s)&&yr(s,i)&&(t.push(i.i,e.i,s.i),vr(e),vr(e.next),e=n=s),e=e.next}while(e!==n);return zi(e)}function Ud(n,t,e,i,s,o){let l=n;do{let h=l.next.next;for(;h!==l.prev;){if(l.i!==h.i&&Yd(l,h)){let u=Lu(l,h);l=zi(l,l.next),u=zi(u,u.next),xr(l,t,e,i,s,o,0),xr(u,t,e,i,s,o,0);return}h=h.next}l=l.next}while(l!==n)}function Bd(n,t,e,i){let s=[];for(let o=0,l=t.length;o<l;o++){let h=t[o]*i,u=o<l-1?t[o+1]*i:n.length,f=Cu(n,h,u,i,!1);f===f.next&&(f.steiner=!0),s.push(Wd(f))}s.sort(zd);for(let o=0;o<s.length;o++)e=kd(s[o],e);return e}function zd(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function kd(n,t){let e=Vd(n,t);if(!e)return t;let i=Lu(e,n);return zi(i,i.next),zi(e,e.next)}function Vd(n,t){let e=t,i=n.x,s=n.y,o=-1/0,l;if(As(n,e))return e;do{if(As(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let x=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(x<=i&&x>o&&(o=x,l=e.x<e.next.x?e:e.next,x===i))return l}e=e.next}while(e!==t);if(!l)return null;let h=l,u=l.x,f=l.y,m=1/0;e=l;do{if(i>=e.x&&e.x>=u&&i!==e.x&&Iu(s<f?i:o,s,u,f,s<f?o:i,s,e.x,e.y)){let x=Math.abs(s-e.y)/(i-e.x);yr(e,n)&&(x<m||x===m&&(e.x>l.x||e.x===l.x&&Gd(l,e)))&&(l=e,m=x)}e=e.next}while(e!==h);return l}function Gd(n,t){return Ie(n.prev,n,t.prev)<0&&Ie(t.next,n,n.next)<0}function Hd(n,t,e,i){let s=n;do s.z===0&&(s.z=tc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Xd(s)}function Xd(n){let t,e=1;do{let i=n,s;n=null;let o=null;for(t=0;i;){t++;let l=i,h=0;for(let f=0;f<e&&(h++,l=l.nextZ,!!l);f++);let u=e;for(;h>0||u>0&&l;)h!==0&&(u===0||!l||i.z<=l.z)?(s=i,i=i.nextZ,h--):(s=l,l=l.nextZ,u--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;i=l}o.nextZ=null,e*=2}while(t>1);return n}function tc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Wd(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Iu(n,t,e,i,s,o,l,h){return(s-l)*(t-h)>=(n-l)*(o-h)&&(n-l)*(i-h)>=(e-l)*(t-h)&&(e-l)*(o-h)>=(s-l)*(i-h)}function $s(n,t,e,i,s,o,l,h){return!(n===l&&t===h)&&Iu(n,t,e,i,s,o,l,h)}function Yd(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!qd(n,t)&&(yr(n,t)&&yr(t,n)&&Zd(n,t)&&(Ie(n.prev,n,t.prev)||Ie(n,t.prev,t))||As(n,t)&&Ie(n.prev,n,n.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function As(n,t){return n.x===t.x&&n.y===t.y}function Ru(n,t,e,i){let s=To(Ie(n,t,e)),o=To(Ie(n,t,i)),l=To(Ie(e,i,n)),h=To(Ie(e,i,t));return!!(s!==o&&l!==h||s===0&&wo(n,e,t)||o===0&&wo(n,i,t)||l===0&&wo(e,n,i)||h===0&&wo(e,t,i))}function wo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function To(n){return n>0?1:n<0?-1:0}function qd(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ru(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function yr(n,t){return Ie(n.prev,n,n.next)<0?Ie(n,t,n.next)>=0&&Ie(n,n.prev,t)>=0:Ie(n,t,n.prev)<0||Ie(n,n.next,t)<0}function Zd(n,t){let e=n,i=!1,s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Lu(n,t){let e=ec(n.i,n.x,n.y),i=ec(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function Lh(n,t,e,i){let s=ec(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function vr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ec(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jd(n,t,e,i){let s=0;for(let o=t,l=e-i;o<e;o+=i)s+=(n[l]-n[o])*(n[o+1]+n[l+1]),l=o;return s}var nc=class{static triangulate(t,e,i=2){return Dd(t,e,i)}},Bn=class n{static area(t){let e=t.length,i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],o=[];Dh(t),Nh(i,t);let l=t.length;e.forEach(Dh);for(let u=0;u<e.length;u++)s.push(l),l+=e[u].length,Nh(i,e[u]);let h=nc.triangulate(i,s);for(let u=0;u<h.length;u+=3)o.push(h.slice(u,u+3));return o}};function Dh(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Nh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ki=class n extends Le{constructor(t=new ni([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],o=[];for(let h=0,u=t.length;h<u;h++){let f=t[h];l(f)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(o,2)),this.computeVertexNormals();function l(h){let u=[],f=e.curveSegments!==void 0?e.curveSegments:12,m=e.steps!==void 0?e.steps:1,x=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,S=e.bevelSize!==void 0?e.bevelSize:g-.1,w=e.bevelOffset!==void 0?e.bevelOffset:0,y=e.bevelSegments!==void 0?e.bevelSegments:3,v=e.extrudePath,P=e.UVGenerator!==void 0?e.UVGenerator:$d,A,E=!1,R,L,O,T;if(v){A=v.getSpacedPoints(m),E=!0,p=!1;let pt=v.isCatmullRomCurve3?v.closed:!1;R=v.computeFrenetFrames(m,pt),L=new z,O=new z,T=new z}p||(y=0,g=0,S=0,w=0);let D=h.extractPoints(f),B=D.shape,N=D.holes;if(!Bn.isClockWise(B)){B=B.reverse();for(let pt=0,xt=N.length;pt<xt;pt++){let yt=N[pt];Bn.isClockWise(yt)&&(N[pt]=yt.reverse())}}function H(pt){let yt=10000000000000001e-36,vt=pt[0];for(let bt=1;bt<=pt.length;bt++){let $t=bt%pt.length,Zt=pt[$t],te=Zt.x-vt.x,ie=Zt.y-vt.y,X=te*te+ie*ie,_e=Math.max(Math.abs(Zt.x),Math.abs(Zt.y),Math.abs(vt.x),Math.abs(vt.y)),ue=yt*_e*_e;if(X<=ue){pt.splice($t,1),bt--;continue}vt=Zt}}H(B),N.forEach(H);let U=N.length,W=B;for(let pt=0;pt<U;pt++){let xt=N[pt];B=B.concat(xt)}function K(pt,xt,yt){return xt||ee("ExtrudeGeometry: vec does not exist"),pt.clone().addScaledVector(xt,yt)}let $=B.length;function at(pt,xt,yt){let vt,bt,$t,Zt=pt.x-xt.x,te=pt.y-xt.y,ie=yt.x-pt.x,X=yt.y-pt.y,_e=Zt*Zt+te*te,ue=Zt*X-te*ie;if(Math.abs(ue)>Number.EPSILON){let F=Math.sqrt(_e),b=Math.sqrt(ie*ie+X*X),J=xt.x-te/F,et=xt.y+Zt/F,rt=yt.x-X/b,St=yt.y+ie/b,Mt=((rt-J)*X-(St-et)*ie)/(Zt*X-te*ie);vt=J+Zt*Mt-pt.x,bt=et+te*Mt-pt.y;let ot=vt*vt+bt*bt;if(ot<=2)return new _t(vt,bt);$t=Math.sqrt(ot/2)}else{let F=!1;Zt>Number.EPSILON?ie>Number.EPSILON&&(F=!0):Zt<-Number.EPSILON?ie<-Number.EPSILON&&(F=!0):Math.sign(te)===Math.sign(X)&&(F=!0),F?(vt=-te,bt=Zt,$t=Math.sqrt(_e)):(vt=Zt,bt=te,$t=Math.sqrt(_e/2))}return new _t(vt/$t,bt/$t)}let tt=[];for(let pt=0,xt=W.length,yt=xt-1,vt=pt+1;pt<xt;pt++,yt++,vt++)yt===xt&&(yt=0),vt===xt&&(vt=0),tt[pt]=at(W[pt],W[yt],W[vt]);let it=[],st,Tt=tt.concat();for(let pt=0,xt=U;pt<xt;pt++){let yt=N[pt];st=[];for(let vt=0,bt=yt.length,$t=bt-1,Zt=vt+1;vt<bt;vt++,$t++,Zt++)$t===bt&&($t=0),Zt===bt&&(Zt=0),st[vt]=at(yt[vt],yt[$t],yt[Zt]);it.push(st),Tt=Tt.concat(st)}let Et;if(y===0)Et=Bn.triangulateShape(W,N);else{let pt=[],xt=[];for(let yt=0;yt<y;yt++){let vt=yt/y,bt=g*Math.cos(vt*Math.PI/2),$t=S*Math.sin(vt*Math.PI/2)+w;for(let Zt=0,te=W.length;Zt<te;Zt++){let ie=K(W[Zt],tt[Zt],$t);Nt(ie.x,ie.y,-bt),vt===0&&pt.push(ie)}for(let Zt=0,te=U;Zt<te;Zt++){let ie=N[Zt];st=it[Zt];let X=[];for(let _e=0,ue=ie.length;_e<ue;_e++){let F=K(ie[_e],st[_e],$t);Nt(F.x,F.y,-bt),vt===0&&X.push(F)}vt===0&&xt.push(X)}}Et=Bn.triangulateShape(pt,xt)}let qt=Et.length,ne=S+w;for(let pt=0;pt<$;pt++){let xt=p?K(B[pt],Tt[pt],ne):B[pt];E?(O.copy(R.normals[0]).multiplyScalar(xt.x),L.copy(R.binormals[0]).multiplyScalar(xt.y),T.copy(A[0]).add(O).add(L),Nt(T.x,T.y,T.z)):Nt(xt.x,xt.y,0)}for(let pt=1;pt<=m;pt++)for(let xt=0;xt<$;xt++){let yt=p?K(B[xt],Tt[xt],ne):B[xt];E?(O.copy(R.normals[pt]).multiplyScalar(yt.x),L.copy(R.binormals[pt]).multiplyScalar(yt.y),T.copy(A[pt]).add(O).add(L),Nt(T.x,T.y,T.z)):Nt(yt.x,yt.y,x/m*pt)}for(let pt=y-1;pt>=0;pt--){let xt=pt/y,yt=g*Math.cos(xt*Math.PI/2),vt=S*Math.sin(xt*Math.PI/2)+w;for(let bt=0,$t=W.length;bt<$t;bt++){let Zt=K(W[bt],tt[bt],vt);Nt(Zt.x,Zt.y,x+yt)}for(let bt=0,$t=N.length;bt<$t;bt++){let Zt=N[bt];st=it[bt];for(let te=0,ie=Zt.length;te<ie;te++){let X=K(Zt[te],st[te],vt);E?Nt(X.x,X.y+A[m-1].y,A[m-1].x+yt):Nt(X.x,X.y,x+yt)}}}pe(),lt();function pe(){let pt=s.length/3;if(p){let xt=0,yt=$*xt;for(let vt=0;vt<qt;vt++){let bt=Et[vt];Kt(bt[2]+yt,bt[1]+yt,bt[0]+yt)}xt=m+y*2,yt=$*xt;for(let vt=0;vt<qt;vt++){let bt=Et[vt];Kt(bt[0]+yt,bt[1]+yt,bt[2]+yt)}}else{for(let xt=0;xt<qt;xt++){let yt=Et[xt];Kt(yt[2],yt[1],yt[0])}for(let xt=0;xt<qt;xt++){let yt=Et[xt];Kt(yt[0]+$*m,yt[1]+$*m,yt[2]+$*m)}}i.addGroup(pt,s.length/3-pt,0)}function lt(){let pt=s.length/3,xt=0;dt(W,xt),xt+=W.length;for(let yt=0,vt=N.length;yt<vt;yt++){let bt=N[yt];dt(bt,xt),xt+=bt.length}i.addGroup(pt,s.length/3-pt,1)}function dt(pt,xt){let yt=pt.length;for(;--yt>=0;){let vt=yt,bt=yt-1;bt<0&&(bt=pt.length-1);for(let $t=0,Zt=m+y*2;$t<Zt;$t++){let te=$*$t,ie=$*($t+1),X=xt+vt+te,_e=xt+bt+te,ue=xt+bt+ie,F=xt+vt+ie;Ft(X,_e,ue,F)}}}function Nt(pt,xt,yt){u.push(pt),u.push(xt),u.push(yt)}function Kt(pt,xt,yt){Qt(pt),Qt(xt),Qt(yt);let vt=s.length/3,bt=P.generateTopUV(i,s,vt-3,vt-2,vt-1);ve(bt[0]),ve(bt[1]),ve(bt[2])}function Ft(pt,xt,yt,vt){Qt(pt),Qt(xt),Qt(vt),Qt(xt),Qt(yt),Qt(vt);let bt=s.length/3,$t=P.generateSideWallUV(i,s,bt-6,bt-3,bt-2,bt-1);ve($t[0]),ve($t[1]),ve($t[3]),ve($t[1]),ve($t[2]),ve($t[3])}function Qt(pt){s.push(u[pt*3+0]),s.push(u[pt*3+1]),s.push(u[pt*3+2])}function ve(pt){o.push(pt.x),o.push(pt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Kd(e,i,t)}static fromJSON(t,e){let i=[];for(let o=0,l=t.shapes.length;o<l;o++){let h=e[t.shapes[o]];i.push(h)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ql[s.type]().fromJSON(s)),new n(i,t.options)}},$d={generateTopUV:function(n,t,e,i,s){let o=t[e*3],l=t[e*3+1],h=t[i*3],u=t[i*3+1],f=t[s*3],m=t[s*3+1];return[new _t(o,l),new _t(h,u),new _t(f,m)]},generateSideWallUV:function(n,t,e,i,s,o){let l=t[e*3],h=t[e*3+1],u=t[e*3+2],f=t[i*3],m=t[i*3+1],x=t[i*3+2],p=t[s*3],g=t[s*3+1],S=t[s*3+2],w=t[o*3],y=t[o*3+1],v=t[o*3+2];return Math.abs(h-m)<Math.abs(l-f)?[new _t(l,1-u),new _t(f,1-x),new _t(p,1-S),new _t(w,1-v)]:[new _t(h,1-u),new _t(m,1-x),new _t(g,1-S),new _t(y,1-v)]}};function Kd(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Sr=class n extends Le{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let o=t/2,l=e/2,h=Math.floor(i),u=Math.floor(s),f=h+1,m=u+1,x=t/h,p=e/u,g=[],S=[],w=[],y=[];for(let v=0;v<m;v++){let P=v*p-l;for(let A=0;A<f;A++){let E=A*x-o;S.push(E,-P,0),w.push(0,0,1),y.push(A/h),y.push(1-v/u)}}for(let v=0;v<u;v++)for(let P=0;P<h;P++){let A=P+f*v,E=P+f*(v+1),R=P+1+f*(v+1),L=P+1+f*v;g.push(A,E,L),g.push(E,R,L)}this.setIndex(g),this.setAttribute("position",new me(S,3)),this.setAttribute("normal",new me(w,3)),this.setAttribute("uv",new me(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var gi=class n extends Le{constructor(t=new ni([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],o=[],l=[],h=0,u=0;if(Array.isArray(t)===!1)f(t);else for(let m=0;m<t.length;m++)f(t[m]),this.addGroup(h,u,m),h+=u,u=0;this.setIndex(i),this.setAttribute("position",new me(s,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(l,2));function f(m){let x=s.length/3,p=m.extractPoints(e),g=p.shape,S=p.holes;Bn.isClockWise(g)===!1&&(g=g.reverse());for(let y=0,v=S.length;y<v;y++){let P=S[y];Bn.isClockWise(P)===!0&&(S[y]=P.reverse())}let w=Bn.triangulateShape(g,S);for(let y=0,v=S.length;y<v;y++){let P=S[y];g=g.concat(P)}for(let y=0,v=g.length;y<v;y++){let P=g[y];s.push(P.x,P.y,0),o.push(0,0,1),l.push(P.x,P.y)}for(let y=0,v=w.length;y<v;y++){let P=w[y],A=P[0]+x,E=P[1]+x,R=P[2]+x;i.push(A,E,R),u+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return jd(e,t)}static fromJSON(t,e){let i=[];for(let s=0,o=t.shapes.length;s<o;s++){let l=e[t.shapes[s]];i.push(l)}return new n(i,t.curveSegments)}};function jd(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var bn=class n extends Le{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,l=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:l,thetaLength:h},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let u=Math.min(l+h,Math.PI),f=0,m=[],x=new z,p=new z,g=[],S=[],w=[],y=[];for(let v=0;v<=i;v++){let P=[],A=v/i,E=l+A*h,R=t*Math.cos(E),L=Math.sqrt(t*t-R*R),O=0;v===0&&l===0?O=.5/e:v===i&&u===Math.PI&&(O=-.5/e);for(let T=0;T<=e;T++){let D=T/e,B=s+D*o;x.x=-L*Math.cos(B),x.y=R,x.z=L*Math.sin(B),S.push(x.x,x.y,x.z),p.copy(x).normalize(),w.push(p.x,p.y,p.z),y.push(D+O,1-A),P.push(f++)}m.push(P)}for(let v=0;v<i;v++)for(let P=0;P<e;P++){let A=m[v][P+1],E=m[v][P],R=m[v+1][P],L=m[v+1][P+1];(v!==0||l>0)&&g.push(A,E,L),(v!==i-1||u<Math.PI)&&g.push(E,R,L)}this.setIndex(g),this.setAttribute("position",new me(S,3)),this.setAttribute("normal",new me(w,3)),this.setAttribute("uv",new me(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Mr=class extends Le{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,s=new z,o=new z;if(t.index!==null){let l=t.attributes.position,h=t.index,u=t.groups;u.length===0&&(u=[{start:0,count:h.count,materialIndex:0}]);for(let f=0,m=u.length;f<m;++f){let x=u[f],p=x.start,g=x.count;for(let S=p,w=p+g;S<w;S+=3)for(let y=0;y<3;y++){let v=h.getX(S+y),P=h.getX(S+(y+1)%3);s.fromBufferAttribute(l,v),o.fromBufferAttribute(l,P),Fh(s,o,i)===!0&&(e.push(s.x,s.y,s.z),e.push(o.x,o.y,o.z))}}}else{let l=t.attributes.position;for(let h=0,u=l.count/3;h<u;h++)for(let f=0;f<3;f++){let m=3*h+f,x=3*h+(f+1)%3;s.fromBufferAttribute(l,m),o.fromBufferAttribute(l,x),Fh(s,o,i)===!0&&(e.push(s.x,s.y,s.z),e.push(o.x,o.y,o.z))}}this.setAttribute("position",new me(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Fh(n,t,e){let i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}function Xi(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Oh(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Oh(s[0])){let o=[];for(let l=0,h=s.length;l<h;l++)o[l]=s[l].clone();t[e][i]=o}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ke(n){let t={};for(let e=0;e<n.length;e++){let i=Xi(n[e]);for(let s in i)t[s]=i[s]}return t}function Oh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Qd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Lc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var Hr={clone:Xi,merge:Ke},tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tp,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=Qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let l=this.uniforms[s].value;l&&l.isTexture?e.uniforms[s]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[s]={type:"m4",value:l.toArray()}:e.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new fe().setHex(s.value);break;case"v2":this.uniforms[i].value=new _t().fromArray(s.value);break;case"v3":this.uniforms[i].value=new z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[i].value=new oe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ge().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$o=class extends en{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Vi=class extends pi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ko=class extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jo=class extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function cs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Yl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var _i=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],o=e[i-1];n:{t:{let l;e:{i:if(!(t<s)){for(let h=i+2;;){if(s===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===h)break;if(o=s,s=e[++i],t<s)break t}l=e.length;break e}if(!(t>=o)){let h=e[1];t<h&&(i=2,o=h);for(let u=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===u)break;if(s=o,o=e[--i-1],t>=o)break t}l=i,i=0;break e}break n}for(;i<l;){let h=i+l>>>1;t<e[h]?l=h:i=h+1}if(s=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,s)}return this.interpolate_(i,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,o=t*s;for(let l=0;l!==s;++l)e[l]=i[o+l];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qo=class extends _i{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$l,endingEnd:$l}}intervalChanged_(t,e,i){let s=this.parameterPositions,o=t-2,l=t+1,h=s[o],u=s[l];if(h===void 0)switch(this.getSettings_().endingStart){case Kl:o=t,h=2*e-i;break;case jl:o=s.length-2,h=e+s[o]-s[o+1];break;default:o=t,h=i}if(u===void 0)switch(this.getSettings_().endingEnd){case Kl:l=t,u=2*i-e;break;case jl:l=1,u=i+s[1]-s[0];break;default:l=t-1,u=e}let f=(i-e)*.5,m=this.valueSize;this._weightPrev=f/(e-h),this._weightNext=f/(u-i),this._offsetPrev=o*m,this._offsetNext=l*m}interpolate_(t,e,i,s){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,f=u-h,m=this._offsetPrev,x=this._offsetNext,p=this._weightPrev,g=this._weightNext,S=(i-e)/(s-e),w=S*S,y=w*S,v=-p*y+2*p*w-p*S,P=(1+p)*y+(-1.5-2*p)*w+(-.5+p)*S+1,A=(-1-g)*y+(1.5+g)*w+.5*S,E=g*y-g*w;for(let R=0;R!==h;++R)o[R]=v*l[m+R]+P*l[f+R]+A*l[u+R]+E*l[x+R];return o}},ta=class extends _i{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,f=u-h,m=(i-e)/(s-e),x=1-m;for(let p=0;p!==h;++p)o[p]=l[f+p]*x+l[u+p]*m;return o}},ea=class extends _i{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},na=class extends _i{interpolate_(t,e,i,s){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,f=u-h,m=this.inTangents,x=this.outTangents;if(!m||!x){let S=(i-e)/(s-e),w=1-S;for(let y=0;y!==h;++y)o[y]=l[f+y]*w+l[u+y]*S;return o}let p=h*2,g=t-1;for(let S=0;S!==h;++S){let w=l[f+S],y=l[u+S],v=g*p+S*2,P=x[v],A=x[v+1],E=t*p+S*2,R=m[E],L=m[E+1],O=ip(i,e,P,R,s);o[S]=Du(O,w,A,L,y)}return o}};function Du(n,t,e,i,s){let o=1-n;return o*o*o*t+3*o*o*n*e+3*o*n*n*i+n*n*n*s}function np(n,t,e,i,s){let o=1-n;return 3*o*o*(e-t)+6*o*n*(i-e)+3*n*n*(s-i)}function ip(n,t,e,i,s){let o=(n-t)/(s-t);for(let l=0;l<8;l++){let h=Du(o,t,e,i,s)-n;if(Math.abs(h)<1e-10)break;let u=np(o,t,e,i,s);if(Math.abs(u)<1e-10)break;o=Math.max(0,Math.min(1,o-h/u))}return o}var yn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=cs(e,this.TimeBufferType),this.values=cs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:cs(t.times,Array),values:cs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Yl(t.settings)&&(i.settings={inTangents:cs(t.settings.inTangents,Array),outTangents:cs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new na(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case tr:e=this.InterpolantFactoryMethodDiscrete;break;case zo:e=this.InterpolantFactoryMethodLinear;break;case Co:e=this.InterpolantFactoryMethodSmooth;break;case Jl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return jt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return zo;case this.InterpolantFactoryMethodSmooth:return Co;case this.InterpolantFactoryMethodBezier:return Jl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Yl(this.settings)&&(Uh(this.settings.inTangents,t),Uh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,o=0,l=s-1;for(;o!==s&&i[o]<t;)++o;for(;l!==-1&&i[l]>e;)--l;if(++l,o!==0||l!==s){o>=l&&(l=Math.max(l,1),o=l-1);let h=this.getValueSize();this.times=i.slice(o,l),this.values=this.values.slice(o*h,l*h)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,o=i.length;o===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let h=0;h!==o;h++){let u=i[h];if(typeof u=="number"&&isNaN(u)){ee("KeyframeTrack: Time is not a valid number.",this,h,u),t=!1;break}if(l!==null&&l>u){ee("KeyframeTrack: Out of order keys.",this,h,u,l),t=!1;break}l=u}if(s!==void 0&&Wf(s))for(let h=0,u=s.length;h!==u;++h){let f=s[h];if(isNaN(f)){ee("KeyframeTrack: Value is not a valid number.",this,h,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Co,o=t.length-1,l=1;for(let h=1;h<o;++h){let u=!1,f=t[h],m=t[h+1];if(f!==m&&(h!==1||f!==t[0]))if(s)u=!0;else{let x=h*i,p=x-i,g=x+i;for(let S=0;S!==i;++S){let w=e[x+S];if(w!==e[p+S]||w!==e[g+S]){u=!0;break}}}if(u){if(h!==l){t[l]=t[h];let x=h*i,p=l*i;for(let g=0;g!==i;++g)e[p+g]=e[x+g]}++l}}if(o>0){t[l]=t[o];for(let h=o*i,u=l*i,f=0;f!==i;++f)e[u+f]=e[h+f];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Yl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Uh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=zo;var xi=class extends yn{constructor(t,e,i){super(t,e,i)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=tr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends yn{constructor(t,e,i,s){super(t,e,i,s)}};ia.prototype.ValueTypeName="color";var sa=class extends yn{constructor(t,e,i,s){super(t,e,i,s)}};sa.prototype.ValueTypeName="number";var ra=class extends _i{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=(i-e)/(s-e),f=t*h;for(let m=f+h;f!==m;f+=4)gn.slerpFlat(o,0,l,f-h,l,f,u);return o}},br=class extends yn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ra(this.times,this.values,this.getValueSize(),t)}};br.prototype.ValueTypeName="quaternion";br.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends yn{constructor(t,e,i){super(t,e,i)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=tr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends yn{constructor(t,e,i,s){super(t,e,i,s)}};oa.prototype.ValueTypeName="vector";var aa=class{constructor(t,e,i){let s=this,o=!1,l=0,h=0,u,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(m){h++,o===!1&&s.onStart!==void 0&&s.onStart(m,l,h),o=!0},this.itemEnd=function(m){l++,s.onProgress!==void 0&&s.onProgress(m,l,h),l===h&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),u?u(m):m},this.setURLModifier=function(m){return u=m,this},this.addHandler=function(m,x){return f.push(m,x),this},this.removeHandler=function(m){let x=f.indexOf(m);return x!==-1&&f.splice(x,2),this},this.getHandler=function(m){for(let x=0,p=f.length;x<p;x+=2){let g=f[x],S=f[x+1];if(g.global&&(g.lastIndex=0),g.test(m))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nu=new aa,la=class{constructor(t){this.manager=t!==void 0?t:Nu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};la.DEFAULT_MATERIAL_NAME="__DEFAULT";var wr=class extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Tr=class extends wr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ql=new ge,Bh=new z,zh=new z,ca=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bh),zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ql,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,l=s?s.z/o.x:1,h=s?s.w/o.y:1,u=s?s.x/o.x:0,f=s?s.y/o.y:0;t.coordinateSystem===_s||t.reversedDepth?e.set(.5*l,0,0,.5*l+u,0,.5*h,0,.5*h+f,0,0,1,0,0,0,0,1):e.set(.5*l,0,0,.5*l+u,0,.5*h,0,.5*h+f,0,0,.5,.5,0,0,0,1),e.multiply(ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Eo=new z,Ao=new gn,On=new z,Er=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Eo,Ao,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eo,Ao,On.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Eo,Ao,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eo,Ao,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new z,kh=new _t,Vh=new _t,Je=class extends Er{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,kh,Vh),e.subVectors(Vh,kh)}setViewOffset(t,e,i,s,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ps*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s,l=this.view;if(this.view!==null&&this.view.enabled){let u=l.fullWidth,f=l.fullHeight;o+=l.offsetX*s/u,e-=l.offsetY*i/f,s*=l.width/u,i*=l.height/f}let h=this.filmOffset;h!==0&&(o+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ps=class extends Er{constructor(t=-1,e=1,i=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=i-t,l=i+t,h=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,l=o+f*this.view.width,h-=m*this.view.offsetY,u=h-m*this.view.height}this.projectionMatrix.makeOrthographic(o,l,h,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ic=class extends ca{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ar=class extends wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new ic}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Pr=class extends Le{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var hs=-90,us=1,ha=class extends $e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(hs,us,t,e);s.layers=this.layers,this.add(s);let o=new Je(hs,us,t,e);o.layers=this.layers,this.add(o);let l=new Je(hs,us,t,e);l.layers=this.layers,this.add(l);let h=new Je(hs,us,t,e);h.layers=this.layers,this.add(h);let u=new Je(hs,us,t,e);u.layers=this.layers,this.add(u);let f=new Je(hs,us,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,o,l,h,u]=e;for(let f of e)this.remove(f);if(t===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===_s)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,l,h,u,f,m]=this.children,x=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;let w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(i,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),i.texture.generateMipmaps=w,t.setRenderTarget(i,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,m),t.setRenderTarget(x,p,g),t.xr.enabled=S,i.texture.needsPMREMUpdate=!0}},ua=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Dc="\\[\\]\\.:\\/",sp=new RegExp("["+Dc+"]","g"),Nc="[^"+Dc+"]",rp="[^"+Dc.replace("\\.","")+"]",op=/((?:WC+[\/:])*)/.source.replace("WC",Nc),ap=/(WCOD+)?/.source.replace("WCOD",rp),lp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),cp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),hp=new RegExp("^"+op+ap+lp+cp+"$"),up=["material","materials","bones","map"],sc=class{constructor(t,e,i){let s=i||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=i.length;s!==o;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Pe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sp,"")}static parseTrackName(t){let e=hp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);up.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let l=0;l<o.length;l++){let h=o[l];if(h.name===e||h.uuid===e)return h;let u=i(h.children);if(u)return u}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=e.objectIndex;switch(i){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===f){f=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(f!==void 0){if(t[f]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let l=t[s];if(l===void 0){let f=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?h=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=sc;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ux=new Float32Array(1);var vi=class extends cr{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Gh=new ge,Cr=class{constructor(t,e,i=0,s=1/0){this.ray=new Ui(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gh),this}intersectObject(t,e=!0,i=[]){return rc(t,this,i,e),i.sort(Hh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,o=t.length;s<o;s++)rc(t[s],this,i,e);return i.sort(Hh),i}};function Hh(n,t){return n.distance-t.distance}function rc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let o=n.children;for(let l=0,h=o.length;l<h;l++)rc(o[l],t,e,!0)}}var Cs=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var kc=class kc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let o=this.elements;return o[0]=t,o[2]=e,o[1]=i,o[3]=s,this}};kc.prototype.isMatrix2=!0;var oc=kc;var Xh=new z,Po=new z,fs=new z,ds=new z,Zl=new z,fp=new z,dp=new z,Ir=class{constructor(t=new z,e=new z){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Xh.subVectors(t,this.start),Po.subVectors(this.end,this.start);let i=Po.dot(Po);if(i===0)return 0;let o=Po.dot(Xh)/i;return e&&(o=se(o,0,1)),o}closestPointToPoint(t,e,i){let s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=fp,i=dp){let s=10000000000000001e-32,o,l,h=this.start,u=t.start,f=this.end,m=t.end;fs.subVectors(f,h),ds.subVectors(m,u),Zl.subVectors(h,u);let x=fs.dot(fs),p=ds.dot(ds),g=ds.dot(Zl);if(x<=s&&p<=s)return e.copy(h),i.copy(u),e.sub(i),e.dot(e);if(x<=s)o=0,l=g/p,l=se(l,0,1);else{let S=fs.dot(Zl);if(p<=s)l=0,o=se(-S/x,0,1);else{let w=fs.dot(ds),y=x*p-w*w;y!==0?o=se((w*g-S*p)/y,0,1):o=0,l=(w*o+g)/p,l<0?(l=0,o=se(-S/x,0,1)):l>1&&(l=1,o=se((w-S)/x,0,1))}}return e.copy(h).addScaledVector(fs,o),i.copy(u).addScaledVector(ds,l),e.distanceToSquared(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Rr=class extends In{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Fc(n,t,e,i){let s=pp(i);switch(e){case Ec:return n*t;case Fr:return n*t/s.components*s.byteLength;case va:return n*t/s.components*s.byteLength;case Ai:return n*t*2/s.components*s.byteLength;case Sa:return n*t*2/s.components*s.byteLength;case Ac:return n*t*3/s.components*s.byteLength;case wn:return n*t*4/s.components*s.byteLength;case Ma:return n*t*4/s.components*s.byteLength;case Or:case Ur:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Br:case zr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wa:case Ea:return Math.max(n,16)*Math.max(t,8)/4;case ba:case Ta:return Math.max(n,8)*Math.max(t,8)/2;case Aa:case Pa:case Ia:case Ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ca:case kr:case La:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case za:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Va:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case qa:case Za:case Ja:return Math.ceil(n/4)*Math.ceil(t/4)*16;case $a:case Ka:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Vr:case ja:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pp(n){switch(n){case ln:case Mc:return{byteLength:1,components:1};case Ls:case bc:case Nn:return{byteLength:2,components:1};case xa:case ya:return{byteLength:2,components:4};case Ln:case _a:case Dn:return{byteLength:4,components:1};case wc:case Tc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);function nf(){let n=null,t=!1,e=null,i=null;function s(o,l){i=n.requestAnimationFrame(s),e(o,l)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function yp(n){let t=new WeakMap;function e(h,u){let f=h.array,m=h.usage,x=f.byteLength,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,m),h.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)g=n.HALF_FLOAT;else if(f instanceof Uint16Array)h.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:x}}function i(h,u,f){let m=u.array,x=u.updateRanges;if(n.bindBuffer(f,h),x.length===0)n.bufferSubData(f,0,m);else{x.sort((g,S)=>g.start-S.start);let p=0;for(let g=1;g<x.length;g++){let S=x[p],w=x[g];w.start<=S.start+S.count+1?S.count=Math.max(S.count,w.start+w.count-S.start):(++p,x[p]=w)}x.length=p+1;for(let g=0,S=x.length;g<S;g++){let w=x[g];n.bufferSubData(f,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=t.get(h);u&&(n.deleteBuffer(u.buffer),t.delete(h))}function l(h,u){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let m=t.get(h);(!m||m.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let f=t.get(h);if(f===void 0)t.set(h,e(h,u));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,h,u),f.version=h.version}}return{get:s,remove:o,update:l}}var vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
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
#endif`,Mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ep=`#ifdef USE_AOMAP
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
#endif`,Ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
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
#endif`,Cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dp=`#ifdef USE_IRIDESCENCE
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
#endif`,Np=`#ifdef USE_BUMPMAP
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hp=`#define PI 3.141592653589793
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
} // validated`,Xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,am=`#ifdef USE_GRADIENTMAP
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
}`,lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,um=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fm=`#ifdef USE_ENVMAP
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
#endif`,dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_m=`PhysicalMaterial material;
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
#endif`,xm=`uniform sampler2D dfgLUT;
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
}`,ym=`
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Im=`#if defined( USE_POINTS_UV )
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
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
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
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hm=`#ifdef USE_NORMALMAP
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
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r0=`float getShadowMask() {
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
}`,o0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,l0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,h0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,p0=`#ifdef USE_TRANSMISSION
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
#endif`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,v0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`#include <common>
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
}`,A0=`#if DEPTH_PACKING == 3200
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
}`,P0=`#define DISTANCE
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
}`,C0=`#define DISTANCE
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`uniform float scale;
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
}`,D0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,F0=`uniform vec3 diffuse;
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
}`,O0=`#define LAMBERT
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
}`,U0=`#define LAMBERT
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
}`,B0=`#define MATCAP
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
}`,z0=`#define MATCAP
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
}`,k0=`#define NORMAL
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
}`,V0=`#define NORMAL
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
}`,G0=`#define PHONG
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
}`,H0=`#define PHONG
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
}`,X0=`#define STANDARD
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
}`,W0=`#define STANDARD
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
}`,Y0=`#define TOON
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
}`,q0=`#define TOON
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
}`,Z0=`uniform float size;
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
}`,J0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,K0=`uniform vec3 color;
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
}`,j0=`uniform float rotation;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:vp,alphahash_pars_fragment:Sp,alphamap_fragment:Mp,alphamap_pars_fragment:bp,alphatest_fragment:wp,alphatest_pars_fragment:Tp,aomap_fragment:Ep,aomap_pars_fragment:Ap,batching_pars_vertex:Pp,batching_vertex:Cp,begin_vertex:Ip,beginnormal_vertex:Rp,bsdfs:Lp,iridescence_fragment:Dp,bumpmap_pars_fragment:Np,clipping_planes_fragment:Fp,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:Up,clipping_planes_vertex:Bp,color_fragment:zp,color_pars_fragment:kp,color_pars_vertex:Vp,color_vertex:Gp,common:Hp,cube_uv_reflection_fragment:Xp,defaultnormal_vertex:Wp,displacementmap_pars_vertex:Yp,displacementmap_vertex:qp,emissivemap_fragment:Zp,emissivemap_pars_fragment:Jp,colorspace_fragment:$p,colorspace_pars_fragment:Kp,envmap_fragment:jp,envmap_common_pars_fragment:Qp,envmap_pars_fragment:tm,envmap_pars_vertex:em,envmap_physical_pars_fragment:fm,envmap_vertex:nm,fog_vertex:im,fog_pars_vertex:sm,fog_fragment:rm,fog_pars_fragment:om,gradientmap_pars_fragment:am,lightmap_pars_fragment:lm,lights_lambert_fragment:cm,lights_lambert_pars_fragment:hm,lights_pars_begin:um,lights_toon_fragment:dm,lights_toon_pars_fragment:pm,lights_phong_fragment:mm,lights_phong_pars_fragment:gm,lights_physical_fragment:_m,lights_physical_pars_fragment:xm,lights_fragment_begin:ym,lights_fragment_maps:vm,lights_fragment_end:Sm,lightprobes_pars_fragment:Mm,logdepthbuf_fragment:bm,logdepthbuf_pars_fragment:wm,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:Em,map_fragment:Am,map_pars_fragment:Pm,map_particle_fragment:Cm,map_particle_pars_fragment:Im,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Lm,morphinstance_vertex:Dm,morphcolor_vertex:Nm,morphnormal_vertex:Fm,morphtarget_pars_vertex:Om,morphtarget_vertex:Um,normal_fragment_begin:Bm,normal_fragment_maps:zm,normal_pars_fragment:km,normal_pars_vertex:Vm,normal_vertex:Gm,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:Wm,clearcoat_pars_fragment:Ym,iridescence_pars_fragment:qm,opaque_fragment:Zm,packing:Jm,premultiplied_alpha_fragment:$m,project_vertex:Km,dithering_fragment:jm,dithering_pars_fragment:Qm,roughnessmap_fragment:t0,roughnessmap_pars_fragment:e0,shadowmap_pars_fragment:n0,shadowmap_pars_vertex:i0,shadowmap_vertex:s0,shadowmask_pars_fragment:r0,skinbase_vertex:o0,skinning_pars_vertex:a0,skinning_vertex:l0,skinnormal_vertex:c0,specularmap_fragment:h0,specularmap_pars_fragment:u0,tonemapping_fragment:f0,tonemapping_pars_fragment:d0,transmission_fragment:p0,transmission_pars_fragment:m0,uv_pars_fragment:g0,uv_pars_vertex:_0,uv_vertex:x0,worldpos_vertex:y0,background_vert:v0,background_frag:S0,backgroundCube_vert:M0,backgroundCube_frag:b0,cube_vert:w0,cube_frag:T0,depth_vert:E0,depth_frag:A0,distance_vert:P0,distance_frag:C0,equirect_vert:I0,equirect_frag:R0,linedashed_vert:L0,linedashed_frag:D0,meshbasic_vert:N0,meshbasic_frag:F0,meshlambert_vert:O0,meshlambert_frag:U0,meshmatcap_vert:B0,meshmatcap_frag:z0,meshnormal_vert:k0,meshnormal_frag:V0,meshphong_vert:G0,meshphong_frag:H0,meshphysical_vert:X0,meshphysical_frag:W0,meshtoon_vert:Y0,meshtoon_frag:q0,points_vert:Z0,points_frag:J0,shadow_vert:$0,shadow_frag:K0,sprite_vert:j0,sprite_frag:Q0},Pt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},nn={basic:{uniforms:Ke([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Ke([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Ke([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Ke([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Ke([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new fe(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Ke([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Ke([Pt.points,Pt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Ke([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Ke([Pt.common,Pt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Ke([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Ke([Pt.sprite,Pt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Ke([Pt.common,Pt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Ke([Pt.lights,Pt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};nn.physical={uniforms:Ke([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var nl={r:0,b:0,g:0},tg=new ge,sf=new oe;sf.set(-1,0,0,0,1,0,0,0,1);function eg(n,t,e,i,s,o){let l=new fe(0),h=s===!0?0:1,u,f,m=null,x=0,p=null;function g(P){let A=P.isScene===!0?P.background:null;if(A&&A.isTexture){let E=P.backgroundBlurriness>0;A=t.get(A,E)}return A}function S(P){let A=!1,E=g(P);E===null?y(l,h):E&&E.isColor&&(y(E,1),A=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(P,A){let E=g(A);E&&(E.isCubeTexture||E.mapping===Dr)?(f===void 0&&(f=new Ce(new Ve(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Xi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=E,f.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(tg.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(sf),f.material.toneMapped=de.getTransfer(E.colorSpace)!==Se,(m!==E||x!==E.version||p!==n.toneMapping)&&(f.material.needsUpdate=!0,m=E,x=E.version,p=n.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Ce(new Sr(2,2),new en({name:"BackgroundMaterial",uniforms:Xi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.toneMapped=de.getTransfer(E.colorSpace)!==Se,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(m!==E||x!==E.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,m=E,x=E.version,p=n.toneMapping),u.layers.enableAll(),P.unshift(u,u.geometry,u.material,0,0,null))}function y(P,A){P.getRGB(nl,Lc(n)),e.buffers.color.setClear(nl.r,nl.g,nl.b,A,o)}function v(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(P,A=1){l.set(P),h=A,y(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,y(l,h)},render:S,addToRenderList:w,dispose:v}}function ng(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),o=s,l=!1;function h(N,G,H,U,W){let K=!1,$=x(N,U,H,G);o!==$&&(o=$,f(o.object)),K=g(N,U,H,W),K&&S(N,U,H,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(K||l)&&(l=!1,E(N,G,H,U),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function u(){return n.createVertexArray()}function f(N){return n.bindVertexArray(N)}function m(N){return n.deleteVertexArray(N)}function x(N,G,H,U){let W=U.wireframe===!0,K=i[G.id];K===void 0&&(K={},i[G.id]=K);let $=N.isInstancedMesh===!0?N.id:0,at=K[$];at===void 0&&(at={},K[$]=at);let tt=at[H.id];tt===void 0&&(tt={},at[H.id]=tt);let it=tt[W];return it===void 0&&(it=p(u()),tt[W]=it),it}function p(N){let G=[],H=[],U=[];for(let W=0;W<e;W++)G[W]=0,H[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:H,attributeDivisors:U,object:N,attributes:{},index:null}}function g(N,G,H,U){let W=o.attributes,K=G.attributes,$=0,at=H.getAttributes();for(let tt in at)if(at[tt].location>=0){let st=W[tt],Tt=K[tt];if(Tt===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(Tt=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(Tt=N.instanceColor)),st===void 0||st.attribute!==Tt||Tt&&st.data!==Tt.data)return!0;$++}return o.attributesNum!==$||o.index!==U}function S(N,G,H,U){let W={},K=G.attributes,$=0,at=H.getAttributes();for(let tt in at)if(at[tt].location>=0){let st=K[tt];st===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(st=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(st=N.instanceColor));let Tt={};Tt.attribute=st,st&&st.data&&(Tt.data=st.data),W[tt]=Tt,$++}o.attributes=W,o.attributesNum=$,o.index=U}function w(){let N=o.newAttributes;for(let G=0,H=N.length;G<H;G++)N[G]=0}function y(N){v(N,0)}function v(N,G){let H=o.newAttributes,U=o.enabledAttributes,W=o.attributeDivisors;H[N]=1,U[N]===0&&(n.enableVertexAttribArray(N),U[N]=1),W[N]!==G&&(n.vertexAttribDivisor(N,G),W[N]=G)}function P(){let N=o.newAttributes,G=o.enabledAttributes;for(let H=0,U=G.length;H<U;H++)G[H]!==N[H]&&(n.disableVertexAttribArray(H),G[H]=0)}function A(N,G,H,U,W,K,$){$===!0?n.vertexAttribIPointer(N,G,H,W,K):n.vertexAttribPointer(N,G,H,U,W,K)}function E(N,G,H,U){w();let W=U.attributes,K=H.getAttributes(),$=G.defaultAttributeValues;for(let at in K){let tt=K[at];if(tt.location>=0){let it=W[at];if(it===void 0&&(at==="instanceMatrix"&&N.instanceMatrix&&(it=N.instanceMatrix),at==="instanceColor"&&N.instanceColor&&(it=N.instanceColor)),it!==void 0){let st=it.normalized,Tt=it.itemSize,Et=t.get(it);if(Et===void 0)continue;let qt=Et.buffer,ne=Et.type,pe=Et.bytesPerElement,lt=ne===n.INT||ne===n.UNSIGNED_INT||it.gpuType===_a;if(it.isInterleavedBufferAttribute){let dt=it.data,Nt=dt.stride,Kt=it.offset;if(dt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<tt.locationSize;Ft++)v(tt.location+Ft,dt.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ft=0;Ft<tt.locationSize;Ft++)y(tt.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let Ft=0;Ft<tt.locationSize;Ft++)A(tt.location+Ft,Tt/tt.locationSize,ne,st,Nt*pe,(Kt+Tt/tt.locationSize*Ft)*pe,lt)}else{if(it.isInstancedBufferAttribute){for(let dt=0;dt<tt.locationSize;dt++)v(tt.location+dt,it.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let dt=0;dt<tt.locationSize;dt++)y(tt.location+dt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let dt=0;dt<tt.locationSize;dt++)A(tt.location+dt,Tt/tt.locationSize,ne,st,Tt*pe,Tt/tt.locationSize*dt*pe,lt)}}else if($!==void 0){let st=$[at];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(tt.location,st);break;case 3:n.vertexAttrib3fv(tt.location,st);break;case 4:n.vertexAttrib4fv(tt.location,st);break;default:n.vertexAttrib1fv(tt.location,st)}}}}P()}function R(){D();for(let N in i){let G=i[N];for(let H in G){let U=G[H];for(let W in U){let K=U[W];for(let $ in K)m(K[$].object),delete K[$];delete U[W]}}delete i[N]}}function L(N){if(i[N.id]===void 0)return;let G=i[N.id];for(let H in G){let U=G[H];for(let W in U){let K=U[W];for(let $ in K)m(K[$].object),delete K[$];delete U[W]}}delete i[N.id]}function O(N){for(let G in i){let H=i[G];for(let U in H){let W=H[U];if(W[N.id]===void 0)continue;let K=W[N.id];for(let $ in K)m(K[$].object),delete K[$];delete W[N.id]}}}function T(N){for(let G in i){let H=i[G],U=N.isInstancedMesh===!0?N.id:0,W=H[U];if(W!==void 0){for(let K in W){let $=W[K];for(let at in $)m($[at].object),delete $[at];delete W[K]}delete H[U],Object.keys(H).length===0&&delete i[G]}}}function D(){B(),l=!0,o!==s&&(o=s,f(o.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:h,reset:D,resetDefaultState:B,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:y,disableUnusedAttributes:P}}function ig(n,t,e){let i;function s(u){i=u}function o(u,f){n.drawArrays(i,u,f),e.update(f,i,1)}function l(u,f,m){m!==0&&(n.drawArraysInstanced(i,u,f,m),e.update(f,i,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];e.update(p,i,1)}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=h}function sg(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let O=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(O){return!(O!==wn&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){let T=O===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==ln&&O!==Dn&&!T&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function u(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp",m=u(f);m!==f&&(jt("WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);let x=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&p===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:h,precision:f,logarithmicDepthBuffer:x,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:S,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:P,maxVaryings:A,maxFragmentUniforms:E,maxSamples:R,samples:L}}function rg(n){let t=this,e=null,i=0,s=!1,o=!1,l=new pn,h=new oe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(x,p){let g=x.length!==0||p||i!==0||s;return s=p,i=x.length,g},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(x,p){e=m(x,p,0)},this.setState=function(x,p,g){let S=x.clippingPlanes,w=x.clipIntersection,y=x.clipShadows,v=n.get(x);if(!s||S===null||S.length===0||o&&!y)o?m(null):f();else{let P=o?0:i,A=P*4,E=v.clippingState||null;u.value=E,E=m(S,p,A,g);for(let R=0;R!==A;++R)E[R]=e[R];v.clippingState=E,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function f(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(x,p,g,S){let w=x!==null?x.length:0,y=null;if(w!==0){if(y=u.value,S!==!0||y===null){let v=g+w*4,P=p.matrixWorldInverse;h.getNormalMatrix(P),(y===null||y.length<v)&&(y=new Float32Array(v));for(let A=0,E=g;A!==w;++A,E+=4)l.copy(x[A]).applyMatrix4(P,h),l.normal.toArray(y,E),y[E+3]=l.constant}u.value=y,u.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}var Fs=4,og=6,ag=20,lg=256,Xr=new Ps,Fu=new fe,Vc=null,Gc=0,Hc=0,Xc=!1,cg=new z,Wi=new z,sl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,o={}){let{size:l=256,position:h=cg}=o;Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,i,s,u,h),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Vc,Gc,Hc),this._renderer.xr.enabled=Xc,t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Nn,format:wn,colorSpace:er,depthBuffer:!1},s=Ou(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(t,e,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hg(o)),this._blurMaterial=fg(o,t,e),this._ggxMaterial=ug(o,t,e)}return s}_compileMaterial(t){let e=new Ce(new Le,t);this._renderer.compile(e,Xr)}_sceneToCubeUV(t,e,i,s,o){let u=new Je(90,1,e,i),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],x=this._renderer,p=x.autoClear,g=x.toneMapping;x.getClearColor(Fu),x.toneMapping=Rn,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ce(new Ve,new ze({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,y=w.material,v=!1,P=t.background;P?P.isColor&&(y.color.copy(P),t.background=null,v=!0):(y.color.copy(Fu),v=!0);for(let A=0;A<6;A++){let E=A%3;E===0?(u.up.set(0,f[A],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x+m[A],o.y,o.z)):E===1?(u.up.set(0,0,f[A]),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y+m[A],o.z)):(u.up.set(0,f[A],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y,o.z+m[A]));let R=this._cubeSize;Ns(s,E*R,A>2?R:0,R,R),x.setRenderTarget(s),v&&x.render(w,u),x.render(t,u)}x.toneMapping=g,x.autoClear=p,t.background=P}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===wi||t.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uu());let o=s?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=o;let h=o.uniforms;h.envMap.value=t;let u=this._cubeSize;Ns(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(l,Xr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,o=this._pingPongRenderTarget,l=this._ggxMaterial,h=this._lodMeshes[i];h.material=l;let u=l.uniforms,f=i/(this._lodMeshes.length-1),m=e/(this._lodMeshes.length-1),x=Math.sqrt(f*f-m*m),p=f*1.25,g=x*p,{_lodMax:S}=this,w=this._sizeLods[i],y=3*w*(i>S-Fs?i-S+Fs:0),v=4*(this._cubeSize-w);u.envMap.value=t.texture,u.roughness.value=g,u.mipInt.value=S-e,Ns(o,y,v,3*w,2*w),s.setRenderTarget(o),s.render(h,Xr),u.envMap.value=o.texture,u.roughness.value=0,u.mipInt.value=S-i,Ns(t,y,v,3*w,2*w),s.setRenderTarget(t),s.render(h,Xr)}_blur(t,e,i,s){let o=this._pingPongRenderTarget,l=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,i,l),this._blurPass(o,t,i,i,l)}_blurPass(t,e,i,s,o){let l=this._renderer,h=this._blurMaterial,u=this._lodMeshes[s];u.material=h;let f=h.uniforms;f.envMap.value=t.texture,f.sigma.value=o,f.mipInt.value=this._lodMax-i;let m=this._sizeLods[s],x=3*m*(s>this._lodMax-Fs?s-this._lodMax+Fs:0),p=4*(this._cubeSize-m);Ns(e,x,p,3*m,2*m),l.setRenderTarget(e),l.render(u,Xr)}};function hg(n){let t=[],e=[],i=n,s=n-Fs+1+og;for(let o=0;o<s;o++){let l=Math.pow(2,i);t.push(l);let h=1/(l-2),u=-h,f=1+h,m=[u,u,f,u,f,f,u,u,f,f,u,f],x=6,p=6,g=3,S=new Float32Array(g*p*x),w=new Float32Array(g*p*x);for(let v=0;v<x;v++){let P=v%3*2/3-1,A=v>2?0:-1,E=[P,A,0,P+2/3,A,0,P+2/3,A+1,0,P,A,0,P+2/3,A+1,0,P,A+1,0];S.set(E,g*p*v);for(let R=0;R<p;R++){let L=m[R*2]*2-1,O=m[R*2+1]*2-1;v===0?Wi.set(1,O,L):v===1?Wi.set(-L,1,-O):v===2?Wi.set(-L,O,1):v===3?Wi.set(-1,O,-L):v===4?Wi.set(-L,-1,O):Wi.set(L,O,-1),Wi.toArray(w,(v*p+R)*g)}}let y=new Le;y.setAttribute("position",new Qe(S,g)),y.setAttribute("outputDirection",new Qe(w,g)),e.push(new Ce(y,null)),i>Fs&&i--}return{lodMeshes:e,sizeLods:t}}function Ou(n,t,e){let i=new on(n,t,e);return i.texture.mapping=Dr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ns(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ug(n,t,e){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:al(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function fg(n,t,e){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:ag,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:al(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Uu(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Bu(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function al(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var rl=class extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new hr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ve(5,5,5),o=new en({name:"CubemapFromEquirect",uniforms:Xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:Gn});o.uniforms.tEquirect.value=e;let l=new Ce(s,o),h=e.minFilter;return e.minFilter===Ti&&(e.minFilter=ke),new ha(1,10,this).update(t,l),e.minFilter=h,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,s);t.setRenderTarget(o)}};function dg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(p,g=!1){return p==null?null:g?l(p):o(p)}function o(p){if(p&&p.isTexture){let g=p.mapping;if(g===pa||g===ma)if(t.has(p)){let S=t.get(p).texture;return h(S,p.mapping)}else{let S=p.image;if(S&&S.height>0){let w=new rl(S.height);return w.fromEquirectangularTexture(n,p),t.set(p,w),p.addEventListener("dispose",f),h(w.texture,p.mapping)}else return null}}return p}function l(p){if(p&&p.isTexture){let g=p.mapping,S=g===pa||g===ma,w=g===wi||g===Hi;if(S||w){let y=e.get(p),v=y!==void 0?y.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==v)return i===null&&(i=new sl(n)),y=S?i.fromEquirectangular(p,y):i.fromCubemap(p,y),y.texture.pmremVersion=p.pmremVersion,e.set(p,y),y.texture;if(y!==void 0)return y.texture;{let P=p.image;return S&&P&&P.height>0||w&&P&&u(P)?(i===null&&(i=new sl(n)),y=S?i.fromEquirectangular(p):i.fromCubemap(p),y.texture.pmremVersion=p.pmremVersion,e.set(p,y),p.addEventListener("dispose",m),y.texture):null}}}return p}function h(p,g){return g===pa?p.mapping=wi:g===ma&&(p.mapping=Hi),p}function u(p){let g=0,S=6;for(let w=0;w<S;w++)p[w]!==void 0&&g++;return g===S}function f(p){let g=p.target;g.removeEventListener("dispose",f);let S=t.get(g);S!==void 0&&(t.delete(g),S.dispose())}function m(p){let g=p.target;g.removeEventListener("dispose",m);let S=e.get(g);S!==void 0&&(e.delete(g),S.dispose())}function x(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:x}}function pg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Fi("WebGLRenderer: "+i+" extension not supported."),s}}}function mg(n,t,e,i){let s={},o=new WeakMap;function l(x){let p=x.target;p.index!==null&&t.remove(p.index);for(let S in p.attributes)t.remove(p.attributes[S]);p.removeEventListener("dispose",l),delete s[p.id];let g=o.get(p);g&&(t.remove(g),o.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function h(x,p){return s[p.id]===!0||(p.addEventListener("dispose",l),s[p.id]=!0,e.memory.geometries++),p}function u(x){let p=x.attributes;for(let g in p)t.update(p[g],n.ARRAY_BUFFER)}function f(x){let p=[],g=x.index,S=x.attributes.position,w=0;if(S===void 0)return;if(g!==null){let P=g.array;w=g.version;for(let A=0,E=P.length;A<E;A+=3){let R=P[A+0],L=P[A+1],O=P[A+2];p.push(R,L,L,O,O,R)}}else{let P=S.array;w=S.version;for(let A=0,E=P.length/3-1;A<E;A+=3){let R=A+0,L=A+1,O=A+2;p.push(R,L,L,O,O,R)}}let y=new(S.count>=65535?lr:ar)(p,1);y.version=w;let v=o.get(x);v&&t.remove(v),o.set(x,y)}function m(x){let p=o.get(x);if(p){let g=x.index;g!==null&&p.version<g.version&&f(x)}else f(x);return o.get(x)}return{get:h,update:u,getWireframeAttribute:m}}function gg(n,t,e){let i;function s(x){i=x}let o,l;function h(x){o=x.type,l=x.bytesPerElement}function u(x,p){n.drawElements(i,p,o,x*l),e.update(p,i,1)}function f(x,p,g){g!==0&&(n.drawElementsInstanced(i,p,o,x*l,g),e.update(p,i,g))}function m(x,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,x,0,g);let w=0;for(let y=0;y<g;y++)w+=p[y];e.update(w,i,1)}this.setMode=s,this.setIndex=h,this.render=u,this.renderInstances=f,this.renderMultiDraw=m}function _g(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,h){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=h*(o/3);break;case n.LINES:e.lines+=h*(o/2);break;case n.LINE_STRIP:e.lines+=h*(o-1);break;case n.LINE_LOOP:e.lines+=h*o;break;case n.POINTS:e.points+=h*o;break;default:ee("WebGLInfo: Unknown draw mode:",l);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function xg(n,t,e){let i=new WeakMap,s=new Me;function o(l,h,u){let f=l.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=m!==void 0?m.length:0,p=i.get(h);if(p===void 0||p.count!==x){let D=function(){O.dispose(),i.delete(h),h.removeEventListener("dispose",D)};p!==void 0&&p.texture.dispose();let g=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],P=h.morphAttributes.color||[],A=0;g===!0&&(A=1),S===!0&&(A=2),w===!0&&(A=3);let E=h.attributes.position.count*A,R=1;E>t.maxTextureSize&&(R=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let L=new Float32Array(E*R*4*x),O=new rr(L,E,R,x);O.type=Dn,O.needsUpdate=!0;let T=A*4;for(let B=0;B<x;B++){let N=y[B],G=v[B],H=P[B],U=E*R*4*B;for(let W=0;W<N.count;W++){let K=W*T;g===!0&&(s.fromBufferAttribute(N,W),L[U+K+0]=s.x,L[U+K+1]=s.y,L[U+K+2]=s.z,L[U+K+3]=0),S===!0&&(s.fromBufferAttribute(G,W),L[U+K+4]=s.x,L[U+K+5]=s.y,L[U+K+6]=s.z,L[U+K+7]=0),w===!0&&(s.fromBufferAttribute(H,W),L[U+K+8]=s.x,L[U+K+9]=s.y,L[U+K+10]=s.z,L[U+K+11]=H.itemSize===4?s.w:1)}}p={count:x,texture:O,size:new _t(E,R)},i.set(h,p),h.addEventListener("dispose",D)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",l.morphTexture,e);else{let g=0;for(let w=0;w<f.length;w++)g+=f[w];let S=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(n,"morphTargetBaseInfluence",S),u.getUniforms().setValue(n,"morphTargetInfluences",f)}u.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:o}}function yg(n,t,e,i,s){let o=new WeakMap;function l(f){let m=s.render.frame,x=f.geometry,p=t.get(f,x);if(o.get(p)!==m&&(t.update(p),o.set(p,m)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),o.get(f)!==m&&(e.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,n.ARRAY_BUFFER),o.set(f,m))),f.isSkinnedMesh){let g=f.skeleton;o.get(g)!==m&&(g.update(),o.set(g,m))}return p}function h(){o=new WeakMap}function u(f){let m=f.target;m.removeEventListener("dispose",u),i.releaseStatesOfObject(m),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:l,dispose:h}}var vg={[pc]:"LINEAR_TONE_MAPPING",[mc]:"REINHARD_TONE_MAPPING",[gc]:"CINEON_TONE_MAPPING",[_c]:"ACES_FILMIC_TONE_MAPPING",[yc]:"AGX_TONE_MAPPING",[vc]:"NEUTRAL_TONE_MAPPING",[xc]:"CUSTOM_TONE_MAPPING"};function Sg(n,t,e,i,s,o){let l=new on(t,e,{type:n,depthBuffer:s,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),h=null,u=null,f=new Le;f.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new me([0,2,0,0,2,0],2));let m=new $o({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new Ce(f,m),p=new Ps(-1,1,1,-1,0,1),g=null,S=null,w=!1,y,v=null,P=[],A=!1;this.setSize=function(E,R){l.setSize(E,R),h!==null&&h.setSize(E,R),u!==null&&u.setSize(E,R);for(let L=0;L<P.length;L++){let O=P[L];O.setSize&&O.setSize(E,R)}},this.setEffects=function(E){P=E,A=P.length>0&&P[0].isRenderPass===!0;let R=l.width,L=l.height;P.length>0&&h===null&&(h=new on(R,L,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),u=new on(R,L,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<P.length;O++){let T=P[O];T.setSize&&T.setSize(R,L)}},this.begin=function(E,R){if(w||E.toneMapping===Rn&&P.length===0)return!1;if(v=R,R!==null){let L=R.width,O=R.height;(l.width!==L||l.height!==O)&&this.setSize(L,O)}return A===!1&&E.setRenderTarget(l),y=E.toneMapping,E.toneMapping=Rn,!0},this.hasRenderPass=function(){return A},this.end=function(E,R){E.toneMapping=y,w=!0;let L=l,O=h;for(let T=0;T<P.length;T++){let D=P[T];D.enabled!==!1&&(D.render(E,O,L,R),D.needsSwap!==!1&&(L=O,O=O===h?u:h))}if(g!==E.outputColorSpace||S!==E.toneMapping){g=E.outputColorSpace,S=E.toneMapping,m.defines={},de.getTransfer(g)===Se&&(m.defines.SRGB_TRANSFER="");let T=vg[S];T&&(m.defines[T]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,E.setRenderTarget(v),E.render(x,p),v=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){l.dispose(),h!==null&&h.dispose(),u!==null&&u.dispose(),f.dispose(),m.dispose()}}var rf=new tn,qc=new mi(1,1),of=new rr,af=new Go,lf=new hr,zu=[],ku=[],Vu=new Float32Array(16),Gu=new Float32Array(9),Hu=new Float32Array(4);function Us(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,o=zu[s];if(o===void 0&&(o=new Float32Array(s),zu[s]=o),t!==0){i.toArray(o,0);for(let l=1,h=0;l!==t;++l)h+=e,n[l].toArray(o,h)}return o}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ll(n,t){let e=ku[t];e===void 0&&(e=new Int32Array(t),ku[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Mg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function bg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function wg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function Tg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function Eg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Hu.set(i),n.uniformMatrix2fv(this.addr,!1,Hu),Oe(e,i)}}function Ag(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Gu.set(i),n.uniformMatrix3fv(this.addr,!1,Gu),Oe(e,i)}}function Pg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Vu.set(i),n.uniformMatrix4fv(this.addr,!1,Vu),Oe(e,i)}}function Cg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ig(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function Rg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function Lg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function Dg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ng(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function Fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function Og(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function Ug(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(qc.compareFunction=e.isReversedDepthBuffer()?el:tl,o=qc):o=rf,e.setTexture2D(t||o,s)}function Bg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||af,s)}function zg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||lf,s)}function kg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||of,s)}function Vg(n){switch(n){case 5126:return Mg;case 35664:return bg;case 35665:return wg;case 35666:return Tg;case 35674:return Eg;case 35675:return Ag;case 35676:return Pg;case 5124:case 35670:return Cg;case 35667:case 35671:return Ig;case 35668:case 35672:return Rg;case 35669:case 35673:return Lg;case 5125:return Dg;case 36294:return Ng;case 36295:return Fg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return kg}}function Gg(n,t){n.uniform1fv(this.addr,t)}function Hg(n,t){let e=Us(t,this.size,2);n.uniform2fv(this.addr,e)}function Xg(n,t){let e=Us(t,this.size,3);n.uniform3fv(this.addr,e)}function Wg(n,t){let e=Us(t,this.size,4);n.uniform4fv(this.addr,e)}function Yg(n,t){let e=Us(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function qg(n,t){let e=Us(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Zg(n,t){let e=Us(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Jg(n,t){n.uniform1iv(this.addr,t)}function $g(n,t){n.uniform2iv(this.addr,t)}function Kg(n,t){n.uniform3iv(this.addr,t)}function jg(n,t){n.uniform4iv(this.addr,t)}function Qg(n,t){n.uniform1uiv(this.addr,t)}function t_(n,t){n.uniform2uiv(this.addr,t)}function e_(n,t){n.uniform3uiv(this.addr,t)}function n_(n,t){n.uniform4uiv(this.addr,t)}function i_(n,t,e){let i=this.cache,s=t.length,o=ll(e,s);Fe(i,o)||(n.uniform1iv(this.addr,o),Oe(i,o));let l;this.type===n.SAMPLER_2D_SHADOW?l=qc:l=rf;for(let h=0;h!==s;++h)e.setTexture2D(t[h]||l,o[h])}function s_(n,t,e){let i=this.cache,s=t.length,o=ll(e,s);Fe(i,o)||(n.uniform1iv(this.addr,o),Oe(i,o));for(let l=0;l!==s;++l)e.setTexture3D(t[l]||af,o[l])}function r_(n,t,e){let i=this.cache,s=t.length,o=ll(e,s);Fe(i,o)||(n.uniform1iv(this.addr,o),Oe(i,o));for(let l=0;l!==s;++l)e.setTextureCube(t[l]||lf,o[l])}function o_(n,t,e){let i=this.cache,s=t.length,o=ll(e,s);Fe(i,o)||(n.uniform1iv(this.addr,o),Oe(i,o));for(let l=0;l!==s;++l)e.setTexture2DArray(t[l]||of,o[l])}function a_(n){switch(n){case 5126:return Gg;case 35664:return Hg;case 35665:return Xg;case 35666:return Wg;case 35674:return Yg;case 35675:return qg;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return $g;case 35668:case 35672:return Kg;case 35669:case 35673:return jg;case 5125:return Qg;case 36294:return t_;case 36295:return e_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}var Zc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Vg(e.type)}},Jc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a_(e.type)}},$c=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let o=0,l=s.length;o!==l;++o){let h=s[o];h.setValue(t,e[h.id],i)}}},Wc=/(\w+)(\])?(\[|\.)?/g;function Xu(n,t){n.seq.push(t),n.map[t.id]=t}function l_(n,t,e){let i=n.name,s=i.length;for(Wc.lastIndex=0;;){let o=Wc.exec(i),l=Wc.lastIndex,h=o[1],u=o[2]==="]",f=o[3];if(u&&(h=h|0),f===void 0||f==="["&&l+2===s){Xu(e,f===void 0?new Zc(h,n,t):new Jc(h,n,t));break}else{let x=e.map[h];x===void 0&&(x=new $c(h),Xu(e,x)),e=x}}}var Os=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<i;++l){let h=t.getActiveUniform(e,l),u=t.getUniformLocation(e,h.name);l_(h,u,this)}let s=[],o=[];for(let l of this.seq)l.type===t.SAMPLER_2D_SHADOW||l.type===t.SAMPLER_CUBE_SHADOW||l.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(l):o.push(l);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,i,s){let o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,l=e.length;o!==l;++o){let h=e[o],u=i[h.id];u.needsUpdate!==!1&&h.setValue(t,u.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,o=t.length;s!==o;++s){let l=t[s];l.id in e&&i.push(l)}return i}};function Wu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var c_=37297,h_=0;function u_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=s;l<o;l++){let h=l+1;i.push(`${h===t?">":" "} ${h}: ${e[l]}`)}return i.join(`
`)}var Yu=new oe;function f_(n){de._getMatrix(Yu,de.workingColorSpace,n);let t=`mat3( ${Yu.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(n)){case nr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function qu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";let l=/ERROR: 0:(\d+)/.exec(o);if(l){let h=parseInt(l[1]);return e.toUpperCase()+`

`+o+`

`+u_(n.getShaderSource(t),h)}else return o}function d_(n,t){let e=f_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var p_={[pc]:"Linear",[mc]:"Reinhard",[gc]:"Cineon",[_c]:"ACESFilmic",[yc]:"AgX",[vc]:"Neutral",[xc]:"Custom"};function m_(n,t){let e=p_[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var il=new z;function g_(){de.getLuminanceCoefficients(il);let n=il.x.toFixed(4),t=il.y.toFixed(4),e=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function __(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function x_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function y_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let o=n.getActiveAttrib(t,s),l=o.name,h=1;o.type===n.FLOAT_MAT2&&(h=2),o.type===n.FLOAT_MAT3&&(h=3),o.type===n.FLOAT_MAT4&&(h=4),e[l]={type:o.type,location:n.getAttribLocation(t,l),locationSize:h}}return e}function Yr(n){return n!==""}function Zu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ju(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var v_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(n){return n.replace(v_,M_)}var S_=new Map;function M_(n,t){let e=he[t];if(e===void 0){let i=S_.get(t);if(i!==void 0)e=he[i],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Kc(e)}var b_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $u(n){return n.replace(b_,w_)}function w_(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ku(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var T_={[Lr]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function E_(n){return T_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var A_={[wi]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE_UV"};function P_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":A_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var C_={[Hi]:"ENVMAP_MODE_REFRACTION"};function I_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":C_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var R_={[dc]:"ENVMAP_BLENDING_MULTIPLY",[fu]:"ENVMAP_BLENDING_MIX",[du]:"ENVMAP_BLENDING_ADD"};function L_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":R_[n.combine]||"ENVMAP_BLENDING_NONE"}function D_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function N_(n,t,e,i){let s=n.getContext(),o=e.defines,l=e.vertexShader,h=e.fragmentShader,u=E_(e),f=P_(e),m=I_(e),x=L_(e),p=D_(e),g=__(e),S=x_(o),w=s.createProgram(),y,v,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Yr).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Yr).join(`
`),v.length>0&&(v+=`
`)):(y=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),v=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+m:"",e.envMap?"#define "+x:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?he.tonemapping_pars_fragment:"",e.toneMapping!==Rn?m_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,d_("linearToOutputTexel",e.outputColorSpace),g_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),l=Kc(l),l=Zu(l,e),l=Ju(l,e),h=Kc(h),h=Zu(h,e),h=Ju(h,e),l=$u(l),h=$u(h),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",e.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let A=P+y+l,E=P+v+h,R=Wu(s,s.VERTEX_SHADER,A),L=Wu(s,s.FRAGMENT_SHADER,E);s.attachShader(w,R),s.attachShader(w,L),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function O(N){if(n.debug.checkShaderErrors){let G=s.getProgramInfoLog(w)||"",H=s.getShaderInfoLog(R)||"",U=s.getShaderInfoLog(L)||"",W=G.trim(),K=H.trim(),$=U.trim(),at=!0,tt=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(at=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,w,R,L);else{let it=qu(s,R,"vertex"),st=qu(s,L,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+it+`
`+st)}else W!==""?jt("WebGLProgram: Program Info Log:",W):(K===""||$==="")&&(tt=!1);tt&&(N.diagnostics={runnable:at,programLog:W,vertexShader:{log:K,prefix:y},fragmentShader:{log:$,prefix:v}})}s.deleteShader(R),s.deleteShader(L),T=new Os(s,w),D=y_(s,w)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(w,c_)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=h_++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=R,this.fragmentShader=L,this}var F_=0,jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Qc(t),e.set(t,i)),i}},Qc=class{constructor(t){this.id=F_++,this.code=t,this.usedTimes=0}};function O_(n){return n===Ai||n===kr||n===Vr}function U_(n,t,e,i,s,o){let l=new Ss,h=new jc,u=new Set,f=[],m=new Map,x=i.logarithmicDepthBuffer,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return u.add(T),T===0?"uv":`uv${T}`}function w(T,D,B,N,G,H){let U=N.fog,W=G.geometry,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?N.environment:null,$=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,at=t.get(T.envMap||K,$),tt=at&&at.mapping===Dr?at.image.height:null,it=g[T.type];T.precision!==null&&(p=i.getMaxPrecision(T.precision),p!==T.precision&&jt("WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Tt=st!==void 0?st.length:0,Et=0;W.morphAttributes.position!==void 0&&(Et=1),W.morphAttributes.normal!==void 0&&(Et=2),W.morphAttributes.color!==void 0&&(Et=3);let qt,ne,pe,lt;if(it){let Te=nn[it];qt=Te.vertexShader,ne=Te.fragmentShader}else{qt=T.vertexShader,ne=T.fragmentShader;let Te=h.getVertexShaderStage(T),xe=h.getFragmentShaderStage(T);h.update(T,Te,xe),pe=Te.id,lt=xe.id}let dt=n.getRenderTarget(),Nt=n.state.buffers.depth.getReversed(),Kt=G.isInstancedMesh===!0,Ft=G.isBatchedMesh===!0,Qt=!!T.map,ve=!!T.matcap,pt=!!at,xt=!!T.aoMap,yt=!!T.lightMap,vt=!!T.bumpMap&&T.wireframe===!1,bt=!!T.normalMap,$t=!!T.displacementMap,Zt=!!T.emissiveMap,te=!!T.metalnessMap,ie=!!T.roughnessMap,X=T.anisotropy>0,_e=T.clearcoat>0,ue=T.dispersion>0,F=T.retroreflectivity>0,b=T.iridescence>0,J=T.sheen>0,et=T.transmission>0,rt=X&&!!T.anisotropyMap,St=_e&&!!T.clearcoatMap,Mt=_e&&!!T.clearcoatNormalMap,ot=_e&&!!T.clearcoatRoughnessMap,ft=b&&!!T.iridescenceMap,Ct=b&&!!T.iridescenceThicknessMap,Gt=J&&!!T.sheenColorMap,Dt=J&&!!T.sheenRoughnessMap,At=!!T.specularMap,Xt=!!T.specularColorMap,Jt=!!T.specularIntensityMap,ae=et&&!!T.transmissionMap,q=et&&!!T.thicknessMap,It=!!T.gradientMap,ut=!!T.alphaMap,Rt=T.alphaTest>0,Bt=!!T.alphaHash,mt=!!T.extensions,Yt=Rn;T.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Yt=n.toneMapping);let Vt={shaderID:it,shaderType:T.type,shaderName:T.name,vertexShader:qt,fragmentShader:ne,defines:T.defines,customVertexShaderID:pe,customFragmentShaderID:lt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&G._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&G.instanceColor!==null,instancingMorph:Kt&&G.morphTexture!==null,outputColorSpace:dt===null?n.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Qt,matcap:ve,envMap:pt,envMapMode:pt&&at.mapping,envMapCubeUVHeight:tt,aoMap:xt,lightMap:yt,bumpMap:vt,normalMap:bt,displacementMap:$t,emissiveMap:Zt,normalMapObjectSpace:bt&&T.normalMapType===gu,normalMapTangentSpace:bt&&T.normalMapType===Qa,packedNormalMap:bt&&T.normalMapType===Qa&&O_(T.normalMap.format),metalnessMap:te,roughnessMap:ie,anisotropy:X,anisotropyMap:rt,clearcoat:_e,clearcoatMap:St,clearcoatNormalMap:Mt,clearcoatRoughnessMap:ot,dispersion:ue,retroreflection:F,iridescence:b,iridescenceMap:ft,iridescenceThicknessMap:Ct,sheen:J,sheenColorMap:Gt,sheenRoughnessMap:Dt,specularMap:At,specularColorMap:Xt,specularIntensityMap:Jt,transmission:et,transmissionMap:ae,thicknessMap:q,gradientMap:It,opaque:T.transparent===!1&&T.blending===Rs&&T.alphaToCoverage===!1,alphaMap:ut,alphaTest:Rt,alphaHash:Bt,combine:T.combine,mapUv:Qt&&S(T.map.channel),aoMapUv:xt&&S(T.aoMap.channel),lightMapUv:yt&&S(T.lightMap.channel),bumpMapUv:vt&&S(T.bumpMap.channel),normalMapUv:bt&&S(T.normalMap.channel),displacementMapUv:$t&&S(T.displacementMap.channel),emissiveMapUv:Zt&&S(T.emissiveMap.channel),metalnessMapUv:te&&S(T.metalnessMap.channel),roughnessMapUv:ie&&S(T.roughnessMap.channel),anisotropyMapUv:rt&&S(T.anisotropyMap.channel),clearcoatMapUv:St&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&S(T.sheenRoughnessMap.channel),specularMapUv:At&&S(T.specularMap.channel),specularColorMapUv:Xt&&S(T.specularColorMap.channel),specularIntensityMapUv:Jt&&S(T.specularIntensityMap.channel),transmissionMapUv:ae&&S(T.transmissionMap.channel),thicknessMapUv:q&&S(T.thicknessMap.channel),alphaMapUv:ut&&S(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(bt||X),vertexNormals:!!W.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(Qt||ut),fog:!!U,useFog:T.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||W.attributes.normal===void 0&&bt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Nt,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Et,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Qt&&T.map.isVideoTexture===!0&&de.getTransfer(T.map.colorSpace)===Se,decodeVideoTextureEmissive:Zt&&T.emissiveMap.isVideoTexture===!0&&de.getTransfer(T.emissiveMap.colorSpace)===Se,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===an,flipSided:T.side===Ge,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:mt&&T.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&T.extensions.multiDraw===!0||Ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Vt.vertexUv1s=u.has(1),Vt.vertexUv2s=u.has(2),Vt.vertexUv3s=u.has(3),u.clear(),Vt}function y(T){let D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(let B in T.defines)D.push(B),D.push(T.defines[B]);return T.isRawShaderMaterial===!1&&(v(D,T),P(D,T),D.push(n.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function v(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numSunLights),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numSunLightShadows),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function P(T,D){l.disableAll(),D.instancing&&l.enable(0),D.instancingColor&&l.enable(1),D.instancingMorph&&l.enable(2),D.matcap&&l.enable(3),D.envMap&&l.enable(4),D.normalMapObjectSpace&&l.enable(5),D.normalMapTangentSpace&&l.enable(6),D.clearcoat&&l.enable(7),D.iridescence&&l.enable(8),D.alphaTest&&l.enable(9),D.vertexColors&&l.enable(10),D.vertexAlphas&&l.enable(11),D.vertexUv1s&&l.enable(12),D.vertexUv2s&&l.enable(13),D.vertexUv3s&&l.enable(14),D.vertexTangents&&l.enable(15),D.anisotropy&&l.enable(16),D.alphaHash&&l.enable(17),D.batching&&l.enable(18),D.dispersion&&l.enable(19),D.retroreflection&&l.enable(24),D.batchingColor&&l.enable(20),D.gradientMap&&l.enable(21),D.packedNormalMap&&l.enable(22),D.vertexNormals&&l.enable(23),T.push(l.mask),l.disableAll(),D.fog&&l.enable(0),D.useFog&&l.enable(1),D.flatShading&&l.enable(2),D.logarithmicDepthBuffer&&l.enable(3),D.reversedDepthBuffer&&l.enable(4),D.skinning&&l.enable(5),D.morphTargets&&l.enable(6),D.morphNormals&&l.enable(7),D.morphColors&&l.enable(8),D.premultipliedAlpha&&l.enable(9),D.shadowMapEnabled&&l.enable(10),D.doubleSided&&l.enable(11),D.flipSided&&l.enable(12),D.useDepthPacking&&l.enable(13),D.dithering&&l.enable(14),D.transmission&&l.enable(15),D.sheen&&l.enable(16),D.opaque&&l.enable(17),D.pointsUvs&&l.enable(18),D.decodeVideoTexture&&l.enable(19),D.decodeVideoTextureEmissive&&l.enable(20),D.alphaToCoverage&&l.enable(21),D.numLightProbeGrids>0&&l.enable(22),D.hasPositionAttribute&&l.enable(23),T.push(l.mask)}function A(T){let D=g[T.type],B;if(D){let N=nn[D];B=Hr.clone(N.uniforms)}else B=T.uniforms;return B}function E(T,D){let B=m.get(D);return B!==void 0?++B.usedTimes:(B=new N_(n,D,T,s),f.push(B),m.set(D,B)),B}function R(T){if(--T.usedTimes===0){let D=f.indexOf(T);f[D]=f[f.length-1],f.pop(),m.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function O(){h.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:A,acquireProgram:E,releaseProgram:R,releaseShaderCache:L,programs:f,dispose:O}}function B_(){let n=new WeakMap;function t(l){return n.has(l)}function e(l){let h=n.get(l);return h===void 0&&(h={},n.set(l,h)),h}function i(l){n.delete(l)}function s(l,h,u){n.get(l)[h]=u}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function z_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function ju(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Qu(){let n=[],t=0,e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function l(p){let g=0;return p.isInstancedMesh&&(g+=2),p.isSkinnedMesh&&(g+=1),g}function h(p,g,S,w,y,v){let P=n[t];return P===void 0?(P={id:p.id,object:p,geometry:g,material:S,materialVariant:l(p),groupOrder:w,renderOrder:p.renderOrder,z:y,group:v},n[t]=P):(P.id=p.id,P.object=p,P.geometry=g,P.material=S,P.materialVariant=l(p),P.groupOrder=w,P.renderOrder=p.renderOrder,P.z=y,P.group=v),t++,P}function u(p,g,S,w,y,v,P){P.reversedDepth===!0&&(y=-y);let A=h(p,g,S,w,y,v);S.transmission>0?i.push(A):S.transparent===!0?s.push(A):e.push(A)}function f(p,g,S,w,y,v){let P=h(p,g,S,w,y,v);S.transmission>0?i.unshift(P):S.transparent===!0?s.unshift(P):e.unshift(P)}function m(p,g){e.length>1&&e.sort(p||z_),i.length>1&&i.sort(g||ju),s.length>1&&s.sort(g||ju)}function x(){for(let p=t,g=n.length;p<g;p++){let S=n[p];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:u,unshift:f,finish:x,sort:m}}function k_(){let n=new WeakMap;function t(i,s){let o=n.get(i),l;return o===void 0?(l=new Qu,n.set(i,[l])):s>=o.length?(l=new Qu,o.push(l)):l=o[s],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function V_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new fe};break;case"SpotLight":e={position:new z,direction:new z,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function G_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var H_=0;function X_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function W_(n){let t=new V_,e=G_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new z);let s=new z,o=new ge,l=new ge;function h(f){let m=0,x=0,p=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let g=0,S=0,w=0,y=0,v=0,P=0,A=0,E=0,R=0,L=0,O=0,T=0,D=0,B=0;f.sort(X_);for(let G=0,H=f.length;G<H;G++){let U=f[G],W=U.color,K=U.intensity,$=U.distance,at=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ai?at=U.shadow.map.texture:at=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)m+=W.r*K,x+=W.g*K,p+=W.b*K;else if(U.isLightProbe){for(let tt=0;tt<9;tt++)i.probe[tt].addScaledVector(U.sh.coefficients[tt],K);B++}else if(U.isSunLight){let tt=t.get(U);if(tt.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let it=U.shadow,st=e.get(U);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),i.sunShadow[S]=st,i.sunShadowMap[S]=at;let Tt=it.getViewportCount();for(let Et=0;Et<Tt;Et++)i.sunShadowMatrix[w+Et]=it.getMatrix(Et),i.sunShadowCascade[w+Et]=it._cascadeData[Et];w+=Tt,S++}i.sun[g]=tt,g++}else if(U.isDirectionalLight){let tt=t.get(U);if(tt.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let it=U.shadow,st=e.get(U);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize=it.mapSize,i.directionalShadow[y]=st,i.directionalShadowMap[y]=at,i.directionalShadowMatrix[y]=U.shadow.matrix,R++}i.directional[y]=tt,y++}else if(U.isSpotLight){let tt=t.get(U);tt.position.setFromMatrixPosition(U.matrixWorld),tt.color.copy(W).multiplyScalar(K),tt.distance=$,tt.coneCos=Math.cos(U.angle),tt.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),tt.decay=U.decay,i.spot[P]=tt;let it=U.shadow;if(U.map&&(i.spotLightMap[T]=U.map,T++,it.updateMatrices(U),U.castShadow&&D++),i.spotLightMatrix[P]=it.matrix,U.castShadow){let st=e.get(U);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize=it.mapSize,i.spotShadow[P]=st,i.spotShadowMap[P]=at,O++}P++}else if(U.isRectAreaLight){let tt=t.get(U);tt.color.copy(W).multiplyScalar(K),tt.halfWidth.set(U.width*.5,0,0),tt.halfHeight.set(0,U.height*.5,0),i.rectArea[A]=tt,A++}else if(U.isPointLight){let tt=t.get(U);if(tt.color.copy(U.color).multiplyScalar(U.intensity),tt.distance=U.distance,tt.decay=U.decay,U.castShadow){let it=U.shadow,st=e.get(U);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize=it.mapSize,st.shadowCameraNear=it.camera.near,st.shadowCameraFar=it.camera.far,i.pointShadow[v]=st,i.pointShadowMap[v]=at,i.pointShadowMatrix[v]=U.shadow.matrix,L++}i.point[v]=tt,v++}else if(U.isHemisphereLight){let tt=t.get(U);tt.skyColor.copy(U.color).multiplyScalar(K),tt.groundColor.copy(U.groundColor).multiplyScalar(K),i.hemi[E]=tt,E++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pt.LTC_FLOAT_1,i.rectAreaLTC2=Pt.LTC_FLOAT_2):(i.rectAreaLTC1=Pt.LTC_HALF_1,i.rectAreaLTC2=Pt.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=x,i.ambient[2]=p;let N=i.hash;(N.sunLength!==g||N.directionalLength!==y||N.pointLength!==v||N.spotLength!==P||N.rectAreaLength!==A||N.hemiLength!==E||N.numSunShadows!==S||N.numDirectionalShadows!==R||N.numPointShadows!==L||N.numSpotShadows!==O||N.numSpotMaps!==T||N.numLightProbes!==B)&&(i.sun.length=g,i.directional.length=y,i.spot.length=P,i.rectArea.length=A,i.point.length=v,i.hemi.length=E,i.sunShadow.length=S,i.sunShadowMap.length=S,i.sunShadowMatrix.length=w,i.sunShadowCascade.length=w,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=L,i.pointShadowMap.length=L,i.pointShadowMatrix.length=L,i.spotShadow.length=O,i.spotShadowMap.length=O,i.spotLightMatrix.length=O+T-D,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=B,N.sunLength=g,N.directionalLength=y,N.pointLength=v,N.spotLength=P,N.rectAreaLength=A,N.hemiLength=E,N.numSunShadows=S,N.numDirectionalShadows=R,N.numPointShadows=L,N.numSpotShadows=O,N.numSpotMaps=T,N.numLightProbes=B,i.version=H_++)}function u(f,m){let x=0,p=0,g=0,S=0,w=0,y=0,v=m.matrixWorldInverse;for(let P=0,A=f.length;P<A;P++){let E=f[P];if(E.isSunLight){let R=i.sun[x];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(v),x++}else if(E.isDirectionalLight){let R=i.directional[p];R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(v),p++}else if(E.isSpotLight){let R=i.spot[S];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(v),R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(v),S++}else if(E.isRectAreaLight){let R=i.rectArea[w];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(v),l.identity(),o.copy(E.matrixWorld),o.premultiply(v),l.extractRotation(o),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),w++}else if(E.isPointLight){let R=i.point[g];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(v),g++}else if(E.isHemisphereLight){let R=i.hemi[y];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(v),y++}}}return{setup:h,setupView:u,state:i}}function tf(n){let t=new W_(n),e=[],i=[],s=[];function o(p){x.camera=p,e.length=0,i.length=0,s.length=0}function l(p){e.push(p)}function h(p){i.push(p)}function u(p){s.push(p)}function f(){t.setup(e)}function m(p){t.setupView(e,p)}let x={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:x,setupLights:f,setupLightsView:m,pushLight:l,pushShadow:h,pushLightProbeGrid:u}}function Y_(n){let t=new WeakMap;function e(s,o=0){let l=t.get(s),h;return l===void 0?(h=new tf(n),t.set(s,[h])):o>=l.length?(h=new tf(n),l.push(h)):h=l[o],h}function i(){t=new WeakMap}return{get:e,dispose:i}}var q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z_=`uniform sampler2D shadow_pass;
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
}`,J_=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],$_=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],ef=new ge,Wr=new z,Yc=new z;function K_(n,t,e){let i=new ws,s=new _t,o=new _t,l=new Me,h=new Ko,u=new jo,f={},m=e.maxTextureSize,x={[bi]:Ge,[Ge]:bi,[an]:an},p=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:q_,fragmentShader:Z_}),g=p.clone();g.defines.HORIZONTAL_PASS=1;let S=new Le;S.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Ce(S,p),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lr;let v=this.type;this.render=function(L,O,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===qh&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Lr);let D=n.getRenderTarget(),B=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Gn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let H=v!==this.type;H&&O.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(W=>W.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,W=L.length;U<W;U++){let K=L[U],$=K.shadow;if($===void 0){jt("WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let at=$.getFrameExtents();s.multiply(at),o.copy($.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(o.x=Math.floor(m/at.x),s.x=o.x*at.x,$.mapSize.x=o.x),s.y>m&&(o.y=Math.floor(m/at.y),s.y=o.y*at.y,$.mapSize.y=o.y));let tt=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=tt,$.map===null||H===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Is){if(K.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new on(s.x,s.y,{format:Ai,type:Nn,minFilter:ke,magFilter:ke,generateMipmaps:!1}),$.map.texture.name=K.name+".shadowMap",$.map.depthTexture=new mi(s.x,s.y,Dn),$.map.depthTexture.name=K.name+".shadowMapDepth",$.map.depthTexture.format=kn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ne,$.map.depthTexture.magFilter=Ne}else K.isPointLight?($.map=new rl(s.x),$.map.depthTexture=new Ho(s.x,Ln)):($.map=new on(s.x,s.y),$.map.depthTexture=new mi(s.x,s.y,Ln)),$.map.depthTexture.name=K.name+".shadowMap",$.map.depthTexture.format=kn,this.type===Lr?($.map.depthTexture.compareFunction=tt?el:tl,$.map.depthTexture.minFilter=ke,$.map.depthTexture.magFilter=ke):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ne,$.map.depthTexture.magFilter=Ne);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let it=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();K.isPointLight!==!0&&$.updateMatrices(K,T);for(let st=0;st<it;st++){let Tt=$.getCamera(st);if(K.isPointLight){let Et=$.camera,qt=$.matrix,ne=K.distance||Et.far;ne!==Et.far&&(Et.far=ne,Et.updateProjectionMatrix()),Wr.setFromMatrixPosition(K.matrixWorld),Et.position.copy(Wr),Yc.copy(Et.position),Yc.add(J_[st]),Et.up.copy($_[st]),Et.lookAt(Yc),Et.updateMatrixWorld(),qt.makeTranslation(-Wr.x,-Wr.y,-Wr.z),ef.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),$._frustum.setFromProjectionMatrix(ef,Et.coordinateSystem,Et.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,st),n.clear();else{st===0&&(n.setRenderTarget($.map),n.clear());let Et=$.getViewport(st);l.set(o.x*Et.x,o.y*Et.y,o.x*Et.z,o.y*Et.w),G.viewport(l)}i=$.getFrustum(st),E(O,T,Tt,K,this.type)}$.isPointLightShadow!==!0&&this.type===Is&&P($,T),$.needsUpdate=!1}v=this.type,y.needsUpdate=!1,n.setRenderTarget(D,B,N)};function P(L,O){let T=t.update(w);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null?L.mapPass=new on(s.x,s.y,{format:Ai,type:Nn}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),p.uniforms.shadow_pass.value=L.map.depthTexture,p.uniforms.resolution.value.set(L.map.width,L.map.height),p.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(O,null,T,p,w,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value.set(L.map.width,L.map.height),g.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(O,null,T,g,w,null)}function A(L,O,T,D){let B=null,N=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(N!==void 0)B=N;else if(B=T.isPointLight===!0?u:h,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let G=B.uuid,H=O.uuid,U=f[G];U===void 0&&(U={},f[G]=U);let W=U[H];W===void 0&&(W=B.clone(),U[H]=W,O.addEventListener("dispose",R)),B=W}if(B.visible=O.visible,B.wireframe=O.wireframe,D===Is?B.side=O.shadowSide!==null?O.shadowSide:O.side:B.side=O.shadowSide!==null?O.shadowSide:x[O.side],B.alphaMap=O.alphaMap,B.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,B.map=O.map,B.clipShadows=O.clipShadows,B.clippingPlanes=O.clippingPlanes,B.clipIntersection=O.clipIntersection,B.displacementMap=O.displacementMap,B.displacementScale=O.displacementScale,B.displacementBias=O.displacementBias,B.wireframeLinewidth=O.wireframeLinewidth,B.linewidth=O.linewidth,T.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let G=n.properties.get(B);G.light=T}return B}function E(L,O,T,D,B){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&B===Is)&&(!L.frustumCulled||L.intersectsFrustum(i))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);let H=t.update(L),U=L.material;if(Array.isArray(U)){let W=H.groups;for(let K=0,$=W.length;K<$;K++){let at=W[K],tt=U[at.materialIndex];if(tt&&tt.visible){let it=A(L,tt,D,B);L.onBeforeShadow(n,L,O,T,H,it,at),n.renderBufferDirect(T,null,H,it,L,at),L.onAfterShadow(n,L,O,T,H,it,at)}}}else if(U.visible){let W=A(L,U,D,B);L.onBeforeShadow(n,L,O,T,H,W,null),n.renderBufferDirect(T,null,H,W,L,null),L.onAfterShadow(n,L,O,T,H,W,null)}}let G=L.children;for(let H=0,U=G.length;H<U;H++)E(G[H],O,T,D,B)}function R(L){L.target.removeEventListener("dispose",R);for(let T in f){let D=f[T],B=L.target.uuid;B in D&&(D[B].dispose(),delete D[B])}}}function j_(n,t){function e(){let q=!1,It=new Me,ut=null,Rt=new Me(0,0,0,0);return{setMask:function(Bt){ut!==Bt&&!q&&(n.colorMask(Bt,Bt,Bt,Bt),ut=Bt)},setLocked:function(Bt){q=Bt},setClear:function(Bt,mt,Yt,Vt,Te){Te===!0&&(Bt*=Vt,mt*=Vt,Yt*=Vt),It.set(Bt,mt,Yt,Vt),Rt.equals(It)===!1&&(n.clearColor(Bt,mt,Yt,Vt),Rt.copy(It))},reset:function(){q=!1,ut=null,Rt.set(-1,0,0,0)}}}function i(){let q=!1,It=!1,ut=null,Rt=null,Bt=null;return{setReversed:function(mt){if(It!==mt){let Yt=t.get("EXT_clip_control");mt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),It=mt;let Vt=Bt;Bt=null,this.setClear(Vt)}},getReversed:function(){return It},setTest:function(mt){mt?dt(n.DEPTH_TEST):Nt(n.DEPTH_TEST)},setMask:function(mt){ut!==mt&&!q&&(n.depthMask(mt),ut=mt)},setFunc:function(mt){if(It&&(mt=Au[mt]),Rt!==mt){switch(mt){case Ro:n.depthFunc(n.NEVER);break;case Lo:n.depthFunc(n.ALWAYS);break;case Do:n.depthFunc(n.LESS);break;case gs:n.depthFunc(n.LEQUAL);break;case No:n.depthFunc(n.EQUAL);break;case Fo:n.depthFunc(n.GEQUAL);break;case Oo:n.depthFunc(n.GREATER);break;case Uo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Rt=mt}},setLocked:function(mt){q=mt},setClear:function(mt){Bt!==mt&&(Bt=mt,It&&(mt=1-mt),n.clearDepth(mt))},reset:function(){q=!1,ut=null,Rt=null,Bt=null,It=!1}}}function s(){let q=!1,It=null,ut=null,Rt=null,Bt=null,mt=null,Yt=null,Vt=null,Te=null;return{setTest:function(xe){q||(xe?dt(n.STENCIL_TEST):Nt(n.STENCIL_TEST))},setMask:function(xe){It!==xe&&!q&&(n.stencilMask(xe),It=xe)},setFunc:function(xe,un,vn){(ut!==xe||Rt!==un||Bt!==vn)&&(n.stencilFunc(xe,un,vn),ut=xe,Rt=un,Bt=vn)},setOp:function(xe,un,vn){(mt!==xe||Yt!==un||Vt!==vn)&&(n.stencilOp(xe,un,vn),mt=xe,Yt=un,Vt=vn)},setLocked:function(xe){q=xe},setClear:function(xe){Te!==xe&&(n.clearStencil(xe),Te=xe)},reset:function(){q=!1,It=null,ut=null,Rt=null,Bt=null,mt=null,Yt=null,Vt=null,Te=null}}}let o=new e,l=new i,h=new s,u=new WeakMap,f=new WeakMap,m={},x={},p={},g=new WeakMap,S=[],w=null,y=!1,v=null,P=null,A=null,E=null,R=null,L=null,O=null,T=new fe(0,0,0),D=0,B=!1,N=null,G=null,H=null,U=null,W=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,at=0,tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(tt)[1]),$=at>=1):tt.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),$=at>=2);let it=null,st={},Tt=n.getParameter(n.SCISSOR_BOX),Et=n.getParameter(n.VIEWPORT),qt=new Me().fromArray(Tt),ne=new Me().fromArray(Et);function pe(q,It,ut,Rt){let Bt=new Uint8Array(4),mt=n.createTexture();n.bindTexture(q,mt),n.texParameteri(q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<ut;Yt++)q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?n.texImage3D(It,0,n.RGBA,1,1,Rt,0,n.RGBA,n.UNSIGNED_BYTE,Bt):n.texImage2D(It+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Bt);return mt}let lt={};lt[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),lt[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),lt[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),dt(n.DEPTH_TEST),l.setFunc(gs),vt(!1),bt(ac),dt(n.CULL_FACE),xt(Gn);function dt(q){m[q]!==!0&&(n.enable(q),m[q]=!0)}function Nt(q){m[q]!==!1&&(n.disable(q),m[q]=!1)}function Kt(q,It){return p[q]!==It?(n.bindFramebuffer(q,It),p[q]=It,q===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=It),q===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=It),!0):!1}function Ft(q,It){let ut=S,Rt=!1;if(q){ut=g.get(It),ut===void 0&&(ut=[],g.set(It,ut));let Bt=q.textures;if(ut.length!==Bt.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,Yt=Bt.length;mt<Yt;mt++)ut[mt]=n.COLOR_ATTACHMENT0+mt;ut.length=Bt.length,Rt=!0}}else ut[0]!==n.BACK&&(ut[0]=n.BACK,Rt=!0);Rt&&n.drawBuffers(ut)}function Qt(q){return w!==q?(n.useProgram(q),w=q,!0):!1}let ve={[Gi]:n.FUNC_ADD,[Jh]:n.FUNC_SUBTRACT,[$h]:n.FUNC_REVERSE_SUBTRACT};ve[Kh]=n.MIN,ve[jh]=n.MAX;let pt={[Qh]:n.ZERO,[tu]:n.ONE,[eu]:n.SRC_COLOR,[uc]:n.SRC_ALPHA,[au]:n.SRC_ALPHA_SATURATE,[ru]:n.DST_COLOR,[iu]:n.DST_ALPHA,[nu]:n.ONE_MINUS_SRC_COLOR,[fc]:n.ONE_MINUS_SRC_ALPHA,[ou]:n.ONE_MINUS_DST_COLOR,[su]:n.ONE_MINUS_DST_ALPHA,[lu]:n.CONSTANT_COLOR,[cu]:n.ONE_MINUS_CONSTANT_COLOR,[hu]:n.CONSTANT_ALPHA,[uu]:n.ONE_MINUS_CONSTANT_ALPHA};function xt(q,It,ut,Rt,Bt,mt,Yt,Vt,Te,xe){if(q===Gn){y===!0&&(Nt(n.BLEND),y=!1);return}if(y===!1&&(dt(n.BLEND),y=!0),q!==Zh){if(q!==v||xe!==B){if((P!==Gi||R!==Gi)&&(n.blendEquation(n.FUNC_ADD),P=Gi,R=Gi),xe)switch(q){case Rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lc:n.blendFunc(n.ONE,n.ONE);break;case cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ee("WebGLState: Invalid blending: ",q);break}else switch(q){case Rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case cc:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hc:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",q);break}A=null,E=null,L=null,O=null,T.set(0,0,0),D=0,v=q,B=xe}return}Bt=Bt||It,mt=mt||ut,Yt=Yt||Rt,(It!==P||Bt!==R)&&(n.blendEquationSeparate(ve[It],ve[Bt]),P=It,R=Bt),(ut!==A||Rt!==E||mt!==L||Yt!==O)&&(n.blendFuncSeparate(pt[ut],pt[Rt],pt[mt],pt[Yt]),A=ut,E=Rt,L=mt,O=Yt),(Vt.equals(T)===!1||Te!==D)&&(n.blendColor(Vt.r,Vt.g,Vt.b,Te),T.copy(Vt),D=Te),v=q,B=!1}function yt(q,It){q.side===an?Nt(n.CULL_FACE):dt(n.CULL_FACE);let ut=q.side===Ge;It&&(ut=!ut),vt(ut),q.blending===Rs&&q.transparent===!1?xt(Gn):xt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),l.setFunc(q.depthFunc),l.setTest(q.depthTest),l.setMask(q.depthWrite),o.setMask(q.colorWrite);let Rt=q.stencilWrite;h.setTest(Rt),Rt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Zt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?dt(n.SAMPLE_ALPHA_TO_COVERAGE):Nt(n.SAMPLE_ALPHA_TO_COVERAGE)}function vt(q){N!==q&&(q?n.frontFace(n.CW):n.frontFace(n.CCW),N=q)}function bt(q){q!==Wh?(dt(n.CULL_FACE),q!==G&&(q===ac?n.cullFace(n.BACK):q===Yh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Nt(n.CULL_FACE),G=q}function $t(q){q!==H&&($&&n.lineWidth(q),H=q)}function Zt(q,It,ut){q?(dt(n.POLYGON_OFFSET_FILL),(U!==It||W!==ut)&&(U=It,W=ut,l.getReversed()&&(It=-It),n.polygonOffset(It,ut))):Nt(n.POLYGON_OFFSET_FILL)}function te(q){q?dt(n.SCISSOR_TEST):Nt(n.SCISSOR_TEST)}function ie(q){q===void 0&&(q=n.TEXTURE0+K-1),it!==q&&(n.activeTexture(q),it=q)}function X(q,It,ut){ut===void 0&&(it===null?ut=n.TEXTURE0+K-1:ut=it);let Rt=st[ut];Rt===void 0&&(Rt={type:void 0,texture:void 0},st[ut]=Rt),(Rt.type!==q||Rt.texture!==It)&&(it!==ut&&(n.activeTexture(ut),it=ut),n.bindTexture(q,It||lt[q]),Rt.type=q,Rt.texture=It)}function _e(){let q=st[it];q!==void 0&&q.type!==void 0&&(n.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ue(){try{n.compressedTexImage2D(...arguments)}catch(q){ee("WebGLState:",q)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(q){ee("WebGLState:",q)}}function b(){try{n.texSubImage2D(...arguments)}catch(q){ee("WebGLState:",q)}}function J(){try{n.texSubImage3D(...arguments)}catch(q){ee("WebGLState:",q)}}function et(){try{n.compressedTexSubImage2D(...arguments)}catch(q){ee("WebGLState:",q)}}function rt(){try{n.compressedTexSubImage3D(...arguments)}catch(q){ee("WebGLState:",q)}}function St(){try{n.texStorage2D(...arguments)}catch(q){ee("WebGLState:",q)}}function Mt(){try{n.texStorage3D(...arguments)}catch(q){ee("WebGLState:",q)}}function ot(){try{n.texImage2D(...arguments)}catch(q){ee("WebGLState:",q)}}function ft(){try{n.texImage3D(...arguments)}catch(q){ee("WebGLState:",q)}}function Ct(q){return x[q]!==void 0?x[q]:n.getParameter(q)}function Gt(q,It){x[q]!==It&&(n.pixelStorei(q,It),x[q]=It)}function Dt(q){qt.equals(q)===!1&&(n.scissor(q.x,q.y,q.z,q.w),qt.copy(q))}function At(q){ne.equals(q)===!1&&(n.viewport(q.x,q.y,q.z,q.w),ne.copy(q))}function Xt(q,It){let ut=f.get(It);ut===void 0&&(ut=new WeakMap,f.set(It,ut));let Rt=ut.get(q);Rt===void 0&&(Rt=n.getUniformBlockIndex(It,q.name),ut.set(q,Rt))}function Jt(q,It){let Rt=f.get(It).get(q);u.get(It)!==Rt&&(n.uniformBlockBinding(It,Rt,q.__bindingPointIndex),u.set(It,Rt))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},x={},it=null,st={},p={},g=new WeakMap,S=[],w=null,y=!1,v=null,P=null,A=null,E=null,R=null,L=null,O=null,T=new fe(0,0,0),D=0,B=!1,N=null,G=null,H=null,U=null,W=null,qt.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:dt,disable:Nt,bindFramebuffer:Kt,drawBuffers:Ft,useProgram:Qt,setBlending:xt,setMaterial:yt,setFlipSided:vt,setCullFace:bt,setLineWidth:$t,setPolygonOffset:Zt,setScissorTest:te,activeTexture:ie,bindTexture:X,unbindTexture:_e,compressedTexImage2D:ue,compressedTexImage3D:F,texImage2D:ot,texImage3D:ft,pixelStorei:Gt,getParameter:Ct,updateUBOMapping:Xt,uniformBlockBinding:Jt,texStorage2D:St,texStorage3D:Mt,texSubImage2D:b,texSubImage3D:J,compressedTexSubImage2D:et,compressedTexSubImage3D:rt,scissor:Dt,viewport:At,reset:ae}}function Q_(n,t,e,i,s,o,l){let h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new _t,m=new WeakMap,x=new Set,p,g=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(F,b){return S?new OffscreenCanvas(F,b):ir("canvas")}function y(F,b,J){let et=1,rt=ue(F);if((rt.width>J||rt.height>J)&&(et=J/Math.max(rt.width,rt.height)),et<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let St=Math.floor(et*rt.width),Mt=Math.floor(et*rt.height);p===void 0&&(p=w(St,Mt));let ot=b?w(St,Mt):p;return ot.width=St,ot.height=Mt,ot.getContext("2d").drawImage(F,0,0,St,Mt),jt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+St+"x"+Mt+")."),ot}else return"data"in F&&jt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),F;return F}function v(F){return F.generateMipmaps}function P(F){n.generateMipmap(F)}function A(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(F,b,J,et,rt,St=!1){if(F!==null){if(n[F]!==void 0)return n[F];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Mt;et&&(Mt=t.get("EXT_texture_norm16"),Mt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=b;if(b===n.RED&&(J===n.FLOAT&&(ot=n.R32F),J===n.HALF_FLOAT&&(ot=n.R16F),J===n.UNSIGNED_BYTE&&(ot=n.R8),J===n.UNSIGNED_SHORT&&Mt&&(ot=Mt.R16_EXT),J===n.SHORT&&Mt&&(ot=Mt.R16_SNORM_EXT)),b===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(ot=n.R8UI),J===n.UNSIGNED_SHORT&&(ot=n.R16UI),J===n.UNSIGNED_INT&&(ot=n.R32UI),J===n.BYTE&&(ot=n.R8I),J===n.SHORT&&(ot=n.R16I),J===n.INT&&(ot=n.R32I)),b===n.RG&&(J===n.FLOAT&&(ot=n.RG32F),J===n.HALF_FLOAT&&(ot=n.RG16F),J===n.UNSIGNED_BYTE&&(ot=n.RG8),J===n.UNSIGNED_SHORT&&Mt&&(ot=Mt.RG16_EXT),J===n.SHORT&&Mt&&(ot=Mt.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(ot=n.RG8UI),J===n.UNSIGNED_SHORT&&(ot=n.RG16UI),J===n.UNSIGNED_INT&&(ot=n.RG32UI),J===n.BYTE&&(ot=n.RG8I),J===n.SHORT&&(ot=n.RG16I),J===n.INT&&(ot=n.RG32I)),b===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(ot=n.RGB8UI),J===n.UNSIGNED_SHORT&&(ot=n.RGB16UI),J===n.UNSIGNED_INT&&(ot=n.RGB32UI),J===n.BYTE&&(ot=n.RGB8I),J===n.SHORT&&(ot=n.RGB16I),J===n.INT&&(ot=n.RGB32I)),b===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(ot=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(ot=n.RGBA16UI),J===n.UNSIGNED_INT&&(ot=n.RGBA32UI),J===n.BYTE&&(ot=n.RGBA8I),J===n.SHORT&&(ot=n.RGBA16I),J===n.INT&&(ot=n.RGBA32I)),b===n.RGB&&(J===n.UNSIGNED_SHORT&&Mt&&(ot=Mt.RGB16_EXT),J===n.SHORT&&Mt&&(ot=Mt.RGB16_SNORM_EXT),J===n.UNSIGNED_INT_5_9_9_9_REV&&(ot=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(ot=n.R11F_G11F_B10F)),b===n.RGBA){let ft=St?nr:de.getTransfer(rt);J===n.FLOAT&&(ot=n.RGBA32F),J===n.HALF_FLOAT&&(ot=n.RGBA16F),J===n.UNSIGNED_BYTE&&(ot=ft===Se?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT&&Mt&&(ot=Mt.RGBA16_EXT),J===n.SHORT&&Mt&&(ot=Mt.RGBA16_SNORM_EXT),J===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function R(F,b){let J;return F?b===null||b===Ln||b===Ds?J=n.DEPTH24_STENCIL8:b===Dn?J=n.DEPTH32F_STENCIL8:b===Ls&&(J=n.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ln||b===Ds?J=n.DEPTH_COMPONENT24:b===Dn?J=n.DEPTH_COMPONENT32F:b===Ls&&(J=n.DEPTH_COMPONENT16),J}function L(F,b){return v(F)===!0||F.isFramebufferTexture&&F.minFilter!==Ne&&F.minFilter!==ke?Math.log2(Math.max(b.width,b.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?b.mipmaps.length:1}function O(F){let b=F.target;b.removeEventListener("dispose",O),D(b),b.isVideoTexture&&m.delete(b),b.isHTMLTexture&&x.delete(b)}function T(F){let b=F.target;b.removeEventListener("dispose",T),N(b)}function D(F){let b=i.get(F);if(b.__webglInit===void 0)return;let J=F.source,et=g.get(J);if(et){let rt=et[b.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&B(F),Object.keys(et).length===0&&g.delete(J)}i.remove(F)}function B(F){let b=i.get(F);n.deleteTexture(b.__webglTexture);let J=F.source,et=g.get(J);delete et[b.__cacheKey],l.memory.textures--}function N(F){let b=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(b.__webglFramebuffer[et]))for(let rt=0;rt<b.__webglFramebuffer[et].length;rt++)n.deleteFramebuffer(b.__webglFramebuffer[et][rt]);else n.deleteFramebuffer(b.__webglFramebuffer[et]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[et])}else{if(Array.isArray(b.__webglFramebuffer))for(let et=0;et<b.__webglFramebuffer.length;et++)n.deleteFramebuffer(b.__webglFramebuffer[et]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let et=0;et<b.__webglColorRenderbuffer.length;et++)b.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[et]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let J=F.textures;for(let et=0,rt=J.length;et<rt;et++){let St=i.get(J[et]);St.__webglTexture&&(n.deleteTexture(St.__webglTexture),l.memory.textures--),i.remove(J[et])}i.remove(F)}let G=0;function H(){G=0}function U(){return G}function W(F){G=F}function K(){let F=G;return F>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,F}function $(F){let b=[];return b.push(F.wrapS),b.push(F.wrapT),b.push(F.wrapR||0),b.push(F.magFilter),b.push(F.minFilter),b.push(F.anisotropy),b.push(F.internalFormat),b.push(F.format),b.push(F.type),b.push(F.generateMipmaps),b.push(F.premultiplyAlpha),b.push(F.flipY),b.push(F.unpackAlignment),b.push(F.colorSpace),b.join()}function at(F,b){let J=i.get(F);if(F.isVideoTexture&&X(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&J.__version!==F.version){let et=F.image;if(et===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(J,F,b);return}}else F.isExternalTexture&&(J.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+b)}function tt(F,b){let J=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){Nt(J,F,b);return}else F.isExternalTexture&&(J.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+b)}function it(F,b){let J=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){Nt(J,F,b);return}e.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+b)}function st(F,b){let J=i.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&J.__version!==F.version){Kt(J,F,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+b)}let Tt={[Oi]:n.REPEAT,[Un]:n.CLAMP_TO_EDGE,[Bo]:n.MIRRORED_REPEAT},Et={[Ne]:n.NEAREST,[pu]:n.NEAREST_MIPMAP_NEAREST,[Nr]:n.NEAREST_MIPMAP_LINEAR,[ke]:n.LINEAR,[ga]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},qt={[xu]:n.NEVER,[bu]:n.ALWAYS,[yu]:n.LESS,[tl]:n.LEQUAL,[vu]:n.EQUAL,[el]:n.GEQUAL,[Su]:n.GREATER,[Mu]:n.NOTEQUAL};function ne(F,b){if(b.type===Dn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ke||b.magFilter===ga||b.magFilter===Nr||b.magFilter===Ti||b.minFilter===ke||b.minFilter===ga||b.minFilter===Nr||b.minFilter===Ti)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,Tt[b.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,Tt[b.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,Tt[b.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,Et[b.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,Et[b.minFilter]),b.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,qt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ne||b.minFilter!==Nr&&b.minFilter!==Ti||b.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");n.texParameterf(F,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function pe(F,b){let J=!1;F.__webglInit===void 0&&(F.__webglInit=!0,b.addEventListener("dispose",O));let et=b.source,rt=g.get(et);rt===void 0&&(rt={},g.set(et,rt));let St=$(b);if(St!==F.__cacheKey){rt[St]===void 0&&(rt[St]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,J=!0),rt[St].usedTimes++;let Mt=rt[F.__cacheKey];Mt!==void 0&&(rt[F.__cacheKey].usedTimes--,Mt.usedTimes===0&&B(b)),F.__cacheKey=St,F.__webglTexture=rt[St].texture}return J}function lt(F,b,J){return Math.floor(Math.floor(F/J)/b)}function dt(F,b,J,et){let St=F.updateRanges;if(St.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,J,et,b.data);else{St.sort((Gt,Dt)=>Gt.start-Dt.start);let Mt=0;for(let Gt=1;Gt<St.length;Gt++){let Dt=St[Mt],At=St[Gt],Xt=Dt.start+Dt.count,Jt=lt(At.start,b.width,4),ae=lt(Dt.start,b.width,4);At.start<=Xt+1&&Jt===ae&&lt(At.start+At.count-1,b.width,4)===Jt?Dt.count=Math.max(Dt.count,At.start+At.count-Dt.start):(++Mt,St[Mt]=At)}St.length=Mt+1;let ot=e.getParameter(n.UNPACK_ROW_LENGTH),ft=e.getParameter(n.UNPACK_SKIP_PIXELS),Ct=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Gt=0,Dt=St.length;Gt<Dt;Gt++){let At=St[Gt],Xt=Math.floor(At.start/4),Jt=Math.ceil(At.count/4),ae=Xt%b.width,q=Math.floor(Xt/b.width),It=Jt,ut=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ae),e.pixelStorei(n.UNPACK_SKIP_ROWS,q),e.texSubImage2D(n.TEXTURE_2D,0,ae,q,It,ut,J,et,b.data)}F.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ot),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(n.UNPACK_SKIP_ROWS,Ct)}}function Nt(F,b,J){let et=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(et=n.TEXTURE_3D);let rt=pe(F,b),St=b.source;e.bindTexture(et,F.__webglTexture,n.TEXTURE0+J);let Mt=i.get(St);if(St.version!==Mt.__version||rt===!0){if(e.activeTexture(n.TEXTURE0+J),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ut=de.getPrimaries(de.workingColorSpace),Rt=b.colorSpace===ii?null:de.getPrimaries(b.colorSpace),Bt=b.colorSpace===ii||ut===Rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt)}e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let ft=y(b.image,!1,s.maxTextureSize);ft=_e(b,ft);let Ct=o.convert(b.format,b.colorSpace),Gt=o.convert(b.type),Dt=E(b.internalFormat,Ct,Gt,b.normalized,b.colorSpace,b.isVideoTexture);ne(et,b);let At,Xt=b.mipmaps,Jt=b.isVideoTexture!==!0,ae=Mt.__version===void 0||rt===!0,q=St.dataReady,It=L(b,ft);if(b.isDepthTexture)Dt=R(b.format===Ei,b.type),ae&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,Dt,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,Dt,ft.width,ft.height,0,Ct,Gt,null));else if(b.isDataTexture)if(Xt.length>0){Jt&&ae&&e.texStorage2D(n.TEXTURE_2D,It,Dt,Xt[0].width,Xt[0].height);for(let ut=0,Rt=Xt.length;ut<Rt;ut++)At=Xt[ut],Jt?q&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,At.width,At.height,Ct,Gt,At.data):e.texImage2D(n.TEXTURE_2D,ut,Dt,At.width,At.height,0,Ct,Gt,At.data);b.generateMipmaps=!1}else Jt?(ae&&e.texStorage2D(n.TEXTURE_2D,It,Dt,ft.width,ft.height),q&&dt(b,ft,Ct,Gt)):e.texImage2D(n.TEXTURE_2D,0,Dt,ft.width,ft.height,0,Ct,Gt,ft.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Jt&&ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,Dt,Xt[0].width,Xt[0].height,ft.depth);for(let ut=0,Rt=Xt.length;ut<Rt;ut++)if(At=Xt[ut],b.format!==wn)if(Ct!==null)if(Jt){if(q)if(b.layerUpdates.size>0){let Bt=Fc(At.width,At.height,b.format,b.type);for(let mt of b.layerUpdates){let Yt=At.data.subarray(mt*Bt/At.data.BYTES_PER_ELEMENT,(mt+1)*Bt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,mt,At.width,At.height,1,Ct,Yt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,At.width,At.height,ft.depth,Ct,At.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,Dt,At.width,At.height,ft.depth,0,At.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?q&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,At.width,At.height,ft.depth,Ct,Gt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,Dt,At.width,At.height,ft.depth,0,Ct,Gt,At.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Jt&&ae&&e.texStorage2D(n.TEXTURE_2D,It,Dt,Xt[0].width,Xt[0].height);for(let ut=0,Rt=Xt.length;ut<Rt;ut++)At=Xt[ut],b.format!==wn?Ct!==null?Jt?q&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,At.width,At.height,Ct,At.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,Dt,At.width,At.height,0,At.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?q&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,At.width,At.height,Ct,Gt,At.data):e.texImage2D(n.TEXTURE_2D,ut,Dt,At.width,At.height,0,Ct,Gt,At.data)}else if(b.isDataArrayTexture)if(Jt){if(ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,Dt,ft.width,ft.height,ft.depth),q)if(b.layerUpdates.size>0){let ut=Fc(ft.width,ft.height,b.format,b.type);for(let Rt of b.layerUpdates){let Bt=ft.data.subarray(Rt*ut/ft.data.BYTES_PER_ELEMENT,(Rt+1)*ut/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Rt,ft.width,ft.height,1,Ct,Gt,Bt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Gt,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,ft.width,ft.height,ft.depth,0,Ct,Gt,ft.data);else if(b.isData3DTexture)Jt?(ae&&e.texStorage3D(n.TEXTURE_3D,It,Dt,ft.width,ft.height,ft.depth),q&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Gt,ft.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,ft.width,ft.height,ft.depth,0,Ct,Gt,ft.data);else if(b.isFramebufferTexture){if(ae)if(Jt)e.texStorage2D(n.TEXTURE_2D,It,Dt,ft.width,ft.height);else{let ut=ft.width,Rt=ft.height;for(let Bt=0;Bt<It;Bt++)e.texImage2D(n.TEXTURE_2D,Bt,Dt,ut,Rt,0,Ct,Gt,null),ut>>=1,Rt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let ut=n.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),ft.parentNode!==ut){ut.appendChild(ft),x.add(b),ut.onpaint=Rt=>{let Bt=Rt.changedElements;for(let mt of x)Bt.includes(mt.image)&&(mt.needsUpdate=!0)},ut.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ft);else{let Bt=n.RGBA,mt=n.RGBA,Yt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Bt,mt,Yt,ft)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(Jt&&ae){let ut=ue(Xt[0]);e.texStorage2D(n.TEXTURE_2D,It,Dt,ut.width,ut.height)}for(let ut=0,Rt=Xt.length;ut<Rt;ut++)At=Xt[ut],Jt?q&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Ct,Gt,At):e.texImage2D(n.TEXTURE_2D,ut,Dt,Ct,Gt,At);b.generateMipmaps=!1}else if(Jt){if(ae){let ut=ue(ft);e.texStorage2D(n.TEXTURE_2D,It,Dt,ut.width,ut.height)}q&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct,Gt,ft)}else e.texImage2D(n.TEXTURE_2D,0,Dt,Ct,Gt,ft);v(b)&&P(et),Mt.__version=St.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function Kt(F,b,J){if(b.image.length!==6)return;let et=pe(F,b),rt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+J);let St=i.get(rt);if(rt.version!==St.__version||et===!0){e.activeTexture(n.TEXTURE0+J);let Mt=de.getPrimaries(de.workingColorSpace),ot=b.colorSpace===ii?null:de.getPrimaries(b.colorSpace),ft=b.colorSpace===ii||Mt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Ct=b.isCompressedTexture||b.image[0].isCompressedTexture,Gt=b.image[0]&&b.image[0].isDataTexture,Dt=[];for(let mt=0;mt<6;mt++)!Ct&&!Gt?Dt[mt]=y(b.image[mt],!0,s.maxCubemapSize):Dt[mt]=Gt?b.image[mt].image:b.image[mt],Dt[mt]=_e(b,Dt[mt]);let At=Dt[0],Xt=o.convert(b.format,b.colorSpace),Jt=o.convert(b.type),ae=E(b.internalFormat,Xt,Jt,b.normalized,b.colorSpace),q=b.isVideoTexture!==!0,It=St.__version===void 0||et===!0,ut=rt.dataReady,Rt=L(b,At);ne(n.TEXTURE_CUBE_MAP,b);let Bt;if(Ct){q&&It&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,ae,At.width,At.height);for(let mt=0;mt<6;mt++){Bt=Dt[mt].mipmaps;for(let Yt=0;Yt<Bt.length;Yt++){let Vt=Bt[Yt];b.format!==wn?Xt!==null?q?ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt,0,0,Vt.width,Vt.height,Xt,Vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt,ae,Vt.width,Vt.height,0,Vt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt,0,0,Vt.width,Vt.height,Xt,Jt,Vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt,ae,Vt.width,Vt.height,0,Xt,Jt,Vt.data)}}}else{if(Bt=b.mipmaps,q&&It){Bt.length>0&&Rt++;let mt=ue(Dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,ae,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Gt){q?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Dt[mt].width,Dt[mt].height,Xt,Jt,Dt[mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ae,Dt[mt].width,Dt[mt].height,0,Xt,Jt,Dt[mt].data);for(let Yt=0;Yt<Bt.length;Yt++){let Te=Bt[Yt].image[mt].image;q?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt+1,0,0,Te.width,Te.height,Xt,Jt,Te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt+1,ae,Te.width,Te.height,0,Xt,Jt,Te.data)}}else{q?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Xt,Jt,Dt[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ae,Xt,Jt,Dt[mt]);for(let Yt=0;Yt<Bt.length;Yt++){let Vt=Bt[Yt];q?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt+1,0,0,Xt,Jt,Vt.image[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt+1,ae,Xt,Jt,Vt.image[mt])}}}v(b)&&P(n.TEXTURE_CUBE_MAP),St.__version=rt.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function Ft(F,b,J,et,rt,St){let Mt=o.convert(J.format,J.colorSpace),ot=o.convert(J.type),ft=E(J.internalFormat,Mt,ot,J.normalized,J.colorSpace),Ct=i.get(b),Gt=i.get(J);if(Gt.__renderTarget=b,!Ct.__hasExternalTextures){let Dt=Math.max(1,b.width>>St),At=Math.max(1,b.height>>St);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,St,ft,Dt,At,b.depth,0,Mt,ot,null):e.texImage2D(rt,St,ft,Dt,At,0,Mt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,F),ie(b)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,rt,Gt.__webglTexture,0,te(b)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,rt,Gt.__webglTexture,St),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Qt(F,b,J){if(n.bindRenderbuffer(n.RENDERBUFFER,F),b.depthBuffer){let et=b.depthTexture,rt=et&&et.isDepthTexture?et.type:null,St=R(b.stencilBuffer,rt),Mt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ie(b)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te(b),St,b.width,b.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,te(b),St,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,St,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,F)}else{let et=b.textures;for(let rt=0;rt<et.length;rt++){let St=et[rt],Mt=o.convert(St.format,St.colorSpace),ot=o.convert(St.type),ft=E(St.internalFormat,Mt,ot,St.normalized,St.colorSpace);ie(b)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te(b),ft,b.width,b.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,te(b),ft,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ft,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(F,b,J){let et=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,F),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=i.get(b.depthTexture);if(rt.__renderTarget=b,(!rt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),et){if(rt.__webglInit===void 0&&(rt.__webglInit=!0,b.depthTexture.addEventListener("dispose",O)),rt.__webglTexture===void 0){rt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,rt.__webglTexture),ne(n.TEXTURE_CUBE_MAP,b.depthTexture);let Ct=o.convert(b.depthTexture.format),Gt=o.convert(b.depthTexture.type),Dt;b.depthTexture.format===kn?Dt=n.DEPTH_COMPONENT24:b.depthTexture.format===Ei&&(Dt=n.DEPTH24_STENCIL8);for(let At=0;At<6;At++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Dt,b.width,b.height,0,Ct,Gt,null)}}else at(b.depthTexture,0);let St=rt.__webglTexture,Mt=te(b),ot=et?n.TEXTURE_CUBE_MAP_POSITIVE_X+J:n.TEXTURE_2D,ft=b.depthTexture.format===Ei?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===kn)ie(b)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,ot,St,0,Mt):n.framebufferTexture2D(n.FRAMEBUFFER,ft,ot,St,0);else if(b.depthTexture.format===Ei)ie(b)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,ot,St,0,Mt):n.framebufferTexture2D(n.FRAMEBUFFER,ft,ot,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(F){let b=i.get(F),J=F.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==F.depthTexture){let et=F.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),et){let rt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,et.removeEventListener("dispose",rt)};et.addEventListener("dispose",rt),b.__depthDisposeCallback=rt}b.__boundDepthTexture=et}if(F.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let et=0;et<6;et++)ve(b.__webglFramebuffer[et],F,et);else{let et=F.texture.mipmaps;et&&et.length>0?ve(b.__webglFramebuffer[0],F,0):ve(b.__webglFramebuffer,F,0)}else if(J){b.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[et]),b.__webglDepthbuffer[et]===void 0)b.__webglDepthbuffer[et]=n.createRenderbuffer(),Qt(b.__webglDepthbuffer[et],F,!1);else{let rt=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=b.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,St),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,St)}}else{let et=F.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Qt(b.__webglDepthbuffer,F,!1);else{let rt=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,St),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,St)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(F,b,J){let et=i.get(F);b!==void 0&&Ft(et.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&pt(F)}function yt(F){let b=F.texture,J=i.get(F),et=i.get(b);F.addEventListener("dispose",T);let rt=F.textures,St=F.isWebGLCubeRenderTarget===!0,Mt=rt.length>1;if(Mt||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=b.version,l.memory.textures++),St){J.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[ot]=[];for(let ft=0;ft<b.mipmaps.length;ft++)J.__webglFramebuffer[ot][ft]=n.createFramebuffer()}else J.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let ot=0;ot<b.mipmaps.length;ot++)J.__webglFramebuffer[ot]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let ot=0,ft=rt.length;ot<ft;ot++){let Ct=i.get(rt[ot]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=n.createTexture(),l.memory.textures++)}if(F.samples>0&&ie(F)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ot=0;ot<rt.length;ot++){let ft=rt[ot];J.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[ot]);let Ct=o.convert(ft.format,ft.colorSpace),Gt=o.convert(ft.type),Dt=E(ft.internalFormat,Ct,Gt,ft.normalized,ft.colorSpace,F.isXRRenderTarget===!0),At=te(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,Dt,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,J.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),Qt(J.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(St){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),ne(n.TEXTURE_CUBE_MAP,b);for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)Ft(J.__webglFramebuffer[ot][ft],F,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else Ft(J.__webglFramebuffer[ot],F,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);v(b)&&P(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ot=0,ft=rt.length;ot<ft;ot++){let Ct=rt[ot],Gt=i.get(Ct),Dt=n.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Dt=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Dt,Gt.__webglTexture),ne(Dt,Ct),Ft(J.__webglFramebuffer,F,Ct,n.COLOR_ATTACHMENT0+ot,Dt,0),v(Ct)&&P(Dt)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ot=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,et.__webglTexture),ne(ot,b),b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)Ft(J.__webglFramebuffer[ft],F,b,n.COLOR_ATTACHMENT0,ot,ft);else Ft(J.__webglFramebuffer,F,b,n.COLOR_ATTACHMENT0,ot,0);v(b)&&P(ot),e.unbindTexture()}F.depthBuffer&&pt(F)}function vt(F){let b=F.textures;for(let J=0,et=b.length;J<et;J++){let rt=b[J];if(v(rt)){let St=A(F),Mt=i.get(rt).__webglTexture;e.bindTexture(St,Mt),P(St),e.unbindTexture()}}}let bt=[],$t=[];function Zt(F){if(F.samples>0){if(ie(F)===!1){let b=F.textures,J=F.width,et=F.height,rt=n.COLOR_BUFFER_BIT,St=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(F),ot=b.length>1;if(ot)for(let Ct=0;Ct<b.length;Ct++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let ft=F.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Ct=0;Ct<b.length;Ct++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[Ct]);let Gt=i.get(b[Ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Gt,0)}n.blitFramebuffer(0,0,J,et,0,0,J,et,rt,n.NEAREST),u===!0&&(bt.length=0,$t.length=0,bt.push(n.COLOR_ATTACHMENT0+Ct),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(bt.push(St),$t.push(St),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$t)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let Ct=0;Ct<b.length;Ct++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[Ct]);let Gt=i.get(b[Ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,Gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&u){let b=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function te(F){return Math.min(s.maxSamples,F.samples)}function ie(F){let b=i.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function X(F){let b=l.render.frame;m.get(F)!==b&&(m.set(F,b),F.update())}function _e(F,b){let J=F.colorSpace,et=F.format,rt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||J!==er&&J!==ii&&(de.getTransfer(J)===Se?(et!==wn||rt!==ln)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",J)),b}function ue(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(f.width=F.naturalWidth||F.width,f.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(f.width=F.displayWidth,f.height=F.displayHeight):(f.width=F.width,f.height=F.height),f}this.allocateTextureUnit=K,this.resetTextureUnits=H,this.getTextureUnits=U,this.setTextureUnits=W,this.setTexture2D=at,this.setTexture2DArray=tt,this.setTexture3D=it,this.setTextureCube=st,this.rebindTextures=xt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function tx(n,t){function e(i,s=ii){let o,l=de.getTransfer(s);if(i===ln)return n.UNSIGNED_BYTE;if(i===xa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ya)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mc)return n.BYTE;if(i===bc)return n.SHORT;if(i===Ls)return n.UNSIGNED_SHORT;if(i===_a)return n.INT;if(i===Ln)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===Nn)return n.HALF_FLOAT;if(i===Ec)return n.ALPHA;if(i===Ac)return n.RGB;if(i===wn)return n.RGBA;if(i===kn)return n.DEPTH_COMPONENT;if(i===Ei)return n.DEPTH_STENCIL;if(i===Fr)return n.RED;if(i===va)return n.RED_INTEGER;if(i===Ai)return n.RG;if(i===Sa)return n.RG_INTEGER;if(i===Ma)return n.RGBA_INTEGER;if(i===Or||i===Ur||i===Br||i===zr)if(l===Se)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Or)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ur)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Br)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Or)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ur)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Br)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ba||i===wa||i===Ta||i===Ea)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ba)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ta)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ea)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Aa||i===Pa||i===Ca||i===Ia||i===Ra||i===kr||i===La)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Aa||i===Pa)return l===Se?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ca)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ia)return o.COMPRESSED_R11_EAC;if(i===Ra)return o.COMPRESSED_SIGNED_R11_EAC;if(i===kr)return o.COMPRESSED_RG11_EAC;if(i===La)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Da||i===Na||i===Fa||i===Oa||i===Ua||i===Ba||i===za||i===ka||i===Va||i===Ga||i===Ha||i===Xa||i===Wa||i===Ya)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Da)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Na)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fa)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oa)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ua)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ba)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===za)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ka)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Va)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ga)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ha)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xa)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wa)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ya)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qa||i===Za||i===Ja)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===qa)return l===Se?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Za)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ja)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$a||i===Ka||i===Vr||i===ja)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===$a)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Ka)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ja)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nx=`
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

}`,th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ur(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new en({vertexShader:ex,fragmentShader:nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new Sr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eh=class extends In{constructor(t,e){super();let i=this,s=null,o=1,l=null,h="local-floor",u=1,f=null,m=null,x=null,p=null,g=null,S=null,w=typeof XRWebGLBinding<"u",y=new th,v={},P=e.getContextAttributes(),A=null,E=null,R=[],L=[],O=new _t,T=null,D=null,B=new Je;B.viewport=new Me;let N=new Je;N.viewport=new Me;let G=[B,N],H=new ua,U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let dt=R[lt];return dt===void 0&&(dt=new Ms,R[lt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(lt){let dt=R[lt];return dt===void 0&&(dt=new Ms,R[lt]=dt),dt.getGripSpace()},this.getHand=function(lt){let dt=R[lt];return dt===void 0&&(dt=new Ms,R[lt]=dt),dt.getHandSpace()};function K(lt){let dt=L.indexOf(lt.inputSource);if(dt===-1)return;let Nt=R[dt];Nt!==void 0&&(Nt.update(lt.inputSource,lt.frame,f||l),Nt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function $(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",at);for(let lt=0;lt<R.length;lt++){let dt=L[lt];dt!==null&&(L[lt]=null,R[lt].disconnect(dt))}U=null,W=null,y.reset();for(let lt in v)delete v[lt];if(t.setRenderTarget(A),g=null,p=null,x=null,s=null,E=null,pe.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(O.width,O.height,!1),D!==null){let lt=D.camera;lt.fov=D.fov,lt.zoom=D.zoom,lt.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){o=lt,i.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){h=lt,i.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(lt){f=lt},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(s,e)),x},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",$),s.addEventListener("inputsourceschange",at),P.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,Kt=null,Ft=null;P.depth&&(Ft=P.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Nt=P.stencil?Ei:kn,Kt=P.stencil?Ds:Ln);let Qt={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:o};x=this.getBinding(),p=x.createProjectionLayer(Qt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),E=new on(p.textureWidth,p.textureHeight,{format:wn,type:ln,depthTexture:new mi(p.textureWidth,p.textureHeight,Kt,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let Nt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(s,e,Nt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new on(g.framebufferWidth,g.framebufferHeight,{format:wn,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),f=null,l=await s.requestReferenceSpace(h),pe.setContext(s),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function at(lt){for(let dt=0;dt<lt.removed.length;dt++){let Nt=lt.removed[dt],Kt=L.indexOf(Nt);Kt>=0&&(L[Kt]=null,R[Kt].disconnect(Nt))}for(let dt=0;dt<lt.added.length;dt++){let Nt=lt.added[dt],Kt=L.indexOf(Nt);if(Kt===-1){for(let Qt=0;Qt<R.length;Qt++)if(Qt>=L.length){L.push(Nt),Kt=Qt;break}else if(L[Qt]===null){L[Qt]=Nt,Kt=Qt;break}if(Kt===-1)break}let Ft=R[Kt];Ft&&Ft.connect(Nt)}}let tt=new z,it=new z;function st(lt,dt,Nt){tt.setFromMatrixPosition(dt.matrixWorld),it.setFromMatrixPosition(Nt.matrixWorld);let Kt=tt.distanceTo(it),Ft=dt.projectionMatrix.elements,Qt=Nt.projectionMatrix.elements,ve=Ft[14]/(Ft[10]-1),pt=Ft[14]/(Ft[10]+1),xt=(Ft[9]+1)/Ft[5],yt=(Ft[9]-1)/Ft[5],vt=(Ft[8]-1)/Ft[0],bt=(Qt[8]+1)/Qt[0],$t=ve*vt,Zt=ve*bt,te=Kt/(-vt+bt),ie=te*-vt;if(dt.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(ie),lt.translateZ(te),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),Ft[10]===-1)lt.projectionMatrix.copy(dt.projectionMatrix),lt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{let X=ve+te,_e=pt+te,ue=$t-ie,F=Zt+(Kt-ie),b=xt*pt/_e*X,J=yt*pt/_e*X;lt.projectionMatrix.makePerspective(ue,F,b,J,X,_e),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function Tt(lt,dt){dt===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(dt.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let dt=lt.near,Nt=lt.far;y.texture!==null&&(y.depthNear>0&&(dt=y.depthNear),y.depthFar>0&&(Nt=y.depthFar)),H.near=N.near=B.near=dt,H.far=N.far=B.far=Nt,(U!==H.near||W!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),U=H.near,W=H.far),H.layers.mask=lt.layers.mask|6,B.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let Kt=lt.parent,Ft=H.cameras;Tt(H,Kt);for(let Qt=0;Qt<Ft.length;Qt++)Tt(Ft[Qt],Kt);Ft.length===2?st(H,B,N):H.projectionMatrix.copy(B.projectionMatrix),D===null&&lt.isPerspectiveCamera&&(D={camera:lt,fov:lt.fov,zoom:lt.zoom}),Et(lt,H,Kt)};function Et(lt,dt,Nt){Nt===null?lt.matrix.copy(dt.matrixWorld):(lt.matrix.copy(Nt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(dt.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(dt.projectionMatrix),lt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=ys*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(p===null&&g===null))return u},this.setFoveation=function(lt){u=lt,p!==null&&(p.fixedFoveation=lt),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=lt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(H)},this.getCameraTexture=function(lt){return v[lt]};let qt=null;function ne(lt,dt){if(m=dt.getViewerPose(f||l),S=dt,m!==null){let Nt=m.views;g!==null&&(t.setRenderTargetFramebuffer(E,g.framebuffer),t.setRenderTarget(E));let Kt=!1;Nt.length!==H.cameras.length&&(H.cameras.length=0,Kt=!0);for(let pt=0;pt<Nt.length;pt++){let xt=Nt[pt],yt=null;if(g!==null)yt=g.getViewport(xt);else{let bt=x.getViewSubImage(p,xt);yt=bt.viewport,pt===0&&(t.setRenderTargetTextures(E,bt.colorTexture,bt.depthStencilTexture),t.setRenderTarget(E))}let vt=G[pt];vt===void 0&&(vt=new Je,vt.layers.enable(pt),vt.viewport=new Me,G[pt]=vt),vt.matrix.fromArray(xt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(xt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(yt.x,yt.y,yt.width,yt.height),pt===0&&(H.matrix.copy(vt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Kt===!0&&H.cameras.push(vt)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){x=i.getBinding();let pt=x.getDepthInformation(Nt[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,s.renderState)}if(Ft&&Ft.includes("camera-access")&&w){t.state.unbindTexture(),x=i.getBinding();for(let pt=0;pt<Nt.length;pt++){let xt=Nt[pt].camera;if(xt){let yt=v[xt];yt||(yt=new ur,v[xt]=yt);let vt=x.getCameraImage(xt);yt.sourceTexture=vt}}}}for(let Nt=0;Nt<R.length;Nt++){let Kt=L[Nt],Ft=R[Nt];Kt!==null&&Ft!==void 0&&Ft.update(Kt,dt,f||l)}qt&&qt(lt,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),S=null}let pe=new nf;pe.setAnimationLoop(ne),this.setAnimationLoop=function(lt){qt=lt},this.dispose=function(){}}},ix=new ge,cf=new oe;cf.set(-1,0,0,0,1,0,0,0,1);function sx(n,t){function e(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function i(y,v){v.color.getRGB(y.fogColor.value,Lc(n)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function s(y,v,P,A,E){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?o(y,v):v.isMeshLambertMaterial?(o(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(o(y,v),x(y,v)):v.isMeshPhongMaterial?(o(y,v),m(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(o(y,v),p(y,v),v.isMeshPhysicalMaterial&&g(y,v,E)):v.isMeshMatcapMaterial?(o(y,v),S(y,v)):v.isMeshDepthMaterial?o(y,v):v.isMeshDistanceMaterial?(o(y,v),w(y,v)):v.isMeshNormalMaterial?o(y,v):v.isLineBasicMaterial?(l(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?u(y,v,P,A):v.isSpriteMaterial?f(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,e(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,e(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Ge&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,e(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Ge&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,e(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,e(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);let P=t.get(v),A=P.envMap,E=P.envMapRotation;A&&(y.envMap.value=A,y.envMapRotation.value.setFromMatrix4(ix.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(cf),y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,y.aoMapTransform))}function l(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,e(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function u(y,v,P,A){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*P,y.scale.value=A*.5,v.map&&(y.map.value=v.map,e(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,e(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function p(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function g(y,v,P){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Ge&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.retroreflectivity>0&&(y.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){let P=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rx(n,t,e,i){let s={},o={},l=[],h=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,R){let L=R.program;i.uniformBlockBinding(E,L)}function f(E,R){let L=s[E.id];L===void 0&&(y(E),L=m(E),s[E.id]=L,E.addEventListener("dispose",P));let O=R.program;i.updateUBOMapping(E,O);let T=t.render.frame;o[E.id]!==T&&(p(E),o[E.id]=T)}function m(E){let R=x();E.__bindingPointIndex=R;let L=n.createBuffer(),O=E.__size,T=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,O,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,L),L}function x(){for(let E=0;E<h;E++)if(l.indexOf(E)===-1)return l.push(E),E;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){let R=s[E.id],L=E.uniforms,O=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let T=0,D=L.length;T<D;T++){let B=L[T];if(Array.isArray(B))for(let N=0,G=B.length;N<G;N++)g(B[N],T,N,O);else g(B,T,0,O)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(E,R,L,O){if(w(E,R,L,O)===!0){let T=E.__offset,D=E.value;if(Array.isArray(D)){let B=0;for(let N=0;N<D.length;N++){let G=D[N],H=v(G);S(G,E.__data,B),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(B+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(D,E.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,E.__data)}}function S(E,R,L){typeof E=="number"||typeof E=="boolean"?R[0]=E:E.isMatrix3?(R[0]=E.elements[0],R[1]=E.elements[1],R[2]=E.elements[2],R[3]=0,R[4]=E.elements[3],R[5]=E.elements[4],R[6]=E.elements[5],R[7]=0,R[8]=E.elements[6],R[9]=E.elements[7],R[10]=E.elements[8],R[11]=0):ArrayBuffer.isView(E)?R.set(new E.constructor(E.buffer,E.byteOffset,R.length)):E.toArray(R,L)}function w(E,R,L,O){let T=E.value,D=R+"_"+L;if(O[D]===void 0)return typeof T=="number"||typeof T=="boolean"?O[D]=T:ArrayBuffer.isView(T)?O[D]=T.slice():O[D]=T.clone(),!0;{let B=O[D];if(typeof T=="number"||typeof T=="boolean"){if(B!==T)return O[D]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(B.equals(T)===!1)return B.copy(T),!0}}return!1}function y(E){let R=E.uniforms,L=0,O=16;for(let D=0,B=R.length;D<B;D++){let N=Array.isArray(R[D])?R[D]:[R[D]];for(let G=0,H=N.length;G<H;G++){let U=N[G],W=Array.isArray(U.value)?U.value:[U.value];for(let K=0,$=W.length;K<$;K++){let at=W[K],tt=v(at),it=L%O,st=it%tt.boundary,Tt=it+st;L+=st,Tt!==0&&O-Tt<tt.storage&&(L+=O-Tt),U.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=L,L+=tt.storage}}}let T=L%O;return T>0&&(L+=O-T),E.__size=L,E.__cache={},this}function v(E){let R={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(R.boundary=4,R.storage=4):E.isVector2?(R.boundary=8,R.storage=8):E.isVector3||E.isColor?(R.boundary=16,R.storage=12):E.isVector4?(R.boundary=16,R.storage=16):E.isMatrix3?(R.boundary=48,R.storage=48):E.isMatrix4?(R.boundary=64,R.storage=64):E.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(R.boundary=16,R.storage=E.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",E),R}function P(E){let R=E.target;R.removeEventListener("dispose",P);let L=l.indexOf(R.__bindingPointIndex);l.splice(L,1),n.deleteBuffer(s[R.id]),delete s[R.id],delete o[R.id]}function A(){for(let E in s)n.deleteBuffer(s[E]);l=[],s={},o={}}return{bind:u,update:f,dispose:A}}var ox=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function ax(){return Hn===null&&(Hn=new bs(ox,16,16,Ai,Nn),Hn.name="DFG_LUT",Hn.minFilter=ke,Hn.magFilter=ke,Hn.wrapS=Un,Hn.wrapT=Un,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var ol=class{constructor(t={}){let{canvas:e=wu(),context:i=null,depth:s=!0,stencil:o=!1,alpha:l=!1,antialias:h=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:p=!1,outputBufferType:g=ln}=t;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=l;let w=g,y=new Set([Ma,Sa,va]),v=new Set([ln,Ln,Ls,Ds,xa,ya]),P=new Uint32Array(4),A=new Int32Array(4),E=new z,R=null,L=null,O=[],T=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,N=!1,G=null,H=null,U=null,W=null;this._outputColorSpace=Ze;let K=0,$=0,at=null,tt=-1,it=null,st=new Me,Tt=new Me,Et=null,qt=new fe(0),ne=0,pe=e.width,lt=e.height,dt=1,Nt=null,Kt=null,Ft=new Me(0,0,pe,lt),Qt=new Me(0,0,pe,lt),ve=!1,pt=new ws,xt=!1,yt=!1,vt=new ge,bt=new z,$t=new Me,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function ie(){return at===null?dt:1}let X=i;function _e(C,Y){return e.getContext(C,Y)}let ue,F,b,J,et,rt,St,Mt,ot,ft,Ct,Gt,Dt,At,Xt,Jt,ae,q,It,ut,Rt,Bt,mt;try{let C={alpha:!0,depth:s,stencil:o,antialias:h,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:x};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${da}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",un,!1),X===null){let Y="webgl2";if(X=_e(Y,C),X===null)throw _e(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(C){throw e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",un,!1),ee("WebGLRenderer: "+C.message),C}function Yt(){ue=new pg(X),ue.init(),Rt=new tx(X,ue),F=new sg(X,ue,t,Rt),b=new j_(X,ue),F.reversedDepthBuffer&&p&&b.buffers.depth.setReversed(!0),H=X.createFramebuffer(),U=X.createFramebuffer(),W=X.createFramebuffer(),J=new _g(X),et=new B_,rt=new Q_(X,ue,b,et,F,Rt,J),St=new dg(B),Mt=new yp(X),Bt=new ng(X,Mt),ot=new mg(X,Mt,J,Bt),ft=new yg(X,ot,Mt,Bt,J),q=new xg(X,F,rt),Xt=new rg(et),Ct=new U_(B,St,ue,F,Bt,Xt),Gt=new sx(B,et),Dt=new k_,At=new Y_(ue),ae=new eg(B,St,b,ft,S,u),Jt=new K_(B,ft,F),mt=new rx(X,J,F,b),It=new ig(X,ue,J),ut=new gg(X,ue,J),J.programs=Ct.programs,B.capabilities=F,B.extensions=ue,B.properties=et,B.renderLists=Dt,B.shadowMap=Jt,B.state=b,B.info=J}w!==ln&&(D=new Sg(w,e.width,e.height,h,s,o));let Vt=new eh(B,X);this.xr=Vt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let C=ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(C){C!==void 0&&(dt=C,this.setSize(pe,lt,!1))},this.getSize=function(C){return C.set(pe,lt)},this.setSize=function(C,Y,nt=!0){if(Vt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=C,lt=Y,e.width=Math.floor(C*dt),e.height=Math.floor(Y*dt),nt===!0&&(e.style.width=C+"px",e.style.height=Y+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(pe*dt,lt*dt).floor()},this.setDrawingBufferSize=function(C,Y,nt){pe=C,lt=Y,dt=nt,e.width=Math.floor(C*nt),e.height=Math.floor(Y*nt),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(w===ln){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(st)},this.getViewport=function(C){return C.copy(Ft)},this.setViewport=function(C,Y,nt,j){C.isVector4?Ft.set(C.x,C.y,C.z,C.w):Ft.set(C,Y,nt,j),b.viewport(st.copy(Ft).multiplyScalar(dt).round())},this.getScissor=function(C){return C.copy(Qt)},this.setScissor=function(C,Y,nt,j){C.isVector4?Qt.set(C.x,C.y,C.z,C.w):Qt.set(C,Y,nt,j),b.scissor(Tt.copy(Qt).multiplyScalar(dt).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(C){b.setScissorTest(ve=C)},this.setOpaqueSort=function(C){Nt=C},this.setTransparentSort=function(C){Kt=C},this.getClearColor=function(C){return C.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,nt=!0){let j=0;if(C){let Q=!1;if(at!==null){let Ut=at.texture.format;Q=y.has(Ut)}if(Q){let Ut=at.texture.type,wt=v.has(Ut),Ot=ae.getClearColor(),zt=ae.getClearAlpha(),Ht=Ot.r,Lt=Ot.g,le=Ot.b;wt?(P[0]=Ht,P[1]=Lt,P[2]=le,P[3]=zt,X.clearBufferuiv(X.COLOR,0,P)):(A[0]=Ht,A[1]=Lt,A[2]=le,A[3]=zt,X.clearBufferiv(X.COLOR,0,A))}else j|=X.COLOR_BUFFER_BIT}Y&&(j|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(j|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&X.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),G=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",un,!1),ae.dispose(),Dt.dispose(),At.dispose(),et.dispose(),St.dispose(),ft.dispose(),Bt.dispose(),mt.dispose(),Ct.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",$r),Vt.removeEventListener("sessionend",Kr),qn.stop()};function Te(C){C.preventDefault(),sr("WebGLRenderer: Context Lost."),N=!0}function xe(){sr("WebGLRenderer: Context Restored."),N=!1;let C=J.autoReset,Y=Jt.enabled,nt=Jt.autoUpdate,j=Jt.needsUpdate,Q=Jt.type;Yt(),J.autoReset=C,Jt.enabled=Y,Jt.autoUpdate=nt,Jt.needsUpdate=j,Jt.type=Q}function un(C){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function vn(C){let Y=C.target;Y.removeEventListener("dispose",vn),_l(Y)}function _l(C){xl(C),et.remove(C)}function xl(C){let Y=et.get(C).programs;Y!==void 0&&(Y.forEach(function(nt){Ct.releaseProgram(nt)}),C.isShaderMaterial&&Ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,nt,j,Q,Ut){Y===null&&(Y=Zt);let wt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ot=ai(C,Y,nt,j,Q);b.setMaterial(j,wt);let zt=nt.index,Ht=1;if(j.wireframe===!0){if(zt=ot.getWireframeAttribute(nt),zt===void 0)return;Ht=2}let Lt=nt.drawRange,le=nt.attributes.position,kt=Lt.start*Ht,ye=(Lt.start+Lt.count)*Ht;Ut!==null&&(kt=Math.max(kt,Ut.start*Ht),ye=Math.min(ye,(Ut.start+Ut.count)*Ht)),zt!==null?(kt=Math.max(kt,0),ye=Math.min(ye,zt.count)):le!=null&&(kt=Math.max(kt,0),ye=Math.min(ye,le.count));let Re=ye-kt;if(Re<0||Re===1/0)return;Bt.setup(Q,j,Ot,nt,zt);let Ee,r=It;if(zt!==null&&(Ee=Mt.get(zt),r=ut,r.setIndex(Ee)),Q.isMesh)j.wireframe===!0?(b.setLineWidth(j.wireframeLinewidth*ie()),r.setMode(X.LINES)):r.setMode(X.TRIANGLES);else if(Q.isLine){let a=j.linewidth;a===void 0&&(a=1),b.setLineWidth(a*ie()),Q.isLineSegments?r.setMode(X.LINES):Q.isLineLoop?r.setMode(X.LINE_LOOP):r.setMode(X.LINE_STRIP)}else Q.isPoints?r.setMode(X.POINTS):Q.isSprite&&r.setMode(X.TRIANGLES);if(Q.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))r.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let a=Q._multiDrawStarts,c=Q._multiDrawCounts,d=Q._multiDrawCount,_=zt?Mt.get(zt).bytesPerElement:1,M=et.get(j).currentProgram.getUniforms();for(let I=0;I<d;I++)M.setValue(X,"_gl_DrawID",I),r.render(a[I]/_,c[I])}else if(Q.isInstancedMesh)r.renderInstances(kt,Re,Q.count);else if(nt.isInstancedBufferGeometry){let a=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,c=Math.min(nt.instanceCount,a);r.renderInstances(kt,Re,c)}else r.render(kt,Re)};function Jr(C,Y,nt,j){G!==null&&C.isNodeMaterial&&G.setObject(j,C),xt===!0&&Xt.setState(C,nt,!1),C.transparent===!0&&C.side===an&&C.forceSinglePass===!1?(C.side=Ge,C.needsUpdate=!0,$i(C,Y,j),C.side=bi,C.needsUpdate=!0,$i(C,Y,j),C.side=an):$i(C,Y,j)}this.compile=function(C,Y,nt=null){nt===null&&(nt=C),G!==null&&G.renderStart(C,Y,nt),L=At.get(nt),L.init(Y),T.push(L),nt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(L.pushLight(Q),Q.castShadow&&L.pushShadow(Q))}),C!==nt&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(L.pushLight(Q),Q.castShadow&&L.pushShadow(Q))}),L.setupLights(),G!==null&&G.updateLights(L.state.lightsArray),yt=this.localClippingEnabled,xt=Xt.init(this.clippingPlanes,yt),xt===!0&&Xt.setGlobalState(this.clippingPlanes,Y),G!==null&&Jt.render(L.state.shadowsArray,nt,Y);let j=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ut=Q.material;if(Ut)if(Array.isArray(Ut))for(let wt=0;wt<Ut.length;wt++){let Ot=Ut[wt];Jr(Ot,nt,Y,Q),j.add(Ot)}else Jr(Ut,nt,Y,Q),j.add(Ut)}),L=T.pop(),G!==null&&G.renderEnd(),j},this.compileAsync=function(C,Y,nt=null){let j=this.compile(C,Y,nt);return new Promise(Q=>{function Ut(){if(j.forEach(function(wt){let zt=et.get(wt).currentProgram;(zt===void 0||zt.isReady())&&j.delete(wt)}),j.size===0){Q(C);return}setTimeout(Ut,10)}ue.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Xs=null;function yl(C){Xs&&Xs(C)}function $r(){qn.stop()}function Kr(){qn.start()}let qn=new nf;qn.setAnimationLoop(yl),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(C){Xs=C,Vt.setAnimationLoop(C),C===null?qn.stop():qn.start()},Vt.addEventListener("sessionstart",$r),Vt.addEventListener("sessionend",Kr),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;G!==null&&G.renderStart(C,Y);let nt=Vt.enabled===!0&&Vt.isPresenting===!0,j=D!==null&&(at===null||nt)&&D.begin(B,at);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(Y),Y=Vt.getCamera()),C.isScene===!0&&C.onBeforeRender(B,C,Y,at),L=At.get(C,T.length),L.init(Y),L.state.textureUnits=rt.getTextureUnits(),T.push(L),vt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),pt.setFromProjectionMatrix(vt,Cn,Y.reversedDepth),yt=this.localClippingEnabled,xt=Xt.init(this.clippingPlanes,yt),R=Dt.get(C,O.length),R.init(),O.push(R),Vt.enabled===!0&&Vt.isPresenting===!0){let wt=B.xr.getDepthSensingMesh();wt!==null&&Ws(wt,Y,-1/0,B.sortObjects)}Ws(C,Y,0,B.sortObjects),R.finish(),G!==null&&G.updateLights(L.state.lightsArray),B.sortObjects===!0&&R.sort(Nt,Kt),te=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,te&&ae.addToRenderList(R,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Xt.beginShadows();let Q=L.state.shadowsArray;if(Jt.render(Q,C,Y),xt===!0&&Xt.endShadows(),(j&&D.hasRenderPass())===!1){let wt=R.opaque,Ot=R.transmissive;if(L.setupLights(),Y.isArrayCamera){let zt=Y.cameras;if(Ot.length>0)for(let Ht=0,Lt=zt.length;Ht<Lt;Ht++){let le=zt[Ht];oi(wt,Ot,C,le)}te&&ae.render(C);for(let Ht=0,Lt=zt.length;Ht<Lt;Ht++){let le=zt[Ht];jr(R,C,le,le.viewport)}}else Ot.length>0&&oi(wt,Ot,C,Y),te&&ae.render(C),jr(R,C,Y)}at!==null&&$===0&&(rt.updateMultisampleRenderTarget(at),rt.updateRenderTargetMipmap(at)),j&&D.end(B),C.isScene===!0&&C.onAfterRender(B,C,Y),Bt.resetDefaultState(),tt=-1,it=null,T.pop(),T.length>0?(L=T[T.length-1],rt.setTextureUnits(L.state.textureUnits),xt===!0&&Xt.setGlobalState(B.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?R=O[O.length-1]:R=null,G!==null&&G.renderEnd()};function Ws(C,Y,nt,j){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)nt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(pt)){j&&$t.setFromMatrixPosition(C.matrixWorld).applyMatrix4(vt);let wt=ft.update(C),Ot=C.material;Ot.visible&&R.push(C,wt,Ot,nt,$t.z,null,Y)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(pt))){let wt=ft.update(C),Ot=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$t.copy(C.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),$t.copy(wt.boundingSphere.center)),$t.applyMatrix4(C.matrixWorld).applyMatrix4(vt)),Array.isArray(Ot)){let zt=wt.groups;for(let Ht=0,Lt=zt.length;Ht<Lt;Ht++){let le=zt[Ht],kt=Ot[le.materialIndex];kt&&kt.visible&&R.push(C,wt,kt,nt,$t.z,le,Y)}}else Ot.visible&&R.push(C,wt,Ot,nt,$t.z,null,Y)}}let Ut=C.children;for(let wt=0,Ot=Ut.length;wt<Ot;wt++)Ws(Ut[wt],Y,nt,j)}function jr(C,Y,nt,j){let{opaque:Q,transmissive:Ut,transparent:wt}=C;L.setupLightsView(nt),xt===!0&&Xt.setGlobalState(B.clippingPlanes,nt),j&&b.viewport(st.copy(j)),Q.length>0&&Ii(Q,Y,nt),Ut.length>0&&Ii(Ut,Y,nt),wt.length>0&&Ii(wt,Y,nt),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function oi(C,Y,nt,j){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[j.id]===void 0){let kt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[j.id]=new on(1,1,{generateMipmaps:!0,type:kt?Nn:ln,minFilter:Ti,samples:Math.max(4,F.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let Ut=L.state.transmissionRenderTarget[j.id],wt=j.viewport||st;Ut.setSize(wt.z*B.transmissionResolutionScale,wt.w*B.transmissionResolutionScale);let Ot=B.getRenderTarget(),zt=B.getActiveCubeFace(),Ht=B.getActiveMipmapLevel();B.setRenderTarget(Ut),B.getClearColor(qt),ne=B.getClearAlpha(),ne<1&&B.setClearColor(16777215,.5),B.clear(),te&&ae.render(nt);let Lt=B.toneMapping;B.toneMapping=Rn;let le=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),L.setupLightsView(j),xt===!0&&Xt.setGlobalState(B.clippingPlanes,j),Ii(C,nt,j),rt.updateMultisampleRenderTarget(Ut),rt.updateRenderTargetMipmap(Ut),ue.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ye=0,Re=Y.length;ye<Re;ye++){let Ee=Y[ye],{object:r,geometry:a,material:c,group:d}=Ee;if(c.side===an&&r.layers.test(j.layers)){let _=c.side;c.side=Ge,c.needsUpdate=!0,Qr(r,nt,j,a,c,d),c.side=_,c.needsUpdate=!0,kt=!0}}kt===!0&&(rt.updateMultisampleRenderTarget(Ut),rt.updateRenderTargetMipmap(Ut))}B.setRenderTarget(Ot,zt,Ht),B.setClearColor(qt,ne),le!==void 0&&(j.viewport=le),B.toneMapping=Lt}function Ii(C,Y,nt){let j=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Ut=C.length;Q<Ut;Q++){let wt=C[Q],{object:Ot,geometry:zt,group:Ht}=wt,Lt=wt.material;Lt.allowOverride===!0&&j!==null&&(Lt=j),Ot.layers.test(nt.layers)&&Qr(Ot,Y,nt,zt,Lt,Ht)}}function Qr(C,Y,nt,j,Q,Ut){G!==null&&Q.isNodeMaterial&&G.setObject(C,Q),C.onBeforeRender(B,Y,nt,j,Q,Ut),C.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(B,Y,nt,j,C,Ut),Q.transparent===!0&&Q.side===an&&Q.forceSinglePass===!1?(Q.side=Ge,Q.needsUpdate=!0,B.renderBufferDirect(nt,Y,j,Q,C,Ut),Q.side=bi,Q.needsUpdate=!0,B.renderBufferDirect(nt,Y,j,Q,C,Ut),Q.side=an):B.renderBufferDirect(nt,Y,j,Q,C,Ut),C.onAfterRender(B,Y,nt,j,Q,Ut)}function $i(C,Y,nt){Y.isScene!==!0&&(Y=Zt);let j=et.get(C),Q=L.state.lights,Ut=L.state.shadowsArray,wt=Q.state.version,Ot=Ct.getParameters(C,Q.state,Ut,Y,nt,L.state.lightProbeGridArray),zt=Ct.getProgramCacheKey(Ot),Ht=j.programs;j.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,j.fog=Y.fog;let Lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;j.envMap=St.get(C.envMap||j.environment,Lt),j.envMapRotation=j.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,Ht===void 0&&(C.addEventListener("dispose",vn),Ht=new Map,j.programs=Ht);let le=Ht.get(zt);if(le!==void 0){if(j.currentProgram===le&&j.lightsStateVersion===wt)return eo(C,Ot),le}else Ot.uniforms=Ct.getUniforms(C),G!==null&&C.isNodeMaterial&&G.build(C,nt,Ot),C.onBeforeCompile(Ot,B),le=Ct.acquireProgram(Ot,zt),Ht.set(zt,le),j.uniforms=Ot.uniforms;let kt=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(kt.clippingPlanes=Xt.uniform),eo(C,Ot),j.needsLights=Ml(C),j.lightsStateVersion=wt,j.needsLights&&(kt.ambientLightColor.value=Q.state.ambient,kt.lightProbe.value=Q.state.probe,kt.sunLights.value=Q.state.sun,kt.sunLightShadows.value=Q.state.sunShadow,kt.directionalLights.value=Q.state.directional,kt.directionalLightShadows.value=Q.state.directionalShadow,kt.spotLights.value=Q.state.spot,kt.spotLightShadows.value=Q.state.spotShadow,kt.rectAreaLights.value=Q.state.rectArea,kt.ltc_1.value=Q.state.rectAreaLTC1,kt.ltc_2.value=Q.state.rectAreaLTC2,kt.pointLights.value=Q.state.point,kt.pointLightShadows.value=Q.state.pointShadow,kt.hemisphereLights.value=Q.state.hemi,kt.sunShadowMatrix.value=Q.state.sunShadowMatrix,kt.sunShadowCascade.value=Q.state.sunShadowCascade,kt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,kt.spotLightMatrix.value=Q.state.spotLightMatrix,kt.spotLightMap.value=Q.state.spotLightMap,kt.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=L.state.lightProbeGridArray.length>0,j.currentProgram=le,j.uniformsList=null,le}function to(C){if(C.uniformsList===null){let Y=C.currentProgram.getUniforms();C.uniformsList=Os.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function eo(C,Y){let nt=et.get(C);nt.outputColorSpace=Y.outputColorSpace,nt.batching=Y.batching,nt.batchingColor=Y.batchingColor,nt.instancing=Y.instancing,nt.instancingColor=Y.instancingColor,nt.instancingMorph=Y.instancingMorph,nt.skinning=Y.skinning,nt.morphTargets=Y.morphTargets,nt.morphNormals=Y.morphNormals,nt.morphColors=Y.morphColors,nt.morphTargetsCount=Y.morphTargetsCount,nt.numClippingPlanes=Y.numClippingPlanes,nt.numIntersection=Y.numClipIntersection,nt.vertexAlphas=Y.vertexAlphas,nt.vertexTangents=Y.vertexTangents,nt.toneMapping=Y.toneMapping}function vl(C,Y){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;E.setFromMatrixPosition(Y.matrixWorld);for(let nt=0,j=C.length;nt<j;nt++){let Q=C[nt];if(Q.texture!==null&&Q.boundingBox.containsPoint(E))return Q}return null}function ai(C,Y,nt,j,Q){Y.isScene!==!0&&(Y=Zt),rt.resetTextureUnits();let Ut=Y.fog,wt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?Y.environment:null,Ot=at===null?B.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:de.workingColorSpace,zt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ht=St.get(j.envMap||wt,zt),Lt=j.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,le=!!nt.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),kt=!!nt.morphAttributes.position,ye=!!nt.morphAttributes.normal,Re=!!nt.morphAttributes.color,Ee=Rn;j.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ee=B.toneMapping);let r=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,a=r!==void 0?r.length:0,c=et.get(j),d=L.state.lights;if(xt===!0&&(yt===!0||C!==it)){let gt=C===it&&j.id===tt;Xt.setState(j,C,gt)}let _=!1;j.version===c.__version?(c.needsLights&&c.lightsStateVersion!==d.state.version||c.outputColorSpace!==Ot||Q.isBatchedMesh&&c.batching===!1||!Q.isBatchedMesh&&c.batching===!0||Q.isBatchedMesh&&c.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&c.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&c.instancing===!1||!Q.isInstancedMesh&&c.instancing===!0||Q.isSkinnedMesh&&c.skinning===!1||!Q.isSkinnedMesh&&c.skinning===!0||Q.isInstancedMesh&&c.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&c.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&c.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&c.instancingMorph===!1&&Q.morphTexture!==null||c.envMap!==Ht||j.fog===!0&&c.fog!==Ut||c.numClippingPlanes!==void 0&&(c.numClippingPlanes!==Xt.numPlanes||c.numIntersection!==Xt.numIntersection)||c.vertexAlphas!==Lt||c.vertexTangents!==le||c.morphTargets!==kt||c.morphNormals!==ye||c.morphColors!==Re||c.toneMapping!==Ee||c.morphTargetsCount!==a||!!c.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(_=!0):(_=!0,c.__version=j.version);let M=c.currentProgram;_===!0&&(M=$i(j,Y,Q),G&&j.isNodeMaterial&&G.onUpdateProgram(j,M,c));let I=!1,k=!1,V=!1,Z=M.getUniforms(),ht=c.uniforms;if(b.useProgram(M.program)&&(I=!0,k=!0,V=!0),j.id!==tt&&(tt=j.id,k=!0),c.needsLights){let gt=vl(L.state.lightProbeGridArray,Q);c.lightProbeGrid!==gt&&(c.lightProbeGrid=gt,k=!0)}if(I||it!==C){b.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Z.setValue(X,"projectionMatrix",C.projectionMatrix),Z.setValue(X,"viewMatrix",C.matrixWorldInverse);let Wt=Z.map.cameraPosition;Wt!==void 0&&Wt.setValue(X,bt.setFromMatrixPosition(C.matrixWorld)),F.logarithmicDepthBuffer&&Z.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Z.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),it!==C&&(it=C,k=!0,V=!0)}if(c.needsLights&&(d.state.sunShadowMap.length>0&&Z.setValue(X,"sunShadowMap",d.state.sunShadowMap,rt),d.state.directionalShadowMap.length>0&&Z.setValue(X,"directionalShadowMap",d.state.directionalShadowMap,rt),d.state.spotShadowMap.length>0&&Z.setValue(X,"spotShadowMap",d.state.spotShadowMap,rt),d.state.pointShadowMap.length>0&&Z.setValue(X,"pointShadowMap",d.state.pointShadowMap,rt)),Q.isSkinnedMesh){Z.setOptional(X,Q,"bindMatrix"),Z.setOptional(X,Q,"bindMatrixInverse");let gt=Q.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),Z.setValue(X,"boneTexture",gt.boneTexture,rt))}Q.isBatchedMesh&&(Z.setOptional(X,Q,"batchingTexture"),Z.setValue(X,"batchingTexture",Q._matricesTexture,rt),Z.setOptional(X,Q,"batchingIdTexture"),Z.setValue(X,"batchingIdTexture",Q._indirectTexture,rt),Z.setOptional(X,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Z.setValue(X,"batchingColorTexture",Q._colorsTexture,rt));let ct=nt.morphAttributes;if((ct.position!==void 0||ct.normal!==void 0||ct.color!==void 0)&&q.update(Q,nt,M),(k||c.receiveShadow!==Q.receiveShadow)&&(c.receiveShadow=Q.receiveShadow,Z.setValue(X,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&Y.environment!==null&&(ht.envMapIntensity.value=Y.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=ax()),k){if(Z.setValue(X,"toneMappingExposure",B.toneMappingExposure),c.needsLights&&Sl(ht,V),Ut&&j.fog===!0&&Gt.refreshFogUniforms(ht,Ut),Gt.refreshMaterialUniforms(ht,j,dt,lt,L.state.transmissionRenderTarget[C.id]),c.needsLights&&c.lightProbeGrid){let gt=c.lightProbeGrid;ht.probesSH.value=gt.texture,ht.probesMin.value.copy(gt.boundingBox.min),ht.probesMax.value.copy(gt.boundingBox.max),ht.probesResolution.value.copy(gt.resolution)}Os.upload(X,to(c),ht,rt)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Os.upload(X,to(c),ht,rt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Z.setValue(X,"center",Q.center),Z.setValue(X,"modelViewMatrix",Q.modelViewMatrix),Z.setValue(X,"normalMatrix",Q.normalMatrix),Z.setValue(X,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let gt=j.uniformsGroups;for(let Wt=0,re=gt.length;Wt<re;Wt++){let ce=gt[Wt];mt.update(ce,M),mt.bind(ce,M)}}return M}function Sl(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.sunLights.needsUpdate=Y,C.sunLightShadows.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Ml(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(C,Y,nt){let j=et.get(C);j.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),et.get(C.texture).__webglTexture=Y,et.get(C.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:nt,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){let nt=et.get(C);nt.__webglFramebuffer=Y,nt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,nt=0){at=C,K=Y,$=nt;let j=null,Q=!1,Ut=!1;if(C){let Ot=et.get(C);if(Ot.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(X.FRAMEBUFFER,Ot.__webglFramebuffer),st.copy(C.viewport),Tt.copy(C.scissor),Et=C.scissorTest,b.viewport(st),b.scissor(Tt),b.setScissorTest(Et),tt=-1;return}else if(Ot.__webglFramebuffer===void 0)rt.setupRenderTarget(C);else if(Ot.__hasExternalTextures)rt.rebindTextures(C,et.get(C.texture).__webglTexture,et.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Lt=C.depthTexture;if(Ot.__boundDepthTexture!==Lt){if(Lt!==null&&et.has(Lt)&&(C.width!==Lt.image.width||C.height!==Lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(C)}}let zt=C.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Ut=!0);let Ht=et.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ht[Y])?j=Ht[Y][nt]:j=Ht[Y],Q=!0):C.samples>0&&rt.useMultisampledRTT(C)===!1?j=et.get(C).__webglMultisampledFramebuffer:Array.isArray(Ht)?j=Ht[nt]:j=Ht,st.copy(C.viewport),Tt.copy(C.scissor),Et=C.scissorTest}else st.copy(Ft).multiplyScalar(dt).floor(),Tt.copy(Qt).multiplyScalar(dt).floor(),Et=ve;if(nt!==0&&(j=H),b.bindFramebuffer(X.FRAMEBUFFER,j)&&b.drawBuffers(C,j),b.viewport(st),b.scissor(Tt),b.setScissorTest(Et),Q){let Ot=et.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ot.__webglTexture,nt)}else if(Ut){let Ot=Y;for(let zt=0;zt<C.textures.length;zt++){let Ht=et.get(C.textures[zt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+zt,Ht.__webglTexture,nt,Ot)}}else if(C!==null&&nt!==0){let Ot=et.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ot.__webglTexture,nt)}tt=-1};function no(C){let Y=et.get(C);return(Y.__readFormat!==C.format||Y.__readType!==C.type)&&(Y.__readFormat=C.format,Y.__readType=C.type,Y.__formatReadable=F.textureFormatReadable(C.format),Y.__typeReadable=F.textureTypeReadable(C.type)),Y}this.readRenderTargetPixels=function(C,Y,nt,j,Q,Ut,wt,Ot=0){if(!(C&&C.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&wt!==void 0&&(zt=zt[wt]),zt){b.bindFramebuffer(X.FRAMEBUFFER,zt);try{let Ht=C.textures[Ot],Lt=Ht.format,le=Ht.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ot);let kt=no(Ht);if(kt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-j&&nt>=0&&nt<=C.height-Q&&X.readPixels(Y,nt,j,Q,Rt.convert(Lt),Rt.convert(le),Ut)}finally{let Ht=at!==null?et.get(at).__webglFramebuffer:null;b.bindFramebuffer(X.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(C,Y,nt,j,Q,Ut,wt,Ot=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&wt!==void 0&&(zt=zt[wt]),zt)if(Y>=0&&Y<=C.width-j&&nt>=0&&nt<=C.height-Q){b.bindFramebuffer(X.FRAMEBUFFER,zt);let Ht=C.textures[Ot],Lt=Ht.format,le=Ht.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ot);let kt=no(Ht);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ye),X.bufferData(X.PIXEL_PACK_BUFFER,Ut.byteLength,X.STREAM_READ),X.readPixels(Y,nt,j,Q,Rt.convert(Lt),Rt.convert(le),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Re=at!==null?et.get(at).__webglFramebuffer:null;b.bindFramebuffer(X.FRAMEBUFFER,Re);let Ee=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Eu(X,Ee,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ye),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ut),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(ye),X.deleteSync(Ee),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,nt=0){let j=Math.pow(2,-nt),Q=Math.floor(C.image.width*j),Ut=Math.floor(C.image.height*j),wt=Y!==null?Y.x:0,Ot=Y!==null?Y.y:0;rt.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,nt,0,0,wt,Ot,Q,Ut),b.unbindTexture()},this.copyTextureToTexture=function(C,Y,nt=null,j=null,Q=0,Ut=0){let wt,Ot,zt,Ht,Lt,le,kt,ye,Re,Ee=C.isCompressedTexture?C.mipmaps[Ut]:C.image;if(nt!==null)wt=nt.max.x-nt.min.x,Ot=nt.max.y-nt.min.y,zt=nt.isBox3?nt.max.z-nt.min.z:1,Ht=nt.min.x,Lt=nt.min.y,le=nt.isBox3?nt.min.z:0;else{let ht=Math.pow(2,-Q);wt=Math.floor(Ee.width*ht),Ot=Math.floor(Ee.height*ht),C.isDataArrayTexture?zt=Ee.depth:C.isData3DTexture?zt=Math.floor(Ee.depth*ht):zt=1,Ht=0,Lt=0,le=0}j!==null?(kt=j.x,ye=j.y,Re=j.z):(kt=0,ye=0,Re=0);let r=Rt.convert(Y.format),a=Rt.convert(Y.type),c;Y.isData3DTexture?(rt.setTexture3D(Y,0),c=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(rt.setTexture2DArray(Y,0),c=X.TEXTURE_2D_ARRAY):(rt.setTexture2D(Y,0),c=X.TEXTURE_2D),b.activeTexture(X.TEXTURE0),b.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),b.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),b.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);let d=b.getParameter(X.UNPACK_ROW_LENGTH),_=b.getParameter(X.UNPACK_IMAGE_HEIGHT),M=b.getParameter(X.UNPACK_SKIP_PIXELS),I=b.getParameter(X.UNPACK_SKIP_ROWS),k=b.getParameter(X.UNPACK_SKIP_IMAGES);b.pixelStorei(X.UNPACK_ROW_LENGTH,Ee.width),b.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ee.height),b.pixelStorei(X.UNPACK_SKIP_PIXELS,Ht),b.pixelStorei(X.UNPACK_SKIP_ROWS,Lt),b.pixelStorei(X.UNPACK_SKIP_IMAGES,le);let V=C.isDataArrayTexture||C.isData3DTexture,Z=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){let ht=et.get(C),ct=et.get(Y),gt=et.get(ht.__renderTarget),Wt=et.get(ct.__renderTarget);b.bindFramebuffer(X.READ_FRAMEBUFFER,gt.__webglFramebuffer),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let re=0;re<zt;re++)V&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,et.get(C).__webglTexture,Q,le+re),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,et.get(Y).__webglTexture,Ut,Re+re)),X.blitFramebuffer(Ht,Lt,wt,Ot,kt,ye,wt,Ot,X.DEPTH_BUFFER_BIT,X.NEAREST);b.bindFramebuffer(X.READ_FRAMEBUFFER,null),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||et.has(C)){let ht=et.get(C),ct=et.get(Y);b.bindFramebuffer(X.READ_FRAMEBUFFER,U),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,W);for(let gt=0;gt<zt;gt++)V?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ht.__webglTexture,Q,le+gt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ht.__webglTexture,Q),Z?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ct.__webglTexture,Ut,Re+gt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ct.__webglTexture,Ut),Q!==0?X.blitFramebuffer(Ht,Lt,wt,Ot,kt,ye,wt,Ot,X.COLOR_BUFFER_BIT,X.NEAREST):Z?X.copyTexSubImage3D(c,Ut,kt,ye,Re+gt,Ht,Lt,wt,Ot):X.copyTexSubImage2D(c,Ut,kt,ye,Ht,Lt,wt,Ot);b.bindFramebuffer(X.READ_FRAMEBUFFER,null),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Z?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(c,Ut,kt,ye,Re,wt,Ot,zt,r,a,Ee.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(c,Ut,kt,ye,Re,wt,Ot,zt,r,Ee.data):X.texSubImage3D(c,Ut,kt,ye,Re,wt,Ot,zt,r,a,Ee):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ut,kt,ye,wt,Ot,r,a,Ee.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ut,kt,ye,Ee.width,Ee.height,r,Ee.data):X.texSubImage2D(X.TEXTURE_2D,Ut,kt,ye,wt,Ot,r,a,Ee);b.pixelStorei(X.UNPACK_ROW_LENGTH,d),b.pixelStorei(X.UNPACK_IMAGE_HEIGHT,_),b.pixelStorei(X.UNPACK_SKIP_PIXELS,M),b.pixelStorei(X.UNPACK_SKIP_ROWS,I),b.pixelStorei(X.UNPACK_SKIP_IMAGES,k),Ut===0&&Y.generateMipmaps&&X.generateMipmap(c),b.unbindTexture()},this.initRenderTarget=function(C){et.get(C).__webglFramebuffer===void 0&&rt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?rt.setTextureCube(C,0):C.isData3DTexture?rt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?rt.setTexture2DArray(C,0):rt.setTexture2D(C,0),b.unbindTexture()},this.resetState=function(){K=0,$=0,at=null,b.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var hf={type:"change"},ih={type:"start"},ff={type:"end"},cl=new Ui,uf=new pn,cx=Math.cos(70*Gr.DEG2RAD),Ue=new z,cn=2*Math.PI,we={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nh=1e-6,hl=class extends Rr{constructor(t,e=null){super(t,e),this.state=we.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new gn,this._lastTargetPosition=new z,this._quat=new gn().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cs,this._sphericalDelta=new Cs,this._scale=1,this._panOffset=new z,this._rotateStart=new _t,this._rotateEnd=new _t,this._rotateDelta=new _t,this._panStart=new _t,this._panEnd=new _t,this._panDelta=new _t,this._dollyStart=new _t,this._dollyEnd=new _t,this._dollyDelta=new _t,this._dollyDirection=new z,this._mouse=new _t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ux.bind(this),this._onPointerDown=hx.bind(this),this._onPointerUp=fx.bind(this),this._onContextMenu=yx.bind(this),this._onMouseWheel=mx.bind(this),this._onKeyDown=gx.bind(this),this._onTouchStart=_x.bind(this),this._onTouchMove=xx.bind(this),this._onMouseDown=dx.bind(this),this._onMouseMove=px.bind(this),this._interceptControlDown=vx.bind(this),this._interceptControlUp=Sx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=we.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hf),this.update(),this.state=we.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===we.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=cn:i>Math.PI&&(i-=cn),s<-Math.PI?s+=cn:s>Math.PI&&(s-=cn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){let h=Ue.length();l=this._clampDistance(h*this._scale);let u=h-l;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),o=!!u}else if(this.object.isOrthographicCamera){let h=new z(this._mouse.x,this._mouse.y,0);h.unproject(this.object);let u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=u!==this.object.zoom;let f=new z(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(h),this.object.updateMatrixWorld(),l=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(cl.origin.copy(this.object.position),cl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cl.direction))<cx?this.object.lookAt(this.target):(uf.setFromNormalAndCoplanarPoint(this.object.up,this.target),cl.intersectPlane(uf,this.target))))}else if(this.object.isOrthographicCamera){let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>nh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nh||this._lastTargetPosition.distanceToSquared(this.target)>nh?(this.dispatchEvent(hf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?cn/60*this.autoRotateSpeed*t:cn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ue.copy(s).sub(this.target);let o=Ue.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,o=e-i.top,l=i.width,h=i.height;this._mouse.x=s/l*2-1,this._mouse.y=-(o/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let l=(t.pageX+e.x)*.5,h=(t.pageY+e.y)*.5;this._updateZoomParameters(l,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new _t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function hx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ux(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function fx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ff),this.state=we.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function dx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Si.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=we.DOLLY;break;case Si.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=we.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=we.ROTATE}break;case Si.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=we.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=we.PAN}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(ih)}function px(n){switch(this.state){case we.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case we.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case we.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function mx(n){this.enabled===!1||this.enableZoom===!1||this.state!==we.NONE||(n.preventDefault(),this.dispatchEvent(ih),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ff))}function gx(n){this.enabled!==!1&&this._handleKeyDown(n)}function _x(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Mi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=we.TOUCH_ROTATE;break;case Mi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=we.TOUCH_PAN;break;default:this.state=we.NONE}break;case 2:switch(this.touches.TWO){case Mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=we.TOUCH_DOLLY_PAN;break;case Mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=we.TOUCH_DOLLY_ROTATE;break;default:this.state=we.NONE}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(ih)}function xx(n){switch(this._trackPointer(n),this.state){case we.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case we.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case we.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case we.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=we.NONE}}function yx(n){this.enabled!==!1&&n.preventDefault()}function vx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var df=new _n,ul=new z,Bs=class extends Pr{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new me(t,3)),this.setAttribute("uv",new me(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new vi(e,6,1);return this.setAttribute("instanceStart",new Mn(i,3,0)),this.setAttribute("instanceEnd",new Mn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new vi(e,6,1);return this.setAttribute("instanceColorStart",new Mn(i,3,0)),this.setAttribute("instanceColorEnd",new Mn(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Mr(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),df.setFromBufferAttribute(e),this.boundingBox.union(df))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let o=0,l=t.count;o<l;o++)ul.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(ul)),ul.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(ul));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Pt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new _t},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};nn.line={uniforms:Hr.merge([Pt.common,Pt.fog,Pt.line]),vertexShader:`
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
		`};var zs=class extends en{constructor(t){super({type:"LineMaterial",uniforms:Hr.clone(nn.line.uniforms),vertexShader:nn.line.vertexShader,fragmentShader:nn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var sh=new Me,pf=new z,mf=new z,He=new Me,Xe=new Me,Xn=new Me,rh=new z,oh=new ge,We=new Ir,gf=new z,fl=new _n,dl=new Vn,Wn=new Me,Yn,Yi;function _f(n,t,e){return Wn.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),Wn.multiplyScalar(1/Wn.w),Wn.x=Yi/e.width,Wn.y=Yi/e.height,Wn.applyMatrix4(n.projectionMatrixInverse),Wn.multiplyScalar(1/Wn.w),Math.abs(Math.max(Wn.x,Wn.y))}function Mx(n,t){let e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,o=i.attributes.instanceEnd,l=Math.min(i.instanceCount,s.count);for(let h=0,u=l;h<u;h++){We.start.fromBufferAttribute(s,h),We.end.fromBufferAttribute(o,h),We.applyMatrix4(e);let f=new z,m=new z;Yn.distanceSqToSegment(We.start,We.end,m,f),m.distanceTo(f)<Yi*.5&&t.push({point:m,pointOnLine:f,distance:Yn.origin.distanceTo(m),object:n,face:null,faceIndex:h,uv:null,uv1:null})}}function bx(n,t,e){let i=t.projectionMatrix,o=n.material.resolution,l=n.matrixWorld,h=n.geometry,u=h.attributes.instanceStart,f=h.attributes.instanceEnd,m=Math.min(h.instanceCount,u.count),x=-t.near;Yn.at(1,Xn),Xn.w=1,Xn.applyMatrix4(t.matrixWorldInverse),Xn.applyMatrix4(i),Xn.multiplyScalar(1/Xn.w),Xn.x*=o.x/2,Xn.y*=o.y/2,Xn.z=0,rh.copy(Xn),oh.multiplyMatrices(t.matrixWorldInverse,l);for(let p=0,g=m;p<g;p++){if(He.fromBufferAttribute(u,p),Xe.fromBufferAttribute(f,p),He.w=1,Xe.w=1,He.applyMatrix4(oh),Xe.applyMatrix4(oh),He.z>x&&Xe.z>x)continue;if(He.z>x){let A=He.z-Xe.z,E=(He.z-x)/A;He.lerp(Xe,E)}else if(Xe.z>x){let A=Xe.z-He.z,E=(Xe.z-x)/A;Xe.lerp(He,E)}He.applyMatrix4(i),Xe.applyMatrix4(i),He.multiplyScalar(1/He.w),Xe.multiplyScalar(1/Xe.w),He.x*=o.x/2,He.y*=o.y/2,Xe.x*=o.x/2,Xe.y*=o.y/2,We.start.copy(He),We.start.z=0,We.end.copy(Xe),We.end.z=0;let w=We.closestPointToPointParameter(rh,!0);We.at(w,gf);let y=Gr.lerp(He.z,Xe.z,w),v=y>=-1&&y<=1,P=rh.distanceTo(gf)<Yi*.5;if(v&&P){We.start.fromBufferAttribute(u,p),We.end.fromBufferAttribute(f,p),We.start.applyMatrix4(l),We.end.applyMatrix4(l);let A=new z,E=new z;Yn.distanceSqToSegment(We.start,We.end,E,A),e.push({point:E,pointOnLine:A,distance:Yn.origin.distanceTo(E),object:n,face:null,faceIndex:p,uv:null,uv1:null})}}}var pl=class extends Ce{constructor(t=new Bs,e=new zs({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let l=0,h=0,u=e.count;l<u;l++,h+=2)pf.fromBufferAttribute(e,l),mf.fromBufferAttribute(i,l),s[h]=h===0?0:s[h-1],s[h+1]=s[h]+pf.distanceTo(mf);let o=new vi(s,2,1);return t.setAttribute("instanceDistanceStart",new Mn(o,1,0)),t.setAttribute("instanceDistanceEnd",new Mn(o,1,1)),this}raycast(t,e){let i=this.material.worldUnits,s=t.camera;if(s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let o=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Yn=t.ray;let l=this.matrixWorld,h=this.geometry,u=this.material;Yi=u.linewidth+o,h.boundingSphere===null&&h.computeBoundingSphere(),dl.copy(h.boundingSphere).applyMatrix4(l);let f;if(i)f=Yi*.5;else{let x=Math.max(s.near,dl.distanceToPoint(Yn.origin));f=_f(s,x,u.resolution)}if(dl.radius+=f,Yn.intersectsSphere(dl)===!1)return;h.boundingBox===null&&h.computeBoundingBox(),fl.copy(h.boundingBox).applyMatrix4(l);let m;if(i)m=Yi*.5;else{let x=Math.max(s.near,fl.distanceToPoint(Yn.origin));m=_f(s,x,u.resolution)}fl.expandByScalar(m),Yn.intersectsBox(fl)!==!1&&(i?Mx(this,e):bx(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(sh),this.material.uniforms.resolution.value.set(sh.z,sh.w))}};function ah(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),o={},l={},h=n[0].morphTargetsRelative,u=new Le,f=0;for(let m=0;m<n.length;++m){let x=n[m],p=0;if(e!==(x.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in x.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(x.attributes[g]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". Make sure all geometries have the same number of attributes."),null;if(h!==x.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in x.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+".  .morphAttributes must be consistent throughout all geometries."),null;l[g]===void 0&&(l[g]=[]),l[g].push(x.morphAttributes[g])}if(t){let g;if(e)g=x.index.count;else if(x.attributes.position!==void 0)g=x.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". The geometry must have either an index or a position attribute"),null;u.addGroup(f,g,m),f+=g}}if(e){let m=0,x=[];for(let p=0;p<n.length;++p){let g=n[p].index;for(let S=0;S<g.count;++S)x.push(g.getX(S)+m);m+=n[p].attributes.position.count}u.setIndex(x)}for(let m in o){let x=xf(o[m]);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" attribute."),null;u.setAttribute(m,x)}for(let m in l){let x=l[m][0].length;if(x!==0){u.morphAttributes=u.morphAttributes||{},u.morphAttributes[m]=[];for(let p=0;p<x;++p){let g=[];for(let w=0;w<l[m].length;++w)g.push(l[m][w][p]);let S=xf(g);if(!S)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" morphAttribute."),null;u.morphAttributes[m].push(S)}}}return u}function xf(n){let t,e,i,s=-1,o=0;for(let f=0;f<n.length;++f){let m=n[f];if(t===void 0&&(t=m.array.constructor),t!==m.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=m.itemSize),e!==m.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=m.normalized),i!==m.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=m.gpuType),s!==m.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=m.count*e}let l=new t(o),h=new Qe(l,e,i),u=0;for(let f=0;f<n.length;++f){let m=n[f];if(m.isInterleavedBufferAttribute){let x=u/e;for(let p=0,g=m.count;p<g;p++)for(let S=0;S<e;S++){let w=m.getComponent(p,S);h.setComponent(p+x,S,w)}}else l.set(m.array,u);u+=m.count*e}return s!==void 0&&(h.gpuType=s),h}var sn=Hf(yf(),1),si=1e3,{ClipType:Pi,PolyType:vf,PolyFillType:Sf,JoinType:wx,EndType:Tx}=sn.default,Ci=.24,Ex=.06,Ax={n:[0,-1],s:[0,1],w:[-1,0],e:[1,0]};function ri(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let[o,l]of n)o<t&&(t=o),l<e&&(e=l),o>i&&(i=o),l>s&&(s=l);return{x0:t,y0:e,x1:i,y1:s}}function ch(n){if(n.points)return n.points;if(n.rect){let[t,e,i,s]=n.rect;return[[t,e],[i,e],[i,s],[t,s]]}throw new Error(`Room "${n.name||n.id}" needs "rect" or "points"`)}function gl(n){let t=n.map(([e,i])=>({X:Math.round(e*si),Y:Math.round(i*si)}));return sn.default.Clipper.Orientation(t)||t.reverse(),t}var lh=n=>n.map(t=>[t.X/si,t.Y/si]);function ks(n,t,e,i){return gl([[n,t],[e,t],[e,i],[n,i]])}function qr(n,t){let e=new sn.default.ClipperOffset(4,.25);e.AddPaths(n,wx.jtMiter,Tx.etClosedPolygon);let i=new sn.default.Paths;return e.Execute(i,t*si),i}function qi(n,t,e){let i=new sn.default.Clipper;i.AddPaths(t,vf.ptSubject,!0),e&&e.length&&i.AddPaths(e,vf.ptClip,!0);let s=new sn.default.PolyTree;return i.Execute(n,s,Sf.pftNonZero,Sf.pftNonZero),s}function Mf(n,t,e){return sn.default.Clipper.PolyTreeToPaths(qi(n,t,e))}function bf(n){return sn.default.Clipper.CleanPolygons(n,2).filter(t=>t.length>=3&&Math.abs(sn.default.Clipper.Area(t))>400)}function Vs(n){return sn.default.JS.PolyTreeToExPolygons(n).map(t=>({o:lh(t.outer),h:t.holes.map(lh)})).filter(t=>t.o.length>=3)}function wf(n,t,e){let i=0,s={X:Math.round(t*si),Y:Math.round(e*si)};for(let o of n)sn.default.Clipper.PointInPolygon(s,o)!==0&&i++;return i%2===1}function Tf(n,t,e){let i=[ks(0,0,n,t)],s=e.map(o=>ks(o.u0,o.v0,o.u1,o.v1));return Vs(qi(Pi.ctDifference,i,s))}function Ef(n){let t=n.rooms.map(p=>({room:p,pts:ch(p)})),e=t.map(p=>gl(p.pts)),i=bf(qr(qr(e,.08),-.08)),s=bf(qr(i,Ci)),o=[];for(let p of e)o.push(...qr([p],-Ex));let l=qi(Pi.ctDifference,s,o),h=sn.default.Clipper.PolyTreeToPaths(l),u=[],f=[],m=[];for(let p of n.openings||[]){let g=t.find(W=>W.room.id===p.room);if(!g){u.push(`Opening "${p.name||p.kind}" points at room "${p.room}", which does not exist on ${n.name||n.id}.`);continue}let S=Ax[p.wall];if(!S){u.push(`Opening "${p.name||p.kind}" in ${g.room.name}: "wall" must be n, s, e or w.`);continue}let w=ri(g.pts),y=p.at,v=p.width,P={n:[y,w.y0-.5,y+v,w.y0+.25],s:[y,w.y1-.25,y+v,w.y1+.5],w:[w.x0-.5,y,w.x0+.25,y+v],e:[w.x1-.25,y,w.x1+.5,y+v]}[p.wall],A=ks(...P),E=Mf(Pi.ctIntersection,[A],h);if(!E.length){u.push(`${p.name||p.kind} in ${g.room.name}: no wall found at ${p.at} m on the ${p.wall} side.`);continue}let R=S[0]===0,L=v*.3,O=R?ks(P[0]+L,P[1],P[2]-L,P[3]):ks(P[0],P[1]+L,P[2],P[3]-L),T=Mf(Pi.ctIntersection,[O],h),D=ri((T.length?T:E).flatMap(lh)),B=R?{x0:y,x1:y+v,y0:D.y0,y1:D.y1}:{x0:D.x0,x1:D.x1,y0:y,y1:y+v},N=(B.x0+B.x1)/2,G=(B.y0+B.y1)/2,H=!wf(i,N+S[0]*.45,G+S[1]*.45),U=p.kind||"door";["window","bifold","garage","frontdoor","extdoor"].includes(U)&&!H&&u.push(`${p.name||U} in ${g.room.name} is on an inside wall (${p.wall} side). Windows and outside doors need an outside wall.`),["door","opening"].includes(U)&&H&&u.push(`A plain door in ${g.room.name} (${p.wall} side) opens to the outside. Use kind "extdoor" or "frontdoor" if that is right.`),f.push({...p,kind:U,b:[B.x0,B.y0,B.x1,B.y1],n:S,ext:H,rect:P}),U==="opening"&&m.push(A)}let x=m.length?qi(Pi.ctDifference,h,m):l;return{inside:i,rooms:t,slab:Vs(qi(Pi.ctUnion,s,[])),solid:Vs(x),openings:f,warnings:u,isInside:(p,g)=>wf(i,p,g),roomAt:(p,g)=>{for(let S=0;S<e.length;S++)if(sn.default.Clipper.PointInPolygon({X:Math.round(p*si),Y:Math.round(g*si)},e[S])!==0)return t[S].room;return null},cap:p=>p.length?Vs(qi(Pi.ctDifference,sn.default.Clipper.PolyTreeToPaths(x),p.map(g=>ks(...g.rect)))):Vs(x)}}function Af(n,t,e){let i=t.map(s=>gl(s.o.map(([o,l])=>[o+e[0],l+e[1]])));return Vs(qi(Pi.ctDifference,n.map(s=>gl(s.o)),qr(i,.02)))}var Px={living:{wall:"#F78FB3",floor:"#9C8CE8",pattern:"plain"},kitchen:{wall:"#7FD8BE",floor:"#FFD93B",floor2:"#FFF8D6",pattern:"check"},dining:{wall:"#FFC857",floor:"#DE8F4E",floor2:"#C97A3B",pattern:"wood"},hall:{wall:"#FFE27A",floor:"#DE8F4E",floor2:"#C97A3B",pattern:"wood"},bath:{wall:"#6FD3F5",floor:"#FFFFFF",floor2:"#8FDDF7",pattern:"check"},bedroom:[{wall:"#8FC4FA",floor:"#F9BFD8",pattern:"plain"},{wall:"#F9A8CB",floor:"#B7E4A6",pattern:"plain"},{wall:"#B4E68E",floor:"#FAD592",pattern:"plain"},{wall:"#CDB1F7",floor:"#FBE59A",pattern:"plain"}],study:{wall:"#A6DE83",floor:"#DE8F4E",floor2:"#C97A3B",pattern:"wood"},utility:{wall:"#BCE3F7",floor:"#E9EDF2",floor2:"#C3CCD6",pattern:"check"},garage:{wall:"#D9D9E3",floor:"#C2C4CF",floor2:"#B3B5C1",pattern:"tile"},stairs:{wall:"#FFE27A",floor:"#DE8F4E",floor2:"#C97A3B",pattern:"wood"},store:{wall:"#E3D2F7",floor:"#D9C7A8",pattern:"plain"},other:{wall:"#FCE3B8",floor:"#F3D9A4",pattern:"plain"}},Cx={living:{wall:"#F6E7CF",floor:"#F0BE96",pattern:"plain"},kitchen:{wall:"#F3F0E4",floor:"#F7E08C",floor2:"#FBF1C4",pattern:"check"},dining:{wall:"#F6E7CF",floor:"#D99A62",floor2:"#C98850",pattern:"wood"},hall:{wall:"#F3ECE0",floor:"#D5C6F2",pattern:"plain"},bath:{wall:"#E4F3F8",floor:"#FFFFFF",floor2:"#B5E1EE",pattern:"check"},bedroom:[{wall:"#EEF2F8",floor:"#C6D8F7",pattern:"plain"},{wall:"#F8EEF2",floor:"#F5C3DA",pattern:"plain"},{wall:"#F0F6EA",floor:"#C9E7B3",pattern:"plain"},{wall:"#F8F2E4",floor:"#FFD9A6",pattern:"plain"}],study:{wall:"#EEF5E6",floor:"#BFE4A9",pattern:"plain"},utility:{wall:"#F1F1F1",floor:"#EADFC8",pattern:"plain"},garage:{wall:"#E2E2E2",floor:"#D0D0D0",floor2:"#C2C2C2",pattern:"tile"},stairs:{wall:"#F3ECE0",floor:"#D99A62",floor2:"#C98850",pattern:"wood"},store:{wall:"#F1EBE0",floor:"#E6E0D2",pattern:"plain"},other:{wall:"#FFF3D6",floor:"#EEE4CF",pattern:"plain"}},Pf={toon:{sky:"#6CCBFA",cloud:"#FFFFFF",sun:"#FFDD33",ink:"#1b1b1b",lawn:"#62CE3C",lawn2:"#56C232",earth:"#B57E4E",drive:"#CFC6E0",drive2:"#BDB3D1",path:"#F0E2BF",patio:"#F4D9A8",patio2:"#E6C68E",road:"#807C90",kerb:"#DAD7E3",fence:"#E9A85C",fencePost:"#C98238",hedge:"#3FB03A",leaf:["#3FB03A","#56C245","#2F9E44"],blossom:"#E64980",trunk:"#9A5B34",flowers:["#FF5D8F","#FFD23F","#FFFFFF","#B197FC"],exterior:"#F9B58B",exteriorPattern:null,exterior2:"#F0A377",trim:"#FFFFFF",roof:"#C4513A",roof2:"#A8432F",roofPattern:"rooftile",chimney:"#D9744F",door:"#7A4FC4",doorInner:"#FFF7E6",knob:"#FFD23F",garage:"#FFF0D6",garage2:"#E5C9A0",wallCut:"#FFFDF4",inner:"#FCE3B8",slab:"#8C6A4A",glass:"#BDEBFF",curtain:"#9B6BE0",shutter:"#DDE4EA",shutter2:"#8793A0",shutterBox:"#8793A0",wood:"#9A5B34",woodLight:"#DBA15B",steel:"#C3CAD2",white:"#FBFBFB",water:"#9FE3FA",sofa:"#E07B2E",sofaDark:"#BE6220",duvet:["#5BA8F5","#F58FB7","#7FD069","#F5C24B"],rug:"#F2645A",cabinet:"#59B9E0",worktop:"#FFF4DC",tvUnit:"#6C56A8",fridge:"#D5F0F5",plant:"#3FB03A",pot:"#D9744F",dark:"#2B2F3A",planned:"#C4C4C4",bulbOn:"#FFE033",heat:"#FF8A3D",ok:"#69D14A",bad:"#FF5C5C",play:"#B79CFF",screen:"#7FD9FF",rooms:Px,shade:[165,255]},brick:{sky:"#8FD3FF",cloud:"#FFFFFF",sun:"#FFD83A",ink:"#1b1b1b",lawn:"#7CC53F",lawn2:"#6DB634",earth:"#9A7448",drive:"#DDA98A",drive2:"#CC9778",path:"#E7D8BC",patio:"#E7D8BC",patio2:"#D8C7A6",road:"#70737C",kerb:"#C9CBD1",fence:"#C98E4E",fencePost:"#8A5A3C",hedge:"#3F9A35",leaf:["#3F9A35","#4FB03F","#2F8A3A"],blossom:"#A3243B",trunk:"#8A5A3C",flowers:["#E64980","#FFD23F","#FFFFFF","#9775FA"],exterior:"#D2603F",exteriorPattern:"brick",exterior2:"#B94E30",trim:"#FFFFFF",roof:"#4B4F5A",roof2:"#3A3D46",roofPattern:"rooftile",chimney:"#B94E30",door:"#2F5D8C",doorInner:"#FFFFFF",knob:"#D9D9D9",garage:"#F4F4F4",garage2:"#CFCFCF",wallCut:"#FFFDF4",inner:"#FFF3D6",slab:"#7A6652",glass:"#BDE8FF",curtain:"#E6DCC8",shutter:"#D9E0E6",shutter2:"#7d8a94",shutterBox:"#8B949C",wood:"#8A5A3C",woodLight:"#C9A063",steel:"#B9BEC5",white:"#F6F6F6",water:"#BFE9FF",sofa:"#E8734A",sofaDark:"#C95A33",duvet:["#A5C8F5","#F5B5D6","#C9E7B3","#FFD9A6"],rug:"#F2D8A0",cabinet:"#F3F3F3",worktop:"#B9BEC5",tvUnit:"#8A5A3C",fridge:"#B9BEC5",plant:"#3F9A35",pot:"#B94E30",dark:"#2B2F33",planned:"#BDBDBD",bulbOn:"#FFE033",heat:"#FF8A3D",ok:"#7CC44A",bad:"#FF6B6B",play:"#B79CFF",screen:"#7FD0FF",rooms:Cx,shade:[150,255]}};function Cf(n,t){let e=Pf[n]||Pf.toon;return{...e,...t||{},rooms:{...e.rooms,...t&&t.rooms||{}}}}var Ix=[["stairs",/stair/i],["garage",/garage|carport/i],["kitchen",/kitchen/i],["dining",/dining|breakfast/i],["bath",/bath|ensuite|en-suite|shower|wc|toilet|cloak|wet room/i],["bedroom",/bed|nursery|guest/i],["living",/living|lounge|sitting|family|snug|tv room|den/i],["study",/study|office|play|games|gym|library/i],["utility",/utility|laundry|boot|pantry/i],["hall",/hall|landing|porch|entrance|lobby|corridor/i],["store",/store|robe|wardrobe|closet|cupboard|loft|attic/i]];function Rx(n){if(n.type)return n.type;let t=`${n.name||""} ${n.id||""}`;for(let[e,i]of Ix)if(i.test(t))return e;return"other"}function If(n,t,e){let i=Rx(t),s=n.rooms[i]||n.rooms.other;return Array.isArray(s)&&(s=s[e%s.length]),{type:i,wall:t.wall_colour||s.wall,floor:t.floor_colour||s.floor,floor2:t.floor_colour2||s.floor2||null,pattern:t.pattern||(t.floor_colour?"plain":s.pattern)}}function Lx(n,t){let e=parseInt(n.slice(1),16),i=s=>Math.max(0,Math.min(255,Math.round(s*t)));return`rgb(${i(e>>16)},${i(e>>8&255)},${i(e&255)})`}var hh={check:1,wood:1.2,tile:1,brick:.9,rooftile:.42,stripes:3.2,paving:1.2,planks:.5};function Rf(n,t,e){let i=document.createElement("canvas"),s=128;i.width=i.height=s;let o=i.getContext("2d");switch(e=e||Lx(t,.86),o.fillStyle=t,o.fillRect(0,0,s,s),o.fillStyle=e,o.strokeStyle=e,o.lineWidth=4,n){case"check":o.fillRect(0,0,s/2,s/2),o.fillRect(s/2,s/2,s/2,s/2);break;case"wood":for(let l=0;l<4;l++)o.fillRect(0,l*32,s,3),o.fillRect((l*53+20)%s,l*32,3,32);break;case"tile":o.fillRect(0,0,s,3),o.fillRect(0,0,3,s),o.fillRect(0,s/2,s,3),o.fillRect(s/2,0,3,s);break;case"brick":case"paving":for(let l=0;l<4;l++){o.fillRect(0,l*32,s,4);for(let h=l%2*32;h<s;h+=64)o.fillRect(h,l*32,4,32)}break;case"rooftile":o.fillRect(0,s-10,s,10);for(let l=0;l<s;l+=32)o.fillRect(l,0,3,s);break;case"stripes":o.fillRect(0,0,s,s/2);break;case"planks":o.fillRect(0,0,5,s),o.fillRect(s/2,0,5,s);break;default:}return i}var Dx={sofa:[2.2,.95,.85],sofa_l:[2.6,1.8,.85],armchair:[.95,.9,.85],tv_board:[1.8,.42,.5],coffee_table:[1.1,.6,.45],rug:[2,1.4,.02],table:[1.8,.9,.76],chair:[.46,.5,.9],stool:[.45,.45,.44],sideboard:[1.4,.45,.85],shelf:[.9,.35,1.8],desk:[1.3,.65,.75],kitchen:[2.4,.62,.92],worktop:[2,.9,.92],sink:[.9,.62,.92],stove:[.6,.62,.92],fridge:[.6,.65,1.8],washer:[.6,.6,.85],bed:[1.6,2.05,.9],single_bed:[.9,2,.9],wardrobe:[1.8,.6,2.1],bedside:[.45,.4,.55],bathtub:[1.7,.75,.58],wc:[.38,.6,.8],washbasin:[.6,.46,.85],shower:[.9,.9,2],plant:[.45,.45,1.1],car:[1.8,4.2,1.45]};function Lf(n,t,e=0){let i=Dx[n.type]||[.6,.6,.6],s=n.w||i[0],o=n.d||i[1],l=n.h||i[2],h=[],u=(m,x,p)=>{for(let g of[-1,1])for(let S of[-1,1])h.push([g*(s/2-x),S*(o/2-x),x,x,0,m,p])},f=Array.isArray(t.duvet)?t.duvet[e%t.duvet.length]:t.duvet;switch(n.type){case"sofa":case"sofa_l":case"armchair":h.push([0,.08,s,o-.16,.12,.45,t.sofa],[0,-o/2+.14,s,.28,.12,.88,t.sofaDark],[-s/2+.12,.08,.24,o-.16,.45,.66,t.sofaDark],[s/2-.12,.08,.24,o-.16,.45,.66,t.sofaDark]);break;case"tv_board":h.push([0,0,s,o,0,l,t.tvUnit]);break;case"coffee_table":h.push([0,0,s,o,.36,.45,t.woodLight]),u(.36,.07,t.wood);break;case"rug":h.push([0,0,s,o,.03,.06,t.rug]);break;case"table":case"desk":h.push([0,0,s,o,l-.07,l,t.woodLight]),u(l-.07,.08,t.wood);break;case"chair":h.push([0,0,s,o,.4,.47,t.wood],[0,-o/2+.03,s,.06,.47,l,t.wood]),u(.4,.05,t.wood);break;case"stool":h.push([0,0,s,o,.36,.44,t.wood,"cyl"],[0,0,.1,.1,0,.36,t.steel,"cyl"]);break;case"sideboard":h.push([0,0,s,o,.06,l,t.wood]);break;case"shelf":case"wardrobe":case"bedside":h.push([0,0,s,o,0,l,t.woodLight]);break;case"fridge":h.push([0,0,s,o,0,l,t.fridge]);break;case"washer":h.push([0,0,s,o,0,l,t.white],[0,o/2,.36,.04,.25,.61,t.steel]);break;case"kitchen":case"worktop":h.push([0,0,s,o,0,l-.05,t.cabinet],[0,0,s+.04,o+.04,l-.05,l,t.worktop]);break;case"sink":h.push([0,0,s,o,0,l-.05,t.cabinet],[0,0,s+.04,o+.04,l-.05,l,t.worktop],[0,0,s-.3,o-.24,l,l+.02,t.water]);break;case"stove":h.push([0,0,s,o,0,l-.05,t.white],[0,0,s+.04,o+.04,l-.05,l,t.dark]);for(let m of[-1,1])for(let x of[-1,1])h.push([m*.14,x*.14,.18,.18,l,l+.02,t.bad,"cyl"]);break;case"bed":case"single_bed":h.push([0,0,s,o,.12,.36,t.wood],[0,.06,s-.06,o-.16,.36,.56,f],[0,-o/2+.05,s,.1,0,1,t.wood]),s>1.2?h.push([-s/4,-o/2+.38,s/2-.16,.4,.56,.68,t.white],[s/4,-o/2+.38,s/2-.16,.4,.56,.68,t.white]):h.push([0,-o/2+.38,s-.2,.4,.56,.68,t.white]);break;case"bathtub":h.push([0,0,s,o,0,l,t.white],[0,0,s-.2,o-.2,l,l+.02,t.water]);break;case"wc":h.push([0,-o/2+.1,s+.06,.2,0,.8,t.white],[0,.1,s,s,0,.42,t.white,"cyl"]);break;case"washbasin":h.push([0,-.05,.2,.2,0,.72,t.white],[0,0,s,o,.72,l,t.white],[0,.02,s-.2,o-.18,l,l+.02,t.water]);break;case"shower":h.push([0,0,s,o,0,.1,t.white],[0,0,s-.06,o-.06,.1,1.95,"glass"]);break;case"plant":h.push([0,0,s*.7,s*.7,0,.35,t.pot,"cyl"],[0,0,s,s,.55,.55+s,t.plant,"ball"],[0,0,s*.75,s*.75,.9,.9+s*.75,t.plant,"ball"]);break;case"car":{let m=n.colour||"#E8483F";h.push([0,0,s,o,.3,.8,m],[0,.15,s-.16,o*.5,.8,l,m],[0,.15,s-.12,o*.5-.3,.86,l-.1,"glass"]);for(let x of[-1,1])for(let p of[-1,1])h.push([x*(s/2-.05),p*(o/2-.8),.66,.24,0,.66,t.dark,"wheel"]);break}default:h.push([0,0,s,o,0,l,t.planned])}return h}var Nx="0.1.0",Zi=.9,hn=2.1,Gs=2.05,Hs=.2,Ji=(n,t,e)=>`tex|${n}|${t}|${e||""}`,Fx=n=>String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),Zr=n=>n*Math.PI/180;function Df(n,t){let e=n.entity&&t&&t.states[n.entity];if(!e)return{planned:!0,active:!1,level:1,text:""};let i=e.attributes||{},s=n.entity.split(".")[0],o=Number(e.state);switch(n.kind){case"light":case"switch":return{active:e.state==="on",text:""};case"cover":{let l=i.current_position!=null?Number(i.current_position):s==="input_number"?o:e.state==="open"?100:0;return{active:l<99,level:Math.max(0,Math.min(100,l))/100,text:`${Math.round(l)}%`}}case"climate":{let l=i.current_temperature!=null?i.current_temperature:i.temperature!=null?i.temperature:o;return{active:i.hvac_action==="heating"||s==="input_number"&&o>=21,text:Number.isFinite(Number(l))?`${Number(l).toFixed(1)}\xB0`:e.state}}case"lock":return{active:e.state==="locked",text:e.state==="locked"?"locked":"unlocked"};case"motion":return{active:e.state==="on",text:""};case"contact":return{active:e.state==="on",text:e.state==="on"?"open":""};case"camera":return{active:["streaming","recording"].includes(e.state),text:""};case"speaker":case"tv":return{active:["playing","on"].includes(e.state),text:e.state==="playing"?"playing":""};default:return{active:!1,text:`${e.state}${i.unit_of_measurement||""}`}}}var uh=class extends HTMLElement{static getStubConfig(){return{view:"ground",layout:{title:"My house",floors:[{id:"ground",name:"Ground",rooms:[{id:"living",name:"Living room",rect:[0,0,5,4]},{id:"kitchen",name:"Kitchen",rect:[5,0,8.5,4]},{id:"hall",name:"Hall",rect:[0,4,8.5,5.6]}],openings:[{room:"hall",wall:"s",at:3.8,width:1,kind:"frontdoor"},{room:"living",wall:"n",at:1.5,width:2,kind:"window"},{room:"kitchen",wall:"n",at:6,width:1.5,kind:"window"},{room:"living",wall:"s",at:2,width:.85,kind:"door"},{room:"kitchen",wall:"s",at:6.2,width:.85,kind:"door"}],furniture:[{type:"sofa",x:2.5,y:3.3,rot:180},{type:"table",x:6.8,y:2.2}],devices:[{name:"Living room light",kind:"light",x:2.5,y:2,entity:null}]}]}}}setConfig(t){if(!t||!t.layout)throw new Error('Set "layout" to the address of your house file (for example /local/toon-house/house.json) or put the house in the card config.');this._config={view:"outside",cut_height:1.2,...t},this.shadowRoot||(this.attachShadow({mode:"open"}),this._dom()),this._config.height&&this.style.setProperty("--toon-house-h",typeof this._config.height=="number"?`${this._config.height}px`:this._config.height),this._loadLayout()}getCardSize(){return 12}set hass(t){if(this._hass=t,!this._devs)return;let e=this._signature();e!==this._sig&&(this._sig=e,this._syncDevices(),this._req())}connectedCallback(){this._connected=!0,this._ensure()}disconnectedCallback(){this._connected=!1,this._teardown()}_dom(){this.shadowRoot.innerHTML=`<style>
      :host{display:block}
      ha-card{position:relative;overflow:hidden;font-family:"Trebuchet MS","Segoe UI",system-ui,sans-serif;color:#1b1b1b}
      .wrap{position:relative;height:var(--toon-house-h,calc(100vh - 60px));min-height:380px}
      canvas{display:block;width:100%;height:100%;touch-action:none;outline:none}
      .bar{position:absolute;left:12px;top:10px;right:12px;display:flex;gap:8px;flex-wrap:wrap;align-items:center;pointer-events:none}
      h1{margin:0 8px 0 0;font-size:22px;font-weight:900;text-shadow:0 0 4px #fff,0 0 4px #fff}
      button{pointer-events:auto;font:inherit;font-weight:800;font-size:14px;padding:7px 12px;border:3px solid #1b1b1b;border-radius:12px;background:#fff;color:#1b1b1b;cursor:pointer;box-shadow:2px 3px 0 #1b1b1b}
      button.on{background:#FFD83A}
      button.warn{background:#FF8A3D;margin-left:auto}
      .labels{position:absolute;inset:0;pointer-events:none;overflow:hidden}
      .rl{position:absolute;transform:translate(-50%,-50%);font-weight:900;font-size:13px;white-space:nowrap;text-shadow:-2px 0 #fff,2px 0 #fff,0 -2px #fff,0 2px #fff,-1px -1px #fff,1px 1px #fff,-1px 1px #fff,1px -1px #fff}
      .chip{position:absolute;transform:translate(-50%,-140%);pointer-events:auto;cursor:pointer;font-weight:900;font-size:12px;padding:2px 7px;border:2px solid #1b1b1b;border-radius:10px;background:#fff;white-space:nowrap;box-shadow:1px 2px 0 #1b1b1b}
      .chip.active{background:#FFD83A}
      .toast{position:absolute;left:50%;bottom:44px;transform:translateX(-50%);padding:8px 14px;border:3px solid #1b1b1b;border-radius:12px;background:#fff;font-weight:800;font-size:14px;box-shadow:2px 3px 0 #1b1b1b;display:none;pointer-events:auto;cursor:pointer;max-width:86%;text-align:left;white-space:pre-line}
      .foot{position:absolute;left:12px;bottom:8px;right:12px;font-size:12px;font-weight:700;text-shadow:0 0 3px #fff,0 0 3px #fff;pointer-events:none;display:flex;gap:14px;flex-wrap:wrap}
      .err{padding:18px;background:#fff;white-space:pre-line}
      @media (max-width:600px){.rl{font-size:11px}.chip{font-size:11px;padding:1px 5px}h1{font-size:19px}.foot span+span{display:none}button{font-size:13px;padding:6px 9px}}
    </style>
    <ha-card><div class="wrap">
      <div class="labels"></div>
      <div class="bar"><h1></h1><span class="modes" style="display:contents"></span><button class="warn" style="display:none">!</button></div>
      <div class="toast"></div>
      <div class="foot"><span class="counts"></span><span>Drag to turn, pinch or scroll to zoom. Tap a device.</span></div>
    </div></ha-card>`,this._wrap=this.shadowRoot.querySelector(".wrap"),this._labels=this.shadowRoot.querySelector(".labels"),this._toast=this.shadowRoot.querySelector(".toast"),this._toast.addEventListener("click",()=>{let t=this._toast.dataset.nav;this._toast.style.display="none",t&&this._navigate(t)}),this.shadowRoot.querySelector(".warn").addEventListener("click",()=>this._say(`Check your house file:
- ${this._warnings.join(`
- `)}`,"",2e4))}async _loadLayout(){let t=this._config.layout;try{if(typeof t=="string"){let e=await fetch(`${t}${t.includes("?")?"&":"?"}v=${Date.now()}`);if(!e.ok)throw new Error(`the server answered ${e.status}`);this._layout=await e.json()}else this._layout=JSON.parse(JSON.stringify(t));this._prepare()}catch(e){this._fail(`Could not read the house file${typeof t=="string"?` at ${t}`:""}: ${e.message}`);return}this._renderer?this._build(!0):this._ensure()}_prepare(){let t=this._layout;if(!t||!Array.isArray(t.floors)||!t.floors.length)throw new Error('it needs a "floors" list with at least one floor');this.theme=Cf(this._config.theme||t.theme,{...t.colours||{},...this._config.colours||{}}),this._H=t.storey_height||2.4,this._warnings=[];let e=0,i=0;this._floors=t.floors.map((x,p)=>{if(x.id=x.id||`floor${p}`,x.name=x.name||(p===0?"Ground":p===1?"Upstairs":`Floor ${p}`),x.rooms=x.rooms||[],!x.rooms.length)throw new Error(`floor "${x.name}" has no rooms`);x.rooms.forEach((w,y)=>{w.id=w.id||`${x.id}_room${y}`,w.name=w.name||"",w.points=ch(w)});for(let w of x.devices||[])w.id=w.id||`dev${i++}`;let g=Ef(x);this._warnings.push(...g.warnings);let S={};for(let w of x.rooms)S[w.id]=If(this.theme,w,e),S[w.id].type==="bedroom"&&e++;for(let w of x.devices||[])w.x==null&&!(w.room&&w.wall&&w.at!=null)?this._warnings.push(`Device "${w.name||w.id}" needs either x and y, or room, wall and at.`):w.room&&!x.rooms.some(y=>y.id===w.room)&&this._warnings.push(`Device "${w.name||w.id}" points at room "${w.room}", which is not on ${x.name}.`);return{floor:x,walls:g,styles:S,off:x.offset||[0,0],baseY:p*(this._H+Hs)}});let s=String(this._config.view),o=this._floors.findIndex(x=>x.floor.id===s);this._mode==null&&(this._mode=o>=0?o:/^\d+$/.test(s)&&Number(s)<this._floors.length?Number(s):s==="ground"?0:"whole"),this.shadowRoot.querySelector("h1").textContent=this._config.title!=null?this._config.title:t.title||"";let l=this.shadowRoot.querySelector(".modes");l.innerHTML="";let h=(x,p)=>{let g=document.createElement("button");g.textContent=x,g.dataset.mode=String(p),g.addEventListener("click",()=>this._setMode(p)),l.appendChild(g)};this._floors.forEach((x,p)=>h(x.floor.name,p)),h("Outside","whole");let u=this.shadowRoot.querySelector(".warn");u.style.display=this._warnings.length?"":"none",u.textContent=`! ${this._warnings.length}`;let f=ri(this._floors.flatMap(x=>x.floor.rooms.flatMap(p=>p.points.map(([g,S])=>[g+x.off[0],S+x.off[1]]))));this._house=f;let m=t.outside||{};this._plot={x0:f.x0-2,x1:f.x1+2,back:f.y0-9,front:f.y1+7,...m.plot||t.plot||{}}}_fail(t){this._teardown(),this._wrap.innerHTML=`<div class="err">${Fx(t)}</div>`}_ensure(){if(!this._connected||!this._layout||!this._floors||this._renderer)return;let t;try{t=new ol({antialias:!0,alpha:!1,powerPreference:"low-power"})}catch{this._fail("This browser could not start 3D graphics (WebGL2), so the house cannot be drawn here.");return}this._renderer=t,t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this._wrap.insertBefore(t.domElement,this._wrap.firstChild),this._scene=new or,this._camera=new Je(32,1,.5,600),this._scene.add(new Tr(16777215,14207928,1.55));let e=new Ar(16777215,2.1);e.position.set(-9,14,12),this._scene.add(e),this._controls=new hl(this._camera,t.domElement),this._controls.enableDamping=!1,this._controls.minDistance=4,this._controls.maxDistance=160,this._controls.maxPolarAngle=1.48,this._controls.addEventListener("change",()=>this._req());let i=t.domElement;this._onDown=s=>{this._down=[s.clientX,s.clientY]},this._onUp=s=>{this._down&&Math.hypot(s.clientX-this._down[0],s.clientY-this._down[1])<6&&this._pick(s.clientX,s.clientY),this._down=null},i.addEventListener("pointerdown",this._onDown),i.addEventListener("pointerup",this._onUp),this._ro=new ResizeObserver(()=>this._resize()),this._ro.observe(this._wrap),this._resize(),this._build(!0)}_teardown(){if(this._raf&&cancelAnimationFrame(this._raf),this._raf=0,this._ro&&this._ro.disconnect(),this._ro=null,this._controls&&this._controls.dispose(),this._controls=null,this._clear(),this._renderer){let t=this._renderer.domElement;t.removeEventListener("pointerdown",this._onDown),t.removeEventListener("pointerup",this._onUp),this._renderer.dispose(),this._renderer.forceContextLoss(),t.remove()}this._renderer=null,this._scene=null,this._devs=null}_clear(){this._root&&(this._root.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())}),this._scene.remove(this._root),this._root=null,this._gradient&&this._gradient.dispose(),this._labels.innerHTML="")}_resize(){if(!this._renderer)return;let t=this._wrap.clientWidth,e=this._wrap.clientHeight;!t||!e||(this._renderer.setSize(t,e,!1),this._camera.aspect=t/e,this._camera.updateProjectionMatrix(),this._needView&&this._view(),this._req())}_setMode(t){t!==this._mode&&(this._mode=t,this._renderer&&this._build(!0))}_material(t,e){let i={gradientMap:this._gradient,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,side:an,...e};if(!t.startsWith("tex|"))return new Vi({color:t,...i});let[,s,o,l]=t.split("|"),h=new Ts(Rf(s,o,l||null));h.wrapS=h.wrapT=Oi,h.colorSpace=Ze,h.anisotropy=4;let u=hh[s]||1;return h.repeat.set(1/u,1/u),new Vi({color:16777215,map:h,...i})}_batch(){let t=this;return{by:new Map,glass:[],edges:[],add(e,i,s=!0){let o=e.index?e.toNonIndexed():e;if(o!==e&&e.dispose(),s){let l=new dr(o,28);this.edges.push(l.attributes.position.array),l.dispose()}if(i==="glass"){o.deleteAttribute("uv"),this.glass.push(o);return}i.startsWith("tex|")||o.deleteAttribute("uv"),(this.by.get(i)||this.by.set(i,[]).get(i)).push(o)},box(e,i,s,o,l,h,u,f=0,m=!0){if(h-l<.004||s<.004||o<.004)return;let x=new Ve(s,h-l,o);f&&x.rotateY(-Zr(f)),x.translate(e,(l+h)/2,i),this.add(x,u,m)},flat(e,i,s,o=!0){let l=new gi(t._shape(e));l.rotateX(Math.PI/2),l.translate(0,i,0),this.add(l,s,o)},rect(e,i,s,o,l,h,u=!0){this.flat({o:[[e,i],[s,i],[s,o],[e,o]],h:[]},l,h,u)},shape(e,i,s,o=!0){let l=new gi(t._shape(e));l.applyMatrix4(i),this.add(l,s,o)},prism(e,i,s,o,l=!0){let h=new ki(t._shape(e),{depth:s-i,bevelEnabled:!1});h.rotateX(Math.PI/2),h.translate(0,s,0),this.add(h,o,l)},quad(e,i,s,o,l,h=!0){let u=new Le,f=[e,i,s,e,s,o].flat();u.setAttribute("position",new me(f,3)),u.setAttribute("uv",new me(new Array(12).fill(0),2)),u.computeVertexNormals(),this.add(u,l,h)},build(e){for(let[i,s]of this.by){let o=new Ce(ah(s),t._material(i));s.forEach(l=>l.dispose()),e.add(o)}if(this.glass.length){let i=new Ce(ah(this.glass),new ze({color:t.theme.glass,transparent:!0,opacity:.45,depthWrite:!1,side:an}));this.glass.forEach(s=>s.dispose()),i.renderOrder=2,e.add(i)}if(this.edges.length){let i=this.edges.reduce((h,u)=>h+u.length,0),s=new Float32Array(i),o=0;for(let h of this.edges)s.set(h,o),o+=h.length;let l=new Bs;l.setPositions(s),e.add(new pl(l,new zs({color:t.theme.ink,linewidth:t._ink()})))}}}}_shape(t){let e=new ni(t.o.map(i=>new _t(i[0],i[1])));for(let i of t.h||[])e.holes.push(new Bi(i.map(s=>new _t(s[0],s[1]))));return e}_ink(){return this._wrap.clientWidth<600?1.6:2.4}_outlined(t,e,i=.035){let s=new mn,o=new Ce(t,e);t.computeBoundingSphere();let l=t.boundingSphere.radius||.2,h=1+i/l,u=new Ce(t,new ze({color:this.theme.ink,side:Ge}));return u.scale.set(h,h,h),s.add(u,o),s.userData.mesh=o,s}_toon(t){return new Vi({color:t,gradientMap:this._gradient})}_build(t){let e=this.theme,i=this._H,s=this._config.cut_height,o=this._mode;this._clear();let l=new bs(new Uint8Array(e.shade),e.shade.length,1,Fr);l.minFilter=l.magFilter=Ne,l.needsUpdate=!0,this._gradient=l,this._scene.background=new fe(e.sky),this.shadowRoot.querySelector("ha-card").style.background=e.sky;let h=this._root=new mn;this._scene.add(h),this._devs=[],this._pickables=[],this._roomLabels=[],this._tweens=[],this._outside(h),this._floors.forEach((u,f)=>{if(o!=="whole"&&f>o)return;let m=o===f;this._floor(h,u,f,m?s:i,m)}),o==="whole"&&this._roofs(h),this.shadowRoot.querySelectorAll("button[data-mode]").forEach(u=>u.classList.toggle("on",u.dataset.mode===String(o))),this._sig=this._signature(),this._syncDevices(),t&&this._view(),this._req()}_view(){let t=this._mode,e=this._wrap.clientWidth,i=this._wrap.clientHeight;if(!e||!i){this._needView=!0;return}this._needView=!1;let s=this._house,o=(s.x0+s.x1)/2,l=(s.y0+s.y1)/2,h=Math.max(s.x1-s.x0,s.y1-s.y0,6),u=e/i,f=Math.max(1,.95/u),m=t==="whole",x=this._floors.length*(this._H+Hs),p=m?[o,x*.4,l+h*.1]:[o,this._floors[t].baseY+.4,l+h*.04],g=new z(...m?[.46,.36,.81]:[.22,.8,.56]).normalize().multiplyScalar((m?h*3.3+x*.8:h*2.45)*f);this._controls.target.set(...p),this._camera.position.set(p[0]+g.x,p[1]+g.y,p[2]+g.z),this._controls.update()}_outside(t){let e=this.theme,i=this._plot,s=this._layout.outside||{},o=this._batch(),l=new mn,h=(i.x0+i.x1)/2,u=i.x1-i.x0,f=this._house,m=this._floors[0];if(o.box(h,(i.back+i.front)/2,u+.4,i.front-i.back+.4,-1.4,-.3,e.earth),o.box(h,(i.back+i.front)/2,u,i.front-i.back,-.3,-.08,e.lawn),o.rect(i.x0+.05,i.back+.05,i.x1-.05,i.front-.05,-.075,Ji("stripes",e.lawn,e.lawn2),!1),s.road!==!1){o.box(h,i.front+.9,u+.4,1.4,-1.4,-.14,e.kerb),o.box(h,i.front+3.9,u+.4,4.6,-1.4,-.22,e.road);for(let N=i.x0+1;N<i.x1-1;N+=3)o.rect(N,i.front+3.8,N+1.5,i.front+3.98,-.215,e.white,!1)}let x=m.walls.openings.find(N=>N.kind==="frontdoor"),p=m.walls.openings.find(N=>N.kind==="garage"&&N.n[1]===1),g=s.drive||s.drives,S=s.path||s.paths,w=N=>!N||!N.length?[]:Array.isArray(N[0])?N:[N];g==null&&p&&(g=[[p.b[0]-.4,p.b[3],p.b[2]+.4,i.front]]),S==null&&x&&x.n[1]===1&&(S=[[x.b[0]-.1,x.b[3],x.b[2]+.1,i.front]]),g=w(g),S=w(S);for(let N of S)o.box((N[0]+N[2])/2,(N[1]+N[3])/2,N[2]-N[0],N[3]-N[1],-.08,-.05,e.path);for(let N of g)o.box((N[0]+N[2])/2,(N[1]+N[3])/2,N[2]-N[0],N[3]-N[1],-.08,-.045,e.drive),o.rect(N[0]+.03,N[1]+.03,N[2]-.03,N[3]-.03,-.04,Ji("paving",e.drive,e.drive2),!1);for(let N of w(s.patio||s.patios))o.box((N[0]+N[2])/2,(N[1]+N[3])/2,N[2]-N[0],N[3]-N[1],-.08,-.04,e.patio),o.rect(N[0]+.03,N[1]+.03,N[2]-.03,N[3]-.03,-.035,Ji("tile",e.patio,e.patio2),!1);let y=(N,G)=>[...g,...S].some(H=>N>H[0]-.3&&N<H[2]+.3&&G>H[1]-.3&&G<H[3]+.3),v=Math.min(f.y1,Math.max(f.y0+2,(f.y0+f.y1)/2)),P=s.fence||["w","n","e"],A=s.hedge||[],E=N=>N==="n"?[i.x0,i.back+.06,i.x1,i.back+.06]:N==="w"?[i.x0+.06,i.back,i.x0+.06,v]:N==="e"?[i.x1-.06,i.back,i.x1-.06,v]:[i.x0,i.front-.06,i.x1,i.front-.06];for(let N of P){if(A.includes(N))continue;let[G,H,U,W]=E(N),K=Math.hypot(U-G,W-H),$=H===W,at=N==="s",tt=at?.9:1.6,it=new gi(this._shape({o:[[0,-.08],[K,-.08],[K,tt],[0,tt]],h:[]})),st=new ge().makeBasis($?new z(1,0,0):new z(0,0,1),new z(0,1,0),$?new z(0,0,1):new z(-1,0,0)).setPosition(G,0,H);it.applyMatrix4(st),o.add(it,Ji("planks",e.fence,e.fencePost),!0);for(let Tt=0;Tt<=K+.01;Tt+=K/Math.max(1,Math.round(K/1.9)))o.box($?G+Tt:G,$?H:H+Tt,.16,.16,-.08,tt+.14,e.fencePost)}o.build(l);let R=(N,G,H,U,W,K=1,$=.07)=>{let at=this._outlined(new bn(U,18,12),this._toon(W),$);at.position.set(N,G,H),at.scale.y=K,l.add(at)};for(let N of A){let[G,H,U,W]=E(N),K=Math.hypot(U-G,W-H),$=Math.max(2,Math.round(K/1.15)),at=N==="w"?.7:N==="e"?-.7:0,tt=N==="n"?.7:N==="s"?-.7:0;for(let it=0;it<=$;it++){let st=G+(U-G)*it/$+at,Tt=H+(W-H)*it/$+tt;st>f.x0-1.3&&st<f.x1+1.3&&Tt>f.y0-1.3&&Tt<f.y1+1.3||R(st,.75+it%2*.1,Tt,.95,e.leaf[it%2?0:2],.95)}}let L=N=>{let G=N.size||1,H=N.colour||(N.blossom?e.blossom:e.leaf[0]),U=this._outlined(new ei(.16*G,.24*G,1.7*G,10),this._toon(e.trunk));U.position.set(N.x,.85*G-.08,N.y),l.add(U);for(let[W,K,$,at]of[[0,2.35,0,1.2],[-.85,1.85,.2,.85],[.9,1.9,-.1,.8],[.1,1.8,.85,.75],[-.2,1.9,-.8,.7]])R(N.x+W*G,K*G,N.y+$*G,at*G,H)};(s.trees||[{x:i.x0+2.2,y:i.back+2.6,size:1.2},{x:i.x1-2.6,y:i.back+4.2,size:.95,colour:e.leaf[1]},{x:i.x1-1.7,y:i.front-2.2,size:.8,blossom:!0}]).forEach(L);for(let N of m.walls.openings){if(N.kind!=="window"||!N.ext||s.bushes===!1)continue;let G=(N.b[0]+N.b[2])/2+N.n[0]*.75,H=(N.b[1]+N.b[3])/2+N.n[1]*.75;if(y(G,H))continue;let U=N.n[0]===0?1:0,W=N.n[0]===0?0:1;R(G-U*.4,.3,H-W*.4,.5,e.leaf[1],.85,.05),R(G+U*.4,.26,H+W*.4,.44,e.leaf[0],.85,.05)}if(s.flowers!==!1){let N=this._batch();for(let G=i.x0+1,H=0;G<i.x1-1;G+=.55,H++){let U=new bn(.13,8,6);U.translate(G,.12+H%3*.05,i.back+.6+H%2*.3),N.add(U,e.flowers[H%e.flowers.length],!1)}N.build(l)}if(s.mailbox!==!1&&x&&S.length){let N=S[0],G=N[2]+.5,H=i.front-.6,U=this._batch();U.box(G,H,.1,.1,-.08,.95,e.fencePost),U.box(G,H,.32,.5,.95,1.25,e.bad),U.build(l)}let T=()=>new ze({color:e.cloud}),D=Math.max(u,i.front-i.back);for(let[N,G,H,U]of[[-.9,10,-.5,1.5],[1.3,12,-.2,1.9],[.4,14,-1.3,2.3],[-1.1,9,.6,1.2],[1.6,15,-1.2,2]])for(let[W,K,$,at]of[[0,0,0,1],[1.1,-.15,.1,.75],[-1.1,-.2,0,.7],[.3,.45,-.1,.7]]){let tt=this._outlined(new bn(at*U,16,10),T(),.09);tt.position.set(h+N*D*.55+W*U,G+K*U,(i.back+i.front)/2+H*D*.5+$*U),tt.scale.y=.7,l.add(tt)}let B=this._outlined(new bn(2.4,24,16),new ze({color:e.sun}),.12);B.position.set(h+D*.9,19,i.back-D*.4),l.add(B),t.add(l)}_floor(t,e,i,s,o){let l=this.theme,{floor:h,walls:u,styles:f,off:m,baseY:x}=e,p=this._batch(),g=new mn;g.position.set(m[0],x,m[1]);for(let P of u.slab)p.prism(P,i===0?-.22:-Hs,0,i===0?l.slab:this._exteriorKey());for(let P of h.rooms){let A=f[P.id];p.flat({o:P.points,h:[]},.02,A.pattern==="plain"||!hh[A.pattern]?A.floor:Ji(A.pattern,A.floor,A.floor2),!1)}this._walls(p,e,s);let S=new Set((h.devices||[]).filter(P=>P.kind==="cover").map(P=>this._openingFor(e,P)).filter(Boolean));for(let P of u.openings)this._opening(p,e,P,s,S.has(P));for(let P of h.rooms){if(f[P.id].type!=="stairs"||i!==0||this._floors.length<2)continue;let A=ri(P.points),E=A.y1-A.y0>=A.x1-A.x0,R=12,L=P.up||(E?"n":"e"),O=(E?A.y1-A.y0:A.x1-A.x0)-.5,T=O/R,D=(E?A.x1-A.x0:A.y1-A.y0)-.2;for(let B=0;B<R;B++){let N=.1+T*(B+.5),G=Math.min(s+.6,(this._H+Hs)/R*(B+1));E?p.box((A.x0+A.x1)/2,L==="n"?A.y1-N:A.y0+N,D,T,0,G,l.woodLight):p.box(L==="e"?A.x0+N:A.x1-N,(A.y0+A.y1)/2,T,D,0,G,l.woodLight)}}let w=s<2?s+.2:9,y=0;for(let P of h.furniture||[]){let A=R=>(R.rotateY(-Zr(P.rot||0)),R.translate(P.x,0,P.y),R),E=P.type==="bed"||P.type==="single_bed";for(let[R,L,O,T,D,B,N,G]of Lf(P,l,y)){let H=Math.min(B,w);if(H-D<.01)continue;let U,W=P.type!=="rug";G==="cyl"?(U=new ei(O/2,O/2,H-D,14),W=!1):G==="ball"?(U=new bn(O/2,12,8),W=!1):G==="wheel"?(U=new ei(O/2,O/2,T,14),U.rotateZ(Math.PI/2),W=!1):U=new Ve(O,H-D,T),U.translate(R,(D+H)/2,L),p.add(A(U),N,W)}E&&y++}p.build(g),t.add(g);let v=this._mode==="whole";for(let P of h.devices||[]){if(P.x==null&&!(P.room&&P.wall&&P.at!=null)||P.room&&!h.rooms.some(E=>E.id===P.room))continue;let A=P.kind==="cover"&&this._openingFor(e,P);!o&&!(v&&P.kind==="camera")&&!A||this._device(g,e,P,s,o||v)}if(o)for(let P of h.rooms){if(!P.name)continue;let A=ri(P.points),E=document.createElement("div");E.className="rl",E.textContent=P.name,this._labels.appendChild(E);let R=P.label||[(A.x0+A.x1)/2,(A.y0+A.y1)/2];this._roomLabels.push({el:E,pos:new z(m[0]+R[0],x+.1,m[1]+R[1]),small:A.x1-A.x0<1.7||A.y1-A.y0<1.7})}}_exteriorKey(){let t=this.theme;return t.exteriorPattern?Ji(t.exteriorPattern,t.exterior,t.exterior2):t.exterior}_cutRange(t,e){let i=t.kind==="window"?Zi:0,s=t.kind==="window"||t.kind==="bifold"||t.kind==="garage"?hn:Gs;return i>=e-.02?null:[i,s>=e-.05?e:s]}_walls(t,e,i){let s=this.theme,o=e.walls,l=this._exteriorKey(),h=o.openings.filter(p=>p.kind!=="opening").map(p=>({o:p,r:this._cutRange(p,i)})).filter(p=>p.r),u=new z,f=new z(0,1,0),m=new z,x=new ge;for(let p of o.solid)for(let g of[p.o,...p.h])for(let S=0;S<g.length;S++){let w=g[S],y=g[(S+1)%g.length],v=y[0]-w[0],P=y[1]-w[1],A=Math.hypot(v,P);if(A<.004)continue;let E=P/A,R=-v/A,L=(w[0]+y[0])/2+E*.07,O=(w[1]+y[1])/2+R*.07,T=o.roomAt(L,O),D=T?e.styles[T.id].wall:o.isInside(L,O)?s.inner:l,B=Math.abs(P)<1e-6,N=Math.abs(v)<1e-6,G=[];for(let{o:U,r:W}of h){let K=U.n[0]===0;if(K&&!B||!K&&!N)continue;let[$,at,tt,it]=U.b;if(K){if(w[1]<at-.012||w[1]>it+.012)continue;let st=Math.max($,Math.min(w[0],y[0])),Tt=Math.min(tt,Math.max(w[0],y[0]));if(Tt-st<.02)continue;let Et=Math.abs(st-y[0]),qt=Math.abs(Tt-y[0]);G.push({u0:Math.min(Et,qt),u1:Math.max(Et,qt),v0:W[0],v1:W[1]})}else{if(w[0]<$-.012||w[0]>tt+.012)continue;let st=Math.max(at,Math.min(w[1],y[1])),Tt=Math.min(it,Math.max(w[1],y[1]));if(Tt-st<.02)continue;let Et=Math.abs(st-y[1]),qt=Math.abs(Tt-y[1]);G.push({u0:Math.min(Et,qt),u1:Math.max(Et,qt),v0:W[0],v1:W[1]})}}u.set(-v/A,0,-P/A),m.crossVectors(u,f),x.makeBasis(u,f,m).setPosition(y[0],0,y[1]);let H=G.length?Tf(A,i,G):[{o:[[0,0],[A,0],[A,i],[0,i]],h:[]}];for(let U of H)t.shape(U,x,D,!0)}for(let{o:p,r:g}of h){let[S,w,y,v]=p.b,[P,A]=g,E=s.wallCut;p.n[0]===0?(t.quad([S,P,w],[S,P,v],[S,A,v],[S,A,w],E),t.quad([y,P,w],[y,P,v],[y,A,v],[y,A,w],E)):(t.quad([S,P,w],[y,P,w],[y,A,w],[S,A,w],E),t.quad([S,P,v],[y,P,v],[y,A,v],[S,A,v],E)),P>0&&t.quad([S,P,w],[y,P,w],[y,P,v],[S,P,v],E),A<i-.001&&t.quad([S,A,w],[y,A,w],[y,A,v],[S,A,v],E)}for(let p of o.cap(h.filter(g=>g.r[1]>=i-.001).map(g=>g.o)))t.flat(p,i,s.wallCut,!0)}_obox(t,e,i,s,o,l=1,h=0,u=1,f=!0,m=0){if(s-i<.01)return;let[x,p,g,S]=e.b;if(e.n[0]===0){let y=g-x,v=(S-p)*l;t.box(x+y*(h+u)/2,(p+S)/2+e.n[1]*m,y*(u-h),v,i,s,o,0,f)}else{let y=S-p,v=(g-x)*l;t.box((x+g)/2+e.n[0]*m,p+y*(h+u)/2,v,y*(u-h),i,s,o,0,f)}}_opening(t,e,i,s,o){let l=this.theme,h=i.n[0]===0,u=h?i.b[2]-i.b[0]:i.b[3]-i.b[1],f=h?i.b[3]-i.b[1]:i.b[2]-i.b[0],m=.07/u,x=(g,S,w)=>{this._obox(t,i,g,S,l.trim,.45,0,m),this._obox(t,i,g,S,l.trim,.45,1-m,1),this._obox(t,i,S-.07,S,l.trim,.45,m,1-m);for(let y=1;y<w;y++)this._obox(t,i,g,S-.07,l.trim,.45,y/w-m/2,y/w+m/2);this._obox(t,i,g,S-.07,"glass",.12,m,1-m,!1)},p=s>=hn;switch(i.kind){case"window":{if(this._obox(t,i,Zi-.07,Zi+.03,l.trim,1+.2/f,-.04/u,1+.04/u,!0,.06),x(Zi+.03,hn,u>1.25?3:u>.8?2:1),p&&i.ext){let g=Math.min(.32,u*.2)/u,S=-(f/2+.05);this._obox(t,i,Zi-.15,hn+.08,l.curtain,.06/f,0,g,!0,S),this._obox(t,i,Zi-.15,hn+.08,l.curtain,.06/f,1-g,1,!0,S)}break}case"bifold":x(0,hn,Math.max(2,Math.round(u/.75)));break;case"frontdoor":case"extdoor":{let g=i.colour||(i.kind==="frontdoor"?l.door:l.doorInner);this._obox(t,i,0,Gs-.06,g,.3,m,1-m),this._obox(t,i,0,Gs,l.trim,.5,0,m),this._obox(t,i,0,Gs,l.trim,.5,1-m,1),this._obox(t,i,Gs-.06,Gs,l.trim,.5,m,1-m),this._obox(t,i,.95,1.07,l.knob,.1/f,1-m-.14/u,1-m-.04/u,!0,f*.15+.06),i.kind==="frontdoor"&&(this._obox(t,i,1.35,1.75,"glass",.34,.3,.7,!1),this._obox(t,i,-.08,.02,l.path,.6/f,-.15/u,1+.15/u,!0,f/2+.3));break}case"garage":if(!o){this._obox(t,i,0,Math.min(hn,s),l.garage,.2);for(let g=.5;g<Math.min(hn,s)-.1;g+=.5)this._obox(t,i,g,g+.03,l.garage2,.24,.03,.97,!1)}break;case"door":{let g=Math.min(2,s),[S,w,y,v]=i.b,P=u-.06,A=Zr(72),E=h?S+.03:(S+y)/2,R=h?(w+v)/2:w+.03,L=h?1:0,O=h?0:1,T=Math.cos(A)*L-Math.sin(A)*i.n[0],D=Math.cos(A)*O-Math.sin(A)*i.n[1],B=new Ve(P,g,.05);B.rotateY(Math.atan2(-D,T)),B.translate(E+T*P/2,g/2,R+D*P/2),t.add(B,l.doorInner,!0);break}default:}}_roofs(t){let e=this._layout,i=this.theme,s=this._H,o=this._batch(),l=new mn,h=g=>g*(s+Hs)-Hs,u=e.roofs;if(!Array.isArray(u)){u=[];let g=this._floors[this._floors.length-1],S=ri(g.floor.rooms.flatMap(w=>w.points.map(([y,v])=>[y+g.off[0],v+g.off[1]])));u.push({type:"gable",rect:[S.x0,S.y0,S.x1,S.y1],level:this._floors.length,ridge:S.x1-S.x0>=S.y1-S.y0?"x":"y"});for(let w=0;w<this._floors.length-1;w++){let y=this._floors[w],v=this._floors[w+1];for(let P of Af(y.walls.slab,v.walls.slab,[v.off[0]-y.off[0],v.off[1]-y.off[1]]))u.push({type:"flat",points:P.o.map(([A,E])=>[A+y.off[0],E+y.off[1]]),level:w+1})}}let f=i.roofPattern?Ji(i.roofPattern,i.roof,i.roof2):i.roof,m=this._exteriorKey(),x=(g,S,w,y,v,P)=>{let A=new ge().makeBasis(w,y,new z().crossVectors(w,y)).setPosition(S).premultiply(g),E=new gi(this._shape({o:[[0,0],[v,0],[v,P],[0,P]],h:[]}));E.translate(0,0,.012),E.applyMatrix4(A),o.add(E,f,!0);let R=new Ve(v,P,.13);R.translate(v/2,P/2,-.065),R.applyMatrix4(A),o.add(R,i.trim,!0)},p=g=>new ge().makeRotationY(g);for(let g of u){let S=g.base!=null?g.base:h(g.level||this._floors.length);if(g.type==="flat"){let T=g.points||[[g.rect[0],g.rect[1]],[g.rect[2],g.rect[1]],[g.rect[2],g.rect[3]],[g.rect[0],g.rect[3]]],D=ri(T),B=N=>({o:T.map(([G,H])=>[G+Math.sign(G-(D.x0+D.x1)/2)*N,H+Math.sign(H-(D.y0+D.y1)/2)*N]),h:[]});o.prism(B(Ci+.14),S,S+.16,i.trim),o.prism(B(Ci+.02),S+.16,S+.22,i.roof);continue}let[w,y,v,P]=g.rect,A=w-Ci,E=v+Ci,R=y-Ci,L=P+Ci,O=g.overhang!=null?g.overhang:.45;if(g.type==="gable"){let T=(g.ridge||"y")==="y",D=T?new ge:p(Math.PI/2),[B,N,G,H]=T?[A,E,R,L]:[-L,-R,A,E],U=Zr(g.pitch||30),W=(N-B)/2,K=W*Math.tan(U),$=(B+N)/2,at=O*.8,tt=new ki(new ni([new _t(B,0),new _t(N,0),new _t($,K)]),{depth:H-G,bevelEnabled:!1});tt.translate(0,S,G),tt.applyMatrix4(D),o.add(tt,m);let it=(W+O)/Math.cos(U)+.05,st=H-G+2*at,Tt=S-O*Math.tan(U);x(D,new z($-W-O,Tt,G-at),new z(0,0,1),new z(Math.cos(U),Math.sin(U),0),st,it),x(D,new z($+W+O,Tt,H+at),new z(0,0,-1),new z(-Math.cos(U),Math.sin(U),0),st,it)}else if(g.type==="lean"){let T=g.high||"n",D=g.rise!=null?g.rise:.6,B=p({n:0,s:Math.PI,w:Math.PI/2,e:-Math.PI/2}[T]||0),[N,G,H,U]={n:[A,E,R,L],s:[-E,-A,-L,-R],w:[-L,-R,A,E],e:[R,L,-E,-A]}[T]||[A,E,R,L],W=U-H,K=Math.atan2(D,W),$=g.side_overhang!=null?g.side_overhang:.2,at=new ki(new ni([new _t(0,0),new _t(W,0),new _t(W,D+.06)]),{depth:G-N,bevelEnabled:!1});at.applyMatrix4(new ge().makeBasis(new z(0,0,-1),new z(0,1,0),new z(1,0,0)).setPosition(N,S,U).premultiply(B)),o.add(at,m),x(B,new z(N-$,S+.08-O*Math.tan(K),U+O),new z(1,0,0),new z(0,Math.sin(K),-Math.cos(K)),G-N+2*$,(W+O)/Math.cos(K))}}for(let g of e.chimneys||[]){let S=g.w||.6,w=g.d||.6,y=g.top||h(this._floors.length)+3.2,v=g.from!=null?g.from:h(this._floors.length);o.box(g.x,g.y,S,w,v,y,i.chimney),o.box(g.x,g.y,S+.16,w+.16,y,y+.12,i.trim),o.box(g.x,g.y,S*.45,w*.45,y+.12,y+.42,i.chimney),g.smoke!==!1&&[[.15,.95,.28],[.5,1.6,.4],[.2,2.5,.55]].forEach(([P,A,E])=>{let R=this._outlined(new bn(E,14,10),new ze({color:i.cloud}),.05);R.position.set(g.x+P,y+A,g.y),l.add(R)})}o.build(l),t.add(l)}_openingFor(t,e){return!e.wall||e.at==null?null:t.walls.openings.find(i=>i.room===e.room&&i.wall===e.wall&&i.at<=e.at&&e.at<=i.at+i.width)||null}_device(t,e,i,s,o){let l=this.theme,h=e.floor,u=e.off,f=h.rooms.find(A=>A.id===i.room),m=f?ri(f.points):null,x=A=>new ze({color:A,transparent:!0}),p=A=>i.wall==="n"?[i.at,m.y0+A]:i.wall==="s"?[i.at,m.y1-A]:i.wall==="w"?[m.x0+A,i.at]:[m.x1-A,i.at],[g,S]=i.x!=null?[i.x,i.y]:p(.14),w=i.wall==="n"||i.wall==="s",y={d:i,anchor:new z,pick:null},v=(A,E,R,L)=>(A.position.set(E,R,L),t.add(A),A),P=1;switch(i.kind){case"light":{let A=Math.max(1.75,s+.5);v(new Ce(new ei(.015,.015,.45,6),x(l.ink)),g,A+.35,S);let E=v(this._outlined(new ei(.1,.27,.2,16,1,!0),new ze({color:l.white,side:an}),.03),g,A+.14,S);E.userData.mesh.material.transparent=!0;let R=v(this._outlined(new bn(.15,16,12),x("#ffffff")),g,A,S),L=new Ce(new fr(1.3,28),new ze({color:l.bulbOn,transparent:!0,opacity:.42,depthWrite:!1}));L.rotation.x=-Math.PI/2,L.renderOrder=1,v(L,g,.07,S),y.set=O=>{R.userData.mesh.material.color.set(O.planned?l.planned:O.active?l.bulbOn:"#ffffff"),E.userData.mesh.material.color.set(O.planned?l.planned:l.white),L.visible=!!O.active},P=A;break}case"cover":{let A=this._openingFor(e,i);if(!A){P=this._marker(y,v,g,1.6,S,.3,.3,.12);break}let[E,R,L,O]=A.b,T=A.n[0]===0,D=A.kind==="garage",B=T?L-E:O-R,N=T?O-R:L-E,G=D?0:N/2+.09,H=(E+L)/2+A.n[0]*G,U=(R+O)/2+A.n[1]*G,W=D||A.kind==="bifold"?0:Zi,K=hn-W,$=(Et,qt,ne)=>T?new Ve(Et,qt,ne):new Ve(ne,qt,Et),at=document.createElement("canvas");at.width=8,at.height=32;let tt=at.getContext("2d");tt.fillStyle=D?l.garage:l.shutter,tt.fillRect(0,0,8,32),tt.fillStyle=D?l.garage2:l.shutter2,tt.fillRect(0,0,8,4);let it=new Ts(at);it.wrapT=Oi,it.colorSpace=Ze;let st=new Ce($(B-.04,1,.05),new ze({map:it,transparent:!0}));t.add(st),D||v(this._outlined($(B+.14,.24,.22),this._toon(l.shutterBox)),H,hn+.12,U),y.level=null,y.apply=Et=>{let qt=Math.max(0,Math.min(1,1-Et)),ne=Math.max(.02,K*qt);st.scale.y=ne,st.position.set(H,hn-ne/2,U),it.repeat.set(1,Math.max(1,Math.round(ne/(D?.4:.11)))),st.visible=qt>.015},y.set=Et=>{let qt=Et.planned?D?0:.55:Et.level;st.material.opacity=Et.planned&&!D?.45:1,y.level==null?(y.level=qt,y.apply(qt)):Math.abs(qt-y.level)>.001&&this._tween(y,qt)};let Tt=new Ce($(B,D?hn:K+.3,.5),new ze({transparent:!0,opacity:0,depthWrite:!1}));v(Tt,H,D?hn/2:W+(K+.3)/2,U),y.pick=Tt,y.anchor.set(H+A.n[0]*.2,hn+.3,U+A.n[1]*.2),y.facing=new z(A.n[0],0,A.n[1]),P=null;break}case"climate":{if(i.wall){let A=v(this._outlined(w?new Ve(.95,.5,.1):new Ve(.1,.5,.95),this._toon("#ffffff")),g,.42,S);y.set=E=>A.userData.mesh.material.color.set(E.planned?l.planned:E.active?l.heat:"#ffffff"),P=.75}else P=this._marker(y,v,g,1.35,S,.2,.26,.08,l.heat);break}case"tv":{let A=v(this._outlined(new Ve(1.3,.75,.07),x(l.dark)),g,.95,S);A.rotation.y=-Zr(i.rot||0),y.set=E=>A.userData.mesh.material.color.set(E.active?l.screen:E.planned?"#5a5f6a":l.dark),P=1.4;break}case"speaker":P=this._marker(y,v,g,.72,S,.24,.44,.24,l.play);break;case"lock":P=this._marker(y,v,g,1.05,S,.2,.26,.2,l.ok,l.bad);break;case"motion":P=this._marker(y,v,g,Math.max(1.5,s+.25),S,.26,.14,.26,l.heat);break;case"contact":P=this._marker(y,v,g,1.6,S,.16,.3,.16,l.bad,l.ok);break;case"camera":P=this._marker(y,v,g,2.15,S,.3,.2,.42,l.screen);break;default:P=this._marker(y,v,g,1.2,S,.22,.22,.22,l.ok)}if(P!=null&&y.anchor.set(g,P+.25,S),y.anchor.x+=u[0],y.anchor.z+=u[1],y.anchor.y+=t.position.y,!y.pick){let A=new Ce(new bn(.42,8,6),new ze({transparent:!0,opacity:0,depthWrite:!1}));A.position.set(y.anchor.x-u[0],y.anchor.y-t.position.y-.25,y.anchor.z-u[1]),t.add(A),y.pick=A}if(y.pick.userData.dev=y,this._pickables.push(y.pick),o){let A=document.createElement("div");A.className="chip",A.style.display="none",A.addEventListener("click",E=>{E.stopPropagation(),this._tap(y)}),this._labels.appendChild(A),y.chip=A}this._devs.push(y)}_marker(t,e,i,s,o,l,h,u,f,m="#ffffff"){let x=this.theme,p=e(this._outlined(new Ve(l,h,u),new ze({color:"#ffffff",transparent:!0})),i,s,o);return t.set=g=>{p.userData.mesh.material.color.set(g.planned?x.planned:g.active?f||x.ok:m),p.userData.mesh.material.opacity=g.planned?.8:1},s+h/2}_tween(t,e){t.from=t.level,t.to=e,t.t0=performance.now(),this._tweens.includes(t)||this._tweens.push(t)}_signature(){return!this._hass||!this._devs?"":this._devs.map(t=>{let e=t.d.entity&&this._hass.states[t.d.entity];return e?`${e.state}|${e.attributes.current_position??""}|${e.attributes.current_temperature??""}|${e.attributes.hvac_action??""}`:"-"}).join(";")}_syncDevices(){if(!this._devs)return;let t=0,e=0;for(let i of this._devs){let s=Df(i.d,this._hass);i.st=s,i.set&&i.set(s),s.planned?e++:t++,i.chip&&(i.chip.textContent=s.text,i.chip.classList.toggle("active",!!s.active),i.chip.dataset.show=s.text?"1":"")}this.shadowRoot.querySelector(".counts").textContent=this._devs.length?`${t} live, ${e} planned (grey)`:""}_pick(t,e){let i=this._renderer.domElement.getBoundingClientRect(),s=new _t((t-i.left)/i.width*2-1,-((e-i.top)/i.height)*2+1),o=new Cr;o.setFromCamera(s,this._camera);let l=o.intersectObjects(this._pickables,!1)[0];l?this._tap(l.object.userData.dev):this._toast.style.display="none"}_tap(t){let e=t.d;if((t.st||Df(e,this._hass)).planned){let o=e.nav||this._config.planned_path||"";this._say(`${e.name||e.kind}: planned, not fitted yet.${o?" Tap here for more.":""}`,o);return}let s=e.entity.split(".")[0];if((e.kind==="light"||e.kind==="switch")&&["light","switch","input_boolean","fan"].includes(s)){this._hass.callService(s,"toggle",{entity_id:e.entity});return}this._toast.style.display="none",this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e.entity}}))}_say(t,e,i=6e3){this._toast.textContent=t,this._toast.dataset.nav=e||"",this._toast.style.display="block",clearTimeout(this._toastT),this._toastT=setTimeout(()=>{this._toast.style.display="none"},i)}_navigate(t){history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}_req(){this._raf||!this._renderer||(this._raf=requestAnimationFrame(()=>{this._raf=0,this._frame()}))}_frame(){if(!this._renderer||!this._root)return;let t=performance.now();this._tweens.length&&(this._tweens=this._tweens.filter(u=>{let f=Math.min(1,(t-u.t0)/900),m=f*f*(3-2*f);return u.level=u.from+(u.to-u.from)*m,u.apply(u.level),f<1}),this._req()),this._renderer.render(this._scene,this._camera);let e=this._wrap.clientWidth,i=this._wrap.clientHeight,s=new z,o=(u,f,m)=>{s.copy(f).project(this._camera);let x=m&&s.z<1&&Math.abs(s.x)<1.05&&Math.abs(s.y)<1.05;u.style.display=x?"block":"none",x&&(u.style.left=`${(s.x+1)/2*e}px`,u.style.top=`${(1-s.y)/2*i}px`)},l=this._camera.position.distanceTo(this._controls.target)>42;for(let u of this._roomLabels)o(u.el,u.pos,!(l&&u.small));let h=this._mode==="whole";for(let u of this._devs){if(!u.chip)continue;let f=h&&u.facing&&s.copy(this._camera.position).sub(u.anchor).dot(u.facing)<=0;o(u.chip,u.anchor,!!u.chip.dataset.show&&!f)}}debug(){let t=this._renderer.domElement.getBoundingClientRect(),e=new z,i={};for(let o of this._devs)o.pick.getWorldPosition(e).project(this._camera),i[o.d.id]={x:Math.round(t.left+(e.x+1)/2*t.width),y:Math.round(t.top+(1-e.y)/2*t.height),planned:!!(o.st&&o.st.planned),text:o.st&&o.st.text,level:o.level};let s=this._renderer.info;return{mode:this._mode,calls:s.render.calls,triangles:s.render.triangles,geometries:s.memory.geometries,warnings:this._warnings,devices:i}}};customElements.get("toon-house-card")||customElements.define("toon-house-card",uh);window.customCards=window.customCards||[];window.customCards.some(n=>n.type==="toon-house-card")||window.customCards.push({type:"toon-house-card",name:"Toon House Card",description:"A cartoon 3D dollhouse of your home with live devices",preview:!1});console.info(`%c TOON-HOUSE-CARD %c ${Nx} `,"background:#FFD83A;color:#1b1b1b;font-weight:900","background:#1b1b1b;color:#fff");
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
