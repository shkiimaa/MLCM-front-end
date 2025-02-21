import { atom } from "recoil";
import { MarketList, TickerInfo } from "types/types";

//실시간 코인 시세
export const coinTickers = atom<TickerInfo>({
  key: "coinTickers",
  default: {}
});

//코인 마켓 가져오기
export const coinMarkets = atom<MarketList>({
  key: "coinMarkets",
  default: []
});

//선택된 코인
export const coinSelect = atom<string>({
  key: "coinSelect",
  default: "KRW-BTC"
});

//차트 실시간데이터
export const liveCandleData = atom({
  key: "liveCandleData",
  default: {}
});

//전체코인 or 북마크 선택
export const menuSelect = atom<string>({
  key: "menuSelect",
  default: "all"
});
