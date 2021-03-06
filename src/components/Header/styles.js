import styled from "styled-components";
import device from "../../Styles/device";
import theme from "../../Styles/themes/main"

const BannerContainer = styled.div`
    height:40em;
    width: 100%;
    position:relative;
    background-image: url(${props => props.images[0]});
    background-image: 
      image-set( 
        url(${props => props.images[1]}) 1x, 
        url(${props => props.images[1]}) 2x ,
        url(${props => props.images[2]}) 3x 
      );
    background-repeat: no-repeat;
    background-size:cover; 
    background-position: bottom right;

      @media ${ `${device.maxMobileL} , ${device.maxTablet}`}  { 
          &:after {
              content: '';
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              z-index: 1;
              background-color: rgba(0,0,0,0.6);
              width:100%;
              height:100%;
            }
     }

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
  -webkit-background-size: auto;
  -moz-background-size: auto;
  -o-background-size: auto;
  background-size: auto;
  background-image: url(${props => props.images[0]});
  background-image: 
    image-set( url(${props => props.images[0]}) 1x, url(${props => props.images[1]}) 2x , url(${props => props.images[2]}) 3x );
  margin-bottom:3em;  
  z-index:3;

  @media ${device.maxMobileL} { 
    color:${theme.colors.tealish};
    }
`

const Title = styled.div`
  width: 600px;
  height: 200px;
  z-index:2;
  text-align: left;
 
    & span {
      font-family: Montserrat, sans-serif;
      font-size: 82px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: normal;
      color: ${theme.colors.dark_green};
    }

   @media ${device.maxMobileL} { 
      width: 300px;
      & span {  
        color:#FFF;
        font-size:3em;;
        text-align:left;
      }
    }

    @media ${device.maxTablet} { 
      width: 300px;
      & span {  
        color:#FFF;
        font-size:3.5em;;
        text-align:left;
      }
    }
`
const Subtitle = styled.div`
  max-width: 300px;
  height: 80px;
  z-index:2;
  margin-bottom:5em;
 
    & p {
      font-family: Helvetica, sans-serif;
      font-size: 1.1em;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.44;
      letter-spacing: normal;
      color: ${theme.colors.dark_green};
      text-align: left;
      margin:0;
    }

   @media ${ `${device.maxMobileL} , ${device.maxTablet}`} { 
     margin-top:1em;
    & p { color:${theme.colors.tealish}; }
    }
`
const Button = styled.div`
  width: 10.5em;
  height: 1.2em;
  line-height: 1.2em;
  cursor:pointer;
  padding: 17px 37px 16px 38px;
  border-radius: 49.5px;
  box-shadow: 0 10px 30px -20px rgba(0, 0, 0, 0.5);
  background-color: ${theme.colors.tealish};
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 2.4px;
  color: #ffffff;
  outline: none;
  white-space:nowrap;
  z-index:2;

  &:hover{
    -webkit-box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.75);
    
    @media ${device.maxMobileL} { 
      -webkit-box-shadow: 0px 0px 20px 1px rgba(255,255,255,0.75);
      -moz-box-shadow: 0px 0px 20px 1px rgba(255,255,255,0.75);
      box-shadow: 0px 0px 10px 1px rgba(255,255,255,0.75);
    }
  }

  @media ${ `${device.maxMobileL} , ${device.maxTablet}`} { 
      position: absolute;
      bottom: -8em;
      left: -1em;
    }

`

export {
    Title,
    Subtitle,
    BannerContainer,
    InfoContainer,
    Button,
    Logo
}