if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,a,n)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return t;case"module":return i;default:return e(s)}}))).then((e=>{const s=n(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/c0_7zgq9MKg6sJLjatf8g/_buildManifest.js",revision:"c0_7zgq9MKg6sJLjatf8g"},{url:"/_next/static/c0_7zgq9MKg6sJLjatf8g/_ssgManifest.js",revision:"c0_7zgq9MKg6sJLjatf8g"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.8776f26ccde912c7e1b0.js",revision:"c0_7zgq9MKg6sJLjatf8g"},{url:"/_next/static/chunks/commons.fc80e9bc53a7ffdaa499.js",revision:"c0_7zgq9MKg6sJLjatf8g"},{url:"/_next/static/chunks/framework.9d524150d48315f49e80.js",revision:"c0_7zgq9MKg6sJLjatf8g"},{url:"/_next/static/chunks/main-23ca5981da3e5cefa8ea.js",revision:"c0_7zgq9MKg6sJLjatf8g"},{url:"/_next/static/chunks/pages/_app-6b3f5784efa9be645715.js",revision:"c0_7zgq9MKg6sJLjatf8g"},{url:"/_next/static/chunks/pages/_error-65c25bf2c0c7fe97b33f.js",revision:"c0_7zgq9MKg6sJLjatf8g"},{url:"/_next/static/chunks/pages/index-a2d910c03e1b4cce740e.js",revision:"c0_7zgq9MKg6sJLjatf8g"},{url:"/_next/static/chunks/polyfills-4f14e8c8ea1352d3ef0d.js",revision:"c0_7zgq9MKg6sJLjatf8g"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"c0_7zgq9MKg6sJLjatf8g"},{url:"/img/assets/icons/insta.png",revision:"c2c16c33885e2ef93687222e805058da"},{url:"/img/assets/icons/whats.png",revision:"b5a1544ad532e56344b2f4cb3a92d9d5"},{url:"/img/assets/mainPhoto.jpg",revision:"0566f720d55197569f9a0de412fb2e51"},{url:"/img/assets/tattoo_01.jpg",revision:"d9c0736c595e17cd2bb61e1283553e80"},{url:"/img/assets/tattoo_02.jpg",revision:"d1851345a5f82225dd8837f2526cad37"},{url:"/img/assets/tattoo_03.jpg",revision:"3d095a28fae9a71b723632c208c5fb6f"},{url:"/img/assets/tattoo_04.jpg",revision:"a2d6bdf42763c99f1c150355b28bc471"},{url:"/img/hero-illustration.svg",revision:"230a82bf089de97df8033e600743b63e"},{url:"/img/square.svg",revision:"9b42fc51f90bf7ace2c0a5fffad8775a"},{url:"/manifest.json",revision:"6ffd179caf90ce6e819541545f353674"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
