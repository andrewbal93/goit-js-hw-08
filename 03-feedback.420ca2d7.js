function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,o,a,r,f,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,a=o;return i=o=void 0,l=t,r=e.apply(a,n)}function S(e){return l=e,f=setTimeout(O,t),c?y(e):r}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=a}function O(){var e=v();if(j(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?d(n,a-(e-l)):n}(e))}function h(e){return f=void 0,g&&i?y(e):(i=o=void 0,r)}function w(){var e=v(),n=j(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),r}return t=b(t)||0,p(n)&&(c=!!n.leading,a=(s="maxWait"in n)?m(b(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=o=f=void 0},w.flush=function(){return void 0===f?r:h(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||r.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),S=()=>{y.email.value="",y.message.value=""};localStorage.getItem("feedback-form-state")?(y.email.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,y.message.value=JSON.parse(localStorage.getItem("feedback-form-state")).message):S();const j=e(t)((()=>localStorage.setItem("feedback-form-state",JSON.stringify({email:y.email.value,message:y.message.value}))),500);y.addEventListener("input",j),y.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:y.email.value,message:y.message.value}),S(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.420ca2d7.js.map