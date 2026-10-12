var Vd=Object.create;var Qh=Object.defineProperty;var Gd=Object.getOwnPropertyDescriptor;var Hd=Object.getOwnPropertyNames;var Xd=Object.getPrototypeOf,Wd=Object.prototype.hasOwnProperty;var Yd=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var qd=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Hd(t))!Wd.call(i,s)&&s!==e&&Qh(i,s,{get:()=>t[s],enumerable:!(n=Gd(t,s))||n.enumerable});return i};var $d=(i,t,e)=>(e=i!=null?Vd(Xd(i)):{},qd(t||!i||!i.__esModule?Qh(e,"default",{value:i,enumerable:!0}):e,i));var cd=Yd((xM,Dl)=>{(function(){"use strict";var i={};i.version="6.4.2.2",i.use_lines=!0,i.use_xyz=!1;var t=!1;typeof Dl<"u"&&Dl.exports?(Dl.exports=i,t=!0):(typeof define=="function"&&define.amd&&define(i),typeof document<"u"?window.ClipperLib=i:self.ClipperLib=i);var e;if(t){var n="chrome";e="Netscape"}else{var n=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var s={};n.indexOf("chrome")!=-1&&n.indexOf("chromium")==-1?s.chrome=1:s.chrome=0,n.indexOf("chromium")!=-1?s.chromium=1:s.chromium=0,n.indexOf("safari")!=-1&&n.indexOf("chrome")==-1&&n.indexOf("chromium")==-1?s.safari=1:s.safari=0,n.indexOf("firefox")!=-1?s.firefox=1:s.firefox=0,n.indexOf("firefox/17")!=-1?s.firefox17=1:s.firefox17=0,n.indexOf("firefox/15")!=-1?s.firefox15=1:s.firefox15=0,n.indexOf("firefox/3")!=-1?s.firefox3=1:s.firefox3=0,n.indexOf("opera")!=-1?s.opera=1:s.opera=0,n.indexOf("msie 10")!=-1?s.msie10=1:s.msie10=0,n.indexOf("msie 9")!=-1?s.msie9=1:s.msie9=0,n.indexOf("msie 8")!=-1?s.msie8=1:s.msie8=0,n.indexOf("msie 7")!=-1?s.msie7=1:s.msie7=0,n.indexOf("msie ")!=-1?s.msie=1:s.msie=0,i.biginteger_used=null;var o,a=0xdeadbeefcafe,c=(a&16777215)==15715070;function u(r,l,h){i.biginteger_used=1,r!=null&&(typeof r=="number"&&typeof l>"u"?this.fromInt(r):typeof r=="number"?this.fromNumber(r,l,h):l==null&&typeof r!="string"?this.fromString(r,256):this.fromString(r,l))}function f(){return new u(null,void 0,void 0)}function p(r,l,h,d,y,w){for(;--w>=0;){var L=l*this[r++]+h[d]+y;y=Math.floor(L/67108864),h[d++]=L&67108863}return y}function _(r,l,h,d,y,w){for(var L=l&32767,z=l>>15;--w>=0;){var V=this[r]&32767,$=this[r++]>>15,ht=z*V+$*L;V=L*V+((ht&32767)<<15)+h[d]+(y&1073741823),y=(V>>>30)+(ht>>>15)+z*$+(y>>>30),h[d++]=V&1073741823}return y}function m(r,l,h,d,y,w){for(var L=l&16383,z=l>>14;--w>=0;){var V=this[r]&16383,$=this[r++]>>14,ht=z*V+$*L;V=L*V+((ht&16383)<<14)+h[d]+y,y=(V>>28)+(ht>>14)+z*$,h[d++]=V&268435455}return y}c&&e=="Microsoft Internet Explorer"?(u.prototype.am=_,o=30):c&&e!="Netscape"?(u.prototype.am=p,o=26):(u.prototype.am=m,o=28),u.prototype.DB=o,u.prototype.DM=(1<<o)-1,u.prototype.DV=1<<o;var g=52;u.prototype.FV=Math.pow(2,g),u.prototype.F1=g-o,u.prototype.F2=2*o-g;var b="0123456789abcdefghijklmnopqrstuvwxyz",S=new Array,x,v;for(x=48,v=0;v<=9;++v)S[x++]=v;for(x=97,v=10;v<36;++v)S[x++]=v;for(x=65,v=10;v<36;++v)S[x++]=v;function E(r){return b.charAt(r)}function C(r,l){var h=S[r.charCodeAt(l)];return h??-1}function M(r){for(var l=this.t-1;l>=0;--l)r[l]=this[l];r.t=this.t,r.s=this.s}function I(r){this.t=1,this.s=r<0?-1:0,r>0?this[0]=r:r<-1?this[0]=r+this.DV:this.t=0}function R(r){var l=f();return l.fromInt(r),l}function O(r,l){var h;if(l==16)h=4;else if(l==8)h=3;else if(l==256)h=8;else if(l==2)h=1;else if(l==32)h=5;else if(l==4)h=2;else{this.fromRadix(r,l);return}this.t=0,this.s=0;for(var d=r.length,y=!1,w=0;--d>=0;){var L=h==8?r[d]&255:C(r,d);if(L<0){r.charAt(d)=="-"&&(y=!0);continue}y=!1,w==0?this[this.t++]=L:w+h>this.DB?(this[this.t-1]|=(L&(1<<this.DB-w)-1)<<w,this[this.t++]=L>>this.DB-w):this[this.t-1]|=L<<w,w+=h,w>=this.DB&&(w-=this.DB)}h==8&&r[0]&128&&(this.s=-1,w>0&&(this[this.t-1]|=(1<<this.DB-w)-1<<w)),this.clamp(),y&&u.ZERO.subTo(this,this)}function A(){for(var r=this.s&this.DM;this.t>0&&this[this.t-1]==r;)--this.t}function D(r){if(this.s<0)return"-"+this.negate().toString(r);var l;if(r==16)l=4;else if(r==8)l=3;else if(r==2)l=1;else if(r==32)l=5;else if(r==4)l=2;else return this.toRadix(r);var h=(1<<l)-1,d,y=!1,w="",L=this.t,z=this.DB-L*this.DB%l;if(L-- >0)for(z<this.DB&&(d=this[L]>>z)>0&&(y=!0,w=E(d));L>=0;)z<l?(d=(this[L]&(1<<z)-1)<<l-z,d|=this[--L]>>(z+=this.DB-l)):(d=this[L]>>(z-=l)&h,z<=0&&(z+=this.DB,--L)),d>0&&(y=!0),y&&(w+=E(d));return y?w:"0"}function U(){var r=f();return u.ZERO.subTo(this,r),r}function N(){return this.s<0?this.negate():this}function G(r){var l=this.s-r.s;if(l!=0)return l;var h=this.t;if(l=h-r.t,l!=0)return this.s<0?-l:l;for(;--h>=0;)if((l=this[h]-r[h])!=0)return l;return 0}function H(r){var l=1,h;return(h=r>>>16)!=0&&(r=h,l+=16),(h=r>>8)!=0&&(r=h,l+=8),(h=r>>4)!=0&&(r=h,l+=4),(h=r>>2)!=0&&(r=h,l+=2),(h=r>>1)!=0&&(r=h,l+=1),l}function B(){return this.t<=0?0:this.DB*(this.t-1)+H(this[this.t-1]^this.s&this.DM)}function W(r,l){var h;for(h=this.t-1;h>=0;--h)l[h+r]=this[h];for(h=r-1;h>=0;--h)l[h]=0;l.t=this.t+r,l.s=this.s}function K(r,l){for(var h=r;h<this.t;++h)l[h-r]=this[h];l.t=Math.max(this.t-r,0),l.s=this.s}function J(r,l){var h=r%this.DB,d=this.DB-h,y=(1<<d)-1,w=Math.floor(r/this.DB),L=this.s<<h&this.DM,z;for(z=this.t-1;z>=0;--z)l[z+w+1]=this[z]>>d|L,L=(this[z]&y)<<h;for(z=w-1;z>=0;--z)l[z]=0;l[w]=L,l.t=this.t+w+1,l.s=this.s,l.clamp()}function at(r,l){l.s=this.s;var h=Math.floor(r/this.DB);if(h>=this.t){l.t=0;return}var d=r%this.DB,y=this.DB-d,w=(1<<d)-1;l[0]=this[h]>>d;for(var L=h+1;L<this.t;++L)l[L-h-1]|=(this[L]&w)<<y,l[L-h]=this[L]>>d;d>0&&(l[this.t-h-1]|=(this.s&w)<<y),l.t=this.t-h,l.clamp()}function tt(r,l){for(var h=0,d=0,y=Math.min(r.t,this.t);h<y;)d+=this[h]-r[h],l[h++]=d&this.DM,d>>=this.DB;if(r.t<this.t){for(d-=r.s;h<this.t;)d+=this[h],l[h++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;h<r.t;)d-=r[h],l[h++]=d&this.DM,d>>=this.DB;d-=r.s}l.s=d<0?-1:0,d<-1?l[h++]=this.DV+d:d>0&&(l[h++]=d),l.t=h,l.clamp()}function nt(r,l){var h=this.abs(),d=r.abs(),y=h.t;for(l.t=y+d.t;--y>=0;)l[y]=0;for(y=0;y<d.t;++y)l[y+h.t]=h.am(0,d[y],l,y,0,h.t);l.s=0,l.clamp(),this.s!=r.s&&u.ZERO.subTo(l,l)}function st(r){for(var l=this.abs(),h=r.t=2*l.t;--h>=0;)r[h]=0;for(h=0;h<l.t-1;++h){var d=l.am(h,l[h],r,2*h,0,1);(r[h+l.t]+=l.am(h+1,2*l[h],r,2*h+1,d,l.t-h-1))>=l.DV&&(r[h+l.t]-=l.DV,r[h+l.t+1]=1)}r.t>0&&(r[r.t-1]+=l.am(h,l[h],r,2*h,0,1)),r.s=0,r.clamp()}function Tt(r,l,h){var d=r.abs();if(!(d.t<=0)){var y=this.abs();if(y.t<d.t){l?.fromInt(0),h!=null&&this.copyTo(h);return}h==null&&(h=f());var w=f(),L=this.s,z=r.s,V=this.DB-H(d[d.t-1]);V>0?(d.lShiftTo(V,w),y.lShiftTo(V,h)):(d.copyTo(w),y.copyTo(h));var $=w.t,ht=w[$-1];if(ht!=0){var ct=ht*(1<<this.F1)+($>1?w[$-2]>>this.F2:0),gt=this.FV/ct,Wt=(1<<this.F1)/ct,oe=1<<this.F2,fe=h.t,Pe=fe-$,ui=l??f();for(w.dlShiftTo(Pe,ui),h.compareTo(ui)>=0&&(h[h.t++]=1,h.subTo(ui,h)),u.ONE.dlShiftTo($,ui),ui.subTo(w,w);w.t<$;)w[w.t++]=0;for(;--Pe>=0;){var zi=h[--fe]==ht?this.DM:Math.floor(h[fe]*gt+(h[fe-1]+oe)*Wt);if((h[fe]+=w.am(0,zi,h,Pe,0,$))<zi)for(w.dlShiftTo(Pe,ui),h.subTo(ui,h);h[fe]<--zi;)h.subTo(ui,h)}l!=null&&(h.drShiftTo($,l),L!=z&&u.ZERO.subTo(l,l)),h.t=$,h.clamp(),V>0&&h.rShiftTo(V,h),L<0&&u.ZERO.subTo(h,h)}}}function Et(r){var l=f();return this.abs().divRemTo(r,null,l),this.s<0&&l.compareTo(u.ZERO)>0&&r.subTo(l,l),l}function $t(r){this.m=r}function ne(r){return r.s<0||r.compareTo(this.m)>=0?r.mod(this.m):r}function ge(r){return r}function lt(r){r.divRemTo(this.m,null,r)}function dt(r,l,h){r.multiplyTo(l,h),this.reduce(h)}function Nt(r,l){r.squareTo(l),this.reduce(l)}$t.prototype.convert=ne,$t.prototype.revert=ge,$t.prototype.reduce=lt,$t.prototype.mulTo=dt,$t.prototype.sqrTo=Nt;function jt(){if(this.t<1)return 0;var r=this[0];if(!(r&1))return 0;var l=r&3;return l=l*(2-(r&15)*l)&15,l=l*(2-(r&255)*l)&255,l=l*(2-((r&65535)*l&65535))&65535,l=l*(2-r*l%this.DV)%this.DV,l>0?this.DV-l:-l}function Ft(r){this.m=r,this.mp=r.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<r.DB-15)-1,this.mt2=2*r.t}function te(r){var l=f();return r.abs().dlShiftTo(this.m.t,l),l.divRemTo(this.m,null,l),r.s<0&&l.compareTo(u.ZERO)>0&&this.m.subTo(l,l),l}function Se(r){var l=f();return r.copyTo(l),this.reduce(l),l}function pt(r){for(;r.t<=this.mt2;)r[r.t++]=0;for(var l=0;l<this.m.t;++l){var h=r[l]&32767,d=h*this.mpl+((h*this.mph+(r[l]>>15)*this.mpl&this.um)<<15)&r.DM;for(h=l+this.m.t,r[h]+=this.m.am(0,d,r,l,0,this.m.t);r[h]>=r.DV;)r[h]-=r.DV,r[++h]++}r.clamp(),r.drShiftTo(this.m.t,r),r.compareTo(this.m)>=0&&r.subTo(this.m,r)}function xt(r,l){r.squareTo(l),this.reduce(l)}function yt(r,l,h){r.multiplyTo(l,h),this.reduce(h)}Ft.prototype.convert=te,Ft.prototype.revert=Se,Ft.prototype.reduce=pt,Ft.prototype.mulTo=yt,Ft.prototype.sqrTo=xt;function vt(){return(this.t>0?this[0]&1:this.s)==0}function Mt(r,l){if(r>4294967295||r<1)return u.ONE;var h=f(),d=f(),y=l.convert(this),w=H(r)-1;for(y.copyTo(h);--w>=0;)if(l.sqrTo(h,d),(r&1<<w)>0)l.mulTo(d,y,h);else{var L=h;h=d,d=L}return l.revert(h)}function Kt(r,l){var h;return r<256||l.isEven()?h=new $t(l):h=new Ft(l),this.exp(r,h)}u.prototype.copyTo=M,u.prototype.fromInt=I,u.prototype.fromString=O,u.prototype.clamp=A,u.prototype.dlShiftTo=W,u.prototype.drShiftTo=K,u.prototype.lShiftTo=J,u.prototype.rShiftTo=at,u.prototype.subTo=tt,u.prototype.multiplyTo=nt,u.prototype.squareTo=st,u.prototype.divRemTo=Tt,u.prototype.invDigit=jt,u.prototype.isEven=vt,u.prototype.exp=Mt,u.prototype.toString=D,u.prototype.negate=U,u.prototype.abs=N,u.prototype.compareTo=G,u.prototype.bitLength=B,u.prototype.mod=Et,u.prototype.modPowInt=Kt,u.ZERO=R(0),u.ONE=R(1);function Zt(){var r=f();return this.copyTo(r),r}function ee(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function se(){return this.t==0?this.s:this[0]<<24>>24}function X(){return this.t==0?this.s:this[0]<<16>>16}function ye(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function pe(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function F(r){if(r==null&&(r=10),this.signum()==0||r<2||r>36)return"0";var l=this.chunkSize(r),h=Math.pow(r,l),d=R(h),y=f(),w=f(),L="";for(this.divRemTo(d,y,w);y.signum()>0;)L=(h+w.intValue()).toString(r).substr(1)+L,y.divRemTo(d,y,w);return w.intValue().toString(r)+L}function T(r,l){this.fromInt(0),l==null&&(l=10);for(var h=this.chunkSize(l),d=Math.pow(l,h),y=!1,w=0,L=0,z=0;z<r.length;++z){var V=C(r,z);if(V<0){r.charAt(z)=="-"&&this.signum()==0&&(y=!0);continue}L=l*L+V,++w>=h&&(this.dMultiply(d),this.dAddOffset(L,0),w=0,L=0)}w>0&&(this.dMultiply(Math.pow(l,w)),this.dAddOffset(L,0)),y&&u.ZERO.subTo(this,this)}function Z(r,l,h){if(typeof l=="number")if(r<2)this.fromInt(1);else for(this.fromNumber(r,h),this.testBit(r-1)||this.bitwiseTo(u.ONE.shiftLeft(r-1),Gt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(l);)this.dAddOffset(2,0),this.bitLength()>r&&this.subTo(u.ONE.shiftLeft(r-1),this);else{var d=new Array,y=r&7;d.length=(r>>3)+1,l.nextBytes(d),y>0?d[0]&=(1<<y)-1:d[0]=0,this.fromString(d,256)}}function et(){var r=this.t,l=new Array;l[0]=this.s;var h=this.DB-r*this.DB%8,d,y=0;if(r-- >0)for(h<this.DB&&(d=this[r]>>h)!=(this.s&this.DM)>>h&&(l[y++]=d|this.s<<this.DB-h);r>=0;)h<8?(d=(this[r]&(1<<h)-1)<<8-h,d|=this[--r]>>(h+=this.DB-8)):(d=this[r]>>(h-=8)&255,h<=0&&(h+=this.DB,--r)),d&128&&(d|=-256),y==0&&(this.s&128)!=(d&128)&&++y,(y>0||d!=this.s)&&(l[y++]=d);return l}function rt(r){return this.compareTo(r)==0}function bt(r){return this.compareTo(r)<0?this:r}function St(r){return this.compareTo(r)>0?this:r}function ot(r,l,h){var d,y,w=Math.min(r.t,this.t);for(d=0;d<w;++d)h[d]=l(this[d],r[d]);if(r.t<this.t){for(y=r.s&this.DM,d=w;d<this.t;++d)h[d]=l(this[d],y);h.t=this.t}else{for(y=this.s&this.DM,d=w;d<r.t;++d)h[d]=l(y,r[d]);h.t=r.t}h.s=l(this.s,r.s),h.clamp()}function ft(r,l){return r&l}function Pt(r){var l=f();return this.bitwiseTo(r,ft,l),l}function Gt(r,l){return r|l}function Dt(r){var l=f();return this.bitwiseTo(r,Gt,l),l}function At(r,l){return r^l}function Xt(r){var l=f();return this.bitwiseTo(r,At,l),l}function Jt(r,l){return r&~l}function le(r){var l=f();return this.bitwiseTo(r,Jt,l),l}function q(){for(var r=f(),l=0;l<this.t;++l)r[l]=this.DM&~this[l];return r.t=this.t,r.s=~this.s,r}function It(r){var l=f();return r<0?this.rShiftTo(-r,l):this.lShiftTo(r,l),l}function ut(r){var l=f();return r<0?this.lShiftTo(-r,l):this.rShiftTo(r,l),l}function Rt(r){if(r==0)return-1;var l=0;return r&65535||(r>>=16,l+=16),r&255||(r>>=8,l+=8),r&15||(r>>=4,l+=4),r&3||(r>>=2,l+=2),r&1||++l,l}function Ut(){for(var r=0;r<this.t;++r)if(this[r]!=0)return r*this.DB+Rt(this[r]);return this.s<0?this.t*this.DB:-1}function mt(r){for(var l=0;r!=0;)r&=r-1,++l;return l}function qt(){for(var r=0,l=this.s&this.DM,h=0;h<this.t;++h)r+=mt(this[h]^l);return r}function Vt(r){var l=Math.floor(r/this.DB);return l>=this.t?this.s!=0:(this[l]&1<<r%this.DB)!=0}function Ae(r,l){var h=u.ONE.shiftLeft(r);return this.bitwiseTo(h,l,h),h}function ve(r){return this.changeBit(r,Gt)}function xi(r){return this.changeBit(r,Jt)}function Ti(r){return this.changeBit(r,At)}function $l(r,l){for(var h=0,d=0,y=Math.min(r.t,this.t);h<y;)d+=this[h]+r[h],l[h++]=d&this.DM,d>>=this.DB;if(r.t<this.t){for(d+=r.s;h<this.t;)d+=this[h],l[h++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;h<r.t;)d+=r[h],l[h++]=d&this.DM,d>>=this.DB;d+=r.s}l.s=d<0?-1:0,d>0?l[h++]=d:d<-1&&(l[h++]=this.DV+d),l.t=h,l.clamp()}function Zl(r){var l=f();return this.addTo(r,l),l}function uo(r){var l=f();return this.subTo(r,l),l}function nr(r){var l=f();return this.multiplyTo(r,l),l}function Jl(){var r=f();return this.squareTo(r),r}function fo(r){var l=f();return this.divRemTo(r,l,null),l}function po(r){var l=f();return this.divRemTo(r,null,l),l}function tn(r){var l=f(),h=f();return this.divRemTo(r,l,h),new Array(l,h)}function sr(r){this[this.t]=this.am(0,r-1,this,0,0,this.t),++this.t,this.clamp()}function mo(r,l){if(r!=0){for(;this.t<=l;)this[this.t++]=0;for(this[l]+=r;this[l]>=this.DV;)this[l]-=this.DV,++l>=this.t&&(this[this.t++]=0),++this[l]}}function pn(){}function zn(r){return r}function go(r,l,h){r.multiplyTo(l,h)}function os(r,l){r.squareTo(l)}pn.prototype.convert=zn,pn.prototype.revert=zn,pn.prototype.mulTo=go,pn.prototype.sqrTo=os;function _o(r){return this.exp(r,new pn)}function xo(r,l,h){var d=Math.min(this.t+r.t,l);for(h.s=0,h.t=d;d>0;)h[--d]=0;var y;for(y=h.t-this.t;d<y;++d)h[d+this.t]=this.am(0,r[d],h,d,0,this.t);for(y=Math.min(r.t,l);d<y;++d)this.am(0,r[d],h,d,0,l-d);h.clamp()}function Kl(r,l,h){--l;var d=h.t=this.t+r.t-l;for(h.s=0;--d>=0;)h[d]=0;for(d=Math.max(l-this.t,0);d<r.t;++d)h[this.t+d-l]=this.am(l-d,r[d],h,0,0,this.t+d-l);h.clamp(),h.drShiftTo(1,h)}function mn(r){this.r2=f(),this.q3=f(),u.ONE.dlShiftTo(2*r.t,this.r2),this.mu=this.r2.divide(r),this.m=r}function jl(r){if(r.s<0||r.t>2*this.m.t)return r.mod(this.m);if(r.compareTo(this.m)<0)return r;var l=f();return r.copyTo(l),this.reduce(l),l}function Ql(r){return r}function yo(r){for(r.drShiftTo(this.m.t-1,this.r2),r.t>this.m.t+1&&(r.t=this.m.t+1,r.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);r.compareTo(this.r2)<0;)r.dAddOffset(1,this.m.t+1);for(r.subTo(this.r2,r);r.compareTo(this.m)>=0;)r.subTo(this.m,r)}function P(r,l){r.squareTo(l),this.reduce(l)}function Y(r,l,h){r.multiplyTo(l,h),this.reduce(h)}mn.prototype.convert=jl,mn.prototype.revert=Ql,mn.prototype.reduce=yo,mn.prototype.mulTo=Y,mn.prototype.sqrTo=P;function it(r,l){var h=r.bitLength(),d,y=R(1),w;if(h<=0)return y;h<18?d=1:h<48?d=3:h<144?d=4:h<768?d=5:d=6,h<8?w=new $t(l):l.isEven()?w=new mn(l):w=new Ft(l);var L=new Array,z=3,V=d-1,$=(1<<d)-1;if(L[1]=w.convert(this),d>1){var ht=f();for(w.sqrTo(L[1],ht);z<=$;)L[z]=f(),w.mulTo(ht,L[z-2],L[z]),z+=2}var ct=r.t-1,gt,Wt=!0,oe=f(),fe;for(h=H(r[ct])-1;ct>=0;){for(h>=V?gt=r[ct]>>h-V&$:(gt=(r[ct]&(1<<h+1)-1)<<V-h,ct>0&&(gt|=r[ct-1]>>this.DB+h-V)),z=d;!(gt&1);)gt>>=1,--z;if((h-=z)<0&&(h+=this.DB,--ct),Wt)L[gt].copyTo(y),Wt=!1;else{for(;z>1;)w.sqrTo(y,oe),w.sqrTo(oe,y),z-=2;z>0?w.sqrTo(y,oe):(fe=y,y=oe,oe=fe),w.mulTo(oe,L[gt],y)}for(;ct>=0&&!(r[ct]&1<<h);)w.sqrTo(y,oe),fe=y,y=oe,oe=fe,--h<0&&(h=this.DB-1,--ct)}return w.revert(y)}function j(r){var l=this.s<0?this.negate():this.clone(),h=r.s<0?r.negate():r.clone();if(l.compareTo(h)<0){var d=l;l=h,h=d}var y=l.getLowestSetBit(),w=h.getLowestSetBit();if(w<0)return l;for(y<w&&(w=y),w>0&&(l.rShiftTo(w,l),h.rShiftTo(w,h));l.signum()>0;)(y=l.getLowestSetBit())>0&&l.rShiftTo(y,l),(y=h.getLowestSetBit())>0&&h.rShiftTo(y,h),l.compareTo(h)>=0?(l.subTo(h,l),l.rShiftTo(1,l)):(h.subTo(l,h),h.rShiftTo(1,h));return w>0&&h.lShiftTo(w,h),h}function Q(r){if(r<=0)return 0;var l=this.DV%r,h=this.s<0?r-1:0;if(this.t>0)if(l==0)h=this[0]%r;else for(var d=this.t-1;d>=0;--d)h=(l*h+this[d])%r;return h}function Bt(r){var l=r.isEven();if(this.isEven()&&l||r.signum()==0)return u.ZERO;for(var h=r.clone(),d=this.clone(),y=R(1),w=R(0),L=R(0),z=R(1);h.signum()!=0;){for(;h.isEven();)h.rShiftTo(1,h),l?((!y.isEven()||!w.isEven())&&(y.addTo(this,y),w.subTo(r,w)),y.rShiftTo(1,y)):w.isEven()||w.subTo(r,w),w.rShiftTo(1,w);for(;d.isEven();)d.rShiftTo(1,d),l?((!L.isEven()||!z.isEven())&&(L.addTo(this,L),z.subTo(r,z)),L.rShiftTo(1,L)):z.isEven()||z.subTo(r,z),z.rShiftTo(1,z);h.compareTo(d)>=0?(h.subTo(d,h),l&&y.subTo(L,y),w.subTo(z,w)):(d.subTo(h,d),l&&L.subTo(y,L),z.subTo(w,z))}if(d.compareTo(u.ONE)!=0)return u.ZERO;if(z.compareTo(r)>=0)return z.subtract(r);if(z.signum()<0)z.addTo(r,z);else return z;return z.signum()<0?z.add(r):z}var wt=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Ot=(1<<26)/wt[wt.length-1];function kt(r){var l,h=this.abs();if(h.t==1&&h[0]<=wt[wt.length-1]){for(l=0;l<wt.length;++l)if(h[0]==wt[l])return!0;return!1}if(h.isEven())return!1;for(l=1;l<wt.length;){for(var d=wt[l],y=l+1;y<wt.length&&d<Ot;)d*=wt[y++];for(d=h.modInt(d);l<y;)if(d%wt[l++]==0)return!1}return h.millerRabin(r)}function Ht(r){var l=this.subtract(u.ONE),h=l.getLowestSetBit();if(h<=0)return!1;var d=l.shiftRight(h);r=r+1>>1,r>wt.length&&(r=wt.length);for(var y=f(),w=0;w<r;++w){y.fromInt(wt[Math.floor(Math.random()*wt.length)]);var L=y.modPow(d,this);if(L.compareTo(u.ONE)!=0&&L.compareTo(l)!=0){for(var z=1;z++<h&&L.compareTo(l)!=0;)if(L=L.modPowInt(2,this),L.compareTo(u.ONE)==0)return!1;if(L.compareTo(l)!=0)return!1}}return!0}u.prototype.chunkSize=ye,u.prototype.toRadix=F,u.prototype.fromRadix=T,u.prototype.fromNumber=Z,u.prototype.bitwiseTo=ot,u.prototype.changeBit=Ae,u.prototype.addTo=$l,u.prototype.dMultiply=sr,u.prototype.dAddOffset=mo,u.prototype.multiplyLowerTo=xo,u.prototype.multiplyUpperTo=Kl,u.prototype.modInt=Q,u.prototype.millerRabin=Ht,u.prototype.clone=Zt,u.prototype.intValue=ee,u.prototype.byteValue=se,u.prototype.shortValue=X,u.prototype.signum=pe,u.prototype.toByteArray=et,u.prototype.equals=rt,u.prototype.min=bt,u.prototype.max=St,u.prototype.and=Pt,u.prototype.or=Dt,u.prototype.xor=Xt,u.prototype.andNot=le,u.prototype.not=q,u.prototype.shiftLeft=It,u.prototype.shiftRight=ut,u.prototype.getLowestSetBit=Ut,u.prototype.bitCount=qt,u.prototype.testBit=Vt,u.prototype.setBit=ve,u.prototype.clearBit=xi,u.prototype.flipBit=Ti,u.prototype.add=Zl,u.prototype.subtract=uo,u.prototype.multiply=nr,u.prototype.divide=fo,u.prototype.remainder=po,u.prototype.divideAndRemainder=tn,u.prototype.modPow=it,u.prototype.modInverse=Bt,u.prototype.pow=_o,u.prototype.gcd=j,u.prototype.isProbablePrime=kt,u.prototype.square=Jl;var Lt=u;Lt.prototype.IsNegative=function(){return this.compareTo(Lt.ZERO)==-1},Lt.op_Equality=function(r,l){return r.compareTo(l)==0},Lt.op_Inequality=function(r,l){return r.compareTo(l)!=0},Lt.op_GreaterThan=function(r,l){return r.compareTo(l)>0},Lt.op_LessThan=function(r,l){return r.compareTo(l)<0},Lt.op_Addition=function(r,l){return new Lt(r,void 0,void 0).add(new Lt(l,void 0,void 0))},Lt.op_Subtraction=function(r,l){return new Lt(r,void 0,void 0).subtract(new Lt(l,void 0,void 0))},Lt.Int128Mul=function(r,l){return new Lt(r,void 0,void 0).multiply(new Lt(l,void 0,void 0))},Lt.op_Division=function(r,l){return r.divide(l)},Lt.prototype.ToDouble=function(){return parseFloat(this.toString())};var ue=function(r,l){var h;if(typeof Object.getOwnPropertyNames>"u"){for(h in l.prototype)(typeof r.prototype[h]>"u"||r.prototype[h]===Object.prototype[h])&&(r.prototype[h]=l.prototype[h]);for(h in l)typeof r[h]>"u"&&(r[h]=l[h]);r.$baseCtor=l}else{for(var d=Object.getOwnPropertyNames(l.prototype),y=0;y<d.length;y++)typeof Object.getOwnPropertyDescriptor(r.prototype,d[y])>"u"&&Object.defineProperty(r.prototype,d[y],Object.getOwnPropertyDescriptor(l.prototype,d[y]));for(h in l)typeof r[h]>"u"&&(r[h]=l[h]);r.$baseCtor=l}};i.Path=function(){return[]},i.Path.prototype.push=Array.prototype.push,i.Paths=function(){return[]},i.Paths.prototype.push=Array.prototype.push,i.DoublePoint=function(){var r=arguments;this.X=0,this.Y=0,r.length===1?(this.X=r[0].X,this.Y=r[0].Y):r.length===2&&(this.X=r[0],this.Y=r[1])},i.DoublePoint0=function(){this.X=0,this.Y=0},i.DoublePoint0.prototype=i.DoublePoint.prototype,i.DoublePoint1=function(r){this.X=r.X,this.Y=r.Y},i.DoublePoint1.prototype=i.DoublePoint.prototype,i.DoublePoint2=function(r,l){this.X=r,this.Y=l},i.DoublePoint2.prototype=i.DoublePoint.prototype,i.PolyNode=function(){this.m_Parent=null,this.m_polygon=new i.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},i.PolyNode.prototype.IsHoleNode=function(){for(var r=!0,l=this.m_Parent;l!==null;)r=!r,l=l.m_Parent;return r},i.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},i.PolyNode.prototype.Contour=function(){return this.m_polygon},i.PolyNode.prototype.AddChild=function(r){var l=this.m_Childs.length;this.m_Childs.push(r),r.m_Parent=this,r.m_Index=l},i.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},i.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},i.PolyNode.prototype.Childs=function(){return this.m_Childs},i.PolyNode.prototype.Parent=function(){return this.m_Parent},i.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},i.PolyTree=function(){this.m_AllPolys=[],i.PolyNode.call(this)},i.PolyTree.prototype.Clear=function(){for(var r=0,l=this.m_AllPolys.length;r<l;r++)this.m_AllPolys[r]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},i.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},i.PolyTree.prototype.Total=function(){var r=this.m_AllPolys.length;return r>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&r--,r},ue(i.PolyTree,i.PolyNode),i.Math_Abs_Int64=i.Math_Abs_Int32=i.Math_Abs_Double=function(r){return Math.abs(r)},i.Math_Max_Int32_Int32=function(r,l){return Math.max(r,l)},s.msie||s.opera||s.safari?i.Cast_Int32=function(r){return r|0}:i.Cast_Int32=function(r){return~~r},typeof Number.toInteger>"u"&&(Number.toInteger=null),s.chrome?i.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):~~r}:s.firefox&&typeof Number.toInteger=="function"?i.Cast_Int64=function(r){return Number.toInteger(r)}:s.msie7||s.msie8?i.Cast_Int64=function(r){return parseInt(r,10)}:s.msie?i.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):r|0}:i.Cast_Int64=function(r){return r<0?Math.ceil(r):Math.floor(r)},i.Clear=function(r){r.length=0},i.PI=3.141592653589793,i.PI2=2*3.141592653589793,i.IntPoint=function(){var r=arguments,l=r.length;if(this.X=0,this.Y=0,i.use_xyz)if(this.Z=0,l===3)this.X=r[0],this.Y=r[1],this.Z=r[2];else if(l===2)this.X=r[0],this.Y=r[1],this.Z=0;else if(l===1)if(r[0]instanceof i.DoublePoint){var h=r[0];this.X=i.Clipper.Round(h.X),this.Y=i.Clipper.Round(h.Y),this.Z=0}else{var d=r[0];typeof d.Z>"u"&&(d.Z=0),this.X=d.X,this.Y=d.Y,this.Z=d.Z}else this.X=0,this.Y=0,this.Z=0;else if(l===2)this.X=r[0],this.Y=r[1];else if(l===1)if(r[0]instanceof i.DoublePoint){var h=r[0];this.X=i.Clipper.Round(h.X),this.Y=i.Clipper.Round(h.Y)}else{var d=r[0];this.X=d.X,this.Y=d.Y}else this.X=0,this.Y=0},i.IntPoint.op_Equality=function(r,l){return r.X===l.X&&r.Y===l.Y},i.IntPoint.op_Inequality=function(r,l){return r.X!==l.X||r.Y!==l.Y},i.IntPoint0=function(){this.X=0,this.Y=0,i.use_xyz&&(this.Z=0)},i.IntPoint0.prototype=i.IntPoint.prototype,i.IntPoint1=function(r){this.X=r.X,this.Y=r.Y,i.use_xyz&&(typeof r.Z>"u"?this.Z=0:this.Z=r.Z)},i.IntPoint1.prototype=i.IntPoint.prototype,i.IntPoint1dp=function(r){this.X=i.Clipper.Round(r.X),this.Y=i.Clipper.Round(r.Y),i.use_xyz&&(this.Z=0)},i.IntPoint1dp.prototype=i.IntPoint.prototype,i.IntPoint2=function(r,l,h){this.X=r,this.Y=l,i.use_xyz&&(typeof h>"u"?this.Z=0:this.Z=h)},i.IntPoint2.prototype=i.IntPoint.prototype,i.IntRect=function(){var r=arguments,l=r.length;if(l===4)this.left=r[0],this.top=r[1],this.right=r[2],this.bottom=r[3];else if(l===1){var h=r[0];this.left=h.left,this.top=h.top,this.right=h.right,this.bottom=h.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},i.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},i.IntRect0.prototype=i.IntRect.prototype,i.IntRect1=function(r){this.left=r.left,this.top=r.top,this.right=r.right,this.bottom=r.bottom},i.IntRect1.prototype=i.IntRect.prototype,i.IntRect4=function(r,l,h,d){this.left=r,this.top=l,this.right=h,this.bottom=d},i.IntRect4.prototype=i.IntRect.prototype,i.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},i.PolyType={ptSubject:0,ptClip:1},i.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},i.JoinType={jtSquare:0,jtRound:1,jtMiter:2},i.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},i.EdgeSide={esLeft:0,esRight:1},i.Direction={dRightToLeft:0,dLeftToRight:1},i.TEdge=function(){this.Bot=new i.IntPoint0,this.Curr=new i.IntPoint0,this.Top=new i.IntPoint0,this.Delta=new i.IntPoint0,this.Dx=0,this.PolyTyp=i.PolyType.ptSubject,this.Side=i.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},i.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new i.IntPoint0},i.MyIntersectNodeSort=function(){},i.MyIntersectNodeSort.Compare=function(r,l){var h=l.Pt.Y-r.Pt.Y;return h>0?1:h<0?-1:0},i.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},i.Scanbeam=function(){this.Y=0,this.Next=null},i.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},i.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},i.OutPt=function(){this.Idx=0,this.Pt=new i.IntPoint0,this.Next=null,this.Prev=null},i.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new i.IntPoint0},i.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},i.ClipperBase.horizontal=-9007199254740992,i.ClipperBase.Skip=-2,i.ClipperBase.Unassigned=-1,i.ClipperBase.tolerance=1e-20,i.ClipperBase.loRange=47453132,i.ClipperBase.hiRange=0xfffffffffffff,i.ClipperBase.near_zero=function(r){return r>-i.ClipperBase.tolerance&&r<i.ClipperBase.tolerance},i.ClipperBase.IsHorizontal=function(r){return r.Delta.Y===0},i.ClipperBase.prototype.PointIsVertex=function(r,l){var h=l;do{if(i.IntPoint.op_Equality(h.Pt,r))return!0;h=h.Next}while(h!==l);return!1},i.ClipperBase.prototype.PointOnLineSegment=function(r,l,h,d){return d?r.X===l.X&&r.Y===l.Y||r.X===h.X&&r.Y===h.Y||r.X>l.X==r.X<h.X&&r.Y>l.Y==r.Y<h.Y&&Lt.op_Equality(Lt.Int128Mul(r.X-l.X,h.Y-l.Y),Lt.Int128Mul(h.X-l.X,r.Y-l.Y)):r.X===l.X&&r.Y===l.Y||r.X===h.X&&r.Y===h.Y||r.X>l.X==r.X<h.X&&r.Y>l.Y==r.Y<h.Y&&(r.X-l.X)*(h.Y-l.Y)===(h.X-l.X)*(r.Y-l.Y)},i.ClipperBase.prototype.PointOnPolygon=function(r,l,h){for(var d=l;;){if(this.PointOnLineSegment(r,d.Pt,d.Next.Pt,h))return!0;if(d=d.Next,d===l)break}return!1},i.ClipperBase.prototype.SlopesEqual=i.ClipperBase.SlopesEqual=function(){var r=arguments,l=r.length,h,d,y,w,L,z,V;return l===3?(h=r[0],d=r[1],V=r[2],V?Lt.op_Equality(Lt.Int128Mul(h.Delta.Y,d.Delta.X),Lt.Int128Mul(h.Delta.X,d.Delta.Y)):i.Cast_Int64(h.Delta.Y*d.Delta.X)===i.Cast_Int64(h.Delta.X*d.Delta.Y)):l===4?(y=r[0],w=r[1],L=r[2],V=r[3],V?Lt.op_Equality(Lt.Int128Mul(y.Y-w.Y,w.X-L.X),Lt.Int128Mul(y.X-w.X,w.Y-L.Y)):i.Cast_Int64((y.Y-w.Y)*(w.X-L.X))-i.Cast_Int64((y.X-w.X)*(w.Y-L.Y))===0):(y=r[0],w=r[1],L=r[2],z=r[3],V=r[4],V?Lt.op_Equality(Lt.Int128Mul(y.Y-w.Y,L.X-z.X),Lt.Int128Mul(y.X-w.X,L.Y-z.Y)):i.Cast_Int64((y.Y-w.Y)*(L.X-z.X))-i.Cast_Int64((y.X-w.X)*(L.Y-z.Y))===0)},i.ClipperBase.SlopesEqual3=function(r,l,h){return h?Lt.op_Equality(Lt.Int128Mul(r.Delta.Y,l.Delta.X),Lt.Int128Mul(r.Delta.X,l.Delta.Y)):i.Cast_Int64(r.Delta.Y*l.Delta.X)===i.Cast_Int64(r.Delta.X*l.Delta.Y)},i.ClipperBase.SlopesEqual4=function(r,l,h,d){return d?Lt.op_Equality(Lt.Int128Mul(r.Y-l.Y,l.X-h.X),Lt.Int128Mul(r.X-l.X,l.Y-h.Y)):i.Cast_Int64((r.Y-l.Y)*(l.X-h.X))-i.Cast_Int64((r.X-l.X)*(l.Y-h.Y))===0},i.ClipperBase.SlopesEqual5=function(r,l,h,d,y){return y?Lt.op_Equality(Lt.Int128Mul(r.Y-l.Y,h.X-d.X),Lt.Int128Mul(r.X-l.X,h.Y-d.Y)):i.Cast_Int64((r.Y-l.Y)*(h.X-d.X))-i.Cast_Int64((r.X-l.X)*(h.Y-d.Y))===0},i.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var r=0,l=this.m_edges.length;r<l;++r){for(var h=0,d=this.m_edges[r].length;h<d;++h)this.m_edges[r][h]=null;i.Clear(this.m_edges[r])}i.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},i.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var r=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=r}this.m_CurrentLM=null},i.ClipperBase.prototype.RangeTest=function(r,l){l.Value?(r.X>i.ClipperBase.hiRange||r.Y>i.ClipperBase.hiRange||-r.X>i.ClipperBase.hiRange||-r.Y>i.ClipperBase.hiRange)&&i.Error("Coordinate outside allowed range in RangeTest()."):(r.X>i.ClipperBase.loRange||r.Y>i.ClipperBase.loRange||-r.X>i.ClipperBase.loRange||-r.Y>i.ClipperBase.loRange)&&(l.Value=!0,this.RangeTest(r,l))},i.ClipperBase.prototype.InitEdge=function(r,l,h,d){r.Next=l,r.Prev=h,r.Curr.X=d.X,r.Curr.Y=d.Y,i.use_xyz&&(r.Curr.Z=d.Z),r.OutIdx=-1},i.ClipperBase.prototype.InitEdge2=function(r,l){r.Curr.Y>=r.Next.Curr.Y?(r.Bot.X=r.Curr.X,r.Bot.Y=r.Curr.Y,i.use_xyz&&(r.Bot.Z=r.Curr.Z),r.Top.X=r.Next.Curr.X,r.Top.Y=r.Next.Curr.Y,i.use_xyz&&(r.Top.Z=r.Next.Curr.Z)):(r.Top.X=r.Curr.X,r.Top.Y=r.Curr.Y,i.use_xyz&&(r.Top.Z=r.Curr.Z),r.Bot.X=r.Next.Curr.X,r.Bot.Y=r.Next.Curr.Y,i.use_xyz&&(r.Bot.Z=r.Next.Curr.Z)),this.SetDx(r),r.PolyTyp=l},i.ClipperBase.prototype.FindNextLocMin=function(r){for(var l;;){for(;i.IntPoint.op_Inequality(r.Bot,r.Prev.Bot)||i.IntPoint.op_Equality(r.Curr,r.Top);)r=r.Next;if(r.Dx!==i.ClipperBase.horizontal&&r.Prev.Dx!==i.ClipperBase.horizontal)break;for(;r.Prev.Dx===i.ClipperBase.horizontal;)r=r.Prev;for(l=r;r.Dx===i.ClipperBase.horizontal;)r=r.Next;if(r.Top.Y!==r.Prev.Bot.Y){l.Prev.Bot.X<r.Bot.X&&(r=l);break}}return r},i.ClipperBase.prototype.ProcessBound=function(r,l){var h,d=r,y;if(d.OutIdx===i.ClipperBase.Skip){if(r=d,l){for(;r.Top.Y===r.Next.Bot.Y;)r=r.Next;for(;r!==d&&r.Dx===i.ClipperBase.horizontal;)r=r.Prev}else{for(;r.Top.Y===r.Prev.Bot.Y;)r=r.Prev;for(;r!==d&&r.Dx===i.ClipperBase.horizontal;)r=r.Next}if(r===d)l?d=r.Next:d=r.Prev;else{l?r=d.Next:r=d.Prev;var w=new i.LocalMinima;w.Next=null,w.Y=r.Bot.Y,w.LeftBound=null,w.RightBound=r,r.WindDelta=0,d=this.ProcessBound(r,l),this.InsertLocalMinima(w)}return d}if(r.Dx===i.ClipperBase.horizontal&&(l?h=r.Prev:h=r.Next,h.Dx===i.ClipperBase.horizontal?h.Bot.X!==r.Bot.X&&h.Top.X!==r.Bot.X&&this.ReverseHorizontal(r):h.Bot.X!==r.Bot.X&&this.ReverseHorizontal(r)),h=r,l){for(;d.Top.Y===d.Next.Bot.Y&&d.Next.OutIdx!==i.ClipperBase.Skip;)d=d.Next;if(d.Dx===i.ClipperBase.horizontal&&d.Next.OutIdx!==i.ClipperBase.Skip){for(y=d;y.Prev.Dx===i.ClipperBase.horizontal;)y=y.Prev;y.Prev.Top.X>d.Next.Top.X&&(d=y.Prev)}for(;r!==d;)r.NextInLML=r.Next,r.Dx===i.ClipperBase.horizontal&&r!==h&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),r=r.Next;r.Dx===i.ClipperBase.horizontal&&r!==h&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),d=d.Next}else{for(;d.Top.Y===d.Prev.Bot.Y&&d.Prev.OutIdx!==i.ClipperBase.Skip;)d=d.Prev;if(d.Dx===i.ClipperBase.horizontal&&d.Prev.OutIdx!==i.ClipperBase.Skip){for(y=d;y.Next.Dx===i.ClipperBase.horizontal;)y=y.Next;(y.Next.Top.X===d.Prev.Top.X||y.Next.Top.X>d.Prev.Top.X)&&(d=y.Next)}for(;r!==d;)r.NextInLML=r.Prev,r.Dx===i.ClipperBase.horizontal&&r!==h&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),r=r.Prev;r.Dx===i.ClipperBase.horizontal&&r!==h&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),d=d.Prev}return d},i.ClipperBase.prototype.AddPath=function(r,l,h){i.use_lines?!h&&l===i.PolyType.ptClip&&i.Error("AddPath: Open paths must be subject."):h||i.Error("AddPath: Open paths have been disabled.");var d=r.length-1;if(h)for(;d>0&&i.IntPoint.op_Equality(r[d],r[0]);)--d;for(;d>0&&i.IntPoint.op_Equality(r[d],r[d-1]);)--d;if(h&&d<2||!h&&d<1)return!1;for(var y=new Array,w=0;w<=d;w++)y.push(new i.TEdge);var L=!0;y[1].Curr.X=r[1].X,y[1].Curr.Y=r[1].Y,i.use_xyz&&(y[1].Curr.Z=r[1].Z);var z={Value:this.m_UseFullRange};this.RangeTest(r[0],z),this.m_UseFullRange=z.Value,z.Value=this.m_UseFullRange,this.RangeTest(r[d],z),this.m_UseFullRange=z.Value,this.InitEdge(y[0],y[1],y[d],r[0]),this.InitEdge(y[d],y[0],y[d-1],r[d]);for(var w=d-1;w>=1;--w)z.Value=this.m_UseFullRange,this.RangeTest(r[w],z),this.m_UseFullRange=z.Value,this.InitEdge(y[w],y[w+1],y[w-1],r[w]);for(var V=y[0],$=V,ht=V;;){if($.Curr===$.Next.Curr&&(h||$.Next!==V)){if($===$.Next)break;$===V&&(V=$.Next),$=this.RemoveEdge($),ht=$;continue}if($.Prev===$.Next)break;if(h&&i.ClipperBase.SlopesEqual4($.Prev.Curr,$.Curr,$.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3($.Prev.Curr,$.Curr,$.Next.Curr))){$===V&&(V=$.Next),$=this.RemoveEdge($),$=$.Prev,ht=$;continue}if($=$.Next,$===ht||!h&&$.Next===V)break}if(!h&&$===$.Next||h&&$.Prev===$.Next)return!1;h||(this.m_HasOpenPaths=!0,V.Prev.OutIdx=i.ClipperBase.Skip),$=V;do this.InitEdge2($,l),$=$.Next,L&&$.Curr.Y!==V.Curr.Y&&(L=!1);while($!==V);if(L){if(h)return!1;$.Prev.OutIdx=i.ClipperBase.Skip;var ct=new i.LocalMinima;for(ct.Next=null,ct.Y=$.Bot.Y,ct.LeftBound=null,ct.RightBound=$,ct.RightBound.Side=i.EdgeSide.esRight,ct.RightBound.WindDelta=0;$.Bot.X!==$.Prev.Top.X&&this.ReverseHorizontal($),$.Next.OutIdx!==i.ClipperBase.Skip;)$.NextInLML=$.Next,$=$.Next;return this.InsertLocalMinima(ct),this.m_edges.push(y),!0}this.m_edges.push(y);var gt,Wt=null;for(i.IntPoint.op_Equality($.Prev.Bot,$.Prev.Top)&&($=$.Next);$=this.FindNextLocMin($),$!==Wt;){Wt===null&&(Wt=$);var ct=new i.LocalMinima;ct.Next=null,ct.Y=$.Bot.Y,$.Dx<$.Prev.Dx?(ct.LeftBound=$.Prev,ct.RightBound=$,gt=!1):(ct.LeftBound=$,ct.RightBound=$.Prev,gt=!0),ct.LeftBound.Side=i.EdgeSide.esLeft,ct.RightBound.Side=i.EdgeSide.esRight,h?ct.LeftBound.Next===ct.RightBound?ct.LeftBound.WindDelta=-1:ct.LeftBound.WindDelta=1:ct.LeftBound.WindDelta=0,ct.RightBound.WindDelta=-ct.LeftBound.WindDelta,$=this.ProcessBound(ct.LeftBound,gt),$.OutIdx===i.ClipperBase.Skip&&($=this.ProcessBound($,gt));var oe=this.ProcessBound(ct.RightBound,!gt);oe.OutIdx===i.ClipperBase.Skip&&(oe=this.ProcessBound(oe,!gt)),ct.LeftBound.OutIdx===i.ClipperBase.Skip?ct.LeftBound=null:ct.RightBound.OutIdx===i.ClipperBase.Skip&&(ct.RightBound=null),this.InsertLocalMinima(ct),gt||($=oe)}return!0},i.ClipperBase.prototype.AddPaths=function(r,l,h){for(var d=!1,y=0,w=r.length;y<w;++y)this.AddPath(r[y],l,h)&&(d=!0);return d},i.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(r,l,h){return i.IntPoint.op_Equality(r,h)||i.IntPoint.op_Equality(r,l)||i.IntPoint.op_Equality(h,l)?!1:r.X!==h.X?l.X>r.X==l.X<h.X:l.Y>r.Y==l.Y<h.Y},i.ClipperBase.prototype.RemoveEdge=function(r){r.Prev.Next=r.Next,r.Next.Prev=r.Prev;var l=r.Next;return r.Prev=null,l},i.ClipperBase.prototype.SetDx=function(r){r.Delta.X=r.Top.X-r.Bot.X,r.Delta.Y=r.Top.Y-r.Bot.Y,r.Delta.Y===0?r.Dx=i.ClipperBase.horizontal:r.Dx=r.Delta.X/r.Delta.Y},i.ClipperBase.prototype.InsertLocalMinima=function(r){if(this.m_MinimaList===null)this.m_MinimaList=r;else if(r.Y>=this.m_MinimaList.Y)r.Next=this.m_MinimaList,this.m_MinimaList=r;else{for(var l=this.m_MinimaList;l.Next!==null&&r.Y<l.Next.Y;)l=l.Next;r.Next=l.Next,l.Next=r}},i.ClipperBase.prototype.PopLocalMinima=function(r,l){return l.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===r?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},i.ClipperBase.prototype.ReverseHorizontal=function(r){var l=r.Top.X;r.Top.X=r.Bot.X,r.Bot.X=l,i.use_xyz&&(l=r.Top.Z,r.Top.Z=r.Bot.Z,r.Bot.Z=l)},i.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var r=this.m_MinimaList;r!==null;){this.InsertScanbeam(r.Y);var l=r.LeftBound;l!==null&&(l.Curr.X=l.Bot.X,l.Curr.Y=l.Bot.Y,i.use_xyz&&(l.Curr.Z=l.Bot.Z),l.OutIdx=i.ClipperBase.Unassigned),l=r.RightBound,l!==null&&(l.Curr.X=l.Bot.X,l.Curr.Y=l.Bot.Y,i.use_xyz&&(l.Curr.Z=l.Bot.Z),l.OutIdx=i.ClipperBase.Unassigned),r=r.Next}this.m_ActiveEdges=null}},i.ClipperBase.prototype.InsertScanbeam=function(r){if(this.m_Scanbeam===null)this.m_Scanbeam=new i.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=r;else if(r>this.m_Scanbeam.Y){var l=new i.Scanbeam;l.Y=r,l.Next=this.m_Scanbeam,this.m_Scanbeam=l}else{for(var h=this.m_Scanbeam;h.Next!==null&&r<=h.Next.Y;)h=h.Next;if(r===h.Y)return;var d=new i.Scanbeam;d.Y=r,d.Next=h.Next,h.Next=d}},i.ClipperBase.prototype.PopScanbeam=function(r){return this.m_Scanbeam===null?(r.v=0,!1):(r.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},i.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},i.ClipperBase.prototype.CreateOutRec=function(){var r=new i.OutRec;return r.Idx=i.ClipperBase.Unassigned,r.IsHole=!1,r.IsOpen=!1,r.FirstLeft=null,r.Pts=null,r.BottomPt=null,r.PolyNode=null,this.m_PolyOuts.push(r),r.Idx=this.m_PolyOuts.length-1,r},i.ClipperBase.prototype.DisposeOutRec=function(r){var l=this.m_PolyOuts[r];l.Pts=null,l=null,this.m_PolyOuts[r]=null},i.ClipperBase.prototype.UpdateEdgeIntoAEL=function(r){r.NextInLML===null&&i.Error("UpdateEdgeIntoAEL: invalid call");var l=r.PrevInAEL,h=r.NextInAEL;return r.NextInLML.OutIdx=r.OutIdx,l!==null?l.NextInAEL=r.NextInLML:this.m_ActiveEdges=r.NextInLML,h!==null&&(h.PrevInAEL=r.NextInLML),r.NextInLML.Side=r.Side,r.NextInLML.WindDelta=r.WindDelta,r.NextInLML.WindCnt=r.WindCnt,r.NextInLML.WindCnt2=r.WindCnt2,r=r.NextInLML,r.Curr.X=r.Bot.X,r.Curr.Y=r.Bot.Y,r.PrevInAEL=l,r.NextInAEL=h,i.ClipperBase.IsHorizontal(r)||this.InsertScanbeam(r.Top.Y),r},i.ClipperBase.prototype.SwapPositionsInAEL=function(r,l){if(!(r.NextInAEL===r.PrevInAEL||l.NextInAEL===l.PrevInAEL)){if(r.NextInAEL===l){var h=l.NextInAEL;h!==null&&(h.PrevInAEL=r);var d=r.PrevInAEL;d!==null&&(d.NextInAEL=l),l.PrevInAEL=d,l.NextInAEL=r,r.PrevInAEL=l,r.NextInAEL=h}else if(l.NextInAEL===r){var y=r.NextInAEL;y!==null&&(y.PrevInAEL=l);var w=l.PrevInAEL;w!==null&&(w.NextInAEL=r),r.PrevInAEL=w,r.NextInAEL=l,l.PrevInAEL=r,l.NextInAEL=y}else{var L=r.NextInAEL,z=r.PrevInAEL;r.NextInAEL=l.NextInAEL,r.NextInAEL!==null&&(r.NextInAEL.PrevInAEL=r),r.PrevInAEL=l.PrevInAEL,r.PrevInAEL!==null&&(r.PrevInAEL.NextInAEL=r),l.NextInAEL=L,l.NextInAEL!==null&&(l.NextInAEL.PrevInAEL=l),l.PrevInAEL=z,l.PrevInAEL!==null&&(l.PrevInAEL.NextInAEL=l)}r.PrevInAEL===null?this.m_ActiveEdges=r:l.PrevInAEL===null&&(this.m_ActiveEdges=l)}},i.ClipperBase.prototype.DeleteFromAEL=function(r){var l=r.PrevInAEL,h=r.NextInAEL;l===null&&h===null&&r!==this.m_ActiveEdges||(l!==null?l.NextInAEL=h:this.m_ActiveEdges=h,h!==null&&(h.PrevInAEL=l),r.NextInAEL=null,r.PrevInAEL=null)},i.Clipper=function(r){typeof r>"u"&&(r=0),this.m_PolyOuts=null,this.m_ClipType=i.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=i.PolyFillType.pftEvenOdd,this.m_SubjFillType=i.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,i.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=i.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&r)!==0,this.StrictlySimple=(2&r)!==0,this.PreserveCollinear=(4&r)!==0,i.use_xyz&&(this.ZFillFunction=null)},i.Clipper.ioReverseSolution=1,i.Clipper.ioStrictlySimple=2,i.Clipper.ioPreserveCollinear=4,i.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),i.ClipperBase.prototype.Clear.call(this))},i.Clipper.prototype.InsertMaxima=function(r){var l=new i.Maxima;if(l.X=r,this.m_Maxima===null)this.m_Maxima=l,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(r<this.m_Maxima.X)l.Next=this.m_Maxima,l.Prev=null,this.m_Maxima=l;else{for(var h=this.m_Maxima;h.Next!==null&&r>=h.Next.X;)h=h.Next;if(r===h.X)return;l.Next=h.Next,l.Prev=h,h.Next!==null&&(h.Next.Prev=l),h.Next=l}},i.Clipper.prototype.Execute=function(){var r=arguments,l=r.length,h=r[1]instanceof i.PolyTree;if(l===4&&!h){var d=r[0],y=r[1],w=r[2],L=r[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&i.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,i.Clear(y),this.m_SubjFillType=w,this.m_ClipFillType=L,this.m_ClipType=d,this.m_UsingPolyTree=!1;try{var z=this.ExecuteInternal();z&&this.BuildResult(y)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return z}else if(l===4&&h){var d=r[0],V=r[1],w=r[2],L=r[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=w,this.m_ClipFillType=L,this.m_ClipType=d,this.m_UsingPolyTree=!0;try{var z=this.ExecuteInternal();z&&this.BuildResult2(V)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return z}else if(l===2&&!h){var d=r[0],y=r[1];return this.Execute(d,y,i.PolyFillType.pftEvenOdd,i.PolyFillType.pftEvenOdd)}else if(l===2&&h){var d=r[0],V=r[1];return this.Execute(d,V,i.PolyFillType.pftEvenOdd,i.PolyFillType.pftEvenOdd)}},i.Clipper.prototype.FixHoleLinkage=function(r){if(!(r.FirstLeft===null||r.IsHole!==r.FirstLeft.IsHole&&r.FirstLeft.Pts!==null)){for(var l=r.FirstLeft;l!==null&&(l.IsHole===r.IsHole||l.Pts===null);)l=l.FirstLeft;r.FirstLeft=l}},i.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var r={},l={};if(!this.PopScanbeam(r))return!1;for(this.InsertLocalMinimaIntoAEL(r.v);this.PopScanbeam(l)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(l.v))return!1;this.ProcessEdgesAtTopOfScanbeam(l.v),r.v=l.v,this.InsertLocalMinimaIntoAEL(r.v)}var h,d,y;for(d=0,y=this.m_PolyOuts.length;d<y;d++)h=this.m_PolyOuts[d],!(h.Pts===null||h.IsOpen)&&(h.IsHole^this.ReverseSolution)==this.Area$1(h)>0&&this.ReversePolyPtLinks(h.Pts);for(this.JoinCommonEdges(),d=0,y=this.m_PolyOuts.length;d<y;d++)h=this.m_PolyOuts[d],h.Pts!==null&&(h.IsOpen?this.FixupOutPolyline(h):this.FixupOutPolygon(h));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},i.Clipper.prototype.DisposeAllPolyPts=function(){for(var r=0,l=this.m_PolyOuts.length;r<l;++r)this.DisposeOutRec(r);i.Clear(this.m_PolyOuts)},i.Clipper.prototype.AddJoin=function(r,l,h){var d=new i.Join;d.OutPt1=r,d.OutPt2=l,d.OffPt.X=h.X,d.OffPt.Y=h.Y,i.use_xyz&&(d.OffPt.Z=h.Z),this.m_Joins.push(d)},i.Clipper.prototype.AddGhostJoin=function(r,l){var h=new i.Join;h.OutPt1=r,h.OffPt.X=l.X,h.OffPt.Y=l.Y,i.use_xyz&&(h.OffPt.Z=l.Z),this.m_GhostJoins.push(h)},i.Clipper.prototype.SetZ=function(r,l,h){if(this.ZFillFunction!==null){if(r.Z!==0||this.ZFillFunction===null)return;i.IntPoint.op_Equality(r,l.Bot)?r.Z=l.Bot.Z:i.IntPoint.op_Equality(r,l.Top)?r.Z=l.Top.Z:i.IntPoint.op_Equality(r,h.Bot)?r.Z=h.Bot.Z:i.IntPoint.op_Equality(r,h.Top)?r.Z=h.Top.Z:this.ZFillFunction(l.Bot,l.Top,h.Bot,h.Top,r)}},i.Clipper.prototype.InsertLocalMinimaIntoAEL=function(r){for(var l={},h,d;this.PopLocalMinima(r,l);){h=l.v.LeftBound,d=l.v.RightBound;var y=null;if(h===null?(this.InsertEdgeIntoAEL(d,null),this.SetWindingCount(d),this.IsContributing(d)&&(y=this.AddOutPt(d,d.Bot))):d===null?(this.InsertEdgeIntoAEL(h,null),this.SetWindingCount(h),this.IsContributing(h)&&(y=this.AddOutPt(h,h.Bot)),this.InsertScanbeam(h.Top.Y)):(this.InsertEdgeIntoAEL(h,null),this.InsertEdgeIntoAEL(d,h),this.SetWindingCount(h),d.WindCnt=h.WindCnt,d.WindCnt2=h.WindCnt2,this.IsContributing(h)&&(y=this.AddLocalMinPoly(h,d,h.Bot)),this.InsertScanbeam(h.Top.Y)),d!==null&&(i.ClipperBase.IsHorizontal(d)?(d.NextInLML!==null&&this.InsertScanbeam(d.NextInLML.Top.Y),this.AddEdgeToSEL(d)):this.InsertScanbeam(d.Top.Y)),!(h===null||d===null)){if(y!==null&&i.ClipperBase.IsHorizontal(d)&&this.m_GhostJoins.length>0&&d.WindDelta!==0)for(var w=0,L=this.m_GhostJoins.length;w<L;w++){var z=this.m_GhostJoins[w];this.HorzSegmentsOverlap(z.OutPt1.Pt.X,z.OffPt.X,d.Bot.X,d.Top.X)&&this.AddJoin(z.OutPt1,y,z.OffPt)}if(h.OutIdx>=0&&h.PrevInAEL!==null&&h.PrevInAEL.Curr.X===h.Bot.X&&h.PrevInAEL.OutIdx>=0&&i.ClipperBase.SlopesEqual5(h.PrevInAEL.Curr,h.PrevInAEL.Top,h.Curr,h.Top,this.m_UseFullRange)&&h.WindDelta!==0&&h.PrevInAEL.WindDelta!==0){var V=this.AddOutPt(h.PrevInAEL,h.Bot);this.AddJoin(y,V,h.Top)}if(h.NextInAEL!==d){if(d.OutIdx>=0&&d.PrevInAEL.OutIdx>=0&&i.ClipperBase.SlopesEqual5(d.PrevInAEL.Curr,d.PrevInAEL.Top,d.Curr,d.Top,this.m_UseFullRange)&&d.WindDelta!==0&&d.PrevInAEL.WindDelta!==0){var V=this.AddOutPt(d.PrevInAEL,d.Bot);this.AddJoin(y,V,d.Top)}var $=h.NextInAEL;if($!==null)for(;$!==d;)this.IntersectEdges(d,$,h.Curr),$=$.NextInAEL}}}},i.Clipper.prototype.InsertEdgeIntoAEL=function(r,l){if(this.m_ActiveEdges===null)r.PrevInAEL=null,r.NextInAEL=null,this.m_ActiveEdges=r;else if(l===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,r))r.PrevInAEL=null,r.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=r,this.m_ActiveEdges=r;else{for(l===null&&(l=this.m_ActiveEdges);l.NextInAEL!==null&&!this.E2InsertsBeforeE1(l.NextInAEL,r);)l=l.NextInAEL;r.NextInAEL=l.NextInAEL,l.NextInAEL!==null&&(l.NextInAEL.PrevInAEL=r),r.PrevInAEL=l,l.NextInAEL=r}},i.Clipper.prototype.E2InsertsBeforeE1=function(r,l){return l.Curr.X===r.Curr.X?l.Top.Y>r.Top.Y?l.Top.X<i.Clipper.TopX(r,l.Top.Y):r.Top.X>i.Clipper.TopX(l,r.Top.Y):l.Curr.X<r.Curr.X},i.Clipper.prototype.IsEvenOddFillType=function(r){return r.PolyTyp===i.PolyType.ptSubject?this.m_SubjFillType===i.PolyFillType.pftEvenOdd:this.m_ClipFillType===i.PolyFillType.pftEvenOdd},i.Clipper.prototype.IsEvenOddAltFillType=function(r){return r.PolyTyp===i.PolyType.ptSubject?this.m_ClipFillType===i.PolyFillType.pftEvenOdd:this.m_SubjFillType===i.PolyFillType.pftEvenOdd},i.Clipper.prototype.IsContributing=function(r){var l,h;switch(r.PolyTyp===i.PolyType.ptSubject?(l=this.m_SubjFillType,h=this.m_ClipFillType):(l=this.m_ClipFillType,h=this.m_SubjFillType),l){case i.PolyFillType.pftEvenOdd:if(r.WindDelta===0&&r.WindCnt!==1)return!1;break;case i.PolyFillType.pftNonZero:if(Math.abs(r.WindCnt)!==1)return!1;break;case i.PolyFillType.pftPositive:if(r.WindCnt!==1)return!1;break;default:if(r.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case i.ClipType.ctIntersection:switch(h){case i.PolyFillType.pftEvenOdd:case i.PolyFillType.pftNonZero:return r.WindCnt2!==0;case i.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case i.ClipType.ctUnion:switch(h){case i.PolyFillType.pftEvenOdd:case i.PolyFillType.pftNonZero:return r.WindCnt2===0;case i.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}case i.ClipType.ctDifference:if(r.PolyTyp===i.PolyType.ptSubject)switch(h){case i.PolyFillType.pftEvenOdd:case i.PolyFillType.pftNonZero:return r.WindCnt2===0;case i.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else switch(h){case i.PolyFillType.pftEvenOdd:case i.PolyFillType.pftNonZero:return r.WindCnt2!==0;case i.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case i.ClipType.ctXor:if(r.WindDelta===0)switch(h){case i.PolyFillType.pftEvenOdd:case i.PolyFillType.pftNonZero:return r.WindCnt2===0;case i.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else return!0}return!0},i.Clipper.prototype.SetWindingCount=function(r){for(var l=r.PrevInAEL;l!==null&&(l.PolyTyp!==r.PolyTyp||l.WindDelta===0);)l=l.PrevInAEL;if(l===null){var h=r.PolyTyp===i.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;r.WindDelta===0?r.WindCnt=h===i.PolyFillType.pftNegative?-1:1:r.WindCnt=r.WindDelta,r.WindCnt2=0,l=this.m_ActiveEdges}else if(r.WindDelta===0&&this.m_ClipType!==i.ClipType.ctUnion)r.WindCnt=1,r.WindCnt2=l.WindCnt2,l=l.NextInAEL;else if(this.IsEvenOddFillType(r)){if(r.WindDelta===0){for(var d=!0,y=l.PrevInAEL;y!==null;)y.PolyTyp===l.PolyTyp&&y.WindDelta!==0&&(d=!d),y=y.PrevInAEL;r.WindCnt=d?0:1}else r.WindCnt=r.WindDelta;r.WindCnt2=l.WindCnt2,l=l.NextInAEL}else l.WindCnt*l.WindDelta<0?Math.abs(l.WindCnt)>1?l.WindDelta*r.WindDelta<0?r.WindCnt=l.WindCnt:r.WindCnt=l.WindCnt+r.WindDelta:r.WindCnt=r.WindDelta===0?1:r.WindDelta:r.WindDelta===0?r.WindCnt=l.WindCnt<0?l.WindCnt-1:l.WindCnt+1:l.WindDelta*r.WindDelta<0?r.WindCnt=l.WindCnt:r.WindCnt=l.WindCnt+r.WindDelta,r.WindCnt2=l.WindCnt2,l=l.NextInAEL;if(this.IsEvenOddAltFillType(r))for(;l!==r;)l.WindDelta!==0&&(r.WindCnt2=r.WindCnt2===0?1:0),l=l.NextInAEL;else for(;l!==r;)r.WindCnt2+=l.WindDelta,l=l.NextInAEL},i.Clipper.prototype.AddEdgeToSEL=function(r){this.m_SortedEdges===null?(this.m_SortedEdges=r,r.PrevInSEL=null,r.NextInSEL=null):(r.NextInSEL=this.m_SortedEdges,r.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=r,this.m_SortedEdges=r)},i.Clipper.prototype.PopEdgeFromSEL=function(r){if(r.v=this.m_SortedEdges,r.v===null)return!1;var l=r.v;return this.m_SortedEdges=r.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),l.NextInSEL=null,l.PrevInSEL=null,!0},i.Clipper.prototype.CopyAELToSEL=function(){var r=this.m_ActiveEdges;for(this.m_SortedEdges=r;r!==null;)r.PrevInSEL=r.PrevInAEL,r.NextInSEL=r.NextInAEL,r=r.NextInAEL},i.Clipper.prototype.SwapPositionsInSEL=function(r,l){if(!(r.NextInSEL===null&&r.PrevInSEL===null)&&!(l.NextInSEL===null&&l.PrevInSEL===null)){if(r.NextInSEL===l){var h=l.NextInSEL;h!==null&&(h.PrevInSEL=r);var d=r.PrevInSEL;d!==null&&(d.NextInSEL=l),l.PrevInSEL=d,l.NextInSEL=r,r.PrevInSEL=l,r.NextInSEL=h}else if(l.NextInSEL===r){var h=r.NextInSEL;h!==null&&(h.PrevInSEL=l);var d=l.PrevInSEL;d!==null&&(d.NextInSEL=r),r.PrevInSEL=d,r.NextInSEL=l,l.PrevInSEL=r,l.NextInSEL=h}else{var h=r.NextInSEL,d=r.PrevInSEL;r.NextInSEL=l.NextInSEL,r.NextInSEL!==null&&(r.NextInSEL.PrevInSEL=r),r.PrevInSEL=l.PrevInSEL,r.PrevInSEL!==null&&(r.PrevInSEL.NextInSEL=r),l.NextInSEL=h,l.NextInSEL!==null&&(l.NextInSEL.PrevInSEL=l),l.PrevInSEL=d,l.PrevInSEL!==null&&(l.PrevInSEL.NextInSEL=l)}r.PrevInSEL===null?this.m_SortedEdges=r:l.PrevInSEL===null&&(this.m_SortedEdges=l)}},i.Clipper.prototype.AddLocalMaxPoly=function(r,l,h){this.AddOutPt(r,h),l.WindDelta===0&&this.AddOutPt(l,h),r.OutIdx===l.OutIdx?(r.OutIdx=-1,l.OutIdx=-1):r.OutIdx<l.OutIdx?this.AppendPolygon(r,l):this.AppendPolygon(l,r)},i.Clipper.prototype.AddLocalMinPoly=function(r,l,h){var d,y,w;if(i.ClipperBase.IsHorizontal(l)||r.Dx>l.Dx?(d=this.AddOutPt(r,h),l.OutIdx=r.OutIdx,r.Side=i.EdgeSide.esLeft,l.Side=i.EdgeSide.esRight,y=r,y.PrevInAEL===l?w=l.PrevInAEL:w=y.PrevInAEL):(d=this.AddOutPt(l,h),r.OutIdx=l.OutIdx,r.Side=i.EdgeSide.esRight,l.Side=i.EdgeSide.esLeft,y=l,y.PrevInAEL===r?w=r.PrevInAEL:w=y.PrevInAEL),w!==null&&w.OutIdx>=0&&w.Top.Y<h.Y&&y.Top.Y<h.Y){var L=i.Clipper.TopX(w,h.Y),z=i.Clipper.TopX(y,h.Y);if(L===z&&y.WindDelta!==0&&w.WindDelta!==0&&i.ClipperBase.SlopesEqual5(new i.IntPoint2(L,h.Y),w.Top,new i.IntPoint2(z,h.Y),y.Top,this.m_UseFullRange)){var V=this.AddOutPt(w,h);this.AddJoin(d,V,y.Top)}}return d},i.Clipper.prototype.AddOutPt=function(r,l){if(r.OutIdx<0){var h=this.CreateOutRec();h.IsOpen=r.WindDelta===0;var d=new i.OutPt;return h.Pts=d,d.Idx=h.Idx,d.Pt.X=l.X,d.Pt.Y=l.Y,i.use_xyz&&(d.Pt.Z=l.Z),d.Next=d,d.Prev=d,h.IsOpen||this.SetHoleState(r,h),r.OutIdx=h.Idx,d}else{var h=this.m_PolyOuts[r.OutIdx],y=h.Pts,w=r.Side===i.EdgeSide.esLeft;if(w&&i.IntPoint.op_Equality(l,y.Pt))return y;if(!w&&i.IntPoint.op_Equality(l,y.Prev.Pt))return y.Prev;var d=new i.OutPt;return d.Idx=h.Idx,d.Pt.X=l.X,d.Pt.Y=l.Y,i.use_xyz&&(d.Pt.Z=l.Z),d.Next=y,d.Prev=y.Prev,d.Prev.Next=d,y.Prev=d,w&&(h.Pts=d),d}},i.Clipper.prototype.GetLastOutPt=function(r){var l=this.m_PolyOuts[r.OutIdx];return r.Side===i.EdgeSide.esLeft?l.Pts:l.Pts.Prev},i.Clipper.prototype.SwapPoints=function(r,l){var h=new i.IntPoint1(r.Value);r.Value.X=l.Value.X,r.Value.Y=l.Value.Y,i.use_xyz&&(r.Value.Z=l.Value.Z),l.Value.X=h.X,l.Value.Y=h.Y,i.use_xyz&&(l.Value.Z=h.Z)},i.Clipper.prototype.HorzSegmentsOverlap=function(r,l,h,d){var y;return r>l&&(y=r,r=l,l=y),h>d&&(y=h,h=d,d=y),r<d&&h<l},i.Clipper.prototype.SetHoleState=function(r,l){for(var h=r.PrevInAEL,d=null;h!==null;)h.OutIdx>=0&&h.WindDelta!==0&&(d===null?d=h:d.OutIdx===h.OutIdx&&(d=null)),h=h.PrevInAEL;d===null?(l.FirstLeft=null,l.IsHole=!1):(l.FirstLeft=this.m_PolyOuts[d.OutIdx],l.IsHole=!l.FirstLeft.IsHole)},i.Clipper.prototype.GetDx=function(r,l){return r.Y===l.Y?i.ClipperBase.horizontal:(l.X-r.X)/(l.Y-r.Y)},i.Clipper.prototype.FirstIsBottomPt=function(r,l){for(var h=r.Prev;i.IntPoint.op_Equality(h.Pt,r.Pt)&&h!==r;)h=h.Prev;var d=Math.abs(this.GetDx(r.Pt,h.Pt));for(h=r.Next;i.IntPoint.op_Equality(h.Pt,r.Pt)&&h!==r;)h=h.Next;var y=Math.abs(this.GetDx(r.Pt,h.Pt));for(h=l.Prev;i.IntPoint.op_Equality(h.Pt,l.Pt)&&h!==l;)h=h.Prev;var w=Math.abs(this.GetDx(l.Pt,h.Pt));for(h=l.Next;i.IntPoint.op_Equality(h.Pt,l.Pt)&&h!==l;)h=h.Next;var L=Math.abs(this.GetDx(l.Pt,h.Pt));return Math.max(d,y)===Math.max(w,L)&&Math.min(d,y)===Math.min(w,L)?this.Area(r)>0:d>=w&&d>=L||y>=w&&y>=L},i.Clipper.prototype.GetBottomPt=function(r){for(var l=null,h=r.Next;h!==r;)h.Pt.Y>r.Pt.Y?(r=h,l=null):h.Pt.Y===r.Pt.Y&&h.Pt.X<=r.Pt.X&&(h.Pt.X<r.Pt.X?(l=null,r=h):h.Next!==r&&h.Prev!==r&&(l=h)),h=h.Next;if(l!==null)for(;l!==h;)for(this.FirstIsBottomPt(h,l)||(r=l),l=l.Next;i.IntPoint.op_Inequality(l.Pt,r.Pt);)l=l.Next;return r},i.Clipper.prototype.GetLowermostRec=function(r,l){r.BottomPt===null&&(r.BottomPt=this.GetBottomPt(r.Pts)),l.BottomPt===null&&(l.BottomPt=this.GetBottomPt(l.Pts));var h=r.BottomPt,d=l.BottomPt;return h.Pt.Y>d.Pt.Y?r:h.Pt.Y<d.Pt.Y?l:h.Pt.X<d.Pt.X?r:h.Pt.X>d.Pt.X||h.Next===h?l:d.Next===d||this.FirstIsBottomPt(h,d)?r:l},i.Clipper.prototype.OutRec1RightOfOutRec2=function(r,l){do if(r=r.FirstLeft,r===l)return!0;while(r!==null);return!1},i.Clipper.prototype.GetOutRec=function(r){for(var l=this.m_PolyOuts[r];l!==this.m_PolyOuts[l.Idx];)l=this.m_PolyOuts[l.Idx];return l},i.Clipper.prototype.AppendPolygon=function(r,l){var h=this.m_PolyOuts[r.OutIdx],d=this.m_PolyOuts[l.OutIdx],y;this.OutRec1RightOfOutRec2(h,d)?y=d:this.OutRec1RightOfOutRec2(d,h)?y=h:y=this.GetLowermostRec(h,d);var w=h.Pts,L=w.Prev,z=d.Pts,V=z.Prev;r.Side===i.EdgeSide.esLeft?l.Side===i.EdgeSide.esLeft?(this.ReversePolyPtLinks(z),z.Next=w,w.Prev=z,L.Next=V,V.Prev=L,h.Pts=V):(V.Next=w,w.Prev=V,z.Prev=L,L.Next=z,h.Pts=z):l.Side===i.EdgeSide.esRight?(this.ReversePolyPtLinks(z),L.Next=V,V.Prev=L,z.Next=w,w.Prev=z):(L.Next=z,z.Prev=L,w.Prev=V,V.Next=w),h.BottomPt=null,y===d&&(d.FirstLeft!==h&&(h.FirstLeft=d.FirstLeft),h.IsHole=d.IsHole),d.Pts=null,d.BottomPt=null,d.FirstLeft=h;var $=r.OutIdx,ht=l.OutIdx;r.OutIdx=-1,l.OutIdx=-1;for(var ct=this.m_ActiveEdges;ct!==null;){if(ct.OutIdx===ht){ct.OutIdx=$,ct.Side=r.Side;break}ct=ct.NextInAEL}d.Idx=h.Idx},i.Clipper.prototype.ReversePolyPtLinks=function(r){if(r!==null){var l,h;l=r;do h=l.Next,l.Next=l.Prev,l.Prev=h,l=h;while(l!==r)}},i.Clipper.SwapSides=function(r,l){var h=r.Side;r.Side=l.Side,l.Side=h},i.Clipper.SwapPolyIndexes=function(r,l){var h=r.OutIdx;r.OutIdx=l.OutIdx,l.OutIdx=h},i.Clipper.prototype.IntersectEdges=function(r,l,h){var d=r.OutIdx>=0,y=l.OutIdx>=0;if(i.use_xyz&&this.SetZ(h,r,l),i.use_lines&&(r.WindDelta===0||l.WindDelta===0)){if(r.WindDelta===0&&l.WindDelta===0)return;r.PolyTyp===l.PolyTyp&&r.WindDelta!==l.WindDelta&&this.m_ClipType===i.ClipType.ctUnion?r.WindDelta===0?y&&(this.AddOutPt(r,h),d&&(r.OutIdx=-1)):d&&(this.AddOutPt(l,h),y&&(l.OutIdx=-1)):r.PolyTyp!==l.PolyTyp&&(r.WindDelta===0&&Math.abs(l.WindCnt)===1&&(this.m_ClipType!==i.ClipType.ctUnion||l.WindCnt2===0)?(this.AddOutPt(r,h),d&&(r.OutIdx=-1)):l.WindDelta===0&&Math.abs(r.WindCnt)===1&&(this.m_ClipType!==i.ClipType.ctUnion||r.WindCnt2===0)&&(this.AddOutPt(l,h),y&&(l.OutIdx=-1)));return}if(r.PolyTyp===l.PolyTyp)if(this.IsEvenOddFillType(r)){var w=r.WindCnt;r.WindCnt=l.WindCnt,l.WindCnt=w}else r.WindCnt+l.WindDelta===0?r.WindCnt=-r.WindCnt:r.WindCnt+=l.WindDelta,l.WindCnt-r.WindDelta===0?l.WindCnt=-l.WindCnt:l.WindCnt-=r.WindDelta;else this.IsEvenOddFillType(l)?r.WindCnt2=r.WindCnt2===0?1:0:r.WindCnt2+=l.WindDelta,this.IsEvenOddFillType(r)?l.WindCnt2=l.WindCnt2===0?1:0:l.WindCnt2-=r.WindDelta;var L,z,V,$;r.PolyTyp===i.PolyType.ptSubject?(L=this.m_SubjFillType,V=this.m_ClipFillType):(L=this.m_ClipFillType,V=this.m_SubjFillType),l.PolyTyp===i.PolyType.ptSubject?(z=this.m_SubjFillType,$=this.m_ClipFillType):(z=this.m_ClipFillType,$=this.m_SubjFillType);var ht,ct;switch(L){case i.PolyFillType.pftPositive:ht=r.WindCnt;break;case i.PolyFillType.pftNegative:ht=-r.WindCnt;break;default:ht=Math.abs(r.WindCnt);break}switch(z){case i.PolyFillType.pftPositive:ct=l.WindCnt;break;case i.PolyFillType.pftNegative:ct=-l.WindCnt;break;default:ct=Math.abs(l.WindCnt);break}if(d&&y)ht!==0&&ht!==1||ct!==0&&ct!==1||r.PolyTyp!==l.PolyTyp&&this.m_ClipType!==i.ClipType.ctXor?this.AddLocalMaxPoly(r,l,h):(this.AddOutPt(r,h),this.AddOutPt(l,h),i.Clipper.SwapSides(r,l),i.Clipper.SwapPolyIndexes(r,l));else if(d)(ct===0||ct===1)&&(this.AddOutPt(r,h),i.Clipper.SwapSides(r,l),i.Clipper.SwapPolyIndexes(r,l));else if(y)(ht===0||ht===1)&&(this.AddOutPt(l,h),i.Clipper.SwapSides(r,l),i.Clipper.SwapPolyIndexes(r,l));else if((ht===0||ht===1)&&(ct===0||ct===1)){var gt,Wt;switch(V){case i.PolyFillType.pftPositive:gt=r.WindCnt2;break;case i.PolyFillType.pftNegative:gt=-r.WindCnt2;break;default:gt=Math.abs(r.WindCnt2);break}switch($){case i.PolyFillType.pftPositive:Wt=l.WindCnt2;break;case i.PolyFillType.pftNegative:Wt=-l.WindCnt2;break;default:Wt=Math.abs(l.WindCnt2);break}if(r.PolyTyp!==l.PolyTyp)this.AddLocalMinPoly(r,l,h);else if(ht===1&&ct===1)switch(this.m_ClipType){case i.ClipType.ctIntersection:gt>0&&Wt>0&&this.AddLocalMinPoly(r,l,h);break;case i.ClipType.ctUnion:gt<=0&&Wt<=0&&this.AddLocalMinPoly(r,l,h);break;case i.ClipType.ctDifference:(r.PolyTyp===i.PolyType.ptClip&&gt>0&&Wt>0||r.PolyTyp===i.PolyType.ptSubject&&gt<=0&&Wt<=0)&&this.AddLocalMinPoly(r,l,h);break;case i.ClipType.ctXor:this.AddLocalMinPoly(r,l,h);break}else i.Clipper.SwapSides(r,l)}},i.Clipper.prototype.DeleteFromSEL=function(r){var l=r.PrevInSEL,h=r.NextInSEL;l===null&&h===null&&r!==this.m_SortedEdges||(l!==null?l.NextInSEL=h:this.m_SortedEdges=h,h!==null&&(h.PrevInSEL=l),r.NextInSEL=null,r.PrevInSEL=null)},i.Clipper.prototype.ProcessHorizontals=function(){for(var r={};this.PopEdgeFromSEL(r);)this.ProcessHorizontal(r.v)},i.Clipper.prototype.GetHorzDirection=function(r,l){r.Bot.X<r.Top.X?(l.Left=r.Bot.X,l.Right=r.Top.X,l.Dir=i.Direction.dLeftToRight):(l.Left=r.Top.X,l.Right=r.Bot.X,l.Dir=i.Direction.dRightToLeft)},i.Clipper.prototype.ProcessHorizontal=function(r){var l={Dir:null,Left:null,Right:null};this.GetHorzDirection(r,l);for(var h=l.Dir,d=l.Left,y=l.Right,w=r.WindDelta===0,L=r,z=null;L.NextInLML!==null&&i.ClipperBase.IsHorizontal(L.NextInLML);)L=L.NextInLML;L.NextInLML===null&&(z=this.GetMaximaPair(L));var V=this.m_Maxima;if(V!==null)if(h===i.Direction.dLeftToRight){for(;V!==null&&V.X<=r.Bot.X;)V=V.Next;V!==null&&V.X>=L.Top.X&&(V=null)}else{for(;V.Next!==null&&V.Next.X<r.Bot.X;)V=V.Next;V.X<=L.Top.X&&(V=null)}for(var $=null;;){for(var ht=r===L,ct=this.GetNextInAEL(r,h);ct!==null;){if(V!==null)if(h===i.Direction.dLeftToRight)for(;V!==null&&V.X<ct.Curr.X;)r.OutIdx>=0&&!w&&this.AddOutPt(r,new i.IntPoint2(V.X,r.Bot.Y)),V=V.Next;else for(;V!==null&&V.X>ct.Curr.X;)r.OutIdx>=0&&!w&&this.AddOutPt(r,new i.IntPoint2(V.X,r.Bot.Y)),V=V.Prev;if(h===i.Direction.dLeftToRight&&ct.Curr.X>y||h===i.Direction.dRightToLeft&&ct.Curr.X<d||ct.Curr.X===r.Top.X&&r.NextInLML!==null&&ct.Dx<r.NextInLML.Dx)break;if(r.OutIdx>=0&&!w){i.use_xyz&&(h===i.Direction.dLeftToRight?this.SetZ(ct.Curr,r,ct):this.SetZ(ct.Curr,ct,r)),$=this.AddOutPt(r,ct.Curr);for(var gt=this.m_SortedEdges;gt!==null;){if(gt.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,gt.Bot.X,gt.Top.X)){var Wt=this.GetLastOutPt(gt);this.AddJoin(Wt,$,gt.Top)}gt=gt.NextInSEL}this.AddGhostJoin($,r.Bot)}if(ct===z&&ht){r.OutIdx>=0&&this.AddLocalMaxPoly(r,z,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(z);return}if(h===i.Direction.dLeftToRight){var oe=new i.IntPoint2(ct.Curr.X,r.Curr.Y);this.IntersectEdges(r,ct,oe)}else{var oe=new i.IntPoint2(ct.Curr.X,r.Curr.Y);this.IntersectEdges(ct,r,oe)}var fe=this.GetNextInAEL(ct,h);this.SwapPositionsInAEL(r,ct),ct=fe}if(r.NextInLML===null||!i.ClipperBase.IsHorizontal(r.NextInLML))break;r=this.UpdateEdgeIntoAEL(r),r.OutIdx>=0&&this.AddOutPt(r,r.Bot),l={Dir:h,Left:d,Right:y},this.GetHorzDirection(r,l),h=l.Dir,d=l.Left,y=l.Right}if(r.OutIdx>=0&&$===null){$=this.GetLastOutPt(r);for(var gt=this.m_SortedEdges;gt!==null;){if(gt.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,gt.Bot.X,gt.Top.X)){var Wt=this.GetLastOutPt(gt);this.AddJoin(Wt,$,gt.Top)}gt=gt.NextInSEL}this.AddGhostJoin($,r.Top)}if(r.NextInLML!==null)if(r.OutIdx>=0){if($=this.AddOutPt(r,r.Top),r=this.UpdateEdgeIntoAEL(r),r.WindDelta===0)return;var Pe=r.PrevInAEL,fe=r.NextInAEL;if(Pe!==null&&Pe.Curr.X===r.Bot.X&&Pe.Curr.Y===r.Bot.Y&&Pe.WindDelta===0&&Pe.OutIdx>=0&&Pe.Curr.Y>Pe.Top.Y&&i.ClipperBase.SlopesEqual3(r,Pe,this.m_UseFullRange)){var Wt=this.AddOutPt(Pe,r.Bot);this.AddJoin($,Wt,r.Top)}else if(fe!==null&&fe.Curr.X===r.Bot.X&&fe.Curr.Y===r.Bot.Y&&fe.WindDelta!==0&&fe.OutIdx>=0&&fe.Curr.Y>fe.Top.Y&&i.ClipperBase.SlopesEqual3(r,fe,this.m_UseFullRange)){var Wt=this.AddOutPt(fe,r.Bot);this.AddJoin($,Wt,r.Top)}}else r=this.UpdateEdgeIntoAEL(r);else r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r)},i.Clipper.prototype.GetNextInAEL=function(r,l){return l===i.Direction.dLeftToRight?r.NextInAEL:r.PrevInAEL},i.Clipper.prototype.IsMinima=function(r){return r!==null&&r.Prev.NextInLML!==r&&r.Next.NextInLML!==r},i.Clipper.prototype.IsMaxima=function(r,l){return r!==null&&r.Top.Y===l&&r.NextInLML===null},i.Clipper.prototype.IsIntermediate=function(r,l){return r.Top.Y===l&&r.NextInLML!==null},i.Clipper.prototype.GetMaximaPair=function(r){return i.IntPoint.op_Equality(r.Next.Top,r.Top)&&r.Next.NextInLML===null?r.Next:i.IntPoint.op_Equality(r.Prev.Top,r.Top)&&r.Prev.NextInLML===null?r.Prev:null},i.Clipper.prototype.GetMaximaPairEx=function(r){var l=this.GetMaximaPair(r);return l===null||l.OutIdx===i.ClipperBase.Skip||l.NextInAEL===l.PrevInAEL&&!i.ClipperBase.IsHorizontal(l)?null:l},i.Clipper.prototype.ProcessIntersections=function(r){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(r),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,i.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},i.Clipper.prototype.BuildIntersectList=function(r){if(this.m_ActiveEdges!==null){var l=this.m_ActiveEdges;for(this.m_SortedEdges=l;l!==null;)l.PrevInSEL=l.PrevInAEL,l.NextInSEL=l.NextInAEL,l.Curr.X=i.Clipper.TopX(l,r),l=l.NextInAEL;for(var h=!0;h&&this.m_SortedEdges!==null;){for(h=!1,l=this.m_SortedEdges;l.NextInSEL!==null;){var d=l.NextInSEL,y=new i.IntPoint0;if(l.Curr.X>d.Curr.X){this.IntersectPoint(l,d,y),y.Y<r&&(y=new i.IntPoint2(i.Clipper.TopX(l,r),r));var w=new i.IntersectNode;w.Edge1=l,w.Edge2=d,w.Pt.X=y.X,w.Pt.Y=y.Y,i.use_xyz&&(w.Pt.Z=y.Z),this.m_IntersectList.push(w),this.SwapPositionsInSEL(l,d),h=!0}else l=d}if(l.PrevInSEL!==null)l.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},i.Clipper.prototype.EdgesAdjacent=function(r){return r.Edge1.NextInSEL===r.Edge2||r.Edge1.PrevInSEL===r.Edge2},i.Clipper.IntersectNodeSort=function(r,l){return l.Pt.Y-r.Pt.Y},i.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var r=this.m_IntersectList.length,l=0;l<r;l++){if(!this.EdgesAdjacent(this.m_IntersectList[l])){for(var h=l+1;h<r&&!this.EdgesAdjacent(this.m_IntersectList[h]);)h++;if(h===r)return!1;var d=this.m_IntersectList[l];this.m_IntersectList[l]=this.m_IntersectList[h],this.m_IntersectList[h]=d}this.SwapPositionsInSEL(this.m_IntersectList[l].Edge1,this.m_IntersectList[l].Edge2)}return!0},i.Clipper.prototype.ProcessIntersectList=function(){for(var r=0,l=this.m_IntersectList.length;r<l;r++){var h=this.m_IntersectList[r];this.IntersectEdges(h.Edge1,h.Edge2,h.Pt),this.SwapPositionsInAEL(h.Edge1,h.Edge2)}this.m_IntersectList.length=0};var zt=function(r){return r<0?Math.ceil(r-.5):Math.round(r)},be=function(r){return r<0?Math.ceil(r-.5):Math.floor(r+.5)},Ne=function(r){return r<0?-Math.round(Math.abs(r)):Math.round(r)},Ce=function(r){return r<0?(r-=.5,r<-2147483648?Math.ceil(r):r|0):(r+=.5,r>2147483647?Math.floor(r):r|0)};s.msie?i.Clipper.Round=zt:s.chromium?i.Clipper.Round=Ne:s.safari?i.Clipper.Round=Ce:i.Clipper.Round=be,i.Clipper.TopX=function(r,l){return l===r.Top.Y?r.Top.X:r.Bot.X+i.Clipper.Round(r.Dx*(l-r.Bot.Y))},i.Clipper.prototype.IntersectPoint=function(r,l,h){h.X=0,h.Y=0;var d,y;if(r.Dx===l.Dx){h.Y=r.Curr.Y,h.X=i.Clipper.TopX(r,h.Y);return}if(r.Delta.X===0)h.X=r.Bot.X,i.ClipperBase.IsHorizontal(l)?h.Y=l.Bot.Y:(y=l.Bot.Y-l.Bot.X/l.Dx,h.Y=i.Clipper.Round(h.X/l.Dx+y));else if(l.Delta.X===0)h.X=l.Bot.X,i.ClipperBase.IsHorizontal(r)?h.Y=r.Bot.Y:(d=r.Bot.Y-r.Bot.X/r.Dx,h.Y=i.Clipper.Round(h.X/r.Dx+d));else{d=r.Bot.X-r.Bot.Y*r.Dx,y=l.Bot.X-l.Bot.Y*l.Dx;var w=(y-d)/(r.Dx-l.Dx);h.Y=i.Clipper.Round(w),Math.abs(r.Dx)<Math.abs(l.Dx)?h.X=i.Clipper.Round(r.Dx*w+d):h.X=i.Clipper.Round(l.Dx*w+y)}if(h.Y<r.Top.Y||h.Y<l.Top.Y){if(r.Top.Y>l.Top.Y)return h.Y=r.Top.Y,h.X=i.Clipper.TopX(l,r.Top.Y),h.X<r.Top.X;h.Y=l.Top.Y,Math.abs(r.Dx)<Math.abs(l.Dx)?h.X=i.Clipper.TopX(r,h.Y):h.X=i.Clipper.TopX(l,h.Y)}h.Y>r.Curr.Y&&(h.Y=r.Curr.Y,Math.abs(r.Dx)>Math.abs(l.Dx)?h.X=i.Clipper.TopX(l,h.Y):h.X=i.Clipper.TopX(r,h.Y))},i.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(r){for(var l=this.m_ActiveEdges;l!==null;){var h=this.IsMaxima(l,r);if(h){var d=this.GetMaximaPairEx(l);h=d===null||!i.ClipperBase.IsHorizontal(d)}if(h){this.StrictlySimple&&this.InsertMaxima(l.Top.X);var y=l.PrevInAEL;this.DoMaxima(l),y===null?l=this.m_ActiveEdges:l=y.NextInAEL}else{if(this.IsIntermediate(l,r)&&i.ClipperBase.IsHorizontal(l.NextInLML)?(l=this.UpdateEdgeIntoAEL(l),l.OutIdx>=0&&this.AddOutPt(l,l.Bot),this.AddEdgeToSEL(l)):(l.Curr.X=i.Clipper.TopX(l,r),l.Curr.Y=r),i.use_xyz&&(l.Top.Y===r?l.Curr.Z=l.Top.Z:l.Bot.Y===r?l.Curr.Z=l.Bot.Z:l.Curr.Z=0),this.StrictlySimple){var y=l.PrevInAEL;if(l.OutIdx>=0&&l.WindDelta!==0&&y!==null&&y.OutIdx>=0&&y.Curr.X===l.Curr.X&&y.WindDelta!==0){var w=new i.IntPoint1(l.Curr);i.use_xyz&&this.SetZ(w,y,l);var L=this.AddOutPt(y,w),z=this.AddOutPt(l,w);this.AddJoin(L,z,w)}}l=l.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,l=this.m_ActiveEdges;l!==null;){if(this.IsIntermediate(l,r)){var L=null;l.OutIdx>=0&&(L=this.AddOutPt(l,l.Top)),l=this.UpdateEdgeIntoAEL(l);var y=l.PrevInAEL,V=l.NextInAEL;if(y!==null&&y.Curr.X===l.Bot.X&&y.Curr.Y===l.Bot.Y&&L!==null&&y.OutIdx>=0&&y.Curr.Y===y.Top.Y&&i.ClipperBase.SlopesEqual5(l.Curr,l.Top,y.Curr,y.Top,this.m_UseFullRange)&&l.WindDelta!==0&&y.WindDelta!==0){var z=this.AddOutPt(ePrev2,l.Bot);this.AddJoin(L,z,l.Top)}else if(V!==null&&V.Curr.X===l.Bot.X&&V.Curr.Y===l.Bot.Y&&L!==null&&V.OutIdx>=0&&V.Curr.Y===V.Top.Y&&i.ClipperBase.SlopesEqual5(l.Curr,l.Top,V.Curr,V.Top,this.m_UseFullRange)&&l.WindDelta!==0&&V.WindDelta!==0){var z=this.AddOutPt(V,l.Bot);this.AddJoin(L,z,l.Top)}}l=l.NextInAEL}},i.Clipper.prototype.DoMaxima=function(r){var l=this.GetMaximaPairEx(r);if(l===null){r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r);return}for(var h=r.NextInAEL;h!==null&&h!==l;)this.IntersectEdges(r,h,r.Top),this.SwapPositionsInAEL(r,h),h=r.NextInAEL;r.OutIdx===-1&&l.OutIdx===-1?(this.DeleteFromAEL(r),this.DeleteFromAEL(l)):r.OutIdx>=0&&l.OutIdx>=0?(r.OutIdx>=0&&this.AddLocalMaxPoly(r,l,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(l)):i.use_lines&&r.WindDelta===0?(r.OutIdx>=0&&(this.AddOutPt(r,r.Top),r.OutIdx=i.ClipperBase.Unassigned),this.DeleteFromAEL(r),l.OutIdx>=0&&(this.AddOutPt(l,r.Top),l.OutIdx=i.ClipperBase.Unassigned),this.DeleteFromAEL(l)):i.Error("DoMaxima error")},i.Clipper.ReversePaths=function(r){for(var l=0,h=r.length;l<h;l++)r[l].reverse()},i.Clipper.Orientation=function(r){return i.Clipper.Area(r)>=0},i.Clipper.prototype.PointCount=function(r){if(r===null)return 0;var l=0,h=r;do l++,h=h.Next;while(h!==r);return l},i.Clipper.prototype.BuildResult=function(r){i.Clear(r);for(var l=0,h=this.m_PolyOuts.length;l<h;l++){var d=this.m_PolyOuts[l];if(d.Pts!==null){var y=d.Pts.Prev,w=this.PointCount(y);if(!(w<2)){for(var L=new Array(w),z=0;z<w;z++)L[z]=y.Pt,y=y.Prev;r.push(L)}}}},i.Clipper.prototype.BuildResult2=function(r){r.Clear();for(var l=0,h=this.m_PolyOuts.length;l<h;l++){var d=this.m_PolyOuts[l],y=this.PointCount(d.Pts);if(!(d.IsOpen&&y<2||!d.IsOpen&&y<3)){this.FixHoleLinkage(d);var w=new i.PolyNode;r.m_AllPolys.push(w),d.PolyNode=w,w.m_polygon.length=y;for(var L=d.Pts.Prev,z=0;z<y;z++)w.m_polygon[z]=L.Pt,L=L.Prev}}for(var l=0,h=this.m_PolyOuts.length;l<h;l++){var d=this.m_PolyOuts[l];d.PolyNode!==null&&(d.IsOpen?(d.PolyNode.IsOpen=!0,r.AddChild(d.PolyNode)):d.FirstLeft!==null&&d.FirstLeft.PolyNode!==null?d.FirstLeft.PolyNode.AddChild(d.PolyNode):r.AddChild(d.PolyNode))}},i.Clipper.prototype.FixupOutPolyline=function(r){for(var l=r.Pts,h=l.Prev;l!==h;)if(l=l.Next,i.IntPoint.op_Equality(l.Pt,l.Prev.Pt)){l===h&&(h=l.Prev);var d=l.Prev;d.Next=l.Next,l.Next.Prev=d,l=d}l===l.Prev&&(r.Pts=null)},i.Clipper.prototype.FixupOutPolygon=function(r){var l=null;r.BottomPt=null;for(var h=r.Pts,d=this.PreserveCollinear||this.StrictlySimple;;){if(h.Prev===h||h.Prev===h.Next){r.Pts=null;return}if(i.IntPoint.op_Equality(h.Pt,h.Next.Pt)||i.IntPoint.op_Equality(h.Pt,h.Prev.Pt)||i.ClipperBase.SlopesEqual4(h.Prev.Pt,h.Pt,h.Next.Pt,this.m_UseFullRange)&&(!d||!this.Pt2IsBetweenPt1AndPt3(h.Prev.Pt,h.Pt,h.Next.Pt)))l=null,h.Prev.Next=h.Next,h.Next.Prev=h.Prev,h=h.Prev;else{if(h===l)break;l===null&&(l=h),h=h.Next}}r.Pts=h},i.Clipper.prototype.DupOutPt=function(r,l){var h=new i.OutPt;return h.Pt.X=r.Pt.X,h.Pt.Y=r.Pt.Y,i.use_xyz&&(h.Pt.Z=r.Pt.Z),h.Idx=r.Idx,l?(h.Next=r.Next,h.Prev=r,r.Next.Prev=h,r.Next=h):(h.Prev=r.Prev,h.Next=r,r.Prev.Next=h,r.Prev=h),h},i.Clipper.prototype.GetOverlap=function(r,l,h,d,y){return r<l?h<d?(y.Left=Math.max(r,h),y.Right=Math.min(l,d)):(y.Left=Math.max(r,d),y.Right=Math.min(l,h)):h<d?(y.Left=Math.max(l,h),y.Right=Math.min(r,d)):(y.Left=Math.max(l,d),y.Right=Math.min(r,h)),y.Left<y.Right},i.Clipper.prototype.JoinHorz=function(r,l,h,d,y,w){var L=r.Pt.X>l.Pt.X?i.Direction.dRightToLeft:i.Direction.dLeftToRight,z=h.Pt.X>d.Pt.X?i.Direction.dRightToLeft:i.Direction.dLeftToRight;if(L===z)return!1;if(L===i.Direction.dLeftToRight){for(;r.Next.Pt.X<=y.X&&r.Next.Pt.X>=r.Pt.X&&r.Next.Pt.Y===y.Y;)r=r.Next;w&&r.Pt.X!==y.X&&(r=r.Next),l=this.DupOutPt(r,!w),i.IntPoint.op_Inequality(l.Pt,y)&&(r=l,r.Pt.X=y.X,r.Pt.Y=y.Y,i.use_xyz&&(r.Pt.Z=y.Z),l=this.DupOutPt(r,!w))}else{for(;r.Next.Pt.X>=y.X&&r.Next.Pt.X<=r.Pt.X&&r.Next.Pt.Y===y.Y;)r=r.Next;!w&&r.Pt.X!==y.X&&(r=r.Next),l=this.DupOutPt(r,w),i.IntPoint.op_Inequality(l.Pt,y)&&(r=l,r.Pt.X=y.X,r.Pt.Y=y.Y,i.use_xyz&&(r.Pt.Z=y.Z),l=this.DupOutPt(r,w))}if(z===i.Direction.dLeftToRight){for(;h.Next.Pt.X<=y.X&&h.Next.Pt.X>=h.Pt.X&&h.Next.Pt.Y===y.Y;)h=h.Next;w&&h.Pt.X!==y.X&&(h=h.Next),d=this.DupOutPt(h,!w),i.IntPoint.op_Inequality(d.Pt,y)&&(h=d,h.Pt.X=y.X,h.Pt.Y=y.Y,i.use_xyz&&(h.Pt.Z=y.Z),d=this.DupOutPt(h,!w))}else{for(;h.Next.Pt.X>=y.X&&h.Next.Pt.X<=h.Pt.X&&h.Next.Pt.Y===y.Y;)h=h.Next;!w&&h.Pt.X!==y.X&&(h=h.Next),d=this.DupOutPt(h,w),i.IntPoint.op_Inequality(d.Pt,y)&&(h=d,h.Pt.X=y.X,h.Pt.Y=y.Y,i.use_xyz&&(h.Pt.Z=y.Z),d=this.DupOutPt(h,w))}return L===i.Direction.dLeftToRight===w?(r.Prev=h,h.Next=r,l.Next=d,d.Prev=l):(r.Next=h,h.Prev=r,l.Prev=d,d.Next=l),!0},i.Clipper.prototype.JoinPoints=function(r,l,h){var d=r.OutPt1,y=new i.OutPt,w=r.OutPt2,L=new i.OutPt,z=r.OutPt1.Pt.Y===r.OffPt.Y;if(z&&i.IntPoint.op_Equality(r.OffPt,r.OutPt1.Pt)&&i.IntPoint.op_Equality(r.OffPt,r.OutPt2.Pt)){if(l!==h)return!1;for(y=r.OutPt1.Next;y!==d&&i.IntPoint.op_Equality(y.Pt,r.OffPt);)y=y.Next;var V=y.Pt.Y>r.OffPt.Y;for(L=r.OutPt2.Next;L!==w&&i.IntPoint.op_Equality(L.Pt,r.OffPt);)L=L.Next;var $=L.Pt.Y>r.OffPt.Y;return V===$?!1:V?(y=this.DupOutPt(d,!1),L=this.DupOutPt(w,!0),d.Prev=w,w.Next=d,y.Next=L,L.Prev=y,r.OutPt1=d,r.OutPt2=y,!0):(y=this.DupOutPt(d,!0),L=this.DupOutPt(w,!1),d.Next=w,w.Prev=d,y.Prev=L,L.Next=y,r.OutPt1=d,r.OutPt2=y,!0)}else if(z){for(y=d;d.Prev.Pt.Y===d.Pt.Y&&d.Prev!==y&&d.Prev!==w;)d=d.Prev;for(;y.Next.Pt.Y===y.Pt.Y&&y.Next!==d&&y.Next!==w;)y=y.Next;if(y.Next===d||y.Next===w)return!1;for(L=w;w.Prev.Pt.Y===w.Pt.Y&&w.Prev!==L&&w.Prev!==y;)w=w.Prev;for(;L.Next.Pt.Y===L.Pt.Y&&L.Next!==w&&L.Next!==d;)L=L.Next;if(L.Next===w||L.Next===d)return!1;var ht={Left:null,Right:null};if(!this.GetOverlap(d.Pt.X,y.Pt.X,w.Pt.X,L.Pt.X,ht))return!1;var ct=ht.Left,gt=ht.Right,Wt=new i.IntPoint0,oe;return d.Pt.X>=ct&&d.Pt.X<=gt?(Wt.X=d.Pt.X,Wt.Y=d.Pt.Y,i.use_xyz&&(Wt.Z=d.Pt.Z),oe=d.Pt.X>y.Pt.X):w.Pt.X>=ct&&w.Pt.X<=gt?(Wt.X=w.Pt.X,Wt.Y=w.Pt.Y,i.use_xyz&&(Wt.Z=w.Pt.Z),oe=w.Pt.X>L.Pt.X):y.Pt.X>=ct&&y.Pt.X<=gt?(Wt.X=y.Pt.X,Wt.Y=y.Pt.Y,i.use_xyz&&(Wt.Z=y.Pt.Z),oe=y.Pt.X>d.Pt.X):(Wt.X=L.Pt.X,Wt.Y=L.Pt.Y,i.use_xyz&&(Wt.Z=L.Pt.Z),oe=L.Pt.X>w.Pt.X),r.OutPt1=d,r.OutPt2=w,this.JoinHorz(d,y,w,L,Wt,oe)}else{for(y=d.Next;i.IntPoint.op_Equality(y.Pt,d.Pt)&&y!==d;)y=y.Next;var fe=y.Pt.Y>d.Pt.Y||!i.ClipperBase.SlopesEqual4(d.Pt,y.Pt,r.OffPt,this.m_UseFullRange);if(fe){for(y=d.Prev;i.IntPoint.op_Equality(y.Pt,d.Pt)&&y!==d;)y=y.Prev;if(y.Pt.Y>d.Pt.Y||!i.ClipperBase.SlopesEqual4(d.Pt,y.Pt,r.OffPt,this.m_UseFullRange))return!1}for(L=w.Next;i.IntPoint.op_Equality(L.Pt,w.Pt)&&L!==w;)L=L.Next;var Pe=L.Pt.Y>w.Pt.Y||!i.ClipperBase.SlopesEqual4(w.Pt,L.Pt,r.OffPt,this.m_UseFullRange);if(Pe){for(L=w.Prev;i.IntPoint.op_Equality(L.Pt,w.Pt)&&L!==w;)L=L.Prev;if(L.Pt.Y>w.Pt.Y||!i.ClipperBase.SlopesEqual4(w.Pt,L.Pt,r.OffPt,this.m_UseFullRange))return!1}return y===d||L===w||y===L||l===h&&fe===Pe?!1:fe?(y=this.DupOutPt(d,!1),L=this.DupOutPt(w,!0),d.Prev=w,w.Next=d,y.Next=L,L.Prev=y,r.OutPt1=d,r.OutPt2=y,!0):(y=this.DupOutPt(d,!0),L=this.DupOutPt(w,!1),d.Next=w,w.Prev=d,y.Prev=L,L.Next=y,r.OutPt1=d,r.OutPt2=y,!0)}},i.Clipper.GetBounds=function(r){for(var l=0,h=r.length;l<h&&r[l].length===0;)l++;if(l===h)return new i.IntRect(0,0,0,0);var d=new i.IntRect;for(d.left=r[l][0].X,d.right=d.left,d.top=r[l][0].Y,d.bottom=d.top;l<h;l++)for(var y=0,w=r[l].length;y<w;y++)r[l][y].X<d.left?d.left=r[l][y].X:r[l][y].X>d.right&&(d.right=r[l][y].X),r[l][y].Y<d.top?d.top=r[l][y].Y:r[l][y].Y>d.bottom&&(d.bottom=r[l][y].Y);return d},i.Clipper.prototype.GetBounds2=function(r){var l=r,h=new i.IntRect;for(h.left=r.Pt.X,h.right=r.Pt.X,h.top=r.Pt.Y,h.bottom=r.Pt.Y,r=r.Next;r!==l;)r.Pt.X<h.left&&(h.left=r.Pt.X),r.Pt.X>h.right&&(h.right=r.Pt.X),r.Pt.Y<h.top&&(h.top=r.Pt.Y),r.Pt.Y>h.bottom&&(h.bottom=r.Pt.Y),r=r.Next;return h},i.Clipper.PointInPolygon=function(r,l){var h=0,d=l.length;if(d<3)return 0;for(var y=l[0],w=1;w<=d;++w){var L=w===d?l[0]:l[w];if(L.Y===r.Y&&(L.X===r.X||y.Y===r.Y&&L.X>r.X==y.X<r.X))return-1;if(y.Y<r.Y!=L.Y<r.Y){if(y.X>=r.X)if(L.X>r.X)h=1-h;else{var z=(y.X-r.X)*(L.Y-r.Y)-(L.X-r.X)*(y.Y-r.Y);if(z===0)return-1;z>0==L.Y>y.Y&&(h=1-h)}else if(L.X>r.X){var z=(y.X-r.X)*(L.Y-r.Y)-(L.X-r.X)*(y.Y-r.Y);if(z===0)return-1;z>0==L.Y>y.Y&&(h=1-h)}}y=L}return h},i.Clipper.prototype.PointInPolygon=function(r,l){var h=0,d=l,y=r.X,w=r.Y,L=l.Pt.X,z=l.Pt.Y;do{l=l.Next;var V=l.Pt.X,$=l.Pt.Y;if($===w&&(V===y||z===w&&V>y==L<y))return-1;if(z<w!=$<w){if(L>=y)if(V>y)h=1-h;else{var ht=(L-y)*($-w)-(V-y)*(z-w);if(ht===0)return-1;ht>0==$>z&&(h=1-h)}else if(V>y){var ht=(L-y)*($-w)-(V-y)*(z-w);if(ht===0)return-1;ht>0==$>z&&(h=1-h)}}L=V,z=$}while(d!==l);return h},i.Clipper.prototype.Poly2ContainsPoly1=function(r,l){var h=r;do{var d=this.PointInPolygon(h.Pt,l);if(d>=0)return d>0;h=h.Next}while(h!==r);return!0},i.Clipper.prototype.FixupFirstLefts1=function(r,l){for(var h,d,y=0,w=this.m_PolyOuts.length;y<w;y++)h=this.m_PolyOuts[y],d=i.Clipper.ParseFirstLeft(h.FirstLeft),h.Pts!==null&&d===r&&this.Poly2ContainsPoly1(h.Pts,l.Pts)&&(h.FirstLeft=l)},i.Clipper.prototype.FixupFirstLefts2=function(r,l){for(var h=l.FirstLeft,d,y,w=0,L=this.m_PolyOuts.length;w<L;w++)d=this.m_PolyOuts[w],!(d.Pts===null||d===l||d===r)&&(y=i.Clipper.ParseFirstLeft(d.FirstLeft),!(y!==h&&y!==r&&y!==l)&&(this.Poly2ContainsPoly1(d.Pts,r.Pts)?d.FirstLeft=r:this.Poly2ContainsPoly1(d.Pts,l.Pts)?d.FirstLeft=l:(d.FirstLeft===r||d.FirstLeft===l)&&(d.FirstLeft=h)))},i.Clipper.prototype.FixupFirstLefts3=function(r,l){for(var h,d,y=0,w=this.m_PolyOuts.length;y<w;y++)h=this.m_PolyOuts[y],d=i.Clipper.ParseFirstLeft(h.FirstLeft),h.Pts!==null&&d===r&&(h.FirstLeft=l)},i.Clipper.ParseFirstLeft=function(r){for(;r!==null&&r.Pts===null;)r=r.FirstLeft;return r},i.Clipper.prototype.JoinCommonEdges=function(){for(var r=0,l=this.m_Joins.length;r<l;r++){var h=this.m_Joins[r],d=this.GetOutRec(h.OutPt1.Idx),y=this.GetOutRec(h.OutPt2.Idx);if(!(d.Pts===null||y.Pts===null)&&!(d.IsOpen||y.IsOpen)){var w;d===y?w=d:this.OutRec1RightOfOutRec2(d,y)?w=y:this.OutRec1RightOfOutRec2(y,d)?w=d:w=this.GetLowermostRec(d,y),this.JoinPoints(h,d,y)&&(d===y?(d.Pts=h.OutPt1,d.BottomPt=null,y=this.CreateOutRec(),y.Pts=h.OutPt2,this.UpdateOutPtIdxs(y),this.Poly2ContainsPoly1(y.Pts,d.Pts)?(y.IsHole=!d.IsHole,y.FirstLeft=d,this.m_UsingPolyTree&&this.FixupFirstLefts2(y,d),(y.IsHole^this.ReverseSolution)==this.Area$1(y)>0&&this.ReversePolyPtLinks(y.Pts)):this.Poly2ContainsPoly1(d.Pts,y.Pts)?(y.IsHole=d.IsHole,d.IsHole=!y.IsHole,y.FirstLeft=d.FirstLeft,d.FirstLeft=y,this.m_UsingPolyTree&&this.FixupFirstLefts2(d,y),(d.IsHole^this.ReverseSolution)==this.Area$1(d)>0&&this.ReversePolyPtLinks(d.Pts)):(y.IsHole=d.IsHole,y.FirstLeft=d.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(d,y))):(y.Pts=null,y.BottomPt=null,y.Idx=d.Idx,d.IsHole=w.IsHole,w===y&&(d.FirstLeft=y.FirstLeft),y.FirstLeft=d,this.m_UsingPolyTree&&this.FixupFirstLefts3(y,d)))}}},i.Clipper.prototype.UpdateOutPtIdxs=function(r){var l=r.Pts;do l.Idx=r.Idx,l=l.Prev;while(l!==r.Pts)},i.Clipper.prototype.DoSimplePolygons=function(){for(var r=0;r<this.m_PolyOuts.length;){var l=this.m_PolyOuts[r++],h=l.Pts;if(!(h===null||l.IsOpen))do{for(var d=h.Next;d!==l.Pts;){if(i.IntPoint.op_Equality(h.Pt,d.Pt)&&d.Next!==h&&d.Prev!==h){var y=h.Prev,w=d.Prev;h.Prev=w,w.Next=h,d.Prev=y,y.Next=d,l.Pts=h;var L=this.CreateOutRec();L.Pts=d,this.UpdateOutPtIdxs(L),this.Poly2ContainsPoly1(L.Pts,l.Pts)?(L.IsHole=!l.IsHole,L.FirstLeft=l,this.m_UsingPolyTree&&this.FixupFirstLefts2(L,l)):this.Poly2ContainsPoly1(l.Pts,L.Pts)?(L.IsHole=l.IsHole,l.IsHole=!L.IsHole,L.FirstLeft=l.FirstLeft,l.FirstLeft=L,this.m_UsingPolyTree&&this.FixupFirstLefts2(l,L)):(L.IsHole=l.IsHole,L.FirstLeft=l.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(l,L)),d=h}d=d.Next}h=h.Next}while(h!==l.Pts)}},i.Clipper.Area=function(r){if(!Array.isArray(r))return 0;var l=r.length;if(l<3)return 0;for(var h=0,d=0,y=l-1;d<l;++d)h+=(r[y].X+r[d].X)*(r[y].Y-r[d].Y),y=d;return-h*.5},i.Clipper.prototype.Area=function(r){var l=r;if(r===null)return 0;var h=0;do h=h+(r.Prev.Pt.X+r.Pt.X)*(r.Prev.Pt.Y-r.Pt.Y),r=r.Next;while(r!==l);return h*.5},i.Clipper.prototype.Area$1=function(r){return this.Area(r.Pts)},i.Clipper.SimplifyPolygon=function(r,l){var h=new Array,d=new i.Clipper(0);return d.StrictlySimple=!0,d.AddPath(r,i.PolyType.ptSubject,!0),d.Execute(i.ClipType.ctUnion,h,l,l),h},i.Clipper.SimplifyPolygons=function(r,l){typeof l>"u"&&(l=i.PolyFillType.pftEvenOdd);var h=new Array,d=new i.Clipper(0);return d.StrictlySimple=!0,d.AddPaths(r,i.PolyType.ptSubject,!0),d.Execute(i.ClipType.ctUnion,h,l,l),h},i.Clipper.DistanceSqrd=function(r,l){var h=r.X-l.X,d=r.Y-l.Y;return h*h+d*d},i.Clipper.DistanceFromLineSqrd=function(r,l,h){var d=l.Y-h.Y,y=h.X-l.X,w=d*l.X+y*l.Y;return w=d*r.X+y*r.Y-w,w*w/(d*d+y*y)},i.Clipper.SlopesNearCollinear=function(r,l,h,d){return Math.abs(r.X-l.X)>Math.abs(r.Y-l.Y)?r.X>l.X==r.X<h.X?i.Clipper.DistanceFromLineSqrd(r,l,h)<d:l.X>r.X==l.X<h.X?i.Clipper.DistanceFromLineSqrd(l,r,h)<d:i.Clipper.DistanceFromLineSqrd(h,r,l)<d:r.Y>l.Y==r.Y<h.Y?i.Clipper.DistanceFromLineSqrd(r,l,h)<d:l.Y>r.Y==l.Y<h.Y?i.Clipper.DistanceFromLineSqrd(l,r,h)<d:i.Clipper.DistanceFromLineSqrd(h,r,l)<d},i.Clipper.PointsAreClose=function(r,l,h){var d=r.X-l.X,y=r.Y-l.Y;return d*d+y*y<=h},i.Clipper.ExcludeOp=function(r){var l=r.Prev;return l.Next=r.Next,r.Next.Prev=l,l.Idx=0,l},i.Clipper.CleanPolygon=function(r,l){typeof l>"u"&&(l=1.415);var h=r.length;if(h===0)return new Array;for(var d=new Array(h),y=0;y<h;++y)d[y]=new i.OutPt;for(var y=0;y<h;++y)d[y].Pt=r[y],d[y].Next=d[(y+1)%h],d[y].Next.Prev=d[y],d[y].Idx=0;for(var w=l*l,L=d[0];L.Idx===0&&L.Next!==L.Prev;)i.Clipper.PointsAreClose(L.Pt,L.Prev.Pt,w)?(L=i.Clipper.ExcludeOp(L),h--):i.Clipper.PointsAreClose(L.Prev.Pt,L.Next.Pt,w)?(i.Clipper.ExcludeOp(L.Next),L=i.Clipper.ExcludeOp(L),h-=2):i.Clipper.SlopesNearCollinear(L.Prev.Pt,L.Pt,L.Next.Pt,w)?(L=i.Clipper.ExcludeOp(L),h--):(L.Idx=1,L=L.Next);h<3&&(h=0);for(var z=new Array(h),y=0;y<h;++y)z[y]=new i.IntPoint1(L.Pt),L=L.Next;return d=null,z},i.Clipper.CleanPolygons=function(r,l){for(var h=new Array(r.length),d=0,y=r.length;d<y;d++)h[d]=i.Clipper.CleanPolygon(r[d],l);return h},i.Clipper.Minkowski=function(r,l,h,d){var y=d?1:0,w=r.length,L=l.length,z=new Array;if(h)for(var V=0;V<L;V++){for(var $=new Array(w),ht=0,ct=r.length,gt=r[ht];ht<ct;ht++,gt=r[ht])$[ht]=new i.IntPoint2(l[V].X+gt.X,l[V].Y+gt.Y);z.push($)}else for(var V=0;V<L;V++){for(var $=new Array(w),ht=0,ct=r.length,gt=r[ht];ht<ct;ht++,gt=r[ht])$[ht]=new i.IntPoint2(l[V].X-gt.X,l[V].Y-gt.Y);z.push($)}for(var Wt=new Array,V=0;V<L-1+y;V++)for(var ht=0;ht<w;ht++){var oe=new Array;oe.push(z[V%L][ht%w]),oe.push(z[(V+1)%L][ht%w]),oe.push(z[(V+1)%L][(ht+1)%w]),oe.push(z[V%L][(ht+1)%w]),i.Clipper.Orientation(oe)||oe.reverse(),Wt.push(oe)}return Wt},i.Clipper.MinkowskiSum=function(r,l,h){if(l[0]instanceof Array){for(var y=l,L=new i.Paths,w=new i.Clipper,z=0;z<y.length;++z){var V=i.Clipper.Minkowski(r,y[z],!0,h);if(w.AddPaths(V,i.PolyType.ptSubject,!0),h){var d=i.Clipper.TranslatePath(y[z],r[0]);w.AddPath(d,i.PolyType.ptClip,!0)}}return w.Execute(i.ClipType.ctUnion,L,i.PolyFillType.pftNonZero,i.PolyFillType.pftNonZero),L}else{var d=l,y=i.Clipper.Minkowski(r,d,!0,h),w=new i.Clipper;return w.AddPaths(y,i.PolyType.ptSubject,!0),w.Execute(i.ClipType.ctUnion,y,i.PolyFillType.pftNonZero,i.PolyFillType.pftNonZero),y}},i.Clipper.TranslatePath=function(r,l){for(var h=new i.Path,d=0;d<r.length;d++)h.push(new i.IntPoint2(r[d].X+l.X,r[d].Y+l.Y));return h},i.Clipper.MinkowskiDiff=function(r,l){var h=i.Clipper.Minkowski(r,l,!1,!0),d=new i.Clipper;return d.AddPaths(h,i.PolyType.ptSubject,!0),d.Execute(i.ClipType.ctUnion,h,i.PolyFillType.pftNonZero,i.PolyFillType.pftNonZero),h},i.Clipper.PolyTreeToPaths=function(r){var l=new Array;return i.Clipper.AddPolyNodeToPaths(r,i.Clipper.NodeType.ntAny,l),l},i.Clipper.AddPolyNodeToPaths=function(r,l,h){var d=!0;switch(l){case i.Clipper.NodeType.ntOpen:return;case i.Clipper.NodeType.ntClosed:d=!r.IsOpen;break;default:break}r.m_polygon.length>0&&d&&h.push(r.m_polygon);for(var y=0,w=r.Childs(),L=w.length,z=w[y];y<L;y++,z=w[y])i.Clipper.AddPolyNodeToPaths(z,l,h)},i.Clipper.OpenPathsFromPolyTree=function(r){for(var l=new i.Paths,h=0,d=r.ChildCount();h<d;h++)r.Childs()[h].IsOpen&&l.push(r.Childs()[h].m_polygon);return l},i.Clipper.ClosedPathsFromPolyTree=function(r){var l=new i.Paths;return i.Clipper.AddPolyNodeToPaths(r,i.Clipper.NodeType.ntClosed,l),l},ue(i.Clipper,i.ClipperBase),i.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},i.ClipperOffset=function(r,l){typeof r>"u"&&(r=2),typeof l>"u"&&(l=i.ClipperOffset.def_arc_tolerance),this.m_destPolys=new i.Paths,this.m_srcPoly=new i.Path,this.m_destPoly=new i.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new i.IntPoint0,this.m_polyNodes=new i.PolyNode,this.MiterLimit=r,this.ArcTolerance=l,this.m_lowest.X=-1},i.ClipperOffset.two_pi=6.28318530717959,i.ClipperOffset.def_arc_tolerance=.25,i.ClipperOffset.prototype.Clear=function(){i.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},i.ClipperOffset.Round=i.Clipper.Round,i.ClipperOffset.prototype.AddPath=function(r,l,h){var d=r.length-1;if(!(d<0)){var y=new i.PolyNode;if(y.m_jointype=l,y.m_endtype=h,h===i.EndType.etClosedLine||h===i.EndType.etClosedPolygon)for(;d>0&&i.IntPoint.op_Equality(r[0],r[d]);)d--;y.m_polygon.push(r[0]);for(var w=0,L=0,z=1;z<=d;z++)i.IntPoint.op_Inequality(y.m_polygon[w],r[z])&&(w++,y.m_polygon.push(r[z]),(r[z].Y>y.m_polygon[L].Y||r[z].Y===y.m_polygon[L].Y&&r[z].X<y.m_polygon[L].X)&&(L=w));if(!(h===i.EndType.etClosedPolygon&&w<2)&&(this.m_polyNodes.AddChild(y),h===i.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new i.IntPoint2(this.m_polyNodes.ChildCount()-1,L);else{var V=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(y.m_polygon[L].Y>V.Y||y.m_polygon[L].Y===V.Y&&y.m_polygon[L].X<V.X)&&(this.m_lowest=new i.IntPoint2(this.m_polyNodes.ChildCount()-1,L))}}},i.ClipperOffset.prototype.AddPaths=function(r,l,h){for(var d=0,y=r.length;d<y;d++)this.AddPath(r[d],l,h)},i.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!i.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var r=0;r<this.m_polyNodes.ChildCount();r++){var l=this.m_polyNodes.Childs()[r];(l.m_endtype===i.EndType.etClosedPolygon||l.m_endtype===i.EndType.etClosedLine&&i.Clipper.Orientation(l.m_polygon))&&l.m_polygon.reverse()}else for(var r=0;r<this.m_polyNodes.ChildCount();r++){var l=this.m_polyNodes.Childs()[r];l.m_endtype===i.EndType.etClosedLine&&!i.Clipper.Orientation(l.m_polygon)&&l.m_polygon.reverse()}},i.ClipperOffset.GetUnitNormal=function(r,l){var h=l.X-r.X,d=l.Y-r.Y;if(h===0&&d===0)return new i.DoublePoint2(0,0);var y=1/Math.sqrt(h*h+d*d);return h*=y,d*=y,new i.DoublePoint2(d,-h)},i.ClipperOffset.prototype.DoOffset=function(r){if(this.m_destPolys=new Array,this.m_delta=r,i.ClipperBase.near_zero(r)){for(var l=0;l<this.m_polyNodes.ChildCount();l++){var h=this.m_polyNodes.Childs()[l];h.m_endtype===i.EndType.etClosedPolygon&&this.m_destPolys.push(h.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var d;this.ArcTolerance<=0?d=i.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(r)*i.ClipperOffset.def_arc_tolerance?d=Math.abs(r)*i.ClipperOffset.def_arc_tolerance:d=this.ArcTolerance;var y=3.14159265358979/Math.acos(1-d/Math.abs(r));this.m_sin=Math.sin(i.ClipperOffset.two_pi/y),this.m_cos=Math.cos(i.ClipperOffset.two_pi/y),this.m_StepsPerRad=y/i.ClipperOffset.two_pi,r<0&&(this.m_sin=-this.m_sin);for(var l=0;l<this.m_polyNodes.ChildCount();l++){var h=this.m_polyNodes.Childs()[l];this.m_srcPoly=h.m_polygon;var w=this.m_srcPoly.length;if(!(w===0||r<=0&&(w<3||h.m_endtype!==i.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,w===1){if(h.m_jointype===i.JoinType.jtRound)for(var L=1,z=0,V=1;V<=y;V++){this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[0].X+L*r),i.ClipperOffset.Round(this.m_srcPoly[0].Y+z*r)));var $=L;L=L*this.m_cos-this.m_sin*z,z=$*this.m_sin+z*this.m_cos}else for(var L=-1,z=-1,V=0;V<4;++V)this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[0].X+L*r),i.ClipperOffset.Round(this.m_srcPoly[0].Y+z*r))),L<0?L=1:z<0?z=1:L=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var V=0;V<w-1;V++)this.m_normals.push(i.ClipperOffset.GetUnitNormal(this.m_srcPoly[V],this.m_srcPoly[V+1]));if(h.m_endtype===i.EndType.etClosedLine||h.m_endtype===i.EndType.etClosedPolygon?this.m_normals.push(i.ClipperOffset.GetUnitNormal(this.m_srcPoly[w-1],this.m_srcPoly[0])):this.m_normals.push(new i.DoublePoint1(this.m_normals[w-2])),h.m_endtype===i.EndType.etClosedPolygon){for(var ht=w-1,V=0;V<w;V++)ht=this.OffsetPoint(V,ht,h.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(h.m_endtype===i.EndType.etClosedLine){for(var ht=w-1,V=0;V<w;V++)ht=this.OffsetPoint(V,ht,h.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var ct=this.m_normals[w-1],V=w-1;V>0;V--)this.m_normals[V]=new i.DoublePoint2(-this.m_normals[V-1].X,-this.m_normals[V-1].Y);this.m_normals[0]=new i.DoublePoint2(-ct.X,-ct.Y),ht=0;for(var V=w-1;V>=0;V--)ht=this.OffsetPoint(V,ht,h.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var ht=0,V=1;V<w-1;++V)ht=this.OffsetPoint(V,ht,h.m_jointype);var gt;if(h.m_endtype===i.EndType.etOpenButt){var V=w-1;gt=new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[V].X+this.m_normals[V].X*r),i.ClipperOffset.Round(this.m_srcPoly[V].Y+this.m_normals[V].Y*r)),this.m_destPoly.push(gt),gt=new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[V].X-this.m_normals[V].X*r),i.ClipperOffset.Round(this.m_srcPoly[V].Y-this.m_normals[V].Y*r)),this.m_destPoly.push(gt)}else{var V=w-1;ht=w-2,this.m_sinA=0,this.m_normals[V]=new i.DoublePoint2(-this.m_normals[V].X,-this.m_normals[V].Y),h.m_endtype===i.EndType.etOpenSquare?this.DoSquare(V,ht):this.DoRound(V,ht)}for(var V=w-1;V>0;V--)this.m_normals[V]=new i.DoublePoint2(-this.m_normals[V-1].X,-this.m_normals[V-1].Y);this.m_normals[0]=new i.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),ht=w-1;for(var V=ht-1;V>0;--V)ht=this.OffsetPoint(V,ht,h.m_jointype);h.m_endtype===i.EndType.etOpenButt?(gt=new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*r),i.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*r)),this.m_destPoly.push(gt),gt=new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*r),i.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*r)),this.m_destPoly.push(gt)):(ht=1,this.m_sinA=0,h.m_endtype===i.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},i.ClipperOffset.prototype.Execute=function(){var r=arguments,l=r[0]instanceof i.PolyTree;if(l){var h=r[0],d=r[1];h.Clear(),this.FixOrientations(),this.DoOffset(d);var y=new i.Clipper(0);if(y.AddPaths(this.m_destPolys,i.PolyType.ptSubject,!0),d>0)y.Execute(i.ClipType.ctUnion,h,i.PolyFillType.pftPositive,i.PolyFillType.pftPositive);else{var w=i.Clipper.GetBounds(this.m_destPolys),L=new i.Path;if(L.push(new i.IntPoint2(w.left-10,w.bottom+10)),L.push(new i.IntPoint2(w.right+10,w.bottom+10)),L.push(new i.IntPoint2(w.right+10,w.top-10)),L.push(new i.IntPoint2(w.left-10,w.top-10)),y.AddPath(L,i.PolyType.ptSubject,!0),y.ReverseSolution=!0,y.Execute(i.ClipType.ctUnion,h,i.PolyFillType.pftNegative,i.PolyFillType.pftNegative),h.ChildCount()===1&&h.Childs()[0].ChildCount()>0){var z=h.Childs()[0];h.Childs()[0]=z.Childs()[0],h.Childs()[0].m_Parent=h;for(var V=1;V<z.ChildCount();V++)h.AddChild(z.Childs()[V])}else h.Clear()}}else{var h=r[0],d=r[1];i.Clear(h),this.FixOrientations(),this.DoOffset(d);var y=new i.Clipper(0);if(y.AddPaths(this.m_destPolys,i.PolyType.ptSubject,!0),d>0)y.Execute(i.ClipType.ctUnion,h,i.PolyFillType.pftPositive,i.PolyFillType.pftPositive);else{var w=i.Clipper.GetBounds(this.m_destPolys),L=new i.Path;L.push(new i.IntPoint2(w.left-10,w.bottom+10)),L.push(new i.IntPoint2(w.right+10,w.bottom+10)),L.push(new i.IntPoint2(w.right+10,w.top-10)),L.push(new i.IntPoint2(w.left-10,w.top-10)),y.AddPath(L,i.PolyType.ptSubject,!0),y.ReverseSolution=!0,y.Execute(i.ClipType.ctUnion,h,i.PolyFillType.pftNegative,i.PolyFillType.pftNegative),h.length>0&&h.splice(0,1)}}},i.ClipperOffset.prototype.OffsetPoint=function(r,l,h){if(this.m_sinA=this.m_normals[l].X*this.m_normals[r].Y-this.m_normals[r].X*this.m_normals[l].Y,Math.abs(this.m_sinA*this.m_delta)<1){var d=this.m_normals[l].X*this.m_normals[r].X+this.m_normals[r].Y*this.m_normals[l].Y;if(d>0)return this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[l].X*this.m_delta),i.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[l].Y*this.m_delta))),l}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[l].X*this.m_delta),i.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[l].Y*this.m_delta))),this.m_destPoly.push(new i.IntPoint1(this.m_srcPoly[r])),this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),i.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)));else switch(h){case i.JoinType.jtMiter:{var y=1+(this.m_normals[r].X*this.m_normals[l].X+this.m_normals[r].Y*this.m_normals[l].Y);y>=this.m_miterLim?this.DoMiter(r,l,y):this.DoSquare(r,l);break}case i.JoinType.jtSquare:this.DoSquare(r,l);break;case i.JoinType.jtRound:this.DoRound(r,l);break}return l=r,l},i.ClipperOffset.prototype.DoSquare=function(r,l){var h=Math.tan(Math.atan2(this.m_sinA,this.m_normals[l].X*this.m_normals[r].X+this.m_normals[l].Y*this.m_normals[r].Y)/4);this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[l].X-this.m_normals[l].Y*h)),i.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[l].Y+this.m_normals[l].X*h)))),this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[r].X+this.m_normals[r].Y*h)),i.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[r].Y-this.m_normals[r].X*h))))},i.ClipperOffset.prototype.DoMiter=function(r,l,h){var d=this.m_delta/h;this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[r].X+(this.m_normals[l].X+this.m_normals[r].X)*d),i.ClipperOffset.Round(this.m_srcPoly[r].Y+(this.m_normals[l].Y+this.m_normals[r].Y)*d)))},i.ClipperOffset.prototype.DoRound=function(r,l){for(var h=Math.atan2(this.m_sinA,this.m_normals[l].X*this.m_normals[r].X+this.m_normals[l].Y*this.m_normals[r].Y),d=Math.max(i.Cast_Int32(i.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(h))),1),y=this.m_normals[l].X,w=this.m_normals[l].Y,L,z=0;z<d;++z)this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[r].X+y*this.m_delta),i.ClipperOffset.Round(this.m_srcPoly[r].Y+w*this.m_delta))),L=y,y=y*this.m_cos-this.m_sin*w,w=L*this.m_sin+w*this.m_cos;this.m_destPoly.push(new i.IntPoint2(i.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),i.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)))},i.Error=function(r){try{throw new Error(r)}catch(l){alert(l.message)}},i.JS={},i.JS.AreaOfPolygon=function(r,l){return l||(l=1),i.Clipper.Area(r)/(l*l)},i.JS.AreaOfPolygons=function(r,l){l||(l=1);for(var h=0,d=0;d<r.length;d++)h+=i.Clipper.Area(r[d]);return h/(l*l)},i.JS.BoundsOfPath=function(r,l){return i.JS.BoundsOfPaths([r],l)},i.JS.BoundsOfPaths=function(r,l){l||(l=1);var h=i.Clipper.GetBounds(r);return h.left/=l,h.bottom/=l,h.right/=l,h.top/=l,h},i.JS.Clean=function(d,l){if(!(d instanceof Array))return[];var h=d[0]instanceof Array,d=i.JS.Clone(d);if(typeof l!="number"||l===null)return i.Error("Delta is not a number in Clean()."),d;if(d.length===0||d.length===1&&d[0].length===0||l<0)return d;h||(d=[d]);for(var y=d.length,w,L,z,V,$,ht,ct,gt=[],Wt=0;Wt<y;Wt++)if(L=d[Wt],w=L.length,w!==0){if(w<3){z=L,gt.push(z);continue}for(z=L,V=l*l,$=L[0],ht=1,ct=1;ct<w;ct++)(L[ct].X-$.X)*(L[ct].X-$.X)+(L[ct].Y-$.Y)*(L[ct].Y-$.Y)<=V||(z[ht]=L[ct],$=L[ct],ht++);$=L[ht-1],(L[0].X-$.X)*(L[0].X-$.X)+(L[0].Y-$.Y)*(L[0].Y-$.Y)<=V&&ht--,ht<w&&z.splice(ht,w-ht),z.length&&gt.push(z)}return!h&&gt.length?gt=gt[0]:!h&&gt.length===0?gt=[]:h&&gt.length===0&&(gt=[[]]),gt},i.JS.Clone=function(r){if(!(r instanceof Array))return[];if(r.length===0)return[];if(r.length===1&&r[0].length===0)return[[]];var l=r[0]instanceof Array;l||(r=[r]);var h=r.length,d,y,w,L,z=new Array(h);for(y=0;y<h;y++){for(d=r[y].length,L=new Array(d),w=0;w<d;w++)L[w]={X:r[y][w].X,Y:r[y][w].Y};z[y]=L}return l||(z=z[0]),z},i.JS.Lighten=function(r,l){if(!(r instanceof Array))return[];if(typeof l!="number"||l===null)return i.Error("Tolerance is not a number in Lighten()."),i.JS.Clone(r);if(r.length===0||r.length===1&&r[0].length===0||l<0)return i.JS.Clone(r);var h=r[0]instanceof Array;h||(r=[r]);var d,y,w,L,z,V,$,ht,ct,gt,Wt,oe,fe,Pe,ui,zi,as,kd=r.length,zd=l*l,ls=[];for(d=0;d<kd;d++)if(w=r[d],V=w.length,V!==0){for(L=0;L<1e6;L++){for(z=[],V=w.length,w[V-1].X!==w[0].X||w[V-1].Y!==w[0].Y?(oe=1,w.push({X:w[0].X,Y:w[0].Y}),V=w.length):oe=0,Wt=[],y=0;y<V-2;y++)$=w[y],ct=w[y+1],ht=w[y+2],zi=$.X,as=$.Y,fe=ht.X-zi,Pe=ht.Y-as,(fe!==0||Pe!==0)&&(ui=((ct.X-zi)*fe+(ct.Y-as)*Pe)/(fe*fe+Pe*Pe),ui>1?(zi=ht.X,as=ht.Y):ui>0&&(zi+=fe*ui,as+=Pe*ui)),fe=ct.X-zi,Pe=ct.Y-as,gt=fe*fe+Pe*Pe,gt<=zd&&(Wt[y+1]=1,y++);for(z.push({X:w[0].X,Y:w[0].Y}),y=1;y<V-1;y++)Wt[y]||z.push({X:w[y].X,Y:w[y].Y});if(z.push({X:w[V-1].X,Y:w[V-1].Y}),oe&&w.pop(),Wt.length)w=z;else break}V=z.length,z[V-1].X===z[0].X&&z[V-1].Y===z[0].Y&&z.pop(),z.length>2&&ls.push(z)}return h||(ls=ls[0]),typeof ls>"u"&&(ls=[]),ls},i.JS.PerimeterOfPath=function(r,l,h){if(typeof r>"u")return 0;var d=Math.sqrt,y=0,w,L,z=0,V=0,$=0,ht=0,ct=r.length;if(ct<2)return 0;for(l&&(r[ct]=r[0],ct++);--ct;)w=r[ct],z=w.X,V=w.Y,L=r[ct-1],$=L.X,ht=L.Y,y+=d((z-$)*(z-$)+(V-ht)*(V-ht));return l&&r.pop(),y/h},i.JS.PerimeterOfPaths=function(r,l,h){h||(h=1);for(var d=0,y=0;y<r.length;y++)d+=i.JS.PerimeterOfPath(r[y],l,h);return d},i.JS.ScaleDownPath=function(r,l){var h,d;for(l||(l=1),h=r.length;h--;)d=r[h],d.X=d.X/l,d.Y=d.Y/l},i.JS.ScaleDownPaths=function(r,l){var h,d,y;for(l||(l=1),h=r.length;h--;)for(d=r[h].length;d--;)y=r[h][d],y.X=y.X/l,y.Y=y.Y/l},i.JS.ScaleUpPath=function(r,l){var h,d,y=Math.round;for(l||(l=1),h=r.length;h--;)d=r[h],d.X=y(d.X*l),d.Y=y(d.Y*l)},i.JS.ScaleUpPaths=function(r,l){var h,d,y,w=Math.round;for(l||(l=1),h=r.length;h--;)for(d=r[h].length;d--;)y=r[h][d],y.X=w(y.X*l),y.Y=w(y.Y*l)},i.ExPolygons=function(){return[]},i.ExPolygon=function(){this.outer=null,this.holes=null},i.JS.AddOuterPolyNodeToExPolygons=function(r,l){var h=new i.ExPolygon;h.outer=r.Contour();var d=r.Childs(),y=d.length;h.holes=new Array(y);var w,L,z,V,$,ht;for(z=0;z<y;z++)for(w=d[z],h.holes[z]=w.Contour(),V=0,$=w.Childs(),ht=$.length;V<ht;V++)L=$[V],i.JS.AddOuterPolyNodeToExPolygons(L,l);l.push(h)},i.JS.ExPolygonsToPaths=function(r){var l,h,d,y,w=new i.Paths;for(l=0,d=r.length;l<d;l++)for(w.push(r[l].outer),h=0,y=r[l].holes.length;h<y;h++)w.push(r[l].holes[h]);return w},i.JS.PolyTreeToExPolygons=function(r){var l=new i.ExPolygons,h,d,y,w;for(d=0,y=r.Childs(),w=y.length;d<w;d++)h=y[d],i.JS.AddOuterPolyNodeToExPolygons(h,l);return l}})()});var Ra="186",In={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Rn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nu=0,kc=1,Fu=2;var Yr=1,Ou=2,zs=3,Ln=0,qe=1,pi=2,Yi=0,Vs=1,zc=2,Vc=3,Gc=4,Bu=5;var jn=100,Uu=101,ku=102,zu=103,Vu=104,Gu=200,Hu=201,Xu=202,Wu=203,Hc=204,Xc=205,Yu=206,qu=207,$u=208,Zu=209,Ju=210,Ku=211,ju=212,Qu=213,tf=214,Zo=0,Jo=1,Ko=2,Es=3,jo=4,Qo=5,ta=6,ea=7,Wc=0,ef=1,nf=2,Oi=0,Yc=1,qc=2,$c=3,Zc=4,Jc=5,Kc=6,jc=7;var Qc=300,Dn=301,Qn=302,La=303,Da=304,qr=306,Yn=1e3,Gi=1001,ia=1002,Oe=1003,sf=1004;var $r=1005;var Xe=1006,Na=1007;var Nn=1008;var mi=1009,th=1010,eh=1011,Gs=1012,Fa=1013,Bi=1014,Ui=1015,ki=1016,Oa=1017,Ba=1018,Hs=1020,ih=35902,nh=35899,sh=1021,rh=1022,Ci=1023,Wi=1026,Fn=1027,Zr=1028,Ua=1029,On=1030,ka=1031;var za=1033,Jr=33776,Kr=33777,jr=33778,Qr=33779,Va=35840,Ga=35841,Ha=35842,Xa=35843,Wa=36196,Ya=37492,qa=37496,$a=37488,Za=37489,to=37490,Ja=37491,Ka=37808,ja=37809,Qa=37810,tl=37811,el=37812,il=37813,nl=37814,sl=37815,rl=37816,ol=37817,al=37818,ll=37819,cl=37820,hl=37821,ul=36492,fl=36494,dl=36495,pl=36283,ml=36284,eo=36285,gl=36286;var dr=2300,na=2301,qo=2302,Ec=2303,Ac=2400,Cc=2401,Pc=2402;var rf=3200;var _l=0,of=1,fn="",Ge="srgb",pr="srgb-linear",mr="linear",Me="srgb";var $o=7680;var af=519,lf=512,cf=513,hf=514,xl=515,uf=516,ff=517,yl=518,df=519,oh=35044;var ah="300 es",Di=2e3,As=2001;function Zd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pf(){let i=gr("canvas");return i.style.display="block",i}var tu={},Cs=null;function _r(...i){let t="THREE."+i.shift();Cs?Cs("log",t,...i):console.log(t,...i)}function mf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qt(...i){i=mf(i);let t="THREE."+i.shift();if(Cs)Cs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ie(...i){i=mf(i);let t="THREE."+i.shift();if(Cs)Cs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Wn(...i){let t=i.join(" ");t in tu||(tu[t]=!0,Qt(...i))}function gf(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var _f={[Zo]:Jo,[Ko]:ta,[jo]:ea,[Es]:Qo,[Jo]:Zo,[ta]:Ko,[ea]:jo,[Qo]:Es},Ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=1234567,ws=Math.PI/180,Ps=180/Math.PI;function Xi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function lh(i,t){return(i%t+t)%t}function Kd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function jd(i,t,e){return i!==t?(e-i)/(t-i):0}function hr(i,t,e){return(1-e)*i+e*t}function Qd(i,t,e,n){return hr(i,t,1-Math.exp(-e*n))}function tp(i,t=1){return t-Math.abs(lh(i,t*2)-t)}function ep(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ip(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function np(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sp(i,t){return i+Math.random()*(t-i)}function rp(i){return i*(.5-Math.random())}function op(i){i!==void 0&&(eu=i);let t=eu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ap(i){return i*ws}function lp(i){return i*Ps}function cp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function hp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function up(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fp(i,t,e,n,s){let o=Math.cos,a=Math.sin,c=o(e/2),u=a(e/2),f=o((t+n)/2),p=a((t+n)/2),_=o((t-n)/2),m=a((t-n)/2),g=o((n-t)/2),b=a((n-t)/2);switch(s){case"XYX":i.set(c*p,u*_,u*m,c*f);break;case"YZY":i.set(u*m,c*p,u*_,c*f);break;case"ZXZ":i.set(u*_,u*m,c*p,c*f);break;case"XZX":i.set(c*p,u*b,u*g,c*f);break;case"YXY":i.set(u*g,c*p,u*b,c*f);break;case"ZYZ":i.set(u*b,u*g,c*p,c*f);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Li(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var io={DEG2RAD:ws,RAD2DEG:Ps,generateUUID:Xi,clamp:re,euclideanModulo:lh,mapLinear:Kd,inverseLerp:jd,lerp:hr,damp:Qd,pingpong:tp,smoothstep:ep,smootherstep:ip,randInt:np,randFloat:sp,randFloatSpread:rp,seededRandom:op,degToRad:ap,radToDeg:lp,isPowerOfTwo:cp,ceilPowerOfTwo:hp,floorPowerOfTwo:up,setQuaternionFromProperEuler:fp,normalize:Te,denormalize:Li},ph=class ph{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*s+t.x,this.y=o*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ph.prototype.isVector2=!0;var _t=ph,bi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,a,c){let u=n[s+0],f=n[s+1],p=n[s+2],_=n[s+3],m=o[a+0],g=o[a+1],b=o[a+2],S=o[a+3];if(_!==S||u!==m||f!==g||p!==b){let x=u*m+f*g+p*b+_*S;x<0&&(m=-m,g=-g,b=-b,S=-S,x=-x);let v=1-c;if(x<.9995){let E=Math.acos(x),C=Math.sin(E);v=Math.sin(v*E)/C,c=Math.sin(c*E)/C,u=u*v+m*c,f=f*v+g*c,p=p*v+b*c,_=_*v+S*c}else{u=u*v+m*c,f=f*v+g*c,p=p*v+b*c,_=_*v+S*c;let E=1/Math.sqrt(u*u+f*f+p*p+_*_);u*=E,f*=E,p*=E,_*=E}}t[e]=u,t[e+1]=f,t[e+2]=p,t[e+3]=_}static multiplyQuaternionsFlat(t,e,n,s,o,a){let c=n[s],u=n[s+1],f=n[s+2],p=n[s+3],_=o[a],m=o[a+1],g=o[a+2],b=o[a+3];return t[e]=c*b+p*_+u*g-f*m,t[e+1]=u*b+p*m+f*_-c*g,t[e+2]=f*b+p*g+c*m-u*_,t[e+3]=p*b-c*_-u*m-f*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,o=t._z,a=t._order,c=Math.cos,u=Math.sin,f=c(n/2),p=c(s/2),_=c(o/2),m=u(n/2),g=u(s/2),b=u(o/2);switch(a){case"XYZ":this._x=m*p*_+f*g*b,this._y=f*g*_-m*p*b,this._z=f*p*b+m*g*_,this._w=f*p*_-m*g*b;break;case"YXZ":this._x=m*p*_+f*g*b,this._y=f*g*_-m*p*b,this._z=f*p*b-m*g*_,this._w=f*p*_+m*g*b;break;case"ZXY":this._x=m*p*_-f*g*b,this._y=f*g*_+m*p*b,this._z=f*p*b+m*g*_,this._w=f*p*_-m*g*b;break;case"ZYX":this._x=m*p*_-f*g*b,this._y=f*g*_+m*p*b,this._z=f*p*b-m*g*_,this._w=f*p*_+m*g*b;break;case"YZX":this._x=m*p*_+f*g*b,this._y=f*g*_+m*p*b,this._z=f*p*b-m*g*_,this._w=f*p*_-m*g*b;break;case"XZY":this._x=m*p*_-f*g*b,this._y=f*g*_-m*p*b,this._z=f*p*b+m*g*_,this._w=f*p*_+m*g*b;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],o=e[8],a=e[1],c=e[5],u=e[9],f=e[2],p=e[6],_=e[10],m=n+c+_;if(m>0){let g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(p-u)*g,this._y=(o-f)*g,this._z=(a-s)*g}else if(n>c&&n>_){let g=2*Math.sqrt(1+n-c-_);this._w=(p-u)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(o+f)/g}else if(c>_){let g=2*Math.sqrt(1+c-n-_);this._w=(o-f)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(u+p)/g}else{let g=2*Math.sqrt(1+_-n-c);this._w=(a-s)/g,this._x=(o+f)/g,this._y=(u+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,o=t._z,a=t._w,c=e._x,u=e._y,f=e._z,p=e._w;return this._x=n*p+a*c+s*f-o*u,this._y=s*p+a*u+o*c-n*f,this._z=o*p+a*f+n*u-s*c,this._w=a*p-n*c-s*u-o*f,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,o=t._z,a=t._w,c=this.dot(t);c<0&&(n=-n,s=-s,o=-o,a=-a,c=-c);let u=1-e;if(c<.9995){let f=Math.acos(c),p=Math.sin(f);u=Math.sin(u*f)/p,e=Math.sin(e*f)/p,this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+o*e,this._w=this._w*u+a*e,this._onChangeCallback()}else this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+o*e,this._w=this._w*u+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},mh=class mh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(iu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,o=t.x,a=t.y,c=t.z,u=t.w,f=2*(a*s-c*n),p=2*(c*e-o*s),_=2*(o*n-a*e);return this.x=e+u*f+a*_-c*p,this.y=n+u*p+c*f-o*_,this.z=s+u*_+o*p-a*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,o=t.z,a=e.x,c=e.y,u=e.z;return this.x=s*u-o*c,this.y=o*a-n*u,this.z=n*c-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tc.copy(this).projectOnVector(t),this.sub(tc)}reflect(t){return this.sub(tc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mh.prototype.isVector3=!0;var k=mh,tc=new k,iu=new bi,gh=class gh{constructor(t,e,n,s,o,a,c,u,f){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,c,u,f)}set(t,e,n,s,o,a,c,u,f){let p=this.elements;return p[0]=t,p[1]=s,p[2]=c,p[3]=e,p[4]=o,p[5]=u,p[6]=n,p[7]=a,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,a=n[0],c=n[3],u=n[6],f=n[1],p=n[4],_=n[7],m=n[2],g=n[5],b=n[8],S=s[0],x=s[3],v=s[6],E=s[1],C=s[4],M=s[7],I=s[2],R=s[5],O=s[8];return o[0]=a*S+c*E+u*I,o[3]=a*x+c*C+u*R,o[6]=a*v+c*M+u*O,o[1]=f*S+p*E+_*I,o[4]=f*x+p*C+_*R,o[7]=f*v+p*M+_*O,o[2]=m*S+g*E+b*I,o[5]=m*x+g*C+b*R,o[8]=m*v+g*M+b*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],c=t[5],u=t[6],f=t[7],p=t[8];return e*a*p-e*c*f-n*o*p+n*c*u+s*o*f-s*a*u}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],c=t[5],u=t[6],f=t[7],p=t[8],_=p*a-c*f,m=c*u-p*o,g=f*o-a*u,b=e*_+n*m+s*g;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/b;return t[0]=_*S,t[1]=(s*f-p*n)*S,t[2]=(c*n-s*a)*S,t[3]=m*S,t[4]=(p*e-s*u)*S,t[5]=(s*o-c*e)*S,t[6]=g*S,t[7]=(n*u-f*e)*S,t[8]=(a*e-n*o)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,a,c){let u=Math.cos(o),f=Math.sin(o);return this.set(n*u,n*f,-n*(u*a+f*c)+a+t,-s*f,s*u,-s*(-f*a+u*c)+c+e,0,0,1),this}scale(t,e){return Wn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ec.makeScale(t,e)),this}rotate(t){return Wn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ec.makeRotation(-t)),this}translate(t,e){return Wn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ec.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};gh.prototype.isMatrix3=!0;var ae=gh,ec=new ae,nu=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dp(){let i={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(s,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===Me&&(s.r=ln(s.r),s.g=ln(s.g),s.b=ln(s.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Me&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fn?mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,a){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Wn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Wn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pr]:{primaries:t,whitePoint:n,transfer:mr,toXYZ:nu,fromXYZ:su,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:nu,fromXYZ:su,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),i}var me=dp();function ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cs,sa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{cs===void 0&&(cs=gr("canvas")),cs.width=t.width,cs.height=t.height;let s=cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=cs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=gr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=ln(o[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ln(e[n]/255)*255):e[n]=ln(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pp=0,Is=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,c=s.length;a<c;a++)s[a].isDataTexture?o.push(ic(s[a].image)):o.push(ic(s[a]))}else o=ic(s);n.url=o}return e||(t.images[this.uuid]=n),n}};function ic(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}var mp=0,nc=new k,ai=class i extends Ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Gi,s=Gi,o=Xe,a=Nn,c=Ci,u=mi,f=i.DEFAULT_ANISOTROPY,p=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Xi(),this.name="",this.source=new Is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=u,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nc).x}get height(){return this.source.getSize(nc).y}get depth(){return this.source.getSize(nc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yn:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yn:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Qc;ai.DEFAULT_ANISOTROPY=1;var _h=class _h{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o,u=t.elements,f=u[0],p=u[4],_=u[8],m=u[1],g=u[5],b=u[9],S=u[2],x=u[6],v=u[10];if(Math.abs(p-m)<.01&&Math.abs(_-S)<.01&&Math.abs(b-x)<.01){if(Math.abs(p+m)<.1&&Math.abs(_+S)<.1&&Math.abs(b+x)<.1&&Math.abs(f+g+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(f+1)/2,M=(g+1)/2,I=(v+1)/2,R=(p+m)/4,O=(_+S)/4,A=(b+x)/4;return C>M&&C>I?C<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(C),s=R/n,o=O/n):M>I?M<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(M),n=R/s,o=A/s):I<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(I),n=O/o,s=A/o),this.set(n,s,o,e),this}let E=Math.sqrt((x-b)*(x-b)+(_-S)*(_-S)+(m-p)*(m-p));return Math.abs(E)<.001&&(E=1),this.x=(x-b)/E,this.y=(_-S)/E,this.z=(m-p)/E,this.w=Math.acos((f+g+v-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_h.prototype.isVector4=!0;var we=_h,ra=class extends Ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},o=new ai(s),a=n.count;for(let c=0;c<a;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Is(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},fi=class extends ra{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xr=class extends ai{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var oa=class extends ai{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ia=class Ia{constructor(t,e,n,s,o,a,c,u,f,p,_,m,g,b,S,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,c,u,f,p,_,m,g,b,S,x)}set(t,e,n,s,o,a,c,u,f,p,_,m,g,b,S,x){let v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=s,v[1]=o,v[5]=a,v[9]=c,v[13]=u,v[2]=f,v[6]=p,v[10]=_,v[14]=m,v[3]=g,v[7]=b,v[11]=S,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ia().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),o=1/hs.setFromMatrixColumn(t,1).length(),a=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,o=t.z,a=Math.cos(n),c=Math.sin(n),u=Math.cos(s),f=Math.sin(s),p=Math.cos(o),_=Math.sin(o);if(t.order==="XYZ"){let m=a*p,g=a*_,b=c*p,S=c*_;e[0]=u*p,e[4]=-u*_,e[8]=f,e[1]=g+b*f,e[5]=m-S*f,e[9]=-c*u,e[2]=S-m*f,e[6]=b+g*f,e[10]=a*u}else if(t.order==="YXZ"){let m=u*p,g=u*_,b=f*p,S=f*_;e[0]=m+S*c,e[4]=b*c-g,e[8]=a*f,e[1]=a*_,e[5]=a*p,e[9]=-c,e[2]=g*c-b,e[6]=S+m*c,e[10]=a*u}else if(t.order==="ZXY"){let m=u*p,g=u*_,b=f*p,S=f*_;e[0]=m-S*c,e[4]=-a*_,e[8]=b+g*c,e[1]=g+b*c,e[5]=a*p,e[9]=S-m*c,e[2]=-a*f,e[6]=c,e[10]=a*u}else if(t.order==="ZYX"){let m=a*p,g=a*_,b=c*p,S=c*_;e[0]=u*p,e[4]=b*f-g,e[8]=m*f+S,e[1]=u*_,e[5]=S*f+m,e[9]=g*f-b,e[2]=-f,e[6]=c*u,e[10]=a*u}else if(t.order==="YZX"){let m=a*u,g=a*f,b=c*u,S=c*f;e[0]=u*p,e[4]=S-m*_,e[8]=b*_+g,e[1]=_,e[5]=a*p,e[9]=-c*p,e[2]=-f*p,e[6]=g*_+b,e[10]=m-S*_}else if(t.order==="XZY"){let m=a*u,g=a*f,b=c*u,S=c*f;e[0]=u*p,e[4]=-_,e[8]=f*p,e[1]=m*_+S,e[5]=a*p,e[9]=g*_-b,e[2]=b*_-g,e[6]=c*p,e[10]=S*_+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gp,t,_p)}lookAt(t,e,n){let s=this.elements;return yi.subVectors(t,e),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),gn.crossVectors(n,yi),gn.lengthSq()===0&&(Math.abs(n.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),gn.crossVectors(n,yi)),gn.normalize(),vo.crossVectors(yi,gn),s[0]=gn.x,s[4]=vo.x,s[8]=yi.x,s[1]=gn.y,s[5]=vo.y,s[9]=yi.y,s[2]=gn.z,s[6]=vo.z,s[10]=yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,a=n[0],c=n[4],u=n[8],f=n[12],p=n[1],_=n[5],m=n[9],g=n[13],b=n[2],S=n[6],x=n[10],v=n[14],E=n[3],C=n[7],M=n[11],I=n[15],R=s[0],O=s[4],A=s[8],D=s[12],U=s[1],N=s[5],G=s[9],H=s[13],B=s[2],W=s[6],K=s[10],J=s[14],at=s[3],tt=s[7],nt=s[11],st=s[15];return o[0]=a*R+c*U+u*B+f*at,o[4]=a*O+c*N+u*W+f*tt,o[8]=a*A+c*G+u*K+f*nt,o[12]=a*D+c*H+u*J+f*st,o[1]=p*R+_*U+m*B+g*at,o[5]=p*O+_*N+m*W+g*tt,o[9]=p*A+_*G+m*K+g*nt,o[13]=p*D+_*H+m*J+g*st,o[2]=b*R+S*U+x*B+v*at,o[6]=b*O+S*N+x*W+v*tt,o[10]=b*A+S*G+x*K+v*nt,o[14]=b*D+S*H+x*J+v*st,o[3]=E*R+C*U+M*B+I*at,o[7]=E*O+C*N+M*W+I*tt,o[11]=E*A+C*G+M*K+I*nt,o[15]=E*D+C*H+M*J+I*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],a=t[1],c=t[5],u=t[9],f=t[13],p=t[2],_=t[6],m=t[10],g=t[14],b=t[3],S=t[7],x=t[11],v=t[15],E=u*g-f*m,C=c*g-f*_,M=c*m-u*_,I=a*g-f*p,R=a*m-u*p,O=a*_-c*p;return e*(S*E-x*C+v*M)-n*(b*E-x*I+v*R)+s*(b*C-S*I+v*O)-o*(b*M-S*R+x*O)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],o=t[1],a=t[5],c=t[9],u=t[2],f=t[6],p=t[10];return e*(a*p-c*f)-n*(o*p-c*u)+s*(o*f-a*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],c=t[5],u=t[6],f=t[7],p=t[8],_=t[9],m=t[10],g=t[11],b=t[12],S=t[13],x=t[14],v=t[15],E=e*c-n*a,C=e*u-s*a,M=e*f-o*a,I=n*u-s*c,R=n*f-o*c,O=s*f-o*u,A=p*S-_*b,D=p*x-m*b,U=p*v-g*b,N=_*x-m*S,G=_*v-g*S,H=m*v-g*x,B=E*H-C*G+M*N+I*U-R*D+O*A;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/B;return t[0]=(c*H-u*G+f*N)*W,t[1]=(s*G-n*H-o*N)*W,t[2]=(S*O-x*R+v*I)*W,t[3]=(m*R-_*O-g*I)*W,t[4]=(u*U-a*H-f*D)*W,t[5]=(e*H-s*U+o*D)*W,t[6]=(x*M-b*O-v*C)*W,t[7]=(p*O-m*M+g*C)*W,t[8]=(a*G-c*U+f*A)*W,t[9]=(n*U-e*G-o*A)*W,t[10]=(b*R-S*M+v*E)*W,t[11]=(_*M-p*R-g*E)*W,t[12]=(c*D-a*N-u*A)*W,t[13]=(e*N-n*D+s*A)*W,t[14]=(S*C-b*I-x*E)*W,t[15]=(p*I-_*C+m*E)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),o=1-n,a=t.x,c=t.y,u=t.z,f=o*a,p=o*c;return this.set(f*a+n,f*c-s*u,f*u+s*c,0,f*c+s*u,p*c+n,p*u-s*a,0,f*u-s*c,p*u+s*a,o*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,a){return this.set(1,n,o,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,o=e._x,a=e._y,c=e._z,u=e._w,f=o+o,p=a+a,_=c+c,m=o*f,g=o*p,b=o*_,S=a*p,x=a*_,v=c*_,E=u*f,C=u*p,M=u*_,I=n.x,R=n.y,O=n.z;return s[0]=(1-(S+v))*I,s[1]=(g+M)*I,s[2]=(b-C)*I,s[3]=0,s[4]=(g-M)*R,s[5]=(1-(m+v))*R,s[6]=(x+E)*R,s[7]=0,s[8]=(b+C)*O,s[9]=(x-E)*O,s[10]=(1-(m+S))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let a=hs.set(s[0],s[1],s[2]).length(),c=hs.set(s[4],s[5],s[6]).length(),u=hs.set(s[8],s[9],s[10]).length();o<0&&(a=-a),Pi.copy(this);let f=1/a,p=1/c,_=1/u;return Pi.elements[0]*=f,Pi.elements[1]*=f,Pi.elements[2]*=f,Pi.elements[4]*=p,Pi.elements[5]*=p,Pi.elements[6]*=p,Pi.elements[8]*=_,Pi.elements[9]*=_,Pi.elements[10]*=_,e.setFromRotationMatrix(Pi),n.x=a,n.y=c,n.z=u,this}makePerspective(t,e,n,s,o,a,c=Di,u=!1){let f=this.elements,p=2*o/(e-t),_=2*o/(n-s),m=(e+t)/(e-t),g=(n+s)/(n-s),b,S;if(u)b=o/(a-o),S=a*o/(a-o);else if(c===Di)b=-(a+o)/(a-o),S=-2*a*o/(a-o);else if(c===As)b=-a/(a-o),S=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=p,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=_,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=b,f[14]=S,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,n,s,o,a,c=Di,u=!1){let f=this.elements,p=2/(e-t),_=2/(n-s),m=-(e+t)/(e-t),g=-(n+s)/(n-s),b,S;if(u)b=1/(a-o),S=a/(a-o);else if(c===Di)b=-2/(a-o),S=-(a+o)/(a-o);else if(c===As)b=-1/(a-o),S=-o/(a-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=p,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=_,f[9]=0,f[13]=g,f[2]=0,f[6]=0,f[10]=b,f[14]=S,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ia.prototype.isMatrix4=!0;var _e=Ia,hs=new k,Pi=new _e,gp=new k(0,0,0),_p=new k(1,1,1),gn=new k,vo=new k,yi=new k,ru=new _e,ou=new bi,bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],u=s[1],f=s[5],p=s[9],_=s[2],m=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-re(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(re(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,g),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-re(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,g),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ou.setFromEuler(this),this.setFromQuaternion(ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var Rs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xp=0,au=new k,us=new bi,en=new _e,bo=new k,rr=new k,yp=new k,vp=new bi,lu=new k(1,0,0),cu=new k(0,1,0),hu=new k(0,0,1),uu={type:"added"},bp={type:"removed"},fs={type:"childadded",child:null},sc={type:"childremoved",child:null},We=class i extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new bn,n=new bi,s=new k(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new ae}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(lu,t)}rotateY(t){return this.rotateOnAxis(cu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return au.copy(t).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lu,t)}translateY(t){return this.translateOnAxis(cu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bo.copy(t):bo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(rr,bo,this.up):en.lookAt(bo,rr,this.up),this.quaternion.setFromRotationMatrix(en),s&&(en.extractRotation(s.matrixWorld),us.setFromRotationMatrix(en),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),fs.child=t,this.dispatchEvent(fs),fs.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bp),sc.child=t,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,vp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*s,o[13]+=n-o[1]*e-o[5]*n-o[9]*s,o[14]+=s-o[2]*e-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let u=c.shapes;if(Array.isArray(u))for(let f=0,p=u.length;f<p;f++){let _=u[f];o(t.shapes,_)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let u=0,f=this.material.length;u<f;u++)c.push(o(t.materials,this.material[u]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let u=this.animations[c];s.animations.push(o(t.animations,u))}}if(e){let c=a(t.geometries),u=a(t.materials),f=a(t.textures),p=a(t.images),_=a(t.shapes),m=a(t.skeletons),g=a(t.animations),b=a(t.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),_.length>0&&(n.shapes=_),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),b.length>0&&(n.nodes=b)}return n.object=s,n;function a(c){let u=[];for(let f in c){let p=c[f];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};We.DEFAULT_UP=new k(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sp={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,a=null,c=this._targetRay,u=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){a=!0;for(let S of t.hand.values()){let x=e.getJointPose(S,n),v=this._getHandJoint(f,S);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}let p=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],m=p.position.distanceTo(_.position),g=.02,b=.005;f.inputState.pinching&&m>g+b?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&m<=g-b&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));c!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Sp)))}return c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),f!==null&&(f.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new oi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},So={h:0,s:0,l:0};function rc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ce=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=lh(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=rc(a,o,t+1/3),this.g=rc(a,o,t),this.b=rc(a,o,t-1/3)}return me.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function n(o){o!==void 0&&parseFloat(o)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,a=s[1],c=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let n=xf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return me.workingToColorSpace(Qe.copy(this),t),Math.round(re(Qe.r*255,0,255))*65536+Math.round(re(Qe.g*255,0,255))*256+Math.round(re(Qe.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,o=Qe.b,a=Math.max(n,s,o),c=Math.min(n,s,o),u,f,p=(c+a)/2;if(c===a)u=0,f=0;else{let _=a-c;switch(f=p<=.5?_/(a+c):_/(2-a-c),a){case n:u=(s-o)/_+(s<o?6:0);break;case s:u=(o-n)/_+2;break;case o:u=(n-s)/_+4;break}u/=6}return t.h=u,t.s=f,t.l=p,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Ge){me.workingToColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_n),this.setHSL(_n.h+t,_n.s+e,_n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_n),t.getHSL(So);let n=hr(_n.h,So.h,e),s=hr(_n.s,So.s,e),o=hr(_n.l,So.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new ce;ce.NAMES=xf;var yr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ce(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vr=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ii=new k,nn=new k,oc=new k,sn=new k,ds=new k,ps=new k,fu=new k,ac=new k,lc=new k,cc=new k,hc=new we,uc=new we,fc=new we,an=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ii.subVectors(t,e),s.cross(Ii);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Ii.subVectors(s,e),nn.subVectors(n,e),oc.subVectors(t,e);let a=Ii.dot(Ii),c=Ii.dot(nn),u=Ii.dot(oc),f=nn.dot(nn),p=nn.dot(oc),_=a*f-c*c;if(_===0)return o.set(0,0,0),null;let m=1/_,g=(f*u-c*p)*m,b=(a*p-c*u)*m;return o.set(1-g-b,b,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(t,e,n,s,o,a,c,u){return this.getBarycoord(t,e,n,s,sn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,sn.x),u.addScaledVector(a,sn.y),u.addScaledVector(c,sn.z),u)}static getInterpolatedAttribute(t,e,n,s,o,a){return hc.setScalar(0),uc.setScalar(0),fc.setScalar(0),hc.fromBufferAttribute(t,e),uc.fromBufferAttribute(t,n),fc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(hc,o.x),a.addScaledVector(uc,o.y),a.addScaledVector(fc,o.z),a}static isFrontFacing(t,e,n,s){return Ii.subVectors(n,e),nn.subVectors(t,e),Ii.cross(nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Ii.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,o=this.c,a,c;ds.subVectors(s,n),ps.subVectors(o,n),ac.subVectors(t,n);let u=ds.dot(ac),f=ps.dot(ac);if(u<=0&&f<=0)return e.copy(n);lc.subVectors(t,s);let p=ds.dot(lc),_=ps.dot(lc);if(p>=0&&_<=p)return e.copy(s);let m=u*_-p*f;if(m<=0&&u>=0&&p<=0)return a=u/(u-p),e.copy(n).addScaledVector(ds,a);cc.subVectors(t,o);let g=ds.dot(cc),b=ps.dot(cc);if(b>=0&&g<=b)return e.copy(o);let S=g*f-u*b;if(S<=0&&f>=0&&b<=0)return c=f/(f-b),e.copy(n).addScaledVector(ps,c);let x=p*b-g*_;if(x<=0&&_-p>=0&&g-b>=0)return fu.subVectors(o,s),c=(_-p)/(_-p+(g-b)),e.copy(s).addScaledVector(fu,c);let v=1/(x+S+m);return a=S*v,c=m*v,e.copy(n).addScaledVector(ds,a).addScaledVector(ps,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Si=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,c=o.count;a<c;a++)t.isMesh===!0?t.getVertexPosition(a,Ri):Ri.fromBufferAttribute(o,a),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}let s=t.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),wo.subVectors(this.max,or),ms.subVectors(t.a,or),gs.subVectors(t.b,or),_s.subVectors(t.c,or),xn.subVectors(gs,ms),yn.subVectors(_s,gs),Vn.subVectors(ms,_s);let e=[0,-xn.z,xn.y,0,-yn.z,yn.y,0,-Vn.z,Vn.y,xn.z,0,-xn.x,yn.z,0,-yn.x,Vn.z,0,-Vn.x,-xn.y,xn.x,0,-yn.y,yn.x,0,-Vn.y,Vn.x,0];return!dc(e,ms,gs,_s,wo)||(e=[1,0,0,0,1,0,0,0,1],!dc(e,ms,gs,_s,wo))?!1:(To.crossVectors(xn,yn),e=[To.x,To.y,To.z],dc(e,ms,gs,_s,wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},rn=[new k,new k,new k,new k,new k,new k,new k,new k],Ri=new k,Mo=new Si,ms=new k,gs=new k,_s=new k,xn=new k,yn=new k,Vn=new k,or=new k,wo=new k,To=new k,Gn=new k;function dc(i,t,e,n,s){for(let o=0,a=i.length-3;o<=a;o+=3){Gn.fromArray(i,o);let c=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),u=t.dot(Gn),f=e.dot(Gn),p=n.dot(Gn);if(Math.max(-Math.max(u,f,p),Math.min(u,f,p))>c)return!1}return!0}var Fe=new k,Eo=new _t,Mp=0,He=class extends Ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oh,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),o=Te(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var br=class extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Sr=class extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}},wp=new Si,ar=new k,pc=new k,Fi=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wp.setFromPoints(t).getCenter(n);let s=0;for(let o=0,a=t.length;o<a;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);let e=ar.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ar,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(pc)),this.expandByPoint(ar.copy(t.center).sub(pc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Tp=0,Ei=new _e,mc=new We,xs=new k,vi=new Si,lr=new Si,Ve=new k,Ie=class i extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zd(t)?Sr:br)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new ae().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,e,n){return Ei.makeTranslation(t,e,n),this.applyMatrix4(Ei),this}scale(t,e,n){return Ei.makeScale(t,e,n),this.applyMatrix4(Ei),this}lookAt(t){return mc.lookAt(t),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,o=t.length;s<o;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let o=e[n];vi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){let c=e[o];lr.setFromBufferAttribute(c),this.morphTargetsRelative?(Ve.addVectors(vi.min,lr.min),vi.expandByPoint(Ve),Ve.addVectors(vi.max,lr.max),vi.expandByPoint(Ve)):(vi.expandByPoint(lr.min),vi.expandByPoint(lr.max))}vi.getCenter(n);let s=0;for(let o=0,a=t.count;o<a;o++)Ve.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let o=0,a=e.length;o<a;o++){let c=e[o],u=this.morphTargetsRelative;for(let f=0,p=c.count;f<p;f++)Ve.fromBufferAttribute(c,f),u&&(xs.fromBufferAttribute(t,f),Ve.add(xs)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,o=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new He(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let c=[],u=[];for(let A=0;A<n.count;A++)c[A]=new k,u[A]=new k;let f=new k,p=new k,_=new k,m=new _t,g=new _t,b=new _t,S=new k,x=new k;function v(A,D,U){f.fromBufferAttribute(n,A),p.fromBufferAttribute(n,D),_.fromBufferAttribute(n,U),m.fromBufferAttribute(o,A),g.fromBufferAttribute(o,D),b.fromBufferAttribute(o,U),p.sub(f),_.sub(f),g.sub(m),b.sub(m);let N=1/(g.x*b.y-b.x*g.y);isFinite(N)&&(S.copy(p).multiplyScalar(b.y).addScaledVector(_,-g.y).multiplyScalar(N),x.copy(_).multiplyScalar(g.x).addScaledVector(p,-b.x).multiplyScalar(N),c[A].add(S),c[D].add(S),c[U].add(S),u[A].add(x),u[D].add(x),u[U].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let A=0,D=E.length;A<D;++A){let U=E[A],N=U.start,G=U.count;for(let H=N,B=N+G;H<B;H+=3)v(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let C=new k,M=new k,I=new k,R=new k;function O(A){I.fromBufferAttribute(s,A),R.copy(I);let D=c[A];C.copy(D),C.sub(I.multiplyScalar(I.dot(D))).normalize(),M.crossVectors(R,D);let N=M.dot(u[A])<0?-1:1;a.setXYZW(A,C.x,C.y,C.z,N)}for(let A=0,D=E.length;A<D;++A){let U=E[A],N=U.start,G=U.count;for(let H=N,B=N+G;H<B;H+=3)O(t.getX(H+0)),O(t.getX(H+1)),O(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);let s=new k,o=new k,a=new k,c=new k,u=new k,f=new k,p=new k,_=new k;if(t)for(let m=0,g=t.count;m<g;m+=3){let b=t.getX(m+0),S=t.getX(m+1),x=t.getX(m+2);s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,S),a.fromBufferAttribute(e,x),p.subVectors(a,o),_.subVectors(s,o),p.cross(_),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,x),c.add(p),u.add(p),f.add(p),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(x,f.x,f.y,f.z)}else for(let m=0,g=e.count;m<g;m+=3)s.fromBufferAttribute(e,m+0),o.fromBufferAttribute(e,m+1),a.fromBufferAttribute(e,m+2),p.subVectors(a,o),_.subVectors(s,o),p.cross(_),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(c,u){let f=c.array,p=c.itemSize,_=c.normalized,m=new f.constructor(u.length*p),g=0,b=0;for(let S=0,x=u.length;S<x;S++){c.isInterleavedBufferAttribute?g=u[S]*c.data.stride+c.offset:g=u[S]*p;for(let v=0;v<p;v++)m[b++]=f[g++]}return new He(m,p,_)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let c in s){let u=s[c],f=t(u,n);e.setAttribute(c,f)}let o=this.morphAttributes;for(let c in o){let u=[],f=o[c];for(let p=0,_=f.length;p<_;p++){let m=f[p],g=t(m,n);u.push(g)}e.morphAttributes[c]=u}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let f in u)u[f]!==void 0&&(t[f]=u[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let u in n){let f=n[u];t.data.attributes[u]=f.toJSON(t.data)}let s={},o=!1;for(let u in this.morphAttributes){let f=this.morphAttributes[u],p=[];for(let _=0,m=f.length;_<m;_++){let g=f[_];p.push(g.toJSON(t.data))}p.length>0&&(s[u]=p,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let f in s){let p=s[f];this.setAttribute(f,p.clone(e))}let o=t.morphAttributes;for(let f in o){let p=[],_=o[f];for(let m=0,g=_.length;m<g;m++)p.push(_[m].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let f=0,p=a.length;f<p;f++){let _=a[f];this.addGroup(_.start,_.count,_.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oh,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},si=new k,Ai=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)si.fromBufferAttribute(this,e),si.applyMatrix4(t),this.setXYZ(e,si.x,si.y,si.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)si.fromBufferAttribute(this,e),si.applyNormalMatrix(t),this.setXYZ(e,si.x,si.y,si.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)si.fromBufferAttribute(this,e),si.transformDirection(t),this.setXYZ(e,si.x,si.y,si.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Li(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Li(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Li(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Li(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),o=Te(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){_r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){_r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gc=new k,Ep=new k,Ap=new ae,ri=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=gc.subVectors(n,e).cross(Ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(gc),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ap.getNormalMatrix(t),s=this.coplanarPoint(gc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Cp=0,cn=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Vs,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Xc,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){let a=[];for(let c in o){let u=o[c];delete u.metadata,a.push(u)}return a}if(e){let o=s(t.textures),a=s(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ce().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ri().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var on=new k,_c=new k,Ao=new k,Co=new k,Sn=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_c.copy(t).add(e).multiplyScalar(.5),Ao.copy(e).sub(t).normalize(),Co.copy(this.origin).sub(_c);let o=t.distanceTo(e)*.5,a=-this.direction.dot(Ao),c=Co.dot(this.direction),u=-Co.dot(Ao),f=Co.lengthSq(),p=Math.abs(1-a*a),_,m,g,b;if(p>0)if(_=a*u-c,m=a*c-u,b=o*p,_>=0)if(m>=-b)if(m<=b){let S=1/p;_*=S,m*=S,g=_*(_+a*m+2*c)+m*(a*_+m+2*u)+f}else m=o,_=Math.max(0,-(a*m+c)),g=-_*_+m*(m+2*u)+f;else m=-o,_=Math.max(0,-(a*m+c)),g=-_*_+m*(m+2*u)+f;else m<=-b?(_=Math.max(0,-(-a*o+c)),m=_>0?-o:Math.min(Math.max(-o,-u),o),g=-_*_+m*(m+2*u)+f):m<=b?(_=0,m=Math.min(Math.max(-o,-u),o),g=m*(m+2*u)+f):(_=Math.max(0,-(a*o+c)),m=_>0?o:Math.min(Math.max(-o,-u),o),g=-_*_+m*(m+2*u)+f);else m=a>0?-o:o,_=Math.max(0,-(a*m+c)),g=-_*_+m*(m+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(_c).addScaledVector(Ao,m),g}intersectSphere(t,e){if(t.radius<0)return null;on.subVectors(t.center,this.origin);let n=on.dot(this.direction),s=on.dot(on)-n*n,o=t.radius*t.radius;if(s>o)return null;let a=Math.sqrt(o-s),c=n-a,u=n+a;return u<0?null:c<0?this.at(u,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,a,c,u,f=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,m=this.origin;return f>=0?(n=(t.min.x-m.x)*f,s=(t.max.x-m.x)*f):(n=(t.max.x-m.x)*f,s=(t.min.x-m.x)*f),p>=0?(o=(t.min.y-m.y)*p,a=(t.max.y-m.y)*p):(o=(t.max.y-m.y)*p,a=(t.min.y-m.y)*p),n>a||o>s||((o>n||isNaN(n))&&(n=o),(a<s||isNaN(s))&&(s=a),_>=0?(c=(t.min.z-m.z)*_,u=(t.max.z-m.z)*_):(c=(t.max.z-m.z)*_,u=(t.min.z-m.z)*_),n>u||c>s)||((c>n||n!==n)&&(n=c),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,s,o){let a=this.origin,c=this.direction,u=c.x,f=c.y,p=c.z,_=t.x-a.x,m=t.y-a.y,g=t.z-a.z,b=e.x-a.x,S=e.y-a.y,x=e.z-a.z,v=n.x-a.x,E=n.y-a.y,C=n.z-a.z,M=Math.abs(u),I=Math.abs(f),R=Math.abs(p),O,A,D,U,N,G,H,B,W,K,J,at;if(M>=I&&M>=R?(D=u,G=_,W=b,at=v,u>=0?(O=f,A=p,U=m,N=g,H=S,B=x,K=E,J=C):(O=p,A=f,U=g,N=m,H=x,B=S,K=C,J=E)):I>=R?(D=f,G=m,W=S,at=E,f>=0?(O=p,A=u,U=g,N=_,H=x,B=b,K=C,J=v):(O=u,A=p,U=_,N=g,H=b,B=x,K=v,J=C)):(D=p,G=g,W=x,at=C,p>=0?(O=u,A=f,U=_,N=m,H=b,B=S,K=v,J=E):(O=f,A=u,U=m,N=_,H=S,B=b,K=E,J=v)),D===0)return null;let tt=O/D,nt=A/D,st=1/D,Tt=U-tt*G,Et=N-nt*G,$t=H-tt*W,ne=B-nt*W,ge=K-tt*at,lt=J-nt*at,dt=ge*ne-lt*$t,Nt=Tt*lt-Et*ge,jt=$t*Et-ne*Tt;if(s){if(dt<0||Nt<0||jt<0)return null}else if((dt<0||Nt<0||jt<0)&&(dt>0||Nt>0||jt>0))return null;let Ft=dt+Nt+jt;if(Ft===0)return null;let te=st*(dt*G+Nt*W+jt*at);return(Ft>0?te<0:te>0)?null:this.at(te/Ft,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class extends cn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},du=new _e,Hn=new Sn,Po=new Fi,pu=new k,Io=new k,Ro=new k,Lo=new k,xc=new k,Do=new k,mu=new k,No=new k,Le=class extends We{constructor(t=new Ie,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){let c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let c=this.morphTargetInfluences;if(o&&c){Do.set(0,0,0);for(let u=0,f=o.length;u<f;u++){let p=c[u],_=o[u];p!==0&&(xc.fromBufferAttribute(_,t),a?Do.addScaledVector(xc,p):Do.addScaledVector(xc.sub(e),p))}e.add(Do)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(o),Hn.copy(t.ray).recast(t.near),!(Po.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(Po,pu)===null||Hn.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(du.copy(o).invert(),Hn.copy(t.ray).applyMatrix4(du),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let s,o=this.geometry,a=this.material,c=o.index,u=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,_=o.attributes.normal,m=o.groups,g=o.drawRange;if(c!==null)if(Array.isArray(a))for(let b=0,S=m.length;b<S;b++){let x=m[b],v=a[x.materialIndex],E=Math.max(x.start,g.start),C=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let M=E,I=C;M<I;M+=3){let R=c.getX(M),O=c.getX(M+1),A=c.getX(M+2);s=Fo(this,v,t,n,f,p,_,R,O,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let b=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let x=b,v=S;x<v;x+=3){let E=c.getX(x),C=c.getX(x+1),M=c.getX(x+2);s=Fo(this,a,t,n,f,p,_,E,C,M),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(a))for(let b=0,S=m.length;b<S;b++){let x=m[b],v=a[x.materialIndex],E=Math.max(x.start,g.start),C=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let M=E,I=C;M<I;M+=3){let R=M,O=M+1,A=M+2;s=Fo(this,v,t,n,f,p,_,R,O,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let b=Math.max(0,g.start),S=Math.min(u.count,g.start+g.count);for(let x=b,v=S;x<v;x+=3){let E=x,C=x+1,M=x+2;s=Fo(this,a,t,n,f,p,_,E,C,M),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function Pp(i,t,e,n,s,o,a,c){let u;if(t.side===qe?u=n.intersectTriangle(a,o,s,!0,c):u=n.intersectTriangle(s,o,a,t.side===Ln,c),u===null)return null;No.copy(c),No.applyMatrix4(i.matrixWorld);let f=e.ray.origin.distanceTo(No);return f<e.near||f>e.far?null:{distance:f,point:No.clone(),object:i}}function Fo(i,t,e,n,s,o,a,c,u,f){i.getVertexPosition(c,Io),i.getVertexPosition(u,Ro),i.getVertexPosition(f,Lo);let p=Pp(i,t,e,n,Io,Ro,Lo,mu);if(p){let _=new k;an.getBarycoord(mu,Io,Ro,Lo,_),s&&(p.uv=an.getInterpolatedAttribute(s,c,u,f,_,new _t)),o&&(p.uv1=an.getInterpolatedAttribute(o,c,u,f,_,new _t)),a&&(p.normal=an.getInterpolatedAttribute(a,c,u,f,_,new k),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));let m={a:c,b:u,c:f,normal:new k,materialIndex:0};an.getNormal(Io,Ro,Lo,m.normal),p.face=m,p.barycoord=_}return p}var Ds=class extends ai{constructor(t=null,e=1,n=1,s,o,a,c,u,f=Oe,p=Oe,_,m){super(null,a,c,u,f,p,s,o,_,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xn=new Fi,Ip=new _t(.5,.5),Oo=new k,Ns=class{constructor(t=new ri,e=new ri,n=new ri,s=new ri,o=new ri,a=new ri){this.planes=[t,e,n,s,o,a]}set(t,e,n,s,o,a){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(s),c[4].copy(o),c[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Di,n=!1){let s=this.planes,o=t.elements,a=o[0],c=o[1],u=o[2],f=o[3],p=o[4],_=o[5],m=o[6],g=o[7],b=o[8],S=o[9],x=o[10],v=o[11],E=o[12],C=o[13],M=o[14],I=o[15];if(s[0].setComponents(f-a,g-p,v-b,I-E).normalize(),s[1].setComponents(f+a,g+p,v+b,I+E).normalize(),s[2].setComponents(f+c,g+_,v+S,I+C).normalize(),s[3].setComponents(f-c,g-_,v-S,I-C).normalize(),n)s[4].setComponents(u,m,x,M).normalize(),s[5].setComponents(f-u,g-m,v-x,I-M).normalize();else if(s[4].setComponents(f-u,g-m,v-x,I-M).normalize(),e===Di)s[5].setComponents(f+u,g+m,v+x,I+M).normalize();else if(e===As)s[5].setComponents(u,m,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){Xn.center.set(0,0,0);let e=Ip.distanceTo(t.center);return Xn.radius=.7071067811865476+e,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Oo.x=s.normal.x>0?t.max.x:t.min.x,Oo.y=s.normal.y>0?t.max.y:t.min.y,Oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qn=class extends cn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gu=new _e,Ic=new Sn,Bo=new Fi,Uo=new k,Fs=class extends We{constructor(t=new Ie,e=new qn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=o,t.ray.intersectsSphere(Bo)===!1)return;gu.copy(s).invert(),Ic.copy(t.ray).applyMatrix4(gu);let c=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,f=n.index,_=n.attributes.position;if(f!==null){let m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let b=m,S=g;b<S;b++){let x=f.getX(b);Uo.fromBufferAttribute(_,x),_u(Uo,x,u,s,t,e,this)}}else{let m=Math.max(0,a.start),g=Math.min(_.count,a.start+a.count);for(let b=m,S=g;b<S;b++)Uo.fromBufferAttribute(_,b),_u(Uo,b,u,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){let c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}};function _u(i,t,e,n,s,o,a){let c=Ic.distanceSqToPoint(i);if(c<e){let u=new k;Ic.closestPointToPoint(i,u),u.applyMatrix4(n);let f=s.ray.origin.distanceTo(u);if(f<s.near||f>s.far)return;o.push({distance:f,distanceToRay:Math.sqrt(c),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var wr=class extends ai{constructor(t=[],e=Dn,n,s,o,a,c,u,f,p){super(t,e,n,s,o,a,c,u,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Mn=class extends ai{constructor(t,e,n,s,o,a,c,u,f){super(t,e,n,s,o,a,c,u,f),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wn=class extends ai{constructor(t,e,n=Bi,s,o,a,c=Oe,u=Oe,f,p=Wi,_=1){if(p!==Wi&&p!==Fn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:_};super(m,s,o,a,c,u,p,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Is(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},aa=class extends wn{constructor(t,e=Bi,n=Dn,s,o,a=Oe,c=Oe,u,f=Wi){let p={width:t,height:t,depth:1},_=[p,p,p,p,p,p];super(t,t,e,n,s,o,a,c,u,f),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Tr=class extends ai{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ye=class i extends Ie{constructor(t=1,e=1,n=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:a};let c=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);let u=[],f=[],p=[],_=[],m=0,g=0;b("z","y","x",-1,-1,n,e,t,a,o,0),b("z","y","x",1,-1,n,e,-t,a,o,1),b("x","z","y",1,1,t,n,e,s,a,2),b("x","z","y",1,-1,t,n,-e,s,a,3),b("x","y","z",1,-1,t,e,n,s,o,4),b("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(u),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(p,3)),this.setAttribute("uv",new xe(_,2));function b(S,x,v,E,C,M,I,R,O,A,D){let U=M/O,N=I/A,G=M/2,H=I/2,B=R/2,W=O+1,K=A+1,J=0,at=0,tt=new k;for(let nt=0;nt<K;nt++){let st=nt*N-H;for(let Tt=0;Tt<W;Tt++){let Et=Tt*U-G;tt[S]=Et*E,tt[x]=st*C,tt[v]=B,f.push(tt.x,tt.y,tt.z),tt[S]=0,tt[x]=0,tt[v]=R>0?1:-1,p.push(tt.x,tt.y,tt.z),_.push(Tt/O),_.push(1-nt/A),J+=1}}for(let nt=0;nt<A;nt++)for(let st=0;st<O;st++){let Tt=m+st+W*nt,Et=m+st+W*(nt+1),$t=m+(st+1)+W*(nt+1),ne=m+(st+1)+W*nt;u.push(Tt,Et,ne),u.push(Et,$t,ne),at+=6}c.addGroup(g,at,D),g+=at,m+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Er=class i extends Ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let o=[],a=[],c=[],u=[],f=new k,p=new _t;a.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let _=0,m=3;_<=e;_++,m+=3){let g=n+_/e*s;f.x=t*Math.cos(g),f.y=t*Math.sin(g),a.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(a[m]/t+1)/2,p.y=(a[m+1]/t+1)/2,u.push(p.x,p.y)}for(let _=1;_<=e;_++)o.push(_,_+1,0);this.setIndex(o),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},hn=class i extends Ie{constructor(t=1,e=1,n=1,s=32,o=1,a=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:c,thetaLength:u};let f=this;s=Math.floor(s),o=Math.floor(o);let p=[],_=[],m=[],g=[],b=0,S=[],x=n/2,v=0;E(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(p),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(m,3)),this.setAttribute("uv",new xe(g,2));function E(){let M=new k,I=new k,R=0,O=(e-t)/n;for(let A=0;A<=o;A++){let D=[],U=A/o,N=U*(e-t)+t;for(let G=0;G<=s;G++){let H=G/s,B=H*u+c,W=Math.sin(B),K=Math.cos(B);I.x=N*W,I.y=-U*n+x,I.z=N*K,_.push(I.x,I.y,I.z),M.set(W,O,K).normalize(),m.push(M.x,M.y,M.z),g.push(H,1-U),D.push(b++)}S.push(D)}for(let A=0;A<s;A++)for(let D=0;D<o;D++){let U=S[D][A],N=S[D+1][A],G=S[D+1][A+1],H=S[D][A+1];(t>0||D!==0)&&(p.push(U,N,H),R+=3),(e>0||D!==o-1)&&(p.push(N,G,H),R+=3)}f.addGroup(v,R,0),v+=R}function C(M){let I=b,R=new _t,O=new k,A=0,D=M===!0?t:e,U=M===!0?1:-1;for(let G=1;G<=s;G++)_.push(0,x*U,0),m.push(0,U,0),g.push(.5,.5),b++;let N=b;for(let G=0;G<=s;G++){let B=G/s*u+c,W=Math.cos(B),K=Math.sin(B);O.x=D*K,O.y=x*U,O.z=D*W,_.push(O.x,O.y,O.z),m.push(0,U,0),R.x=W*.5+.5,R.y=K*.5*U+.5,g.push(R.x,R.y),b++}for(let G=0;G<s;G++){let H=I+G,B=N+G;M===!0?p.push(B,B+1,H):p.push(B+1,B,H),A+=3}f.addGroup(v,A,M===!0?1:2),v+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ko=new k,zo=new k,yc=new k,Vo=new an,Ar=class extends Ie{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),o=Math.cos(ws*e),a=t.getIndex(),c=t.getAttribute("position"),u=a?a.count:c.count,f=[0,0,0],p=["a","b","c"],_=new Array(3),m={},g=[];for(let b=0;b<u;b+=3){a?(f[0]=a.getX(b),f[1]=a.getX(b+1),f[2]=a.getX(b+2)):(f[0]=b,f[1]=b+1,f[2]=b+2);let{a:S,b:x,c:v}=Vo;if(S.fromBufferAttribute(c,f[0]),x.fromBufferAttribute(c,f[1]),v.fromBufferAttribute(c,f[2]),Vo.getNormal(yc),_[0]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,_[1]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,_[2]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let E=0;E<3;E++){let C=(E+1)%3,M=_[E],I=_[C],R=Vo[p[E]],O=Vo[p[C]],A=`${M}_${I}`,D=`${I}_${M}`;D in m&&m[D]?(yc.dot(m[D].normal)<=o&&(g.push(R.x,R.y,R.z),g.push(O.x,O.y,O.z)),m[D]=null):A in m||(m[A]={index0:f[E],index1:f[C],normal:yc.clone()})}}for(let b in m)if(m[b]){let{index0:S,index1:x}=m[b];ko.fromBufferAttribute(c,S),zo.fromBufferAttribute(c,x),g.push(ko.x,ko.y,ko.z),g.push(zo.x,zo.y,zo.z)}this.setAttribute("position",new xe(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,o=n.length,a;e?a=e:a=t*n[o-1];let c=0,u=o-1,f;for(;c<=u;)if(s=Math.floor(c+(u-c)/2),f=n[s]-a,f<0)c=s+1;else if(f>0)u=s-1;else{u=s;break}if(s=u,n[s]===a)return s/(o-1);let p=n[s],m=n[s+1]-p,g=(a-p)/m;return(s+g)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);let a=this.getPoint(s),c=this.getPoint(o),u=e||(a.isVector2?new _t:new k);return u.copy(c).sub(a).normalize(),u}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new k,s=[],o=[],a=[],c=new k,u=new _e;for(let g=0;g<=t;g++){let b=g/t;s[g]=this.getTangentAt(b,new k)}o[0]=new k,a[0]=new k;let f=Number.MAX_VALUE,p=Math.abs(s[0].x),_=Math.abs(s[0].y),m=Math.abs(s[0].z);p<=f&&(f=p,n.set(1,0,0)),_<=f&&(f=_,n.set(0,1,0)),m<=f&&n.set(0,0,1),c.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],c),a[0].crossVectors(s[0],o[0]);for(let g=1;g<=t;g++){if(o[g]=o[g-1].clone(),a[g]=a[g-1].clone(),c.crossVectors(s[g-1],s[g]),c.length()>Number.EPSILON){c.normalize();let b=Math.acos(re(s[g-1].dot(s[g]),-1,1));o[g].applyMatrix4(u.makeRotationAxis(c,b))}a[g].crossVectors(s[g],o[g])}if(e===!0){let g=Math.acos(re(o[0].dot(o[t]),-1,1));g/=t,s[0].dot(c.crossVectors(o[0],o[t]))>0&&(g=-g);for(let b=1;b<=t;b++)o[b].applyMatrix4(u.makeRotationAxis(s[b],g*b)),a[b].crossVectors(s[b],o[b])}return{tangents:s,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Os=class extends Mi{constructor(t=0,e=0,n=1,s=1,o=0,a=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=c,this.aRotation=u}getPoint(t,e=new _t){let n=e,s=Math.PI*2,o=this.aEndAngle-this.aStartAngle,a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(a?o=0:o=s),this.aClockwise===!0&&!a&&(o===s?o=-s:o=o-s);let c=this.aStartAngle+t*o,u=this.aX+this.xRadius*Math.cos(c),f=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){let p=Math.cos(this.aRotation),_=Math.sin(this.aRotation),m=u-this.aX,g=f-this.aY;u=m*p-g*_+this.aX,f=m*_+g*p+this.aY}return n.set(u,f)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},la=class extends Os{constructor(t,e,n,s,o,a){super(t,e,n,n,s,o,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ch(){let i=0,t=0,e=0,n=0;function s(o,a,c,u){i=o,t=c,e=-3*o+3*a-2*c-u,n=2*o-2*a+c+u}return{initCatmullRom:function(o,a,c,u,f){s(a,c,f*(c-o),f*(u-a))},initNonuniformCatmullRom:function(o,a,c,u,f,p,_){let m=(a-o)/f-(c-o)/(f+p)+(c-a)/p,g=(c-a)/p-(u-a)/(p+_)+(u-c)/_;m*=p,g*=p,s(a,c,m,g)},calc:function(o){let a=o*o,c=a*o;return i+t*o+e*a+n*c}}}var xu=new k,yu=new k,vc=new ch,bc=new ch,Sc=new ch,ca=class extends Mi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){let n=e,s=this.points,o=s.length,a=(o-(this.closed?0:1))*t,c=Math.floor(a),u=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/o)+1)*o:u===0&&c===o-1&&(c=o-2,u=1);let f,p;this.closed||c>0?f=s[(c-1)%o]:(yu.subVectors(s[0],s[1]).add(s[0]),f=yu);let _=s[c%o],m=s[(c+1)%o];if(this.closed||c+2<o?p=s[(c+2)%o]:(xu.subVectors(s[o-1],s[o-2]).add(s[o-1]),p=xu),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,b=Math.pow(f.distanceToSquared(_),g),S=Math.pow(_.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(p),g);S<1e-4&&(S=1),b<1e-4&&(b=S),x<1e-4&&(x=S),vc.initNonuniformCatmullRom(f.x,_.x,m.x,p.x,b,S,x),bc.initNonuniformCatmullRom(f.y,_.y,m.y,p.y,b,S,x),Sc.initNonuniformCatmullRom(f.z,_.z,m.z,p.z,b,S,x)}else this.curveType==="catmullrom"&&(vc.initCatmullRom(f.x,_.x,m.x,p.x,this.tension),bc.initCatmullRom(f.y,_.y,m.y,p.y,this.tension),Sc.initCatmullRom(f.z,_.z,m.z,p.z,this.tension));return n.set(vc.calc(u),bc.calc(u),Sc.calc(u)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vu(i,t,e,n,s){let o=(n-t)*.5,a=(s-e)*.5,c=i*i,u=i*c;return(2*e-2*n+o+a)*u+(-3*e+3*n-2*o-a)*c+o*i+e}function Rp(i,t){let e=1-i;return e*e*t}function Lp(i,t){return 2*(1-i)*i*t}function Dp(i,t){return i*i*t}function ur(i,t,e,n){return Rp(i,t)+Lp(i,e)+Dp(i,n)}function Np(i,t){let e=1-i;return e*e*e*t}function Fp(i,t){let e=1-i;return 3*e*e*i*t}function Op(i,t){return 3*(1-i)*i*i*t}function Bp(i,t){return i*i*i*t}function fr(i,t,e,n,s){return Np(i,t)+Fp(i,e)+Op(i,n)+Bp(i,s)}var Cr=class extends Mi{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,o=this.v1,a=this.v2,c=this.v3;return n.set(fr(t,s.x,o.x,a.x,c.x),fr(t,s.y,o.y,a.y,c.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ha=class extends Mi{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){let n=e,s=this.v0,o=this.v1,a=this.v2,c=this.v3;return n.set(fr(t,s.x,o.x,a.x,c.x),fr(t,s.y,o.y,a.y,c.y),fr(t,s.z,o.z,a.z,c.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pr=class extends Mi{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ua=class extends Mi{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ir=class extends Mi{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,o=this.v1,a=this.v2;return n.set(ur(t,s.x,o.x,a.x),ur(t,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fa=class extends Mi{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,s=this.v0,o=this.v1,a=this.v2;return n.set(ur(t,s.x,o.x,a.x),ur(t,s.y,o.y,a.y),ur(t,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends Mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,o=(s.length-1)*t,a=Math.floor(o),c=o-a,u=s[a===0?a:a-1],f=s[a],p=s[a>s.length-2?s.length-1:a+1],_=s[a>s.length-3?s.length-1:a+2];return n.set(vu(c,u.x,f.x,p.x,_.x),vu(c,u.y,f.y,p.y,_.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},Rc=Object.freeze({__proto__:null,ArcCurve:la,CatmullRomCurve3:ca,CubicBezierCurve:Cr,CubicBezierCurve3:ha,EllipseCurve:Os,LineCurve:Pr,LineCurve3:ua,QuadraticBezierCurve:Ir,QuadraticBezierCurve3:fa,SplineCurve:Rr}),da=class extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),o=0;for(;o<s.length;){if(s[o]>=n){let a=s[o]-n,c=this.curves[o],u=c.getLength(),f=u===0?0:1-a/u;return c.getPointAt(f,e)}o++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,o=this.curves;s<o.length;s++){let a=o[s],c=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,u=a.getPoints(c);for(let f=0;f<u.length;f++){let p=u[f];n&&n.equals(p)||(e.push(p),n=p)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Rc[s.type]().fromJSON(s))}return this}},$n=class extends da{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Pr(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let o=new Ir(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,a){let c=new Cr(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(o,a));return this.curves.push(c),this.currentPoint.set(o,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Rr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,a){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(t+c,e+u,n,s,o,a),this}absarc(t,e,n,s,o,a){return this.absellipse(t,e,n,n,s,o,a),this}ellipse(t,e,n,s,o,a,c,u){let f=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(t+f,e+p,n,s,o,a,c,u),this}absellipse(t,e,n,s,o,a,c,u){let f=new Os(t,e,n,s,o,a,c,u);if(this.curves.length>0){let _=f.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(f);let p=f.getPoint(1);return this.currentPoint.copy(p),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},un=class extends $n{constructor(t){super(t),this.uuid=Xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new $n().fromJSON(s))}return this}};function Up(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,o=yf(i,0,s,e,!0),a=[];if(!o||o.next===o.prev)return a;let c,u,f;if(n&&(o=Hp(i,t,o,e)),i.length>80*e){c=i[0],u=i[1];let p=c,_=u;for(let m=e;m<s;m+=e){let g=i[m],b=i[m+1];g<c&&(c=g),b<u&&(u=b),g>p&&(p=g),b>_&&(_=b)}f=Math.max(p-c,_-u),f=f!==0?32767/f:0}return Lr(o,a,e,c,u,f,0),a}function yf(i,t,e,n,s){let o;if(s===tm(i,t,e,n)>0)for(let a=t;a<e;a+=n)o=bu(a/n|0,i[a],i[a+1],o);else for(let a=e-n;a>=t;a-=n)o=bu(a/n|0,i[a],i[a+1],o);return o&&Bs(o,o.next)&&(Nr(o),o=o.next),o}function Zn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Bs(e,e.next)||De(e.prev,e,e.next)===0)){if(Nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Lr(i,t,e,n,s,o,a){if(!i)return;!a&&o&&$p(i,n,s,o);let c=i;for(;i.prev!==i.next;){let u=i.prev,f=i.next;if(o?zp(i,n,s,o):kp(i)){t.push(u.i,i.i,f.i),Nr(i),i=f.next,c=f.next;continue}if(i=f,i===c){a?a===1?(i=Vp(Zn(i),t),Lr(i,t,e,n,s,o,2)):a===2&&Gp(i,t,e,n,s,o):Lr(Zn(i),t,e,n,s,o,1);break}}}function kp(i){let t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;let s=t.x,o=e.x,a=n.x,c=t.y,u=e.y,f=n.y,p=Math.min(s,o,a),_=Math.min(c,u,f),m=Math.max(s,o,a),g=Math.max(c,u,f),b=n.next;for(;b!==t;){if(b.x>=p&&b.x<=m&&b.y>=_&&b.y<=g&&cr(s,c,o,u,a,f,b.x,b.y)&&De(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function zp(i,t,e,n){let s=i.prev,o=i,a=i.next;if(De(s,o,a)>=0)return!1;let c=s.x,u=o.x,f=a.x,p=s.y,_=o.y,m=a.y,g=Math.min(c,u,f),b=Math.min(p,_,m),S=Math.max(c,u,f),x=Math.max(p,_,m),v=Lc(g,b,t,e,n),E=Lc(S,x,t,e,n),C=i.prevZ,M=i.nextZ;for(;C&&C.z>=v&&M&&M.z<=E;){if(C.x>=g&&C.x<=S&&C.y>=b&&C.y<=x&&C!==s&&C!==a&&cr(c,p,u,_,f,m,C.x,C.y)&&De(C.prev,C,C.next)>=0||(C=C.prevZ,M.x>=g&&M.x<=S&&M.y>=b&&M.y<=x&&M!==s&&M!==a&&cr(c,p,u,_,f,m,M.x,M.y)&&De(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;C&&C.z>=v;){if(C.x>=g&&C.x<=S&&C.y>=b&&C.y<=x&&C!==s&&C!==a&&cr(c,p,u,_,f,m,C.x,C.y)&&De(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;M&&M.z<=E;){if(M.x>=g&&M.x<=S&&M.y>=b&&M.y<=x&&M!==s&&M!==a&&cr(c,p,u,_,f,m,M.x,M.y)&&De(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Vp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Bs(n,s)&&bf(n,e,e.next,s)&&Dr(n,s)&&Dr(s,n)&&(t.push(n.i,e.i,s.i),Nr(e),Nr(e.next),e=i=s),e=e.next}while(e!==i);return Zn(e)}function Gp(i,t,e,n,s,o){let a=i;do{let c=a.next.next;for(;c!==a.prev;){if(a.i!==c.i&&Kp(a,c)){let u=Sf(a,c);a=Zn(a,a.next),u=Zn(u,u.next),Lr(a,t,e,n,s,o,0),Lr(u,t,e,n,s,o,0);return}c=c.next}a=a.next}while(a!==i)}function Hp(i,t,e,n){let s=[];for(let o=0,a=t.length;o<a;o++){let c=t[o]*n,u=o<a-1?t[o+1]*n:i.length,f=yf(i,c,u,n,!1);f===f.next&&(f.steiner=!0),s.push(Jp(f))}s.sort(Xp);for(let o=0;o<s.length;o++)e=Wp(s[o],e);return e}function Xp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Wp(i,t){let e=Yp(i,t);if(!e)return t;let n=Sf(e,i);return Zn(n,n.next),Zn(e,e.next)}function Yp(i,t){let e=t,n=i.x,s=i.y,o=-1/0,a;if(Bs(i,e))return e;do{if(Bs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let _=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(_<=n&&_>o&&(o=_,a=e.x<e.next.x?e:e.next,_===n))return a}e=e.next}while(e!==t);if(!a)return null;let c=a,u=a.x,f=a.y,p=1/0;e=a;do{if(n>=e.x&&e.x>=u&&n!==e.x&&vf(s<f?n:o,s,u,f,s<f?o:n,s,e.x,e.y)){let _=Math.abs(s-e.y)/(n-e.x);Dr(e,i)&&(_<p||_===p&&(e.x>a.x||e.x===a.x&&qp(a,e)))&&(a=e,p=_)}e=e.next}while(e!==c);return a}function qp(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function $p(i,t,e,n){let s=i;do s.z===0&&(s.z=Lc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zp(s)}function Zp(i){let t,e=1;do{let n=i,s;i=null;let o=null;for(t=0;n;){t++;let a=n,c=0;for(let f=0;f<e&&(c++,a=a.nextZ,!!a);f++);let u=e;for(;c>0||u>0&&a;)c!==0&&(u===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,c--):(s=a,a=a.nextZ,u--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=a}o.nextZ=null,e*=2}while(t>1);return i}function Lc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Jp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function vf(i,t,e,n,s,o,a,c){return(s-a)*(t-c)>=(i-a)*(o-c)&&(i-a)*(n-c)>=(e-a)*(t-c)&&(e-a)*(o-c)>=(s-a)*(n-c)}function cr(i,t,e,n,s,o,a,c){return!(i===a&&t===c)&&vf(i,t,e,n,s,o,a,c)}function Kp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!jp(i,t)&&(Dr(i,t)&&Dr(t,i)&&Qp(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||Bs(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Bs(i,t){return i.x===t.x&&i.y===t.y}function bf(i,t,e,n){let s=Ho(De(i,t,e)),o=Ho(De(i,t,n)),a=Ho(De(e,n,i)),c=Ho(De(e,n,t));return!!(s!==o&&a!==c||s===0&&Go(i,e,t)||o===0&&Go(i,n,t)||a===0&&Go(e,i,n)||c===0&&Go(e,t,n))}function Go(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ho(i){return i>0?1:i<0?-1:0}function jp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Dr(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function Qp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Sf(i,t){let e=Dc(i.i,i.x,i.y),n=Dc(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function bu(i,t,e,n){let s=Dc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tm(i,t,e,n){let s=0;for(let o=t,a=e-n;o<e;o+=n)s+=(i[a]-i[o])*(i[o+1]+i[a+1]),a=o;return s}var Nc=class{static triangulate(t,e,n=2){return Up(t,e,n)}},Hi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],o=[];Su(t),Mu(n,t);let a=t.length;e.forEach(Su);for(let u=0;u<e.length;u++)s.push(a),a+=e[u].length,Mu(n,e[u]);let c=Nc.triangulate(n,s);for(let u=0;u<c.length;u+=3)o.push(c.slice(u,u+3));return o}};function Su(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Mu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Jn=class i extends Ie{constructor(t=new un([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],o=[];for(let c=0,u=t.length;c<u;c++){let f=t[c];a(f)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(o,2)),this.computeVertexNormals();function a(c){let u=[],f=e.curveSegments!==void 0?e.curveSegments:12,p=e.steps!==void 0?e.steps:1,_=e.depth!==void 0?e.depth:1,m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,b=e.bevelSize!==void 0?e.bevelSize:g-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,v=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:em,C,M=!1,I,R,O,A;if(v){C=v.getSpacedPoints(p),M=!0,m=!1;let pt=v.isCatmullRomCurve3?v.closed:!1;I=v.computeFrenetFrames(p,pt),R=new k,O=new k,A=new k}m||(x=0,g=0,b=0,S=0);let D=c.extractPoints(f),U=D.shape,N=D.holes;if(!Hi.isClockWise(U)){U=U.reverse();for(let pt=0,xt=N.length;pt<xt;pt++){let yt=N[pt];Hi.isClockWise(yt)&&(N[pt]=yt.reverse())}}function H(pt){let yt=10000000000000001e-36,vt=pt[0];for(let Mt=1;Mt<=pt.length;Mt++){let Kt=Mt%pt.length,Zt=pt[Kt],ee=Zt.x-vt.x,se=Zt.y-vt.y,X=ee*ee+se*se,ye=Math.max(Math.abs(Zt.x),Math.abs(Zt.y),Math.abs(vt.x),Math.abs(vt.y)),pe=yt*ye*ye;if(X<=pe){pt.splice(Kt,1),Mt--;continue}vt=Zt}}H(U),N.forEach(H);let B=N.length,W=U;for(let pt=0;pt<B;pt++){let xt=N[pt];U=U.concat(xt)}function K(pt,xt,yt){return xt||ie("ExtrudeGeometry: vec does not exist"),pt.clone().addScaledVector(xt,yt)}let J=U.length;function at(pt,xt,yt){let vt,Mt,Kt,Zt=pt.x-xt.x,ee=pt.y-xt.y,se=yt.x-pt.x,X=yt.y-pt.y,ye=Zt*Zt+ee*ee,pe=Zt*X-ee*se;if(Math.abs(pe)>Number.EPSILON){let F=Math.sqrt(ye),T=Math.sqrt(se*se+X*X),Z=xt.x-ee/F,et=xt.y+Zt/F,rt=yt.x-X/T,bt=yt.y+se/T,St=((rt-Z)*X-(bt-et)*se)/(Zt*X-ee*se);vt=Z+Zt*St-pt.x,Mt=et+ee*St-pt.y;let ot=vt*vt+Mt*Mt;if(ot<=2)return new _t(vt,Mt);Kt=Math.sqrt(ot/2)}else{let F=!1;Zt>Number.EPSILON?se>Number.EPSILON&&(F=!0):Zt<-Number.EPSILON?se<-Number.EPSILON&&(F=!0):Math.sign(ee)===Math.sign(X)&&(F=!0),F?(vt=-ee,Mt=Zt,Kt=Math.sqrt(ye)):(vt=Zt,Mt=ee,Kt=Math.sqrt(ye/2))}return new _t(vt/Kt,Mt/Kt)}let tt=[];for(let pt=0,xt=W.length,yt=xt-1,vt=pt+1;pt<xt;pt++,yt++,vt++)yt===xt&&(yt=0),vt===xt&&(vt=0),tt[pt]=at(W[pt],W[yt],W[vt]);let nt=[],st,Tt=tt.concat();for(let pt=0,xt=B;pt<xt;pt++){let yt=N[pt];st=[];for(let vt=0,Mt=yt.length,Kt=Mt-1,Zt=vt+1;vt<Mt;vt++,Kt++,Zt++)Kt===Mt&&(Kt=0),Zt===Mt&&(Zt=0),st[vt]=at(yt[vt],yt[Kt],yt[Zt]);nt.push(st),Tt=Tt.concat(st)}let Et;if(x===0)Et=Hi.triangulateShape(W,N);else{let pt=[],xt=[];for(let yt=0;yt<x;yt++){let vt=yt/x,Mt=g*Math.cos(vt*Math.PI/2),Kt=b*Math.sin(vt*Math.PI/2)+S;for(let Zt=0,ee=W.length;Zt<ee;Zt++){let se=K(W[Zt],tt[Zt],Kt);Nt(se.x,se.y,-Mt),vt===0&&pt.push(se)}for(let Zt=0,ee=B;Zt<ee;Zt++){let se=N[Zt];st=nt[Zt];let X=[];for(let ye=0,pe=se.length;ye<pe;ye++){let F=K(se[ye],st[ye],Kt);Nt(F.x,F.y,-Mt),vt===0&&X.push(F)}vt===0&&xt.push(X)}}Et=Hi.triangulateShape(pt,xt)}let $t=Et.length,ne=b+S;for(let pt=0;pt<J;pt++){let xt=m?K(U[pt],Tt[pt],ne):U[pt];M?(O.copy(I.normals[0]).multiplyScalar(xt.x),R.copy(I.binormals[0]).multiplyScalar(xt.y),A.copy(C[0]).add(O).add(R),Nt(A.x,A.y,A.z)):Nt(xt.x,xt.y,0)}for(let pt=1;pt<=p;pt++)for(let xt=0;xt<J;xt++){let yt=m?K(U[xt],Tt[xt],ne):U[xt];M?(O.copy(I.normals[pt]).multiplyScalar(yt.x),R.copy(I.binormals[pt]).multiplyScalar(yt.y),A.copy(C[pt]).add(O).add(R),Nt(A.x,A.y,A.z)):Nt(yt.x,yt.y,_/p*pt)}for(let pt=x-1;pt>=0;pt--){let xt=pt/x,yt=g*Math.cos(xt*Math.PI/2),vt=b*Math.sin(xt*Math.PI/2)+S;for(let Mt=0,Kt=W.length;Mt<Kt;Mt++){let Zt=K(W[Mt],tt[Mt],vt);Nt(Zt.x,Zt.y,_+yt)}for(let Mt=0,Kt=N.length;Mt<Kt;Mt++){let Zt=N[Mt];st=nt[Mt];for(let ee=0,se=Zt.length;ee<se;ee++){let X=K(Zt[ee],st[ee],vt);M?Nt(X.x,X.y+C[p-1].y,C[p-1].x+yt):Nt(X.x,X.y,_+yt)}}}ge(),lt();function ge(){let pt=s.length/3;if(m){let xt=0,yt=J*xt;for(let vt=0;vt<$t;vt++){let Mt=Et[vt];jt(Mt[2]+yt,Mt[1]+yt,Mt[0]+yt)}xt=p+x*2,yt=J*xt;for(let vt=0;vt<$t;vt++){let Mt=Et[vt];jt(Mt[0]+yt,Mt[1]+yt,Mt[2]+yt)}}else{for(let xt=0;xt<$t;xt++){let yt=Et[xt];jt(yt[2],yt[1],yt[0])}for(let xt=0;xt<$t;xt++){let yt=Et[xt];jt(yt[0]+J*p,yt[1]+J*p,yt[2]+J*p)}}n.addGroup(pt,s.length/3-pt,0)}function lt(){let pt=s.length/3,xt=0;dt(W,xt),xt+=W.length;for(let yt=0,vt=N.length;yt<vt;yt++){let Mt=N[yt];dt(Mt,xt),xt+=Mt.length}n.addGroup(pt,s.length/3-pt,1)}function dt(pt,xt){let yt=pt.length;for(;--yt>=0;){let vt=yt,Mt=yt-1;Mt<0&&(Mt=pt.length-1);for(let Kt=0,Zt=p+x*2;Kt<Zt;Kt++){let ee=J*Kt,se=J*(Kt+1),X=xt+vt+ee,ye=xt+Mt+ee,pe=xt+Mt+se,F=xt+vt+se;Ft(X,ye,pe,F)}}}function Nt(pt,xt,yt){u.push(pt),u.push(xt),u.push(yt)}function jt(pt,xt,yt){te(pt),te(xt),te(yt);let vt=s.length/3,Mt=E.generateTopUV(n,s,vt-3,vt-2,vt-1);Se(Mt[0]),Se(Mt[1]),Se(Mt[2])}function Ft(pt,xt,yt,vt){te(pt),te(xt),te(vt),te(xt),te(yt),te(vt);let Mt=s.length/3,Kt=E.generateSideWallUV(n,s,Mt-6,Mt-3,Mt-2,Mt-1);Se(Kt[0]),Se(Kt[1]),Se(Kt[3]),Se(Kt[1]),Se(Kt[2]),Se(Kt[3])}function te(pt){s.push(u[pt*3+0]),s.push(u[pt*3+1]),s.push(u[pt*3+2])}function Se(pt){o.push(pt.x),o.push(pt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return im(e,n,t)}static fromJSON(t,e){let n=[];for(let o=0,a=t.shapes.length;o<a;o++){let c=e[t.shapes[o]];n.push(c)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Rc[s.type]().fromJSON(s)),new i(n,t.options)}},em={generateTopUV:function(i,t,e,n,s){let o=t[e*3],a=t[e*3+1],c=t[n*3],u=t[n*3+1],f=t[s*3],p=t[s*3+1];return[new _t(o,a),new _t(c,u),new _t(f,p)]},generateSideWallUV:function(i,t,e,n,s,o){let a=t[e*3],c=t[e*3+1],u=t[e*3+2],f=t[n*3],p=t[n*3+1],_=t[n*3+2],m=t[s*3],g=t[s*3+1],b=t[s*3+2],S=t[o*3],x=t[o*3+1],v=t[o*3+2];return Math.abs(c-p)<Math.abs(a-f)?[new _t(a,1-u),new _t(f,1-_),new _t(m,1-b),new _t(S,1-v)]:[new _t(c,1-u),new _t(p,1-_),new _t(g,1-b),new _t(x,1-v)]}};function im(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Fr=class i extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let o=t/2,a=e/2,c=Math.floor(n),u=Math.floor(s),f=c+1,p=u+1,_=t/c,m=e/u,g=[],b=[],S=[],x=[];for(let v=0;v<p;v++){let E=v*m-a;for(let C=0;C<f;C++){let M=C*_-o;b.push(M,-E,0),S.push(0,0,1),x.push(C/c),x.push(1-v/u)}}for(let v=0;v<u;v++)for(let E=0;E<c;E++){let C=E+f*v,M=E+f*(v+1),I=E+1+f*(v+1),R=E+1+f*v;g.push(C,M,R),g.push(M,I,R)}this.setIndex(g),this.setAttribute("position",new xe(b,3)),this.setAttribute("normal",new xe(S,3)),this.setAttribute("uv",new xe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Tn=class i extends Ie{constructor(t=new un([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],o=[],a=[],c=0,u=0;if(Array.isArray(t)===!1)f(t);else for(let p=0;p<t.length;p++)f(t[p]),this.addGroup(c,u,p),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new xe(s,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(a,2));function f(p){let _=s.length/3,m=p.extractPoints(e),g=m.shape,b=m.holes;Hi.isClockWise(g)===!1&&(g=g.reverse());for(let x=0,v=b.length;x<v;x++){let E=b[x];Hi.isClockWise(E)===!0&&(b[x]=E.reverse())}let S=Hi.triangulateShape(g,b);for(let x=0,v=b.length;x<v;x++){let E=b[x];g=g.concat(E)}for(let x=0,v=g.length;x<v;x++){let E=g[x];s.push(E.x,E.y,0),o.push(0,0,1),a.push(E.x,E.y)}for(let x=0,v=S.length;x<v;x++){let E=S[x],C=E[0]+_,M=E[1]+_,I=E[2]+_;n.push(C,M,I),u+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return nm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function nm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var di=class i extends Ie{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:a,thetaLength:c},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let u=Math.min(a+c,Math.PI),f=0,p=[],_=new k,m=new k,g=[],b=[],S=[],x=[];for(let v=0;v<=n;v++){let E=[],C=v/n,M=a+C*c,I=t*Math.cos(M),R=Math.sqrt(t*t-I*I),O=0;v===0&&a===0?O=.5/e:v===n&&u===Math.PI&&(O=-.5/e);for(let A=0;A<=e;A++){let D=A/e,U=s+D*o;_.x=-R*Math.cos(U),_.y=I,_.z=R*Math.sin(U),b.push(_.x,_.y,_.z),m.copy(_).normalize(),S.push(m.x,m.y,m.z),x.push(D+O,1-C),E.push(f++)}p.push(E)}for(let v=0;v<n;v++)for(let E=0;E<e;E++){let C=p[v][E+1],M=p[v][E],I=p[v+1][E],R=p[v+1][E+1];(v!==0||a>0)&&g.push(C,M,R),(v!==n-1||u<Math.PI)&&g.push(M,I,R)}this.setIndex(g),this.setAttribute("position",new xe(b,3)),this.setAttribute("normal",new xe(S,3)),this.setAttribute("uv",new xe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Or=class extends Ie{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new k,o=new k;if(t.index!==null){let a=t.attributes.position,c=t.index,u=t.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let f=0,p=u.length;f<p;++f){let _=u[f],m=_.start,g=_.count;for(let b=m,S=m+g;b<S;b+=3)for(let x=0;x<3;x++){let v=c.getX(b+x),E=c.getX(b+(x+1)%3);s.fromBufferAttribute(a,v),o.fromBufferAttribute(a,E),wu(s,o,n)===!0&&(e.push(s.x,s.y,s.z),e.push(o.x,o.y,o.z))}}}else{let a=t.attributes.position;for(let c=0,u=a.count/3;c<u;c++)for(let f=0;f<3;f++){let p=3*c+f,_=3*c+(f+1)%3;s.fromBufferAttribute(a,p),o.fromBufferAttribute(a,_),wu(s,o,n)===!0&&(e.push(s.x,s.y,s.z),e.push(o.x,o.y,o.z))}}this.setAttribute("position",new xe(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function wu(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function ts(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Tu(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Tu(s[0])){let o=[];for(let a=0,c=s.length;a<c;a++)o[a]=s[a].clone();t[e][n]=o}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ei(i){let t={};for(let e=0;e<i.length;e++){let n=ts(i[e]);for(let s in n)t[s]=n[s]}return t}function Tu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function sm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var no={clone:ts,merge:ei},rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,li=class extends cn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rm,this.fragmentShader=om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=sm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ce().setHex(s.value);break;case"v2":this.uniforms[n].value=new _t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new we().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ae().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},pa=class extends li{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Kn=class extends cn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ma=class extends cn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ga=class extends cn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ys(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Mc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var En=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],o=e[n-1];i:{t:{let a;e:{n:if(!(t<s)){for(let c=n+2;;){if(s===void 0){if(t<o)break n;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(o=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=o)){let c=e[1];t<c&&(n=2,o=c);for(let u=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(s=o,o=e[--n-1],t>=o)break t}a=n,n=0;break e}break i}for(;n<a;){let c=n+a>>>1;t<e[c]?a=c:n=c+1}if(s=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,s)}return this.interpolate_(n,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=t*s;for(let a=0;a!==s;++a)e[a]=n[o+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_a=class extends En{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ac,endingEnd:Ac}}intervalChanged_(t,e,n){let s=this.parameterPositions,o=t-2,a=t+1,c=s[o],u=s[a];if(c===void 0)switch(this.getSettings_().endingStart){case Cc:o=t,c=2*e-n;break;case Pc:o=s.length-2,c=e+s[o]-s[o+1];break;default:o=t,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Cc:a=t,u=2*n-e;break;case Pc:a=1,u=n+s[1]-s[0];break;default:a=t-1,u=e}let f=(n-e)*.5,p=this.valueSize;this._weightPrev=f/(e-c),this._weightNext=f/(u-n),this._offsetPrev=o*p,this._offsetNext=a*p}interpolate_(t,e,n,s){let o=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=t*c,f=u-c,p=this._offsetPrev,_=this._offsetNext,m=this._weightPrev,g=this._weightNext,b=(n-e)/(s-e),S=b*b,x=S*b,v=-m*x+2*m*S-m*b,E=(1+m)*x+(-1.5-2*m)*S+(-.5+m)*b+1,C=(-1-g)*x+(1.5+g)*S+.5*b,M=g*x-g*S;for(let I=0;I!==c;++I)o[I]=v*a[p+I]+E*a[f+I]+C*a[u+I]+M*a[_+I];return o}},xa=class extends En{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=t*c,f=u-c,p=(n-e)/(s-e),_=1-p;for(let m=0;m!==c;++m)o[m]=a[f+m]*_+a[u+m]*p;return o}},ya=class extends En{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},va=class extends En{interpolate_(t,e,n,s){let o=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=t*c,f=u-c,p=this.inTangents,_=this.outTangents;if(!p||!_){let b=(n-e)/(s-e),S=1-b;for(let x=0;x!==c;++x)o[x]=a[f+x]*S+a[u+x]*b;return o}let m=c*2,g=t-1;for(let b=0;b!==c;++b){let S=a[f+b],x=a[u+b],v=g*m+b*2,E=_[v],C=_[v+1],M=t*m+b*2,I=p[M],R=p[M+1],O=lm(n,e,E,I,s);o[b]=Mf(O,S,C,R,x)}return o}};function Mf(i,t,e,n,s){let o=1-i;return o*o*o*t+3*o*o*i*e+3*o*i*i*n+i*i*i*s}function am(i,t,e,n,s){let o=1-i;return 3*o*o*(e-t)+6*o*i*(n-e)+3*i*i*(s-n)}function lm(i,t,e,n,s){let o=(i-t)/(s-t);for(let a=0;a<8;a++){let c=Mf(o,t,e,n,s)-i;if(Math.abs(c)<1e-10)break;let u=am(o,t,e,n,s);if(Math.abs(u)<1e-10)break;o=Math.max(0,Math.min(1,o-c/u))}return o}var wi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ys(e,this.TimeBufferType),this.values=ys(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ys(t.times,Array),values:ys(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Mc(t.settings)&&(n.settings={inTangents:ys(t.settings.inTangents,Array),outTangents:ys(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new va(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case dr:e=this.InterpolantFactoryMethodDiscrete;break;case na:e=this.InterpolantFactoryMethodLinear;break;case qo:e=this.InterpolantFactoryMethodSmooth;break;case Ec:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return qo;case this.InterpolantFactoryMethodBezier:return Ec}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Mc(this.settings)&&(Eu(this.settings.inTangents,t),Eu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,o=0,a=s-1;for(;o!==s&&n[o]<t;)++o;for(;a!==-1&&n[a]>e;)--a;if(++a,o!==0||a!==s){o>=a&&(a=Math.max(a,1),o=a-1);let c=this.getValueSize();this.times=n.slice(o,a),this.values=this.values.slice(o*c,a*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ie("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,o=n.length;o===0&&(ie("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let c=0;c!==o;c++){let u=n[c];if(typeof u=="number"&&isNaN(u)){ie("KeyframeTrack: Time is not a valid number.",this,c,u),t=!1;break}if(a!==null&&a>u){ie("KeyframeTrack: Out of order keys.",this,c,u,a),t=!1;break}a=u}if(s!==void 0&&Jd(s))for(let c=0,u=s.length;c!==u;++c){let f=s[c];if(isNaN(f)){ie("KeyframeTrack: Value is not a valid number.",this,c,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qo,o=t.length-1,a=1;for(let c=1;c<o;++c){let u=!1,f=t[c],p=t[c+1];if(f!==p&&(c!==1||f!==t[0]))if(s)u=!0;else{let _=c*n,m=_-n,g=_+n;for(let b=0;b!==n;++b){let S=e[_+b];if(S!==e[m+b]||S!==e[g+b]){u=!0;break}}}if(u){if(c!==a){t[a]=t[c];let _=c*n,m=a*n;for(let g=0;g!==n;++g)e[m+g]=e[_+g]}++a}}if(o>0){t[a]=t[o];for(let c=o*n,u=a*n,f=0;f!==n;++f)e[u+f]=e[c+f];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Mc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Eu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}wi.prototype.ValueTypeName="";wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=na;var An=class extends wi{constructor(t,e,n){super(t,e,n)}};An.prototype.ValueTypeName="bool";An.prototype.ValueBufferType=Array;An.prototype.DefaultInterpolation=dr;An.prototype.InterpolantFactoryMethodLinear=void 0;An.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}};ba.prototype.ValueTypeName="color";var Sa=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}};Sa.prototype.ValueTypeName="number";var Ma=class extends En{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=(n-e)/(s-e),f=t*c;for(let p=f+c;f!==p;f+=4)bi.slerpFlat(o,0,a,f-c,a,f,u);return o}},Br=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ma(this.times,this.values,this.getValueSize(),t)}};Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;var Cn=class extends wi{constructor(t,e,n){super(t,e,n)}};Cn.prototype.ValueTypeName="string";Cn.prototype.ValueBufferType=Array;Cn.prototype.DefaultInterpolation=dr;Cn.prototype.InterpolantFactoryMethodLinear=void 0;Cn.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}};wa.prototype.ValueTypeName="vector";var Ta=class{constructor(t,e,n){let s=this,o=!1,a=0,c=0,u,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(p){c++,o===!1&&s.onStart!==void 0&&s.onStart(p,a,c),o=!0},this.itemEnd=function(p){a++,s.onProgress!==void 0&&s.onProgress(p,a,c),a===c&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,_){return f.push(p,_),this},this.removeHandler=function(p){let _=f.indexOf(p);return _!==-1&&f.splice(_,2),this},this.getHandler=function(p){for(let _=0,m=f.length;_<m;_+=2){let g=f[_],b=f[_+1];if(g.global&&(g.lastIndex=0),g.test(p))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wf=new Ta,Ea=class{constructor(t){this.manager=t!==void 0?t:wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ea.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},kr=class extends Ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},wc=new _e,Au=new k,Cu=new k,Aa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Au.setFromMatrixPosition(t.matrixWorld),e.position.copy(Au),Cu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(wc,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,a=s?s.z/o.x:1,c=s?s.w/o.y:1,u=s?s.x/o.x:0,f=s?s.y/o.y:0;t.coordinateSystem===As||t.reversedDepth?e.set(.5*a,0,0,.5*a+u,0,.5*c,0,.5*c+f,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+u,0,.5*c,0,.5*c+f,0,0,.5,.5,0,0,0,1),e.multiply(wc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Xo=new k,Wo=new bi,Vi=new k,zr=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Xo,Wo,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,Wo,Vi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Xo,Wo,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,Wo,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vn=new k,Pu=new _t,Iu=new _t,ti=class extends zr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vn.x,vn.y).multiplyScalar(-t/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vn.x,vn.y).multiplyScalar(-t/vn.z)}getViewSize(t,e){return this.getViewBounds(t,Pu,Iu),e.subVectors(Iu,Pu)}setViewOffset(t,e,n,s,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ws*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let u=a.fullWidth,f=a.fullHeight;o+=a.offsetX*s/u,e-=a.offsetY*n/f,s*=a.width/u,n*=a.height/f}let c=this.filmOffset;c!==0&&(o+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Us=class extends zr{constructor(t=-1,e=1,n=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=n-t,a=n+t,c=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,a=o+f*this.view.width,c-=p*this.view.offsetY,u=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,a,c,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fc=class extends Aa{constructor(){super(new Us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends Ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Fc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Gr=class extends Ie{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var vs=-90,bs=1,Ca=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ti(vs,bs,t,e);s.layers=this.layers,this.add(s);let o=new ti(vs,bs,t,e);o.layers=this.layers,this.add(o);let a=new ti(vs,bs,t,e);a.layers=this.layers,this.add(a);let c=new ti(vs,bs,t,e);c.layers=this.layers,this.add(c);let u=new ti(vs,bs,t,e);u.layers=this.layers,this.add(u);let f=new ti(vs,bs,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,o,a,c,u]=e;for(let f of e)this.remove(f);if(t===Di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,a,c,u,f,p]=this.children,_=t.getRenderTarget(),m=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(_,m,g),t.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},Pa=class extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var uh="\\[\\]\\.:\\/",cm=new RegExp("["+uh+"]","g"),fh="[^"+uh+"]",hm="[^"+uh.replace("\\.","")+"]",um=/((?:WC+[\/:])*)/.source.replace("WC",fh),fm=/(WCOD+)?/.source.replace("WCOD",hm),dm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),mm=new RegExp("^"+um+fm+dm+pm+"$"),gm=["material","materials","bones","map"],Oc=class{constructor(t,e,n){let s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cm,"")}static parseTrackName(t){let e=mm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=n.nodeName.substring(s+1);gm.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===e||c.uuid===e)return c;let u=n(c.children);if(u)return u}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=e.objectIndex;switch(n){case"materials":if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===f){f=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(f!==void 0){if(t[f]===void 0){ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let a=t[s];if(a===void 0){let f=e.nodeName;ie("PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Oc;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var av=new Float32Array(1);var Pn=class extends Mr{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Ru=new _e,Hr=class{constructor(t,e,n=0,s=1/0){this.ray=new Sn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Rs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ru.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ru),this}intersectObject(t,e=!0,n=[]){return Bc(t,this,n,e),n.sort(Lu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Bc(t[s],this,n,e);return n.sort(Lu),n}};function Lu(i,t){return i.distance-t.distance}function Bc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let o=i.children;for(let a=0,c=o.length;a<c;a++)Bc(o[a],t,e,!0)}}var ks=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var xh=class xh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=s,this}};xh.prototype.isMatrix2=!0;var Uc=xh;var Du=new k,Yo=new k,Ss=new k,Ms=new k,Tc=new k,_m=new k,xm=new k,Xr=class{constructor(t=new k,e=new k){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Du.subVectors(t,this.start),Yo.subVectors(this.end,this.start);let n=Yo.dot(Yo);if(n===0)return 0;let o=Yo.dot(Du)/n;return e&&(o=re(o,0,1)),o}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=_m,n=xm){let s=10000000000000001e-32,o,a,c=this.start,u=t.start,f=this.end,p=t.end;Ss.subVectors(f,c),Ms.subVectors(p,u),Tc.subVectors(c,u);let _=Ss.dot(Ss),m=Ms.dot(Ms),g=Ms.dot(Tc);if(_<=s&&m<=s)return e.copy(c),n.copy(u),e.sub(n),e.dot(e);if(_<=s)o=0,a=g/m,a=re(a,0,1);else{let b=Ss.dot(Tc);if(m<=s)a=0,o=re(-b/_,0,1);else{let S=Ss.dot(Ms),x=_*m-S*S;x!==0?o=re((S*g-b*m)/x,0,1):o=0,a=(S*o+g)/m,a<0?(a=0,o=re(-b/_,0,1)):a>1&&(a=1,o=re((S-b)/_,0,1))}}return e.copy(c).addScaledVector(Ss,o),n.copy(u).addScaledVector(Ms,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Wr=class extends Ni{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function dh(i,t,e,n){let s=ym(n);switch(e){case sh:return i*t;case Zr:return i*t/s.components*s.byteLength;case Ua:return i*t/s.components*s.byteLength;case On:return i*t*2/s.components*s.byteLength;case ka:return i*t*2/s.components*s.byteLength;case rh:return i*t*3/s.components*s.byteLength;case Ci:return i*t*4/s.components*s.byteLength;case za:return i*t*4/s.components*s.byteLength;case Jr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:case Xa:return Math.max(i,16)*Math.max(t,8)/4;case Va:case Ha:return Math.max(i,8)*Math.max(t,8)/2;case Wa:case Ya:case $a:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qa:case to:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ul:case fl:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*8;case eo:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ym(i){switch(i){case mi:case th:return{byteLength:1,components:1};case Gs:case eh:case ki:return{byteLength:2,components:1};case Oa:case Ba:return{byteLength:2,components:4};case Bi:case Fa:case Ui:return{byteLength:4,components:1};case ih:case nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);function Yf(){let i=null,t=!1,e=null,n=null;function s(o,a){n=i.requestAnimationFrame(s),e(o,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function wm(i){let t=new WeakMap;function e(c,u){let f=c.array,p=c.usage,_=f.byteLength,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,f,p),c.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)g=i.HALF_FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:_}}function n(c,u,f){let p=u.array,_=u.updateRanges;if(i.bindBuffer(f,c),_.length===0)i.bufferSubData(f,0,p);else{_.sort((g,b)=>g.start-b.start);let m=0;for(let g=1;g<_.length;g++){let b=_[m],S=_[g];S.start<=b.start+b.count+1?b.count=Math.max(b.count,S.start+S.count-b.start):(++m,_[m]=S)}_.length=m+1;for(let g=0,b=_.length;g<b;g++){let S=_[g];i.bufferSubData(f,S.start*p.BYTES_PER_ELEMENT,p,S.start,S.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=t.get(c);u&&(i.deleteBuffer(u.buffer),t.delete(c))}function a(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let p=t.get(c);(!p||p.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let f=t.get(c);if(f===void 0)t.set(c,e(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,u),f.version=c.version}}return{get:s,remove:o,update:a}}var Tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Em=`#ifdef USE_ALPHAHASH
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
#endif`,Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rm=`#ifdef USE_AOMAP
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
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
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
#endif`,Nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Um=`#ifdef USE_IRIDESCENCE
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
#endif`,km=`#ifdef USE_BUMPMAP
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
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$m=`#define PI 3.141592653589793
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
} // validated`,Zm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jm=`vec3 transformedNormal = objectNormal;
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
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e0="gl_FragColor = linearToOutputTexel( gl_FragColor );",i0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f0=`#ifdef USE_GRADIENTMAP
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
}`,d0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_0=`#ifdef USE_ENVMAP
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
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S0=`PhysicalMaterial material;
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
#endif`,M0=`uniform sampler2D dfgLUT;
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
}`,w0=`
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
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
#endif`,E0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,C0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,F0=`#if defined( USE_POINTS_UV )
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
#endif`,O0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`#ifdef USE_MORPHTARGETS
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
#endif`,G0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,X0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
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
#endif`,Z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hg=`float getShadowMask() {
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
}`,ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eg=`uniform sampler2D t2D;
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`#include <common>
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
}`,Lg=`#if DEPTH_PACKING == 3200
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
}`,Dg=`#define DISTANCE
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
}`,Ng=`#define DISTANCE
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`uniform float scale;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,zg=`uniform vec3 diffuse;
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
}`,Vg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Hg=`#define MATCAP
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
}`,Xg=`#define MATCAP
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
}`,Wg=`#define NORMAL
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
}`,Yg=`#define NORMAL
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
}`,qg=`#define PHONG
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
}`,$g=`#define PHONG
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
}`,Zg=`#define STANDARD
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
}`,Jg=`#define STANDARD
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
}`,Kg=`#define TOON
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
}`,jg=`#define TOON
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
}`,Qg=`uniform float size;
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
}`,t_=`uniform vec3 diffuse;
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
}`,e_=`#include <common>
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
}`,i_=`uniform vec3 color;
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
}`,n_=`uniform float rotation;
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
}`,s_=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Tm,alphahash_pars_fragment:Em,alphamap_fragment:Am,alphamap_pars_fragment:Cm,alphatest_fragment:Pm,alphatest_pars_fragment:Im,aomap_fragment:Rm,aomap_pars_fragment:Lm,batching_pars_vertex:Dm,batching_vertex:Nm,begin_vertex:Fm,beginnormal_vertex:Om,bsdfs:Bm,iridescence_fragment:Um,bumpmap_pars_fragment:km,clipping_planes_fragment:zm,clipping_planes_pars_fragment:Vm,clipping_planes_pars_vertex:Gm,clipping_planes_vertex:Hm,color_fragment:Xm,color_pars_fragment:Wm,color_pars_vertex:Ym,color_vertex:qm,common:$m,cube_uv_reflection_fragment:Zm,defaultnormal_vertex:Jm,displacementmap_pars_vertex:Km,displacementmap_vertex:jm,emissivemap_fragment:Qm,emissivemap_pars_fragment:t0,colorspace_fragment:e0,colorspace_pars_fragment:i0,envmap_fragment:n0,envmap_common_pars_fragment:s0,envmap_pars_fragment:r0,envmap_pars_vertex:o0,envmap_physical_pars_fragment:_0,envmap_vertex:a0,fog_vertex:l0,fog_pars_vertex:c0,fog_fragment:h0,fog_pars_fragment:u0,gradientmap_pars_fragment:f0,lightmap_pars_fragment:d0,lights_lambert_fragment:p0,lights_lambert_pars_fragment:m0,lights_pars_begin:g0,lights_toon_fragment:x0,lights_toon_pars_fragment:y0,lights_phong_fragment:v0,lights_phong_pars_fragment:b0,lights_physical_fragment:S0,lights_physical_pars_fragment:M0,lights_fragment_begin:w0,lights_fragment_maps:T0,lights_fragment_end:E0,lightprobes_pars_fragment:A0,logdepthbuf_fragment:C0,logdepthbuf_pars_fragment:P0,logdepthbuf_pars_vertex:I0,logdepthbuf_vertex:R0,map_fragment:L0,map_pars_fragment:D0,map_particle_fragment:N0,map_particle_pars_fragment:F0,metalnessmap_fragment:O0,metalnessmap_pars_fragment:B0,morphinstance_vertex:U0,morphcolor_vertex:k0,morphnormal_vertex:z0,morphtarget_pars_vertex:V0,morphtarget_vertex:G0,normal_fragment_begin:H0,normal_fragment_maps:X0,normal_pars_fragment:W0,normal_pars_vertex:Y0,normal_vertex:q0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:Z0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:K0,iridescence_pars_fragment:j0,opaque_fragment:Q0,packing:tg,premultiplied_alpha_fragment:eg,project_vertex:ig,dithering_fragment:ng,dithering_pars_fragment:sg,roughnessmap_fragment:rg,roughnessmap_pars_fragment:og,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:lg,shadowmap_vertex:cg,shadowmask_pars_fragment:hg,skinbase_vertex:ug,skinning_pars_vertex:fg,skinning_vertex:dg,skinnormal_vertex:pg,specularmap_fragment:mg,specularmap_pars_fragment:gg,tonemapping_fragment:_g,tonemapping_pars_fragment:xg,transmission_fragment:yg,transmission_pars_fragment:vg,uv_pars_fragment:bg,uv_pars_vertex:Sg,uv_vertex:Mg,worldpos_vertex:wg,background_vert:Tg,background_frag:Eg,backgroundCube_vert:Ag,backgroundCube_frag:Cg,cube_vert:Pg,cube_frag:Ig,depth_vert:Rg,depth_frag:Lg,distance_vert:Dg,distance_frag:Ng,equirect_vert:Fg,equirect_frag:Og,linedashed_vert:Bg,linedashed_frag:Ug,meshbasic_vert:kg,meshbasic_frag:zg,meshlambert_vert:Vg,meshlambert_frag:Gg,meshmatcap_vert:Hg,meshmatcap_frag:Xg,meshnormal_vert:Wg,meshnormal_frag:Yg,meshphong_vert:qg,meshphong_frag:$g,meshphysical_vert:Zg,meshphysical_frag:Jg,meshtoon_vert:Kg,meshtoon_frag:jg,points_vert:Qg,points_frag:t_,shadow_vert:e_,shadow_frag:i_,sprite_vert:n_,sprite_frag:s_},Ct={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},ci={basic:{uniforms:ei([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:ei([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:ei([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:ei([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:ei([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new ce(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:ei([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:ei([Ct.points,Ct.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:ei([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:ei([Ct.common,Ct.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:ei([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:ei([Ct.sprite,Ct.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:ei([Ct.common,Ct.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:ei([Ct.lights,Ct.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};ci.physical={uniforms:ei([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var vl={r:0,b:0,g:0},r_=new _e,qf=new ae;qf.set(-1,0,0,0,1,0,0,0,1);function o_(i,t,e,n,s,o){let a=new ce(0),c=s===!0?0:1,u,f,p=null,_=0,m=null;function g(E){let C=E.isScene===!0?E.background:null;if(C&&C.isTexture){let M=E.backgroundBlurriness>0;C=t.get(C,M)}return C}function b(E){let C=!1,M=g(E);M===null?x(a,c):M&&M.isColor&&(x(M,1),C=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(E,C){let M=g(C);M&&(M.isCubeTexture||M.mapping===qr)?(f===void 0&&(f=new Le(new Ye(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:ts(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(I,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),f.material.uniforms.envMap.value=M,f.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(r_.makeRotationFromEuler(C.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(qf),f.material.toneMapped=me.getTransfer(M.colorSpace)!==Me,(p!==M||_!==M.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,p=M,_=M.version,m=i.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new Le(new Fr(2,2),new li({name:"BackgroundMaterial",uniforms:ts(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.toneMapped=me.getTransfer(M.colorSpace)!==Me,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||_!==M.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=M,_=M.version,m=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null))}function x(E,C){E.getRGB(vl,hh(i)),e.buffers.color.setClear(vl.r,vl.g,vl.b,C,o)}function v(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,C=1){a.set(E),c=C,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,x(a,c)},render:b,addToRenderList:S,dispose:v}}function a_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),o=s,a=!1;function c(N,G,H,B,W){let K=!1,J=_(N,B,H,G);o!==J&&(o=J,f(o.object)),K=g(N,B,H,W),K&&b(N,B,H,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(N,G,H,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function u(){return i.createVertexArray()}function f(N){return i.bindVertexArray(N)}function p(N){return i.deleteVertexArray(N)}function _(N,G,H,B){let W=B.wireframe===!0,K=n[G.id];K===void 0&&(K={},n[G.id]=K);let J=N.isInstancedMesh===!0?N.id:0,at=K[J];at===void 0&&(at={},K[J]=at);let tt=at[H.id];tt===void 0&&(tt={},at[H.id]=tt);let nt=tt[W];return nt===void 0&&(nt=m(u()),tt[W]=nt),nt}function m(N){let G=[],H=[],B=[];for(let W=0;W<e;W++)G[W]=0,H[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:H,attributeDivisors:B,object:N,attributes:{},index:null}}function g(N,G,H,B){let W=o.attributes,K=G.attributes,J=0,at=H.getAttributes();for(let tt in at)if(at[tt].location>=0){let st=W[tt],Tt=K[tt];if(Tt===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(Tt=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(Tt=N.instanceColor)),st===void 0||st.attribute!==Tt||Tt&&st.data!==Tt.data)return!0;J++}return o.attributesNum!==J||o.index!==B}function b(N,G,H,B){let W={},K=G.attributes,J=0,at=H.getAttributes();for(let tt in at)if(at[tt].location>=0){let st=K[tt];st===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(st=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(st=N.instanceColor));let Tt={};Tt.attribute=st,st&&st.data&&(Tt.data=st.data),W[tt]=Tt,J++}o.attributes=W,o.attributesNum=J,o.index=B}function S(){let N=o.newAttributes;for(let G=0,H=N.length;G<H;G++)N[G]=0}function x(N){v(N,0)}function v(N,G){let H=o.newAttributes,B=o.enabledAttributes,W=o.attributeDivisors;H[N]=1,B[N]===0&&(i.enableVertexAttribArray(N),B[N]=1),W[N]!==G&&(i.vertexAttribDivisor(N,G),W[N]=G)}function E(){let N=o.newAttributes,G=o.enabledAttributes;for(let H=0,B=G.length;H<B;H++)G[H]!==N[H]&&(i.disableVertexAttribArray(H),G[H]=0)}function C(N,G,H,B,W,K,J){J===!0?i.vertexAttribIPointer(N,G,H,W,K):i.vertexAttribPointer(N,G,H,B,W,K)}function M(N,G,H,B){S();let W=B.attributes,K=H.getAttributes(),J=G.defaultAttributeValues;for(let at in K){let tt=K[at];if(tt.location>=0){let nt=W[at];if(nt===void 0&&(at==="instanceMatrix"&&N.instanceMatrix&&(nt=N.instanceMatrix),at==="instanceColor"&&N.instanceColor&&(nt=N.instanceColor)),nt!==void 0){let st=nt.normalized,Tt=nt.itemSize,Et=t.get(nt);if(Et===void 0)continue;let $t=Et.buffer,ne=Et.type,ge=Et.bytesPerElement,lt=ne===i.INT||ne===i.UNSIGNED_INT||nt.gpuType===Fa;if(nt.isInterleavedBufferAttribute){let dt=nt.data,Nt=dt.stride,jt=nt.offset;if(dt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<tt.locationSize;Ft++)v(tt.location+Ft,dt.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ft=0;Ft<tt.locationSize;Ft++)x(tt.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Ft=0;Ft<tt.locationSize;Ft++)C(tt.location+Ft,Tt/tt.locationSize,ne,st,Nt*ge,(jt+Tt/tt.locationSize*Ft)*ge,lt)}else{if(nt.isInstancedBufferAttribute){for(let dt=0;dt<tt.locationSize;dt++)v(tt.location+dt,nt.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let dt=0;dt<tt.locationSize;dt++)x(tt.location+dt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let dt=0;dt<tt.locationSize;dt++)C(tt.location+dt,Tt/tt.locationSize,ne,st,Tt*ge,Tt/tt.locationSize*dt*ge,lt)}}else if(J!==void 0){let st=J[at];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(tt.location,st);break;case 3:i.vertexAttrib3fv(tt.location,st);break;case 4:i.vertexAttrib4fv(tt.location,st);break;default:i.vertexAttrib1fv(tt.location,st)}}}}E()}function I(){D();for(let N in n){let G=n[N];for(let H in G){let B=G[H];for(let W in B){let K=B[W];for(let J in K)p(K[J].object),delete K[J];delete B[W]}}delete n[N]}}function R(N){if(n[N.id]===void 0)return;let G=n[N.id];for(let H in G){let B=G[H];for(let W in B){let K=B[W];for(let J in K)p(K[J].object),delete K[J];delete B[W]}}delete n[N.id]}function O(N){for(let G in n){let H=n[G];for(let B in H){let W=H[B];if(W[N.id]===void 0)continue;let K=W[N.id];for(let J in K)p(K[J].object),delete K[J];delete W[N.id]}}}function A(N){for(let G in n){let H=n[G],B=N.isInstancedMesh===!0?N.id:0,W=H[B];if(W!==void 0){for(let K in W){let J=W[K];for(let at in J)p(J[at].object),delete J[at];delete W[K]}delete H[B],Object.keys(H).length===0&&delete n[G]}}}function D(){U(),a=!0,o!==s&&(o=s,f(o.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:D,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfObject:A,releaseStatesOfProgram:O,initAttributes:S,enableAttribute:x,disableUnusedAttributes:E}}function l_(i,t,e){let n;function s(u){n=u}function o(u,f){i.drawArrays(n,u,f),e.update(f,n,1)}function a(u,f,p){p!==0&&(i.drawArraysInstanced(n,u,f,p),e.update(f,n,p))}function c(u,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];e.update(m,n,1)}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=c}function c_(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let O=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(O){return!(O!==Ci&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(O){let A=O===ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==mi&&O!==Ui&&!A&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp",p=u(f);p!==f&&(Qt("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);let _=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:b,maxTextureSize:S,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:E,maxVaryings:C,maxFragmentUniforms:M,maxSamples:I,samples:R}}function h_(i){let t=this,e=null,n=0,s=!1,o=!1,a=new ri,c=new ae,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){let g=_.length!==0||m||n!==0||s;return s=m,n=_.length,g},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,m){e=p(_,m,0)},this.setState=function(_,m,g){let b=_.clippingPlanes,S=_.clipIntersection,x=_.clipShadows,v=i.get(_);if(!s||b===null||b.length===0||o&&!x)o?p(null):f();else{let E=o?0:n,C=E*4,M=v.clippingState||null;u.value=M,M=p(b,m,C,g);for(let I=0;I!==C;++I)M[I]=e[I];v.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function f(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(_,m,g,b){let S=_!==null?_.length:0,x=null;if(S!==0){if(x=u.value,b!==!0||x===null){let v=g+S*4,E=m.matrixWorldInverse;c.getNormalMatrix(E),(x===null||x.length<v)&&(x=new Float32Array(v));for(let C=0,M=g;C!==S;++C,M+=4)a.copy(_[C]).applyMatrix4(E,c),a.normal.toArray(x,M),x[M+3]=a.constant}u.value=x,u.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,x}}var Ws=4,u_=6,f_=20,d_=256,so=new Us,Tf=new ce,yh=null,vh=0,bh=0,Sh=!1,p_=new k,es=new k,Sl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,o={}){let{size:a=256,position:c=p_}=o;yh=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,s,u,c),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yh,vh,bh),this._renderer.xr.enabled=Sh,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Dn||t.mapping===Qn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yh=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:ki,format:Ci,colorSpace:pr,depthBuffer:!1},s=Ef(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(t,e,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=m_(o)),this._blurMaterial=__(o,t,e),this._ggxMaterial=g_(o,t,e)}return s}_compileMaterial(t){let e=new Le(new Ie,t);this._renderer.compile(e,so)}_sceneToCubeUV(t,e,n,s,o){let u=new ti(90,1,e,n),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,g=_.toneMapping;_.getClearColor(Tf),_.toneMapping=Oi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Le(new Ye,new Be({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,x=S.material,v=!1,E=t.background;E?E.isColor&&(x.color.copy(E),t.background=null,v=!0):(x.color.copy(Tf),v=!0);for(let C=0;C<6;C++){let M=C%3;M===0?(u.up.set(0,f[C],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x+p[C],o.y,o.z)):M===1?(u.up.set(0,0,f[C]),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y+p[C],o.z)):(u.up.set(0,f[C],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y,o.z+p[C]));let I=this._cubeSize;Xs(s,M*I,C>2?I:0,I,I),_.setRenderTarget(s),v&&_.render(S,u),_.render(t,u)}_.toneMapping=g,_.autoClear=m,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Dn||t.mapping===Qn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());let o=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=o;let c=o.uniforms;c.envMap.value=t;let u=this._cubeSize;Xs(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(a,so)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,o=this._pingPongRenderTarget,a=this._ggxMaterial,c=this._lodMeshes[n];c.material=a;let u=a.uniforms,f=n/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),_=Math.sqrt(f*f-p*p),m=f*1.25,g=_*m,{_lodMax:b}=this,S=this._sizeLods[n],x=3*S*(n>b-Ws?n-b+Ws:0),v=4*(this._cubeSize-S);u.envMap.value=t.texture,u.roughness.value=g,u.mipInt.value=b-e,Xs(o,x,v,3*S,2*S),s.setRenderTarget(o),s.render(c,so),u.envMap.value=o.texture,u.roughness.value=0,u.mipInt.value=b-n,Xs(t,x,v,3*S,2*S),s.setRenderTarget(t),s.render(c,so)}_blur(t,e,n,s){let o=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,a),this._blurPass(o,t,n,n,a)}_blurPass(t,e,n,s,o){let a=this._renderer,c=this._blurMaterial,u=this._lodMeshes[s];u.material=c;let f=c.uniforms;f.envMap.value=t.texture,f.sigma.value=o,f.mipInt.value=this._lodMax-n;let p=this._sizeLods[s],_=3*p*(s>this._lodMax-Ws?s-this._lodMax+Ws:0),m=4*(this._cubeSize-p);Xs(e,_,m,3*p,2*p),a.setRenderTarget(e),a.render(u,so)}};function m_(i){let t=[],e=[],n=i,s=i-Ws+1+u_;for(let o=0;o<s;o++){let a=Math.pow(2,n);t.push(a);let c=1/(a-2),u=-c,f=1+c,p=[u,u,f,u,f,f,u,u,f,f,u,f],_=6,m=6,g=3,b=new Float32Array(g*m*_),S=new Float32Array(g*m*_);for(let v=0;v<_;v++){let E=v%3*2/3-1,C=v>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];b.set(M,g*m*v);for(let I=0;I<m;I++){let R=p[I*2]*2-1,O=p[I*2+1]*2-1;v===0?es.set(1,O,R):v===1?es.set(-R,1,-O):v===2?es.set(-R,O,1):v===3?es.set(-1,O,-R):v===4?es.set(-R,-1,O):es.set(R,O,-1),es.toArray(S,(v*m+I)*g)}}let x=new Ie;x.setAttribute("position",new He(b,g)),x.setAttribute("outputDirection",new He(S,g)),e.push(new Le(x,null)),n>Ws&&n--}return{lodMeshes:e,sizeLods:t}}function Ef(i,t,e){let n=new fi(i,t,e);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function g_(i,t,e){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:d_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function __(i,t,e){return new li({name:"SphericalGaussianBlur",defines:{SAMPLES:f_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Af(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Cf(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Tl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ml=class extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new wr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ye(5,5,5),o=new li({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Yi});o.uniforms.tEquirect.value=e;let a=new Le(s,o),c=e.minFilter;return e.minFilter===Nn&&(e.minFilter=Xe),new Ca(1,10,this).update(t,a),e.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(o)}};function x_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(m,g=!1){return m==null?null:g?a(m):o(m)}function o(m){if(m&&m.isTexture){let g=m.mapping;if(g===La||g===Da)if(t.has(m)){let b=t.get(m).texture;return c(b,m.mapping)}else{let b=m.image;if(b&&b.height>0){let S=new Ml(b.height);return S.fromEquirectangularTexture(i,m),t.set(m,S),m.addEventListener("dispose",f),c(S.texture,m.mapping)}else return null}}return m}function a(m){if(m&&m.isTexture){let g=m.mapping,b=g===La||g===Da,S=g===Dn||g===Qn;if(b||S){let x=e.get(m),v=x!==void 0?x.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==v)return n===null&&(n=new Sl(i)),x=b?n.fromEquirectangular(m,x):n.fromCubemap(m,x),x.texture.pmremVersion=m.pmremVersion,e.set(m,x),x.texture;if(x!==void 0)return x.texture;{let E=m.image;return b&&E&&E.height>0||S&&E&&u(E)?(n===null&&(n=new Sl(i)),x=b?n.fromEquirectangular(m):n.fromCubemap(m),x.texture.pmremVersion=m.pmremVersion,e.set(m,x),m.addEventListener("dispose",p),x.texture):null}}}return m}function c(m,g){return g===La?m.mapping=Dn:g===Da&&(m.mapping=Qn),m}function u(m){let g=0,b=6;for(let S=0;S<b;S++)m[S]!==void 0&&g++;return g===b}function f(m){let g=m.target;g.removeEventListener("dispose",f);let b=t.get(g);b!==void 0&&(t.delete(g),b.dispose())}function p(m){let g=m.target;g.removeEventListener("dispose",p);let b=e.get(g);b!==void 0&&(e.delete(g),b.dispose())}function _(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:_}}function y_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Wn("WebGLRenderer: "+n+" extension not supported."),s}}}function v_(i,t,e,n){let s={},o=new WeakMap;function a(_){let m=_.target;m.index!==null&&t.remove(m.index);for(let b in m.attributes)t.remove(m.attributes[b]);m.removeEventListener("dispose",a),delete s[m.id];let g=o.get(m);g&&(t.remove(g),o.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(_,m){return s[m.id]===!0||(m.addEventListener("dispose",a),s[m.id]=!0,e.memory.geometries++),m}function u(_){let m=_.attributes;for(let g in m)t.update(m[g],i.ARRAY_BUFFER)}function f(_){let m=[],g=_.index,b=_.attributes.position,S=0;if(b===void 0)return;if(g!==null){let E=g.array;S=g.version;for(let C=0,M=E.length;C<M;C+=3){let I=E[C+0],R=E[C+1],O=E[C+2];m.push(I,R,R,O,O,I)}}else{let E=b.array;S=b.version;for(let C=0,M=E.length/3-1;C<M;C+=3){let I=C+0,R=C+1,O=C+2;m.push(I,R,R,O,O,I)}}let x=new(b.count>=65535?Sr:br)(m,1);x.version=S;let v=o.get(_);v&&t.remove(v),o.set(_,x)}function p(_){let m=o.get(_);if(m){let g=_.index;g!==null&&m.version<g.version&&f(_)}else f(_);return o.get(_)}return{get:c,update:u,getWireframeAttribute:p}}function b_(i,t,e){let n;function s(_){n=_}let o,a;function c(_){o=_.type,a=_.bytesPerElement}function u(_,m){i.drawElements(n,m,o,_*a),e.update(m,n,1)}function f(_,m,g){g!==0&&(i.drawElementsInstanced(n,m,o,_*a,g),e.update(m,n,g))}function p(_,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,_,0,g);let S=0;for(let x=0;x<g;x++)S+=m[x];e.update(S,n,1)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function S_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,c){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=c*(o/3);break;case i.LINES:e.lines+=c*(o/2);break;case i.LINE_STRIP:e.lines+=c*(o-1);break;case i.LINE_LOOP:e.lines+=c*o;break;case i.POINTS:e.points+=c*o;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function M_(i,t,e){let n=new WeakMap,s=new we;function o(a,c,u){let f=a.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=p!==void 0?p.length:0,m=n.get(c);if(m===void 0||m.count!==_){let D=function(){O.dispose(),n.delete(c),c.removeEventListener("dispose",D)};m!==void 0&&m.texture.dispose();let g=c.morphAttributes.position!==void 0,b=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],v=c.morphAttributes.normal||[],E=c.morphAttributes.color||[],C=0;g===!0&&(C=1),b===!0&&(C=2),S===!0&&(C=3);let M=c.attributes.position.count*C,I=1;M>t.maxTextureSize&&(I=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let R=new Float32Array(M*I*4*_),O=new xr(R,M,I,_);O.type=Ui,O.needsUpdate=!0;let A=C*4;for(let U=0;U<_;U++){let N=x[U],G=v[U],H=E[U],B=M*I*4*U;for(let W=0;W<N.count;W++){let K=W*A;g===!0&&(s.fromBufferAttribute(N,W),R[B+K+0]=s.x,R[B+K+1]=s.y,R[B+K+2]=s.z,R[B+K+3]=0),b===!0&&(s.fromBufferAttribute(G,W),R[B+K+4]=s.x,R[B+K+5]=s.y,R[B+K+6]=s.z,R[B+K+7]=0),S===!0&&(s.fromBufferAttribute(H,W),R[B+K+8]=s.x,R[B+K+9]=s.y,R[B+K+10]=s.z,R[B+K+11]=H.itemSize===4?s.w:1)}}m={count:_,texture:O,size:new _t(M,I)},n.set(c,m),c.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let S=0;S<f.length;S++)g+=f[S];let b=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",b),u.getUniforms().setValue(i,"morphTargetInfluences",f)}u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:o}}function w_(i,t,e,n,s){let o=new WeakMap;function a(f){let p=s.render.frame,_=f.geometry,m=t.get(f,_);if(o.get(m)!==p&&(t.update(m),o.set(m,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),o.get(f)!==p&&(e.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,i.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){let g=f.skeleton;o.get(g)!==p&&(g.update(),o.set(g,p))}return m}function c(){o=new WeakMap}function u(f){let p=f.target;p.removeEventListener("dispose",u),n.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:a,dispose:c}}var T_={[Yc]:"LINEAR_TONE_MAPPING",[qc]:"REINHARD_TONE_MAPPING",[$c]:"CINEON_TONE_MAPPING",[Zc]:"ACES_FILMIC_TONE_MAPPING",[Kc]:"AGX_TONE_MAPPING",[jc]:"NEUTRAL_TONE_MAPPING",[Jc]:"CUSTOM_TONE_MAPPING"};function E_(i,t,e,n,s,o){let a=new fi(t,e,{type:i,depthBuffer:s,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,u=null,f=new Ie;f.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new xe([0,2,0,0,2,0],2));let p=new pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Le(f,p),m=new Us(-1,1,1,-1,0,1),g=null,b=null,S=!1,x,v=null,E=[],C=!1;this.setSize=function(M,I){a.setSize(M,I),c!==null&&c.setSize(M,I),u!==null&&u.setSize(M,I);for(let R=0;R<E.length;R++){let O=E[R];O.setSize&&O.setSize(M,I)}},this.setEffects=function(M){E=M,C=E.length>0&&E[0].isRenderPass===!0;let I=a.width,R=a.height;E.length>0&&c===null&&(c=new fi(I,R,{type:ki,depthBuffer:!1,stencilBuffer:!1}),u=new fi(I,R,{type:ki,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<E.length;O++){let A=E[O];A.setSize&&A.setSize(I,R)}},this.begin=function(M,I){if(S||M.toneMapping===Oi&&E.length===0)return!1;if(v=I,I!==null){let R=I.width,O=I.height;(a.width!==R||a.height!==O)&&this.setSize(R,O)}return C===!1&&M.setRenderTarget(a),x=M.toneMapping,M.toneMapping=Oi,!0},this.hasRenderPass=function(){return C},this.end=function(M,I){M.toneMapping=x,S=!0;let R=a,O=c;for(let A=0;A<E.length;A++){let D=E[A];D.enabled!==!1&&(D.render(M,O,R,I),D.needsSwap!==!1&&(R=O,O=O===c?u:c))}if(g!==M.outputColorSpace||b!==M.toneMapping){g=M.outputColorSpace,b=M.toneMapping,p.defines={},me.getTransfer(g)===Me&&(p.defines.SRGB_TRANSFER="");let A=T_[b];A&&(p.defines[A]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=R.texture,M.setRenderTarget(v),M.render(_,m),v=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),c!==null&&c.dispose(),u!==null&&u.dispose(),f.dispose(),p.dispose()}}var $f=new ai,Th=new wn(1,1),Zf=new xr,Jf=new oa,Kf=new wr,Pf=[],If=[],Rf=new Float32Array(16),Lf=new Float32Array(9),Df=new Float32Array(4);function qs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,o=Pf[s];if(o===void 0&&(o=new Float32Array(s),Pf[s]=o),t!==0){n.toArray(o,0);for(let a=1,c=0;a!==t;++a)c+=e,i[a].toArray(o,c)}return o}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function El(i,t){let e=If[t];e===void 0&&(e=new Int32Array(t),If[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function A_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function C_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function P_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function I_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function R_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Ue(e,n))return;Df.set(n),i.uniformMatrix2fv(this.addr,!1,Df),ke(e,n)}}function L_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Ue(e,n))return;Lf.set(n),i.uniformMatrix3fv(this.addr,!1,Lf),ke(e,n)}}function D_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Ue(e,n))return;Rf.set(n),i.uniformMatrix4fv(this.addr,!1,Rf),ke(e,n)}}function N_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function F_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function O_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function B_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function U_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function k_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function z_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function V_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function G_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Th.compareFunction=e.isReversedDepthBuffer()?yl:xl,o=Th):o=$f,e.setTexture2D(t||o,s)}function H_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jf,s)}function X_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Kf,s)}function W_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zf,s)}function Y_(i){switch(i){case 5126:return A_;case 35664:return C_;case 35665:return P_;case 35666:return I_;case 35674:return R_;case 35675:return L_;case 35676:return D_;case 5124:case 35670:return N_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return U_;case 36294:return k_;case 36295:return z_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return W_}}function q_(i,t){i.uniform1fv(this.addr,t)}function $_(i,t){let e=qs(t,this.size,2);i.uniform2fv(this.addr,e)}function Z_(i,t){let e=qs(t,this.size,3);i.uniform3fv(this.addr,e)}function J_(i,t){let e=qs(t,this.size,4);i.uniform4fv(this.addr,e)}function K_(i,t){let e=qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function j_(i,t){let e=qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Q_(i,t){let e=qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function tx(i,t){i.uniform1iv(this.addr,t)}function ex(i,t){i.uniform2iv(this.addr,t)}function ix(i,t){i.uniform3iv(this.addr,t)}function nx(i,t){i.uniform4iv(this.addr,t)}function sx(i,t){i.uniform1uiv(this.addr,t)}function rx(i,t){i.uniform2uiv(this.addr,t)}function ox(i,t){i.uniform3uiv(this.addr,t)}function ax(i,t){i.uniform4uiv(this.addr,t)}function lx(i,t,e){let n=this.cache,s=t.length,o=El(e,s);Ue(n,o)||(i.uniform1iv(this.addr,o),ke(n,o));let a;this.type===i.SAMPLER_2D_SHADOW?a=Th:a=$f;for(let c=0;c!==s;++c)e.setTexture2D(t[c]||a,o[c])}function cx(i,t,e){let n=this.cache,s=t.length,o=El(e,s);Ue(n,o)||(i.uniform1iv(this.addr,o),ke(n,o));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jf,o[a])}function hx(i,t,e){let n=this.cache,s=t.length,o=El(e,s);Ue(n,o)||(i.uniform1iv(this.addr,o),ke(n,o));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Kf,o[a])}function ux(i,t,e){let n=this.cache,s=t.length,o=El(e,s);Ue(n,o)||(i.uniform1iv(this.addr,o),ke(n,o));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Zf,o[a])}function fx(i){switch(i){case 5126:return q_;case 35664:return $_;case 35665:return Z_;case 35666:return J_;case 35674:return K_;case 35675:return j_;case 35676:return Q_;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return ix;case 35669:case 35673:return nx;case 5125:return sx;case 36294:return rx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return ux}}var Eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Y_(e.type)}},Ah=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fx(e.type)}},Ch=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let o=0,a=s.length;o!==a;++o){let c=s[o];c.setValue(t,e[c.id],n)}}},Mh=/(\w+)(\])?(\[|\.)?/g;function Nf(i,t){i.seq.push(t),i.map[t.id]=t}function dx(i,t,e){let n=i.name,s=n.length;for(Mh.lastIndex=0;;){let o=Mh.exec(n),a=Mh.lastIndex,c=o[1],u=o[2]==="]",f=o[3];if(u&&(c=c|0),f===void 0||f==="["&&a+2===s){Nf(e,f===void 0?new Eh(c,i,t):new Ah(c,i,t));break}else{let _=e.map[c];_===void 0&&(_=new Ch(c),Nf(e,_)),e=_}}}var Ys=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let c=t.getActiveUniform(e,a),u=t.getUniformLocation(e,c.name);dx(c,u,this)}let s=[],o=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):o.push(a);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,n,s){let o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,a=e.length;o!==a;++o){let c=e[o],u=n[c.id];u.needsUpdate!==!1&&c.setValue(t,u.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,o=t.length;s!==o;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ff(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var px=37297,mx=0;function gx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=s;a<o;a++){let c=a+1;n.push(`${c===t?">":" "} ${c}: ${e[a]}`)}return n.join(`
`)}var Of=new ae;function _x(i){me._getMatrix(Of,me.workingColorSpace,i);let t=`mat3( ${Of.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case mr:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let a=/ERROR: 0:(\d+)/.exec(o);if(a){let c=parseInt(a[1]);return e.toUpperCase()+`

`+o+`

`+gx(i.getShaderSource(t),c)}else return o}function xx(i,t){let e=_x(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var yx={[Yc]:"Linear",[qc]:"Reinhard",[$c]:"Cineon",[Zc]:"ACESFilmic",[Kc]:"AgX",[jc]:"Neutral",[Jc]:"Custom"};function vx(i,t){let e=yx[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var bl=new k;function bx(){me.getLuminanceCoefficients(bl);let i=bl.x.toFixed(4),t=bl.y.toFixed(4),e=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function Mx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let o=i.getActiveAttrib(t,s),a=o.name,c=1;o.type===i.FLOAT_MAT2&&(c=2),o.type===i.FLOAT_MAT3&&(c=3),o.type===i.FLOAT_MAT4&&(c=4),e[a]={type:o.type,location:i.getAttribLocation(t,a),locationSize:c}}return e}function oo(i){return i!==""}function Uf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(i){return i.replace(Tx,Ax)}var Ex=new Map;function Ax(i,t){let e=de[t];if(e===void 0){let n=Ex.get(t);if(n!==void 0)e=de[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ph(e)}var Cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zf(i){return i.replace(Cx,Px)}function Px(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Vf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Ix={[Yr]:"SHADOWMAP_TYPE_PCF",[zs]:"SHADOWMAP_TYPE_VSM"};function Rx(i){return Ix[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lx={[Dn]:"ENVMAP_TYPE_CUBE",[Qn]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE_UV"};function Dx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Lx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Nx={[Qn]:"ENVMAP_MODE_REFRACTION"};function Fx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Nx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ox={[Wc]:"ENVMAP_BLENDING_MULTIPLY",[ef]:"ENVMAP_BLENDING_MIX",[nf]:"ENVMAP_BLENDING_ADD"};function Bx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ox[i.combine]||"ENVMAP_BLENDING_NONE"}function Ux(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function kx(i,t,e,n){let s=i.getContext(),o=e.defines,a=e.vertexShader,c=e.fragmentShader,u=Rx(e),f=Dx(e),p=Fx(e),_=Bx(e),m=Ux(e),g=Sx(e),b=Mx(o),S=s.createProgram(),x,v,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(oo).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(oo).join(`
`),v.length>0&&(v+=`
`)):(x=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),v=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?de.tonemapping_pars_fragment:"",e.toneMapping!==Oi?vx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,xx("linearToOutputTexel",e.outputColorSpace),bx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oo).join(`
`)),a=Ph(a),a=Uf(a,e),a=kf(a,e),c=Ph(c),c=Uf(c,e),c=kf(c,e),a=zf(a),c=zf(c),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",e.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let C=E+x+a,M=E+v+c,I=Ff(s,s.VERTEX_SHADER,C),R=Ff(s,s.FRAGMENT_SHADER,M);s.attachShader(S,I),s.attachShader(S,R),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function O(N){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(S)||"",H=s.getShaderInfoLog(I)||"",B=s.getShaderInfoLog(R)||"",W=G.trim(),K=H.trim(),J=B.trim(),at=!0,tt=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,I,R);else{let nt=Bf(s,I,"vertex"),st=Bf(s,R,"fragment");ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+nt+`
`+st)}else W!==""?Qt("WebGLProgram: Program Info Log:",W):(K===""||J==="")&&(tt=!1);tt&&(N.diagnostics={runnable:at,programLog:W,vertexShader:{log:K,prefix:x},fragmentShader:{log:J,prefix:v}})}s.deleteShader(I),s.deleteShader(R),A=new Ys(s,S),D=wx(s,S)}let A;this.getUniforms=function(){return A===void 0&&O(this),A};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(S,px)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mx++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=I,this.fragmentShader=R,this}var zx=0,Ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Rh(t),e.set(t,n)),n}},Rh=class{constructor(t){this.id=zx++,this.code=t,this.usedTimes=0}};function Vx(i){return i===On||i===to||i===eo}function Gx(i,t,e,n,s,o){let a=new Rs,c=new Ih,u=new Set,f=[],p=new Map,_=n.logarithmicDepthBuffer,m=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return u.add(A),A===0?"uv":`uv${A}`}function S(A,D,U,N,G,H){let B=N.fog,W=G.geometry,K=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?N.environment:null,J=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,at=t.get(A.envMap||K,J),tt=at&&at.mapping===qr?at.image.height:null,nt=g[A.type];A.precision!==null&&(m=n.getMaxPrecision(A.precision),m!==A.precision&&Qt("WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));let st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Tt=st!==void 0?st.length:0,Et=0;W.morphAttributes.position!==void 0&&(Et=1),W.morphAttributes.normal!==void 0&&(Et=2),W.morphAttributes.color!==void 0&&(Et=3);let $t,ne,ge,lt;if(nt){let Ae=ci[nt];$t=Ae.vertexShader,ne=Ae.fragmentShader}else{$t=A.vertexShader,ne=A.fragmentShader;let Ae=c.getVertexShaderStage(A),ve=c.getFragmentShaderStage(A);c.update(A,Ae,ve),ge=Ae.id,lt=ve.id}let dt=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),jt=G.isInstancedMesh===!0,Ft=G.isBatchedMesh===!0,te=!!A.map,Se=!!A.matcap,pt=!!at,xt=!!A.aoMap,yt=!!A.lightMap,vt=!!A.bumpMap&&A.wireframe===!1,Mt=!!A.normalMap,Kt=!!A.displacementMap,Zt=!!A.emissiveMap,ee=!!A.metalnessMap,se=!!A.roughnessMap,X=A.anisotropy>0,ye=A.clearcoat>0,pe=A.dispersion>0,F=A.retroreflectivity>0,T=A.iridescence>0,Z=A.sheen>0,et=A.transmission>0,rt=X&&!!A.anisotropyMap,bt=ye&&!!A.clearcoatMap,St=ye&&!!A.clearcoatNormalMap,ot=ye&&!!A.clearcoatRoughnessMap,ft=T&&!!A.iridescenceMap,Pt=T&&!!A.iridescenceThicknessMap,Gt=Z&&!!A.sheenColorMap,Dt=Z&&!!A.sheenRoughnessMap,At=!!A.specularMap,Xt=!!A.specularColorMap,Jt=!!A.specularIntensityMap,le=et&&!!A.transmissionMap,q=et&&!!A.thicknessMap,It=!!A.gradientMap,ut=!!A.alphaMap,Rt=A.alphaTest>0,Ut=!!A.alphaHash,mt=!!A.extensions,qt=Oi;A.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(qt=i.toneMapping);let Vt={shaderID:nt,shaderType:A.type,shaderName:A.name,vertexShader:$t,fragmentShader:ne,defines:A.defines,customVertexShaderID:ge,customFragmentShaderID:lt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:Ft,batchingColor:Ft&&G._colorsTexture!==null,instancing:jt,instancingColor:jt&&G.instanceColor!==null,instancingMorph:jt&&G.morphTexture!==null,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:te,matcap:Se,envMap:pt,envMapMode:pt&&at.mapping,envMapCubeUVHeight:tt,aoMap:xt,lightMap:yt,bumpMap:vt,normalMap:Mt,displacementMap:Kt,emissiveMap:Zt,normalMapObjectSpace:Mt&&A.normalMapType===of,normalMapTangentSpace:Mt&&A.normalMapType===_l,packedNormalMap:Mt&&A.normalMapType===_l&&Vx(A.normalMap.format),metalnessMap:ee,roughnessMap:se,anisotropy:X,anisotropyMap:rt,clearcoat:ye,clearcoatMap:bt,clearcoatNormalMap:St,clearcoatRoughnessMap:ot,dispersion:pe,retroreflection:F,iridescence:T,iridescenceMap:ft,iridescenceThicknessMap:Pt,sheen:Z,sheenColorMap:Gt,sheenRoughnessMap:Dt,specularMap:At,specularColorMap:Xt,specularIntensityMap:Jt,transmission:et,transmissionMap:le,thicknessMap:q,gradientMap:It,opaque:A.transparent===!1&&A.blending===Vs&&A.alphaToCoverage===!1,alphaMap:ut,alphaTest:Rt,alphaHash:Ut,combine:A.combine,mapUv:te&&b(A.map.channel),aoMapUv:xt&&b(A.aoMap.channel),lightMapUv:yt&&b(A.lightMap.channel),bumpMapUv:vt&&b(A.bumpMap.channel),normalMapUv:Mt&&b(A.normalMap.channel),displacementMapUv:Kt&&b(A.displacementMap.channel),emissiveMapUv:Zt&&b(A.emissiveMap.channel),metalnessMapUv:ee&&b(A.metalnessMap.channel),roughnessMapUv:se&&b(A.roughnessMap.channel),anisotropyMapUv:rt&&b(A.anisotropyMap.channel),clearcoatMapUv:bt&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:St&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&b(A.sheenRoughnessMap.channel),specularMapUv:At&&b(A.specularMap.channel),specularColorMapUv:Xt&&b(A.specularColorMap.channel),specularIntensityMapUv:Jt&&b(A.specularIntensityMap.channel),transmissionMapUv:le&&b(A.transmissionMap.channel),thicknessMapUv:q&&b(A.thicknessMap.channel),alphaMapUv:ut&&b(A.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Mt||X),vertexNormals:!!W.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(te||ut),fog:!!B,useFog:A.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||W.attributes.normal===void 0&&Mt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Nt,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Et,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:te&&A.map.isVideoTexture===!0&&me.getTransfer(A.map.colorSpace)===Me,decodeVideoTextureEmissive:Zt&&A.emissiveMap.isVideoTexture===!0&&me.getTransfer(A.emissiveMap.colorSpace)===Me,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===pi,flipSided:A.side===qe,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:mt&&A.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&A.extensions.multiDraw===!0||Ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Vt.vertexUv1s=u.has(1),Vt.vertexUv2s=u.has(2),Vt.vertexUv3s=u.has(3),u.clear(),Vt}function x(A){let D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(let U in A.defines)D.push(U),D.push(A.defines[U]);return A.isRawShaderMaterial===!1&&(v(D,A),E(D,A),D.push(i.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function v(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numSunLights),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numSunLightShadows),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function E(A,D){a.disableAll(),D.instancing&&a.enable(0),D.instancingColor&&a.enable(1),D.instancingMorph&&a.enable(2),D.matcap&&a.enable(3),D.envMap&&a.enable(4),D.normalMapObjectSpace&&a.enable(5),D.normalMapTangentSpace&&a.enable(6),D.clearcoat&&a.enable(7),D.iridescence&&a.enable(8),D.alphaTest&&a.enable(9),D.vertexColors&&a.enable(10),D.vertexAlphas&&a.enable(11),D.vertexUv1s&&a.enable(12),D.vertexUv2s&&a.enable(13),D.vertexUv3s&&a.enable(14),D.vertexTangents&&a.enable(15),D.anisotropy&&a.enable(16),D.alphaHash&&a.enable(17),D.batching&&a.enable(18),D.dispersion&&a.enable(19),D.retroreflection&&a.enable(24),D.batchingColor&&a.enable(20),D.gradientMap&&a.enable(21),D.packedNormalMap&&a.enable(22),D.vertexNormals&&a.enable(23),A.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.reversedDepthBuffer&&a.enable(4),D.skinning&&a.enable(5),D.morphTargets&&a.enable(6),D.morphNormals&&a.enable(7),D.morphColors&&a.enable(8),D.premultipliedAlpha&&a.enable(9),D.shadowMapEnabled&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.opaque&&a.enable(17),D.pointsUvs&&a.enable(18),D.decodeVideoTexture&&a.enable(19),D.decodeVideoTextureEmissive&&a.enable(20),D.alphaToCoverage&&a.enable(21),D.numLightProbeGrids>0&&a.enable(22),D.hasPositionAttribute&&a.enable(23),A.push(a.mask)}function C(A){let D=g[A.type],U;if(D){let N=ci[D];U=no.clone(N.uniforms)}else U=A.uniforms;return U}function M(A,D){let U=p.get(D);return U!==void 0?++U.usedTimes:(U=new kx(i,D,A,s),f.push(U),p.set(D,U)),U}function I(A){if(--A.usedTimes===0){let D=f.indexOf(A);f[D]=f[f.length-1],f.pop(),p.delete(A.cacheKey),A.destroy()}}function R(A){c.remove(A)}function O(){c.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:C,acquireProgram:M,releaseProgram:I,releaseShaderCache:R,programs:f,dispose:O}}function Hx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let c=i.get(a);return c===void 0&&(c={},i.set(a,c)),c}function n(a){i.delete(a)}function s(a,c,u){i.get(a)[c]=u}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Xx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Gf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hf(){let i=[],t=0,e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function a(m){let g=0;return m.isInstancedMesh&&(g+=2),m.isSkinnedMesh&&(g+=1),g}function c(m,g,b,S,x,v){let E=i[t];return E===void 0?(E={id:m.id,object:m,geometry:g,material:b,materialVariant:a(m),groupOrder:S,renderOrder:m.renderOrder,z:x,group:v},i[t]=E):(E.id=m.id,E.object=m,E.geometry=g,E.material=b,E.materialVariant=a(m),E.groupOrder=S,E.renderOrder=m.renderOrder,E.z=x,E.group=v),t++,E}function u(m,g,b,S,x,v,E){E.reversedDepth===!0&&(x=-x);let C=c(m,g,b,S,x,v);b.transmission>0?n.push(C):b.transparent===!0?s.push(C):e.push(C)}function f(m,g,b,S,x,v){let E=c(m,g,b,S,x,v);b.transmission>0?n.unshift(E):b.transparent===!0?s.unshift(E):e.unshift(E)}function p(m,g){e.length>1&&e.sort(m||Xx),n.length>1&&n.sort(g||Gf),s.length>1&&s.sort(g||Gf)}function _(){for(let m=t,g=i.length;m<g;m++){let b=i[m];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:u,unshift:f,finish:_,sort:p}}function Wx(){let i=new WeakMap;function t(n,s){let o=i.get(n),a;return o===void 0?(a=new Hf,i.set(n,[a])):s>=o.length?(a=new Hf,o.push(a)):a=o[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Yx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new ce};break;case"SpotLight":e={position:new k,direction:new k,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function qx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var $x=0;function Zx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Jx(i){let t=new Yx,e=qx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new k);let s=new k,o=new _e,a=new _e;function c(f){let p=0,_=0,m=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let g=0,b=0,S=0,x=0,v=0,E=0,C=0,M=0,I=0,R=0,O=0,A=0,D=0,U=0;f.sort(Zx);for(let G=0,H=f.length;G<H;G++){let B=f[G],W=B.color,K=B.intensity,J=B.distance,at=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===On?at=B.shadow.map.texture:at=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)p+=W.r*K,_+=W.g*K,m+=W.b*K;else if(B.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(B.sh.coefficients[tt],K);U++}else if(B.isSunLight){let tt=t.get(B);if(tt.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let nt=B.shadow,st=e.get(B);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[b]=st,n.sunShadowMap[b]=at;let Tt=nt.getViewportCount();for(let Et=0;Et<Tt;Et++)n.sunShadowMatrix[S+Et]=nt.getMatrix(Et),n.sunShadowCascade[S+Et]=nt._cascadeData[Et];S+=Tt,b++}n.sun[g]=tt,g++}else if(B.isDirectionalLight){let tt=t.get(B);if(tt.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let nt=B.shadow,st=e.get(B);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,n.directionalShadow[x]=st,n.directionalShadowMap[x]=at,n.directionalShadowMatrix[x]=B.shadow.matrix,I++}n.directional[x]=tt,x++}else if(B.isSpotLight){let tt=t.get(B);tt.position.setFromMatrixPosition(B.matrixWorld),tt.color.copy(W).multiplyScalar(K),tt.distance=J,tt.coneCos=Math.cos(B.angle),tt.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),tt.decay=B.decay,n.spot[E]=tt;let nt=B.shadow;if(B.map&&(n.spotLightMap[A]=B.map,A++,nt.updateMatrices(B),B.castShadow&&D++),n.spotLightMatrix[E]=nt.matrix,B.castShadow){let st=e.get(B);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,n.spotShadow[E]=st,n.spotShadowMap[E]=at,O++}E++}else if(B.isRectAreaLight){let tt=t.get(B);tt.color.copy(W).multiplyScalar(K),tt.halfWidth.set(B.width*.5,0,0),tt.halfHeight.set(0,B.height*.5,0),n.rectArea[C]=tt,C++}else if(B.isPointLight){let tt=t.get(B);if(tt.color.copy(B.color).multiplyScalar(B.intensity),tt.distance=B.distance,tt.decay=B.decay,B.castShadow){let nt=B.shadow,st=e.get(B);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,st.shadowCameraNear=nt.camera.near,st.shadowCameraFar=nt.camera.far,n.pointShadow[v]=st,n.pointShadowMap[v]=at,n.pointShadowMatrix[v]=B.shadow.matrix,R++}n.point[v]=tt,v++}else if(B.isHemisphereLight){let tt=t.get(B);tt.skyColor.copy(B.color).multiplyScalar(K),tt.groundColor.copy(B.groundColor).multiplyScalar(K),n.hemi[M]=tt,M++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=_,n.ambient[2]=m;let N=n.hash;(N.sunLength!==g||N.directionalLength!==x||N.pointLength!==v||N.spotLength!==E||N.rectAreaLength!==C||N.hemiLength!==M||N.numSunShadows!==b||N.numDirectionalShadows!==I||N.numPointShadows!==R||N.numSpotShadows!==O||N.numSpotMaps!==A||N.numLightProbes!==U)&&(n.sun.length=g,n.directional.length=x,n.spot.length=E,n.rectArea.length=C,n.point.length=v,n.hemi.length=M,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=O,n.spotShadowMap.length=O,n.spotLightMatrix.length=O+A-D,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=U,N.sunLength=g,N.directionalLength=x,N.pointLength=v,N.spotLength=E,N.rectAreaLength=C,N.hemiLength=M,N.numSunShadows=b,N.numDirectionalShadows=I,N.numPointShadows=R,N.numSpotShadows=O,N.numSpotMaps=A,N.numLightProbes=U,n.version=$x++)}function u(f,p){let _=0,m=0,g=0,b=0,S=0,x=0,v=p.matrixWorldInverse;for(let E=0,C=f.length;E<C;E++){let M=f[E];if(M.isSunLight){let I=n.sun[_];I.direction.setFromMatrixPosition(M.matrixWorld),I.direction.transformDirection(v),_++}else if(M.isDirectionalLight){let I=n.directional[m];I.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(v),m++}else if(M.isSpotLight){let I=n.spot[b];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(v),I.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(v),b++}else if(M.isRectAreaLight){let I=n.rectArea[S];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(v),a.identity(),o.copy(M.matrixWorld),o.premultiply(v),a.extractRotation(o),I.halfWidth.set(M.width*.5,0,0),I.halfHeight.set(0,M.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){let I=n.point[g];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(v),g++}else if(M.isHemisphereLight){let I=n.hemi[x];I.direction.setFromMatrixPosition(M.matrixWorld),I.direction.transformDirection(v),x++}}}return{setup:c,setupView:u,state:n}}function Xf(i){let t=new Jx(i),e=[],n=[],s=[];function o(m){_.camera=m,e.length=0,n.length=0,s.length=0}function a(m){e.push(m)}function c(m){n.push(m)}function u(m){s.push(m)}function f(){t.setup(e)}function p(m){t.setupView(e,m)}let _={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:_,setupLights:f,setupLightsView:p,pushLight:a,pushShadow:c,pushLightProbeGrid:u}}function Kx(i){let t=new WeakMap;function e(s,o=0){let a=t.get(s),c;return a===void 0?(c=new Xf(i),t.set(s,[c])):o>=a.length?(c=new Xf(i),a.push(c)):c=a[o],c}function n(){t=new WeakMap}return{get:e,dispose:n}}var jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qx=`uniform sampler2D shadow_pass;
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
}`,ty=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],ey=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Wf=new _e,ro=new k,wh=new k;function iy(i,t,e){let n=new Ns,s=new _t,o=new _t,a=new we,c=new ma,u=new ga,f={},p=e.maxTextureSize,_={[Ln]:qe,[qe]:Ln,[pi]:pi},m=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:jx,fragmentShader:Qx}),g=m.clone();g.defines.HORIZONTAL_PASS=1;let b=new Ie;b.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Le(b,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yr;let v=this.type;this.render=function(R,O,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;this.type===Ou&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Yr);let D=i.getRenderTarget(),U=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Yi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let H=v!==this.type;H&&O.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(W=>W.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,W=R.length;B<W;B++){let K=R[B],J=K.shadow;if(J===void 0){Qt("WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let at=J.getFrameExtents();s.multiply(at),o.copy(J.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/at.x),s.x=o.x*at.x,J.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/at.y),s.y=o.y*at.y,J.mapSize.y=o.y));let tt=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=tt,J.map===null||H===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===zs){if(K.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new fi(s.x,s.y,{format:On,type:ki,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),J.map.texture.name=K.name+".shadowMap",J.map.depthTexture=new wn(s.x,s.y,Ui),J.map.depthTexture.name=K.name+".shadowMapDepth",J.map.depthTexture.format=Wi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Oe,J.map.depthTexture.magFilter=Oe}else K.isPointLight?(J.map=new Ml(s.x),J.map.depthTexture=new aa(s.x,Bi)):(J.map=new fi(s.x,s.y),J.map.depthTexture=new wn(s.x,s.y,Bi)),J.map.depthTexture.name=K.name+".shadowMap",J.map.depthTexture.format=Wi,this.type===Yr?(J.map.depthTexture.compareFunction=tt?yl:xl,J.map.depthTexture.minFilter=Xe,J.map.depthTexture.magFilter=Xe):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Oe,J.map.depthTexture.magFilter=Oe);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let nt=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();K.isPointLight!==!0&&J.updateMatrices(K,A);for(let st=0;st<nt;st++){let Tt=J.getCamera(st);if(K.isPointLight){let Et=J.camera,$t=J.matrix,ne=K.distance||Et.far;ne!==Et.far&&(Et.far=ne,Et.updateProjectionMatrix()),ro.setFromMatrixPosition(K.matrixWorld),Et.position.copy(ro),wh.copy(Et.position),wh.add(ty[st]),Et.up.copy(ey[st]),Et.lookAt(wh),Et.updateMatrixWorld(),$t.makeTranslation(-ro.x,-ro.y,-ro.z),Wf.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Wf,Et.coordinateSystem,Et.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,st),i.clear();else{st===0&&(i.setRenderTarget(J.map),i.clear());let Et=J.getViewport(st);a.set(o.x*Et.x,o.y*Et.y,o.x*Et.z,o.y*Et.w),G.viewport(a)}n=J.getFrustum(st),M(O,A,Tt,K,this.type)}J.isPointLightShadow!==!0&&this.type===zs&&E(J,A),J.needsUpdate=!1}v=this.type,x.needsUpdate=!1,i.setRenderTarget(D,U,N)};function E(R,O){let A=t.update(S);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null?R.mapPass=new fi(s.x,s.y,{format:On,type:ki}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),m.uniforms.shadow_pass.value=R.map.depthTexture,m.uniforms.resolution.value.set(R.map.width,R.map.height),m.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(O,null,A,m,S,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value.set(R.map.width,R.map.height),g.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(O,null,A,g,S,null)}function C(R,O,A,D){let U=null,N=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)U=N;else if(U=A.isPointLight===!0?u:c,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let G=U.uuid,H=O.uuid,B=f[G];B===void 0&&(B={},f[G]=B);let W=B[H];W===void 0&&(W=U.clone(),B[H]=W,O.addEventListener("dispose",I)),U=W}if(U.visible=O.visible,U.wireframe=O.wireframe,D===zs?U.side=O.shadowSide!==null?O.shadowSide:O.side:U.side=O.shadowSide!==null?O.shadowSide:_[O.side],U.alphaMap=O.alphaMap,U.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,U.map=O.map,U.clipShadows=O.clipShadows,U.clippingPlanes=O.clippingPlanes,U.clipIntersection=O.clipIntersection,U.displacementMap=O.displacementMap,U.displacementScale=O.displacementScale,U.displacementBias=O.displacementBias,U.wireframeLinewidth=O.wireframeLinewidth,U.linewidth=O.linewidth,A.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let G=i.properties.get(U);G.light=A}return U}function M(R,O,A,D,U){if(R.visible===!1)return;if(R.layers.test(O.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&U===zs)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);let H=t.update(R),B=R.material;if(Array.isArray(B)){let W=H.groups;for(let K=0,J=W.length;K<J;K++){let at=W[K],tt=B[at.materialIndex];if(tt&&tt.visible){let nt=C(R,tt,D,U);R.onBeforeShadow(i,R,O,A,H,nt,at),i.renderBufferDirect(A,null,H,nt,R,at),R.onAfterShadow(i,R,O,A,H,nt,at)}}}else if(B.visible){let W=C(R,B,D,U);R.onBeforeShadow(i,R,O,A,H,W,null),i.renderBufferDirect(A,null,H,W,R,null),R.onAfterShadow(i,R,O,A,H,W,null)}}let G=R.children;for(let H=0,B=G.length;H<B;H++)M(G[H],O,A,D,U)}function I(R){R.target.removeEventListener("dispose",I);for(let A in f){let D=f[A],U=R.target.uuid;U in D&&(D[U].dispose(),delete D[U])}}}function ny(i,t){function e(){let q=!1,It=new we,ut=null,Rt=new we(0,0,0,0);return{setMask:function(Ut){ut!==Ut&&!q&&(i.colorMask(Ut,Ut,Ut,Ut),ut=Ut)},setLocked:function(Ut){q=Ut},setClear:function(Ut,mt,qt,Vt,Ae){Ae===!0&&(Ut*=Vt,mt*=Vt,qt*=Vt),It.set(Ut,mt,qt,Vt),Rt.equals(It)===!1&&(i.clearColor(Ut,mt,qt,Vt),Rt.copy(It))},reset:function(){q=!1,ut=null,Rt.set(-1,0,0,0)}}}function n(){let q=!1,It=!1,ut=null,Rt=null,Ut=null;return{setReversed:function(mt){if(It!==mt){let qt=t.get("EXT_clip_control");mt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),It=mt;let Vt=Ut;Ut=null,this.setClear(Vt)}},getReversed:function(){return It},setTest:function(mt){mt?dt(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(mt){ut!==mt&&!q&&(i.depthMask(mt),ut=mt)},setFunc:function(mt){if(It&&(mt=_f[mt]),Rt!==mt){switch(mt){case Zo:i.depthFunc(i.NEVER);break;case Jo:i.depthFunc(i.ALWAYS);break;case Ko:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case jo:i.depthFunc(i.EQUAL);break;case Qo:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Rt=mt}},setLocked:function(mt){q=mt},setClear:function(mt){Ut!==mt&&(Ut=mt,It&&(mt=1-mt),i.clearDepth(mt))},reset:function(){q=!1,ut=null,Rt=null,Ut=null,It=!1}}}function s(){let q=!1,It=null,ut=null,Rt=null,Ut=null,mt=null,qt=null,Vt=null,Ae=null;return{setTest:function(ve){q||(ve?dt(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(ve){It!==ve&&!q&&(i.stencilMask(ve),It=ve)},setFunc:function(ve,xi,Ti){(ut!==ve||Rt!==xi||Ut!==Ti)&&(i.stencilFunc(ve,xi,Ti),ut=ve,Rt=xi,Ut=Ti)},setOp:function(ve,xi,Ti){(mt!==ve||qt!==xi||Vt!==Ti)&&(i.stencilOp(ve,xi,Ti),mt=ve,qt=xi,Vt=Ti)},setLocked:function(ve){q=ve},setClear:function(ve){Ae!==ve&&(i.clearStencil(ve),Ae=ve)},reset:function(){q=!1,It=null,ut=null,Rt=null,Ut=null,mt=null,qt=null,Vt=null,Ae=null}}}let o=new e,a=new n,c=new s,u=new WeakMap,f=new WeakMap,p={},_={},m={},g=new WeakMap,b=[],S=null,x=!1,v=null,E=null,C=null,M=null,I=null,R=null,O=null,A=new ce(0,0,0),D=0,U=!1,N=null,G=null,H=null,B=null,W=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,at=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(tt)[1]),J=at>=1):tt.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),J=at>=2);let nt=null,st={},Tt=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),$t=new we().fromArray(Tt),ne=new we().fromArray(Et);function ge(q,It,ut,Rt){let Ut=new Uint8Array(4),mt=i.createTexture();i.bindTexture(q,mt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<ut;qt++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(It,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(It+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return mt}let lt={};lt[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),c.setClear(0),dt(i.DEPTH_TEST),a.setFunc(Es),vt(!1),Mt(kc),dt(i.CULL_FACE),xt(Yi);function dt(q){p[q]!==!0&&(i.enable(q),p[q]=!0)}function Nt(q){p[q]!==!1&&(i.disable(q),p[q]=!1)}function jt(q,It){return m[q]!==It?(i.bindFramebuffer(q,It),m[q]=It,q===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=It),q===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=It),!0):!1}function Ft(q,It){let ut=b,Rt=!1;if(q){ut=g.get(It),ut===void 0&&(ut=[],g.set(It,ut));let Ut=q.textures;if(ut.length!==Ut.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,qt=Ut.length;mt<qt;mt++)ut[mt]=i.COLOR_ATTACHMENT0+mt;ut.length=Ut.length,Rt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,Rt=!0);Rt&&i.drawBuffers(ut)}function te(q){return S!==q?(i.useProgram(q),S=q,!0):!1}let Se={[jn]:i.FUNC_ADD,[Uu]:i.FUNC_SUBTRACT,[ku]:i.FUNC_REVERSE_SUBTRACT};Se[zu]=i.MIN,Se[Vu]=i.MAX;let pt={[Gu]:i.ZERO,[Hu]:i.ONE,[Xu]:i.SRC_COLOR,[Hc]:i.SRC_ALPHA,[Ju]:i.SRC_ALPHA_SATURATE,[$u]:i.DST_COLOR,[Yu]:i.DST_ALPHA,[Wu]:i.ONE_MINUS_SRC_COLOR,[Xc]:i.ONE_MINUS_SRC_ALPHA,[Zu]:i.ONE_MINUS_DST_COLOR,[qu]:i.ONE_MINUS_DST_ALPHA,[Ku]:i.CONSTANT_COLOR,[ju]:i.ONE_MINUS_CONSTANT_COLOR,[Qu]:i.CONSTANT_ALPHA,[tf]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(q,It,ut,Rt,Ut,mt,qt,Vt,Ae,ve){if(q===Yi){x===!0&&(Nt(i.BLEND),x=!1);return}if(x===!1&&(dt(i.BLEND),x=!0),q!==Bu){if(q!==v||ve!==U){if((E!==jn||I!==jn)&&(i.blendEquation(i.FUNC_ADD),E=jn,I=jn),ve)switch(q){case Vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zc:i.blendFunc(i.ONE,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ie("WebGLState: Invalid blending: ",q);break}else switch(q){case Vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vc:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gc:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",q);break}C=null,M=null,R=null,O=null,A.set(0,0,0),D=0,v=q,U=ve}return}Ut=Ut||It,mt=mt||ut,qt=qt||Rt,(It!==E||Ut!==I)&&(i.blendEquationSeparate(Se[It],Se[Ut]),E=It,I=Ut),(ut!==C||Rt!==M||mt!==R||qt!==O)&&(i.blendFuncSeparate(pt[ut],pt[Rt],pt[mt],pt[qt]),C=ut,M=Rt,R=mt,O=qt),(Vt.equals(A)===!1||Ae!==D)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Ae),A.copy(Vt),D=Ae),v=q,U=!1}function yt(q,It){q.side===pi?Nt(i.CULL_FACE):dt(i.CULL_FACE);let ut=q.side===qe;It&&(ut=!ut),vt(ut),q.blending===Vs&&q.transparent===!1?xt(Yi):xt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),o.setMask(q.colorWrite);let Rt=q.stencilWrite;c.setTest(Rt),Rt&&(c.setMask(q.stencilWriteMask),c.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),c.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Zt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(q){N!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),N=q)}function Mt(q){q!==Nu?(dt(i.CULL_FACE),q!==G&&(q===kc?i.cullFace(i.BACK):q===Fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),G=q}function Kt(q){q!==H&&(J&&i.lineWidth(q),H=q)}function Zt(q,It,ut){q?(dt(i.POLYGON_OFFSET_FILL),(B!==It||W!==ut)&&(B=It,W=ut,a.getReversed()&&(It=-It),i.polygonOffset(It,ut))):Nt(i.POLYGON_OFFSET_FILL)}function ee(q){q?dt(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function se(q){q===void 0&&(q=i.TEXTURE0+K-1),nt!==q&&(i.activeTexture(q),nt=q)}function X(q,It,ut){ut===void 0&&(nt===null?ut=i.TEXTURE0+K-1:ut=nt);let Rt=st[ut];Rt===void 0&&(Rt={type:void 0,texture:void 0},st[ut]=Rt),(Rt.type!==q||Rt.texture!==It)&&(nt!==ut&&(i.activeTexture(ut),nt=ut),i.bindTexture(q,It||lt[q]),Rt.type=q,Rt.texture=It)}function ye(){let q=st[nt];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(q){ie("WebGLState:",q)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(q){ie("WebGLState:",q)}}function T(){try{i.texSubImage2D(...arguments)}catch(q){ie("WebGLState:",q)}}function Z(){try{i.texSubImage3D(...arguments)}catch(q){ie("WebGLState:",q)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(q){ie("WebGLState:",q)}}function rt(){try{i.compressedTexSubImage3D(...arguments)}catch(q){ie("WebGLState:",q)}}function bt(){try{i.texStorage2D(...arguments)}catch(q){ie("WebGLState:",q)}}function St(){try{i.texStorage3D(...arguments)}catch(q){ie("WebGLState:",q)}}function ot(){try{i.texImage2D(...arguments)}catch(q){ie("WebGLState:",q)}}function ft(){try{i.texImage3D(...arguments)}catch(q){ie("WebGLState:",q)}}function Pt(q){return _[q]!==void 0?_[q]:i.getParameter(q)}function Gt(q,It){_[q]!==It&&(i.pixelStorei(q,It),_[q]=It)}function Dt(q){$t.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),$t.copy(q))}function At(q){ne.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),ne.copy(q))}function Xt(q,It){let ut=f.get(It);ut===void 0&&(ut=new WeakMap,f.set(It,ut));let Rt=ut.get(q);Rt===void 0&&(Rt=i.getUniformBlockIndex(It,q.name),ut.set(q,Rt))}function Jt(q,It){let Rt=f.get(It).get(q);u.get(It)!==Rt&&(i.uniformBlockBinding(It,Rt,q.__bindingPointIndex),u.set(It,Rt))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),p={},_={},nt=null,st={},m={},g=new WeakMap,b=[],S=null,x=!1,v=null,E=null,C=null,M=null,I=null,R=null,O=null,A=new ce(0,0,0),D=0,U=!1,N=null,G=null,H=null,B=null,W=null,$t.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),o.reset(),a.reset(),c.reset()}return{buffers:{color:o,depth:a,stencil:c},enable:dt,disable:Nt,bindFramebuffer:jt,drawBuffers:Ft,useProgram:te,setBlending:xt,setMaterial:yt,setFlipSided:vt,setCullFace:Mt,setLineWidth:Kt,setPolygonOffset:Zt,setScissorTest:ee,activeTexture:se,bindTexture:X,unbindTexture:ye,compressedTexImage2D:pe,compressedTexImage3D:F,texImage2D:ot,texImage3D:ft,pixelStorei:Gt,getParameter:Pt,updateUBOMapping:Xt,uniformBlockBinding:Jt,texStorage2D:bt,texStorage3D:St,texSubImage2D:T,texSubImage3D:Z,compressedTexSubImage2D:et,compressedTexSubImage3D:rt,scissor:Dt,viewport:At,reset:le}}function sy(i,t,e,n,s,o,a){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new _t,p=new WeakMap,_=new Set,m,g=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(F,T){return b?new OffscreenCanvas(F,T):gr("canvas")}function x(F,T,Z){let et=1,rt=pe(F);if((rt.width>Z||rt.height>Z)&&(et=Z/Math.max(rt.width,rt.height)),et<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let bt=Math.floor(et*rt.width),St=Math.floor(et*rt.height);m===void 0&&(m=S(bt,St));let ot=T?S(bt,St):m;return ot.width=bt,ot.height=St,ot.getContext("2d").drawImage(F,0,0,bt,St),Qt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+bt+"x"+St+")."),ot}else return"data"in F&&Qt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),F;return F}function v(F){return F.generateMipmaps}function E(F){i.generateMipmap(F)}function C(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(F,T,Z,et,rt,bt=!1){if(F!==null){if(i[F]!==void 0)return i[F];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let St;et&&(St=t.get("EXT_texture_norm16"),St||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=T;if(T===i.RED&&(Z===i.FLOAT&&(ot=i.R32F),Z===i.HALF_FLOAT&&(ot=i.R16F),Z===i.UNSIGNED_BYTE&&(ot=i.R8),Z===i.UNSIGNED_SHORT&&St&&(ot=St.R16_EXT),Z===i.SHORT&&St&&(ot=St.R16_SNORM_EXT)),T===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ot=i.R8UI),Z===i.UNSIGNED_SHORT&&(ot=i.R16UI),Z===i.UNSIGNED_INT&&(ot=i.R32UI),Z===i.BYTE&&(ot=i.R8I),Z===i.SHORT&&(ot=i.R16I),Z===i.INT&&(ot=i.R32I)),T===i.RG&&(Z===i.FLOAT&&(ot=i.RG32F),Z===i.HALF_FLOAT&&(ot=i.RG16F),Z===i.UNSIGNED_BYTE&&(ot=i.RG8),Z===i.UNSIGNED_SHORT&&St&&(ot=St.RG16_EXT),Z===i.SHORT&&St&&(ot=St.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ot=i.RG8UI),Z===i.UNSIGNED_SHORT&&(ot=i.RG16UI),Z===i.UNSIGNED_INT&&(ot=i.RG32UI),Z===i.BYTE&&(ot=i.RG8I),Z===i.SHORT&&(ot=i.RG16I),Z===i.INT&&(ot=i.RG32I)),T===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),Z===i.UNSIGNED_INT&&(ot=i.RGB32UI),Z===i.BYTE&&(ot=i.RGB8I),Z===i.SHORT&&(ot=i.RGB16I),Z===i.INT&&(ot=i.RGB32I)),T===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),Z===i.UNSIGNED_INT&&(ot=i.RGBA32UI),Z===i.BYTE&&(ot=i.RGBA8I),Z===i.SHORT&&(ot=i.RGBA16I),Z===i.INT&&(ot=i.RGBA32I)),T===i.RGB&&(Z===i.UNSIGNED_SHORT&&St&&(ot=St.RGB16_EXT),Z===i.SHORT&&St&&(ot=St.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),T===i.RGBA){let ft=bt?mr:me.getTransfer(rt);Z===i.FLOAT&&(ot=i.RGBA32F),Z===i.HALF_FLOAT&&(ot=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(ot=ft===Me?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&St&&(ot=St.RGBA16_EXT),Z===i.SHORT&&St&&(ot=St.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function I(F,T){let Z;return F?T===null||T===Bi||T===Hs?Z=i.DEPTH24_STENCIL8:T===Ui?Z=i.DEPTH32F_STENCIL8:T===Gs&&(Z=i.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Bi||T===Hs?Z=i.DEPTH_COMPONENT24:T===Ui?Z=i.DEPTH_COMPONENT32F:T===Gs&&(Z=i.DEPTH_COMPONENT16),Z}function R(F,T){return v(F)===!0||F.isFramebufferTexture&&F.minFilter!==Oe&&F.minFilter!==Xe?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function O(F){let T=F.target;T.removeEventListener("dispose",O),D(T),T.isVideoTexture&&p.delete(T),T.isHTMLTexture&&_.delete(T)}function A(F){let T=F.target;T.removeEventListener("dispose",A),N(T)}function D(F){let T=n.get(F);if(T.__webglInit===void 0)return;let Z=F.source,et=g.get(Z);if(et){let rt=et[T.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&U(F),Object.keys(et).length===0&&g.delete(Z)}n.remove(F)}function U(F){let T=n.get(F);i.deleteTexture(T.__webglTexture);let Z=F.source,et=g.get(Z);delete et[T.__cacheKey],a.memory.textures--}function N(F){let T=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(T.__webglFramebuffer[et]))for(let rt=0;rt<T.__webglFramebuffer[et].length;rt++)i.deleteFramebuffer(T.__webglFramebuffer[et][rt]);else i.deleteFramebuffer(T.__webglFramebuffer[et]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[et])}else{if(Array.isArray(T.__webglFramebuffer))for(let et=0;et<T.__webglFramebuffer.length;et++)i.deleteFramebuffer(T.__webglFramebuffer[et]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let et=0;et<T.__webglColorRenderbuffer.length;et++)T.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[et]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let Z=F.textures;for(let et=0,rt=Z.length;et<rt;et++){let bt=n.get(Z[et]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),a.memory.textures--),n.remove(Z[et])}n.remove(F)}let G=0;function H(){G=0}function B(){return G}function W(F){G=F}function K(){let F=G;return F>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,F}function J(F){let T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function at(F,T){let Z=n.get(F);if(F.isVideoTexture&&X(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Z.__version!==F.version){let et=F.image;if(et===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(Z,F,T);return}}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+T)}function tt(F,T){let Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){Nt(Z,F,T);return}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+T)}function nt(F,T){let Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){Nt(Z,F,T);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+T)}function st(F,T){let Z=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Z.__version!==F.version){jt(Z,F,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+T)}let Tt={[Yn]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},Et={[Oe]:i.NEAREST,[sf]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Na]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},$t={[lf]:i.NEVER,[df]:i.ALWAYS,[cf]:i.LESS,[xl]:i.LEQUAL,[hf]:i.EQUAL,[yl]:i.GEQUAL,[uf]:i.GREATER,[ff]:i.NOTEQUAL};function ne(F,T){if(T.type===Ui&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Xe||T.magFilter===Na||T.magFilter===$r||T.magFilter===Nn||T.minFilter===Xe||T.minFilter===Na||T.minFilter===$r||T.minFilter===Nn)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Tt[T.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Tt[T.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Tt[T.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Et[T.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Et[T.minFilter]),T.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,$t[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Oe||T.minFilter!==$r&&T.minFilter!==Nn||T.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ge(F,T){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",O));let et=T.source,rt=g.get(et);rt===void 0&&(rt={},g.set(et,rt));let bt=J(T);if(bt!==F.__cacheKey){rt[bt]===void 0&&(rt[bt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),rt[bt].usedTimes++;let St=rt[F.__cacheKey];St!==void 0&&(rt[F.__cacheKey].usedTimes--,St.usedTimes===0&&U(T)),F.__cacheKey=bt,F.__webglTexture=rt[bt].texture}return Z}function lt(F,T,Z){return Math.floor(Math.floor(F/Z)/T)}function dt(F,T,Z,et){let bt=F.updateRanges;if(bt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,Z,et,T.data);else{bt.sort((Gt,Dt)=>Gt.start-Dt.start);let St=0;for(let Gt=1;Gt<bt.length;Gt++){let Dt=bt[St],At=bt[Gt],Xt=Dt.start+Dt.count,Jt=lt(At.start,T.width,4),le=lt(Dt.start,T.width,4);At.start<=Xt+1&&Jt===le&&lt(At.start+At.count-1,T.width,4)===Jt?Dt.count=Math.max(Dt.count,At.start+At.count-Dt.start):(++St,bt[St]=At)}bt.length=St+1;let ot=e.getParameter(i.UNPACK_ROW_LENGTH),ft=e.getParameter(i.UNPACK_SKIP_PIXELS),Pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Gt=0,Dt=bt.length;Gt<Dt;Gt++){let At=bt[Gt],Xt=Math.floor(At.start/4),Jt=Math.ceil(At.count/4),le=Xt%T.width,q=Math.floor(Xt/T.width),It=Jt,ut=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,le),e.pixelStorei(i.UNPACK_SKIP_ROWS,q),e.texSubImage2D(i.TEXTURE_2D,0,le,q,It,ut,Z,et,T.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ot),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function Nt(F,T,Z){let et=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(et=i.TEXTURE_3D);let rt=ge(F,T),bt=T.source;e.bindTexture(et,F.__webglTexture,i.TEXTURE0+Z);let St=n.get(bt);if(bt.version!==St.__version||rt===!0){if(e.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ut=me.getPrimaries(me.workingColorSpace),Rt=T.colorSpace===fn?null:me.getPrimaries(T.colorSpace),Ut=T.colorSpace===fn||ut===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let ft=x(T.image,!1,s.maxTextureSize);ft=ye(T,ft);let Pt=o.convert(T.format,T.colorSpace),Gt=o.convert(T.type),Dt=M(T.internalFormat,Pt,Gt,T.normalized,T.colorSpace,T.isVideoTexture);ne(et,T);let At,Xt=T.mipmaps,Jt=T.isVideoTexture!==!0,le=St.__version===void 0||rt===!0,q=bt.dataReady,It=R(T,ft);if(T.isDepthTexture)Dt=I(T.format===Fn,T.type),le&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,Dt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Dt,ft.width,ft.height,0,Pt,Gt,null));else if(T.isDataTexture)if(Xt.length>0){Jt&&le&&e.texStorage2D(i.TEXTURE_2D,It,Dt,Xt[0].width,Xt[0].height);for(let ut=0,Rt=Xt.length;ut<Rt;ut++)At=Xt[ut],Jt?q&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,At.width,At.height,Pt,Gt,At.data):e.texImage2D(i.TEXTURE_2D,ut,Dt,At.width,At.height,0,Pt,Gt,At.data);T.generateMipmaps=!1}else Jt?(le&&e.texStorage2D(i.TEXTURE_2D,It,Dt,ft.width,ft.height),q&&dt(T,ft,Pt,Gt)):e.texImage2D(i.TEXTURE_2D,0,Dt,ft.width,ft.height,0,Pt,Gt,ft.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Jt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Dt,Xt[0].width,Xt[0].height,ft.depth);for(let ut=0,Rt=Xt.length;ut<Rt;ut++)if(At=Xt[ut],T.format!==Ci)if(Pt!==null)if(Jt){if(q)if(T.layerUpdates.size>0){let Ut=dh(At.width,At.height,T.format,T.type);for(let mt of T.layerUpdates){let qt=At.data.subarray(mt*Ut/At.data.BYTES_PER_ELEMENT,(mt+1)*Ut/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,mt,At.width,At.height,1,Pt,qt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,At.width,At.height,ft.depth,Pt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Dt,At.width,At.height,ft.depth,0,At.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,At.width,At.height,ft.depth,Pt,Gt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Dt,At.width,At.height,ft.depth,0,Pt,Gt,At.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Jt&&le&&e.texStorage2D(i.TEXTURE_2D,It,Dt,Xt[0].width,Xt[0].height);for(let ut=0,Rt=Xt.length;ut<Rt;ut++)At=Xt[ut],T.format!==Ci?Pt!==null?Jt?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,At.width,At.height,Pt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Dt,At.width,At.height,0,At.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?q&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,At.width,At.height,Pt,Gt,At.data):e.texImage2D(i.TEXTURE_2D,ut,Dt,At.width,At.height,0,Pt,Gt,At.data)}else if(T.isDataArrayTexture)if(Jt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Dt,ft.width,ft.height,ft.depth),q)if(T.layerUpdates.size>0){let ut=dh(ft.width,ft.height,T.format,T.type);for(let Rt of T.layerUpdates){let Ut=ft.data.subarray(Rt*ut/ft.data.BYTES_PER_ELEMENT,(Rt+1)*ut/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Rt,ft.width,ft.height,1,Pt,Gt,Ut)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Pt,Gt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,ft.width,ft.height,ft.depth,0,Pt,Gt,ft.data);else if(T.isData3DTexture)Jt?(le&&e.texStorage3D(i.TEXTURE_3D,It,Dt,ft.width,ft.height,ft.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Pt,Gt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,ft.width,ft.height,ft.depth,0,Pt,Gt,ft.data);else if(T.isFramebufferTexture){if(le)if(Jt)e.texStorage2D(i.TEXTURE_2D,It,Dt,ft.width,ft.height);else{let ut=ft.width,Rt=ft.height;for(let Ut=0;Ut<It;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Dt,ut,Rt,0,Pt,Gt,null),ut>>=1,Rt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let ut=i.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),ft.parentNode!==ut){ut.appendChild(ft),_.add(T),ut.onpaint=Rt=>{let Ut=Rt.changedElements;for(let mt of _)Ut.includes(mt.image)&&(mt.needsUpdate=!0)},ut.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ft);else{let Ut=i.RGBA,mt=i.RGBA,qt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ut,mt,qt,ft)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(Jt&&le){let ut=pe(Xt[0]);e.texStorage2D(i.TEXTURE_2D,It,Dt,ut.width,ut.height)}for(let ut=0,Rt=Xt.length;ut<Rt;ut++)At=Xt[ut],Jt?q&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Pt,Gt,At):e.texImage2D(i.TEXTURE_2D,ut,Dt,Pt,Gt,At);T.generateMipmaps=!1}else if(Jt){if(le){let ut=pe(ft);e.texStorage2D(i.TEXTURE_2D,It,Dt,ut.width,ut.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Gt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Dt,Pt,Gt,ft);v(T)&&E(et),St.__version=bt.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function jt(F,T,Z){if(T.image.length!==6)return;let et=ge(F,T),rt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+Z);let bt=n.get(rt);if(rt.version!==bt.__version||et===!0){e.activeTexture(i.TEXTURE0+Z);let St=me.getPrimaries(me.workingColorSpace),ot=T.colorSpace===fn?null:me.getPrimaries(T.colorSpace),ft=T.colorSpace===fn||St===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Pt=T.isCompressedTexture||T.image[0].isCompressedTexture,Gt=T.image[0]&&T.image[0].isDataTexture,Dt=[];for(let mt=0;mt<6;mt++)!Pt&&!Gt?Dt[mt]=x(T.image[mt],!0,s.maxCubemapSize):Dt[mt]=Gt?T.image[mt].image:T.image[mt],Dt[mt]=ye(T,Dt[mt]);let At=Dt[0],Xt=o.convert(T.format,T.colorSpace),Jt=o.convert(T.type),le=M(T.internalFormat,Xt,Jt,T.normalized,T.colorSpace),q=T.isVideoTexture!==!0,It=bt.__version===void 0||et===!0,ut=rt.dataReady,Rt=R(T,At);ne(i.TEXTURE_CUBE_MAP,T);let Ut;if(Pt){q&&It&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,le,At.width,At.height);for(let mt=0;mt<6;mt++){Ut=Dt[mt].mipmaps;for(let qt=0;qt<Ut.length;qt++){let Vt=Ut[qt];T.format!==Ci?Xt!==null?q?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,qt,0,0,Vt.width,Vt.height,Xt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,qt,le,Vt.width,Vt.height,0,Vt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,qt,0,0,Vt.width,Vt.height,Xt,Jt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,qt,le,Vt.width,Vt.height,0,Xt,Jt,Vt.data)}}}else{if(Ut=T.mipmaps,q&&It){Ut.length>0&&Rt++;let mt=pe(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,le,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Gt){q?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Dt[mt].width,Dt[mt].height,Xt,Jt,Dt[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,le,Dt[mt].width,Dt[mt].height,0,Xt,Jt,Dt[mt].data);for(let qt=0;qt<Ut.length;qt++){let Ae=Ut[qt].image[mt].image;q?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,qt+1,0,0,Ae.width,Ae.height,Xt,Jt,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,qt+1,le,Ae.width,Ae.height,0,Xt,Jt,Ae.data)}}else{q?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Xt,Jt,Dt[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,le,Xt,Jt,Dt[mt]);for(let qt=0;qt<Ut.length;qt++){let Vt=Ut[qt];q?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,qt+1,0,0,Xt,Jt,Vt.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,qt+1,le,Xt,Jt,Vt.image[mt])}}}v(T)&&E(i.TEXTURE_CUBE_MAP),bt.__version=rt.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function Ft(F,T,Z,et,rt,bt){let St=o.convert(Z.format,Z.colorSpace),ot=o.convert(Z.type),ft=M(Z.internalFormat,St,ot,Z.normalized,Z.colorSpace),Pt=n.get(T),Gt=n.get(Z);if(Gt.__renderTarget=T,!Pt.__hasExternalTextures){let Dt=Math.max(1,T.width>>bt),At=Math.max(1,T.height>>bt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,bt,ft,Dt,At,T.depth,0,St,ot,null):e.texImage2D(rt,bt,ft,Dt,At,0,St,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),se(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,rt,Gt.__webglTexture,0,ee(T)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,rt,Gt.__webglTexture,bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(F,T,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,F),T.depthBuffer){let et=T.depthTexture,rt=et&&et.isDepthTexture?et.type:null,bt=I(T.stencilBuffer,rt),St=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;se(T)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee(T),bt,T.width,T.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee(T),bt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,bt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,F)}else{let et=T.textures;for(let rt=0;rt<et.length;rt++){let bt=et[rt],St=o.convert(bt.format,bt.colorSpace),ot=o.convert(bt.type),ft=M(bt.internalFormat,St,ot,bt.normalized,bt.colorSpace);se(T)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee(T),ft,T.width,T.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee(T),ft,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ft,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(F,T,Z){let et=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=n.get(T.depthTexture);if(rt.__renderTarget=T,(!rt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),et){if(rt.__webglInit===void 0&&(rt.__webglInit=!0,T.depthTexture.addEventListener("dispose",O)),rt.__webglTexture===void 0){rt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),ne(i.TEXTURE_CUBE_MAP,T.depthTexture);let Pt=o.convert(T.depthTexture.format),Gt=o.convert(T.depthTexture.type),Dt;T.depthTexture.format===Wi?Dt=i.DEPTH_COMPONENT24:T.depthTexture.format===Fn&&(Dt=i.DEPTH24_STENCIL8);for(let At=0;At<6;At++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Dt,T.width,T.height,0,Pt,Gt,null)}}else at(T.depthTexture,0);let bt=rt.__webglTexture,St=ee(T),ot=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,ft=T.depthTexture.format===Fn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Wi)se(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,ot,bt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,ft,ot,bt,0);else if(T.depthTexture.format===Fn)se(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,ot,bt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,ft,ot,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(F){let T=n.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){let et=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),et){let rt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,et.removeEventListener("dispose",rt)};et.addEventListener("dispose",rt),T.__depthDisposeCallback=rt}T.__boundDepthTexture=et}if(F.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let et=0;et<6;et++)Se(T.__webglFramebuffer[et],F,et);else{let et=F.texture.mipmaps;et&&et.length>0?Se(T.__webglFramebuffer[0],F,0):Se(T.__webglFramebuffer,F,0)}else if(Z){T.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[et]),T.__webglDepthbuffer[et]===void 0)T.__webglDepthbuffer[et]=i.createRenderbuffer(),te(T.__webglDepthbuffer[et],F,!1);else{let rt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=T.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,bt)}}else{let et=F.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),te(T.__webglDepthbuffer,F,!1);else{let rt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,bt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(F,T,Z){let et=n.get(F);T!==void 0&&Ft(et.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&pt(F)}function yt(F){let T=F.texture,Z=n.get(F),et=n.get(T);F.addEventListener("dispose",A);let rt=F.textures,bt=F.isWebGLCubeRenderTarget===!0,St=rt.length>1;if(St||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=T.version,a.memory.textures++),bt){Z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[ot]=[];for(let ft=0;ft<T.mipmaps.length;ft++)Z.__webglFramebuffer[ot][ft]=i.createFramebuffer()}else Z.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ot=0;ot<T.mipmaps.length;ot++)Z.__webglFramebuffer[ot]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(St)for(let ot=0,ft=rt.length;ot<ft;ot++){let Pt=n.get(rt[ot]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&se(F)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ot=0;ot<rt.length;ot++){let ft=rt[ot];Z.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[ot]);let Pt=o.convert(ft.format,ft.colorSpace),Gt=o.convert(ft.type),Dt=M(ft.internalFormat,Pt,Gt,ft.normalized,ft.colorSpace,F.isXRRenderTarget===!0),At=ee(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Dt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,Z.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),te(Z.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(bt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),ne(i.TEXTURE_CUBE_MAP,T);for(let ot=0;ot<6;ot++)if(T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)Ft(Z.__webglFramebuffer[ot][ft],F,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else Ft(Z.__webglFramebuffer[ot],F,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);v(T)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ot=0,ft=rt.length;ot<ft;ot++){let Pt=rt[ot],Gt=n.get(Pt),Dt=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Dt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Dt,Gt.__webglTexture),ne(Dt,Pt),Ft(Z.__webglFramebuffer,F,Pt,i.COLOR_ATTACHMENT0+ot,Dt,0),v(Pt)&&E(Dt)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ot=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,et.__webglTexture),ne(ot,T),T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)Ft(Z.__webglFramebuffer[ft],F,T,i.COLOR_ATTACHMENT0,ot,ft);else Ft(Z.__webglFramebuffer,F,T,i.COLOR_ATTACHMENT0,ot,0);v(T)&&E(ot),e.unbindTexture()}F.depthBuffer&&pt(F)}function vt(F){let T=F.textures;for(let Z=0,et=T.length;Z<et;Z++){let rt=T[Z];if(v(rt)){let bt=C(F),St=n.get(rt).__webglTexture;e.bindTexture(bt,St),E(bt),e.unbindTexture()}}}let Mt=[],Kt=[];function Zt(F){if(F.samples>0){if(se(F)===!1){let T=F.textures,Z=F.width,et=F.height,rt=i.COLOR_BUFFER_BIT,bt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(F),ot=T.length>1;if(ot)for(let Pt=0;Pt<T.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);let ft=F.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Pt=0;Pt<T.length;Pt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[Pt]);let Gt=n.get(T[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,Z,et,0,0,Z,et,rt,i.NEAREST),u===!0&&(Mt.length=0,Kt.length=0,Mt.push(i.COLOR_ATTACHMENT0+Pt),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Mt.push(bt),Kt.push(bt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let Pt=0;Pt<T.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,St.__webglColorRenderbuffer[Pt]);let Gt=n.get(T[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&u){let T=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ee(F){return Math.min(s.maxSamples,F.samples)}function se(F){let T=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function X(F){let T=a.render.frame;p.get(F)!==T&&(p.set(F,T),F.update())}function ye(F,T){let Z=F.colorSpace,et=F.format,rt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Z!==pr&&Z!==fn&&(me.getTransfer(Z)===Me?(et!==Ci||rt!==mi)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",Z)),T}function pe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(f.width=F.naturalWidth||F.width,f.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(f.width=F.displayWidth,f.height=F.displayHeight):(f.width=F.width,f.height=F.height),f}this.allocateTextureUnit=K,this.resetTextureUnits=H,this.getTextureUnits=B,this.setTextureUnits=W,this.setTexture2D=at,this.setTexture2DArray=tt,this.setTexture3D=nt,this.setTextureCube=st,this.rebindTextures=xt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ry(i,t){function e(n,s=fn){let o,a=me.getTransfer(s);if(n===mi)return i.UNSIGNED_BYTE;if(n===Oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ba)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===th)return i.BYTE;if(n===eh)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===Fa)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===Ui)return i.FLOAT;if(n===ki)return i.HALF_FLOAT;if(n===sh)return i.ALPHA;if(n===rh)return i.RGB;if(n===Ci)return i.RGBA;if(n===Wi)return i.DEPTH_COMPONENT;if(n===Fn)return i.DEPTH_STENCIL;if(n===Zr)return i.RED;if(n===Ua)return i.RED_INTEGER;if(n===On)return i.RG;if(n===ka)return i.RG_INTEGER;if(n===za)return i.RGBA_INTEGER;if(n===Jr||n===Kr||n===jr||n===Qr)if(a===Me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Jr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Jr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Ga||n===Ha||n===Xa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Va)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wa||n===Ya||n===qa||n===$a||n===Za||n===to||n===Ja)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Wa||n===Ya)return a===Me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===qa)return a===Me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===$a)return o.COMPRESSED_R11_EAC;if(n===Za)return o.COMPRESSED_SIGNED_R11_EAC;if(n===to)return o.COMPRESSED_RG11_EAC;if(n===Ja)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ka||n===ja||n===Qa||n===tl||n===el||n===il||n===nl||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ka)return a===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ja)return a===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return a===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return a===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return a===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===il)return a===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nl)return a===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return a===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return a===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===al)return a===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return a===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return a===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return a===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ul||n===fl||n===dl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ul)return a===Me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pl||n===ml||n===eo||n===gl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===pl)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var oy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ay=`
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

}`,Lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Tr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new li({vertexShader:oy,fragmentShader:ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Le(new Fr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dh=class extends Ni{constructor(t,e){super();let n=this,s=null,o=1,a=null,c="local-floor",u=1,f=null,p=null,_=null,m=null,g=null,b=null,S=typeof XRWebGLBinding<"u",x=new Lh,v={},E=e.getContextAttributes(),C=null,M=null,I=[],R=[],O=new _t,A=null,D=null,U=new ti;U.viewport=new we;let N=new ti;N.viewport=new we;let G=[U,N],H=new Pa,B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let dt=I[lt];return dt===void 0&&(dt=new Ls,I[lt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(lt){let dt=I[lt];return dt===void 0&&(dt=new Ls,I[lt]=dt),dt.getGripSpace()},this.getHand=function(lt){let dt=I[lt];return dt===void 0&&(dt=new Ls,I[lt]=dt),dt.getHandSpace()};function K(lt){let dt=R.indexOf(lt.inputSource);if(dt===-1)return;let Nt=I[dt];Nt!==void 0&&(Nt.update(lt.inputSource,lt.frame,f||a),Nt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function J(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",at);for(let lt=0;lt<I.length;lt++){let dt=R[lt];dt!==null&&(R[lt]=null,I[lt].disconnect(dt))}B=null,W=null,x.reset();for(let lt in v)delete v[lt];if(t.setRenderTarget(C),g=null,m=null,_=null,s=null,M=null,ge.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(O.width,O.height,!1),D!==null){let lt=D.camera;lt.fov=D.fov,lt.zoom=D.zoom,lt.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){o=lt,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){c=lt,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function(lt){f=lt},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return _===null&&S&&(_=new XRWebGLBinding(s,e)),_},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",J),s.addEventListener("inputsourceschange",at),E.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(O),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,jt=null,Ft=null;E.depth&&(Ft=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Nt=E.stencil?Fn:Wi,jt=E.stencil?Hs:Bi);let te={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:o};_=this.getBinding(),m=_.createProjectionLayer(te),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),M=new fi(m.textureWidth,m.textureHeight,{format:Ci,type:mi,depthTexture:new wn(m.textureWidth,m.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let Nt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(s,e,Nt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new fi(g.framebufferWidth,g.framebufferHeight,{format:Ci,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(u),f=null,a=await s.requestReferenceSpace(c),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function at(lt){for(let dt=0;dt<lt.removed.length;dt++){let Nt=lt.removed[dt],jt=R.indexOf(Nt);jt>=0&&(R[jt]=null,I[jt].disconnect(Nt))}for(let dt=0;dt<lt.added.length;dt++){let Nt=lt.added[dt],jt=R.indexOf(Nt);if(jt===-1){for(let te=0;te<I.length;te++)if(te>=R.length){R.push(Nt),jt=te;break}else if(R[te]===null){R[te]=Nt,jt=te;break}if(jt===-1)break}let Ft=I[jt];Ft&&Ft.connect(Nt)}}let tt=new k,nt=new k;function st(lt,dt,Nt){tt.setFromMatrixPosition(dt.matrixWorld),nt.setFromMatrixPosition(Nt.matrixWorld);let jt=tt.distanceTo(nt),Ft=dt.projectionMatrix.elements,te=Nt.projectionMatrix.elements,Se=Ft[14]/(Ft[10]-1),pt=Ft[14]/(Ft[10]+1),xt=(Ft[9]+1)/Ft[5],yt=(Ft[9]-1)/Ft[5],vt=(Ft[8]-1)/Ft[0],Mt=(te[8]+1)/te[0],Kt=Se*vt,Zt=Se*Mt,ee=jt/(-vt+Mt),se=ee*-vt;if(dt.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(se),lt.translateZ(ee),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),Ft[10]===-1)lt.projectionMatrix.copy(dt.projectionMatrix),lt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{let X=Se+ee,ye=pt+ee,pe=Kt-se,F=Zt+(jt-se),T=xt*pt/ye*X,Z=yt*pt/ye*X;lt.projectionMatrix.makePerspective(pe,F,T,Z,X,ye),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function Tt(lt,dt){dt===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(dt.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let dt=lt.near,Nt=lt.far;x.texture!==null&&(x.depthNear>0&&(dt=x.depthNear),x.depthFar>0&&(Nt=x.depthFar)),H.near=N.near=U.near=dt,H.far=N.far=U.far=Nt,(B!==H.near||W!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),B=H.near,W=H.far),H.layers.mask=lt.layers.mask|6,U.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let jt=lt.parent,Ft=H.cameras;Tt(H,jt);for(let te=0;te<Ft.length;te++)Tt(Ft[te],jt);Ft.length===2?st(H,U,N):H.projectionMatrix.copy(U.projectionMatrix),D===null&&lt.isPerspectiveCamera&&(D={camera:lt,fov:lt.fov,zoom:lt.zoom}),Et(lt,H,jt)};function Et(lt,dt,Nt){Nt===null?lt.matrix.copy(dt.matrixWorld):(lt.matrix.copy(Nt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(dt.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(dt.projectionMatrix),lt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=Ps*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(lt){u=lt,m!==null&&(m.fixedFoveation=lt),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=lt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(H)},this.getCameraTexture=function(lt){return v[lt]};let $t=null;function ne(lt,dt){if(p=dt.getViewerPose(f||a),b=dt,p!==null){let Nt=p.views;g!==null&&(t.setRenderTargetFramebuffer(M,g.framebuffer),t.setRenderTarget(M));let jt=!1;Nt.length!==H.cameras.length&&(H.cameras.length=0,jt=!0);for(let pt=0;pt<Nt.length;pt++){let xt=Nt[pt],yt=null;if(g!==null)yt=g.getViewport(xt);else{let Mt=_.getViewSubImage(m,xt);yt=Mt.viewport,pt===0&&(t.setRenderTargetTextures(M,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(M))}let vt=G[pt];vt===void 0&&(vt=new ti,vt.layers.enable(pt),vt.viewport=new we,G[pt]=vt),vt.matrix.fromArray(xt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(xt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(yt.x,yt.y,yt.width,yt.height),pt===0&&(H.matrix.copy(vt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),jt===!0&&H.cameras.push(vt)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){_=n.getBinding();let pt=_.getDepthInformation(Nt[0]);pt&&pt.isValid&&pt.texture&&x.init(pt,s.renderState)}if(Ft&&Ft.includes("camera-access")&&S){t.state.unbindTexture(),_=n.getBinding();for(let pt=0;pt<Nt.length;pt++){let xt=Nt[pt].camera;if(xt){let yt=v[xt];yt||(yt=new Tr,v[xt]=yt);let vt=_.getCameraImage(xt);yt.sourceTexture=vt}}}}for(let Nt=0;Nt<I.length;Nt++){let jt=R[Nt],Ft=I[Nt];jt!==null&&Ft!==void 0&&Ft.update(jt,dt,f||a)}$t&&$t(lt,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),b=null}let ge=new Yf;ge.setAnimationLoop(ne),this.setAnimationLoop=function(lt){$t=lt},this.dispose=function(){}}},ly=new _e,jf=new ae;jf.set(-1,0,0,0,1,0,0,0,1);function cy(i,t){function e(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function n(x,v){v.color.getRGB(x.fogColor.value,hh(i)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function s(x,v,E,C,M){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?o(x,v):v.isMeshLambertMaterial?(o(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(o(x,v),_(x,v)):v.isMeshPhongMaterial?(o(x,v),p(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(o(x,v),m(x,v),v.isMeshPhysicalMaterial&&g(x,v,M)):v.isMeshMatcapMaterial?(o(x,v),b(x,v)):v.isMeshDepthMaterial?o(x,v):v.isMeshDistanceMaterial?(o(x,v),S(x,v)):v.isMeshNormalMaterial?o(x,v):v.isLineBasicMaterial?(a(x,v),v.isLineDashedMaterial&&c(x,v)):v.isPointsMaterial?u(x,v,E,C):v.isSpriteMaterial?f(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,e(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,e(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===qe&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,e(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===qe&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,e(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,e(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);let E=t.get(v),C=E.envMap,M=E.envMapRotation;C&&(x.envMap.value=C,x.envMapRotation.value.setFromMatrix4(ly.makeRotationFromEuler(M)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(jf),x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,x.aoMapTransform))}function a(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,e(v.map,x.mapTransform))}function c(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function u(x,v,E,C){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*E,x.scale.value=C*.5,v.map&&(x.map.value=v.map,e(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function f(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,e(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function _(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function m(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function g(x,v,E){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===qe&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.retroreflectivity>0&&(x.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,v){v.matcap&&(x.matcap.value=v.matcap)}function S(x,v){let E=t.get(v).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hy(i,t,e,n){let s={},o={},a=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(M,I){let R=I.program;n.uniformBlockBinding(M,R)}function f(M,I){let R=s[M.id];R===void 0&&(x(M),R=p(M),s[M.id]=R,M.addEventListener("dispose",E));let O=I.program;n.updateUBOMapping(M,O);let A=t.render.frame;o[M.id]!==A&&(m(M),o[M.id]=A)}function p(M){let I=_();M.__bindingPointIndex=I;let R=i.createBuffer(),O=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,O,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,R),R}function _(){for(let M=0;M<c;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(M){let I=s[M.id],R=M.uniforms,O=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let A=0,D=R.length;A<D;A++){let U=R[A];if(Array.isArray(U))for(let N=0,G=U.length;N<G;N++)g(U[N],A,N,O);else g(U,A,0,O)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(M,I,R,O){if(S(M,I,R,O)===!0){let A=M.__offset,D=M.value;if(Array.isArray(D)){let U=0;for(let N=0;N<D.length;N++){let G=D[N],H=v(G);b(G,M.__data,U),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(U+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(D,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,M.__data)}}function b(M,I,R){typeof M=="number"||typeof M=="boolean"?I[0]=M:M.isMatrix3?(I[0]=M.elements[0],I[1]=M.elements[1],I[2]=M.elements[2],I[3]=0,I[4]=M.elements[3],I[5]=M.elements[4],I[6]=M.elements[5],I[7]=0,I[8]=M.elements[6],I[9]=M.elements[7],I[10]=M.elements[8],I[11]=0):ArrayBuffer.isView(M)?I.set(new M.constructor(M.buffer,M.byteOffset,I.length)):M.toArray(I,R)}function S(M,I,R,O){let A=M.value,D=I+"_"+R;if(O[D]===void 0)return typeof A=="number"||typeof A=="boolean"?O[D]=A:ArrayBuffer.isView(A)?O[D]=A.slice():O[D]=A.clone(),!0;{let U=O[D];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return O[D]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(U.equals(A)===!1)return U.copy(A),!0}}return!1}function x(M){let I=M.uniforms,R=0,O=16;for(let D=0,U=I.length;D<U;D++){let N=Array.isArray(I[D])?I[D]:[I[D]];for(let G=0,H=N.length;G<H;G++){let B=N[G],W=Array.isArray(B.value)?B.value:[B.value];for(let K=0,J=W.length;K<J;K++){let at=W[K],tt=v(at),nt=R%O,st=nt%tt.boundary,Tt=nt+st;R+=st,Tt!==0&&O-Tt<tt.storage&&(R+=O-Tt),B.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=R,R+=tt.storage}}}let A=R%O;return A>0&&(R+=O-A),M.__size=R,M.__cache={},this}function v(M){let I={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(I.boundary=4,I.storage=4):M.isVector2?(I.boundary=8,I.storage=8):M.isVector3||M.isColor?(I.boundary=16,I.storage=12):M.isVector4?(I.boundary=16,I.storage=16):M.isMatrix3?(I.boundary=48,I.storage=48):M.isMatrix4?(I.boundary=64,I.storage=64):M.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(I.boundary=16,I.storage=M.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",M),I}function E(M){let I=M.target;I.removeEventListener("dispose",E);let R=a.indexOf(I.__bindingPointIndex);a.splice(R,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete o[I.id]}function C(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},o={}}return{bind:u,update:f,dispose:C}}var uy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null;function fy(){return qi===null&&(qi=new Ds(uy,16,16,On,ki),qi.name="DFG_LUT",qi.minFilter=Xe,qi.magFilter=Xe,qi.wrapS=Gi,qi.wrapT=Gi,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}var wl=class{constructor(t={}){let{canvas:e=pf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1,outputBufferType:g=mi}=t;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=a;let S=g,x=new Set([za,ka,Ua]),v=new Set([mi,Bi,Gs,Hs,Oa,Ba]),E=new Uint32Array(4),C=new Int32Array(4),M=new k,I=null,R=null,O=[],A=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,N=!1,G=null,H=null,B=null,W=null;this._outputColorSpace=Ge;let K=0,J=0,at=null,tt=-1,nt=null,st=new we,Tt=new we,Et=null,$t=new ce(0),ne=0,ge=e.width,lt=e.height,dt=1,Nt=null,jt=null,Ft=new we(0,0,ge,lt),te=new we(0,0,ge,lt),Se=!1,pt=new Ns,xt=!1,yt=!1,vt=new _e,Mt=new k,Kt=new we,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function se(){return at===null?dt:1}let X=n;function ye(P,Y){return e.getContext(P,Y)}let pe,F,T,Z,et,rt,bt,St,ot,ft,Pt,Gt,Dt,At,Xt,Jt,le,q,It,ut,Rt,Ut,mt;try{let P={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ra}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",xi,!1),X===null){let Y="webgl2";if(X=ye(Y,P),X===null)throw ye(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(P){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",xi,!1),ie("WebGLRenderer: "+P.message),P}function qt(){pe=new y_(X),pe.init(),Rt=new ry(X,pe),F=new c_(X,pe,t,Rt),T=new ny(X,pe),F.reversedDepthBuffer&&m&&T.buffers.depth.setReversed(!0),H=X.createFramebuffer(),B=X.createFramebuffer(),W=X.createFramebuffer(),Z=new S_(X),et=new Hx,rt=new sy(X,pe,T,et,F,Rt,Z),bt=new x_(U),St=new wm(X),Ut=new a_(X,St),ot=new v_(X,St,Z,Ut),ft=new w_(X,ot,St,Ut,Z),q=new M_(X,F,rt),Xt=new h_(et),Pt=new Gx(U,bt,pe,F,Ut,Xt),Gt=new cy(U,et),Dt=new Wx,At=new Kx(pe),le=new o_(U,bt,T,ft,b,u),Jt=new iy(U,ft,F),mt=new hy(X,Z,F,T),It=new l_(X,pe,Z),ut=new b_(X,pe,Z),Z.programs=Pt.programs,U.capabilities=F,U.extensions=pe,U.properties=et,U.renderLists=Dt,U.shadowMap=Jt,U.state=T,U.info=Z}S!==mi&&(D=new E_(S,e.width,e.height,c,s,o));let Vt=new Dh(U,X);this.xr=Vt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let P=pe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=pe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(P){P!==void 0&&(dt=P,this.setSize(ge,lt,!1))},this.getSize=function(P){return P.set(ge,lt)},this.setSize=function(P,Y,it=!0){if(Vt.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=P,lt=Y,e.width=Math.floor(P*dt),e.height=Math.floor(Y*dt),it===!0&&(e.style.width=P+"px",e.style.height=Y+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(ge*dt,lt*dt).floor()},this.setDrawingBufferSize=function(P,Y,it){ge=P,lt=Y,dt=it,e.width=Math.floor(P*it),e.height=Math.floor(Y*it),this.setViewport(0,0,P,Y)},this.setEffects=function(P){if(S===mi){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let Y=0;Y<P.length;Y++)if(P[Y].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(st)},this.getViewport=function(P){return P.copy(Ft)},this.setViewport=function(P,Y,it,j){P.isVector4?Ft.set(P.x,P.y,P.z,P.w):Ft.set(P,Y,it,j),T.viewport(st.copy(Ft).multiplyScalar(dt).round())},this.getScissor=function(P){return P.copy(te)},this.setScissor=function(P,Y,it,j){P.isVector4?te.set(P.x,P.y,P.z,P.w):te.set(P,Y,it,j),T.scissor(Tt.copy(te).multiplyScalar(dt).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(P){T.setScissorTest(Se=P)},this.setOpaqueSort=function(P){Nt=P},this.setTransparentSort=function(P){jt=P},this.getClearColor=function(P){return P.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(P=!0,Y=!0,it=!0){let j=0;if(P){let Q=!1;if(at!==null){let Bt=at.texture.format;Q=x.has(Bt)}if(Q){let Bt=at.texture.type,wt=v.has(Bt),Ot=le.getClearColor(),kt=le.getClearAlpha(),Ht=Ot.r,Lt=Ot.g,ue=Ot.b;wt?(E[0]=Ht,E[1]=Lt,E[2]=ue,E[3]=kt,X.clearBufferuiv(X.COLOR,0,E)):(C[0]=Ht,C[1]=Lt,C[2]=ue,C[3]=kt,X.clearBufferiv(X.COLOR,0,C))}else j|=X.COLOR_BUFFER_BIT}Y&&(j|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(j|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&X.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),G=P},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",xi,!1),le.dispose(),Dt.dispose(),At.dispose(),et.dispose(),bt.dispose(),ft.dispose(),Ut.dispose(),mt.dispose(),Pt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",fo),Vt.removeEventListener("sessionend",po),tn.stop()};function Ae(P){P.preventDefault(),_r("WebGLRenderer: Context Lost."),N=!0}function ve(){_r("WebGLRenderer: Context Restored."),N=!1;let P=Z.autoReset,Y=Jt.enabled,it=Jt.autoUpdate,j=Jt.needsUpdate,Q=Jt.type;qt(),Z.autoReset=P,Jt.enabled=Y,Jt.autoUpdate=it,Jt.needsUpdate=j,Jt.type=Q}function xi(P){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ti(P){let Y=P.target;Y.removeEventListener("dispose",Ti),$l(Y)}function $l(P){Zl(P),et.remove(P)}function Zl(P){let Y=et.get(P).programs;Y!==void 0&&(Y.forEach(function(it){Pt.releaseProgram(it)}),P.isShaderMaterial&&Pt.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,it,j,Q,Bt){Y===null&&(Y=Zt);let wt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ot=mn(P,Y,it,j,Q);T.setMaterial(j,wt);let kt=it.index,Ht=1;if(j.wireframe===!0){if(kt=ot.getWireframeAttribute(it),kt===void 0)return;Ht=2}let Lt=it.drawRange,ue=it.attributes.position,zt=Lt.start*Ht,be=(Lt.start+Lt.count)*Ht;Bt!==null&&(zt=Math.max(zt,Bt.start*Ht),be=Math.min(be,(Bt.start+Bt.count)*Ht)),kt!==null?(zt=Math.max(zt,0),be=Math.min(be,kt.count)):ue!=null&&(zt=Math.max(zt,0),be=Math.min(be,ue.count));let Ne=be-zt;if(Ne<0||Ne===1/0)return;Ut.setup(Q,j,Ot,it,kt);let Ce,r=It;if(kt!==null&&(Ce=St.get(kt),r=ut,r.setIndex(Ce)),Q.isMesh)j.wireframe===!0?(T.setLineWidth(j.wireframeLinewidth*se()),r.setMode(X.LINES)):r.setMode(X.TRIANGLES);else if(Q.isLine){let l=j.linewidth;l===void 0&&(l=1),T.setLineWidth(l*se()),Q.isLineSegments?r.setMode(X.LINES):Q.isLineLoop?r.setMode(X.LINE_LOOP):r.setMode(X.LINE_STRIP)}else Q.isPoints?r.setMode(X.POINTS):Q.isSprite&&r.setMode(X.TRIANGLES);if(Q.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))r.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let l=Q._multiDrawStarts,h=Q._multiDrawCounts,d=Q._multiDrawCount,y=kt?St.get(kt).bytesPerElement:1,w=et.get(j).currentProgram.getUniforms();for(let L=0;L<d;L++)w.setValue(X,"_gl_DrawID",L),r.render(l[L]/y,h[L])}else if(Q.isInstancedMesh)r.renderInstances(zt,Ne,Q.count);else if(it.isInstancedBufferGeometry){let l=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,h=Math.min(it.instanceCount,l);r.renderInstances(zt,Ne,h)}else r.render(zt,Ne)};function uo(P,Y,it,j){G!==null&&P.isNodeMaterial&&G.setObject(j,P),xt===!0&&Xt.setState(P,it,!1),P.transparent===!0&&P.side===pi&&P.forceSinglePass===!1?(P.side=qe,P.needsUpdate=!0,os(P,Y,j),P.side=Ln,P.needsUpdate=!0,os(P,Y,j),P.side=pi):os(P,Y,j)}this.compile=function(P,Y,it=null){it===null&&(it=P),G!==null&&G.renderStart(P,Y,it),R=At.get(it),R.init(Y),A.push(R),it.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),P!==it&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),R.setupLights(),G!==null&&G.updateLights(R.state.lightsArray),yt=this.localClippingEnabled,xt=Xt.init(this.clippingPlanes,yt),xt===!0&&Xt.setGlobalState(this.clippingPlanes,Y),G!==null&&Jt.render(R.state.shadowsArray,it,Y);let j=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Bt=Q.material;if(Bt)if(Array.isArray(Bt))for(let wt=0;wt<Bt.length;wt++){let Ot=Bt[wt];uo(Ot,it,Y,Q),j.add(Ot)}else uo(Bt,it,Y,Q),j.add(Bt)}),R=A.pop(),G!==null&&G.renderEnd(),j},this.compileAsync=function(P,Y,it=null){let j=this.compile(P,Y,it);return new Promise(Q=>{function Bt(){if(j.forEach(function(wt){let kt=et.get(wt).currentProgram;(kt===void 0||kt.isReady())&&j.delete(wt)}),j.size===0){Q(P);return}setTimeout(Bt,10)}pe.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let nr=null;function Jl(P){nr&&nr(P)}function fo(){tn.stop()}function po(){tn.start()}let tn=new Yf;tn.setAnimationLoop(Jl),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(P){nr=P,Vt.setAnimationLoop(P),P===null?tn.stop():tn.start()},Vt.addEventListener("sessionstart",fo),Vt.addEventListener("sessionend",po),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;G!==null&&G.renderStart(P,Y);let it=Vt.enabled===!0&&Vt.isPresenting===!0,j=D!==null&&(at===null||it)&&D.begin(U,at);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(Y),Y=Vt.getCamera()),P.isScene===!0&&P.onBeforeRender(U,P,Y,at),R=At.get(P,A.length),R.init(Y),R.state.textureUnits=rt.getTextureUnits(),A.push(R),vt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),pt.setFromProjectionMatrix(vt,Di,Y.reversedDepth),yt=this.localClippingEnabled,xt=Xt.init(this.clippingPlanes,yt),I=Dt.get(P,O.length),I.init(),O.push(I),Vt.enabled===!0&&Vt.isPresenting===!0){let wt=U.xr.getDepthSensingMesh();wt!==null&&sr(wt,Y,-1/0,U.sortObjects)}sr(P,Y,0,U.sortObjects),I.finish(),G!==null&&G.updateLights(R.state.lightsArray),U.sortObjects===!0&&I.sort(Nt,jt),ee=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,ee&&le.addToRenderList(I,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Xt.beginShadows();let Q=R.state.shadowsArray;if(Jt.render(Q,P,Y),xt===!0&&Xt.endShadows(),(j&&D.hasRenderPass())===!1){let wt=I.opaque,Ot=I.transmissive;if(R.setupLights(),Y.isArrayCamera){let kt=Y.cameras;if(Ot.length>0)for(let Ht=0,Lt=kt.length;Ht<Lt;Ht++){let ue=kt[Ht];pn(wt,Ot,P,ue)}ee&&le.render(P);for(let Ht=0,Lt=kt.length;Ht<Lt;Ht++){let ue=kt[Ht];mo(I,P,ue,ue.viewport)}}else Ot.length>0&&pn(wt,Ot,P,Y),ee&&le.render(P),mo(I,P,Y)}at!==null&&J===0&&(rt.updateMultisampleRenderTarget(at),rt.updateRenderTargetMipmap(at)),j&&D.end(U),P.isScene===!0&&P.onAfterRender(U,P,Y),Ut.resetDefaultState(),tt=-1,nt=null,A.pop(),A.length>0?(R=A[A.length-1],rt.setTextureUnits(R.state.textureUnits),xt===!0&&Xt.setGlobalState(U.clippingPlanes,R.state.camera)):R=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,G!==null&&G.renderEnd()};function sr(P,Y,it,j){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)it=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLightProbeGrid)R.pushLightProbeGrid(P);else if(P.isLight)R.pushLight(P),P.castShadow&&R.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(pt)){j&&Kt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(vt);let wt=ft.update(P),Ot=P.material;Ot.visible&&I.push(P,wt,Ot,it,Kt.z,null,Y)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(pt))){let wt=ft.update(P),Ot=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Kt.copy(P.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Kt.copy(wt.boundingSphere.center)),Kt.applyMatrix4(P.matrixWorld).applyMatrix4(vt)),Array.isArray(Ot)){let kt=wt.groups;for(let Ht=0,Lt=kt.length;Ht<Lt;Ht++){let ue=kt[Ht],zt=Ot[ue.materialIndex];zt&&zt.visible&&I.push(P,wt,zt,it,Kt.z,ue,Y)}}else Ot.visible&&I.push(P,wt,Ot,it,Kt.z,null,Y)}}let Bt=P.children;for(let wt=0,Ot=Bt.length;wt<Ot;wt++)sr(Bt[wt],Y,it,j)}function mo(P,Y,it,j){let{opaque:Q,transmissive:Bt,transparent:wt}=P;R.setupLightsView(it),xt===!0&&Xt.setGlobalState(U.clippingPlanes,it),j&&T.viewport(st.copy(j)),Q.length>0&&zn(Q,Y,it),Bt.length>0&&zn(Bt,Y,it),wt.length>0&&zn(wt,Y,it),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function pn(P,Y,it,j){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[j.id]===void 0){let zt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[j.id]=new fi(1,1,{generateMipmaps:!0,type:zt?ki:mi,minFilter:Nn,samples:Math.max(4,F.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let Bt=R.state.transmissionRenderTarget[j.id],wt=j.viewport||st;Bt.setSize(wt.z*U.transmissionResolutionScale,wt.w*U.transmissionResolutionScale);let Ot=U.getRenderTarget(),kt=U.getActiveCubeFace(),Ht=U.getActiveMipmapLevel();U.setRenderTarget(Bt),U.getClearColor($t),ne=U.getClearAlpha(),ne<1&&U.setClearColor(16777215,.5),U.clear(),ee&&le.render(it);let Lt=U.toneMapping;U.toneMapping=Oi;let ue=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),R.setupLightsView(j),xt===!0&&Xt.setGlobalState(U.clippingPlanes,j),zn(P,it,j),rt.updateMultisampleRenderTarget(Bt),rt.updateRenderTargetMipmap(Bt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let be=0,Ne=Y.length;be<Ne;be++){let Ce=Y[be],{object:r,geometry:l,material:h,group:d}=Ce;if(h.side===pi&&r.layers.test(j.layers)){let y=h.side;h.side=qe,h.needsUpdate=!0,go(r,it,j,l,h,d),h.side=y,h.needsUpdate=!0,zt=!0}}zt===!0&&(rt.updateMultisampleRenderTarget(Bt),rt.updateRenderTargetMipmap(Bt))}U.setRenderTarget(Ot,kt,Ht),U.setClearColor($t,ne),ue!==void 0&&(j.viewport=ue),U.toneMapping=Lt}function zn(P,Y,it){let j=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Bt=P.length;Q<Bt;Q++){let wt=P[Q],{object:Ot,geometry:kt,group:Ht}=wt,Lt=wt.material;Lt.allowOverride===!0&&j!==null&&(Lt=j),Ot.layers.test(it.layers)&&go(Ot,Y,it,kt,Lt,Ht)}}function go(P,Y,it,j,Q,Bt){G!==null&&Q.isNodeMaterial&&G.setObject(P,Q),P.onBeforeRender(U,Y,it,j,Q,Bt),P.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(U,Y,it,j,P,Bt),Q.transparent===!0&&Q.side===pi&&Q.forceSinglePass===!1?(Q.side=qe,Q.needsUpdate=!0,U.renderBufferDirect(it,Y,j,Q,P,Bt),Q.side=Ln,Q.needsUpdate=!0,U.renderBufferDirect(it,Y,j,Q,P,Bt),Q.side=pi):U.renderBufferDirect(it,Y,j,Q,P,Bt),P.onAfterRender(U,Y,it,j,Q,Bt)}function os(P,Y,it){Y.isScene!==!0&&(Y=Zt);let j=et.get(P),Q=R.state.lights,Bt=R.state.shadowsArray,wt=Q.state.version,Ot=Pt.getParameters(P,Q.state,Bt,Y,it,R.state.lightProbeGridArray),kt=Pt.getProgramCacheKey(Ot),Ht=j.programs;j.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?Y.environment:null,j.fog=Y.fog;let Lt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;j.envMap=bt.get(P.envMap||j.environment,Lt),j.envMapRotation=j.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,Ht===void 0&&(P.addEventListener("dispose",Ti),Ht=new Map,j.programs=Ht);let ue=Ht.get(kt);if(ue!==void 0){if(j.currentProgram===ue&&j.lightsStateVersion===wt)return xo(P,Ot),ue}else Ot.uniforms=Pt.getUniforms(P),G!==null&&P.isNodeMaterial&&G.build(P,it,Ot),P.onBeforeCompile(Ot,U),ue=Pt.acquireProgram(Ot,kt),Ht.set(kt,ue),j.uniforms=Ot.uniforms;let zt=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(zt.clippingPlanes=Xt.uniform),xo(P,Ot),j.needsLights=Ql(P),j.lightsStateVersion=wt,j.needsLights&&(zt.ambientLightColor.value=Q.state.ambient,zt.lightProbe.value=Q.state.probe,zt.sunLights.value=Q.state.sun,zt.sunLightShadows.value=Q.state.sunShadow,zt.directionalLights.value=Q.state.directional,zt.directionalLightShadows.value=Q.state.directionalShadow,zt.spotLights.value=Q.state.spot,zt.spotLightShadows.value=Q.state.spotShadow,zt.rectAreaLights.value=Q.state.rectArea,zt.ltc_1.value=Q.state.rectAreaLTC1,zt.ltc_2.value=Q.state.rectAreaLTC2,zt.pointLights.value=Q.state.point,zt.pointLightShadows.value=Q.state.pointShadow,zt.hemisphereLights.value=Q.state.hemi,zt.sunShadowMatrix.value=Q.state.sunShadowMatrix,zt.sunShadowCascade.value=Q.state.sunShadowCascade,zt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,zt.spotLightMatrix.value=Q.state.spotLightMatrix,zt.spotLightMap.value=Q.state.spotLightMap,zt.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=R.state.lightProbeGridArray.length>0,j.currentProgram=ue,j.uniformsList=null,ue}function _o(P){if(P.uniformsList===null){let Y=P.currentProgram.getUniforms();P.uniformsList=Ys.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function xo(P,Y){let it=et.get(P);it.outputColorSpace=Y.outputColorSpace,it.batching=Y.batching,it.batchingColor=Y.batchingColor,it.instancing=Y.instancing,it.instancingColor=Y.instancingColor,it.instancingMorph=Y.instancingMorph,it.skinning=Y.skinning,it.morphTargets=Y.morphTargets,it.morphNormals=Y.morphNormals,it.morphColors=Y.morphColors,it.morphTargetsCount=Y.morphTargetsCount,it.numClippingPlanes=Y.numClippingPlanes,it.numIntersection=Y.numClipIntersection,it.vertexAlphas=Y.vertexAlphas,it.vertexTangents=Y.vertexTangents,it.toneMapping=Y.toneMapping}function Kl(P,Y){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;M.setFromMatrixPosition(Y.matrixWorld);for(let it=0,j=P.length;it<j;it++){let Q=P[it];if(Q.texture!==null&&Q.boundingBox.containsPoint(M))return Q}return null}function mn(P,Y,it,j,Q){Y.isScene!==!0&&(Y=Zt),rt.resetTextureUnits();let Bt=Y.fog,wt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?Y.environment:null,Ot=at===null?U.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:me.workingColorSpace,kt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ht=bt.get(j.envMap||wt,kt),Lt=j.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ue=!!it.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),zt=!!it.morphAttributes.position,be=!!it.morphAttributes.normal,Ne=!!it.morphAttributes.color,Ce=Oi;j.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ce=U.toneMapping);let r=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,l=r!==void 0?r.length:0,h=et.get(j),d=R.state.lights;if(xt===!0&&(yt===!0||P!==nt)){let gt=P===nt&&j.id===tt;Xt.setState(j,P,gt)}let y=!1;j.version===h.__version?(h.needsLights&&h.lightsStateVersion!==d.state.version||h.outputColorSpace!==Ot||Q.isBatchedMesh&&h.batching===!1||!Q.isBatchedMesh&&h.batching===!0||Q.isBatchedMesh&&h.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&h.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&h.instancing===!1||!Q.isInstancedMesh&&h.instancing===!0||Q.isSkinnedMesh&&h.skinning===!1||!Q.isSkinnedMesh&&h.skinning===!0||Q.isInstancedMesh&&h.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&h.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&h.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&h.instancingMorph===!1&&Q.morphTexture!==null||h.envMap!==Ht||j.fog===!0&&h.fog!==Bt||h.numClippingPlanes!==void 0&&(h.numClippingPlanes!==Xt.numPlanes||h.numIntersection!==Xt.numIntersection)||h.vertexAlphas!==Lt||h.vertexTangents!==ue||h.morphTargets!==zt||h.morphNormals!==be||h.morphColors!==Ne||h.toneMapping!==Ce||h.morphTargetsCount!==l||!!h.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(y=!0):(y=!0,h.__version=j.version);let w=h.currentProgram;y===!0&&(w=os(j,Y,Q),G&&j.isNodeMaterial&&G.onUpdateProgram(j,w,h));let L=!1,z=!1,V=!1,$=w.getUniforms(),ht=h.uniforms;if(T.useProgram(w.program)&&(L=!0,z=!0,V=!0),j.id!==tt&&(tt=j.id,z=!0),h.needsLights){let gt=Kl(R.state.lightProbeGridArray,Q);h.lightProbeGrid!==gt&&(h.lightProbeGrid=gt,z=!0)}if(L||nt!==P){T.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),$.setValue(X,"projectionMatrix",P.projectionMatrix),$.setValue(X,"viewMatrix",P.matrixWorldInverse);let Wt=$.map.cameraPosition;Wt!==void 0&&Wt.setValue(X,Mt.setFromMatrixPosition(P.matrixWorld)),F.logarithmicDepthBuffer&&$.setValue(X,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&$.setValue(X,"isOrthographic",P.isOrthographicCamera===!0),nt!==P&&(nt=P,z=!0,V=!0)}if(h.needsLights&&(d.state.sunShadowMap.length>0&&$.setValue(X,"sunShadowMap",d.state.sunShadowMap,rt),d.state.directionalShadowMap.length>0&&$.setValue(X,"directionalShadowMap",d.state.directionalShadowMap,rt),d.state.spotShadowMap.length>0&&$.setValue(X,"spotShadowMap",d.state.spotShadowMap,rt),d.state.pointShadowMap.length>0&&$.setValue(X,"pointShadowMap",d.state.pointShadowMap,rt)),Q.isSkinnedMesh){$.setOptional(X,Q,"bindMatrix"),$.setOptional(X,Q,"bindMatrixInverse");let gt=Q.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),$.setValue(X,"boneTexture",gt.boneTexture,rt))}Q.isBatchedMesh&&($.setOptional(X,Q,"batchingTexture"),$.setValue(X,"batchingTexture",Q._matricesTexture,rt),$.setOptional(X,Q,"batchingIdTexture"),$.setValue(X,"batchingIdTexture",Q._indirectTexture,rt),$.setOptional(X,Q,"batchingColorTexture"),Q._colorsTexture!==null&&$.setValue(X,"batchingColorTexture",Q._colorsTexture,rt));let ct=it.morphAttributes;if((ct.position!==void 0||ct.normal!==void 0||ct.color!==void 0)&&q.update(Q,it,w),(z||h.receiveShadow!==Q.receiveShadow)&&(h.receiveShadow=Q.receiveShadow,$.setValue(X,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&Y.environment!==null&&(ht.envMapIntensity.value=Y.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=fy()),z){if($.setValue(X,"toneMappingExposure",U.toneMappingExposure),h.needsLights&&jl(ht,V),Bt&&j.fog===!0&&Gt.refreshFogUniforms(ht,Bt),Gt.refreshMaterialUniforms(ht,j,dt,lt,R.state.transmissionRenderTarget[P.id]),h.needsLights&&h.lightProbeGrid){let gt=h.lightProbeGrid;ht.probesSH.value=gt.texture,ht.probesMin.value.copy(gt.boundingBox.min),ht.probesMax.value.copy(gt.boundingBox.max),ht.probesResolution.value.copy(gt.resolution)}Ys.upload(X,_o(h),ht,rt)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ys.upload(X,_o(h),ht,rt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&$.setValue(X,"center",Q.center),$.setValue(X,"modelViewMatrix",Q.modelViewMatrix),$.setValue(X,"normalMatrix",Q.normalMatrix),$.setValue(X,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let gt=j.uniformsGroups;for(let Wt=0,oe=gt.length;Wt<oe;Wt++){let fe=gt[Wt];mt.update(fe,w),mt.bind(fe,w)}}return w}function jl(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.sunLights.needsUpdate=Y,P.sunLightShadows.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function Ql(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(P,Y,it){let j=et.get(P);j.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),et.get(P.texture).__webglTexture=Y,et.get(P.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:it,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Y){let it=et.get(P);it.__webglFramebuffer=Y,it.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,it=0){at=P,K=Y,J=it;let j=null,Q=!1,Bt=!1;if(P){let Ot=et.get(P);if(Ot.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(X.FRAMEBUFFER,Ot.__webglFramebuffer),st.copy(P.viewport),Tt.copy(P.scissor),Et=P.scissorTest,T.viewport(st),T.scissor(Tt),T.setScissorTest(Et),tt=-1;return}else if(Ot.__webglFramebuffer===void 0)rt.setupRenderTarget(P);else if(Ot.__hasExternalTextures)rt.rebindTextures(P,et.get(P.texture).__webglTexture,et.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Lt=P.depthTexture;if(Ot.__boundDepthTexture!==Lt){if(Lt!==null&&et.has(Lt)&&(P.width!==Lt.image.width||P.height!==Lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(P)}}let kt=P.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Bt=!0);let Ht=et.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ht[Y])?j=Ht[Y][it]:j=Ht[Y],Q=!0):P.samples>0&&rt.useMultisampledRTT(P)===!1?j=et.get(P).__webglMultisampledFramebuffer:Array.isArray(Ht)?j=Ht[it]:j=Ht,st.copy(P.viewport),Tt.copy(P.scissor),Et=P.scissorTest}else st.copy(Ft).multiplyScalar(dt).floor(),Tt.copy(te).multiplyScalar(dt).floor(),Et=Se;if(it!==0&&(j=H),T.bindFramebuffer(X.FRAMEBUFFER,j)&&T.drawBuffers(P,j),T.viewport(st),T.scissor(Tt),T.setScissorTest(Et),Q){let Ot=et.get(P.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ot.__webglTexture,it)}else if(Bt){let Ot=Y;for(let kt=0;kt<P.textures.length;kt++){let Ht=et.get(P.textures[kt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+kt,Ht.__webglTexture,it,Ot)}}else if(P!==null&&it!==0){let Ot=et.get(P.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ot.__webglTexture,it)}tt=-1};function yo(P){let Y=et.get(P);return(Y.__readFormat!==P.format||Y.__readType!==P.type)&&(Y.__readFormat=P.format,Y.__readType=P.type,Y.__formatReadable=F.textureFormatReadable(P.format),Y.__typeReadable=F.textureTypeReadable(P.type)),Y}this.readRenderTargetPixels=function(P,Y,it,j,Q,Bt,wt,Ot=0){if(!(P&&P.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=et.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&wt!==void 0&&(kt=kt[wt]),kt){T.bindFramebuffer(X.FRAMEBUFFER,kt);try{let Ht=P.textures[Ot],Lt=Ht.format,ue=Ht.type;P.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ot);let zt=yo(Ht);if(zt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-j&&it>=0&&it<=P.height-Q&&X.readPixels(Y,it,j,Q,Rt.convert(Lt),Rt.convert(ue),Bt)}finally{let Ht=at!==null?et.get(at).__webglFramebuffer:null;T.bindFramebuffer(X.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(P,Y,it,j,Q,Bt,wt,Ot=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=et.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&wt!==void 0&&(kt=kt[wt]),kt)if(Y>=0&&Y<=P.width-j&&it>=0&&it<=P.height-Q){T.bindFramebuffer(X.FRAMEBUFFER,kt);let Ht=P.textures[Ot],Lt=Ht.format,ue=Ht.type;P.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ot);let zt=yo(Ht);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let be=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,be),X.bufferData(X.PIXEL_PACK_BUFFER,Bt.byteLength,X.STREAM_READ),X.readPixels(Y,it,j,Q,Rt.convert(Lt),Rt.convert(ue),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Ne=at!==null?et.get(at).__webglFramebuffer:null;T.bindFramebuffer(X.FRAMEBUFFER,Ne);let Ce=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await gf(X,Ce,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,be),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Bt),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(be),X.deleteSync(Ce),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Y=null,it=0){let j=Math.pow(2,-it),Q=Math.floor(P.image.width*j),Bt=Math.floor(P.image.height*j),wt=Y!==null?Y.x:0,Ot=Y!==null?Y.y:0;rt.setTexture2D(P,0),X.copyTexSubImage2D(X.TEXTURE_2D,it,0,0,wt,Ot,Q,Bt),T.unbindTexture()},this.copyTextureToTexture=function(P,Y,it=null,j=null,Q=0,Bt=0){let wt,Ot,kt,Ht,Lt,ue,zt,be,Ne,Ce=P.isCompressedTexture?P.mipmaps[Bt]:P.image;if(it!==null)wt=it.max.x-it.min.x,Ot=it.max.y-it.min.y,kt=it.isBox3?it.max.z-it.min.z:1,Ht=it.min.x,Lt=it.min.y,ue=it.isBox3?it.min.z:0;else{let ht=Math.pow(2,-Q);wt=Math.floor(Ce.width*ht),Ot=Math.floor(Ce.height*ht),P.isDataArrayTexture?kt=Ce.depth:P.isData3DTexture?kt=Math.floor(Ce.depth*ht):kt=1,Ht=0,Lt=0,ue=0}j!==null?(zt=j.x,be=j.y,Ne=j.z):(zt=0,be=0,Ne=0);let r=Rt.convert(Y.format),l=Rt.convert(Y.type),h;Y.isData3DTexture?(rt.setTexture3D(Y,0),h=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(rt.setTexture2DArray(Y,0),h=X.TEXTURE_2D_ARRAY):(rt.setTexture2D(Y,0),h=X.TEXTURE_2D),T.activeTexture(X.TEXTURE0),T.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),T.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),T.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);let d=T.getParameter(X.UNPACK_ROW_LENGTH),y=T.getParameter(X.UNPACK_IMAGE_HEIGHT),w=T.getParameter(X.UNPACK_SKIP_PIXELS),L=T.getParameter(X.UNPACK_SKIP_ROWS),z=T.getParameter(X.UNPACK_SKIP_IMAGES);T.pixelStorei(X.UNPACK_ROW_LENGTH,Ce.width),T.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ce.height),T.pixelStorei(X.UNPACK_SKIP_PIXELS,Ht),T.pixelStorei(X.UNPACK_SKIP_ROWS,Lt),T.pixelStorei(X.UNPACK_SKIP_IMAGES,ue);let V=P.isDataArrayTexture||P.isData3DTexture,$=Y.isDataArrayTexture||Y.isData3DTexture;if(P.isDepthTexture){let ht=et.get(P),ct=et.get(Y),gt=et.get(ht.__renderTarget),Wt=et.get(ct.__renderTarget);T.bindFramebuffer(X.READ_FRAMEBUFFER,gt.__webglFramebuffer),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let oe=0;oe<kt;oe++)V&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,et.get(P).__webglTexture,Q,ue+oe),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,et.get(Y).__webglTexture,Bt,Ne+oe)),X.blitFramebuffer(Ht,Lt,wt,Ot,zt,be,wt,Ot,X.DEPTH_BUFFER_BIT,X.NEAREST);T.bindFramebuffer(X.READ_FRAMEBUFFER,null),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(Q!==0||P.isRenderTargetTexture||et.has(P)){let ht=et.get(P),ct=et.get(Y);T.bindFramebuffer(X.READ_FRAMEBUFFER,B),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,W);for(let gt=0;gt<kt;gt++)V?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ht.__webglTexture,Q,ue+gt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ht.__webglTexture,Q),$?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ct.__webglTexture,Bt,Ne+gt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ct.__webglTexture,Bt),Q!==0?X.blitFramebuffer(Ht,Lt,wt,Ot,zt,be,wt,Ot,X.COLOR_BUFFER_BIT,X.NEAREST):$?X.copyTexSubImage3D(h,Bt,zt,be,Ne+gt,Ht,Lt,wt,Ot):X.copyTexSubImage2D(h,Bt,zt,be,Ht,Lt,wt,Ot);T.bindFramebuffer(X.READ_FRAMEBUFFER,null),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else $?P.isDataTexture||P.isData3DTexture?X.texSubImage3D(h,Bt,zt,be,Ne,wt,Ot,kt,r,l,Ce.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(h,Bt,zt,be,Ne,wt,Ot,kt,r,Ce.data):X.texSubImage3D(h,Bt,zt,be,Ne,wt,Ot,kt,r,l,Ce):P.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Bt,zt,be,wt,Ot,r,l,Ce.data):P.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Bt,zt,be,Ce.width,Ce.height,r,Ce.data):X.texSubImage2D(X.TEXTURE_2D,Bt,zt,be,wt,Ot,r,l,Ce);T.pixelStorei(X.UNPACK_ROW_LENGTH,d),T.pixelStorei(X.UNPACK_IMAGE_HEIGHT,y),T.pixelStorei(X.UNPACK_SKIP_PIXELS,w),T.pixelStorei(X.UNPACK_SKIP_ROWS,L),T.pixelStorei(X.UNPACK_SKIP_IMAGES,z),Bt===0&&Y.generateMipmaps&&X.generateMipmap(h),T.unbindTexture()},this.initRenderTarget=function(P){et.get(P).__webglFramebuffer===void 0&&rt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?rt.setTextureCube(P,0):P.isData3DTexture?rt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?rt.setTexture2DArray(P,0):rt.setTexture2D(P,0),T.unbindTexture()},this.resetState=function(){K=0,J=0,at=null,T.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var td={type:"change"},Fh={type:"start"},id={type:"end"},Al=new Sn,ed=new ri,dy=Math.cos(70*io.DEG2RAD),ze=new k,gi=2*Math.PI,Ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nh=1e-6,Cl=class extends Wr{constructor(t,e=null){super(t,e),this.state=Ee.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:In.ROTATE,MIDDLE:In.DOLLY,RIGHT:In.PAN},this.touches={ONE:Rn.ROTATE,TWO:Rn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new bi,this._lastTargetPosition=new k,this._quat=new bi().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ks,this._sphericalDelta=new ks,this._scale=1,this._panOffset=new k,this._rotateStart=new _t,this._rotateEnd=new _t,this._rotateDelta=new _t,this._panStart=new _t,this._panEnd=new _t,this._panDelta=new _t,this._dollyStart=new _t,this._dollyEnd=new _t,this._dollyDelta=new _t,this._dollyDirection=new k,this._mouse=new _t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=my.bind(this),this._onPointerDown=py.bind(this),this._onPointerUp=gy.bind(this),this._onContextMenu=My.bind(this),this._onMouseWheel=yy.bind(this),this._onKeyDown=vy.bind(this),this._onTouchStart=by.bind(this),this._onTouchMove=Sy.bind(this),this._onMouseDown=_y.bind(this),this._onMouseMove=xy.bind(this),this._interceptControlDown=wy.bind(this),this._interceptControlUp=Ty.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ee.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(td),this.update(),this.state=Ee.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;ze.copy(e).sub(this.target),ze.applyQuaternion(this._quat),this._spherical.setFromVector3(ze),this.autoRotate&&this.state===Ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=gi:n>Math.PI&&(n-=gi),s<-Math.PI?s+=gi:s>Math.PI&&(s-=gi),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(ze.setFromSpherical(this._spherical),ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let c=ze.length();a=this._clampDistance(c*this._scale);let u=c-a;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),o=!!u}else if(this.object.isOrthographicCamera){let c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object);let u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=u!==this.object.zoom;let f=new k(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(c),this.object.updateMatrixWorld(),a=ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Al.origin.copy(this.object.position),Al.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Al.direction))<dy?this.object.lookAt(this.target):(ed.setFromNormalAndCoplanarPoint(this.object.up,this.target),Al.intersectPlane(ed,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Nh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nh||this._lastTargetPosition.distanceToSquared(this.target)>Nh?(this.dispatchEvent(td),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?gi/60*this.autoRotateSpeed*t:gi/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ze.setFromMatrixColumn(e,0),ze.multiplyScalar(-t),this._panOffset.add(ze)}_panUp(t,e){this.screenSpacePanning===!0?ze.setFromMatrixColumn(e,1):(ze.setFromMatrixColumn(e,0),ze.crossVectors(this.object.up,ze)),ze.multiplyScalar(t),this._panOffset.add(ze)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ze.copy(s).sub(this.target);let o=ze.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,a=n.width,c=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(o/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gi*this._rotateDelta.x/e.clientHeight),this._rotateUp(gi*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gi*this._rotateDelta.x/e.clientHeight),this._rotateUp(gi*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,c=(t.pageY+e.y)*.5;this._updateZoomParameters(a,c)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new _t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function py(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function my(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function gy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(id),this.state=Ee.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function _y(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case In.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ee.DOLLY;break;case In.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ee.ROTATE}break;case In.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ee.PAN}break;default:this.state=Ee.NONE}this.state!==Ee.NONE&&this.dispatchEvent(Fh)}function xy(i){switch(this.state){case Ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function yy(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ee.NONE||(i.preventDefault(),this.dispatchEvent(Fh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(id))}function vy(i){this.enabled!==!1&&this._handleKeyDown(i)}function by(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Rn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ee.TOUCH_ROTATE;break;case Rn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ee.TOUCH_PAN;break;default:this.state=Ee.NONE}break;case 2:switch(this.touches.TWO){case Rn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ee.TOUCH_DOLLY_PAN;break;case Rn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ee.TOUCH_DOLLY_ROTATE;break;default:this.state=Ee.NONE}break;default:this.state=Ee.NONE}this.state!==Ee.NONE&&this.dispatchEvent(Fh)}function Sy(i){switch(this._trackPointer(i),this.state){case Ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ee.NONE}}function My(i){this.enabled!==!1&&i.preventDefault()}function wy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ty(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var nd=new Si,Pl=new k,$s=class extends Gr{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new xe(t,3)),this.setAttribute("uv",new xe(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Pn(e,6,1);return this.setAttribute("instanceStart",new Ai(n,3,0)),this.setAttribute("instanceEnd",new Ai(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Pn(e,6,1);return this.setAttribute("instanceColorStart",new Ai(n,3,0)),this.setAttribute("instanceColorEnd",new Ai(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Or(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),nd.setFromBufferAttribute(e),this.boundingBox.union(nd))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let o=0,a=t.count;o<a;o++)Pl.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Pl)),Pl.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Pl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ct.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new _t},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ci.line={uniforms:no.merge([Ct.common,Ct.fog,Ct.line]),vertexShader:`
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
		`};var Zs=class extends li{constructor(t){super({type:"LineMaterial",uniforms:no.clone(ci.line.uniforms),vertexShader:ci.line.vertexShader,fragmentShader:ci.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Oh=new we,sd=new k,rd=new k,$e=new we,Ze=new we,$i=new we,Bh=new k,Uh=new _e,Je=new Xr,od=new k,Il=new Si,Rl=new Fi,Zi=new we,Ji,is;function ad(i,t,e){return Zi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Zi.multiplyScalar(1/Zi.w),Zi.x=is/e.width,Zi.y=is/e.height,Zi.applyMatrix4(i.projectionMatrixInverse),Zi.multiplyScalar(1/Zi.w),Math.abs(Math.max(Zi.x,Zi.y))}function Ey(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,o=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let c=0,u=a;c<u;c++){Je.start.fromBufferAttribute(s,c),Je.end.fromBufferAttribute(o,c),Je.applyMatrix4(e);let f=new k,p=new k;Ji.distanceSqToSegment(Je.start,Je.end,p,f),p.distanceTo(f)<is*.5&&t.push({point:p,pointOnLine:f,distance:Ji.origin.distanceTo(p),object:i,face:null,faceIndex:c,uv:null,uv1:null})}}function Ay(i,t,e){let n=t.projectionMatrix,o=i.material.resolution,a=i.matrixWorld,c=i.geometry,u=c.attributes.instanceStart,f=c.attributes.instanceEnd,p=Math.min(c.instanceCount,u.count),_=-t.near;Ji.at(1,$i),$i.w=1,$i.applyMatrix4(t.matrixWorldInverse),$i.applyMatrix4(n),$i.multiplyScalar(1/$i.w),$i.x*=o.x/2,$i.y*=o.y/2,$i.z=0,Bh.copy($i),Uh.multiplyMatrices(t.matrixWorldInverse,a);for(let m=0,g=p;m<g;m++){if($e.fromBufferAttribute(u,m),Ze.fromBufferAttribute(f,m),$e.w=1,Ze.w=1,$e.applyMatrix4(Uh),Ze.applyMatrix4(Uh),$e.z>_&&Ze.z>_)continue;if($e.z>_){let C=$e.z-Ze.z,M=($e.z-_)/C;$e.lerp(Ze,M)}else if(Ze.z>_){let C=Ze.z-$e.z,M=(Ze.z-_)/C;Ze.lerp($e,M)}$e.applyMatrix4(n),Ze.applyMatrix4(n),$e.multiplyScalar(1/$e.w),Ze.multiplyScalar(1/Ze.w),$e.x*=o.x/2,$e.y*=o.y/2,Ze.x*=o.x/2,Ze.y*=o.y/2,Je.start.copy($e),Je.start.z=0,Je.end.copy(Ze),Je.end.z=0;let S=Je.closestPointToPointParameter(Bh,!0);Je.at(S,od);let x=io.lerp($e.z,Ze.z,S),v=x>=-1&&x<=1,E=Bh.distanceTo(od)<is*.5;if(v&&E){Je.start.fromBufferAttribute(u,m),Je.end.fromBufferAttribute(f,m),Je.start.applyMatrix4(a),Je.end.applyMatrix4(a);let C=new k,M=new k;Ji.distanceSqToSegment(Je.start,Je.end,M,C),e.push({point:M,pointOnLine:C,distance:Ji.origin.distanceTo(M),object:i,face:null,faceIndex:m,uv:null,uv1:null})}}}var Ll=class extends Le{constructor(t=new $s,e=new Zs({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,c=0,u=e.count;a<u;a++,c+=2)sd.fromBufferAttribute(e,a),rd.fromBufferAttribute(n,a),s[c]=c===0?0:s[c-1],s[c+1]=s[c]+sd.distanceTo(rd);let o=new Pn(s,2,1);return t.setAttribute("instanceDistanceStart",new Ai(o,1,0)),t.setAttribute("instanceDistanceEnd",new Ai(o,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let o=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Ji=t.ray;let a=this.matrixWorld,c=this.geometry,u=this.material;is=u.linewidth+o,c.boundingSphere===null&&c.computeBoundingSphere(),Rl.copy(c.boundingSphere).applyMatrix4(a);let f;if(n)f=is*.5;else{let _=Math.max(s.near,Rl.distanceToPoint(Ji.origin));f=ad(s,_,u.resolution)}if(Rl.radius+=f,Ji.intersectsSphere(Rl)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),Il.copy(c.boundingBox).applyMatrix4(a);let p;if(n)p=is*.5;else{let _=Math.max(s.near,Il.distanceToPoint(Ji.origin));p=ad(s,_,u.resolution)}Il.expandByScalar(p),Ji.intersectsBox(Il)!==!1&&(n?Ey(this,e):Ay(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Oh),this.material.uniforms.resolution.value.set(Oh.z,Oh.w))}};function kh(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},a={},c=i[0].morphTargetsRelative,u=new Ie,f=0;for(let p=0;p<i.length;++p){let _=i[p],m=0;if(e!==(_.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in _.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(_.attributes[g]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". Make sure all geometries have the same number of attributes."),null;if(c!==_.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in _.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+".  .morphAttributes must be consistent throughout all geometries."),null;a[g]===void 0&&(a[g]=[]),a[g].push(_.morphAttributes[g])}if(t){let g;if(e)g=_.index.count;else if(_.attributes.position!==void 0)g=_.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". The geometry must have either an index or a position attribute"),null;u.addGroup(f,g,p),f+=g}}if(e){let p=0,_=[];for(let m=0;m<i.length;++m){let g=i[m].index;for(let b=0;b<g.count;++b)_.push(g.getX(b)+p);p+=i[m].attributes.position.count}u.setIndex(_)}for(let p in o){let _=ld(o[p]);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" attribute."),null;u.setAttribute(p,_)}for(let p in a){let _=a[p][0].length;if(_!==0){u.morphAttributes=u.morphAttributes||{},u.morphAttributes[p]=[];for(let m=0;m<_;++m){let g=[];for(let S=0;S<a[p].length;++S)g.push(a[p][S][m]);let b=ld(g);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" morphAttribute."),null;u.morphAttributes[p].push(b)}}}return u}function ld(i){let t,e,n,s=-1,o=0;for(let f=0;f<i.length;++f){let p=i[f];if(t===void 0&&(t=p.array.constructor),t!==p.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=p.itemSize),e!==p.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=p.normalized),n!==p.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=p.gpuType),s!==p.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=p.count*e}let a=new t(o),c=new He(a,e,n),u=0;for(let f=0;f<i.length;++f){let p=i[f];if(p.isInterleavedBufferAttribute){let _=u/e;for(let m=0,g=p.count;m<g;m++)for(let b=0;b<e;b++){let S=p.getComponent(m,b);c.setComponent(m+_,b,S)}}else a.set(p.array,u);u+=p.count*e}return s!==void 0&&(c.gpuType=s),c}var hi=$d(cd(),1),dn=1e3,{ClipType:Bn,PolyType:hd,PolyFillType:ud,JoinType:Cy,EndType:Py}=hi.default,Un=.24,Iy=.06,Ry={n:[0,-1],s:[0,1],w:[-1,0],e:[1,0]};function ii(i){let t=1/0,e=1/0,n=-1/0,s=-1/0;for(let[o,a]of i)o<t&&(t=o),a<e&&(e=a),o>n&&(n=o),a>s&&(s=a);return{x0:t,y0:e,x1:n,y1:s}}function Ki(i){if(i.points)return i.points;if(i.rect){let[t,e,n,s]=i.rect;return[[t,e],[n,e],[n,s],[t,s]]}throw new Error(`Room "${i.name||i.id}" needs "rect" or "points"`)}function Nl(i){let t=i.map(([e,n])=>({X:Math.round(e*dn),Y:Math.round(n*dn)}));return hi.default.Clipper.Orientation(t)||t.reverse(),t}var zh=i=>i.map(t=>[t.X/dn,t.Y/dn]);function Js(i,t,e,n){return Nl([[i,t],[e,t],[e,n],[i,n]])}function ao(i,t){let e=new hi.default.ClipperOffset(4,.25);e.AddPaths(i,Cy.jtMiter,Py.etClosedPolygon);let n=new hi.default.Paths;return e.Execute(n,t*dn),n}function ns(i,t,e){let n=new hi.default.Clipper;n.AddPaths(t,hd.ptSubject,!0),e&&e.length&&n.AddPaths(e,hd.ptClip,!0);let s=new hi.default.PolyTree;return n.Execute(i,s,ud.pftNonZero,ud.pftNonZero),s}function fd(i,t,e){return hi.default.Clipper.PolyTreeToPaths(ns(i,t,e))}function dd(i){return hi.default.Clipper.CleanPolygons(i,2).filter(t=>t.length>=3&&Math.abs(hi.default.Clipper.Area(t))>400)}function Ks(i){return hi.default.JS.PolyTreeToExPolygons(i).map(t=>({o:zh(t.outer),h:t.holes.map(zh)})).filter(t=>t.o.length>=3)}function pd(i,t,e){let n=0,s={X:Math.round(t*dn),Y:Math.round(e*dn)};for(let o of i)hi.default.Clipper.PointInPolygon(s,o)!==0&&n++;return n%2===1}function md(i,t,e){let n=[Js(0,0,i,t)],s=e.map(o=>Js(o.u0,o.v0,o.u1,o.v1));return Ks(ns(Bn.ctDifference,n,s))}function Fl(i){let t=i.rooms.map(m=>({room:m,pts:Ki(m)})),e=t.map(m=>Nl(m.pts)),n=dd(ao(ao(e,.08),-.08)),s=dd(ao(n,Un)),o=[];for(let m of e)o.push(...ao([m],-Iy));let a=ns(Bn.ctDifference,s,o),c=hi.default.Clipper.PolyTreeToPaths(a),u=[],f=[],p=[];for(let m of i.openings||[]){let g=t.find(W=>W.room.id===m.room);if(!g){u.push(`Opening "${m.name||m.kind}" points at room "${m.room}", which does not exist on ${i.name||i.id}.`);continue}let b=Ry[m.wall];if(!b){u.push(`Opening "${m.name||m.kind}" in ${g.room.name}: "wall" must be n, s, e or w.`);continue}let S=ii(g.pts),x=m.at,v=m.width,E={n:[x,S.y0-.5,x+v,S.y0+.25],s:[x,S.y1-.25,x+v,S.y1+.5],w:[S.x0-.5,x,S.x0+.25,x+v],e:[S.x1-.25,x,S.x1+.5,x+v]}[m.wall],C=Js(...E),M=fd(Bn.ctIntersection,[C],c);if(!M.length){u.push(`${m.name||m.kind} in ${g.room.name}: no wall found at ${m.at} m on the ${m.wall} side.`);continue}let I=b[0]===0,R=v*.3,O=I?Js(E[0]+R,E[1],E[2]-R,E[3]):Js(E[0],E[1]+R,E[2],E[3]-R),A=fd(Bn.ctIntersection,[O],c),D=ii((A.length?A:M).flatMap(zh)),U=I?{x0:x,x1:x+v,y0:D.y0,y1:D.y1}:{x0:D.x0,x1:D.x1,y0:x,y1:x+v},N=(U.x0+U.x1)/2,G=(U.y0+U.y1)/2,H=!pd(n,N+b[0]*.45,G+b[1]*.45),B=m.kind||"door";["window","bifold","garage","frontdoor","extdoor"].includes(B)&&!H&&u.push(`${m.name||B} in ${g.room.name} is on an inside wall (${m.wall} side). Windows and outside doors need an outside wall.`),["door","opening"].includes(B)&&H&&u.push(`A plain door in ${g.room.name} (${m.wall} side) opens to the outside. Use kind "extdoor" or "frontdoor" if that is right.`),f.push({...m,kind:B,b:[U.x0,U.y0,U.x1,U.y1],n:b,ext:H,rect:E}),B==="opening"&&p.push(C)}let _=p.length?ns(Bn.ctDifference,c,p):a;return{inside:n,rooms:t,slab:Ks(ns(Bn.ctUnion,s,[])),solid:Ks(_),openings:f,warnings:u,isInside:(m,g)=>pd(n,m,g),roomAt:(m,g)=>{for(let b=0;b<e.length;b++)if(hi.default.Clipper.PointInPolygon({X:Math.round(m*dn),Y:Math.round(g*dn)},e[b])!==0)return t[b].room;return null},cap:m=>m.length?Ks(ns(Bn.ctDifference,hi.default.Clipper.PolyTreeToPaths(_),m.map(g=>Js(...g.rect)))):Ks(_)}}function gd(i,t,e){let n=t.map(s=>Nl(s.o.map(([o,a])=>[o+e[0],a+e[1]])));return Ks(ns(Bn.ctDifference,i.map(s=>Nl(s.o)),ao(n,.02)))}var Ly={living:{wall:"#F78FB3",floor:"#9C8CE8",pattern:"plain"},kitchen:{wall:"#7FD8BE",floor:"#FFD93B",floor2:"#FFF8D6",pattern:"check"},dining:{wall:"#FFC857",floor:"#DE8F4E",floor2:"#C97A3B",pattern:"wood"},hall:{wall:"#FFE27A",floor:"#DE8F4E",floor2:"#C97A3B",pattern:"wood"},bath:{wall:"#6FD3F5",floor:"#FFFFFF",floor2:"#8FDDF7",pattern:"check"},bedroom:[{wall:"#8FC4FA",floor:"#F9BFD8",pattern:"plain"},{wall:"#F9A8CB",floor:"#B7E4A6",pattern:"plain"},{wall:"#B4E68E",floor:"#FAD592",pattern:"plain"},{wall:"#CDB1F7",floor:"#FBE59A",pattern:"plain"}],study:{wall:"#A6DE83",floor:"#DE8F4E",floor2:"#C97A3B",pattern:"wood"},utility:{wall:"#BCE3F7",floor:"#E9EDF2",floor2:"#C3CCD6",pattern:"check"},garage:{wall:"#D9D9E3",floor:"#C2C4CF",floor2:"#B3B5C1",pattern:"tile"},stairs:{wall:"#FFE27A",floor:"#DE8F4E",floor2:"#C97A3B",pattern:"wood"},store:{wall:"#E3D2F7",floor:"#D9C7A8",pattern:"plain"},other:{wall:"#FCE3B8",floor:"#F3D9A4",pattern:"plain"}},Dy={living:{wall:"#F6E7CF",floor:"#F0BE96",pattern:"plain"},kitchen:{wall:"#F3F0E4",floor:"#F7E08C",floor2:"#FBF1C4",pattern:"check"},dining:{wall:"#F6E7CF",floor:"#D99A62",floor2:"#C98850",pattern:"wood"},hall:{wall:"#F3ECE0",floor:"#D5C6F2",pattern:"plain"},bath:{wall:"#E4F3F8",floor:"#FFFFFF",floor2:"#B5E1EE",pattern:"check"},bedroom:[{wall:"#EEF2F8",floor:"#C6D8F7",pattern:"plain"},{wall:"#F8EEF2",floor:"#F5C3DA",pattern:"plain"},{wall:"#F0F6EA",floor:"#C9E7B3",pattern:"plain"},{wall:"#F8F2E4",floor:"#FFD9A6",pattern:"plain"}],study:{wall:"#EEF5E6",floor:"#BFE4A9",pattern:"plain"},utility:{wall:"#F1F1F1",floor:"#EADFC8",pattern:"plain"},garage:{wall:"#E2E2E2",floor:"#D0D0D0",floor2:"#C2C2C2",pattern:"tile"},stairs:{wall:"#F3ECE0",floor:"#D99A62",floor2:"#C98850",pattern:"wood"},store:{wall:"#F1EBE0",floor:"#E6E0D2",pattern:"plain"},other:{wall:"#FFF3D6",floor:"#EEE4CF",pattern:"plain"}},lo={toon:{sky:"#6CCBFA",cloud:"#FFFFFF",sun:"#FFDD33",ink:"#1b1b1b",lawn:"#62CE3C",lawn2:"#56C232",earth:"#B57E4E",drive:"#CFC6E0",drive2:"#BDB3D1",path:"#F0E2BF",patio:"#F4D9A8",patio2:"#E6C68E",road:"#807C90",kerb:"#DAD7E3",fence:"#E9A85C",fencePost:"#C98238",hedge:"#3FB03A",leaf:["#3FB03A","#56C245","#2F9E44"],blossom:"#E64980",trunk:"#9A5B34",flowers:["#FF5D8F","#FFD23F","#FFFFFF","#B197FC"],exterior:"#F9B58B",exteriorPattern:null,exterior2:"#F0A377",trim:"#FFFFFF",roof:"#C4513A",roof2:"#A8432F",roofPattern:"rooftile",chimney:"#D9744F",door:"#7A4FC4",doorInner:"#FFF7E6",knob:"#FFD23F",garage:"#FFF0D6",garage2:"#E5C9A0",wallCut:"#FFFDF4",inner:"#FCE3B8",slab:"#8C6A4A",glass:"#BDEBFF",curtain:"#9B6BE0",shutter:"#DDE4EA",shutter2:"#8793A0",shutterBox:"#8793A0",wood:"#9A5B34",woodLight:"#DBA15B",steel:"#C3CAD2",white:"#FBFBFB",water:"#9FE3FA",sofa:"#E07B2E",sofaDark:"#BE6220",duvet:["#5BA8F5","#F58FB7","#7FD069","#F5C24B"],rug:"#F2645A",cabinet:"#59B9E0",worktop:"#FFF4DC",tvUnit:"#6C56A8",fridge:"#D5F0F5",plant:"#3FB03A",pot:"#D9744F",dark:"#2B2F3A",planned:"#C4C4C4",bulbOn:"#FFE033",heat:"#FF8A3D",ok:"#69D14A",bad:"#FF5C5C",play:"#B79CFF",screen:"#7FD9FF",rooms:Ly,shade:[165,255]},brick:{sky:"#8FD3FF",cloud:"#FFFFFF",sun:"#FFD83A",ink:"#1b1b1b",lawn:"#7CC53F",lawn2:"#6DB634",earth:"#9A7448",drive:"#DDA98A",drive2:"#CC9778",path:"#E7D8BC",patio:"#E7D8BC",patio2:"#D8C7A6",road:"#70737C",kerb:"#C9CBD1",fence:"#C98E4E",fencePost:"#8A5A3C",hedge:"#3F9A35",leaf:["#3F9A35","#4FB03F","#2F8A3A"],blossom:"#A3243B",trunk:"#8A5A3C",flowers:["#E64980","#FFD23F","#FFFFFF","#9775FA"],exterior:"#D2603F",exteriorPattern:"brick",exterior2:"#B94E30",trim:"#FFFFFF",roof:"#4B4F5A",roof2:"#3A3D46",roofPattern:"rooftile",chimney:"#B94E30",door:"#2F5D8C",doorInner:"#FFFFFF",knob:"#D9D9D9",garage:"#F4F4F4",garage2:"#CFCFCF",wallCut:"#FFFDF4",inner:"#FFF3D6",slab:"#7A6652",glass:"#BDE8FF",curtain:"#E6DCC8",shutter:"#D9E0E6",shutter2:"#7d8a94",shutterBox:"#8B949C",wood:"#8A5A3C",woodLight:"#C9A063",steel:"#B9BEC5",white:"#F6F6F6",water:"#BFE9FF",sofa:"#E8734A",sofaDark:"#C95A33",duvet:["#A5C8F5","#F5B5D6","#C9E7B3","#FFD9A6"],rug:"#F2D8A0",cabinet:"#F3F3F3",worktop:"#B9BEC5",tvUnit:"#8A5A3C",fridge:"#B9BEC5",plant:"#3F9A35",pot:"#B94E30",dark:"#2B2F33",planned:"#BDBDBD",bulbOn:"#FFE033",heat:"#FF8A3D",ok:"#7CC44A",bad:"#FF6B6B",play:"#B79CFF",screen:"#7FD0FF",rooms:Dy,shade:[150,255]}};function Ol(i,t){let e=lo[i]||lo.toon;return{...e,...t||{},rooms:{...e.rooms,...t&&t.rooms||{}}}}var Ny=[["stairs",/stair/i],["garage",/garage|carport/i],["kitchen",/kitchen/i],["dining",/dining|breakfast/i],["bath",/bath|ensuite|en-suite|shower|wc|toilet|cloak|wet room/i],["bedroom",/bed|nursery|guest/i],["living",/living|lounge|sitting|family|snug|tv room|den/i],["study",/study|office|play|games|gym|library/i],["utility",/utility|laundry|boot|pantry/i],["hall",/hall|landing|porch|entrance|lobby|corridor/i],["store",/store|robe|wardrobe|closet|cupboard|loft|attic/i]];function Fy(i){if(i.type)return i.type;let t=`${i.name||""} ${i.id||""}`;for(let[e,n]of Ny)if(n.test(t))return e;return"other"}function Bl(i,t,e){let n=Fy(t),s=i.rooms[n]||i.rooms.other;return Array.isArray(s)&&(s=s[e%s.length]),{type:n,wall:t.wall_colour||s.wall,floor:t.floor_colour||s.floor,floor2:t.floor_colour2||s.floor2||null,pattern:t.pattern||(t.floor_colour?"plain":s.pattern)}}function Oy(i,t){let e=parseInt(i.slice(1),16),n=s=>Math.max(0,Math.min(255,Math.round(s*t)));return`rgb(${n(e>>16)},${n(e>>8&255)},${n(e&255)})`}var Vh={check:1,wood:1.2,tile:1,brick:.9,rooftile:.42,stripes:3.2,paving:1.2,planks:.5};function _d(i,t,e){let n=document.createElement("canvas"),s=128;n.width=n.height=s;let o=n.getContext("2d");switch(e=e||Oy(t,.86),o.fillStyle=t,o.fillRect(0,0,s,s),o.fillStyle=e,o.strokeStyle=e,o.lineWidth=4,i){case"check":o.fillRect(0,0,s/2,s/2),o.fillRect(s/2,s/2,s/2,s/2);break;case"wood":for(let a=0;a<4;a++)o.fillRect(0,a*32,s,3),o.fillRect((a*53+20)%s,a*32,3,32);break;case"tile":o.fillRect(0,0,s,3),o.fillRect(0,0,3,s),o.fillRect(0,s/2,s,3),o.fillRect(s/2,0,3,s);break;case"brick":case"paving":for(let a=0;a<4;a++){o.fillRect(0,a*32,s,4);for(let c=a%2*32;c<s;c+=64)o.fillRect(c,a*32,4,32)}break;case"rooftile":o.fillRect(0,s-10,s,10);for(let a=0;a<s;a+=32)o.fillRect(a,0,3,s);break;case"stripes":o.fillRect(0,0,s,s/2);break;case"planks":o.fillRect(0,0,5,s),o.fillRect(s/2,0,5,s);break;default:}return n}var By={sofa:[2.2,.95,.85],sofa_l:[2.6,1.8,.85],armchair:[.95,.9,.85],tv_board:[1.8,.42,.5],coffee_table:[1.1,.6,.45],rug:[2,1.4,.02],table:[1.8,.9,.76],chair:[.46,.5,.9],stool:[.45,.45,.44],sideboard:[1.4,.45,.85],shelf:[.9,.35,1.8],desk:[1.3,.65,.75],kitchen:[2.4,.62,.92],worktop:[2,.9,.92],sink:[.9,.62,.92],stove:[.6,.62,.92],fridge:[.6,.65,1.8],washer:[.6,.6,.85],bed:[1.6,2.05,.9],single_bed:[.9,2,.9],wardrobe:[1.8,.6,2.1],bedside:[.45,.4,.55],bathtub:[1.7,.75,.58],wc:[.38,.6,.8],washbasin:[.6,.46,.85],shower:[.9,.9,2],plant:[.45,.45,1.1],car:[1.8,4.2,1.45]};function xd(i,t,e=0){let n=By[i.type]||[.6,.6,.6],s=i.w||n[0],o=i.d||n[1],a=i.h||n[2],c=[],u=(p,_,m)=>{for(let g of[-1,1])for(let b of[-1,1])c.push([g*(s/2-_),b*(o/2-_),_,_,0,p,m])},f=Array.isArray(t.duvet)?t.duvet[e%t.duvet.length]:t.duvet;switch(i.type){case"sofa":case"sofa_l":case"armchair":c.push([0,.08,s,o-.16,.12,.45,t.sofa],[0,-o/2+.14,s,.28,.12,.88,t.sofaDark],[-s/2+.12,.08,.24,o-.16,.45,.66,t.sofaDark],[s/2-.12,.08,.24,o-.16,.45,.66,t.sofaDark]);break;case"tv_board":c.push([0,0,s,o,0,a,t.tvUnit]);break;case"coffee_table":c.push([0,0,s,o,.36,.45,t.woodLight]),u(.36,.07,t.wood);break;case"rug":c.push([0,0,s,o,.03,.06,t.rug]);break;case"table":case"desk":c.push([0,0,s,o,a-.07,a,t.woodLight]),u(a-.07,.08,t.wood);break;case"chair":c.push([0,0,s,o,.4,.47,t.wood],[0,-o/2+.03,s,.06,.47,a,t.wood]),u(.4,.05,t.wood);break;case"stool":c.push([0,0,s,o,.36,.44,t.wood,"cyl"],[0,0,.1,.1,0,.36,t.steel,"cyl"]);break;case"sideboard":c.push([0,0,s,o,.06,a,t.wood]);break;case"shelf":case"wardrobe":case"bedside":c.push([0,0,s,o,0,a,t.woodLight]);break;case"fridge":c.push([0,0,s,o,0,a,t.fridge]);break;case"washer":c.push([0,0,s,o,0,a,t.white],[0,o/2,.36,.04,.25,.61,t.steel]);break;case"kitchen":case"worktop":c.push([0,0,s,o,0,a-.05,t.cabinet],[0,0,s+.04,o+.04,a-.05,a,t.worktop]);break;case"sink":c.push([0,0,s,o,0,a-.05,t.cabinet],[0,0,s+.04,o+.04,a-.05,a,t.worktop],[0,0,s-.3,o-.24,a,a+.02,t.water]);break;case"stove":c.push([0,0,s,o,0,a-.05,t.white],[0,0,s+.04,o+.04,a-.05,a,t.dark]);for(let p of[-1,1])for(let _ of[-1,1])c.push([p*.14,_*.14,.18,.18,a,a+.02,t.bad,"cyl"]);break;case"bed":case"single_bed":c.push([0,0,s,o,.12,.36,t.wood],[0,.06,s-.06,o-.16,.36,.56,f],[0,-o/2+.05,s,.1,0,1,t.wood]),s>1.2?c.push([-s/4,-o/2+.38,s/2-.16,.4,.56,.68,t.white],[s/4,-o/2+.38,s/2-.16,.4,.56,.68,t.white]):c.push([0,-o/2+.38,s-.2,.4,.56,.68,t.white]);break;case"bathtub":c.push([0,0,s,o,0,a,t.white],[0,0,s-.2,o-.2,a,a+.02,t.water]);break;case"wc":c.push([0,-o/2+.1,s+.06,.2,0,.8,t.white],[0,.1,s,s,0,.42,t.white,"cyl"]);break;case"washbasin":c.push([0,-.05,.2,.2,0,.72,t.white],[0,0,s,o,.72,a,t.white],[0,.02,s-.2,o-.18,a,a+.02,t.water]);break;case"shower":c.push([0,0,s,o,0,.1,t.white],[0,0,s-.06,o-.06,.1,1.95,"glass"]);break;case"plant":c.push([0,0,s*.7,s*.7,0,.35,t.pot,"cyl"],[0,0,s,s,.55,.55+s,t.plant,"ball"],[0,0,s*.75,s*.75,.9,.9+s*.75,t.plant,"ball"]);break;case"car":{let p=i.colour||"#E8483F";c.push([0,0,s,o,.3,.8,p],[0,.15,s-.16,o*.5,.8,a,p],[0,.15,s-.12,o*.5-.3,.86,a-.1,"glass"]);for(let _ of[-1,1])for(let m of[-1,1])c.push([_*(s/2-.05),m*(o/2-.8),.66,.24,0,.66,t.dark,"wheel"]);break}default:c.push([0,0,s,o,0,a,t.planned])}return c}function js(i){return String(i||"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")}function Uy(i){let t=new Set,e=(i.floors||[]).flatMap(s=>s.devices||[]);for(let s of e)s.id&&t.add(String(s.id));let n=0;for(let s of e){if(s.id)continue;let o=js(s.name)||`${s.kind||"device"}_${++n}`,a=o,c=2;for(;t.has(a);)a=`${o}_${c++}`;t.add(a),s.id=a}return i}var yd=["x","y","room","wall","at"];function co(i,t){let e=i.floors||[];if(e.forEach((n,s)=>{n.id=n.id||`floor${s}`}),Uy(i),!t||typeof t!="object"||Array.isArray(t))return i;for(let[n,s]of Object.entries(t)){let o=null;for(let u of e){let f=(u.devices||[]).findIndex(p=>p.id===n);if(f>=0){o={f:u,i:f};break}}if(s===null){o&&o.f.devices.splice(o.i,1);continue}if(!s||typeof s!="object")continue;let{floor:a,...c}=s;if(o){let u=o.f.devices[o.i];if(yd.some(p=>c[p]!=null))for(let p of yd)delete u[p];Object.assign(u,c);let f=a&&a!==o.f.id?e.find(p=>p.id===a):null;f&&(o.f.devices.splice(o.i,1),(f.devices=f.devices||[]).push(u))}else if(c.kind){let u=e.find(f=>f.id===a)||e[0];u&&(u.devices=u.devices||[]).push({id:n,entity:null,...c})}}return i}var vd="data:font/woff2;base64,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";var bd="data:font/woff2;base64,d09GMgABAAAAAD4cABAAAAAAi6AAAD23AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGoEwG7w4HIJgBmA/U1RBVEAAhFwRCAqBuRCBjyYLg04AATYCJAOHGAQgBYROB4R7DAcb03MV7NgjbgdB8tNnH0YjYrdTSFnDx6Io3aRxZP9/W6BDhtCpoYP5G6gKJEGuMk67vdmJwTgO442HCZcEae57iFdUh8VPHiac7VZVkoV+gv9y3/ZLo1g4Qf6Q5FIE15yB43zUXPj/b7/fnnmDqXT3RnRtrIuEQsUbxEDU9EvkDM9vs0cK/YH/PyFS/QFBQBsDsdFG1FmxdvYq3G5dLuMWkRflwm13t1tE3IKn78f4nd33UQtFU7LQGJJbojJEhhYoEa80qmWTy/MfR7/z3l93iiBup8TCLGw8wQ1A4v02eH8c96HcspnvpOcTbx2TVXmdf5GW1FLT54l+HpicRAgJsIquiCD7yX6y7QwLw8KkNiy8d4gdjOIZgYpdxa5iV7H7radiqVgqloqlgqXy49ynP2FO6E0Yd3azLScp4Ev62w8lOipuXJhnbe8Z8jWR5ojoP32CipSkpUDdUlgB/Fce5//q/tc8QdpvsqIycRg2mGBK0i8iw9q75q5JU/li7RPDnskKZ2c+VX1XHEHKoH4Tf2mT+Ftn/rBIdGobpmRLHw93AIG7EykIVCyCdKHkClcWW6WDdIEoyYU/RSWlF4KU5VLF1NqnbOlzneowZs+2xH/02/8wLpkCT99Yq8v8mbPBrJLuUuD1bRHxucWtWcqayJFH8k5XHv7/3k/ek1ZBr+VjwFrjgEXg/b5O7kynN5VvaqGphdM9gg8DihEMfJ0v5e3Q/vSnRsVZEbHW7fZZP9FrZfaa12QQyUkI4gUJIuKrX/OqiW1FyqSIhVXEquzJz35392Pal2T1936HdhCigEMZioa3HxAcvGaAdIAHMIpSWZLFcjLTkMDDaTMSwCHCZahzYyf6elKaPDOcuuDRkOE6ewmnBECbeAk87bzyWVSoldwJ74prCG64+V0aBweQSEin0666hrbvumTR6hBOnMrIB6obtVXNQHWnsmUQgBEB0HcLwMH7rCeZhNtXmwcBxaeTBKK7/V8dwBh8Qn0MOwrY3uBNx1abFWwYyCA4NAC3cqFwS4JRiF/fHrjETSQglMJlXtrPBPFqOnQZYSSiSGZiNHg68fEZ8pYc/OTNCTnjWhjNrDhICGH5cHA0QuQ5p6faTGaU6c1d0UDzP+ngz2pKE/zRddbKDOCkqqSCcsvAkwckEOB+522e56H5X27mChKk/pZLteYMDjmWA9mVrVk/IF95T5ZkXmZkcsZlxELaIEM4qyk1V+8Xf3KTcenkuBOZsMbmA+miiDhooNBwRPAtiiHQR689dV+PQuGizFtlh8lQkW+48oY27oFc9UjgwILNfviIYxqWlQEM7SECgRz8AQOEL7HBgvYZ8Uf64wgXp01fMX4vfTEABnIJv8jFaRtugM04wTbwKqCRRhrxMR9tOEAWrIIOpkEuTgMeGrCFnS7sbzETSCEgFsejUYOKGuaYmjk64hHbFois+Sxbvszmzbnqj3ZrVK10GqoWr3cF1XoZ1bsBxBxtDfBxb0x7RDNZ4XUnNE8bHdB/Vp/ew02BW6CHSHEI4l+TIFHSnp4iHUkG+yLzyUdUogpe/fBRNc5M06xFkE5dyC0fDZfxP8C7WmJ0+Or1QAXIwJ0EjkAmlBiLxIfQBaIMTPjMgSJhnIIl7FvCI5lUhnxyteo6pIFAk8GGwnQGWo0yW6i5psd8W9o9t9urzAG9NxY34t3x6HATS5SVejsuYzFjK9YdOnZiZ52HosdXa6g2zMTj3kIvJgIAbav1viq47aFYNq5Ui3YVfhwqRNgLh8LRM9EHr+aDzmMUJGwvnKAT5CGA5MvFdpE3f67rXCBDBGpKvDEpMfs+RAeAsNIQ29ySx3tfFma5YrgOkaS3QqxrNr65UjY4gMWYEJIL1XR8U6SRuSx8coR+pguJeCLAkqOFV3wLWTS/NjDjIs74qQ3KU97GCjKNZT4EOEexYYV83Dl9pbytIX1U82poNoz8Br/p85+Wb10A5gmTcsGJCpon9io6GrCR4w2QJ+da/c6pBXyiXEsmp3awkYXcOUPVbyYLJG91bTdoFGMZViY1OWiYkLI3kEhKi0TvY8Eqs1nYQVziIUPMJ+PNVihSQzu4gMM3iNPfKlqX4TYvDh1vq20S7LNfErzgsTiQho4FJWJpiAKyGY4qIgpDA5Tn8BQP/XH9AhhjlIf9fE0GoWFqMLWKISOV0Xs64+Zm0CwU42bI03geMtl0DEwMQQBzahlWnjxxHvk0N5wHD7zZeEWKUCygrqlEUAVPuFoNbrY8yUMDXYwCLMh6gr58nP8QAfakc1Zzxhzq2zhujlmA3oopgyO7j32CvZnVwRrEqhmNsmAxKyucaWCEM0S0u7RfIIA6hjIu6ETQpDscEdTkrwhikd+Sv38yVCT7yU6ygDSIVEFKWBoJYHUE4mviT8RjhI+E+4SbBIBLkBXdJbX2SMM9/C8tv+RM6gy1KClbLPMUlQ4DlAiZlaT0+Iw8RFNeIKZQB6vHMhL5ms6sVU++w3ed+zjwwII7v0RMri/0CuVsibf8EbMaBL8EDIOqx3z7EpZ0omEIRibmZstG1pG95xgR3Eur6s0ySaYyj4Us7ewLhPmKYu4+Lm2fopvWT+kGbVZIB1CFJfMGpf5+TxjEb35gewmVV7M/y/6t3nSffRNZfRkKgyOQKDQGy8PLxy8gpKCopKyiqqau9ULBfDYX9OYN9sc5+CfYn3aaSfO0ZzlPLnL38GwVc73EkVzFFxQGRyBRaAyWh5ePX0BIQVFJWUVVTV2rk82Xq+o8uODu4fkCwRyqm29UNqDFx7GP4br396mZTQsjnDaDDIbg4OJ9yNes78f1MvZUDVUk+xsc/4vz03JvTSdgPbxIOXkpXqgz29OdnGeK+mMWP7xnxIPbjV8jyCqIeXZQeAbMjm2OVrKzfwFTBBC88pUqrjMcWyHcrelRBcWLXugbGBrlcfN7uJf0E7KXFFTsgUODwoK/2fNqj5RaF/lyDuD0X0sdpbBBGWPsjtnGmnMHJ6+2LCw7fXDC1XUp/D/sLah4sR/icASLiZ5GjsncHKDK2J3ynp1SSpcUhB5DeplCPD3k+TD8O/mEolbft2EPCTlSas6OGpNW0J5VU6qPm7H89oh7xzBUQgAhETEJKRk5BfW2ds7fFEx16QqGnH/zknm0sGUFaiYEisa5Zl9AYXAEslC3omcwYHl4+fgFOmMyQlEiRTTExCUkpVI2ycmnwqyopKyiqqZeGlGLaPd0OgVEXwaGRsYmpjHrxlyxIJYsrebRXM7BxXENt7hnPMKzNQGUA4EhOLh43/JVU9vf8b2I+qqqqqonvhk3RX4WDTFxCUmplM1y8qkwKCopq6iqqUej1or2XCEkxhifYHwjQgjx13qer3iXA0VPfCdh2drwMCF5FUMIOQgrkZCSkVNQf6mtXMGXoQW7H04QIFFoDJaHd8E3KhZI9bhsRi7kFRR7MiJwAgAAAAgACAjwhniel3np2sRf57vdH5Fd0vO6ctYo2uMtBCYkIiYhJSOnoKbNugmXEFqxzb3oTmo19WMQhkbGK4YEIU9kpAyH+AQ94YfAhETEJKRk5BS961sZt9Y22yuSq/mCwuAIJAqNwa47JCOIkIKikrKKqpq6Vr8bb2QWGOPG2z0/D3QF6I+3+Ptf/HOnyV600H0yF4ZSD+FsGef1MVv7mXVGnPnei6ESBIF7QAZDcHDx8NOrsjcCQiJiElIycgrqpG8MjEzMyZV9QWFwBBKFxmB5ePn4BUrwQyFW98DT7KfVzvmuoKgU5VBRVVPPDdEfl7Wr5Bxz3HHHqYf5odidSfqyuZzx8JzjEjaT+lzZ3MKy1Q1UAoEhOLh4zXyVcY2+7oMOGByBTNSIxmB5eHudSxThm1GkiiK2EOcWZuzX/FKjXMh/XRgHxI2yCEUoYei88847L0Moy7IMITfmZqS62yPjqT//P+9ToUvs+bbfMZsQh2p394inM9LFxthuE1PqD8w3K9ugn+1wfp2wsYnwGOIr5fK4BoVyJhWMh+jDgGOx9zPjR4g0qHsyToBuwrth9enAITkNwPy4U/NvBjYA2Z3G+kogAqqMAyD7wxhIfrqEGcUffgfuGZ4AN9L5rtgzvAxFj0s+RET4szZRtLAy8efhufHFiGNFhkcBfnJCRUJmMHTcfCPE1wnP2kgT7QjUKIFkXBOLNPKYyQjMF88g05dKPSbAYyGbukweZ1qA/2vNGL2Izj8GDuHlG2s8YqU9ggT4p/UDTC1P251ji8mqGmAzMum/A0+fampBD9lhLuGXgYHooy8AVQC4rz0CUIkIBycly33kass/ut7QggOAy4eWBlwsDGFW48MCNR/F6fxmxg2LUhMEOOcjNoV1Ur9nIRYRRtnqOy40eT3Xvt5cOAKRQJEdlIlkEplCppFFypJkW+UKBff7d6hkFanH9rYn1wcI6/wDMoFM3DgiPP+dYE46x/+zf8q3LV/fx5FZAPw9G+qfeDL0n2UfMjhWgGl/eQq4Z9a76B5nghu67i2yz0pn/eWg/dbbYIUL5lltrh7zLfCLn/xsiQNwqGgYWHhgCFQwsRASUnJ6RiYYM4swDk4uETZbZYs/rPOPSAkSeXhlyJTFp0ChIn7FSlSrVadeoyaDDTFUs1YbnbDJb+ZY7LRzzjjvpMP+dsQou/zuqLuO+9VMs/zrT4csc88Mo+02zVTTLUWCRxCEiIyCjosNwiHCJyDEJKOmoKSlcomGnVUom3AGDWJFieYWI068JOlSpEqTL0euPMkCypUqU6mfyyoM0t8AAw1To4VOlZ1+tNV2O2yDg5vv9gBADAD3BnA7ASjbCkDVCwCiJ4A/2yHsA8gX4FDgFHlCgUOAMI5DSa215AMjxKxombRQ2OgC5Cx5yMkAr2zy84ENtpEuXxWHZyyIz1+3gVDytOGSdIRHK9UEABRWvHSS/1BkvsunIO34fj4Sv8G55XQK2ZQkQYyFZp3zBvFjhEQbURwSi9B1ingul8jVqwWhKni8hiwDXUSX0iWwiMZIDtEILBAkViihTAYEQxyHjyYK0jDEXCUPMnIhrpihDvFaU6NRIbxbOrwkzIFgLgS/OY2JKWKuFcU4XBZVUVLChfwiKBgKERfJ2RBDwGOxIlJVKWpIpYOgpjuXK3JwVSJujDKdSSwZC4QLENqDAekyiBCbi0tqNImJEomsTiSCHfKQaA6kzODCpkWajBpsghhupzAu15MHFWSIuNDK0HEZB4JIZHIxvshFYsYYnz7JIIjFQiGGkqvxkZjEKiaJMdgk7OO8qbH0LcwVp7GY5vjVsCLQ0dg522LHoizB5FY2bjjyJOc81BkxjEkRWLCAhgzrT5tptKgnJwSDpWZhGrQm4RT29muI0kzu9i942s5aiFvo6RCUaFRBpmghdIUqChzEtbEuDuWDcIpxJfbJqAAm4WwepLkWb67yJk1HLWD78T6BmUprj8DC7svAcpPMW0uCQVRHtxYv4exqR0fLfYU68YNq+cfgP9S/JhxUu0dUoeoW23aQ0q0ibRhVmhy8KgUIrEpYVcgAnH7kbmq9V049FhkQiteufHjCAhk2WAskx6NRgC6FEDkLrOogFS+rc3EKJsdQv+kc0/aDzapFe9eYoKyrT+ylzg1G1gHNXpvD24Y6EXLeXNSeujxFHV+VJJWShISbpHiCyhJg5+9CGvqIU2onoTBpb9oDuK7im8N94wCJaW0G2G19f8yrsLzva4Xew8o4+he79oqx+H/GGEbhWfO+zEqaf/RjNVJ5GUm/9YKFmf6IwgYylbi5o0qcNg1XNq84vjfMuVdwXVfXqryL8wOVnnYGD7dZDhsvdIuYY+cofVKi8qTsLGR1e644Jhl6ljudobhslP57N1T1rmtkE7uKH2MONrOww2FgsL09GM3LzJt/MvjmxF7Ce1Nqolj2FiBp+/lQ7HcXWpxYmlspP8YLmcbOL4ZMp/01XEtebiqRpFZuHj/WE+0a61odryXIMXkZVQe3azJXl6TELZNamJOo9hGGHQc9c3otffa7xrueNX0I01n1ib1sXvmpabjmDAFXk4WyNT6KMijvzy/+QVDpXVOkJQiRX6J/rbB564O6HvF4vCX9mibWFxppBquoHtUCyMoQaAGJ3AAGdQE/9+2FVYH0XFIZyFS8LPsaUfuAVfSHZhMnjuxPA8J7GHFkKRmEBUkfPe588/RepvXaFS0UISgKEnn+MXrEaA8G3QlgjoyL3bk0cL0q7zEa+3jALprP6CYzKc9+Wj/rvrGFGQCKJPzGlzqBXoxAxWQOGzbN7Vlh2HLtmpQ1yzOge9eSw5j0t5Ecx6+OQwXflRXK+0/IfGt5FbYVKlZS9KxCd0APmQIGkW9jnnwfsw0Ao3lRYFmd4I8Oi5Xlag+pifmNEQa3XXb1qAlOsLZgSMQmo9zUej9RHAcrEDT+iClGQntY2QOis5+SVs/QyvTNE58oXC0Oruv1ZTOAHfQDSlvNICZIKgZEHxKhKn9vxAfQKdFT/XTToxi4O2yA1U+7xkQ2981BkITfnI4CwMiSe6pyBRV1ZGKX+CYbUA+1ODyRz2VWd5tBnqFgnAB+LvF7JeLkVJQ1q5OtNQZP8TyIhzKUc4HgF+JLbley0QjSzF4r9NqMFuPgjM2guvnGdZNtoz11PIujPUNsykc1wRY3b4L7/sNlQLzVvD/eoO1x97pk+bRm1doqex3k6xD7GKptTBOCLELC3jfk2txKXE3xNq8ndfDPBEFQlIolLlfmVKImMoO5atg8H4my4X80Xt5uGs31WWAbJyxehXVgVyMPrKhHCm2p1fRKLfECwSpzh1dNTM2MUqWR/YTEkMP7yAuTBLxsq/msFitFcRnkgJRwyBHEajiUmUzC5yDl4wrl0D/W/uxF/Pc4GheYp6Tu1EKg6db2fK2Voo2mkaNWWZ3cjcr5lyhLFKcefYmHdCs+o/hZfrc/Pi5ki/bt3CVti0KOO/kw5/9nelcr1ffnli0Vp+BiUTeLNHdEo+0pEKYJU5w8E11TEs+J7+oA6Mxz5mts/vqfnVLKseqELbHhf/+qdMf/mSfb8oWl4cP5Tfhi2N6j8GHlSkUlwpLTi4g5NCz0G/fIK3Ujl7eMyllj49NONjjYgqt4RLUrYsBMiDhCmATy9s4GlZVQXNlNiwDpsMbstwgJgONyS+Fz6Y+S7XGgRj5LMR96Ka8LKSHLQpeCcwglROCOQnA0kvyPjCSxXA4WwrFC66Q2uSyKFlI8UQMfJNQYPD1r2m5/ukv6hBEnU3TllKbNmLbYzseBYUHZLmdHewtodnvyB3wy1EHOO9F97VRBYU3G1tntOC5OYy3T66jl05eZ1xpWUCyKy0Rjkjh91UR68Xb9utow1CKHnJoDEJ7m2CGcoh8PY3n20Cx5Z5dFra0SLMtf8Uh/j6XSiI8iL2Wfnte0ZMThDHhVBSssaXwHIn4pTNhcpa0dw4tun0LBDuJ5Pcp6DCuhMKex3sjIh2mX14qoitnKMqKxBosuCnwU2cXW1bJx4jTY5hHSb84J9Pu0a/WhFlVzjrZ2T3KSn7iUJ5NK/rukrQiCJiGRHBJNR5447ciwMQBvUv7eeXSdbs1UTfSGPhigaLiy6OpgKY9nd/qJAPMlRJ1/CjVO/pL2JRsMYgkdil8VgjzwY3shQB5WGSFxbEAI14jUNQL2nEJcwn+pK6KBpfQ7grUQnQo/16FGKc8Ufeu5IPOt3EHO5qhbczVqzchKHFprLayHq8oIS/YAqHLVjDzPe8HsPUIRW3dYYTH4iVCpSSYqu0UuznyYik1klUnCpsCQqD/xi0bN2gxqfhDOdWe0ZrzrUi7R8Cn+ReFDjXoV2FgYx915twIitzYdqgXTU2ufEnxDgzDRarXNsm4uos+qCICdcaAXLFhqNMtrm8e5w5NQk9CsQRvdMVtwCCS3Q9BhVDVXIcNIyThqmf8Mq02VmCKgNoNzmhADezBdhjNdjmCyKRj90SPDq8fnenHtPBh45tbQSGPwvHHlP8ZaxPtxqBLeiG0Z/IR0vyh52xTrdqYS1uihLJTIzgy93keEq2e+hEzqCYJmoxsRavqtFGGGbNFc/XOL3mfexQXuoBylDiv2S0HQxRUMUogbc7iJ2elilRgFnDUChBpC5abI+gdlzgJ8L33JN0vU6CWKZaUDOeSSkFnYhU4nq2PQhsdhgSaU9AWTb4jhoCzTFEEiA5aDm9we9pcMUAGPwpiSrVtjmsxCC4rE7Rnz8izAOUVLwrUG6DSHwNG258+fh22FpCa+KG2Ci9qstPhKor0aHQKf8AD9pM8oh1TYPOJfXfL+0bk9u6jvJnnU52k2rji4qyAKyhNR8phBWe6SHq8zbJ4Pc86XlLEwJExDn8ZLEc51/stInpjemjEQOT+huCjKXrjAEH+BMrGgS8q9yQt9eV4eJg8YnLE5h8+i2aqWIx0zEOFKZIbQi6VoomHkoHocBw+Zx8NujgcmtpW7rh3Z/GbZHGo81VRI4LPNhSJZGVTpw4HlbtoKbDSXpl5KZgIDWcgw1AtFJj0hekyWNFDNWgUdTq9IYIra9LT5R3qItapsTbdnHYagnkYrO5barxPLtTKfj37k06WUsTDr1cV2u30saKstF13bBS2m/u2IYHf5E5RRnz4+VALqlz0XSRVgaUcpoI9MxLwsT+aQScYLNjwvJem6oGf1hPP2W20ojEd7MCYeZCrDW+lS3AynNBkKpHNVDAUMtVakwUWRSDFnSVfsaYKLYIthC51iqP7ZlgG0WsmrYErfEJudLar+QOxUaC62FpgioiYJfPC7Uv78ZVy/OLo3bs/Lw120Qqc8yCnM2da+5stOstwa2VhDeNh+8xH4TlpJTdQFw2S5TJQjkwocRys+RSj5jaSPKNitE3ZxW8I5eplvW8SpVZ12QxofVV635QLN2S7ciidVsk1YOFZpLdKVbLSJXV5gKu3A9BmbAo0soZFG6nEFyk13kCniBQlLDhfjIK7zEO6PZFE1aP+pc13aGzDAmkHissHlHXxZnc2BkXYMnbG41IoQ0mbdhB4VQF3q5RVL3cQVXYkZbDbGU3bk30mhng+A94TFV/at/75G5gxb9nA8xzHBAHhC7FcgK5LOUxDFx9MVdmV8hcThYd8cRRs1qTasqPLE/PEGQlDWJsvhtA0HEbqhZ4IQ7nkIRkXUW9jmbadR2h76ywT2POM1tkY0jKqz7+KGp6zp1s2NmGa9lWrRvK6aVbyh7szy9GYmq7tLKG9aW498xDR5ReCONltDAIV9/eriEJO1SMvUYwYlpU77/AOG6AUlDaR5UPalWsSr2erhU4OwDYmqNwAo5FFUnCmQkVCgaqX/hHTa1l5ZcXoHtBJHfSFJTYfRkUY68avuLnd2DCH+UJCVW6qxPG/bxrPHIl4LvT1z0yv/bRB2POI1kmS1syq+Wr+6gnIX2rCNwJ4HA4fIkywyGK+2cHrXcnnLqGnRvcuvjRTOwin6COWF9wW2SZtX74HS9tmwtB154gy7w0e+hrdcUsrCwbMWFeOLYciroKx/gSvkIzccALvu9fsRHXJ4yMSwHHIO+LH1mfD4i/fWik0lG0pHWe8//1X47HPQ/qdC7tOFQ169TV+6Ln0pyA0SLPpBGFc6uvF4j3fA1Tfev4hHmMg8dOE6s2lBO8LP2MrvXo9h8xcKtqQLkI6JGLZ3Ifrn5OnLpi0HHUFYoItPRDsD5scx5ZGuyghe3d0e4pBdIrYi96ZPgS3aNzOoRRPMSlhyBkdj6jhGvdvAoPxYH8vk+6SdoJ2rLRdUOLILrO2+DOswX16FvVKgt2cKaHnRZhFzy/YoPYc5nFZTGpCKTvnlCRarIt5/SigK/3X/hqVMTrCpZytDiEVV38jkg7YgY/FiAQntDPy21TvSUdHPOdKb6hxdUTHKmZq5LwdLN5nSzGZTerrJnA3GULBAF0oKm+QYxO9eZ8bWLeTDxQf5znKdJruAv78Yackxip9/CV7xAX6yWyj3fJTuRTsDYBw3ZVREZa1zYkaqa1RVxVhnmiyVniyYnWkRMA7vMPo59KaoPPFjkSXThGVaQy25WTYzV46cKUzjvo/TassRzo4hn2uRn8WfJ0z7LZkCODLl0YQ5rVO1hS8SG4ewlhGXgTbRQo2A9KsHPOAaEvkvusHPpTwIcHGvIDjoZ1ufH4I2q5ZxS/jTB5pN6T+gDQ5tqTe5nxaMm171D9vONQxb2j2Bzzt9/syZpLSxV5eGFW8/N51pgWnD3jZn3vLUFVrNEA0PtAaZijsFRLQjYJaev1z/C5X8M2UJ/WwwFrhTvdg8aR/ilhVhb/4JDn7x2jFseYihHbRSTNbDBaHtjZjp3YlPPinaXYxtLt2sMBzHF6DjywIG8FJHOcsrnWNSM8LGl1WPcHn/+5o5xmWkhY3tV9XlSt+nOPSLwK1WrzyxWa7YfGKlWkUPQNA2xzh0Yia9VX/dvPC3XprO2BzB3Bt0I80wIOIZKKZ4CO2uQD9bpyfVPrqkst3psfMXrjNbwkIkYwdUNt7A3+ZDKue3lLTtqs+tW5WIadPMpit87gRG7miJ85oiSVZcaHlCvNKyYmdD27/i6LuADR3AFK8UI1Y80h+M2//i+AHDXfiGvO+jX5ZvWfCkn2Pqj8OmV8qdq34mdVD66wjBK8vdgYuuTAezyBfmTrN+XVWZHBta+Cejr+7/9Ktw+ProDXk1CYOok7KfIIgVDw8ALG5Mfoj/R2V4t7e7ds8GZxcXDRZ/RjjcgYkQ01XE6jqriIkub3IlhXrYZ5sVzMCGviVFrd82B9OcfTOpyPv0/6kbg0tQtyU+NJDl9AuAajcPGazVVKh5P1xCO1LNpkADenEqV7Pf72AHF/h4Gc3RmdWa9igBX0JaoPP5ZpUj3iqbpk2SbBGjk4oxc3onXxitbcuqGhYFBgbJr218SjEqel+d+Hps+YQ+9Zevv//GfxmVfk7NfwLkQbKIb/Buwm23VTT7+Kp6S45B/yJcoUn/R5tjrA/t6dkdHH2TOmsXAXkWoVD0e4kvs5fZiC8zwRj2hhm5jb0EPLV644yqQC8RRjuVw8hwL7Epd8bGYUJ8L6G4agbwrjnaNv+cfgcqZqyLv21+++zbv+XuvnD6hN4fek3a/aCBpknSsQrrkTFn0H1nTOZ1G9A2jYdYcwXtXmv0Rcfru8nYNjwr+dxrJZarc3vVAVuoujg+OUeHKe6c99IpWzAsrRP1oJ2pf+zh3ZHxYMsbGCZYYZ6PB759lm5Prxm2JJ6pjCpQDxclSsKdCdgvum/997HFyVMKmdze9SX1dNn5Mk6o3gudaOfYstFYfyArS/+pWBrL/nFebfgEqfCtkIa/e72O59mZ5gp9NjAdjrrZRL9IY5xo4ECgy3SEc+/SqMnjzoah/L+uUTgzgZ0c6jVgKUgAsNFizOPRWU25+vhkdbHVpi5xJ+fqknbDBCsPluFhmGCBedY3s/ZggUbUyO8oxrDIYlJeYz2QMPUBmc8dWhnvDq3IigvIdJrRtpYos4i5pMepgrpimjgwz4ogoQQeS70Ad3U6kxNekpqx76RcMRu8I0vqvGR1ic1aba7eZPXoMA9azAZIAEtJNgh3895Yq7MRGC+D0/H7vj269sY8NDUSM6d28I1oZxqoeyw645hBQrz9jIOgTqJbZihKTvSrbVhAmZ6AlUWGmwIp8flKnfTRB8H6AVE7DJ4rUXcKth8PKDi02gHrz3DoDm0LZYckJ7qAnblLIrAlCBBVAl+yKhNIeen11riskBKjz9M+PDE7tkg7UOiRRAw39cZNKkVRuNtLpHCv7h9QSJMElcBzrUNYlxnM24u4ApsJ7KaaAl3oaRk/yZClcqEL15qxvQvQoNm5asJ5tKNp6fvWKUS0e53ZsG4KfxR+PGeh2fgZUG4oU7j/5HPh2y9eDuOwBw7BgtnLNMe4y2IWG00RDejYKFNJamyRLOm2KVsb51H5Qy2qIndSts5oGi+LZwZcGYKBnxU7eHcsXNjyGua9sfC4cQTQStEab3qbpHXw9z0zKdy1CVFDU9aiHWlmU2OnYA367Xck+HfHHrQzFYwYqiabacBgXXwdM/5fmqx3ogPm0/qeBMY+pH0tZlg7GaW0DH4mHAO3+k2mtAZ0dDRWmhpbJG39bveE2fPD7En2sALwy1J3mmNLRfaCrmZXS82sTsL4rzScn9s2a0ZDo9KenQxeUcxJQR9uMlNch/t2v4MNvD005rkEI+a5IojqbV+LYjM2TksEdy/PC5bG9XzYmpMqj8qNMgzNWePcXz5W0oiuEWz3QZzMGcHENVZmcWD7YN66jmLQHkRn7qloux/TJy2ncFtZ0yc/R2zpaluSsMS59lMiPCuDruGz/+WjOCn69FeGgM8xl6mykswV0S59eUpKP70zrT3Z254WZ6nMTCxVmPexB52WChPzhGhYvkCyux+4uGZpqrUm/Onp79PURxbPaJ6RElq7ONVSHfHTlKlPW5ev3nzQoIP7urmSTH9Ezo2Eed6kXyYppYQ3x9bEOkhj7OzgQNAPwIgP9WqxJKQIMX76/O6EXPW9f0zF9agUrU8zKf+Ym41MLh42BUPuP6Cj0P2WwdCAMtGGiOdgQwfKQtv1rd1vT0TevHAv8Viu2p2g9vuOu60IS0rWCjdV3j3F1NhByh44xMs3pQnYOxW0U7BAE5oM69fW5B1BeQdePVgVTF39YAeVZzN4lLy3NRMY7EnYHPppw/hfbh9HnMRwC2ajtMlfdzbqmVwJNwvhaSmUi3W9fKRun9qjDbN4ypQeDk9r4vsE/XaNY0I5sxEGsYNMf9pNUsyt+Gc/VjCkCLRoTIEGdEduWPVgU5Gnn/QLhnXda6dyKF8/yRLsJiT+ciKCccZX3aVp+CdXw9CNnxiURfFs2r0bD+6pdb7lXohU+x+Tt9/cDR1E21MBRnFk8uWCdPsEfpsfMwU60Xa6uWguRdRdqcP2Lvj4DmvKAbI1Vx2TJC9xrrEqYC6xms8GKPpKiq7duYqRG8Dh1ZBnvddQiOD1w9VAyhRPXLczO/Cp935ZTllvn1JdcuV+X0r6Eb6uFTymy/Sv0iYkDydvufRnz3nHPPOYiK86iTxcosdGWybQB5+e8xadmJT+SiCVIaAc68K6Wv55BR5fWfyA1B4bX5c9eOGUB2hBbEKCbaF68qDB9bEJdcjVTYv6uSc5PnpID8GRXtLbtNfSrFe8dzj9W1UsXvLqWf3CeZufmjauegvqKWqPmnvi5vEt/dGFezFsz0LUok5U8/44dGhLN797AYatm8QHuyl++av0dKj8kNXSp4jX4LMjdZeHZDh5EuZW7tQe14jq1y3gU1cv0vP4MuyDD935Ap0cwBilBlUMoXM5v23+vTuaqGeMwwINaFKOaWDpjUO/jlSTFitpRLCZa3wAdKTxz/odQX/cWQAWLq01x3aMGrAAVbSxfftosDkIEldqDS2OHU3pOcHk4janC/9F+X1I7r/m0xZZlV1oQ6oZQ+kxWcZBOZF4O86U1ogcCMUmrQMNTaT+/j0ocPOW0kWz5G9cJliml6TFFUqDqpsTG1BXQ3nwnKyPZwMAufXg8MkFgfkVPE5Gk3qo8qF8udQ1zq3ZtmIHI8F0JPpARyqFjyeKbp/HrA/+AzpKQonZWuwevfVIvkMM8dHHIIiVlrdiNYHQqYCbhG+e4O8godRsKXaPDqocQod+P6GKYySIXalYWwY9gsp3KxTUkJTSPVGIMSPMnG+1WHLT7UYRlpAsZX7KfcCMOctgnctgwT8jjN4B4Gd5WKEtrMDusBcU2u2OAputwBlmK8gPdUzkfxcIb4rQF3z+d3ANSa6wRvlk5fQKnYpeJqmIyq2wJSf1C43MllXQyzU6RoWsPNJXakneL/rIHyWGSJHcrJQQSRHHFxXBzfIDPM3Wbqdek7YOO6V4Wy9YE1L5Ch/TPGooc8LtVxnDQANNXaTmjf22dVa6I8fitZxX0GZ8VCJ98AwYafOfBj9HzYqSxLRyLCa1NdnTlhYq9ZmXlcYQV67gL1xgNq3fwAcC2FmuTIvVZ5viasQXBZPAhXBlcFkqB44I5qPz12Dm1WtReO0tJvvuIZ7g8H8p+n/3bzrowm3sRTOFzrh+WnecLEOjHsdYN3HfGrPE42nqjAHbjjh6w5vv1dCZaIbzHBKcOqE45tv4d2hbo/m4+vlE4k8pBk8QixemTwBPB/AgSPHvvxD7eQ7Y0I0iPz/kcj4d4zJIk8CiFTD7k/DlFEgVLDmUrbsL+N3rLcYJbciSGhnZTSBZClQJ8Zo8S3Lc4IHxgAb7hiRFjynOUI5NaOiX2qb1oO3lhI8C7MH4Yd3gEEgJ4sY1RsSVhbvj6gdEJ29GD53nsnuXcuAnb1m8A5vBCQqWN4EfJijXFZkzjjEzL6CL1mHY/HrEh6fdtfJCeyCq1F7y/KjUoeOrAYSktsQmDfDIC69Oyr/waP2vE1WxcVUDIhPiGyNja+MEn7N5ykUH8rvPJ8sisOK0GL/UtJ3/jc7j0ZgCPpPG4wWz+ApO4y4m81QjB+q8lOsELVSkYSJmXrtBYK76MpeAV8CNFVzx/3X6Ryf6hiZFjw5kKMclNJSntmvi9iF971jw+c0oeugcj3V/KaBNWz/eVbM65dc5JdMWjAuvXR3+TzMYI6L+SxhQt36Uqfnhx9u8AY2bS4KrNP0kY/3U5ZW7gmglk5OCW/PSFxczJf+LzDTvqkeJyAsWjLIvCCMnaMsRnP4gg3XMjGMN3yULacmkG3XJHr3ReIXqZ9AkLuN+WE+NprcIZVJqCwOM5/Ob47VgyWw/zTlGeFRE5Ro0y4a+4dcNyyril+uHM1NXSaVz0pg6asrsvxLE0cDmuAGvCMPr1s8wVlL946g/rYpdqo9XNsm4o3eT+JgWVxfGY//Ipa9SMulSQTgNhjisgSzmlSZNxGwELUcYv54zG/9QhyhmtIob+LKQRM2+eKFuJYn6/01w7LjmfRnjwjAChfn7kemD65oqthxma4bKRjIHEEH1cVFekpB/dzt97g4fKsSVfYV4b+w47myNRnU9l+W0+wvtTleh3e53idkbnp9b0FfJvFKu1fh6WeC3/U6/2Z6BcSNKhaKV2fhFbSiMlRN4B8WsCTdkwrc1dN4vXHocBN3KVgcSRezDjPZgRukviVJzWJ4hNMUkDoZu+FZz7fbsAAYGUh2bwtT6OSrHEqdSOBvol4HTJ1ERzs35HHsqre1WKo/UNc3qLLiVAtPwghRziccJBknGF1Hppgu65dwpDnD/7z217lkyT02do3HW3nLyIBw54Upfw+DDrmmh6s+rNREBFzp8BBj+BCtqgbVwq99sTmkbDtBSiL2LLA1Dp46wRkU5uk99ai4U2lJq/a3dikzvrCO6+A4NH+/tqaijBDx5ZNBU84JkHnI/VjIc8kkFFW1WLx9b+H/II+U0/C+HqCnBYQkNkdFVsViwe/GGR4T+NM4Qu+lNZDpz3Rp1fZ7TwJP3Bk0VzGAPHO9heFtz7RPx44sQ33hKdcwVuaMTjW+ios7OCON3HfWgY85NDudmp2OJ07EYrJhn/S5zW63sl1f9Jfvn+x08OmLJt0i/6TovPV3xYsOTkJsRJbr5kftKOYHUleMq0iaXPf92cGSJypQHVpMUDgc0wK6Z1Z4z/B0Uxsyzq3e8Ls0qchTRTKqGcHhUB5NB/d6KXLwxKs3oovip9yAtI4/qV7bnTOutSE9V7nbq5B4HNKD9GitQd9gSbeBoWa3bjfPjf2ZvDbuZ/WEbHoPt2K3Z1zeaWngxa3dLNLqBIiko3sZ2jjPoZznZtyDnWL2+WcMFgU2QdrzBMDsZquIkjzMYml0w6fub4wRVTsk32fdiVeqse+zmoU6jypwbEG13FUbGVOu6uOOjIznjtSNiaguT67kH0XKF6SxE4oV6VHPbvVCnuKQa5dyLVioy3oHU7dC7DIUy+h2EVotLoE5vu2qu1QOT2L0mhTz6AxRZGB1bqxnBHRcVzRuv7YqtLogE0Fblpu18twYcZCx/f5tMCpmg1VgWUAgkHHkbExxVj9q2WAlrBqtVg7Uygl3EWKHK+qWWQq3/NV0KlhNRG4GnHq3RjFaDnK0cR/3h6eASbChxhTT9eD2VUnssS7WCYbATINdglXqwk6dcfHSU+hhzGxlHIlAnWTTaCSEk8u33KxgHNQL39k1gyFZDZCMC0IZIwyz2XotWYznLjhoXzT6ZVl0KJG5l9VrUWtlZloFEUp1Ga6k80xjZgAKk0WAEU3c75sFAPPTYdyq1/VYKjP4wIvTyYuNS/FhpsmNL7/0JdjF4dUB0cJ3PnNiz8vlPEHT5+epVSaa4wu68Ck9tjfSsrWwGS9ubhxZM74cax5Dq9jqLKWn1queXIein5z0r7WYfMPk58yIZiWWwYCBm0EsG8uEyRmLk2n84aw0tDUOmB+X+l8ePoGPs4NWl/i0teRE/NNTOdBVULnMMqo6cXpyODUzz+pWGxPzMeBwR1KSu40gCy/vLyXSSXRmf91WOGNcPrpWI1DJEpw0LqmYzSquECa5wjT81pkGWkN0W5W5KzbMPrg1PFx/YKpGn3yMHaNqvq6gkWvnhd1Sa6+tsEZm+OxKQoJxBZlepR4W6n2ObX41G40LzKw3emEK9OdOl3PR71+k3pFBJz3+hKfd12jddNEiYUIEnEHH6KfowhyXYH7/slz2H0GVkOnGxx+taporQC0mcoP/ZhdG72SPIbAuHUzSLSVUmAfCv6nEx2uzBJRv56aH6lcEeNJqk6vOjQxF/n7rdKLaVpJ/RAN/nyBJ5fvPsqU7w5T6FJjawRP8/htk//r+8L/qLNj2Kv0T7mx926yIjS2od8fqbTXse6edd7HK13losYjb9TkfI/d10N9ooSw5XWyKdZk2cpSAjLJ9P3jjhSCKD9nMTNYxQy6LPMi66D1J9WW2qrAxtiy9H2+rL5Fh2q3p9DU1rdo6uNSutZEJHuN9m80eE2nILnn8EYUdeki22vonw62rwJ8xXhPIRqxJGYsRs1r5f0yiDP1tc+6LzUC6aExktyInPQSKjclEFPzc6WpCdnQODtOO0C2UtnZLJjMjl2z1HjZh6LNmzU1me7o3lMn0Z4kS9hpFSKRY3p9KY3DPX+JkGt7JcL/x/RUWYnPGVymSxwN4/Zbv7M865aPMMMrmohfaR2fJZ7naEn2eU7OqTrUpngiBqvwsK0TClpzK+jLdApLqQy/rGCsyWyn9rZMccqH5HCSK1Loxil5wER4dYsi0Wn9Vmyc6yWEOz5npbqNnne7VHwTf56CEUOYKil0H1v6q+YpSE+h+p1H1+lIz4H+85yTWzqWK06JFSdT0jmJrdp/yw5287ES37sUp1KZsWjPqvg3Ky3gtfvCHLmunAZ+LSOSuNxYu+PxW1oO0Tz7Vv+SFBOKf0mSuHkErwugueveRzqEP53fMx48R6ZMF91lqKJESzhj6asVYbIqasZY1ctD03JES79mydRBx0vQ/+y5duSOR6LidGqPLtYaqcRNelXDhxvVS2MJGXu8tJTvh4GaV1T78lgQYN4kHHP3M4n3dAnJEDWaw76NIFdGj0wIlU4uxEXuIC8EPiTPOAj94DXSu4yZbw4LJxmzTzvk97W9Qjcw53IlPuKRmadREaR39HwmKbpwSsWofNFpW4lMf95PbUCG/oFGfKzFDHiDC06Z6GJ95FSglzljjziq+8NU9eYDLNLzYZGycaDQvSwZbb6siMzCAnL2+9TPC3jnPi2cz/BgeeyZIUvxN28pDFeyAuK5Vt1Qnn/SuXIzr6fTMvYdjfXHJ5xmpb1f74ygcEJLrmsheh/LWxP5l7W392vnLuFDCfonmuEYT8AEvwKUIrdCVWoSojceiw+tattLSYCrnLkYmW7cetEN98kgBKOMxSmZI8VcYr4tyLUSti7kMOoZBE5Sn1n5C68UbDnDrkuYZVLwYv6r7eV3s5tWU0BHeGhCwMg7QcVbckpAHmYD3/z1QWqSwanfLFfsBbvl5QC+vhGq1ez//1JtXyT8/lOqv0hrF1sA4ubDboKzU8ULIJcs41RuQ5GMc5eaD+bUZGzd2/CgqysgoyBf1MFvz1Nt+Q9PmS/szOrcnMTDo7KbMsv4o/k0DREbZmtEazwgGFQI6ZmrDmNOO0Jd8cWmC1eKyDvfWfakEhzEKG6rSjUTYTQkfrdBVqDuMM+//CGIRnv1kQDphGF6VX5uZGXhfxVnNXi/oMoYmV6aJpT9bdUIvXnQcH6XXK+XVi9ZP5JHpdIzE+sk/EXc2r51nXI3MThqaDSjobHqlWT0fYDAgZpVYNhLkT6+VROdtx9uEdWz58R/BnQ3DJcev/FNbLc9kwo+PizEFsPqfTLZQE99/pplNYt8/FIxTYuDCrPTts4NgDYGmT6loOO4rCDqoxYS1adqqRq97ErrgC3uI4MxZ3Tz4kyl+8uGDV4vyC/ILFqzybFtcYNk+ePGUGaOk1BRoRFG142H6JrkZZL8tpB8hqPjGBZynxp2ZfKETEqab857jd/D/Ce7RvKtIRACdFVwEyon79SPHQhx9f84Y3bh5IrWY1pgeqc/P91Rm+oorCooLy7LHCYnFIskiYHBKSsuqv9JKit6C4qqWwvMif369flBKSvDfuJRv/mjsjx0KjonAq7ULiCRa62AfjpZo+4Hc2avsc7QwY3A650X8a+MpYFppxfv9lXuoic/rDC5cI4EQQd/mKix8j9zt4wRlXhSIQfJVyWjbG8OnP75c45DZTq0GDv8Y+SRtrgO6AHQzlaoNSZZjj/VUGFfzrHHgLAm9CeIdg5BD446pog5bO5nt5NNcG0jXx7nUoX3ghnBE8r3OZdu+DicY/d5PBXiutJUgcTB5Gu0evIYnF72sYYN7xELGDvWXrZwrzKIskZLKEZBqLycAlu0rJ7PX9uXyXT5NsJn8VDf44HECCa3yOec3rUl3Ir6jIr5rZ7LPHlbEbKu2B1nLLBTQ1xumLeKvHgWNhMUViemEBAmNhMRYO0P1rqc6wE+opU9TToqinq0hzIqMtJ3D5KndZKne1Knf9TU6dWYgxCy6zkGUW8osrBUOJhCMN4C3Es/NVFMyu4GauXuR9akZvbAAgceCWjuKlRaxe+TQvFPXKeWS/+bWXWWk3AuwslGHeNF4+KG7cOJUSPrRaIt9WAk9L4hJmUmVrTZi0SWJNCLRJ7kozYC/NmCRNRMb1Y1+t8Si6bjC3lK7e0Sl+aXGyPq9QjXmTgXluXc1Dzhe/fd2e5Uu+Nhp7Bgd7Sk3c2NsHe0tO1Lgirj5yjev0cYOb6dan9R26/e9RL1/hZYfXLRFUAOCAtAcARH8BCPOgp9dCpyRYj2et5/4rPg1r0trUQ+D52AvdQzMfmrlWLcF66tbO7UsFWgtnp9+9emYVKOA2aa5UAnG04yjZ0xwkG6zHs9Y3jfiM7rUwWE/6WkDvOkKbsudT2fjrEOya+2YbAYJLC8edf/Mp8bSUFGSCXYOsIs2HhKlltoU/ptemB+Rzv7f4himZjxVpFWueV9aRbbBrnpvha9jwdQh2DcokD9zoSjLXvoY07zu8faCXEzosGtgHmmq/Dw71ZtvckZRnU3ehp8JPvRt73nVc3mAMMOJ1wyrL7V5jKRlX2ptGNQW3rdflNRN3JwTpGbog8S3M+fWPmPEdml/aIyHukIEEDsBLeExm1pxnR3+jEAgPAfi8/zUA4Od2ad9HDLxRsO7DIcMDgAOidwMD4eGM+H8tFMBZX1SxlrL1POJ9xQ3TvGklSduxlq/2TOK+BLeEZgG1N/orZX8g9sKb22AnWPWKbCoPuwV0jWBbeuKuWO7471jx+wTGuz72zKNsP7rFSlD61Zagdwx21xCbA10Dr92o/RGlo4DlHnUGqxh2y8qquhtI8oEwD4ASwx9GUH4uk5Y1SFV0nezE/qf0jBiO5M020FPqd48zogDUxDWutfjEdZLcWWYsYQ1KawhRg6mXomVnSi5iN3MVsk1oeG4TGI/a28gVNXRfU47VJ0jrhrfvwAquzyEvZkQDxP0vzRVYWdTxO7AyvMkJLdVCnq2ASmgThIhyzCvMPiXvDXLShTHCZ8MpexOWJ8A9+VLAP9huYalqKQl9JPaJODeRcgPNtCQ2uv81X3twvufR9OZJ97lYlWB3MQELgLjU4kHCVeBLIg4k+QeUE1DA8yNuYhr0zvjPnIqRGq7ZgJaZWE4KK8PbA2YUXqmd+HwsmMNiAlKGY7lE7AJxI1ZunmPb0HMIoy1IaQD3ZTfFWLl3In9NcnQ1vAh2JuUPwpqgeYQ0LimqhXjRhY2h5wC0HelwZUmHAbemY4PNqoScEGoXOlSoCqFSof1CpehwjXkJIwWpydWyLPLjqRa8tGxQ7zM+CroQR+T9hXgUzy8kCLfvQiKVOYTU9XRcSKZQeAFLGAXF8YRRcyEO0DBsZOrXGMcCDIBZgzUbqNIARRrVaNGgSC2k/mIt9/DyDxHJYgxT3SWNK2lJn9mwxABmAlJfmT7JMmw2q1Vz2NBfpQwaA5PwkAFHUlix5kSnwQaRsTGzvoVCr+wyUyMbjvRHGWbYg1srilF2m0vPEveQA53DLLOxEOeP5G+gNmcqyX6MwZp2Vo1OxGsVjQ0ub4mMTsDwsNNEvcao0aoqSHWr70AWDSrViWG0aMxCFhYD4ztn1dLDW++qlrH5QMUAal10XpVtqm03i5pGDa1HdGpdcMllegZGJj/52S9+3YcPlfqq1bH5ze/q/Wm2HXaye7ZDX+Vwf+nV4IoIkbvcgSevW5JG/Q3QZJCBengkG8zrsRRDZGBD97/bfboMV7Vo0651T7/XJVuODrk6DTdCl1VG+lGe5/L3+2NTTtmoXSDnNlqxgBKlnjqkrPA4Ao7IbCeLhCPjgsByK/YalHfqY6I9B4/pR7z1zvui4Kg4GiCEDjjYQkhsQbSGwmqndWMi44oD2WW3BHQM/VSI5XbGWXvstc9+m2x2zHEkNEpUk00y1Q+mGa/cw2KACY4KMtECLC+8dICMnNRcldaKLyagOFcsHBsHhRNueIGDmCHRdNfccl2fvwd15+tIritvJJRqITSdbyIMOD+A0JIDglrvNVqtCRHOY3Pb4/FW4t+Vhi8X2hMSYbI1nPpPU4+s/Q+e11ArL7e2nMrhsM08nXhqy80BNVfusN421wHc94nPidMBAAAA";var Ul='"Toon House","Trebuchet MS","Segoe UI",system-ui,sans-serif';function kl(){if(document.getElementById("toon-house-font"))return;let i=document.createElement("style");i.id="toon-house-font",i.textContent=`@font-face{font-family:"Toon House";src:url(${vd}) format("woff2");font-weight:500;font-display:swap}@font-face{font-family:"Toon House";src:url(${bd}) format("woff2");font-weight:700 900;font-display:swap}`,document.head.appendChild(i)}var Ke="#1b1b1b",Yt=(i,t="0 0 32 32")=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" aria-hidden="true"><g fill="none" stroke="${Ke}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${i}</g></svg>`;function Qs(i="happy"){let t={happy:`<circle cx="42" cy="66" r="7" fill="#fff"/><circle cx="78" cy="66" r="7" fill="#fff"/><circle class="pupil" cx="43.5" cy="67" r="3" fill="${Ke}" stroke="none"/><circle class="pupil" cx="79.5" cy="67" r="3" fill="${Ke}" stroke="none"/>`,wow:`<circle cx="42" cy="65" r="8.5" fill="#fff"/><circle cx="78" cy="65" r="8.5" fill="#fff"/><circle cx="42" cy="65" r="3.4" fill="${Ke}" stroke="none"/><circle cx="78" cy="65" r="3.4" fill="${Ke}" stroke="none"/>`,think:`<circle cx="42" cy="66" r="7" fill="#fff"/><circle cx="78" cy="66" r="7" fill="#fff"/><circle cx="45" cy="62.5" r="3" fill="${Ke}" stroke="none"/><circle cx="81" cy="62.5" r="3" fill="${Ke}" stroke="none"/><path d="M33 53l14-3M73 50l14 3"/>`,oops:`<circle cx="42" cy="67" r="7" fill="#fff"/><circle cx="78" cy="67" r="7" fill="#fff"/><circle cx="42" cy="69" r="3" fill="${Ke}" stroke="none"/><circle cx="78" cy="69" r="3" fill="${Ke}" stroke="none"/><path d="M34 55l13 4M86 55l-13 4"/><path d="M95 56c4 6 4 10 0 12-4-2-4-6 0-12z" fill="#9FE3FA"/>`,party:'<path d="M35 67q7-9 14 0M71 67q7-9 14 0" stroke-width="3.4"/>'}[i]||"",e={happy:'<path d="M50 82q10 9 20 0" stroke-width="3.2"/>',wow:'<ellipse cx="60" cy="85" rx="6" ry="7.5" fill="#7A2E2E"/>',think:'<path d="M52 85h15" stroke-width="3.2"/>',oops:'<path d="M50 88q10-8 20 0" stroke-width="3.2"/>',party:'<path d="M47 80q13 17 26 0z" fill="#7A2E2E"/><path d="M53 87q7 5 14 0" stroke="#FF8FA3" stroke-width="3"/>'}[i]||"";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 124" role="img" aria-label="Roofus the house">
    <g fill="none" stroke="${Ke}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round">
      <g class="puff"><circle cx="93" cy="12" r="6" fill="#fff"/><circle cx="103" cy="5" r="4" fill="#fff"/></g>
      <rect x="82" y="20" width="14" height="24" fill="#D9744F"/>
      <rect x="20" y="50" width="80" height="62" rx="10" fill="#F9B58B"/>
      <path d="M8 56 60 12l52 44z" fill="#C4513A"/>
      <path d="M24 44h72M33 36h54" stroke="#A8432F" stroke-width="2.4"/>
      <circle cx="29" cy="80" r="5" fill="#F78FB3" stroke="none" opacity=".8"/><circle cx="91" cy="80" r="5" fill="#F78FB3" stroke="none" opacity=".8"/>
      ${t}${e}
      <rect x="51" y="96" width="18" height="16" rx="3" fill="#7A4FC4"/><circle cx="64.5" cy="105" r="1.6" fill="#FFD83A" stroke="none"/>
      <path d="M20 86q-12 2-13 13M100 86q12 2 13 13" stroke-width="3.2"/>
    </g></svg>`}var he={upload:Yt('<path d="M16 22V7M10 12l6-6 6 6" stroke-width="3"/><path d="M5 20v5h22v-5"/>'),example:Yt('<rect x="5" y="6" width="22" height="20" rx="2" fill="#fff"/><path d="M5 15h12v11M17 15V6M17 20h10" stroke="#3A6FD8" stroke-width="2.8"/>'),wall:Yt('<rect x="4" y="8" width="24" height="16" rx="2" fill="#F9B58B"/><path d="M4 16h24M13 8v8M21 16v8M9 16v8M17 8v8"/>'),join:Yt('<rect x="4" y="8" width="11" height="16" rx="2" fill="#C9B6FF"/><rect x="17" y="8" width="11" height="16" rx="2" fill="#7FD8BE"/><path d="M11 16h10M18 13l3 3-3 3M14 13l-3 3 3 3" stroke-width="2.6"/>'),remove:Yt('<circle cx="16" cy="16" r="11" fill="#FF9F8A"/><path d="M11 11l10 10M21 11L11 21" stroke-width="3"/>'),measure:Yt('<rect x="3" y="11" width="26" height="10" rx="2" fill="#FFD83A"/><path d="M8 11v4M13 11v6M18 11v4M23 11v6"/>'),floor:Yt('<rect x="5" y="6" width="22" height="20" rx="2" stroke-dasharray="4 3.5" fill="#fff"/><path d="M11 20v-6l5-4 5 4v6z" fill="#F9B58B"/>'),colour:Yt('<path d="M20 5l7 7-3 3-7-7z" fill="#C9B6FF"/><path d="M18 9L7 20l-1 6 6-1 11-11" fill="#fff"/><path d="M6 26l2-2"/>'),turn:Yt('<path d="M26 16a10 10 0 1 1-4-8" stroke-width="3"/><path d="M23 3v6h-6" stroke-width="3"/>'),undo:Yt('<path d="M10 9l-6 6 6 6" stroke-width="3"/><path d="M4 15h14a8 8 0 0 1 0 16h-3" stroke-width="3" transform="translate(0 -5)"/>'),back:Yt('<path d="M19 6l-10 10 10 10" stroke-width="3.4"/>'),next:Yt('<path d="M13 6l10 10-10 10" stroke-width="3.4"/>'),save:Yt('<path d="M16 5v15M10 14l6 6 6-6" stroke-width="3"/><path d="M5 22v5h22v-5"/>'),copy:Yt('<rect x="11" y="10" width="15" height="17" rx="2" fill="#fff"/><path d="M21 10V6H7v17h4"/>'),yes:Yt('<circle cx="16" cy="16" r="11" fill="#9BE37A"/><path d="M10 16l4 5 8-9" stroke-width="3"/>'),no:Yt(`<circle cx="16" cy="16" r="11" fill="#FFD83A"/><path d="M16 9v8" stroke-width="3"/><circle cx="16" cy="22" r="1.4" fill="${Ke}"/>`),eye:Yt('<path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16z" fill="#fff"/><circle cx="16" cy="16" r="4" fill="#7A4FC4"/>'),close:Yt('<path d="M8 8l16 16M24 8L8 24" stroke-width="3.4"/>'),up:Yt('<path d="M6 19l10-10 10 10" stroke-width="3.4"/>'),down:Yt('<path d="M6 13l10 10 10-10" stroke-width="3.4"/>'),kitchen:Yt('<path d="M7 14h18v9a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3z" fill="#FFD83A"/><path d="M4 14h24M12 14v-3a4 4 0 0 1 8 0v3M11 7q1-2 0-4M16 6q1-2 0-4"/>'),living:Yt('<path d="M6 17v-5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v5" fill="#E07B2E"/><rect x="3" y="15" width="26" height="9" rx="3" fill="#F0974F"/><path d="M7 24v3M25 24v3"/>'),dining:Yt('<circle cx="16" cy="17" r="8" fill="#fff"/><circle cx="16" cy="17" r="4"/><path d="M5 6v8M3 6v4a2 2 0 0 0 4 0V6M28 6v20M28 6c-3 2-3 8 0 9"/>'),bedroom:Yt('<path d="M4 9v17M4 20h24v6M28 20v-3a4 4 0 0 0-4-4H13v7" fill="none"/><rect x="13" y="13" width="15" height="7" rx="3" fill="#5BA8F5"/><circle cx="9" cy="16" r="3" fill="#fff"/>'),bathroom:Yt('<path d="M3 16h26v3a7 7 0 0 1-7 7H10a7 7 0 0 1-7-7z" fill="#9FE3FA"/><path d="M8 16V8a3 3 0 0 1 6 0M9 26l-1 3M23 26l1 3"/>'),ensuite:Yt('<path d="M9 28V9a5 5 0 0 1 10 0" /><path d="M14 12h10l-1 3h-8z" fill="#9FE3FA"/><path d="M16 18v3M19.5 18v5M23 18v3" stroke="#3AA7D8"/>'),wc:Yt('<rect x="9" y="4" width="14" height="9" rx="2" fill="#fff"/><path d="M7 15h18a9 9 0 0 1-18 0z" fill="#fff"/><path d="M13 24v4h6v-4"/>'),hall:Yt(`<rect x="9" y="4" width="14" height="24" rx="2" fill="#DBA15B"/><circle cx="19" cy="17" r="1.5" fill="${Ke}"/><path d="M5 28h22"/>`),landing:Yt('<path d="M4 27h7v-6h7v-6h7V9" stroke-width="3"/><path d="M22 6l3-3 3 3" stroke-width="2.6"/>'),stairs:Yt('<path d="M4 27h6v-5h6v-5h6v-5h6V6" stroke-width="3"/>'),garage:Yt('<path d="M4 13 16 5l12 8v14H4z" fill="#D9D9E3"/><path d="M9 27v-9h14v9M9 21h14M9 24h14"/>'),utility:Yt('<rect x="6" y="4" width="20" height="24" rx="3" fill="#fff"/><circle cx="16" cy="18" r="6" fill="#9FE3FA"/><path d="M10 8h3M17 8h5"/>'),study:Yt('<path d="M16 9c-3-3-8-3-12-2v17c4-1 9-1 12 2 3-3 8-3 12-2V7c-4-1-9-1-12 2z" fill="#B4E68E"/><path d="M16 9v17"/>'),playroom:Yt('<rect x="4" y="16" width="11" height="11" rx="2" fill="#FF8FA3"/><rect x="17" y="16" width="11" height="11" rx="2" fill="#5BA8F5"/><rect x="10.5" y="5" width="11" height="11" rx="2" fill="#FFD83A"/>'),store:Yt('<path d="M4 11l12-6 12 6v12l-12 6-12-6z" fill="#DBA15B"/><path d="M4 11l12 6 12-6M16 17v12"/>'),own:Yt('<path d="M5 27l2-7L21 6l5 5L12 25z" fill="#FFD83A"/><path d="M18 9l5 5"/>'),light:Yt('<path d="M16 4a8 8 0 0 0-5 14v3h10v-3a8 8 0 0 0-5-14z" fill="#FFD83A"/><path d="M12 25h8M13 28h6"/>'),cover:Yt(`<rect x="5" y="5" width="22" height="22" rx="2" fill="#BDEBFF"/><rect x="5" y="5" width="22" height="12" fill="#DDE4EA"/><path d="M5 9h22M5 13h22M5 17h22M16 17v6"/><circle cx="16" cy="24" r="1.4" fill="${Ke}"/>`),climate:Yt('<rect x="4" y="9" width="24" height="14" rx="3" fill="#FF8A3D"/><path d="M10 9v14M16 9v14M22 9v14M7 26v2M25 26v2"/>'),lock:Yt(`<rect x="7" y="14" width="18" height="13" rx="3" fill="#9BE37A"/><path d="M11 14v-4a5 5 0 0 1 10 0v4"/><circle cx="16" cy="20" r="1.6" fill="${Ke}"/>`),motion:Yt('<circle cx="16" cy="16" r="5" fill="#FFB347"/><path d="M6 9a13 13 0 0 0 0 14M26 9a13 13 0 0 1 0 14M10 12a7 7 0 0 0 0 8M22 12a7 7 0 0 1 0 8"/>'),contact:Yt('<rect x="6" y="5" width="9" height="22" rx="2" fill="#fff"/><rect x="18" y="9" width="8" height="14" rx="2" fill="#FF8A73"/><path d="M15 16h3"/>'),camera:Yt('<rect x="4" y="10" width="17" height="13" rx="3" fill="#7FD9FF"/><path d="M21 14l7-4v13l-7-4z" fill="#fff"/><circle cx="12" cy="16.5" r="3" fill="#fff"/>'),speaker:Yt(`<rect x="9" y="4" width="14" height="24" rx="3" fill="#C9B6FF"/><circle cx="16" cy="19" r="4" fill="#fff"/><circle cx="16" cy="9.5" r="1.6" fill="${Ke}"/>`),tv:Yt('<rect x="4" y="7" width="24" height="15" rx="2" fill="#7FD9FF"/><path d="M11 27h10M16 22v5"/>'),sensor:Yt('<path d="M13 18V7a3 3 0 0 1 6 0v11a6 6 0 1 1-6 0z" fill="#fff"/><circle cx="16" cy="23" r="3" fill="#FF8A73"/><path d="M16 21v-9"/>'),switch:Yt('<rect x="5" y="10" width="22" height="12" rx="6" fill="#9BE37A"/><circle cx="21" cy="16" r="4" fill="#fff"/>'),house:Yt('<path d="M5 15 16 6l11 9v12H5z" fill="#F9B58B"/><path d="M3 16 16 5l13 11" stroke-width="3"/><rect x="13" y="19" width="6" height="8" rx="1" fill="#7A4FC4"/>'),paint:Yt('<path d="M5 8h18v8H5z" fill="#F78FB3"/><path d="M23 12h4v7H16v3" /><rect x="14" y="22" width="4" height="6" rx="1" fill="#DBA15B"/>'),pin:Yt('<path d="M16 29s9-9.5 9-16a9 9 0 0 0-18 0c0 6.5 9 16 9 16z" fill="#FF8A73"/><circle cx="16" cy="13" r="3.4" fill="#fff"/>'),plug:Yt('<path d="M11 4v7M21 4v7"/><path d="M8 11h16v4a8 8 0 0 1-16 0z" fill="#FFD83A"/><path d="M16 23v5"/>'),window:Yt('<rect x="6" y="6" width="20" height="20" rx="2" fill="#BDEBFF"/><path d="M16 6v20M6 16h20"/>'),door:Yt(`<rect x="9" y="4" width="14" height="24" rx="2" fill="#FFF7E6"/><circle cx="19" cy="17" r="1.5" fill="${Ke}"/>`),opening:Yt('<path d="M7 28V8a9 9 0 0 1 18 0v20" stroke-width="3"/>'),extdoor:Yt(`<rect x="9" y="4" width="14" height="24" rx="2" fill="#FF8A73"/><circle cx="19" cy="17" r="1.5" fill="${Ke}"/>`),frontdoor:Yt('<rect x="9" y="4" width="14" height="24" rx="2" fill="#7A4FC4"/><rect x="12.5" y="8" width="7" height="6" rx="1" fill="#BDEBFF"/><circle cx="19.5" cy="19" r="1.6" fill="#FFD83A" stroke="none"/>'),bifold:Yt('<rect x="4" y="5" width="24" height="22" rx="2" fill="#BDEBFF"/><path d="M12 5v22M20 5v22"/>'),garageDoor:Yt('<rect x="4" y="7" width="24" height="20" rx="2" fill="#FFF0D6"/><path d="M4 12h24M4 17h24M4 22h24"/>'),none:Yt('<circle cx="16" cy="16" r="11" fill="#eee"/><path d="M9 23L23 9" stroke-width="3"/>')};var Sd={light:["light","switch","input_boolean"],switch:["switch","input_boolean","light","fan"],cover:["cover","input_number"],climate:["climate","sensor","input_number"],lock:["lock"],motion:["binary_sensor"],contact:["binary_sensor"],camera:["camera"],speaker:["media_player"],tv:["media_player"],sensor:["sensor","binary_sensor"]},Md={climate:["temperature"],motion:["motion","occupancy","presence","moving"],contact:["door","window","opening","garage_door","lock"],tv:["tv","receiver"],speaker:["speaker"]},Vy=[["living room","living","lounge","sitting room","front room","family room"],["kitchen","diner"],["dining room","dining","diner"],["hall","hallway","entrance","porch"],["landing","upstairs hall"],["bathroom","bath","shower room"],["ensuite","en suite"],["wc","toilet","cloakroom","loo"],["office","study"],["utility","utility room","laundry"],["main bedroom","master bedroom","master","bedroom 1"],["nursery","baby"],["garage"],["conservatory","sun room","garden room"]],Gy=new Set(["unavailable","unknown"]),Vl=i=>` ${String(i||"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()} `,Gh=(i,t)=>i.includes(` ${t} `);function wd(i){let t=Vl(i),e=t.trim();if(!e)return[];let n=new Set([e]);for(let s of Vy)s.some(o=>Gh(t,o))&&s.forEach(o=>n.add(o));return[...n]}function Hh(i,t){let e=(i.entities||{})[t];if(!e)return"";let n=e.area_id||((i.devices||{})[e.device_id]||{}).area_id;return n&&((i.areas||{})[n]||{}).name||""}function ji(i){if(!i)return"not found";let t=i.attributes||{},e=i.entity_id?i.entity_id.split(".")[0]:"";return Gy.has(i.state)?"not answering":e==="climate"?t.current_temperature!=null?`${t.current_temperature}\xB0`:i.state:e==="cover"?t.current_position!=null?`${t.current_position}% open`:i.state:`${i.state}${t.unit_of_measurement?` ${t.unit_of_measurement}`:""}`}function Td(i,t,e,{wide:n=!1,query:s="",used:o={}}={}){if(!i||!i.states)return[];let a=Sd[t]||Sd.sensor,c=Md[t]||[],u=wd(e),f=Vl(s).trim(),p=[];for(let _ of Object.keys(i.states)){let m=i.states[_],g=_.split(".")[0],b=m.attributes||{},S=(i.entities||{})[_]||{};if(S.hidden||!n&&(!a.includes(g)||S.entity_category||t==="climate"&&g==="sensor"&&b.device_class!=="temperature"))continue;let x=b.friendly_name||_,v=Hh(i,_),E=Vl(`${x} ${_.split(".")[1]}`),C=Vl(v);if(f&&!`${E}${C}`.includes(f))continue;let M=0;for(let R of u)Gh(C,R)?M=Math.max(M,3):Gh(E,R)&&(M=Math.max(M,2));let I=g===a[0]?2:0;c.includes(b.device_class)&&(I+=1),p.push({id:_,name:x,area:v,near:M,fit:I,guess:M>0,usedBy:o[_]||""})}return p.sort((_,m)=>m.near-_.near||(_.usedBy?1:0)-(m.usedBy?1:0)||m.fit-_.fit||_.name.localeCompare(m.name)),p}var zl=i=>String(i||"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function Ed(i,t){let e=Object.entries(i&&i.areas||{}),n=zl(t.area);if(n){let a=e.find(([c,u])=>zl(c)===n||zl(u.name)===n);if(a)return{id:a[0],name:a[1].name||a[0]}}let s=wd(t.name),o=null;for(let[a,c]of e){let u=zl(c.name),f=u===s[0]?2:s.includes(u)?1:0;f&&(!o||f>o.score)&&(o={id:a,name:c.name||a,score:f})}return o?{id:o.id,name:o.name}:null}function Hy(i,t){let e=i.states[t],n=t.split(".")[0],s=e&&e.attributes&&e.attributes.device_class||"";return n==="light"?{kind:"light",sure:!0}:n==="cover"?{kind:"cover",sure:!0}:n==="climate"?{kind:"climate",sure:!0}:n==="lock"?{kind:"lock",sure:!0}:n==="camera"?{kind:"camera",sure:!0}:n==="media_player"?{kind:s==="tv"||s==="receiver"?"tv":"speaker",sure:!0}:n==="binary_sensor"?Md.motion.includes(s)?{kind:"motion",sure:!0}:["door","window","opening","garage_door"].includes(s)?{kind:"contact",sure:!0}:null:n==="sensor"?s==="temperature"||s==="humidity"?{kind:"sensor",sure:!1}:null:n==="switch"||n==="fan"?{kind:"switch",sure:!1}:null}function Xh(i,t,e={}){let n=[];if(!i||!i.states||!t)return n;for(let o of Object.keys(i.states)){let a=(i.entities||{})[o]||{};if(a.hidden||a.entity_category||e[o]||(a.area_id||((i.devices||{})[a.device_id]||{}).area_id)!==t)continue;let u=Hy(i,o);u&&n.push({id:o,name:(i.states[o].attributes||{}).friendly_name||o,...u})}let s=["light","cover","climate","lock","contact","motion","camera","tv","speaker","switch","sensor"];return n.sort((o,a)=>s.indexOf(o.kind)-s.indexOf(a.kind)||o.name.localeCompare(a.name))}var tr=i=>String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),Wh=["light","switch","input_boolean","fan"],Ad={light:"Light",switch:"Switch",cover:"Blind",climate:"Heating",lock:"Lock",motion:"Motion",contact:"Door or window",camera:"Camera",speaker:"Speaker",tv:"TV",sensor:"Sensor"},Cd=`
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
`,Gl=class{constructor(t){this.card=t;let e=this.el=document.createElement("div");e.className="room",e.innerHTML=`<header><span></span><button data-act="close" aria-label="Close">${he.close}</button></header><div class="list"></div>`,t._wrap.appendChild(e),e.addEventListener("click",n=>{let s=n.target.closest("[data-act]");if(!s)return;let o=s.dataset.act,a=s.closest(".it");o==="close"?this.close():a&&this._act(o,a.dataset.id)}),e.addEventListener("change",n=>{let s=n.target.closest(".it");s&&n.target.dataset.set&&this._act(n.target.dataset.set,s.dataset.id,Number(n.target.value))})}get isOpen(){return this.el.classList.contains("open")}close(){this.el.classList.remove("open"),this.key=null}open(t,e){this.F=t,this.roomId=e.id,this.key=`${t.floor.id}|${e.id}`,this.el.querySelector("header span").textContent=e.name||"Room",this.el.classList.add("open"),this.render(),this.el.querySelector(".list").scrollTop=0}_devices(){let t=this.F;return(t.floor.devices||[]).filter(e=>e.room?e.room===this.roomId:e.x!=null&&(t.walls.roomAt(e.x,e.y)||{}).id===this.roomId)}_state(t){let e=this.card._hass;return t.entity&&e&&e.states[t.entity]||null}render(){let t=this.el.querySelector(".list"),e=this._devices();if(!e.length){t.innerHTML='<div class="empty">Nothing in here yet. Edit the card to add lights, blinds and radiators to this room.</div>';return}t.innerHTML=e.map(n=>{let s=this._state(n),o=n.entity?n.entity.split(".")[0]:"",a=s&&s.attributes||{},c="";return s&&Wh.includes(o)?(c='<button class="rb" data-act="toggle"></button>',o==="light"&&(a.brightness!=null||(a.supported_color_modes||[]).some(u=>u!=="onoff"))&&(c+=`<input type="range" min="1" max="100" data-set="dim" aria-label="Brightness of ${tr(n.name||"light")}">`)):s&&o==="cover"?(c=`<button class="rb" data-act="open" aria-label="Open">${he.up}</button><button class="rb" data-act="stop">Stop</button><button class="rb" data-act="shut" aria-label="Close">${he.down}</button>`,a.current_position!=null&&(c+=`<input type="range" min="0" max="100" data-set="pos" aria-label="Position of ${tr(n.name||"blind")}">`)):s&&o==="input_number"&&(n.kind==="cover"||n.kind==="climate")?c=`<input type="range" min="${Number(a.min)||0}" max="${a.max!=null?Number(a.max):100}" step="${Number(a.step)||1}" data-set="num" aria-label="${tr(n.name||"value")}">`:s&&o==="climate"&&typeof a.temperature=="number"&&(c=`<button class="rb" data-act="cooler" aria-label="Cooler">${he.down}</button><span class="val tgt"></span><button class="rb" data-act="warmer" aria-label="Warmer">${he.up}</button>`),`<div class="it${n.entity?"":" grey"}" data-id="${tr(n.id)}"><div class="hd" data-act="more"><span class="ic">${he[n.kind]||he.sensor}</span><span class="nm">${tr(n.name||Ad[n.kind]||"Device")}<small>${tr(Ad[n.kind]||n.kind)}</small></span><span class="val st"></span></div>${c?`<div class="ctl">${c}</div>`:""}</div>`}).join(""),this._sig=e.map(n=>`${n.id}|${n.entity||""}|${this._state(n)?1:0}`).join(";"),this.refresh()}refresh(){if(!this.isOpen)return;let t=this._devices();if(t.map(e=>`${e.id}|${e.entity||""}|${this._state(e)?1:0}`).join(";")!==this._sig){this.render();return}for(let e of t){let n=[...this.el.querySelectorAll(".it")].find(_=>_.dataset.id===e.id);if(!n)continue;let s=this._state(e),o=s&&s.attributes||{},a=e.entity?e.entity.split(".")[0]:"",c=!!s&&(s.state==="on"||s.state==="open"||o.hvac_action==="heating"||s.state==="playing");n.classList.toggle("on",c),n.querySelector(".st").textContent=e.entity?Wh.includes(a)&&s?c?"On":"Off":ji(s):"planned";let u=n.querySelector("[data-act='toggle']");u&&(u.textContent=c?"Turn off":"Turn on",u.classList.toggle("act",c));let f=n.querySelector(".tgt");f&&(f.textContent=`${o.temperature}\xB0`);let p=n.querySelector("input[type=range]");p&&!p.matches(":active")&&(p.value=p.dataset.set==="num"?s.state:p.dataset.set==="dim"?o.brightness!=null?Math.max(1,Math.round(o.brightness/255*100)):c?100:1:o.current_position)}}_act(t,e,n){let s=this._devices().find(p=>p.id===e),o=this.card._hass;if(!s||!s.entity)return;if(t==="more"){this.card.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:s.entity}}));return}let a=this._state(s);if(!a||!o||!o.callService)return;let c=s.entity.split(".")[0],u=a.attributes||{},f={entity_id:s.entity};if(t==="toggle"&&Wh.includes(c))o.callService(c,"toggle",f);else if(t==="dim"&&c==="light")o.callService("light","turn_on",{...f,brightness_pct:Math.max(1,Math.min(100,n))});else if(t==="num"&&c==="input_number")o.callService("input_number","set_value",{...f,value:n});else if(c==="cover"&&t==="pos")o.callService("cover","set_cover_position",{...f,position:Math.max(0,Math.min(100,n))});else if(c==="cover"&&["open","stop","shut"].includes(t))o.callService("cover",{open:"open_cover",stop:"stop_cover",shut:"close_cover"}[t],f);else if(c==="climate"&&(t==="warmer"||t==="cooler")&&typeof u.temperature=="number"){let p=u.target_temp_step||.5,_=u.min_temp!=null?u.min_temp:5,m=u.max_temp!=null?u.max_temp:30;o.callService("climate","set_temperature",{...f,temperature:Math.round(Math.min(m,Math.max(_,u.temperature+(t==="warmer"?p:-p)))*10)/10})}}};var Pd=`
  .replay{position:absolute;left:10px;right:10px;bottom:30px;display:none;align-items:center;gap:8px;padding:8px 10px;background:#FFFDF4;border:3px solid #1b1b1b;border-radius:16px;box-shadow:3px 4px 0 #1b1b1b;pointer-events:auto;z-index:3}
  .replay.open{display:flex}
  .replay button{flex:none;min-width:44px;min-height:40px;padding:4px 10px}
  .replay input{flex:1;min-width:60px;height:36px;accent-color:#7A4FC4}
  .replay .when{flex:none;font-weight:900;font-size:14px;min-width:112px;text-align:center}
  .wrap.past .foot{display:none}
  @media (max-width:600px){.replay{flex-wrap:wrap}.replay input{order:5;flex-basis:100%}.replay .when{flex:1;text-align:left}}
`;function Xy(i,t){let e={};for(let[n,s]of Object.entries(i||{})){let o=0,a=s.length-1,c=-1;for(;o<=a;){let f=o+a>>1;s[f].lu*1e3<=t?(c=f,o=f+1):a=f-1}if(c<0&&(c=0),!s.length)continue;let u=null;for(let f=c;f>=0&&!u;f--)u=s[f].a||null;e[n]={entity_id:n,state:s[c].s,attributes:u||{}}}return e}function Wy(i,t=Date.now()){let e=new Date(i),n=new Date(t),s=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return`${e.getDate()===n.getDate()?"Today":"Yesterday"} ${s}`}var Hl=class{constructor(t){this.card=t;let e=this.el=document.createElement("div");e.className="replay",e.innerHTML='<button data-act="play" aria-label="Play">Play</button><span class="when" aria-live="off"></span><input type="range" min="0" max="288" step="1" aria-label="Time in the last day"><button data-act="now">Back to now</button>',t._wrap.appendChild(e),e.addEventListener("click",n=>{let s=n.target.closest("[data-act]");s&&(s.dataset.act==="now"?this.stop():this.play(!this.timer))}),e.querySelector("input").addEventListener("input",n=>{this.play(!1),this.seek(Number(n.target.value))})}get on(){return!!this.history}async start(){let t=this.card,e=t._live;if(this.on||this.loading||!e||!e.callWS)return;let n=new Set([t._config.weather,t._config.sun||"sun.sun"].filter(s=>s&&s.includes(".")));for(let s of t._floors||[])for(let o of s.floor.devices||[])o.entity&&n.add(o.entity);this.end=Date.now(),this.loading=!0,t._say("Fetching the last day...","",2e4);try{this.history=await e.callWS({type:"history/history_during_period",start_time:new Date(this.end-864e5).toISOString(),end_time:new Date(this.end).toISOString(),entity_ids:[...n],minimal_response:!1,no_attributes:!1,significant_changes_only:!1})}catch(s){this.history=null,t._say(`I couldn't fetch the history: ${s&&s.message?s.message:"Home Assistant said no"}.`,"",8e3)}this.loading=!1,this.history&&(t._toast.style.display="none",this.el.classList.add("open"),t._wrap.classList.add("past"),this.seek(252))}seek(t){if(!this.on)return;this.step=Math.max(0,Math.min(288,t));let e=this.end-864e5+this.step*3e5,n=this.card,s=n._live;this.el.querySelector("input").value=this.step,this.el.querySelector(".when").textContent=Wy(e,this.end),n._hass={...s,states:{...s.states,...Xy(this.history,e)},callService:()=>n._say("This is the past. Press Back to now to switch things.","",4e3)},n._hassChanged()}play(t){clearInterval(this.timer),this.timer=null,t&&this.on&&(this.step>=288&&this.seek(0),this.timer=setInterval(()=>{this.step>=288?this.play(!1):this.seek(this.step+1)},110));let e=this.el.querySelector("[data-act='play']");e.textContent=this.timer?"Pause":"Play",e.classList.toggle("on",!!this.timer)}stop(){this.play(!1),this.on&&(this.history=null,this.el.classList.remove("open"),this.card._wrap.classList.remove("past"),this.card._hass=this.card._live,this.card._hassChanged())}};var Id={sunny:"clear","clear-night":"clear",partlycloudy:"partly",cloudy:"cloudy",windy:"partly","windy-variant":"cloudy",fog:"fog",rainy:"rain",pouring:"pour",hail:"pour",lightning:"storm","lightning-rainy":"storm",snowy:"snow","snowy-rainy":"sleet",exceptional:"cloudy"},Yy={clear:"Sunny",partly:"Some cloud",cloudy:"Cloudy",fog:"Foggy",rain:"Rain",pour:"Heavy rain",storm:"Thunder",snow:"Snow",sleet:"Sleet"},Ld={clear:[null,"#FFFFFF",1.55,2.1,0],partly:[null,"#FFFFFF",1.55,1.9,3],cloudy:["#A9C4D6","#E6EBF0",1.5,1.4,7],fog:["#C9D2D8","#E3E8EC",1.55,1,5],rain:["#8FA6B8","#B3BEC9",1.4,1.1,7],pour:["#74899B","#8E9AA7",1.3,.9,8],storm:["#5F7385","#77828F",1.2,.8,8],snow:["#C4D4E3","#EEF2F6",1.6,1.3,7],sleet:["#A3B6C6","#C6CFD8",1.45,1.1,7]},qy={clear:"#1B2A57",partly:"#1D2A52"},$y="#252D42",Zy="#56628A";function Dd(i,t){let e=t&&t.weather;if(!e)return null;let n=typeof e=="string"&&!e.includes(".")?e.split("-"):null;if(n)return Ld[n[0]]?{kind:n[0],night:n[1]==="night",text:"",temp:null}:null;let s=i&&i.states&&i.states[e];if(!s||!Id[s.state])return null;let o=i.states[t&&t.sun||"sun.sun"],a=s.attributes||{},c=o?o.state==="below_horizon":s.state==="clear-night",u=Id[s.state],f=typeof a.temperature=="number"?`${Math.round(a.temperature)}\xB0`:null;return{kind:u,night:c,text:c&&u==="clear"?"Clear night":Yy[u],temp:f}}var Yh=i=>i?`${i.kind}|${i.night?1:0}`:"";function Nd(i,t,e){if(!t)return i;let n={...i};return t.kind==="snow"&&Object.assign(n,{lawn:"#F6F9FF",lawn2:"#E6EDF6",roof:"#F8FAFF",roof2:"#DCE5EF",hedge:"#DDEBDD",drive:"#E9EBF2",drive2:"#DADDE8",path:"#F1F2F5",patio:"#EEF0F4",patio2:"#DFE3EA"}),t.night&&(n.glass=e?"#FFD75E":"#3C4C7A"),n}var qh=(i,t)=>i?`${i.kind==="snow"?"s":""}${i.night?t?"n1":"n0":""}`:"";function Rd(i){let t=document.createElement("canvas");t.width=t.height=64,i(t.getContext("2d"));let e=new Mn(t);return e.colorSpace=Ge,e}var Jy=i=>{i.lineCap="round",i.strokeStyle="#2B4A6B",i.lineWidth=9,i.beginPath(),i.moveTo(38,8),i.lineTo(26,56),i.stroke(),i.strokeStyle="#CDEBFF",i.lineWidth=5,i.stroke()},Ky=i=>{i.fillStyle="#fff",i.strokeStyle="#5C6F86",i.lineWidth=5,i.beginPath(),i.arc(32,32,22,0,7),i.fill(),i.stroke()},jy=i=>{i.fillStyle="#FFF6C2",i.beginPath();for(let t=0;t<8;t++){let e=t%2?9:28,n=t*Math.PI/4;i.lineTo(32+e*Math.sin(n),32-e*Math.cos(n))}i.fill()},Xl=class{constructor(t,e,n,s){this.scene=t,this.hemi=e,this.sun=n,this.outlined=s,this.group=new oi,t.add(this.group),this.still=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}get moving(){return!this.still&&!!(this.fall||this.flashAt)}_empty(){this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())}),this.group.clear(),this.fall=null,this.flashAt=0,this.lit=this.flashed=!1}dispose(){this._empty(),this.scene.remove(this.group),this.scene.fog=null}_points(t,e,n,s,o,a){let c=new Float32Array(t*3),{cx:u,cz:f}=this.box;for(let g=0;g<t;g++)c[g*3]=u+(Math.random()-.5)*s,c[g*3+1]=Math.random()*o,c[g*3+2]=f+(Math.random()-.5)*s;let p=new Ie;p.setAttribute("position",new He(c,3));let _=new qn({size:e,map:Rd(n),transparent:!0,alphaTest:.25,depthWrite:!1,fog:!1,color:a||16777215}),m=new Fs(p,_);return m.frustumCulled=!1,this.group.add(m),m}apply(t,e){this._empty(),this.box=e.box;let n=e.theme,s=t?t.kind:"clear",o=!!(t&&t.night),a=Ld[s],c=a[4]>=5,u=o?c?$y:qy[s]:a[0]||n.sky,f=o?Zy:a[1]==="#FFFFFF"?n.cloud:a[1];this.sky=new ce(u),this.scene.background=this.sky.clone(),this.hemi.intensity=this.hemiBase=a[2]*(o?.62:1),this.sun.intensity=a[3]*(o?.42:1),this.hemi.color.set(o?"#A9B8FF":"#FFFFFF"),this.sun.color.set(o?"#B9C6FF":"#FFFFFF");for(let S of e.clouds||[])S.color.set(f);e.sunBall&&(e.sunBall.visible=!c&&s!=="fog"),e.sunMat&&e.sunMat.color.set(o?"#F6F2CF":n.sun);let{cx:p,cz:_,far:m}=e.box,g=[[-.2,11,.1,2.4],[.7,12.5,-.7,2.1],[-1.2,11.5,-.9,2.2],[.1,13.5,-1.5,2.6],[1.4,11,.4,1.8],[-.7,13,.9,2],[.9,14,1,2.3],[-1.6,12,.3,1.9]],b=e.low?.5:1;if(e.whole)for(let[S,x,v,E]of g.slice(0,Math.ceil(a[4]*b)))for(let[C,M,I,R]of[[0,0,0,1],[1.1,-.15,.1,.75],[-1.1,-.2,0,.7],[.3,.45,-.1,.7]]){let O=this.outlined(new di(R*E,16,10),new Be({color:f}),.09);O.position.set(p+S*m*.55+C*E,x+M*E,_+v*m*.5+I*E),O.scale.y=.65,this.group.add(O)}if(o&&!c&&e.whole){let S=e.low?140:320,x=new Float32Array(S*3),v=m*4;for(let M=0;M<S;M++){let I=Math.random()*Math.PI*2,R=-.75+Math.random()*1.7;x[M*3]=p+v*Math.cos(R)*Math.cos(I),x[M*3+1]=v*Math.sin(R),x[M*3+2]=_+v*Math.cos(R)*Math.sin(I)}let E=new Ie;E.setAttribute("position",new He(x,3));let C=new Fs(E,new qn({size:13,sizeAttenuation:!1,map:Rd(jy),transparent:!0,alphaTest:.2,depthWrite:!1,fog:!1}));C.frustumCulled=!1,this.group.add(C)}if(this.mist=s==="fog"?[.55,1.9]:["rain","pour","storm","snow","sleet"].includes(s)?[.9,4]:null,this.scene.fog=this.mist?new yr(u,1,2):null,this.range(e.dist||m*3),e.whole){let S=m*1.5,x=17;["rain","pour","storm","sleet"].includes(s)&&(this.fall=[{p:this._points((s==="rain"||s==="sleet"?520:1e3)*b,1.5,Jy,S,x),speed:s==="rain"||s==="sleet"?17:23,drift:-3.2,sway:0,top:x}]),(s==="snow"||s==="sleet")&&(this.fall=this.fall||[]).push({p:this._points((s==="snow"?520:200)*b,.42,Ky,S,x),speed:2.3,drift:.5,sway:.7,top:x})}s==="storm"&&!this.still&&(this.flashAt=performance.now()+1500+Math.random()*3e3),this.spread=m*1.5}range(t){!this.scene.fog||!this.mist||(this.scene.fog.near=t*this.mist[0],this.scene.fog.far=t*this.mist[1])}step(t,e){if(!this.still){for(let n of this.fall||[]){let s=n.p.geometry.attributes.position,o=s.array,{cx:a}=this.box,c=this.spread/2;for(let u=0;u<o.length;u+=3)o[u+1]-=n.speed*t*(.8+u*7%5*.1),o[u]+=(n.drift+(n.sway?Math.sin(e/900+u)*n.sway:0))*t,o[u+1]<-.2&&(o[u+1]+=n.top),o[u]<a-c?o[u]+=this.spread:o[u]>a+c&&(o[u]-=this.spread);s.needsUpdate=!0}if(this.flashAt){let n=e-this.flashAt,s=n>=0&&(!this.flashed||n<90||n>170&&n<260);s!==!!this.lit&&(this.lit=s,this.hemi.intensity=this.hemiBase*(s?2.6:1),this.scene.background.copy(s?new ce("#F3F6FF"):this.sky)),n>=0&&(this.flashed=!0),n>320&&(this.flashed=!1,this.flashAt=e+3500+Math.random()*6e3)}}}};var ni=i=>String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),$h=40,Qy=[["pick","Pick it"],["try","Try it"],["done","Finish"]],Wl=["light","switch","input_boolean","fan"],Fd={light:"light or lamp",switch:"switch or plug",cover:"blind, shutter or garage door",climate:"radiator valve (TRV), thermostat or temperature sensor",lock:"lock",motion:"motion sensor",contact:"door or window sensor",camera:"camera",speaker:"speaker",tv:"TV",sensor:"sensor"},Od=`
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
`,Yl=class{constructor(t){this.ed=t;let e=this.dlg=document.createElement("dialog");e.className="setup",e.setAttribute("aria-label","Set up this thing"),e.tabIndex=-1,e.innerHTML=`<div class="s-top"><div class="s-ic"></div><div class="s-ttl"></div><button class="btn x" data-act="close" aria-label="Close">${he.close}</button></div>
      <div class="s-talk talk"><div class="roofus"></div><div class="bubble" aria-live="polite"></div></div>
      <div class="s-steps"></div>
      <div class="s-body"></div>`,t.shadowRoot.appendChild(e),e.addEventListener("click",n=>{if(n.target===e){e.close();return}let s=n.target.closest("[data-act],[data-step],[data-ent]");s&&(s.dataset.step?this.go(s.dataset.step):s.dataset.ent!=null?this._choose(s.dataset.ent):this._act(s.dataset.act))}),e.addEventListener("input",n=>{n.target.id==="sq"&&(this.query=n.target.value,this._options())}),e.addEventListener("change",n=>{n.target.id==="sName"&&(this.ed._rename(this.id,n.target.value),this._head())}),this._esc=n=>{n.key!=="Escape"||!e.open||(n.stopPropagation(),n.preventDefault(),e.close())},e.addEventListener("close",()=>{window.removeEventListener("keydown",this._esc,!0),this.id=null,this.ed._setupClosed()})}get isOpen(){return this.dlg.open}_q(t){return this.dlg.querySelector(t)}_now(){let t=this.id?this.ed._find(this.id):null;if(!t)return null;let e=this.ed._hass,n=this.ed._entityOf(t.d);return{...t,room:this.ed._roomName(t.f,t.d),ent:n,st:n&&e&&e.states[n]||null,hass:e}}open(t,e,n=!1){this.id=t,this.query="",this.wide=!1,this.fresh=n;let s=this._now();s&&(this.dlg.open||(this.dlg.showModal(),this.dlg.focus(),window.addEventListener("keydown",this._esc,!0)),this.go(e||(s.ent?"try":"pick")))}close(){this.dlg.open&&this.dlg.close()}go(t){this.step=t,this.render(),this._q(".s-body").scrollTop=0}_say(t,e,n="happy"){this._q(".roofus").innerHTML=Qs(n),this._q(".bubble").innerHTML=`<b>${ni(t)}</b>${ni(e)}`}_head(){let t=this._now();if(!t)return;let{d:e,room:n,ent:s}=t,o=this.ed.kindName(e.kind);this._q(".s-ic").innerHTML=he[e.kind]||he.sensor,this._q(".s-ic").classList.toggle("live",!!s),this._q(".s-ttl").innerHTML=`${ni(e.name||o)}<small>${ni([o,n].filter(Boolean).join(" in "))}</small>`,this._q(".s-steps").innerHTML=Qy.map(([a,c],u)=>`<button class="btn${a===this.step?" on":""}" data-step="${a}"${a===this.step?' aria-current="step"':""}><i>${u+1}</i>${c}</button>`).join("")}render(){let t=this._now();if(!t){this.close();return}this._head();let{d:e,room:n,ent:s,st:o}=t,a=this._q(".s-body"),c=Fd[e.kind]||"device",u=e.name||"this";if(this.step==="pick")a.innerHTML=`<input id="sq" type="search" placeholder="Search your devices" autocomplete="off" spellcheck="false" aria-label="Search your devices" value="${ni(this.query)}"><div id="opts"></div>`,this._say(this.fresh?`${u} is on the plan!`:`Which one is ${u}?`,`Tap the real ${c} from Home Assistant.${n?` My best guesses for the ${n} are at the top.`:""}`,this.fresh?"party":"think"),this._options();else if(this.step==="try"){if(!s){a.innerHTML='<p class="s-ask">Nothing is picked for this yet.</p><div class="row"><button class="btn go" data-step="pick">Pick one</button><button class="btn" data-step="done">Leave it grey</button></div>',this._say("Not connected yet","It stays grey on the card until you pick its real device.","think");return}a.innerHTML=`<div class="now"></div><div class="row" id="acts">${this._buttons(e,s,o)}</div><p class="hint" id="tip" style="text-align:center"></p>
        <p class="s-ask">Is that the right one?</p><div class="row"><button class="btn" data-step="pick">No, pick another</button><button class="btn go" data-step="done">${he.yes}Yes!</button></div>`,this._q("#tip").textContent=this._tip(e,s),this._say("Let's check it",`This is what ${u} says right now. Is that the right ${c.split(",")[0].replace(/ \(.*/,"")}?`,"wow"),this._live()}else a.innerHTML=`<label class="f" for="sName">Its name</label><input id="sName" type="text" autocomplete="off" value="${ni(e.name||"")}">
        <p class="hint">${s?`Connected to <b>${ni(this._friendly(s))}</b>.`:"Not connected yet, so it stays grey on the card."}</p>
        <div class="row"><button class="btn" data-act="move">${he.pin}Move it</button><button class="btn" data-act="remove">${he.remove}Remove it</button></div>
        <div class="row"><button class="btn go" data-act="close">${he.yes}Done</button></div>`,s?this._say("All set!",`${u} is connected. Tap it on the card to use it.`,"party"):this._say("Saved for later",`${u} is on the plan as "planned". Come back when you have fitted it.`,"happy")}_friendly(t){let e=this.ed._hass&&this.ed._hass.states[t];return e&&e.attributes&&e.attributes.friendly_name||t}_options(){let t=this._now(),e=this._q("#opts");if(!t||!e)return;let{d:n,room:s,ent:o,hass:a}=t;if(!a){e.innerHTML='<p class="hint">Home Assistant has not told me about your devices yet.</p>';return}this._count=Object.keys(a.states).length;let c=Td(a,n.kind,s,{wide:this.wide,query:this.query,used:this.ed.usedBy(n.id)}),u=g=>`<button class="opt${g.id===o?" on":""}" data-ent="${ni(g.id)}"><b>${ni(g.name)}</b><small>${ni([g.area,g.id,g.usedBy?`already used by ${g.usedBy}`:""].filter(Boolean).join(" \xB7 "))}</small><span class="val">${ni(ji(a.states[g.id]))}</span></button>`,f=c.slice(0,$h),p=f.filter(g=>g.guess),_=f.filter(g=>!g.guess),m="";p.length&&(m+=`<h4>My best guesses${s?` for the ${ni(s)}`:""}</h4>${p.map(u).join("")}`),_.length&&(m+=`<h4>${p.length?"Everything else":"Your devices"}</h4>${_.map(u).join("")}`),c.length||(m+=`<p class="hint">${this.query?"Nothing matches that. Try fewer letters.":`I can't find a ${ni(Fd[n.kind]||"device")} in Home Assistant yet.`}</p>`),c.length>$h&&(m+=`<p class="hint">${c.length-$h} more. Type in the search box to find them.</p>`),m+="<h4>Or</h4>",this.wide||(m+='<button class="opt none" data-act="wide"><b>Show every kind of device</b><small>If yours is not in the list</small></button>'),m+=`<button class="opt none${o?"":" on"}" data-ent=""><b>I haven't got it yet</b><small>Keep it grey on the card as "planned"</small></button>`,e.innerHTML=m}_choose(t){let e=this._now();e&&this.ed._link(e.d,t)&&(this.fresh=!1,this.go(t?"try":"done"))}_buttons(t,e,n){let s=e.split(".")[0],o=n&&n.attributes||{};return n?Wl.includes(s)?`<button class="btn" data-act="toggle">${he[t.kind]||he.switch}Switch it</button>`:s==="cover"?`<button class="btn" data-act="open">${he.up}Open</button><button class="btn" data-act="stop">Stop</button><button class="btn" data-act="shut">${he.down}Close</button>`:s==="climate"&&typeof o.temperature=="number"?`<button class="btn" data-act="cooler">${he.down}Cooler</button><button class="btn" data-act="warmer">${he.up}Warmer</button>`:"":""}_tip(t,e){let n=e.split(".")[0];return Wl.includes(n)?"Press it and watch the real one.":n==="cover"?"Press a button and watch the real one move.":n==="climate"?"Nudge it and listen for the radiator valve, or look at the thermostat.":n==="lock"?"I never lock or unlock doors from here. Try the lock yourself and watch this change.":t.kind==="motion"?"Wave at it and watch this change.":t.kind==="contact"?"Open and close it and watch this change.":""}_live(){let t=this._now(),e=this._q(".now");if(!t||!e||!t.ent)return;let{d:n,ent:s,st:o}=t,a=s.split(".")[0],c=o&&o.attributes||{},u=ji(o),f="",p=!1;o?o.state==="unavailable"||o.state==="unknown"?f="It may be switched off or out of range.":a==="climate"?(p=c.hvac_action==="heating",f=[c.hvac_action?c.hvac_action[0].toUpperCase()+c.hvac_action.slice(1):o.state,typeof c.temperature=="number"?`set to ${c.temperature}\xB0`:""].filter(Boolean).join(", ")):a==="cover"?(p=o.state==="open",f="0% is closed, 100% is open"):Wl.includes(a)?(p=o.state==="on",u=p?"On":"Off"):a==="lock"?u=o.state==="locked"?"Locked":o.state==="unlocked"?"Unlocked":o.state:a==="binary_sensor"&&(p=o.state==="on",u=n.kind==="motion"?p?"Movement!":"All quiet":n.kind==="contact"?p?"Open":"Closed":p?"On":"Off"):f="Home Assistant can't find this one right now.",e.classList.toggle("hot",p),e.innerHTML=`<div class="big">${ni(u)}</div><div class="sub">${ni(f)}</div><div class="who">${ni([this._friendly(s),Hh(t.hass,s)].filter(Boolean).join(" \xB7 "))}</div>`}_act(t){let e=this._now();if(t==="close"){this.close();return}if(!e)return;if(t==="wide"){this.wide=!0,this._options();return}if(t==="move"){let f=this.id;this.close(),this.ed._moveMode(f);return}if(t==="remove"){let f=this.id;this.close(),this.ed._remove(f);return}let{ent:n,st:s,hass:o}=e;if(!n||!s||!o||!o.callService)return;let a=n.split(".")[0],c=s.attributes||{},u={entity_id:n};if(t==="toggle"&&Wl.includes(a))o.callService(a,"toggle",u);else if(a==="cover"&&["open","stop","shut"].includes(t))o.callService("cover",{open:"open_cover",stop:"stop_cover",shut:"close_cover"}[t],u);else if(a==="climate"&&(t==="warmer"||t==="cooler")&&typeof c.temperature=="number"){let f=c.target_temp_step||.5,p=c.min_temp!=null?c.min_temp:5,_=c.max_temp!=null?c.max_temp:30,m=Math.min(_,Math.max(p,c.temperature+(t==="warmer"?f:-f)));o.callService("climate","set_temperature",{...u,temperature:Math.round(m*10)/10})}}refresh(){if(!this.dlg.open)return;let t=this._now();if(!t){this.close();return}if(this.step==="try")this._live();else if(this.step==="pick"&&t.hass){if(Object.keys(t.hass.states).length!==this._count){this._options();return}this.dlg.querySelectorAll(".opt[data-ent]").forEach(e=>{let n=e.querySelector(".val");n&&e.dataset.ent&&(n.textContent=ji(t.hass.states[e.dataset.ent]))})}}};var Qi=i=>String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),Bd=`
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
`,ql=class{constructor(t){this.ed=t;let e=this.dlg=document.createElement("dialog");e.className="setup fill",e.tabIndex=-1,e.setAttribute("aria-label","Find my things by room"),e.innerHTML=`<div class="s-top"><div class="s-ic live">${he.house}</div><div class="s-ttl">Find my things<small>Room by room, from Home Assistant</small></div><button class="btn x" data-act="close" aria-label="Close">${he.close}</button></div>
      <div class="s-talk talk"><div class="roofus"></div><div class="bubble" aria-live="polite"></div></div>
      <div class="s-body"></div>
      <div class="row" style="margin:0 12px 12px"><button class="btn" data-act="close">Not now</button><button class="btn go" data-act="add"></button></div>`,t.shadowRoot.appendChild(e),e.addEventListener("click",n=>{if(n.target===e){e.close();return}let s=n.target.closest("[data-act]");s&&(s.dataset.act==="close"?e.close():s.dataset.act==="add"&&this._add())}),e.addEventListener("change",()=>this._count()),this._esc=n=>{n.key!=="Escape"||!e.open||(n.stopPropagation(),n.preventDefault(),e.close())},e.addEventListener("close",()=>window.removeEventListener("keydown",this._esc,!0))}_q(t){return this.dlg.querySelector(t)}_say(t,e,n){this._q(".roofus").innerHTML=Qs(n),this._q(".bubble").innerHTML=`<b>${Qi(t)}</b>${Qi(e)}`}open(){let t=this.ed,e=t._hass,n=t._house,s=this._q(".s-body");if(!n)return;let o=t.usedBy(null),a=[],c=[],u="",f=0;if(this.found=[],n.floors.forEach((p,_)=>{for(let m of p.rooms||[]){let g=e?Ed(e,m):null;if(!g){m.name&&a.push(m.name);continue}let b=Xh(e,g.id,o),S=Xh(e,g.id,{});if(c.push({room:m.name||"Room",area:g.name,total:S.length}),!!b.length){u+=`<div class="f-room"><h4>${Qi(m.name||"Room")}<small>${Qi(g.name===m.name?p.name||"":`"${g.name}" in Home Assistant`)}</small></h4>`;for(let x of b)this.found.push({...x,fi:_,room:m.id}),u+=`<label class="f-thing"><input type="checkbox" data-i="${f++}"${x.sure?" checked":""}>${he[x.kind]||he.sensor}<span><b>${Qi(x.name)}</b><small>${Qi(t.kindName(x.kind))}</small></span><span class="val">${Qi(ji(e.states[x.id]))}</span></label>`;u+="</div>"}}}),!e||!Object.keys(e.areas||{}).length)u='<p class="hint">Home Assistant has no areas set up yet. Give your devices an area (Settings, Areas) and I can sort them into rooms for you.</p>',this._say("No areas yet","I use Home Assistant's areas to know which room a device is in.","think");else if(!c.length)u=`<p class="hint">Your areas in Home Assistant are: ${Qi(Object.values(e.areas).map(p=>p.name).join(", "))}. None of them sounds like a room on the plan. Rename an area to match a room, or add <b>area: Area name</b> to the room in the house file.</p>`,this._say("I can't match the rooms","None of your rooms has the same name as an area in Home Assistant.","think");else if(f)this._say(`I found ${f} thing${f===1?"":"s"}!`,"I matched your rooms to Home Assistant's areas. Untick anything you don't want, then I'll put the rest on the plan, already connected.","wow");else{let p=c.every(m=>!m.total),_=c.map(m=>m.room===m.area?m.room:`${m.room} = "${m.area}"`).join(", ");u=`<p class="hint">Rooms I matched to areas: ${Qi(_)}.</p><p class="hint">${p?"Those areas have no lights, blinds, radiators or sensors in them yet. In Home Assistant, open a device and set its area, then come back.":"Everything in those areas is already on the plan."}</p>`,p?this._say("The areas are empty","I found the rooms, but Home Assistant has no devices in those areas yet.","think"):this._say("Nothing new","Everything in your matching areas is already on the plan.","happy")}a.length&&f&&(u+=`<p class="hint">No matching area for: ${Qi(a.join(", "))}.</p>`),s.innerHTML=u,this._count(),this.dlg.open||(this.dlg.showModal(),this.dlg.focus(),window.addEventListener("keydown",this._esc,!0)),s.scrollTop=0}_picked(){return[...this.dlg.querySelectorAll("input[data-i]:checked")].map(t=>this.found[Number(t.dataset.i)])}_count(){let t=this._picked().length,e=this._q("[data-act='add']");e.innerHTML=`${he.yes}Add ${t} thing${t===1?"":"s"}`,e.style.display=this.found.length?"":"none",e.disabled=!t,e.style.opacity=t?"":".5"}_add(){let t=this._picked();this.dlg.close(),t.length&&this.ed._fillRooms(t)}};var tv="https://digitaladaption.github.io/toon-house-card/importer/",ev={light:"Light",switch:"Switch",cover:"Blind or shutter",climate:"Heating",lock:"Lock",motion:"Motion sensor",contact:"Door or window sensor",camera:"Camera",speaker:"Speaker",tv:"TV",sensor:"Sensor"},Zh=[["light","Light","Tap where the light goes."],["cover","Blind","Tap the window it covers."],["climate","Radiator","Tap by the wall it is on. Away from a wall makes a thermostat."],["lock","Lock","Tap the door it is on."],["motion","Motion sensor","Tap where the sensor is."],["contact","Door sensor","Tap the door or window it is on."],["camera","Camera","Tap where the camera is. It can be outside."],["speaker","Speaker","Tap where the speaker is."],["tv","TV","Tap where the TV is."],["sensor","Sensor","Tap where the sensor is."],["switch","Switch","Tap where the switch is."]],iv=["x","y","room","wall","at"],Jh=i=>JSON.parse(JSON.stringify(i)),kn=i=>String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),nv=`
  :host{display:block;font-family:${Ul};font-weight:500;color:#1b1b1b;--ink:#1b1b1b;--sun:#FFD83A;--paper:#FFFDF4}
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
${Od}${Bd}`,Kh=class extends HTMLElement{setConfig(t){this._config={...t},this.shadowRoot||(kl(),this.attachShadow({mode:"open"}),this._skeleton(),this._setup=new Yl(this),this._fill=new ql(this)),this._loadHouse(),this._overlayChanged(),this._sync(),this._states()}set hass(t){this._hass=t,this.shadowRoot&&(this._weathers(),this._states(),this._setup.refresh())}connectedCallback(){this._onCardTap=this._onCardTap||(t=>{let e=t.detail&&t.detail.id;!e||!this._setup||!this.getClientRects().length||!this._find(e)||(t.preventDefault(),this._open(e))}),window.addEventListener("toon-house-setup",this._onCardTap)}disconnectedCallback(){window.removeEventListener("toon-house-setup",this._onCardTap)}_fire(t){t.entities&&!Object.keys(t.entities).length&&delete t.entities,t.devices&&!Object.keys(t.devices).length&&delete t.devices;for(let e of["title","theme","height","weather","quality"])(t[e]===""||t[e]==null)&&delete t[e];this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0})),this._overlayChanged(),this._sync()}_overlayChanged(){!this._file||JSON.stringify(this._config.devices||null)===this._overKey||(this._rebuildHouse(),this._devices(),this._plan())}_rebuildHouse(){this._overKey=JSON.stringify(this._config.devices||null),this._house=co(Jh(this._file),this._config.devices),this._house.floors.forEach(t=>(t.rooms||[]).forEach((e,n)=>{e.id=e.id||`${t.id}_room${n}`}))}_set(t,e){this._fire({...this._config,[t]:e})}_say(t,e,n="happy",s=!1){let o=a=>this.shadowRoot.querySelector(a);o(".roofus").innerHTML=Qs(s?"oops":n),o(".bubble").classList.toggle("bad",s),o(".bubble").innerHTML=`<b>${kn(t)}</b>${kn(e)}`}_skeleton(){let t=o=>`<span class="sw">${[o.exterior,o.roof,o.door,o.lawn].map(a=>`<i style="background:${a}"></i>`).join("")}</span>`;this.shadowRoot.innerHTML=`<style>${nv}</style>
    <div class="wrap">
      <div class="talk"><div class="roofus"></div><div class="bubble" aria-live="polite"></div></div>

      <section>
        <h3>${he.house}Your house</h3>
        <div class="pill" id="src"></div>
        <div id="urlBox">
          <label class="f" for="url">House file address</label>
          <input id="url" type="text" placeholder="/local/toon-house/house.json" autocomplete="off" spellcheck="false">
        </div>
        <div class="row">
          <label class="btn">${he.upload}Load a house file<input id="file" type="file" accept=".json,application/json" hidden></label>
          <button class="btn" id="useUrl">Use a file address</button>
          <a class="btn" href="${tv}" target="_blank" rel="noopener">${he.example}Build one from a floor plan</a>
        </div>
      </section>

      <section>
        <h3>${he.paint}The look</h3>
        <div class="row">
          <button class="btn theme" data-theme="toon">${t(lo.toon)}Cartoon</button>
          <button class="btn theme" data-theme="brick">${t(lo.brick)}Brick</button>
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
        <h3>${he.pin}Add or move things</h3>
        <p class="hint">Pick a sticker, then tap the plan where it goes. Tap anything on the plan to set it up, or drag it to move it.</p>
        <div class="row"><button class="btn" id="fillBtn">${he.house}Find my things by room</button></div>
        <div class="kinds" id="kinds"></div>
        <div class="row tabs" id="ptabs"></div>
        <div id="planBox"><svg id="plan" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan of this floor"></svg></div>
        <div class="row" id="hiddenBox" style="display:none"><span class="pill" id="hiddenN"></span><button class="btn" id="restore">Put them back</button></div>
      </section>

      <section>
        <h3>${he.plug}Connect your things</h3>
        <p class="hint">Tap one and I'll help you set it up. Grey ones are not connected yet and stay grey on the card.</p>
        <div id="devs"></div>
      </section>
      <p class="hint" style="color:#1b1b1b;margin:10px 4px 0">Prefer typing? "Show code editor" below still works.</p>
    </div>`;let e=o=>this.shadowRoot.querySelector(o);e("#url").addEventListener("change",o=>{let a=o.target.value.trim();a&&this._set("layout",a)}),e("#useUrl").addEventListener("click",()=>{this._showUrl=!0,this._sync(),e("#url").focus()}),e("#file").addEventListener("change",o=>{let a=o.target.files[0];if(!a)return;let c=new FileReader;c.onload=()=>{try{let u=JSON.parse(String(c.result));if(!u||!Array.isArray(u.floors)||!u.floors.length)throw new Error("it has no floors in it");this._showUrl=!1,this._set("layout",u)}catch(u){this._tell("That file didn't work",`I couldn't read it as a house file: ${u.message}.`,"oops",!0)}},c.readAsText(a),o.target.value=""}),this.shadowRoot.querySelectorAll("[data-theme]").forEach(o=>o.addEventListener("click",()=>this._set("theme",o.dataset.theme))),this.shadowRoot.querySelectorAll("[data-q]").forEach(o=>o.addEventListener("click",()=>this._set("quality",o.dataset.q==="auto"?null:o.dataset.q))),e("#title").addEventListener("change",o=>this._set("title",o.target.value)),e("#fill").addEventListener("click",()=>this._set("height",null)),e("#fixed").addEventListener("click",()=>this._set("height",520)),e("#height").addEventListener("change",o=>this._set("height",Number(o.target.value))),e("#height").addEventListener("input",o=>{e("#hVal").textContent=`${o.target.value} px`});for(let[o,a]of Zh){let c=document.createElement("button");c.className="btn kind",c.dataset.kind=o,c.innerHTML=`${he[o]||he.sensor}<span>${a}</span>`,c.addEventListener("click",()=>this._armKind(this._arm===o?null:o)),e("#kinds").appendChild(c)}e("#restore").addEventListener("click",()=>{let o={...this._config.devices||{}};for(let a of Object.keys(o))o[a]===null&&delete o[a];this._fire({...this._config,devices:o})}),e("#fillBtn").addEventListener("click",()=>this._fill.open());let n=e("#plan");n.addEventListener("pointerdown",o=>{let a=o.target.closest?o.target.closest(".pin"):null;!a||this._arm||(this._dragging={id:a.dataset.dev,el:a,from:this._point(o),moved:!1},a.setPointerCapture(o.pointerId))}),n.addEventListener("pointermove",o=>{let a=this._dragging;if(!a)return;let c=this._point(o);!a.moved&&Math.hypot(c.x-a.from.x,c.y-a.from.y)<.2||(a.moved=!0,a.el.setAttribute("transform",`translate(${c.x} ${c.y})`))});let s=o=>{let a=this._dragging;if(this._dragging=null,!a)return;if(this._swallow=!0,setTimeout(()=>{this._swallow=!1},350),!a.moved){this._open(a.id);return}let c=this._point(o);this._move(a.id,c.x,c.y)};n.addEventListener("touchstart",o=>{!this._arm&&o.target.closest&&o.target.closest(".pin")&&o.preventDefault()},{passive:!1}),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",()=>{this._dragging=null,this._plan()}),n.addEventListener("click",o=>{if(this._swallow)return;let a=o.target.closest?o.target.closest(".pin"):null,c=this._point(o);this._arm?this._place(this._arm,c.x,c.y):a?this._open(a.dataset.dev):this._select(null)})}async _loadHouse(){let t=this._config.layout,e=typeof t=="string"?t:JSON.stringify(t||null);if(e!==this._houseKey){this._houseKey=e,this._house=null,this._file=null,this._houseError="";try{if(typeof t=="string"){let s=await fetch(`${t}${t.includes("?")?"&":"?"}v=${Date.now()}`);if(!s.ok)throw new Error(`the server answered ${s.status}`);this._house=await s.json()}else t&&(this._house=JSON.parse(JSON.stringify(t)));if(!this._house||!Array.isArray(this._house.floors))throw new Error("it has no floors in it");this._file=this._house;let n=co(Jh(this._file),null);n.floors.forEach(s=>(s.rooms||[]).forEach((o,a)=>{o.id=o.id||`${s.id}_room${a}`})),this._fileIds=new Set(n.floors.flatMap(s=>(s.devices||[]).map(o=>o.id))),this._fw=[],this._problems=[];for(let s of n.floors)try{let o=Fl(Jh(s));this._fw.push(o),this._problems.push(...o.warnings)}catch(o){this._fw.push(null),this._problems.push(o.message)}this._rebuildHouse()}catch(n){this._house=null,this._file=null,this._houseError=n.message}e===this._houseKey&&(this._sel=null,this._sync(),this._devices(),this._plan())}}_roomName(t,e){let n=t.rooms||[],s=n.find(o=>o.id===e.room);return!s&&e.x!=null&&(s=n.find(o=>{let a=ii(Ki(o));return e.x>=a.x0&&e.x<=a.x1&&e.y>=a.y0&&e.y<=a.y1})),s&&s.name||""}_entityOf(t){let e=this._config.entities||{},n=s=>Object.prototype.hasOwnProperty.call(e,s);return n(t.id)?e[t.id]:t.name&&n(t.name)?e[t.name]:t.entity||null}_sync(){if(!this.shadowRoot)return;let t=m=>this.shadowRoot.querySelector(m),e=this._config,n=this.shadowRoot.activeElement,s=typeof e.layout=="string",o=this._house;t("#src").textContent=s?"From a file on Home Assistant":o?`Built into this card: ${o.floors.length} floor${o.floors.length>1?"s":""}, ${o.floors.reduce((m,g)=>m+(g.rooms||[]).length,0)} rooms`:"Built into this card",t("#urlBox").style.display=s||this._showUrl?"":"none",t("#useUrl").style.display=s||this._showUrl?"none":"",n!==t("#url")&&(t("#url").value=s?e.layout:"");let a=e.theme||o&&o.theme||"toon";this.shadowRoot.querySelectorAll("[data-theme]").forEach(m=>m.classList.toggle("on",m.dataset.theme===a)),n!==t("#title")&&(t("#title").value=e.title!=null?e.title:"",t("#title").placeholder=o&&o.title||"My house"),this.shadowRoot.querySelectorAll("[data-q]").forEach(m=>m.classList.toggle("on",m.dataset.q===(e.quality||"auto")));let c=typeof e.height=="number";t("#fill").classList.toggle("on",!e.height),t("#fixed").classList.toggle("on",!!e.height),t("#hBox").style.display=c?"":"none",c&&(t("#height").value=e.height,t("#hVal").textContent=`${e.height} px`);let u=t("#views"),f=String(e.view!=null?e.view:"outside"),p=[["outside","Outside"],...(o&&o.floors||[]).map((m,g)=>[m.id||`floor${g}`,m.name||(g===0?"Ground":`Floor ${g}`)])],_=JSON.stringify([p,f]);if(_!==this._viewSig){this._viewSig=_,u.innerHTML="";for(let[m,g]of p){let b=document.createElement("button");b.className=`btn${f===m||m==="outside"&&f==="whole"?" on":""}`,b.textContent=g,b.addEventListener("click",()=>this._set("view",m)),u.appendChild(b)}}this._weathers(),this._talk()}_weathers(){let t=this.shadowRoot.querySelector("#wxs"),e=this._config.weather||"",n=this._hass?Object.keys(this._hass.states).filter(c=>c.startsWith("weather.")).sort():[];e&&e.includes(".")&&!n.includes(e)&&n.push(e);let s=c=>this._hass&&this._hass.states[c]&&this._hass.states[c].attributes.friendly_name||c,o=JSON.stringify([n.map(s),e]);if(o===this._wxSig)return;this._wxSig=o,t.innerHTML="";let a=(c,u)=>{let f=document.createElement("button");f.className=`btn${e===c?" on":""}`,f.textContent=u,f.addEventListener("click",()=>this._fire({...this._config,weather:c})),t.appendChild(f)};a("","Always sunny");for(let c of n)a(c,s(c));this.shadowRoot.querySelector("#wxHint").textContent=n.length?"Pick a weather report and the sky follows it: rain, snow, fog, thunder, and stars at night.":"Add a weather integration in Home Assistant (Met Office or Met.no, say) and the sky can follow it."}_tell(t,e,n,s){this._hold=Date.now()+6e3,this._say(t,e,n,s)}_talk(){if(Date.now()<(this._hold||0))return;if(this._houseError){this._say("I can't find your house",`Something is wrong with the house file: ${this._houseError}.`,"oops",!0);return}if(!this._house){this._say("One moment","I'm fetching your house.","think");return}let t=this._house.floors.flatMap(n=>n.devices||[]),e=t.filter(n=>this._entityOf(n)).length;this._problems&&this._problems.length?this._say("Something to check",`${this._problems[0]}${this._problems.length>1?` (and ${this._problems.length-1} more)`:""}`,"oops",!0):t.length?e>=t.length?this._say("Everything is connected!","Tap things on the card to try them.","party"):this._say("Let's connect your home",`${e} of ${t.length} things are connected. Tap a grey one and I'll help you set it up.`,e?"happy":"wow"):this._say("Your house is ready","Now add your lights and blinds: pick a sticker below and tap the plan where it goes.","happy")}_devices(){if(!this.shadowRoot)return;let t=this.shadowRoot.querySelector("#devs"),e=this._house;if(!e){t.innerHTML="";return}let n=new Set([...t.querySelectorAll("details[open]")].map(o=>o.dataset.floor)),s=!t.children.length;t.innerHTML="",e.floors.forEach((o,a)=>{let c=o.devices||[];if(!c.length)return;let u=document.createElement("details"),f=o.id||`floor${a}`;u.dataset.floor=f,u.open=s?a===0:n.has(f),u.innerHTML=`<summary>${kn(o.name||(a===0?"Ground":`Floor ${a}`))}<span class="pill"></span></summary>`;for(let p of c){let _=document.createElement("button"),m=this._roomName(o,p);_.className="dev",_.dataset.id=p.id,_.innerHTML=`<span class="ic">${he[p.kind]||he.sensor}</span>
          <span class="nm">${kn(p.name||this.kindName(p.kind))}<small>${kn([this.kindName(p.kind),m].filter(Boolean).join(" in "))}</small></span>
          <span class="pill go"></span><span class="lk"></span>`,_.addEventListener("click",()=>this._open(p.id)),_.classList.toggle("sel",p.id===this._sel),u.appendChild(_)}t.appendChild(u)}),this._states()}_link(t,e){if(e&&this._hass&&!this._hass.states[e])return this._tell("I don't know that one",`"${e}" isn't a device in Home Assistant.`,"oops",!0),!1;let n={...this._config.entities||{}},s=t.entity||null;return(e||null)===s?delete n[t.id]:n[t.id]=e||null,this._fire({...this._config,entities:n}),this._states(),!0}kindName(t){return ev[t]||t||"Device"}usedBy(t){let e={};for(let n of this._house?this._house.floors:[])for(let s of n.devices||[]){let o=s.id===t?null:this._entityOf(s);o&&(e[o]=s.name||this.kindName(s.kind))}return e}_open(t,e){let n=this._find(t);n&&(this._pf=n.fi,this._arm=null,this._sel=t,this._plan(),this._selBox(),this._setup.open(t,null,!!e))}_setupClosed(){this._talk()}_moveMode(t){let e=this._find(t);e&&(this._pf=e.fi,this._select(t,!0),this._tell("Drag it",`Drag ${e.d.name||"it"} on the plan to its new place.`,"think"))}_states(){if(!this.shadowRoot||!this._house)return;let t=this.shadowRoot.querySelector("#devs");this._house.floors.forEach((e,n)=>{let s=t.querySelector(`details[data-floor="${e.id||`floor${n}`}"]`);if(!s)return;let o=0;for(let a of e.devices||[]){let c=[...s.querySelectorAll(".dev")].find(p=>p.dataset.id===a.id),u=this._entityOf(a),f=u&&this._hass?this._hass.states[u]:null;c&&(u&&o++,c.classList.toggle("live",!!u),c.querySelector(".lk").textContent=u?`${f&&f.attributes&&f.attributes.friendly_name||u}: ${ji(f)}`:"Not connected yet",c.querySelector(".go").textContent=u?"Change":"Set up")}s.querySelector("summary .pill").textContent=`${o} of ${(e.devices||[]).length} connected`})}_floorNow(){let t=this._house;return!t||!t.floors.length?null:((this._pf==null||!t.floors[this._pf])&&(this._pf=0),{f:t.floors[this._pf],w:this._fw[this._pf],i:this._pf})}_point(t){let e=this.shadowRoot.querySelector("#plan"),n=e.createSVGPoint();return n.x=t.clientX,n.y=t.clientY,n.matrixTransform(e.getScreenCTM().inverse())}_spot(t,e){if(e.x!=null)return[e.x,e.y];let n=(t.rooms||[]).find(a=>a.id===e.room);if(!n)return null;let s=ii(Ki(n)),o=e.kind==="cover"||e.kind==="contact"?0:.32;return e.wall==="n"?[e.at,s.y0+o]:e.wall==="s"?[e.at,s.y1-o]:e.wall==="w"?[s.x0+o,e.at]:[s.x1-o,e.at]}_plan(){if(!this.shadowRoot)return;let t=S=>this.shadowRoot.querySelector(S),e=this._floorNow(),n=t("#plan"),s=t("#ptabs");if(!e){n.innerHTML="",s.innerHTML="";return}let{f:o,w:a}=e,c=this._house;s.innerHTML="",c.floors.length>1&&c.floors.forEach((S,x)=>{let v=document.createElement("button");v.className=`btn${x===this._pf?" on":""}`,v.textContent=S.name||(x===0?"Ground":`Floor ${x}`),v.addEventListener("click",()=>{this._pf=x,this._sel=null,this._plan(),this._selBox()}),s.appendChild(v)});let u=Ol(this._config.theme||c.theme,{...c.colours||{},...this._config.colours||{}}),f=(o.rooms||[]).map(S=>({r:S,pts:Ki(S)})),p=ii(f.flatMap(S=>S.pts)),_=.8,m=0,g="";for(let{r:S,pts:x}of f){let v=Bl(u,S,m);v.type==="bedroom"&&m++,g+=`<polygon points="${x.map(E=>E.join(",")).join(" ")}" fill="${v.floor}" stroke="#1b1b1b" stroke-width="0.14" stroke-linejoin="round"/>`}for(let S of a&&a.openings||[]){if(S.kind==="opening")continue;let[x,v,E,C]=S.b,M=S.kind==="window"||S.kind==="bifold"?"#7FD9FF":S.kind==="frontdoor"?"#7A4FC4":"#FFFDF4";g+=`<rect x="${x}" y="${v}" width="${E-x}" height="${C-v}" fill="${M}" stroke="#1b1b1b" stroke-width="0.05"/>`}for(let{r:S,pts:x}of f){if(!S.name)continue;let v=ii(x),E=Math.min(.34,Math.max(.2,(v.x1-v.x0-.3)/(.6*S.name.length)));g+=`<text x="${(v.x0+v.x1)/2}" y="${v.y0+.5}" font-size="${E.toFixed(2)}" text-anchor="middle" fill="#1b1b1b" stroke="#fff" stroke-width="0.08" paint-order="stroke">${kn(S.name)}</text>`}for(let S of o.devices||[]){let x=this._spot(o,S);if(!x)continue;let v=S.id===this._sel,E=v?"#FFD83A":this._entityOf(S)?"#9BE37A":"#E9E9E9",C=(he[S.kind]||he.sensor).replace("<svg ",'<svg x="-0.3" y="-0.3" width="0.6" height="0.6" ');g+=`<g class="pin" data-dev="${kn(S.id)}" transform="translate(${x[0]} ${x[1]})"><title>${kn(S.name||S.kind)}</title><circle r="${v?.5:.42}" fill="${E}" stroke="#1b1b1b" stroke-width="${v?.11:.07}"/>${C}</g>`}n.setAttribute("viewBox",`${p.x0-_} ${p.y0-_} ${p.x1-p.x0+2*_} ${p.y1-p.y0+2*_}`),n.innerHTML=g,t("#planBox").classList.toggle("arm",!!this._arm),this.shadowRoot.querySelectorAll(".kind").forEach(S=>S.classList.toggle("on",S.dataset.kind===this._arm));let b=Object.values(this._config.devices||{}).filter(S=>S===null).length;t("#hiddenBox").style.display=b?"":"none",t("#hiddenN").textContent=`${b} thing${b===1?"":"s"} from your house file hidden`}_find(t){for(let[e,n]of(this._house?this._house.floors:[]).entries()){let s=(n.devices||[]).find(o=>o.id===t);if(s)return{d:s,f:n,fi:e}}return null}_selBox(){this.shadowRoot.querySelectorAll(".dev").forEach(t=>t.classList.toggle("sel",t.dataset.id===this._sel))}_select(t,e){this._sel=t||null,this._plan(),this._selBox(),e&&this.shadowRoot.querySelector("#planBox").scrollIntoView({behavior:"smooth",block:"center"})}_armKind(t){this._arm=t,this._sel=null,this._plan(),this._selBox();let e=Zh.find(n=>n[0]===t);e?this._tell(`Adding a ${e[1].toLowerCase()}`,e[2],"think"):(this._hold=0,this._talk())}_where(t,e,n,s){let o=s!=null?this._fw[s]:(this._floorNow()||{}).w;if(!o)return{error:"I can't read this floor's walls, so I can't place things on it."};let a=p=>Math.round(p*20)/20,c=o.roomAt(e,n),u=p=>{let _=null;for(let m of o.openings){if(!p.includes(m.kind))continue;let[g,b,S,x]=m.b,v=Math.hypot(Math.max(g-e,0,e-S),Math.max(b-n,0,n-x));(!_||v<_.d)&&(_={o:m,d:v})}return _&&_.d<=1?_.o:null},f=p=>({room:p.room,wall:p.wall,at:a(p.at+p.width/2)});if(t==="cover"){let p=u(["window","bifold","garage"]);return p?f(p):{error:"Blinds go on a window. Tap on a window, patio door or garage door (the blue and cream strips on the walls)."}}if(t==="contact"||t==="lock"){let p=u(t==="lock"?["frontdoor","extdoor","door","garage"]:["window","bifold","frontdoor","extdoor","door","garage"]);if(p&&t==="contact")return f(p);if(p){let[_,m,g,b]=p.b;return{x:a((_+g)/2-p.n[0]*.3),y:a((m+b)/2-p.n[1]*.3)}}}if(t==="camera"&&!c)return{x:a(e),y:a(n)};if(!c)return{error:"Tap inside one of the rooms."};if(t==="climate"){let p=ii(Ki(c)),_=[["n",n-p.y0,e,p.x0,p.x1],["s",p.y1-n,e,p.x0,p.x1],["w",e-p.x0,n,p.y0,p.y1],["e",p.x1-e,n,p.y0,p.y1]].sort((v,E)=>v[1]-E[1]),[m,g,b,S,x]=_[0];if(g<=.8)return{room:c.id,wall:m,at:a(Math.min(x-.55,Math.max(S+.55,b)))}}return{x:a(e),y:a(n)}}_place(t,e,n){let s=this._floorNow(),o=this._where(t,e,n);if(o.error){this._tell("Not there",o.error,"oops",!0);return}let a=s.w,c=o.room?(s.f.rooms||[]).find(x=>x.id===o.room):a.roomAt(o.x,o.y),u=Zh.find(x=>x[0]===t)[1].toLowerCase(),f=c&&c.name?c.name:"Outside",p=new Set(this._house.floors.flatMap(x=>(x.devices||[]).map(v=>v.name))),_=`${f} ${u}`,m=2;for(;p.has(_);)_=`${f} ${u} ${m++}`;let g=new Set([...this._fileIds,...Object.keys(this._config.devices||{})]),b=`added_${js(_)}`,S=2;for(;g.has(b);)b=`added_${js(_)}_${S++}`;this._arm=null,this._sel=b,this._fire({...this._config,devices:{...this._config.devices||{},[b]:{floor:s.f.id,kind:t,name:_,...o}}}),this._selBox(),this._tell(`${_} added!`,`To see it in 3D, switch the card to ${s.f.name||"that floor"}.`,"party"),this._setup.open(b,"pick",!0)}_move(t,e,n){let s=this._find(t);if(!s)return;let o=this._where(s.d.kind,e,n);if(o.error){this._tell("Not there",o.error,"oops",!0),this._plan();return}let a={...this._config.devices||{}},c={...a[t]||{}};for(let u of iv)delete c[u];a[t]={...c,...o},this._sel=t,this._fire({...this._config,devices:a}),this._selBox(),this._tell("Moved",`${s.d.name||"It"} is in its new place.`,"happy")}_remove(t){let e=t?this._find(t):null;if(!e)return;let n={...this._config.devices||{}},s={...this._config.entities||{}};this._fileIds.has(t)?n[t]=null:delete n[t],delete s[t],this._sel=null,this._fire({...this._config,devices:n,entities:s}),this._selBox(),this._tell("Removed",this._fileIds.has(t)?`${e.d.name||"It"} is hidden. "Put them back" under the plan brings it back.`:`${e.d.name||"It"} is gone.`,"happy")}_fillRooms(t){let e={...this._config.devices||{}},n={...this._config.entities||{}},s=new Set([...this._fileIds,...Object.keys(e)]),o={},a=[],c=0,u=0,f=new Set,p={cover:new Set,contact:new Set,lock:new Set};this._house.floors.forEach((g,b)=>(g.devices||[]).forEach(S=>{p[S.kind]&&S.room&&p[S.kind].add(`${b}|${S.room}|${S.wall}|${Math.round(S.at*2)}`)}));for(let g of t){let b=this._house.floors[g.fi],S=this._fw[g.fi],x=(b.rooms||[]).find(R=>R.id===g.room);if(!S||!x){a.push(g.name);continue}let v=(b.devices||[]).find(R=>R.kind===g.kind&&!f.has(R.id)&&!this._entityOf(R)&&(R.room?R.room===x.id:R.x!=null&&(S.roomAt(R.x,R.y)||{}).id===x.id));if(v){f.add(v.id),n[v.id]=g.id,u++;continue}let E=(o[`${g.fi}|${g.room}|${g.kind}`]=(o[`${g.fi}|${g.room}|${g.kind}`]||0)+1)-1,C=this._autoSpot(g.kind,g.fi,x,S,E,p);if(!C){a.push(g.name);continue}let M=`added_${js(g.name)}`,I=2;for(;s.has(M);)M=`added_${js(g.name)}_${I++}`;s.add(M),e[M]={floor:b.id,kind:g.kind,name:g.name,...C},n[M]=g.id,c++}(c||u)&&this._fire({...this._config,devices:e,entities:n}),this._states();let _=a.length?` I couldn't find a spot for ${a.slice(0,3).join(", ")}${a.length>3?` and ${a.length-3} more`:""}: add ${a.length===1?"it":"them"} with a sticker.`:" Drag any of them to the right spot.",m=[c?`${c} added to the plan`:"",u?`${u} connected to grey ones that were waiting`:""].filter(Boolean).join(", ");this._tell(c+u?`${c+u} thing${c+u===1?"":"s"} sorted!`:"Nothing added",`${m?`${m[0].toUpperCase()}${m.slice(1)}.`:""}${_}`,c+u?"party":"oops",!(c+u))}_autoSpot(t,e,n,s,o,a){let c=ii(Ki(n)),u=E=>Math.round(E*20)/20,f=(E,C)=>{let M=s.roomAt(E,C);return!!M&&M.id===n.id},p=(c.x0+c.x1)/2,_=(c.y0+c.y1)/2;if(!f(p,_)){let E=Ki(n),C=n.label||[E.reduce((M,I)=>M+I[0],0)/E.length,E.reduce((M,I)=>M+I[1],0)/E.length];if(!f(C[0],C[1]))return null;[p,_]=C}let m=(E,C)=>{for(let M of E)for(let I of s.openings){if(I.kind!==M||I.room!==n.id)continue;let R=u(I.at+I.width/2),O=`${e}|${I.room}|${I.wall}|${Math.round(R*2)}`;if(!C.has(O))return C.add(O),{o:I,at:R}}return null};if(t==="cover"){let E=m(["window","bifold","garage"],a.cover);return E?{room:n.id,wall:E.o.wall,at:E.at}:null}if(t==="contact"){let E=m(["frontdoor","extdoor","bifold","garage","door","window"],a.contact);return E?{room:n.id,wall:E.o.wall,at:E.at}:null}if(t==="lock"){let E=m(["frontdoor","extdoor","garage"],a.lock);if(!E)return null;let[C,M,I,R]=E.o.b;return{x:u((C+I)/2-E.o.n[0]*.3),y:u((M+R)/2-E.o.n[1]*.3)}}let g=c.x1-c.x0>=c.y1-c.y0,b=.45,S=[[c.x0+b,c.y0+b],[c.x1-b,c.y0+b],[c.x1-b,c.y1-b],[c.x0+b,c.y1-b]],x=[["w",c.x0,_],["e",c.x1,_],["n",p,c.y0],["s",p,c.y1]],v;if(t==="light"){let E=[0,-.25,.25,-.4,.4][o%5];v=g?[p+E*(c.x1-c.x0),_]:[p,_+E*(c.y1-c.y0)]}else if(t==="climate"){let[E,C,M]=[x[o%4][0],x[o%4][1],x[o%4][2]],I=E==="n"||E==="s",R=I?c.x0:c.y0,O=I?c.x1:c.y1;return O-R>1.3?{room:n.id,wall:E,at:u(Math.min(O-.6,Math.max(R+.6,I?p:_)))}:{x:u(p),y:u(_)}}else t==="tv"?v=[p,c.y0+.35]:t==="motion"||t==="camera"?v=S[o%4]:t==="speaker"?v=S[(o+1)%4]:v=[c.x0+b+(o%4+1)*((c.x1-c.x0-2*b)/5),c.y1-b];return f(v[0],v[1])||(v=[p+o%3*.3,_+.3]),f(v[0],v[1])?{x:u(v[0]),y:u(v[1])}:null}_rename(t,e){let n=t?this._find(t):null;if(e=(e||"").trim(),!n||!e||e===n.d.name)return;let s={...this._config.devices||{}};s[t]={...s[t]||{},name:e},this._fire({...this._config,devices:s}),this._selBox(),this._states()}};customElements.get("toon-house-card-editor")||customElements.define("toon-house-card-editor",Kh);var sv="0.8.0",ss=.9,_i=2.1,er=2.05,ir=.2,rs=(i,t,e)=>`tex|${i}|${t}|${e||""}`,rv=i=>String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),ho=i=>i*Math.PI/180;function Ud(i,t){let e=i.entity&&t&&t.states[i.entity];if(!e)return{planned:!0,active:!1,level:1,text:""};let n=e.attributes||{},s=i.entity.split(".")[0],o=Number(e.state);switch(i.kind){case"light":case"switch":return{active:e.state==="on",text:""};case"cover":{let a=n.current_position!=null?Number(n.current_position):s==="input_number"?o:e.state==="open"?100:0;return{active:a<99,level:Math.max(0,Math.min(100,a))/100,text:`${Math.round(a)}%`}}case"climate":{let a=n.current_temperature!=null?n.current_temperature:n.temperature!=null?n.temperature:o;return{active:n.hvac_action==="heating"||s==="input_number"&&o>=21,text:Number.isFinite(Number(a))?`${Number(a).toFixed(1)}\xB0`:e.state}}case"lock":return{active:e.state==="locked",text:e.state==="locked"?"locked":"unlocked"};case"motion":return{active:e.state==="on",text:""};case"contact":return{active:e.state==="on",text:e.state==="on"?"open":""};case"camera":return{active:["streaming","recording"].includes(e.state),text:""};case"speaker":case"tv":return{active:["playing","on"].includes(e.state),text:e.state==="playing"?"playing":""};default:return{active:!1,text:`${e.state}${n.unit_of_measurement||""}`}}}var jh=class extends HTMLElement{static getStubConfig(){return{view:"ground",layout:{title:"My house",floors:[{id:"ground",name:"Ground",rooms:[{id:"living",name:"Living room",rect:[0,0,5,4]},{id:"kitchen",name:"Kitchen",rect:[5,0,8.5,4]},{id:"hall",name:"Hall",rect:[0,4,8.5,5.6]}],openings:[{room:"hall",wall:"s",at:3.8,width:1,kind:"frontdoor"},{room:"living",wall:"n",at:1.5,width:2,kind:"window"},{room:"kitchen",wall:"n",at:6,width:1.5,kind:"window"},{room:"living",wall:"s",at:2,width:.85,kind:"door"},{room:"kitchen",wall:"s",at:6.2,width:.85,kind:"door"}],furniture:[{type:"sofa",x:2.5,y:3.3,rot:180},{type:"table",x:6.8,y:2.2}],devices:[{name:"Living room light",kind:"light",x:2.5,y:2,entity:null}]}]}}}static getConfigElement(){return document.createElement("toon-house-card-editor")}setConfig(t){if(!t||!t.layout)throw new Error('Set "layout" to the address of your house file (for example /local/toon-house/house.json) or put the house in the card config.');let e=this._config&&t.view!==void 0&&this._config.view!==t.view;e&&(this._mode=null),this._config={view:"outside",cut_height:1.2,...t},this.shadowRoot||(kl(),this.attachShadow({mode:"open"}),this._dom()),this._config.height?this.style.setProperty("--toon-house-h",typeof this._config.height=="number"?`${this._config.height}px`:this._config.height):this.style.removeProperty("--toon-house-h");let n=JSON.stringify([this._config.layout,this._config.theme||null,this._config.colours||null,this._config.cut_height]),s=JSON.stringify(this._config.devices||null);if(n===this._srcKey&&this._raw&&this._floors){if(s!==this._overKey){this._overKey=s,this._rebuild(e);return}if(this._applyEntities(),this._header(),this._renderer&&(this._config.quality||"auto")!==this._gfx){this._autoLow=!1,this._teardown(),this._ensure();return}if(!e&&this._weatherCheck())return;e?(this._pickMode(),this._renderer&&this._build(!0)):this._devs&&(this._sig=this._signature(),this._syncDevices(),this._req());return}this._srcKey=n,this._overKey=s,this._loadLayout()}getCardSize(){return 12}set hass(t){this._live=t;let e=this.shadowRoot&&this.shadowRoot.querySelector(".rp");e&&(e.style.display=t&&t.callWS&&this._config.replay!==!1?"":"none"),!(this._replay&&this._replay.on)&&(this._hass=t,this._hassChanged())}_hassChanged(){if(this._room&&this._room.refresh(),!this._devs||this._weatherCheck())return;let t=this._signature();t!==this._sig&&(this._sig=t,this._syncDevices(),this._req())}connectedCallback(){this._connected=!0,this._ensure()}disconnectedCallback(){this._connected=!1,this._replay&&this._replay.stop(),this._teardown()}_dom(){this.shadowRoot.innerHTML=`<style>
      :host{display:block}
      ha-card{position:relative;overflow:hidden;font-family:${Ul};font-weight:500;color:#1b1b1b}
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
      .toast{position:absolute;left:50%;bottom:44px;transform:translateX(-50%);padding:8px 14px;border:3px solid #1b1b1b;border-radius:12px;background:#fff;font-weight:800;font-size:14px;box-shadow:2px 3px 0 #1b1b1b;display:none;pointer-events:auto;cursor:pointer;max-width:86%;text-align:left;white-space:pre-line}
      .foot{position:absolute;left:12px;bottom:8px;right:12px;font-size:12px;font-weight:700;text-shadow:0 0 3px #fff,0 0 3px #fff;pointer-events:none;display:flex;gap:14px;flex-wrap:wrap}
      .err{padding:18px;background:#fff;white-space:pre-line}
      ${Cd}${Pd}
      @media (max-width:600px){.rl{font-size:11px}.chip{font-size:11px;padding:1px 5px}h1{font-size:19px}.foot span+span{display:none}button{font-size:13px;padding:6px 9px}}
    </style>
    <ha-card><div class="wrap">
      <div class="labels"></div>
      <div class="bar"><h1></h1><span class="modes" style="display:contents"></span><span class="wx" style="display:none"></span><button class="rp" style="display:none" title="See the last day again">Replay</button><button class="warn" style="display:none">!</button></div>
      <div class="toast"></div>
      <div class="foot"><span class="counts"></span><span>Drag to turn, pinch or scroll to zoom. Tap a device or a room. Hold a device for more.</span></div>
    </div></ha-card>`,this._wrap=this.shadowRoot.querySelector(".wrap"),this._labels=this.shadowRoot.querySelector(".labels"),this._toast=this.shadowRoot.querySelector(".toast"),this._toast.addEventListener("click",()=>{let t=this._toast.dataset.nav;this._toast.style.display="none",t&&this._navigate(t)}),this._room=new Gl(this),this._replay=new Hl(this),this.shadowRoot.querySelector(".rp").addEventListener("click",()=>this._replay.on?this._replay.stop():this._replay.start()),this.shadowRoot.querySelector(".warn").addEventListener("click",()=>this._say(`Check your house file:
- ${this._warnings.join(`
- `)}`,"",2e4))}async _loadLayout(){let t=this._config.layout,e=this._srcKey;this._failed&&(this._failed=!1,this._dom());try{let n=t;if(typeof t=="string"){let s=await fetch(`${t}${t.includes("?")?"&":"?"}v=${Date.now()}`);if(!s.ok)throw new Error(`the server answered ${s.status}`);n=await s.json()}if(e!==this._srcKey)return;this._raw=JSON.stringify(n),this._layout=JSON.parse(this._raw),this._prepare()}catch(n){this._fail(`Could not read the house file${typeof t=="string"?` at ${t}`:""}: ${n.message}`);return}this._renderer?this._build(!0):this._ensure()}_rebuild(t){try{this._layout=JSON.parse(this._raw),this._prepare()}catch(e){this._fail(`Something is wrong with the devices in the card settings: ${e.message}`);return}this._renderer?this._build(!!t):this._ensure()}_prepare(){let t=this._layout;if(!t||!Array.isArray(t.floors)||!t.floors.length)throw new Error('it needs a "floors" list with at least one floor');this.theme=this._theme0=Ol(this._config.theme||t.theme,{...t.colours||{},...this._config.colours||{}}),this._H=t.storey_height||2.4,this._warnings=[];let e=0;co(t,this._config.devices),this._floors=t.floors.map((u,f)=>{if(u.id=u.id||`floor${f}`,u.name=u.name||(f===0?"Ground":f===1?"Upstairs":`Floor ${f}`),u.rooms=u.rooms||[],!u.rooms.length)throw new Error(`floor "${u.name}" has no rooms`);u.rooms.forEach((m,g)=>{m.id=m.id||`${u.id}_room${g}`,m.name=m.name||"",m.points=Ki(m)});for(let m of u.devices||[])m._file=m.entity===void 0?null:m.entity;let p=Fl(u);this._warnings.push(...p.warnings);let _={};for(let m of u.rooms)_[m.id]=Bl(this.theme,m,e),_[m.id].type==="bedroom"&&e++;for(let m of u.devices||[])m.x==null&&!(m.room&&m.wall&&m.at!=null)?this._warnings.push(`Device "${m.name||m.id}" needs either x and y, or room, wall and at.`):m.room&&!u.rooms.some(g=>g.id===m.room)&&this._warnings.push(`Device "${m.name||m.id}" points at room "${m.room}", which is not on ${u.name}.`);return{floor:u,walls:p,styles:_,off:u.offset||[0,0],baseY:f*(this._H+ir)}}),this._applyEntities(),this._pickMode(),this._header();let n=this.shadowRoot.querySelector(".modes");n.innerHTML="";let s=(u,f)=>{let p=document.createElement("button");p.textContent=u,p.dataset.mode=String(f),p.addEventListener("click",()=>this._setMode(f)),n.appendChild(p)};this._floors.forEach((u,f)=>s(u.floor.name,f)),s("Outside","whole");let o=this.shadowRoot.querySelector(".warn");o.style.display=this._warnings.length?"":"none",o.textContent=`! ${this._warnings.length}`;let a=ii(this._floors.flatMap(u=>u.floor.rooms.flatMap(f=>f.points.map(([p,_])=>[p+u.off[0],_+u.off[1]]))));this._house=a;let c=t.outside||{};this._plot={x0:a.x0-2,x1:a.x1+2,back:a.y0-9,front:a.y1+7,...c.plot||t.plot||{}}}_pickMode(){if(typeof this._mode=="number"&&this._mode>=this._floors.length&&(this._mode=null),this._mode!=null)return;let t=String(this._config.view),e=this._floors.findIndex(n=>n.floor.id===t);this._mode=e>=0?e:/^\d+$/.test(t)&&Number(t)<this._floors.length?Number(t):t==="ground"?0:"whole"}_header(){this.shadowRoot.querySelector("h1").textContent=this._config.title!=null?this._config.title:this._layout&&this._layout.title||""}_applyEntities(){let t=this._config.entities||{},e=n=>Object.prototype.hasOwnProperty.call(t,n);for(let n of this._floors||[])for(let s of n.floor.devices||[])s.entity=e(s.id)?t[s.id]:s.name&&e(s.name)?t[s.name]:s._file}_fail(t){this._failed=!0,this._floors=null,this._srcKey=null,this._raw=null,this._teardown(),this._wrap.innerHTML=`<div class="err">${rv(t)}</div>`}_ensure(){if(!this._connected||!this._layout||!this._floors||this._renderer)return;let t;try{this._gfx=this._config.quality||"auto",t=new wl({antialias:this._gfx!=="light",alpha:!1,powerPreference:"low-power"})}catch{this._fail("This browser could not start 3D graphics (WebGL2), so the house cannot be drawn here.");return}this._renderer=t,t.setPixelRatio(this._low()?1:Math.min(window.devicePixelRatio||1,1.5)),this._slow=0,this._wrap.insertBefore(t.domElement,this._wrap.firstChild),this._scene=new vr,this._camera=new ti(32,1,.5,600);let e=new kr(16777215,14207928,1.55),n=new Vr(16777215,2.1);n.position.set(-9,14,12),this._scene.add(e,n),this._wx=new Xl(this._scene,e,n,(o,a,c)=>this._outlined(o,a,c)),this._seen=!0,this._io=new IntersectionObserver(o=>{this._seen=o[o.length-1].isIntersecting,this._seen&&this._req()}),this._io.observe(this._wrap),this._onShow=()=>{document.hidden||this._req()},document.addEventListener("visibilitychange",this._onShow),this._controls=new Cl(this._camera,t.domElement),this._controls.enableDamping=!1,this._controls.minDistance=4,this._controls.maxDistance=160,this._controls.maxPolarAngle=1.48,this._controls.addEventListener("change",()=>{this._wx&&this._wx.range(this._camera.position.distanceTo(this._controls.target)),this._req()});let s=t.domElement;this._onDown=o=>{this._down=[o.clientX,o.clientY],this._at=[o.clientX,o.clientY],this._held=!1,clearTimeout(this._holdT),this._holdT=setTimeout(()=>{if(!this._down||Math.hypot(this._at[0]-this._down[0],this._at[1]-this._down[1])>=6)return;let a=this._deviceAt(this._down[0],this._down[1]);!a||!a.d.entity||(this._held=!0,this._toast.style.display="none",this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:a.d.entity}})))},550)},this._onMove=o=>{this._down&&(this._at=[o.clientX,o.clientY])},this._onUp=o=>{clearTimeout(this._holdT),this._down&&!this._held&&Math.hypot(o.clientX-this._down[0],o.clientY-this._down[1])<6&&this._pick(o.clientX,o.clientY),this._down=null},this._onMenu=o=>{(this._held||this._down)&&o.preventDefault()},s.addEventListener("pointerdown",this._onDown),s.addEventListener("pointermove",this._onMove),s.addEventListener("pointerup",this._onUp),s.addEventListener("pointercancel",this._onUp),s.addEventListener("contextmenu",this._onMenu),this._ro=new ResizeObserver(()=>this._resize()),this._ro.observe(this._wrap),this._resize(),this._build(!0)}_teardown(){if(this._raf&&cancelAnimationFrame(this._raf),this._raf=0,this._ro&&this._ro.disconnect(),this._ro=null,this._controls&&this._controls.dispose(),this._controls=null,this._io&&this._io.disconnect(),this._io=null,document.removeEventListener("visibilitychange",this._onShow),this._clear(),this._wx&&this._wx.dispose(),this._wx=null,this._renderer){let t=this._renderer.domElement;clearTimeout(this._holdT),t.removeEventListener("pointerdown",this._onDown),t.removeEventListener("pointermove",this._onMove),t.removeEventListener("pointerup",this._onUp),t.removeEventListener("pointercancel",this._onUp),t.removeEventListener("contextmenu",this._onMenu),this._renderer.dispose(),this._renderer.forceContextLoss(),t.remove()}this._renderer=null,this._scene=null,this._devs=null}_clear(){this._root&&(this._root.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())}),this._scene.remove(this._root),this._root=null,this._gradient&&this._gradient.dispose(),this._labels.innerHTML="")}_resize(){if(!this._renderer)return;let t=this._wrap.clientWidth,e=this._wrap.clientHeight;!t||!e||(this._renderer.setSize(t,e,!1),this._camera.aspect=t/e,this._camera.updateProjectionMatrix(),this._needView&&this._view(),this._req())}_setMode(t){t!==this._mode&&(this._mode=t,this._renderer&&this._build(!0))}_material(t,e){let n={gradientMap:this._gradient,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,side:pi,...e};if(!t.startsWith("tex|"))return new Kn({color:t,...n});let[,s,o,a]=t.split("|"),c=new Mn(_d(s,o,a||null));c.wrapS=c.wrapT=Yn,c.colorSpace=Ge,c.anisotropy=4;let u=Vh[s]||1;return c.repeat.set(1/u,1/u),new Kn({color:16777215,map:c,...n})}_batch(){let t=this;return{by:new Map,glass:[],edges:[],add(e,n,s=!0){let o=e.index?e.toNonIndexed():e;if(o!==e&&e.dispose(),s){let a=new Ar(o,28);this.edges.push(a.attributes.position.array),a.dispose()}if(n==="glass"){o.deleteAttribute("uv"),this.glass.push(o);return}n.startsWith("tex|")||o.deleteAttribute("uv"),(this.by.get(n)||this.by.set(n,[]).get(n)).push(o)},box(e,n,s,o,a,c,u,f=0,p=!0){if(c-a<.004||s<.004||o<.004)return;let _=new Ye(s,c-a,o);f&&_.rotateY(-ho(f)),_.translate(e,(a+c)/2,n),this.add(_,u,p)},flat(e,n,s,o=!0){let a=new Tn(t._shape(e));a.rotateX(Math.PI/2),a.translate(0,n,0),this.add(a,s,o)},rect(e,n,s,o,a,c,u=!0){this.flat({o:[[e,n],[s,n],[s,o],[e,o]],h:[]},a,c,u)},shape(e,n,s,o=!0){let a=new Tn(t._shape(e));a.applyMatrix4(n),this.add(a,s,o)},prism(e,n,s,o,a=!0){let c=new Jn(t._shape(e),{depth:s-n,bevelEnabled:!1});c.rotateX(Math.PI/2),c.translate(0,s,0),this.add(c,o,a)},quad(e,n,s,o,a,c=!0){let u=new Ie,f=[e,n,s,e,s,o].flat();u.setAttribute("position",new xe(f,3)),u.setAttribute("uv",new xe(new Array(12).fill(0),2)),u.computeVertexNormals(),this.add(u,a,c)},build(e){for(let[n,s]of this.by){let o=new Le(kh(s),t._material(n));s.forEach(a=>a.dispose()),e.add(o)}if(this.glass.length){let n=new Le(kh(this.glass),new Be({color:t.theme.glass,transparent:!0,opacity:.45,depthWrite:!1,side:pi}));this.glass.forEach(s=>s.dispose()),n.renderOrder=2,e.add(n)}if(this.edges.length){let n=this.edges.reduce((c,u)=>c+u.length,0),s=new Float32Array(n),o=0;for(let c of this.edges)s.set(c,o),o+=c.length;let a=new $s;a.setPositions(s),e.add(new Ll(a,new Zs({color:t.theme.ink,linewidth:t._ink()})))}}}}_shape(t){let e=new un(t.o.map(n=>new _t(n[0],n[1])));for(let n of t.h||[])e.holes.push(new $n(n.map(s=>new _t(s[0],s[1]))));return e}_ink(){return this._wrap.clientWidth<600?1.6:2.4}_outlined(t,e,n=.035){let s=new oi,o=new Le(t,e);t.computeBoundingSphere();let a=t.boundingSphere.radius||.2,c=1+n/a,u=new Le(t,new Be({color:this.theme.ink,side:qe}));return u.scale.set(c,c,c),s.add(u,o),s.userData.mesh=o,s}_toon(t){return new Kn({color:t,gradientMap:this._gradient})}_build(t){let e=this._weather();this.theme=Nd(this._theme0,e.w,e.lit),this._tintKey=qh(e.w,e.lit);let n=this.theme,s=this._H,o=this._config.cut_height,a=this._mode;this._clear(),this._cloudMats=[];let c=new Ds(new Uint8Array(n.shade),n.shade.length,1,Zr);c.minFilter=c.magFilter=Oe,c.needsUpdate=!0,this._gradient=c,this._scene.background=new ce(n.sky),this.shadowRoot.querySelector("ha-card").style.background=n.sky;let u=this._root=new oi;if(this._scene.add(u),this._devs=[],this._room&&this._room.isOpen){let f=typeof a=="number"?this._floors[a]:null,p=f&&this._room.key===`${f.floor.id}|${this._room.roomId}`?f.floor.rooms.find(_=>_.id===this._room.roomId):null;p?this._room.open(f,p):this._room.close()}this._pickables=[],this._roomLabels=[],this._tweens=[],this._outside(u),this._floors.forEach((f,p)=>{if(a!=="whole"&&p>a)return;let _=a===p;this._floor(u,f,p,_?o:s,_)}),a==="whole"&&this._roofs(u),this.shadowRoot.querySelectorAll("button[data-mode]").forEach(f=>f.classList.toggle("on",f.dataset.mode===String(a))),this._sig=this._signature(),this._syncDevices(),t&&this._view(),this._applyWeather(e.w),this._req()}_low(){return this._gfx==="light"||this._gfx==="auto"&&!!this._autoLow}_weather(){let t=Dd(this._hass,this._config),e=!!(t&&t.night&&this._hass&&(this._floors||[]).some(n=>(n.floor.devices||[]).some(s=>s.kind==="light"&&s.entity&&(this._hass.states[s.entity]||{}).state==="on")));return{w:t,lit:e}}_applyWeather(t){if(!this._wx||!this._root)return;let e=this._plot,n=Math.max(e.x1-e.x0,e.front-e.back);this._wxKey=Yh(t),this._wx.apply(t,{theme:this.theme,box:{cx:(e.x0+e.x1)/2,cz:(e.back+e.front)/2,far:n},whole:this._mode==="whole",low:this._low(),clouds:this._cloudMats,sunBall:this._sunBall,sunMat:this._sunMat,dist:this._camera.position.distanceTo(this._controls.target)||this._dist}),this.shadowRoot.querySelector("ha-card").style.background=`#${this._scene.background.getHexString()}`;let s=this.shadowRoot.querySelector(".wx"),o=t?[t.text,t.temp].filter(Boolean).join(" "):"";s.textContent=o,s.style.display=o?"":"none",this._last=0}_weatherCheck(){if(!this._renderer||!this._root)return!1;let t=this._weather();if(qh(t.w,t.lit)!==this._tintKey)return this._build(!1),!0;let e=t.w?[t.w.text,t.w.temp].filter(Boolean).join(" "):"";if(Yh(t.w)!==this._wxKey)this._applyWeather(t.w),this._req();else if(e!==this.shadowRoot.querySelector(".wx").textContent){let n=this.shadowRoot.querySelector(".wx");n.textContent=e,n.style.display=e?"":"none"}return!1}_view(){let t=this._mode,e=this._wrap.clientWidth,n=this._wrap.clientHeight;if(!e||!n){this._needView=!0;return}this._needView=!1;let s=this._house,o=(s.x0+s.x1)/2,a=(s.y0+s.y1)/2,c=Math.max(s.x1-s.x0,s.y1-s.y0,6),u=e/n,f=Math.max(1,.95/u),p=t==="whole",_=this._floors.length*(this._H+ir),m=p?[o,_*.4,a+c*.1]:[o,this._floors[t].baseY+.4,a+c*.04],g=new k(...p?[.46,.36,.81]:[.22,.8,.56]).normalize().multiplyScalar((p?c*3.3+_*.8:c*2.45)*f);this._dist=g.length(),this._controls.target.set(...m),this._camera.position.set(m[0]+g.x,m[1]+g.y,m[2]+g.z),this._controls.update()}_outside(t){let e=this.theme,n=this._plot,s=this._layout.outside||{},o=this._batch(),a=new oi,c=(n.x0+n.x1)/2,u=n.x1-n.x0,f=this._house,p=this._floors[0];if(o.box(c,(n.back+n.front)/2,u+.4,n.front-n.back+.4,-1.4,-.3,e.earth),o.box(c,(n.back+n.front)/2,u,n.front-n.back,-.3,-.08,e.lawn),o.rect(n.x0+.05,n.back+.05,n.x1-.05,n.front-.05,-.075,rs("stripes",e.lawn,e.lawn2),!1),s.road!==!1){o.box(c,n.front+.9,u+.4,1.4,-1.4,-.14,e.kerb),o.box(c,n.front+3.9,u+.4,4.6,-1.4,-.22,e.road);for(let N=n.x0+1;N<n.x1-1;N+=3)o.rect(N,n.front+3.8,N+1.5,n.front+3.98,-.215,e.white,!1)}let _=p.walls.openings.find(N=>N.kind==="frontdoor"),m=p.walls.openings.find(N=>N.kind==="garage"&&N.n[1]===1),g=s.drive||s.drives,b=s.path||s.paths,S=N=>!N||!N.length?[]:Array.isArray(N[0])?N:[N];g==null&&m&&(g=[[m.b[0]-.4,m.b[3],m.b[2]+.4,n.front]]),b==null&&_&&_.n[1]===1&&(b=[[_.b[0]-.1,_.b[3],_.b[2]+.1,n.front]]),g=S(g),b=S(b);for(let N of b)o.box((N[0]+N[2])/2,(N[1]+N[3])/2,N[2]-N[0],N[3]-N[1],-.08,-.05,e.path);for(let N of g)o.box((N[0]+N[2])/2,(N[1]+N[3])/2,N[2]-N[0],N[3]-N[1],-.08,-.045,e.drive),o.rect(N[0]+.03,N[1]+.03,N[2]-.03,N[3]-.03,-.04,rs("paving",e.drive,e.drive2),!1);for(let N of S(s.patio||s.patios))o.box((N[0]+N[2])/2,(N[1]+N[3])/2,N[2]-N[0],N[3]-N[1],-.08,-.04,e.patio),o.rect(N[0]+.03,N[1]+.03,N[2]-.03,N[3]-.03,-.035,rs("tile",e.patio,e.patio2),!1);let x=(N,G)=>[...g,...b].some(H=>N>H[0]-.3&&N<H[2]+.3&&G>H[1]-.3&&G<H[3]+.3),v=Math.min(f.y1,Math.max(f.y0+2,(f.y0+f.y1)/2)),E=s.fence||["w","n","e"],C=s.hedge||[],M=N=>N==="n"?[n.x0,n.back+.06,n.x1,n.back+.06]:N==="w"?[n.x0+.06,n.back,n.x0+.06,v]:N==="e"?[n.x1-.06,n.back,n.x1-.06,v]:[n.x0,n.front-.06,n.x1,n.front-.06];for(let N of E){if(C.includes(N))continue;let[G,H,B,W]=M(N),K=Math.hypot(B-G,W-H),J=H===W,at=N==="s",tt=at?.9:1.6,nt=new Tn(this._shape({o:[[0,-.08],[K,-.08],[K,tt],[0,tt]],h:[]})),st=new _e().makeBasis(J?new k(1,0,0):new k(0,0,1),new k(0,1,0),J?new k(0,0,1):new k(-1,0,0)).setPosition(G,0,H);nt.applyMatrix4(st),o.add(nt,rs("planks",e.fence,e.fencePost),!0);for(let Tt=0;Tt<=K+.01;Tt+=K/Math.max(1,Math.round(K/1.9)))o.box(J?G+Tt:G,J?H:H+Tt,.16,.16,-.08,tt+.14,e.fencePost)}o.build(a);let I=(N,G,H,B,W,K=1,J=.07)=>{let at=this._outlined(new di(B,18,12),this._toon(W),J);at.position.set(N,G,H),at.scale.y=K,a.add(at)};for(let N of C){let[G,H,B,W]=M(N),K=Math.hypot(B-G,W-H),J=Math.max(2,Math.round(K/1.15)),at=N==="w"?.7:N==="e"?-.7:0,tt=N==="n"?.7:N==="s"?-.7:0;for(let nt=0;nt<=J;nt++){let st=G+(B-G)*nt/J+at,Tt=H+(W-H)*nt/J+tt;st>f.x0-1.3&&st<f.x1+1.3&&Tt>f.y0-1.3&&Tt<f.y1+1.3||I(st,.75+nt%2*.1,Tt,.95,e.leaf[nt%2?0:2],.95)}}let R=N=>{let G=N.size||1,H=N.colour||(N.blossom?e.blossom:e.leaf[0]),B=this._outlined(new hn(.16*G,.24*G,1.7*G,10),this._toon(e.trunk));B.position.set(N.x,.85*G-.08,N.y),a.add(B);for(let[W,K,J,at]of[[0,2.35,0,1.2],[-.85,1.85,.2,.85],[.9,1.9,-.1,.8],[.1,1.8,.85,.75],[-.2,1.9,-.8,.7]])I(N.x+W*G,K*G,N.y+J*G,at*G,H)};(s.trees||[{x:n.x0+2.2,y:n.back+2.6,size:1.2},{x:n.x1-2.6,y:n.back+4.2,size:.95,colour:e.leaf[1]},{x:n.x1-1.7,y:n.front-2.2,size:.8,blossom:!0}]).forEach(R);for(let N of p.walls.openings){if(N.kind!=="window"||!N.ext||s.bushes===!1)continue;let G=(N.b[0]+N.b[2])/2+N.n[0]*.75,H=(N.b[1]+N.b[3])/2+N.n[1]*.75;if(x(G,H))continue;let B=N.n[0]===0?1:0,W=N.n[0]===0?0:1;I(G-B*.4,.3,H-W*.4,.5,e.leaf[1],.85,.05),I(G+B*.4,.26,H+W*.4,.44,e.leaf[0],.85,.05)}if(s.flowers!==!1){let N=this._batch();for(let G=n.x0+1,H=0;G<n.x1-1;G+=.55,H++){let B=new di(.13,8,6);B.translate(G,.12+H%3*.05,n.back+.6+H%2*.3),N.add(B,e.flowers[H%e.flowers.length],!1)}N.build(a)}if(s.mailbox!==!1&&_&&b.length){let N=b[0],G=N[2]+.5,H=n.front-.6,B=this._batch();B.box(G,H,.1,.1,-.08,.95,e.fencePost),B.box(G,H,.32,.5,.95,1.25,e.bad),B.build(a)}let A=()=>new Be({color:e.cloud}),D=Math.max(u,n.front-n.back);for(let[N,G,H,B]of[[-.9,10,-.5,1.5],[1.3,12,-.2,1.9],[.4,14,-1.3,2.3],[-1.1,9,.6,1.2],[1.6,15,-1.2,2]])for(let[W,K,J,at]of[[0,0,0,1],[1.1,-.15,.1,.75],[-1.1,-.2,0,.7],[.3,.45,-.1,.7]]){let tt=this._outlined(new di(at*B,16,10),A(),.09);this._cloudMats.push(tt.userData.mesh.material),tt.position.set(c+N*D*.55+W*B,G+K*B,(n.back+n.front)/2+H*D*.5+J*B),tt.scale.y=.7,a.add(tt)}let U=this._outlined(new di(2.4,24,16),new Be({color:e.sun}),.12);U.position.set(c+D*.9,19,n.back-D*.4),a.add(U),this._sunBall=U,this._sunMat=U.userData.mesh.material,t.add(a)}_floor(t,e,n,s,o){let a=this.theme,{floor:c,walls:u,styles:f,off:p,baseY:_}=e,m=this._batch(),g=new oi;g.position.set(p[0],_,p[1]);for(let E of u.slab)m.prism(E,n===0?-.22:-ir,0,n===0?a.slab:this._exteriorKey());for(let E of c.rooms){let C=f[E.id];m.flat({o:E.points,h:[]},.02,C.pattern==="plain"||!Vh[C.pattern]?C.floor:rs(C.pattern,C.floor,C.floor2),!1)}this._walls(m,e,s);let b=new Set((c.devices||[]).filter(E=>E.kind==="cover").map(E=>this._openingFor(e,E)).filter(Boolean));for(let E of u.openings)this._opening(m,e,E,s,b.has(E));for(let E of c.rooms){if(f[E.id].type!=="stairs"||n!==0||this._floors.length<2)continue;let C=ii(E.points),M=C.y1-C.y0>=C.x1-C.x0,I=12,R=E.up||(M?"n":"e"),O=(M?C.y1-C.y0:C.x1-C.x0)-.5,A=O/I,D=(M?C.x1-C.x0:C.y1-C.y0)-.2;for(let U=0;U<I;U++){let N=.1+A*(U+.5),G=Math.min(s+.6,(this._H+ir)/I*(U+1));M?m.box((C.x0+C.x1)/2,R==="n"?C.y1-N:C.y0+N,D,A,0,G,a.woodLight):m.box(R==="e"?C.x0+N:C.x1-N,(C.y0+C.y1)/2,A,D,0,G,a.woodLight)}}let S=s<2?s+.2:9,x=0;for(let E of c.furniture||[]){let C=I=>(I.rotateY(-ho(E.rot||0)),I.translate(E.x,0,E.y),I),M=E.type==="bed"||E.type==="single_bed";for(let[I,R,O,A,D,U,N,G]of xd(E,a,x)){let H=Math.min(U,S);if(H-D<.01)continue;let B,W=E.type!=="rug";G==="cyl"?(B=new hn(O/2,O/2,H-D,14),W=!1):G==="ball"?(B=new di(O/2,12,8),W=!1):G==="wheel"?(B=new hn(O/2,O/2,A,14),B.rotateZ(Math.PI/2),W=!1):B=new Ye(O,H-D,A),B.translate(I,(D+H)/2,R),m.add(C(B),N,W)}M&&x++}m.build(g),t.add(g);let v=this._mode==="whole";for(let E of c.devices||[]){if(E.x==null&&!(E.room&&E.wall&&E.at!=null)||E.room&&!c.rooms.some(M=>M.id===E.room))continue;let C=E.kind==="cover"&&this._openingFor(e,E);!o&&!(v&&E.kind==="camera")&&!C||this._device(g,e,E,s,o||v)}if(o)for(let E of c.rooms){if(!E.name)continue;let C=ii(E.points),M=document.createElement("div");M.className="rl",M.textContent=E.name,this._labels.appendChild(M);let I=E.label||[(C.x0+C.x1)/2,(C.y0+C.y1)/2];this._roomLabels.push({el:M,pos:new k(p[0]+I[0],_+.1,p[1]+I[1]),small:C.x1-C.x0<1.7||C.y1-C.y0<1.7})}}_exteriorKey(){let t=this.theme;return t.exteriorPattern?rs(t.exteriorPattern,t.exterior,t.exterior2):t.exterior}_cutRange(t,e){let n=t.kind==="window"?ss:0,s=t.kind==="window"||t.kind==="bifold"||t.kind==="garage"?_i:er;return n>=e-.02?null:[n,s>=e-.05?e:s]}_walls(t,e,n){let s=this.theme,o=e.walls,a=this._exteriorKey(),c=o.openings.filter(m=>m.kind!=="opening").map(m=>({o:m,r:this._cutRange(m,n)})).filter(m=>m.r),u=new k,f=new k(0,1,0),p=new k,_=new _e;for(let m of o.solid)for(let g of[m.o,...m.h])for(let b=0;b<g.length;b++){let S=g[b],x=g[(b+1)%g.length],v=x[0]-S[0],E=x[1]-S[1],C=Math.hypot(v,E);if(C<.004)continue;let M=E/C,I=-v/C,R=(S[0]+x[0])/2+M*.07,O=(S[1]+x[1])/2+I*.07,A=o.roomAt(R,O),D=A?e.styles[A.id].wall:o.isInside(R,O)?s.inner:a,U=Math.abs(E)<1e-6,N=Math.abs(v)<1e-6,G=[];for(let{o:B,r:W}of c){let K=B.n[0]===0;if(K&&!U||!K&&!N)continue;let[J,at,tt,nt]=B.b;if(K){if(S[1]<at-.012||S[1]>nt+.012)continue;let st=Math.max(J,Math.min(S[0],x[0])),Tt=Math.min(tt,Math.max(S[0],x[0]));if(Tt-st<.02)continue;let Et=Math.abs(st-x[0]),$t=Math.abs(Tt-x[0]);G.push({u0:Math.min(Et,$t),u1:Math.max(Et,$t),v0:W[0],v1:W[1]})}else{if(S[0]<J-.012||S[0]>tt+.012)continue;let st=Math.max(at,Math.min(S[1],x[1])),Tt=Math.min(nt,Math.max(S[1],x[1]));if(Tt-st<.02)continue;let Et=Math.abs(st-x[1]),$t=Math.abs(Tt-x[1]);G.push({u0:Math.min(Et,$t),u1:Math.max(Et,$t),v0:W[0],v1:W[1]})}}u.set(-v/C,0,-E/C),p.crossVectors(u,f),_.makeBasis(u,f,p).setPosition(x[0],0,x[1]);let H=G.length?md(C,n,G):[{o:[[0,0],[C,0],[C,n],[0,n]],h:[]}];for(let B of H)t.shape(B,_,D,!0)}for(let{o:m,r:g}of c){let[b,S,x,v]=m.b,[E,C]=g,M=s.wallCut;m.n[0]===0?(t.quad([b,E,S],[b,E,v],[b,C,v],[b,C,S],M),t.quad([x,E,S],[x,E,v],[x,C,v],[x,C,S],M)):(t.quad([b,E,S],[x,E,S],[x,C,S],[b,C,S],M),t.quad([b,E,v],[x,E,v],[x,C,v],[b,C,v],M)),E>0&&t.quad([b,E,S],[x,E,S],[x,E,v],[b,E,v],M),C<n-.001&&t.quad([b,C,S],[x,C,S],[x,C,v],[b,C,v],M)}for(let m of o.cap(c.filter(g=>g.r[1]>=n-.001).map(g=>g.o)))t.flat(m,n,s.wallCut,!0)}_obox(t,e,n,s,o,a=1,c=0,u=1,f=!0,p=0){if(s-n<.01)return;let[_,m,g,b]=e.b;if(e.n[0]===0){let x=g-_,v=(b-m)*a;t.box(_+x*(c+u)/2,(m+b)/2+e.n[1]*p,x*(u-c),v,n,s,o,0,f)}else{let x=b-m,v=(g-_)*a;t.box((_+g)/2+e.n[0]*p,m+x*(c+u)/2,v,x*(u-c),n,s,o,0,f)}}_opening(t,e,n,s,o){let a=this.theme,c=n.n[0]===0,u=c?n.b[2]-n.b[0]:n.b[3]-n.b[1],f=c?n.b[3]-n.b[1]:n.b[2]-n.b[0],p=.07/u,_=(g,b,S)=>{this._obox(t,n,g,b,a.trim,.45,0,p),this._obox(t,n,g,b,a.trim,.45,1-p,1),this._obox(t,n,b-.07,b,a.trim,.45,p,1-p);for(let x=1;x<S;x++)this._obox(t,n,g,b-.07,a.trim,.45,x/S-p/2,x/S+p/2);this._obox(t,n,g,b-.07,"glass",.12,p,1-p,!1)},m=s>=_i;switch(n.kind){case"window":{if(this._obox(t,n,ss-.07,ss+.03,a.trim,1+.2/f,-.04/u,1+.04/u,!0,.06),_(ss+.03,_i,u>1.25?3:u>.8?2:1),m&&n.ext){let g=Math.min(.32,u*.2)/u,b=-(f/2+.05);this._obox(t,n,ss-.15,_i+.08,a.curtain,.06/f,0,g,!0,b),this._obox(t,n,ss-.15,_i+.08,a.curtain,.06/f,1-g,1,!0,b)}break}case"bifold":_(0,_i,Math.max(2,Math.round(u/.75)));break;case"frontdoor":case"extdoor":{let g=n.colour||(n.kind==="frontdoor"?a.door:a.doorInner);this._obox(t,n,0,er-.06,g,.3,p,1-p),this._obox(t,n,0,er,a.trim,.5,0,p),this._obox(t,n,0,er,a.trim,.5,1-p,1),this._obox(t,n,er-.06,er,a.trim,.5,p,1-p),this._obox(t,n,.95,1.07,a.knob,.1/f,1-p-.14/u,1-p-.04/u,!0,f*.15+.06),n.kind==="frontdoor"&&(this._obox(t,n,1.35,1.75,"glass",.34,.3,.7,!1),this._obox(t,n,-.08,.02,a.path,.6/f,-.15/u,1+.15/u,!0,f/2+.3));break}case"garage":if(!o){this._obox(t,n,0,Math.min(_i,s),a.garage,.2);for(let g=.5;g<Math.min(_i,s)-.1;g+=.5)this._obox(t,n,g,g+.03,a.garage2,.24,.03,.97,!1)}break;case"door":{let g=Math.min(2,s),[b,S,x,v]=n.b,E=u-.06,C=ho(72),M=c?b+.03:(b+x)/2,I=c?(S+v)/2:S+.03,R=c?1:0,O=c?0:1,A=Math.cos(C)*R-Math.sin(C)*n.n[0],D=Math.cos(C)*O-Math.sin(C)*n.n[1],U=new Ye(E,g,.05);U.rotateY(Math.atan2(-D,A)),U.translate(M+A*E/2,g/2,I+D*E/2),t.add(U,a.doorInner,!0);break}default:}}_roofs(t){let e=this._layout,n=this.theme,s=this._H,o=this._batch(),a=new oi,c=g=>g*(s+ir)-ir,u=e.roofs;if(!Array.isArray(u)){u=[];let g=this._floors[this._floors.length-1],b=ii(g.floor.rooms.flatMap(S=>S.points.map(([x,v])=>[x+g.off[0],v+g.off[1]])));u.push({type:"gable",rect:[b.x0,b.y0,b.x1,b.y1],level:this._floors.length,ridge:b.x1-b.x0>=b.y1-b.y0?"x":"y"});for(let S=0;S<this._floors.length-1;S++){let x=this._floors[S],v=this._floors[S+1];for(let E of gd(x.walls.slab,v.walls.slab,[v.off[0]-x.off[0],v.off[1]-x.off[1]]))u.push({type:"flat",points:E.o.map(([C,M])=>[C+x.off[0],M+x.off[1]]),level:S+1})}}let f=n.roofPattern?rs(n.roofPattern,n.roof,n.roof2):n.roof,p=this._exteriorKey(),_=(g,b,S,x,v,E)=>{let C=new _e().makeBasis(S,x,new k().crossVectors(S,x)).setPosition(b).premultiply(g),M=new Tn(this._shape({o:[[0,0],[v,0],[v,E],[0,E]],h:[]}));M.translate(0,0,.012),M.applyMatrix4(C),o.add(M,f,!0);let I=new Ye(v,E,.13);I.translate(v/2,E/2,-.065),I.applyMatrix4(C),o.add(I,n.trim,!0)},m=g=>new _e().makeRotationY(g);for(let g of u){let b=g.base!=null?g.base:c(g.level||this._floors.length);if(g.type==="flat"){let A=g.points||[[g.rect[0],g.rect[1]],[g.rect[2],g.rect[1]],[g.rect[2],g.rect[3]],[g.rect[0],g.rect[3]]],D=ii(A),U=N=>({o:A.map(([G,H])=>[G+Math.sign(G-(D.x0+D.x1)/2)*N,H+Math.sign(H-(D.y0+D.y1)/2)*N]),h:[]});o.prism(U(Un+.14),b,b+.16,n.trim),o.prism(U(Un+.02),b+.16,b+.22,n.roof);continue}let[S,x,v,E]=g.rect,C=S-Un,M=v+Un,I=x-Un,R=E+Un,O=g.overhang!=null?g.overhang:.45;if(g.type==="gable"){let A=(g.ridge||"y")==="y",D=A?new _e:m(Math.PI/2),[U,N,G,H]=A?[C,M,I,R]:[-R,-I,C,M],B=ho(g.pitch||30),W=(N-U)/2,K=W*Math.tan(B),J=(U+N)/2,at=O*.8,tt=new Jn(new un([new _t(U,0),new _t(N,0),new _t(J,K)]),{depth:H-G,bevelEnabled:!1});tt.translate(0,b,G),tt.applyMatrix4(D),o.add(tt,p);let nt=(W+O)/Math.cos(B)+.05,st=H-G+2*at,Tt=b-O*Math.tan(B);_(D,new k(J-W-O,Tt,G-at),new k(0,0,1),new k(Math.cos(B),Math.sin(B),0),st,nt),_(D,new k(J+W+O,Tt,H+at),new k(0,0,-1),new k(-Math.cos(B),Math.sin(B),0),st,nt)}else if(g.type==="lean"){let A=g.high||"n",D=g.rise!=null?g.rise:.6,U=m({n:0,s:Math.PI,w:Math.PI/2,e:-Math.PI/2}[A]||0),[N,G,H,B]={n:[C,M,I,R],s:[-M,-C,-R,-I],w:[-R,-I,C,M],e:[I,R,-M,-C]}[A]||[C,M,I,R],W=B-H,K=Math.atan2(D,W),J=g.side_overhang!=null?g.side_overhang:.2,at=new Jn(new un([new _t(0,0),new _t(W,0),new _t(W,D+.06)]),{depth:G-N,bevelEnabled:!1});at.applyMatrix4(new _e().makeBasis(new k(0,0,-1),new k(0,1,0),new k(1,0,0)).setPosition(N,b,B).premultiply(U)),o.add(at,p),_(U,new k(N-J,b+.08-O*Math.tan(K),B+O),new k(1,0,0),new k(0,Math.sin(K),-Math.cos(K)),G-N+2*J,(W+O)/Math.cos(K))}}for(let g of e.chimneys||[]){let b=g.w||.6,S=g.d||.6,x=g.top||c(this._floors.length)+3.2,v=g.from!=null?g.from:c(this._floors.length);o.box(g.x,g.y,b,S,v,x,n.chimney),o.box(g.x,g.y,b+.16,S+.16,x,x+.12,n.trim),o.box(g.x,g.y,b*.45,S*.45,x+.12,x+.42,n.chimney),g.smoke!==!1&&[[.15,.95,.28],[.5,1.6,.4],[.2,2.5,.55]].forEach(([E,C,M])=>{let I=this._outlined(new di(M,14,10),new Be({color:n.cloud}),.05);I.position.set(g.x+E,x+C,g.y),a.add(I)})}o.build(a),t.add(a)}_openingFor(t,e){return!e.wall||e.at==null?null:t.walls.openings.find(n=>n.room===e.room&&n.wall===e.wall&&n.at<=e.at&&e.at<=n.at+n.width)||null}_device(t,e,n,s,o){let a=this.theme,c=e.floor,u=e.off,f=c.rooms.find(C=>C.id===n.room),p=f?ii(f.points):null,_=C=>new Be({color:C,transparent:!0}),m=C=>n.wall==="n"?[n.at,p.y0+C]:n.wall==="s"?[n.at,p.y1-C]:n.wall==="w"?[p.x0+C,n.at]:[p.x1-C,n.at],[g,b]=n.x!=null?[n.x,n.y]:m(.14),S=n.wall==="n"||n.wall==="s",x={d:n,anchor:new k,pick:null},v=(C,M,I,R)=>(C.position.set(M,I,R),t.add(C),C),E=1;switch(n.kind){case"light":{let C=Math.max(1.75,s+.5);v(new Le(new hn(.015,.015,.45,6),_(a.ink)),g,C+.35,b);let M=v(this._outlined(new hn(.1,.27,.2,16,1,!0),new Be({color:a.white,side:pi}),.03),g,C+.14,b);M.userData.mesh.material.transparent=!0;let I=v(this._outlined(new di(.15,16,12),_("#ffffff")),g,C,b),R=new Le(new Er(1.3,28),new Be({color:a.bulbOn,transparent:!0,opacity:.42,depthWrite:!1}));R.rotation.x=-Math.PI/2,R.renderOrder=1,v(R,g,.07,b),x.set=O=>{I.userData.mesh.material.color.set(O.planned?a.planned:O.active?a.bulbOn:"#ffffff"),M.userData.mesh.material.color.set(O.planned?a.planned:a.white),R.visible=!!O.active},E=C;break}case"cover":{let C=this._openingFor(e,n);if(!C){E=this._marker(x,v,g,1.6,b,.3,.3,.12);break}let[M,I,R,O]=C.b,A=C.n[0]===0,D=C.kind==="garage",U=A?R-M:O-I,N=A?O-I:R-M,G=D?0:N/2+.09,H=(M+R)/2+C.n[0]*G,B=(I+O)/2+C.n[1]*G,W=D||C.kind==="bifold"?0:ss,K=_i-W,J=(Et,$t,ne)=>A?new Ye(Et,$t,ne):new Ye(ne,$t,Et),at=document.createElement("canvas");at.width=8,at.height=32;let tt=at.getContext("2d");tt.fillStyle=D?a.garage:a.shutter,tt.fillRect(0,0,8,32),tt.fillStyle=D?a.garage2:a.shutter2,tt.fillRect(0,0,8,4);let nt=new Mn(at);nt.wrapT=Yn,nt.colorSpace=Ge;let st=new Le(J(U-.04,1,.05),new Be({map:nt,transparent:!0}));t.add(st),D||v(this._outlined(J(U+.14,.24,.22),this._toon(a.shutterBox)),H,_i+.12,B),x.level=null,x.apply=Et=>{let $t=Math.max(0,Math.min(1,1-Et)),ne=Math.max(.02,K*$t);st.scale.y=ne,st.position.set(H,_i-ne/2,B),nt.repeat.set(1,Math.max(1,Math.round(ne/(D?.4:.11)))),st.visible=$t>.015},x.set=Et=>{let $t=Et.planned?D?0:.55:Et.level;st.material.opacity=Et.planned&&!D?.45:1,x.level==null?(x.level=$t,x.apply($t)):Math.abs($t-x.level)>.001&&this._tween(x,$t)};let Tt=new Le(J(U,D?_i:K+.3,.5),new Be({transparent:!0,opacity:0,depthWrite:!1}));v(Tt,H,D?_i/2:W+(K+.3)/2,B),x.pick=Tt,x.anchor.set(H+C.n[0]*.2,_i+.3,B+C.n[1]*.2),x.facing=new k(C.n[0],0,C.n[1]),E=null;break}case"climate":{if(n.wall){let C=v(this._outlined(S?new Ye(.95,.5,.1):new Ye(.1,.5,.95),this._toon("#ffffff")),g,.42,b);x.set=M=>C.userData.mesh.material.color.set(M.planned?a.planned:M.active?a.heat:"#ffffff"),E=.75}else E=this._marker(x,v,g,1.35,b,.2,.26,.08,a.heat);break}case"tv":{let C=v(this._outlined(new Ye(1.3,.75,.07),_(a.dark)),g,.95,b);C.rotation.y=-ho(n.rot||0),x.set=M=>C.userData.mesh.material.color.set(M.active?a.screen:M.planned?"#5a5f6a":a.dark),E=1.4;break}case"speaker":E=this._marker(x,v,g,.72,b,.24,.44,.24,a.play);break;case"lock":E=this._marker(x,v,g,1.05,b,.2,.26,.2,a.ok,a.bad);break;case"motion":E=this._marker(x,v,g,Math.max(1.5,s+.25),b,.26,.14,.26,a.heat);break;case"contact":E=this._marker(x,v,g,1.6,b,.16,.3,.16,a.bad,a.ok);break;case"camera":E=this._marker(x,v,g,2.15,b,.3,.2,.42,a.screen);break;default:E=this._marker(x,v,g,1.2,b,.22,.22,.22,a.ok)}if(E!=null&&x.anchor.set(g,E+.25,b),x.anchor.x+=u[0],x.anchor.z+=u[1],x.anchor.y+=t.position.y,!x.pick){let C=new Le(new di(.42,8,6),new Be({transparent:!0,opacity:0,depthWrite:!1}));C.position.set(x.anchor.x-u[0],x.anchor.y-t.position.y-.25,x.anchor.z-u[1]),t.add(C),x.pick=C}if(x.pick.userData.dev=x,this._pickables.push(x.pick),o){let C=document.createElement("div");C.className="chip",C.style.display="none",C.addEventListener("click",M=>{M.stopPropagation(),this._tap(x)}),this._labels.appendChild(C),x.chip=C}this._devs.push(x)}_marker(t,e,n,s,o,a,c,u,f,p="#ffffff"){let _=this.theme,m=e(this._outlined(new Ye(a,c,u),new Be({color:"#ffffff",transparent:!0})),n,s,o);return t.set=g=>{m.userData.mesh.material.color.set(g.planned?_.planned:g.active?f||_.ok:p),m.userData.mesh.material.opacity=g.planned?.8:1},s+c/2}_tween(t,e){t.from=t.level,t.to=e,t.t0=performance.now(),this._tweens.includes(t)||this._tweens.push(t)}_signature(){return!this._hass||!this._devs?"":this._devs.map(t=>{let e=t.d.entity&&this._hass.states[t.d.entity];return e?`${e.state}|${e.attributes.current_position??""}|${e.attributes.current_temperature??""}|${e.attributes.hvac_action??""}`:"-"}).join(";")}_syncDevices(){if(!this._devs)return;let t=0,e=0;for(let n of this._devs){let s=Ud(n.d,this._hass);n.st=s,n.set&&n.set(s),s.planned?e++:t++,n.chip&&(n.chip.textContent=s.text,n.chip.classList.toggle("active",!!s.active),n.chip.dataset.show=s.text?"1":"")}this.shadowRoot.querySelector(".counts").textContent=this._devs.length?`${t} live, ${e} planned (grey)`:""}_ray(t,e){let n=this._renderer.domElement.getBoundingClientRect(),s=new _t((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),o=new Hr;return o.setFromCamera(s,this._camera),o}_deviceAt(t,e){let n=this._ray(t,e).intersectObjects(this._pickables,!1)[0];return n?n.object.userData.dev:null}_roomAt(t,e){let n=typeof this._mode=="number"?this._floors[this._mode]:null;if(!n)return null;let s=this._ray(t,e).ray.intersectPlane(new ri(new k(0,1,0),-n.baseY),new k),o=s?n.walls.roomAt(s.x-n.off[0],s.z-n.off[1]):null;return o?{F:n,room:o}:null}_pick(t,e){let n=this._deviceAt(t,e);if(n){this._tap(n);return}this._toast.style.display="none";let s=this._roomAt(t,e);s&&this._room.key!==`${s.F.floor.id}|${s.room.id}`?this._room.open(s.F,s.room):this._room.close()}_tap(t){let e=t.d,n=t.st||Ud(e,this._hass);if(e.id&&!window.dispatchEvent(new CustomEvent("toon-house-setup",{cancelable:!0,detail:{id:e.id}}))){this._toast.style.display="none";return}if(n.planned){let o=e.nav||this._config.planned_path||"";this._say(`${e.name||e.kind}: planned, not fitted yet.${o?" Tap here for more.":""}`,o);return}let s=e.entity.split(".")[0];if((e.kind==="light"||e.kind==="switch")&&["light","switch","input_boolean","fan"].includes(s)){this._hass.callService(s,"toggle",{entity_id:e.entity});return}this._toast.style.display="none",this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e.entity}}))}_say(t,e,n=6e3){this._toast.textContent=t,this._toast.dataset.nav=e||"",this._toast.style.display="block",clearTimeout(this._toastT),this._toastT=setTimeout(()=>{this._toast.style.display="none"},n)}_navigate(t){history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}_req(){this._raf||!this._renderer||(this._raf=requestAnimationFrame(()=>{this._raf=0,this._frame()}))}_frame(){if(!this._renderer||!this._root)return;let t=performance.now();if(this._wx&&this._wx.moving&&this._seen&&!document.hidden){this._req();let u=t-(this._last||0);if(this._last&&u<(this._low()?46:30)&&!this._tweens.length)return;this._gfx==="auto"&&!this._autoLow&&this._last&&u<1e3&&(this._slow=u>70?this._slow+1:Math.max(0,this._slow-1),this._slow>24&&(this._autoLow=!0,this._renderer.setPixelRatio(1),this._resize(),this._applyWeather(this._weather().w))),this._wx.step(this._last?Math.min(u,100)/1e3:0,t),this._last=t}this._tweens.length&&(this._tweens=this._tweens.filter(u=>{let f=Math.min(1,(t-u.t0)/900),p=f*f*(3-2*f);return u.level=u.from+(u.to-u.from)*p,u.apply(u.level),f<1}),this._req()),this._renderer.render(this._scene,this._camera);let e=this._wrap.clientWidth,n=this._wrap.clientHeight,s=new k,o=(u,f,p)=>{s.copy(f).project(this._camera);let _=p&&s.z<1&&Math.abs(s.x)<1.05&&Math.abs(s.y)<1.05;u.style.display=_?"block":"none",_&&(u.style.left=`${(s.x+1)/2*e}px`,u.style.top=`${(1-s.y)/2*n}px`)},a=this._camera.position.distanceTo(this._controls.target)>42;for(let u of this._roomLabels)o(u.el,u.pos,!(a&&u.small));let c=this._mode==="whole";for(let u of this._devs){if(!u.chip)continue;let f=c&&u.facing&&s.copy(this._camera.position).sub(u.anchor).dot(u.facing)<=0;o(u.chip,u.anchor,!!u.chip.dataset.show&&!f)}}debug(){let t=this._renderer.domElement.getBoundingClientRect(),e=new k,n={};for(let o of this._devs)o.pick.getWorldPosition(e).project(this._camera),n[o.d.id]={x:Math.round(t.left+(e.x+1)/2*t.width),y:Math.round(t.top+(1-e.y)/2*t.height),planned:!!(o.st&&o.st.planned),text:o.st&&o.st.text,level:o.level};let s=this._renderer.info;return{mode:this._mode,calls:s.render.calls,triangles:s.render.triangles,geometries:s.memory.geometries,warnings:this._warnings,devices:n}}};customElements.get("toon-house-card")||customElements.define("toon-house-card",jh);window.customCards=window.customCards||[];window.customCards.some(i=>i.type==="toon-house-card")||window.customCards.push({type:"toon-house-card",name:"Toon House Card",description:"A cartoon 3D dollhouse of your home with live devices",preview:!1,documentationURL:"https://github.com/digitaladaption/toon-house-card"});console.info(`%c TOON-HOUSE-CARD %c ${sv} `,"background:#FFD83A;color:#1b1b1b;font-weight:900","background:#1b1b1b;color:#fff");
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
