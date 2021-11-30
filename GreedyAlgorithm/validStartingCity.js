function validStartingCity(distances, fuel, mpg) {
  let city = 0;
  let minFuel = 0;
  let currentFuel = 0;

  for (let i = 1; i < distances.length; i++) {
    currentFuel += fuel[i - 1] * mpg - distances[i - 1];
    if (currentFuel < minFuel) {
      minFuel = currentFuel;
      city = i;
    }
  }
  return city;
}
