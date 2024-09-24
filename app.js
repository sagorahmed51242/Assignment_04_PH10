// current amount of mine
let amountOfMine = 50500;
const myBalance = document.getElementById("amount_of_mine");
myBalance.innerText = amountOfMine;
const balance = parseFloat(myBalance.innerText);


// get donation and history btn
const donationBtn = document.getElementById("donation_btn");
const historyBtn = document.getElementById("history_btn");

// add event lister in the donation and history btn and call function
donationBtn.addEventListener("click", () => {
    showDonationSection();
})

historyBtn.addEventListener("click", () => {
    showHistorySection();
})


// get noakhali donation section and buttons
let noakhaliDonation = 2500;
const totalDonationForNoakhali = document.getElementById("noakhali_amount");
totalDonationForNoakhali.innerText = noakhaliDonation;
const donateBtnForNoakhali = document.getElementById("donate_for_noakhali_btn");

donateBtnForNoakhali.addEventListener("click", () => {
    const amountFieldNoakhali = document.getElementById("amount_for_noakhali")
    const amountValue = amountFieldNoakhali.value;
    const amountNumber = parseFloat(amountValue);

    if(amountValue === ""){
        alert("Please Enter Amount.");
    }else if(amountNumber < 0){
        alert("Please Enter Positive Number.");
    }else if(amountNumber > balance){
        alert("Insufficient Balance. Enter smaller Amount.");
    }else{
        showModal();
        calculateDonationMoney(amountNumber,noakhaliDonation,totalDonationForNoakhali);
        createDonationHistory(amountNumber,"Taka is Donated for famine-2024 at Feni, Bangladesh");
    }
    amountFieldNoakhali.value = "";

})



// get feni donation section and buttons
let feniDonation = 3000;
const totalDonationForfeni = document.getElementById("feni_amount");
totalDonationForfeni.innerText = feniDonation;
const donateBtnForFeni = document.getElementById("donate_for_feni_btn");

donateBtnForFeni.addEventListener("click", () => {
    const amountFieldFeni = document.getElementById("amount_for_feni");
    const amountValue = amountFieldFeni.value;
    const amountNumber = parseFloat(amountValue);

    if(amountValue === ""){
        alert("Please Enter Amount.")
    }else if(amountNumber < 0){
        alert("Please Enter Positive Number.");
    }else if(amountNumber > balance){
        alert("Insufficient Balance. Enter smaller Amount.");
    }else{
        showModal();
        calculateDonationMoney(amountNumber,feniDonation,totalDonationForfeni);
        createDonationHistory(amountNumber,"Taka is Donate for Flood Relief in Feni,Bangladesh");
    }

    amountFieldFeni.value = "";

})



// get aid injure donation section and buttons
let aidInjureDonation = 3000;
const totalDonationForAidInjure = document.getElementById("aid_injure_amount");
totalDonationForAidInjure.innerText = aidInjureDonation;
const donateBtnForAidInjure = document.getElementById("donate_for_aid-injure_btn");

donateBtnForAidInjure.addEventListener("click", () => {
    const amountFieldForAidInjure = document.getElementById("amount_for_aid_injure");
    const amountValue = amountFieldForAidInjure.value;
    const amountNumber = parseFloat(amountValue);

    if(amountValue === ""){
        alert("Please Enter Amount.")
    }else if(amountNumber < 0){
        alert("Please Enter Positive Number.");
    }else if(amountNumber > balance){
        alert("Insufficient Balance. Enter smaller Amount.");
    }else{
        showModal();
        calculateDonationMoney(amountNumber,aidInjureDonation,totalDonationForAidInjure);
        createDonationHistory(amountNumber,"Taka is Donate for Aid for Injured in the Quota Movement")
    }

    amountFieldForAidInjure.value = "";
})
