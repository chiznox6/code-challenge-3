function estimateTransactionFee() {
  const amount = parseFloat(document.getElementById('amount').value);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  const feePercentage = 0.015;
  let fee = amount * feePercentage;

  if (fee < 10) {
    fee = 10;
  } else if (fee > 70) {
    fee = 70;
  }

  const total = amount + fee;

  document.getElementById('output').innerHTML = `
    <p>Sending KES ${amount}:</p>
    <p>Calculated Transaction Fee: KES ${fee}</p>
    <p><strong>Total amount to be debited: KES ${total}</strong></p>
    <p>Send Money Securely!</p>
  `;
}
