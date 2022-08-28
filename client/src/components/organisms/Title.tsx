import React from "react";
import TitleMolecule from "../molecules/Title";
import PostMolecule from "../molecules/buttons/Post";
import ExploreMolecule from "../molecules/buttons/Explore";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Title = () => {
  return (
    <Container>
      <Row>
        <TitleMolecule />
      </Row>
      <Row>
        <Col>
          <PostMolecule />
        </Col>
        <Col>
          <ExploreMolecule />
        </Col>
      </Row>
    </Container>
  );
};

export default Title;