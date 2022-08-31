import React from "react";
import TitleMolecule from "../molecules/Title";
import PostButton from "../molecules/buttons/GoPost";
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
          <PostButton />
        </Col>
        <Col>
          <ExploreMolecule />
        </Col>
      </Row>
    </Container>
  );
};

export default Title;