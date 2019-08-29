import React from 'react';
import getSocialInfo from '../hooks/socialInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const { email, facebook, twitter, github } = getSocialInfo();
  return (
    <footer>
      {/*<div style={{ textAlign: 'center' }}>
        <a
          href={`https://www.artemisia.sca.org/`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            fontSize: '18px',
            margin: '1rem 1rem',
            color: '#030ca5',
          }}
        >
          {`Kingdom of Artemisia`}
        </a>
        <a
          href={`https://www.sca.org/`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            fontSize: '18px',
            margin: '1rem 1rem',
            color: '#030ca5',
          }}
        >
          {`Society for Creative Anachronism, Inc.`}
        </a>
        </div>*/}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <a
            href={`https://www.facebook.com/${facebook}/`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              fontSize: '25px',
              margin: '1rem 1rem',
            }}
          >
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ textDecoration: 'none', color: '#030ca5' }}
            />
          </a>
          <a
            href={`https://www.twitter.com/${twitter}/`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              fontSize: '25px',
              margin: '1rem 1rem',
            }}
          >
            <FontAwesomeIcon
              icon={faTwitterSquare}
              style={{ textDecoration: 'none', color: '#030ca5' }}
            />
          </a>
          <a
            href={`https://www.github.com/${github}/`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              fontSize: '25px',
              margin: '1rem 1rem',
            }}
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ textDecoration: 'none', color: '#030ca5' }}
            />
          </a>
          <a
            href={`mailto:${email}/`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              fontSize: '25px',
              margin: '1rem 1rem',
            }}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ textDecoration: 'none', color: '#030ca5' }}
            />
          </a>
        </div>
      </div>
      <div style={{ textAlign: 'justify', padding: '10px' }}>
        Copyright © 2018-2019 Ellistech/Reuben Ellis. No part of this website
        may be reproduced without the specific written permission. The original
        contributors retain the copyright of certain portions of this site.
        Please refer to our terms and uses page for more information.{' '}
      </div>
    </footer>
  );
}
