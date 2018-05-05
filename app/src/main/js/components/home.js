import React from 'react';
import styled from 'styled-components';

const Wr = styled.div`
  background-color: #ccc;
`;


const Home = () => (
  <Wr>
    <h1 className="hello">
      World
    </h1>
  </Wr>
);

export default Home;
