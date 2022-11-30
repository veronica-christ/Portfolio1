import React from 'react';
import { DiAngularSimple, DiFirebase, DiJavascript, DiNodejs, DiPostgresql, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech" >
<SectionDivider/>
<br/>
<br/>
<SectionTitle>
  Technologies
</SectionTitle>
<SectionText>I have worked with multiple technologies while deeveloping my web applications. From Backend, Frontend and Design.</SectionText>
 <List>
  <ListItem>
  
    <ListContainer>
      <ListTitle>Front-end</ListTitle>
      <div>
    <DiAngularSimple size="5rem"/>
    <DiJavascript size="5rem"/>
    </div>
      <ListParagraph>Experience with
        <br/> Angular 2+ and JavaScript
      </ListParagraph>
    </ListContainer>
  </ListItem>

  <ListItem>
   
    
  
   
    <ListContainer>
      
      <ListTitle>Back-end</ListTitle>
      <div>
   
    <DiPostgresql size="5rem"/>
 <DiNodejs size="5rem"/>
    </div>
      <ListParagraph>Experience with
        <br/> Node and PostgresSql
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>

<ListContainer>
  <ListTitle>UI/UX</ListTitle>
  <ListParagraph>Experience with
    <br/>tools like Figma
  </ListParagraph>
</ListContainer>
</ListItem>
 </List>
  </Section>
);

export default Technologies;
