var cd=Object.create;var Oh=Object.defineProperty;var hd=Object.getOwnPropertyDescriptor;var ud=Object.getOwnPropertyNames;var fd=Object.getPrototypeOf,dd=Object.prototype.hasOwnProperty;var pd=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var md=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of ud(t))!dd.call(i,s)&&s!==e&&Oh(i,s,{get:()=>t[s],enumerable:!(n=hd(t,s))||n.enumerable});return i};var gd=(i,t,e)=>(e=i!=null?cd(fd(i)):{},md(t||!i||!i.__esModule?Oh(e,"default",{value:i,enumerable:!0}):e,i));var Hf=pd((OS,wl)=>{(function(){"use strict";var i={};i.version="6.4.2.2",i.use_lines=!0,i.use_xyz=!1;var t=!1;typeof wl<"u"&&wl.exports?(wl.exports=i,t=!0):(typeof define=="function"&&define.amd&&define(i),typeof document<"u"?window.ClipperLib=i:self.ClipperLib=i);var e;if(t){var n="chrome";e="Netscape"}else{var n=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var s={};n.indexOf("chrome")!=-1&&n.indexOf("chromium")==-1?s.chrome=1:s.chrome=0,n.indexOf("chromium")!=-1?s.chromium=1:s.chromium=0,n.indexOf("safari")!=-1&&n.indexOf("chrome")==-1&&n.indexOf("chromium")==-1?s.safari=1:s.safari=0,n.indexOf("firefox")!=-1?s.firefox=1:s.firefox=0,n.indexOf("firefox/17")!=-1?s.firefox17=1:s.firefox17=0,n.indexOf("firefox/15")!=-1?s.firefox15=1:s.firefox15=0,n.indexOf("firefox/3")!=-1?s.firefox3=1:s.firefox3=0,n.indexOf("opera")!=-1?s.opera=1:s.opera=0,n.indexOf("msie 10")!=-1?s.msie10=1:s.msie10=0,n.indexOf("msie 9")!=-1?s.msie9=1:s.msie9=0,n.indexOf("msie 8")!=-1?s.msie8=1:s.msie8=0,n.indexOf("msie 7")!=-1?s.msie7=1:s.msie7=0,n.indexOf("msie ")!=-1?s.msie=1:s.msie=0,i.biginteger_used=null;var o,l=0xdeadbeefcafe,h=(l&16777215)==15715070;function u(r,a,c){i.biginteger_used=1,r!=null&&(typeof r=="number"&&typeof a>"u"?this.fromInt(r):typeof r=="number"?this.fromNumber(r,a,c):a==null&&typeof r!="string"?this.fromString(r,256):this.fromString(r,a))}function f(){return new u(null,void 0,void 0)}function p(r,a,c,d,x,S){for(;--S>=0;){var I=a*this[r++]+c[d]+x;x=Math.floor(I/67108864),c[d++]=I&67108863}return x}function _(r,a,c,d,x,S){for(var I=a&32767,z=a>>15;--S>=0;){var V=this[r]&32767,$=this[r++]>>15,ht=z*V+$*I;V=I*V+((ht&32767)<<15)+c[d]+(x&1073741823),x=(V>>>30)+(ht>>>15)+z*$+(x>>>30),c[d++]=V&1073741823}return x}function m(r,a,c,d,x,S){for(var I=a&16383,z=a>>14;--S>=0;){var V=this[r]&16383,$=this[r++]>>14,ht=z*V+$*I;V=I*V+((ht&16383)<<14)+c[d]+x,x=(V>>28)+(ht>>14)+z*$,c[d++]=V&268435455}return x}h&&e=="Microsoft Internet Explorer"?(u.prototype.am=_,o=30):h&&e!="Netscape"?(u.prototype.am=p,o=26):(u.prototype.am=m,o=28),u.prototype.DB=o,u.prototype.DM=(1<<o)-1,u.prototype.DV=1<<o;var g=52;u.prototype.FV=Math.pow(2,g),u.prototype.F1=g-o,u.prototype.F2=2*o-g;var b="0123456789abcdefghijklmnopqrstuvwxyz",w=new Array,y,v;for(y=48,v=0;v<=9;++v)w[y++]=v;for(y=97,v=10;v<36;++v)w[y++]=v;for(y=65,v=10;v<36;++v)w[y++]=v;function A(r){return b.charAt(r)}function C(r,a){var c=w[r.charCodeAt(a)];return c??-1}function T(r){for(var a=this.t-1;a>=0;--a)r[a]=this[a];r.t=this.t,r.s=this.s}function R(r){this.t=1,this.s=r<0?-1:0,r>0?this[0]=r:r<-1?this[0]=r+this.DV:this.t=0}function L(r){var a=f();return a.fromInt(r),a}function O(r,a){var c;if(a==16)c=4;else if(a==8)c=3;else if(a==256)c=8;else if(a==2)c=1;else if(a==32)c=5;else if(a==4)c=2;else{this.fromRadix(r,a);return}this.t=0,this.s=0;for(var d=r.length,x=!1,S=0;--d>=0;){var I=c==8?r[d]&255:C(r,d);if(I<0){r.charAt(d)=="-"&&(x=!0);continue}x=!1,S==0?this[this.t++]=I:S+c>this.DB?(this[this.t-1]|=(I&(1<<this.DB-S)-1)<<S,this[this.t++]=I>>this.DB-S):this[this.t-1]|=I<<S,S+=c,S>=this.DB&&(S-=this.DB)}c==8&&r[0]&128&&(this.s=-1,S>0&&(this[this.t-1]|=(1<<this.DB-S)-1<<S)),this.clamp(),x&&u.ZERO.subTo(this,this)}function E(){for(var r=this.s&this.DM;this.t>0&&this[this.t-1]==r;)--this.t}function D(r){if(this.s<0)return"-"+this.negate().toString(r);var a;if(r==16)a=4;else if(r==8)a=3;else if(r==2)a=1;else if(r==32)a=5;else if(r==4)a=2;else return this.toRadix(r);var c=(1<<a)-1,d,x=!1,S="",I=this.t,z=this.DB-I*this.DB%a;if(I-- >0)for(z<this.DB&&(d=this[I]>>z)>0&&(x=!0,S=A(d));I>=0;)z<a?(d=(this[I]&(1<<z)-1)<<a-z,d|=this[--I]>>(z+=this.DB-a)):(d=this[I]>>(z-=a)&c,z<=0&&(z+=this.DB,--I)),d>0&&(x=!0),x&&(S+=A(d));return x?S:"0"}function U(){var r=f();return u.ZERO.subTo(this,r),r}function N(){return this.s<0?this.negate():this}function G(r){var a=this.s-r.s;if(a!=0)return a;var c=this.t;if(a=c-r.t,a!=0)return this.s<0?-a:a;for(;--c>=0;)if((a=this[c]-r[c])!=0)return a;return 0}function H(r){var a=1,c;return(c=r>>>16)!=0&&(r=c,a+=16),(c=r>>8)!=0&&(r=c,a+=8),(c=r>>4)!=0&&(r=c,a+=4),(c=r>>2)!=0&&(r=c,a+=2),(c=r>>1)!=0&&(r=c,a+=1),a}function B(){return this.t<=0?0:this.DB*(this.t-1)+H(this[this.t-1]^this.s&this.DM)}function W(r,a){var c;for(c=this.t-1;c>=0;--c)a[c+r]=this[c];for(c=r-1;c>=0;--c)a[c]=0;a.t=this.t+r,a.s=this.s}function K(r,a){for(var c=r;c<this.t;++c)a[c-r]=this[c];a.t=Math.max(this.t-r,0),a.s=this.s}function J(r,a){var c=r%this.DB,d=this.DB-c,x=(1<<d)-1,S=Math.floor(r/this.DB),I=this.s<<c&this.DM,z;for(z=this.t-1;z>=0;--z)a[z+S+1]=this[z]>>d|I,I=(this[z]&x)<<c;for(z=S-1;z>=0;--z)a[z]=0;a[S]=I,a.t=this.t+S+1,a.s=this.s,a.clamp()}function at(r,a){a.s=this.s;var c=Math.floor(r/this.DB);if(c>=this.t){a.t=0;return}var d=r%this.DB,x=this.DB-d,S=(1<<d)-1;a[0]=this[c]>>d;for(var I=c+1;I<this.t;++I)a[I-c-1]|=(this[I]&S)<<x,a[I-c]=this[I]>>d;d>0&&(a[this.t-c-1]|=(this.s&S)<<x),a.t=this.t-c,a.clamp()}function tt(r,a){for(var c=0,d=0,x=Math.min(r.t,this.t);c<x;)d+=this[c]-r[c],a[c++]=d&this.DM,d>>=this.DB;if(r.t<this.t){for(d-=r.s;c<this.t;)d+=this[c],a[c++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;c<r.t;)d-=r[c],a[c++]=d&this.DM,d>>=this.DB;d-=r.s}a.s=d<0?-1:0,d<-1?a[c++]=this.DV+d:d>0&&(a[c++]=d),a.t=c,a.clamp()}function nt(r,a){var c=this.abs(),d=r.abs(),x=c.t;for(a.t=x+d.t;--x>=0;)a[x]=0;for(x=0;x<d.t;++x)a[x+c.t]=c.am(0,d[x],a,x,0,c.t);a.s=0,a.clamp(),this.s!=r.s&&u.ZERO.subTo(a,a)}function st(r){for(var a=this.abs(),c=r.t=2*a.t;--c>=0;)r[c]=0;for(c=0;c<a.t-1;++c){var d=a.am(c,a[c],r,2*c,0,1);(r[c+a.t]+=a.am(c+1,2*a[c],r,2*c+1,d,a.t-c-1))>=a.DV&&(r[c+a.t]-=a.DV,r[c+a.t+1]=1)}r.t>0&&(r[r.t-1]+=a.am(c,a[c],r,2*c,0,1)),r.s=0,r.clamp()}function Tt(r,a,c){var d=r.abs();if(!(d.t<=0)){var x=this.abs();if(x.t<d.t){a?.fromInt(0),c!=null&&this.copyTo(c);return}c==null&&(c=f());var S=f(),I=this.s,z=r.s,V=this.DB-H(d[d.t-1]);V>0?(d.lShiftTo(V,S),x.lShiftTo(V,c)):(d.copyTo(S),x.copyTo(c));var $=S.t,ht=S[$-1];if(ht!=0){var ct=ht*(1<<this.F1)+($>1?S[$-2]>>this.F2:0),gt=this.FV/ct,Wt=(1<<this.F1)/ct,oe=1<<this.F2,he=c.t,Ce=he-$,ci=a??f();for(S.dlShiftTo(Ce,ci),c.compareTo(ci)>=0&&(c[c.t++]=1,c.subTo(ci,c)),u.ONE.dlShiftTo($,ci),ci.subTo(S,S);S.t<$;)S[S.t++]=0;for(;--Ce>=0;){var ki=c[--he]==ht?this.DM:Math.floor(c[he]*gt+(c[he-1]+oe)*Wt);if((c[he]+=S.am(0,ki,c,Ce,0,$))<ki)for(S.dlShiftTo(Ce,ci),c.subTo(ci,c);c[he]<--ki;)c.subTo(ci,c)}a!=null&&(c.drShiftTo($,a),I!=z&&u.ZERO.subTo(a,a)),c.t=$,c.clamp(),V>0&&c.rShiftTo(V,c),I<0&&u.ZERO.subTo(c,c)}}}function Et(r){var a=f();return this.abs().divRemTo(r,null,a),this.s<0&&a.compareTo(u.ZERO)>0&&r.subTo(a,a),a}function $t(r){this.m=r}function ne(r){return r.s<0||r.compareTo(this.m)>=0?r.mod(this.m):r}function me(r){return r}function lt(r){r.divRemTo(this.m,null,r)}function dt(r,a,c){r.multiplyTo(a,c),this.reduce(c)}function Nt(r,a){r.squareTo(a),this.reduce(a)}$t.prototype.convert=ne,$t.prototype.revert=me,$t.prototype.reduce=lt,$t.prototype.mulTo=dt,$t.prototype.sqrTo=Nt;function jt(){if(this.t<1)return 0;var r=this[0];if(!(r&1))return 0;var a=r&3;return a=a*(2-(r&15)*a)&15,a=a*(2-(r&255)*a)&255,a=a*(2-((r&65535)*a&65535))&65535,a=a*(2-r*a%this.DV)%this.DV,a>0?this.DV-a:-a}function Ft(r){this.m=r,this.mp=r.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<r.DB-15)-1,this.mt2=2*r.t}function te(r){var a=f();return r.abs().dlShiftTo(this.m.t,a),a.divRemTo(this.m,null,a),r.s<0&&a.compareTo(u.ZERO)>0&&this.m.subTo(a,a),a}function be(r){var a=f();return r.copyTo(a),this.reduce(a),a}function pt(r){for(;r.t<=this.mt2;)r[r.t++]=0;for(var a=0;a<this.m.t;++a){var c=r[a]&32767,d=c*this.mpl+((c*this.mph+(r[a]>>15)*this.mpl&this.um)<<15)&r.DM;for(c=a+this.m.t,r[c]+=this.m.am(0,d,r,a,0,this.m.t);r[c]>=r.DV;)r[c]-=r.DV,r[++c]++}r.clamp(),r.drShiftTo(this.m.t,r),r.compareTo(this.m)>=0&&r.subTo(this.m,r)}function xt(r,a){r.squareTo(a),this.reduce(a)}function yt(r,a,c){r.multiplyTo(a,c),this.reduce(c)}Ft.prototype.convert=te,Ft.prototype.revert=be,Ft.prototype.reduce=pt,Ft.prototype.mulTo=yt,Ft.prototype.sqrTo=xt;function vt(){return(this.t>0?this[0]&1:this.s)==0}function Mt(r,a){if(r>4294967295||r<1)return u.ONE;var c=f(),d=f(),x=a.convert(this),S=H(r)-1;for(x.copyTo(c);--S>=0;)if(a.sqrTo(c,d),(r&1<<S)>0)a.mulTo(d,x,c);else{var I=c;c=d,d=I}return a.revert(c)}function Kt(r,a){var c;return r<256||a.isEven()?c=new $t(a):c=new Ft(a),this.exp(r,c)}u.prototype.copyTo=T,u.prototype.fromInt=R,u.prototype.fromString=O,u.prototype.clamp=E,u.prototype.dlShiftTo=W,u.prototype.drShiftTo=K,u.prototype.lShiftTo=J,u.prototype.rShiftTo=at,u.prototype.subTo=tt,u.prototype.multiplyTo=nt,u.prototype.squareTo=st,u.prototype.divRemTo=Tt,u.prototype.invDigit=jt,u.prototype.isEven=vt,u.prototype.exp=Mt,u.prototype.toString=D,u.prototype.negate=U,u.prototype.abs=N,u.prototype.compareTo=G,u.prototype.bitLength=B,u.prototype.mod=Et,u.prototype.modPowInt=Kt,u.ZERO=L(0),u.ONE=L(1);function Zt(){var r=f();return this.copyTo(r),r}function ee(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function se(){return this.t==0?this.s:this[0]<<24>>24}function X(){return this.t==0?this.s:this[0]<<16>>16}function xe(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function fe(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function F(r){if(r==null&&(r=10),this.signum()==0||r<2||r>36)return"0";var a=this.chunkSize(r),c=Math.pow(r,a),d=L(c),x=f(),S=f(),I="";for(this.divRemTo(d,x,S);x.signum()>0;)I=(c+S.intValue()).toString(r).substr(1)+I,x.divRemTo(d,x,S);return S.intValue().toString(r)+I}function M(r,a){this.fromInt(0),a==null&&(a=10);for(var c=this.chunkSize(a),d=Math.pow(a,c),x=!1,S=0,I=0,z=0;z<r.length;++z){var V=C(r,z);if(V<0){r.charAt(z)=="-"&&this.signum()==0&&(x=!0);continue}I=a*I+V,++S>=c&&(this.dMultiply(d),this.dAddOffset(I,0),S=0,I=0)}S>0&&(this.dMultiply(Math.pow(a,S)),this.dAddOffset(I,0)),x&&u.ZERO.subTo(this,this)}function Z(r,a,c){if(typeof a=="number")if(r<2)this.fromInt(1);else for(this.fromNumber(r,c),this.testBit(r-1)||this.bitwiseTo(u.ONE.shiftLeft(r-1),Gt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(a);)this.dAddOffset(2,0),this.bitLength()>r&&this.subTo(u.ONE.shiftLeft(r-1),this);else{var d=new Array,x=r&7;d.length=(r>>3)+1,a.nextBytes(d),x>0?d[0]&=(1<<x)-1:d[0]=0,this.fromString(d,256)}}function et(){var r=this.t,a=new Array;a[0]=this.s;var c=this.DB-r*this.DB%8,d,x=0;if(r-- >0)for(c<this.DB&&(d=this[r]>>c)!=(this.s&this.DM)>>c&&(a[x++]=d|this.s<<this.DB-c);r>=0;)c<8?(d=(this[r]&(1<<c)-1)<<8-c,d|=this[--r]>>(c+=this.DB-8)):(d=this[r]>>(c-=8)&255,c<=0&&(c+=this.DB,--r)),d&128&&(d|=-256),x==0&&(this.s&128)!=(d&128)&&++x,(x>0||d!=this.s)&&(a[x++]=d);return a}function rt(r){return this.compareTo(r)==0}function bt(r){return this.compareTo(r)<0?this:r}function St(r){return this.compareTo(r)>0?this:r}function ot(r,a,c){var d,x,S=Math.min(r.t,this.t);for(d=0;d<S;++d)c[d]=a(this[d],r[d]);if(r.t<this.t){for(x=r.s&this.DM,d=S;d<this.t;++d)c[d]=a(this[d],x);c.t=this.t}else{for(x=this.s&this.DM,d=S;d<r.t;++d)c[d]=a(x,r[d]);c.t=r.t}c.s=a(this.s,r.s),c.clamp()}function ft(r,a){return r&a}function Pt(r){var a=f();return this.bitwiseTo(r,ft,a),a}function Gt(r,a){return r|a}function Dt(r){var a=f();return this.bitwiseTo(r,Gt,a),a}function At(r,a){return r^a}function Xt(r){var a=f();return this.bitwiseTo(r,At,a),a}function Jt(r,a){return r&~a}function le(r){var a=f();return this.bitwiseTo(r,Jt,a),a}function q(){for(var r=f(),a=0;a<this.t;++a)r[a]=this.DM&~this[a];return r.t=this.t,r.s=~this.s,r}function It(r){var a=f();return r<0?this.rShiftTo(-r,a):this.lShiftTo(r,a),a}function ut(r){var a=f();return r<0?this.lShiftTo(-r,a):this.rShiftTo(r,a),a}function Rt(r){if(r==0)return-1;var a=0;return r&65535||(r>>=16,a+=16),r&255||(r>>=8,a+=8),r&15||(r>>=4,a+=4),r&3||(r>>=2,a+=2),r&1||++a,a}function Ut(){for(var r=0;r<this.t;++r)if(this[r]!=0)return r*this.DB+Rt(this[r]);return this.s<0?this.t*this.DB:-1}function mt(r){for(var a=0;r!=0;)r&=r-1,++a;return a}function qt(){for(var r=0,a=this.s&this.DM,c=0;c<this.t;++c)r+=mt(this[c]^a);return r}function Vt(r){var a=Math.floor(r/this.DB);return a>=this.t?this.s!=0:(this[a]&1<<r%this.DB)!=0}function Ee(r,a){var c=u.ONE.shiftLeft(r);return this.bitwiseTo(c,a,c),c}function ye(r){return this.changeBit(r,Gt)}function mi(r){return this.changeBit(r,Jt)}function wi(r){return this.changeBit(r,At)}function Ol(r,a){for(var c=0,d=0,x=Math.min(r.t,this.t);c<x;)d+=this[c]+r[c],a[c++]=d&this.DM,d>>=this.DB;if(r.t<this.t){for(d+=r.s;c<this.t;)d+=this[c],a[c++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;c<r.t;)d+=r[c],a[c++]=d&this.DM,d>>=this.DB;d+=r.s}a.s=d<0?-1:0,d>0?a[c++]=d:d<-1&&(a[c++]=this.DV+d),a.t=c,a.clamp()}function Bl(r){var a=f();return this.addTo(r,a),a}function so(r){var a=f();return this.subTo(r,a),a}function Ks(r){var a=f();return this.multiplyTo(r,a),a}function Ul(){var r=f();return this.squareTo(r),r}function ro(r){var a=f();return this.divRemTo(r,a,null),a}function oo(r){var a=f();return this.divRemTo(r,null,a),a}function Ki(r){var a=f(),c=f();return this.divRemTo(r,a,c),new Array(a,c)}function js(r){this[this.t]=this.am(0,r-1,this,0,0,this.t),++this.t,this.clamp()}function ao(r,a){if(r!=0){for(;this.t<=a;)this[this.t++]=0;for(this[a]+=r;this[a]>=this.DV;)this[a]-=this.DV,++a>=this.t&&(this[this.t++]=0),++this[a]}}function hn(){}function On(r){return r}function lo(r,a,c){r.multiplyTo(a,c)}function is(r,a){r.squareTo(a)}hn.prototype.convert=On,hn.prototype.revert=On,hn.prototype.mulTo=lo,hn.prototype.sqrTo=is;function co(r){return this.exp(r,new hn)}function ho(r,a,c){var d=Math.min(this.t+r.t,a);for(c.s=0,c.t=d;d>0;)c[--d]=0;var x;for(x=c.t-this.t;d<x;++d)c[d+this.t]=this.am(0,r[d],c,d,0,this.t);for(x=Math.min(r.t,a);d<x;++d)this.am(0,r[d],c,d,0,a-d);c.clamp()}function kl(r,a,c){--a;var d=c.t=this.t+r.t-a;for(c.s=0;--d>=0;)c[d]=0;for(d=Math.max(a-this.t,0);d<r.t;++d)c[this.t+d-a]=this.am(a-d,r[d],c,0,0,this.t+d-a);c.clamp(),c.drShiftTo(1,c)}function un(r){this.r2=f(),this.q3=f(),u.ONE.dlShiftTo(2*r.t,this.r2),this.mu=this.r2.divide(r),this.m=r}function zl(r){if(r.s<0||r.t>2*this.m.t)return r.mod(this.m);if(r.compareTo(this.m)<0)return r;var a=f();return r.copyTo(a),this.reduce(a),a}function Vl(r){return r}function uo(r){for(r.drShiftTo(this.m.t-1,this.r2),r.t>this.m.t+1&&(r.t=this.m.t+1,r.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);r.compareTo(this.r2)<0;)r.dAddOffset(1,this.m.t+1);for(r.subTo(this.r2,r);r.compareTo(this.m)>=0;)r.subTo(this.m,r)}function P(r,a){r.squareTo(a),this.reduce(a)}function Y(r,a,c){r.multiplyTo(a,c),this.reduce(c)}un.prototype.convert=zl,un.prototype.revert=Vl,un.prototype.reduce=uo,un.prototype.mulTo=Y,un.prototype.sqrTo=P;function it(r,a){var c=r.bitLength(),d,x=L(1),S;if(c<=0)return x;c<18?d=1:c<48?d=3:c<144?d=4:c<768?d=5:d=6,c<8?S=new $t(a):a.isEven()?S=new un(a):S=new Ft(a);var I=new Array,z=3,V=d-1,$=(1<<d)-1;if(I[1]=S.convert(this),d>1){var ht=f();for(S.sqrTo(I[1],ht);z<=$;)I[z]=f(),S.mulTo(ht,I[z-2],I[z]),z+=2}var ct=r.t-1,gt,Wt=!0,oe=f(),he;for(c=H(r[ct])-1;ct>=0;){for(c>=V?gt=r[ct]>>c-V&$:(gt=(r[ct]&(1<<c+1)-1)<<V-c,ct>0&&(gt|=r[ct-1]>>this.DB+c-V)),z=d;!(gt&1);)gt>>=1,--z;if((c-=z)<0&&(c+=this.DB,--ct),Wt)I[gt].copyTo(x),Wt=!1;else{for(;z>1;)S.sqrTo(x,oe),S.sqrTo(oe,x),z-=2;z>0?S.sqrTo(x,oe):(he=x,x=oe,oe=he),S.mulTo(oe,I[gt],x)}for(;ct>=0&&!(r[ct]&1<<c);)S.sqrTo(x,oe),he=x,x=oe,oe=he,--c<0&&(c=this.DB-1,--ct)}return S.revert(x)}function j(r){var a=this.s<0?this.negate():this.clone(),c=r.s<0?r.negate():r.clone();if(a.compareTo(c)<0){var d=a;a=c,c=d}var x=a.getLowestSetBit(),S=c.getLowestSetBit();if(S<0)return a;for(x<S&&(S=x),S>0&&(a.rShiftTo(S,a),c.rShiftTo(S,c));a.signum()>0;)(x=a.getLowestSetBit())>0&&a.rShiftTo(x,a),(x=c.getLowestSetBit())>0&&c.rShiftTo(x,c),a.compareTo(c)>=0?(a.subTo(c,a),a.rShiftTo(1,a)):(c.subTo(a,c),c.rShiftTo(1,c));return S>0&&c.lShiftTo(S,c),c}function Q(r){if(r<=0)return 0;var a=this.DV%r,c=this.s<0?r-1:0;if(this.t>0)if(a==0)c=this[0]%r;else for(var d=this.t-1;d>=0;--d)c=(a*c+this[d])%r;return c}function Bt(r){var a=r.isEven();if(this.isEven()&&a||r.signum()==0)return u.ZERO;for(var c=r.clone(),d=this.clone(),x=L(1),S=L(0),I=L(0),z=L(1);c.signum()!=0;){for(;c.isEven();)c.rShiftTo(1,c),a?((!x.isEven()||!S.isEven())&&(x.addTo(this,x),S.subTo(r,S)),x.rShiftTo(1,x)):S.isEven()||S.subTo(r,S),S.rShiftTo(1,S);for(;d.isEven();)d.rShiftTo(1,d),a?((!I.isEven()||!z.isEven())&&(I.addTo(this,I),z.subTo(r,z)),I.rShiftTo(1,I)):z.isEven()||z.subTo(r,z),z.rShiftTo(1,z);c.compareTo(d)>=0?(c.subTo(d,c),a&&x.subTo(I,x),S.subTo(z,S)):(d.subTo(c,d),a&&I.subTo(x,I),z.subTo(S,z))}if(d.compareTo(u.ONE)!=0)return u.ZERO;if(z.compareTo(r)>=0)return z.subtract(r);if(z.signum()<0)z.addTo(r,z);else return z;return z.signum()<0?z.add(r):z}var wt=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Ot=(1<<26)/wt[wt.length-1];function kt(r){var a,c=this.abs();if(c.t==1&&c[0]<=wt[wt.length-1]){for(a=0;a<wt.length;++a)if(c[0]==wt[a])return!0;return!1}if(c.isEven())return!1;for(a=1;a<wt.length;){for(var d=wt[a],x=a+1;x<wt.length&&d<Ot;)d*=wt[x++];for(d=c.modInt(d);a<x;)if(d%wt[a++]==0)return!1}return c.millerRabin(r)}function Ht(r){var a=this.subtract(u.ONE),c=a.getLowestSetBit();if(c<=0)return!1;var d=a.shiftRight(c);r=r+1>>1,r>wt.length&&(r=wt.length);for(var x=f(),S=0;S<r;++S){x.fromInt(wt[Math.floor(Math.random()*wt.length)]);var I=x.modPow(d,this);if(I.compareTo(u.ONE)!=0&&I.compareTo(a)!=0){for(var z=1;z++<c&&I.compareTo(a)!=0;)if(I=I.modPowInt(2,this),I.compareTo(u.ONE)==0)return!1;if(I.compareTo(a)!=0)return!1}}return!0}u.prototype.chunkSize=xe,u.prototype.toRadix=F,u.prototype.fromRadix=M,u.prototype.fromNumber=Z,u.prototype.bitwiseTo=ot,u.prototype.changeBit=Ee,u.prototype.addTo=Ol,u.prototype.dMultiply=js,u.prototype.dAddOffset=ao,u.prototype.multiplyLowerTo=ho,u.prototype.multiplyUpperTo=kl,u.prototype.modInt=Q,u.prototype.millerRabin=Ht,u.prototype.clone=Zt,u.prototype.intValue=ee,u.prototype.byteValue=se,u.prototype.shortValue=X,u.prototype.signum=fe,u.prototype.toByteArray=et,u.prototype.equals=rt,u.prototype.min=bt,u.prototype.max=St,u.prototype.and=Pt,u.prototype.or=Dt,u.prototype.xor=Xt,u.prototype.andNot=le,u.prototype.not=q,u.prototype.shiftLeft=It,u.prototype.shiftRight=ut,u.prototype.getLowestSetBit=Ut,u.prototype.bitCount=qt,u.prototype.testBit=Vt,u.prototype.setBit=ye,u.prototype.clearBit=mi,u.prototype.flipBit=wi,u.prototype.add=Bl,u.prototype.subtract=so,u.prototype.multiply=Ks,u.prototype.divide=ro,u.prototype.remainder=oo,u.prototype.divideAndRemainder=Ki,u.prototype.modPow=it,u.prototype.modInverse=Bt,u.prototype.pow=co,u.prototype.gcd=j,u.prototype.isProbablePrime=kt,u.prototype.square=Ul;var Lt=u;Lt.prototype.IsNegative=function(){return this.compareTo(Lt.ZERO)==-1},Lt.op_Equality=function(r,a){return r.compareTo(a)==0},Lt.op_Inequality=function(r,a){return r.compareTo(a)!=0},Lt.op_GreaterThan=function(r,a){return r.compareTo(a)>0},Lt.op_LessThan=function(r,a){return r.compareTo(a)<0},Lt.op_Addition=function(r,a){return new Lt(r,void 0,void 0).add(new Lt(a,void 0,void 0))},Lt.op_Subtraction=function(r,a){return new Lt(r,void 0,void 0).subtract(new Lt(a,void 0,void 0))},Lt.Int128Mul=function(r,a){return new Lt(r,void 0,void 0).multiply(new Lt(a,void 0,void 0))},Lt.op_Division=function(r,a){return r.divide(a)},Lt.prototype.ToDouble=function(){return parseFloat(this.toString())};var ce=function(r,a){var c;if(typeof Object.getOwnPropertyNames>"u"){for(c in a.prototype)(typeof r.prototype[c]>"u"||r.prototype[c]===Object.prototype[c])&&(r.prototype[c]=a.prototype[c]);for(c in a)typeof r[c]>"u"&&(r[c]=a[c]);r.$baseCtor=a}else{for(var d=Object.getOwnPropertyNames(a.prototype),x=0;x<d.length;x++)typeof Object.getOwnPropertyDescriptor(r.prototype,d[x])>"u"&&Object.defineProperty(r.prototype,d[x],Object.getOwnPropertyDescriptor(a.prototype,d[x]));for(c in a)typeof r[c]>"u"&&(r[c]=a[c]);r.$baseCtor=a}};i.Path=function(){return[]},i.Path.prototype.push=Array.prototype.push,i.Paths=function(){return[]},i.Paths.prototype.push=Array.prototype.push,i.DoublePoint=function(){var r=arguments;this.X=0,this.Y=0,r.length===1?(this.X=r[0].X,this.Y=r[0].Y):r.length===2&&(this.X=r[0],this.Y=r[1])},i.DoublePoint0=function(){this.X=0,this.Y=0},i.DoublePoint0.prototype=i.DoublePoint.prototype,i.DoublePoint1=function(r){this.X=r.X,this.Y=r.Y},i.DoublePoint1.prototype=i.DoublePoint.prototype,i.DoublePoint2=function(r,a){this.X=r,this.Y=a},i.DoublePoint2.prototype=i.DoublePoint.prototype,i.PolyNode=function(){this.m_Parent=null,this.m_polygon=new i.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},i.PolyNode.prototype.IsHoleNode=function(){for(var r=!0,a=this.m_Parent;a!==null;)r=!r,a=a.m_Parent;return r},i.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},i.PolyNode.prototype.Contour=function(){return this.m_polygon},i.PolyNode.prototype.AddChild=function(r){var a=this.m_Childs.length;this.m_Childs.push(r),r.m_Parent=this,r.m_Index=a},i.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},i.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},i.PolyNode.prototype.Childs=function(){return this.m_Childs},i.PolyNode.prototype.Parent=function(){return this.m_Parent},i.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},i.PolyTree=function(){this.m_AllPolys=[],i.PolyNode.call(this)},i.PolyTree.prototype.Clear=function(){for(var r=0,a=this.m_AllPolys.length;r<a;r++)this.m_AllPolys[r]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},i.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},i.PolyTree.prototype.Total=function(){var r=this.m_AllPolys.length;return r>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&r--,r},ce(i.PolyTree,i.PolyNode),i.Math_Abs_Int64=i.Math_Abs_Int32=i.Math_Abs_Double=function(r){return Math.abs(r)},i.Math_Max_Int32_Int32=function(r,a){return Math.max(r,a)},s.msie||s.opera||s.safari?i.Cast_Int32=function(r){return r|0}:i.Cast_Int32=function(r){return~~r},typeof Number.toInteger>"u"&&(Number.toInteger=null),s.chrome?i.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):~~r}:s.firefox&&typeof Number.toInteger=="function"?i.Cast_Int64=function(r){return Number.toInteger(r)}:s.msie7||s.msie8?i.Cast_Int64=function(r){return parseInt(r,10)}:s.msie?i.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):r|0}:i.Cast_Int64=function(r){return r<0?Math.ceil(r):Math.floor(r)},i.Clear=function(r){r.length=0},i.PI=3.141592653589793,i.PI2=2*3.141592653589793,i.IntPoint=function(){var r=arguments,a=r.length;if(this.X=0,this.Y=0,i.use_xyz)if(this.Z=0,a===3)this.X=r[0],this.Y=r[1],this.Z=r[2];else if(a===2)this.X=r[0],this.Y=r[1],this.Z=0;else if(a===1)if(r[0]instanceof i.DoublePoint){var c=r[0];this.X=i.Clipper.Round(c.X),this.Y=i.Clipper.Round(c.Y),this.Z=0}else{var d=r[0];typeof d.Z>"u"&&(d.Z=0),this.X=d.X,this.Y=d.Y,this.Z=d.Z}else this.X=0,this.Y=0,this.Z=0;else if(a===2)this.X=r[0],this.Y=r[1];else if(a===1)if(r[0]instanceof i.DoublePoint){var c=r[0];this.X=i.Clipper.Round(c.X),this.Y=i.Clipper.Round(c.Y)}else{var d=r[0];this.X=d.X,this.Y=d.Y}else this.X=0,this.Y=0},i.IntPoint.op_Equality=function(r,a){return r.X===a.X&&r.Y===a.Y},i.IntPoint.op_Inequality=function(r,a){return r.X!==a.X||r.Y!==a.Y},i.IntPoint0=function(){this.X=0,this.Y=0,i.use_xyz&&(this.Z=0)},i.IntPoint0.prototype=i.IntPoint.prototype,i.IntPoint1=function(r){this.X=r.X,this.Y=r.Y,i.use_xyz&&(typeof r.Z>"u"?this.Z=0:this.Z=r.Z)},i.IntPoint1.prototype=i.IntPoint.prototype,i.IntPoint1dp=function(r){this.X=i.Clipper.Round(r.X),this.Y=i.Clipper.Round(r.Y),i.use_xyz&&(this.Z=0)},i.IntPoint1dp.prototype=i.IntPoint.prototype,i.IntPoint2=function(r,a,c){this.X=r,this.Y=a,i.use_xyz&&(typeof c>"u"?this.Z=0:this.Z=c)},i.IntPoint2.prototype=i.IntPoint.prototype,i.IntRect=function(){var r=arguments,a=r.length;if(a===4)this.left=r[0],this.top=r[1],this.right=r[2],this.bottom=r[3];else if(a===1){var c=r[0];this.left=c.left,this.top=c.top,this.right=c.right,this.bottom=c.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},i.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},i.IntRect0.prototype=i.IntRect.prototype,i.IntRect1=function(r){this.left=r.left,this.top=r.top,this.right=r.right,this.bottom=r.bottom},i.IntRect1.prototype=i.IntRect.prototype,i.IntRect4=function(r,a,c,d){this.left=r,this.top=a,this.right=c,this.bottom=d},i.IntRect4.prototype=i.IntRect.prototype,i.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},i.PolyType={ptSubject:0,ptClip:1},i.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},i.JoinType={jtSquare:0,jtRound:1,jtMiter:2},i.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},i.EdgeSide={esLeft:0,esRight:1},i.Direction={dRightToLeft:0,dLeftToRight:1},i.TEdge=function(){this.Bot=new i.IntPoint0,this.Curr=new i.IntPoint0,this.Top=new i.IntPoint0,this.Delta=new i.IntPoint0,this.Dx=0,this.PolyTyp=i.PolyType.ptSubject,this.Side=i.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},i.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new i.IntPoint0},i.MyIntersectNodeSort=function(){},i.MyIntersectNodeSort.Compare=function(r,a){var c=a.Pt.Y-r.Pt.Y;return c>0?1:c<0?-1:0},i.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},i.Scanbeam=function(){this.Y=0,this.Next=null},i.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},i.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},i.OutPt=function(){this.Idx=0,this.Pt=new i.IntPoint0,this.Next=null,this.Prev=null},i.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new i.IntPoint0},i.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},i.ClipperBase.horizontal=-9007199254740992,i.ClipperBase.Skip=-2,i.ClipperBase.Unassigned=-1,i.ClipperBase.tolerance=1e-20,i.ClipperBase.loRange=47453132,i.ClipperBase.hiRange=0xfffffffffffff,i.ClipperBase.near_zero=function(r){return r>-i.ClipperBase.tolerance&&r<i.ClipperBase.tolerance},i.ClipperBase.IsHorizontal=function(r){return r.Delta.Y===0},i.ClipperBase.prototype.PointIsVertex=function(r,a){var c=a;do{if(i.IntPoint.op_Equality(c.Pt,r))return!0;c=c.Next}while(c!==a);return!1},i.ClipperBase.prototype.PointOnLineSegment=function(r,a,c,d){return d?r.X===a.X&&r.Y===a.Y||r.X===c.X&&r.Y===c.Y||r.X>a.X==r.X<c.X&&r.Y>a.Y==r.Y<c.Y&&Lt.op_Equality(Lt.Int128Mul(r.X-a.X,c.Y-a.Y),Lt.Int128Mul(c.X-a.X,r.Y-a.Y)):r.X===a.X&&r.Y===a.Y||r.X===c.X&&r.Y===c.Y||r.X>a.X==r.X<c.X&&r.Y>a.Y==r.Y<c.Y&&(r.X-a.X)*(c.Y-a.Y)===(c.X-a.X)*(r.Y-a.Y)},i.ClipperBase.prototype.PointOnPolygon=function(r,a,c){for(var d=a;;){if(this.PointOnLineSegment(r,d.Pt,d.Next.Pt,c))return!0;if(d=d.Next,d===a)break}return!1},i.ClipperBase.prototype.SlopesEqual=i.ClipperBase.SlopesEqual=function(){var r=arguments,a=r.length,c,d,x,S,I,z,V;return a===3?(c=r[0],d=r[1],V=r[2],V?Lt.op_Equality(Lt.Int128Mul(c.Delta.Y,d.Delta.X),Lt.Int128Mul(c.Delta.X,d.Delta.Y)):i.Cast_Int64(c.Delta.Y*d.Delta.X)===i.Cast_Int64(c.Delta.X*d.Delta.Y)):a===4?(x=r[0],S=r[1],I=r[2],V=r[3],V?Lt.op_Equality(Lt.Int128Mul(x.Y-S.Y,S.X-I.X),Lt.Int128Mul(x.X-S.X,S.Y-I.Y)):i.Cast_Int64((x.Y-S.Y)*(S.X-I.X))-i.Cast_Int64((x.X-S.X)*(S.Y-I.Y))===0):(x=r[0],S=r[1],I=r[2],z=r[3],V=r[4],V?Lt.op_Equality(Lt.Int128Mul(x.Y-S.Y,I.X-z.X),Lt.Int128Mul(x.X-S.X,I.Y-z.Y)):i.Cast_Int64((x.Y-S.Y)*(I.X-z.X))-i.Cast_Int64((x.X-S.X)*(I.Y-z.Y))===0)},i.ClipperBase.SlopesEqual3=function(r,a,c){return c?Lt.op_Equality(Lt.Int128Mul(r.Delta.Y,a.Delta.X),Lt.Int128Mul(r.Delta.X,a.Delta.Y)):i.Cast_Int64(r.Delta.Y*a.Delta.X)===i.Cast_Int64(r.Delta.X*a.Delta.Y)},i.ClipperBase.SlopesEqual4=function(r,a,c,d){return d?Lt.op_Equality(Lt.Int128Mul(r.Y-a.Y,a.X-c.X),Lt.Int128Mul(r.X-a.X,a.Y-c.Y)):i.Cast_Int64((r.Y-a.Y)*(a.X-c.X))-i.Cast_Int64((r.X-a.X)*(a.Y-c.Y))===0},i.ClipperBase.SlopesEqual5=function(r,a,c,d,x){return x?Lt.op_Equality(Lt.Int128Mul(r.Y-a.Y,c.X-d.X),Lt.Int128Mul(r.X-a.X,c.Y-d.Y)):i.Cast_Int64((r.Y-a.Y)*(c.X-d.X))-i.Cast_Int64((r.X-a.X)*(c.Y-d.Y))===0},i.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var r=0,a=this.m_edges.length;r<a;++r){for(var c=0,d=this.m_edges[r].length;c<d;++c)this.m_edges[r][c]=null;i.Clear(this.m_edges[r])}i.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},i.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var r=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=r}this.m_CurrentLM=null},i.ClipperBase.prototype.RangeTest=function(r,a){a.Value?(r.X>i.ClipperBase.hiRange||r.Y>i.ClipperBase.hiRange||-r.X>i.ClipperBase.hiRange||-r.Y>i.ClipperBase.hiRange)&&i.Error("Coordinate outside allowed range in RangeTest()."):(r.X>i.ClipperBase.loRange||r.Y>i.ClipperBase.loRange||-r.X>i.ClipperBase.loRange||-r.Y>i.ClipperBase.loRange)&&(a.Value=!0,this.RangeTest(r,a))},i.ClipperBase.prototype.InitEdge=function(r,a,c,d){r.Next=a,r.Prev=c,r.Curr.X=d.X,r.Curr.Y=d.Y,i.use_xyz&&(r.Curr.Z=d.Z),r.OutIdx=-1},i.ClipperBase.prototype.InitEdge2=function(r,a){r.Curr.Y>=r.Next.Curr.Y?(r.Bot.X=r.Curr.X,r.Bot.Y=r.Curr.Y,i.use_xyz&&(r.Bot.Z=r.Curr.Z),r.Top.X=r.Next.Curr.X,r.Top.Y=r.Next.Curr.Y,i.use_xyz&&(r.Top.Z=r.Next.Curr.Z)):(r.Top.X=r.Curr.X,r.Top.Y=r.Curr.Y,i.use_xyz&&(r.Top.Z=r.Curr.Z),r.Bot.X=r.Next.Curr.X,r.Bot.Y=r.Next.Curr.Y,i.use_xyz&&(r.Bot.Z=r.Next.Curr.Z)),this.SetDx(r),r.PolyTyp=a},i.ClipperBase.prototype.FindNextLocMin=function(r){for(var a;;){for(;i.IntPoint.op_Inequality(r.Bot,r.Prev.Bot)||i.IntPoint.op_Equality(r.Curr,r.Top);)r=r.Next;if(r.Dx!==i.ClipperBase.horizontal&&r.Prev.Dx!==i.ClipperBase.horizontal)break;for(;r.Prev.Dx===i.ClipperBase.horizontal;)r=r.Prev;for(a=r;r.Dx===i.ClipperBase.horizontal;)r=r.Next;if(r.Top.Y!==r.Prev.Bot.Y){a.Prev.Bot.X<r.Bot.X&&(r=a);break}}return r},i.ClipperBase.prototype.ProcessBound=function(r,a){var c,d=r,x;if(d.OutIdx===i.ClipperBase.Skip){if(r=d,a){for(;r.Top.Y===r.Next.Bot.Y;)r=r.Next;for(;r!==d&&r.Dx===i.ClipperBase.horizontal;)r=r.Prev}else{for(;r.Top.Y===r.Prev.Bot.Y;)r=r.Prev;for(;r!==d&&r.Dx===i.ClipperBase.horizontal;)r=r.Next}if(r===d)a?d=r.Next:d=r.Prev;else{a?r=d.Next:r=d.Prev;var S=new i.LocalMinima;S.Next=null,S.Y=r.Bot.Y,S.LeftBound=null,S.RightBound=r,r.WindDelta=0,d=this.ProcessBound(r,a),this.InsertLocalMinima(S)}return d}if(r.Dx===i.ClipperBase.horizontal&&(a?c=r.Prev:c=r.Next,c.Dx===i.ClipperBase.horizontal?c.Bot.X!==r.Bot.X&&c.Top.X!==r.Bot.X&&this.ReverseHorizontal(r):c.Bot.X!==r.Bot.X&&this.ReverseHorizontal(r)),c=r,a){for(;d.Top.Y===d.Next.Bot.Y&&d.Next.OutIdx!==i.ClipperBase.Skip;)d=d.Next;if(d.Dx===i.ClipperBase.horizontal&&d.Next.OutIdx!==i.ClipperBase.Skip){for(x=d;x.Prev.Dx===i.ClipperBase.horizontal;)x=x.Prev;x.Prev.Top.X>d.Next.Top.X&&(d=x.Prev)}for(;r!==d;)r.NextInLML=r.Next,r.Dx===i.ClipperBase.horizontal&&r!==c&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),r=r.Next;r.Dx===i.ClipperBase.horizontal&&r!==c&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),d=d.Next}else{for(;d.Top.Y===d.Prev.Bot.Y&&d.Prev.OutIdx!==i.ClipperBase.Skip;)d=d.Prev;if(d.Dx===i.ClipperBase.horizontal&&d.Prev.OutIdx!==i.ClipperBase.Skip){for(x=d;x.Next.Dx===i.ClipperBase.horizontal;)x=x.Next;(x.Next.Top.X===d.Prev.Top.X||x.Next.Top.X>d.Prev.Top.X)&&(d=x.Next)}for(;r!==d;)r.NextInLML=r.Prev,r.Dx===i.ClipperBase.horizontal&&r!==c&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),r=r.Prev;r.Dx===i.ClipperBase.horizontal&&r!==c&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),d=d.Prev}return d},i.ClipperBase.prototype.AddPath=function(r,a,c){i.use_lines?!c&&a===i.PolyType.ptClip&&i.Error("AddPath: Open paths must be subject."):c||i.Error("AddPath: Open paths have been disabled.");var d=r.length-1;if(c)for(;d>0&&i.IntPoint.op_Equality(r[d],r[0]);)--d;for(;d>0&&i.IntPoint.op_Equality(r[d],r[d-1]);)--d;if(c&&d<2||!c&&d<1)return!1;for(var x=new Array,S=0;S<=d;S++)x.push(new i.TEdge);var I=!0;x[1].Curr.X=r[1].X,x[1].Curr.Y=r[1].Y,i.use_xyz&&(x[1].Curr.Z=r[1].Z);var z={Value:this.m_UseFullRange};this.RangeTest(r[0],z),this.m_UseFullRange=z.Value,z.Value=this.m_UseFullRange,this.RangeTest(r[d],z),this.m_UseFullRange=z.Value,this.InitEdge(x[0],x[1],x[d],r[0]),this.InitEdge(x[d],x[0],x[d-1],r[d]);for(var S=d-1;S>=1;--S)z.Value=this.m_UseFullRange,this.RangeTest(r[S],z),this.m_UseFullRange=z.Value,this.InitEdge(x[S],x[S+1],x[S-1],r[S]);for(var V=x[0],$=V,ht=V;;){if($.Curr===$.Next.Curr&&(c||$.Next!==V)){if($===$.Next)break;$===V&&(V=$.Next),$=this.RemoveEdge($),ht=$;continue}if($.Prev===$.Next)break;if(c&&i.ClipperBase.SlopesEqual4($.Prev.Curr,$.Curr,$.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3($.Prev.Curr,$.Curr,$.Next.Curr))){$===V&&(V=$.Next),$=this.RemoveEdge($),$=$.Prev,ht=$;continue}if($=$.Next,$===ht||!c&&$.Next===V)break}if(!c&&$===$.Next||c&&$.Prev===$.Next)return!1;c||(this.m_HasOpenPaths=!0,V.Prev.OutIdx=i.ClipperBase.Skip),$=V;do this.InitEdge2($,a),$=$.Next,I&&$.Curr.Y!==V.Curr.Y&&(I=!1);while($!==V);if(I){if(c)return!1;$.Prev.OutIdx=i.ClipperBase.Skip;var ct=new i.LocalMinima;for(ct.Next=null,ct.Y=$.Bot.Y,ct.LeftBound=null,ct.RightBound=$,ct.RightBound.Side=i.EdgeSide.esRight,ct.RightBound.WindDelta=0;$.Bot.X!==$.Prev.Top.X&&this.ReverseHorizontal($),$.Next.OutIdx!==i.ClipperBase.Skip;)$.NextInLML=$.Next,$=$.Next;return this.InsertLocalMinima(ct),this.m_edges.push(x),!0}this.m_edges.push(x);var gt,Wt=null;for(i.IntPoint.op_Equality($.Prev.Bot,$.Prev.Top)&&($=$.Next);$=this.FindNextLocMin($),$!==Wt;){Wt===null&&(Wt=$);var ct=new i.LocalMinima;ct.Next=null,ct.Y=$.Bot.Y,$.Dx<$.Prev.Dx?(ct.LeftBound=$.Prev,ct.RightBound=$,gt=!1):(ct.LeftBound=$,ct.RightBound=$.Prev,gt=!0),ct.LeftBound.Side=i.EdgeSide.esLeft,ct.RightBound.Side=i.EdgeSide.esRight,c?ct.LeftBound.Next===ct.RightBound?ct.LeftBound.WindDelta=-1:ct.LeftBound.WindDelta=1:ct.LeftBound.WindDelta=0,ct.RightBound.WindDelta=-ct.LeftBound.WindDelta,$=this.ProcessBound(ct.LeftBound,gt),$.OutIdx===i.ClipperBase.Skip&&($=this.ProcessBound($,gt));var oe=this.ProcessBound(ct.RightBound,!gt);oe.OutIdx===i.ClipperBase.Skip&&(oe=this.ProcessBound(oe,!gt)),ct.LeftBound.OutIdx===i.ClipperBase.Skip?ct.LeftBound=null:ct.RightBound.OutIdx===i.ClipperBase.Skip&&(ct.RightBound=null),this.InsertLocalMinima(ct),gt||($=oe)}return!0},i.ClipperBase.prototype.AddPaths=function(r,a,c){for(var d=!1,x=0,S=r.length;x<S;++x)this.AddPath(r[x],a,c)&&(d=!0);return d},i.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(r,a,c){return i.IntPoint.op_Equality(r,c)||i.IntPoint.op_Equality(r,a)||i.IntPoint.op_Equality(c,a)?!1:r.X!==c.X?a.X>r.X==a.X<c.X:a.Y>r.Y==a.Y<c.Y},i.ClipperBase.prototype.RemoveEdge=function(r){r.Prev.Next=r.Next,r.Next.Prev=r.Prev;var a=r.Next;return r.Prev=null,a},i.ClipperBase.prototype.SetDx=function(r){r.Delta.X=r.Top.X-r.Bot.X,r.Delta.Y=r.Top.Y-r.Bot.Y,r.Delta.Y===0?r.Dx=i.ClipperBase.horizontal:r.Dx=r.Delta.X/r.Delta.Y},i.ClipperBase.prototype.InsertLocalMinima=function(r){if(this.m_MinimaList===null)this.m_MinimaList=r;else if(r.Y>=this.m_MinimaList.Y)r.Next=this.m_MinimaList,this.m_MinimaList=r;else{for(var a=this.m_MinimaList;a.Next!==null&&r.Y<a.Next.Y;)a=a.Next;r.Next=a.Next,a.Next=r}},i.ClipperBase.prototype.PopLocalMinima=function(r,a){return a.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===r?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},i.ClipperBase.prototype.ReverseHorizontal=function(r){var a=r.Top.X;r.Top.X=r.Bot.X,r.Bot.X=a,i.use_xyz&&(a=r.Top.Z,r.Top.Z=r.Bot.Z,r.Bot.Z=a)},i.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var r=this.m_MinimaList;r!==null;){this.InsertScanbeam(r.Y);var a=r.LeftBound;a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,i.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=i.ClipperBase.Unassigned),a=r.RightBound,a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,i.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=i.ClipperBase.Unassigned),r=r.Next}this.m_ActiveEdges=null}},i.ClipperBase.prototype.InsertScanbeam=function(r){if(this.m_Scanbeam===null)this.m_Scanbeam=new i.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=r;else if(r>this.m_Scanbeam.Y){var a=new i.Scanbeam;a.Y=r,a.Next=this.m_Scanbeam,this.m_Scanbeam=a}else{for(var c=this.m_Scanbeam;c.Next!==null&&r<=c.Next.Y;)c=c.Next;if(r===c.Y)return;var d=new i.Scanbeam;d.Y=r,d.Next=c.Next,c.Next=d}},i.ClipperBase.prototype.PopScanbeam=function(r){return this.m_Scanbeam===null?(r.v=0,!1):(r.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},i.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},i.ClipperBase.prototype.CreateOutRec=function(){var r=new i.OutRec;return r.Idx=i.ClipperBase.Unassigned,r.IsHole=!1,r.IsOpen=!1,r.FirstLeft=null,r.Pts=null,r.BottomPt=null,r.PolyNode=null,this.m_PolyOuts.push(r),r.Idx=this.m_PolyOuts.length-1,r},i.ClipperBase.prototype.DisposeOutRec=function(r){var a=this.m_PolyOuts[r];a.Pts=null,a=null,this.m_PolyOuts[r]=null},i.ClipperBase.prototype.UpdateEdgeIntoAEL=function(r){r.NextInLML===null&&i.Error("UpdateEdgeIntoAEL: invalid call");var a=r.PrevInAEL,c=r.NextInAEL;return r.NextInLML.OutIdx=r.OutIdx,a!==null?a.NextInAEL=r.NextInLML:this.m_ActiveEdges=r.NextInLML,c!==null&&(c.PrevInAEL=r.NextInLML),r.NextInLML.Side=r.Side,r.NextInLML.WindDelta=r.WindDelta,r.NextInLML.WindCnt=r.WindCnt,r.NextInLML.WindCnt2=r.WindCnt2,r=r.NextInLML,r.Curr.X=r.Bot.X,r.Curr.Y=r.Bot.Y,r.PrevInAEL=a,r.NextInAEL=c,i.ClipperBase.IsHorizontal(r)||this.InsertScanbeam(r.Top.Y),r},i.ClipperBase.prototype.SwapPositionsInAEL=function(r,a){if(!(r.NextInAEL===r.PrevInAEL||a.NextInAEL===a.PrevInAEL)){if(r.NextInAEL===a){var c=a.NextInAEL;c!==null&&(c.PrevInAEL=r);var d=r.PrevInAEL;d!==null&&(d.NextInAEL=a),a.PrevInAEL=d,a.NextInAEL=r,r.PrevInAEL=a,r.NextInAEL=c}else if(a.NextInAEL===r){var x=r.NextInAEL;x!==null&&(x.PrevInAEL=a);var S=a.PrevInAEL;S!==null&&(S.NextInAEL=r),r.PrevInAEL=S,r.NextInAEL=a,a.PrevInAEL=r,a.NextInAEL=x}else{var I=r.NextInAEL,z=r.PrevInAEL;r.NextInAEL=a.NextInAEL,r.NextInAEL!==null&&(r.NextInAEL.PrevInAEL=r),r.PrevInAEL=a.PrevInAEL,r.PrevInAEL!==null&&(r.PrevInAEL.NextInAEL=r),a.NextInAEL=I,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=a),a.PrevInAEL=z,a.PrevInAEL!==null&&(a.PrevInAEL.NextInAEL=a)}r.PrevInAEL===null?this.m_ActiveEdges=r:a.PrevInAEL===null&&(this.m_ActiveEdges=a)}},i.ClipperBase.prototype.DeleteFromAEL=function(r){var a=r.PrevInAEL,c=r.NextInAEL;a===null&&c===null&&r!==this.m_ActiveEdges||(a!==null?a.NextInAEL=c:this.m_ActiveEdges=c,c!==null&&(c.PrevInAEL=a),r.NextInAEL=null,r.PrevInAEL=null)},i.Clipper=function(r){typeof r>"u"&&(r=0),this.m_PolyOuts=null,this.m_ClipType=i.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=i.PolyFillType.pftEvenOdd,this.m_SubjFillType=i.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,i.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=i.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&r)!==0,this.StrictlySimple=(2&r)!==0,this.PreserveCollinear=(4&r)!==0,i.use_xyz&&(this.ZFillFunction=null)},i.Clipper.ioReverseSolution=1,i.Clipper.ioStrictlySimple=2,i.Clipper.ioPreserveCollinear=4,i.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),i.ClipperBase.prototype.Clear.call(this))},i.Clipper.prototype.InsertMaxima=function(r){var a=new i.Maxima;if(a.X=r,this.m_Maxima===null)this.m_Maxima=a,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(r<this.m_Maxima.X)a.Next=this.m_Maxima,a.Prev=null,this.m_Maxima=a;else{for(var c=this.m_Maxima;c.Next!==null&&r>=c.Next.X;)c=c.Next;if(r===c.X)return;a.Next=c.Next,a.Prev=c,c.Next!==null&&(c.Next.Prev=a),c.Next=a}},i.Clipper.prototype.Execute=function(){var r=arguments,a=r.length,c=r[1]instanceof i.PolyTree;if(a===4&&!c){var d=r[0],x=r[1],S=r[2],I=r[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&i.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,i.Clear(x),this.m_SubjFillType=S,this.m_ClipFillType=I,this.m_ClipType=d,this.m_UsingPolyTree=!1;try{var z=this.ExecuteInternal();z&&this.BuildResult(x)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return z}else if(a===4&&c){var d=r[0],V=r[1],S=r[2],I=r[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=S,this.m_ClipFillType=I,this.m_ClipType=d,this.m_UsingPolyTree=!0;try{var z=this.ExecuteInternal();z&&this.BuildResult2(V)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return z}else if(a===2&&!c){var d=r[0],x=r[1];return this.Execute(d,x,i.PolyFillType.pftEvenOdd,i.PolyFillType.pftEvenOdd)}else if(a===2&&c){var d=r[0],V=r[1];return this.Execute(d,V,i.PolyFillType.pftEvenOdd,i.PolyFillType.pftEvenOdd)}},i.Clipper.prototype.FixHoleLinkage=function(r){if(!(r.FirstLeft===null||r.IsHole!==r.FirstLeft.IsHole&&r.FirstLeft.Pts!==null)){for(var a=r.FirstLeft;a!==null&&(a.IsHole===r.IsHole||a.Pts===null);)a=a.FirstLeft;r.FirstLeft=a}},i.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var r={},a={};if(!this.PopScanbeam(r))return!1;for(this.InsertLocalMinimaIntoAEL(r.v);this.PopScanbeam(a)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(a.v))return!1;this.ProcessEdgesAtTopOfScanbeam(a.v),r.v=a.v,this.InsertLocalMinimaIntoAEL(r.v)}var c,d,x;for(d=0,x=this.m_PolyOuts.length;d<x;d++)c=this.m_PolyOuts[d],!(c.Pts===null||c.IsOpen)&&(c.IsHole^this.ReverseSolution)==this.Area$1(c)>0&&this.ReversePolyPtLinks(c.Pts);for(this.JoinCommonEdges(),d=0,x=this.m_PolyOuts.length;d<x;d++)c=this.m_PolyOuts[d],c.Pts!==null&&(c.IsOpen?this.FixupOutPolyline(c):this.FixupOutPolygon(c));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},i.Clipper.prototype.DisposeAllPolyPts=function(){for(var r=0,a=this.m_PolyOuts.length;r<a;++r)this.DisposeOutRec(r);i.Clear(this.m_PolyOuts)},i.Clipper.prototype.AddJoin=function(r,a,c){var d=new i.Join;d.OutPt1=r,d.OutPt2=a,d.OffPt.X=c.X,d.OffPt.Y=c.Y,i.use_xyz&&(d.OffPt.Z=c.Z),this.m_Joins.push(d)},i.Clipper.prototype.AddGhostJoin=function(r,a){var c=new i.Join;c.OutPt1=r,c.OffPt.X=a.X,c.OffPt.Y=a.Y,i.use_xyz&&(c.OffPt.Z=a.Z),this.m_GhostJoins.push(c)},i.Clipper.prototype.SetZ=function(r,a,c){if(this.ZFillFunction!==null){if(r.Z!==0||this.ZFillFunction===null)return;i.IntPoint.op_Equality(r,a.Bot)?r.Z=a.Bot.Z:i.IntPoint.op_Equality(r,a.Top)?r.Z=a.Top.Z:i.IntPoint.op_Equality(r,c.Bot)?r.Z=c.Bot.Z:i.IntPoint.op_Equality(r,c.Top)?r.Z=c.Top.Z:this.ZFillFunction(a.Bot,a.Top,c.Bot,c.Top,r)}},i.Clipper.prototype.InsertLocalMinimaIntoAEL=function(r){for(var a={},c,d;this.PopLocalMinima(r,a);){c=a.v.LeftBound,d=a.v.RightBound;var x=null;if(c===null?(this.InsertEdgeIntoAEL(d,null),this.SetWindingCount(d),this.IsContributing(d)&&(x=this.AddOutPt(d,d.Bot))):d===null?(this.InsertEdgeIntoAEL(c,null),this.SetWindingCount(c),this.IsContributing(c)&&(x=this.AddOutPt(c,c.Bot)),this.InsertScanbeam(c.Top.Y)):(this.InsertEdgeIntoAEL(c,null),this.InsertEdgeIntoAEL(d,c),this.SetWindingCount(c),d.WindCnt=c.WindCnt,d.WindCnt2=c.WindCnt2,this.IsContributing(c)&&(x=this.AddLocalMinPoly(c,d,c.Bot)),this.InsertScanbeam(c.Top.Y)),d!==null&&(i.ClipperBase.IsHorizontal(d)?(d.NextInLML!==null&&this.InsertScanbeam(d.NextInLML.Top.Y),this.AddEdgeToSEL(d)):this.InsertScanbeam(d.Top.Y)),!(c===null||d===null)){if(x!==null&&i.ClipperBase.IsHorizontal(d)&&this.m_GhostJoins.length>0&&d.WindDelta!==0)for(var S=0,I=this.m_GhostJoins.length;S<I;S++){var z=this.m_GhostJoins[S];this.HorzSegmentsOverlap(z.OutPt1.Pt.X,z.OffPt.X,d.Bot.X,d.Top.X)&&this.AddJoin(z.OutPt1,x,z.OffPt)}if(c.OutIdx>=0&&c.PrevInAEL!==null&&c.PrevInAEL.Curr.X===c.Bot.X&&c.PrevInAEL.OutIdx>=0&&i.ClipperBase.SlopesEqual5(c.PrevInAEL.Curr,c.PrevInAEL.Top,c.Curr,c.Top,this.m_UseFullRange)&&c.WindDelta!==0&&c.PrevInAEL.WindDelta!==0){var V=this.AddOutPt(c.PrevInAEL,c.Bot);this.AddJoin(x,V,c.Top)}if(c.NextInAEL!==d){if(d.OutIdx>=0&&d.PrevInAEL.OutIdx>=0&&i.ClipperBase.SlopesEqual5(d.PrevInAEL.Curr,d.PrevInAEL.Top,d.Curr,d.Top,this.m_UseFullRange)&&d.WindDelta!==0&&d.PrevInAEL.WindDelta!==0){var V=this.AddOutPt(d.PrevInAEL,d.Bot);this.AddJoin(x,V,d.Top)}var $=c.NextInAEL;if($!==null)for(;$!==d;)this.IntersectEdges(d,$,c.Curr),$=$.NextInAEL}}}},i.Clipper.prototype.InsertEdgeIntoAEL=function(r,a){if(this.m_ActiveEdges===null)r.PrevInAEL=null,r.NextInAEL=null,this.m_ActiveEdges=r;else if(a===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,r))r.PrevInAEL=null,r.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=r,this.m_ActiveEdges=r;else{for(a===null&&(a=this.m_ActiveEdges);a.NextInAEL!==null&&!this.E2InsertsBeforeE1(a.NextInAEL,r);)a=a.NextInAEL;r.NextInAEL=a.NextInAEL,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=r),r.PrevInAEL=a,a.NextInAEL=r}},i.Clipper.prototype.E2InsertsBeforeE1=function(r,a){return a.Curr.X===r.Curr.X?a.Top.Y>r.Top.Y?a.Top.X<i.Clipper.TopX(r,a.Top.Y):r.Top.X>i.Clipper.TopX(a,r.Top.Y):a.Curr.X<r.Curr.X},i.Clipper.prototype.IsEvenOddFillType=function(r){return r.PolyTyp===i.PolyType.ptSubject?this.m_SubjFillType===i.PolyFillType.pftEvenOdd:this.m_ClipFillType===i.PolyFillType.pftEvenOdd},i.Clipper.prototype.IsEvenOddAltFillType=function(r){return r.PolyTyp===i.PolyType.ptSubject?this.m_ClipFillType===i.PolyFillType.pftEvenOdd:this.m_SubjFillType===i.PolyFillType.pftEvenOdd},i.Clipper.prototype.IsContributing=function(r){var a,c;switch(r.PolyTyp===i.PolyType.ptSubject?(a=this.m_SubjFillType,c=this.m_ClipFillType):(a=this.m_ClipFillType,c=this.m_SubjFillType),a){case i.PolyFillType.pftEvenOdd:if(r.WindDelta===0&&r.WindCnt!==1)return!1;break;case i.PolyFillType.pftNonZero:if(Math.abs(r.WindCnt)!==1)return!1;break;case i.PolyFillType.pftPositive:if(r.WindCnt!==1)return!1;break;default:if(r.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case i.ClipType.ctIntersection:switch(c){case i.PolyFillType.pftEvenOdd:case i.PolyFillType.pftNonZero:return r.WindCnt2!==0;case i.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case i.ClipType.ctUnion:switch(c){case i.PolyFillType.pftEvenOdd:case i.PolyFillType.pftNonZero:return r.WindCnt2===0;case i.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}case i.ClipType.ctDifference:if(r.PolyTyp===i.PolyType.ptSubject)switch(c){case i.PolyFillType.pftEvenOdd:case i.PolyFillType.pftNonZero:return r.WindCnt2===0;case i.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else switch(c){case i.PolyFillType.pftEvenOdd:case i.PolyFillType.pftNonZero:return r.WindCnt2!==0;case i.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case i.ClipType.ctXor:if(r.WindDelta===0)switch(c){case i.PolyFillType.pftEvenOdd:case i.PolyFillType.pftNonZero:return r.WindCnt2===0;case i.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else return!0}return!0},i.Clipper.prototype.SetWindingCount=function(r){for(var a=r.PrevInAEL;a!==null&&(a.PolyTyp!==r.PolyTyp||a.WindDelta===0);)a=a.PrevInAEL;if(a===null){var c=r.PolyTyp===i.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;r.WindDelta===0?r.WindCnt=c===i.PolyFillType.pftNegative?-1:1:r.WindCnt=r.WindDelta,r.WindCnt2=0,a=this.m_ActiveEdges}else if(r.WindDelta===0&&this.m_ClipType!==i.ClipType.ctUnion)r.WindCnt=1,r.WindCnt2=a.WindCnt2,a=a.NextInAEL;else if(this.IsEvenOddFillType(r)){if(r.WindDelta===0){for(var d=!0,x=a.PrevInAEL;x!==null;)x.PolyTyp===a.PolyTyp&&x.WindDelta!==0&&(d=!d),x=x.PrevInAEL;r.WindCnt=d?0:1}else r.WindCnt=r.WindDelta;r.WindCnt2=a.WindCnt2,a=a.NextInAEL}else a.WindCnt*a.WindDelta<0?Math.abs(a.WindCnt)>1?a.WindDelta*r.WindDelta<0?r.WindCnt=a.WindCnt:r.WindCnt=a.WindCnt+r.WindDelta:r.WindCnt=r.WindDelta===0?1:r.WindDelta:r.WindDelta===0?r.WindCnt=a.WindCnt<0?a.WindCnt-1:a.WindCnt+1:a.WindDelta*r.WindDelta<0?r.WindCnt=a.WindCnt:r.WindCnt=a.WindCnt+r.WindDelta,r.WindCnt2=a.WindCnt2,a=a.NextInAEL;if(this.IsEvenOddAltFillType(r))for(;a!==r;)a.WindDelta!==0&&(r.WindCnt2=r.WindCnt2===0?1:0),a=a.NextInAEL;else for(;a!==r;)r.WindCnt2+=a.WindDelta,a=a.NextInAEL},i.Clipper.prototype.AddEdgeToSEL=function(r){this.m_SortedEdges===null?(this.m_SortedEdges=r,r.PrevInSEL=null,r.NextInSEL=null):(r.NextInSEL=this.m_SortedEdges,r.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=r,this.m_SortedEdges=r)},i.Clipper.prototype.PopEdgeFromSEL=function(r){if(r.v=this.m_SortedEdges,r.v===null)return!1;var a=r.v;return this.m_SortedEdges=r.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),a.NextInSEL=null,a.PrevInSEL=null,!0},i.Clipper.prototype.CopyAELToSEL=function(){var r=this.m_ActiveEdges;for(this.m_SortedEdges=r;r!==null;)r.PrevInSEL=r.PrevInAEL,r.NextInSEL=r.NextInAEL,r=r.NextInAEL},i.Clipper.prototype.SwapPositionsInSEL=function(r,a){if(!(r.NextInSEL===null&&r.PrevInSEL===null)&&!(a.NextInSEL===null&&a.PrevInSEL===null)){if(r.NextInSEL===a){var c=a.NextInSEL;c!==null&&(c.PrevInSEL=r);var d=r.PrevInSEL;d!==null&&(d.NextInSEL=a),a.PrevInSEL=d,a.NextInSEL=r,r.PrevInSEL=a,r.NextInSEL=c}else if(a.NextInSEL===r){var c=r.NextInSEL;c!==null&&(c.PrevInSEL=a);var d=a.PrevInSEL;d!==null&&(d.NextInSEL=r),r.PrevInSEL=d,r.NextInSEL=a,a.PrevInSEL=r,a.NextInSEL=c}else{var c=r.NextInSEL,d=r.PrevInSEL;r.NextInSEL=a.NextInSEL,r.NextInSEL!==null&&(r.NextInSEL.PrevInSEL=r),r.PrevInSEL=a.PrevInSEL,r.PrevInSEL!==null&&(r.PrevInSEL.NextInSEL=r),a.NextInSEL=c,a.NextInSEL!==null&&(a.NextInSEL.PrevInSEL=a),a.PrevInSEL=d,a.PrevInSEL!==null&&(a.PrevInSEL.NextInSEL=a)}r.PrevInSEL===null?this.m_SortedEdges=r:a.PrevInSEL===null&&(this.m_SortedEdges=a)}},i.Clipper.prototype.AddLocalMaxPoly=function(r,a,c){this.AddOutPt(r,c),a.WindDelta===0&&this.AddOutPt(a,c),r.OutIdx===a.OutIdx?(r.OutIdx=-1,a.OutIdx=-1):r.OutIdx<a.OutIdx?this.AppendPolygon(r,a):this.AppendPolygon(a,r)},i.Clipper.prototype.AddLocalMinPoly=function(r,a,c){var d,x,S;if(i.ClipperBase.IsHorizontal(a)||r.Dx>a.Dx?(d=this.AddOutPt(r,c),a.OutIdx=r.OutIdx,r.Side=i.EdgeSide.esLeft,a.Side=i.EdgeSide.esRight,x=r,x.PrevInAEL===a?S=a.PrevInAEL:S=x.PrevInAEL):(d=this.AddOutPt(a,c),r.OutIdx=a.OutIdx,r.Side=i.EdgeSide.esRight,a.Side=i.EdgeSide.esLeft,x=a,x.PrevInAEL===r?S=r.PrevInAEL:S=x.PrevInAEL),S!==null&&S.OutIdx>=0&&S.Top.Y<c.Y&&x.Top.Y<c.Y){var I=i.Clipper.TopX(S,c.Y),z=i.Clipper.TopX(x,c.Y);if(I===z&&x.WindDelta!==0&&S.WindDelta!==0&&i.ClipperBase.SlopesEqual5(new i.IntPoint2(I,c.Y),S.Top,new i.IntPoint2(z,c.Y),x.Top,this.m_UseFullRange)){var V=this.AddOutPt(S,c);this.AddJoin(d,V,x.Top)}}return d},i.Clipper.prototype.AddOutPt=function(r,a){if(r.OutIdx<0){var c=this.CreateOutRec();c.IsOpen=r.WindDelta===0;var d=new i.OutPt;return c.Pts=d,d.Idx=c.Idx,d.Pt.X=a.X,d.Pt.Y=a.Y,i.use_xyz&&(d.Pt.Z=a.Z),d.Next=d,d.Prev=d,c.IsOpen||this.SetHoleState(r,c),r.OutIdx=c.Idx,d}else{var c=this.m_PolyOuts[r.OutIdx],x=c.Pts,S=r.Side===i.EdgeSide.esLeft;if(S&&i.IntPoint.op_Equality(a,x.Pt))return x;if(!S&&i.IntPoint.op_Equality(a,x.Prev.Pt))return x.Prev;var d=new i.OutPt;return d.Idx=c.Idx,d.Pt.X=a.X,d.Pt.Y=a.Y,i.use_xyz&&(d.Pt.Z=a.Z),d.Next=x,d.Prev=x.Prev,d.Prev.Next=d,x.Prev=d,S&&(c.Pts=d),d}},i.Clipper.prototype.GetLastOutPt=function(r){var a=this.m_PolyOuts[r.OutIdx];return r.Side===i.EdgeSide.esLeft?a.Pts:a.Pts.Prev},i.Clipper.prototype.SwapPoints=function(r,a){var c=new i.IntPoint1(r.Value);r.Value.X=a.Value.X,r.Value.Y=a.Value.Y,i.use_xyz&&(r.Value.Z=a.Value.Z),a.Value.X=c.X,a.Value.Y=c.Y,i.use_xyz&&(a.Value.Z=c.Z)},i.Clipper.prototype.HorzSegmentsOverlap=function(r,a,c,d){var x;return r>a&&(x=r,r=a,a=x),c>d&&(x=c,c=d,d=x),r<d&&c<a},i.Clipper.prototype.SetHoleState=function(r,a){for(var c=r.PrevInAEL,d=null;c!==null;)c.OutIdx>=0&&c.WindDelta!==0&&(d===null?d=c:d.OutIdx===c.OutIdx&&(d=null)),c=c.PrevInAEL;d===null?(a.FirstLeft=null,a.IsHole=!1):(a.FirstLeft=this.m_PolyOuts[d.OutIdx],a.IsHole=!a.FirstLeft.IsHole)},i.Clipper.prototype.GetDx=function(r,a){return r.Y===a.Y?i.ClipperBase.horizontal:(a.X-r.X)/(a.Y-r.Y)},i.Clipper.prototype.FirstIsBottomPt=function(r,a){for(var c=r.Prev;i.IntPoint.op_Equality(c.Pt,r.Pt)&&c!==r;)c=c.Prev;var d=Math.abs(this.GetDx(r.Pt,c.Pt));for(c=r.Next;i.IntPoint.op_Equality(c.Pt,r.Pt)&&c!==r;)c=c.Next;var x=Math.abs(this.GetDx(r.Pt,c.Pt));for(c=a.Prev;i.IntPoint.op_Equality(c.Pt,a.Pt)&&c!==a;)c=c.Prev;var S=Math.abs(this.GetDx(a.Pt,c.Pt));for(c=a.Next;i.IntPoint.op_Equality(c.Pt,a.Pt)&&c!==a;)c=c.Next;var I=Math.abs(this.GetDx(a.Pt,c.Pt));return Math.max(d,x)===Math.max(S,I)&&Math.min(d,x)===Math.min(S,I)?this.Area(r)>0:d>=S&&d>=I||x>=S&&x>=I},i.Clipper.prototype.GetBottomPt=function(r){for(var a=null,c=r.Next;c!==r;)c.Pt.Y>r.Pt.Y?(r=c,a=null):c.Pt.Y===r.Pt.Y&&c.Pt.X<=r.Pt.X&&(c.Pt.X<r.Pt.X?(a=null,r=c):c.Next!==r&&c.Prev!==r&&(a=c)),c=c.Next;if(a!==null)for(;a!==c;)for(this.FirstIsBottomPt(c,a)||(r=a),a=a.Next;i.IntPoint.op_Inequality(a.Pt,r.Pt);)a=a.Next;return r},i.Clipper.prototype.GetLowermostRec=function(r,a){r.BottomPt===null&&(r.BottomPt=this.GetBottomPt(r.Pts)),a.BottomPt===null&&(a.BottomPt=this.GetBottomPt(a.Pts));var c=r.BottomPt,d=a.BottomPt;return c.Pt.Y>d.Pt.Y?r:c.Pt.Y<d.Pt.Y?a:c.Pt.X<d.Pt.X?r:c.Pt.X>d.Pt.X||c.Next===c?a:d.Next===d||this.FirstIsBottomPt(c,d)?r:a},i.Clipper.prototype.OutRec1RightOfOutRec2=function(r,a){do if(r=r.FirstLeft,r===a)return!0;while(r!==null);return!1},i.Clipper.prototype.GetOutRec=function(r){for(var a=this.m_PolyOuts[r];a!==this.m_PolyOuts[a.Idx];)a=this.m_PolyOuts[a.Idx];return a},i.Clipper.prototype.AppendPolygon=function(r,a){var c=this.m_PolyOuts[r.OutIdx],d=this.m_PolyOuts[a.OutIdx],x;this.OutRec1RightOfOutRec2(c,d)?x=d:this.OutRec1RightOfOutRec2(d,c)?x=c:x=this.GetLowermostRec(c,d);var S=c.Pts,I=S.Prev,z=d.Pts,V=z.Prev;r.Side===i.EdgeSide.esLeft?a.Side===i.EdgeSide.esLeft?(this.ReversePolyPtLinks(z),z.Next=S,S.Prev=z,I.Next=V,V.Prev=I,c.Pts=V):(V.Next=S,S.Prev=V,z.Prev=I,I.Next=z,c.Pts=z):a.Side===i.EdgeSide.esRight?(this.ReversePolyPtLinks(z),I.Next=V,V.Prev=I,z.Next=S,S.Prev=z):(I.Next=z,z.Prev=I,S.Prev=V,V.Next=S),c.BottomPt=null,x===d&&(d.FirstLeft!==c&&(c.FirstLeft=d.FirstLeft),c.IsHole=d.IsHole),d.Pts=null,d.BottomPt=null,d.FirstLeft=c;var $=r.OutIdx,ht=a.OutIdx;r.OutIdx=-1,a.OutIdx=-1;for(var ct=this.m_ActiveEdges;ct!==null;){if(ct.OutIdx===ht){ct.OutIdx=$,ct.Side=r.Side;break}ct=ct.NextInAEL}d.Idx=c.Idx},i.Clipper.prototype.ReversePolyPtLinks=function(r){if(r!==null){var a,c;a=r;do c=a.Next,a.Next=a.Prev,a.Prev=c,a=c;while(a!==r)}},i.Clipper.SwapSides=function(r,a){var c=r.Side;r.Side=a.Side,a.Side=c},i.Clipper.SwapPolyIndexes=function(r,a){var c=r.OutIdx;r.OutIdx=a.OutIdx,a.OutIdx=c},i.Clipper.prototype.IntersectEdges=function(r,a,c){var d=r.OutIdx>=0,x=a.OutIdx>=0;if(i.use_xyz&&this.SetZ(c,r,a),i.use_lines&&(r.WindDelta===0||a.WindDelta===0)){if(r.WindDelta===0&&a.WindDelta===0)return;r.PolyTyp===a.PolyTyp&&r.WindDelta!==a.WindDelta&&this.m_ClipType===i.ClipType.ctUnion?r.WindDelta===0?x&&(this.AddOutPt(r,c),d&&(r.OutIdx=-1)):d&&(this.AddOutPt(a,c),x&&(a.OutIdx=-1)):r.PolyTyp!==a.PolyTyp&&(r.WindDelta===0&&Math.abs(a.WindCnt)===1&&(this.m_ClipType!==i.ClipType.ctUnion||a.WindCnt2===0)?(this.AddOutPt(r,c),d&&(r.OutIdx=-1)):a.WindDelta===0&&Math.abs(r.WindCnt)===1&&(this.m_ClipType!==i.ClipType.ctUnion||r.WindCnt2===0)&&(this.AddOutPt(a,c),x&&(a.OutIdx=-1)));return}if(r.PolyTyp===a.PolyTyp)if(this.IsEvenOddFillType(r)){var S=r.WindCnt;r.WindCnt=a.WindCnt,a.WindCnt=S}else r.WindCnt+a.WindDelta===0?r.WindCnt=-r.WindCnt:r.WindCnt+=a.WindDelta,a.WindCnt-r.WindDelta===0?a.WindCnt=-a.WindCnt:a.WindCnt-=r.WindDelta;else this.IsEvenOddFillType(a)?r.WindCnt2=r.WindCnt2===0?1:0:r.WindCnt2+=a.WindDelta,this.IsEvenOddFillType(r)?a.WindCnt2=a.WindCnt2===0?1:0:a.WindCnt2-=r.WindDelta;var I,z,V,$;r.PolyTyp===i.PolyType.ptSubject?(I=this.m_SubjFillType,V=this.m_ClipFillType):(I=this.m_ClipFillType,V=this.m_SubjFillType),a.PolyTyp===i.PolyType.ptSubject?(z=this.m_SubjFillType,$=this.m_ClipFillType):(z=this.m_ClipFillType,$=this.m_SubjFillType);var ht,ct;switch(I){case i.PolyFillType.pftPositive:ht=r.WindCnt;break;case i.PolyFillType.pftNegative:ht=-r.WindCnt;break;default:ht=Math.abs(r.WindCnt);break}switch(z){case i.PolyFillType.pftPositive:ct=a.WindCnt;break;case i.PolyFillType.pftNegative:ct=-a.WindCnt;break;default:ct=Math.abs(a.WindCnt);break}if(d&&x)ht!==0&&ht!==1||ct!==0&&ct!==1||r.PolyTyp!==a.PolyTyp&&this.m_ClipType!==i.ClipType.ctXor?this.AddLocalMaxPoly(r,a,c):(this.AddOutPt(r,c),this.AddOutPt(a,c),i.Clipper.SwapSides(r,a),i.Clipper.SwapPolyIndexes(r,a));else if(d)(ct===0||ct===1)&&(this.AddOutPt(r,c),i.Clipper.SwapSides(r,a),i.Clipper.SwapPolyIndexes(r,a));else if(x)(ht===0||ht===1)&&(this.AddOutPt(a,c),i.Clipper.SwapSides(r,a),i.Clipper.SwapPolyIndexes(r,a));else if((ht===0||ht===1)&&(ct===0||ct===1)){var gt,Wt;switch(V){case i.PolyFillType.pftPositive:gt=r.WindCnt2;break;case i.PolyFillType.pftNegative:gt=-r.WindCnt2;break;default:gt=Math.abs(r.WindCnt2);break}switch($){case i.PolyFillType.pftPositive:Wt=a.WindCnt2;break;case i.PolyFillType.pftNegative:Wt=-a.WindCnt2;break;default:Wt=Math.abs(a.WindCnt2);break}if(r.PolyTyp!==a.PolyTyp)this.AddLocalMinPoly(r,a,c);else if(ht===1&&ct===1)switch(this.m_ClipType){case i.ClipType.ctIntersection:gt>0&&Wt>0&&this.AddLocalMinPoly(r,a,c);break;case i.ClipType.ctUnion:gt<=0&&Wt<=0&&this.AddLocalMinPoly(r,a,c);break;case i.ClipType.ctDifference:(r.PolyTyp===i.PolyType.ptClip&&gt>0&&Wt>0||r.PolyTyp===i.PolyType.ptSubject&&gt<=0&&Wt<=0)&&this.AddLocalMinPoly(r,a,c);break;case i.ClipType.ctXor:this.AddLocalMinPoly(r,a,c);break}else i.Clipper.SwapSides(r,a)}},i.Clipper.prototype.DeleteFromSEL=function(r){var a=r.PrevInSEL,c=r.NextInSEL;a===null&&c===null&&r!==this.m_SortedEdges||(a!==null?a.NextInSEL=c:this.m_SortedEdges=c,c!==null&&(c.PrevInSEL=a),r.NextInSEL=null,r.PrevInSEL=null)},i.Clipper.prototype.ProcessHorizontals=function(){for(var r={};this.PopEdgeFromSEL(r);)this.ProcessHorizontal(r.v)},i.Clipper.prototype.GetHorzDirection=function(r,a){r.Bot.X<r.Top.X?(a.Left=r.Bot.X,a.Right=r.Top.X,a.Dir=i.Direction.dLeftToRight):(a.Left=r.Top.X,a.Right=r.Bot.X,a.Dir=i.Direction.dRightToLeft)},i.Clipper.prototype.ProcessHorizontal=function(r){var a={Dir:null,Left:null,Right:null};this.GetHorzDirection(r,a);for(var c=a.Dir,d=a.Left,x=a.Right,S=r.WindDelta===0,I=r,z=null;I.NextInLML!==null&&i.ClipperBase.IsHorizontal(I.NextInLML);)I=I.NextInLML;I.NextInLML===null&&(z=this.GetMaximaPair(I));var V=this.m_Maxima;if(V!==null)if(c===i.Direction.dLeftToRight){for(;V!==null&&V.X<=r.Bot.X;)V=V.Next;V!==null&&V.X>=I.Top.X&&(V=null)}else{for(;V.Next!==null&&V.Next.X<r.Bot.X;)V=V.Next;V.X<=I.Top.X&&(V=null)}for(var $=null;;){for(var ht=r===I,ct=this.GetNextInAEL(r,c);ct!==null;){if(V!==null)if(c===i.Direction.dLeftToRight)for(;V!==null&&V.X<ct.Curr.X;)r.OutIdx>=0&&!S&&this.AddOutPt(r,new i.IntPoint2(V.X,r.Bot.Y)),V=V.Next;else for(;V!==null&&V.X>ct.Curr.X;)r.OutIdx>=0&&!S&&this.AddOutPt(r,new i.IntPoint2(V.X,r.Bot.Y)),V=V.Prev;if(c===i.Direction.dLeftToRight&&ct.Curr.X>x||c===i.Direction.dRightToLeft&&ct.Curr.X<d||ct.Curr.X===r.Top.X&&r.NextInLML!==null&&ct.Dx<r.NextInLML.Dx)break;if(r.OutIdx>=0&&!S){i.use_xyz&&(c===i.Direction.dLeftToRight?this.SetZ(ct.Curr,r,ct):this.SetZ(ct.Curr,ct,r)),$=this.AddOutPt(r,ct.Curr);for(var gt=this.m_SortedEdges;gt!==null;){if(gt.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,gt.Bot.X,gt.Top.X)){var Wt=this.GetLastOutPt(gt);this.AddJoin(Wt,$,gt.Top)}gt=gt.NextInSEL}this.AddGhostJoin($,r.Bot)}if(ct===z&&ht){r.OutIdx>=0&&this.AddLocalMaxPoly(r,z,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(z);return}if(c===i.Direction.dLeftToRight){var oe=new i.IntPoint2(ct.Curr.X,r.Curr.Y);this.IntersectEdges(r,ct,oe)}else{var oe=new i.IntPoint2(ct.Curr.X,r.Curr.Y);this.IntersectEdges(ct,r,oe)}var he=this.GetNextInAEL(ct,c);this.SwapPositionsInAEL(r,ct),ct=he}if(r.NextInLML===null||!i.ClipperBase.IsHorizontal(r.NextInLML))break;r=this.UpdateEdgeIntoAEL(r),r.OutIdx>=0&&this.AddOutPt(r,r.Bot),a={Dir:c,Left:d,Right:x},this.GetHorzDirection(r,a),c=a.Dir,d=a.Left,x=a.Right}if(r.OutIdx>=0&&$===null){$=this.GetLastOutPt(r);for(var gt=this.m_SortedEdges;gt!==null;){if(gt.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,gt.Bot.X,gt.Top.X)){var Wt=this.GetLastOutPt(gt);this.AddJoin(Wt,$,gt.Top)}gt=gt.NextInSEL}this.AddGhostJoin($,r.Top)}if(r.NextInLML!==null)if(r.OutIdx>=0){if($=this.AddOutPt(r,r.Top),r=this.UpdateEdgeIntoAEL(r),r.WindDelta===0)return;var Ce=r.PrevInAEL,he=r.NextInAEL;if(Ce!==null&&Ce.Curr.X===r.Bot.X&&Ce.Curr.Y===r.Bot.Y&&Ce.WindDelta===0&&Ce.OutIdx>=0&&Ce.Curr.Y>Ce.Top.Y&&i.ClipperBase.SlopesEqual3(r,Ce,this.m_UseFullRange)){var Wt=this.AddOutPt(Ce,r.Bot);this.AddJoin($,Wt,r.Top)}else if(he!==null&&he.Curr.X===r.Bot.X&&he.Curr.Y===r.Bot.Y&&he.WindDelta!==0&&he.OutIdx>=0&&he.Curr.Y>he.Top.Y&&i.ClipperBase.SlopesEqual3(r,he,this.m_UseFullRange)){var Wt=this.AddOutPt(he,r.Bot);this.AddJoin($,Wt,r.Top)}}else r=this.UpdateEdgeIntoAEL(r);else r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r)},i.Clipper.prototype.GetNextInAEL=function(r,a){return a===i.Direction.dLeftToRight?r.NextInAEL:r.PrevInAEL},i.Clipper.prototype.IsMinima=function(r){return r!==null&&r.Prev.NextInLML!==r&&r.Next.NextInLML!==r},i.Clipper.prototype.IsMaxima=function(r,a){return r!==null&&r.Top.Y===a&&r.NextInLML===null},i.Clipper.prototype.IsIntermediate=function(r,a){return r.Top.Y===a&&r.NextInLML!==null},i.Clipper.prototype.GetMaximaPair=function(r){return i.IntPoint.op_Equality(r.Next.Top,r.Top)&&r.Next.NextInLML===null?r.Next:i.IntPoint.op_Equality(r.Prev.Top,r.Top)&&r.Prev.NextInLML===null?r.Prev:null},i.Clipper.prototype.GetMaximaPairEx=function(r){var a=this.GetMaximaPair(r);return a===null||a.OutIdx===i.ClipperBase.Skip||a.NextInAEL===a.PrevInAEL&&!i.ClipperBase.IsHorizontal(a)?null:a},i.Clipper.prototype.ProcessIntersections=function(r){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(r),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,i.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},i.Clipper.prototype.BuildIntersectList=function(r){if(this.m_ActiveEdges!==null){var a=this.m_ActiveEdges;for(this.m_SortedEdges=a;a!==null;)a.PrevInSEL=a.PrevInAEL,a.NextInSEL=a.NextInAEL,a.Curr.X=i.Clipper.TopX(a,r),a=a.NextInAEL;for(var c=!0;c&&this.m_SortedEdges!==null;){for(c=!1,a=this.m_SortedEdges;a.NextInSEL!==null;){var d=a.NextInSEL,x=new i.IntPoint0;if(a.Curr.X>d.Curr.X){this.IntersectPoint(a,d,x),x.Y<r&&(x=new i.IntPoint2(i.Clipper.TopX(a,r),r));var S=new i.IntersectNode;S.Edge1=a,S.Edge2=d,S.Pt.X=x.X,S.Pt.Y=x.Y,i.use_xyz&&(S.Pt.Z=x.Z),this.m_IntersectList.push(S),this.SwapPositionsInSEL(a,d),c=!0}else a=d}if(a.PrevInSEL!==null)a.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},i.Clipper.prototype.EdgesAdjacent=function(r){return r.Edge1.NextInSEL===r.Edge2||r.Edge1.PrevInSEL===r.Edge2},i.Clipper.IntersectNodeSort=function(r,a){return a.Pt.Y-r.Pt.Y},i.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var r=this.m_IntersectList.length,a=0;a<r;a++){if(!this.EdgesAdjacent(this.m_IntersectList[a])){for(var c=a+1;c<r&&!this.EdgesAdjacent(this.m_IntersectList[c]);)c++;if(c===r)return!1;var d=this.m_IntersectList[a];this.m_IntersectList[a]=this.m_IntersectList[c],this.m_IntersectList[c]=d}this.SwapPositionsInSEL(this.m_IntersectList[a].Edge1,this.m_IntersectList[a].Edge2)}return!0},i.Clipper.prototype.ProcessIntersectList=function(){for(var r=0,a=this.m_IntersectList.length;r<a;r++){var c=this.m_IntersectList[r];this.IntersectEdges(c.Edge1,c.Edge2,c.Pt),this.SwapPositionsInAEL(c.Edge1,c.Edge2)}this.m_IntersectList.length=0};var zt=function(r){return r<0?Math.ceil(r-.5):Math.round(r)},ve=function(r){return r<0?Math.ceil(r-.5):Math.floor(r+.5)},De=function(r){return r<0?-Math.round(Math.abs(r)):Math.round(r)},Ae=function(r){return r<0?(r-=.5,r<-2147483648?Math.ceil(r):r|0):(r+=.5,r>2147483647?Math.floor(r):r|0)};s.msie?i.Clipper.Round=zt:s.chromium?i.Clipper.Round=De:s.safari?i.Clipper.Round=Ae:i.Clipper.Round=ve,i.Clipper.TopX=function(r,a){return a===r.Top.Y?r.Top.X:r.Bot.X+i.Clipper.Round(r.Dx*(a-r.Bot.Y))},i.Clipper.prototype.IntersectPoint=function(r,a,c){c.X=0,c.Y=0;var d,x;if(r.Dx===a.Dx){c.Y=r.Curr.Y,c.X=i.Clipper.TopX(r,c.Y);return}if(r.Delta.X===0)c.X=r.Bot.X,i.ClipperBase.IsHorizontal(a)?c.Y=a.Bot.Y:(x=a.Bot.Y-a.Bot.X/a.Dx,c.Y=i.Clipper.Round(c.X/a.Dx+x));else if(a.Delta.X===0)c.X=a.Bot.X,i.ClipperBase.IsHorizontal(r)?c.Y=r.Bot.Y:(d=r.Bot.Y-r.Bot.X/r.Dx,c.Y=i.Clipper.Round(c.X/r.Dx+d));else{d=r.Bot.X-r.Bot.Y*r.Dx,x=a.Bot.X-a.Bot.Y*a.Dx;var S=(x-d)/(r.Dx-a.Dx);c.Y=i.Clipper.Round(S),Math.abs(r.Dx)<Math.abs(a.Dx)?c.X=i.Clipper.Round(r.Dx*S+d):c.X=i.Clipper.Round(a.Dx*S+x)}if(c.Y<r.Top.Y||c.Y<a.Top.Y){if(r.Top.Y>a.Top.Y)return c.Y=r.Top.Y,c.X=i.Clipper.TopX(a,r.Top.Y),c.X<r.Top.X;c.Y=a.Top.Y,Math.abs(r.Dx)<Math.abs(a.Dx)?c.X=i.Clipper.TopX(r,c.Y):c.X=i.Clipper.TopX(a,c.Y)}c.Y>r.Curr.Y&&(c.Y=r.Curr.Y,Math.abs(r.Dx)>Math.abs(a.Dx)?c.X=i.Clipper.TopX(a,c.Y):c.X=i.Clipper.TopX(r,c.Y))},i.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(r){for(var a=this.m_ActiveEdges;a!==null;){var c=this.IsMaxima(a,r);if(c){var d=this.GetMaximaPairEx(a);c=d===null||!i.ClipperBase.IsHorizontal(d)}if(c){this.StrictlySimple&&this.InsertMaxima(a.Top.X);var x=a.PrevInAEL;this.DoMaxima(a),x===null?a=this.m_ActiveEdges:a=x.NextInAEL}else{if(this.IsIntermediate(a,r)&&i.ClipperBase.IsHorizontal(a.NextInLML)?(a=this.UpdateEdgeIntoAEL(a),a.OutIdx>=0&&this.AddOutPt(a,a.Bot),this.AddEdgeToSEL(a)):(a.Curr.X=i.Clipper.TopX(a,r),a.Curr.Y=r),i.use_xyz&&(a.Top.Y===r?a.Curr.Z=a.Top.Z:a.Bot.Y===r?a.Curr.Z=a.Bot.Z:a.Curr.Z=0),this.StrictlySimple){var x=a.PrevInAEL;if(a.OutIdx>=0&&a.WindDelta!==0&&x!==null&&x.OutIdx>=0&&x.Curr.X===a.Curr.X&&x.WindDelta!==0){var S=new i.IntPoint1(a.Curr);i.use_xyz&&this.SetZ(S,x,a);var I=this.AddOutPt(x,S),z=this.AddOutPt(a,S);this.AddJoin(I,z,S)}}a=a.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,a=this.m_ActiveEdges;a!==null;){if(this.IsIntermediate(a,r)){var I=null;a.OutIdx>=0&&(I=this.AddOutPt(a,a.Top)),a=this.UpdateEdgeIntoAEL(a);var x=a.PrevInAEL,V=a.NextInAEL;if(x!==null&&x.Curr.X===a.Bot.X&&x.Curr.Y===a.Bot.Y&&I!==null&&x.OutIdx>=0&&x.Curr.Y===x.Top.Y&&i.ClipperBase.SlopesEqual5(a.Curr,a.Top,x.Curr,x.Top,this.m_UseFullRange)&&a.WindDelta!==0&&x.WindDelta!==0){var z=this.AddOutPt(ePrev2,a.Bot);this.AddJoin(I,z,a.Top)}else if(V!==null&&V.Curr.X===a.Bot.X&&V.Curr.Y===a.Bot.Y&&I!==null&&V.OutIdx>=0&&V.Curr.Y===V.Top.Y&&i.ClipperBase.SlopesEqual5(a.Curr,a.Top,V.Curr,V.Top,this.m_UseFullRange)&&a.WindDelta!==0&&V.WindDelta!==0){var z=this.AddOutPt(V,a.Bot);this.AddJoin(I,z,a.Top)}}a=a.NextInAEL}},i.Clipper.prototype.DoMaxima=function(r){var a=this.GetMaximaPairEx(r);if(a===null){r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r);return}for(var c=r.NextInAEL;c!==null&&c!==a;)this.IntersectEdges(r,c,r.Top),this.SwapPositionsInAEL(r,c),c=r.NextInAEL;r.OutIdx===-1&&a.OutIdx===-1?(this.DeleteFromAEL(r),this.DeleteFromAEL(a)):r.OutIdx>=0&&a.OutIdx>=0?(r.OutIdx>=0&&this.AddLocalMaxPoly(r,a,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(a)):i.use_lines&&r.WindDelta===0?(r.OutIdx>=0&&(this.AddOutPt(r,r.Top),r.OutIdx=i.ClipperBase.Unassigned),this.DeleteFromAEL(r),a.OutIdx>=0&&(this.AddOutPt(a,r.Top),a.OutIdx=i.ClipperBase.Unassigned),this.DeleteFromAEL(a)):i.Error("DoMaxima error")},i.Clipper.ReversePaths=function(r){for(var a=0,c=r.length;a<c;a++)r[a].reverse()},i.Clipper.Orientation=function(r){return i.Clipper.Area(r)>=0},i.Clipper.prototype.PointCount=function(r){if(r===null)return 0;var a=0,c=r;do a++,c=c.Next;while(c!==r);return a},i.Clipper.prototype.BuildResult=function(r){i.Clear(r);for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var d=this.m_PolyOuts[a];if(d.Pts!==null){var x=d.Pts.Prev,S=this.PointCount(x);if(!(S<2)){for(var I=new Array(S),z=0;z<S;z++)I[z]=x.Pt,x=x.Prev;r.push(I)}}}},i.Clipper.prototype.BuildResult2=function(r){r.Clear();for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var d=this.m_PolyOuts[a],x=this.PointCount(d.Pts);if(!(d.IsOpen&&x<2||!d.IsOpen&&x<3)){this.FixHoleLinkage(d);var S=new i.PolyNode;r.m_AllPolys.push(S),d.PolyNode=S,S.m_polygon.length=x;for(var I=d.Pts.Prev,z=0;z<x;z++)S.m_polygon[z]=I.Pt,I=I.Prev}}for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var d=this.m_PolyOuts[a];d.PolyNode!==null&&(d.IsOpen?(d.PolyNode.IsOpen=!0,r.AddChild(d.PolyNode)):d.FirstLeft!==null&&d.FirstLeft.PolyNode!==null?d.FirstLeft.PolyNode.AddChild(d.PolyNode):r.AddChild(d.PolyNode))}},i.Clipper.prototype.FixupOutPolyline=function(r){for(var a=r.Pts,c=a.Prev;a!==c;)if(a=a.Next,i.IntPoint.op_Equality(a.Pt,a.Prev.Pt)){a===c&&(c=a.Prev);var d=a.Prev;d.Next=a.Next,a.Next.Prev=d,a=d}a===a.Prev&&(r.Pts=null)},i.Clipper.prototype.FixupOutPolygon=function(r){var a=null;r.BottomPt=null;for(var c=r.Pts,d=this.PreserveCollinear||this.StrictlySimple;;){if(c.Prev===c||c.Prev===c.Next){r.Pts=null;return}if(i.IntPoint.op_Equality(c.Pt,c.Next.Pt)||i.IntPoint.op_Equality(c.Pt,c.Prev.Pt)||i.ClipperBase.SlopesEqual4(c.Prev.Pt,c.Pt,c.Next.Pt,this.m_UseFullRange)&&(!d||!this.Pt2IsBetweenPt1AndPt3(c.Prev.Pt,c.Pt,c.Next.Pt)))a=null,c.Prev.Next=c.Next,c.Next.Prev=c.Prev,c=c.Prev;else{if(c===a)break;a===null&&(a=c),c=c.Next}}r.Pts=c},i.Clipper.prototype.DupOutPt=function(r,a){var c=new i.OutPt;return c.Pt.X=r.Pt.X,c.Pt.Y=r.Pt.Y,i.use_xyz&&(c.Pt.Z=r.Pt.Z),c.Idx=r.Idx,a?(c.Next=r.Next,c.Prev=r,r.Next.Prev=c,r.Next=c):(c.Prev=r.Prev,c.Next=r,r.Prev.Next=c,r.Prev=c),c},i.Clipper.prototype.GetOverlap=function(r,a,c,d,x){return r<a?c<d?(x.Left=Math.max(r,c),x.Right=Math.min(a,d)):(x.Left=Math.max(r,d),x.Right=Math.min(a,c)):c<d?(x.Left=Math.max(a,c),x.Right=Math.min(r,d)):(x.Left=Math.max(a,d),x.Right=Math.min(r,c)),x.Left<x.Right},i.Clipper.prototype.JoinHorz=function(r,a,c,d,x,S){var I=r.Pt.X>a.Pt.X?i.Direction.dRightToLeft:i.Direction.dLeftToRight,z=c.Pt.X>d.Pt.X?i.Direction.dRightToLeft:i.Direction.dLeftToRight;if(I===z)return!1;if(I===i.Direction.dLeftToRight){for(;r.Next.Pt.X<=x.X&&r.Next.Pt.X>=r.Pt.X&&r.Next.Pt.Y===x.Y;)r=r.Next;S&&r.Pt.X!==x.X&&(r=r.Next),a=this.DupOutPt(r,!S),i.IntPoint.op_Inequality(a.Pt,x)&&(r=a,r.Pt.X=x.X,r.Pt.Y=x.Y,i.use_xyz&&(r.Pt.Z=x.Z),a=this.DupOutPt(r,!S))}else{for(;r.Next.Pt.X>=x.X&&r.Next.Pt.X<=r.Pt.X&&r.Next.Pt.Y===x.Y;)r=r.Next;!S&&r.Pt.X!==x.X&&(r=r.Next),a=this.DupOutPt(r,S),i.IntPoint.op_Inequality(a.Pt,x)&&(r=a,r.Pt.X=x.X,r.Pt.Y=x.Y,i.use_xyz&&(r.Pt.Z=x.Z),a=this.DupOutPt(r,S))}if(z===i.Direction.dLeftToRight){for(;c.Next.Pt.X<=x.X&&c.Next.Pt.X>=c.Pt.X&&c.Next.Pt.Y===x.Y;)c=c.Next;S&&c.Pt.X!==x.X&&(c=c.Next),d=this.DupOutPt(c,!S),i.IntPoint.op_Inequality(d.Pt,x)&&(c=d,c.Pt.X=x.X,c.Pt.Y=x.Y,i.use_xyz&&(c.Pt.Z=x.Z),d=this.DupOutPt(c,!S))}else{for(;c.Next.Pt.X>=x.X&&c.Next.Pt.X<=c.Pt.X&&c.Next.Pt.Y===x.Y;)c=c.Next;!S&&c.Pt.X!==x.X&&(c=c.Next),d=this.DupOutPt(c,S),i.IntPoint.op_Inequality(d.Pt,x)&&(c=d,c.Pt.X=x.X,c.Pt.Y=x.Y,i.use_xyz&&(c.Pt.Z=x.Z),d=this.DupOutPt(c,S))}return I===i.Direction.dLeftToRight===S?(r.Prev=c,c.Next=r,a.Next=d,d.Prev=a):(r.Next=c,c.Prev=r,a.Prev=d,d.Next=a),!0},i.Clipper.prototype.JoinPoints=function(r,a,c){var d=r.OutPt1,x=new i.OutPt,S=r.OutPt2,I=new i.OutPt,z=r.OutPt1.Pt.Y===r.OffPt.Y;if(z&&i.IntPoint.op_Equality(r.OffPt,r.OutPt1.Pt)&&i.IntPoint.op_Equality(r.OffPt,r.OutPt2.Pt)){if(a!==c)return!1;for(x=r.OutPt1.Next;x!==d&&i.IntPoint.op_Equality(x.Pt,r.OffPt);)x=x.Next;var V=x.Pt.Y>r.OffPt.Y;for(I=r.OutPt2.Next;I!==S&&i.IntPoint.op_Equality(I.Pt,r.OffPt);)I=I.Next;var $=I.Pt.Y>r.OffPt.Y;return V===$?!1:V?(x=this.DupOutPt(d,!1),I=this.DupOutPt(S,!0),d.Prev=S,S.Next=d,x.Next=I,I.Prev=x,r.OutPt1=d,r.OutPt2=x,!0):(x=this.DupOutPt(d,!0),I=this.DupOutPt(S,!1),d.Next=S,S.Prev=d,x.Prev=I,I.Next=x,r.OutPt1=d,r.OutPt2=x,!0)}else if(z){for(x=d;d.Prev.Pt.Y===d.Pt.Y&&d.Prev!==x&&d.Prev!==S;)d=d.Prev;for(;x.Next.Pt.Y===x.Pt.Y&&x.Next!==d&&x.Next!==S;)x=x.Next;if(x.Next===d||x.Next===S)return!1;for(I=S;S.Prev.Pt.Y===S.Pt.Y&&S.Prev!==I&&S.Prev!==x;)S=S.Prev;for(;I.Next.Pt.Y===I.Pt.Y&&I.Next!==S&&I.Next!==d;)I=I.Next;if(I.Next===S||I.Next===d)return!1;var ht={Left:null,Right:null};if(!this.GetOverlap(d.Pt.X,x.Pt.X,S.Pt.X,I.Pt.X,ht))return!1;var ct=ht.Left,gt=ht.Right,Wt=new i.IntPoint0,oe;return d.Pt.X>=ct&&d.Pt.X<=gt?(Wt.X=d.Pt.X,Wt.Y=d.Pt.Y,i.use_xyz&&(Wt.Z=d.Pt.Z),oe=d.Pt.X>x.Pt.X):S.Pt.X>=ct&&S.Pt.X<=gt?(Wt.X=S.Pt.X,Wt.Y=S.Pt.Y,i.use_xyz&&(Wt.Z=S.Pt.Z),oe=S.Pt.X>I.Pt.X):x.Pt.X>=ct&&x.Pt.X<=gt?(Wt.X=x.Pt.X,Wt.Y=x.Pt.Y,i.use_xyz&&(Wt.Z=x.Pt.Z),oe=x.Pt.X>d.Pt.X):(Wt.X=I.Pt.X,Wt.Y=I.Pt.Y,i.use_xyz&&(Wt.Z=I.Pt.Z),oe=I.Pt.X>S.Pt.X),r.OutPt1=d,r.OutPt2=S,this.JoinHorz(d,x,S,I,Wt,oe)}else{for(x=d.Next;i.IntPoint.op_Equality(x.Pt,d.Pt)&&x!==d;)x=x.Next;var he=x.Pt.Y>d.Pt.Y||!i.ClipperBase.SlopesEqual4(d.Pt,x.Pt,r.OffPt,this.m_UseFullRange);if(he){for(x=d.Prev;i.IntPoint.op_Equality(x.Pt,d.Pt)&&x!==d;)x=x.Prev;if(x.Pt.Y>d.Pt.Y||!i.ClipperBase.SlopesEqual4(d.Pt,x.Pt,r.OffPt,this.m_UseFullRange))return!1}for(I=S.Next;i.IntPoint.op_Equality(I.Pt,S.Pt)&&I!==S;)I=I.Next;var Ce=I.Pt.Y>S.Pt.Y||!i.ClipperBase.SlopesEqual4(S.Pt,I.Pt,r.OffPt,this.m_UseFullRange);if(Ce){for(I=S.Prev;i.IntPoint.op_Equality(I.Pt,S.Pt)&&I!==S;)I=I.Prev;if(I.Pt.Y>S.Pt.Y||!i.ClipperBase.SlopesEqual4(S.Pt,I.Pt,r.OffPt,this.m_UseFullRange))return!1}return x===d||I===S||x===I||a===c&&he===Ce?!1:he?(x=this.DupOutPt(d,!1),I=this.DupOutPt(S,!0),d.Prev=S,S.Next=d,x.Next=I,I.Prev=x,r.OutPt1=d,r.OutPt2=x,!0):(x=this.DupOutPt(d,!0),I=this.DupOutPt(S,!1),d.Next=S,S.Prev=d,x.Prev=I,I.Next=x,r.OutPt1=d,r.OutPt2=x,!0)}},i.Clipper.GetBounds=function(r){for(var a=0,c=r.length;a<c&&r[a].length===0;)a++;if(a===c)return new i.IntRect(0,0,0,0);var d=new i.IntRect;for(d.left=r[a][0].X,d.right=d.left,d.top=r[a][0].Y,d.bottom=d.top;a<c;a++)for(var x=0,S=r[a].length;x<S;x++)r[a][x].X<d.left?d.left=r[a][x].X:r[a][x].X>d.right&&(d.right=r[a][x].X),r[a][x].Y<d.top?d.top=r[a][x].Y:r[a][x].Y>d.bottom&&(d.bottom=r[a][x].Y);return d},i.Clipper.prototype.GetBounds2=function(r){var a=r,c=new i.IntRect;for(c.left=r.Pt.X,c.right=r.Pt.X,c.top=r.Pt.Y,c.bottom=r.Pt.Y,r=r.Next;r!==a;)r.Pt.X<c.left&&(c.left=r.Pt.X),r.Pt.X>c.right&&(c.right=r.Pt.X),r.Pt.Y<c.top&&(c.top=r.Pt.Y),r.Pt.Y>c.bottom&&(c.bottom=r.Pt.Y),r=r.Next;return c},i.Clipper.PointInPolygon=function(r,a){var c=0,d=a.length;if(d<3)return 0;for(var x=a[0],S=1;S<=d;++S){var I=S===d?a[0]:a[S];if(I.Y===r.Y&&(I.X===r.X||x.Y===r.Y&&I.X>r.X==x.X<r.X))return-1;if(x.Y<r.Y!=I.Y<r.Y){if(x.X>=r.X)if(I.X>r.X)c=1-c;else{var z=(x.X-r.X)*(I.Y-r.Y)-(I.X-r.X)*(x.Y-r.Y);if(z===0)return-1;z>0==I.Y>x.Y&&(c=1-c)}else if(I.X>r.X){var z=(x.X-r.X)*(I.Y-r.Y)-(I.X-r.X)*(x.Y-r.Y);if(z===0)return-1;z>0==I.Y>x.Y&&(c=1-c)}}x=I}return c},i.Clipper.prototype.PointInPolygon=function(r,a){var c=0,d=a,x=r.X,S=r.Y,I=a.Pt.X,z=a.Pt.Y;do{a=a.Next;var V=a.Pt.X,$=a.Pt.Y;if($===S&&(V===x||z===S&&V>x==I<x))return-1;if(z<S!=$<S){if(I>=x)if(V>x)c=1-c;else{var ht=(I-x)*($-S)-(V-x)*(z-S);if(ht===0)return-1;ht>0==$>z&&(c=1-c)}else if(V>x){var ht=(I-x)*($-S)-(V-x)*(z-S);if(ht===0)return-1;ht>0==$>z&&(c=1-c)}}I=V,z=$}while(d!==a);return c},i.Clipper.prototype.Poly2ContainsPoly1=function(r,a){var c=r;do{var d=this.PointInPolygon(c.Pt,a);if(d>=0)return d>0;c=c.Next}while(c!==r);return!0},i.Clipper.prototype.FixupFirstLefts1=function(r,a){for(var c,d,x=0,S=this.m_PolyOuts.length;x<S;x++)c=this.m_PolyOuts[x],d=i.Clipper.ParseFirstLeft(c.FirstLeft),c.Pts!==null&&d===r&&this.Poly2ContainsPoly1(c.Pts,a.Pts)&&(c.FirstLeft=a)},i.Clipper.prototype.FixupFirstLefts2=function(r,a){for(var c=a.FirstLeft,d,x,S=0,I=this.m_PolyOuts.length;S<I;S++)d=this.m_PolyOuts[S],!(d.Pts===null||d===a||d===r)&&(x=i.Clipper.ParseFirstLeft(d.FirstLeft),!(x!==c&&x!==r&&x!==a)&&(this.Poly2ContainsPoly1(d.Pts,r.Pts)?d.FirstLeft=r:this.Poly2ContainsPoly1(d.Pts,a.Pts)?d.FirstLeft=a:(d.FirstLeft===r||d.FirstLeft===a)&&(d.FirstLeft=c)))},i.Clipper.prototype.FixupFirstLefts3=function(r,a){for(var c,d,x=0,S=this.m_PolyOuts.length;x<S;x++)c=this.m_PolyOuts[x],d=i.Clipper.ParseFirstLeft(c.FirstLeft),c.Pts!==null&&d===r&&(c.FirstLeft=a)},i.Clipper.ParseFirstLeft=function(r){for(;r!==null&&r.Pts===null;)r=r.FirstLeft;return r},i.Clipper.prototype.JoinCommonEdges=function(){for(var r=0,a=this.m_Joins.length;r<a;r++){var c=this.m_Joins[r],d=this.GetOutRec(c.OutPt1.Idx),x=this.GetOutRec(c.OutPt2.Idx);if(!(d.Pts===null||x.Pts===null)&&!(d.IsOpen||x.IsOpen)){var S;d===x?S=d:this.OutRec1RightOfOutRec2(d,x)?S=x:this.OutRec1RightOfOutRec2(x,d)?S=d:S=this.GetLowermostRec(d,x),this.JoinPoints(c,d,x)&&(d===x?(d.Pts=c.OutPt1,d.BottomPt=null,x=this.CreateOutRec(),x.Pts=c.OutPt2,this.UpdateOutPtIdxs(x),this.Poly2ContainsPoly1(x.Pts,d.Pts)?(x.IsHole=!d.IsHole,x.FirstLeft=d,this.m_UsingPolyTree&&this.FixupFirstLefts2(x,d),(x.IsHole^this.ReverseSolution)==this.Area$1(x)>0&&this.ReversePolyPtLinks(x.Pts)):this.Poly2ContainsPoly1(d.Pts,x.Pts)?(x.IsHole=d.IsHole,d.IsHole=!x.IsHole,x.FirstLeft=d.FirstLeft,d.FirstLeft=x,this.m_UsingPolyTree&&this.FixupFirstLefts2(d,x),(d.IsHole^this.ReverseSolution)==this.Area$1(d)>0&&this.ReversePolyPtLinks(d.Pts)):(x.IsHole=d.IsHole,x.FirstLeft=d.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(d,x))):(x.Pts=null,x.BottomPt=null,x.Idx=d.Idx,d.IsHole=S.IsHole,S===x&&(d.FirstLeft=x.FirstLeft),x.FirstLeft=d,this.m_UsingPolyTree&&this.FixupFirstLefts3(x,d)))}}},i.Clipper.prototype.UpdateOutPtIdxs=function(r){var a=r.Pts;do a.Idx=r.Idx,a=a.Prev;while(a!==r.Pts)},i.Clipper.prototype.DoSimplePolygons=function(){for(var r=0;r<this.m_PolyOuts.length;){var a=this.m_PolyOuts[r++],c=a.Pts;if(!(c===null||a.IsOpen))do{for(var d=c.Next;d!==a.Pts;){if(i.IntPoint.op_Equality(c.Pt,d.Pt)&&d.Next!==c&&d.Prev!==c){var x=c.Prev,S=d.Prev;c.Prev=S,S.Next=c,d.Prev=x,x.Next=d,a.Pts=c;var I=this.CreateOutRec();I.Pts=d,this.UpdateOutPtIdxs(I),this.Poly2ContainsPoly1(I.Pts,a.Pts)?(I.IsHole=!a.IsHole,I.FirstLeft=a,this.m_UsingPolyTree&&this.FixupFirstLefts2(I,a)):this.Poly2ContainsPoly1(a.Pts,I.Pts)?(I.IsHole=a.IsHole,a.IsHole=!I.IsHole,I.FirstLeft=a.FirstLeft,a.FirstLeft=I,this.m_UsingPolyTree&&this.FixupFirstLefts2(a,I)):(I.IsHole=a.IsHole,I.FirstLeft=a.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(a,I)),d=c}d=d.Next}c=c.Next}while(c!==a.Pts)}},i.Clipper.Area=function(r){if(!Array.isArray(r))return 0;var a=r.length;if(a<3)return 0;for(var c=0,d=0,x=a-1;d<a;++d)c+=(r[x].X+r[d].X)*(r[x].Y-r[d].Y),x=d;return-c*.5},i.Clipper.prototype.Area=function(r){var a=r;if(r===null)return 0;var c=0;do c=c+(r.Prev.Pt.X+r.Pt.X)*(r.Prev.Pt.Y-r.Pt.Y),r=r.Next;while(r!==a);return c*.5},i.Clipper.prototype.Area$1=function(r){return this.Area(r.Pts)},i.Clipper.SimplifyPolygon=function(r,a){var c=new Array,d=new i.Clipper(0);return d.StrictlySimple=!0,d.AddPath(r,i.PolyType.ptSubject,!0),d.Execute(i.ClipType.ctUnion,c,a,a),c},i.Clipper.SimplifyPolygons=function(r,a){typeof a>"u"&&(a=i.PolyFillType.pftEvenOdd);var c=new Array,d=new i.Clipper(0);return d.StrictlySimple=!0,d.AddPaths(r,i.PolyType.ptSubject,!0),d.Execute(i.ClipType.ctUnion,c,a,a),c},i.Clipper.DistanceSqrd=function(r,a){var c=r.X-a.X,d=r.Y-a.Y;return c*c+d*d},i.Clipper.DistanceFromLineSqrd=function(r,a,c){var d=a.Y-c.Y,x=c.X-a.X,S=d*a.X+x*a.Y;return S=d*r.X+x*r.Y-S,S*S/(d*d+x*x)},i.Clipper.SlopesNearCollinear=function(r,a,c,d){return Math.abs(r.X-a.X)>Math.abs(r.Y-a.Y)?r.X>a.X==r.X<c.X?i.Clipper.DistanceFromLineSqrd(r,a,c)<d:a.X>r.X==a.X<c.X?i.Clipper.DistanceFromLineSqrd(a,r,c)<d:i.Clipper.DistanceFromLineSqrd(c,r,a)<d:r.Y>a.Y==r.Y<c.Y?i.Clipper.DistanceFromLineSqrd(r,a,c)<d:a.Y>r.Y==a.Y<c.Y?i.Clipper.DistanceFromLineSqrd(a,r,c)<d:i.Clipper.DistanceFromLineSqrd(c,r,a)<d},i.Clipper.PointsAreClose=function(r,a,c){var d=r.X-a.X,x=r.Y-a.Y;return d*d+x*x<=c},i.Clipper.ExcludeOp=function(r){var a=r.Prev;return a.Next=r.Next,r.Next.Prev=a,a.Idx=0,a},i.Clipper.CleanPolygon=function(r,a){typeof a>"u"&&(a=1.415);var c=r.length;if(c===0)return new Array;for(var d=new Array(c),x=0;x<c;++x)d[x]=new i.OutPt;for(var x=0;x<c;++x)d[x].Pt=r[x],d[x].Next=d[(x+1)%c],d[x].Next.Prev=d[x],d[x].Idx=0;for(var S=a*a,I=d[0];I.Idx===0&&I.Next!==I.Prev;)i.Clipper.PointsAreClose(I.Pt,I.Prev.Pt,S)?(I=i.Clipper.ExcludeOp(I),c--):i.Clipper.PointsAreClose(I.Prev.Pt,I.Next.Pt,S)?(i.Clipper.ExcludeOp(I.Next),I=i.Clipper.ExcludeOp(I),c-=2):i.Clipper.SlopesNearCollinear(I.Prev.Pt,I.Pt,I.Next.Pt,S)?(I=i.Clipper.ExcludeOp(I),c--):(I.Idx=1,I=I.Next);c<3&&(c=0);for(var z=new Array(c),x=0;x<c;++x)z[x]=new i.IntPoint1(I.Pt),I=I.Next;return d=null,z},i.Clipper.CleanPolygons=function(r,a){for(var c=new Array(r.length),d=0,x=r.length;d<x;d++)c[d]=i.Clipper.CleanPolygon(r[d],a);return c},i.Clipper.Minkowski=function(r,a,c,d){var x=d?1:0,S=r.length,I=a.length,z=new Array;if(c)for(var V=0;V<I;V++){for(var $=new Array(S),ht=0,ct=r.length,gt=r[ht];ht<ct;ht++,gt=r[ht])$[ht]=new i.IntPoint2(a[V].X+gt.X,a[V].Y+gt.Y);z.push($)}else for(var V=0;V<I;V++){for(var $=new Array(S),ht=0,ct=r.length,gt=r[ht];ht<ct;ht++,gt=r[ht])$[ht]=new i.IntPoint2(a[V].X-gt.X,a[V].Y-gt.Y);z.push($)}for(var Wt=new Array,V=0;V<I-1+x;V++)for(var ht=0;ht<S;ht++){var oe=new Array;oe.push(z[V%I][ht%S]),oe.push(z[(V+1)%I][ht%S]),oe.push(z[(V+1)%I][(ht+1)%S]),oe.push(z[V%I][(ht+1)%S]),i.Clipper.Orientation(oe)||oe.reverse(),Wt.push(oe)}return Wt},i.Clipper.MinkowskiSum=function(r,a,c){if(a[0]instanceof Array){for(var x=a,I=new i.Paths,S=new i.Clipper,z=0;z<x.length;++z){var V=i.Clipper.Minkowski(r,x[z],!0,c);if(S.AddPaths(V,i.PolyType.ptSubject,!0),c){var d=i.Clipper.TranslatePath(x[z],r[0]);S.AddPath(d,i.PolyType.ptClip,!0)}}return S.Execute(i.ClipType.ctUnion,I,i.PolyFillType.pftNonZero,i.PolyFillType.pftNonZero),I}else{var d=a,x=i.Clipper.Minkowski(r,d,!0,c),S=new i.Clipper;return S.AddPaths(x,i.PolyType.ptSubject,!0),S.Execute(i.ClipType.ctUnion,x,i.PolyFillType.pftNonZero,i.PolyFillType.pftNonZero),x}},i.Clipper.TranslatePath=function(r,a){for(var c=new i.Path,d=0;d<r.length;d++)c.push(new i.IntPoint2(r[d].X+a.X,r[d].Y+a.Y));return c},i.Clipper.MinkowskiDiff=function(r,a){var c=i.Clipper.Minkowski(r,a,!1,!0),d=new i.Clipper;return d.AddPaths(c,i.PolyType.ptSubject,!0),d.Execute(i.ClipType.ctUnion,c,i.PolyFillType.pftNonZero,i.PolyFillType.pftNonZero),c},i.Clipper.PolyTreeToPaths=function(r){var a=new Array;return i.Clipper.AddPolyNodeToPaths(r,i.Clipper.NodeType.ntAny,a),a},i.Clipper.AddPolyNodeToPaths=function(r,a,c){var d=!0;switch(a){case i.Clipper.NodeType.ntOpen:return;case i.Clipper.NodeType.ntClosed:d=!r.IsOpen;break;default:break}r.m_polygon.length>0&&d&&c.push(r.m_polygon);for(var x=0,S=r.Childs(),I=S.length,z=S[x];x<I;x++,z=S[x])i.Clipper.AddPolyNodeToPaths(z,a,c)},i.Clipper.OpenPathsFromPolyTree=function(r){for(var a=new i.Paths,c=0,d=r.ChildCount();c<d;c++)r.Childs()[c].IsOpen&&a.push(r.Childs()[c].m_polygon);return a},i.Clipper.ClosedPathsFromPolyTree=function(r){var a=new i.Paths;return i.Clipper.AddPolyNodeToPaths(r,i.Clipper.NodeType.ntClosed,a),a},ce(i.Clipper,i.ClipperBase),i.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},i.ClipperOffset=function(r,a){typeof r>"u"&&(r=2),typeof a>"u"&&(a=i.ClipperOffset.def_arc_tolerance),this.m_destPolys=new i.Paths,this.m_srcPoly=new i.Path,this.m_destPoly=new i.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new i.IntPoint0,this.m_polyNodes=new i.PolyNode,this.MiterLimit=r,this.ArcTolerance=a,this.m_lowest.X=-1},i.ClipperOffset.two_pi=6.28318530717959,i.ClipperOffset.def_arc_tolerance=.25,i.ClipperOffset.prototype.Clear=function(){i.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},i.ClipperOffset.Round=i.Clipper.Round,i.ClipperOffset.prototype.AddPath=function(r,a,c){var d=r.length-1;if(!(d<0)){var x=new i.PolyNode;if(x.m_jointype=a,x.m_endtype=c,c===i.EndType.etClosedLine||c===i.EndType.etClosedPolygon)for(;d>0&&i.IntPoint.op_Equality(r[0],r[d]);)d--;x.m_polygon.push(r[0]);for(var S=0,I=0,z=1;z<=d;z++)i.IntPoint.op_Inequality(x.m_polygon[S],r[z])&&(S++,x.m_polygon.push(r[z]),(r[z].Y>x.m_polygon[I].Y||r[z].Y===x.m_polygon[I].Y&&r[z].X<x.m_polygon[I].X)&&(I=S));if(!(c===i.EndType.etClosedPolygon&&S<2)&&(this.m_polyNodes.AddChild(x),c===i.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new i.IntPoint2(this.m_polyNodes.ChildCount()-1,I);else{var V=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(x.m_polygon[I].Y>V.Y||x.m_polygon[I].Y===V.Y&&x.m_polygon[I].X<V.X)&&(this.m_lowest=new i.IntPoint2(this.m_polyNodes.ChildCount()-1,I))}}},i.ClipperOffset.prototype.AddPaths=function(r,a,c){for(var d=0,x=r.length;d<x;d++)this.AddPath(r[d],a,c)},i.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!i.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var r=0;r<this.m_polyNodes.ChildCount();r++){var a=this.m_polyNodes.Childs()[r];(a.m_endtype===i.EndType.etClosedPolygon||a.m_endtype===i.EndType.etClosedLine&&i.Clipper.Orientation(a.m_polygon))&&a.m_polygon.reverse()}else for(var r=0;r<this.m_polyNodes.ChildCount();r++){var a=this.m_polyNodes.Childs()[r];a.m_endtype===i.EndType.etClosedLine&&!i.Clipper.Orientation(a.m_polygon)&&a.m_polygon.reverse()}},i.ClipperOffset.GetUnitNormal=function(r,a){var c=a.X-r.X,d=a.Y-r.Y;if(c===0&&d===0)return new i.DoublePoint2(0,0);var x=1/Math.sqrt(c*c+d*d);return c*=x,d*=x,new i.DoublePoint2(d,-c)},i.ClipperOffset.prototype.DoOffset=function(r){if(this.m_destPolys=new Array,this.m_delta=r,i.ClipperBase.near_zero(r)){for(var a=0;a<this.m_polyNodes.ChildCount();a++){var c=this.m_polyNodes.Childs()[a];c.m_endtype===i.EndType.etClosedPolygon&&this.m_destPolys.push(c.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var d;this.ArcTolerance<=0?d=i.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(r)*i.ClipperOffset.def_arc_tolerance?d=Math.abs(r)*i.ClipperOffset.def_arc_tolerance:d=this.ArcTolerance;var x=3.14159265358979/Math.acos(1-d/Math.abs(r));this.m_sin=Math.sin(i.ClipperOffset.two_pi/x),this.m_cos=Math.cos(i.ClipperOffset.two_pi/x),this.m_StepsPerRad=x/i.ClipperOffset.two_pi,r<0&&(this.m_sin=-this.m_sin);for(var a=0;a<this.m_polyNodes.ChildCount();a++){var c=this.m_polyNodes.Childs()[a];this.m_srcPoly=c.m_polygon;var S=this.m_srcPoly.length;if(!(S===0||r<=0&&(S<3||c.m_endtype!==i.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,S===1){if(c.m_jointype===i.JoinType.jtRound)for(var I=1,z=0,V=1;V<=x;V++){this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[0].X+I*r),i.ClipperOffset.Round(this.m_srcPoly[0].Y+z*r)));var $=I;I=I*this.m_cos-this.m_sin*z,z=$*this.m_sin+z*this.m_cos}else for(var I=-1,z=-1,V=0;V<4;++V)this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[0].X+I*r),i.ClipperOffset.Round(this.m_srcPoly[0].Y+z*r))),I<0?I=1:z<0?z=1:I=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var V=0;V<S-1;V++)this.m_normals.push(i.ClipperOffset.GetUnitNormal(this.m_srcPoly[V],this.m_srcPoly[V+1]));if(c.m_endtype===i.EndType.etClosedLine||c.m_endtype===i.EndType.etClosedPolygon?this.m_normals.push(i.ClipperOffset.GetUnitNormal(this.m_srcPoly[S-1],this.m_srcPoly[0])):this.m_normals.push(new i.DoublePoint1(this.m_normals[S-2])),c.m_endtype===i.EndType.etClosedPolygon){for(var ht=S-1,V=0;V<S;V++)ht=this.OffsetPoint(V,ht,c.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(c.m_endtype===i.EndType.etClosedLine){for(var ht=S-1,V=0;V<S;V++)ht=this.OffsetPoint(V,ht,c.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var ct=this.m_normals[S-1],V=S-1;V>0;V--)this.m_normals[V]=new i.DoublePoint2(-this.m_normals[V-1].X,-this.m_normals[V-1].Y);this.m_normals[0]=new i.DoublePoint2(-ct.X,-ct.Y),ht=0;for(var V=S-1;V>=0;V--)ht=this.OffsetPoint(V,ht,c.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var ht=0,V=1;V<S-1;++V)ht=this.OffsetPoint(V,ht,c.m_jointype);var gt;if(c.m_endtype===i.EndType.etOpenButt){var V=S-1;gt=new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[V].X+this.m_normals[V].X*r),i.ClipperOffset.Round(this.m_srcPoly[V].Y+this.m_normals[V].Y*r)),this.m_destPoly.push(gt),gt=new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[V].X-this.m_normals[V].X*r),i.ClipperOffset.Round(this.m_srcPoly[V].Y-this.m_normals[V].Y*r)),this.m_destPoly.push(gt)}else{var V=S-1;ht=S-2,this.m_sinA=0,this.m_normals[V]=new i.DoublePoint2(-this.m_normals[V].X,-this.m_normals[V].Y),c.m_endtype===i.EndType.etOpenSquare?this.DoSquare(V,ht):this.DoRound(V,ht)}for(var V=S-1;V>0;V--)this.m_normals[V]=new i.DoublePoint2(-this.m_normals[V-1].X,-this.m_normals[V-1].Y);this.m_normals[0]=new i.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),ht=S-1;for(var V=ht-1;V>0;--V)ht=this.OffsetPoint(V,ht,c.m_jointype);c.m_endtype===i.EndType.etOpenButt?(gt=new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*r),i.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*r)),this.m_destPoly.push(gt),gt=new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*r),i.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*r)),this.m_destPoly.push(gt)):(ht=1,this.m_sinA=0,c.m_endtype===i.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},i.ClipperOffset.prototype.Execute=function(){var r=arguments,a=r[0]instanceof i.PolyTree;if(a){var c=r[0],d=r[1];c.Clear(),this.FixOrientations(),this.DoOffset(d);var x=new i.Clipper(0);if(x.AddPaths(this.m_destPolys,i.PolyType.ptSubject,!0),d>0)x.Execute(i.ClipType.ctUnion,c,i.PolyFillType.pftPositive,i.PolyFillType.pftPositive);else{var S=i.Clipper.GetBounds(this.m_destPolys),I=new i.Path;if(I.push(new i.IntPoint2(S.left-10,S.bottom+10)),I.push(new i.IntPoint2(S.right+10,S.bottom+10)),I.push(new i.IntPoint2(S.right+10,S.top-10)),I.push(new i.IntPoint2(S.left-10,S.top-10)),x.AddPath(I,i.PolyType.ptSubject,!0),x.ReverseSolution=!0,x.Execute(i.ClipType.ctUnion,c,i.PolyFillType.pftNegative,i.PolyFillType.pftNegative),c.ChildCount()===1&&c.Childs()[0].ChildCount()>0){var z=c.Childs()[0];c.Childs()[0]=z.Childs()[0],c.Childs()[0].m_Parent=c;for(var V=1;V<z.ChildCount();V++)c.AddChild(z.Childs()[V])}else c.Clear()}}else{var c=r[0],d=r[1];i.Clear(c),this.FixOrientations(),this.DoOffset(d);var x=new i.Clipper(0);if(x.AddPaths(this.m_destPolys,i.PolyType.ptSubject,!0),d>0)x.Execute(i.ClipType.ctUnion,c,i.PolyFillType.pftPositive,i.PolyFillType.pftPositive);else{var S=i.Clipper.GetBounds(this.m_destPolys),I=new i.Path;I.push(new i.IntPoint2(S.left-10,S.bottom+10)),I.push(new i.IntPoint2(S.right+10,S.bottom+10)),I.push(new i.IntPoint2(S.right+10,S.top-10)),I.push(new i.IntPoint2(S.left-10,S.top-10)),x.AddPath(I,i.PolyType.ptSubject,!0),x.ReverseSolution=!0,x.Execute(i.ClipType.ctUnion,c,i.PolyFillType.pftNegative,i.PolyFillType.pftNegative),c.length>0&&c.splice(0,1)}}},i.ClipperOffset.prototype.OffsetPoint=function(r,a,c){if(this.m_sinA=this.m_normals[a].X*this.m_normals[r].Y-this.m_normals[r].X*this.m_normals[a].Y,Math.abs(this.m_sinA*this.m_delta)<1){var d=this.m_normals[a].X*this.m_normals[r].X+this.m_normals[r].Y*this.m_normals[a].Y;if(d>0)return this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[a].X*this.m_delta),i.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[a].Y*this.m_delta))),a}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[a].X*this.m_delta),i.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[a].Y*this.m_delta))),this.m_destPoly.push(new i.IntPoint1(this.m_srcPoly[r])),this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),i.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)));else switch(c){case i.JoinType.jtMiter:{var x=1+(this.m_normals[r].X*this.m_normals[a].X+this.m_normals[r].Y*this.m_normals[a].Y);x>=this.m_miterLim?this.DoMiter(r,a,x):this.DoSquare(r,a);break}case i.JoinType.jtSquare:this.DoSquare(r,a);break;case i.JoinType.jtRound:this.DoRound(r,a);break}return a=r,a},i.ClipperOffset.prototype.DoSquare=function(r,a){var c=Math.tan(Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[r].X+this.m_normals[a].Y*this.m_normals[r].Y)/4);this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[a].X-this.m_normals[a].Y*c)),i.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[a].Y+this.m_normals[a].X*c)))),this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[r].X+this.m_normals[r].Y*c)),i.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[r].Y-this.m_normals[r].X*c))))},i.ClipperOffset.prototype.DoMiter=function(r,a,c){var d=this.m_delta/c;this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[r].X+(this.m_normals[a].X+this.m_normals[r].X)*d),i.ClipperOffset.Round(this.m_srcPoly[r].Y+(this.m_normals[a].Y+this.m_normals[r].Y)*d)))},i.ClipperOffset.prototype.DoRound=function(r,a){for(var c=Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[r].X+this.m_normals[a].Y*this.m_normals[r].Y),d=Math.max(i.Cast_Int32(i.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(c))),1),x=this.m_normals[a].X,S=this.m_normals[a].Y,I,z=0;z<d;++z)this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[r].X+x*this.m_delta),i.ClipperOffset.Round(this.m_srcPoly[r].Y+S*this.m_delta))),I=x,x=x*this.m_cos-this.m_sin*S,S=I*this.m_sin+S*this.m_cos;this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),i.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)))},i.Error=function(r){try{throw new Error(r)}catch(a){alert(a.message)}},i.JS={},i.JS.AreaOfPolygon=function(r,a){return a||(a=1),i.Clipper.Area(r)/(a*a)},i.JS.AreaOfPolygons=function(r,a){a||(a=1);for(var c=0,d=0;d<r.length;d++)c+=i.Clipper.Area(r[d]);return c/(a*a)},i.JS.BoundsOfPath=function(r,a){return i.JS.BoundsOfPaths([r],a)},i.JS.BoundsOfPaths=function(r,a){a||(a=1);var c=i.Clipper.GetBounds(r);return c.left/=a,c.bottom/=a,c.right/=a,c.top/=a,c},i.JS.Clean=function(d,a){if(!(d instanceof Array))return[];var c=d[0]instanceof Array,d=i.JS.Clone(d);if(typeof a!="number"||a===null)return i.Error("Delta is not a number in Clean()."),d;if(d.length===0||d.length===1&&d[0].length===0||a<0)return d;c||(d=[d]);for(var x=d.length,S,I,z,V,$,ht,ct,gt=[],Wt=0;Wt<x;Wt++)if(I=d[Wt],S=I.length,S!==0){if(S<3){z=I,gt.push(z);continue}for(z=I,V=a*a,$=I[0],ht=1,ct=1;ct<S;ct++)(I[ct].X-$.X)*(I[ct].X-$.X)+(I[ct].Y-$.Y)*(I[ct].Y-$.Y)<=V||(z[ht]=I[ct],$=I[ct],ht++);$=I[ht-1],(I[0].X-$.X)*(I[0].X-$.X)+(I[0].Y-$.Y)*(I[0].Y-$.Y)<=V&&ht--,ht<S&&z.splice(ht,S-ht),z.length&&gt.push(z)}return!c&&gt.length?gt=gt[0]:!c&&gt.length===0?gt=[]:c&&gt.length===0&&(gt=[[]]),gt},i.JS.Clone=function(r){if(!(r instanceof Array))return[];if(r.length===0)return[];if(r.length===1&&r[0].length===0)return[[]];var a=r[0]instanceof Array;a||(r=[r]);var c=r.length,d,x,S,I,z=new Array(c);for(x=0;x<c;x++){for(d=r[x].length,I=new Array(d),S=0;S<d;S++)I[S]={X:r[x][S].X,Y:r[x][S].Y};z[x]=I}return a||(z=z[0]),z},i.JS.Lighten=function(r,a){if(!(r instanceof Array))return[];if(typeof a!="number"||a===null)return i.Error("Tolerance is not a number in Lighten()."),i.JS.Clone(r);if(r.length===0||r.length===1&&r[0].length===0||a<0)return i.JS.Clone(r);var c=r[0]instanceof Array;c||(r=[r]);var d,x,S,I,z,V,$,ht,ct,gt,Wt,oe,he,Ce,ci,ki,ns,ad=r.length,ld=a*a,ss=[];for(d=0;d<ad;d++)if(S=r[d],V=S.length,V!==0){for(I=0;I<1e6;I++){for(z=[],V=S.length,S[V-1].X!==S[0].X||S[V-1].Y!==S[0].Y?(oe=1,S.push({X:S[0].X,Y:S[0].Y}),V=S.length):oe=0,Wt=[],x=0;x<V-2;x++)$=S[x],ct=S[x+1],ht=S[x+2],ki=$.X,ns=$.Y,he=ht.X-ki,Ce=ht.Y-ns,(he!==0||Ce!==0)&&(ci=((ct.X-ki)*he+(ct.Y-ns)*Ce)/(he*he+Ce*Ce),ci>1?(ki=ht.X,ns=ht.Y):ci>0&&(ki+=he*ci,ns+=Ce*ci)),he=ct.X-ki,Ce=ct.Y-ns,gt=he*he+Ce*Ce,gt<=ld&&(Wt[x+1]=1,x++);for(z.push({X:S[0].X,Y:S[0].Y}),x=1;x<V-1;x++)Wt[x]||z.push({X:S[x].X,Y:S[x].Y});if(z.push({X:S[V-1].X,Y:S[V-1].Y}),oe&&S.pop(),Wt.length)S=z;else break}V=z.length,z[V-1].X===z[0].X&&z[V-1].Y===z[0].Y&&z.pop(),z.length>2&&ss.push(z)}return c||(ss=ss[0]),typeof ss>"u"&&(ss=[]),ss},i.JS.PerimeterOfPath=function(r,a,c){if(typeof r>"u")return 0;var d=Math.sqrt,x=0,S,I,z=0,V=0,$=0,ht=0,ct=r.length;if(ct<2)return 0;for(a&&(r[ct]=r[0],ct++);--ct;)S=r[ct],z=S.X,V=S.Y,I=r[ct-1],$=I.X,ht=I.Y,x+=d((z-$)*(z-$)+(V-ht)*(V-ht));return a&&r.pop(),x/c},i.JS.PerimeterOfPaths=function(r,a,c){c||(c=1);for(var d=0,x=0;x<r.length;x++)d+=i.JS.PerimeterOfPath(r[x],a,c);return d},i.JS.ScaleDownPath=function(r,a){var c,d;for(a||(a=1),c=r.length;c--;)d=r[c],d.X=d.X/a,d.Y=d.Y/a},i.JS.ScaleDownPaths=function(r,a){var c,d,x;for(a||(a=1),c=r.length;c--;)for(d=r[c].length;d--;)x=r[c][d],x.X=x.X/a,x.Y=x.Y/a},i.JS.ScaleUpPath=function(r,a){var c,d,x=Math.round;for(a||(a=1),c=r.length;c--;)d=r[c],d.X=x(d.X*a),d.Y=x(d.Y*a)},i.JS.ScaleUpPaths=function(r,a){var c,d,x,S=Math.round;for(a||(a=1),c=r.length;c--;)for(d=r[c].length;d--;)x=r[c][d],x.X=S(x.X*a),x.Y=S(x.Y*a)},i.ExPolygons=function(){return[]},i.ExPolygon=function(){this.outer=null,this.holes=null},i.JS.AddOuterPolyNodeToExPolygons=function(r,a){var c=new i.ExPolygon;c.outer=r.Contour();var d=r.Childs(),x=d.length;c.holes=new Array(x);var S,I,z,V,$,ht;for(z=0;z<x;z++)for(S=d[z],c.holes[z]=S.Contour(),V=0,$=S.Childs(),ht=$.length;V<ht;V++)I=$[V],i.JS.AddOuterPolyNodeToExPolygons(I,a);a.push(c)},i.JS.ExPolygonsToPaths=function(r){var a,c,d,x,S=new i.Paths;for(a=0,d=r.length;a<d;a++)for(S.push(r[a].outer),c=0,x=r[a].holes.length;c<x;c++)S.push(r[a].holes[c]);return S},i.JS.PolyTreeToExPolygons=function(r){var a=new i.ExPolygons,c,d,x,S;for(d=0,x=r.Childs(),S=x.length;d<S;d++)c=x[d],i.JS.AddOuterPolyNodeToExPolygons(c,a);return a}})()});var Sa="186",Tn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},En={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mu=0,Ec=1,gu=2;var kr=1,_u=2,Os=3,An=0,Xe=1,ui=2,Yi=0,Bs=1,Ac=2,Cc=3,Pc=4,xu=5;var $n=100,yu=101,vu=102,bu=103,Su=104,Mu=200,wu=201,Tu=202,Eu=203,Ic=204,Rc=205,Au=206,Cu=207,Pu=208,Iu=209,Ru=210,Lu=211,Du=212,Nu=213,Fu=214,zo=0,Vo=1,Go=2,Ss=3,Ho=4,Xo=5,Wo=6,Yo=7,Lc=0,Ou=1,Bu=2,Fi=0,Dc=1,Nc=2,Fc=3,Oc=4,Bc=5,Uc=6,kc=7;var zc=300,Cn=301,Zn=302,Ma=303,wa=304,zr=306,Gn=1e3,Vi=1001,qo=1002,Oe=1003,Uu=1004;var Vr=1005;var Ge=1006,Ta=1007;var Pn=1008;var fi=1009,Vc=1010,Gc=1011,Us=1012,Ea=1013,Oi=1014,Bi=1015,Ui=1016,Aa=1017,Ca=1018,ks=1020,Hc=35902,Xc=35899,Wc=1021,Yc=1022,Ci=1023,Xi=1026,In=1027,Gr=1028,Pa=1029,Rn=1030,Ia=1031;var Ra=1033,Hr=33776,Xr=33777,Wr=33778,Yr=33779,La=35840,Da=35841,Na=35842,Fa=35843,Oa=36196,Ba=37492,Ua=37496,ka=37488,za=37489,qr=37490,Va=37491,Ga=37808,Ha=37809,Xa=37810,Wa=37811,Ya=37812,qa=37813,$a=37814,Za=37815,Ja=37816,Ka=37817,ja=37818,Qa=37819,tl=37820,el=37821,il=36492,nl=36494,sl=36495,rl=36283,ol=36284,$r=36285,al=36286;var ar=2300,$o=2301,Uo=2302,pc=2303,mc=2400,gc=2401,_c=2402;var ku=3200;var ll=0,zu=1,ln="",Ke="srgb",lr="srgb-linear",cr="linear",Se="srgb";var ko=7680;var Vu=519,Gu=512,Hu=513,Xu=514,cl=515,Wu=516,Yu=517,hl=518,qu=519,qc=35044;var $c="300 es",Di=2e3,Ms=2001;function _d(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $u(){let i=hr("canvas");return i.style.display="block",i}var Bh={},ws=null;function ur(...i){let t="THREE."+i.shift();ws?ws("log",t,...i):console.log(t,...i)}function Zu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qt(...i){i=Zu(i);let t="THREE."+i.shift();if(ws)ws("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ie(...i){i=Zu(i);let t="THREE."+i.shift();if(ws)ws("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Vn(...i){let t=i.join(" ");t in Bh||(Bh[t]=!0,Qt(...i))}function Ju(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var Ku={[zo]:Vo,[Go]:Wo,[Ho]:Yo,[Ss]:Xo,[Vo]:zo,[Wo]:Go,[Yo]:Ho,[Xo]:Ss},Ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uh=1234567,vs=Math.PI/180,Ts=180/Math.PI;function Hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function Zc(i,t){return(i%t+t)%t}function yd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function vd(i,t,e){return i!==t?(e-i)/(t-i):0}function sr(i,t,e){return(1-e)*i+e*t}function bd(i,t,e,n){return sr(i,t,1-Math.exp(-e*n))}function Sd(i,t=1){return t-Math.abs(Zc(i,t*2)-t)}function Md(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Td(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ed(i,t){return i+Math.random()*(t-i)}function Ad(i){return i*(.5-Math.random())}function Cd(i){i!==void 0&&(Uh=i);let t=Uh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pd(i){return i*vs}function Id(i){return i*Ts}function Rd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ld(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nd(i,t,e,n,s){let o=Math.cos,l=Math.sin,h=o(e/2),u=l(e/2),f=o((t+n)/2),p=l((t+n)/2),_=o((t-n)/2),m=l((t-n)/2),g=o((n-t)/2),b=l((n-t)/2);switch(s){case"XYX":i.set(h*p,u*_,u*m,h*f);break;case"YZY":i.set(u*m,h*p,u*_,h*f);break;case"ZXZ":i.set(u*_,u*m,h*p,h*f);break;case"XZX":i.set(h*p,u*b,u*g,h*f);break;case"YXY":i.set(u*g,h*p,u*b,h*f);break;case"ZYZ":i.set(u*b,u*g,h*p,h*f);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Li(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Zr={DEG2RAD:vs,RAD2DEG:Ts,generateUUID:Hi,clamp:re,euclideanModulo:Zc,mapLinear:yd,inverseLerp:vd,lerp:sr,damp:bd,pingpong:Sd,smoothstep:Md,smootherstep:wd,randInt:Td,randFloat:Ed,randFloatSpread:Ad,seededRandom:Cd,degToRad:Pd,radToDeg:Id,isPowerOfTwo:Rd,ceilPowerOfTwo:Ld,floorPowerOfTwo:Dd,setQuaternionFromProperEuler:Nd,normalize:we,denormalize:Li},eh=class eh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*n-l*s+t.x,this.y=o*s+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};eh.prototype.isVector2=!0;var _t=eh,vi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,l,h){let u=n[s+0],f=n[s+1],p=n[s+2],_=n[s+3],m=o[l+0],g=o[l+1],b=o[l+2],w=o[l+3];if(_!==w||u!==m||f!==g||p!==b){let y=u*m+f*g+p*b+_*w;y<0&&(m=-m,g=-g,b=-b,w=-w,y=-y);let v=1-h;if(y<.9995){let A=Math.acos(y),C=Math.sin(A);v=Math.sin(v*A)/C,h=Math.sin(h*A)/C,u=u*v+m*h,f=f*v+g*h,p=p*v+b*h,_=_*v+w*h}else{u=u*v+m*h,f=f*v+g*h,p=p*v+b*h,_=_*v+w*h;let A=1/Math.sqrt(u*u+f*f+p*p+_*_);u*=A,f*=A,p*=A,_*=A}}t[e]=u,t[e+1]=f,t[e+2]=p,t[e+3]=_}static multiplyQuaternionsFlat(t,e,n,s,o,l){let h=n[s],u=n[s+1],f=n[s+2],p=n[s+3],_=o[l],m=o[l+1],g=o[l+2],b=o[l+3];return t[e]=h*b+p*_+u*g-f*m,t[e+1]=u*b+p*m+f*_-h*g,t[e+2]=f*b+p*g+h*m-u*_,t[e+3]=p*b-h*_-u*m-f*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,o=t._z,l=t._order,h=Math.cos,u=Math.sin,f=h(n/2),p=h(s/2),_=h(o/2),m=u(n/2),g=u(s/2),b=u(o/2);switch(l){case"XYZ":this._x=m*p*_+f*g*b,this._y=f*g*_-m*p*b,this._z=f*p*b+m*g*_,this._w=f*p*_-m*g*b;break;case"YXZ":this._x=m*p*_+f*g*b,this._y=f*g*_-m*p*b,this._z=f*p*b-m*g*_,this._w=f*p*_+m*g*b;break;case"ZXY":this._x=m*p*_-f*g*b,this._y=f*g*_+m*p*b,this._z=f*p*b+m*g*_,this._w=f*p*_-m*g*b;break;case"ZYX":this._x=m*p*_-f*g*b,this._y=f*g*_+m*p*b,this._z=f*p*b-m*g*_,this._w=f*p*_+m*g*b;break;case"YZX":this._x=m*p*_+f*g*b,this._y=f*g*_+m*p*b,this._z=f*p*b-m*g*_,this._w=f*p*_-m*g*b;break;case"XZY":this._x=m*p*_-f*g*b,this._y=f*g*_-m*p*b,this._z=f*p*b+m*g*_,this._w=f*p*_+m*g*b;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],o=e[8],l=e[1],h=e[5],u=e[9],f=e[2],p=e[6],_=e[10],m=n+h+_;if(m>0){let g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(p-u)*g,this._y=(o-f)*g,this._z=(l-s)*g}else if(n>h&&n>_){let g=2*Math.sqrt(1+n-h-_);this._w=(p-u)/g,this._x=.25*g,this._y=(s+l)/g,this._z=(o+f)/g}else if(h>_){let g=2*Math.sqrt(1+h-n-_);this._w=(o-f)/g,this._x=(s+l)/g,this._y=.25*g,this._z=(u+p)/g}else{let g=2*Math.sqrt(1+_-n-h);this._w=(l-s)/g,this._x=(o+f)/g,this._y=(u+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,o=t._z,l=t._w,h=e._x,u=e._y,f=e._z,p=e._w;return this._x=n*p+l*h+s*f-o*u,this._y=s*p+l*u+o*h-n*f,this._z=o*p+l*f+n*u-s*h,this._w=l*p-n*h-s*u-o*f,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,o=t._z,l=t._w,h=this.dot(t);h<0&&(n=-n,s=-s,o=-o,l=-l,h=-h);let u=1-e;if(h<.9995){let f=Math.acos(h),p=Math.sin(f);u=Math.sin(u*f)/p,e=Math.sin(e*f)/p,this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+o*e,this._w=this._w*u+l*e,this._onChangeCallback()}else this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+o*e,this._w=this._w*u+l*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ih=class ih{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=t.elements,l=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*l,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*l,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*l,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,o=t.x,l=t.y,h=t.z,u=t.w,f=2*(l*s-h*n),p=2*(h*e-o*s),_=2*(o*n-l*e);return this.x=e+u*f+l*_-h*p,this.y=n+u*p+h*f-o*_,this.z=s+u*_+o*p-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,o=t.z,l=e.x,h=e.y,u=e.z;return this.x=s*u-o*h,this.y=o*l-n*u,this.z=n*h-s*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gl.copy(this).projectOnVector(t),this.sub(Gl)}reflect(t){return this.sub(Gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ih.prototype.isVector3=!0;var k=ih,Gl=new k,kh=new vi,nh=class nh{constructor(t,e,n,s,o,l,h,u,f){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,l,h,u,f)}set(t,e,n,s,o,l,h,u,f){let p=this.elements;return p[0]=t,p[1]=s,p[2]=h,p[3]=e,p[4]=o,p[5]=u,p[6]=n,p[7]=l,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,l=n[0],h=n[3],u=n[6],f=n[1],p=n[4],_=n[7],m=n[2],g=n[5],b=n[8],w=s[0],y=s[3],v=s[6],A=s[1],C=s[4],T=s[7],R=s[2],L=s[5],O=s[8];return o[0]=l*w+h*A+u*R,o[3]=l*y+h*C+u*L,o[6]=l*v+h*T+u*O,o[1]=f*w+p*A+_*R,o[4]=f*y+p*C+_*L,o[7]=f*v+p*T+_*O,o[2]=m*w+g*A+b*R,o[5]=m*y+g*C+b*L,o[8]=m*v+g*T+b*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],l=t[4],h=t[5],u=t[6],f=t[7],p=t[8];return e*l*p-e*h*f-n*o*p+n*h*u+s*o*f-s*l*u}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],l=t[4],h=t[5],u=t[6],f=t[7],p=t[8],_=p*l-h*f,m=h*u-p*o,g=f*o-l*u,b=e*_+n*m+s*g;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/b;return t[0]=_*w,t[1]=(s*f-p*n)*w,t[2]=(h*n-s*l)*w,t[3]=m*w,t[4]=(p*e-s*u)*w,t[5]=(s*o-h*e)*w,t[6]=g*w,t[7]=(n*u-f*e)*w,t[8]=(l*e-n*o)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,l,h){let u=Math.cos(o),f=Math.sin(o);return this.set(n*u,n*f,-n*(u*l+f*h)+l+t,-s*f,s*u,-s*(-f*l+u*h)+h+e,0,0,1),this}scale(t,e){return Vn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hl.makeScale(t,e)),this}rotate(t){return Vn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hl.makeRotation(-t)),this}translate(t,e){return Vn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};nh.prototype.isMatrix3=!0;var ae=nh,Hl=new ae,zh=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fd(){let i={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(s,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Se&&(s.r=rn(s.r),s.g=rn(s.g),s.b=rn(s.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Se&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ln?cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,l){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Vn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Vn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[lr]:{primaries:t,whitePoint:n,transfer:cr,toXYZ:zh,fromXYZ:Vh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:zh,fromXYZ:Vh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),i}var pe=Fd();function rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rs,Zo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rs===void 0&&(rs=hr("canvas")),rs.width=t.width,rs.height=t.height;let s=rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=hr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=rn(o[l]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rn(e[n]/255)*255):e[n]=rn(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Od=0,Es=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,h=s.length;l<h;l++)s[l].isDataTexture?o.push(Xl(s[l].image)):o.push(Xl(s[l]))}else o=Xl(s);n.url=o}return e||(t.images[this.uuid]=n),n}};function Xl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}var Bd=0,Wl=new k,si=class i extends Ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Vi,s=Vi,o=Ge,l=Pn,h=Ci,u=fi,f=i.DEFAULT_ANISOTROPY,p=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Hi(),this.name="",this.source=new Es(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=f,this.format=h,this.internalFormat=null,this.type=u,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wl).x}get height(){return this.source.getSize(Wl).y}get depth(){return this.source.getSize(Wl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gn:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gn:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=zc;si.DEFAULT_ANISOTROPY=1;var sh=class sh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*s+l[12]*o,this.y=l[1]*e+l[5]*n+l[9]*s+l[13]*o,this.z=l[2]*e+l[6]*n+l[10]*s+l[14]*o,this.w=l[3]*e+l[7]*n+l[11]*s+l[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o,u=t.elements,f=u[0],p=u[4],_=u[8],m=u[1],g=u[5],b=u[9],w=u[2],y=u[6],v=u[10];if(Math.abs(p-m)<.01&&Math.abs(_-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(p+m)<.1&&Math.abs(_+w)<.1&&Math.abs(b+y)<.1&&Math.abs(f+g+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(f+1)/2,T=(g+1)/2,R=(v+1)/2,L=(p+m)/4,O=(_+w)/4,E=(b+y)/4;return C>T&&C>R?C<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(C),s=L/n,o=O/n):T>R?T<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(T),n=L/s,o=E/s):R<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(R),n=O/o,s=E/o),this.set(n,s,o,e),this}let A=Math.sqrt((y-b)*(y-b)+(_-w)*(_-w)+(m-p)*(m-p));return Math.abs(A)<.001&&(A=1),this.x=(y-b)/A,this.y=(_-w)/A,this.z=(m-p)/A,this.w=Math.acos((f+g+v-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sh.prototype.isVector4=!0;var Me=sh,Jo=class extends Ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},o=new si(s),l=n.count;for(let h=0;h<l;h++)this.textures[h]=o.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Es(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Jo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fr=class extends si{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ko=class extends si{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ba=class ba{constructor(t,e,n,s,o,l,h,u,f,p,_,m,g,b,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,l,h,u,f,p,_,m,g,b,w,y)}set(t,e,n,s,o,l,h,u,f,p,_,m,g,b,w,y){let v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=s,v[1]=o,v[5]=l,v[9]=h,v[13]=u,v[2]=f,v[6]=p,v[10]=_,v[14]=m,v[3]=g,v[7]=b,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ba().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),o=1/os.setFromMatrixColumn(t,1).length(),l=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,o=t.z,l=Math.cos(n),h=Math.sin(n),u=Math.cos(s),f=Math.sin(s),p=Math.cos(o),_=Math.sin(o);if(t.order==="XYZ"){let m=l*p,g=l*_,b=h*p,w=h*_;e[0]=u*p,e[4]=-u*_,e[8]=f,e[1]=g+b*f,e[5]=m-w*f,e[9]=-h*u,e[2]=w-m*f,e[6]=b+g*f,e[10]=l*u}else if(t.order==="YXZ"){let m=u*p,g=u*_,b=f*p,w=f*_;e[0]=m+w*h,e[4]=b*h-g,e[8]=l*f,e[1]=l*_,e[5]=l*p,e[9]=-h,e[2]=g*h-b,e[6]=w+m*h,e[10]=l*u}else if(t.order==="ZXY"){let m=u*p,g=u*_,b=f*p,w=f*_;e[0]=m-w*h,e[4]=-l*_,e[8]=b+g*h,e[1]=g+b*h,e[5]=l*p,e[9]=w-m*h,e[2]=-l*f,e[6]=h,e[10]=l*u}else if(t.order==="ZYX"){let m=l*p,g=l*_,b=h*p,w=h*_;e[0]=u*p,e[4]=b*f-g,e[8]=m*f+w,e[1]=u*_,e[5]=w*f+m,e[9]=g*f-b,e[2]=-f,e[6]=h*u,e[10]=l*u}else if(t.order==="YZX"){let m=l*u,g=l*f,b=h*u,w=h*f;e[0]=u*p,e[4]=w-m*_,e[8]=b*_+g,e[1]=_,e[5]=l*p,e[9]=-h*p,e[2]=-f*p,e[6]=g*_+b,e[10]=m-w*_}else if(t.order==="XZY"){let m=l*u,g=l*f,b=h*u,w=h*f;e[0]=u*p,e[4]=-_,e[8]=f*p,e[1]=m*_+w,e[5]=l*p,e[9]=g*_-b,e[2]=b*_-g,e[6]=h*p,e[10]=w*_+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ud,t,kd)}lookAt(t,e,n){let s=this.elements;return gi.subVectors(t,e),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),fn.crossVectors(n,gi),fn.lengthSq()===0&&(Math.abs(n.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),fn.crossVectors(n,gi)),fn.normalize(),fo.crossVectors(gi,fn),s[0]=fn.x,s[4]=fo.x,s[8]=gi.x,s[1]=fn.y,s[5]=fo.y,s[9]=gi.y,s[2]=fn.z,s[6]=fo.z,s[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,l=n[0],h=n[4],u=n[8],f=n[12],p=n[1],_=n[5],m=n[9],g=n[13],b=n[2],w=n[6],y=n[10],v=n[14],A=n[3],C=n[7],T=n[11],R=n[15],L=s[0],O=s[4],E=s[8],D=s[12],U=s[1],N=s[5],G=s[9],H=s[13],B=s[2],W=s[6],K=s[10],J=s[14],at=s[3],tt=s[7],nt=s[11],st=s[15];return o[0]=l*L+h*U+u*B+f*at,o[4]=l*O+h*N+u*W+f*tt,o[8]=l*E+h*G+u*K+f*nt,o[12]=l*D+h*H+u*J+f*st,o[1]=p*L+_*U+m*B+g*at,o[5]=p*O+_*N+m*W+g*tt,o[9]=p*E+_*G+m*K+g*nt,o[13]=p*D+_*H+m*J+g*st,o[2]=b*L+w*U+y*B+v*at,o[6]=b*O+w*N+y*W+v*tt,o[10]=b*E+w*G+y*K+v*nt,o[14]=b*D+w*H+y*J+v*st,o[3]=A*L+C*U+T*B+R*at,o[7]=A*O+C*N+T*W+R*tt,o[11]=A*E+C*G+T*K+R*nt,o[15]=A*D+C*H+T*J+R*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],l=t[1],h=t[5],u=t[9],f=t[13],p=t[2],_=t[6],m=t[10],g=t[14],b=t[3],w=t[7],y=t[11],v=t[15],A=u*g-f*m,C=h*g-f*_,T=h*m-u*_,R=l*g-f*p,L=l*m-u*p,O=l*_-h*p;return e*(w*A-y*C+v*T)-n*(b*A-y*R+v*L)+s*(b*C-w*R+v*O)-o*(b*T-w*L+y*O)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],o=t[1],l=t[5],h=t[9],u=t[2],f=t[6],p=t[10];return e*(l*p-h*f)-n*(o*p-h*u)+s*(o*f-l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],l=t[4],h=t[5],u=t[6],f=t[7],p=t[8],_=t[9],m=t[10],g=t[11],b=t[12],w=t[13],y=t[14],v=t[15],A=e*h-n*l,C=e*u-s*l,T=e*f-o*l,R=n*u-s*h,L=n*f-o*h,O=s*f-o*u,E=p*w-_*b,D=p*y-m*b,U=p*v-g*b,N=_*y-m*w,G=_*v-g*w,H=m*v-g*y,B=A*H-C*G+T*N+R*U-L*D+O*E;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/B;return t[0]=(h*H-u*G+f*N)*W,t[1]=(s*G-n*H-o*N)*W,t[2]=(w*O-y*L+v*R)*W,t[3]=(m*L-_*O-g*R)*W,t[4]=(u*U-l*H-f*D)*W,t[5]=(e*H-s*U+o*D)*W,t[6]=(y*T-b*O-v*C)*W,t[7]=(p*O-m*T+g*C)*W,t[8]=(l*G-h*U+f*E)*W,t[9]=(n*U-e*G-o*E)*W,t[10]=(b*L-w*T+v*A)*W,t[11]=(_*T-p*L-g*A)*W,t[12]=(h*D-l*N-u*E)*W,t[13]=(e*N-n*D+s*E)*W,t[14]=(w*C-b*R-y*A)*W,t[15]=(p*R-_*C+m*A)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),o=1-n,l=t.x,h=t.y,u=t.z,f=o*l,p=o*h;return this.set(f*l+n,f*h-s*u,f*u+s*h,0,f*h+s*u,p*h+n,p*u-s*l,0,f*u-s*h,p*u+s*l,o*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,l){return this.set(1,n,o,0,t,1,l,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,o=e._x,l=e._y,h=e._z,u=e._w,f=o+o,p=l+l,_=h+h,m=o*f,g=o*p,b=o*_,w=l*p,y=l*_,v=h*_,A=u*f,C=u*p,T=u*_,R=n.x,L=n.y,O=n.z;return s[0]=(1-(w+v))*R,s[1]=(g+T)*R,s[2]=(b-C)*R,s[3]=0,s[4]=(g-T)*L,s[5]=(1-(m+v))*L,s[6]=(y+A)*L,s[7]=0,s[8]=(b+C)*O,s[9]=(y-A)*O,s[10]=(1-(m+w))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let l=os.set(s[0],s[1],s[2]).length(),h=os.set(s[4],s[5],s[6]).length(),u=os.set(s[8],s[9],s[10]).length();o<0&&(l=-l),Pi.copy(this);let f=1/l,p=1/h,_=1/u;return Pi.elements[0]*=f,Pi.elements[1]*=f,Pi.elements[2]*=f,Pi.elements[4]*=p,Pi.elements[5]*=p,Pi.elements[6]*=p,Pi.elements[8]*=_,Pi.elements[9]*=_,Pi.elements[10]*=_,e.setFromRotationMatrix(Pi),n.x=l,n.y=h,n.z=u,this}makePerspective(t,e,n,s,o,l,h=Di,u=!1){let f=this.elements,p=2*o/(e-t),_=2*o/(n-s),m=(e+t)/(e-t),g=(n+s)/(n-s),b,w;if(u)b=o/(l-o),w=l*o/(l-o);else if(h===Di)b=-(l+o)/(l-o),w=-2*l*o/(l-o);else if(h===Ms)b=-l/(l-o),w=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=p,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=_,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=b,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,n,s,o,l,h=Di,u=!1){let f=this.elements,p=2/(e-t),_=2/(n-s),m=-(e+t)/(e-t),g=-(n+s)/(n-s),b,w;if(u)b=1/(l-o),w=l/(l-o);else if(h===Di)b=-2/(l-o),w=-(l+o)/(l-o);else if(h===Ms)b=-1/(l-o),w=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=p,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=_,f[9]=0,f[13]=g,f[2]=0,f[6]=0,f[10]=b,f[14]=w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ba.prototype.isMatrix4=!0;var _e=ba,os=new k,Pi=new _e,Ud=new k(0,0,0),kd=new k(1,1,1),fn=new k,fo=new k,gi=new k,Gh=new _e,Hh=new vi,_n=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,o=s[0],l=s[4],h=s[8],u=s[1],f=s[5],p=s[9],_=s[2],m=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-re(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(h,g),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(re(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,g),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-re(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(h,g));break;case"XZY":this._z=Math.asin(-re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(h,o)):(this._x=Math.atan2(-p,g),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var As=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zd=0,Xh=new k,as=new vi,ji=new _e,po=new k,Qs=new k,Vd=new k,Gd=new vi,Wh=new k(1,0,0),Yh=new k(0,1,0),qh=new k(0,0,1),$h={type:"added"},Hd={type:"removed"},ls={type:"childadded",child:null},Yl={type:"childremoved",child:null},Qe=class i extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new _n,n=new vi,s=new k(1,1,1);function o(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new ae}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Wh,t)}rotateY(t){return this.rotateOnAxis(Yh,t)}rotateZ(t){return this.rotateOnAxis(qh,t)}translateOnAxis(t,e){return Xh.copy(t).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wh,t)}translateY(t){return this.translateOnAxis(Yh,t)}translateZ(t){return this.translateOnAxis(qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?po.copy(t):po.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Qs,po,this.up):ji.lookAt(po,Qs,this.up),this.quaternion.setFromRotationMatrix(ji),s&&(ji.extractRotation(s.matrixWorld),as.setFromRotationMatrix(ji),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($h),ls.child=t,this.dispatchEvent(ls),ls.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hd),Yl.child=t,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($h),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,Vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Gd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*s,o[13]+=n-o[1]*e-o[5]*n-o[9]*s,o[14]+=s-o[2]*e-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let o=this.children;for(let l=0,h=o.length;l<h;l++)o[l].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(h=>({...h})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(h,u){return h[u.uuid]===void 0&&(h[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let u=h.shapes;if(Array.isArray(u))for(let f=0,p=u.length;f<p;f++){let _=u[f];o(t.shapes,_)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let u=0,f=this.material.length;u<f;u++)h.push(o(t.materials,this.material[u]));s.material=h}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let h=0;h<this.children.length;h++)s.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let h=0;h<this.animations.length;h++){let u=this.animations[h];s.animations.push(o(t.animations,u))}}if(e){let h=l(t.geometries),u=l(t.materials),f=l(t.textures),p=l(t.images),_=l(t.shapes),m=l(t.skeletons),g=l(t.animations),b=l(t.nodes);h.length>0&&(n.geometries=h),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),_.length>0&&(n.shapes=_),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),b.length>0&&(n.nodes=b)}return n.object=s,n;function l(h){let u=[];for(let f in h){let p=h[f];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Qe.DEFAULT_UP=new k(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xd={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,l=null,h=this._targetRay,u=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(let w of t.hand.values()){let y=e.getJointPose(w,n),v=this._getHandJoint(f,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}let p=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],m=p.position.distanceTo(_.position),g=.02,b=.005;f.inputState.pinching&&m>g+b?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&m<=g-b&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Xd)))}return h!==null&&(h.visible=s!==null),u!==null&&(u.visible=o!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},mo={h:0,s:0,l:0};function ql(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var de=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=Zc(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,l=2*n-o;this.r=ql(l,o,t+1/3),this.g=ql(l,o,t),this.b=ql(l,o,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function n(o){o!==void 0&&parseFloat(o)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,l=s[1],h=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let n=ju[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rn(t.r),this.g=rn(t.g),this.b=rn(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return pe.workingToColorSpace(Je.copy(this),t),Math.round(re(Je.r*255,0,255))*65536+Math.round(re(Je.g*255,0,255))*256+Math.round(re(Je.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(Je.copy(this),e);let n=Je.r,s=Je.g,o=Je.b,l=Math.max(n,s,o),h=Math.min(n,s,o),u,f,p=(h+l)/2;if(h===l)u=0,f=0;else{let _=l-h;switch(f=p<=.5?_/(l+h):_/(2-l-h),l){case n:u=(s-o)/_+(s<o?6:0);break;case s:u=(o-n)/_+2;break;case o:u=(n-s)/_+4;break}u/=6}return t.h=u,t.s=f,t.l=p,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Ke){pe.workingToColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,s=Je.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(dn),this.setHSL(dn.h+t,dn.s+e,dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(dn),t.getHSL(mo);let n=sr(dn.h,mo.h,e),s=sr(dn.s,mo.s,e),o=sr(dn.l,mo.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new de;de.NAMES=ju;var dr=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ii=new k,Qi=new k,$l=new k,tn=new k,cs=new k,hs=new k,Zh=new k,Zl=new k,Jl=new k,Kl=new k,jl=new Me,Ql=new Me,tc=new Me,sn=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ii.subVectors(t,e),s.cross(Ii);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Ii.subVectors(s,e),Qi.subVectors(n,e),$l.subVectors(t,e);let l=Ii.dot(Ii),h=Ii.dot(Qi),u=Ii.dot($l),f=Qi.dot(Qi),p=Qi.dot($l),_=l*f-h*h;if(_===0)return o.set(0,0,0),null;let m=1/_,g=(f*u-h*p)*m,b=(l*p-h*u)*m;return o.set(1-g-b,b,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(t,e,n,s,o,l,h,u){return this.getBarycoord(t,e,n,s,tn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,tn.x),u.addScaledVector(l,tn.y),u.addScaledVector(h,tn.z),u)}static getInterpolatedAttribute(t,e,n,s,o,l){return jl.setScalar(0),Ql.setScalar(0),tc.setScalar(0),jl.fromBufferAttribute(t,e),Ql.fromBufferAttribute(t,n),tc.fromBufferAttribute(t,s),l.setScalar(0),l.addScaledVector(jl,o.x),l.addScaledVector(Ql,o.y),l.addScaledVector(tc,o.z),l}static isFrontFacing(t,e,n,s){return Ii.subVectors(n,e),Qi.subVectors(t,e),Ii.cross(Qi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Ii.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,o=this.c,l,h;cs.subVectors(s,n),hs.subVectors(o,n),Zl.subVectors(t,n);let u=cs.dot(Zl),f=hs.dot(Zl);if(u<=0&&f<=0)return e.copy(n);Jl.subVectors(t,s);let p=cs.dot(Jl),_=hs.dot(Jl);if(p>=0&&_<=p)return e.copy(s);let m=u*_-p*f;if(m<=0&&u>=0&&p<=0)return l=u/(u-p),e.copy(n).addScaledVector(cs,l);Kl.subVectors(t,o);let g=cs.dot(Kl),b=hs.dot(Kl);if(b>=0&&g<=b)return e.copy(o);let w=g*f-u*b;if(w<=0&&f>=0&&b<=0)return h=f/(f-b),e.copy(n).addScaledVector(hs,h);let y=p*b-g*_;if(y<=0&&_-p>=0&&g-b>=0)return Zh.subVectors(o,s),h=(_-p)/(_-p+(g-b)),e.copy(s).addScaledVector(Zh,h);let v=1/(y+w+m);return l=w*v,h=m*v,e.copy(n).addScaledVector(cs,l).addScaledVector(hs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bi=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let l=0,h=o.count;l<h;l++)t.isMesh===!0?t.getVertexPosition(l,Ri):Ri.fromBufferAttribute(o,l),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(t.matrixWorld),this.union(go)}let s=t.children;for(let o=0,l=s.length;o<l;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),_o.subVectors(this.max,tr),us.subVectors(t.a,tr),fs.subVectors(t.b,tr),ds.subVectors(t.c,tr),pn.subVectors(fs,us),mn.subVectors(ds,fs),Bn.subVectors(us,ds);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Bn.z,Bn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Bn.z,0,-Bn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Bn.y,Bn.x,0];return!ec(e,us,fs,ds,_o)||(e=[1,0,0,0,1,0,0,0,1],!ec(e,us,fs,ds,_o))?!1:(xo.crossVectors(pn,mn),e=[xo.x,xo.y,xo.z],ec(e,us,fs,ds,_o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},en=[new k,new k,new k,new k,new k,new k,new k,new k],Ri=new k,go=new bi,us=new k,fs=new k,ds=new k,pn=new k,mn=new k,Bn=new k,tr=new k,_o=new k,xo=new k,Un=new k;function ec(i,t,e,n,s){for(let o=0,l=i.length-3;o<=l;o+=3){Un.fromArray(i,o);let h=s.x*Math.abs(Un.x)+s.y*Math.abs(Un.y)+s.z*Math.abs(Un.z),u=t.dot(Un),f=e.dot(Un),p=n.dot(Un);if(Math.max(-Math.max(u,f,p),Math.min(u,f,p))>h)return!1}return!0}var Fe=new k,yo=new _t,Wd=0,ni=class extends Ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yo.fromBufferAttribute(this,e),yo.applyMatrix3(t),this.setXY(e,yo.x,yo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Li(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Li(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Li(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),o=we(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var pr=class extends ni{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mr=class extends ni{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ge=class extends ni{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yd=new bi,er=new k,ic=new k,Wi=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yd.setFromPoints(t).getCenter(n);let s=0;for(let o=0,l=t.length;o<l;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);let e=er.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(ic)),this.expandByPoint(er.copy(t.center).sub(ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qd=0,Ti=new _e,nc=new Qe,ps=new k,_i=new bi,ir=new bi,ze=new k,Ne=class i extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_d(t)?mr:pr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new ae().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,e,n){return Ti.makeTranslation(t,e,n),this.applyMatrix4(Ti),this}scale(t,e,n){return Ti.makeScale(t,e,n),this.applyMatrix4(Ti),this}lookAt(t){return nc.lookAt(t),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,o=t.length;s<o;s++){let l=t[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new ge(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let o=e[n];_i.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){let h=e[o];ir.setFromBufferAttribute(h),this.morphTargetsRelative?(ze.addVectors(_i.min,ir.min),_i.expandByPoint(ze),ze.addVectors(_i.max,ir.max),_i.expandByPoint(ze)):(_i.expandByPoint(ir.min),_i.expandByPoint(ir.max))}_i.getCenter(n);let s=0;for(let o=0,l=t.count;o<l;o++)ze.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let o=0,l=e.length;o<l;o++){let h=e[o],u=this.morphTargetsRelative;for(let f=0,p=h.count;f<p;f++)ze.fromBufferAttribute(h,f),u&&(ps.fromBufferAttribute(t,f),ze.add(ps)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,o=e.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new ni(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));let h=[],u=[];for(let E=0;E<n.count;E++)h[E]=new k,u[E]=new k;let f=new k,p=new k,_=new k,m=new _t,g=new _t,b=new _t,w=new k,y=new k;function v(E,D,U){f.fromBufferAttribute(n,E),p.fromBufferAttribute(n,D),_.fromBufferAttribute(n,U),m.fromBufferAttribute(o,E),g.fromBufferAttribute(o,D),b.fromBufferAttribute(o,U),p.sub(f),_.sub(f),g.sub(m),b.sub(m);let N=1/(g.x*b.y-b.x*g.y);isFinite(N)&&(w.copy(p).multiplyScalar(b.y).addScaledVector(_,-g.y).multiplyScalar(N),y.copy(_).multiplyScalar(g.x).addScaledVector(p,-b.x).multiplyScalar(N),h[E].add(w),h[D].add(w),h[U].add(w),u[E].add(y),u[D].add(y),u[U].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let E=0,D=A.length;E<D;++E){let U=A[E],N=U.start,G=U.count;for(let H=N,B=N+G;H<B;H+=3)v(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let C=new k,T=new k,R=new k,L=new k;function O(E){R.fromBufferAttribute(s,E),L.copy(R);let D=h[E];C.copy(D),C.sub(R.multiplyScalar(R.dot(D))).normalize(),T.crossVectors(L,D);let N=T.dot(u[E])<0?-1:1;l.setXYZW(E,C.x,C.y,C.z,N)}for(let E=0,D=A.length;E<D;++E){let U=A[E],N=U.start,G=U.count;for(let H=N,B=N+G;H<B;H+=3)O(t.getX(H+0)),O(t.getX(H+1)),O(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ni(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);let s=new k,o=new k,l=new k,h=new k,u=new k,f=new k,p=new k,_=new k;if(t)for(let m=0,g=t.count;m<g;m+=3){let b=t.getX(m+0),w=t.getX(m+1),y=t.getX(m+2);s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,w),l.fromBufferAttribute(e,y),p.subVectors(l,o),_.subVectors(s,o),p.cross(_),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,y),h.add(p),u.add(p),f.add(p),n.setXYZ(b,h.x,h.y,h.z),n.setXYZ(w,u.x,u.y,u.z),n.setXYZ(y,f.x,f.y,f.z)}else for(let m=0,g=e.count;m<g;m+=3)s.fromBufferAttribute(e,m+0),o.fromBufferAttribute(e,m+1),l.fromBufferAttribute(e,m+2),p.subVectors(l,o),_.subVectors(s,o),p.cross(_),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(h,u){let f=h.array,p=h.itemSize,_=h.normalized,m=new f.constructor(u.length*p),g=0,b=0;for(let w=0,y=u.length;w<y;w++){h.isInterleavedBufferAttribute?g=u[w]*h.data.stride+h.offset:g=u[w]*p;for(let v=0;v<p;v++)m[b++]=f[g++]}return new ni(m,p,_)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let h in s){let u=s[h],f=t(u,n);e.setAttribute(h,f)}let o=this.morphAttributes;for(let h in o){let u=[],f=o[h];for(let p=0,_=f.length;p<_;p++){let m=f[p],g=t(m,n);u.push(g)}e.morphAttributes[h]=u}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let h=0,u=l.length;h<u;h++){let f=l[h];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let f in u)u[f]!==void 0&&(t[f]=u[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let u in n){let f=n[u];t.data.attributes[u]=f.toJSON(t.data)}let s={},o=!1;for(let u in this.morphAttributes){let f=this.morphAttributes[u],p=[];for(let _=0,m=f.length;_<m;_++){let g=f[_];p.push(g.toJSON(t.data))}p.length>0&&(s[u]=p,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let f in s){let p=s[f];this.setAttribute(f,p.clone(e))}let o=t.morphAttributes;for(let f in o){let p=[],_=o[f];for(let m=0,g=_.length;m<g;m++)p.push(_[m].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let f=0,p=l.length;f<p;f++){let _=l[f];this.addGroup(_.start,_.count,_.materialIndex)}let h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},gr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qc,this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},ii=new k,Ei=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ii.fromBufferAttribute(this,e),ii.applyMatrix4(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ii.fromBufferAttribute(this,e),ii.applyNormalMatrix(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ii.fromBufferAttribute(this,e),ii.transformDirection(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Li(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Li(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Li(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Li(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),o=we(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){ur("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new ni(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ur("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},sc=new k,$d=new k,Zd=new ae,xi=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=sc.subVectors(n,e).cross($d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(sc),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let l=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(l<0||l>1)?null:e.copy(t.start).addScaledVector(s,l)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zd.getNormalMatrix(t),s=this.coplanarPoint(sc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Jd=0,xn=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=Bs,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Rc,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}if(e){let o=s(t.textures),l=s(t.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new de().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new xi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var nn=new k,rc=new k,vo=new k,bo=new k,Hn=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){rc.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),bo.copy(this.origin).sub(rc);let o=t.distanceTo(e)*.5,l=-this.direction.dot(vo),h=bo.dot(this.direction),u=-bo.dot(vo),f=bo.lengthSq(),p=Math.abs(1-l*l),_,m,g,b;if(p>0)if(_=l*u-h,m=l*h-u,b=o*p,_>=0)if(m>=-b)if(m<=b){let w=1/p;_*=w,m*=w,g=_*(_+l*m+2*h)+m*(l*_+m+2*u)+f}else m=o,_=Math.max(0,-(l*m+h)),g=-_*_+m*(m+2*u)+f;else m=-o,_=Math.max(0,-(l*m+h)),g=-_*_+m*(m+2*u)+f;else m<=-b?(_=Math.max(0,-(-l*o+h)),m=_>0?-o:Math.min(Math.max(-o,-u),o),g=-_*_+m*(m+2*u)+f):m<=b?(_=0,m=Math.min(Math.max(-o,-u),o),g=m*(m+2*u)+f):(_=Math.max(0,-(l*o+h)),m=_>0?o:Math.min(Math.max(-o,-u),o),g=-_*_+m*(m+2*u)+f);else m=l>0?-o:o,_=Math.max(0,-(l*m+h)),g=-_*_+m*(m+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(rc).addScaledVector(vo,m),g}intersectSphere(t,e){if(t.radius<0)return null;nn.subVectors(t.center,this.origin);let n=nn.dot(this.direction),s=nn.dot(nn)-n*n,o=t.radius*t.radius;if(s>o)return null;let l=Math.sqrt(o-s),h=n-l,u=n+l;return u<0?null:h<0?this.at(u,e):this.at(h,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,l,h,u,f=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,m=this.origin;return f>=0?(n=(t.min.x-m.x)*f,s=(t.max.x-m.x)*f):(n=(t.max.x-m.x)*f,s=(t.min.x-m.x)*f),p>=0?(o=(t.min.y-m.y)*p,l=(t.max.y-m.y)*p):(o=(t.max.y-m.y)*p,l=(t.min.y-m.y)*p),n>l||o>s||((o>n||isNaN(n))&&(n=o),(l<s||isNaN(s))&&(s=l),_>=0?(h=(t.min.z-m.z)*_,u=(t.max.z-m.z)*_):(h=(t.max.z-m.z)*_,u=(t.min.z-m.z)*_),n>u||h>s)||((h>n||n!==n)&&(n=h),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,n,s,o){let l=this.origin,h=this.direction,u=h.x,f=h.y,p=h.z,_=t.x-l.x,m=t.y-l.y,g=t.z-l.z,b=e.x-l.x,w=e.y-l.y,y=e.z-l.z,v=n.x-l.x,A=n.y-l.y,C=n.z-l.z,T=Math.abs(u),R=Math.abs(f),L=Math.abs(p),O,E,D,U,N,G,H,B,W,K,J,at;if(T>=R&&T>=L?(D=u,G=_,W=b,at=v,u>=0?(O=f,E=p,U=m,N=g,H=w,B=y,K=A,J=C):(O=p,E=f,U=g,N=m,H=y,B=w,K=C,J=A)):R>=L?(D=f,G=m,W=w,at=A,f>=0?(O=p,E=u,U=g,N=_,H=y,B=b,K=C,J=v):(O=u,E=p,U=_,N=g,H=b,B=y,K=v,J=C)):(D=p,G=g,W=y,at=C,p>=0?(O=u,E=f,U=_,N=m,H=b,B=w,K=v,J=A):(O=f,E=u,U=m,N=_,H=w,B=b,K=A,J=v)),D===0)return null;let tt=O/D,nt=E/D,st=1/D,Tt=U-tt*G,Et=N-nt*G,$t=H-tt*W,ne=B-nt*W,me=K-tt*at,lt=J-nt*at,dt=me*ne-lt*$t,Nt=Tt*lt-Et*me,jt=$t*Et-ne*Tt;if(s){if(dt<0||Nt<0||jt<0)return null}else if((dt<0||Nt<0||jt<0)&&(dt>0||Nt>0||jt>0))return null;let Ft=dt+Nt+jt;if(Ft===0)return null;let te=st*(dt*G+Nt*W+jt*at);return(Ft>0?te<0:te>0)?null:this.at(te/Ft,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class extends xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Jh=new _e,kn=new Hn,So=new Wi,Kh=new k,Mo=new k,wo=new k,To=new k,oc=new k,Eo=new k,jh=new k,Ao=new k,Re=class extends Qe{constructor(t=new Ne,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){let h=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let h=this.morphTargetInfluences;if(o&&h){Eo.set(0,0,0);for(let u=0,f=o.length;u<f;u++){let p=h[u],_=o[u];p!==0&&(oc.fromBufferAttribute(_,t),l?Eo.addScaledVector(oc,p):Eo.addScaledVector(oc.sub(e),p))}e.add(Eo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(o),kn.copy(t.ray).recast(t.near),!(So.containsPoint(kn.origin)===!1&&(kn.intersectSphere(So,Kh)===null||kn.origin.distanceToSquared(Kh)>(t.far-t.near)**2))&&(Jh.copy(o).invert(),kn.copy(t.ray).applyMatrix4(Jh),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,n){let s,o=this.geometry,l=this.material,h=o.index,u=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,_=o.attributes.normal,m=o.groups,g=o.drawRange;if(h!==null)if(Array.isArray(l))for(let b=0,w=m.length;b<w;b++){let y=m[b],v=l[y.materialIndex],A=Math.max(y.start,g.start),C=Math.min(h.count,Math.min(y.start+y.count,g.start+g.count));for(let T=A,R=C;T<R;T+=3){let L=h.getX(T),O=h.getX(T+1),E=h.getX(T+2);s=Co(this,v,t,n,f,p,_,L,O,E),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let b=Math.max(0,g.start),w=Math.min(h.count,g.start+g.count);for(let y=b,v=w;y<v;y+=3){let A=h.getX(y),C=h.getX(y+1),T=h.getX(y+2);s=Co(this,l,t,n,f,p,_,A,C,T),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(l))for(let b=0,w=m.length;b<w;b++){let y=m[b],v=l[y.materialIndex],A=Math.max(y.start,g.start),C=Math.min(u.count,Math.min(y.start+y.count,g.start+g.count));for(let T=A,R=C;T<R;T+=3){let L=T,O=T+1,E=T+2;s=Co(this,v,t,n,f,p,_,L,O,E),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let b=Math.max(0,g.start),w=Math.min(u.count,g.start+g.count);for(let y=b,v=w;y<v;y+=3){let A=y,C=y+1,T=y+2;s=Co(this,l,t,n,f,p,_,A,C,T),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};function Kd(i,t,e,n,s,o,l,h){let u;if(t.side===Xe?u=n.intersectTriangle(l,o,s,!0,h):u=n.intersectTriangle(s,o,l,t.side===An,h),u===null)return null;Ao.copy(h),Ao.applyMatrix4(i.matrixWorld);let f=e.ray.origin.distanceTo(Ao);return f<e.near||f>e.far?null:{distance:f,point:Ao.clone(),object:i}}function Co(i,t,e,n,s,o,l,h,u,f){i.getVertexPosition(h,Mo),i.getVertexPosition(u,wo),i.getVertexPosition(f,To);let p=Kd(i,t,e,n,Mo,wo,To,jh);if(p){let _=new k;sn.getBarycoord(jh,Mo,wo,To,_),s&&(p.uv=sn.getInterpolatedAttribute(s,h,u,f,_,new _t)),o&&(p.uv1=sn.getInterpolatedAttribute(o,h,u,f,_,new _t)),l&&(p.normal=sn.getInterpolatedAttribute(l,h,u,f,_,new k),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));let m={a:h,b:u,c:f,normal:new k,materialIndex:0};sn.getNormal(Mo,wo,To,m.normal),p.face=m,p.barycoord=_}return p}var Ps=class extends si{constructor(t=null,e=1,n=1,s,o,l,h,u,f=Oe,p=Oe,_,m){super(null,l,h,u,f,p,s,o,_,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zn=new Wi,jd=new _t(.5,.5),Po=new k,Is=class{constructor(t=new xi,e=new xi,n=new xi,s=new xi,o=new xi,l=new xi){this.planes=[t,e,n,s,o,l]}set(t,e,n,s,o,l){let h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(n),h[3].copy(s),h[4].copy(o),h[5].copy(l),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Di,n=!1){let s=this.planes,o=t.elements,l=o[0],h=o[1],u=o[2],f=o[3],p=o[4],_=o[5],m=o[6],g=o[7],b=o[8],w=o[9],y=o[10],v=o[11],A=o[12],C=o[13],T=o[14],R=o[15];if(s[0].setComponents(f-l,g-p,v-b,R-A).normalize(),s[1].setComponents(f+l,g+p,v+b,R+A).normalize(),s[2].setComponents(f+h,g+_,v+w,R+C).normalize(),s[3].setComponents(f-h,g-_,v-w,R-C).normalize(),n)s[4].setComponents(u,m,y,T).normalize(),s[5].setComponents(f-u,g-m,v-y,R-T).normalize();else if(s[4].setComponents(f-u,g-m,v-y,R-T).normalize(),e===Di)s[5].setComponents(f+u,g+m,v+y,R+T).normalize();else if(e===Ms)s[5].setComponents(u,m,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){zn.center.set(0,0,0);let e=jd.distanceTo(t.center);return zn.radius=.7071067811865476+e,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Po.x=s.normal.x>0?t.max.x:t.min.x,Po.y=s.normal.y>0?t.max.y:t.min.y,Po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _r=class extends si{constructor(t=[],e=Cn,n,s,o,l,h,u,f,p){super(t,e,n,s,o,l,h,u,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Rs=class extends si{constructor(t,e,n,s,o,l,h,u,f){super(t,e,n,s,o,l,h,u,f),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yn=class extends si{constructor(t,e,n=Oi,s,o,l,h=Oe,u=Oe,f,p=Xi,_=1){if(p!==Xi&&p!==In)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:_};super(m,s,o,l,h,u,p,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Es(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},jo=class extends yn{constructor(t,e=Oi,n=Cn,s,o,l=Oe,h=Oe,u,f=Xi){let p={width:t,height:t,depth:1},_=[p,p,p,p,p,p];super(t,t,e,n,s,o,l,h,u,f),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},xr=class extends si{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},He=class i extends Ne{constructor(t=1,e=1,n=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:l};let h=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);let u=[],f=[],p=[],_=[],m=0,g=0;b("z","y","x",-1,-1,n,e,t,l,o,0),b("z","y","x",1,-1,n,e,-t,l,o,1),b("x","z","y",1,1,t,n,e,s,l,2),b("x","z","y",1,-1,t,n,-e,s,l,3),b("x","y","z",1,-1,t,e,n,s,o,4),b("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(u),this.setAttribute("position",new ge(f,3)),this.setAttribute("normal",new ge(p,3)),this.setAttribute("uv",new ge(_,2));function b(w,y,v,A,C,T,R,L,O,E,D){let U=T/O,N=R/E,G=T/2,H=R/2,B=L/2,W=O+1,K=E+1,J=0,at=0,tt=new k;for(let nt=0;nt<K;nt++){let st=nt*N-H;for(let Tt=0;Tt<W;Tt++){let Et=Tt*U-G;tt[w]=Et*A,tt[y]=st*C,tt[v]=B,f.push(tt.x,tt.y,tt.z),tt[w]=0,tt[y]=0,tt[v]=L>0?1:-1,p.push(tt.x,tt.y,tt.z),_.push(Tt/O),_.push(1-nt/E),J+=1}}for(let nt=0;nt<E;nt++)for(let st=0;st<O;st++){let Tt=m+st+W*nt,Et=m+st+W*(nt+1),$t=m+(st+1)+W*(nt+1),ne=m+(st+1)+W*nt;u.push(Tt,Et,ne),u.push(Et,$t,ne),at+=6}h.addGroup(g,at,D),g+=at,m+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var yr=class i extends Ne{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let o=[],l=[],h=[],u=[],f=new k,p=new _t;l.push(0,0,0),h.push(0,0,1),u.push(.5,.5);for(let _=0,m=3;_<=e;_++,m+=3){let g=n+_/e*s;f.x=t*Math.cos(g),f.y=t*Math.sin(g),l.push(f.x,f.y,f.z),h.push(0,0,1),p.x=(l[m]/t+1)/2,p.y=(l[m+1]/t+1)/2,u.push(p.x,p.y)}for(let _=1;_<=e;_++)o.push(_,_+1,0);this.setIndex(o),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},on=class i extends Ne{constructor(t=1,e=1,n=1,s=32,o=1,l=!1,h=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:l,thetaStart:h,thetaLength:u};let f=this;s=Math.floor(s),o=Math.floor(o);let p=[],_=[],m=[],g=[],b=0,w=[],y=n/2,v=0;A(),l===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(p),this.setAttribute("position",new ge(_,3)),this.setAttribute("normal",new ge(m,3)),this.setAttribute("uv",new ge(g,2));function A(){let T=new k,R=new k,L=0,O=(e-t)/n;for(let E=0;E<=o;E++){let D=[],U=E/o,N=U*(e-t)+t;for(let G=0;G<=s;G++){let H=G/s,B=H*u+h,W=Math.sin(B),K=Math.cos(B);R.x=N*W,R.y=-U*n+y,R.z=N*K,_.push(R.x,R.y,R.z),T.set(W,O,K).normalize(),m.push(T.x,T.y,T.z),g.push(H,1-U),D.push(b++)}w.push(D)}for(let E=0;E<s;E++)for(let D=0;D<o;D++){let U=w[D][E],N=w[D+1][E],G=w[D+1][E+1],H=w[D][E+1];(t>0||D!==0)&&(p.push(U,N,H),L+=3),(e>0||D!==o-1)&&(p.push(N,G,H),L+=3)}f.addGroup(v,L,0),v+=L}function C(T){let R=b,L=new _t,O=new k,E=0,D=T===!0?t:e,U=T===!0?1:-1;for(let G=1;G<=s;G++)_.push(0,y*U,0),m.push(0,U,0),g.push(.5,.5),b++;let N=b;for(let G=0;G<=s;G++){let B=G/s*u+h,W=Math.cos(B),K=Math.sin(B);O.x=D*K,O.y=y*U,O.z=D*W,_.push(O.x,O.y,O.z),m.push(0,U,0),L.x=W*.5+.5,L.y=K*.5*U+.5,g.push(L.x,L.y),b++}for(let G=0;G<s;G++){let H=R+G,B=N+G;T===!0?p.push(B,B+1,H):p.push(B+1,B,H),E+=3}f.addGroup(v,E,T===!0?1:2),v+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Io=new k,Ro=new k,ac=new k,Lo=new sn,vr=class extends Ne{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),o=Math.cos(vs*e),l=t.getIndex(),h=t.getAttribute("position"),u=l?l.count:h.count,f=[0,0,0],p=["a","b","c"],_=new Array(3),m={},g=[];for(let b=0;b<u;b+=3){l?(f[0]=l.getX(b),f[1]=l.getX(b+1),f[2]=l.getX(b+2)):(f[0]=b,f[1]=b+1,f[2]=b+2);let{a:w,b:y,c:v}=Lo;if(w.fromBufferAttribute(h,f[0]),y.fromBufferAttribute(h,f[1]),v.fromBufferAttribute(h,f[2]),Lo.getNormal(ac),_[0]=`${Math.round(w.x*s)},${Math.round(w.y*s)},${Math.round(w.z*s)}`,_[1]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,_[2]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let A=0;A<3;A++){let C=(A+1)%3,T=_[A],R=_[C],L=Lo[p[A]],O=Lo[p[C]],E=`${T}_${R}`,D=`${R}_${T}`;D in m&&m[D]?(ac.dot(m[D].normal)<=o&&(g.push(L.x,L.y,L.z),g.push(O.x,O.y,O.z)),m[D]=null):E in m||(m[E]={index0:f[A],index1:f[C],normal:ac.clone()})}}for(let b in m)if(m[b]){let{index0:w,index1:y}=m[b];Io.fromBufferAttribute(h,w),Ro.fromBufferAttribute(h,y),g.push(Io.x,Io.y,Io.z),g.push(Ro.x,Ro.y,Ro.z)}this.setAttribute("position",new ge(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),o=0;e.push(0);for(let l=1;l<=t;l++)n=this.getPoint(l/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,o=n.length,l;e?l=e:l=t*n[o-1];let h=0,u=o-1,f;for(;h<=u;)if(s=Math.floor(h+(u-h)/2),f=n[s]-l,f<0)h=s+1;else if(f>0)u=s-1;else{u=s;break}if(s=u,n[s]===l)return s/(o-1);let p=n[s],m=n[s+1]-p,g=(l-p)/m;return(s+g)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);let l=this.getPoint(s),h=this.getPoint(o),u=e||(l.isVector2?new _t:new k);return u.copy(h).sub(l).normalize(),u}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new k,s=[],o=[],l=[],h=new k,u=new _e;for(let g=0;g<=t;g++){let b=g/t;s[g]=this.getTangentAt(b,new k)}o[0]=new k,l[0]=new k;let f=Number.MAX_VALUE,p=Math.abs(s[0].x),_=Math.abs(s[0].y),m=Math.abs(s[0].z);p<=f&&(f=p,n.set(1,0,0)),_<=f&&(f=_,n.set(0,1,0)),m<=f&&n.set(0,0,1),h.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],h),l[0].crossVectors(s[0],o[0]);for(let g=1;g<=t;g++){if(o[g]=o[g-1].clone(),l[g]=l[g-1].clone(),h.crossVectors(s[g-1],s[g]),h.length()>Number.EPSILON){h.normalize();let b=Math.acos(re(s[g-1].dot(s[g]),-1,1));o[g].applyMatrix4(u.makeRotationAxis(h,b))}l[g].crossVectors(s[g],o[g])}if(e===!0){let g=Math.acos(re(o[0].dot(o[t]),-1,1));g/=t,s[0].dot(h.crossVectors(o[0],o[t]))>0&&(g=-g);for(let b=1;b<=t;b++)o[b].applyMatrix4(u.makeRotationAxis(s[b],g*b)),l[b].crossVectors(s[b],o[b])}return{tangents:s,normals:o,binormals:l}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ls=class extends Si{constructor(t=0,e=0,n=1,s=1,o=0,l=Math.PI*2,h=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=l,this.aClockwise=h,this.aRotation=u}getPoint(t,e=new _t){let n=e,s=Math.PI*2,o=this.aEndAngle-this.aStartAngle,l=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(l?o=0:o=s),this.aClockwise===!0&&!l&&(o===s?o=-s:o=o-s);let h=this.aStartAngle+t*o,u=this.aX+this.xRadius*Math.cos(h),f=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){let p=Math.cos(this.aRotation),_=Math.sin(this.aRotation),m=u-this.aX,g=f-this.aY;u=m*p-g*_+this.aX,f=m*_+g*p+this.aY}return n.set(u,f)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Qo=class extends Ls{constructor(t,e,n,s,o,l){super(t,e,n,n,s,o,l),this.isArcCurve=!0,this.type="ArcCurve"}};function Jc(){let i=0,t=0,e=0,n=0;function s(o,l,h,u){i=o,t=h,e=-3*o+3*l-2*h-u,n=2*o-2*l+h+u}return{initCatmullRom:function(o,l,h,u,f){s(l,h,f*(h-o),f*(u-l))},initNonuniformCatmullRom:function(o,l,h,u,f,p,_){let m=(l-o)/f-(h-o)/(f+p)+(h-l)/p,g=(h-l)/p-(u-l)/(p+_)+(u-h)/_;m*=p,g*=p,s(l,h,m,g)},calc:function(o){let l=o*o,h=l*o;return i+t*o+e*l+n*h}}}var Qh=new k,tu=new k,lc=new Jc,cc=new Jc,hc=new Jc,ta=class extends Si{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){let n=e,s=this.points,o=s.length,l=(o-(this.closed?0:1))*t,h=Math.floor(l),u=l-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/o)+1)*o:u===0&&h===o-1&&(h=o-2,u=1);let f,p;this.closed||h>0?f=s[(h-1)%o]:(tu.subVectors(s[0],s[1]).add(s[0]),f=tu);let _=s[h%o],m=s[(h+1)%o];if(this.closed||h+2<o?p=s[(h+2)%o]:(Qh.subVectors(s[o-1],s[o-2]).add(s[o-1]),p=Qh),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,b=Math.pow(f.distanceToSquared(_),g),w=Math.pow(_.distanceToSquared(m),g),y=Math.pow(m.distanceToSquared(p),g);w<1e-4&&(w=1),b<1e-4&&(b=w),y<1e-4&&(y=w),lc.initNonuniformCatmullRom(f.x,_.x,m.x,p.x,b,w,y),cc.initNonuniformCatmullRom(f.y,_.y,m.y,p.y,b,w,y),hc.initNonuniformCatmullRom(f.z,_.z,m.z,p.z,b,w,y)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(f.x,_.x,m.x,p.x,this.tension),cc.initCatmullRom(f.y,_.y,m.y,p.y,this.tension),hc.initCatmullRom(f.z,_.z,m.z,p.z,this.tension));return n.set(lc.calc(u),cc.calc(u),hc.calc(u)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function eu(i,t,e,n,s){let o=(n-t)*.5,l=(s-e)*.5,h=i*i,u=i*h;return(2*e-2*n+o+l)*u+(-3*e+3*n-2*o-l)*h+o*i+e}function Qd(i,t){let e=1-i;return e*e*t}function tp(i,t){return 2*(1-i)*i*t}function ep(i,t){return i*i*t}function rr(i,t,e,n){return Qd(i,t)+tp(i,e)+ep(i,n)}function ip(i,t){let e=1-i;return e*e*e*t}function np(i,t){let e=1-i;return 3*e*e*i*t}function sp(i,t){return 3*(1-i)*i*i*t}function rp(i,t){return i*i*i*t}function or(i,t,e,n,s){return ip(i,t)+np(i,e)+sp(i,n)+rp(i,s)}var br=class extends Si{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,o=this.v1,l=this.v2,h=this.v3;return n.set(or(t,s.x,o.x,l.x,h.x),or(t,s.y,o.y,l.y,h.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ea=class extends Si{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){let n=e,s=this.v0,o=this.v1,l=this.v2,h=this.v3;return n.set(or(t,s.x,o.x,l.x,h.x),or(t,s.y,o.y,l.y,h.y),or(t,s.z,o.z,l.z,h.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sr=class extends Si{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ia=class extends Si{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mr=class extends Si{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,o=this.v1,l=this.v2;return n.set(rr(t,s.x,o.x,l.x),rr(t,s.y,o.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},na=class extends Si{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,s=this.v0,o=this.v1,l=this.v2;return n.set(rr(t,s.x,o.x,l.x),rr(t,s.y,o.y,l.y),rr(t,s.z,o.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wr=class extends Si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,o=(s.length-1)*t,l=Math.floor(o),h=o-l,u=s[l===0?l:l-1],f=s[l],p=s[l>s.length-2?s.length-1:l+1],_=s[l>s.length-3?s.length-1:l+2];return n.set(eu(h,u.x,f.x,p.x,_.x),eu(h,u.y,f.y,p.y,_.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},xc=Object.freeze({__proto__:null,ArcCurve:Qo,CatmullRomCurve3:ta,CubicBezierCurve:br,CubicBezierCurve3:ea,EllipseCurve:Ls,LineCurve:Sr,LineCurve3:ia,QuadraticBezierCurve:Mr,QuadraticBezierCurve3:na,SplineCurve:wr}),sa=class extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),o=0;for(;o<s.length;){if(s[o]>=n){let l=s[o]-n,h=this.curves[o],u=h.getLength(),f=u===0?0:1-l/u;return h.getPointAt(f,e)}o++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,o=this.curves;s<o.length;s++){let l=o[s],h=l.isEllipseCurve?t*2:l.isLineCurve||l.isLineCurve3?1:l.isSplineCurve?t*l.points.length:t,u=l.getPoints(h);for(let f=0;f<u.length;f++){let p=u[f];n&&n.equals(p)||(e.push(p),n=p)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new xc[s.type]().fromJSON(s))}return this}},Xn=class extends sa{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Sr(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let o=new Mr(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,l){let h=new br(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(o,l));return this.curves.push(h),this.currentPoint.set(o,l),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new wr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,l){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(t+h,e+u,n,s,o,l),this}absarc(t,e,n,s,o,l){return this.absellipse(t,e,n,n,s,o,l),this}ellipse(t,e,n,s,o,l,h,u){let f=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(t+f,e+p,n,s,o,l,h,u),this}absellipse(t,e,n,s,o,l,h,u){let f=new Ls(t,e,n,s,o,l,h,u);if(this.curves.length>0){let _=f.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(f);let p=f.getPoint(1);return this.currentPoint.copy(p),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},an=class extends Xn{constructor(t){super(t),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Xn().fromJSON(s))}return this}};function op(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,o=Qu(i,0,s,e,!0),l=[];if(!o||o.next===o.prev)return l;let h,u,f;if(n&&(o=up(i,t,o,e)),i.length>80*e){h=i[0],u=i[1];let p=h,_=u;for(let m=e;m<s;m+=e){let g=i[m],b=i[m+1];g<h&&(h=g),b<u&&(u=b),g>p&&(p=g),b>_&&(_=b)}f=Math.max(p-h,_-u),f=f!==0?32767/f:0}return Tr(o,l,e,h,u,f,0),l}function Qu(i,t,e,n,s){let o;if(s===Sp(i,t,e,n)>0)for(let l=t;l<e;l+=n)o=iu(l/n|0,i[l],i[l+1],o);else for(let l=e-n;l>=t;l-=n)o=iu(l/n|0,i[l],i[l+1],o);return o&&Ds(o,o.next)&&(Ar(o),o=o.next),o}function Wn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ds(e,e.next)||Le(e.prev,e,e.next)===0)){if(Ar(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Tr(i,t,e,n,s,o,l){if(!i)return;!l&&o&&gp(i,n,s,o);let h=i;for(;i.prev!==i.next;){let u=i.prev,f=i.next;if(o?lp(i,n,s,o):ap(i)){t.push(u.i,i.i,f.i),Ar(i),i=f.next,h=f.next;continue}if(i=f,i===h){l?l===1?(i=cp(Wn(i),t),Tr(i,t,e,n,s,o,2)):l===2&&hp(i,t,e,n,s,o):Tr(Wn(i),t,e,n,s,o,1);break}}}function ap(i){let t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;let s=t.x,o=e.x,l=n.x,h=t.y,u=e.y,f=n.y,p=Math.min(s,o,l),_=Math.min(h,u,f),m=Math.max(s,o,l),g=Math.max(h,u,f),b=n.next;for(;b!==t;){if(b.x>=p&&b.x<=m&&b.y>=_&&b.y<=g&&nr(s,h,o,u,l,f,b.x,b.y)&&Le(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function lp(i,t,e,n){let s=i.prev,o=i,l=i.next;if(Le(s,o,l)>=0)return!1;let h=s.x,u=o.x,f=l.x,p=s.y,_=o.y,m=l.y,g=Math.min(h,u,f),b=Math.min(p,_,m),w=Math.max(h,u,f),y=Math.max(p,_,m),v=yc(g,b,t,e,n),A=yc(w,y,t,e,n),C=i.prevZ,T=i.nextZ;for(;C&&C.z>=v&&T&&T.z<=A;){if(C.x>=g&&C.x<=w&&C.y>=b&&C.y<=y&&C!==s&&C!==l&&nr(h,p,u,_,f,m,C.x,C.y)&&Le(C.prev,C,C.next)>=0||(C=C.prevZ,T.x>=g&&T.x<=w&&T.y>=b&&T.y<=y&&T!==s&&T!==l&&nr(h,p,u,_,f,m,T.x,T.y)&&Le(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;C&&C.z>=v;){if(C.x>=g&&C.x<=w&&C.y>=b&&C.y<=y&&C!==s&&C!==l&&nr(h,p,u,_,f,m,C.x,C.y)&&Le(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;T&&T.z<=A;){if(T.x>=g&&T.x<=w&&T.y>=b&&T.y<=y&&T!==s&&T!==l&&nr(h,p,u,_,f,m,T.x,T.y)&&Le(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function cp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ds(n,s)&&ef(n,e,e.next,s)&&Er(n,s)&&Er(s,n)&&(t.push(n.i,e.i,s.i),Ar(e),Ar(e.next),e=i=s),e=e.next}while(e!==i);return Wn(e)}function hp(i,t,e,n,s,o){let l=i;do{let h=l.next.next;for(;h!==l.prev;){if(l.i!==h.i&&yp(l,h)){let u=nf(l,h);l=Wn(l,l.next),u=Wn(u,u.next),Tr(l,t,e,n,s,o,0),Tr(u,t,e,n,s,o,0);return}h=h.next}l=l.next}while(l!==i)}function up(i,t,e,n){let s=[];for(let o=0,l=t.length;o<l;o++){let h=t[o]*n,u=o<l-1?t[o+1]*n:i.length,f=Qu(i,h,u,n,!1);f===f.next&&(f.steiner=!0),s.push(xp(f))}s.sort(fp);for(let o=0;o<s.length;o++)e=dp(s[o],e);return e}function fp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function dp(i,t){let e=pp(i,t);if(!e)return t;let n=nf(e,i);return Wn(n,n.next),Wn(e,e.next)}function pp(i,t){let e=t,n=i.x,s=i.y,o=-1/0,l;if(Ds(i,e))return e;do{if(Ds(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let _=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(_<=n&&_>o&&(o=_,l=e.x<e.next.x?e:e.next,_===n))return l}e=e.next}while(e!==t);if(!l)return null;let h=l,u=l.x,f=l.y,p=1/0;e=l;do{if(n>=e.x&&e.x>=u&&n!==e.x&&tf(s<f?n:o,s,u,f,s<f?o:n,s,e.x,e.y)){let _=Math.abs(s-e.y)/(n-e.x);Er(e,i)&&(_<p||_===p&&(e.x>l.x||e.x===l.x&&mp(l,e)))&&(l=e,p=_)}e=e.next}while(e!==h);return l}function mp(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function gp(i,t,e,n){let s=i;do s.z===0&&(s.z=yc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_p(s)}function _p(i){let t,e=1;do{let n=i,s;i=null;let o=null;for(t=0;n;){t++;let l=n,h=0;for(let f=0;f<e&&(h++,l=l.nextZ,!!l);f++);let u=e;for(;h>0||u>0&&l;)h!==0&&(u===0||!l||n.z<=l.z)?(s=n,n=n.nextZ,h--):(s=l,l=l.nextZ,u--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=l}o.nextZ=null,e*=2}while(t>1);return i}function yc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function xp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function tf(i,t,e,n,s,o,l,h){return(s-l)*(t-h)>=(i-l)*(o-h)&&(i-l)*(n-h)>=(e-l)*(t-h)&&(e-l)*(o-h)>=(s-l)*(n-h)}function nr(i,t,e,n,s,o,l,h){return!(i===l&&t===h)&&tf(i,t,e,n,s,o,l,h)}function yp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!vp(i,t)&&(Er(i,t)&&Er(t,i)&&bp(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||Ds(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ds(i,t){return i.x===t.x&&i.y===t.y}function ef(i,t,e,n){let s=No(Le(i,t,e)),o=No(Le(i,t,n)),l=No(Le(e,n,i)),h=No(Le(e,n,t));return!!(s!==o&&l!==h||s===0&&Do(i,e,t)||o===0&&Do(i,n,t)||l===0&&Do(e,i,n)||h===0&&Do(e,t,n))}function Do(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function No(i){return i>0?1:i<0?-1:0}function vp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ef(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Er(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function bp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function nf(i,t){let e=vc(i.i,i.x,i.y),n=vc(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function iu(i,t,e,n){let s=vc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ar(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sp(i,t,e,n){let s=0;for(let o=t,l=e-n;o<e;o+=n)s+=(i[l]-i[o])*(i[o+1]+i[l+1]),l=o;return s}var bc=class{static triangulate(t,e,n=2){return op(t,e,n)}},Gi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],o=[];nu(t),su(n,t);let l=t.length;e.forEach(nu);for(let u=0;u<e.length;u++)s.push(l),l+=e[u].length,su(n,e[u]);let h=bc.triangulate(n,s);for(let u=0;u<h.length;u+=3)o.push(h.slice(u,u+3));return o}};function nu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function su(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Yn=class i extends Ne{constructor(t=new an([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],o=[];for(let h=0,u=t.length;h<u;h++){let f=t[h];l(f)}this.setAttribute("position",new ge(s,3)),this.setAttribute("uv",new ge(o,2)),this.computeVertexNormals();function l(h){let u=[],f=e.curveSegments!==void 0?e.curveSegments:12,p=e.steps!==void 0?e.steps:1,_=e.depth!==void 0?e.depth:1,m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,b=e.bevelSize!==void 0?e.bevelSize:g-.1,w=e.bevelOffset!==void 0?e.bevelOffset:0,y=e.bevelSegments!==void 0?e.bevelSegments:3,v=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:Mp,C,T=!1,R,L,O,E;if(v){C=v.getSpacedPoints(p),T=!0,m=!1;let pt=v.isCatmullRomCurve3?v.closed:!1;R=v.computeFrenetFrames(p,pt),L=new k,O=new k,E=new k}m||(y=0,g=0,b=0,w=0);let D=h.extractPoints(f),U=D.shape,N=D.holes;if(!Gi.isClockWise(U)){U=U.reverse();for(let pt=0,xt=N.length;pt<xt;pt++){let yt=N[pt];Gi.isClockWise(yt)&&(N[pt]=yt.reverse())}}function H(pt){let yt=10000000000000001e-36,vt=pt[0];for(let Mt=1;Mt<=pt.length;Mt++){let Kt=Mt%pt.length,Zt=pt[Kt],ee=Zt.x-vt.x,se=Zt.y-vt.y,X=ee*ee+se*se,xe=Math.max(Math.abs(Zt.x),Math.abs(Zt.y),Math.abs(vt.x),Math.abs(vt.y)),fe=yt*xe*xe;if(X<=fe){pt.splice(Kt,1),Mt--;continue}vt=Zt}}H(U),N.forEach(H);let B=N.length,W=U;for(let pt=0;pt<B;pt++){let xt=N[pt];U=U.concat(xt)}function K(pt,xt,yt){return xt||ie("ExtrudeGeometry: vec does not exist"),pt.clone().addScaledVector(xt,yt)}let J=U.length;function at(pt,xt,yt){let vt,Mt,Kt,Zt=pt.x-xt.x,ee=pt.y-xt.y,se=yt.x-pt.x,X=yt.y-pt.y,xe=Zt*Zt+ee*ee,fe=Zt*X-ee*se;if(Math.abs(fe)>Number.EPSILON){let F=Math.sqrt(xe),M=Math.sqrt(se*se+X*X),Z=xt.x-ee/F,et=xt.y+Zt/F,rt=yt.x-X/M,bt=yt.y+se/M,St=((rt-Z)*X-(bt-et)*se)/(Zt*X-ee*se);vt=Z+Zt*St-pt.x,Mt=et+ee*St-pt.y;let ot=vt*vt+Mt*Mt;if(ot<=2)return new _t(vt,Mt);Kt=Math.sqrt(ot/2)}else{let F=!1;Zt>Number.EPSILON?se>Number.EPSILON&&(F=!0):Zt<-Number.EPSILON?se<-Number.EPSILON&&(F=!0):Math.sign(ee)===Math.sign(X)&&(F=!0),F?(vt=-ee,Mt=Zt,Kt=Math.sqrt(xe)):(vt=Zt,Mt=ee,Kt=Math.sqrt(xe/2))}return new _t(vt/Kt,Mt/Kt)}let tt=[];for(let pt=0,xt=W.length,yt=xt-1,vt=pt+1;pt<xt;pt++,yt++,vt++)yt===xt&&(yt=0),vt===xt&&(vt=0),tt[pt]=at(W[pt],W[yt],W[vt]);let nt=[],st,Tt=tt.concat();for(let pt=0,xt=B;pt<xt;pt++){let yt=N[pt];st=[];for(let vt=0,Mt=yt.length,Kt=Mt-1,Zt=vt+1;vt<Mt;vt++,Kt++,Zt++)Kt===Mt&&(Kt=0),Zt===Mt&&(Zt=0),st[vt]=at(yt[vt],yt[Kt],yt[Zt]);nt.push(st),Tt=Tt.concat(st)}let Et;if(y===0)Et=Gi.triangulateShape(W,N);else{let pt=[],xt=[];for(let yt=0;yt<y;yt++){let vt=yt/y,Mt=g*Math.cos(vt*Math.PI/2),Kt=b*Math.sin(vt*Math.PI/2)+w;for(let Zt=0,ee=W.length;Zt<ee;Zt++){let se=K(W[Zt],tt[Zt],Kt);Nt(se.x,se.y,-Mt),vt===0&&pt.push(se)}for(let Zt=0,ee=B;Zt<ee;Zt++){let se=N[Zt];st=nt[Zt];let X=[];for(let xe=0,fe=se.length;xe<fe;xe++){let F=K(se[xe],st[xe],Kt);Nt(F.x,F.y,-Mt),vt===0&&X.push(F)}vt===0&&xt.push(X)}}Et=Gi.triangulateShape(pt,xt)}let $t=Et.length,ne=b+w;for(let pt=0;pt<J;pt++){let xt=m?K(U[pt],Tt[pt],ne):U[pt];T?(O.copy(R.normals[0]).multiplyScalar(xt.x),L.copy(R.binormals[0]).multiplyScalar(xt.y),E.copy(C[0]).add(O).add(L),Nt(E.x,E.y,E.z)):Nt(xt.x,xt.y,0)}for(let pt=1;pt<=p;pt++)for(let xt=0;xt<J;xt++){let yt=m?K(U[xt],Tt[xt],ne):U[xt];T?(O.copy(R.normals[pt]).multiplyScalar(yt.x),L.copy(R.binormals[pt]).multiplyScalar(yt.y),E.copy(C[pt]).add(O).add(L),Nt(E.x,E.y,E.z)):Nt(yt.x,yt.y,_/p*pt)}for(let pt=y-1;pt>=0;pt--){let xt=pt/y,yt=g*Math.cos(xt*Math.PI/2),vt=b*Math.sin(xt*Math.PI/2)+w;for(let Mt=0,Kt=W.length;Mt<Kt;Mt++){let Zt=K(W[Mt],tt[Mt],vt);Nt(Zt.x,Zt.y,_+yt)}for(let Mt=0,Kt=N.length;Mt<Kt;Mt++){let Zt=N[Mt];st=nt[Mt];for(let ee=0,se=Zt.length;ee<se;ee++){let X=K(Zt[ee],st[ee],vt);T?Nt(X.x,X.y+C[p-1].y,C[p-1].x+yt):Nt(X.x,X.y,_+yt)}}}me(),lt();function me(){let pt=s.length/3;if(m){let xt=0,yt=J*xt;for(let vt=0;vt<$t;vt++){let Mt=Et[vt];jt(Mt[2]+yt,Mt[1]+yt,Mt[0]+yt)}xt=p+y*2,yt=J*xt;for(let vt=0;vt<$t;vt++){let Mt=Et[vt];jt(Mt[0]+yt,Mt[1]+yt,Mt[2]+yt)}}else{for(let xt=0;xt<$t;xt++){let yt=Et[xt];jt(yt[2],yt[1],yt[0])}for(let xt=0;xt<$t;xt++){let yt=Et[xt];jt(yt[0]+J*p,yt[1]+J*p,yt[2]+J*p)}}n.addGroup(pt,s.length/3-pt,0)}function lt(){let pt=s.length/3,xt=0;dt(W,xt),xt+=W.length;for(let yt=0,vt=N.length;yt<vt;yt++){let Mt=N[yt];dt(Mt,xt),xt+=Mt.length}n.addGroup(pt,s.length/3-pt,1)}function dt(pt,xt){let yt=pt.length;for(;--yt>=0;){let vt=yt,Mt=yt-1;Mt<0&&(Mt=pt.length-1);for(let Kt=0,Zt=p+y*2;Kt<Zt;Kt++){let ee=J*Kt,se=J*(Kt+1),X=xt+vt+ee,xe=xt+Mt+ee,fe=xt+Mt+se,F=xt+vt+se;Ft(X,xe,fe,F)}}}function Nt(pt,xt,yt){u.push(pt),u.push(xt),u.push(yt)}function jt(pt,xt,yt){te(pt),te(xt),te(yt);let vt=s.length/3,Mt=A.generateTopUV(n,s,vt-3,vt-2,vt-1);be(Mt[0]),be(Mt[1]),be(Mt[2])}function Ft(pt,xt,yt,vt){te(pt),te(xt),te(vt),te(xt),te(yt),te(vt);let Mt=s.length/3,Kt=A.generateSideWallUV(n,s,Mt-6,Mt-3,Mt-2,Mt-1);be(Kt[0]),be(Kt[1]),be(Kt[3]),be(Kt[1]),be(Kt[2]),be(Kt[3])}function te(pt){s.push(u[pt*3+0]),s.push(u[pt*3+1]),s.push(u[pt*3+2])}function be(pt){o.push(pt.x),o.push(pt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return wp(e,n,t)}static fromJSON(t,e){let n=[];for(let o=0,l=t.shapes.length;o<l;o++){let h=e[t.shapes[o]];n.push(h)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new xc[s.type]().fromJSON(s)),new i(n,t.options)}},Mp={generateTopUV:function(i,t,e,n,s){let o=t[e*3],l=t[e*3+1],h=t[n*3],u=t[n*3+1],f=t[s*3],p=t[s*3+1];return[new _t(o,l),new _t(h,u),new _t(f,p)]},generateSideWallUV:function(i,t,e,n,s,o){let l=t[e*3],h=t[e*3+1],u=t[e*3+2],f=t[n*3],p=t[n*3+1],_=t[n*3+2],m=t[s*3],g=t[s*3+1],b=t[s*3+2],w=t[o*3],y=t[o*3+1],v=t[o*3+2];return Math.abs(h-p)<Math.abs(l-f)?[new _t(l,1-u),new _t(f,1-_),new _t(m,1-b),new _t(w,1-v)]:[new _t(h,1-u),new _t(p,1-_),new _t(g,1-b),new _t(y,1-v)]}};function wp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Cr=class i extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let o=t/2,l=e/2,h=Math.floor(n),u=Math.floor(s),f=h+1,p=u+1,_=t/h,m=e/u,g=[],b=[],w=[],y=[];for(let v=0;v<p;v++){let A=v*m-l;for(let C=0;C<f;C++){let T=C*_-o;b.push(T,-A,0),w.push(0,0,1),y.push(C/h),y.push(1-v/u)}}for(let v=0;v<u;v++)for(let A=0;A<h;A++){let C=A+f*v,T=A+f*(v+1),R=A+1+f*(v+1),L=A+1+f*v;g.push(C,T,L),g.push(T,R,L)}this.setIndex(g),this.setAttribute("position",new ge(b,3)),this.setAttribute("normal",new ge(w,3)),this.setAttribute("uv",new ge(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var vn=class i extends Ne{constructor(t=new an([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],o=[],l=[],h=0,u=0;if(Array.isArray(t)===!1)f(t);else for(let p=0;p<t.length;p++)f(t[p]),this.addGroup(h,u,p),h+=u,u=0;this.setIndex(n),this.setAttribute("position",new ge(s,3)),this.setAttribute("normal",new ge(o,3)),this.setAttribute("uv",new ge(l,2));function f(p){let _=s.length/3,m=p.extractPoints(e),g=m.shape,b=m.holes;Gi.isClockWise(g)===!1&&(g=g.reverse());for(let y=0,v=b.length;y<v;y++){let A=b[y];Gi.isClockWise(A)===!0&&(b[y]=A.reverse())}let w=Gi.triangulateShape(g,b);for(let y=0,v=b.length;y<v;y++){let A=b[y];g=g.concat(A)}for(let y=0,v=g.length;y<v;y++){let A=g[y];s.push(A.x,A.y,0),o.push(0,0,1),l.push(A.x,A.y)}for(let y=0,v=w.length;y<v;y++){let A=w[y],C=A[0]+_,T=A[1]+_,R=A[2]+_;n.push(C,T,R),u+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Tp(e,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let l=e[t.shapes[s]];n.push(l)}return new i(n,t.curveSegments)}};function Tp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ai=class i extends Ne{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,l=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:l,thetaLength:h},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let u=Math.min(l+h,Math.PI),f=0,p=[],_=new k,m=new k,g=[],b=[],w=[],y=[];for(let v=0;v<=n;v++){let A=[],C=v/n,T=l+C*h,R=t*Math.cos(T),L=Math.sqrt(t*t-R*R),O=0;v===0&&l===0?O=.5/e:v===n&&u===Math.PI&&(O=-.5/e);for(let E=0;E<=e;E++){let D=E/e,U=s+D*o;_.x=-L*Math.cos(U),_.y=R,_.z=L*Math.sin(U),b.push(_.x,_.y,_.z),m.copy(_).normalize(),w.push(m.x,m.y,m.z),y.push(D+O,1-C),A.push(f++)}p.push(A)}for(let v=0;v<n;v++)for(let A=0;A<e;A++){let C=p[v][A+1],T=p[v][A],R=p[v+1][A],L=p[v+1][A+1];(v!==0||l>0)&&g.push(C,T,L),(v!==n-1||u<Math.PI)&&g.push(T,R,L)}this.setIndex(g),this.setAttribute("position",new ge(b,3)),this.setAttribute("normal",new ge(w,3)),this.setAttribute("uv",new ge(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Pr=class extends Ne{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new k,o=new k;if(t.index!==null){let l=t.attributes.position,h=t.index,u=t.groups;u.length===0&&(u=[{start:0,count:h.count,materialIndex:0}]);for(let f=0,p=u.length;f<p;++f){let _=u[f],m=_.start,g=_.count;for(let b=m,w=m+g;b<w;b+=3)for(let y=0;y<3;y++){let v=h.getX(b+y),A=h.getX(b+(y+1)%3);s.fromBufferAttribute(l,v),o.fromBufferAttribute(l,A),ru(s,o,n)===!0&&(e.push(s.x,s.y,s.z),e.push(o.x,o.y,o.z))}}}else{let l=t.attributes.position;for(let h=0,u=l.count/3;h<u;h++)for(let f=0;f<3;f++){let p=3*h+f,_=3*h+(f+1)%3;s.fromBufferAttribute(l,p),o.fromBufferAttribute(l,_),ru(s,o,n)===!0&&(e.push(s.x,s.y,s.z),e.push(o.x,o.y,o.z))}}this.setAttribute("position",new ge(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function ru(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Jn(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ou(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ou(s[0])){let o=[];for(let l=0,h=s.length;l<h;l++)o[l]=s[l].clone();t[e][n]=o}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ti(i){let t={};for(let e=0;e<i.length;e++){let n=Jn(i[e]);for(let s in n)t[s]=n[s]}return t}function ou(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ep(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var Jr={clone:Jn,merge:ti},Ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ap,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jn(t.uniforms),this.uniformsGroups=Ep(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let l=this.uniforms[s].value;l&&l.isTexture?e.uniforms[s]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[s]={type:"m4",value:l.toArray()}:e.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(s.value);break;case"v2":this.uniforms[n].value=new _t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ae().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ra=class extends ri{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var qn=class extends xn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new de(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var oa=class extends xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},aa=class extends xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ms(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function uc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var bn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],o=e[n-1];i:{t:{let l;e:{n:if(!(t<s)){for(let h=n+2;;){if(s===void 0){if(t<o)break n;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===h)break;if(o=s,s=e[++n],t<s)break t}l=e.length;break e}if(!(t>=o)){let h=e[1];t<h&&(n=2,o=h);for(let u=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(s=o,o=e[--n-1],t>=o)break t}l=n,n=0;break e}break i}for(;n<l;){let h=n+l>>>1;t<e[h]?l=h:n=h+1}if(s=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,s)}return this.interpolate_(n,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=t*s;for(let l=0;l!==s;++l)e[l]=n[o+l];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},la=class extends bn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mc,endingEnd:mc}}intervalChanged_(t,e,n){let s=this.parameterPositions,o=t-2,l=t+1,h=s[o],u=s[l];if(h===void 0)switch(this.getSettings_().endingStart){case gc:o=t,h=2*e-n;break;case _c:o=s.length-2,h=e+s[o]-s[o+1];break;default:o=t,h=n}if(u===void 0)switch(this.getSettings_().endingEnd){case gc:l=t,u=2*n-e;break;case _c:l=1,u=n+s[1]-s[0];break;default:l=t-1,u=e}let f=(n-e)*.5,p=this.valueSize;this._weightPrev=f/(e-h),this._weightNext=f/(u-n),this._offsetPrev=o*p,this._offsetNext=l*p}interpolate_(t,e,n,s){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,f=u-h,p=this._offsetPrev,_=this._offsetNext,m=this._weightPrev,g=this._weightNext,b=(n-e)/(s-e),w=b*b,y=w*b,v=-m*y+2*m*w-m*b,A=(1+m)*y+(-1.5-2*m)*w+(-.5+m)*b+1,C=(-1-g)*y+(1.5+g)*w+.5*b,T=g*y-g*w;for(let R=0;R!==h;++R)o[R]=v*l[p+R]+A*l[f+R]+C*l[u+R]+T*l[_+R];return o}},ca=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,f=u-h,p=(n-e)/(s-e),_=1-p;for(let m=0;m!==h;++m)o[m]=l[f+m]*_+l[u+m]*p;return o}},ha=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ua=class extends bn{interpolate_(t,e,n,s){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,f=u-h,p=this.inTangents,_=this.outTangents;if(!p||!_){let b=(n-e)/(s-e),w=1-b;for(let y=0;y!==h;++y)o[y]=l[f+y]*w+l[u+y]*b;return o}let m=h*2,g=t-1;for(let b=0;b!==h;++b){let w=l[f+b],y=l[u+b],v=g*m+b*2,A=_[v],C=_[v+1],T=t*m+b*2,R=p[T],L=p[T+1],O=Ip(n,e,A,R,s);o[b]=sf(O,w,C,L,y)}return o}};function sf(i,t,e,n,s){let o=1-i;return o*o*o*t+3*o*o*i*e+3*o*i*i*n+i*i*i*s}function Pp(i,t,e,n,s){let o=1-i;return 3*o*o*(e-t)+6*o*i*(n-e)+3*i*i*(s-n)}function Ip(i,t,e,n,s){let o=(i-t)/(s-t);for(let l=0;l<8;l++){let h=sf(o,t,e,n,s)-i;if(Math.abs(h)<1e-10)break;let u=Pp(o,t,e,n,s);if(Math.abs(u)<1e-10)break;o=Math.max(0,Math.min(1,o-h/u))}return o}var Mi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ms(e,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ms(t.times,Array),values:ms(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),uc(t.settings)&&(n.settings={inTangents:ms(t.settings.inTangents,Array),outTangents:ms(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new la(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ua(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ar:e=this.InterpolantFactoryMethodDiscrete;break;case $o:e=this.InterpolantFactoryMethodLinear;break;case Uo:e=this.InterpolantFactoryMethodSmooth;break;case pc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return $o;case this.InterpolantFactoryMethodSmooth:return Uo;case this.InterpolantFactoryMethodBezier:return pc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;uc(this.settings)&&(au(this.settings.inTangents,t),au(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,o=0,l=s-1;for(;o!==s&&n[o]<t;)++o;for(;l!==-1&&n[l]>e;)--l;if(++l,o!==0||l!==s){o>=l&&(l=Math.max(l,1),o=l-1);let h=this.getValueSize();this.times=n.slice(o,l),this.values=this.values.slice(o*h,l*h)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ie("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,o=n.length;o===0&&(ie("KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let h=0;h!==o;h++){let u=n[h];if(typeof u=="number"&&isNaN(u)){ie("KeyframeTrack: Time is not a valid number.",this,h,u),t=!1;break}if(l!==null&&l>u){ie("KeyframeTrack: Out of order keys.",this,h,u,l),t=!1;break}l=u}if(s!==void 0&&xd(s))for(let h=0,u=s.length;h!==u;++h){let f=s[h];if(isNaN(f)){ie("KeyframeTrack: Value is not a valid number.",this,h,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Uo,o=t.length-1,l=1;for(let h=1;h<o;++h){let u=!1,f=t[h],p=t[h+1];if(f!==p&&(h!==1||f!==t[0]))if(s)u=!0;else{let _=h*n,m=_-n,g=_+n;for(let b=0;b!==n;++b){let w=e[_+b];if(w!==e[m+b]||w!==e[g+b]){u=!0;break}}}if(u){if(h!==l){t[l]=t[h];let _=h*n,m=l*n;for(let g=0;g!==n;++g)e[m+g]=e[_+g]}++l}}if(o>0){t[l]=t[o];for(let h=o*n,u=l*n,f=0;f!==n;++f)e[u+f]=e[h+f];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,uc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function au(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Mi.prototype.ValueTypeName="";Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=$o;var Sn=class extends Mi{constructor(t,e,n){super(t,e,n)}};Sn.prototype.ValueTypeName="bool";Sn.prototype.ValueBufferType=Array;Sn.prototype.DefaultInterpolation=ar;Sn.prototype.InterpolantFactoryMethodLinear=void 0;Sn.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}};fa.prototype.ValueTypeName="color";var da=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}};da.prototype.ValueTypeName="number";var pa=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=(n-e)/(s-e),f=t*h;for(let p=f+h;f!==p;f+=4)vi.slerpFlat(o,0,l,f-h,l,f,u);return o}},Ir=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new pa(this.times,this.values,this.getValueSize(),t)}};Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Mn=class extends Mi{constructor(t,e,n){super(t,e,n)}};Mn.prototype.ValueTypeName="string";Mn.prototype.ValueBufferType=Array;Mn.prototype.DefaultInterpolation=ar;Mn.prototype.InterpolantFactoryMethodLinear=void 0;Mn.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="vector";var ga=class{constructor(t,e,n){let s=this,o=!1,l=0,h=0,u,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(p){h++,o===!1&&s.onStart!==void 0&&s.onStart(p,l,h),o=!0},this.itemEnd=function(p){l++,s.onProgress!==void 0&&s.onProgress(p,l,h),l===h&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,_){return f.push(p,_),this},this.removeHandler=function(p){let _=f.indexOf(p);return _!==-1&&f.splice(_,2),this},this.getHandler=function(p){for(let _=0,m=f.length;_<m;_+=2){let g=f[_],b=f[_+1];if(g.global&&(g.lastIndex=0),g.test(p))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rf=new ga,_a=class{constructor(t){this.manager=t!==void 0?t:rf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_a.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=class extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Lr=class extends Rr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},fc=new _e,lu=new k,cu=new k,xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;lu.setFromMatrixPosition(t.matrixWorld),e.position.copy(lu),cu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(fc,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,l=s?s.z/o.x:1,h=s?s.w/o.y:1,u=s?s.x/o.x:0,f=s?s.y/o.y:0;t.coordinateSystem===Ms||t.reversedDepth?e.set(.5*l,0,0,.5*l+u,0,.5*h,0,.5*h+f,0,0,1,0,0,0,0,1):e.set(.5*l,0,0,.5*l+u,0,.5*h,0,.5*h+f,0,0,.5,.5,0,0,0,1),e.multiply(fc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fo=new k,Oo=new vi,zi=new k,Dr=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fo,Oo,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Oo,zi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fo,Oo,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Oo,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gn=new k,hu=new _t,uu=new _t,je=class extends Dr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gn.x,gn.y).multiplyScalar(-t/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gn.x,gn.y).multiplyScalar(-t/gn.z)}getViewSize(t,e){return this.getViewBounds(t,hu,uu),e.subVectors(uu,hu)}setViewOffset(t,e,n,s,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s,l=this.view;if(this.view!==null&&this.view.enabled){let u=l.fullWidth,f=l.fullHeight;o+=l.offsetX*s/u,e-=l.offsetY*n/f,s*=l.width/u,n*=l.height/f}let h=this.filmOffset;h!==0&&(o+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ns=class extends Dr{constructor(t=-1,e=1,n=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=n-t,l=n+t,h=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,l=o+f*this.view.width,h-=p*this.view.offsetY,u=h-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,h,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sc=class extends xa{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Nr=class extends Rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new Sc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Fr=class extends Ne{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var gs=-90,_s=1,ya=class extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new je(gs,_s,t,e);s.layers=this.layers,this.add(s);let o=new je(gs,_s,t,e);o.layers=this.layers,this.add(o);let l=new je(gs,_s,t,e);l.layers=this.layers,this.add(l);let h=new je(gs,_s,t,e);h.layers=this.layers,this.add(h);let u=new je(gs,_s,t,e);u.layers=this.layers,this.add(u);let f=new je(gs,_s,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,o,l,h,u]=e;for(let f of e)this.remove(f);if(t===Di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,l,h,u,f,p]=this.children,_=t.getRenderTarget(),m=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;let w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(n,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(_,m,g),t.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},va=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var jc="\\[\\]\\.:\\/",Rp=new RegExp("["+jc+"]","g"),Qc="[^"+jc+"]",Lp="[^"+jc.replace("\\.","")+"]",Dp=/((?:WC+[\/:])*)/.source.replace("WC",Qc),Np=/(WCOD+)?/.source.replace("WCOD",Lp),Fp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),Op=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),Bp=new RegExp("^"+Dp+Np+Fp+Op+"$"),Up=["material","materials","bones","map"],Mc=class{constructor(t,e,n){let s=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ie=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Rp,"")}static parseTrackName(t){let e=Bp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=n.nodeName.substring(s+1);Up.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let l=0;l<o.length;l++){let h=o[l];if(h.name===e||h.uuid===e)return h;let u=n(h.children);if(u)return u}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=e.objectIndex;switch(n){case"materials":if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===f){f=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(f!==void 0){if(t[f]===void 0){ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let l=t[s];if(l===void 0){let f=e.nodeName;ie("PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?h=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=Mc;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sy=new Float32Array(1);var wn=class extends gr{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var fu=new _e,Or=class{constructor(t,e,n=0,s=1/0){this.ray=new Hn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new As,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return fu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fu),this}intersectObject(t,e=!0,n=[]){return wc(t,this,n,e),n.sort(du),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)wc(t[s],this,n,e);return n.sort(du),n}};function du(i,t){return i.distance-t.distance}function wc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let o=i.children;for(let l=0,h=o.length;l<h;l++)wc(o[l],t,e,!0)}}var Fs=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var rh=class rh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=s,this}};rh.prototype.isMatrix2=!0;var Tc=rh;var pu=new k,Bo=new k,xs=new k,ys=new k,dc=new k,kp=new k,zp=new k,Br=class{constructor(t=new k,e=new k){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){pu.subVectors(t,this.start),Bo.subVectors(this.end,this.start);let n=Bo.dot(Bo);if(n===0)return 0;let o=Bo.dot(pu)/n;return e&&(o=re(o,0,1)),o}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=kp,n=zp){let s=10000000000000001e-32,o,l,h=this.start,u=t.start,f=this.end,p=t.end;xs.subVectors(f,h),ys.subVectors(p,u),dc.subVectors(h,u);let _=xs.dot(xs),m=ys.dot(ys),g=ys.dot(dc);if(_<=s&&m<=s)return e.copy(h),n.copy(u),e.sub(n),e.dot(e);if(_<=s)o=0,l=g/m,l=re(l,0,1);else{let b=xs.dot(dc);if(m<=s)l=0,o=re(-b/_,0,1);else{let w=xs.dot(ys),y=_*m-w*w;y!==0?o=re((w*g-b*m)/y,0,1):o=0,l=(w*o+g)/m,l<0?(l=0,o=re(-b/_,0,1)):l>1&&(l=1,o=re((w-b)/_,0,1))}}return e.copy(h).addScaledVector(xs,o),n.copy(u).addScaledVector(ys,l),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Ur=class extends Ni{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function th(i,t,e,n){let s=Vp(n);switch(e){case Wc:return i*t;case Gr:return i*t/s.components*s.byteLength;case Pa:return i*t/s.components*s.byteLength;case Rn:return i*t*2/s.components*s.byteLength;case Ia:return i*t*2/s.components*s.byteLength;case Yc:return i*t*3/s.components*s.byteLength;case Ci:return i*t*4/s.components*s.byteLength;case Ra:return i*t*4/s.components*s.byteLength;case Hr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:case Fa:return Math.max(i,16)*Math.max(t,8)/4;case La:case Na:return Math.max(i,8)*Math.max(t,8)/2;case Oa:case Ba:case ka:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ua:case qr:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case il:case nl:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $r:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vp(i){switch(i){case fi:case Vc:return{byteLength:1,components:1};case Us:case Gc:case Ui:return{byteLength:2,components:1};case Aa:case Ca:return{byteLength:2,components:4};case Oi:case Ea:case Bi:return{byteLength:4,components:1};case Hc:case Xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);function Af(){let i=null,t=!1,e=null,n=null;function s(o,l){n=i.requestAnimationFrame(s),e(o,l)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Yp(i){let t=new WeakMap;function e(h,u){let f=h.array,p=h.usage,_=f.byteLength,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,f,p),h.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)g=i.HALF_FLOAT;else if(f instanceof Uint16Array)h.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:_}}function n(h,u,f){let p=u.array,_=u.updateRanges;if(i.bindBuffer(f,h),_.length===0)i.bufferSubData(f,0,p);else{_.sort((g,b)=>g.start-b.start);let m=0;for(let g=1;g<_.length;g++){let b=_[m],w=_[g];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++m,_[m]=w)}_.length=m+1;for(let g=0,b=_.length;g<b;g++){let w=_[g];i.bufferSubData(f,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=t.get(h);u&&(i.deleteBuffer(u.buffer),t.delete(h))}function l(h,u){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let p=t.get(h);(!p||p.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let f=t.get(h);if(f===void 0)t.set(h,e(h,u));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,h,u),f.version=h.version}}return{get:s,remove:o,update:l}}var qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
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
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
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
#endif`,tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,em=`#ifdef USE_BATCHING
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
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,om=`#ifdef USE_IRIDESCENCE
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
#endif`,am=`#ifdef USE_BUMPMAP
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gm=`#define PI 3.141592653589793
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
} // validated`,_m=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xm=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nm=`#ifdef USE_GRADIENTMAP
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
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,km=`#ifdef USE_ENVMAP
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
#endif`,zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
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
#endif`,Wm=`uniform sampler2D dfgLUT;
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
}`,Ym=`
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n0=`#if defined( USE_POINTS_UV )
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
#endif`,s0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`#ifdef USE_MORPHTARGETS
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
#endif`,h0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,g0=`#ifdef USE_NORMALMAP
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
#endif`,_0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L0=`float getShadowMask() {
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
}`,D0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,B0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,G0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`#include <common>
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
}`,tg=`#if DEPTH_PACKING == 3200
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
}`,eg=`#define DISTANCE
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
}`,ig=`#define DISTANCE
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`uniform float scale;
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
}`,og=`uniform vec3 diffuse;
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
}`,ag=`#include <common>
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#define LAMBERT
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
}`,hg=`#define LAMBERT
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
}`,ug=`#define MATCAP
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
}`,fg=`#define MATCAP
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
}`,dg=`#define NORMAL
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
}`,pg=`#define NORMAL
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
}`,mg=`#define PHONG
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
}`,gg=`#define PHONG
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
}`,_g=`#define STANDARD
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
}`,xg=`#define STANDARD
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
}`,yg=`#define TOON
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
}`,vg=`#define TOON
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
}`,bg=`uniform float size;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,wg=`uniform vec3 color;
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
}`,Tg=`uniform float rotation;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:qp,alphahash_pars_fragment:$p,alphamap_fragment:Zp,alphamap_pars_fragment:Jp,alphatest_fragment:Kp,alphatest_pars_fragment:jp,aomap_fragment:Qp,aomap_pars_fragment:tm,batching_pars_vertex:em,batching_vertex:im,begin_vertex:nm,beginnormal_vertex:sm,bsdfs:rm,iridescence_fragment:om,bumpmap_pars_fragment:am,clipping_planes_fragment:lm,clipping_planes_pars_fragment:cm,clipping_planes_pars_vertex:hm,clipping_planes_vertex:um,color_fragment:fm,color_pars_fragment:dm,color_pars_vertex:pm,color_vertex:mm,common:gm,cube_uv_reflection_fragment:_m,defaultnormal_vertex:xm,displacementmap_pars_vertex:ym,displacementmap_vertex:vm,emissivemap_fragment:bm,emissivemap_pars_fragment:Sm,colorspace_fragment:Mm,colorspace_pars_fragment:wm,envmap_fragment:Tm,envmap_common_pars_fragment:Em,envmap_pars_fragment:Am,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:km,envmap_vertex:Pm,fog_vertex:Im,fog_pars_vertex:Rm,fog_fragment:Lm,fog_pars_fragment:Dm,gradientmap_pars_fragment:Nm,lightmap_pars_fragment:Fm,lights_lambert_fragment:Om,lights_lambert_pars_fragment:Bm,lights_pars_begin:Um,lights_toon_fragment:zm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Hm,lights_physical_fragment:Xm,lights_physical_pars_fragment:Wm,lights_fragment_begin:Ym,lights_fragment_maps:qm,lights_fragment_end:$m,lightprobes_pars_fragment:Zm,logdepthbuf_fragment:Jm,logdepthbuf_pars_fragment:Km,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Qm,map_fragment:t0,map_pars_fragment:e0,map_particle_fragment:i0,map_particle_pars_fragment:n0,metalnessmap_fragment:s0,metalnessmap_pars_fragment:r0,morphinstance_vertex:o0,morphcolor_vertex:a0,morphnormal_vertex:l0,morphtarget_pars_vertex:c0,morphtarget_vertex:h0,normal_fragment_begin:u0,normal_fragment_maps:f0,normal_pars_fragment:d0,normal_pars_vertex:p0,normal_vertex:m0,normalmap_pars_fragment:g0,clearcoat_normal_fragment_begin:_0,clearcoat_normal_fragment_maps:x0,clearcoat_pars_fragment:y0,iridescence_pars_fragment:v0,opaque_fragment:b0,packing:S0,premultiplied_alpha_fragment:M0,project_vertex:w0,dithering_fragment:T0,dithering_pars_fragment:E0,roughnessmap_fragment:A0,roughnessmap_pars_fragment:C0,shadowmap_pars_fragment:P0,shadowmap_pars_vertex:I0,shadowmap_vertex:R0,shadowmask_pars_fragment:L0,skinbase_vertex:D0,skinning_pars_vertex:N0,skinning_vertex:F0,skinnormal_vertex:O0,specularmap_fragment:B0,specularmap_pars_fragment:U0,tonemapping_fragment:k0,tonemapping_pars_fragment:z0,transmission_fragment:V0,transmission_pars_fragment:G0,uv_pars_fragment:H0,uv_pars_vertex:X0,uv_vertex:W0,worldpos_vertex:Y0,background_vert:q0,background_frag:$0,backgroundCube_vert:Z0,backgroundCube_frag:J0,cube_vert:K0,cube_frag:j0,depth_vert:Q0,depth_frag:tg,distance_vert:eg,distance_frag:ig,equirect_vert:ng,equirect_frag:sg,linedashed_vert:rg,linedashed_frag:og,meshbasic_vert:ag,meshbasic_frag:lg,meshlambert_vert:cg,meshlambert_frag:hg,meshmatcap_vert:ug,meshmatcap_frag:fg,meshnormal_vert:dg,meshnormal_frag:pg,meshphong_vert:mg,meshphong_frag:gg,meshphysical_vert:_g,meshphysical_frag:xg,meshtoon_vert:yg,meshtoon_frag:vg,points_vert:bg,points_frag:Sg,shadow_vert:Mg,shadow_frag:wg,sprite_vert:Tg,sprite_frag:Eg},Ct={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},oi={basic:{uniforms:ti([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:ti([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:ti([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:ti([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:ti([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:ti([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:ti([Ct.points,Ct.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:ti([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:ti([Ct.common,Ct.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:ti([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:ti([Ct.sprite,Ct.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:ti([Ct.common,Ct.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:ti([Ct.lights,Ct.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};oi.physical={uniforms:ti([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var ul={r:0,b:0,g:0},Ag=new _e,Cf=new ae;Cf.set(-1,0,0,0,1,0,0,0,1);function Cg(i,t,e,n,s,o){let l=new de(0),h=s===!0?0:1,u,f,p=null,_=0,m=null;function g(A){let C=A.isScene===!0?A.background:null;if(C&&C.isTexture){let T=A.backgroundBlurriness>0;C=t.get(C,T)}return C}function b(A){let C=!1,T=g(A);T===null?y(l,h):T&&T.isColor&&(y(T,1),C=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(A,C){let T=g(C);T&&(T.isCubeTexture||T.mapping===zr)?(f===void 0&&(f=new Re(new He(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Jn(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),f.material.uniforms.envMap.value=T,f.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(C.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Cf),f.material.toneMapped=pe.getTransfer(T.colorSpace)!==Se,(p!==T||_!==T.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,p=T,_=T.version,m=i.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new Re(new Cr(2,2),new ri({name:"BackgroundMaterial",uniforms:Jn(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=T,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.toneMapped=pe.getTransfer(T.colorSpace)!==Se,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||_!==T.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=T,_=T.version,m=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function y(A,C){A.getRGB(ul,Kc(i)),e.buffers.color.setClear(ul.r,ul.g,ul.b,C,o)}function v(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(A,C=1){l.set(A),h=C,y(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(A){h=A,y(l,h)},render:b,addToRenderList:w,dispose:v}}function Pg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),o=s,l=!1;function h(N,G,H,B,W){let K=!1,J=_(N,B,H,G);o!==J&&(o=J,f(o.object)),K=g(N,B,H,W),K&&b(N,B,H,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(K||l)&&(l=!1,T(N,G,H,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function u(){return i.createVertexArray()}function f(N){return i.bindVertexArray(N)}function p(N){return i.deleteVertexArray(N)}function _(N,G,H,B){let W=B.wireframe===!0,K=n[G.id];K===void 0&&(K={},n[G.id]=K);let J=N.isInstancedMesh===!0?N.id:0,at=K[J];at===void 0&&(at={},K[J]=at);let tt=at[H.id];tt===void 0&&(tt={},at[H.id]=tt);let nt=tt[W];return nt===void 0&&(nt=m(u()),tt[W]=nt),nt}function m(N){let G=[],H=[],B=[];for(let W=0;W<e;W++)G[W]=0,H[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:H,attributeDivisors:B,object:N,attributes:{},index:null}}function g(N,G,H,B){let W=o.attributes,K=G.attributes,J=0,at=H.getAttributes();for(let tt in at)if(at[tt].location>=0){let st=W[tt],Tt=K[tt];if(Tt===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(Tt=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(Tt=N.instanceColor)),st===void 0||st.attribute!==Tt||Tt&&st.data!==Tt.data)return!0;J++}return o.attributesNum!==J||o.index!==B}function b(N,G,H,B){let W={},K=G.attributes,J=0,at=H.getAttributes();for(let tt in at)if(at[tt].location>=0){let st=K[tt];st===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(st=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(st=N.instanceColor));let Tt={};Tt.attribute=st,st&&st.data&&(Tt.data=st.data),W[tt]=Tt,J++}o.attributes=W,o.attributesNum=J,o.index=B}function w(){let N=o.newAttributes;for(let G=0,H=N.length;G<H;G++)N[G]=0}function y(N){v(N,0)}function v(N,G){let H=o.newAttributes,B=o.enabledAttributes,W=o.attributeDivisors;H[N]=1,B[N]===0&&(i.enableVertexAttribArray(N),B[N]=1),W[N]!==G&&(i.vertexAttribDivisor(N,G),W[N]=G)}function A(){let N=o.newAttributes,G=o.enabledAttributes;for(let H=0,B=G.length;H<B;H++)G[H]!==N[H]&&(i.disableVertexAttribArray(H),G[H]=0)}function C(N,G,H,B,W,K,J){J===!0?i.vertexAttribIPointer(N,G,H,W,K):i.vertexAttribPointer(N,G,H,B,W,K)}function T(N,G,H,B){w();let W=B.attributes,K=H.getAttributes(),J=G.defaultAttributeValues;for(let at in K){let tt=K[at];if(tt.location>=0){let nt=W[at];if(nt===void 0&&(at==="instanceMatrix"&&N.instanceMatrix&&(nt=N.instanceMatrix),at==="instanceColor"&&N.instanceColor&&(nt=N.instanceColor)),nt!==void 0){let st=nt.normalized,Tt=nt.itemSize,Et=t.get(nt);if(Et===void 0)continue;let $t=Et.buffer,ne=Et.type,me=Et.bytesPerElement,lt=ne===i.INT||ne===i.UNSIGNED_INT||nt.gpuType===Ea;if(nt.isInterleavedBufferAttribute){let dt=nt.data,Nt=dt.stride,jt=nt.offset;if(dt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<tt.locationSize;Ft++)v(tt.location+Ft,dt.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ft=0;Ft<tt.locationSize;Ft++)y(tt.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Ft=0;Ft<tt.locationSize;Ft++)C(tt.location+Ft,Tt/tt.locationSize,ne,st,Nt*me,(jt+Tt/tt.locationSize*Ft)*me,lt)}else{if(nt.isInstancedBufferAttribute){for(let dt=0;dt<tt.locationSize;dt++)v(tt.location+dt,nt.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let dt=0;dt<tt.locationSize;dt++)y(tt.location+dt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let dt=0;dt<tt.locationSize;dt++)C(tt.location+dt,Tt/tt.locationSize,ne,st,Tt*me,Tt/tt.locationSize*dt*me,lt)}}else if(J!==void 0){let st=J[at];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(tt.location,st);break;case 3:i.vertexAttrib3fv(tt.location,st);break;case 4:i.vertexAttrib4fv(tt.location,st);break;default:i.vertexAttrib1fv(tt.location,st)}}}}A()}function R(){D();for(let N in n){let G=n[N];for(let H in G){let B=G[H];for(let W in B){let K=B[W];for(let J in K)p(K[J].object),delete K[J];delete B[W]}}delete n[N]}}function L(N){if(n[N.id]===void 0)return;let G=n[N.id];for(let H in G){let B=G[H];for(let W in B){let K=B[W];for(let J in K)p(K[J].object),delete K[J];delete B[W]}}delete n[N.id]}function O(N){for(let G in n){let H=n[G];for(let B in H){let W=H[B];if(W[N.id]===void 0)continue;let K=W[N.id];for(let J in K)p(K[J].object),delete K[J];delete W[N.id]}}}function E(N){for(let G in n){let H=n[G],B=N.isInstancedMesh===!0?N.id:0,W=H[B];if(W!==void 0){for(let K in W){let J=W[K];for(let at in J)p(J[at].object),delete J[at];delete W[K]}delete H[B],Object.keys(H).length===0&&delete n[G]}}}function D(){U(),l=!0,o!==s&&(o=s,f(o.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:h,reset:D,resetDefaultState:U,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:y,disableUnusedAttributes:A}}function Ig(i,t,e){let n;function s(u){n=u}function o(u,f){i.drawArrays(n,u,f),e.update(f,n,1)}function l(u,f,p){p!==0&&(i.drawArraysInstanced(n,u,f,p),e.update(f,n,p))}function h(u,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];e.update(m,n,1)}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=h}function Rg(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let O=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(O){return!(O!==Ci&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){let E=O===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==fi&&O!==Bi&&!E&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp",p=u(f);p!==f&&(Qt("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);let _=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:h,precision:f,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:T,maxSamples:R,samples:L}}function Lg(i){let t=this,e=null,n=0,s=!1,o=!1,l=new xi,h=new ae,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){let g=_.length!==0||m||n!==0||s;return s=m,n=_.length,g},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,m){e=p(_,m,0)},this.setState=function(_,m,g){let b=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,v=i.get(_);if(!s||b===null||b.length===0||o&&!y)o?p(null):f();else{let A=o?0:n,C=A*4,T=v.clippingState||null;u.value=T,T=p(b,m,C,g);for(let R=0;R!==C;++R)T[R]=e[R];v.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=A}};function f(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(_,m,g,b){let w=_!==null?_.length:0,y=null;if(w!==0){if(y=u.value,b!==!0||y===null){let v=g+w*4,A=m.matrixWorldInverse;h.getNormalMatrix(A),(y===null||y.length<v)&&(y=new Float32Array(v));for(let C=0,T=g;C!==w;++C,T+=4)l.copy(_[C]).applyMatrix4(A,h),l.normal.toArray(y,T),y[T+3]=l.constant}u.value=y,u.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}var Vs=4,Dg=6,Ng=20,Fg=256,Kr=new Ns,of=new de,oh=null,ah=0,lh=0,ch=!1,Og=new k,Kn=new k,dl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,o={}){let{size:l=256,position:h=Og}=o;oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,s,u,h),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(oh,ah,lh),this._renderer.xr.enabled=ch,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cn||t.mapping===Zn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Ui,format:Ci,colorSpace:lr,depthBuffer:!1},s=af(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=af(t,e,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Bg(o)),this._blurMaterial=kg(o,t,e),this._ggxMaterial=Ug(o,t,e)}return s}_compileMaterial(t){let e=new Re(new Ne,t);this._renderer.compile(e,Kr)}_sceneToCubeUV(t,e,n,s,o){let u=new je(90,1,e,n),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,g=_.toneMapping;_.getClearColor(of),_.toneMapping=Fi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new He,new Ve({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,y=w.material,v=!1,A=t.background;A?A.isColor&&(y.color.copy(A),t.background=null,v=!0):(y.color.copy(of),v=!0);for(let C=0;C<6;C++){let T=C%3;T===0?(u.up.set(0,f[C],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x+p[C],o.y,o.z)):T===1?(u.up.set(0,0,f[C]),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y+p[C],o.z)):(u.up.set(0,f[C],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y,o.z+p[C]));let R=this._cubeSize;zs(s,T*R,C>2?R:0,R,R),_.setRenderTarget(s),v&&_.render(w,u),_.render(t,u)}_.toneMapping=g,_.autoClear=m,t.background=A}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Cn||t.mapping===Zn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lf());let o=s?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=o;let h=o.uniforms;h.envMap.value=t;let u=this._cubeSize;zs(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(l,Kr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,o=this._pingPongRenderTarget,l=this._ggxMaterial,h=this._lodMeshes[n];h.material=l;let u=l.uniforms,f=n/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),_=Math.sqrt(f*f-p*p),m=f*1.25,g=_*m,{_lodMax:b}=this,w=this._sizeLods[n],y=3*w*(n>b-Vs?n-b+Vs:0),v=4*(this._cubeSize-w);u.envMap.value=t.texture,u.roughness.value=g,u.mipInt.value=b-e,zs(o,y,v,3*w,2*w),s.setRenderTarget(o),s.render(h,Kr),u.envMap.value=o.texture,u.roughness.value=0,u.mipInt.value=b-n,zs(t,y,v,3*w,2*w),s.setRenderTarget(t),s.render(h,Kr)}_blur(t,e,n,s){let o=this._pingPongRenderTarget,l=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,l),this._blurPass(o,t,n,n,l)}_blurPass(t,e,n,s,o){let l=this._renderer,h=this._blurMaterial,u=this._lodMeshes[s];u.material=h;let f=h.uniforms;f.envMap.value=t.texture,f.sigma.value=o,f.mipInt.value=this._lodMax-n;let p=this._sizeLods[s],_=3*p*(s>this._lodMax-Vs?s-this._lodMax+Vs:0),m=4*(this._cubeSize-p);zs(e,_,m,3*p,2*p),l.setRenderTarget(e),l.render(u,Kr)}};function Bg(i){let t=[],e=[],n=i,s=i-Vs+1+Dg;for(let o=0;o<s;o++){let l=Math.pow(2,n);t.push(l);let h=1/(l-2),u=-h,f=1+h,p=[u,u,f,u,f,f,u,u,f,f,u,f],_=6,m=6,g=3,b=new Float32Array(g*m*_),w=new Float32Array(g*m*_);for(let v=0;v<_;v++){let A=v%3*2/3-1,C=v>2?0:-1,T=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];b.set(T,g*m*v);for(let R=0;R<m;R++){let L=p[R*2]*2-1,O=p[R*2+1]*2-1;v===0?Kn.set(1,O,L):v===1?Kn.set(-L,1,-O):v===2?Kn.set(-L,O,1):v===3?Kn.set(-1,O,-L):v===4?Kn.set(-L,-1,O):Kn.set(L,O,-1),Kn.toArray(w,(v*m+R)*g)}}let y=new Ne;y.setAttribute("position",new ni(b,g)),y.setAttribute("outputDirection",new ni(w,g)),e.push(new Re(y,null)),n>Vs&&n--}return{lodMeshes:e,sizeLods:t}}function af(i,t,e){let n=new hi(i,t,e);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ug(i,t,e){return new ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function kg(i,t,e){return new ri({name:"SphericalGaussianBlur",defines:{SAMPLES:Ng,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function lf(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function cf(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function gl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pl=class extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _r(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new He(5,5,5),o=new ri({name:"CubemapFromEquirect",uniforms:Jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Yi});o.uniforms.tEquirect.value=e;let l=new Re(s,o),h=e.minFilter;return e.minFilter===Pn&&(e.minFilter=Ge),new ya(1,10,this).update(t,l),e.minFilter=h,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,s);t.setRenderTarget(o)}};function zg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(m,g=!1){return m==null?null:g?l(m):o(m)}function o(m){if(m&&m.isTexture){let g=m.mapping;if(g===Ma||g===wa)if(t.has(m)){let b=t.get(m).texture;return h(b,m.mapping)}else{let b=m.image;if(b&&b.height>0){let w=new pl(b.height);return w.fromEquirectangularTexture(i,m),t.set(m,w),m.addEventListener("dispose",f),h(w.texture,m.mapping)}else return null}}return m}function l(m){if(m&&m.isTexture){let g=m.mapping,b=g===Ma||g===wa,w=g===Cn||g===Zn;if(b||w){let y=e.get(m),v=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==v)return n===null&&(n=new dl(i)),y=b?n.fromEquirectangular(m,y):n.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,e.set(m,y),y.texture;if(y!==void 0)return y.texture;{let A=m.image;return b&&A&&A.height>0||w&&A&&u(A)?(n===null&&(n=new dl(i)),y=b?n.fromEquirectangular(m):n.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,e.set(m,y),m.addEventListener("dispose",p),y.texture):null}}}return m}function h(m,g){return g===Ma?m.mapping=Cn:g===wa&&(m.mapping=Zn),m}function u(m){let g=0,b=6;for(let w=0;w<b;w++)m[w]!==void 0&&g++;return g===b}function f(m){let g=m.target;g.removeEventListener("dispose",f);let b=t.get(g);b!==void 0&&(t.delete(g),b.dispose())}function p(m){let g=m.target;g.removeEventListener("dispose",p);let b=e.get(g);b!==void 0&&(e.delete(g),b.dispose())}function _(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:_}}function Vg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Vn("WebGLRenderer: "+n+" extension not supported."),s}}}function Gg(i,t,e,n){let s={},o=new WeakMap;function l(_){let m=_.target;m.index!==null&&t.remove(m.index);for(let b in m.attributes)t.remove(m.attributes[b]);m.removeEventListener("dispose",l),delete s[m.id];let g=o.get(m);g&&(t.remove(g),o.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function h(_,m){return s[m.id]===!0||(m.addEventListener("dispose",l),s[m.id]=!0,e.memory.geometries++),m}function u(_){let m=_.attributes;for(let g in m)t.update(m[g],i.ARRAY_BUFFER)}function f(_){let m=[],g=_.index,b=_.attributes.position,w=0;if(b===void 0)return;if(g!==null){let A=g.array;w=g.version;for(let C=0,T=A.length;C<T;C+=3){let R=A[C+0],L=A[C+1],O=A[C+2];m.push(R,L,L,O,O,R)}}else{let A=b.array;w=b.version;for(let C=0,T=A.length/3-1;C<T;C+=3){let R=C+0,L=C+1,O=C+2;m.push(R,L,L,O,O,R)}}let y=new(b.count>=65535?mr:pr)(m,1);y.version=w;let v=o.get(_);v&&t.remove(v),o.set(_,y)}function p(_){let m=o.get(_);if(m){let g=_.index;g!==null&&m.version<g.version&&f(_)}else f(_);return o.get(_)}return{get:h,update:u,getWireframeAttribute:p}}function Hg(i,t,e){let n;function s(_){n=_}let o,l;function h(_){o=_.type,l=_.bytesPerElement}function u(_,m){i.drawElements(n,m,o,_*l),e.update(m,n,1)}function f(_,m,g){g!==0&&(i.drawElementsInstanced(n,m,o,_*l,g),e.update(m,n,g))}function p(_,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,_,0,g);let w=0;for(let y=0;y<g;y++)w+=m[y];e.update(w,n,1)}this.setMode=s,this.setIndex=h,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function Xg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,h){switch(e.calls++,l){case i.TRIANGLES:e.triangles+=h*(o/3);break;case i.LINES:e.lines+=h*(o/2);break;case i.LINE_STRIP:e.lines+=h*(o-1);break;case i.LINE_LOOP:e.lines+=h*o;break;case i.POINTS:e.points+=h*o;break;default:ie("WebGLInfo: Unknown draw mode:",l);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wg(i,t,e){let n=new WeakMap,s=new Me;function o(l,h,u){let f=l.morphTargetInfluences,p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0,m=n.get(h);if(m===void 0||m.count!==_){let D=function(){O.dispose(),n.delete(h),h.removeEventListener("dispose",D)};m!==void 0&&m.texture.dispose();let g=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],C=0;g===!0&&(C=1),b===!0&&(C=2),w===!0&&(C=3);let T=h.attributes.position.count*C,R=1;T>t.maxTextureSize&&(R=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let L=new Float32Array(T*R*4*_),O=new fr(L,T,R,_);O.type=Bi,O.needsUpdate=!0;let E=C*4;for(let U=0;U<_;U++){let N=y[U],G=v[U],H=A[U],B=T*R*4*U;for(let W=0;W<N.count;W++){let K=W*E;g===!0&&(s.fromBufferAttribute(N,W),L[B+K+0]=s.x,L[B+K+1]=s.y,L[B+K+2]=s.z,L[B+K+3]=0),b===!0&&(s.fromBufferAttribute(G,W),L[B+K+4]=s.x,L[B+K+5]=s.y,L[B+K+6]=s.z,L[B+K+7]=0),w===!0&&(s.fromBufferAttribute(H,W),L[B+K+8]=s.x,L[B+K+9]=s.y,L[B+K+10]=s.z,L[B+K+11]=H.itemSize===4?s.w:1)}}m={count:_,texture:O,size:new _t(T,R)},n.set(h,m),h.addEventListener("dispose",D)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",l.morphTexture,e);else{let g=0;for(let w=0;w<f.length;w++)g+=f[w];let b=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",b),u.getUniforms().setValue(i,"morphTargetInfluences",f)}u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:o}}function Yg(i,t,e,n,s){let o=new WeakMap;function l(f){let p=s.render.frame,_=f.geometry,m=t.get(f,_);if(o.get(m)!==p&&(t.update(m),o.set(m,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),o.get(f)!==p&&(e.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,i.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){let g=f.skeleton;o.get(g)!==p&&(g.update(),o.set(g,p))}return m}function h(){o=new WeakMap}function u(f){let p=f.target;p.removeEventListener("dispose",u),n.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:l,dispose:h}}var qg={[Dc]:"LINEAR_TONE_MAPPING",[Nc]:"REINHARD_TONE_MAPPING",[Fc]:"CINEON_TONE_MAPPING",[Oc]:"ACES_FILMIC_TONE_MAPPING",[Uc]:"AGX_TONE_MAPPING",[kc]:"NEUTRAL_TONE_MAPPING",[Bc]:"CUSTOM_TONE_MAPPING"};function $g(i,t,e,n,s,o){let l=new hi(t,e,{type:i,depthBuffer:s,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),h=null,u=null,f=new Ne;f.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ge([0,2,0,0,2,0],2));let p=new ra({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Re(f,p),m=new Ns(-1,1,1,-1,0,1),g=null,b=null,w=!1,y,v=null,A=[],C=!1;this.setSize=function(T,R){l.setSize(T,R),h!==null&&h.setSize(T,R),u!==null&&u.setSize(T,R);for(let L=0;L<A.length;L++){let O=A[L];O.setSize&&O.setSize(T,R)}},this.setEffects=function(T){A=T,C=A.length>0&&A[0].isRenderPass===!0;let R=l.width,L=l.height;A.length>0&&h===null&&(h=new hi(R,L,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),u=new hi(R,L,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<A.length;O++){let E=A[O];E.setSize&&E.setSize(R,L)}},this.begin=function(T,R){if(w||T.toneMapping===Fi&&A.length===0)return!1;if(v=R,R!==null){let L=R.width,O=R.height;(l.width!==L||l.height!==O)&&this.setSize(L,O)}return C===!1&&T.setRenderTarget(l),y=T.toneMapping,T.toneMapping=Fi,!0},this.hasRenderPass=function(){return C},this.end=function(T,R){T.toneMapping=y,w=!0;let L=l,O=h;for(let E=0;E<A.length;E++){let D=A[E];D.enabled!==!1&&(D.render(T,O,L,R),D.needsSwap!==!1&&(L=O,O=O===h?u:h))}if(g!==T.outputColorSpace||b!==T.toneMapping){g=T.outputColorSpace,b=T.toneMapping,p.defines={},pe.getTransfer(g)===Se&&(p.defines.SRGB_TRANSFER="");let E=qg[b];E&&(p.defines[E]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,T.setRenderTarget(v),T.render(_,m),v=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){l.dispose(),h!==null&&h.dispose(),u!==null&&u.dispose(),f.dispose(),p.dispose()}}var Pf=new si,fh=new yn(1,1),If=new fr,Rf=new Ko,Lf=new _r,hf=[],uf=[],ff=new Float32Array(16),df=new Float32Array(9),pf=new Float32Array(4);function Hs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,o=hf[s];if(o===void 0&&(o=new Float32Array(s),hf[s]=o),t!==0){n.toArray(o,0);for(let l=1,h=0;l!==t;++l)h+=e,i[l].toArray(o,h)}return o}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _l(i,t){let e=uf[t];e===void 0&&(e=new Int32Array(t),uf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function Qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Be(e,n))return;pf.set(n),i.uniformMatrix2fv(this.addr,!1,pf),Ue(e,n)}}function t_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Be(e,n))return;df.set(n),i.uniformMatrix3fv(this.addr,!1,df),Ue(e,n)}}function e_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Be(e,n))return;ff.set(n),i.uniformMatrix4fv(this.addr,!1,ff),Ue(e,n)}}function i_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function n_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function o_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function c_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function h_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(fh.compareFunction=e.isReversedDepthBuffer()?hl:cl,o=fh):o=Pf,e.setTexture2D(t||o,s)}function u_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rf,s)}function f_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Lf,s)}function d_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||If,s)}function p_(i){switch(i){case 5126:return Zg;case 35664:return Jg;case 35665:return Kg;case 35666:return jg;case 35674:return Qg;case 35675:return t_;case 35676:return e_;case 5124:case 35670:return i_;case 35667:case 35671:return n_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return a_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return d_}}function m_(i,t){i.uniform1fv(this.addr,t)}function g_(i,t){let e=Hs(t,this.size,2);i.uniform2fv(this.addr,e)}function __(i,t){let e=Hs(t,this.size,3);i.uniform3fv(this.addr,e)}function x_(i,t){let e=Hs(t,this.size,4);i.uniform4fv(this.addr,e)}function y_(i,t){let e=Hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function v_(i,t){let e=Hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function b_(i,t){let e=Hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function S_(i,t){i.uniform1iv(this.addr,t)}function M_(i,t){i.uniform2iv(this.addr,t)}function w_(i,t){i.uniform3iv(this.addr,t)}function T_(i,t){i.uniform4iv(this.addr,t)}function E_(i,t){i.uniform1uiv(this.addr,t)}function A_(i,t){i.uniform2uiv(this.addr,t)}function C_(i,t){i.uniform3uiv(this.addr,t)}function P_(i,t){i.uniform4uiv(this.addr,t)}function I_(i,t,e){let n=this.cache,s=t.length,o=_l(e,s);Be(n,o)||(i.uniform1iv(this.addr,o),Ue(n,o));let l;this.type===i.SAMPLER_2D_SHADOW?l=fh:l=Pf;for(let h=0;h!==s;++h)e.setTexture2D(t[h]||l,o[h])}function R_(i,t,e){let n=this.cache,s=t.length,o=_l(e,s);Be(n,o)||(i.uniform1iv(this.addr,o),Ue(n,o));for(let l=0;l!==s;++l)e.setTexture3D(t[l]||Rf,o[l])}function L_(i,t,e){let n=this.cache,s=t.length,o=_l(e,s);Be(n,o)||(i.uniform1iv(this.addr,o),Ue(n,o));for(let l=0;l!==s;++l)e.setTextureCube(t[l]||Lf,o[l])}function D_(i,t,e){let n=this.cache,s=t.length,o=_l(e,s);Be(n,o)||(i.uniform1iv(this.addr,o),Ue(n,o));for(let l=0;l!==s;++l)e.setTexture2DArray(t[l]||If,o[l])}function N_(i){switch(i){case 5126:return m_;case 35664:return g_;case 35665:return __;case 35666:return x_;case 35674:return y_;case 35675:return v_;case 35676:return b_;case 5124:case 35670:return S_;case 35667:case 35671:return M_;case 35668:case 35672:return w_;case 35669:case 35673:return T_;case 5125:return E_;case 36294:return A_;case 36295:return C_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return D_}}var dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=p_(e.type)}},ph=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=N_(e.type)}},mh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let o=0,l=s.length;o!==l;++o){let h=s[o];h.setValue(t,e[h.id],n)}}},hh=/(\w+)(\])?(\[|\.)?/g;function mf(i,t){i.seq.push(t),i.map[t.id]=t}function F_(i,t,e){let n=i.name,s=n.length;for(hh.lastIndex=0;;){let o=hh.exec(n),l=hh.lastIndex,h=o[1],u=o[2]==="]",f=o[3];if(u&&(h=h|0),f===void 0||f==="["&&l+2===s){mf(e,f===void 0?new dh(h,i,t):new ph(h,i,t));break}else{let _=e.map[h];_===void 0&&(_=new mh(h),mf(e,_)),e=_}}}var Gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){let h=t.getActiveUniform(e,l),u=t.getUniformLocation(e,h.name);F_(h,u,this)}let s=[],o=[];for(let l of this.seq)l.type===t.SAMPLER_2D_SHADOW||l.type===t.SAMPLER_CUBE_SHADOW||l.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(l):o.push(l);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,n,s){let o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,l=e.length;o!==l;++o){let h=e[o],u=n[h.id];u.needsUpdate!==!1&&h.setValue(t,u.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,o=t.length;s!==o;++s){let l=t[s];l.id in e&&n.push(l)}return n}};function gf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var O_=37297,B_=0;function U_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=s;l<o;l++){let h=l+1;n.push(`${h===t?">":" "} ${h}: ${e[l]}`)}return n.join(`
`)}var _f=new ae;function k_(i){pe._getMatrix(_f,pe.workingColorSpace,i);let t=`mat3( ${_f.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case cr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let l=/ERROR: 0:(\d+)/.exec(o);if(l){let h=parseInt(l[1]);return e.toUpperCase()+`

`+o+`

`+U_(i.getShaderSource(t),h)}else return o}function z_(i,t){let e=k_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var V_={[Dc]:"Linear",[Nc]:"Reinhard",[Fc]:"Cineon",[Oc]:"ACESFilmic",[Uc]:"AgX",[kc]:"Neutral",[Bc]:"Custom"};function G_(i,t){let e=V_[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fl=new k;function H_(){pe.getLuminanceCoefficients(fl);let i=fl.x.toFixed(4),t=fl.y.toFixed(4),e=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function W_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Y_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let o=i.getActiveAttrib(t,s),l=o.name,h=1;o.type===i.FLOAT_MAT2&&(h=2),o.type===i.FLOAT_MAT3&&(h=3),o.type===i.FLOAT_MAT4&&(h=4),e[l]={type:o.type,location:i.getAttribLocation(t,l),locationSize:h}}return e}function Qr(i){return i!==""}function yf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(i){return i.replace(q_,Z_)}var $_=new Map;function Z_(i,t){let e=ue[t];if(e===void 0){let n=$_.get(t);if(n!==void 0)e=ue[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gh(e)}var J_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bf(i){return i.replace(J_,K_)}function K_(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Sf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var j_={[kr]:"SHADOWMAP_TYPE_PCF",[Os]:"SHADOWMAP_TYPE_VSM"};function Q_(i){return j_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tx={[Cn]:"ENVMAP_TYPE_CUBE",[Zn]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE_UV"};function ex(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":tx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ix={[Zn]:"ENVMAP_MODE_REFRACTION"};function nx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ix[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sx={[Lc]:"ENVMAP_BLENDING_MULTIPLY",[Ou]:"ENVMAP_BLENDING_MIX",[Bu]:"ENVMAP_BLENDING_ADD"};function rx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sx[i.combine]||"ENVMAP_BLENDING_NONE"}function ox(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ax(i,t,e,n){let s=i.getContext(),o=e.defines,l=e.vertexShader,h=e.fragmentShader,u=Q_(e),f=ex(e),p=nx(e),_=rx(e),m=ox(e),g=X_(e),b=W_(o),w=s.createProgram(),y,v,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Qr).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Qr).join(`
`),v.length>0&&(v+=`
`)):(y=[Sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),v=[Sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?ue.tonemapping_pars_fragment:"",e.toneMapping!==Fi?G_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,z_("linearToOutputTexel",e.outputColorSpace),H_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qr).join(`
`)),l=gh(l),l=yf(l,e),l=vf(l,e),h=gh(h),h=yf(h,e),h=vf(h,e),l=bf(l),h=bf(h),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",e.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let C=A+y+l,T=A+v+h,R=gf(s,s.VERTEX_SHADER,C),L=gf(s,s.FRAGMENT_SHADER,T);s.attachShader(w,R),s.attachShader(w,L),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function O(N){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(w)||"",H=s.getShaderInfoLog(R)||"",B=s.getShaderInfoLog(L)||"",W=G.trim(),K=H.trim(),J=B.trim(),at=!0,tt=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,w,R,L);else{let nt=xf(s,R,"vertex"),st=xf(s,L,"fragment");ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+nt+`
`+st)}else W!==""?Qt("WebGLProgram: Program Info Log:",W):(K===""||J==="")&&(tt=!1);tt&&(N.diagnostics={runnable:at,programLog:W,vertexShader:{log:K,prefix:y},fragmentShader:{log:J,prefix:v}})}s.deleteShader(R),s.deleteShader(L),E=new Gs(s,w),D=Y_(s,w)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(w,O_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=B_++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=R,this.fragmentShader=L,this}var lx=0,_h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new xh(t),e.set(t,n)),n}},xh=class{constructor(t){this.id=lx++,this.code=t,this.usedTimes=0}};function cx(i){return i===Rn||i===qr||i===$r}function hx(i,t,e,n,s,o){let l=new As,h=new _h,u=new Set,f=[],p=new Map,_=n.logarithmicDepthBuffer,m=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return u.add(E),E===0?"uv":`uv${E}`}function w(E,D,U,N,G,H){let B=N.fog,W=G.geometry,K=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,J=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,at=t.get(E.envMap||K,J),tt=at&&at.mapping===zr?at.image.height:null,nt=g[E.type];E.precision!==null&&(m=n.getMaxPrecision(E.precision),m!==E.precision&&Qt("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Tt=st!==void 0?st.length:0,Et=0;W.morphAttributes.position!==void 0&&(Et=1),W.morphAttributes.normal!==void 0&&(Et=2),W.morphAttributes.color!==void 0&&(Et=3);let $t,ne,me,lt;if(nt){let Ee=oi[nt];$t=Ee.vertexShader,ne=Ee.fragmentShader}else{$t=E.vertexShader,ne=E.fragmentShader;let Ee=h.getVertexShaderStage(E),ye=h.getFragmentShaderStage(E);h.update(E,Ee,ye),me=Ee.id,lt=ye.id}let dt=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),jt=G.isInstancedMesh===!0,Ft=G.isBatchedMesh===!0,te=!!E.map,be=!!E.matcap,pt=!!at,xt=!!E.aoMap,yt=!!E.lightMap,vt=!!E.bumpMap&&E.wireframe===!1,Mt=!!E.normalMap,Kt=!!E.displacementMap,Zt=!!E.emissiveMap,ee=!!E.metalnessMap,se=!!E.roughnessMap,X=E.anisotropy>0,xe=E.clearcoat>0,fe=E.dispersion>0,F=E.retroreflectivity>0,M=E.iridescence>0,Z=E.sheen>0,et=E.transmission>0,rt=X&&!!E.anisotropyMap,bt=xe&&!!E.clearcoatMap,St=xe&&!!E.clearcoatNormalMap,ot=xe&&!!E.clearcoatRoughnessMap,ft=M&&!!E.iridescenceMap,Pt=M&&!!E.iridescenceThicknessMap,Gt=Z&&!!E.sheenColorMap,Dt=Z&&!!E.sheenRoughnessMap,At=!!E.specularMap,Xt=!!E.specularColorMap,Jt=!!E.specularIntensityMap,le=et&&!!E.transmissionMap,q=et&&!!E.thicknessMap,It=!!E.gradientMap,ut=!!E.alphaMap,Rt=E.alphaTest>0,Ut=!!E.alphaHash,mt=!!E.extensions,qt=Fi;E.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(qt=i.toneMapping);let Vt={shaderID:nt,shaderType:E.type,shaderName:E.name,vertexShader:$t,fragmentShader:ne,defines:E.defines,customVertexShaderID:me,customFragmentShaderID:lt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ft,batchingColor:Ft&&G._colorsTexture!==null,instancing:jt,instancingColor:jt&&G.instanceColor!==null,instancingMorph:jt&&G.morphTexture!==null,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:te,matcap:be,envMap:pt,envMapMode:pt&&at.mapping,envMapCubeUVHeight:tt,aoMap:xt,lightMap:yt,bumpMap:vt,normalMap:Mt,displacementMap:Kt,emissiveMap:Zt,normalMapObjectSpace:Mt&&E.normalMapType===zu,normalMapTangentSpace:Mt&&E.normalMapType===ll,packedNormalMap:Mt&&E.normalMapType===ll&&cx(E.normalMap.format),metalnessMap:ee,roughnessMap:se,anisotropy:X,anisotropyMap:rt,clearcoat:xe,clearcoatMap:bt,clearcoatNormalMap:St,clearcoatRoughnessMap:ot,dispersion:fe,retroreflection:F,iridescence:M,iridescenceMap:ft,iridescenceThicknessMap:Pt,sheen:Z,sheenColorMap:Gt,sheenRoughnessMap:Dt,specularMap:At,specularColorMap:Xt,specularIntensityMap:Jt,transmission:et,transmissionMap:le,thicknessMap:q,gradientMap:It,opaque:E.transparent===!1&&E.blending===Bs&&E.alphaToCoverage===!1,alphaMap:ut,alphaTest:Rt,alphaHash:Ut,combine:E.combine,mapUv:te&&b(E.map.channel),aoMapUv:xt&&b(E.aoMap.channel),lightMapUv:yt&&b(E.lightMap.channel),bumpMapUv:vt&&b(E.bumpMap.channel),normalMapUv:Mt&&b(E.normalMap.channel),displacementMapUv:Kt&&b(E.displacementMap.channel),emissiveMapUv:Zt&&b(E.emissiveMap.channel),metalnessMapUv:ee&&b(E.metalnessMap.channel),roughnessMapUv:se&&b(E.roughnessMap.channel),anisotropyMapUv:rt&&b(E.anisotropyMap.channel),clearcoatMapUv:bt&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:St&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&b(E.sheenRoughnessMap.channel),specularMapUv:At&&b(E.specularMap.channel),specularColorMapUv:Xt&&b(E.specularColorMap.channel),specularIntensityMapUv:Jt&&b(E.specularIntensityMap.channel),transmissionMapUv:le&&b(E.transmissionMap.channel),thicknessMapUv:q&&b(E.thicknessMap.channel),alphaMapUv:ut&&b(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Mt||X),vertexNormals:!!W.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(te||ut),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||W.attributes.normal===void 0&&Mt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Nt,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Et,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:te&&E.map.isVideoTexture===!0&&pe.getTransfer(E.map.colorSpace)===Se,decodeVideoTextureEmissive:Zt&&E.emissiveMap.isVideoTexture===!0&&pe.getTransfer(E.emissiveMap.colorSpace)===Se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ui,flipSided:E.side===Xe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:mt&&E.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&E.extensions.multiDraw===!0||Ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Vt.vertexUv1s=u.has(1),Vt.vertexUv2s=u.has(2),Vt.vertexUv3s=u.has(3),u.clear(),Vt}function y(E){let D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(let U in E.defines)D.push(U),D.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(v(D,E),A(D,E),D.push(i.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function v(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numSunLights),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numSunLightShadows),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function A(E,D){l.disableAll(),D.instancing&&l.enable(0),D.instancingColor&&l.enable(1),D.instancingMorph&&l.enable(2),D.matcap&&l.enable(3),D.envMap&&l.enable(4),D.normalMapObjectSpace&&l.enable(5),D.normalMapTangentSpace&&l.enable(6),D.clearcoat&&l.enable(7),D.iridescence&&l.enable(8),D.alphaTest&&l.enable(9),D.vertexColors&&l.enable(10),D.vertexAlphas&&l.enable(11),D.vertexUv1s&&l.enable(12),D.vertexUv2s&&l.enable(13),D.vertexUv3s&&l.enable(14),D.vertexTangents&&l.enable(15),D.anisotropy&&l.enable(16),D.alphaHash&&l.enable(17),D.batching&&l.enable(18),D.dispersion&&l.enable(19),D.retroreflection&&l.enable(24),D.batchingColor&&l.enable(20),D.gradientMap&&l.enable(21),D.packedNormalMap&&l.enable(22),D.vertexNormals&&l.enable(23),E.push(l.mask),l.disableAll(),D.fog&&l.enable(0),D.useFog&&l.enable(1),D.flatShading&&l.enable(2),D.logarithmicDepthBuffer&&l.enable(3),D.reversedDepthBuffer&&l.enable(4),D.skinning&&l.enable(5),D.morphTargets&&l.enable(6),D.morphNormals&&l.enable(7),D.morphColors&&l.enable(8),D.premultipliedAlpha&&l.enable(9),D.shadowMapEnabled&&l.enable(10),D.doubleSided&&l.enable(11),D.flipSided&&l.enable(12),D.useDepthPacking&&l.enable(13),D.dithering&&l.enable(14),D.transmission&&l.enable(15),D.sheen&&l.enable(16),D.opaque&&l.enable(17),D.pointsUvs&&l.enable(18),D.decodeVideoTexture&&l.enable(19),D.decodeVideoTextureEmissive&&l.enable(20),D.alphaToCoverage&&l.enable(21),D.numLightProbeGrids>0&&l.enable(22),D.hasPositionAttribute&&l.enable(23),E.push(l.mask)}function C(E){let D=g[E.type],U;if(D){let N=oi[D];U=Jr.clone(N.uniforms)}else U=E.uniforms;return U}function T(E,D){let U=p.get(D);return U!==void 0?++U.usedTimes:(U=new ax(i,D,E,s),f.push(U),p.set(D,U)),U}function R(E){if(--E.usedTimes===0){let D=f.indexOf(E);f[D]=f[f.length-1],f.pop(),p.delete(E.cacheKey),E.destroy()}}function L(E){h.remove(E)}function O(){h.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:C,acquireProgram:T,releaseProgram:R,releaseShaderCache:L,programs:f,dispose:O}}function ux(){let i=new WeakMap;function t(l){return i.has(l)}function e(l){let h=i.get(l);return h===void 0&&(h={},i.set(l,h)),h}function n(l){i.delete(l)}function s(l,h,u){i.get(l)[h]=u}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function fx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Mf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wf(){let i=[],t=0,e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function l(m){let g=0;return m.isInstancedMesh&&(g+=2),m.isSkinnedMesh&&(g+=1),g}function h(m,g,b,w,y,v){let A=i[t];return A===void 0?(A={id:m.id,object:m,geometry:g,material:b,materialVariant:l(m),groupOrder:w,renderOrder:m.renderOrder,z:y,group:v},i[t]=A):(A.id=m.id,A.object=m,A.geometry=g,A.material=b,A.materialVariant=l(m),A.groupOrder=w,A.renderOrder=m.renderOrder,A.z=y,A.group=v),t++,A}function u(m,g,b,w,y,v,A){A.reversedDepth===!0&&(y=-y);let C=h(m,g,b,w,y,v);b.transmission>0?n.push(C):b.transparent===!0?s.push(C):e.push(C)}function f(m,g,b,w,y,v){let A=h(m,g,b,w,y,v);b.transmission>0?n.unshift(A):b.transparent===!0?s.unshift(A):e.unshift(A)}function p(m,g){e.length>1&&e.sort(m||fx),n.length>1&&n.sort(g||Mf),s.length>1&&s.sort(g||Mf)}function _(){for(let m=t,g=i.length;m<g;m++){let b=i[m];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:u,unshift:f,finish:_,sort:p}}function dx(){let i=new WeakMap;function t(n,s){let o=i.get(n),l;return o===void 0?(l=new wf,i.set(n,[l])):s>=o.length?(l=new wf,o.push(l)):l=o[s],l}function e(){i=new WeakMap}return{get:t,dispose:e}}function px(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new de};break;case"SpotLight":e={position:new k,direction:new k,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function mx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var gx=0;function _x(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xx(i){let t=new px,e=mx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new k);let s=new k,o=new _e,l=new _e;function h(f){let p=0,_=0,m=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let g=0,b=0,w=0,y=0,v=0,A=0,C=0,T=0,R=0,L=0,O=0,E=0,D=0,U=0;f.sort(_x);for(let G=0,H=f.length;G<H;G++){let B=f[G],W=B.color,K=B.intensity,J=B.distance,at=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Rn?at=B.shadow.map.texture:at=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)p+=W.r*K,_+=W.g*K,m+=W.b*K;else if(B.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(B.sh.coefficients[tt],K);U++}else if(B.isSunLight){let tt=t.get(B);if(tt.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let nt=B.shadow,st=e.get(B);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[b]=st,n.sunShadowMap[b]=at;let Tt=nt.getViewportCount();for(let Et=0;Et<Tt;Et++)n.sunShadowMatrix[w+Et]=nt.getMatrix(Et),n.sunShadowCascade[w+Et]=nt._cascadeData[Et];w+=Tt,b++}n.sun[g]=tt,g++}else if(B.isDirectionalLight){let tt=t.get(B);if(tt.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let nt=B.shadow,st=e.get(B);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,n.directionalShadow[y]=st,n.directionalShadowMap[y]=at,n.directionalShadowMatrix[y]=B.shadow.matrix,R++}n.directional[y]=tt,y++}else if(B.isSpotLight){let tt=t.get(B);tt.position.setFromMatrixPosition(B.matrixWorld),tt.color.copy(W).multiplyScalar(K),tt.distance=J,tt.coneCos=Math.cos(B.angle),tt.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),tt.decay=B.decay,n.spot[A]=tt;let nt=B.shadow;if(B.map&&(n.spotLightMap[E]=B.map,E++,nt.updateMatrices(B),B.castShadow&&D++),n.spotLightMatrix[A]=nt.matrix,B.castShadow){let st=e.get(B);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,n.spotShadow[A]=st,n.spotShadowMap[A]=at,O++}A++}else if(B.isRectAreaLight){let tt=t.get(B);tt.color.copy(W).multiplyScalar(K),tt.halfWidth.set(B.width*.5,0,0),tt.halfHeight.set(0,B.height*.5,0),n.rectArea[C]=tt,C++}else if(B.isPointLight){let tt=t.get(B);if(tt.color.copy(B.color).multiplyScalar(B.intensity),tt.distance=B.distance,tt.decay=B.decay,B.castShadow){let nt=B.shadow,st=e.get(B);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,st.shadowCameraNear=nt.camera.near,st.shadowCameraFar=nt.camera.far,n.pointShadow[v]=st,n.pointShadowMap[v]=at,n.pointShadowMatrix[v]=B.shadow.matrix,L++}n.point[v]=tt,v++}else if(B.isHemisphereLight){let tt=t.get(B);tt.skyColor.copy(B.color).multiplyScalar(K),tt.groundColor.copy(B.groundColor).multiplyScalar(K),n.hemi[T]=tt,T++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=_,n.ambient[2]=m;let N=n.hash;(N.sunLength!==g||N.directionalLength!==y||N.pointLength!==v||N.spotLength!==A||N.rectAreaLength!==C||N.hemiLength!==T||N.numSunShadows!==b||N.numDirectionalShadows!==R||N.numPointShadows!==L||N.numSpotShadows!==O||N.numSpotMaps!==E||N.numLightProbes!==U)&&(n.sun.length=g,n.directional.length=y,n.spot.length=A,n.rectArea.length=C,n.point.length=v,n.hemi.length=T,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=w,n.sunShadowCascade.length=w,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=L,n.pointShadowMap.length=L,n.pointShadowMatrix.length=L,n.spotShadow.length=O,n.spotShadowMap.length=O,n.spotLightMatrix.length=O+E-D,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=U,N.sunLength=g,N.directionalLength=y,N.pointLength=v,N.spotLength=A,N.rectAreaLength=C,N.hemiLength=T,N.numSunShadows=b,N.numDirectionalShadows=R,N.numPointShadows=L,N.numSpotShadows=O,N.numSpotMaps=E,N.numLightProbes=U,n.version=gx++)}function u(f,p){let _=0,m=0,g=0,b=0,w=0,y=0,v=p.matrixWorldInverse;for(let A=0,C=f.length;A<C;A++){let T=f[A];if(T.isSunLight){let R=n.sun[_];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(v),_++}else if(T.isDirectionalLight){let R=n.directional[m];R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(v),m++}else if(T.isSpotLight){let R=n.spot[b];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(v),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(v),b++}else if(T.isRectAreaLight){let R=n.rectArea[w];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(v),l.identity(),o.copy(T.matrixWorld),o.premultiply(v),l.extractRotation(o),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),w++}else if(T.isPointLight){let R=n.point[g];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(v),g++}else if(T.isHemisphereLight){let R=n.hemi[y];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(v),y++}}}return{setup:h,setupView:u,state:n}}function Tf(i){let t=new xx(i),e=[],n=[],s=[];function o(m){_.camera=m,e.length=0,n.length=0,s.length=0}function l(m){e.push(m)}function h(m){n.push(m)}function u(m){s.push(m)}function f(){t.setup(e)}function p(m){t.setupView(e,m)}let _={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:_,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:h,pushLightProbeGrid:u}}function yx(i){let t=new WeakMap;function e(s,o=0){let l=t.get(s),h;return l===void 0?(h=new Tf(i),t.set(s,[h])):o>=l.length?(h=new Tf(i),l.push(h)):h=l[o],h}function n(){t=new WeakMap}return{get:e,dispose:n}}var vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bx=`uniform sampler2D shadow_pass;
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
}`,Sx=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Mx=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Ef=new _e,jr=new k,uh=new k;function wx(i,t,e){let n=new Is,s=new _t,o=new _t,l=new Me,h=new oa,u=new aa,f={},p=e.maxTextureSize,_={[An]:Xe,[Xe]:An,[ui]:ui},m=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:vx,fragmentShader:bx}),g=m.clone();g.defines.HORIZONTAL_PASS=1;let b=new Ne;b.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Re(b,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kr;let v=this.type;this.render=function(L,O,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===_u&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=kr);let D=i.getRenderTarget(),U=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Yi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let H=v!==this.type;H&&O.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(W=>W.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,W=L.length;B<W;B++){let K=L[B],J=K.shadow;if(J===void 0){Qt("WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let at=J.getFrameExtents();s.multiply(at),o.copy(J.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/at.x),s.x=o.x*at.x,J.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/at.y),s.y=o.y*at.y,J.mapSize.y=o.y));let tt=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=tt,J.map===null||H===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Os){if(K.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new hi(s.x,s.y,{format:Rn,type:Ui,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),J.map.texture.name=K.name+".shadowMap",J.map.depthTexture=new yn(s.x,s.y,Bi),J.map.depthTexture.name=K.name+".shadowMapDepth",J.map.depthTexture.format=Xi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Oe,J.map.depthTexture.magFilter=Oe}else K.isPointLight?(J.map=new pl(s.x),J.map.depthTexture=new jo(s.x,Oi)):(J.map=new hi(s.x,s.y),J.map.depthTexture=new yn(s.x,s.y,Oi)),J.map.depthTexture.name=K.name+".shadowMap",J.map.depthTexture.format=Xi,this.type===kr?(J.map.depthTexture.compareFunction=tt?hl:cl,J.map.depthTexture.minFilter=Ge,J.map.depthTexture.magFilter=Ge):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Oe,J.map.depthTexture.magFilter=Oe);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let nt=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();K.isPointLight!==!0&&J.updateMatrices(K,E);for(let st=0;st<nt;st++){let Tt=J.getCamera(st);if(K.isPointLight){let Et=J.camera,$t=J.matrix,ne=K.distance||Et.far;ne!==Et.far&&(Et.far=ne,Et.updateProjectionMatrix()),jr.setFromMatrixPosition(K.matrixWorld),Et.position.copy(jr),uh.copy(Et.position),uh.add(Sx[st]),Et.up.copy(Mx[st]),Et.lookAt(uh),Et.updateMatrixWorld(),$t.makeTranslation(-jr.x,-jr.y,-jr.z),Ef.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Ef,Et.coordinateSystem,Et.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,st),i.clear();else{st===0&&(i.setRenderTarget(J.map),i.clear());let Et=J.getViewport(st);l.set(o.x*Et.x,o.y*Et.y,o.x*Et.z,o.y*Et.w),G.viewport(l)}n=J.getFrustum(st),T(O,E,Tt,K,this.type)}J.isPointLightShadow!==!0&&this.type===Os&&A(J,E),J.needsUpdate=!1}v=this.type,y.needsUpdate=!1,i.setRenderTarget(D,U,N)};function A(L,O){let E=t.update(w);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null?L.mapPass=new hi(s.x,s.y,{format:Rn,type:Ui}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),m.uniforms.shadow_pass.value=L.map.depthTexture,m.uniforms.resolution.value.set(L.map.width,L.map.height),m.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(O,null,E,m,w,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value.set(L.map.width,L.map.height),g.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(O,null,E,g,w,null)}function C(L,O,E,D){let U=null,N=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(N!==void 0)U=N;else if(U=E.isPointLight===!0?u:h,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let G=U.uuid,H=O.uuid,B=f[G];B===void 0&&(B={},f[G]=B);let W=B[H];W===void 0&&(W=U.clone(),B[H]=W,O.addEventListener("dispose",R)),U=W}if(U.visible=O.visible,U.wireframe=O.wireframe,D===Os?U.side=O.shadowSide!==null?O.shadowSide:O.side:U.side=O.shadowSide!==null?O.shadowSide:_[O.side],U.alphaMap=O.alphaMap,U.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,U.map=O.map,U.clipShadows=O.clipShadows,U.clippingPlanes=O.clippingPlanes,U.clipIntersection=O.clipIntersection,U.displacementMap=O.displacementMap,U.displacementScale=O.displacementScale,U.displacementBias=O.displacementBias,U.wireframeLinewidth=O.wireframeLinewidth,U.linewidth=O.linewidth,E.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let G=i.properties.get(U);G.light=E}return U}function T(L,O,E,D,U){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&U===Os)&&(!L.frustumCulled||L.intersectsFrustum(n))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);let H=t.update(L),B=L.material;if(Array.isArray(B)){let W=H.groups;for(let K=0,J=W.length;K<J;K++){let at=W[K],tt=B[at.materialIndex];if(tt&&tt.visible){let nt=C(L,tt,D,U);L.onBeforeShadow(i,L,O,E,H,nt,at),i.renderBufferDirect(E,null,H,nt,L,at),L.onAfterShadow(i,L,O,E,H,nt,at)}}}else if(B.visible){let W=C(L,B,D,U);L.onBeforeShadow(i,L,O,E,H,W,null),i.renderBufferDirect(E,null,H,W,L,null),L.onAfterShadow(i,L,O,E,H,W,null)}}let G=L.children;for(let H=0,B=G.length;H<B;H++)T(G[H],O,E,D,U)}function R(L){L.target.removeEventListener("dispose",R);for(let E in f){let D=f[E],U=L.target.uuid;U in D&&(D[U].dispose(),delete D[U])}}}function Tx(i,t){function e(){let q=!1,It=new Me,ut=null,Rt=new Me(0,0,0,0);return{setMask:function(Ut){ut!==Ut&&!q&&(i.colorMask(Ut,Ut,Ut,Ut),ut=Ut)},setLocked:function(Ut){q=Ut},setClear:function(Ut,mt,qt,Vt,Ee){Ee===!0&&(Ut*=Vt,mt*=Vt,qt*=Vt),It.set(Ut,mt,qt,Vt),Rt.equals(It)===!1&&(i.clearColor(Ut,mt,qt,Vt),Rt.copy(It))},reset:function(){q=!1,ut=null,Rt.set(-1,0,0,0)}}}function n(){let q=!1,It=!1,ut=null,Rt=null,Ut=null;return{setReversed:function(mt){if(It!==mt){let qt=t.get("EXT_clip_control");mt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),It=mt;let Vt=Ut;Ut=null,this.setClear(Vt)}},getReversed:function(){return It},setTest:function(mt){mt?dt(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(mt){ut!==mt&&!q&&(i.depthMask(mt),ut=mt)},setFunc:function(mt){if(It&&(mt=Ku[mt]),Rt!==mt){switch(mt){case zo:i.depthFunc(i.NEVER);break;case Vo:i.depthFunc(i.ALWAYS);break;case Go:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case Ho:i.depthFunc(i.EQUAL);break;case Xo:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case Yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Rt=mt}},setLocked:function(mt){q=mt},setClear:function(mt){Ut!==mt&&(Ut=mt,It&&(mt=1-mt),i.clearDepth(mt))},reset:function(){q=!1,ut=null,Rt=null,Ut=null,It=!1}}}function s(){let q=!1,It=null,ut=null,Rt=null,Ut=null,mt=null,qt=null,Vt=null,Ee=null;return{setTest:function(ye){q||(ye?dt(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(ye){It!==ye&&!q&&(i.stencilMask(ye),It=ye)},setFunc:function(ye,mi,wi){(ut!==ye||Rt!==mi||Ut!==wi)&&(i.stencilFunc(ye,mi,wi),ut=ye,Rt=mi,Ut=wi)},setOp:function(ye,mi,wi){(mt!==ye||qt!==mi||Vt!==wi)&&(i.stencilOp(ye,mi,wi),mt=ye,qt=mi,Vt=wi)},setLocked:function(ye){q=ye},setClear:function(ye){Ee!==ye&&(i.clearStencil(ye),Ee=ye)},reset:function(){q=!1,It=null,ut=null,Rt=null,Ut=null,mt=null,qt=null,Vt=null,Ee=null}}}let o=new e,l=new n,h=new s,u=new WeakMap,f=new WeakMap,p={},_={},m={},g=new WeakMap,b=[],w=null,y=!1,v=null,A=null,C=null,T=null,R=null,L=null,O=null,E=new de(0,0,0),D=0,U=!1,N=null,G=null,H=null,B=null,W=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,at=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(tt)[1]),J=at>=1):tt.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),J=at>=2);let nt=null,st={},Tt=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),$t=new Me().fromArray(Tt),ne=new Me().fromArray(Et);function me(q,It,ut,Rt){let Ut=new Uint8Array(4),mt=i.createTexture();i.bindTexture(q,mt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<ut;qt++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(It,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(It+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return mt}let lt={};lt[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),dt(i.DEPTH_TEST),l.setFunc(Ss),vt(!1),Mt(Ec),dt(i.CULL_FACE),xt(Yi);function dt(q){p[q]!==!0&&(i.enable(q),p[q]=!0)}function Nt(q){p[q]!==!1&&(i.disable(q),p[q]=!1)}function jt(q,It){return m[q]!==It?(i.bindFramebuffer(q,It),m[q]=It,q===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=It),q===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=It),!0):!1}function Ft(q,It){let ut=b,Rt=!1;if(q){ut=g.get(It),ut===void 0&&(ut=[],g.set(It,ut));let Ut=q.textures;if(ut.length!==Ut.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,qt=Ut.length;mt<qt;mt++)ut[mt]=i.COLOR_ATTACHMENT0+mt;ut.length=Ut.length,Rt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,Rt=!0);Rt&&i.drawBuffers(ut)}function te(q){return w!==q?(i.useProgram(q),w=q,!0):!1}let be={[$n]:i.FUNC_ADD,[yu]:i.FUNC_SUBTRACT,[vu]:i.FUNC_REVERSE_SUBTRACT};be[bu]=i.MIN,be[Su]=i.MAX;let pt={[Mu]:i.ZERO,[wu]:i.ONE,[Tu]:i.SRC_COLOR,[Ic]:i.SRC_ALPHA,[Ru]:i.SRC_ALPHA_SATURATE,[Pu]:i.DST_COLOR,[Au]:i.DST_ALPHA,[Eu]:i.ONE_MINUS_SRC_COLOR,[Rc]:i.ONE_MINUS_SRC_ALPHA,[Iu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Lu]:i.CONSTANT_COLOR,[Du]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Fu]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(q,It,ut,Rt,Ut,mt,qt,Vt,Ee,ye){if(q===Yi){y===!0&&(Nt(i.BLEND),y=!1);return}if(y===!1&&(dt(i.BLEND),y=!0),q!==xu){if(q!==v||ye!==U){if((A!==$n||R!==$n)&&(i.blendEquation(i.FUNC_ADD),A=$n,R=$n),ye)switch(q){case Bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ac:i.blendFunc(i.ONE,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ie("WebGLState: Invalid blending: ",q);break}else switch(q){case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ac:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cc:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pc:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",q);break}C=null,T=null,L=null,O=null,E.set(0,0,0),D=0,v=q,U=ye}return}Ut=Ut||It,mt=mt||ut,qt=qt||Rt,(It!==A||Ut!==R)&&(i.blendEquationSeparate(be[It],be[Ut]),A=It,R=Ut),(ut!==C||Rt!==T||mt!==L||qt!==O)&&(i.blendFuncSeparate(pt[ut],pt[Rt],pt[mt],pt[qt]),C=ut,T=Rt,L=mt,O=qt),(Vt.equals(E)===!1||Ee!==D)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Ee),E.copy(Vt),D=Ee),v=q,U=!1}function yt(q,It){q.side===ui?Nt(i.CULL_FACE):dt(i.CULL_FACE);let ut=q.side===Xe;It&&(ut=!ut),vt(ut),q.blending===Bs&&q.transparent===!1?xt(Yi):xt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),l.setFunc(q.depthFunc),l.setTest(q.depthTest),l.setMask(q.depthWrite),o.setMask(q.colorWrite);let Rt=q.stencilWrite;h.setTest(Rt),Rt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Zt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(q){N!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),N=q)}function Mt(q){q!==mu?(dt(i.CULL_FACE),q!==G&&(q===Ec?i.cullFace(i.BACK):q===gu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),G=q}function Kt(q){q!==H&&(J&&i.lineWidth(q),H=q)}function Zt(q,It,ut){q?(dt(i.POLYGON_OFFSET_FILL),(B!==It||W!==ut)&&(B=It,W=ut,l.getReversed()&&(It=-It),i.polygonOffset(It,ut))):Nt(i.POLYGON_OFFSET_FILL)}function ee(q){q?dt(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function se(q){q===void 0&&(q=i.TEXTURE0+K-1),nt!==q&&(i.activeTexture(q),nt=q)}function X(q,It,ut){ut===void 0&&(nt===null?ut=i.TEXTURE0+K-1:ut=nt);let Rt=st[ut];Rt===void 0&&(Rt={type:void 0,texture:void 0},st[ut]=Rt),(Rt.type!==q||Rt.texture!==It)&&(nt!==ut&&(i.activeTexture(ut),nt=ut),i.bindTexture(q,It||lt[q]),Rt.type=q,Rt.texture=It)}function xe(){let q=st[nt];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function fe(){try{i.compressedTexImage2D(...arguments)}catch(q){ie("WebGLState:",q)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(q){ie("WebGLState:",q)}}function M(){try{i.texSubImage2D(...arguments)}catch(q){ie("WebGLState:",q)}}function Z(){try{i.texSubImage3D(...arguments)}catch(q){ie("WebGLState:",q)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(q){ie("WebGLState:",q)}}function rt(){try{i.compressedTexSubImage3D(...arguments)}catch(q){ie("WebGLState:",q)}}function bt(){try{i.texStorage2D(...arguments)}catch(q){ie("WebGLState:",q)}}function St(){try{i.texStorage3D(...arguments)}catch(q){ie("WebGLState:",q)}}function ot(){try{i.texImage2D(...arguments)}catch(q){ie("WebGLState:",q)}}function ft(){try{i.texImage3D(...arguments)}catch(q){ie("WebGLState:",q)}}function Pt(q){return _[q]!==void 0?_[q]:i.getParameter(q)}function Gt(q,It){_[q]!==It&&(i.pixelStorei(q,It),_[q]=It)}function Dt(q){$t.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),$t.copy(q))}function At(q){ne.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),ne.copy(q))}function Xt(q,It){let ut=f.get(It);ut===void 0&&(ut=new WeakMap,f.set(It,ut));let Rt=ut.get(q);Rt===void 0&&(Rt=i.getUniformBlockIndex(It,q.name),ut.set(q,Rt))}function Jt(q,It){let Rt=f.get(It).get(q);u.get(It)!==Rt&&(i.uniformBlockBinding(It,Rt,q.__bindingPointIndex),u.set(It,Rt))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),p={},_={},nt=null,st={},m={},g=new WeakMap,b=[],w=null,y=!1,v=null,A=null,C=null,T=null,R=null,L=null,O=null,E=new de(0,0,0),D=0,U=!1,N=null,G=null,H=null,B=null,W=null,$t.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:dt,disable:Nt,bindFramebuffer:jt,drawBuffers:Ft,useProgram:te,setBlending:xt,setMaterial:yt,setFlipSided:vt,setCullFace:Mt,setLineWidth:Kt,setPolygonOffset:Zt,setScissorTest:ee,activeTexture:se,bindTexture:X,unbindTexture:xe,compressedTexImage2D:fe,compressedTexImage3D:F,texImage2D:ot,texImage3D:ft,pixelStorei:Gt,getParameter:Pt,updateUBOMapping:Xt,uniformBlockBinding:Jt,texStorage2D:bt,texStorage3D:St,texSubImage2D:M,texSubImage3D:Z,compressedTexSubImage2D:et,compressedTexSubImage3D:rt,scissor:Dt,viewport:At,reset:le}}function Ex(i,t,e,n,s,o,l){let h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new _t,p=new WeakMap,_=new Set,m,g=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(F,M){return b?new OffscreenCanvas(F,M):hr("canvas")}function y(F,M,Z){let et=1,rt=fe(F);if((rt.width>Z||rt.height>Z)&&(et=Z/Math.max(rt.width,rt.height)),et<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let bt=Math.floor(et*rt.width),St=Math.floor(et*rt.height);m===void 0&&(m=w(bt,St));let ot=M?w(bt,St):m;return ot.width=bt,ot.height=St,ot.getContext("2d").drawImage(F,0,0,bt,St),Qt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+bt+"x"+St+")."),ot}else return"data"in F&&Qt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),F;return F}function v(F){return F.generateMipmaps}function A(F){i.generateMipmap(F)}function C(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(F,M,Z,et,rt,bt=!1){if(F!==null){if(i[F]!==void 0)return i[F];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let St;et&&(St=t.get("EXT_texture_norm16"),St||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=M;if(M===i.RED&&(Z===i.FLOAT&&(ot=i.R32F),Z===i.HALF_FLOAT&&(ot=i.R16F),Z===i.UNSIGNED_BYTE&&(ot=i.R8),Z===i.UNSIGNED_SHORT&&St&&(ot=St.R16_EXT),Z===i.SHORT&&St&&(ot=St.R16_SNORM_EXT)),M===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ot=i.R8UI),Z===i.UNSIGNED_SHORT&&(ot=i.R16UI),Z===i.UNSIGNED_INT&&(ot=i.R32UI),Z===i.BYTE&&(ot=i.R8I),Z===i.SHORT&&(ot=i.R16I),Z===i.INT&&(ot=i.R32I)),M===i.RG&&(Z===i.FLOAT&&(ot=i.RG32F),Z===i.HALF_FLOAT&&(ot=i.RG16F),Z===i.UNSIGNED_BYTE&&(ot=i.RG8),Z===i.UNSIGNED_SHORT&&St&&(ot=St.RG16_EXT),Z===i.SHORT&&St&&(ot=St.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ot=i.RG8UI),Z===i.UNSIGNED_SHORT&&(ot=i.RG16UI),Z===i.UNSIGNED_INT&&(ot=i.RG32UI),Z===i.BYTE&&(ot=i.RG8I),Z===i.SHORT&&(ot=i.RG16I),Z===i.INT&&(ot=i.RG32I)),M===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),Z===i.UNSIGNED_INT&&(ot=i.RGB32UI),Z===i.BYTE&&(ot=i.RGB8I),Z===i.SHORT&&(ot=i.RGB16I),Z===i.INT&&(ot=i.RGB32I)),M===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),Z===i.UNSIGNED_INT&&(ot=i.RGBA32UI),Z===i.BYTE&&(ot=i.RGBA8I),Z===i.SHORT&&(ot=i.RGBA16I),Z===i.INT&&(ot=i.RGBA32I)),M===i.RGB&&(Z===i.UNSIGNED_SHORT&&St&&(ot=St.RGB16_EXT),Z===i.SHORT&&St&&(ot=St.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),M===i.RGBA){let ft=bt?cr:pe.getTransfer(rt);Z===i.FLOAT&&(ot=i.RGBA32F),Z===i.HALF_FLOAT&&(ot=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(ot=ft===Se?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&St&&(ot=St.RGBA16_EXT),Z===i.SHORT&&St&&(ot=St.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function R(F,M){let Z;return F?M===null||M===Oi||M===ks?Z=i.DEPTH24_STENCIL8:M===Bi?Z=i.DEPTH32F_STENCIL8:M===Us&&(Z=i.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Oi||M===ks?Z=i.DEPTH_COMPONENT24:M===Bi?Z=i.DEPTH_COMPONENT32F:M===Us&&(Z=i.DEPTH_COMPONENT16),Z}function L(F,M){return v(F)===!0||F.isFramebufferTexture&&F.minFilter!==Oe&&F.minFilter!==Ge?Math.log2(Math.max(M.width,M.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?M.mipmaps.length:1}function O(F){let M=F.target;M.removeEventListener("dispose",O),D(M),M.isVideoTexture&&p.delete(M),M.isHTMLTexture&&_.delete(M)}function E(F){let M=F.target;M.removeEventListener("dispose",E),N(M)}function D(F){let M=n.get(F);if(M.__webglInit===void 0)return;let Z=F.source,et=g.get(Z);if(et){let rt=et[M.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&U(F),Object.keys(et).length===0&&g.delete(Z)}n.remove(F)}function U(F){let M=n.get(F);i.deleteTexture(M.__webglTexture);let Z=F.source,et=g.get(Z);delete et[M.__cacheKey],l.memory.textures--}function N(F){let M=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(M.__webglFramebuffer[et]))for(let rt=0;rt<M.__webglFramebuffer[et].length;rt++)i.deleteFramebuffer(M.__webglFramebuffer[et][rt]);else i.deleteFramebuffer(M.__webglFramebuffer[et]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[et])}else{if(Array.isArray(M.__webglFramebuffer))for(let et=0;et<M.__webglFramebuffer.length;et++)i.deleteFramebuffer(M.__webglFramebuffer[et]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let et=0;et<M.__webglColorRenderbuffer.length;et++)M.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[et]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let Z=F.textures;for(let et=0,rt=Z.length;et<rt;et++){let bt=n.get(Z[et]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),l.memory.textures--),n.remove(Z[et])}n.remove(F)}let G=0;function H(){G=0}function B(){return G}function W(F){G=F}function K(){let F=G;return F>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,F}function J(F){let M=[];return M.push(F.wrapS),M.push(F.wrapT),M.push(F.wrapR||0),M.push(F.magFilter),M.push(F.minFilter),M.push(F.anisotropy),M.push(F.internalFormat),M.push(F.format),M.push(F.type),M.push(F.generateMipmaps),M.push(F.premultiplyAlpha),M.push(F.flipY),M.push(F.unpackAlignment),M.push(F.colorSpace),M.join()}function at(F,M){let Z=n.get(F);if(F.isVideoTexture&&X(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Z.__version!==F.version){let et=F.image;if(et===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(Z,F,M);return}}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+M)}function tt(F,M){let Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){Nt(Z,F,M);return}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+M)}function nt(F,M){let Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){Nt(Z,F,M);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+M)}function st(F,M){let Z=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Z.__version!==F.version){jt(Z,F,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+M)}let Tt={[Gn]:i.REPEAT,[Vi]:i.CLAMP_TO_EDGE,[qo]:i.MIRRORED_REPEAT},Et={[Oe]:i.NEAREST,[Uu]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[Ta]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},$t={[Gu]:i.NEVER,[qu]:i.ALWAYS,[Hu]:i.LESS,[cl]:i.LEQUAL,[Xu]:i.EQUAL,[hl]:i.GEQUAL,[Wu]:i.GREATER,[Yu]:i.NOTEQUAL};function ne(F,M){if(M.type===Bi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ge||M.magFilter===Ta||M.magFilter===Vr||M.magFilter===Pn||M.minFilter===Ge||M.minFilter===Ta||M.minFilter===Vr||M.minFilter===Pn)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Tt[M.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Tt[M.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Tt[M.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Et[M.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Et[M.minFilter]),M.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,$t[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Oe||M.minFilter!==Vr&&M.minFilter!==Pn||M.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function me(F,M){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,M.addEventListener("dispose",O));let et=M.source,rt=g.get(et);rt===void 0&&(rt={},g.set(et,rt));let bt=J(M);if(bt!==F.__cacheKey){rt[bt]===void 0&&(rt[bt]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,Z=!0),rt[bt].usedTimes++;let St=rt[F.__cacheKey];St!==void 0&&(rt[F.__cacheKey].usedTimes--,St.usedTimes===0&&U(M)),F.__cacheKey=bt,F.__webglTexture=rt[bt].texture}return Z}function lt(F,M,Z){return Math.floor(Math.floor(F/Z)/M)}function dt(F,M,Z,et){let bt=F.updateRanges;if(bt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,Z,et,M.data);else{bt.sort((Gt,Dt)=>Gt.start-Dt.start);let St=0;for(let Gt=1;Gt<bt.length;Gt++){let Dt=bt[St],At=bt[Gt],Xt=Dt.start+Dt.count,Jt=lt(At.start,M.width,4),le=lt(Dt.start,M.width,4);At.start<=Xt+1&&Jt===le&&lt(At.start+At.count-1,M.width,4)===Jt?Dt.count=Math.max(Dt.count,At.start+At.count-Dt.start):(++St,bt[St]=At)}bt.length=St+1;let ot=e.getParameter(i.UNPACK_ROW_LENGTH),ft=e.getParameter(i.UNPACK_SKIP_PIXELS),Pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Gt=0,Dt=bt.length;Gt<Dt;Gt++){let At=bt[Gt],Xt=Math.floor(At.start/4),Jt=Math.ceil(At.count/4),le=Xt%M.width,q=Math.floor(Xt/M.width),It=Jt,ut=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,le),e.pixelStorei(i.UNPACK_SKIP_ROWS,q),e.texSubImage2D(i.TEXTURE_2D,0,le,q,It,ut,Z,et,M.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ot),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function Nt(F,M,Z){let et=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=i.TEXTURE_3D);let rt=me(F,M),bt=M.source;e.bindTexture(et,F.__webglTexture,i.TEXTURE0+Z);let St=n.get(bt);if(bt.version!==St.__version||rt===!0){if(e.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ut=pe.getPrimaries(pe.workingColorSpace),Rt=M.colorSpace===ln?null:pe.getPrimaries(M.colorSpace),Ut=M.colorSpace===ln||ut===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ft=y(M.image,!1,s.maxTextureSize);ft=xe(M,ft);let Pt=o.convert(M.format,M.colorSpace),Gt=o.convert(M.type),Dt=T(M.internalFormat,Pt,Gt,M.normalized,M.colorSpace,M.isVideoTexture);ne(et,M);let At,Xt=M.mipmaps,Jt=M.isVideoTexture!==!0,le=St.__version===void 0||rt===!0,q=bt.dataReady,It=L(M,ft);if(M.isDepthTexture)Dt=R(M.format===In,M.type),le&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,Dt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Dt,ft.width,ft.height,0,Pt,Gt,null));else if(M.isDataTexture)if(Xt.length>0){Jt&&le&&e.texStorage2D(i.TEXTURE_2D,It,Dt,Xt[0].width,Xt[0].height);for(let ut=0,Rt=Xt.length;ut<Rt;ut++)At=Xt[ut],Jt?q&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,At.width,At.height,Pt,Gt,At.data):e.texImage2D(i.TEXTURE_2D,ut,Dt,At.width,At.height,0,Pt,Gt,At.data);M.generateMipmaps=!1}else Jt?(le&&e.texStorage2D(i.TEXTURE_2D,It,Dt,ft.width,ft.height),q&&dt(M,ft,Pt,Gt)):e.texImage2D(i.TEXTURE_2D,0,Dt,ft.width,ft.height,0,Pt,Gt,ft.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Jt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Dt,Xt[0].width,Xt[0].height,ft.depth);for(let ut=0,Rt=Xt.length;ut<Rt;ut++)if(At=Xt[ut],M.format!==Ci)if(Pt!==null)if(Jt){if(q)if(M.layerUpdates.size>0){let Ut=th(At.width,At.height,M.format,M.type);for(let mt of M.layerUpdates){let qt=At.data.subarray(mt*Ut/At.data.BYTES_PER_ELEMENT,(mt+1)*Ut/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,mt,At.width,At.height,1,Pt,qt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,At.width,At.height,ft.depth,Pt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Dt,At.width,At.height,ft.depth,0,At.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,At.width,At.height,ft.depth,Pt,Gt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Dt,At.width,At.height,ft.depth,0,Pt,Gt,At.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Jt&&le&&e.texStorage2D(i.TEXTURE_2D,It,Dt,Xt[0].width,Xt[0].height);for(let ut=0,Rt=Xt.length;ut<Rt;ut++)At=Xt[ut],M.format!==Ci?Pt!==null?Jt?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,At.width,At.height,Pt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Dt,At.width,At.height,0,At.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?q&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,At.width,At.height,Pt,Gt,At.data):e.texImage2D(i.TEXTURE_2D,ut,Dt,At.width,At.height,0,Pt,Gt,At.data)}else if(M.isDataArrayTexture)if(Jt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Dt,ft.width,ft.height,ft.depth),q)if(M.layerUpdates.size>0){let ut=th(ft.width,ft.height,M.format,M.type);for(let Rt of M.layerUpdates){let Ut=ft.data.subarray(Rt*ut/ft.data.BYTES_PER_ELEMENT,(Rt+1)*ut/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Rt,ft.width,ft.height,1,Pt,Gt,Ut)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Pt,Gt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,ft.width,ft.height,ft.depth,0,Pt,Gt,ft.data);else if(M.isData3DTexture)Jt?(le&&e.texStorage3D(i.TEXTURE_3D,It,Dt,ft.width,ft.height,ft.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Pt,Gt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,ft.width,ft.height,ft.depth,0,Pt,Gt,ft.data);else if(M.isFramebufferTexture){if(le)if(Jt)e.texStorage2D(i.TEXTURE_2D,It,Dt,ft.width,ft.height);else{let ut=ft.width,Rt=ft.height;for(let Ut=0;Ut<It;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Dt,ut,Rt,0,Pt,Gt,null),ut>>=1,Rt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let ut=i.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),ft.parentNode!==ut){ut.appendChild(ft),_.add(M),ut.onpaint=Rt=>{let Ut=Rt.changedElements;for(let mt of _)Ut.includes(mt.image)&&(mt.needsUpdate=!0)},ut.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ft);else{let Ut=i.RGBA,mt=i.RGBA,qt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ut,mt,qt,ft)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(Jt&&le){let ut=fe(Xt[0]);e.texStorage2D(i.TEXTURE_2D,It,Dt,ut.width,ut.height)}for(let ut=0,Rt=Xt.length;ut<Rt;ut++)At=Xt[ut],Jt?q&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Pt,Gt,At):e.texImage2D(i.TEXTURE_2D,ut,Dt,Pt,Gt,At);M.generateMipmaps=!1}else if(Jt){if(le){let ut=fe(ft);e.texStorage2D(i.TEXTURE_2D,It,Dt,ut.width,ut.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Gt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Dt,Pt,Gt,ft);v(M)&&A(et),St.__version=bt.version,M.onUpdate&&M.onUpdate(M)}F.__version=M.version}function jt(F,M,Z){if(M.image.length!==6)return;let et=me(F,M),rt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+Z);let bt=n.get(rt);if(rt.version!==bt.__version||et===!0){e.activeTexture(i.TEXTURE0+Z);let St=pe.getPrimaries(pe.workingColorSpace),ot=M.colorSpace===ln?null:pe.getPrimaries(M.colorSpace),ft=M.colorSpace===ln||St===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Pt=M.isCompressedTexture||M.image[0].isCompressedTexture,Gt=M.image[0]&&M.image[0].isDataTexture,Dt=[];for(let mt=0;mt<6;mt++)!Pt&&!Gt?Dt[mt]=y(M.image[mt],!0,s.maxCubemapSize):Dt[mt]=Gt?M.image[mt].image:M.image[mt],Dt[mt]=xe(M,Dt[mt]);let At=Dt[0],Xt=o.convert(M.format,M.colorSpace),Jt=o.convert(M.type),le=T(M.internalFormat,Xt,Jt,M.normalized,M.colorSpace),q=M.isVideoTexture!==!0,It=bt.__version===void 0||et===!0,ut=rt.dataReady,Rt=L(M,At);ne(i.TEXTURE_CUBE_MAP,M);let Ut;if(Pt){q&&It&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,le,At.width,At.height);for(let mt=0;mt<6;mt++){Ut=Dt[mt].mipmaps;for(let qt=0;qt<Ut.length;qt++){let Vt=Ut[qt];M.format!==Ci?Xt!==null?q?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,qt,0,0,Vt.width,Vt.height,Xt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,qt,le,Vt.width,Vt.height,0,Vt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,qt,0,0,Vt.width,Vt.height,Xt,Jt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,qt,le,Vt.width,Vt.height,0,Xt,Jt,Vt.data)}}}else{if(Ut=M.mipmaps,q&&It){Ut.length>0&&Rt++;let mt=fe(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,le,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Gt){q?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Dt[mt].width,Dt[mt].height,Xt,Jt,Dt[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,le,Dt[mt].width,Dt[mt].height,0,Xt,Jt,Dt[mt].data);for(let qt=0;qt<Ut.length;qt++){let Ee=Ut[qt].image[mt].image;q?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,qt+1,0,0,Ee.width,Ee.height,Xt,Jt,Ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,qt+1,le,Ee.width,Ee.height,0,Xt,Jt,Ee.data)}}else{q?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Xt,Jt,Dt[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,le,Xt,Jt,Dt[mt]);for(let qt=0;qt<Ut.length;qt++){let Vt=Ut[qt];q?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,qt+1,0,0,Xt,Jt,Vt.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,qt+1,le,Xt,Jt,Vt.image[mt])}}}v(M)&&A(i.TEXTURE_CUBE_MAP),bt.__version=rt.version,M.onUpdate&&M.onUpdate(M)}F.__version=M.version}function Ft(F,M,Z,et,rt,bt){let St=o.convert(Z.format,Z.colorSpace),ot=o.convert(Z.type),ft=T(Z.internalFormat,St,ot,Z.normalized,Z.colorSpace),Pt=n.get(M),Gt=n.get(Z);if(Gt.__renderTarget=M,!Pt.__hasExternalTextures){let Dt=Math.max(1,M.width>>bt),At=Math.max(1,M.height>>bt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,bt,ft,Dt,At,M.depth,0,St,ot,null):e.texImage2D(rt,bt,ft,Dt,At,0,St,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),se(M)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,rt,Gt.__webglTexture,0,ee(M)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,rt,Gt.__webglTexture,bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(F,M,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,F),M.depthBuffer){let et=M.depthTexture,rt=et&&et.isDepthTexture?et.type:null,bt=R(M.stencilBuffer,rt),St=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;se(M)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee(M),bt,M.width,M.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee(M),bt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,bt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,F)}else{let et=M.textures;for(let rt=0;rt<et.length;rt++){let bt=et[rt],St=o.convert(bt.format,bt.colorSpace),ot=o.convert(bt.type),ft=T(bt.internalFormat,St,ot,bt.normalized,bt.colorSpace);se(M)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee(M),ft,M.width,M.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee(M),ft,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ft,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(F,M,Z){let et=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=n.get(M.depthTexture);if(rt.__renderTarget=M,(!rt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),et){if(rt.__webglInit===void 0&&(rt.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),rt.__webglTexture===void 0){rt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),ne(i.TEXTURE_CUBE_MAP,M.depthTexture);let Pt=o.convert(M.depthTexture.format),Gt=o.convert(M.depthTexture.type),Dt;M.depthTexture.format===Xi?Dt=i.DEPTH_COMPONENT24:M.depthTexture.format===In&&(Dt=i.DEPTH24_STENCIL8);for(let At=0;At<6;At++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Dt,M.width,M.height,0,Pt,Gt,null)}}else at(M.depthTexture,0);let bt=rt.__webglTexture,St=ee(M),ot=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,ft=M.depthTexture.format===In?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Xi)se(M)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,ot,bt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,ft,ot,bt,0);else if(M.depthTexture.format===In)se(M)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,ot,bt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,ft,ot,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(F){let M=n.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==F.depthTexture){let et=F.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),et){let rt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,et.removeEventListener("dispose",rt)};et.addEventListener("dispose",rt),M.__depthDisposeCallback=rt}M.__boundDepthTexture=et}if(F.depthTexture&&!M.__autoAllocateDepthBuffer)if(Z)for(let et=0;et<6;et++)be(M.__webglFramebuffer[et],F,et);else{let et=F.texture.mipmaps;et&&et.length>0?be(M.__webglFramebuffer[0],F,0):be(M.__webglFramebuffer,F,0)}else if(Z){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]===void 0)M.__webglDepthbuffer[et]=i.createRenderbuffer(),te(M.__webglDepthbuffer[et],F,!1);else{let rt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=M.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,bt)}}else{let et=F.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),te(M.__webglDepthbuffer,F,!1);else{let rt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,bt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(F,M,Z){let et=n.get(F);M!==void 0&&Ft(et.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&pt(F)}function yt(F){let M=F.texture,Z=n.get(F),et=n.get(M);F.addEventListener("dispose",E);let rt=F.textures,bt=F.isWebGLCubeRenderTarget===!0,St=rt.length>1;if(St||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=M.version,l.memory.textures++),bt){Z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer[ot]=[];for(let ft=0;ft<M.mipmaps.length;ft++)Z.__webglFramebuffer[ot][ft]=i.createFramebuffer()}else Z.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)Z.__webglFramebuffer[ot]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(St)for(let ot=0,ft=rt.length;ot<ft;ot++){let Pt=n.get(rt[ot]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),l.memory.textures++)}if(F.samples>0&&se(F)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ot=0;ot<rt.length;ot++){let ft=rt[ot];Z.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[ot]);let Pt=o.convert(ft.format,ft.colorSpace),Gt=o.convert(ft.type),Dt=T(ft.internalFormat,Pt,Gt,ft.normalized,ft.colorSpace,F.isXRRenderTarget===!0),At=ee(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Dt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,Z.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),te(Z.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(bt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),ne(i.TEXTURE_CUBE_MAP,M);for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)Ft(Z.__webglFramebuffer[ot][ft],F,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else Ft(Z.__webglFramebuffer[ot],F,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);v(M)&&A(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ot=0,ft=rt.length;ot<ft;ot++){let Pt=rt[ot],Gt=n.get(Pt),Dt=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Dt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Dt,Gt.__webglTexture),ne(Dt,Pt),Ft(Z.__webglFramebuffer,F,Pt,i.COLOR_ATTACHMENT0+ot,Dt,0),v(Pt)&&A(Dt)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ot=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,et.__webglTexture),ne(ot,M),M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)Ft(Z.__webglFramebuffer[ft],F,M,i.COLOR_ATTACHMENT0,ot,ft);else Ft(Z.__webglFramebuffer,F,M,i.COLOR_ATTACHMENT0,ot,0);v(M)&&A(ot),e.unbindTexture()}F.depthBuffer&&pt(F)}function vt(F){let M=F.textures;for(let Z=0,et=M.length;Z<et;Z++){let rt=M[Z];if(v(rt)){let bt=C(F),St=n.get(rt).__webglTexture;e.bindTexture(bt,St),A(bt),e.unbindTexture()}}}let Mt=[],Kt=[];function Zt(F){if(F.samples>0){if(se(F)===!1){let M=F.textures,Z=F.width,et=F.height,rt=i.COLOR_BUFFER_BIT,bt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(F),ot=M.length>1;if(ot)for(let Pt=0;Pt<M.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);let ft=F.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Pt=0;Pt<M.length;Pt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[Pt]);let Gt=n.get(M[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,Z,et,0,0,Z,et,rt,i.NEAREST),u===!0&&(Mt.length=0,Kt.length=0,Mt.push(i.COLOR_ATTACHMENT0+Pt),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Mt.push(bt),Kt.push(bt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let Pt=0;Pt<M.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,St.__webglColorRenderbuffer[Pt]);let Gt=n.get(M[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&u){let M=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ee(F){return Math.min(s.maxSamples,F.samples)}function se(F){let M=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function X(F){let M=l.render.frame;p.get(F)!==M&&(p.set(F,M),F.update())}function xe(F,M){let Z=F.colorSpace,et=F.format,rt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Z!==lr&&Z!==ln&&(pe.getTransfer(Z)===Se?(et!==Ci||rt!==fi)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",Z)),M}function fe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(f.width=F.naturalWidth||F.width,f.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(f.width=F.displayWidth,f.height=F.displayHeight):(f.width=F.width,f.height=F.height),f}this.allocateTextureUnit=K,this.resetTextureUnits=H,this.getTextureUnits=B,this.setTextureUnits=W,this.setTexture2D=at,this.setTexture2DArray=tt,this.setTexture3D=nt,this.setTextureCube=st,this.rebindTextures=xt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ax(i,t){function e(n,s=ln){let o,l=pe.getTransfer(s);if(n===fi)return i.UNSIGNED_BYTE;if(n===Aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vc)return i.BYTE;if(n===Gc)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===Ea)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Bi)return i.FLOAT;if(n===Ui)return i.HALF_FLOAT;if(n===Wc)return i.ALPHA;if(n===Yc)return i.RGB;if(n===Ci)return i.RGBA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===In)return i.DEPTH_STENCIL;if(n===Gr)return i.RED;if(n===Pa)return i.RED_INTEGER;if(n===Rn)return i.RG;if(n===Ia)return i.RG_INTEGER;if(n===Ra)return i.RGBA_INTEGER;if(n===Hr||n===Xr||n===Wr||n===Yr)if(l===Se)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Hr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Hr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Da||n===Na||n===Fa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===La)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Ba||n===Ua||n===ka||n===za||n===qr||n===Va)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Oa||n===Ba)return l===Se?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ua)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===ka)return o.COMPRESSED_R11_EAC;if(n===za)return o.COMPRESSED_SIGNED_R11_EAC;if(n===qr)return o.COMPRESSED_RG11_EAC;if(n===Va)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ga||n===Ha||n===Xa||n===Wa||n===Ya||n===qa||n===$a||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===tl||n===el)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ga)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ka)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===nl||n===sl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===il)return l===Se?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rl||n===ol||n===$r||n===al)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===rl)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$r)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Px=`
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

}`,yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new xr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ri({vertexShader:Cx,fragmentShader:Px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new Cr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vh=class extends Ni{constructor(t,e){super();let n=this,s=null,o=1,l=null,h="local-floor",u=1,f=null,p=null,_=null,m=null,g=null,b=null,w=typeof XRWebGLBinding<"u",y=new yh,v={},A=e.getContextAttributes(),C=null,T=null,R=[],L=[],O=new _t,E=null,D=null,U=new je;U.viewport=new Me;let N=new je;N.viewport=new Me;let G=[U,N],H=new va,B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let dt=R[lt];return dt===void 0&&(dt=new Cs,R[lt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(lt){let dt=R[lt];return dt===void 0&&(dt=new Cs,R[lt]=dt),dt.getGripSpace()},this.getHand=function(lt){let dt=R[lt];return dt===void 0&&(dt=new Cs,R[lt]=dt),dt.getHandSpace()};function K(lt){let dt=L.indexOf(lt.inputSource);if(dt===-1)return;let Nt=R[dt];Nt!==void 0&&(Nt.update(lt.inputSource,lt.frame,f||l),Nt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function J(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",at);for(let lt=0;lt<R.length;lt++){let dt=L[lt];dt!==null&&(L[lt]=null,R[lt].disconnect(dt))}B=null,W=null,y.reset();for(let lt in v)delete v[lt];if(t.setRenderTarget(C),g=null,m=null,_=null,s=null,T=null,me.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(O.width,O.height,!1),D!==null){let lt=D.camera;lt.fov=D.fov,lt.zoom=D.zoom,lt.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){o=lt,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){h=lt,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(lt){f=lt},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(s,e)),_},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",J),s.addEventListener("inputsourceschange",at),A.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,jt=null,Ft=null;A.depth&&(Ft=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Nt=A.stencil?In:Xi,jt=A.stencil?ks:Oi);let te={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:o};_=this.getBinding(),m=_.createProjectionLayer(te),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),T=new hi(m.textureWidth,m.textureHeight,{format:Ci,type:fi,depthTexture:new yn(m.textureWidth,m.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let Nt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(s,e,Nt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),T=new hi(g.framebufferWidth,g.framebufferHeight,{format:Ci,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(u),f=null,l=await s.requestReferenceSpace(h),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function at(lt){for(let dt=0;dt<lt.removed.length;dt++){let Nt=lt.removed[dt],jt=L.indexOf(Nt);jt>=0&&(L[jt]=null,R[jt].disconnect(Nt))}for(let dt=0;dt<lt.added.length;dt++){let Nt=lt.added[dt],jt=L.indexOf(Nt);if(jt===-1){for(let te=0;te<R.length;te++)if(te>=L.length){L.push(Nt),jt=te;break}else if(L[te]===null){L[te]=Nt,jt=te;break}if(jt===-1)break}let Ft=R[jt];Ft&&Ft.connect(Nt)}}let tt=new k,nt=new k;function st(lt,dt,Nt){tt.setFromMatrixPosition(dt.matrixWorld),nt.setFromMatrixPosition(Nt.matrixWorld);let jt=tt.distanceTo(nt),Ft=dt.projectionMatrix.elements,te=Nt.projectionMatrix.elements,be=Ft[14]/(Ft[10]-1),pt=Ft[14]/(Ft[10]+1),xt=(Ft[9]+1)/Ft[5],yt=(Ft[9]-1)/Ft[5],vt=(Ft[8]-1)/Ft[0],Mt=(te[8]+1)/te[0],Kt=be*vt,Zt=be*Mt,ee=jt/(-vt+Mt),se=ee*-vt;if(dt.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(se),lt.translateZ(ee),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),Ft[10]===-1)lt.projectionMatrix.copy(dt.projectionMatrix),lt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{let X=be+ee,xe=pt+ee,fe=Kt-se,F=Zt+(jt-se),M=xt*pt/xe*X,Z=yt*pt/xe*X;lt.projectionMatrix.makePerspective(fe,F,M,Z,X,xe),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function Tt(lt,dt){dt===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(dt.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let dt=lt.near,Nt=lt.far;y.texture!==null&&(y.depthNear>0&&(dt=y.depthNear),y.depthFar>0&&(Nt=y.depthFar)),H.near=N.near=U.near=dt,H.far=N.far=U.far=Nt,(B!==H.near||W!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),B=H.near,W=H.far),H.layers.mask=lt.layers.mask|6,U.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let jt=lt.parent,Ft=H.cameras;Tt(H,jt);for(let te=0;te<Ft.length;te++)Tt(Ft[te],jt);Ft.length===2?st(H,U,N):H.projectionMatrix.copy(U.projectionMatrix),D===null&&lt.isPerspectiveCamera&&(D={camera:lt,fov:lt.fov,zoom:lt.zoom}),Et(lt,H,jt)};function Et(lt,dt,Nt){Nt===null?lt.matrix.copy(dt.matrixWorld):(lt.matrix.copy(Nt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(dt.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(dt.projectionMatrix),lt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=Ts*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(lt){u=lt,m!==null&&(m.fixedFoveation=lt),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=lt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(H)},this.getCameraTexture=function(lt){return v[lt]};let $t=null;function ne(lt,dt){if(p=dt.getViewerPose(f||l),b=dt,p!==null){let Nt=p.views;g!==null&&(t.setRenderTargetFramebuffer(T,g.framebuffer),t.setRenderTarget(T));let jt=!1;Nt.length!==H.cameras.length&&(H.cameras.length=0,jt=!0);for(let pt=0;pt<Nt.length;pt++){let xt=Nt[pt],yt=null;if(g!==null)yt=g.getViewport(xt);else{let Mt=_.getViewSubImage(m,xt);yt=Mt.viewport,pt===0&&(t.setRenderTargetTextures(T,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(T))}let vt=G[pt];vt===void 0&&(vt=new je,vt.layers.enable(pt),vt.viewport=new Me,G[pt]=vt),vt.matrix.fromArray(xt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(xt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(yt.x,yt.y,yt.width,yt.height),pt===0&&(H.matrix.copy(vt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),jt===!0&&H.cameras.push(vt)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){_=n.getBinding();let pt=_.getDepthInformation(Nt[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,s.renderState)}if(Ft&&Ft.includes("camera-access")&&w){t.state.unbindTexture(),_=n.getBinding();for(let pt=0;pt<Nt.length;pt++){let xt=Nt[pt].camera;if(xt){let yt=v[xt];yt||(yt=new xr,v[xt]=yt);let vt=_.getCameraImage(xt);yt.sourceTexture=vt}}}}for(let Nt=0;Nt<R.length;Nt++){let jt=L[Nt],Ft=R[Nt];jt!==null&&Ft!==void 0&&Ft.update(jt,dt,f||l)}$t&&$t(lt,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),b=null}let me=new Af;me.setAnimationLoop(ne),this.setAnimationLoop=function(lt){$t=lt},this.dispose=function(){}}},Ix=new _e,Df=new ae;Df.set(-1,0,0,0,1,0,0,0,1);function Rx(i,t){function e(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function n(y,v){v.color.getRGB(y.fogColor.value,Kc(i)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function s(y,v,A,C,T){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?o(y,v):v.isMeshLambertMaterial?(o(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(o(y,v),_(y,v)):v.isMeshPhongMaterial?(o(y,v),p(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(o(y,v),m(y,v),v.isMeshPhysicalMaterial&&g(y,v,T)):v.isMeshMatcapMaterial?(o(y,v),b(y,v)):v.isMeshDepthMaterial?o(y,v):v.isMeshDistanceMaterial?(o(y,v),w(y,v)):v.isMeshNormalMaterial?o(y,v):v.isLineBasicMaterial?(l(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?u(y,v,A,C):v.isSpriteMaterial?f(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,e(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,e(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Xe&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,e(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Xe&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,e(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,e(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);let A=t.get(v),C=A.envMap,T=A.envMapRotation;C&&(y.envMap.value=C,y.envMapRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(T)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Df),y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,y.aoMapTransform))}function l(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,e(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function u(y,v,A,C){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*A,y.scale.value=C*.5,v.map&&(y.map.value=v.map,e(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,e(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function m(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function g(y,v,A){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Xe&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.retroreflectivity>0&&(y.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){let A=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lx(i,t,e,n){let s={},o={},l=[],h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(T,R){let L=R.program;n.uniformBlockBinding(T,L)}function f(T,R){let L=s[T.id];L===void 0&&(y(T),L=p(T),s[T.id]=L,T.addEventListener("dispose",A));let O=R.program;n.updateUBOMapping(T,O);let E=t.render.frame;o[T.id]!==E&&(m(T),o[T.id]=E)}function p(T){let R=_();T.__bindingPointIndex=R;let L=i.createBuffer(),O=T.__size,E=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,O,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,L),L}function _(){for(let T=0;T<h;T++)if(l.indexOf(T)===-1)return l.push(T),T;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){let R=s[T.id],L=T.uniforms,O=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let E=0,D=L.length;E<D;E++){let U=L[E];if(Array.isArray(U))for(let N=0,G=U.length;N<G;N++)g(U[N],E,N,O);else g(U,E,0,O)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(T,R,L,O){if(w(T,R,L,O)===!0){let E=T.__offset,D=T.value;if(Array.isArray(D)){let U=0;for(let N=0;N<D.length;N++){let G=D[N],H=v(G);b(G,T.__data,U),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(U+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(D,T.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,T.__data)}}function b(T,R,L){typeof T=="number"||typeof T=="boolean"?R[0]=T:T.isMatrix3?(R[0]=T.elements[0],R[1]=T.elements[1],R[2]=T.elements[2],R[3]=0,R[4]=T.elements[3],R[5]=T.elements[4],R[6]=T.elements[5],R[7]=0,R[8]=T.elements[6],R[9]=T.elements[7],R[10]=T.elements[8],R[11]=0):ArrayBuffer.isView(T)?R.set(new T.constructor(T.buffer,T.byteOffset,R.length)):T.toArray(R,L)}function w(T,R,L,O){let E=T.value,D=R+"_"+L;if(O[D]===void 0)return typeof E=="number"||typeof E=="boolean"?O[D]=E:ArrayBuffer.isView(E)?O[D]=E.slice():O[D]=E.clone(),!0;{let U=O[D];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return O[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(U.equals(E)===!1)return U.copy(E),!0}}return!1}function y(T){let R=T.uniforms,L=0,O=16;for(let D=0,U=R.length;D<U;D++){let N=Array.isArray(R[D])?R[D]:[R[D]];for(let G=0,H=N.length;G<H;G++){let B=N[G],W=Array.isArray(B.value)?B.value:[B.value];for(let K=0,J=W.length;K<J;K++){let at=W[K],tt=v(at),nt=L%O,st=nt%tt.boundary,Tt=nt+st;L+=st,Tt!==0&&O-Tt<tt.storage&&(L+=O-Tt),B.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=L,L+=tt.storage}}}let E=L%O;return E>0&&(L+=O-E),T.__size=L,T.__cache={},this}function v(T){let R={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(R.boundary=4,R.storage=4):T.isVector2?(R.boundary=8,R.storage=8):T.isVector3||T.isColor?(R.boundary=16,R.storage=12):T.isVector4?(R.boundary=16,R.storage=16):T.isMatrix3?(R.boundary=48,R.storage=48):T.isMatrix4?(R.boundary=64,R.storage=64):T.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(R.boundary=16,R.storage=T.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",T),R}function A(T){let R=T.target;R.removeEventListener("dispose",A);let L=l.indexOf(R.__bindingPointIndex);l.splice(L,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete o[R.id]}function C(){for(let T in s)i.deleteBuffer(s[T]);l=[],s={},o={}}return{bind:u,update:f,dispose:C}}var Dx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null;function Nx(){return qi===null&&(qi=new Ps(Dx,16,16,Rn,Ui),qi.name="DFG_LUT",qi.minFilter=Ge,qi.magFilter=Ge,qi.wrapS=Vi,qi.wrapT=Vi,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}var ml=class{constructor(t={}){let{canvas:e=$u(),context:n=null,depth:s=!0,stencil:o=!1,alpha:l=!1,antialias:h=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1,outputBufferType:g=fi}=t;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=l;let w=g,y=new Set([Ra,Ia,Pa]),v=new Set([fi,Oi,Us,ks,Aa,Ca]),A=new Uint32Array(4),C=new Int32Array(4),T=new k,R=null,L=null,O=[],E=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,N=!1,G=null,H=null,B=null,W=null;this._outputColorSpace=Ke;let K=0,J=0,at=null,tt=-1,nt=null,st=new Me,Tt=new Me,Et=null,$t=new de(0),ne=0,me=e.width,lt=e.height,dt=1,Nt=null,jt=null,Ft=new Me(0,0,me,lt),te=new Me(0,0,me,lt),be=!1,pt=new Is,xt=!1,yt=!1,vt=new _e,Mt=new k,Kt=new Me,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function se(){return at===null?dt:1}let X=n;function xe(P,Y){return e.getContext(P,Y)}let fe,F,M,Z,et,rt,bt,St,ot,ft,Pt,Gt,Dt,At,Xt,Jt,le,q,It,ut,Rt,Ut,mt;try{let P={alpha:!0,depth:s,stencil:o,antialias:h,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sa}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",mi,!1),X===null){let Y="webgl2";if(X=xe(Y,P),X===null)throw xe(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(P){throw e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",mi,!1),ie("WebGLRenderer: "+P.message),P}function qt(){fe=new Vg(X),fe.init(),Rt=new Ax(X,fe),F=new Rg(X,fe,t,Rt),M=new Tx(X,fe),F.reversedDepthBuffer&&m&&M.buffers.depth.setReversed(!0),H=X.createFramebuffer(),B=X.createFramebuffer(),W=X.createFramebuffer(),Z=new Xg(X),et=new ux,rt=new Ex(X,fe,M,et,F,Rt,Z),bt=new zg(U),St=new Yp(X),Ut=new Pg(X,St),ot=new Gg(X,St,Z,Ut),ft=new Yg(X,ot,St,Ut,Z),q=new Wg(X,F,rt),Xt=new Lg(et),Pt=new hx(U,bt,fe,F,Ut,Xt),Gt=new Rx(U,et),Dt=new dx,At=new yx(fe),le=new Cg(U,bt,M,ft,b,u),Jt=new wx(U,ft,F),mt=new Lx(X,Z,F,M),It=new Ig(X,fe,Z),ut=new Hg(X,fe,Z),Z.programs=Pt.programs,U.capabilities=F,U.extensions=fe,U.properties=et,U.renderLists=Dt,U.shadowMap=Jt,U.state=M,U.info=Z}w!==fi&&(D=new $g(w,e.width,e.height,h,s,o));let Vt=new vh(U,X);this.xr=Vt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let P=fe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=fe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(P){P!==void 0&&(dt=P,this.setSize(me,lt,!1))},this.getSize=function(P){return P.set(me,lt)},this.setSize=function(P,Y,it=!0){if(Vt.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}me=P,lt=Y,e.width=Math.floor(P*dt),e.height=Math.floor(Y*dt),it===!0&&(e.style.width=P+"px",e.style.height=Y+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(me*dt,lt*dt).floor()},this.setDrawingBufferSize=function(P,Y,it){me=P,lt=Y,dt=it,e.width=Math.floor(P*it),e.height=Math.floor(Y*it),this.setViewport(0,0,P,Y)},this.setEffects=function(P){if(w===fi){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let Y=0;Y<P.length;Y++)if(P[Y].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(st)},this.getViewport=function(P){return P.copy(Ft)},this.setViewport=function(P,Y,it,j){P.isVector4?Ft.set(P.x,P.y,P.z,P.w):Ft.set(P,Y,it,j),M.viewport(st.copy(Ft).multiplyScalar(dt).round())},this.getScissor=function(P){return P.copy(te)},this.setScissor=function(P,Y,it,j){P.isVector4?te.set(P.x,P.y,P.z,P.w):te.set(P,Y,it,j),M.scissor(Tt.copy(te).multiplyScalar(dt).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(P){M.setScissorTest(be=P)},this.setOpaqueSort=function(P){Nt=P},this.setTransparentSort=function(P){jt=P},this.getClearColor=function(P){return P.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(P=!0,Y=!0,it=!0){let j=0;if(P){let Q=!1;if(at!==null){let Bt=at.texture.format;Q=y.has(Bt)}if(Q){let Bt=at.texture.type,wt=v.has(Bt),Ot=le.getClearColor(),kt=le.getClearAlpha(),Ht=Ot.r,Lt=Ot.g,ce=Ot.b;wt?(A[0]=Ht,A[1]=Lt,A[2]=ce,A[3]=kt,X.clearBufferuiv(X.COLOR,0,A)):(C[0]=Ht,C[1]=Lt,C[2]=ce,C[3]=kt,X.clearBufferiv(X.COLOR,0,C))}else j|=X.COLOR_BUFFER_BIT}Y&&(j|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(j|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&X.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),G=P},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",mi,!1),le.dispose(),Dt.dispose(),At.dispose(),et.dispose(),bt.dispose(),ft.dispose(),Ut.dispose(),mt.dispose(),Pt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",ro),Vt.removeEventListener("sessionend",oo),Ki.stop()};function Ee(P){P.preventDefault(),ur("WebGLRenderer: Context Lost."),N=!0}function ye(){ur("WebGLRenderer: Context Restored."),N=!1;let P=Z.autoReset,Y=Jt.enabled,it=Jt.autoUpdate,j=Jt.needsUpdate,Q=Jt.type;qt(),Z.autoReset=P,Jt.enabled=Y,Jt.autoUpdate=it,Jt.needsUpdate=j,Jt.type=Q}function mi(P){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function wi(P){let Y=P.target;Y.removeEventListener("dispose",wi),Ol(Y)}function Ol(P){Bl(P),et.remove(P)}function Bl(P){let Y=et.get(P).programs;Y!==void 0&&(Y.forEach(function(it){Pt.releaseProgram(it)}),P.isShaderMaterial&&Pt.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,it,j,Q,Bt){Y===null&&(Y=Zt);let wt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ot=un(P,Y,it,j,Q);M.setMaterial(j,wt);let kt=it.index,Ht=1;if(j.wireframe===!0){if(kt=ot.getWireframeAttribute(it),kt===void 0)return;Ht=2}let Lt=it.drawRange,ce=it.attributes.position,zt=Lt.start*Ht,ve=(Lt.start+Lt.count)*Ht;Bt!==null&&(zt=Math.max(zt,Bt.start*Ht),ve=Math.min(ve,(Bt.start+Bt.count)*Ht)),kt!==null?(zt=Math.max(zt,0),ve=Math.min(ve,kt.count)):ce!=null&&(zt=Math.max(zt,0),ve=Math.min(ve,ce.count));let De=ve-zt;if(De<0||De===1/0)return;Ut.setup(Q,j,Ot,it,kt);let Ae,r=It;if(kt!==null&&(Ae=St.get(kt),r=ut,r.setIndex(Ae)),Q.isMesh)j.wireframe===!0?(M.setLineWidth(j.wireframeLinewidth*se()),r.setMode(X.LINES)):r.setMode(X.TRIANGLES);else if(Q.isLine){let a=j.linewidth;a===void 0&&(a=1),M.setLineWidth(a*se()),Q.isLineSegments?r.setMode(X.LINES):Q.isLineLoop?r.setMode(X.LINE_LOOP):r.setMode(X.LINE_STRIP)}else Q.isPoints?r.setMode(X.POINTS):Q.isSprite&&r.setMode(X.TRIANGLES);if(Q.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))r.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let a=Q._multiDrawStarts,c=Q._multiDrawCounts,d=Q._multiDrawCount,x=kt?St.get(kt).bytesPerElement:1,S=et.get(j).currentProgram.getUniforms();for(let I=0;I<d;I++)S.setValue(X,"_gl_DrawID",I),r.render(a[I]/x,c[I])}else if(Q.isInstancedMesh)r.renderInstances(zt,De,Q.count);else if(it.isInstancedBufferGeometry){let a=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,c=Math.min(it.instanceCount,a);r.renderInstances(zt,De,c)}else r.render(zt,De)};function so(P,Y,it,j){G!==null&&P.isNodeMaterial&&G.setObject(j,P),xt===!0&&Xt.setState(P,it,!1),P.transparent===!0&&P.side===ui&&P.forceSinglePass===!1?(P.side=Xe,P.needsUpdate=!0,is(P,Y,j),P.side=An,P.needsUpdate=!0,is(P,Y,j),P.side=ui):is(P,Y,j)}this.compile=function(P,Y,it=null){it===null&&(it=P),G!==null&&G.renderStart(P,Y,it),L=At.get(it),L.init(Y),E.push(L),it.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(L.pushLight(Q),Q.castShadow&&L.pushShadow(Q))}),P!==it&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(L.pushLight(Q),Q.castShadow&&L.pushShadow(Q))}),L.setupLights(),G!==null&&G.updateLights(L.state.lightsArray),yt=this.localClippingEnabled,xt=Xt.init(this.clippingPlanes,yt),xt===!0&&Xt.setGlobalState(this.clippingPlanes,Y),G!==null&&Jt.render(L.state.shadowsArray,it,Y);let j=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Bt=Q.material;if(Bt)if(Array.isArray(Bt))for(let wt=0;wt<Bt.length;wt++){let Ot=Bt[wt];so(Ot,it,Y,Q),j.add(Ot)}else so(Bt,it,Y,Q),j.add(Bt)}),L=E.pop(),G!==null&&G.renderEnd(),j},this.compileAsync=function(P,Y,it=null){let j=this.compile(P,Y,it);return new Promise(Q=>{function Bt(){if(j.forEach(function(wt){let kt=et.get(wt).currentProgram;(kt===void 0||kt.isReady())&&j.delete(wt)}),j.size===0){Q(P);return}setTimeout(Bt,10)}fe.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Ks=null;function Ul(P){Ks&&Ks(P)}function ro(){Ki.stop()}function oo(){Ki.start()}let Ki=new Af;Ki.setAnimationLoop(Ul),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(P){Ks=P,Vt.setAnimationLoop(P),P===null?Ki.stop():Ki.start()},Vt.addEventListener("sessionstart",ro),Vt.addEventListener("sessionend",oo),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;G!==null&&G.renderStart(P,Y);let it=Vt.enabled===!0&&Vt.isPresenting===!0,j=D!==null&&(at===null||it)&&D.begin(U,at);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(Y),Y=Vt.getCamera()),P.isScene===!0&&P.onBeforeRender(U,P,Y,at),L=At.get(P,E.length),L.init(Y),L.state.textureUnits=rt.getTextureUnits(),E.push(L),vt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),pt.setFromProjectionMatrix(vt,Di,Y.reversedDepth),yt=this.localClippingEnabled,xt=Xt.init(this.clippingPlanes,yt),R=Dt.get(P,O.length),R.init(),O.push(R),Vt.enabled===!0&&Vt.isPresenting===!0){let wt=U.xr.getDepthSensingMesh();wt!==null&&js(wt,Y,-1/0,U.sortObjects)}js(P,Y,0,U.sortObjects),R.finish(),G!==null&&G.updateLights(L.state.lightsArray),U.sortObjects===!0&&R.sort(Nt,jt),ee=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,ee&&le.addToRenderList(R,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Xt.beginShadows();let Q=L.state.shadowsArray;if(Jt.render(Q,P,Y),xt===!0&&Xt.endShadows(),(j&&D.hasRenderPass())===!1){let wt=R.opaque,Ot=R.transmissive;if(L.setupLights(),Y.isArrayCamera){let kt=Y.cameras;if(Ot.length>0)for(let Ht=0,Lt=kt.length;Ht<Lt;Ht++){let ce=kt[Ht];hn(wt,Ot,P,ce)}ee&&le.render(P);for(let Ht=0,Lt=kt.length;Ht<Lt;Ht++){let ce=kt[Ht];ao(R,P,ce,ce.viewport)}}else Ot.length>0&&hn(wt,Ot,P,Y),ee&&le.render(P),ao(R,P,Y)}at!==null&&J===0&&(rt.updateMultisampleRenderTarget(at),rt.updateRenderTargetMipmap(at)),j&&D.end(U),P.isScene===!0&&P.onAfterRender(U,P,Y),Ut.resetDefaultState(),tt=-1,nt=null,E.pop(),E.length>0?(L=E[E.length-1],rt.setTextureUnits(L.state.textureUnits),xt===!0&&Xt.setGlobalState(U.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?R=O[O.length-1]:R=null,G!==null&&G.renderEnd()};function js(P,Y,it,j){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)it=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLightProbeGrid)L.pushLightProbeGrid(P);else if(P.isLight)L.pushLight(P),P.castShadow&&L.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(pt)){j&&Kt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(vt);let wt=ft.update(P),Ot=P.material;Ot.visible&&R.push(P,wt,Ot,it,Kt.z,null,Y)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(pt))){let wt=ft.update(P),Ot=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Kt.copy(P.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Kt.copy(wt.boundingSphere.center)),Kt.applyMatrix4(P.matrixWorld).applyMatrix4(vt)),Array.isArray(Ot)){let kt=wt.groups;for(let Ht=0,Lt=kt.length;Ht<Lt;Ht++){let ce=kt[Ht],zt=Ot[ce.materialIndex];zt&&zt.visible&&R.push(P,wt,zt,it,Kt.z,ce,Y)}}else Ot.visible&&R.push(P,wt,Ot,it,Kt.z,null,Y)}}let Bt=P.children;for(let wt=0,Ot=Bt.length;wt<Ot;wt++)js(Bt[wt],Y,it,j)}function ao(P,Y,it,j){let{opaque:Q,transmissive:Bt,transparent:wt}=P;L.setupLightsView(it),xt===!0&&Xt.setGlobalState(U.clippingPlanes,it),j&&M.viewport(st.copy(j)),Q.length>0&&On(Q,Y,it),Bt.length>0&&On(Bt,Y,it),wt.length>0&&On(wt,Y,it),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function hn(P,Y,it,j){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[j.id]===void 0){let zt=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[j.id]=new hi(1,1,{generateMipmaps:!0,type:zt?Ui:fi,minFilter:Pn,samples:Math.max(4,F.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let Bt=L.state.transmissionRenderTarget[j.id],wt=j.viewport||st;Bt.setSize(wt.z*U.transmissionResolutionScale,wt.w*U.transmissionResolutionScale);let Ot=U.getRenderTarget(),kt=U.getActiveCubeFace(),Ht=U.getActiveMipmapLevel();U.setRenderTarget(Bt),U.getClearColor($t),ne=U.getClearAlpha(),ne<1&&U.setClearColor(16777215,.5),U.clear(),ee&&le.render(it);let Lt=U.toneMapping;U.toneMapping=Fi;let ce=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),L.setupLightsView(j),xt===!0&&Xt.setGlobalState(U.clippingPlanes,j),On(P,it,j),rt.updateMultisampleRenderTarget(Bt),rt.updateRenderTargetMipmap(Bt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let ve=0,De=Y.length;ve<De;ve++){let Ae=Y[ve],{object:r,geometry:a,material:c,group:d}=Ae;if(c.side===ui&&r.layers.test(j.layers)){let x=c.side;c.side=Xe,c.needsUpdate=!0,lo(r,it,j,a,c,d),c.side=x,c.needsUpdate=!0,zt=!0}}zt===!0&&(rt.updateMultisampleRenderTarget(Bt),rt.updateRenderTargetMipmap(Bt))}U.setRenderTarget(Ot,kt,Ht),U.setClearColor($t,ne),ce!==void 0&&(j.viewport=ce),U.toneMapping=Lt}function On(P,Y,it){let j=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Bt=P.length;Q<Bt;Q++){let wt=P[Q],{object:Ot,geometry:kt,group:Ht}=wt,Lt=wt.material;Lt.allowOverride===!0&&j!==null&&(Lt=j),Ot.layers.test(it.layers)&&lo(Ot,Y,it,kt,Lt,Ht)}}function lo(P,Y,it,j,Q,Bt){G!==null&&Q.isNodeMaterial&&G.setObject(P,Q),P.onBeforeRender(U,Y,it,j,Q,Bt),P.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(U,Y,it,j,P,Bt),Q.transparent===!0&&Q.side===ui&&Q.forceSinglePass===!1?(Q.side=Xe,Q.needsUpdate=!0,U.renderBufferDirect(it,Y,j,Q,P,Bt),Q.side=An,Q.needsUpdate=!0,U.renderBufferDirect(it,Y,j,Q,P,Bt),Q.side=ui):U.renderBufferDirect(it,Y,j,Q,P,Bt),P.onAfterRender(U,Y,it,j,Q,Bt)}function is(P,Y,it){Y.isScene!==!0&&(Y=Zt);let j=et.get(P),Q=L.state.lights,Bt=L.state.shadowsArray,wt=Q.state.version,Ot=Pt.getParameters(P,Q.state,Bt,Y,it,L.state.lightProbeGridArray),kt=Pt.getProgramCacheKey(Ot),Ht=j.programs;j.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?Y.environment:null,j.fog=Y.fog;let Lt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;j.envMap=bt.get(P.envMap||j.environment,Lt),j.envMapRotation=j.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,Ht===void 0&&(P.addEventListener("dispose",wi),Ht=new Map,j.programs=Ht);let ce=Ht.get(kt);if(ce!==void 0){if(j.currentProgram===ce&&j.lightsStateVersion===wt)return ho(P,Ot),ce}else Ot.uniforms=Pt.getUniforms(P),G!==null&&P.isNodeMaterial&&G.build(P,it,Ot),P.onBeforeCompile(Ot,U),ce=Pt.acquireProgram(Ot,kt),Ht.set(kt,ce),j.uniforms=Ot.uniforms;let zt=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(zt.clippingPlanes=Xt.uniform),ho(P,Ot),j.needsLights=Vl(P),j.lightsStateVersion=wt,j.needsLights&&(zt.ambientLightColor.value=Q.state.ambient,zt.lightProbe.value=Q.state.probe,zt.sunLights.value=Q.state.sun,zt.sunLightShadows.value=Q.state.sunShadow,zt.directionalLights.value=Q.state.directional,zt.directionalLightShadows.value=Q.state.directionalShadow,zt.spotLights.value=Q.state.spot,zt.spotLightShadows.value=Q.state.spotShadow,zt.rectAreaLights.value=Q.state.rectArea,zt.ltc_1.value=Q.state.rectAreaLTC1,zt.ltc_2.value=Q.state.rectAreaLTC2,zt.pointLights.value=Q.state.point,zt.pointLightShadows.value=Q.state.pointShadow,zt.hemisphereLights.value=Q.state.hemi,zt.sunShadowMatrix.value=Q.state.sunShadowMatrix,zt.sunShadowCascade.value=Q.state.sunShadowCascade,zt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,zt.spotLightMatrix.value=Q.state.spotLightMatrix,zt.spotLightMap.value=Q.state.spotLightMap,zt.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=L.state.lightProbeGridArray.length>0,j.currentProgram=ce,j.uniformsList=null,ce}function co(P){if(P.uniformsList===null){let Y=P.currentProgram.getUniforms();P.uniformsList=Gs.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function ho(P,Y){let it=et.get(P);it.outputColorSpace=Y.outputColorSpace,it.batching=Y.batching,it.batchingColor=Y.batchingColor,it.instancing=Y.instancing,it.instancingColor=Y.instancingColor,it.instancingMorph=Y.instancingMorph,it.skinning=Y.skinning,it.morphTargets=Y.morphTargets,it.morphNormals=Y.morphNormals,it.morphColors=Y.morphColors,it.morphTargetsCount=Y.morphTargetsCount,it.numClippingPlanes=Y.numClippingPlanes,it.numIntersection=Y.numClipIntersection,it.vertexAlphas=Y.vertexAlphas,it.vertexTangents=Y.vertexTangents,it.toneMapping=Y.toneMapping}function kl(P,Y){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;T.setFromMatrixPosition(Y.matrixWorld);for(let it=0,j=P.length;it<j;it++){let Q=P[it];if(Q.texture!==null&&Q.boundingBox.containsPoint(T))return Q}return null}function un(P,Y,it,j,Q){Y.isScene!==!0&&(Y=Zt),rt.resetTextureUnits();let Bt=Y.fog,wt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?Y.environment:null,Ot=at===null?U.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:pe.workingColorSpace,kt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ht=bt.get(j.envMap||wt,kt),Lt=j.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ce=!!it.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),zt=!!it.morphAttributes.position,ve=!!it.morphAttributes.normal,De=!!it.morphAttributes.color,Ae=Fi;j.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ae=U.toneMapping);let r=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,a=r!==void 0?r.length:0,c=et.get(j),d=L.state.lights;if(xt===!0&&(yt===!0||P!==nt)){let gt=P===nt&&j.id===tt;Xt.setState(j,P,gt)}let x=!1;j.version===c.__version?(c.needsLights&&c.lightsStateVersion!==d.state.version||c.outputColorSpace!==Ot||Q.isBatchedMesh&&c.batching===!1||!Q.isBatchedMesh&&c.batching===!0||Q.isBatchedMesh&&c.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&c.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&c.instancing===!1||!Q.isInstancedMesh&&c.instancing===!0||Q.isSkinnedMesh&&c.skinning===!1||!Q.isSkinnedMesh&&c.skinning===!0||Q.isInstancedMesh&&c.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&c.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&c.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&c.instancingMorph===!1&&Q.morphTexture!==null||c.envMap!==Ht||j.fog===!0&&c.fog!==Bt||c.numClippingPlanes!==void 0&&(c.numClippingPlanes!==Xt.numPlanes||c.numIntersection!==Xt.numIntersection)||c.vertexAlphas!==Lt||c.vertexTangents!==ce||c.morphTargets!==zt||c.morphNormals!==ve||c.morphColors!==De||c.toneMapping!==Ae||c.morphTargetsCount!==a||!!c.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(x=!0):(x=!0,c.__version=j.version);let S=c.currentProgram;x===!0&&(S=is(j,Y,Q),G&&j.isNodeMaterial&&G.onUpdateProgram(j,S,c));let I=!1,z=!1,V=!1,$=S.getUniforms(),ht=c.uniforms;if(M.useProgram(S.program)&&(I=!0,z=!0,V=!0),j.id!==tt&&(tt=j.id,z=!0),c.needsLights){let gt=kl(L.state.lightProbeGridArray,Q);c.lightProbeGrid!==gt&&(c.lightProbeGrid=gt,z=!0)}if(I||nt!==P){M.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),$.setValue(X,"projectionMatrix",P.projectionMatrix),$.setValue(X,"viewMatrix",P.matrixWorldInverse);let Wt=$.map.cameraPosition;Wt!==void 0&&Wt.setValue(X,Mt.setFromMatrixPosition(P.matrixWorld)),F.logarithmicDepthBuffer&&$.setValue(X,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&$.setValue(X,"isOrthographic",P.isOrthographicCamera===!0),nt!==P&&(nt=P,z=!0,V=!0)}if(c.needsLights&&(d.state.sunShadowMap.length>0&&$.setValue(X,"sunShadowMap",d.state.sunShadowMap,rt),d.state.directionalShadowMap.length>0&&$.setValue(X,"directionalShadowMap",d.state.directionalShadowMap,rt),d.state.spotShadowMap.length>0&&$.setValue(X,"spotShadowMap",d.state.spotShadowMap,rt),d.state.pointShadowMap.length>0&&$.setValue(X,"pointShadowMap",d.state.pointShadowMap,rt)),Q.isSkinnedMesh){$.setOptional(X,Q,"bindMatrix"),$.setOptional(X,Q,"bindMatrixInverse");let gt=Q.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),$.setValue(X,"boneTexture",gt.boneTexture,rt))}Q.isBatchedMesh&&($.setOptional(X,Q,"batchingTexture"),$.setValue(X,"batchingTexture",Q._matricesTexture,rt),$.setOptional(X,Q,"batchingIdTexture"),$.setValue(X,"batchingIdTexture",Q._indirectTexture,rt),$.setOptional(X,Q,"batchingColorTexture"),Q._colorsTexture!==null&&$.setValue(X,"batchingColorTexture",Q._colorsTexture,rt));let ct=it.morphAttributes;if((ct.position!==void 0||ct.normal!==void 0||ct.color!==void 0)&&q.update(Q,it,S),(z||c.receiveShadow!==Q.receiveShadow)&&(c.receiveShadow=Q.receiveShadow,$.setValue(X,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&Y.environment!==null&&(ht.envMapIntensity.value=Y.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=Nx()),z){if($.setValue(X,"toneMappingExposure",U.toneMappingExposure),c.needsLights&&zl(ht,V),Bt&&j.fog===!0&&Gt.refreshFogUniforms(ht,Bt),Gt.refreshMaterialUniforms(ht,j,dt,lt,L.state.transmissionRenderTarget[P.id]),c.needsLights&&c.lightProbeGrid){let gt=c.lightProbeGrid;ht.probesSH.value=gt.texture,ht.probesMin.value.copy(gt.boundingBox.min),ht.probesMax.value.copy(gt.boundingBox.max),ht.probesResolution.value.copy(gt.resolution)}Gs.upload(X,co(c),ht,rt)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Gs.upload(X,co(c),ht,rt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&$.setValue(X,"center",Q.center),$.setValue(X,"modelViewMatrix",Q.modelViewMatrix),$.setValue(X,"normalMatrix",Q.normalMatrix),$.setValue(X,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let gt=j.uniformsGroups;for(let Wt=0,oe=gt.length;Wt<oe;Wt++){let he=gt[Wt];mt.update(he,S),mt.bind(he,S)}}return S}function zl(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.sunLights.needsUpdate=Y,P.sunLightShadows.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function Vl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(P,Y,it){let j=et.get(P);j.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),et.get(P.texture).__webglTexture=Y,et.get(P.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:it,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Y){let it=et.get(P);it.__webglFramebuffer=Y,it.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,it=0){at=P,K=Y,J=it;let j=null,Q=!1,Bt=!1;if(P){let Ot=et.get(P);if(Ot.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(X.FRAMEBUFFER,Ot.__webglFramebuffer),st.copy(P.viewport),Tt.copy(P.scissor),Et=P.scissorTest,M.viewport(st),M.scissor(Tt),M.setScissorTest(Et),tt=-1;return}else if(Ot.__webglFramebuffer===void 0)rt.setupRenderTarget(P);else if(Ot.__hasExternalTextures)rt.rebindTextures(P,et.get(P.texture).__webglTexture,et.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Lt=P.depthTexture;if(Ot.__boundDepthTexture!==Lt){if(Lt!==null&&et.has(Lt)&&(P.width!==Lt.image.width||P.height!==Lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(P)}}let kt=P.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Bt=!0);let Ht=et.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ht[Y])?j=Ht[Y][it]:j=Ht[Y],Q=!0):P.samples>0&&rt.useMultisampledRTT(P)===!1?j=et.get(P).__webglMultisampledFramebuffer:Array.isArray(Ht)?j=Ht[it]:j=Ht,st.copy(P.viewport),Tt.copy(P.scissor),Et=P.scissorTest}else st.copy(Ft).multiplyScalar(dt).floor(),Tt.copy(te).multiplyScalar(dt).floor(),Et=be;if(it!==0&&(j=H),M.bindFramebuffer(X.FRAMEBUFFER,j)&&M.drawBuffers(P,j),M.viewport(st),M.scissor(Tt),M.setScissorTest(Et),Q){let Ot=et.get(P.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ot.__webglTexture,it)}else if(Bt){let Ot=Y;for(let kt=0;kt<P.textures.length;kt++){let Ht=et.get(P.textures[kt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+kt,Ht.__webglTexture,it,Ot)}}else if(P!==null&&it!==0){let Ot=et.get(P.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ot.__webglTexture,it)}tt=-1};function uo(P){let Y=et.get(P);return(Y.__readFormat!==P.format||Y.__readType!==P.type)&&(Y.__readFormat=P.format,Y.__readType=P.type,Y.__formatReadable=F.textureFormatReadable(P.format),Y.__typeReadable=F.textureTypeReadable(P.type)),Y}this.readRenderTargetPixels=function(P,Y,it,j,Q,Bt,wt,Ot=0){if(!(P&&P.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=et.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&wt!==void 0&&(kt=kt[wt]),kt){M.bindFramebuffer(X.FRAMEBUFFER,kt);try{let Ht=P.textures[Ot],Lt=Ht.format,ce=Ht.type;P.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ot);let zt=uo(Ht);if(zt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-j&&it>=0&&it<=P.height-Q&&X.readPixels(Y,it,j,Q,Rt.convert(Lt),Rt.convert(ce),Bt)}finally{let Ht=at!==null?et.get(at).__webglFramebuffer:null;M.bindFramebuffer(X.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(P,Y,it,j,Q,Bt,wt,Ot=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=et.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&wt!==void 0&&(kt=kt[wt]),kt)if(Y>=0&&Y<=P.width-j&&it>=0&&it<=P.height-Q){M.bindFramebuffer(X.FRAMEBUFFER,kt);let Ht=P.textures[Ot],Lt=Ht.format,ce=Ht.type;P.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ot);let zt=uo(Ht);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ve),X.bufferData(X.PIXEL_PACK_BUFFER,Bt.byteLength,X.STREAM_READ),X.readPixels(Y,it,j,Q,Rt.convert(Lt),Rt.convert(ce),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let De=at!==null?et.get(at).__webglFramebuffer:null;M.bindFramebuffer(X.FRAMEBUFFER,De);let Ae=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Ju(X,Ae,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ve),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Bt),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(ve),X.deleteSync(Ae),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Y=null,it=0){let j=Math.pow(2,-it),Q=Math.floor(P.image.width*j),Bt=Math.floor(P.image.height*j),wt=Y!==null?Y.x:0,Ot=Y!==null?Y.y:0;rt.setTexture2D(P,0),X.copyTexSubImage2D(X.TEXTURE_2D,it,0,0,wt,Ot,Q,Bt),M.unbindTexture()},this.copyTextureToTexture=function(P,Y,it=null,j=null,Q=0,Bt=0){let wt,Ot,kt,Ht,Lt,ce,zt,ve,De,Ae=P.isCompressedTexture?P.mipmaps[Bt]:P.image;if(it!==null)wt=it.max.x-it.min.x,Ot=it.max.y-it.min.y,kt=it.isBox3?it.max.z-it.min.z:1,Ht=it.min.x,Lt=it.min.y,ce=it.isBox3?it.min.z:0;else{let ht=Math.pow(2,-Q);wt=Math.floor(Ae.width*ht),Ot=Math.floor(Ae.height*ht),P.isDataArrayTexture?kt=Ae.depth:P.isData3DTexture?kt=Math.floor(Ae.depth*ht):kt=1,Ht=0,Lt=0,ce=0}j!==null?(zt=j.x,ve=j.y,De=j.z):(zt=0,ve=0,De=0);let r=Rt.convert(Y.format),a=Rt.convert(Y.type),c;Y.isData3DTexture?(rt.setTexture3D(Y,0),c=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(rt.setTexture2DArray(Y,0),c=X.TEXTURE_2D_ARRAY):(rt.setTexture2D(Y,0),c=X.TEXTURE_2D),M.activeTexture(X.TEXTURE0),M.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),M.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),M.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);let d=M.getParameter(X.UNPACK_ROW_LENGTH),x=M.getParameter(X.UNPACK_IMAGE_HEIGHT),S=M.getParameter(X.UNPACK_SKIP_PIXELS),I=M.getParameter(X.UNPACK_SKIP_ROWS),z=M.getParameter(X.UNPACK_SKIP_IMAGES);M.pixelStorei(X.UNPACK_ROW_LENGTH,Ae.width),M.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ae.height),M.pixelStorei(X.UNPACK_SKIP_PIXELS,Ht),M.pixelStorei(X.UNPACK_SKIP_ROWS,Lt),M.pixelStorei(X.UNPACK_SKIP_IMAGES,ce);let V=P.isDataArrayTexture||P.isData3DTexture,$=Y.isDataArrayTexture||Y.isData3DTexture;if(P.isDepthTexture){let ht=et.get(P),ct=et.get(Y),gt=et.get(ht.__renderTarget),Wt=et.get(ct.__renderTarget);M.bindFramebuffer(X.READ_FRAMEBUFFER,gt.__webglFramebuffer),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let oe=0;oe<kt;oe++)V&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,et.get(P).__webglTexture,Q,ce+oe),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,et.get(Y).__webglTexture,Bt,De+oe)),X.blitFramebuffer(Ht,Lt,wt,Ot,zt,ve,wt,Ot,X.DEPTH_BUFFER_BIT,X.NEAREST);M.bindFramebuffer(X.READ_FRAMEBUFFER,null),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(Q!==0||P.isRenderTargetTexture||et.has(P)){let ht=et.get(P),ct=et.get(Y);M.bindFramebuffer(X.READ_FRAMEBUFFER,B),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,W);for(let gt=0;gt<kt;gt++)V?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ht.__webglTexture,Q,ce+gt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ht.__webglTexture,Q),$?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ct.__webglTexture,Bt,De+gt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ct.__webglTexture,Bt),Q!==0?X.blitFramebuffer(Ht,Lt,wt,Ot,zt,ve,wt,Ot,X.COLOR_BUFFER_BIT,X.NEAREST):$?X.copyTexSubImage3D(c,Bt,zt,ve,De+gt,Ht,Lt,wt,Ot):X.copyTexSubImage2D(c,Bt,zt,ve,Ht,Lt,wt,Ot);M.bindFramebuffer(X.READ_FRAMEBUFFER,null),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else $?P.isDataTexture||P.isData3DTexture?X.texSubImage3D(c,Bt,zt,ve,De,wt,Ot,kt,r,a,Ae.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(c,Bt,zt,ve,De,wt,Ot,kt,r,Ae.data):X.texSubImage3D(c,Bt,zt,ve,De,wt,Ot,kt,r,a,Ae):P.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Bt,zt,ve,wt,Ot,r,a,Ae.data):P.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Bt,zt,ve,Ae.width,Ae.height,r,Ae.data):X.texSubImage2D(X.TEXTURE_2D,Bt,zt,ve,wt,Ot,r,a,Ae);M.pixelStorei(X.UNPACK_ROW_LENGTH,d),M.pixelStorei(X.UNPACK_IMAGE_HEIGHT,x),M.pixelStorei(X.UNPACK_SKIP_PIXELS,S),M.pixelStorei(X.UNPACK_SKIP_ROWS,I),M.pixelStorei(X.UNPACK_SKIP_IMAGES,z),Bt===0&&Y.generateMipmaps&&X.generateMipmap(c),M.unbindTexture()},this.initRenderTarget=function(P){et.get(P).__webglFramebuffer===void 0&&rt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?rt.setTextureCube(P,0):P.isData3DTexture?rt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?rt.setTexture2DArray(P,0):rt.setTexture2D(P,0),M.unbindTexture()},this.resetState=function(){K=0,J=0,at=null,M.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var Nf={type:"change"},Sh={type:"start"},Of={type:"end"},xl=new Hn,Ff=new xi,Ox=Math.cos(70*Zr.DEG2RAD),ke=new k,di=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bh=1e-6,yl=class extends Ur{constructor(t,e=null){super(t,e),this.state=Te.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tn.ROTATE,MIDDLE:Tn.DOLLY,RIGHT:Tn.PAN},this.touches={ONE:En.ROTATE,TWO:En.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new vi,this._lastTargetPosition=new k,this._quat=new vi().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fs,this._sphericalDelta=new Fs,this._scale=1,this._panOffset=new k,this._rotateStart=new _t,this._rotateEnd=new _t,this._rotateDelta=new _t,this._panStart=new _t,this._panEnd=new _t,this._panDelta=new _t,this._dollyStart=new _t,this._dollyEnd=new _t,this._dollyDelta=new _t,this._dollyDirection=new k,this._mouse=new _t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ux.bind(this),this._onPointerDown=Bx.bind(this),this._onPointerUp=kx.bind(this),this._onContextMenu=Yx.bind(this),this._onMouseWheel=Gx.bind(this),this._onKeyDown=Hx.bind(this),this._onTouchStart=Xx.bind(this),this._onTouchMove=Wx.bind(this),this._onMouseDown=zx.bind(this),this._onMouseMove=Vx.bind(this),this._interceptControlDown=qx.bind(this),this._interceptControlUp=$x.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Te.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nf),this.update(),this.state=Te.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;ke.copy(e).sub(this.target),ke.applyQuaternion(this._quat),this._spherical.setFromVector3(ke),this.autoRotate&&this.state===Te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=di:n>Math.PI&&(n-=di),s<-Math.PI?s+=di:s>Math.PI&&(s-=di),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(ke.setFromSpherical(this._spherical),ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){let h=ke.length();l=this._clampDistance(h*this._scale);let u=h-l;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),o=!!u}else if(this.object.isOrthographicCamera){let h=new k(this._mouse.x,this._mouse.y,0);h.unproject(this.object);let u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=u!==this.object.zoom;let f=new k(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(h),this.object.updateMatrixWorld(),l=ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(xl.origin.copy(this.object.position),xl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xl.direction))<Ox?this.object.lookAt(this.target):(Ff.setFromNormalAndCoplanarPoint(this.object.up,this.target),xl.intersectPlane(Ff,this.target))))}else if(this.object.isOrthographicCamera){let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bh||this._lastTargetPosition.distanceToSquared(this.target)>bh?(this.dispatchEvent(Nf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?di/60*this.autoRotateSpeed*t:di/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ke.setFromMatrixColumn(e,0),ke.multiplyScalar(-t),this._panOffset.add(ke)}_panUp(t,e){this.screenSpacePanning===!0?ke.setFromMatrixColumn(e,1):(ke.setFromMatrixColumn(e,0),ke.crossVectors(this.object.up,ke)),ke.multiplyScalar(t),this._panOffset.add(ke)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ke.copy(s).sub(this.target);let o=ke.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,l=n.width,h=n.height;this._mouse.x=s/l*2-1,this._mouse.y=-(o/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(di*this._rotateDelta.x/e.clientHeight),this._rotateUp(di*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(di*this._rotateDelta.x/e.clientHeight),this._rotateUp(di*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let l=(t.pageX+e.x)*.5,h=(t.pageY+e.y)*.5;this._updateZoomParameters(l,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new _t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Bx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Ux(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function kx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Of),this.state=Te.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function zx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Tn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Te.DOLLY;break;case Tn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}break;case Tn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(Sh)}function Vx(i){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Gx(i){this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE||(i.preventDefault(),this.dispatchEvent(Sh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Of))}function Hx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Xx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case En.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Te.TOUCH_ROTATE;break;case En.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case En.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Te.TOUCH_DOLLY_PAN;break;case En.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(Sh)}function Wx(i){switch(this._trackPointer(i),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Te.NONE}}function Yx(i){this.enabled!==!1&&i.preventDefault()}function qx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $x(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Bf=new bi,vl=new k,Xs=class extends Fr{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ge(t,3)),this.setAttribute("uv",new ge(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new wn(e,6,1);return this.setAttribute("instanceStart",new Ei(n,3,0)),this.setAttribute("instanceEnd",new Ei(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new wn(e,6,1);return this.setAttribute("instanceColorStart",new Ei(n,3,0)),this.setAttribute("instanceColorEnd",new Ei(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Pr(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Bf.setFromBufferAttribute(e),this.boundingBox.union(Bf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let o=0,l=t.count;o<l;o++)vl.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(vl)),vl.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(vl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ct.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new _t},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};oi.line={uniforms:Jr.merge([Ct.common,Ct.fog,Ct.line]),vertexShader:`
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
		`};var Ws=class extends ri{constructor(t){super({type:"LineMaterial",uniforms:Jr.clone(oi.line.uniforms),vertexShader:oi.line.vertexShader,fragmentShader:oi.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Mh=new Me,Uf=new k,kf=new k,We=new Me,Ye=new Me,$i=new Me,wh=new k,Th=new _e,qe=new Br,zf=new k,bl=new bi,Sl=new Wi,Zi=new Me,Ji,jn;function Vf(i,t,e){return Zi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Zi.multiplyScalar(1/Zi.w),Zi.x=jn/e.width,Zi.y=jn/e.height,Zi.applyMatrix4(i.projectionMatrixInverse),Zi.multiplyScalar(1/Zi.w),Math.abs(Math.max(Zi.x,Zi.y))}function Zx(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,o=n.attributes.instanceEnd,l=Math.min(n.instanceCount,s.count);for(let h=0,u=l;h<u;h++){qe.start.fromBufferAttribute(s,h),qe.end.fromBufferAttribute(o,h),qe.applyMatrix4(e);let f=new k,p=new k;Ji.distanceSqToSegment(qe.start,qe.end,p,f),p.distanceTo(f)<jn*.5&&t.push({point:p,pointOnLine:f,distance:Ji.origin.distanceTo(p),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}function Jx(i,t,e){let n=t.projectionMatrix,o=i.material.resolution,l=i.matrixWorld,h=i.geometry,u=h.attributes.instanceStart,f=h.attributes.instanceEnd,p=Math.min(h.instanceCount,u.count),_=-t.near;Ji.at(1,$i),$i.w=1,$i.applyMatrix4(t.matrixWorldInverse),$i.applyMatrix4(n),$i.multiplyScalar(1/$i.w),$i.x*=o.x/2,$i.y*=o.y/2,$i.z=0,wh.copy($i),Th.multiplyMatrices(t.matrixWorldInverse,l);for(let m=0,g=p;m<g;m++){if(We.fromBufferAttribute(u,m),Ye.fromBufferAttribute(f,m),We.w=1,Ye.w=1,We.applyMatrix4(Th),Ye.applyMatrix4(Th),We.z>_&&Ye.z>_)continue;if(We.z>_){let C=We.z-Ye.z,T=(We.z-_)/C;We.lerp(Ye,T)}else if(Ye.z>_){let C=Ye.z-We.z,T=(Ye.z-_)/C;Ye.lerp(We,T)}We.applyMatrix4(n),Ye.applyMatrix4(n),We.multiplyScalar(1/We.w),Ye.multiplyScalar(1/Ye.w),We.x*=o.x/2,We.y*=o.y/2,Ye.x*=o.x/2,Ye.y*=o.y/2,qe.start.copy(We),qe.start.z=0,qe.end.copy(Ye),qe.end.z=0;let w=qe.closestPointToPointParameter(wh,!0);qe.at(w,zf);let y=Zr.lerp(We.z,Ye.z,w),v=y>=-1&&y<=1,A=wh.distanceTo(zf)<jn*.5;if(v&&A){qe.start.fromBufferAttribute(u,m),qe.end.fromBufferAttribute(f,m),qe.start.applyMatrix4(l),qe.end.applyMatrix4(l);let C=new k,T=new k;Ji.distanceSqToSegment(qe.start,qe.end,T,C),e.push({point:T,pointOnLine:C,distance:Ji.origin.distanceTo(T),object:i,face:null,faceIndex:m,uv:null,uv1:null})}}}var Ml=class extends Re{constructor(t=new Xs,e=new Ws({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let l=0,h=0,u=e.count;l<u;l++,h+=2)Uf.fromBufferAttribute(e,l),kf.fromBufferAttribute(n,l),s[h]=h===0?0:s[h-1],s[h+1]=s[h]+Uf.distanceTo(kf);let o=new wn(s,2,1);return t.setAttribute("instanceDistanceStart",new Ei(o,1,0)),t.setAttribute("instanceDistanceEnd",new Ei(o,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let o=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Ji=t.ray;let l=this.matrixWorld,h=this.geometry,u=this.material;jn=u.linewidth+o,h.boundingSphere===null&&h.computeBoundingSphere(),Sl.copy(h.boundingSphere).applyMatrix4(l);let f;if(n)f=jn*.5;else{let _=Math.max(s.near,Sl.distanceToPoint(Ji.origin));f=Vf(s,_,u.resolution)}if(Sl.radius+=f,Ji.intersectsSphere(Sl)===!1)return;h.boundingBox===null&&h.computeBoundingBox(),bl.copy(h.boundingBox).applyMatrix4(l);let p;if(n)p=jn*.5;else{let _=Math.max(s.near,bl.distanceToPoint(Ji.origin));p=Vf(s,_,u.resolution)}bl.expandByScalar(p),Ji.intersectsBox(bl)!==!1&&(n?Zx(this,e):Jx(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Mh),this.material.uniforms.resolution.value.set(Mh.z,Mh.w))}};function Eh(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},l={},h=i[0].morphTargetsRelative,u=new Ne,f=0;for(let p=0;p<i.length;++p){let _=i[p],m=0;if(e!==(_.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in _.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(_.attributes[g]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". Make sure all geometries have the same number of attributes."),null;if(h!==_.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in _.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+".  .morphAttributes must be consistent throughout all geometries."),null;l[g]===void 0&&(l[g]=[]),l[g].push(_.morphAttributes[g])}if(t){let g;if(e)g=_.index.count;else if(_.attributes.position!==void 0)g=_.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". The geometry must have either an index or a position attribute"),null;u.addGroup(f,g,p),f+=g}}if(e){let p=0,_=[];for(let m=0;m<i.length;++m){let g=i[m].index;for(let b=0;b<g.count;++b)_.push(g.getX(b)+p);p+=i[m].attributes.position.count}u.setIndex(_)}for(let p in o){let _=Gf(o[p]);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" attribute."),null;u.setAttribute(p,_)}for(let p in l){let _=l[p][0].length;if(_!==0){u.morphAttributes=u.morphAttributes||{},u.morphAttributes[p]=[];for(let m=0;m<_;++m){let g=[];for(let w=0;w<l[p].length;++w)g.push(l[p][w][m]);let b=Gf(g);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" morphAttribute."),null;u.morphAttributes[p].push(b)}}}return u}function Gf(i){let t,e,n,s=-1,o=0;for(let f=0;f<i.length;++f){let p=i[f];if(t===void 0&&(t=p.array.constructor),t!==p.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=p.itemSize),e!==p.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=p.normalized),n!==p.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=p.gpuType),s!==p.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=p.count*e}let l=new t(o),h=new ni(l,e,n),u=0;for(let f=0;f<i.length;++f){let p=i[f];if(p.isInterleavedBufferAttribute){let _=u/e;for(let m=0,g=p.count;m<g;m++)for(let b=0;b<e;b++){let w=p.getComponent(m,b);h.setComponent(m+_,b,w)}}else l.set(p.array,u);u+=p.count*e}return s!==void 0&&(h.gpuType=s),h}var ai=gd(Hf(),1),cn=1e3,{ClipType:Ln,PolyType:Xf,PolyFillType:Wf,JoinType:Kx,EndType:jx}=ai.default,Dn=.24,Qx=.06,ty={n:[0,-1],s:[0,1],w:[-1,0],e:[1,0]};function li(i){let t=1/0,e=1/0,n=-1/0,s=-1/0;for(let[o,l]of i)o<t&&(t=o),l<e&&(e=l),o>n&&(n=o),l>s&&(s=l);return{x0:t,y0:e,x1:n,y1:s}}function Nn(i){if(i.points)return i.points;if(i.rect){let[t,e,n,s]=i.rect;return[[t,e],[n,e],[n,s],[t,s]]}throw new Error(`Room "${i.name||i.id}" needs "rect" or "points"`)}function Tl(i){let t=i.map(([e,n])=>({X:Math.round(e*cn),Y:Math.round(n*cn)}));return ai.default.Clipper.Orientation(t)||t.reverse(),t}var Ah=i=>i.map(t=>[t.X/cn,t.Y/cn]);function Ys(i,t,e,n){return Tl([[i,t],[e,t],[e,n],[i,n]])}function to(i,t){let e=new ai.default.ClipperOffset(4,.25);e.AddPaths(i,Kx.jtMiter,jx.etClosedPolygon);let n=new ai.default.Paths;return e.Execute(n,t*cn),n}function Qn(i,t,e){let n=new ai.default.Clipper;n.AddPaths(t,Xf.ptSubject,!0),e&&e.length&&n.AddPaths(e,Xf.ptClip,!0);let s=new ai.default.PolyTree;return n.Execute(i,s,Wf.pftNonZero,Wf.pftNonZero),s}function Yf(i,t,e){return ai.default.Clipper.PolyTreeToPaths(Qn(i,t,e))}function qf(i){return ai.default.Clipper.CleanPolygons(i,2).filter(t=>t.length>=3&&Math.abs(ai.default.Clipper.Area(t))>400)}function qs(i){return ai.default.JS.PolyTreeToExPolygons(i).map(t=>({o:Ah(t.outer),h:t.holes.map(Ah)})).filter(t=>t.o.length>=3)}function $f(i,t,e){let n=0,s={X:Math.round(t*cn),Y:Math.round(e*cn)};for(let o of i)ai.default.Clipper.PointInPolygon(s,o)!==0&&n++;return n%2===1}function Zf(i,t,e){let n=[Ys(0,0,i,t)],s=e.map(o=>Ys(o.u0,o.v0,o.u1,o.v1));return qs(Qn(Ln.ctDifference,n,s))}function El(i){let t=i.rooms.map(m=>({room:m,pts:Nn(m)})),e=t.map(m=>Tl(m.pts)),n=qf(to(to(e,.08),-.08)),s=qf(to(n,Dn)),o=[];for(let m of e)o.push(...to([m],-Qx));let l=Qn(Ln.ctDifference,s,o),h=ai.default.Clipper.PolyTreeToPaths(l),u=[],f=[],p=[];for(let m of i.openings||[]){let g=t.find(W=>W.room.id===m.room);if(!g){u.push(`Opening "${m.name||m.kind}" points at room "${m.room}", which does not exist on ${i.name||i.id}.`);continue}let b=ty[m.wall];if(!b){u.push(`Opening "${m.name||m.kind}" in ${g.room.name}: "wall" must be n, s, e or w.`);continue}let w=li(g.pts),y=m.at,v=m.width,A={n:[y,w.y0-.5,y+v,w.y0+.25],s:[y,w.y1-.25,y+v,w.y1+.5],w:[w.x0-.5,y,w.x0+.25,y+v],e:[w.x1-.25,y,w.x1+.5,y+v]}[m.wall],C=Ys(...A),T=Yf(Ln.ctIntersection,[C],h);if(!T.length){u.push(`${m.name||m.kind} in ${g.room.name}: no wall found at ${m.at} m on the ${m.wall} side.`);continue}let R=b[0]===0,L=v*.3,O=R?Ys(A[0]+L,A[1],A[2]-L,A[3]):Ys(A[0],A[1]+L,A[2],A[3]-L),E=Yf(Ln.ctIntersection,[O],h),D=li((E.length?E:T).flatMap(Ah)),U=R?{x0:y,x1:y+v,y0:D.y0,y1:D.y1}:{x0:D.x0,x1:D.x1,y0:y,y1:y+v},N=(U.x0+U.x1)/2,G=(U.y0+U.y1)/2,H=!$f(n,N+b[0]*.45,G+b[1]*.45),B=m.kind||"door";["window","bifold","garage","frontdoor","extdoor"].includes(B)&&!H&&u.push(`${m.name||B} in ${g.room.name} is on an inside wall (${m.wall} side). Windows and outside doors need an outside wall.`),["door","opening"].includes(B)&&H&&u.push(`A plain door in ${g.room.name} (${m.wall} side) opens to the outside. Use kind "extdoor" or "frontdoor" if that is right.`),f.push({...m,kind:B,b:[U.x0,U.y0,U.x1,U.y1],n:b,ext:H,rect:A}),B==="opening"&&p.push(C)}let _=p.length?Qn(Ln.ctDifference,h,p):l;return{inside:n,rooms:t,slab:qs(Qn(Ln.ctUnion,s,[])),solid:qs(_),openings:f,warnings:u,isInside:(m,g)=>$f(n,m,g),roomAt:(m,g)=>{for(let b=0;b<e.length;b++)if(ai.default.Clipper.PointInPolygon({X:Math.round(m*cn),Y:Math.round(g*cn)},e[b])!==0)return t[b].room;return null},cap:m=>m.length?qs(Qn(Ln.ctDifference,ai.default.Clipper.PolyTreeToPaths(_),m.map(g=>Ys(...g.rect)))):qs(_)}}function Jf(i,t,e){let n=t.map(s=>Tl(s.o.map(([o,l])=>[o+e[0],l+e[1]])));return qs(Qn(Ln.ctDifference,i.map(s=>Tl(s.o)),to(n,.02)))}var ey={living:{wall:"#F78FB3",floor:"#9C8CE8",pattern:"plain"},kitchen:{wall:"#7FD8BE",floor:"#FFD93B",floor2:"#FFF8D6",pattern:"check"},dining:{wall:"#FFC857",floor:"#DE8F4E",floor2:"#C97A3B",pattern:"wood"},hall:{wall:"#FFE27A",floor:"#DE8F4E",floor2:"#C97A3B",pattern:"wood"},bath:{wall:"#6FD3F5",floor:"#FFFFFF",floor2:"#8FDDF7",pattern:"check"},bedroom:[{wall:"#8FC4FA",floor:"#F9BFD8",pattern:"plain"},{wall:"#F9A8CB",floor:"#B7E4A6",pattern:"plain"},{wall:"#B4E68E",floor:"#FAD592",pattern:"plain"},{wall:"#CDB1F7",floor:"#FBE59A",pattern:"plain"}],study:{wall:"#A6DE83",floor:"#DE8F4E",floor2:"#C97A3B",pattern:"wood"},utility:{wall:"#BCE3F7",floor:"#E9EDF2",floor2:"#C3CCD6",pattern:"check"},garage:{wall:"#D9D9E3",floor:"#C2C4CF",floor2:"#B3B5C1",pattern:"tile"},stairs:{wall:"#FFE27A",floor:"#DE8F4E",floor2:"#C97A3B",pattern:"wood"},store:{wall:"#E3D2F7",floor:"#D9C7A8",pattern:"plain"},other:{wall:"#FCE3B8",floor:"#F3D9A4",pattern:"plain"}},iy={living:{wall:"#F6E7CF",floor:"#F0BE96",pattern:"plain"},kitchen:{wall:"#F3F0E4",floor:"#F7E08C",floor2:"#FBF1C4",pattern:"check"},dining:{wall:"#F6E7CF",floor:"#D99A62",floor2:"#C98850",pattern:"wood"},hall:{wall:"#F3ECE0",floor:"#D5C6F2",pattern:"plain"},bath:{wall:"#E4F3F8",floor:"#FFFFFF",floor2:"#B5E1EE",pattern:"check"},bedroom:[{wall:"#EEF2F8",floor:"#C6D8F7",pattern:"plain"},{wall:"#F8EEF2",floor:"#F5C3DA",pattern:"plain"},{wall:"#F0F6EA",floor:"#C9E7B3",pattern:"plain"},{wall:"#F8F2E4",floor:"#FFD9A6",pattern:"plain"}],study:{wall:"#EEF5E6",floor:"#BFE4A9",pattern:"plain"},utility:{wall:"#F1F1F1",floor:"#EADFC8",pattern:"plain"},garage:{wall:"#E2E2E2",floor:"#D0D0D0",floor2:"#C2C2C2",pattern:"tile"},stairs:{wall:"#F3ECE0",floor:"#D99A62",floor2:"#C98850",pattern:"wood"},store:{wall:"#F1EBE0",floor:"#E6E0D2",pattern:"plain"},other:{wall:"#FFF3D6",floor:"#EEE4CF",pattern:"plain"}},eo={toon:{sky:"#6CCBFA",cloud:"#FFFFFF",sun:"#FFDD33",ink:"#1b1b1b",lawn:"#62CE3C",lawn2:"#56C232",earth:"#B57E4E",drive:"#CFC6E0",drive2:"#BDB3D1",path:"#F0E2BF",patio:"#F4D9A8",patio2:"#E6C68E",road:"#807C90",kerb:"#DAD7E3",fence:"#E9A85C",fencePost:"#C98238",hedge:"#3FB03A",leaf:["#3FB03A","#56C245","#2F9E44"],blossom:"#E64980",trunk:"#9A5B34",flowers:["#FF5D8F","#FFD23F","#FFFFFF","#B197FC"],exterior:"#F9B58B",exteriorPattern:null,exterior2:"#F0A377",trim:"#FFFFFF",roof:"#C4513A",roof2:"#A8432F",roofPattern:"rooftile",chimney:"#D9744F",door:"#7A4FC4",doorInner:"#FFF7E6",knob:"#FFD23F",garage:"#FFF0D6",garage2:"#E5C9A0",wallCut:"#FFFDF4",inner:"#FCE3B8",slab:"#8C6A4A",glass:"#BDEBFF",curtain:"#9B6BE0",shutter:"#DDE4EA",shutter2:"#8793A0",shutterBox:"#8793A0",wood:"#9A5B34",woodLight:"#DBA15B",steel:"#C3CAD2",white:"#FBFBFB",water:"#9FE3FA",sofa:"#E07B2E",sofaDark:"#BE6220",duvet:["#5BA8F5","#F58FB7","#7FD069","#F5C24B"],rug:"#F2645A",cabinet:"#59B9E0",worktop:"#FFF4DC",tvUnit:"#6C56A8",fridge:"#D5F0F5",plant:"#3FB03A",pot:"#D9744F",dark:"#2B2F3A",planned:"#C4C4C4",bulbOn:"#FFE033",heat:"#FF8A3D",ok:"#69D14A",bad:"#FF5C5C",play:"#B79CFF",screen:"#7FD9FF",rooms:ey,shade:[165,255]},brick:{sky:"#8FD3FF",cloud:"#FFFFFF",sun:"#FFD83A",ink:"#1b1b1b",lawn:"#7CC53F",lawn2:"#6DB634",earth:"#9A7448",drive:"#DDA98A",drive2:"#CC9778",path:"#E7D8BC",patio:"#E7D8BC",patio2:"#D8C7A6",road:"#70737C",kerb:"#C9CBD1",fence:"#C98E4E",fencePost:"#8A5A3C",hedge:"#3F9A35",leaf:["#3F9A35","#4FB03F","#2F8A3A"],blossom:"#A3243B",trunk:"#8A5A3C",flowers:["#E64980","#FFD23F","#FFFFFF","#9775FA"],exterior:"#D2603F",exteriorPattern:"brick",exterior2:"#B94E30",trim:"#FFFFFF",roof:"#4B4F5A",roof2:"#3A3D46",roofPattern:"rooftile",chimney:"#B94E30",door:"#2F5D8C",doorInner:"#FFFFFF",knob:"#D9D9D9",garage:"#F4F4F4",garage2:"#CFCFCF",wallCut:"#FFFDF4",inner:"#FFF3D6",slab:"#7A6652",glass:"#BDE8FF",curtain:"#E6DCC8",shutter:"#D9E0E6",shutter2:"#7d8a94",shutterBox:"#8B949C",wood:"#8A5A3C",woodLight:"#C9A063",steel:"#B9BEC5",white:"#F6F6F6",water:"#BFE9FF",sofa:"#E8734A",sofaDark:"#C95A33",duvet:["#A5C8F5","#F5B5D6","#C9E7B3","#FFD9A6"],rug:"#F2D8A0",cabinet:"#F3F3F3",worktop:"#B9BEC5",tvUnit:"#8A5A3C",fridge:"#B9BEC5",plant:"#3F9A35",pot:"#B94E30",dark:"#2B2F33",planned:"#BDBDBD",bulbOn:"#FFE033",heat:"#FF8A3D",ok:"#7CC44A",bad:"#FF6B6B",play:"#B79CFF",screen:"#7FD0FF",rooms:iy,shade:[150,255]}};function Al(i,t){let e=eo[i]||eo.toon;return{...e,...t||{},rooms:{...e.rooms,...t&&t.rooms||{}}}}var ny=[["stairs",/stair/i],["garage",/garage|carport/i],["kitchen",/kitchen/i],["dining",/dining|breakfast/i],["bath",/bath|ensuite|en-suite|shower|wc|toilet|cloak|wet room/i],["bedroom",/bed|nursery|guest/i],["living",/living|lounge|sitting|family|snug|tv room|den/i],["study",/study|office|play|games|gym|library/i],["utility",/utility|laundry|boot|pantry/i],["hall",/hall|landing|porch|entrance|lobby|corridor/i],["store",/store|robe|wardrobe|closet|cupboard|loft|attic/i]];function sy(i){if(i.type)return i.type;let t=`${i.name||""} ${i.id||""}`;for(let[e,n]of ny)if(n.test(t))return e;return"other"}function Cl(i,t,e){let n=sy(t),s=i.rooms[n]||i.rooms.other;return Array.isArray(s)&&(s=s[e%s.length]),{type:n,wall:t.wall_colour||s.wall,floor:t.floor_colour||s.floor,floor2:t.floor_colour2||s.floor2||null,pattern:t.pattern||(t.floor_colour?"plain":s.pattern)}}function ry(i,t){let e=parseInt(i.slice(1),16),n=s=>Math.max(0,Math.min(255,Math.round(s*t)));return`rgb(${n(e>>16)},${n(e>>8&255)},${n(e&255)})`}var Ch={check:1,wood:1.2,tile:1,brick:.9,rooftile:.42,stripes:3.2,paving:1.2,planks:.5};function Kf(i,t,e){let n=document.createElement("canvas"),s=128;n.width=n.height=s;let o=n.getContext("2d");switch(e=e||ry(t,.86),o.fillStyle=t,o.fillRect(0,0,s,s),o.fillStyle=e,o.strokeStyle=e,o.lineWidth=4,i){case"check":o.fillRect(0,0,s/2,s/2),o.fillRect(s/2,s/2,s/2,s/2);break;case"wood":for(let l=0;l<4;l++)o.fillRect(0,l*32,s,3),o.fillRect((l*53+20)%s,l*32,3,32);break;case"tile":o.fillRect(0,0,s,3),o.fillRect(0,0,3,s),o.fillRect(0,s/2,s,3),o.fillRect(s/2,0,3,s);break;case"brick":case"paving":for(let l=0;l<4;l++){o.fillRect(0,l*32,s,4);for(let h=l%2*32;h<s;h+=64)o.fillRect(h,l*32,4,32)}break;case"rooftile":o.fillRect(0,s-10,s,10);for(let l=0;l<s;l+=32)o.fillRect(l,0,3,s);break;case"stripes":o.fillRect(0,0,s,s/2);break;case"planks":o.fillRect(0,0,5,s),o.fillRect(s/2,0,5,s);break;default:}return n}var oy={sofa:[2.2,.95,.85],sofa_l:[2.6,1.8,.85],armchair:[.95,.9,.85],tv_board:[1.8,.42,.5],coffee_table:[1.1,.6,.45],rug:[2,1.4,.02],table:[1.8,.9,.76],chair:[.46,.5,.9],stool:[.45,.45,.44],sideboard:[1.4,.45,.85],shelf:[.9,.35,1.8],desk:[1.3,.65,.75],kitchen:[2.4,.62,.92],worktop:[2,.9,.92],sink:[.9,.62,.92],stove:[.6,.62,.92],fridge:[.6,.65,1.8],washer:[.6,.6,.85],bed:[1.6,2.05,.9],single_bed:[.9,2,.9],wardrobe:[1.8,.6,2.1],bedside:[.45,.4,.55],bathtub:[1.7,.75,.58],wc:[.38,.6,.8],washbasin:[.6,.46,.85],shower:[.9,.9,2],plant:[.45,.45,1.1],car:[1.8,4.2,1.45]};function jf(i,t,e=0){let n=oy[i.type]||[.6,.6,.6],s=i.w||n[0],o=i.d||n[1],l=i.h||n[2],h=[],u=(p,_,m)=>{for(let g of[-1,1])for(let b of[-1,1])h.push([g*(s/2-_),b*(o/2-_),_,_,0,p,m])},f=Array.isArray(t.duvet)?t.duvet[e%t.duvet.length]:t.duvet;switch(i.type){case"sofa":case"sofa_l":case"armchair":h.push([0,.08,s,o-.16,.12,.45,t.sofa],[0,-o/2+.14,s,.28,.12,.88,t.sofaDark],[-s/2+.12,.08,.24,o-.16,.45,.66,t.sofaDark],[s/2-.12,.08,.24,o-.16,.45,.66,t.sofaDark]);break;case"tv_board":h.push([0,0,s,o,0,l,t.tvUnit]);break;case"coffee_table":h.push([0,0,s,o,.36,.45,t.woodLight]),u(.36,.07,t.wood);break;case"rug":h.push([0,0,s,o,.03,.06,t.rug]);break;case"table":case"desk":h.push([0,0,s,o,l-.07,l,t.woodLight]),u(l-.07,.08,t.wood);break;case"chair":h.push([0,0,s,o,.4,.47,t.wood],[0,-o/2+.03,s,.06,.47,l,t.wood]),u(.4,.05,t.wood);break;case"stool":h.push([0,0,s,o,.36,.44,t.wood,"cyl"],[0,0,.1,.1,0,.36,t.steel,"cyl"]);break;case"sideboard":h.push([0,0,s,o,.06,l,t.wood]);break;case"shelf":case"wardrobe":case"bedside":h.push([0,0,s,o,0,l,t.woodLight]);break;case"fridge":h.push([0,0,s,o,0,l,t.fridge]);break;case"washer":h.push([0,0,s,o,0,l,t.white],[0,o/2,.36,.04,.25,.61,t.steel]);break;case"kitchen":case"worktop":h.push([0,0,s,o,0,l-.05,t.cabinet],[0,0,s+.04,o+.04,l-.05,l,t.worktop]);break;case"sink":h.push([0,0,s,o,0,l-.05,t.cabinet],[0,0,s+.04,o+.04,l-.05,l,t.worktop],[0,0,s-.3,o-.24,l,l+.02,t.water]);break;case"stove":h.push([0,0,s,o,0,l-.05,t.white],[0,0,s+.04,o+.04,l-.05,l,t.dark]);for(let p of[-1,1])for(let _ of[-1,1])h.push([p*.14,_*.14,.18,.18,l,l+.02,t.bad,"cyl"]);break;case"bed":case"single_bed":h.push([0,0,s,o,.12,.36,t.wood],[0,.06,s-.06,o-.16,.36,.56,f],[0,-o/2+.05,s,.1,0,1,t.wood]),s>1.2?h.push([-s/4,-o/2+.38,s/2-.16,.4,.56,.68,t.white],[s/4,-o/2+.38,s/2-.16,.4,.56,.68,t.white]):h.push([0,-o/2+.38,s-.2,.4,.56,.68,t.white]);break;case"bathtub":h.push([0,0,s,o,0,l,t.white],[0,0,s-.2,o-.2,l,l+.02,t.water]);break;case"wc":h.push([0,-o/2+.1,s+.06,.2,0,.8,t.white],[0,.1,s,s,0,.42,t.white,"cyl"]);break;case"washbasin":h.push([0,-.05,.2,.2,0,.72,t.white],[0,0,s,o,.72,l,t.white],[0,.02,s-.2,o-.18,l,l+.02,t.water]);break;case"shower":h.push([0,0,s,o,0,.1,t.white],[0,0,s-.06,o-.06,.1,1.95,"glass"]);break;case"plant":h.push([0,0,s*.7,s*.7,0,.35,t.pot,"cyl"],[0,0,s,s,.55,.55+s,t.plant,"ball"],[0,0,s*.75,s*.75,.9,.9+s*.75,t.plant,"ball"]);break;case"car":{let p=i.colour||"#E8483F";h.push([0,0,s,o,.3,.8,p],[0,.15,s-.16,o*.5,.8,l,p],[0,.15,s-.12,o*.5-.3,.86,l-.1,"glass"]);for(let _ of[-1,1])for(let m of[-1,1])h.push([_*(s/2-.05),m*(o/2-.8),.66,.24,0,.66,t.dark,"wheel"]);break}default:h.push([0,0,s,o,0,l,t.planned])}return h}function Pl(i){return String(i||"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")}function ay(i){let t=new Set,e=(i.floors||[]).flatMap(s=>s.devices||[]);for(let s of e)s.id&&t.add(String(s.id));let n=0;for(let s of e){if(s.id)continue;let o=Pl(s.name)||`${s.kind||"device"}_${++n}`,l=o,h=2;for(;t.has(l);)l=`${o}_${h++}`;t.add(l),s.id=l}return i}var Qf=["x","y","room","wall","at"];function io(i,t){let e=i.floors||[];if(e.forEach((n,s)=>{n.id=n.id||`floor${s}`}),ay(i),!t||typeof t!="object"||Array.isArray(t))return i;for(let[n,s]of Object.entries(t)){let o=null;for(let u of e){let f=(u.devices||[]).findIndex(p=>p.id===n);if(f>=0){o={f:u,i:f};break}}if(s===null){o&&o.f.devices.splice(o.i,1);continue}if(!s||typeof s!="object")continue;let{floor:l,...h}=s;if(o){let u=o.f.devices[o.i];if(Qf.some(p=>h[p]!=null))for(let p of Qf)delete u[p];Object.assign(u,h);let f=l&&l!==o.f.id?e.find(p=>p.id===l):null;f&&(o.f.devices.splice(o.i,1),(f.devices=f.devices||[]).push(u))}else if(h.kind){let u=e.find(f=>f.id===l)||e[0];u&&(u.devices=u.devices||[]).push({id:n,entity:null,...h})}}return i}var td="data:font/woff2;base64,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";var ed="data:font/woff2;base64,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";var Il='"Toon House","Trebuchet MS","Segoe UI",system-ui,sans-serif';function Rl(){if(document.getElementById("toon-house-font"))return;let i=document.createElement("style");i.id="toon-house-font",i.textContent=`@font-face{font-family:"Toon House";src:url(${td}) format("woff2");font-weight:500;font-display:swap}@font-face{font-family:"Toon House";src:url(${ed}) format("woff2");font-weight:700 900;font-display:swap}`,document.head.appendChild(i)}var $e="#1b1b1b",Yt=(i,t="0 0 32 32")=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" aria-hidden="true"><g fill="none" stroke="${$e}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${i}</g></svg>`;function Ll(i="happy"){let t={happy:`<circle cx="42" cy="66" r="7" fill="#fff"/><circle cx="78" cy="66" r="7" fill="#fff"/><circle class="pupil" cx="43.5" cy="67" r="3" fill="${$e}" stroke="none"/><circle class="pupil" cx="79.5" cy="67" r="3" fill="${$e}" stroke="none"/>`,wow:`<circle cx="42" cy="65" r="8.5" fill="#fff"/><circle cx="78" cy="65" r="8.5" fill="#fff"/><circle cx="42" cy="65" r="3.4" fill="${$e}" stroke="none"/><circle cx="78" cy="65" r="3.4" fill="${$e}" stroke="none"/>`,think:`<circle cx="42" cy="66" r="7" fill="#fff"/><circle cx="78" cy="66" r="7" fill="#fff"/><circle cx="45" cy="62.5" r="3" fill="${$e}" stroke="none"/><circle cx="81" cy="62.5" r="3" fill="${$e}" stroke="none"/><path d="M33 53l14-3M73 50l14 3"/>`,oops:`<circle cx="42" cy="67" r="7" fill="#fff"/><circle cx="78" cy="67" r="7" fill="#fff"/><circle cx="42" cy="69" r="3" fill="${$e}" stroke="none"/><circle cx="78" cy="69" r="3" fill="${$e}" stroke="none"/><path d="M34 55l13 4M86 55l-13 4"/><path d="M95 56c4 6 4 10 0 12-4-2-4-6 0-12z" fill="#9FE3FA"/>`,party:'<path d="M35 67q7-9 14 0M71 67q7-9 14 0" stroke-width="3.4"/>'}[i]||"",e={happy:'<path d="M50 82q10 9 20 0" stroke-width="3.2"/>',wow:'<ellipse cx="60" cy="85" rx="6" ry="7.5" fill="#7A2E2E"/>',think:'<path d="M52 85h15" stroke-width="3.2"/>',oops:'<path d="M50 88q10-8 20 0" stroke-width="3.2"/>',party:'<path d="M47 80q13 17 26 0z" fill="#7A2E2E"/><path d="M53 87q7 5 14 0" stroke="#FF8FA3" stroke-width="3"/>'}[i]||"";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 124" role="img" aria-label="Roofus the house">
    <g fill="none" stroke="${$e}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round">
      <g class="puff"><circle cx="93" cy="12" r="6" fill="#fff"/><circle cx="103" cy="5" r="4" fill="#fff"/></g>
      <rect x="82" y="20" width="14" height="24" fill="#D9744F"/>
      <rect x="20" y="50" width="80" height="62" rx="10" fill="#F9B58B"/>
      <path d="M8 56 60 12l52 44z" fill="#C4513A"/>
      <path d="M24 44h72M33 36h54" stroke="#A8432F" stroke-width="2.4"/>
      <circle cx="29" cy="80" r="5" fill="#F78FB3" stroke="none" opacity=".8"/><circle cx="91" cy="80" r="5" fill="#F78FB3" stroke="none" opacity=".8"/>
      ${t}${e}
      <rect x="51" y="96" width="18" height="16" rx="3" fill="#7A4FC4"/><circle cx="64.5" cy="105" r="1.6" fill="#FFD83A" stroke="none"/>
      <path d="M20 86q-12 2-13 13M100 86q12 2 13 13" stroke-width="3.2"/>
    </g></svg>`}var Pe={upload:Yt('<path d="M16 22V7M10 12l6-6 6 6" stroke-width="3"/><path d="M5 20v5h22v-5"/>'),example:Yt('<rect x="5" y="6" width="22" height="20" rx="2" fill="#fff"/><path d="M5 15h12v11M17 15V6M17 20h10" stroke="#3A6FD8" stroke-width="2.8"/>'),wall:Yt('<rect x="4" y="8" width="24" height="16" rx="2" fill="#F9B58B"/><path d="M4 16h24M13 8v8M21 16v8M9 16v8M17 8v8"/>'),join:Yt('<rect x="4" y="8" width="11" height="16" rx="2" fill="#C9B6FF"/><rect x="17" y="8" width="11" height="16" rx="2" fill="#7FD8BE"/><path d="M11 16h10M18 13l3 3-3 3M14 13l-3 3 3 3" stroke-width="2.6"/>'),remove:Yt('<circle cx="16" cy="16" r="11" fill="#FF9F8A"/><path d="M11 11l10 10M21 11L11 21" stroke-width="3"/>'),measure:Yt('<rect x="3" y="11" width="26" height="10" rx="2" fill="#FFD83A"/><path d="M8 11v4M13 11v6M18 11v4M23 11v6"/>'),floor:Yt('<rect x="5" y="6" width="22" height="20" rx="2" stroke-dasharray="4 3.5" fill="#fff"/><path d="M11 20v-6l5-4 5 4v6z" fill="#F9B58B"/>'),colour:Yt('<path d="M20 5l7 7-3 3-7-7z" fill="#C9B6FF"/><path d="M18 9L7 20l-1 6 6-1 11-11" fill="#fff"/><path d="M6 26l2-2"/>'),turn:Yt('<path d="M26 16a10 10 0 1 1-4-8" stroke-width="3"/><path d="M23 3v6h-6" stroke-width="3"/>'),undo:Yt('<path d="M10 9l-6 6 6 6" stroke-width="3"/><path d="M4 15h14a8 8 0 0 1 0 16h-3" stroke-width="3" transform="translate(0 -5)"/>'),back:Yt('<path d="M19 6l-10 10 10 10" stroke-width="3.4"/>'),next:Yt('<path d="M13 6l10 10-10 10" stroke-width="3.4"/>'),save:Yt('<path d="M16 5v15M10 14l6 6 6-6" stroke-width="3"/><path d="M5 22v5h22v-5"/>'),copy:Yt('<rect x="11" y="10" width="15" height="17" rx="2" fill="#fff"/><path d="M21 10V6H7v17h4"/>'),yes:Yt('<circle cx="16" cy="16" r="11" fill="#9BE37A"/><path d="M10 16l4 5 8-9" stroke-width="3"/>'),no:Yt(`<circle cx="16" cy="16" r="11" fill="#FFD83A"/><path d="M16 9v8" stroke-width="3"/><circle cx="16" cy="22" r="1.4" fill="${$e}"/>`),eye:Yt('<path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16z" fill="#fff"/><circle cx="16" cy="16" r="4" fill="#7A4FC4"/>'),close:Yt('<path d="M8 8l16 16M24 8L8 24" stroke-width="3.4"/>'),up:Yt('<path d="M6 19l10-10 10 10" stroke-width="3.4"/>'),down:Yt('<path d="M6 13l10 10 10-10" stroke-width="3.4"/>'),kitchen:Yt('<path d="M7 14h18v9a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3z" fill="#FFD83A"/><path d="M4 14h24M12 14v-3a4 4 0 0 1 8 0v3M11 7q1-2 0-4M16 6q1-2 0-4"/>'),living:Yt('<path d="M6 17v-5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v5" fill="#E07B2E"/><rect x="3" y="15" width="26" height="9" rx="3" fill="#F0974F"/><path d="M7 24v3M25 24v3"/>'),dining:Yt('<circle cx="16" cy="17" r="8" fill="#fff"/><circle cx="16" cy="17" r="4"/><path d="M5 6v8M3 6v4a2 2 0 0 0 4 0V6M28 6v20M28 6c-3 2-3 8 0 9"/>'),bedroom:Yt('<path d="M4 9v17M4 20h24v6M28 20v-3a4 4 0 0 0-4-4H13v7" fill="none"/><rect x="13" y="13" width="15" height="7" rx="3" fill="#5BA8F5"/><circle cx="9" cy="16" r="3" fill="#fff"/>'),bathroom:Yt('<path d="M3 16h26v3a7 7 0 0 1-7 7H10a7 7 0 0 1-7-7z" fill="#9FE3FA"/><path d="M8 16V8a3 3 0 0 1 6 0M9 26l-1 3M23 26l1 3"/>'),ensuite:Yt('<path d="M9 28V9a5 5 0 0 1 10 0" /><path d="M14 12h10l-1 3h-8z" fill="#9FE3FA"/><path d="M16 18v3M19.5 18v5M23 18v3" stroke="#3AA7D8"/>'),wc:Yt('<rect x="9" y="4" width="14" height="9" rx="2" fill="#fff"/><path d="M7 15h18a9 9 0 0 1-18 0z" fill="#fff"/><path d="M13 24v4h6v-4"/>'),hall:Yt(`<rect x="9" y="4" width="14" height="24" rx="2" fill="#DBA15B"/><circle cx="19" cy="17" r="1.5" fill="${$e}"/><path d="M5 28h22"/>`),landing:Yt('<path d="M4 27h7v-6h7v-6h7V9" stroke-width="3"/><path d="M22 6l3-3 3 3" stroke-width="2.6"/>'),stairs:Yt('<path d="M4 27h6v-5h6v-5h6v-5h6V6" stroke-width="3"/>'),garage:Yt('<path d="M4 13 16 5l12 8v14H4z" fill="#D9D9E3"/><path d="M9 27v-9h14v9M9 21h14M9 24h14"/>'),utility:Yt('<rect x="6" y="4" width="20" height="24" rx="3" fill="#fff"/><circle cx="16" cy="18" r="6" fill="#9FE3FA"/><path d="M10 8h3M17 8h5"/>'),study:Yt('<path d="M16 9c-3-3-8-3-12-2v17c4-1 9-1 12 2 3-3 8-3 12-2V7c-4-1-9-1-12 2z" fill="#B4E68E"/><path d="M16 9v17"/>'),playroom:Yt('<rect x="4" y="16" width="11" height="11" rx="2" fill="#FF8FA3"/><rect x="17" y="16" width="11" height="11" rx="2" fill="#5BA8F5"/><rect x="10.5" y="5" width="11" height="11" rx="2" fill="#FFD83A"/>'),store:Yt('<path d="M4 11l12-6 12 6v12l-12 6-12-6z" fill="#DBA15B"/><path d="M4 11l12 6 12-6M16 17v12"/>'),own:Yt('<path d="M5 27l2-7L21 6l5 5L12 25z" fill="#FFD83A"/><path d="M18 9l5 5"/>'),light:Yt('<path d="M16 4a8 8 0 0 0-5 14v3h10v-3a8 8 0 0 0-5-14z" fill="#FFD83A"/><path d="M12 25h8M13 28h6"/>'),cover:Yt(`<rect x="5" y="5" width="22" height="22" rx="2" fill="#BDEBFF"/><rect x="5" y="5" width="22" height="12" fill="#DDE4EA"/><path d="M5 9h22M5 13h22M5 17h22M16 17v6"/><circle cx="16" cy="24" r="1.4" fill="${$e}"/>`),climate:Yt('<rect x="4" y="9" width="24" height="14" rx="3" fill="#FF8A3D"/><path d="M10 9v14M16 9v14M22 9v14M7 26v2M25 26v2"/>'),lock:Yt(`<rect x="7" y="14" width="18" height="13" rx="3" fill="#9BE37A"/><path d="M11 14v-4a5 5 0 0 1 10 0v4"/><circle cx="16" cy="20" r="1.6" fill="${$e}"/>`),motion:Yt('<circle cx="16" cy="16" r="5" fill="#FFB347"/><path d="M6 9a13 13 0 0 0 0 14M26 9a13 13 0 0 1 0 14M10 12a7 7 0 0 0 0 8M22 12a7 7 0 0 1 0 8"/>'),contact:Yt('<rect x="6" y="5" width="9" height="22" rx="2" fill="#fff"/><rect x="18" y="9" width="8" height="14" rx="2" fill="#FF8A73"/><path d="M15 16h3"/>'),camera:Yt('<rect x="4" y="10" width="17" height="13" rx="3" fill="#7FD9FF"/><path d="M21 14l7-4v13l-7-4z" fill="#fff"/><circle cx="12" cy="16.5" r="3" fill="#fff"/>'),speaker:Yt(`<rect x="9" y="4" width="14" height="24" rx="3" fill="#C9B6FF"/><circle cx="16" cy="19" r="4" fill="#fff"/><circle cx="16" cy="9.5" r="1.6" fill="${$e}"/>`),tv:Yt('<rect x="4" y="7" width="24" height="15" rx="2" fill="#7FD9FF"/><path d="M11 27h10M16 22v5"/>'),sensor:Yt('<path d="M13 18V7a3 3 0 0 1 6 0v11a6 6 0 1 1-6 0z" fill="#fff"/><circle cx="16" cy="23" r="3" fill="#FF8A73"/><path d="M16 21v-9"/>'),switch:Yt('<rect x="5" y="10" width="22" height="12" rx="6" fill="#9BE37A"/><circle cx="21" cy="16" r="4" fill="#fff"/>'),house:Yt('<path d="M5 15 16 6l11 9v12H5z" fill="#F9B58B"/><path d="M3 16 16 5l13 11" stroke-width="3"/><rect x="13" y="19" width="6" height="8" rx="1" fill="#7A4FC4"/>'),paint:Yt('<path d="M5 8h18v8H5z" fill="#F78FB3"/><path d="M23 12h4v7H16v3" /><rect x="14" y="22" width="4" height="6" rx="1" fill="#DBA15B"/>'),pin:Yt('<path d="M16 29s9-9.5 9-16a9 9 0 0 0-18 0c0 6.5 9 16 9 16z" fill="#FF8A73"/><circle cx="16" cy="13" r="3.4" fill="#fff"/>'),plug:Yt('<path d="M11 4v7M21 4v7"/><path d="M8 11h16v4a8 8 0 0 1-16 0z" fill="#FFD83A"/><path d="M16 23v5"/>'),window:Yt('<rect x="6" y="6" width="20" height="20" rx="2" fill="#BDEBFF"/><path d="M16 6v20M6 16h20"/>'),door:Yt(`<rect x="9" y="4" width="14" height="24" rx="2" fill="#FFF7E6"/><circle cx="19" cy="17" r="1.5" fill="${$e}"/>`),opening:Yt('<path d="M7 28V8a9 9 0 0 1 18 0v20" stroke-width="3"/>'),extdoor:Yt(`<rect x="9" y="4" width="14" height="24" rx="2" fill="#FF8A73"/><circle cx="19" cy="17" r="1.5" fill="${$e}"/>`),frontdoor:Yt('<rect x="9" y="4" width="14" height="24" rx="2" fill="#7A4FC4"/><rect x="12.5" y="8" width="7" height="6" rx="1" fill="#BDEBFF"/><circle cx="19.5" cy="19" r="1.6" fill="#FFD83A" stroke="none"/>'),bifold:Yt('<rect x="4" y="5" width="24" height="22" rx="2" fill="#BDEBFF"/><path d="M12 5v22M20 5v22"/>'),garageDoor:Yt('<rect x="4" y="7" width="24" height="20" rx="2" fill="#FFF0D6"/><path d="M4 12h24M4 17h24M4 22h24"/>'),none:Yt('<circle cx="16" cy="16" r="11" fill="#eee"/><path d="M9 23L23 9" stroke-width="3"/>')};var id={light:["light","switch","input_boolean"],switch:["switch","input_boolean","light","fan"],cover:["cover","input_number"],climate:["climate","sensor","input_number"],lock:["lock"],motion:["binary_sensor"],contact:["binary_sensor"],camera:["camera"],speaker:["media_player"],tv:["media_player"],sensor:["sensor","binary_sensor"]},hy={climate:["temperature"],motion:["motion","occupancy","presence","moving"],contact:["door","window","opening","garage_door","lock"],tv:["tv","receiver"],speaker:["speaker"]},uy=[["living room","living","lounge","sitting room","front room","family room"],["kitchen","diner"],["dining room","dining","diner"],["hall","hallway","entrance","porch"],["landing","upstairs hall"],["bathroom","bath","shower room"],["ensuite","en suite"],["wc","toilet","cloakroom","loo"],["office","study"],["utility","utility room","laundry"],["main bedroom","master bedroom","master","bedroom 1"],["nursery","baby"],["garage"],["conservatory","sun room","garden room"]],fy=new Set(["unavailable","unknown"]),Dl=i=>` ${String(i||"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()} `,Ph=(i,t)=>i.includes(` ${t} `);function dy(i){let t=Dl(i),e=t.trim();if(!e)return[];let n=new Set([e]);for(let s of uy)s.some(o=>Ph(t,o))&&s.forEach(o=>n.add(o));return[...n]}function Ih(i,t){let e=(i.entities||{})[t];if(!e)return"";let n=e.area_id||((i.devices||{})[e.device_id]||{}).area_id;return n&&((i.areas||{})[n]||{}).name||""}function $s(i){if(!i)return"not found";let t=i.attributes||{},e=i.entity_id?i.entity_id.split(".")[0]:"";return fy.has(i.state)?"not answering":e==="climate"?t.current_temperature!=null?`${t.current_temperature}\xB0`:i.state:e==="cover"?t.current_position!=null?`${t.current_position}% open`:i.state:`${i.state}${t.unit_of_measurement?` ${t.unit_of_measurement}`:""}`}function nd(i,t,e,{wide:n=!1,query:s="",used:o={}}={}){if(!i||!i.states)return[];let l=id[t]||id.sensor,h=hy[t]||[],u=dy(e),f=Dl(s).trim(),p=[];for(let _ of Object.keys(i.states)){let m=i.states[_],g=_.split(".")[0],b=m.attributes||{},w=(i.entities||{})[_]||{};if(w.hidden||!n&&(!l.includes(g)||w.entity_category||t==="climate"&&g==="sensor"&&b.device_class!=="temperature"))continue;let y=b.friendly_name||_,v=Ih(i,_),A=Dl(`${y} ${_.split(".")[1]}`),C=Dl(v);if(f&&!`${A}${C}`.includes(f))continue;let T=0;for(let L of u)Ph(C,L)?T=Math.max(T,3):Ph(A,L)&&(T=Math.max(T,2));let R=g===l[0]?2:0;h.includes(b.device_class)&&(R+=1),p.push({id:_,name:y,area:v,near:T,fit:R,guess:T>0,usedBy:o[_]||""})}return p.sort((_,m)=>m.near-_.near||(_.usedBy?1:0)-(m.usedBy?1:0)||m.fit-_.fit||_.name.localeCompare(m.name)),p}var ei=i=>String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),Rh=40,py=[["pick","Pick it"],["try","Try it"],["done","Finish"]],Nl=["light","switch","input_boolean","fan"],sd={light:"light or lamp",switch:"switch or plug",cover:"blind, shutter or garage door",climate:"radiator valve (TRV), thermostat or temperature sensor",lock:"lock",motion:"motion sensor",contact:"door or window sensor",camera:"camera",speaker:"speaker",tv:"TV",sensor:"sensor"},rd=`
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
`,Fl=class{constructor(t){this.ed=t;let e=this.dlg=document.createElement("dialog");e.className="setup",e.setAttribute("aria-label","Set up this thing"),e.tabIndex=-1,e.innerHTML=`<div class="s-top"><div class="s-ic"></div><div class="s-ttl"></div><button class="btn x" data-act="close" aria-label="Close">${Pe.close}</button></div>
      <div class="s-talk talk"><div class="roofus"></div><div class="bubble" aria-live="polite"></div></div>
      <div class="s-steps"></div>
      <div class="s-body"></div>`,t.shadowRoot.appendChild(e),e.addEventListener("click",n=>{if(n.target===e){e.close();return}let s=n.target.closest("[data-act],[data-step],[data-ent]");s&&(s.dataset.step?this.go(s.dataset.step):s.dataset.ent!=null?this._choose(s.dataset.ent):this._act(s.dataset.act))}),e.addEventListener("input",n=>{n.target.id==="sq"&&(this.query=n.target.value,this._options())}),e.addEventListener("change",n=>{n.target.id==="sName"&&(this.ed._rename(this.id,n.target.value),this._head())}),this._esc=n=>{n.key!=="Escape"||!e.open||(n.stopPropagation(),n.preventDefault(),e.close())},e.addEventListener("close",()=>{window.removeEventListener("keydown",this._esc,!0),this.id=null,this.ed._setupClosed()})}get isOpen(){return this.dlg.open}_q(t){return this.dlg.querySelector(t)}_now(){let t=this.id?this.ed._find(this.id):null;if(!t)return null;let e=this.ed._hass,n=this.ed._entityOf(t.d);return{...t,room:this.ed._roomName(t.f,t.d),ent:n,st:n&&e&&e.states[n]||null,hass:e}}open(t,e,n=!1){this.id=t,this.query="",this.wide=!1,this.fresh=n;let s=this._now();s&&(this.dlg.open||(this.dlg.showModal(),this.dlg.focus(),window.addEventListener("keydown",this._esc,!0)),this.go(e||(s.ent?"try":"pick")))}close(){this.dlg.open&&this.dlg.close()}go(t){this.step=t,this.render(),this._q(".s-body").scrollTop=0}_say(t,e,n="happy"){this._q(".roofus").innerHTML=Ll(n),this._q(".bubble").innerHTML=`<b>${ei(t)}</b>${ei(e)}`}_head(){let t=this._now();if(!t)return;let{d:e,room:n,ent:s}=t,o=this.ed.kindName(e.kind);this._q(".s-ic").innerHTML=Pe[e.kind]||Pe.sensor,this._q(".s-ic").classList.toggle("live",!!s),this._q(".s-ttl").innerHTML=`${ei(e.name||o)}<small>${ei([o,n].filter(Boolean).join(" in "))}</small>`,this._q(".s-steps").innerHTML=py.map(([l,h],u)=>`<button class="btn${l===this.step?" on":""}" data-step="${l}"${l===this.step?' aria-current="step"':""}><i>${u+1}</i>${h}</button>`).join("")}render(){let t=this._now();if(!t){this.close();return}this._head();let{d:e,room:n,ent:s,st:o}=t,l=this._q(".s-body"),h=sd[e.kind]||"device",u=e.name||"this";if(this.step==="pick")l.innerHTML=`<input id="sq" type="search" placeholder="Search your devices" autocomplete="off" spellcheck="false" aria-label="Search your devices" value="${ei(this.query)}"><div id="opts"></div>`,this._say(this.fresh?`${u} is on the plan!`:`Which one is ${u}?`,`Tap the real ${h} from Home Assistant.${n?` My best guesses for the ${n} are at the top.`:""}`,this.fresh?"party":"think"),this._options();else if(this.step==="try"){if(!s){l.innerHTML='<p class="s-ask">Nothing is picked for this yet.</p><div class="row"><button class="btn go" data-step="pick">Pick one</button><button class="btn" data-step="done">Leave it grey</button></div>',this._say("Not connected yet","It stays grey on the card until you pick its real device.","think");return}l.innerHTML=`<div class="now"></div><div class="row" id="acts">${this._buttons(e,s,o)}</div><p class="hint" id="tip" style="text-align:center"></p>
        <p class="s-ask">Is that the right one?</p><div class="row"><button class="btn" data-step="pick">No, pick another</button><button class="btn go" data-step="done">${Pe.yes}Yes!</button></div>`,this._q("#tip").textContent=this._tip(e,s),this._say("Let's check it",`This is what ${u} says right now. Is that the right ${h.split(",")[0].replace(/ \(.*/,"")}?`,"wow"),this._live()}else l.innerHTML=`<label class="f" for="sName">Its name</label><input id="sName" type="text" autocomplete="off" value="${ei(e.name||"")}">
        <p class="hint">${s?`Connected to <b>${ei(this._friendly(s))}</b>.`:"Not connected yet, so it stays grey on the card."}</p>
        <div class="row"><button class="btn" data-act="move">${Pe.pin}Move it</button><button class="btn" data-act="remove">${Pe.remove}Remove it</button></div>
        <div class="row"><button class="btn go" data-act="close">${Pe.yes}Done</button></div>`,s?this._say("All set!",`${u} is connected. Tap it on the card to use it.`,"party"):this._say("Saved for later",`${u} is on the plan as "planned". Come back when you have fitted it.`,"happy")}_friendly(t){let e=this.ed._hass&&this.ed._hass.states[t];return e&&e.attributes&&e.attributes.friendly_name||t}_options(){let t=this._now(),e=this._q("#opts");if(!t||!e)return;let{d:n,room:s,ent:o,hass:l}=t;if(!l){e.innerHTML='<p class="hint">Home Assistant has not told me about your devices yet.</p>';return}this._count=Object.keys(l.states).length;let h=nd(l,n.kind,s,{wide:this.wide,query:this.query,used:this.ed.usedBy(n.id)}),u=g=>`<button class="opt${g.id===o?" on":""}" data-ent="${ei(g.id)}"><b>${ei(g.name)}</b><small>${ei([g.area,g.id,g.usedBy?`already used by ${g.usedBy}`:""].filter(Boolean).join(" \xB7 "))}</small><span class="val">${ei($s(l.states[g.id]))}</span></button>`,f=h.slice(0,Rh),p=f.filter(g=>g.guess),_=f.filter(g=>!g.guess),m="";p.length&&(m+=`<h4>My best guesses${s?` for the ${ei(s)}`:""}</h4>${p.map(u).join("")}`),_.length&&(m+=`<h4>${p.length?"Everything else":"Your devices"}</h4>${_.map(u).join("")}`),h.length||(m+=`<p class="hint">${this.query?"Nothing matches that. Try fewer letters.":`I can't find a ${ei(sd[n.kind]||"device")} in Home Assistant yet.`}</p>`),h.length>Rh&&(m+=`<p class="hint">${h.length-Rh} more. Type in the search box to find them.</p>`),m+="<h4>Or</h4>",this.wide||(m+='<button class="opt none" data-act="wide"><b>Show every kind of device</b><small>If yours is not in the list</small></button>'),m+=`<button class="opt none${o?"":" on"}" data-ent=""><b>I haven't got it yet</b><small>Keep it grey on the card as "planned"</small></button>`,e.innerHTML=m}_choose(t){let e=this._now();e&&this.ed._link(e.d,t)&&(this.fresh=!1,this.go(t?"try":"done"))}_buttons(t,e,n){let s=e.split(".")[0],o=n&&n.attributes||{};return n?Nl.includes(s)?`<button class="btn" data-act="toggle">${Pe[t.kind]||Pe.switch}Switch it</button>`:s==="cover"?`<button class="btn" data-act="open">${Pe.up}Open</button><button class="btn" data-act="stop">Stop</button><button class="btn" data-act="shut">${Pe.down}Close</button>`:s==="climate"&&typeof o.temperature=="number"?`<button class="btn" data-act="cooler">${Pe.down}Cooler</button><button class="btn" data-act="warmer">${Pe.up}Warmer</button>`:"":""}_tip(t,e){let n=e.split(".")[0];return Nl.includes(n)?"Press it and watch the real one.":n==="cover"?"Press a button and watch the real one move.":n==="climate"?"Nudge it and listen for the radiator valve, or look at the thermostat.":n==="lock"?"I never lock or unlock doors from here. Try the lock yourself and watch this change.":t.kind==="motion"?"Wave at it and watch this change.":t.kind==="contact"?"Open and close it and watch this change.":""}_live(){let t=this._now(),e=this._q(".now");if(!t||!e||!t.ent)return;let{d:n,ent:s,st:o}=t,l=s.split(".")[0],h=o&&o.attributes||{},u=$s(o),f="",p=!1;o?o.state==="unavailable"||o.state==="unknown"?f="It may be switched off or out of range.":l==="climate"?(p=h.hvac_action==="heating",f=[h.hvac_action?h.hvac_action[0].toUpperCase()+h.hvac_action.slice(1):o.state,typeof h.temperature=="number"?`set to ${h.temperature}\xB0`:""].filter(Boolean).join(", ")):l==="cover"?(p=o.state==="open",f="0% is closed, 100% is open"):Nl.includes(l)?(p=o.state==="on",u=p?"On":"Off"):l==="lock"?u=o.state==="locked"?"Locked":o.state==="unlocked"?"Unlocked":o.state:l==="binary_sensor"&&(p=o.state==="on",u=n.kind==="motion"?p?"Movement!":"All quiet":n.kind==="contact"?p?"Open":"Closed":p?"On":"Off"):f="Home Assistant can't find this one right now.",e.classList.toggle("hot",p),e.innerHTML=`<div class="big">${ei(u)}</div><div class="sub">${ei(f)}</div><div class="who">${ei([this._friendly(s),Ih(t.hass,s)].filter(Boolean).join(" \xB7 "))}</div>`}_act(t){let e=this._now();if(t==="close"){this.close();return}if(!e)return;if(t==="wide"){this.wide=!0,this._options();return}if(t==="move"){let f=this.id;this.close(),this.ed._moveMode(f);return}if(t==="remove"){let f=this.id;this.close(),this.ed._remove(f);return}let{ent:n,st:s,hass:o}=e;if(!n||!s||!o||!o.callService)return;let l=n.split(".")[0],h=s.attributes||{},u={entity_id:n};if(t==="toggle"&&Nl.includes(l))o.callService(l,"toggle",u);else if(l==="cover"&&["open","stop","shut"].includes(t))o.callService("cover",{open:"open_cover",stop:"stop_cover",shut:"close_cover"}[t],u);else if(l==="climate"&&(t==="warmer"||t==="cooler")&&typeof h.temperature=="number"){let f=h.target_temp_step||.5,p=h.min_temp!=null?h.min_temp:5,_=h.max_temp!=null?h.max_temp:30,m=Math.min(_,Math.max(p,h.temperature+(t==="warmer"?f:-f)));o.callService("climate","set_temperature",{...u,temperature:Math.round(m*10)/10})}}refresh(){if(!this.dlg.open)return;let t=this._now();if(!t){this.close();return}if(this.step==="try")this._live();else if(this.step==="pick"&&t.hass){if(Object.keys(t.hass.states).length!==this._count){this._options();return}this.dlg.querySelectorAll(".opt[data-ent]").forEach(e=>{let n=e.querySelector(".val");n&&e.dataset.ent&&(n.textContent=$s(t.hass.states[e.dataset.ent]))})}}};var my="https://digitaladaption.github.io/toon-house-card/importer/",gy={light:"Light",switch:"Switch",cover:"Blind or shutter",climate:"Heating",lock:"Lock",motion:"Motion sensor",contact:"Door or window sensor",camera:"Camera",speaker:"Speaker",tv:"TV",sensor:"Sensor"},Lh=[["light","Light","Tap where the light goes."],["cover","Blind","Tap the window it covers."],["climate","Radiator","Tap by the wall it is on. Away from a wall makes a thermostat."],["lock","Lock","Tap the door it is on."],["motion","Motion sensor","Tap where the sensor is."],["contact","Door sensor","Tap the door or window it is on."],["camera","Camera","Tap where the camera is. It can be outside."],["speaker","Speaker","Tap where the speaker is."],["tv","TV","Tap where the TV is."],["sensor","Sensor","Tap where the sensor is."],["switch","Switch","Tap where the switch is."]],_y=["x","y","room","wall","at"],Dh=i=>JSON.parse(JSON.stringify(i)),Fn=i=>String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),xy=`
  :host{display:block;font-family:${Il};font-weight:500;color:#1b1b1b;--ink:#1b1b1b;--sun:#FFD83A;--paper:#FFFDF4}
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
${rd}`,Nh=class extends HTMLElement{setConfig(t){this._config={...t},this.shadowRoot||(Rl(),this.attachShadow({mode:"open"}),this._skeleton(),this._setup=new Fl(this)),this._loadHouse(),this._overlayChanged(),this._sync(),this._states()}set hass(t){this._hass=t,this.shadowRoot&&(this._states(),this._setup.refresh())}connectedCallback(){this._onCardTap=this._onCardTap||(t=>{let e=t.detail&&t.detail.id;!e||!this._setup||!this.getClientRects().length||!this._find(e)||(t.preventDefault(),this._open(e))}),window.addEventListener("toon-house-setup",this._onCardTap)}disconnectedCallback(){window.removeEventListener("toon-house-setup",this._onCardTap)}_fire(t){t.entities&&!Object.keys(t.entities).length&&delete t.entities,t.devices&&!Object.keys(t.devices).length&&delete t.devices;for(let e of["title","theme","height"])(t[e]===""||t[e]==null)&&delete t[e];this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0})),this._overlayChanged(),this._sync()}_overlayChanged(){!this._file||JSON.stringify(this._config.devices||null)===this._overKey||(this._rebuildHouse(),this._devices(),this._plan())}_rebuildHouse(){this._overKey=JSON.stringify(this._config.devices||null),this._house=io(Dh(this._file),this._config.devices),this._house.floors.forEach(t=>(t.rooms||[]).forEach((e,n)=>{e.id=e.id||`${t.id}_room${n}`}))}_set(t,e){this._fire({...this._config,[t]:e})}_say(t,e,n="happy",s=!1){let o=l=>this.shadowRoot.querySelector(l);o(".roofus").innerHTML=Ll(s?"oops":n),o(".bubble").classList.toggle("bad",s),o(".bubble").innerHTML=`<b>${Fn(t)}</b>${Fn(e)}`}_skeleton(){let t=o=>`<span class="sw">${[o.exterior,o.roof,o.door,o.lawn].map(l=>`<i style="background:${l}"></i>`).join("")}</span>`;this.shadowRoot.innerHTML=`<style>${xy}</style>
    <div class="wrap">
      <div class="talk"><div class="roofus"></div><div class="bubble" aria-live="polite"></div></div>

      <section>
        <h3>${Pe.house}Your house</h3>
        <div class="pill" id="src"></div>
        <div id="urlBox">
          <label class="f" for="url">House file address</label>
          <input id="url" type="text" placeholder="/local/toon-house/house.json" autocomplete="off" spellcheck="false">
        </div>
        <div class="row">
          <label class="btn">${Pe.upload}Load a house file<input id="file" type="file" accept=".json,application/json" hidden></label>
          <button class="btn" id="useUrl">Use a file address</button>
          <a class="btn" href="${my}" target="_blank" rel="noopener">${Pe.example}Build one from a floor plan</a>
        </div>
      </section>

      <section>
        <h3>${Pe.paint}The look</h3>
        <div class="row">
          <button class="btn theme" data-theme="toon">${t(eo.toon)}Cartoon</button>
          <button class="btn theme" data-theme="brick">${t(eo.brick)}Brick</button>
        </div>
        <label class="f">Opens on</label>
        <div class="row" id="views"></div>
        <label class="f" for="title">Name shown on the card</label>
        <input id="title" type="text" autocomplete="off">
        <label class="f">Height</label>
        <div class="row"><button class="btn" id="fill">Fill the screen</button><button class="btn" id="fixed">Set a height</button></div>
        <div class="slider" id="hBox"><input id="height" type="range" min="300" max="1000" step="20" aria-label="Card height"><span class="pill" id="hVal"></span></div>
      </section>

      <section>
        <h3>${Pe.pin}Add or move things</h3>
        <p class="hint">Pick a sticker, then tap the plan where it goes. Tap anything on the plan to set it up, or drag it to move it.</p>
        <div class="kinds" id="kinds"></div>
        <div class="row tabs" id="ptabs"></div>
        <div id="planBox"><svg id="plan" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan of this floor"></svg></div>
        <div class="row" id="hiddenBox" style="display:none"><span class="pill" id="hiddenN"></span><button class="btn" id="restore">Put them back</button></div>
      </section>

      <section>
        <h3>${Pe.plug}Connect your things</h3>
        <p class="hint">Tap one and I'll help you set it up. Grey ones are not connected yet and stay grey on the card.</p>
        <div id="devs"></div>
      </section>
      <p class="hint" style="color:#1b1b1b;margin:10px 4px 0">Prefer typing? "Show code editor" below still works.</p>
    </div>`;let e=o=>this.shadowRoot.querySelector(o);e("#url").addEventListener("change",o=>{let l=o.target.value.trim();l&&this._set("layout",l)}),e("#useUrl").addEventListener("click",()=>{this._showUrl=!0,this._sync(),e("#url").focus()}),e("#file").addEventListener("change",o=>{let l=o.target.files[0];if(!l)return;let h=new FileReader;h.onload=()=>{try{let u=JSON.parse(String(h.result));if(!u||!Array.isArray(u.floors)||!u.floors.length)throw new Error("it has no floors in it");this._showUrl=!1,this._set("layout",u)}catch(u){this._tell("That file didn't work",`I couldn't read it as a house file: ${u.message}.`,"oops",!0)}},h.readAsText(l),o.target.value=""}),this.shadowRoot.querySelectorAll("[data-theme]").forEach(o=>o.addEventListener("click",()=>this._set("theme",o.dataset.theme))),e("#title").addEventListener("change",o=>this._set("title",o.target.value)),e("#fill").addEventListener("click",()=>this._set("height",null)),e("#fixed").addEventListener("click",()=>this._set("height",520)),e("#height").addEventListener("change",o=>this._set("height",Number(o.target.value))),e("#height").addEventListener("input",o=>{e("#hVal").textContent=`${o.target.value} px`});for(let[o,l]of Lh){let h=document.createElement("button");h.className="btn kind",h.dataset.kind=o,h.innerHTML=`${Pe[o]||Pe.sensor}<span>${l}</span>`,h.addEventListener("click",()=>this._armKind(this._arm===o?null:o)),e("#kinds").appendChild(h)}e("#restore").addEventListener("click",()=>{let o={...this._config.devices||{}};for(let l of Object.keys(o))o[l]===null&&delete o[l];this._fire({...this._config,devices:o})});let n=e("#plan");n.addEventListener("pointerdown",o=>{let l=o.target.closest?o.target.closest(".pin"):null;!l||this._arm||(this._dragging={id:l.dataset.dev,el:l,from:this._point(o),moved:!1},l.setPointerCapture(o.pointerId))}),n.addEventListener("pointermove",o=>{let l=this._dragging;if(!l)return;let h=this._point(o);!l.moved&&Math.hypot(h.x-l.from.x,h.y-l.from.y)<.2||(l.moved=!0,l.el.setAttribute("transform",`translate(${h.x} ${h.y})`))});let s=o=>{let l=this._dragging;if(this._dragging=null,!l)return;if(this._swallow=!0,setTimeout(()=>{this._swallow=!1},350),!l.moved){this._open(l.id);return}let h=this._point(o);this._move(l.id,h.x,h.y)};n.addEventListener("touchstart",o=>{!this._arm&&o.target.closest&&o.target.closest(".pin")&&o.preventDefault()},{passive:!1}),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",()=>{this._dragging=null,this._plan()}),n.addEventListener("click",o=>{if(this._swallow)return;let l=o.target.closest?o.target.closest(".pin"):null,h=this._point(o);this._arm?this._place(this._arm,h.x,h.y):l?this._open(l.dataset.dev):this._select(null)})}async _loadHouse(){let t=this._config.layout,e=typeof t=="string"?t:JSON.stringify(t||null);if(e!==this._houseKey){this._houseKey=e,this._house=null,this._file=null,this._houseError="";try{if(typeof t=="string"){let s=await fetch(`${t}${t.includes("?")?"&":"?"}v=${Date.now()}`);if(!s.ok)throw new Error(`the server answered ${s.status}`);this._house=await s.json()}else t&&(this._house=JSON.parse(JSON.stringify(t)));if(!this._house||!Array.isArray(this._house.floors))throw new Error("it has no floors in it");this._file=this._house;let n=io(Dh(this._file),null);n.floors.forEach(s=>(s.rooms||[]).forEach((o,l)=>{o.id=o.id||`${s.id}_room${l}`})),this._fileIds=new Set(n.floors.flatMap(s=>(s.devices||[]).map(o=>o.id))),this._fw=[],this._problems=[];for(let s of n.floors)try{let o=El(Dh(s));this._fw.push(o),this._problems.push(...o.warnings)}catch(o){this._fw.push(null),this._problems.push(o.message)}this._rebuildHouse()}catch(n){this._house=null,this._file=null,this._houseError=n.message}e===this._houseKey&&(this._sel=null,this._sync(),this._devices(),this._plan())}}_roomName(t,e){let n=t.rooms||[],s=n.find(o=>o.id===e.room);return!s&&e.x!=null&&(s=n.find(o=>{let l=li(Nn(o));return e.x>=l.x0&&e.x<=l.x1&&e.y>=l.y0&&e.y<=l.y1})),s&&s.name||""}_entityOf(t){let e=this._config.entities||{},n=s=>Object.prototype.hasOwnProperty.call(e,s);return n(t.id)?e[t.id]:t.name&&n(t.name)?e[t.name]:t.entity||null}_sync(){if(!this.shadowRoot)return;let t=m=>this.shadowRoot.querySelector(m),e=this._config,n=this.shadowRoot.activeElement,s=typeof e.layout=="string",o=this._house;t("#src").textContent=s?"From a file on Home Assistant":o?`Built into this card: ${o.floors.length} floor${o.floors.length>1?"s":""}, ${o.floors.reduce((m,g)=>m+(g.rooms||[]).length,0)} rooms`:"Built into this card",t("#urlBox").style.display=s||this._showUrl?"":"none",t("#useUrl").style.display=s||this._showUrl?"none":"",n!==t("#url")&&(t("#url").value=s?e.layout:"");let l=e.theme||o&&o.theme||"toon";this.shadowRoot.querySelectorAll("[data-theme]").forEach(m=>m.classList.toggle("on",m.dataset.theme===l)),n!==t("#title")&&(t("#title").value=e.title!=null?e.title:"",t("#title").placeholder=o&&o.title||"My house");let h=typeof e.height=="number";t("#fill").classList.toggle("on",!e.height),t("#fixed").classList.toggle("on",!!e.height),t("#hBox").style.display=h?"":"none",h&&(t("#height").value=e.height,t("#hVal").textContent=`${e.height} px`);let u=t("#views"),f=String(e.view!=null?e.view:"outside"),p=[["outside","Outside"],...(o&&o.floors||[]).map((m,g)=>[m.id||`floor${g}`,m.name||(g===0?"Ground":`Floor ${g}`)])],_=JSON.stringify([p,f]);if(_!==this._viewSig){this._viewSig=_,u.innerHTML="";for(let[m,g]of p){let b=document.createElement("button");b.className=`btn${f===m||m==="outside"&&f==="whole"?" on":""}`,b.textContent=g,b.addEventListener("click",()=>this._set("view",m)),u.appendChild(b)}}this._talk()}_tell(t,e,n,s){this._hold=Date.now()+6e3,this._say(t,e,n,s)}_talk(){if(Date.now()<(this._hold||0))return;if(this._houseError){this._say("I can't find your house",`Something is wrong with the house file: ${this._houseError}.`,"oops",!0);return}if(!this._house){this._say("One moment","I'm fetching your house.","think");return}let t=this._house.floors.flatMap(n=>n.devices||[]),e=t.filter(n=>this._entityOf(n)).length;this._problems&&this._problems.length?this._say("Something to check",`${this._problems[0]}${this._problems.length>1?` (and ${this._problems.length-1} more)`:""}`,"oops",!0):t.length?e>=t.length?this._say("Everything is connected!","Tap things on the card to try them.","party"):this._say("Let's connect your home",`${e} of ${t.length} things are connected. Tap a grey one and I'll help you set it up.`,e?"happy":"wow"):this._say("Your house is ready","Now add your lights and blinds: pick a sticker below and tap the plan where it goes.","happy")}_devices(){if(!this.shadowRoot)return;let t=this.shadowRoot.querySelector("#devs"),e=this._house;if(!e){t.innerHTML="";return}let n=new Set([...t.querySelectorAll("details[open]")].map(o=>o.dataset.floor)),s=!t.children.length;t.innerHTML="",e.floors.forEach((o,l)=>{let h=o.devices||[];if(!h.length)return;let u=document.createElement("details"),f=o.id||`floor${l}`;u.dataset.floor=f,u.open=s?l===0:n.has(f),u.innerHTML=`<summary>${Fn(o.name||(l===0?"Ground":`Floor ${l}`))}<span class="pill"></span></summary>`;for(let p of h){let _=document.createElement("button"),m=this._roomName(o,p);_.className="dev",_.dataset.id=p.id,_.innerHTML=`<span class="ic">${Pe[p.kind]||Pe.sensor}</span>
          <span class="nm">${Fn(p.name||this.kindName(p.kind))}<small>${Fn([this.kindName(p.kind),m].filter(Boolean).join(" in "))}</small></span>
          <span class="pill go"></span><span class="lk"></span>`,_.addEventListener("click",()=>this._open(p.id)),_.classList.toggle("sel",p.id===this._sel),u.appendChild(_)}t.appendChild(u)}),this._states()}_link(t,e){if(e&&this._hass&&!this._hass.states[e])return this._tell("I don't know that one",`"${e}" isn't a device in Home Assistant.`,"oops",!0),!1;let n={...this._config.entities||{}},s=t.entity||null;return(e||null)===s?delete n[t.id]:n[t.id]=e||null,this._fire({...this._config,entities:n}),this._states(),!0}kindName(t){return gy[t]||t||"Device"}usedBy(t){let e={};for(let n of this._house?this._house.floors:[])for(let s of n.devices||[]){let o=s.id===t?null:this._entityOf(s);o&&(e[o]=s.name||this.kindName(s.kind))}return e}_open(t,e){let n=this._find(t);n&&(this._pf=n.fi,this._arm=null,this._sel=t,this._plan(),this._selBox(),this._setup.open(t,null,!!e))}_setupClosed(){this._talk()}_moveMode(t){let e=this._find(t);e&&(this._pf=e.fi,this._select(t,!0),this._tell("Drag it",`Drag ${e.d.name||"it"} on the plan to its new place.`,"think"))}_states(){if(!this.shadowRoot||!this._house)return;let t=this.shadowRoot.querySelector("#devs");this._house.floors.forEach((e,n)=>{let s=t.querySelector(`details[data-floor="${e.id||`floor${n}`}"]`);if(!s)return;let o=0;for(let l of e.devices||[]){let h=[...s.querySelectorAll(".dev")].find(p=>p.dataset.id===l.id),u=this._entityOf(l),f=u&&this._hass?this._hass.states[u]:null;h&&(u&&o++,h.classList.toggle("live",!!u),h.querySelector(".lk").textContent=u?`${f&&f.attributes&&f.attributes.friendly_name||u}: ${$s(f)}`:"Not connected yet",h.querySelector(".go").textContent=u?"Change":"Set up")}s.querySelector("summary .pill").textContent=`${o} of ${(e.devices||[]).length} connected`})}_floorNow(){let t=this._house;return!t||!t.floors.length?null:((this._pf==null||!t.floors[this._pf])&&(this._pf=0),{f:t.floors[this._pf],w:this._fw[this._pf],i:this._pf})}_point(t){let e=this.shadowRoot.querySelector("#plan"),n=e.createSVGPoint();return n.x=t.clientX,n.y=t.clientY,n.matrixTransform(e.getScreenCTM().inverse())}_spot(t,e){if(e.x!=null)return[e.x,e.y];let n=(t.rooms||[]).find(l=>l.id===e.room);if(!n)return null;let s=li(Nn(n)),o=e.kind==="cover"||e.kind==="contact"?0:.32;return e.wall==="n"?[e.at,s.y0+o]:e.wall==="s"?[e.at,s.y1-o]:e.wall==="w"?[s.x0+o,e.at]:[s.x1-o,e.at]}_plan(){if(!this.shadowRoot)return;let t=w=>this.shadowRoot.querySelector(w),e=this._floorNow(),n=t("#plan"),s=t("#ptabs");if(!e){n.innerHTML="",s.innerHTML="";return}let{f:o,w:l}=e,h=this._house;s.innerHTML="",h.floors.length>1&&h.floors.forEach((w,y)=>{let v=document.createElement("button");v.className=`btn${y===this._pf?" on":""}`,v.textContent=w.name||(y===0?"Ground":`Floor ${y}`),v.addEventListener("click",()=>{this._pf=y,this._sel=null,this._plan(),this._selBox()}),s.appendChild(v)});let u=Al(this._config.theme||h.theme,{...h.colours||{},...this._config.colours||{}}),f=(o.rooms||[]).map(w=>({r:w,pts:Nn(w)})),p=li(f.flatMap(w=>w.pts)),_=.8,m=0,g="";for(let{r:w,pts:y}of f){let v=Cl(u,w,m);v.type==="bedroom"&&m++,g+=`<polygon points="${y.map(A=>A.join(",")).join(" ")}" fill="${v.floor}" stroke="#1b1b1b" stroke-width="0.14" stroke-linejoin="round"/>`}for(let w of l&&l.openings||[]){if(w.kind==="opening")continue;let[y,v,A,C]=w.b,T=w.kind==="window"||w.kind==="bifold"?"#7FD9FF":w.kind==="frontdoor"?"#7A4FC4":"#FFFDF4";g+=`<rect x="${y}" y="${v}" width="${A-y}" height="${C-v}" fill="${T}" stroke="#1b1b1b" stroke-width="0.05"/>`}for(let{r:w,pts:y}of f){if(!w.name)continue;let v=li(y),A=Math.min(.34,Math.max(.2,(v.x1-v.x0-.3)/(.6*w.name.length)));g+=`<text x="${(v.x0+v.x1)/2}" y="${v.y0+.5}" font-size="${A.toFixed(2)}" text-anchor="middle" fill="#1b1b1b" stroke="#fff" stroke-width="0.08" paint-order="stroke">${Fn(w.name)}</text>`}for(let w of o.devices||[]){let y=this._spot(o,w);if(!y)continue;let v=w.id===this._sel,A=v?"#FFD83A":this._entityOf(w)?"#9BE37A":"#E9E9E9",C=(Pe[w.kind]||Pe.sensor).replace("<svg ",'<svg x="-0.3" y="-0.3" width="0.6" height="0.6" ');g+=`<g class="pin" data-dev="${Fn(w.id)}" transform="translate(${y[0]} ${y[1]})"><title>${Fn(w.name||w.kind)}</title><circle r="${v?.5:.42}" fill="${A}" stroke="#1b1b1b" stroke-width="${v?.11:.07}"/>${C}</g>`}n.setAttribute("viewBox",`${p.x0-_} ${p.y0-_} ${p.x1-p.x0+2*_} ${p.y1-p.y0+2*_}`),n.innerHTML=g,t("#planBox").classList.toggle("arm",!!this._arm),this.shadowRoot.querySelectorAll(".kind").forEach(w=>w.classList.toggle("on",w.dataset.kind===this._arm));let b=Object.values(this._config.devices||{}).filter(w=>w===null).length;t("#hiddenBox").style.display=b?"":"none",t("#hiddenN").textContent=`${b} thing${b===1?"":"s"} from your house file hidden`}_find(t){for(let[e,n]of(this._house?this._house.floors:[]).entries()){let s=(n.devices||[]).find(o=>o.id===t);if(s)return{d:s,f:n,fi:e}}return null}_selBox(){this.shadowRoot.querySelectorAll(".dev").forEach(t=>t.classList.toggle("sel",t.dataset.id===this._sel))}_select(t,e){this._sel=t||null,this._plan(),this._selBox(),e&&this.shadowRoot.querySelector("#planBox").scrollIntoView({behavior:"smooth",block:"center"})}_armKind(t){this._arm=t,this._sel=null,this._plan(),this._selBox();let e=Lh.find(n=>n[0]===t);e?this._tell(`Adding a ${e[1].toLowerCase()}`,e[2],"think"):(this._hold=0,this._talk())}_where(t,e,n){let s=this._floorNow(),o=s&&s.w;if(!o)return{error:"I can't read this floor's walls, so I can't place things on it."};let l=p=>Math.round(p*20)/20,h=o.roomAt(e,n),u=p=>{let _=null;for(let m of o.openings){if(!p.includes(m.kind))continue;let[g,b,w,y]=m.b,v=Math.hypot(Math.max(g-e,0,e-w),Math.max(b-n,0,n-y));(!_||v<_.d)&&(_={o:m,d:v})}return _&&_.d<=1?_.o:null},f=p=>({room:p.room,wall:p.wall,at:l(p.at+p.width/2)});if(t==="cover"){let p=u(["window","bifold","garage"]);return p?f(p):{error:"Blinds go on a window. Tap on a window, patio door or garage door (the blue and cream strips on the walls)."}}if(t==="contact"||t==="lock"){let p=u(t==="lock"?["frontdoor","extdoor","door","garage"]:["window","bifold","frontdoor","extdoor","door","garage"]);if(p&&t==="contact")return f(p);if(p){let[_,m,g,b]=p.b;return{x:l((_+g)/2-p.n[0]*.3),y:l((m+b)/2-p.n[1]*.3)}}}if(t==="camera"&&!h)return{x:l(e),y:l(n)};if(!h)return{error:"Tap inside one of the rooms."};if(t==="climate"){let p=li(Nn(h)),_=[["n",n-p.y0,e,p.x0,p.x1],["s",p.y1-n,e,p.x0,p.x1],["w",e-p.x0,n,p.y0,p.y1],["e",p.x1-e,n,p.y0,p.y1]].sort((v,A)=>v[1]-A[1]),[m,g,b,w,y]=_[0];if(g<=.8)return{room:h.id,wall:m,at:l(Math.min(y-.55,Math.max(w+.55,b)))}}return{x:l(e),y:l(n)}}_place(t,e,n){let s=this._floorNow(),o=this._where(t,e,n);if(o.error){this._tell("Not there",o.error,"oops",!0);return}let l=s.w,h=o.room?(s.f.rooms||[]).find(y=>y.id===o.room):l.roomAt(o.x,o.y),u=Lh.find(y=>y[0]===t)[1].toLowerCase(),f=h&&h.name?h.name:"Outside",p=new Set(this._house.floors.flatMap(y=>(y.devices||[]).map(v=>v.name))),_=`${f} ${u}`,m=2;for(;p.has(_);)_=`${f} ${u} ${m++}`;let g=new Set([...this._fileIds,...Object.keys(this._config.devices||{})]),b=`added_${Pl(_)}`,w=2;for(;g.has(b);)b=`added_${Pl(_)}_${w++}`;this._arm=null,this._sel=b,this._fire({...this._config,devices:{...this._config.devices||{},[b]:{floor:s.f.id,kind:t,name:_,...o}}}),this._selBox(),this._tell(`${_} added!`,`To see it in 3D, switch the card to ${s.f.name||"that floor"}.`,"party"),this._setup.open(b,"pick",!0)}_move(t,e,n){let s=this._find(t);if(!s)return;let o=this._where(s.d.kind,e,n);if(o.error){this._tell("Not there",o.error,"oops",!0),this._plan();return}let l={...this._config.devices||{}},h={...l[t]||{}};for(let u of _y)delete h[u];l[t]={...h,...o},this._sel=t,this._fire({...this._config,devices:l}),this._selBox(),this._tell("Moved",`${s.d.name||"It"} is in its new place.`,"happy")}_remove(t){let e=t?this._find(t):null;if(!e)return;let n={...this._config.devices||{}},s={...this._config.entities||{}};this._fileIds.has(t)?n[t]=null:delete n[t],delete s[t],this._sel=null,this._fire({...this._config,devices:n,entities:s}),this._selBox(),this._tell("Removed",this._fileIds.has(t)?`${e.d.name||"It"} is hidden. "Put them back" under the plan brings it back.`:`${e.d.name||"It"} is gone.`,"happy")}_rename(t,e){let n=t?this._find(t):null;if(e=(e||"").trim(),!n||!e||e===n.d.name)return;let s={...this._config.devices||{}};s[t]={...s[t]||{},name:e},this._fire({...this._config,devices:s}),this._selBox(),this._states()}};customElements.get("toon-house-card-editor")||customElements.define("toon-house-card-editor",Nh);var yy="0.6.0",ts=.9,pi=2.1,Zs=2.05,Js=.2,es=(i,t,e)=>`tex|${i}|${t}|${e||""}`,vy=i=>String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),no=i=>i*Math.PI/180;function od(i,t){let e=i.entity&&t&&t.states[i.entity];if(!e)return{planned:!0,active:!1,level:1,text:""};let n=e.attributes||{},s=i.entity.split(".")[0],o=Number(e.state);switch(i.kind){case"light":case"switch":return{active:e.state==="on",text:""};case"cover":{let l=n.current_position!=null?Number(n.current_position):s==="input_number"?o:e.state==="open"?100:0;return{active:l<99,level:Math.max(0,Math.min(100,l))/100,text:`${Math.round(l)}%`}}case"climate":{let l=n.current_temperature!=null?n.current_temperature:n.temperature!=null?n.temperature:o;return{active:n.hvac_action==="heating"||s==="input_number"&&o>=21,text:Number.isFinite(Number(l))?`${Number(l).toFixed(1)}\xB0`:e.state}}case"lock":return{active:e.state==="locked",text:e.state==="locked"?"locked":"unlocked"};case"motion":return{active:e.state==="on",text:""};case"contact":return{active:e.state==="on",text:e.state==="on"?"open":""};case"camera":return{active:["streaming","recording"].includes(e.state),text:""};case"speaker":case"tv":return{active:["playing","on"].includes(e.state),text:e.state==="playing"?"playing":""};default:return{active:!1,text:`${e.state}${n.unit_of_measurement||""}`}}}var Fh=class extends HTMLElement{static getStubConfig(){return{view:"ground",layout:{title:"My house",floors:[{id:"ground",name:"Ground",rooms:[{id:"living",name:"Living room",rect:[0,0,5,4]},{id:"kitchen",name:"Kitchen",rect:[5,0,8.5,4]},{id:"hall",name:"Hall",rect:[0,4,8.5,5.6]}],openings:[{room:"hall",wall:"s",at:3.8,width:1,kind:"frontdoor"},{room:"living",wall:"n",at:1.5,width:2,kind:"window"},{room:"kitchen",wall:"n",at:6,width:1.5,kind:"window"},{room:"living",wall:"s",at:2,width:.85,kind:"door"},{room:"kitchen",wall:"s",at:6.2,width:.85,kind:"door"}],furniture:[{type:"sofa",x:2.5,y:3.3,rot:180},{type:"table",x:6.8,y:2.2}],devices:[{name:"Living room light",kind:"light",x:2.5,y:2,entity:null}]}]}}}static getConfigElement(){return document.createElement("toon-house-card-editor")}setConfig(t){if(!t||!t.layout)throw new Error('Set "layout" to the address of your house file (for example /local/toon-house/house.json) or put the house in the card config.');let e=this._config&&t.view!==void 0&&this._config.view!==t.view;e&&(this._mode=null),this._config={view:"outside",cut_height:1.2,...t},this.shadowRoot||(Rl(),this.attachShadow({mode:"open"}),this._dom()),this._config.height?this.style.setProperty("--toon-house-h",typeof this._config.height=="number"?`${this._config.height}px`:this._config.height):this.style.removeProperty("--toon-house-h");let n=JSON.stringify([this._config.layout,this._config.theme||null,this._config.colours||null,this._config.cut_height]),s=JSON.stringify(this._config.devices||null);if(n===this._srcKey&&this._raw&&this._floors){if(s!==this._overKey){this._overKey=s,this._rebuild(e);return}this._applyEntities(),this._header(),e?(this._pickMode(),this._renderer&&this._build(!0)):this._devs&&(this._sig=this._signature(),this._syncDevices(),this._req());return}this._srcKey=n,this._overKey=s,this._loadLayout()}getCardSize(){return 12}set hass(t){if(this._hass=t,!this._devs)return;let e=this._signature();e!==this._sig&&(this._sig=e,this._syncDevices(),this._req())}connectedCallback(){this._connected=!0,this._ensure()}disconnectedCallback(){this._connected=!1,this._teardown()}_dom(){this.shadowRoot.innerHTML=`<style>
      :host{display:block}
      ha-card{position:relative;overflow:hidden;font-family:${Il};font-weight:500;color:#1b1b1b}
      .wrap{position:relative;height:var(--toon-house-h,calc(100vh - 60px));min-height:var(--toon-house-min-h,380px)}
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
- `)}`,"",2e4))}async _loadLayout(){let t=this._config.layout,e=this._srcKey;this._failed&&(this._failed=!1,this._dom());try{let n=t;if(typeof t=="string"){let s=await fetch(`${t}${t.includes("?")?"&":"?"}v=${Date.now()}`);if(!s.ok)throw new Error(`the server answered ${s.status}`);n=await s.json()}if(e!==this._srcKey)return;this._raw=JSON.stringify(n),this._layout=JSON.parse(this._raw),this._prepare()}catch(n){this._fail(`Could not read the house file${typeof t=="string"?` at ${t}`:""}: ${n.message}`);return}this._renderer?this._build(!0):this._ensure()}_rebuild(t){try{this._layout=JSON.parse(this._raw),this._prepare()}catch(e){this._fail(`Something is wrong with the devices in the card settings: ${e.message}`);return}this._renderer?this._build(!!t):this._ensure()}_prepare(){let t=this._layout;if(!t||!Array.isArray(t.floors)||!t.floors.length)throw new Error('it needs a "floors" list with at least one floor');this.theme=Al(this._config.theme||t.theme,{...t.colours||{},...this._config.colours||{}}),this._H=t.storey_height||2.4,this._warnings=[];let e=0;io(t,this._config.devices),this._floors=t.floors.map((u,f)=>{if(u.id=u.id||`floor${f}`,u.name=u.name||(f===0?"Ground":f===1?"Upstairs":`Floor ${f}`),u.rooms=u.rooms||[],!u.rooms.length)throw new Error(`floor "${u.name}" has no rooms`);u.rooms.forEach((m,g)=>{m.id=m.id||`${u.id}_room${g}`,m.name=m.name||"",m.points=Nn(m)});for(let m of u.devices||[])m._file=m.entity===void 0?null:m.entity;let p=El(u);this._warnings.push(...p.warnings);let _={};for(let m of u.rooms)_[m.id]=Cl(this.theme,m,e),_[m.id].type==="bedroom"&&e++;for(let m of u.devices||[])m.x==null&&!(m.room&&m.wall&&m.at!=null)?this._warnings.push(`Device "${m.name||m.id}" needs either x and y, or room, wall and at.`):m.room&&!u.rooms.some(g=>g.id===m.room)&&this._warnings.push(`Device "${m.name||m.id}" points at room "${m.room}", which is not on ${u.name}.`);return{floor:u,walls:p,styles:_,off:u.offset||[0,0],baseY:f*(this._H+Js)}}),this._applyEntities(),this._pickMode(),this._header();let n=this.shadowRoot.querySelector(".modes");n.innerHTML="";let s=(u,f)=>{let p=document.createElement("button");p.textContent=u,p.dataset.mode=String(f),p.addEventListener("click",()=>this._setMode(f)),n.appendChild(p)};this._floors.forEach((u,f)=>s(u.floor.name,f)),s("Outside","whole");let o=this.shadowRoot.querySelector(".warn");o.style.display=this._warnings.length?"":"none",o.textContent=`! ${this._warnings.length}`;let l=li(this._floors.flatMap(u=>u.floor.rooms.flatMap(f=>f.points.map(([p,_])=>[p+u.off[0],_+u.off[1]]))));this._house=l;let h=t.outside||{};this._plot={x0:l.x0-2,x1:l.x1+2,back:l.y0-9,front:l.y1+7,...h.plot||t.plot||{}}}_pickMode(){if(typeof this._mode=="number"&&this._mode>=this._floors.length&&(this._mode=null),this._mode!=null)return;let t=String(this._config.view),e=this._floors.findIndex(n=>n.floor.id===t);this._mode=e>=0?e:/^\d+$/.test(t)&&Number(t)<this._floors.length?Number(t):t==="ground"?0:"whole"}_header(){this.shadowRoot.querySelector("h1").textContent=this._config.title!=null?this._config.title:this._layout&&this._layout.title||""}_applyEntities(){let t=this._config.entities||{},e=n=>Object.prototype.hasOwnProperty.call(t,n);for(let n of this._floors||[])for(let s of n.floor.devices||[])s.entity=e(s.id)?t[s.id]:s.name&&e(s.name)?t[s.name]:s._file}_fail(t){this._failed=!0,this._floors=null,this._srcKey=null,this._raw=null,this._teardown(),this._wrap.innerHTML=`<div class="err">${vy(t)}</div>`}_ensure(){if(!this._connected||!this._layout||!this._floors||this._renderer)return;let t;try{t=new ml({antialias:!0,alpha:!1,powerPreference:"low-power"})}catch{this._fail("This browser could not start 3D graphics (WebGL2), so the house cannot be drawn here.");return}this._renderer=t,t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this._wrap.insertBefore(t.domElement,this._wrap.firstChild),this._scene=new dr,this._camera=new je(32,1,.5,600),this._scene.add(new Lr(16777215,14207928,1.55));let e=new Nr(16777215,2.1);e.position.set(-9,14,12),this._scene.add(e),this._controls=new yl(this._camera,t.domElement),this._controls.enableDamping=!1,this._controls.minDistance=4,this._controls.maxDistance=160,this._controls.maxPolarAngle=1.48,this._controls.addEventListener("change",()=>this._req());let n=t.domElement;this._onDown=s=>{this._down=[s.clientX,s.clientY]},this._onUp=s=>{this._down&&Math.hypot(s.clientX-this._down[0],s.clientY-this._down[1])<6&&this._pick(s.clientX,s.clientY),this._down=null},n.addEventListener("pointerdown",this._onDown),n.addEventListener("pointerup",this._onUp),this._ro=new ResizeObserver(()=>this._resize()),this._ro.observe(this._wrap),this._resize(),this._build(!0)}_teardown(){if(this._raf&&cancelAnimationFrame(this._raf),this._raf=0,this._ro&&this._ro.disconnect(),this._ro=null,this._controls&&this._controls.dispose(),this._controls=null,this._clear(),this._renderer){let t=this._renderer.domElement;t.removeEventListener("pointerdown",this._onDown),t.removeEventListener("pointerup",this._onUp),this._renderer.dispose(),this._renderer.forceContextLoss(),t.remove()}this._renderer=null,this._scene=null,this._devs=null}_clear(){this._root&&(this._root.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())}),this._scene.remove(this._root),this._root=null,this._gradient&&this._gradient.dispose(),this._labels.innerHTML="")}_resize(){if(!this._renderer)return;let t=this._wrap.clientWidth,e=this._wrap.clientHeight;!t||!e||(this._renderer.setSize(t,e,!1),this._camera.aspect=t/e,this._camera.updateProjectionMatrix(),this._needView&&this._view(),this._req())}_setMode(t){t!==this._mode&&(this._mode=t,this._renderer&&this._build(!0))}_material(t,e){let n={gradientMap:this._gradient,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,side:ui,...e};if(!t.startsWith("tex|"))return new qn({color:t,...n});let[,s,o,l]=t.split("|"),h=new Rs(Kf(s,o,l||null));h.wrapS=h.wrapT=Gn,h.colorSpace=Ke,h.anisotropy=4;let u=Ch[s]||1;return h.repeat.set(1/u,1/u),new qn({color:16777215,map:h,...n})}_batch(){let t=this;return{by:new Map,glass:[],edges:[],add(e,n,s=!0){let o=e.index?e.toNonIndexed():e;if(o!==e&&e.dispose(),s){let l=new vr(o,28);this.edges.push(l.attributes.position.array),l.dispose()}if(n==="glass"){o.deleteAttribute("uv"),this.glass.push(o);return}n.startsWith("tex|")||o.deleteAttribute("uv"),(this.by.get(n)||this.by.set(n,[]).get(n)).push(o)},box(e,n,s,o,l,h,u,f=0,p=!0){if(h-l<.004||s<.004||o<.004)return;let _=new He(s,h-l,o);f&&_.rotateY(-no(f)),_.translate(e,(l+h)/2,n),this.add(_,u,p)},flat(e,n,s,o=!0){let l=new vn(t._shape(e));l.rotateX(Math.PI/2),l.translate(0,n,0),this.add(l,s,o)},rect(e,n,s,o,l,h,u=!0){this.flat({o:[[e,n],[s,n],[s,o],[e,o]],h:[]},l,h,u)},shape(e,n,s,o=!0){let l=new vn(t._shape(e));l.applyMatrix4(n),this.add(l,s,o)},prism(e,n,s,o,l=!0){let h=new Yn(t._shape(e),{depth:s-n,bevelEnabled:!1});h.rotateX(Math.PI/2),h.translate(0,s,0),this.add(h,o,l)},quad(e,n,s,o,l,h=!0){let u=new Ne,f=[e,n,s,e,s,o].flat();u.setAttribute("position",new ge(f,3)),u.setAttribute("uv",new ge(new Array(12).fill(0),2)),u.computeVertexNormals(),this.add(u,l,h)},build(e){for(let[n,s]of this.by){let o=new Re(Eh(s),t._material(n));s.forEach(l=>l.dispose()),e.add(o)}if(this.glass.length){let n=new Re(Eh(this.glass),new Ve({color:t.theme.glass,transparent:!0,opacity:.45,depthWrite:!1,side:ui}));this.glass.forEach(s=>s.dispose()),n.renderOrder=2,e.add(n)}if(this.edges.length){let n=this.edges.reduce((h,u)=>h+u.length,0),s=new Float32Array(n),o=0;for(let h of this.edges)s.set(h,o),o+=h.length;let l=new Xs;l.setPositions(s),e.add(new Ml(l,new Ws({color:t.theme.ink,linewidth:t._ink()})))}}}}_shape(t){let e=new an(t.o.map(n=>new _t(n[0],n[1])));for(let n of t.h||[])e.holes.push(new Xn(n.map(s=>new _t(s[0],s[1]))));return e}_ink(){return this._wrap.clientWidth<600?1.6:2.4}_outlined(t,e,n=.035){let s=new yi,o=new Re(t,e);t.computeBoundingSphere();let l=t.boundingSphere.radius||.2,h=1+n/l,u=new Re(t,new Ve({color:this.theme.ink,side:Xe}));return u.scale.set(h,h,h),s.add(u,o),s.userData.mesh=o,s}_toon(t){return new qn({color:t,gradientMap:this._gradient})}_build(t){let e=this.theme,n=this._H,s=this._config.cut_height,o=this._mode;this._clear();let l=new Ps(new Uint8Array(e.shade),e.shade.length,1,Gr);l.minFilter=l.magFilter=Oe,l.needsUpdate=!0,this._gradient=l,this._scene.background=new de(e.sky),this.shadowRoot.querySelector("ha-card").style.background=e.sky;let h=this._root=new yi;this._scene.add(h),this._devs=[],this._pickables=[],this._roomLabels=[],this._tweens=[],this._outside(h),this._floors.forEach((u,f)=>{if(o!=="whole"&&f>o)return;let p=o===f;this._floor(h,u,f,p?s:n,p)}),o==="whole"&&this._roofs(h),this.shadowRoot.querySelectorAll("button[data-mode]").forEach(u=>u.classList.toggle("on",u.dataset.mode===String(o))),this._sig=this._signature(),this._syncDevices(),t&&this._view(),this._req()}_view(){let t=this._mode,e=this._wrap.clientWidth,n=this._wrap.clientHeight;if(!e||!n){this._needView=!0;return}this._needView=!1;let s=this._house,o=(s.x0+s.x1)/2,l=(s.y0+s.y1)/2,h=Math.max(s.x1-s.x0,s.y1-s.y0,6),u=e/n,f=Math.max(1,.95/u),p=t==="whole",_=this._floors.length*(this._H+Js),m=p?[o,_*.4,l+h*.1]:[o,this._floors[t].baseY+.4,l+h*.04],g=new k(...p?[.46,.36,.81]:[.22,.8,.56]).normalize().multiplyScalar((p?h*3.3+_*.8:h*2.45)*f);this._controls.target.set(...m),this._camera.position.set(m[0]+g.x,m[1]+g.y,m[2]+g.z),this._controls.update()}_outside(t){let e=this.theme,n=this._plot,s=this._layout.outside||{},o=this._batch(),l=new yi,h=(n.x0+n.x1)/2,u=n.x1-n.x0,f=this._house,p=this._floors[0];if(o.box(h,(n.back+n.front)/2,u+.4,n.front-n.back+.4,-1.4,-.3,e.earth),o.box(h,(n.back+n.front)/2,u,n.front-n.back,-.3,-.08,e.lawn),o.rect(n.x0+.05,n.back+.05,n.x1-.05,n.front-.05,-.075,es("stripes",e.lawn,e.lawn2),!1),s.road!==!1){o.box(h,n.front+.9,u+.4,1.4,-1.4,-.14,e.kerb),o.box(h,n.front+3.9,u+.4,4.6,-1.4,-.22,e.road);for(let N=n.x0+1;N<n.x1-1;N+=3)o.rect(N,n.front+3.8,N+1.5,n.front+3.98,-.215,e.white,!1)}let _=p.walls.openings.find(N=>N.kind==="frontdoor"),m=p.walls.openings.find(N=>N.kind==="garage"&&N.n[1]===1),g=s.drive||s.drives,b=s.path||s.paths,w=N=>!N||!N.length?[]:Array.isArray(N[0])?N:[N];g==null&&m&&(g=[[m.b[0]-.4,m.b[3],m.b[2]+.4,n.front]]),b==null&&_&&_.n[1]===1&&(b=[[_.b[0]-.1,_.b[3],_.b[2]+.1,n.front]]),g=w(g),b=w(b);for(let N of b)o.box((N[0]+N[2])/2,(N[1]+N[3])/2,N[2]-N[0],N[3]-N[1],-.08,-.05,e.path);for(let N of g)o.box((N[0]+N[2])/2,(N[1]+N[3])/2,N[2]-N[0],N[3]-N[1],-.08,-.045,e.drive),o.rect(N[0]+.03,N[1]+.03,N[2]-.03,N[3]-.03,-.04,es("paving",e.drive,e.drive2),!1);for(let N of w(s.patio||s.patios))o.box((N[0]+N[2])/2,(N[1]+N[3])/2,N[2]-N[0],N[3]-N[1],-.08,-.04,e.patio),o.rect(N[0]+.03,N[1]+.03,N[2]-.03,N[3]-.03,-.035,es("tile",e.patio,e.patio2),!1);let y=(N,G)=>[...g,...b].some(H=>N>H[0]-.3&&N<H[2]+.3&&G>H[1]-.3&&G<H[3]+.3),v=Math.min(f.y1,Math.max(f.y0+2,(f.y0+f.y1)/2)),A=s.fence||["w","n","e"],C=s.hedge||[],T=N=>N==="n"?[n.x0,n.back+.06,n.x1,n.back+.06]:N==="w"?[n.x0+.06,n.back,n.x0+.06,v]:N==="e"?[n.x1-.06,n.back,n.x1-.06,v]:[n.x0,n.front-.06,n.x1,n.front-.06];for(let N of A){if(C.includes(N))continue;let[G,H,B,W]=T(N),K=Math.hypot(B-G,W-H),J=H===W,at=N==="s",tt=at?.9:1.6,nt=new vn(this._shape({o:[[0,-.08],[K,-.08],[K,tt],[0,tt]],h:[]})),st=new _e().makeBasis(J?new k(1,0,0):new k(0,0,1),new k(0,1,0),J?new k(0,0,1):new k(-1,0,0)).setPosition(G,0,H);nt.applyMatrix4(st),o.add(nt,es("planks",e.fence,e.fencePost),!0);for(let Tt=0;Tt<=K+.01;Tt+=K/Math.max(1,Math.round(K/1.9)))o.box(J?G+Tt:G,J?H:H+Tt,.16,.16,-.08,tt+.14,e.fencePost)}o.build(l);let R=(N,G,H,B,W,K=1,J=.07)=>{let at=this._outlined(new Ai(B,18,12),this._toon(W),J);at.position.set(N,G,H),at.scale.y=K,l.add(at)};for(let N of C){let[G,H,B,W]=T(N),K=Math.hypot(B-G,W-H),J=Math.max(2,Math.round(K/1.15)),at=N==="w"?.7:N==="e"?-.7:0,tt=N==="n"?.7:N==="s"?-.7:0;for(let nt=0;nt<=J;nt++){let st=G+(B-G)*nt/J+at,Tt=H+(W-H)*nt/J+tt;st>f.x0-1.3&&st<f.x1+1.3&&Tt>f.y0-1.3&&Tt<f.y1+1.3||R(st,.75+nt%2*.1,Tt,.95,e.leaf[nt%2?0:2],.95)}}let L=N=>{let G=N.size||1,H=N.colour||(N.blossom?e.blossom:e.leaf[0]),B=this._outlined(new on(.16*G,.24*G,1.7*G,10),this._toon(e.trunk));B.position.set(N.x,.85*G-.08,N.y),l.add(B);for(let[W,K,J,at]of[[0,2.35,0,1.2],[-.85,1.85,.2,.85],[.9,1.9,-.1,.8],[.1,1.8,.85,.75],[-.2,1.9,-.8,.7]])R(N.x+W*G,K*G,N.y+J*G,at*G,H)};(s.trees||[{x:n.x0+2.2,y:n.back+2.6,size:1.2},{x:n.x1-2.6,y:n.back+4.2,size:.95,colour:e.leaf[1]},{x:n.x1-1.7,y:n.front-2.2,size:.8,blossom:!0}]).forEach(L);for(let N of p.walls.openings){if(N.kind!=="window"||!N.ext||s.bushes===!1)continue;let G=(N.b[0]+N.b[2])/2+N.n[0]*.75,H=(N.b[1]+N.b[3])/2+N.n[1]*.75;if(y(G,H))continue;let B=N.n[0]===0?1:0,W=N.n[0]===0?0:1;R(G-B*.4,.3,H-W*.4,.5,e.leaf[1],.85,.05),R(G+B*.4,.26,H+W*.4,.44,e.leaf[0],.85,.05)}if(s.flowers!==!1){let N=this._batch();for(let G=n.x0+1,H=0;G<n.x1-1;G+=.55,H++){let B=new Ai(.13,8,6);B.translate(G,.12+H%3*.05,n.back+.6+H%2*.3),N.add(B,e.flowers[H%e.flowers.length],!1)}N.build(l)}if(s.mailbox!==!1&&_&&b.length){let N=b[0],G=N[2]+.5,H=n.front-.6,B=this._batch();B.box(G,H,.1,.1,-.08,.95,e.fencePost),B.box(G,H,.32,.5,.95,1.25,e.bad),B.build(l)}let E=()=>new Ve({color:e.cloud}),D=Math.max(u,n.front-n.back);for(let[N,G,H,B]of[[-.9,10,-.5,1.5],[1.3,12,-.2,1.9],[.4,14,-1.3,2.3],[-1.1,9,.6,1.2],[1.6,15,-1.2,2]])for(let[W,K,J,at]of[[0,0,0,1],[1.1,-.15,.1,.75],[-1.1,-.2,0,.7],[.3,.45,-.1,.7]]){let tt=this._outlined(new Ai(at*B,16,10),E(),.09);tt.position.set(h+N*D*.55+W*B,G+K*B,(n.back+n.front)/2+H*D*.5+J*B),tt.scale.y=.7,l.add(tt)}let U=this._outlined(new Ai(2.4,24,16),new Ve({color:e.sun}),.12);U.position.set(h+D*.9,19,n.back-D*.4),l.add(U),t.add(l)}_floor(t,e,n,s,o){let l=this.theme,{floor:h,walls:u,styles:f,off:p,baseY:_}=e,m=this._batch(),g=new yi;g.position.set(p[0],_,p[1]);for(let A of u.slab)m.prism(A,n===0?-.22:-Js,0,n===0?l.slab:this._exteriorKey());for(let A of h.rooms){let C=f[A.id];m.flat({o:A.points,h:[]},.02,C.pattern==="plain"||!Ch[C.pattern]?C.floor:es(C.pattern,C.floor,C.floor2),!1)}this._walls(m,e,s);let b=new Set((h.devices||[]).filter(A=>A.kind==="cover").map(A=>this._openingFor(e,A)).filter(Boolean));for(let A of u.openings)this._opening(m,e,A,s,b.has(A));for(let A of h.rooms){if(f[A.id].type!=="stairs"||n!==0||this._floors.length<2)continue;let C=li(A.points),T=C.y1-C.y0>=C.x1-C.x0,R=12,L=A.up||(T?"n":"e"),O=(T?C.y1-C.y0:C.x1-C.x0)-.5,E=O/R,D=(T?C.x1-C.x0:C.y1-C.y0)-.2;for(let U=0;U<R;U++){let N=.1+E*(U+.5),G=Math.min(s+.6,(this._H+Js)/R*(U+1));T?m.box((C.x0+C.x1)/2,L==="n"?C.y1-N:C.y0+N,D,E,0,G,l.woodLight):m.box(L==="e"?C.x0+N:C.x1-N,(C.y0+C.y1)/2,E,D,0,G,l.woodLight)}}let w=s<2?s+.2:9,y=0;for(let A of h.furniture||[]){let C=R=>(R.rotateY(-no(A.rot||0)),R.translate(A.x,0,A.y),R),T=A.type==="bed"||A.type==="single_bed";for(let[R,L,O,E,D,U,N,G]of jf(A,l,y)){let H=Math.min(U,w);if(H-D<.01)continue;let B,W=A.type!=="rug";G==="cyl"?(B=new on(O/2,O/2,H-D,14),W=!1):G==="ball"?(B=new Ai(O/2,12,8),W=!1):G==="wheel"?(B=new on(O/2,O/2,E,14),B.rotateZ(Math.PI/2),W=!1):B=new He(O,H-D,E),B.translate(R,(D+H)/2,L),m.add(C(B),N,W)}T&&y++}m.build(g),t.add(g);let v=this._mode==="whole";for(let A of h.devices||[]){if(A.x==null&&!(A.room&&A.wall&&A.at!=null)||A.room&&!h.rooms.some(T=>T.id===A.room))continue;let C=A.kind==="cover"&&this._openingFor(e,A);!o&&!(v&&A.kind==="camera")&&!C||this._device(g,e,A,s,o||v)}if(o)for(let A of h.rooms){if(!A.name)continue;let C=li(A.points),T=document.createElement("div");T.className="rl",T.textContent=A.name,this._labels.appendChild(T);let R=A.label||[(C.x0+C.x1)/2,(C.y0+C.y1)/2];this._roomLabels.push({el:T,pos:new k(p[0]+R[0],_+.1,p[1]+R[1]),small:C.x1-C.x0<1.7||C.y1-C.y0<1.7})}}_exteriorKey(){let t=this.theme;return t.exteriorPattern?es(t.exteriorPattern,t.exterior,t.exterior2):t.exterior}_cutRange(t,e){let n=t.kind==="window"?ts:0,s=t.kind==="window"||t.kind==="bifold"||t.kind==="garage"?pi:Zs;return n>=e-.02?null:[n,s>=e-.05?e:s]}_walls(t,e,n){let s=this.theme,o=e.walls,l=this._exteriorKey(),h=o.openings.filter(m=>m.kind!=="opening").map(m=>({o:m,r:this._cutRange(m,n)})).filter(m=>m.r),u=new k,f=new k(0,1,0),p=new k,_=new _e;for(let m of o.solid)for(let g of[m.o,...m.h])for(let b=0;b<g.length;b++){let w=g[b],y=g[(b+1)%g.length],v=y[0]-w[0],A=y[1]-w[1],C=Math.hypot(v,A);if(C<.004)continue;let T=A/C,R=-v/C,L=(w[0]+y[0])/2+T*.07,O=(w[1]+y[1])/2+R*.07,E=o.roomAt(L,O),D=E?e.styles[E.id].wall:o.isInside(L,O)?s.inner:l,U=Math.abs(A)<1e-6,N=Math.abs(v)<1e-6,G=[];for(let{o:B,r:W}of h){let K=B.n[0]===0;if(K&&!U||!K&&!N)continue;let[J,at,tt,nt]=B.b;if(K){if(w[1]<at-.012||w[1]>nt+.012)continue;let st=Math.max(J,Math.min(w[0],y[0])),Tt=Math.min(tt,Math.max(w[0],y[0]));if(Tt-st<.02)continue;let Et=Math.abs(st-y[0]),$t=Math.abs(Tt-y[0]);G.push({u0:Math.min(Et,$t),u1:Math.max(Et,$t),v0:W[0],v1:W[1]})}else{if(w[0]<J-.012||w[0]>tt+.012)continue;let st=Math.max(at,Math.min(w[1],y[1])),Tt=Math.min(nt,Math.max(w[1],y[1]));if(Tt-st<.02)continue;let Et=Math.abs(st-y[1]),$t=Math.abs(Tt-y[1]);G.push({u0:Math.min(Et,$t),u1:Math.max(Et,$t),v0:W[0],v1:W[1]})}}u.set(-v/C,0,-A/C),p.crossVectors(u,f),_.makeBasis(u,f,p).setPosition(y[0],0,y[1]);let H=G.length?Zf(C,n,G):[{o:[[0,0],[C,0],[C,n],[0,n]],h:[]}];for(let B of H)t.shape(B,_,D,!0)}for(let{o:m,r:g}of h){let[b,w,y,v]=m.b,[A,C]=g,T=s.wallCut;m.n[0]===0?(t.quad([b,A,w],[b,A,v],[b,C,v],[b,C,w],T),t.quad([y,A,w],[y,A,v],[y,C,v],[y,C,w],T)):(t.quad([b,A,w],[y,A,w],[y,C,w],[b,C,w],T),t.quad([b,A,v],[y,A,v],[y,C,v],[b,C,v],T)),A>0&&t.quad([b,A,w],[y,A,w],[y,A,v],[b,A,v],T),C<n-.001&&t.quad([b,C,w],[y,C,w],[y,C,v],[b,C,v],T)}for(let m of o.cap(h.filter(g=>g.r[1]>=n-.001).map(g=>g.o)))t.flat(m,n,s.wallCut,!0)}_obox(t,e,n,s,o,l=1,h=0,u=1,f=!0,p=0){if(s-n<.01)return;let[_,m,g,b]=e.b;if(e.n[0]===0){let y=g-_,v=(b-m)*l;t.box(_+y*(h+u)/2,(m+b)/2+e.n[1]*p,y*(u-h),v,n,s,o,0,f)}else{let y=b-m,v=(g-_)*l;t.box((_+g)/2+e.n[0]*p,m+y*(h+u)/2,v,y*(u-h),n,s,o,0,f)}}_opening(t,e,n,s,o){let l=this.theme,h=n.n[0]===0,u=h?n.b[2]-n.b[0]:n.b[3]-n.b[1],f=h?n.b[3]-n.b[1]:n.b[2]-n.b[0],p=.07/u,_=(g,b,w)=>{this._obox(t,n,g,b,l.trim,.45,0,p),this._obox(t,n,g,b,l.trim,.45,1-p,1),this._obox(t,n,b-.07,b,l.trim,.45,p,1-p);for(let y=1;y<w;y++)this._obox(t,n,g,b-.07,l.trim,.45,y/w-p/2,y/w+p/2);this._obox(t,n,g,b-.07,"glass",.12,p,1-p,!1)},m=s>=pi;switch(n.kind){case"window":{if(this._obox(t,n,ts-.07,ts+.03,l.trim,1+.2/f,-.04/u,1+.04/u,!0,.06),_(ts+.03,pi,u>1.25?3:u>.8?2:1),m&&n.ext){let g=Math.min(.32,u*.2)/u,b=-(f/2+.05);this._obox(t,n,ts-.15,pi+.08,l.curtain,.06/f,0,g,!0,b),this._obox(t,n,ts-.15,pi+.08,l.curtain,.06/f,1-g,1,!0,b)}break}case"bifold":_(0,pi,Math.max(2,Math.round(u/.75)));break;case"frontdoor":case"extdoor":{let g=n.colour||(n.kind==="frontdoor"?l.door:l.doorInner);this._obox(t,n,0,Zs-.06,g,.3,p,1-p),this._obox(t,n,0,Zs,l.trim,.5,0,p),this._obox(t,n,0,Zs,l.trim,.5,1-p,1),this._obox(t,n,Zs-.06,Zs,l.trim,.5,p,1-p),this._obox(t,n,.95,1.07,l.knob,.1/f,1-p-.14/u,1-p-.04/u,!0,f*.15+.06),n.kind==="frontdoor"&&(this._obox(t,n,1.35,1.75,"glass",.34,.3,.7,!1),this._obox(t,n,-.08,.02,l.path,.6/f,-.15/u,1+.15/u,!0,f/2+.3));break}case"garage":if(!o){this._obox(t,n,0,Math.min(pi,s),l.garage,.2);for(let g=.5;g<Math.min(pi,s)-.1;g+=.5)this._obox(t,n,g,g+.03,l.garage2,.24,.03,.97,!1)}break;case"door":{let g=Math.min(2,s),[b,w,y,v]=n.b,A=u-.06,C=no(72),T=h?b+.03:(b+y)/2,R=h?(w+v)/2:w+.03,L=h?1:0,O=h?0:1,E=Math.cos(C)*L-Math.sin(C)*n.n[0],D=Math.cos(C)*O-Math.sin(C)*n.n[1],U=new He(A,g,.05);U.rotateY(Math.atan2(-D,E)),U.translate(T+E*A/2,g/2,R+D*A/2),t.add(U,l.doorInner,!0);break}default:}}_roofs(t){let e=this._layout,n=this.theme,s=this._H,o=this._batch(),l=new yi,h=g=>g*(s+Js)-Js,u=e.roofs;if(!Array.isArray(u)){u=[];let g=this._floors[this._floors.length-1],b=li(g.floor.rooms.flatMap(w=>w.points.map(([y,v])=>[y+g.off[0],v+g.off[1]])));u.push({type:"gable",rect:[b.x0,b.y0,b.x1,b.y1],level:this._floors.length,ridge:b.x1-b.x0>=b.y1-b.y0?"x":"y"});for(let w=0;w<this._floors.length-1;w++){let y=this._floors[w],v=this._floors[w+1];for(let A of Jf(y.walls.slab,v.walls.slab,[v.off[0]-y.off[0],v.off[1]-y.off[1]]))u.push({type:"flat",points:A.o.map(([C,T])=>[C+y.off[0],T+y.off[1]]),level:w+1})}}let f=n.roofPattern?es(n.roofPattern,n.roof,n.roof2):n.roof,p=this._exteriorKey(),_=(g,b,w,y,v,A)=>{let C=new _e().makeBasis(w,y,new k().crossVectors(w,y)).setPosition(b).premultiply(g),T=new vn(this._shape({o:[[0,0],[v,0],[v,A],[0,A]],h:[]}));T.translate(0,0,.012),T.applyMatrix4(C),o.add(T,f,!0);let R=new He(v,A,.13);R.translate(v/2,A/2,-.065),R.applyMatrix4(C),o.add(R,n.trim,!0)},m=g=>new _e().makeRotationY(g);for(let g of u){let b=g.base!=null?g.base:h(g.level||this._floors.length);if(g.type==="flat"){let E=g.points||[[g.rect[0],g.rect[1]],[g.rect[2],g.rect[1]],[g.rect[2],g.rect[3]],[g.rect[0],g.rect[3]]],D=li(E),U=N=>({o:E.map(([G,H])=>[G+Math.sign(G-(D.x0+D.x1)/2)*N,H+Math.sign(H-(D.y0+D.y1)/2)*N]),h:[]});o.prism(U(Dn+.14),b,b+.16,n.trim),o.prism(U(Dn+.02),b+.16,b+.22,n.roof);continue}let[w,y,v,A]=g.rect,C=w-Dn,T=v+Dn,R=y-Dn,L=A+Dn,O=g.overhang!=null?g.overhang:.45;if(g.type==="gable"){let E=(g.ridge||"y")==="y",D=E?new _e:m(Math.PI/2),[U,N,G,H]=E?[C,T,R,L]:[-L,-R,C,T],B=no(g.pitch||30),W=(N-U)/2,K=W*Math.tan(B),J=(U+N)/2,at=O*.8,tt=new Yn(new an([new _t(U,0),new _t(N,0),new _t(J,K)]),{depth:H-G,bevelEnabled:!1});tt.translate(0,b,G),tt.applyMatrix4(D),o.add(tt,p);let nt=(W+O)/Math.cos(B)+.05,st=H-G+2*at,Tt=b-O*Math.tan(B);_(D,new k(J-W-O,Tt,G-at),new k(0,0,1),new k(Math.cos(B),Math.sin(B),0),st,nt),_(D,new k(J+W+O,Tt,H+at),new k(0,0,-1),new k(-Math.cos(B),Math.sin(B),0),st,nt)}else if(g.type==="lean"){let E=g.high||"n",D=g.rise!=null?g.rise:.6,U=m({n:0,s:Math.PI,w:Math.PI/2,e:-Math.PI/2}[E]||0),[N,G,H,B]={n:[C,T,R,L],s:[-T,-C,-L,-R],w:[-L,-R,C,T],e:[R,L,-T,-C]}[E]||[C,T,R,L],W=B-H,K=Math.atan2(D,W),J=g.side_overhang!=null?g.side_overhang:.2,at=new Yn(new an([new _t(0,0),new _t(W,0),new _t(W,D+.06)]),{depth:G-N,bevelEnabled:!1});at.applyMatrix4(new _e().makeBasis(new k(0,0,-1),new k(0,1,0),new k(1,0,0)).setPosition(N,b,B).premultiply(U)),o.add(at,p),_(U,new k(N-J,b+.08-O*Math.tan(K),B+O),new k(1,0,0),new k(0,Math.sin(K),-Math.cos(K)),G-N+2*J,(W+O)/Math.cos(K))}}for(let g of e.chimneys||[]){let b=g.w||.6,w=g.d||.6,y=g.top||h(this._floors.length)+3.2,v=g.from!=null?g.from:h(this._floors.length);o.box(g.x,g.y,b,w,v,y,n.chimney),o.box(g.x,g.y,b+.16,w+.16,y,y+.12,n.trim),o.box(g.x,g.y,b*.45,w*.45,y+.12,y+.42,n.chimney),g.smoke!==!1&&[[.15,.95,.28],[.5,1.6,.4],[.2,2.5,.55]].forEach(([A,C,T])=>{let R=this._outlined(new Ai(T,14,10),new Ve({color:n.cloud}),.05);R.position.set(g.x+A,y+C,g.y),l.add(R)})}o.build(l),t.add(l)}_openingFor(t,e){return!e.wall||e.at==null?null:t.walls.openings.find(n=>n.room===e.room&&n.wall===e.wall&&n.at<=e.at&&e.at<=n.at+n.width)||null}_device(t,e,n,s,o){let l=this.theme,h=e.floor,u=e.off,f=h.rooms.find(C=>C.id===n.room),p=f?li(f.points):null,_=C=>new Ve({color:C,transparent:!0}),m=C=>n.wall==="n"?[n.at,p.y0+C]:n.wall==="s"?[n.at,p.y1-C]:n.wall==="w"?[p.x0+C,n.at]:[p.x1-C,n.at],[g,b]=n.x!=null?[n.x,n.y]:m(.14),w=n.wall==="n"||n.wall==="s",y={d:n,anchor:new k,pick:null},v=(C,T,R,L)=>(C.position.set(T,R,L),t.add(C),C),A=1;switch(n.kind){case"light":{let C=Math.max(1.75,s+.5);v(new Re(new on(.015,.015,.45,6),_(l.ink)),g,C+.35,b);let T=v(this._outlined(new on(.1,.27,.2,16,1,!0),new Ve({color:l.white,side:ui}),.03),g,C+.14,b);T.userData.mesh.material.transparent=!0;let R=v(this._outlined(new Ai(.15,16,12),_("#ffffff")),g,C,b),L=new Re(new yr(1.3,28),new Ve({color:l.bulbOn,transparent:!0,opacity:.42,depthWrite:!1}));L.rotation.x=-Math.PI/2,L.renderOrder=1,v(L,g,.07,b),y.set=O=>{R.userData.mesh.material.color.set(O.planned?l.planned:O.active?l.bulbOn:"#ffffff"),T.userData.mesh.material.color.set(O.planned?l.planned:l.white),L.visible=!!O.active},A=C;break}case"cover":{let C=this._openingFor(e,n);if(!C){A=this._marker(y,v,g,1.6,b,.3,.3,.12);break}let[T,R,L,O]=C.b,E=C.n[0]===0,D=C.kind==="garage",U=E?L-T:O-R,N=E?O-R:L-T,G=D?0:N/2+.09,H=(T+L)/2+C.n[0]*G,B=(R+O)/2+C.n[1]*G,W=D||C.kind==="bifold"?0:ts,K=pi-W,J=(Et,$t,ne)=>E?new He(Et,$t,ne):new He(ne,$t,Et),at=document.createElement("canvas");at.width=8,at.height=32;let tt=at.getContext("2d");tt.fillStyle=D?l.garage:l.shutter,tt.fillRect(0,0,8,32),tt.fillStyle=D?l.garage2:l.shutter2,tt.fillRect(0,0,8,4);let nt=new Rs(at);nt.wrapT=Gn,nt.colorSpace=Ke;let st=new Re(J(U-.04,1,.05),new Ve({map:nt,transparent:!0}));t.add(st),D||v(this._outlined(J(U+.14,.24,.22),this._toon(l.shutterBox)),H,pi+.12,B),y.level=null,y.apply=Et=>{let $t=Math.max(0,Math.min(1,1-Et)),ne=Math.max(.02,K*$t);st.scale.y=ne,st.position.set(H,pi-ne/2,B),nt.repeat.set(1,Math.max(1,Math.round(ne/(D?.4:.11)))),st.visible=$t>.015},y.set=Et=>{let $t=Et.planned?D?0:.55:Et.level;st.material.opacity=Et.planned&&!D?.45:1,y.level==null?(y.level=$t,y.apply($t)):Math.abs($t-y.level)>.001&&this._tween(y,$t)};let Tt=new Re(J(U,D?pi:K+.3,.5),new Ve({transparent:!0,opacity:0,depthWrite:!1}));v(Tt,H,D?pi/2:W+(K+.3)/2,B),y.pick=Tt,y.anchor.set(H+C.n[0]*.2,pi+.3,B+C.n[1]*.2),y.facing=new k(C.n[0],0,C.n[1]),A=null;break}case"climate":{if(n.wall){let C=v(this._outlined(w?new He(.95,.5,.1):new He(.1,.5,.95),this._toon("#ffffff")),g,.42,b);y.set=T=>C.userData.mesh.material.color.set(T.planned?l.planned:T.active?l.heat:"#ffffff"),A=.75}else A=this._marker(y,v,g,1.35,b,.2,.26,.08,l.heat);break}case"tv":{let C=v(this._outlined(new He(1.3,.75,.07),_(l.dark)),g,.95,b);C.rotation.y=-no(n.rot||0),y.set=T=>C.userData.mesh.material.color.set(T.active?l.screen:T.planned?"#5a5f6a":l.dark),A=1.4;break}case"speaker":A=this._marker(y,v,g,.72,b,.24,.44,.24,l.play);break;case"lock":A=this._marker(y,v,g,1.05,b,.2,.26,.2,l.ok,l.bad);break;case"motion":A=this._marker(y,v,g,Math.max(1.5,s+.25),b,.26,.14,.26,l.heat);break;case"contact":A=this._marker(y,v,g,1.6,b,.16,.3,.16,l.bad,l.ok);break;case"camera":A=this._marker(y,v,g,2.15,b,.3,.2,.42,l.screen);break;default:A=this._marker(y,v,g,1.2,b,.22,.22,.22,l.ok)}if(A!=null&&y.anchor.set(g,A+.25,b),y.anchor.x+=u[0],y.anchor.z+=u[1],y.anchor.y+=t.position.y,!y.pick){let C=new Re(new Ai(.42,8,6),new Ve({transparent:!0,opacity:0,depthWrite:!1}));C.position.set(y.anchor.x-u[0],y.anchor.y-t.position.y-.25,y.anchor.z-u[1]),t.add(C),y.pick=C}if(y.pick.userData.dev=y,this._pickables.push(y.pick),o){let C=document.createElement("div");C.className="chip",C.style.display="none",C.addEventListener("click",T=>{T.stopPropagation(),this._tap(y)}),this._labels.appendChild(C),y.chip=C}this._devs.push(y)}_marker(t,e,n,s,o,l,h,u,f,p="#ffffff"){let _=this.theme,m=e(this._outlined(new He(l,h,u),new Ve({color:"#ffffff",transparent:!0})),n,s,o);return t.set=g=>{m.userData.mesh.material.color.set(g.planned?_.planned:g.active?f||_.ok:p),m.userData.mesh.material.opacity=g.planned?.8:1},s+h/2}_tween(t,e){t.from=t.level,t.to=e,t.t0=performance.now(),this._tweens.includes(t)||this._tweens.push(t)}_signature(){return!this._hass||!this._devs?"":this._devs.map(t=>{let e=t.d.entity&&this._hass.states[t.d.entity];return e?`${e.state}|${e.attributes.current_position??""}|${e.attributes.current_temperature??""}|${e.attributes.hvac_action??""}`:"-"}).join(";")}_syncDevices(){if(!this._devs)return;let t=0,e=0;for(let n of this._devs){let s=od(n.d,this._hass);n.st=s,n.set&&n.set(s),s.planned?e++:t++,n.chip&&(n.chip.textContent=s.text,n.chip.classList.toggle("active",!!s.active),n.chip.dataset.show=s.text?"1":"")}this.shadowRoot.querySelector(".counts").textContent=this._devs.length?`${t} live, ${e} planned (grey)`:""}_pick(t,e){let n=this._renderer.domElement.getBoundingClientRect(),s=new _t((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),o=new Or;o.setFromCamera(s,this._camera);let l=o.intersectObjects(this._pickables,!1)[0];l?this._tap(l.object.userData.dev):this._toast.style.display="none"}_tap(t){let e=t.d,n=t.st||od(e,this._hass);if(e.id&&!window.dispatchEvent(new CustomEvent("toon-house-setup",{cancelable:!0,detail:{id:e.id}}))){this._toast.style.display="none";return}if(n.planned){let o=e.nav||this._config.planned_path||"";this._say(`${e.name||e.kind}: planned, not fitted yet.${o?" Tap here for more.":""}`,o);return}let s=e.entity.split(".")[0];if((e.kind==="light"||e.kind==="switch")&&["light","switch","input_boolean","fan"].includes(s)){this._hass.callService(s,"toggle",{entity_id:e.entity});return}this._toast.style.display="none",this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e.entity}}))}_say(t,e,n=6e3){this._toast.textContent=t,this._toast.dataset.nav=e||"",this._toast.style.display="block",clearTimeout(this._toastT),this._toastT=setTimeout(()=>{this._toast.style.display="none"},n)}_navigate(t){history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}_req(){this._raf||!this._renderer||(this._raf=requestAnimationFrame(()=>{this._raf=0,this._frame()}))}_frame(){if(!this._renderer||!this._root)return;let t=performance.now();this._tweens.length&&(this._tweens=this._tweens.filter(u=>{let f=Math.min(1,(t-u.t0)/900),p=f*f*(3-2*f);return u.level=u.from+(u.to-u.from)*p,u.apply(u.level),f<1}),this._req()),this._renderer.render(this._scene,this._camera);let e=this._wrap.clientWidth,n=this._wrap.clientHeight,s=new k,o=(u,f,p)=>{s.copy(f).project(this._camera);let _=p&&s.z<1&&Math.abs(s.x)<1.05&&Math.abs(s.y)<1.05;u.style.display=_?"block":"none",_&&(u.style.left=`${(s.x+1)/2*e}px`,u.style.top=`${(1-s.y)/2*n}px`)},l=this._camera.position.distanceTo(this._controls.target)>42;for(let u of this._roomLabels)o(u.el,u.pos,!(l&&u.small));let h=this._mode==="whole";for(let u of this._devs){if(!u.chip)continue;let f=h&&u.facing&&s.copy(this._camera.position).sub(u.anchor).dot(u.facing)<=0;o(u.chip,u.anchor,!!u.chip.dataset.show&&!f)}}debug(){let t=this._renderer.domElement.getBoundingClientRect(),e=new k,n={};for(let o of this._devs)o.pick.getWorldPosition(e).project(this._camera),n[o.d.id]={x:Math.round(t.left+(e.x+1)/2*t.width),y:Math.round(t.top+(1-e.y)/2*t.height),planned:!!(o.st&&o.st.planned),text:o.st&&o.st.text,level:o.level};let s=this._renderer.info;return{mode:this._mode,calls:s.render.calls,triangles:s.render.triangles,geometries:s.memory.geometries,warnings:this._warnings,devices:n}}};customElements.get("toon-house-card")||customElements.define("toon-house-card",Fh);window.customCards=window.customCards||[];window.customCards.some(i=>i.type==="toon-house-card")||window.customCards.push({type:"toon-house-card",name:"Toon House Card",description:"A cartoon 3D dollhouse of your home with live devices",preview:!1,documentationURL:"https://github.com/digitaladaption/toon-house-card"});console.info(`%c TOON-HOUSE-CARD %c ${yy} `,"background:#FFD83A;color:#1b1b1b;font-weight:900","background:#1b1b1b;color:#fff");
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
