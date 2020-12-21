
import styled from "styled-components";
import device from "../../Styles/device";
import theme from "../../Styles/themes/main"

const Wrapper = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Container = styled.div`
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
  font-size:1.8em;
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

  @media ${device.maxMobileL} { 
    width:100%;
  }

`

const ImgOptionContainer= styled.div`
  display:grid;
  grid-template-columns: repeat(6, 1fr);

  @media ${device.maxTablet} { 
    grid-template-columns: repeat(3, 1fr);
    padding-left: 1em;
  }  

  @media ${device.maxMobileL} { 
    grid-template-columns: repeat(2, 1fr);
    padding-left: 1em;
  }  

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

const Logo = styled.div`
  width: 40px;
  height: 37.4px;
  -webkit-background-size: auto;
  -moz-background-size: auto;
  -o-background-size: auto;
  background-size: auto;
  background-image: url(${props => props.images[0]});
  background-image: 
    image-set( url(${props => props.images[0]}) 1x, url(${props => props.images[1]}) 2x , url(${props => props.images[2]}) 3x );
  margin: 1em auto;
`

const Result = styled.div`
  position:relative;
  background-color:#e5f5f4;
  font-family: Montserrat;
  line-height: 1.4;
  font-size:1.2em;
  padding:3em 1em;
  margin: 0;
  color:#0c3c3d;

  & a {
    color:#0c3c3d;
  }

`

export {
  Wrapper,
  Container,
  Logo,
  Question,
  Opt,
  ImageContainer,
  OptionContainer,
  ImgOptionContainer,
  Result
}