export  function maskCreditCard(card: string) {
  const maskedCard = '**** **** **** '+card?.substr(-4);
  return maskedCard;
      
}