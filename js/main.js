const loginPanel = document.getElementById("loginPanel");
const loginBtn = document.getElementById("loginBtn");
const transaction = document.getElementById("transactionPanel");


loginBtn.addEventListener("click",function(){
    loginPanel.style.display = "none";
    transaction.style.display = "block";
})



const getDeposit = document.getElementById("depositBtn");
const getWithdraw = document.getElementById("withdrawBtn");

 
const getWithdrawAmount = document.getElementById("withdrawAmount");


// deposit part
getDeposit.addEventListener("click", function(){
    const getAmount = document.getElementById("depositAmount");
    let Value = getValue(getAmount);
    if(!isNaN(Value) && Value >= 0)
    {
        updateAmount("deposit",Value);
        updateAmount("balance",Value);
        getAmount.value = "0";
    }
    else{
        getAmount.value = "0";
    }
})

// withdraw part
getWithdraw.addEventListener("click", function(){
    const getAmount = document.getElementById("withdrawAmount");
    let Value = getValue(getAmount);
    if(!isNaN(Value) && Value >= 0)
    {
        updateAmount("withdraw",Value);
        updateAmount("balance",-1*Value);
        getAmount.value = "0";
    }
    else{
        getAmount.value = "0";
    }
})


// common funtions
function updateAmount(id,updateValue){
    const getOld = document.getElementById(id);
    let oldValue = parseFloat(getOld.innerText);
    let total = oldValue + updateValue;
    getOld.innerText = total;
}
function getValue(getAmount){
    let Value = getAmount.value;
    Value = parseFloat(Value);
    return Value;
}