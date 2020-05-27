declare var manywho: any;

import * as React from 'react';

class Navigation extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            items: [],
        };
    }

    componentDidMount() {

        // Get the component's model, which includes any values bound to it
        const model = manywho.model.getComponent(this.props.id, this.props.flowKey);
        const columns = manywho.component.getDisplayColumns(model.columns);
        // Create the map in an element on the page

            // Add Later
            // const grade = result.properties.find((property: any) => property.typeElementPropertyId === columns[6].typeElementPropertyId);

        // data for options & this.setstate

        model.objectData.forEach((result: any) => {
            const id = result.properties.find((property: any) => property.typeElementPropertyId === columns[0].typeElementPropertyId);
            const name = result.properties.find((property: any) => property.typeElementPropertyId === columns[1].typeElementPropertyId);
            const href = result.properties.find((property: any) => property.typeElementPropertyId === columns[3].typeElementPropertyId);
            const target = result.properties.find((property: any) => property.typeElementPropertyId === columns[2].typeElementPropertyId);

            this.state.items.push({
                id: id.contentValue,
                name: name.contentValue,
                href: href.contentValue,
                target: target.contentValue,
            });

        });

        const itemArray = this.state.items;
        const map1 = itemArray.map((x) => x);
        console.log(map1);
        // this.setState({
        //   items: map1,
        // });
    }
    render() {
        const styles = {
            width: '100%',
            height: 'auto',
        };

        return (
          <div id="wrapper">
            <div className="topnav">
              <ul>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#" className="alt">Free Trial</a>
                </li>
              </ul>
            </div>
            <div className="bottomnav">
              <div className="bottomnav-wrapper container">
                  <h1 className="bottomnav-logo">
                    <a href="#">
                      <img src="https://cdn.brandfolder.io/W49AM39J/as/pxzggw-bgotog-1vnhuw/boomi-website-logo.svg?max_age=604800" alt=""></img>
                      </a>
                  </h1>
                  <nav className="bottomnav-links">
                    <ul>
                      { this.state.items.map((value, index) => {
                        return <li key={index}>
                          <a href={value.href} target={value.target}>{value.name}</a>
                        </li>;
                        })
                      }
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

        );
    }
}
manywho.component.register('main-nav', Navigation);
export default Navigation;
