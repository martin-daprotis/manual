import React, {useState} from 'react'
import {
  Card,
  Front,
  Back,
  CardSubtitle,
  CardDescription,
  ContentContainer,
  ImageContainer,
  NumberContainer,
  Subtitle,
  Title,
  Description,
  CardContainer
} from "./styles"
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'


  const CardComponent = React.memo(({data}) =>{
      const [isFlipped, setIsFlipped] = useState(false);

      const handleClick = () =>{
          setIsFlipped(!isFlipped);
      }

    return (
      <CardContainer>
        <Card>
          <Front images={data.images}>
            <h6>{data.title}</h6>
          </Front>
          <Back>
            <CardSubtitle>{data.subtitle.split('|').map(line =>
              <p>{line}</p>
              )}
            </CardSubtitle>
            <CardDescription>{data.detail}</CardDescription>
          </Back>
        </Card>
      </CardContainer>
    )
  })

  const RowComponent = ({data,side}) => {
    return(
      <ContentContainer side={side}>
            <ImageContainer side={side} images={data.images}/>
              <Title side={side}>{data.title}</Title>
              <Subtitle side={side}>{data.subtitle.replace('|','')}</Subtitle>
              <Description side={side}>{data.detail}</Description>
          <NumberContainer side={side}>{data.number}</NumberContainer>
      </ContentContainer>
    )
  }

const SimpleComp = ({side,data,...props}) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

    return <>
      {!isDesktop ? 
        <CardComponent data={data}/>
        :
        <RowComponent data={data} side={side}/>}
    </>

 }

 export default SimpleComp