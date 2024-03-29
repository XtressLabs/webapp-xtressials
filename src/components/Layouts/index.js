import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classnames from 'classnames';
import { StaticQuery, graphql } from 'gatsby';

import favicon32 from '../../content/global/images/favicon-32.png';
import SiteHeader from '../SiteHeader';
import WebsiteFooter from '../WebsiteFooter';
import timestamp from 'raw-loader!../../../build-timestamp';

import '../../styles/index.scss';

class Layout extends React.Component {
  state = {
    isNavExpanded: false,
    isSwitcherExpanded: false,
  };

  toggleClick = () => {
    this.setState(state => ({ isNavExpanded: !state.isNavExpanded }));
    if (this.state.isSwitcherExpanded) {
      this.setState({ isSwitcherExpanded: false });
    }
  };

  toggleSwitcher = () => {
    this.setState(state => ({ isSwitcherExpanded: !state.isSwitcherExpanded }));
    if (this.state.isNavExpanded) {
      this.setState({ isNavExpanded: false });
    }
  };

  closeClick = () => {
    if (this.state.isNavExpanded) {
      this.setState({ isNavExpanded: false });
    }
  };

  static propTypes = {
    children: PropTypes.any,
  };

  componentDidMount() {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speedAsDuration: true,
      speed: 200,
      durationMin: 90,
      durationMax: 800,
      easing: 'easeInOutCubic',
      offset: 24,
    });
  }

  render() {
    const { children } = this.props;
    const currentYear = new Date().getFullYear();
    const lastUpdated = new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(Number(timestamp)));
    const { isNavExpanded, isSwitcherExpanded } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content:
                    '',
                },
                {
                  name: 'keywords',
                  content:
                    '',
                },
                {
                  name: 'twitter:card',
                  content: 'summary',
                },
                {
                  name: 'twitter:site',
                  content: '@ibmdesign',
                },
                {
                  name: 'twitter:title',
                  content: '',
                },
                {
                  name: 'twitter:description',
                  content:
                    '',
                },
                {
                  name: 'twitter:image',
                  content:
                    '',
                },
              ]}
              link={[
                {
                  rel: 'shortcut icon',
                  type: 'image/png',
                  href: `${favicon32}`,
                },
              ]}>
              <html lang="en" />
            </Helmet>
            <SiteHeader
              isNavExpanded={isNavExpanded}
              isSwitcherExpanded={isSwitcherExpanded}
              onToggleNav={this.toggleClick}
              onToggleSwitcher={this.toggleSwitcher}
            />
            <div
              className="container"
              role="main"
              aria-label="Main content area"
              onClick={this.closeClick}>
              {children}
              <WebsiteFooter
                logoOffset={false}
                linksCol1={[
                  { href: 'https://www.xtressials.tech/privacy', linkText: 'Privacy' },
                  {
                    href: 'https://www.xtressials.tech/legal',
                    linkText: 'Terms of Use',
                  },
                  { href: 'https://www.xtressials.tech', linkText: 'Xtressials.Tech' },
                ]}
                linksCol2={[
                  {
                    href: 'https://twitter.com/xtressials',
                    linkText: 'Twitter',
                  },
                  {
                    href: 'https://www.linkedin.com/company/71425738',
                    linkText: 'LinkedIn',
                  },
                ]}>
                <p>
                  Have questions? Please{' '}
                  <a
                    href="mailto:oscillator25@xtresscloud.net"
                    target="_blank"
                    rel="noopener"
                    rel="noreferrer">
                    email us.
                  </a>
                </p>
                <p>
                  Last updated {lastUpdated}
                  <br />
                  Copyright © {currentYear} Xtressials
                  <br />[Inspired By IBM Carbon Design System]
                </p>
              </WebsiteFooter>
            </div>
          </>
        )}
      />
    );
  }
}

export default Layout;
