import React, {useState} from 'react'
import {
  Card,
  CardSubtitle,
  CardDescription,
  ContentContainer,
  ImageContainer,
  NumberContainer,
  Subtitle,
  Title,
  Description,
} from "./styles"
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'


  const CardComponent = React.memo(({data}) =>{
      const [isFlipped, setIsFlipped] = useState(false);

      const handleClick = () =>{
          setIsFlipped(!isFlipped);
      }

    return (
      <Card onClick={handleClick} images={data.images}>
        <div  className={`card__inner ${isFlipped ? 'flipped':''}`}>
          <div className="card__face card__face--front"  >
            <h6>{data.title}</h6>
          </div>
          <div className="card__face card__face--back">
            <div className="card__content">
              <div className="card__header">
              <CardSubtitle>{data.subtitle.split('|').map(line =>
                <p>{line}</p>
                )}
              </CardSubtitle>
              </div>
              <div className="card__body">
                <CardDescription>{data.detail}</CardDescription>
              </div>
            </div>
          </div>
        </div>
      </Card>
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