import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-top: 100px;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 100px 100px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 70px;
  background: linear-gradient(
    93.07deg,
    #f52af5 4.14%,
    #dd37f5 31.35%,
    #219bf2 73.51%,
    #00adf2 95.21%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 4px;
  font-family: "Holtwood One SC", serif;
  text-fill-color: transparent;
`;

const Image = styled.div`
  width: 600px;
  height: 600px;
  padding: 20px;
  gap: 20px;
`;

const Card = styled.div`
  background: #272d3784;
  height: 600px;
  border-radius: 10px;
  overflow: hidden;
`;
const Content = styled.div`
  color: #adb9c7;
  padding: 20px;
  height: 410px;
  flex: 1.5;
  width: 1000px;
  font-family: Luminari;
  font-size: 30px;
`;

const Watch = () => {
  return (
    <>
      <Container>
        <Title id="watch">Watch Live</Title>
        <Wrapper>
          <Card>
            <Content></Content>
          </Card>
          <Image>
            <img
              src={require("../assets/WatchLive.png")}
              alt="nothing"
              height={700}
            />
          </Image>
        </Wrapper>
      </Container>
    </>
  );
};

export default Watch;