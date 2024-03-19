(()=>{"use strict";var e={450:(e,t,n)=>{n.d(t,{$b:()=>I,KT:()=>i,dP:()=>h,op:()=>s});var o=n(113),c=n(371),r=n(60);const s="none",i="documentPageItems_itemDisplayText",l="documentPageItems_itemLi-invalid",a="invalid-icon",u="documentPageItems_splitButton",d="splitDocitemModal",m="splitDocitemModal_content",p="splitDocitemForm_previewOneResultValue",f="id_set_split_direction",g="id_set_split_quantity";document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".documentPageItems_includeButton").forEach((e=>{e.addEventListener("click",(e=>{q(e)}))})),document.querySelectorAll(".documentPageItems_excludeButton").forEach((e=>{e.addEventListener("click",(e=>{q(e)}))})),document.querySelectorAll("."+u).forEach((e=>{e.addEventListener("click",(e=>{x(e)}))}))}));const L="documentPageItems_itemsUl-included",v={resultPreviewCSS:"splitDocitemForm_previewIncludedResult",resultPreviewString:"Included",splitFormCategory:"included",toggleBtnClass:"documentPageItems_excludeButton",toggleBtnStr:"exclude",ulClass:L,ulEle:document.querySelector(`.${L}`)},S="documentPageItems_itemsUl-excluded",y={liClass:"documentPageItems_itemLi-excluded",resultPreviewCSS:"splitDocitemForm_previewExcludedResult",resultPreviewString:"Excluded",splitFormCategory:"excluded",toggleBtnClass:"documentPageItems_includeButton",toggleBtnStr:"include",ulClass:S,ulEle:document.querySelector(`.${S}`)};function E(e){return _(e)?{src:v,dst:y}:C(e)?{src:y,dst:v}:null}function _(e){return e.classList.contains(v.ulClass)}function C(e){return e.classList.contains(y.ulClass)}function h(){return v.ulEle}function I(){return y.ulEle}function q(e){const t=e.target.closest("li"),n=E(t.parentElement);null!=n&&(b(n,t),(0,o.Tk)().on())}function b(e,t){P(t)&&!k(t)?t.remove():function(e,t){const n=R(e.dst.ulEle,t.dataset.jiid);null!=n?function(e,t){const n=t.querySelector("."+i),o=e.querySelector("."+i);n.textContent=N(o.textContent,n.textContent),e.remove()}(t,n):(function(e,t){C(t.dst.ulEle)?e.classList.add(t.dst.liClass):e.classList.remove(t.src.liClass),function(e,t){const n=e.getElementsByTagName("button");if(null===n)return;let o;o=n.length>1?Array.from(n).find((e=>function(e){return e.classList.contains(v.toggleBtnClass)||e.classList.contains(y.toggleBtnClass)}(e))):n[0],o.classList.remove(t.src.toggleBtnClass),o.classList.add(t.dst.toggleBtnClass),function(e,t){e.querySelector(".hoverLabel").textContent=t.dst.toggleBtnStr}(e,t)}(e,t)}(t,e),e.dst.ulEle.append(t))}(e,t),function(e){U(e.dst.ulEle),function(e){for(let t=0;t<e.children.length;t++)if("LI"===e.children[t].nodeName)return!0;return!1}(e.src.ulEle)||e.src.ulEle.append(function(){const e=document.createElement("li");return e.classList.add(s),e.append(document.createTextNode("No line items in this section")),e}())}(e)}function x(e){!function(e){w();const t=e.closest("li"),n=function(e,t){const n={form:"splitDocitemForm",buttonContainer:"splitDocitemForm_buttonContainer",directionWrapper:"splitDocitemForm_direction",inputWrapper:"splitDocitemForm_inputWrapper",introduction:"splitDocitemModal_introduction",invalid:"splitDocitemModal_invalidSplit",label:"splitDocitemForm_label",labelStr:"splitDocitemForm_labelStr",labelSubStr:"splitDocitemForm_labelSubStr",previewContainer:"splitDocitemForm_previewResults",previewHeading:"splitDocitemForm_previewResultsHeading",previewOneResultName:"splitDocitemForm_previewOneResultName",previewOneResultValue:p,quantityWrapper:"splitDocitemForm_quantityWrapper",submitBtn:"splitDocitemForm_submitBtn"};let o=e.dataset.jiid,s=document.createElement("div");s.classList.add(m);const i=(0,c.gr)(2);i.innerText="Edit Split",s.append(i),function(e){return P(R(h(),e))}(o)&&s.append(function(){let e=document.createElement("div");e.classList.add(n.invalid);let t=document.querySelector(`.${a}`).cloneNode(!0);e.append(t);let o=document.createTextNode("Invalid quantity detected and corrected");return e.append(o),e}()),s.append(function(e){let t=document.createElement("p");return t.classList.add(n.introduction),t.innerHTML="Splitting "+T(e),t}(o));const l=document.createElement("form");return l.classList.add(n.form),l.append(function(e,t,o){const c=document.createElement("div");if(c.classList.add(n.inputWrapper),c.append(function(){const e=document.createElement("div");e.classList.add(n.directionWrapper);const t=function(){const e=document.createElement("label");e.for=f,e.classList.add(n.label);const t=document.createElement("span");t.classList.add(n.labelStr),t.textContent="Select which quantity to input",e.append(t);const o=document.createElement("span");return o.classList.add(n.labelSubStr),o.textContent="(the other will be set automatically)",e.append(o),e}();e.append(t);const o=function(){const e=document.createElement("select");e.id=f;const t=u(v),n=u(y);return e.append(t),e.append(n),e}();return e.append(o),e}()),P(o))var r=o.dataset.max_available;else r=B(t,e);const s=document.createElement("div");s.classList.add(n.quantityWrapper);const i=function(){const e=document.createElement("label");return e.htmlFor=g,e.textContent="Enter quantity",e}();s.append(i);const l=function(e){let t=document.createElement("input");return t.id=g,t.type="number",t.min=0,t.value=e,t.addEventListener("change",(e=>{$(e.target)})),t.addEventListener("keydown",(e=>{"Enter"===e.key&&($(e.target),M(e.target))})),t}(r);return s.append(l),c.append(s),c}(o,t,e)),l.append(function(e){let t=document.createElement("div");t.classList.add(n.previewContainer);const o=document.createElement("h3");return o.textContent="Result preview",o.classList.add(n.previewHeading),t.append(o),t.append(d(v.splitFormCategory,e)),t.append(d(y.splitFormCategory,e)),t}(o)),l.append(function(){const e=document.createElement("div");return e.classList.add(n.buttonContainer),e.append(function(){let e=(0,r.O9)();return e.classList.add(n.submitBtn),e.type="button",e.textContent="split / join",e.addEventListener("click",(e=>{M(e.target)})),e}()),e}()),s.append(l),s;function u(e){const t=document.createElement("option");return t.name=e.splitFormCategory,t.value=e.splitFormCategory,t.textContent=e.splitFormCategory,t}function d(e,t){const o=e===v.splitFormCategory?v:y,c=document.createElement("div");c.classList.add(o.resultPreviewCSS);const r=document.createElement("span");r.classList.add(n.previewOneResultName),r.textContent=o.resultPreviewString,c.append(r);let s=B(o.ulEle,t),i=document.createElement("span");return i.classList.add(n.previewOneResultValue),i.textContent=s,c.append(i),c}}(t,t.parentElement),o=(0,c.xs)(n,d,w);t.append(o),(0,c.pZ)(o),D().disable()}(e.target)}function w(){let e=document.querySelector("."+m);e&&e.remove(),D().enable(),(0,c.QC)(d)}function D(){const e=["documentPageItems_splitButton","documentPageItems_excludeButton","documentPageItems_includeButton"];function t(t){e.values().forEach((e=>{document.querySelectorAll(`.${e}`).forEach((e=>{e.disabled=t}))}))}return{enable:function(){t(!1)},disable:function(){t(!0)}}}function $(e){const t=function(){const e=document.querySelector("#"+f).value.toLowerCase();return e===y.splitFormCategory?y:e===v.splitFormCategory?v:null}();if(null===t)return void console.log("Error: can't find active info");const n=t.splitFormCategory===v.splitFormCategory?y:v,o=F(t),c=F(n),r=parseInt(e.value);!function(e,t,n,o){o<=0?(e.innerHTML=0,t.innerHTML=n):o<=n?(e.innerHTML=o,t.innerHTML=n-o):o>n&&(e.innerHTML=n,t.innerHTML=0)}(o,c,function(e){let t=0;t+=B(v.ulEle,e);return t+=B(y.ulEle,e),t}(e.closest("li").dataset.jiid),r)}function T(e){let t=o(h(),e),n=o(I(),e);return""===t?n:""===n?t:N(t,n);function o(e,t){const n=R(e,t);return null!=n?O(n):""}}function B(e,t){const n=R(e,t);if(P(n)){let e=parseInt(n.dataset.max_available);return e<0?0:e}return function(e){return null!=e?parseInt(e.querySelector("."+i).textContent.match(r.fF)[0]):0}(n)}function M(e){$(document.querySelector(`#${g}`));const t=e.closest("li"),n=t.dataset.jiid;let c=F(v);const s=parseInt(c.innerHTML);c=F(y);const l=parseInt(c.innerHTML);function a(e,t){const n=e.ulEle,o=R(n,t);if(null!==o)return void b(E(n),o);const c=R(h(),t);P(c)&&k(c)}function d(e,t,n,o,c){const s=R(e,n),l=null!==s,a=o.replace(r.fF,t);if(l)s.querySelector("."+i).textContent=a,P(s)&&A(s);else{const t=c.cloneNode(!0);!function(e,t,n){(function(e,t){const n="documentPageItems_itemLi-excluded",o=C(t),c=e.classList.contains(n);o&&!c?e.classList.add(n):!o&&c&&e.classList.remove(n)})(e,n),function(e,t){e.querySelector(`.${i}`).textContent=t}(e,t),function(e){e.querySelector(`.${u}`).addEventListener("click",(e=>{x(e)}))}(e),function(e,t){const n=_(t)?{src:y,dst:v}:{src:v,dst:y},o=e.querySelector(`.${n.src.toggleBtnClass}`)??e.querySelector(`.${n.dst.toggleBtnClass}`);o.addEventListener("click",(e=>{q(e)})),o.classList.contains(n.dst.toggleBtnClass)||o.classList.add(n.dst.toggleBtnClass),o.classList.remove(n.src.toggleBtnClass),o.querySelector(".hoverLabel").textContent=n.dst.toggleBtnStr}(e,n)}(t,a,e),e.append(t),U(e)}}0===s?a(v,n):0===l?a(y,n):function(e,t,n,o){const c=T(n);d(v.ulEle,e,n,c,o),d(y.ulEle,t,n,c,o)}(s,l,n,t),(0,o.Tk)().on(),w()}function F(e){return document.querySelector(`.${e.resultPreviewCSS}`).querySelector(`.${p}`)}function P(e){return null!=e&&e.classList.contains(l)}function O(e){const t=e.querySelector("."+i);if(null===t)return"Description not found";if(!P(e))return t.textContent;let n=parseInt(e.dataset.max_available);return n=n>0?n:0,t.innerHTML.replace(r.fF,n)}function k(e){return!(parseInt(e.dataset.max_available)<=0||(function(e){if(H(e))return;e.querySelector("."+i).innerHTML=O(e)}(e),A(e),0))}function A(e){!function(e){H(e)||e.classList.remove(l)}(e),function(e){H(e)||H(e.querySelector(`.${a}`))||e.querySelector(`.${a}`).remove()}(e)}function H(e){return null==e}function R(e,t){for(let n=0;n<e.children.length;n++)if(e.children[n].dataset.jiid&&t===e.children[n].dataset.jiid)return e.children[n];return null}function N(e,t){let n=parseInt(e.match(r.fF)[0])+parseInt(t.match(r.fF)[0]);return t.replace(r.fF,n)}function U(e){const t=e.querySelector("."+s);null!=t&&t.remove()}},113:(e,t,n)=>{n.d(t,{Tk:()=>v});var o=n(60),c=n(669),r=n(450),s=n(371);const i="no-special-instructions",l="editSpecialInstructionModal",a="editSpecialInstructionModal_contents",u="documentPageSpecialInstructions_specialInstructionContainer",d="documentPageSpecialInstructions_specialInstructionContents";function m(e){const t=function(e){const t={};t.reference=document.querySelector("#id_doc_reference").value,t.issue_date=e,t.assigned_items=function(){const e=(0,r.dP)(),t=(0,r.$b)(),n=g(e,!1);return{...g(t,!0),...n}}(),t.special_instructions=function(){const e=[],t=document.querySelector(".documentPageSpecialInstructions").querySelector(".existing");return Array.from(t.children).forEach((t=>{if(!t.classList.contains(i)){let n={};n.id=t.hasAttribute("siid")?t.dataset.siid:0,n.contents=t.querySelector(`.${d}`).innerHTML,e.push(n)}})),e}();const n=f("id_req_prod_date");null!==n&&(t.req_prod_date=n);const o=f("id_sched_prod_date");return null!==o&&(t.sched_prod_date=o),t}(e);console.log(t),console.log("DOC_ID",DOC_ID),"0"===DOC_ID?(console.log("creating a new document",DOC_ID),p("POST",201,t,`job=${JOB_ID}&type=${DOC_CODE}`)):(console.log("saving an existing document",DOC_ID),p("PUT",204,t,`id=${DOC_ID}`))}async function p(e,t,n,r){const s=(0,o.YG)(e,n),i=await(0,o.Fl)(`${URL_DOCBUILDER}?${r}`,s);(0,o.au)(i,t)?201===t?window.location.href=i[o.Sx]:async function(e){const t=await(0,o.m8)(e);if((0,o.au)(t,200)&&"doc_is_issued"in t){if(!0===t.doc_is_issued)return void(window.location.href=window.URL_DOCMAIN);if(v().off(),console.log("page updated, checking validity"),console.log("\tresp data",t),"doc_is_valid"in t&&"item_is_valid"in t)return console.log("\tall is valid"),n=t.doc_is_valid,r=t.item_is_valid,function(e){const t=document.querySelector(".documentPageWarnings_invalid");!0===e&&null!==t&&(t.remove(),document.querySelector(".issueFinalIconTextButton").removeAttribute("disabled"))}(n),function(e){const t="invalid";document.querySelectorAll(`.${t}`).forEach((n=>{const o=n.dataset.jiid;o in e&&!0===e[o]&&(n.classList.remove(t),n.querySelector(".invalid-icon").remove())}))}(r),void(0,c.t)("Document saved")}var n,r;(0,c.t)("Page display error: refresh is recommended.",!0)}(`${URL_DOCBUILDER}?${r}`):(0,c.t)(i,!0)}function f(e){const t=document.getElementById(e);if(t){var n=t.value;return""==n?"":n}return null}function g(e,t){const n={};return null===e.querySelector("."+r.op)&&Array.from(e.children).forEach((e=>{if("LI"===e.tagName){const c=String(e.dataset.jiid);n[c]=t?0:parseInt(e.querySelector(`.${r.KT}`).innerHTML.match(o.fF)[0])}})),n}function L(){return document.querySelector(".saveIconTextButton")}function v(){const e="documentPageWarnings_unsavedChanges",t=`${e}-off`,n=`${e}-on`;function o(){return document.querySelector(`.${e}`)}return{on:function(){const e=o();e.classList.contains(t)&&(e.classList.remove(t),e.classList.add(n),e.innerHTML="Warning: unsaved changes exist");const c=L();null!==c&&(c.disabled=!1)},off:function(){const e=o();e.classList.contains(n)&&(e.classList.remove(n),e.classList.add(t),e.innerHTML="");const c=L();null!==c&&(c.disabled=!0)}}}function S(e){(0,o.X7)(o.lJ);let t=e.parentElement;const n=function(e){let t=document.createElement("div");t.classList.add(a);const n=(0,s.gr)(2);n.textContent="Special Instructions",t.append(n);const c="id_specialInstructionContentInEditMode",r=function(){let e=document.createElement("form");return e.classList.add("documentPageSpecialInstructions_form"),e}();return r.append(function(e){const t=document.createElement("label");return t.classList.add("documentPageSpecialInstructions_label"),t.htmlFor=e,t.textContent="Edit special instruction",t}(c)),r.append(function(e,t){let n=document.createElement("textarea");return n.id=t,n.classList.add("documentPageSpecialInstructions_textarea"),n.innerHTML=e,n}(e,c)),r.append(function(){let e=document.createElement("div");return e.classList.add("documentPageSpecialInstructions_controlsContainer"),e.append(function(){let e=(0,o.O9)();return e.innerHTML="change",e.type="button",e.classList.add("documentPageSpecialInstructions_button"),e.addEventListener("click",(e=>{!function(e){const t=e.closest(`.${a}`).querySelector("textarea").value,n=e.closest(`.${u}`).querySelector(`.${d}`);n.innerHTML=t,n.classList.remove(o.XL),y(),v().on()}(e.target)})),e}()),e.append(function(){let e=(0,o.N$)();return e.type="button",e.classList.add("documentPageSpecialInstructions_button"),e.setAttribute("data-siid","0"),e.addEventListener("click",(e=>{!function(e){e.closest("."+u).remove(),E(),v().on()}(e.target)})),e}()),e}()),t.append(r),t}(t.querySelector(`.${d}`).innerHTML),c=(0,s.xs)(n,l,y);t.prepend(c),(0,s.pZ)(c)}function y(){const e=document.querySelectorAll(`.${l}`);1===e.length&&e[0].remove(),(0,o.kB)(o.lJ)}function E(){let e=document.querySelector(".documentPageSpecialInstructions"),t=e.querySelector(`.${i}`),n=null==e.querySelector("."+u),o=null!=t;n&&!o?document.querySelector(".existing").append(function(){let e=document.createElement("p");return e.classList.add(i),e.innerHTML="No special instructions on this document",e}()):!n&&o&&t.remove()}document.addEventListener("DOMContentLoaded",(()=>{!function(){L()?.addEventListener("click",(()=>{m(null)})),document.querySelector(".issueFinalIconTextButton").addEventListener("click",(e=>{!function(e){const t=function(){const e=document.createElement("div");e.classList.add("docBuilderIssueDoc");const t=(0,s.gr)(2);t.textContent="Issue Final",e.append(t);const n=function(){const e=document.createElement("form");return e.classList.add("docBuilderIssueDoc_form"),e.append(function(){const e=document.createElement("div");e.classList.add("docBuilderIssueDoc_formRow");const t="id_docBuilder_issueDate";return e.append(function(e){const t=document.createElement("label");return t.htmlFor=e,t.textContent="Issue Date",t}(t)),e.append(function(e){const t=document.createElement("input");t.id=e,t.classList.add("issue-date"),t.type="date";const n=new Date,o=`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}`;return t.value=o,t}(t)),e}()),e.append(function(){const e=(0,o.O9)();return e.classList.add("docBuilderIssueDoc_submitBtn"),e.type="button",e.innerHTML="issue",e.addEventListener("click",(e=>{m(e.target.parentElement.querySelector("input").value)})),e}()),e}();return e.append(n),e}(),n=(0,s.xs)(t,"",null);e.target.after(n),(0,s.pZ)(n)}(e)})),document.querySelector(".deleteIconTextButton").addEventListener("click",(()=>{!async function(){if(window.confirm("Deleting a document cannot be undone except by a system administrator. Are you sure?")){let e=(0,o.YG)("DELETE");try{let t=await(0,o.Fl)(`${URL_DOCBUILDER}?id=${DOC_ID}`,e);(0,o.au)(t,204)?window.location.href=JOB_DOCTAB_URL:(0,c.t)(t)}catch(e){(0,c.t)("Delete failed. Try again later.",!0)}}}()})),null!=document.querySelector(".documentPageGeneral")&&document.querySelectorAll("input").forEach((e=>{e.addEventListener("input",(()=>{v().on()}))}));const e="addNewSpecialInstructionModal";function t(){(0,o.kX)(e);const t=document.querySelectorAll(`.${e}`);if(1===t.length){const e=t[0].querySelectorAll(`.${s.Uo}`)[0];e?.close()}}document.querySelector(".openCreateSpecialInstruction")?.addEventListener("click",(()=>{(0,o.xY)(e);const t=document.querySelectorAll(`.${e}`);if(1===t.length){const e=t[0].querySelectorAll(`.${s.Uo}`)[0];e?.show()}})),document.querySelector(".close-new-instr")?.addEventListener("click",(()=>{t()})),document.querySelector(".add-special-instruction-btn").addEventListener("click",(()=>{!function(){const e=document.querySelector(".addNewSpecialInstructionModal").querySelector("textarea"),t=e.value;e.value="";const n=document.querySelector(".existing"),c=function(e){const t=function(){const e=document.createElement("div");return e.classList.add(u),e}();return t.append(function(e){const t=document.createElement("div");return t.classList.add(d),t.innerHTML=e,t}(e)),t.append(function(){const e=(0,o.gA)();return e.classList.add("documentPageSpecialInstructions_specialInstructionEditBtn"),e.setAttribute("data-siid","0"),e.addEventListener("click",(e=>{S(e.target)})),e}()),t.append(function(){const e=document.createElement("div");e.classList.add("documentPageSpecialInstructions_specialInstructionWhoAndWhen");const t=document.createElement("span");t.classList.add("username"),t.innerHTML="You",e.append(t);const n=document.createTextNode(" on ");e.append(n);const c=document.createElement("span");return c.classList.add("when"),c.innerHTML=(0,o.sT)(),e.append(c),e}()),t}(t);n.prepend(c),E(),v().on()}(),t()})),document.querySelectorAll(".documentPageSpecialInstructions_specialInstructionEditBtn").forEach((e=>{e.addEventListener("click",(e=>{S(e.target)}))}))}()}))},669:(e,t,n)=>{n.d(t,{t:()=>c});var o=n(60);function c(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n="documentResponseMessage",c="documentResponseMessage-error",r="documentResponseMessage-neutral",s="documentResponseMessage_content",i="documentResponseMessage_timestamp",l=document.querySelector(".documentWarnings"),a=function(){let e=document.querySelector(`.${n}`);return null===e&&(e=function(){const e=function(){const e=document.createElement("div");return e.classList.add(n),e}(),t=function(){const e=document.createElement("p");return e.classList.add(s),e}();e.append(t);const c=function(){const e=document.createElement("p");return e.classList.add(i),e}();e.append(c);const r=function(){const e=(0,o.Qp)();return e.classList.add("documentResponseMessage_closeBtn"),e}();return r.addEventListener("click",(()=>{e.remove()})),e.append(r),e}(),l.append(e)),e}(),u=function(){let n="Something went wrong, try refreshing the page",o=c;return"string"==typeof e?(n=e,o=t?c:r):"message"in e?(n=e.message,o=r):get_error_message().responded_with_error_reason(e)&&(n=`Error: ${get_error_message(e)}`,o=c),{contentStr:n,statusModifierCSS:o}}();!function(e,t){(function(e){e.classList.remove(c),e.classList.remove(r)})(e),e.classList.add(t.statusModifierCSS);const n=function(e){return e.querySelector(`.${s}`)}(a);null!==n&&(n.textContent=t.contentStr);const l=function(e){return e.querySelector(`.${i}`)}(a);null!==l&&(l.textContent=(0,o.sT)())}(a,u)}document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".replaceIconTextButton");null!==e&&e.addEventListener("click",(()=>{!async function(){const e=(0,o.YG)("POST"),t=await(0,o.Fl)(`${URL_DOC_MAIN}?doc_id=${DOC_ID}&task=replace`,e);(0,o.au)(t,201)?window.location.href=t[o.Sx]:c(t)}()}));const t=document.querySelector(".revertIconTextButton");null!==t&&t.addEventListener("click",(()=>{!async function(){const e=(0,o.YG)("POST"),t=await(0,o.Fl)(`${URL_DOC_MAIN}?doc_id=${DOC_ID}&task=revert`,e);(0,o.au)(t,200)?window.location.href=t[o.Sx]:c(t)}()}))}))},371:(e,t,n)=>{n.d(t,{QC:()=>d,Uo:()=>c,gr:()=>a,pZ:()=>u,xs:()=>l});var o=n(60);const c="modal",r="closeButton",s="modalWrapper",i="modal_heading";function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const i=function(){let e=document.createElement("div");return e.classList.add(s),e.classList.add(o.XL),e}();""!==t&&null!=t&&(i.className=`${i.className} ${t}`);const l=function(){let e=document.createElement("dialog");return e.classList.add(c),e}(),a=(0,o.Qp)();return a.classList.add(`${c}_${r}`),a.addEventListener("click",(()=>{null!==n&&n(),function(e){let{dialog:t,wrapper:n}=e;null==n||n?.classList.contains(o.XL)||n?.classList.add(o.XL),null!=t&&t?.close()}({dialog:l,wrapper:i})})),l.append(a),l.append(e),i.append(l),i}function a(e){let t;return t="number"!=typeof e||e>6||e<1?document.createElement("h2"):document.createElement(`h${e}`),t.classList.add(i),t}function u(e){e.classList.remove(o.XL),e.querySelector(`.${c}`).show()}function d(e){const t=function(){const e=document.querySelectorAll(`.${s}`);return e.length>0?e:null}();(void 0===e?t:Array.from(t).filter((t=>t.classList.contains(e)))).forEach((e=>{e?.remove()}))}},60:(e,t,n)=>{n.d(t,{Fl:()=>d,N$:()=>C,O9:()=>_,Qp:()=>E,Sx:()=>i,X7:()=>S,XL:()=>r,YG:()=>u,au:()=>f,fF:()=>o,gA:()=>h,kB:()=>y,kX:()=>L,lJ:()=>c,m8:()=>m,sT:()=>g,xY:()=>v});const o=/\d+(?=( x ))/g,c="edit-icon",r="hide",s="http_code",i="location",l=new Set([200,201,204]),a=-1;function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n={method:e,headers:(o=function(e){let t=null;if(document.cookie&&""!==document.cookie){const n=document.cookie.split(";");for(let o=0;o<n.length;o++){const c=n[o].trim();if(c.substring(0,10)===e+"="){t=decodeURIComponent(c.substring(10));break}}}return t}("csrftoken"),c=new Headers,c.append("X-CSRFToken",o),c),credentials:"include"};var o,c;return null!=t&&(n.body=JSON.stringify(t)),n}async function d(e,t){let n=await fetch(e,t).catch((e=>{console.log("Error: ",e)}));return await p(n)}async function m(e){let t=await fetch(e).catch((e=>{console.log("Error: ",e)}));return await p(t)}async function p(e){const t=e.headers.get("content-type");if(t&&-1!==t.indexOf("application/json"))var n=await e.json();else n={};return n[s]=e.status,n[i]=e.headers.get("Location"),n}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=function(e){return"object"!=typeof e?a:s in e?"string"==typeof e[s]?parseInt(e[s]):e[s]:a}(e);return n!==a&&(null===t?l.has(n):n===t)}function g(){return(new Date).toLocaleString("en-GB")}function L(e){document.querySelectorAll("."+e).forEach((e=>{e.classList.add(r)}))}function v(e){document.querySelectorAll("."+e).forEach((e=>{e.classList.remove(r)}))}function S(e){document.querySelectorAll("."+e).forEach((e=>{e.disabled=!0}))}function y(e){document.querySelectorAll("."+e).forEach((e=>{e.disabled=!1}))}function E(){let e=document.createElement("button");e.classList.add("close");let t=document.createElement("span");return t.innerHTML="close",e.append(t),e}function _(){let e=document.createElement("button");return e.classList.add("button-primary"),e.innerHTML="submit",e}function C(){let e=document.createElement("button");return e.innerHTML="delete",e.classList.add("button-warning"),e.classList.add("delete-btn"),e}function h(){let e=document.createElement("button");e.classList.add(c);let t=document.createElement("span");return t.innerHTML="edit",e.append(t),e}}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(113),n(450)})();