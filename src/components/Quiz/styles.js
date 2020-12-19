
import styled from "styled-components";
import device from "../../Styles/device";
import theme from "../../Styles/themes/main"

const Container = styled.div`
  height: 20em;
  padding: 78px 40px 27px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 1s;

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }


`
const Question = styled.p`
  font-family: Helvetica;
  font-size:2em;
  color: #0c3c3d;
  text-align: center;
`

const Opt = styled.div`
  width: 7em;
  height: 2em;
  cursor:pointer;
  border-radius: 49.5px;
  background-color: ${theme.colors.tealish};
  font-family: Montserrat;
  font-size: 1.2em;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  text-align:center;
  line-height: 2em;
  letter-spacing: 2.4px;
  color: #ffffff;
  outline: none;

  &:hover{
    -webkit-box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.75);
  }
`
const OptionContainer = styled.div`
  display:flex;
  justify-content:space-evenly;
  width:30em;
  margin:auto;
`

const ImgOptionContainer= styled.div`
 display:flex;
  justify-content:space-evenly;
  width:80%;
  margin:auto;
`

const ImageContainer = styled.div`
  width:10em;
  height:10em;
  cursor:pointer;

  & :hover{
    transition:.2s;
    border-radius:5%;
    -webkit-box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
  }
`

export {
  Container,
  Question,
  Opt,
  ImageContainer,
  OptionContainer,
  ImgOptionContainer
}