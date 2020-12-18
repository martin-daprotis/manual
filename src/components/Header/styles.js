import styled from "styled-components";
import device from "../../Styles/device";
import theme from "../../Styles/themes/main"

const BannerContainer = styled.div`
    height:40em;
    width: 100%;
    position:relative;
    @media ${device.maxMobileL} { 
    }
`
const ImageContainer = styled.div`
  height:40em;
  width: 100%;
  background-image: url(${props => props.images[0]});
  background-position: right;
  background-size: cover;
  background-image: 
    image-set( 
      url(${props => props.images[1]}) 1x, 
      url(${props => props.images[1]}) 2x ,
      url(${props => props.images[2]}) 3x 
    );
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    width: 35%;
    position:absolute;
    top:1em;
    left:5em;

    @media ${device.maxMobileL} { 
        justify-content: center;
        height: auto;
        width: auto;
        top: 2em;
        left: 1em;
    }

`

const Logo = styled.div`
  width: 40px;
  height: 37.4px;
  object-fit: contain;
  background-image: url(${props => props.images[0]});
  background-image: 
    image-set( url(${props => props.images[0]}) 1x, url(${props => props.images[1]}) 2x , url(${props => props.images[2]}) 3x );
  margin-bottom:3em;  
`

const Title = styled.p`
    width: 600px;
    height: 200px;
    margin:0.5em 0;
    text-align: left;
    font-family: Montserrat;
    font-size: 82px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #0c3c3d;
`
const Subtitle = styled.div`
  width: 400px;
  height: 80px;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  color: #0c3c3d;
  text-align: left;
`
const Button = styled.div`
  width: 150px;
  height: 20px;
  cursor:pointer;
  margin: 38px 390px 0 10px;
  padding: 17px 37px 16px 38px;
  border-radius: 49.5px;
  box-shadow: 0 10px 30px -20px rgba(0, 0, 0, 0.5);
  background-color: ${theme.colors.tealish};
  font-family: Montserrat;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 2.4px;
  color: #ffffff;
  outline: none;
  white-space:nowrap;
`

export {
    Title,
    Subtitle,
    BannerContainer,
    InfoContainer,
    Button,
    ImageContainer,
    Logo
}