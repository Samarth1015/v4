import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Go (Golang)',
    'TypeScript / JavaScript',
    'React & Next.js',
    'Node.js & Express',
    'PostgreSQL / Supabase',
    'Kubernetes & Docker',
    'Redis & RabbitMQ',
    'Apache Kafka',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I’m Samarth, a 3<sup>rd</sup>-year Computer Science student at{' '}
              <a href="https://www.iiitvadodara.ac.in/" target="_blank" rel="noreferrer">
                IIIT Vadodara
              </a>{' '}
              who enjoys building distributed systems, polished web experiences, and anything that
              helps developers ship faster.
            </p>

            <p>
              I’ve recently been crafting AI agent infrastructure at{' '}
              <a href="https://www.omaverse.ai/" target="_blank" rel="noreferrer">
                Omaverse
              </a>
              , freelancing with{' '}
              <a href="https://crida.in/" target="_blank" rel="noreferrer">
                Crida
              </a>{' '}
              on a full-stack sports facility platform, and previously interned at{' '}
              <a href="https://rackbank.com/" target="_blank" rel="noreferrer">
                RackBank Datacenters
              </a>{' '}
              where I contributed upstream to the open-source{' '}
              <a href="https://github.com/rclone/rclone/pull/8613" target="_blank" rel="noreferrer">
                rclone
              </a>{' '}
              project.
            </p>

            <p>
              Outside of work you can find me at hackathons, tinkering with observability stacks, or
              mentoring juniors on modern web tooling. Here are a few technologies I’ve been using
              lately:
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/IMG-20251201-WA0020.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Samarth Acharya"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
