function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire4485;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequire4485=i);var a,r,d={};a=d,r=function(){var e=function(){function t(e){return i.appendChild(e.dom),e}function n(e){for(var t=0;t<i.children.length;t++)i.children[t].style.display=t===e?"block":"none";o=e}var o=0,i=document.createElement("div");i.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",i.addEventListener("click",(function(e){e.preventDefault(),n(++o%i.children.length)}),!1);var a=(performance||Date).now(),r=a,d=0,s=t(new e.Panel("FPS","#0ff","#002")),l=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var p=t(new e.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:i,addPanel:t,showPanel:n,begin:function(){a=(performance||Date).now()},end:function(){d++;var e=(performance||Date).now();if(l.update(e-a,200),e>r+1e3&&(s.update(1e3*d/(e-r),100),r=e,d=0,p)){var t=performance.memory;p.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){a=this.end()},domElement:i,setMode:n}};return e.Panel=function(e,t,n){var o=1/0,i=0,a=Math.round,r=a(window.devicePixelRatio||1),d=80*r,s=48*r,l=3*r,p=2*r,c=3*r,u=15*r,m=74*r,f=30*r,w=document.createElement("canvas");w.width=d,w.height=s,w.style.cssText="width:80px;height:48px";var h=w.getContext("2d");return h.font="bold "+9*r+"px Helvetica,Arial,sans-serif",h.textBaseline="top",h.fillStyle=n,h.fillRect(0,0,d,s),h.fillStyle=t,h.fillText(e,l,p),h.fillRect(c,u,m,f),h.fillStyle=n,h.globalAlpha=.9,h.fillRect(c,u,m,f),{dom:w,update:function(s,y){o=Math.min(o,s),i=Math.max(i,s),h.fillStyle=n,h.globalAlpha=1,h.fillRect(0,0,d,u),h.fillStyle=t,h.fillText(a(s)+" "+e+" ("+a(o)+"-"+a(i)+")",l,p),h.drawImage(w,c+r,u,m-r,f,c,u,m-r,f),h.fillRect(c+m-r,u,r,f),h.fillStyle=n,h.globalAlpha=.9,h.fillRect(c+m-r,u,r,a((1-s/y)*f))}}},e},"object"==typeof d?d=r():"function"==typeof define&&define.amd?define(r):a.Stats=r();var s=i("jiuw3"),l=i("ilwiq"),p=i("5Rd1x"),c=i("fUhpq"),u=i("4CEV9");l.Mesh.prototype.raycast=u.acceleratedRaycast,l.BufferGeometry.prototype.computeBoundsTree=u.computeBoundsTree,l.BufferGeometry.prototype.disposeBoundsTree=u.disposeBoundsTree;const m={speed:1,visualizeBounds:!1,visualBoundsDepth:10,shape:"sphere",position:new l.Vector3,rotation:new l.Euler,scale:new l.Vector3(1,1,1)};let f,w,h,y,v,x,g,b,M={};function S(){x&&!m.visualizeBounds&&(w.remove(x),x=null),!x&&m.visualizeBounds&&(x=new u.MeshBVHVisualizer(b),w.add(x)),x&&(x.depth=m.visualBoundsDepth)}let B=window.performance.now();!function(){y=new l.WebGLRenderer({antialias:!0}),y.setPixelRatio(window.devicePixelRatio),y.setSize(window.innerWidth,window.innerHeight),y.setClearColor(1251612,1),document.body.appendChild(y.domElement),w=new l.Scene,w.fog=new l.Fog(1251612,20,60);const t=new l.DirectionalLight(16777215,.5);t.position.set(1,1,1),w.add(t),w.add(new l.AmbientLight(16777215,.4));const n=new l.TorusKnotGeometry(1,.4,400,100),o=new l.MeshPhongMaterial({color:16777215,side:l.DoubleSide});b=new l.Mesh(n,o),b.geometry.computeBoundsTree(),w.add(b),h=new l.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,50),h.position.set(3,3,3),h.far=100,h.updateProjectionMatrix(),g=new c.TransformControls(h,y.domElement),w.add(g),v=new p.OrbitControls(h,y.domElement),f=new(e(d)),document.body.appendChild(f.dom);const i=new l.MeshStandardMaterial({metalness:.1,transparent:!0,opacity:.75,premultipliedAlpha:!0});M.sphere=new l.Mesh(new l.SphereGeometry(1,50,50),i),w.add(M.sphere),M.box=new l.Mesh(new l.BoxGeometry(1,1,1),i),w.add(M.box),M.geometry=new l.Mesh(new l.TorusKnotGeometry(.5,.2,200,50),i),M.geometry.geometry.computeBoundsTree(),w.add(M.geometry);const a=new s.GUI;a.add(m,"speed").min(0).max(10),a.add(m,"visualizeBounds").onChange((()=>S())),a.add(m,"visualBoundsDepth").min(1).max(40).step(1).onChange((()=>S())),a.add(m,"shape",["sphere","box","geometry"]),a.add(g,"mode",["translate","rotate"]);const r=a.addFolder("position");r.add(m.position,"x").min(-5).max(5).step(.001),r.add(m.position,"y").min(-5).max(5).step(.001),r.add(m.position,"z").min(-5).max(5).step(.001),r.open();const u=a.addFolder("rotation");u.add(m.rotation,"x").min(-Math.PI).max(Math.PI).step(.001),u.add(m.rotation,"y").min(-Math.PI).max(Math.PI).step(.001),u.add(m.rotation,"z").min(-Math.PI).max(Math.PI).step(.001),u.open(),a.open(),g.addEventListener("change",(function(){m.position.copy(M[m.shape].position),m.rotation.copy(M[m.shape].rotation),m.scale.copy(M[m.shape].scale),a.controllersRecursive().forEach((e=>e.updateDisplay()))})),g.addEventListener("mouseDown",(function(){v.enabled=!1})),g.addEventListener("mouseUp",(function(){v.enabled=!0})),v.addEventListener("start",(function(){g.enabled=!1})),v.addEventListener("end",(function(){g.enabled=!0})),window.addEventListener("resize",(function(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)}),!1),window.addEventListener("keydown",(function(e){switch(e.key){case"w":g.mode="translate";break;case"e":g.mode="rotate"}a.controllersRecursive().forEach((e=>e.updateDisplay()))}))}(),S(),function e(){const t=window.performance.now()-B;B=window.performance.now(),b.rotation.y+=m.speed*t*.001,b.updateMatrixWorld(),f.begin(),x&&x.update(),y.render(w,h),f.end();for(const e in M)M[e].visible=!1;const n=m.shape,o=M[n];o.visible=!0,o.position.copy(m.position),o.rotation.copy(m.rotation),o.scale.copy(m.scale);const i=(new l.Matrix4).copy(b.matrixWorld).invert().multiply(o.matrixWorld);if("sphere"===n){const e=new l.Sphere(void 0,1);e.applyMatrix4(i);const t=b.geometry.boundsTree.intersectsSphere(e);o.material.color.set(t?15277667:6710886),o.material.emissive.set(15277667).multiplyScalar(t?.25:0)}else if("box"===n){const e=new l.Box3;e.min.set(-.5,-.5,-.5),e.max.set(.5,.5,.5);const t=b.geometry.boundsTree.intersectsBox(e,i);o.material.color.set(t?15277667:6710886),o.material.emissive.set(15277667).multiplyScalar(t?.25:0)}else if("geometry"===n){const e=b.geometry.boundsTree.intersectsGeometry(o.geometry,i);o.material.color.set(e?15277667:6710886),o.material.emissive.set(15277667).multiplyScalar(e?.25:0)}g.object!==o&&g.attach(o),requestAnimationFrame(e)}();
//# sourceMappingURL=shapecast.9bb13e8b.js.map
