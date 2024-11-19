// const form = document.querySelector(".feedback-form");
// const textarea = form.querySelector(".modal-form-textaria");
// const modalFormInput = form.querySelector(".modal-form-input");
//  const KEY ="feedback-form-state";
//  populateText();
// //  textarea.addEventListener("input", textareaInput)
// form.addEventListener("input", textareaInput)
// form.addEventListener("submit", handelSubmit)

//  function textareaInput(event){
//     const value = event.target.value;
//     localStorage.setItem(KEY, value);
//      }

//  function populateText(){
// const message = localStorage.getItem(KEY);
// if(message){
//     textarea.value = message
// }
//  }


//  function handelSubmit(event){
//     event.preventDefault();
//     event.currentTarget.reset();
//     localStorage.removeItem(KEY)
//  }

const formData ={
    email: "", 
    message: "" , 
}

const KEY ="feedback-form-state";

const form = document.querySelector(".feedback-form");
const input = form.querySelector(".modal-form-input");
const textarea = form.querySelector(".modal-form-textarea");

form.addEventListener("input", handelInput)
form.addEventListener("submit", handelSubmit)
populateText();
function handelInput(event){
    const key = event.target.name;
    const value = event.target.value.trim();
     formData [key] = value;
  
     
    localStorage.setItem(KEY, JSON.stringify(formData));
 if(!value){
    event.currentTarget.reset();
 }
 }

 function populateText(){
const message = JSON.parse(localStorage.getItem(KEY)) || {};

if(!!message){
    input.value = message.email, 
    textarea.value = message.message
  }
 }


 function handelSubmit(event){
    event.preventDefault();
    const message = JSON.parse(localStorage.getItem(KEY)) || {};
     if(!message.email){
 alert  ("Fill please all fields")
     }
     if(!message.message){
        alert  ("Fill please all fields")
            }
      console.log(message);
      event.currentTarget.reset();
    localStorage.removeItem(KEY)
   }