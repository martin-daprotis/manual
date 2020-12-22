
import styled from "styled-components";
import device from "../../Styles/device";
import theme from "../../Styles/themes/main"

const Container = styled.div`
  background-color: ${theme.colors.light_green};
  display: flex;
  justify-content:center;

`
const ColumnContainer = styled.div`
  margin: 80px 0 0;
  padding: 78px 40px 27px;
  background-color: ${theme.colors.light_green};
  display: flex;
  justify-content:center;
  flex-direction:column;
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
  top:28px;
  left:30%;

  @media ${device.maxMobileL} { 
    top:28px;
    left:0;
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

  @media ${device.maxMobileL},${device.maxTablet} { 
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
    color: ${theme.colors.dark_green};  
  }
  
  @media ${device.maxMobileL},${device.maxTablet} { 
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
  white-space: nowrap;

  & li:first-child{
    color: ${theme.colors.tealish};
    font-weight: 800;
    margin-bottom: 17px;  
  }

  & li{
    cursor: pointer;
    font-family: Helvetica, sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.57;
    letter-spacing: normal;
    color: ${theme.colors.dark_green};
  }
`

const Wording = styled.div`
  text-align:center;
  padding:10px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.83;
  letter-spacing: normal;
  text-align: center;
  color: rgba(108, 108, 108, 0.5);

  @media ${device.maxMobileL} { 
    margin-top:3em;
  }  
`

const Line = styled.span`
  width: 100%;
  margin: 2em auto;
  opacity: 0.3;
  border: solid 1px #6c6c6c;

  @media ${device.maxMobileL} { 
    width: 100%;
  }  

`
export {
  Container,
  ColumnContainer,
  RowContainer,
  List,
  SocialNetwork,
  Wording,
  LogoContainer,
  Logo,
  Line
}