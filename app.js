const entryField = document.querySelector(".entry-field");
const weightValue = document.querySelector("#weight-value");
const heightValue = document.querySelector("#height-value");
const  submitBtn= document.querySelector(".submit-btn");
const  displayResult= document.querySelector(".display-result");

//adding the click event to the submit button
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault("entryField")
    clearfield()
    
})

//funntion for BMI calculation
let calculateBmi = ()=>{

};

//funtion for clearing the formfield when the submit button has been clicked
let clearfield = ()=> entryField.reset();