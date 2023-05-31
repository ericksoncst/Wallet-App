
interface ICard {
  cardData : {
    cardNumber: string;
    cardName: string;
    cardCvv: string;
    cardExpiration: string;
    id: string;
  }
}

export type RootStackParamList = {
    Home: undefined;
    Form: undefined;
    Cards: undefined;
    CardSaved: ICard;
    Wallet: undefined;

};
