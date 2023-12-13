const temperatureData = {
    'New York':20,
    'London':18,
    'Paris':22,
    'Tokyo':25,
    'Sydney':28,
}

// Define a memoization function
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}

async function getTemperatureForCity(city){
    
    return temperature
}