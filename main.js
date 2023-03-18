async function calculate() {
const country = document.getElementById('country').value;
const age = document.getElementById('age').value;
// Get life expectancy data for the selected country from World Bank API
const lifespan = await getLifespan(country);

// Calculate number of weeks between age and average lifespan
const weeksRemaining = (lifespan - parseInt(age)) * 52;
// Calculate number of additional pizzas based on once-per-week consumption
const additionalPizzas = weeksRemaining;

// Alert the user of the result
alert(`If you have pizza once per week, you have ${additionalPizzas} more pizzas in your life based on the average lifespan in ${country}`);
}

async function getLifespan(country) {
  const response = await fetch(`http://api.worldbank.org/v2/country/${country}/indicator/SP.DYN.LE00.IN?format=json&date=2020`);
  const data = await response.json();
  return parseInt(data[1][0]['value']);
}