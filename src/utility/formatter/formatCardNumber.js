export const formatCardNumber = (cardNumber) => {
  // Convert the number to a string (if it's a number)
  const cardStr = cardNumber.toString();

  // Check if the card number length is valid
  if (cardStr.length < 8) {
    throw new Error('Card number is too short');
  }

  // Take the first 4 digits, 4 asterisks, and the last 4 digits
  const first4 = cardStr.slice(0, 4);
  const last4 = cardStr.slice(-4);
  const masked = '*'.repeat(cardStr.length - 8); // Mask the middle digits

  return `${first4}${masked}${last4}`;
};
