import React from 'react';
import {Container,RowContainer,List,SocialNetwork,Wording,LogoContainer,Logo} from "./styles";
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
        'Ger Started Guide'
  ]
]

const index = ({data}) => {
  data = footerData;
  return (
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
            <li>Seguinos</li>
            <li>
              <SocialNetwork>
                <Facebook/>
                <Twitter/>
                <Linkedin/>
              </SocialNetwork>
            </li>
          </List>
        </RowContainer>
        {/* <Wording>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit eros eu neque tincidunt, commodo tristique sapien tempor. Ut vitae pretium nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque non urna efficitur, lacinia magna vel, volutpat libero. Phasellus consequat, eros et aliquam tincidunt, nulla ante pulvinar orci, at pretium quam dui ut purus. Nunc mollis eros id leo laoreet, a congue urna elementum. Nam lacinia cursus placerat. Integer tempor tortor augue, in venenatis quam maximus ac. 
        </Wording> */}
      </Container>
  );
};

index.defaultTypes = {
  data:[]
};

export default index;