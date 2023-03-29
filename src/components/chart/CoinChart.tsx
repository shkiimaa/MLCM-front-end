import React, { useEffect, useState } from "react";
import { init, dispose, CandleType, LineType } from "klinecharts";

import useGetInitialDataList from "../../hooks/useGetInitialDataList";
import useNewData from "../../hooks/useNewData";
import styled from "styled-components";

const CoinChart = () => {
  let chart: any;
  const [initialized, setInitialized] = useState(false);
  const { coinCandles } = useGetInitialDataList();
  const newData = useNewData();

  useEffect(() => {
    chart = init("coin-chart", {
      styles: {
        grid: { horizontal: { style: LineType.Dashed } },
        candle: {
          bar: {
            upColor: "#d24f45",
            downColor: "#1261c4",
            noChangeColor: "#888888"
          }
        }
      }
    });

    const fetchData = () => {
      chart.applyNewData(coinCandles);
      setInitialized(true);
    };
    fetchData();
    return () => {
      dispose("coin-chart");
    };
  }, [coinCandles]);

  useEffect(() => {
    chart = init("coin-chart");
    if (initialized) {
      chart.updateData(newData);
      return () => {
        dispose("coin-chart");
      };
    }
  }, [newData]);

  return (
    <div>
      <div id="coin-chart" className="coin-chart" style={{ width: "100%", height: "30rem" }} />
      <div className="chart-menu-container"></div>
    </div>
  );
};
export default CoinChart;

const StyleButton = styled.button`
  background-color: #fff;
  color: gray;
  font-weight: 500;
  width: 4.5rem;
  height: 1.5rem;
  margin: 1rem 0.5rem 0 0;
  border: 1px solid #d9d9d9;
  border-radius: 0.5rem;
`;
