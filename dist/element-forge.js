!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ElementForge=t():e.ElementForge=t()}(self,(function(){return(()=>{"use strict";var e={362:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={BaseElement:class{static get name(){}static get propDefs(){}constructor(){}build(e){}onPropChange(e,t){}update(){}},elementPrefix:null,registerElement(e){const t=this.elementPrefix?`${this.elementPrefix}-${e.name}`:e.name;window.customElements.define(t,class extends HTMLElement{static get observedAttributes(){return e.propDefs.map((e=>e.name))}constructor(){super(),this.base=new e,this.rendered=!1,this.base.build({element:this}),this.base.update()}connectedCallback(){this.rendered||(this.base.update(),this.rendered=!0)}attributeChangedCallback(t,r,n){const o=e.propDefs.filter((e=>e.name===t));0!==o.length&&o[0].validate(n)&&(this.base.onPropChange(t,n),this.base.update())}})}}}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(362)})()}));