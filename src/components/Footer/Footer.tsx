declare var manywho: any;

import * as React from 'react';

class Footer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
        items: [],
    };
}

  render() {
      return (
        <footer className="footer">
          <div className="container">
            <div className="footer-wrapper">
              <div className="footer-col">
                <div className="footer-col--box">
                  <a href="https://boomi.com/platform/" target="_blank" className="footer-col--headline">Platform</a>
                  <ul className="footer-col--box-list">
                    <li><a href="https://boomi.com/platform/integration/" target="_blank">Integration</a></li>
                    <li><a href="https://boomi.com/platform/master-data-hub/" target="_blank">Master Data Hub</a></li>
                    <li><a href="https://boomi.com/platform/b2b-management/" target="_blank">B2B/EDI Management</a></li>
                    <li><a href="https://boomi.com/platform/api-management/" target="_blank">API Management</a></li>
                    <li><a href="https://boomi.com/platform/flow/" target="_blank">Flow</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-col">
                <div className="footer-col--box">
                  <a href="https://boomi.com/solutions/" target="_blank" className="footer-col--headline">Solutions</a>
                </div>
                <div className="footer-col--box">
                  <a href="https://boomi.com/services/" target="_blank" className="footer-col--headline">Services &amp; Training</a>
                  <ul className="footer-col--box-list">
                    <li><a href="https://boomi.com/services/training/" target="_blank">Training and Certification</a></li>
                    <li><a href="https://train.boomi.com/#/login" target="_blank">Training Login</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-col">
                <div className="footer-col--box">
                  <a href="https://resources.boomi.com/" target="_blank" className="footer-col--headline">Resources</a>
                  <ul className="footer-col--box-list">
                    <li><a href="https://resources.boomi.com/blog-dell-boomi" target="_blank">Blog</a></li>
                    <li><a href="https://resources.boomi.com/upcoming-webinars" target="_blank">Upcoming Webinars</a></li>
                    <li><a href="https://resources.boomi.com/product-demos" target="_blank">Demos</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-col">
                <div className="footer-col--box">
                  <a href="https://boomi.com/company/" target="_blank" className="footer-col--headline">Company</a>
                  <ul className="footer-col--box-list">
                    <li><a href="https://boomi.com/company/leadership-team/" target="_blank">Leadership Team</a></li>
                    <li><a href="https://boomi.com/company/careers/" target="_blank">Careers</a></li>
                    <li><a href="https://boomi.com/company/events/" target="_blank">Events</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-col">
                <div className="footer-col--box">
                  <a href="https://boomi.com/customers/" target="_blank" className="footer-col--headline">Customers</a>
                  <ul className="footer-col--box-list">
                    <li><a href="https://boomi.com/customers/find-customer/" target="_blank">Find a Customer</a></li>
                  </ul>
                </div>
                <div className="footer-col--box">
                  <a href="https://boomi.com/partners/" target="_blank" className="footer-col--headline">Partners</a>
                  <ul className="footer-col--box-list">
                    <li><a href="https://boomi.com/partners/find-a-partner/" target="_blank">Find a Partner</a></li>
                    <li><a href="https://partners.boomi.com/" target="_blank">Partner Login</a></li>
                  </ul>
                </div>
                <div className="footer-col--box">
                  <a href="https://community.boomi.com/" target="_blank" className="footer-col--headline">Community</a>
                  <ul className="footer-col--box-list">
                    <li><a href="https://community.boomi.com/s/login/" target="_blank">Community Login</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-col footer-social">
                <a href="" className="footer-col--headline">Contact Us</a>
                <ul className="footer-social list-unstyled">
                  <li><a href="https://twitter.com/boomi" target="_blank" className="icon-outline icon-sm"><i className="fa fa-twitter" aria-hidden="true"/></a></li>
                  <li><a href="https://www.facebook.com/DellBoomi/" target="_blank" className="icon-outline icon-sm"><i className="fa fa-facebook" aria-hidden="true"/></a></li>
                  <li><a href="https://www.linkedin.com/company/boomi-inc/" target="_blank" className="icon-outline icon-sm"><i className="fa fa-linkedin" aria-hidden="true"/></a></li>
                  <li><a href="https://www.youtube.com/channel/UC63U1JBpElNL6anLEeS6fzw" target="_blank" className="icon-outline icon-sm"><i className="fa fa-youtube-play" aria-hidden="true"/></a></li>

                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>A Dell Technologies Business</p>
              <p>© Copyright Boomi, Inc. ALL RIGHTS RESERVED. Boomi and your <a href="https://boomi.com/privacy/" target="_blank" className="footer__privacy-policy-link">right to privacy</a></p>
            </div>
          </div>
        </footer>
      );
    }
}
manywho.component.register('footer', Footer);
export default Footer;
