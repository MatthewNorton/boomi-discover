// declare var manywho: any;

import * as React from 'react';

interface NavLinks {
  links: any;
}

class Navigation extends React.Component<any, NavLinks> {
    constructor(props: any) {
        super(props);

        this.state = {
            links: [],
        };
    }

    componentDidMount() {
        const model = manywho.model.getComponent(this.props.id, this.props.flowKey);
        const columns = manywho.component.getDisplayColumns(model.columns);
        if (model.objectData != null) {
            model.objectData.forEach((result: any) => {
              const id = result.properties.find((property: any) => property.typeElementPropertyId === columns[0].typeElementPropertyId);
              const name = result.properties.find((property: any) => property.typeElementPropertyId === columns[1].typeElementPropertyId);
              const target = result.properties.find((property: any) => property.typeElementPropertyId === columns[2].typeElementPropertyId);
              const href = result.properties.find((property: any) => property.typeElementPropertyId === columns[3].typeElementPropertyId);
              const classAttr = result.properties.find((property: any) => property.typeElementPropertyId === columns[4].typeElementPropertyId);

              this.state.links.push({
                  id: id.contentValue,
                  name: name.contentValue,
                  href: href.contentValue,
                  target: target.contentValue,
                  classAttr: classAttr.contentValue,
              });

          });
        }

    }
    render() {
return (
          <div className="wrapper wrapper-nav">
            <div className="topnav">
              <ul>
                <li>
                  <a href="https://boomi.com/company/contact/" target="_blank">Contact</a>
                </li>
                <li>
                  <a href="https://platform.boomi.com/?_ga=2.140176439.544537635.1525375425-968405543.1525375425" target="_blank">Login</a>
                </li>
                <li>
                  <a href="https://boomi.com/form/trial/" className="alt" target="_blank">Free Trial</a>
                </li>
              </ul>
            </div>
            <div className="bottomnav">
              <div className="bottomnav-wrapper container">
                  <h1 className="bottomnav-logo">
                    <a href="https://www.boomi.com" title="Boomi iPaaS Solutions &amp; Tools for Cloud Connected Business">
                      <img src="https://cdn.brandfolder.io/W49AM39J/as/pxzggw-bgotog-1vnhuw/boomi-website-logo.svg?max_age=604800" alt=""/>
                      </a>
                  </h1>
                  <h3 className="bottomnav-subtitle">Boomi Solutions Catalog</h3>
                  { this.state.links.length > 0 &&
                  <nav className="bottomnav-links">
                    <ul>
                      { this.state.links.map((value: any, index: number) => {
                        return <li className={value.classAttr} key={index}>
                          <a href={value.href} target={value.target}>{value.name}</a>
                        </li>;
                        })
                      }
                    </ul>
                  </nav>
                }
                </div>
              </div>
            </div>

        );
    }
}
manywho.component.register('main-nav', Navigation);
export default Navigation;

// import './css/base.scss';
// import './css/basic.css';

// class Navigation extends React.Component {
//     render() {
//         return <div className="custom-basic">Basic Custom Component</div>;
//     }
// }

// manywho.component.register('main-nav', Navigation);

// export default Navigation;
