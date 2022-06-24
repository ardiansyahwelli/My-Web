import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #101522;

  @media scree and (max-width: 428px) {
    width: 100%;
  }
`;

export const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export const MainContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 911px){
      padding-right: 30px;
      padding-left: 30px;
  }
`;

export const MainCenter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;

export const MainTextHeader = styled.p`
  font-size: 48px;
  margin-bottom: 48px;
  line-height: 1.1;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const MainSubText = styled.p`
  font-size: 28px;
  color: grey;
  font-weight: 300;
`;