(function(){
var s=document.getElementById('scene'),ns='http://www.w3.org/2000/svg';
function E(n,a,p){var e=document.createElementNS(ns,n);for(var k in a)e.setAttribute(k,a[k]);(p||s).appendChild(e);return e}
for(var i=0;i<90;i++)E('circle',{cx:i*997%1200,cy:i*613%800,r:i%6==0?1.7:.9,fill:'#fff',opacity:.25+(i%4)*.15});
if(document.body.hasAttribute('data-home'))return; /* Home: photo replaces the moon */
var d=E('defs',{});
var g1=E('radialGradient',{id:'mg',cx:'35%',cy:'32%',r:'80%'},d);[['0','#f4f4f4'],['.55','#9a9a9a'],['1','#2a2a2a']].forEach(function(x){E('stop',{offset:x[0],'stop-color':x[1]},g1)});
var g2=E('radialGradient',{id:'mh'},d);E('stop',{offset:'.5','stop-color':'#fff','stop-opacity':.22},g2);E('stop',{offset:'1','stop-color':'#fff','stop-opacity':0},g2);
var mx=900,my=330,mr=125;
var rot=-22,o={rx:330,ry:95};
E('ellipse',{rx:o.rx,ry:o.ry,fill:'none',stroke:'#fff','stroke-width':.9,'stroke-dasharray':'3 8',opacity:.45,transform:'translate('+mx+' '+my+') rotate('+rot+')'});
E('circle',{cx:mx,cy:my,r:mr*1.9,fill:'url(#mh)'});
E('circle',{cx:mx,cy:my,r:mr,fill:'url(#mg)',opacity:.88});
[[-45,-35,28],[38,12,36],[-12,58,19],[58,-58,15],[-66,32,13],[12,-76,11],[70,50,10]].forEach(function(c){E('circle',{cx:mx+c[0],cy:my+c[1],r:c[2],fill:'#000',opacity:.2,stroke:'#fff','stroke-opacity':.12})});
var q=E('g',{});E('rect',{x:-7,y:-6,width:14,height:12,fill:'#000',stroke:'#fff','stroke-width':1.3},q);
[-1,1].forEach(function(k){E('rect',{x:k<0?-32:9,y:-4,width:23,height:8,fill:'rgba(77,195,255,.4)',stroke:'#fff','stroke-width':1},q);E('line',{x1:k*7,y1:0,x2:k*9,y2:0,stroke:'#fff'},q)});
E('line',{x1:0,y1:-6,x2:0,y2:-15,stroke:'#fff'},q);E('circle',{cx:0,cy:-16,r:2.2,fill:'#fff'},q);
var still=matchMedia('(prefers-reduced-motion:reduce)').matches,r=rot*Math.PI/180;
function place(t){var a=1+t*.00022,x=o.rx*Math.cos(a),y=o.ry*Math.sin(a);
q.setAttribute('transform','translate('+(mx+x*Math.cos(r)-y*Math.sin(r)).toFixed(1)+' '+(my+x*Math.sin(r)+y*Math.cos(r)).toFixed(1)+') rotate('+(rot+Math.cos(a)*12)+') scale(1.5)')}
place(0);if(!still)(function f(t){place(t);requestAnimationFrame(f)})(0);
})();