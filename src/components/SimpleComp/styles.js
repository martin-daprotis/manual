
import styled from "styled-components";
import theme from "../../Styles/themes/main"

const ContentContainer = styled.div`
  position:relative;
  height: 30em;
  width:80%;
  margin:5em auto;

  & p {
      text-align:${props => props.side}
    }


`
const ImageContainer = styled.div`
  position:absolute;
  top:0;
  ${props =>  `${props.side}:9%;`}
  width: 25em;
  height:100%;
  z-index:2;
  background-repeat: no-repeat;
  background-size:cover; 
  border-radius:5px;
  background-image: url(${props => props.images[0]});
  background-image: 
    image-set( 
      url(${props => props.images[1]}) 1x, 
      url(${props => props.images[1]}) 2x ,
      url(${props => props.images[2]}) 3x 
    );
`
const NumberContainer = styled.div`
  position:absolute;
  top:-10%;
  ${props => `${props.side}:35% `};
  height:100%;
  width:60%;
  font-family: Montserrat, sans-serif;
  font-size: 30em;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #eeeeee;
  z-index:1;
`

const Title = styled.p`
  position:absolute;
  top:10em;
  ${props =>  `${props.side}:55%;`}
  font-family: Montserrat, sans-serif;
  font-size: 0.8em;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 2.4px;
  color: ${theme.colors.tealish};
  margin:0.4em;
  z-index:3;
`

const Subtitle = styled.p`
  position:absolute;
  top:7em;
  ${props =>  `${props.side}:55%;`}
  width:14em;
  font-family: Helvetica, sans-serif;
  font-size: 1.5em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  color: #0c3c3d;
  margin:0.4em;
  z-index:3;
`

const Description = styled.p`
  position:absolute;
  top:20em;
  ${props =>  `${props.side}:55%;`}
  width:30em;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.8em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.83;
  letter-spacing: normal;
  color: #0c3c3d;
  margin:0.4em;
  z-index:3;
`
const CardContainer = styled.div`
  width: 20em;
  height: 25em;
  margin: 100px auto 0;
  
`

const Card = styled.div`
  width:100%;
  height:100%;
  transition: transform  0.5s ease-in-out;
  perspective: 1000px;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  
  &:hover{
    transform: rotateY(180deg);
    -moz-transform: rotateY(180deg); 
    -webkit-transform: rotateY(180deg);
  }
`

const Figure = styled.figure`
  margin:0;
  position:absolute;
  width:100%;
  height:100%;
  border-radius: 16px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
  backface-visibility:hidden;
  -webkit-backface-visibility:hidden; /* Chrome and Safari */
  -moz-backface-visibility:hidden; /* Firefox */
  -ms-backface-visibility:hidden; /* Internet Explorer */
`


const Front = styled(Figure)`
  background-repeat: no-repeat;
  background-size:cover; 
  border-radius: 16px;
  background-image: url(${props => props.images[0]});
  background-image: 
    image-set( 
      url(${props => props.images[1]}) 1x, 
      url(${props => props.images[1]}) 2x ,
      url(${props => props.images[2]}) 3x 
    );
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:1;

  &:before {
        content: "";
        position: absolute;
        width:100%;
        height:30%;
        top:70%;
        border-radius:  0 0 16px 16px;
        background-image : linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,.2));
        backface-visibility:hidden;
        -webkit-backface-visibility:hidden; /* Chrome and Safari */
        -moz-backface-visibility:hidden; /* Firefox */
        -ms-backface-visibility:hidden; /* Internet Explorer */
      }

  & h6 {
      position:absolute;
      top:60%;
      color: ${theme.colors.tealish};
      font-size: 32px;
      z-index:2;
      text-align: center;
      backface-visibility:hidden;
      -webkit-backface-visibility:hidden; /* Chrome and Safari */
      -moz-backface-visibility:hidden; /* Firefox */
      -ms-backface-visibility:hidden; /* Internet Explorer */
    }

`

const Back = styled(Figure)`
  background-color: #e5f5f4;
  transform: rotateY(180deg);
  -moz-transform: rotateY(180deg); 
  -webkit-transform: rotateY(180deg);
  z-index:2;
`


const CardSubtitle = styled.p`
  position:absolute;
  top:0;
  left:50%;
  transform:translateX(-50%);
  width:20em;
  font-family: Helvetica, sans-serif;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  color: #0c3c3d;
  z-index:3;

  &  p {
      font-size: 1em;
      font-weight: 900;
      text-transform: uppercase;
      text-align: center;
      font-family: Montserrat, sans-serif;
      padding: 0 0.5em;
    }

`

const CardDescription = styled.p`
  position:absolute;
  top:12em;
  left:50%;
  transform:translateX(-50%);
  width:23em;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.8em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.83;
  letter-spacing: normal;
  color: #0c3c3d;
  margin:0.4em;
  z-index:3;

  &  h3 {
      font-size: 1.3em;
      font-weight: 600;
      margin-bottom: 15px;
    }

  &  p {
    font-family: Montserrat, sans-serif;
    line-height: 1.4;
  }

`

export {
  ContentContainer,
  ImageContainer,
  NumberContainer,
  Description,
  Title,
  Subtitle,
  CardContainer,
  Card,
  Front,
  Back,
  CardDescription,
  CardSubtitle,
}