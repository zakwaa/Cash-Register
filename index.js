const billamount = document.getElementById("billAmount");
const cashamount = document.getElementById("cashAmount");
const noOfNotes = document.getElementsByClassName("noOfnotes");
const checkbtn = document.getElementById("check");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

checkbtn.addEventListener("click", function validateBillAmount(){

     if(billamount.value>0){
    

        if(cashamount.value>=billamount.value){
            const amountToBeReturned = cashamount.value-billamount.value;
            calculateChange(amountToBeReturned);
        }
        else{
            alert("Need More Money");
        } 
    }
    else{
        alert("Invalid Bill Amount");
    }
} );

function calculateChange(amountToBeReturned){
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes=Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;


    }
}