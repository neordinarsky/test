const currencyOne = document.querySelector('#currency-one')
const inputOne = document.querySelector('.amount-one')
const currencyTwo = document.querySelector('#currency-two')
const inputTwo = document.querySelector('.amount-two')
const btn = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')

const calculate = () => {
	fetch(
		`https://api.exchangerate.host/latest?access_key= klucz&base=${currencyOne.value}&symbols=${currencyTwo.value}`
	)
		.then(res => res.json())
		.then(data => console.log(data))
}

calculate()
