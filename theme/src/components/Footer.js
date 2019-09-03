import React from 'react';
import getSocialInfo from '../hooks/socialInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import getExternalLinks from '../hooks/externalLinks';
import getSiteData from '../hooks/siteMetadata';
import Grid from '@material-ui/core/Grid';

export default function Footer() {
  const { copyright } = getSiteData();
  const { email, facebook, twitter, github } = getSocialInfo();
  const links = getExternalLinks();
  let social = [];
  social.push({ icon: faFacebook, link: facebook });
  social.push({ icon: faTwitterSquare, link: twitter });
  social.push({ icon: faGithub, link: github });
  social.push({ icon: faEnvelope, link: email });

  return (
    <footer>
      <div style={{ textAlign: 'center' }}>
        {links.map((link, index) => (
          <a
            key={index}
            href={`${link.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className={'externalLink'}
          >
            {`${link.label}`}
          </a>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {social.map((soc, index) => (
            <a
              key={index}
              href={`${soc.link}/`}
              target="_blank"
              rel="noopener noreferrer"
              className={'socialLink'}
            >
              <FontAwesomeIcon
                icon={soc.icon}
                className={'fontAwesomeFooterIcon'}
              />
            </a>
          ))}
        </div>
      </div>
      <Grid container mt={10}>
        <Grid item>
          <div
            style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}
          >
            {copyright}{' '}
          </div>
        </Grid>
      </Grid>
    </footer>
  );
}
