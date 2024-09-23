function showDonationSection(){
    document.getElementById("donation_section").classList.remove("hidden");
    document.getElementById("history_section").classList.add("hidden");

    const historyBtn = document.getElementById("history_btn");
    const donationBtn = document.getElementById("donation_btn");
    historyBtn.classList.remove("bg-[#B4F461]","font-bold","text-black");
    historyBtn.classList.add("border");
    donationBtn.classList.add("bg-[#B4F461]","font-bold");
    donationBtn.classList.remove("border");

}


function showHistorySection(){
    document.getElementById("donation_section").classList.add("hidden");
    document.getElementById("history_section").classList.remove("hidden");

    const historyBtn = document.getElementById("history_btn");
    const donationBtn = document.getElementById("donation_btn");
    historyBtn.classList.add("bg-[#B4F461]","font-bold","text-black");
    historyBtn.classList.remove("border");
    donationBtn.classList.remove("bg-[#B4F461]","font-bold");
    donationBtn.classList.add("border");
}


function showModal(){

    document.getElementById("modal").classList.add("flex");
    document.getElementById("modal").classList.remove("hidden");
    document.getElementById("close_btn").addEventListener("click", () => {
        document.getElementById("modal").classList.add("hidden");
    })
}


function calculateDonationMoney(amount,initialAmount,id){
    initialAmount += amount;
    amountOfMine -= amount;
    id.innerText = initialAmount;
    myBalance.innerText = amountOfMine;

}

function showDateAndTime() {
    const date = new Date();
    const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = dayOfWeek[date.getDay()];
    const day = date.getDate();
    const monthName = monthsOfYear[date.getMonth()];
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');


    const fullDateAndTime =`Date: ${dayName} ${monthName} ${day} ${year} ${hours}:${minutes}:${seconds} GMT +0600 (Bangladesh Standard Time)`;

    return fullDateAndTime;

}

function createDonationHistory(amount,text){
    const date = new Date();
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="border py-4 px-5 rounded-lg mb-4">
        <h1 class="font-bold text-lg">${amount} ${text}</h1>
        <h1 class="text-md text-slate-500 pt-3">${showDateAndTime()}</h1>
    </div>
    `;
    document.getElementById("history_section").appendChild(div);
}