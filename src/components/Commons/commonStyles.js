import styled from "styled-components";
import device from "../../Styles/device";

const Text1 = styled.p.attrs(props => ({
  color: props.color,
  width: props.width || '17em',
  size: props.size || '1.3em'
}))`
  color: ${props => props.color};
  width: ${props => props.width};
  font-size: ${props => props.size};
  & strong{
    color:${props => props.color || props.theme.colors.secondary};
  }

  @media ${device.maxMobileL} { 
    width: 15em;
  }
`
const Text1Disabled = styled.p.attrs(props => ({
  width: props.width,
  size: props.size || '1.3em'
}))`
  color:${props => props.theme.colors.primary};
  font-size: ${props => props.size};
  width: ${props => props.width};
  & strong{
    color:${props => props.theme.colors.primary};
  }
`

const Text2 = styled.p.attrs(props => ({
  color: props.color || props.theme.colors.primary
}))`
  color:${props => props.color};
  text-align:${props => props.alignment};
  font-size:1.1em;
  font-weight:500;
  margin: 7px 0;
`
const Text3 = styled(Text2)`
  text-align: center;
`

const MainTitle = styled.div.attrs(props => ({
  color: props.color || "#fff"
}))`
    color: ${props => props.color};
    text-transform: uppercase;
    text-align:${props => props.alignment};
    font-size:2em;
    font-weight:200;

    &>b{
      font-weight:700;
      margin-left: 0.3em;
      margin-right: 0.3em;
    }
  `
const Title2 = ({text,alignment,...props}) => {
  const textArr = text.split(' ');
  const title = (textArr.length>2) ? 
                  textArr.slice(0,textArr.length -2).join(' ') : 
                  textArr.slice(0,textArr.length -1).join(' ');

  const title2 = (textArr.length>2) ? 
                  textArr.slice(textArr.length -2,textArr.length).join(' ') : 
                  textArr.slice(textArr.length -1,textArr.length).join(' ');

  return (
          <MainTitle  {...props} alignment={alignment}>{title}<b>{title2}</b></MainTitle>
  )
};

const SubTitle = styled.p.attrs(props => ({
  color: props.color
}))` 
  text-transform: uppercase;
  color:${props => props.color || props.theme.colors.secondary};
  font-size:1em;
  font-weight:800;
  margin: 0;
`
const SubTitle2 = styled(SubTitle)`
  font-size:2em;
`

const Title1 = styled.p.attrs(props => ({
  color: props.color
}))` 
  color:${props => props.color || props.theme.colors.secondary};
  text-transform: uppercase;
  font-size:2em;
  font-weight:800;
`

export {
  Title1,
  Title2,
  SubTitle,
  SubTitle2,
  Text1,
  Text1Disabled,
  Text2,
  Text3
}