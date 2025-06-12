function calculateFare() {
  const baseFare = 50; 
  const chargePerKm = 15; 

  
  const distance = parseFloat(document.getElementById("distance").value);

  if (isNaN(distance) || distance <= 0) {
    document.getElementById("result").innerHTML = "Tafadhali weka umbali sahihi!";
    return;
  }

  const additionalFare = distance * chargePerKm;
  const totalFare = baseFare + additionalFare;

  document.getElementById("result").innerHTML = `
    Uko kwote? Io ni <strong>${distance} km</strong>:<br>
    Ukikalia Pikipiki: <strong>KES ${baseFare}</strong><br>
    Mpaka Uko: <strong>KES ${additionalFare}</strong><br>
    <strong>Total: KES ${totalFare}</strong><br><br>
    Panda Pikipiki!
  `;
}
