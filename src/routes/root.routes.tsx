
interface ICard {
  cardData : {
    cardNumber: string;
    cardName: string;
    cardCvv: string;
    cardExpiration: string;
  
  }
}

export type RootStackParamList = {
    Home: undefined;
    Form: undefined;
    Cards: undefined;
    CardSaved: ICard;
    Wallet: ICard;

};
