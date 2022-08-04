import React, { useState } from 'react';
import { 
  Container, 
  NavLinks, 
  Ancora, 
  Content, 
  Menu, 
  CloseSidebar,
  HeaderContainer
} from './style'

import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
    const [sidebar, setSidebar] = useState(false)
    const { asPath } = useRouter()

    const showSiderbar = () => setSidebar(!sidebar)

    function activeLink(path) {
        return asPath === `/${path}` ? 'active' : ''
    }

return (
    <Container>
      <Content>
        <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
        <HeaderContainer>
          <NavLinks sidebar={sidebar}>
            <CloseSidebar onClick={showSiderbar}><FaTimes /></CloseSidebar>
            <Link href="/">
              <Ancora className={activeLink('')} onClick={showSiderbar}>Home</Ancora>
            </Link>
            <Link href="projects">
              <Ancora className={activeLink('projects')} onClick={showSiderbar}>Projetos</Ancora>
            </Link>
            <Link href="contact">
              <Ancora className={activeLink('contact')} onClick={showSiderbar}>Contato</Ancora>
            </Link>
          </NavLinks>
        </HeaderContainer>
      </Content>
    </Container>
  )
};