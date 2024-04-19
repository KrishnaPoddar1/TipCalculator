const bill = document.getElementById("bill");
const people = document.getElementById("peopleValue");
//const tip = document.getElementsByClassName("tipvalue")[0];
const tipPerPerson = document.getElementById("tipamount");
const totalTip = document.getElementById("totaltip");
const buttonReset = document.getElementById("reset");
const errorBlock = document.getElementById("errorblock");

const tipSection = document.querySelector(".tipvalue");
const buttons = tipSection.querySelectorAll("button");
const customInput = document.getElementById("custom");
var tipAmount=0;
var tPeople=0,tbill=0;

bill.addEventListener("keyup", function(e){
    tbill = Number(e.target.value);
    calculateTip();
    //console.log(tbill);
});
buttons.forEach(button => button.addEventListener("click", function (e){
    tipAmount = Number(e.target.value);
    calculateTip();
    //console.log("Tip value:", tipAmount);
}));
customInput.addEventListener("input", function (e){
    tipAmount = Number(e.target.value);
    calculateTip();
    //console.log("Tip val:", tipAmount);
});


people.addEventListener('keyup',(e)=>{
    
    if(e.target.value != ''){
        //console.log("A value not zero");
        errorBlock.classList.add('error');
        people.classList.remove('errorfocus');
        tPeople = Number(e.target.value);
        calculateTip();
    }else if(e.target.value == '0' || e.target.value == '') {
        //console.log("Zero");
        errorBlock.classList.remove('error');
        people.classList.add('errorfocus');
    }
});

function calculateTip(){
    const total = (tbill*tipAmount)/100.0;
    if(tPeople){
        totalTip.textContent = "$"+total;
        tipPerPerson.textContent = "$"+(total/tPeople);
    }else{
        totalTip.textContent = "$0.0";
        tipPerPerson.textContent = "$0.0";
    }
    
}

buttonReset.addEventListener('click',function (){
    totalTip.textContent = "$0.0";
    tipPerPerson.textContent = "$0.0";
    bill.value = '';
    people.value = '';
    customInput.value = '';
});