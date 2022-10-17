const entryField = document.querySelector(".entry-field");
const weightValue = document.querySelector("#weight-value");
const heightValue = document.querySelector("#height-value");
const  submitBtn= document.querySelector(".submit-btn");
const  displayResult= document.querySelector(".display-result");

//adding the click event to the submit button
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault("entryField")
    calculateBmi()
    clearfield()
    
})

//funntion for BMI calculation
let calculateBmi = ()=>{
    const weight = +weightValue.value ;
    const height = +heightValue.value ;


    //Converting the height in centimeters to meters
    let convertHeight = height * 0.01;

    //square the convertHeight
    let squeredHeight = convertHeight**2;

    //calculate the body mass index(BMI)
    let calculateBmi = weight / squeredHeight;
    
    displayResult.textContent = +calculateBmi.toFixed(2);
};

//funtion for clearing the formfield when the submit button has been clicked
let clearfield = ()=> entryField.reset();