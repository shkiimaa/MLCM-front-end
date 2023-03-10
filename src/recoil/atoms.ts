import { atom } from "recoil";
import { marketName, tickerInfo } from "Types/types";

//실시간 코인 시세
export const coinTickers = atom<tickerInfo>({
  key: "coinTickers",
  default: {}
});

//코인 마켓 가져오기
export const coinMarkets = atom<marketName>({
  key: "coinMarkets",
  default: {
    KRW: [],
    BTC: []
  }
});

//선택된 코인
export const coinSelect = atom<string>({
  key: "coinSelect",
  default: "KRW-BTC"
});

//코인 차트데이터
export const coinCandle = atom({
  key: "coinCandle",
  default: {}
});

//차트 실시간데이터
export const liveCandleData = atom({
  key: "liveCandleData",
  default: {}
});

//북마크 정보
export const userBookmark = atom({
  key: "userBookmark",
  default: {}
});
