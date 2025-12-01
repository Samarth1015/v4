import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email, phone } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .contact-links {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .email-link,
  .whatsapp-link {
    ${({ theme }) => theme.mixins.bigButton};
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I'm always excited to chat about product engineering, infrastructure, or collaboration
        opportunities. Drop me a note and I'll get back as soon as I step away from my terminal.
      </p>

      <div className="contact-links">
        <a
          className="email-link"
          href={`mailto:${email}?subject=${encodeURIComponent('Hello from Portfolio')}`}>
          Gmail
        </a>
        <a
          className="whatsapp-link"
          href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
    </StyledContactSection>
  );
};

export default Contact;
