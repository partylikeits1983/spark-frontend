import TOKEN_LOGOS from "@src/constants/tokenLogos";
import { Token } from "@src/entity/Token";

import TOKENS_JSON from "./tokens.json";

export const CONTRACT_ADDRESSES = {
  spotMarket: "0x7134802bdefd097f1c9d8ad86ef27081ae609b84de0afc87b58bd4e04afc6a23",
  tokenFactory: "0x6bd9643c9279204b474a778dea7f923226060cb94a4c61c5aae015cf96b5aad2",
  vault: "0xe8beef1c4c94e8732b89c5e783c80e9fb7f80fd43ad0c594ba380e4b5556106a",
  accountBalance: "0xa842702d600b43a3c7be0e36a0e08452b3d6fc36f0d4015fb6a06cb056cd312d",
  clearingHouse: "0xa4801149d4faa6e8421f130708bcd228780353241e2b35697e4e08d0b3672b20",
  perpMarket: "0xd628033650475290e0e8696266d0a0318364ff9c980f9ee5f4a4bb56ee85664a",
  pyth: "0x3cd5005f23321c8ae0ccfa98fb07d9a5ff325c483f21d2d9540d6897007600c9",
  proxy: "0x24c43c6cb3f0898ab46142fefa94a77414d7a6bb2619c41cd8725b161ac50c9d",
};

export interface Network {
  name: string;
  url: string;
}

export const NETWORKS: Network[] = [
  {
    name: "Fuel",
    url: "https://beta-5.fuel.network/graphql",
  },
];

export const EXPLORER_URL = "https://app.fuel.network/";

export const TOKENS_LIST: Token[] = Object.values(TOKENS_JSON).map(({ name, symbol, decimals, assetId, priceFeed }) => {
  return new Token({
    name,
    symbol,
    decimals,
    assetId,
    logo: TOKEN_LOGOS[symbol],
    priceFeed,
  });
});

export const TOKENS_BY_SYMBOL: Record<string, Token> = TOKENS_LIST.reduce((acc, t) => ({ ...acc, [t.symbol]: t }), {});

export const TOKENS_BY_ASSET_ID: Record<string, Token> = TOKENS_LIST.reduce(
  (acc, t) => ({ ...acc, [t.assetId.toLowerCase()]: t }),
  {},
);

export const INDEXER_URL = "https://orderbook-indexer.spark-defi.com";