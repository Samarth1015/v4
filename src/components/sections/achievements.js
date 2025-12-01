import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAchievementsSection = styled.section`
  max-width: 900px;

  .achievements-list {
    ${({ theme }) => theme.mixins.resetList};
    margin-top: 50px;
  }

  .achievement-item {
    position: relative;
    padding-left: 30px;
    margin-bottom: 25px;
    color: var(--light-slate);
    font-size: var(--fz-lg);

    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--green);
      font-size: var(--fz-xl);
      line-height: 20px;
    }

    strong {
      color: var(--lightest-slate);
      font-weight: 600;
    }
  }
`;

const Achievements = () => {
  const revealContainer = useRef(null);
  const revealItems = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
    revealItems.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const achievements = [
    {
      title: '3rd Place',
      description: 'at HackTheMountains 5.0 Hackathon organized by UpsurgeLabs',
    },

    {
      title: '1st Place in Web Development',
      description: 'IIITV Hackathon 2025',
    },
    {
      title: 'Most Valuable Player (Basketball)',
      description:
        'Awarded at Sahodaya Inter School Competition, demonstrating leadership and teamwork capabilities',
    },
  ];

  return (
    <StyledAchievementsSection id="achievements" ref={revealContainer}>
      <h2 className="numbered-heading">Achievements & Awards</h2>

      <ul className="achievements-list">
        {achievements.map((achievement, i) => (
          <li key={i} className="achievement-item" ref={el => (revealItems.current[i] = el)}>
            <strong>{achievement.title}</strong> – {achievement.description}
          </li>
        ))}
      </ul>
    </StyledAchievementsSection>
  );
};

export default Achievements;
