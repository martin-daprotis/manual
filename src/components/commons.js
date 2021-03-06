
import styled from "styled-components";
import device from "../Styles/device";
import theme from "../Styles/themes/main"


const Title = styled.p`
  height: 48px;
  margin-top: 3em;
  margin-bottom:0;
  margin-left:auto;
  margin-right:auto;
  font-family: Helvetica, sans-serif;
  font-size: 2.5em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: ${theme.colors.dark_green};

  @media ${device.maxMobileL} { 
    font-size: 2em;
  }

`

export {
  Title
}