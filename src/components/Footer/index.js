import React from 'react';
import {Container,
        ColumnContainer,
        RowContainer,
        List,SocialNetwork,
        Wording,
        LogoContainer,
        Logo,
        Line
} from "./styles";
import {Facebook} from "@styled-icons/boxicons-logos/Facebook";
import {Linkedin} from "@styled-icons/boxicons-logos/Linkedin";
import {Twitter} from "@styled-icons/boxicons-logos/Twitter";


const footerData = [
  [
        "PRODUCT",
        'Popular',
        'Trending',
        'Guided',
        'Products'
  ],
  [
        "COMPANY",
        'Press Releases',
        'Mission',
        'Strategy',
        'About'
  ],
  [
        "INFO",
        'Support',
        'Customer Service',
        'Get Started Guide'
  ]
]

const index = ({data}) => {
  data = footerData;
  return (
      <ColumnContainer>
      <Container>
        <LogoContainer>
          <Logo  images={['./media/logo/manual-symblol.png','./media/logo/manual-symblol@2x.png','./media/logo/manual-symblol@3x.png']}/>
        </LogoContainer>
        <RowContainer>
          {data.map((ul, index) => (
            <List key={index}>
              {ul.map((li, indexI) => 
                <li key={indexI}>{li}</li>  
              )}
            </List>
          ))}
          <List>
            <li>FOLLOW US</li>
            <li>
              <SocialNetwork>
                <Facebook/>
                <Twitter/>
                <Linkedin/>
              </SocialNetwork>
            </li>
          </List>
        </RowContainer>
      </Container>
      <Line/>
      <Wording>
      © 2019 Manual. All rights reserved.
      </Wording>
      </ColumnContainer>
  );
};

index.defaultTypes = {
  data:[]
};

export default index;