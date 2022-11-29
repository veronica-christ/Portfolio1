import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
 <Section nopadding id="projects">
  <SectionDivider/>
  <br/>
  <SectionTitle>
    Projects
  </SectionTitle>
  <GridContainer>
    {projects.map((project)=>(
      <BlogCard key={project.id}>
<Img src={project.image} />
<TitleContent>
  <HeaderThree title>{project.title }</HeaderThree>
  <Hr/>
</TitleContent>
<CardInfo>{project.description}</CardInfo>

      </BlogCard>
    ))}
  </GridContainer>

 </Section>
);

export default Projects;