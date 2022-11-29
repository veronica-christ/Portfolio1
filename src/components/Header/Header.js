import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillGitlab, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
 
 <Container>
  <Div1>
   <Link href="/">
    <a style={{display:"flex", alignItems:"center", color:"goldenrod", marginBottom:'20px'}}>

     <DiCssdeck size="3rem"/><Span  >Veronica Portfolio</Span>
    </a>
    </Link>
    </Div1>
     <Div2>
      <li>
        <Link href="#projects">
          <NavLink>
            Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>
            Technologies
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>
            About
          </NavLink>
        </Link>
      </li>
     </Div2>
     <Div3>

      <SocialIcons href="https://github.com/veronica-christ">
<AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://gitlab.thedigitalacademy.co.za/veronica-P">
     <AiFillGitlab size="3rem"></AiFillGitlab>
     </SocialIcons>
     <SocialIcons href="https://www.linkedin.com/in/veronica-phago-211b061a6/">
<AiFillLinkedin size="3rem"/>
      </SocialIcons>
 
    
     
     </Div3>
  </Container>
);

export default Header;
