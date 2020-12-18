import React, {useState} from 'react'
import {
  Container,
  InfoContainer,
  ContentContainer,
  ImageContainer,
  NumberContainer,
  Subtitle,
  Title,
  Description,
  Card
} from "./styles"
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'


    const CardComponent = React.memo(({data}) =>{
       const [isFlipped, setIsFlipped] = useState(false);

        const handleClick = () =>{
          console.log(isFlipped);
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
                <Subtitle>{data.subtitle.split('|').map(line =>
                  <p>{line}</p>
                  )}</Subtitle>
                </div>
                <div className="card__body">
                  <Description>{data.detail}</Description>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )
    })

    const RowComponent = ({data,side}) => {
      return(
        <ContentContainer>
            <Container side={side}>
              <ImageContainer images={data.images}/>
              <InfoContainer side={side}>
                <Title>{data.title}</Title>
                <Subtitle>{data.subtitle.replace('|','')}</Subtitle>
                <Description>{data.detail}</Description>
              </InfoContainer>
            </Container>
            <NumberContainer side={side}>{data.number}</NumberContainer>
        </ContentContainer>
      )
    }

const SimpleComp = ({side,data,...props}) => {
  console.log('RERENDERS')
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