import React from 'react';
import Layout from '../components/Layouts';
import { FourOhFour } from '@carbon/addons-website';
import { Link } from 'gatsby';

import '../polyfills';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <FourOhFour>
          <div className="anchor-links anchor-links--small fourohfour-body__anchor-links">
            <ul className="page-ul">
              <li>
                <Link to="/approach">Approach</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/opensource">Open Source</Link>
              </li>
            </ul>
          </div>
        </FourOhFour>
      </Layout>
    );
  }
}

export default NotFoundPage;
