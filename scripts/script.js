const baseURL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/inr.json";
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");




const dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button")



for (let select of dropdowns) {
        for (let currCode in countryList) {

                let newOption = document.createElement("option");
                newOption.innerText = currCode;
                newOption.value = currCode;
                
                if(select.name === "from" && currCode === "USD"){
                        newOption.selected = "selected";
                }
                else if(select.name === "to" && currCode === "INR"){
                        newOption.selected = "selected";
                }
                
                select.append(newOption);
        }


        select.addEventListener("change", (event) => {
                UpdateFlag(event.target);

                });
}


const UpdateFlag = (element)=>{
        let currCode = element.value
        let countryCode = countryList[currCode];
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img = element.parentElement.querySelector("img");
        img.src = newSrc;
} 

btn.addEventListener("click",async  (event)=>{
        event.preventDefault();
        let amount = document.querySelector(".amount input");
        let amtVal = amount.value;
        if(amtVal === "" || amtVal<1){
                amtVal = 1;
                amount.value = 1;
        }


// api is not working on Upper case thats why converted into lower case
// console.log(fromCurr.value , toCurr.value)
const URL = `${baseURL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

let response = await fetch(URL);
        console.log(response);
})