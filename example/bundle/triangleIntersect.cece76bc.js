function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire4485;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequire4485=i);var a,r,d={};a=d,r=function(){var e=function(){function t(e){return i.appendChild(e.dom),e}function n(e){for(var t=0;t<i.children.length;t++)i.children[t].style.display=t===e?"block":"none";o=e}var o=0,i=document.createElement("div");i.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",i.addEventListener("click",(function(e){e.preventDefault(),n(++o%i.children.length)}),!1);var a=(performance||Date).now(),r=a,d=0,l=t(new e.Panel("FPS","#0ff","#002")),s=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new e.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:i,addPanel:t,showPanel:n,begin:function(){a=(performance||Date).now()},end:function(){d++;var e=(performance||Date).now();if(s.update(e-a,200),e>r+1e3&&(l.update(1e3*d/(e-r),100),r=e,d=0,c)){var t=performance.memory;c.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){a=this.end()},domElement:i,setMode:n}};return e.Panel=function(e,t,n){var o=1/0,i=0,a=Math.round,r=a(window.devicePixelRatio||1),d=80*r,l=48*r,s=3*r,c=2*r,p=3*r,f=15*r,u=74*r,w=30*r,h=document.createElement("canvas");h.width=d,h.height=l,h.style.cssText="width:80px;height:48px";var m=h.getContext("2d");return m.font="bold "+9*r+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=n,m.fillRect(0,0,d,l),m.fillStyle=t,m.fillText(e,s,c),m.fillRect(p,f,u,w),m.fillStyle=n,m.globalAlpha=.9,m.fillRect(p,f,u,w),{dom:h,update:function(l,y){o=Math.min(o,l),i=Math.max(i,l),m.fillStyle=n,m.globalAlpha=1,m.fillRect(0,0,d,f),m.fillStyle=t,m.fillText(a(l)+" "+e+" ("+a(o)+"-"+a(i)+")",s,c),m.drawImage(h,p+r,f,u-r,w,p,f,u-r,w),m.fillRect(p+u-r,f,r,w),m.fillStyle=n,m.globalAlpha=.9,m.fillRect(p+u-r,f,r,a((1-l/y)*w))}}},e},"object"==typeof d?d=r():"function"==typeof define&&define.amd?define(r):a.Stats=r();var l=i("jiuw3"),s=i("ilwiq"),c=i("5Rd1x"),p=i("4CEV9");const f={sphereSize:1},u=new p.ExtendedTriangle,w=new p.ExtendedTriangle;let h,m,y,g,b;u.a.set(-1,0,0),u.b.set(2,0,-2),u.c.set(2,0,2),w.a.set(1,0,0),w.b.set(-2,-2,0),w.c.set(-2,2,0),u.needsUpdate=!0,w.needsUpdate=!0;let x,v,M,S,z=[],E=[],R=new s.Line3;function C(){h.begin(),x.visible=!1,E[0].visible=!1,E[1].visible=!1,u.update(),w.update(),u.intersectsTriangle(w,R)?(!function(e,t){e.geometry.dispose();const n=(new s.Vector3).subVectors(t.start,t.end);e.geometry=new s.CylinderGeometry(1,1,n.length(),6,4,!0),e.geometry.applyMatrix4((new s.Matrix4).makeTranslation(0,n.length()/2,0)),e.geometry.applyMatrix4((new s.Matrix4).makeRotationX(s.MathUtils.degToRad(90))),e.geometry.computeVertexNormals(),e.position.copy(t.start),e.lookAt(t.end)}(x,R),x.visible=!0,E[0].visible=!0,E[1].visible=!0):(R.start.set(1/0,1/0,1/0),R.end.set(1/0,1/0,1/0)),z[0].position.copy(u.a),z[1].position.copy(u.b),z[2].position.copy(u.c),z[3].position.copy(w.a),z[4].position.copy(w.b),z[5].position.copy(w.c),E[0].position.copy(R.start),E[1].position.copy(R.end),function(){const e=v.geometry.getAttribute("position");e.setXYZ(0,u.a.x,u.a.y,u.a.z),e.setXYZ(1,u.b.x,u.b.y,u.b.z),e.setXYZ(2,u.c.x,u.c.y,u.c.z),e.needsUpdate=!0,v.geometry.computeVertexNormals();const t=M.geometry.getAttribute("position");t.setXYZ(0,w.a.x,w.a.y,w.a.z),t.setXYZ(1,w.b.x,w.b.y,w.b.z),t.setXYZ(2,w.c.x,w.c.y,w.c.z),t.needsUpdate=!0,M.geometry.computeVertexNormals()}();[...z,...E].forEach((e=>{e.scale.setScalar(.005*f.sphereSize*e.position.distanceTo(y.position))})),E.forEach((e=>e.scale.multiplyScalar(1.5))),x.scale.setScalar(.5*Math.min(E[0].scale.x,E[1].scale.x)),x.scale.z=1,S.controllersRecursive().forEach((e=>e.updateDisplay())),g.render(m,y),h.end()}!function(){g=new s.WebGLRenderer({antialias:!0}),g.setPixelRatio(window.devicePixelRatio),g.setSize(window.innerWidth,window.innerHeight),g.setClearColor(1251612,1),document.body.appendChild(g.domElement),m=new s.Scene;const t=new s.DirectionalLight(16777215,.3);t.position.set(10,10,10),m.add(t),m.add(new s.AmbientLight(16777215,.8));const n=new s.MeshPhongMaterial({color:16711680,side:s.DoubleSide}),o=new s.MeshPhongMaterial({color:255,side:s.DoubleSide}),i=new s.MeshPhongMaterial({color:65280,side:s.DoubleSide}),a=new s.SphereGeometry(1);for(let e=0;e<2;e++){const e=new s.Mesh(a,n);E.push(e),m.add(e)}for(let e=0;e<3;e++){const e=new s.Mesh(a,o);z.push(e),m.add(e)}for(let e=0;e<3;e++){const e=new s.Mesh(a,i);z.push(e),m.add(e)}const r=new s.CylinderGeometry;x=new s.Mesh(r,n),m.add(x);const l=new s.BufferGeometry;l.setAttribute("position",new s.BufferAttribute(new Float32Array([1,1,1,2,2,2,3,3,3]),3)),v=new s.Mesh(l.clone(),o),m.add(v),M=new s.Mesh(l.clone(),i),m.add(M),y=new s.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,50),y.position.set(10,10,10),y.far=100,y.updateProjectionMatrix(),b=new c.OrbitControls(y,g.domElement),b.target.add(u.a).add(u.b).add(u.c).add(w.a).add(w.b).add(w.c).multiplyScalar(1/6),y.position.add(b.target),b.update(),h=new(e(d)),document.body.appendChild(h.dom),b.addEventListener("change",(function(){C()})),window.addEventListener("resize",(function(){y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),g.setSize(window.innerWidth,window.innerHeight),C()}),!1)}(),function(){S=new l.GUI,S.add(f,"sphereSize",0,5,.001).onChange(C);const e=["a1","b1","c1","a2","b2","c2"],t=[u.a,u.b,u.c,w.a,w.b,w.c];for(let n=0;n<6;n++){const o=S.addFolder(e[n]);o.add(t[n],"x").min(-10).max(10).step(.001).onChange(C),o.add(t[n],"y").min(-10).max(10).step(.001).onChange(C),o.add(t[n],"z").min(-10).max(10).step(.001).onChange(C),o.open()}const n=["Inter1","Inter2"],o=[R.start,R.end];for(let e=0;e<2;e++){const t=S.addFolder(n[e]);t.add(o[e],"x").step(.001),t.add(o[e],"y").step(.001),t.add(o[e],"z").step(.001),t.open()}S.open()}(),C();
//# sourceMappingURL=triangleIntersect.cece76bc.js.map
