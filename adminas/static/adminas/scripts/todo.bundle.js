(()=>{var e={914:(e,t,n)=>{"use strict";n.d(t,{FO:()=>a,TX:()=>R,YV:()=>O,uI:()=>X,ur:()=>fe,yn:()=>k,zU:()=>F});var r=n(804),o=n(60);const i="data-form_type",c="add-button",l=`${c}.addComment`,s="empty-section-notice",a="one-comment",d="contents",u="controls",f="edit-comment",m="job-comment-cu-container",p="footer",h="highlighted-toggle",g="main",_="ownership",v="pinned-toggle",y="comments",L="comment-container",E="highlighted",b="pinned",$="create-comments-container",S="highlighted",q="pinned-toggle",w="pin-on",A="pin-off",k="id-",T="privacy-status",M="save",C="todoJob",O="0",j="id_comment_contents",x="id_highlighted_checkbox",H="id_pinned_checkbox",I="id_private_checkbox",B="todo_panel_job_",N="footer_str",Y="???",F="create",J="content-only";function P(e){X();let t=e.closest("."+a),n=R(t.dataset.comment_id,!0);n=function(e,t){let n=t.querySelector("."+d).innerHTML.trim();return e.querySelector("#"+j).value=U(n),e}(n,t),t.prepend(n),G(t,!1)}function X(){let e=document.querySelector("."+m);if(null==e)return;let t=e.closest("."+a);e.remove(),null!=t&&G(t,!0),(0,o.xY)(`${l}`),(0,o.xY)(f)}function R(e,t){let n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:null)===F?{title:"Add Comment",save_funct:V}:{title:"Edit Comment",save_funct:K},c=J,l=function(){let e=document.createElement("div");return e.classList.add(m),e.classList.add(o.fS),e.classList.add(o.fd),e}();return l.append(function(e){let t=(0,o.Qp)();return e&&t.addEventListener("click",(()=>{X()})),t}(t)),l.append(function(e){let t=document.createElement("h4");return t.innerHTML=e,t}(n.title)),l.append(function(){let e=document.createElement("textarea");return e.name="contents",e.id=j,e.cols=30,e.rows=5,e}()),l.append(function(e,t,n){let c=document.createElement("div");return c.classList.add(u),c.append(function(e,t,n){let r=(0,o.O9)();return r.classList.add(M),r.setAttribute("data-comment_id",e),r.setAttribute(i,t),r.addEventListener("click",(e=>{n(e.target)})),r}(e,t,n)),e!=O&&c.append(function(){let e=(0,o.N$)();return e.addEventListener("click",(e=>{!async function(e){let t=e.closest("."+a),n=await async function(e,t){let n=Z(e),r=(0,o.YG)("DELETE");return await(0,o.Fl)(`${n}&id=${t}`,r)}(e,t.dataset.comment_id);(0,o.au)(n,204)?function(e){document.querySelectorAll(`.${k}${e}`).forEach((e=>{let t=e.closest(`.${L}`);e.remove(),me(t)})),(0,r.q)({id:e},"delete")}(t.dataset.comment_id):te(n,e)}(e.target)})),e}()),c}(e,c,n.save_funct)),l}function U(e){return"<p>"==e.slice(0,3)&&(e=e.slice(3)),(e=(e=(e=(e=(e=e.replaceAll("\n","")).replaceAll("</p>","")).replaceAll("<p>","\n\n")).replaceAll("<br>","\n")).replaceAll("<br/>","\n")).replaceAll("<br />","\n")}function D(e){let t=e.replaceAll("\n\n","</p><p>");return t.length!==e.length&&("<p>"===t.slice(-3)&&(t=t.slice(0,-3)),t="<p>"+t+"</p>"),t.replaceAll("\n","<br>")}function G(e,t){let n=e.querySelector(".wrapper");null!=n&&(function(e,t){if(null==e)return;let n=!e.classList.contains(o.XL);t&&!n?e.classList.remove(o.XL):!t&&n&&e.classList.add(o.XL)}(e.querySelector(".wrapper"),t),t&&n.removeAttribute("open"))}async function V(e){let t=z(e),n=await W(e,t,"POST");(0,o.au)(n,201)?(t.id=n.id,t[N]=`You on ${n.created_on_str}`,t.job_id=ee(e),function(e){X();let t=ie(e.id);e.pinned&&de(t,b,e),ce(),(0,r.q)(e,"create")}(t)):function(e,t){let n=t.closest(`.${$}`);X(),ce(),function(e,t){let n=t.parentElement,r=n.querySelector(`.${L}`),o=get_ele_index(t,n),i=get_ele_index(r,n),l=t.querySelector(`.${c}`);i<o&&-1!=i?l.before(e):l.after(e)}(create_generic_ele_dismissable_error(e),n)}(n,e)}async function K(e){let t=z(e),n=await W(e,t,"PUT",`id=${e.dataset.comment_id}`);(0,o.au)(n,204)?(t.id=e.dataset.comment_id,t[N]=e.closest(`.${a}`).querySelector(`.${_}`).innerHTML,t.job_id=ee(e),function(e){X(),document.querySelectorAll(`.${k}${e.id}`).forEach((t=>{var n,r;n=e,(r=t).querySelector("."+d).innerHTML=D(n.contents),se(r,n.pinned),ae(r,n.highlighted),function(e,t){e.setAttribute("data-is_private",t);let n=e.querySelector("."+T),r=null!==n;r&&!t?n.remove():!r&&t&&e.querySelector(`.${g}`).prepend(ne())}(r,n.private)})),function(e,t){let n=`${k}${e.id}`;e[t]?e[t]&&de(n,t,e):ue(n,t)}(e,"pinned"),(0,r.q)(e,"update")}(t)):te(n,e)}function z(e){return e.dataset.form_type==J?function(e){let t=Q();t.pinned=!0;let n=e.closest(`.${a}`);return null!=n&&(t.private=(0,o.FB)(n.dataset.is_private),t.pinned=(0,o.FB)(n.dataset.is_pinned),t.highlighted=(0,o.FB)(n.dataset.is_highlighted)),t}(e):function(){let e=Q(),t=document.getElementById(I);null!=t&&(e.private=t.checked);let n=document.getElementById(H);null!=n&&(e.pinned=n.checked);let r=document.getElementById(x);return null!=r&&(e.highlighted=r.checked),e}()}function Q(){return{contents:document.getElementById(j).value,private:!0,pinned:!1,highlighted:!1}}async function W(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=Z(e),c=(0,o.YG)(n,function(e){return{contents:e.contents,private:e.private,pinned:e.pinned,highlighted:e.highlighted}}(t)),l="";return null!==r&&(l=`&${r}`),await(0,o.Fl)(`${i}${l}`,c)}function Z(e){return"undefined"!=typeof URL_COMMENTS_WITH_JOB?URL_COMMENTS_WITH_JOB:e.closest(`.${y}`).dataset.url_comments}function ee(e){if(void 0!==window.JOB_ID)return window.JOB_ID;let t=e.closest(`.${C}`);return null!==t?t.dataset.job_id:-1}function te(e,t){let n=t.closest("."+a);X();let r=n.querySelector(".contents"),o=create_generic_ele_dismissable_error(e);r.prepend(o)}function ne(){let e=document.createElement("div");return e.classList.add(T),e.innerHTML="[PRIVATE]",e}function re(e){return{display_str:e?"unpin":"pin",css_class:e?w:A,unwanted_css_class:e?A:w}}function oe(e,t){let n=document.createElement("button");return n.classList.add(t),n.innerHTML=e,n}function ie(e){return`${k}${e}`}function ce(){document.querySelectorAll("."+o.MO).forEach((e=>{e.remove()}))}async function le(e,t){let n=e.closest("."+a);var i=function(e,t){let n=e.closest("."+a);if(null!==n){if("pinned"===t)var r=n.dataset.is_pinned;else{if("highlighted"!==t)return;r=n.dataset.is_highlighted}return(0,o.FB)(r)}}(e,t);let c=Z(e),l=await async function(e,t,n,r){let i={};i[r]=n;let c=(0,o.YG)("PUT",i);return await(0,o.Fl)(`${e}&id=${t}`,c)}(c,n.dataset.comment_id,!i,t);(0,o.au)(l,204)?function(e,t,n){let o=ie(e.dataset.comment_id);document.querySelectorAll(`.${o}`).forEach((e=>{"pinned"==n?se(e,t):"highlighted"==n&&ae(e,t)})),t?de(o,n):ue(o,n),(0,r.H)(e,t,n)}(n,!i,t):alert(get_error_message(l))}function se(e,t){e.setAttribute("data-is_pinned",t),function(e,t){if(e.classList.contains(w)===t)return;let n=re(t);e.classList.add(q),e.classList.add(n.css_class),e.classList.remove(n.unwanted_css_class),e.innerHTML=n.display_str}(e.querySelector("."+v),t)}function ae(e,t){e.setAttribute("data-is_highlighted",t);let n=e.classList.contains(S);t&&!n?e.classList.add(S):!t&&n&&e.classList.remove(S)}function de(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=document.querySelectorAll(`.${L}.${t}`);if(null===r||0==r.length)return;if(n=function(e,t){if(null!==e)return e;let n=document.querySelector(`.${t}`);return null!==n?fe(n):null}(n,e),null===n)return;let i=function(e,t,n){if(1===e.length)return e[0];if("number"!=typeof t&&"string"!=typeof t)return null;if("string"==typeof t&&(t=parseInt(t)),t>0){let e=`${B}${t}`,r=document.getElementById(e);if(null!==r)return r.querySelector(`.${L}.${n}`)}return null}(r,n.job_id,t);if(null!==i&&null===i.querySelector(`.${e}`)){var c=function(e){let t=function(e){let t=document.createElement("article");return t.classList.add(a),t.classList.add(`${k}${e.id}`),e.highlighted&&t.classList.add(S),t.setAttribute("data-comment_id",e.id),t.setAttribute("data-is_private",e.private),t.setAttribute("data-is_pinned",e.pinned),t.setAttribute("data-is_highlighted",e.highlighted),t}(e);var n;return t.append(function(e){let t=document.createElement("details");return t.classList.add("wrapper"),t.append(function(e){let t=document.createElement("summary");return t.classList.add("comment-body"),t.append(function(e,t){let n=document.createElement("span");return n.classList.add(g),e&&n.append(ne()),n.append(function(e){let t=document.createElement("span");return t.classList.add(d),t.innerHTML=D(e),t}(t)),n}(e.private,e.contents)),t}(e)),t.append(function(e){let t=document.createElement("section");return t.classList.add(p),t.append(function(e){let t=document.createElement("div");t.classList.add(_);let n="Unknown user at unknown time";return N in e?n=e[N]:"created_by"in e&&"created_on_str"in e&&(n=`${e.created_by} on ${e.created_on_str}`),t.innerHTML=n,t}(e)),t.append(function(e){let t=document.createElement("div");return t.classList.add(u),t.append(function(e){let t=re(e),n=oe(t.display_str,q);return n.classList.add(t.css_class),n}(e.pinned)),t.append(oe("+/- highlight",h)),t.append(oe("edit",f)),t}(e)),t}(e)),t}(e)),n=t,(0,o.wK)(n.querySelector("."+f),(e=>{P(e.target)})),(0,o.wK)(n.querySelector("."+v),(e=>{le(e.target,"pinned")})),(0,o.wK)(n.querySelector("."+h),(e=>{le(e.target,"highlighted")})),t}(n);i.prepend(c),me(i,t)}}function ue(e,t){document.querySelectorAll(`.${L}.${t}`).forEach((n=>{let r=n.querySelector(`.${e}`);null!==r&&(r.remove(),me(n,t))}))}function fe(e){let t={};return t.id=e.dataset.comment_id,t.footer_str=e.querySelector(`.${_}`).innerHTML.trim(),t.contents=U(e.querySelector(`.${d}`).innerHTML.trim()),t.private="true"==e.dataset.is_private.toLowerCase(),t.pinned="true"==e.dataset.is_pinned.toLowerCase(),t.highlighted="true"==e.dataset.is_highlighted.toLowerCase(),t.job_id=ee(e),t}function me(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Y;const n=0===e.querySelectorAll(`.${a}`).length,r=e.querySelector(`.${s}`);n&&null===r?function(e,t){if(t===Y){let n=function(e){const t=[b,E];for(let n=0;n<t.length;n++)if(e.classList.contains(t[n]))return t[n];return null}(e);null!==n&&(t=n)}var n=function(e){let t=document.createElement("p");return t.classList.add(s),t.innerHTML=e==E||e==b?`No comments have been ${e}`:"No comments yet",t}(t);e.prepend(n)}(e,t):n||null===r||r.remove()}document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll("."+f).forEach((e=>{e.addEventListener("click",(e=>{P(e.target)}))})),document.querySelectorAll("."+v).forEach((e=>{e.addEventListener("click",(e=>{le(e.target,"pinned")}))})),document.querySelectorAll("."+h).forEach((e=>{e.addEventListener("click",(e=>{le(e.target,"highlighted")}))}))}))},804:(e,t,n)=>{"use strict";n.d(t,{H:()=>l,q:()=>s});var r=n(60);const o="modal";function i(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e&&(e.classList.add(t),e.onanimationend=()=>{e.classList.remove(t),n&&n()})}var c=n(914);function l(e,t,n){const r="pinned"!==n||t?"update":"unpin",o={...(0,c.ur)(e),[n]:t};o.contents=m(o.contents),s(o,r)}function s(e,t){const n=function(){const e=d();if(!a(e))return null;return function(e){const t=document.querySelectorAll(".pinnedModalOpener");let n=null;for(let r=0;r<t.length;r++)if(t[r].dataset.target_id===e){n=t[r];break}return n}(e.parentNode.id)}();if(null!==n)if(n.dataset.comment_id===e.id&&e.pinned||"create"===t)u(n,e,n.dataset.jobName);else if("unpin"===t||"delete"===t){const t=function(e){const t=d();if(!a(t))return null;const n=t.querySelectorAll(`.${c.FO}`);if(null===n)return null;for(let t=0;t<n.length;t++){const r=`${c.yn}${e}`;if(!n[t].classList.contains(r))return(0,c.ur)(n[t])}return null}(e.id);u(n,null!==t?t:{id:c.YV,contents:null,pinned:!0,highlighted:!1,private:!0},n.dataset.jobName)}}function a(e){return null!==e&&e.classList.contains("pinnedCommentsModal")}function d(){const e=document.querySelectorAll(`.${o}`);let t=null;for(let n=0;n<e.length;n++)if(e[n].open){t=e[n];break}return t}function u(e,t,n){e.setAttribute("data-comment_id",t.id);const r="todoJob_pinnedComment-empty",o="todoJob_pinnedComment-highlighted";null===t.contents||""===t.contents||void 0===t.contents?(e.classList.contains(r)||e.classList.add(r),e.classList.remove(o),e.replaceChildren(f("Click to add pinned comments"))):(t.highlighted?e.classList.contains(o)||e.classList.add(o):e.classList.remove(o),e.classList.remove(r),e.replaceChildren(function(e){const t=document.createElement("span");return t.className="sr-only",t.innerText=`pinned comments for ${e}`,t}(n),function(e){const t=document.createElement("span");return t.classList.add("todoJob_pinnedPrivacyStatus"),t.classList.add("todoJob_pinnedPrivacyStatus-"+(e?"private":"public")),t.innerText=`[${e?"PRIVATE":"public"}]`,t}(t.private),f(m(t.contents))))}function f(e){const t=document.createElement("p");return t.className="todoJob_pinnedContents",t.innerText=e,t}function m(e){return e.replaceAll("\n"," ")}document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".pinnedModalOpener").forEach((e=>{e.addEventListener("click",(e=>function(e){const t=e.target.closest("[data-target_id]").dataset.target_id;if(void 0===t)return void window.alert("Can't open pinned comments");const n=document.getElementById(t);!function(e){e.classList.remove(r.XL),e.querySelector(`.${o}`).show()}(n);const i=n.querySelector(`.${o}_closeButton`);void 0!==i&&i.addEventListener("click",(()=>{n.classList.add(r.XL);const e=n.querySelector(`.${o}`);e&&e.close()}))}(e)))})),function(){const e="pinnedCommentsModal_addNewButton",t="pinnedCommentsModal_addNewContainer";function n(e){return e.closest(`.${t}`)}document.querySelectorAll(`.${e}`).forEach((o=>{o.addEventListener("click",(()=>{!function(o){(0,c.uI)();const l=(0,c.TX)(c.YV,!1,c.zU),s=l.querySelector(".close");s.addEventListener("click",(()=>{i(n(s),`${t}-close`,(()=>{(0,c.uI)(),(0,r.xY)(e)}))})),o.after(l),(0,r.kX)(e)}(o),i(n(o),`${t}-open`,null)}))}))}()}))},931:(e,t,n)=>{"use strict";var r=n(60);!function(){const e="todo_panel_job_",t="todo-list-remove";document.querySelectorAll("."+t).forEach((n=>{n.addEventListener("click",(()=>{!async function(n){let o=(0,r.YG)("DELETE",{job_id:n.dataset.job_id}),i=await(0,r.Fl)(`${URL_TODO_MANAGEMENT}`,o);var c,l;document.querySelectorAll("."+r.MO).forEach((e=>{e.remove()})),(0,r.au)(i,204)?function(n,r){n.classList.contains(t)&&function(t){const n=document.querySelector(`#${e}${t}`);null!=n&&n.remove()}(r)}(n,n.dataset.job_id):(c=i,l=n.dataset.job_id,active_ele=document.querySelector(`#${e}${l}`),active_ele&&(msg_ele=create_generic_ele_dismissable_error(c),active_ele.prepend(msg_ele),1)||alert((0,r.ml)(i)))}(n)}))}))}()},345:()=>{!function(){const e="statusEle",t="statusEle_icon",n="statusEle_message",r="statusEle_message-hidden";function o(e){return!e.classList.contains(r)}function i(e){const n=a(e),i=d(n);o(i)||window.setTimeout((()=>{l(),function(e,n){e.textContent=function(e){const n=e.querySelector(`.${t}`);return void 0===n.dataset.toggletip_content?"No details are available":n.dataset.toggletip_content}(n),e.classList.remove(r)}(i,n),function(e,t){function n(){s(e),document.removeEventListener("click",r)}function r(e){!function(e,t,n){e.composedPath().includes(t)||n()}(e,t,n)}document.addEventListener("click",r)}(i,n)}),100)}function c(e){const t=d(a(e));o(t)&&s(t)}function l(){document.querySelectorAll(`.${n}`).forEach((e=>{o(e)&&s(e)}))}function s(e){e.textContent="",e.classList.add(r)}function a(t){return t.target.classList.contains(e)?t.target:t.target.closest(`.${e}`)}function d(e){if(null!=e)return e.querySelector(`.${n}`);window.alert("Can't display status details, try the job page instead.")}l(),document.querySelectorAll(`.${t}`).forEach((e=>{e.addEventListener("click",(e=>i(e))),e.addEventListener("keydown",(e=>function(e){27===(e.keyCode||e.which)&&c(e),13===(e.keyCode||e.which)&&i(e)}(e))),e.addEventListener("blur",(e=>c(e)))}))}()},60:(e,t,n)=>{"use strict";n.d(t,{FB:()=>g,Fl:()=>f,MO:()=>r,N$:()=>b,O9:()=>E,Qp:()=>L,XL:()=>c,YG:()=>u,au:()=>m,fS:()=>o,fd:()=>i,kX:()=>_,ml:()=>h,wK:()=>y,xY:()=>v});const r="temp-warning-msg",o="panel",i="form-like",c="hide",l="http_code",s="location",a=new Set([200,201,204]),d=-1;function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n={method:e,headers:(r=function(e){let t=null;if(document.cookie&&""!==document.cookie){const n=document.cookie.split(";");for(let r=0;r<n.length;r++){const o=n[r].trim();if(o.substring(0,10)===e+"="){t=decodeURIComponent(o.substring(10));break}}}return t}("csrftoken"),o=new Headers,o.append("X-CSRFToken",r),o),credentials:"include"};var r,o;return null!=t&&(n.body=JSON.stringify(t)),n}async function f(e,t){let n=await fetch(e,t).catch((e=>{console.log("Error: ",e)}));return await async function(e){const t=e.headers.get("content-type");if(t&&-1!==t.indexOf("application/json"))var n=await e.json();else n={};return n[l]=e.status,n[s]=e.headers.get("Location"),n}(n)}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=p(e);return n!==d&&(null===t?a.has(n):n===t)}function p(e){return"object"!=typeof e?d:l in e?"string"==typeof e[l]?parseInt(e[l]):e[l]:d}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n="error";if("string"==typeof e)return e;if("object"==typeof e){if(null!==t){let n=!0,r=p(e);if(r!==d&&(n=!function(e){return!!a.has(e)||(401==e||403==e||409==e)}(r)),n)return t}return function(e){if(m(e))return"Page refresh recommended.";switch(p(e)){case 400:return"Invalid inputs.";case 401:return"You must be logged in.";case 403:return r(e)?e[n]:"Request was forbidden by the server.";case 404:return"Requested information was not found.";case 409:return r(e)?e[n]:"Request clashed with information on server. (The server won.)";case 500:return"A server error has occurred.";default:return"Error: something went wrong."}}(e)}return null!==t?t:"Error: something went wrong.";function r(e){return"object"==typeof e&&n in e}}function g(e){if("string"!=typeof e)return null;if("boolean"==typeof e)return e;let t=e.toLowerCase();return"true"===t||"false"!==t&&null}function _(e){document.querySelectorAll("."+e).forEach((e=>{e.classList.add(c)}))}function v(e){document.querySelectorAll("."+e).forEach((e=>{e.classList.remove(c)}))}function y(e,t){null!==e&&e.addEventListener("click",t)}function L(){let e=document.createElement("button");e.classList.add("close");let t=document.createElement("span");return t.innerHTML="close",e.append(t),e}function E(){let e=document.createElement("button");return e.classList.add("button-primary"),e.innerHTML="submit",e}function b(){let e=document.createElement("button");return e.innerHTML="delete",e.classList.add("button-warning"),e.classList.add("delete-btn"),e}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(804),n(931),n(345),n(914)})();