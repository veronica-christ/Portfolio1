import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
<LeftSection>
  <SectionTitle main center >
Hi I am Veronica,<br/>
Thank you for visiting my portfolio!
  </SectionTitle>
  <SectionText>
   Here you will get to know me, learn about my experiences, abilities and skills!  
  </SectionText>
  <Button onClick={()=>window.location='mailto:veronicaphago777@gmail.com'}>Contact me</Button>
 
</LeftSection>
  </Section>
);

export default Hero;