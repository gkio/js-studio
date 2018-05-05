import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const Wr = styled.div`
  margin-top: -5px;
  text-align: center;

`;

const Title = styled.div`
  font-size: 12px;
  color: #fff;
  font-weight: 300;
`;

const Header = ({ appName }) => (
  <Wr>
    <Title>
      {appName && `${appName} -
      `}
      JS Studio
    </Title>
  </Wr>
);

Header.propTypes = {
  appName: string,
};

export default Header;
