import { ReactComponent as Bitcoin } from "../assets/coins/bitCoin.svg";
import { ReactComponent as Dash } from "../assets/coins/dash.svg";
import { ReactComponent as Litecoin } from "../assets/coins/litecoin.svg";
import { ReactComponent as Ripple } from "../assets/coins/ripple.svg";

export const coinsConfig = [
  {
    id: 1,

    icon: Bitcoin,
    label: "Bitcoin",
    value: "0.000242 BTC",
    usd: "0.125 USD",
  },
  {
    id: 2,

    icon: Litecoin,
    label: "Litecoin",
    value: "0.000242 LTC",
    usd: "0.125 USD",
  },
  {
    id: 3,

    icon: Ripple,
    label: "Ripple",
    value: "0.000242 XRP",
    usd: "0.125 USD",
  },
  {
    id: 4,

    icon: Dash,
    label: "Dash",
    value: "0.000242 XRP",
    usd: "0.125 USD",
  },
];
