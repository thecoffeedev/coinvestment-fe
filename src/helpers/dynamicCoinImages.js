import algorand from "../assets/algorand.png";
import apecoin from "../assets/apecoin.png";
import binance_usd from "../assets/binance-usd.png";
import binancecoin from "../assets/binancecoin.png";
import bitcoin_cash from "../assets/bitcoin-cash.png";
import bitcoin from "../assets/bitcoin.png";
import chainlink from "../assets/chainlink.png";
import dai from "../assets/dai.png";
import decentraland from "../assets/decentraland.png";
import dogecoin from "../assets/dogecoin.png";
import ethereum_classic from "../assets/ethereum-classic.png";
import ethereum from "../assets/ethereum.png";
import filecoin from "../assets/filecoin.png";
import flow from "../assets/flow.png";
import litecoin from "../assets/litecoin.png";
import monero from "../assets/monero.png";
import polkadot from "../assets/polkadot.png";
import quant_network from "../assets/quant-network.png";
import ripple from "../assets/ripple.png";
import shiba_inu from "../assets/shiba-inu.png";
import solana from "../assets/solana.png";
import tether from "../assets/tether.png";
import usd_coin from "../assets/usd-coin.png";
import wrapped_bitcoin from "../assets/wrapped-bitcoin.png";


const imageObject = {
  algorand: algorand,
  "binance-usd": binance_usd,
  binancecoin: binancecoin,
  "bitcoin-cash": bitcoin_cash,
  bitcoin: bitcoin,
  chainlink: chainlink,
  dai: dai,
  decentraland: decentraland,
  dogecoin: dogecoin,
  apecoin: apecoin,
  "ethereum-classic": ethereum_classic,
  ethereum: ethereum,
  filecoin: filecoin,
  flow: flow,
  litecoin: litecoin,
  monero: monero,
  polkadot: polkadot,
  "quant-network": quant_network,
  ripple: ripple,
  "shiba-inu": shiba_inu,
  solana: solana,
  "usd-coin": usd_coin,
  tether: tether,
  "wrapped-bitcoin": wrapped_bitcoin,
}

const dynamicCoinImages = (bundle) => {
  return imageObject[bundle]
};

export default dynamicCoinImages;