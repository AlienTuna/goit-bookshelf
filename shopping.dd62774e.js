!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},d=e.parcelRequired7c6;null==d&&((d=function(e){if(e in n)return n[e].exports;if(e in t){var d=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,d.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequired7c6=d);var i=JSON.parse(localStorage.getItem("ShoppingList"))||[],a=1;!function e(){var n=document.getElementById("pagination");if(0!==i.length){n.style.display="block",n.innerHTML="";var t=document.createElement("button");t.innerHTML="<<",t.addEventListener("click",(function(){1!==a&&(a=1,e())})),t.classList.add("double-doublearrow"),n.appendChild(t);var d=document.createElement("button");d.innerHTML="<",d.addEventListener("click",(function(){a>1&&(a--,e())})),d.classList.add("double-arrow"),n.appendChild(d);for(var r=a-1;r<=a+1&&r<=5;r++)if(r>0){var o=document.createElement("button");o.innerHTML=r,r===a?o.disabled=!0:o.addEventListener("click",function(n){return function(){a=n,e()}}(r)),o.classList.add("number"),n.appendChild(o)}if(a<4){if(a<3){var l=document.createElement("button");l.innerHTML="...",l.classList.add("dots-button"),l.disabled=!0,l.classList.add("number"),n.appendChild(l)}var c=document.createElement("button");c.innerHTML=5,c.addEventListener("click",(function(){a=5,e()})),c.classList.add("number"),n.appendChild(c)}var s=document.createElement("button");s.innerHTML=">",s.addEventListener("click",(function(){a<5&&(a++,e())})),s.classList.add("double-arrow-next"),n.appendChild(s);var u=document.createElement("button");u.innerHTML=">>",u.addEventListener("click",(function(){5!==a&&(a=5,e())})),u.classList.add("double-arrow-doublenext"),n.appendChild(u)}else n.style.display="none"}(),d("d3bCz"),d("i8Q71"),d("9VC5X"),d("23Ajj")}();
//# sourceMappingURL=shopping.dd62774e.js.map