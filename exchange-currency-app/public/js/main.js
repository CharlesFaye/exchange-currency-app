const amount = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');
const myApiKey = "355ced270388c284ae325a22";
let baseCode = fromCurrency.value;
let targetCode = toCurrency.value;


 fromCurrency.addEventListener('change', function () {
 baseCode = this.value;
 
})


toCurrency.addEventListener('change', function() {
  targetCode = this.value;
})




/**
 * Fetches the currency conversion result from the ExchangeRate-API and updates the UI with the result.
 * Handles errors by displaying an appropriate message to the user.
 *
 * @async
 * @function fetchData
 * @returns {Promise<void>} A promise that resolves when the fetch and UI update are complete.
 */
async function fetchData() {
  
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${myApiKey}/pair/${baseCode}/${targetCode}/${amount.value}`);
    if (!response.ok) {
       result.textContent = `Impossible de récupérer les taux de change. Veuillez vérifier votre connexion ou réessayer plus tard`;
       result.classList.remove('text-green-600');
       result.classList.add('text-red-600');
    }

    const data = await response.json();
    result.textContent = data.conversion_result.toFixed(2);

    
  } catch (error) {
    console.error('Error' + error)
  }


}


convertBtn.addEventListener('click', fetchData) 
 



