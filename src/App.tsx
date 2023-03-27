import React, { useState } from "react";
import CoinList from "./components/coinList/CoinList";
import CoinDetail from "./components/coinDetail/CoinDetail";
import Portfolio from "components/portfolio/Portfolio";
import Header from "components/header/Header";
import styled from "styled-components";

function App() {
  const [componentsControl, setComponentsControl] = useState("detail");
  return (
    <>
      <Container>
        <Header componentsControl={componentsControl} setComponentsControl={setComponentsControl} />
        <Layout>
          {componentsControl === "detail" && <CoinDetail />}
          {componentsControl === "portfolio" && <Portfolio />}
          <CoinList />
        </Layout>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #e9ecf1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Layout = styled.div`
  height: 80%;
  max-height: 80%;
  margin: 3rem auto;
  display: flex;
  padding: 0 10%;
`;

export default App;
