document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#currency-converter").addEventListener("submit" , async (event)=>{
        event.preventDefault();
        const {target:{from,to,amount}}=event;

        let headers = new Headers();
        headers.append("apikey", "DcylUtBy2y4z6rYGndAi1KImUt2ffvxq");

        const requestOptions = {
            method:"GET",
            headers,
        }

        
        //we can use under the comment code.

        // fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
        // .then(response=> response.json())
        // .then(data => {

        //     let { info, date, query:{ to },result}=data;
        //     document.querySelector("#result").textContent=`As per the exchange rate :${info.rate.toFixed(2)} for ${date} => converted value in ${to} is ${result.toFixed(2)}`;
        // })
        // .catch(error => console.log(error));

        try{
            let response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions);
        const data = await response.json();
        let { info, date, query:{ to : convertedTo },result}=data;
        document.querySelector("#result").textContent=`As per the exchange rate :${info.rate.toFixed(2)} for ${date} => converted value in ${convertedTo} is ${result.toFixed(2)}`;
        }
        catch(error){
            alert('enter right things 🤝');
        }
        finally{
            console.log("thank you !");
        }
    })
})