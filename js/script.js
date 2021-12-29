{
  const exchangePLN = 1.0;
  const exchangeEUR = 4.6;
  const exchangeCHF = 4.43;
  const exchangeUSD = 4.07;
  const exchangeGBP = 5.47;

  const currencyResult = (firstCurrency) => {
    const amountElement = document.querySelector(".js-amount");
    const amount = +amountElement.value;

    switch (firstCurrency) {
      case "PLN":
        return amount * exchangePLN;

      case "EUR":
        return amount * exchangeEUR;

      case "CHF":
        return amount * exchangeCHF;

      case "USD":
        return amount * exchangeUSD;

      case "GBP":
        return amount * exchangeGBP;
    }
  };

  const currencyFinishResult = (firstCurrency, secondCurrency) => {
    const result = currencyResult(firstCurrency);

    switch (secondCurrency) {
      case "PLN":
        return result / exchangePLN;

      case "EUR":
        return result / exchangeEUR;

      case "CHF":
        return result / exchangeCHF;

      case "USD":
        return result / exchangeUSD;

      case "GBP":
        return result / exchangeGBP;
    }
  };

  const updateResultText = (result, secondCurrency) => {
    const resultElement = document.querySelector(".js-result");

    resultElement.innerText = `${result.toFixed(2)} ${secondCurrency}`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const firstCurrencyElement = document.querySelector(".js-firstCurrency");
    const secondCurrencyElement = document.querySelector(".js-secondCurrency");

    const firstCurrency = firstCurrencyElement.value;
    const secondCurrency = secondCurrencyElement.value;

    const result = currencyFinishResult(firstCurrency, secondCurrency);

    updateResultText(result, secondCurrency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
