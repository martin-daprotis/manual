
import styled from "styled-components";
import device from "../../Styles/device";
import theme from "../../Styles/themes/main"

const Container = styled.div`
  margin: 80px 0 0;
  padding: 78px 40px 27px;
  background-color: #e5f5f4;
  display: flex;
  justify-content:center;

  @media ${device.maxMobileL} { 
    padding: 38px 10px 17px;
  }  

`
const LogoContainer = styled.div`
  flex: 0 0 30%;
  position:relative;
`

const Logo = styled.div`
  width: 5.5em;
  height: 5.6em;
  background-position:center;
  background-repeat: no-repeat;
  background-image: url(${props => props.images[1]});
  background-image: 
    image-set( 
      url(${props => props.images[1]}) 1x, 
      url(${props => props.images[1]}) 2x ,
      url(${props => props.images[2]}) 3x 
    );
  -webkit-background-size: auto;
  -moz-background-size: auto;
  -o-background-size: auto;
  background-size: auto;
  position:absolute;
  top:5%;
  left:30%;

  @media ${device.maxMobileL} { 
    top:0;
  }  

`


const RowContainer = styled.div`
  padding-top:10px;
  padding-left: 5em;
  padding-right:2em;
  position: relative; 
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  flex: 0 0 70%;

  @media ${device.maxMobileL} { 
    grid-template-columns: repeat(2, 1fr);
    padding-left: 1em;
  }  

`

const SocialNetwork  = styled.div`
  position:absolute;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  margin-right:3em;

  & svg {
    width:2em;
    height:2em;
    margin:0.4em;
    color: #0c3c3d;  
  }
  
  @media ${device.maxMobileL} { 
    transform:translateX(-15px);
    & svg {
      margin:0.5em;
    }
  }  

`

const List = styled.ul` 
  list-style-type: none;
  font-size: 0.85em;
  text-align:left;
  padding-left:1em;

  & li:first-child{
    color: ${theme.colors.tealish};
    font-weight: 800;
    margin-bottom: 17px;  
  }

  & li{
    cursor: pointer;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.57;
    letter-spacing: normal;
    color: #0c3c3d;
  }
`

const Wording = styled.div`
  text-align:center;
  padding:10px;
  font-size:0.7em;

  @media ${device.maxMobileL} { 
    margin-top:3em;
  }  
`
export {
  Container,
  RowContainer,
  List,
  SocialNetwork,
  Wording,
  LogoContainer,
  Logo
}