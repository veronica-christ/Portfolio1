import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillGitlab, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (

  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: '#F46737 ', marginBottom: '20px' }}>

          <DiCssdeck size="3rem" /><Span  >Veronica Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">

          <NavLink >
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
    <SocialIcons href="https://www.linkedin.com/in/veronica-phago-211b061a6/">
        <a style={{ display: "flex", alignItems: "center", color: "#F46737 0%", marginBottom: '0 px' }}>
          <AiFillLinkedin size="3rem" />
        </a>
      </SocialIcons>
      <SocialIcons href="https://github.com/veronica-christ">
        <a style={{ display: "flex", alignItems: "center", color: "#F46737 0%", marginBottom: '0 px' }}>
          <AiFillGithub size="3rem" />
        </a>
      </SocialIcons>

      <SocialIcons url="https://linkedin.com/in/jaykimsly"
                    // fgColor='gray'
                    // bgColor='transparent' 
                    >
                       <AiFillLinkedin size="3rem" />
                      </SocialIcons>

     



    </Div3>
  </Container>
);

export default Header;
