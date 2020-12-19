import React, {useEffect} from 'react'
import {
    BannerContainer,
    InfoContainer,
    Title,
    Subtitle,
    Button,
    Logo
} from "./styles"

const Header = ({takeQuiz,...props}) => {
     return(
         <BannerContainer images={['./media/hair-cat-header.png','./media/hair-cat-header@2x.png','./media/hair-cat-header@3x.png']}>
             <InfoContainer>
               <Logo  images={['./media/logo/manual-symblol.png','./media/logo/manual-symblol@2x.png','./media/logo/manual-symblol@3x.png']}/>
                <Title>
                  <span>BE GOOD</span>
                  <br/>
                  <span>TO YOURSELF</span>
                </Title>
                  <Subtitle>
                      <p>
                        We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.
                      </p>
                  </Subtitle> 
                <Button onClick={takeQuiz}>TAKE THE QUIZ</Button>
             </InfoContainer>
         </BannerContainer>
     )
 }

 export default Header