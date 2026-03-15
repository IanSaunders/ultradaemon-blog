import React from "react";
import styled from "@emotion/styled";
import Section from "@components/Section";
import mediaqueries from "@styles/media";

const About = () => {
  return (
    <Section>
      <Container>
        <Heading>About</Heading>
        <Body>
          <p>
            Hi, I'm Ian Saunders — software engineer, ultramarathon runner, and
            occasional writer.
          </p>
          <p>
            I work on payment systems and enjoy thinking about the
            intersection of endurance sport and technology. This blog is where I
            document long runs, technical explorations, and whatever else catches
            my attention.
          </p>
          <p>
            When I'm not at a computer you'll find me on trails, usually
            somewhere with poor cell service.
          </p>
        </Body>
      </Container>
    </Section>
  );
};

export default About;

const Container = styled.div`
  padding: 100px 0;

  ${mediaqueries.desktop`
    padding: 80px 0;
  `}

  ${mediaqueries.tablet`
    padding: 60px 0;
  `}
`;

const Heading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  line-height: 1.15;
  color: ${p => p.theme.colors.primary};
  margin-bottom: 40px;

  ${mediaqueries.desktop`
    font-size: 38px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

const Body = styled.div`
  max-width: 680px;
  font-size: 18px;
  line-height: 1.75;
  color: ${p => p.theme.colors.primary};

  p {
    margin-bottom: 1.5em;
  }

  ${mediaqueries.phablet`
    font-size: 16px;
  `}
`;
