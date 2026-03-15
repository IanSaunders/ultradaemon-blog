import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const aboutQuery = graphql`
  {
    allArticle(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          slug
          title
          hero {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 80) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }
      }
    }
  }
`;

const About = () => {
  const data = useStaticQuery(aboutQuery);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    const articles = data.allArticle.edges
      .filter(({ node }) => node.hero && node.hero.childImageSharp)
      .map(({ node }) => node);
    if (articles.length > 0) {
      setFeatured(articles[Math.floor(Math.random() * articles.length)]);
    }
  }, []);

  return (
    <>
      <Header>
        <HeroHeading>About</HeroHeading>
        <Subtitle>Ian Saunders · Software Engineer & Ultramarathon Runner</Subtitle>
      </Header>

      {featured && (
        <FeaturedLink to={featured.slug}>
          <ImageContainer>
            <Img
              fluid={featured.hero.childImageSharp.fluid}
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
              imgStyle={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </ImageContainer>
          <RaceCaption>
            <RaceTitle>{featured.title}</RaceTitle>
          </RaceCaption>
        </FeaturedLink>
      )}

      <BodyContainer>
        <p>
          Hi, I'm Ian Saunders — software engineer, ultramarathon runner, and
          occasional writer.
        </p>
        <p>
          I work on payment systems and enjoy thinking about the intersection of
          endurance sport and technology. This blog is where I document long
          runs, technical explorations, and whatever else catches my attention.
        </p>
        <p>
          When I'm not at a computer you'll find me on trails, usually somewhere
          with poor cell service.
        </p>
      </BodyContainer>
    </>
  );
};

export default About;

const Header = styled.header`
  position: relative;
  z-index: 10;
  margin: 100px auto 70px;
  padding-left: 68px;
  max-width: 749px;

  ${mediaqueries.desktop`
    padding-left: 53px;
    max-width: calc(507px + 53px);
  `}

  ${mediaqueries.tablet`
    padding-left: 0;
    max-width: 480px;
  `}

  ${mediaqueries.phablet`
    margin: 170px auto 80px;
    padding: 0 40px;
  `}
`;

const HeroHeading = styled.h1`
  font-size: 48px;
  font-family: ${p => p.theme.fonts.serif};
  margin-bottom: 25px;
  font-weight: bold;
  line-height: 1.32;
  color: ${p => p.theme.colors.primary};

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 36px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.grey};

  ${mediaqueries.phablet`
    font-size: 14px;
  `}
`;

const FeaturedLink = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.2),
    0 18px 36px -18px rgba(0, 0, 0, 0.22);
`;

const ImageContainer = styled.div`
  position: relative;
  height: 280px;
  width: 100%;
  overflow: hidden;

  ${mediaqueries.tablet`
    height: 200px;
  `}
`;

const RaceCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 14px 24px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
`;

const RaceTitle = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  font-family: ${p => p.theme.fonts.sansSerif};
`;

const BodyContainer = styled.article`
  padding: 80px 0 80px 68px;

  p {
    max-width: 680px;
    font-size: 21px;
    line-height: 1.756;
    color: ${p => p.theme.colors.primary};
    font-family: ${p => p.theme.fonts.sansSerif};
    margin-bottom: 1.45em;
  }

  ${mediaqueries.desktop`
    padding-left: 53px;
  `}

  ${mediaqueries.tablet`
    padding: 60px 4rem;

    p {
      max-width: 100%;
    }
  `}

  ${mediaqueries.phablet`
    padding: 60px 40px;

    p {
      font-size: 18px;
    }
  `}
`;
