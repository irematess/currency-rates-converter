class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=Wom2anSEy3PIxIXP8Ivo12xeWSW6o5u9W1n5djPP&base_currency=";
    }

    async exchange(amount, firstCurrency, secondCurrency){
    const response = await fetch(`${this.url}${firstCurrency}`);
    const result = await response.json();
    const exchangedResult = amount * result.data[secondCurrency];
    
    return exchangedResult;
    }
}