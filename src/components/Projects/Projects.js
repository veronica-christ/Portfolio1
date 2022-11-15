import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
 <Section nopadding id="projects">
  <SectionDivider/>
  <SectionTitle>
    Projects
  </SectionTitle>
  <GridContainer>
    {[{title: 'Survello',
    description:'Survello is an application that allows users to conduct surveys and for their desired targets to take those surveys'}
  ,{title: 'Kontrak',
  description:'Kontrak is an app that serves as a bridge between people seeking services from contractors, and contractors looking to supply on that demand. The app will help contractors to advertise their work, and service seekers to find contractors by submitting their requirements, comparing prices and reading reviews about previous services. Service seekers can also track the job as it gets done.'},
  {title: 'Expense Tracker',
  description:'This is a simple expense tracking app that allows users to'}
,].map((project)=>(
      <div>
        {project.title }
        {project.description}
      </div>
    ))}
  </GridContainer>

 </Section>
);

export default Projects;