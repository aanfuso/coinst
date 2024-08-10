import {
  BitcoinIcon,
  EthereumIcon,
  LitecoinIcon,
  BitcoinCashIcon,
} from "lib/icons";


const BTC_USD = 'BTC-USD';
const ETH_USD = 'ETH-USD';
const LTC_USD = 'LTC-USD';
const BCH_USD = 'BCH-USD';

export const LISTED_PRODUCTS = [
  { icon: (<BitcoinIcon fontSize="small"/>), value: BTC_USD },
  { icon: (<EthereumIcon fontSize="small"/>), value: ETH_USD },
  { icon: (<LitecoinIcon fontSize="small"/>), value: LTC_USD },
  { icon: (<BitcoinCashIcon fontSize="small"/>), value: BCH_USD  },
];

export const FOOTER_PROPS = {
  topText: 'Made with ❤️ by',
  bottomText: 'Agustin Anfuso',
  url: 'https://anfu.space',
};
