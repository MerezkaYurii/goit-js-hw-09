import"./assets/styles-Dzeha2pP.js";const s={email:"",message:""},o="feedback-form-state",a=document.querySelector(".feedback-form"),r=a.querySelector(".modal-form-input"),n=a.querySelector(".modal-form-textarea");a.addEventListener("input",i);a.addEventListener("submit",c);m();function i(e){const t=e.target.name,l=e.target.value.trim();s[t]=l,console.log(!l),localStorage.setItem(o,JSON.stringify(s)),l||a.reset()}function m(){const e=JSON.parse(localStorage.getItem(o))||{};e&&(r.value=e.email,n.value=e.message)}function c(e){e.preventDefault();const t=JSON.parse(localStorage.getItem(o))||{};t.email||alert("Fill please all fields"),t.message||alert("Fill please all fields"),console.log(t),e.currentTarget.reset()}
//# sourceMappingURL=2-form.js.map
