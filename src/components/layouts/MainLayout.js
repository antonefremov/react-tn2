import React from 'react';
import PropTypes from 'prop-types';
import {Segment, Header, Container} from 'semantic-ui-react';
import Link from 'components/ui/Link';
import { postPaths } from 'helpers/routes';

const MainLayout = ({children}) => (
  <Container>
    <Logo />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

const Logo = () => (
  <Segment>
    <Header>
      <Link to={postPaths('')}>React Training Blog</Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by TN React Course
  </Segment>
);

export default MainLayout;
