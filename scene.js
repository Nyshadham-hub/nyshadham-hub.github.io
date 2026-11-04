(function(){
var s=document.getElementById('scene');if(!s)return;
var ns='http://www.w3.org/2000/svg',home=document.body.hasAttribute('data-home');
function E(n,a,p){var e=document.createElementNS(ns,n);for(var k in a)e.setAttribute(k,a[k]);(p||s).appendChild(e);return e}

/* Keep the moon in view on tall (phone) screens */
function fit(){s.setAttribute('preserveAspectRatio',innerWidth<innerHeight*.9?'xMaxYMid slice':'xMidYMid slice')}
fit();addEventListener('resize',fit);

/* Stars (every page) */
for(var i=0;i<90;i++)E('circle',{cx:i*997%1200,cy:i*613%800,r:i%6==0?1.7:.9,fill:'#fff',opacity:.25+(i%4)*.15});

/* Home page: the portrait takes the moon's place, so stop here */
if(home)return;

/* Other pages: moon photo, halo, orbit and satellite */
var d=E('defs',{});
var g=E('radialGradient',{id:'mh'},d);
E('stop',{offset:'.5','stop-color':'#fff','stop-opacity':.22},g);
E('stop',{offset:'1','stop-color':'#fff','stop-opacity':0},g);
var mx=900,my=330,mr=125,rot=-22,o={rx:330,ry:95};
var ring=E('ellipse',{rx:o.rx,ry:o.ry,fill:'none',stroke:'#fff','stroke-width':.9,'stroke-dasharray':'3 8',opacity:.45,transform:'translate('+mx+' '+my+') rotate('+rot+')'});
E('circle',{cx:mx,cy:my,r:mr*1.9,fill:'url(#mh)',opacity:.5});
var cp=E('clipPath',{id:'mc'},d);E('circle',{cx:mx,cy:my,r:mr*.985},cp);
var im=E('image',{x:mx-mr,y:my-mr,width:mr*2,height:mr*2,'clip-path':'url(#mc)',opacity:1,preserveAspectRatio:'xMidYMid slice'});
im.setAttribute('href','moon.jpg');im.setAttributeNS('http://www.w3.org/1999/xlink','href','moon.jpg');

var q=E('g',{});
/* On phones the text covers the moon, so soften everything behind it */
function tune(){var tall=innerWidth<innerHeight*.9;im.setAttribute('opacity',tall?.5:1);ring.setAttribute('opacity',tall?.25:.45);q.style.opacity=tall?.55:1}
tune();addEventListener('resize',tune);
E('rect',{x:-7,y:-6,width:14,height:12,fill:'#000',stroke:'#fff','stroke-width':1.3},q);
[-1,1].forEach(function(k){
 E('rect',{x:k<0?-32:9,y:-4,width:23,height:8,fill:'rgba(77,195,255,.4)',stroke:'#fff','stroke-width':1},q);
 E('line',{x1:k*7,y1:0,x2:k*9,y2:0,stroke:'#fff'},q)});
E('line',{x1:0,y1:-6,x2:0,y2:-15,stroke:'#fff'},q);E('circle',{cx:0,cy:-16,r:2.2,fill:'#fff'},q);

var still=matchMedia('(prefers-reduced-motion:reduce)').matches,r=rot*Math.PI/180;
function place(t){
 var a=1+t*.00022,x=o.rx*Math.cos(a),y=o.ry*Math.sin(a);
 q.setAttribute('transform','translate('+(mx+x*Math.cos(r)-y*Math.sin(r)).toFixed(1)+' '+(my+x*Math.sin(r)+y*Math.cos(r)).toFixed(1)+') rotate('+(rot+Math.cos(a)*12)+') scale(1.5)')}
place(0);
if(!still)(function f(t){place(t);requestAnimationFrame(f)})(0);
})();
