declare var manywho: any;

import * as React from 'react';

class Tiles extends React.Component<any, any> {
    constructor(props: any) {
      super(props);

      this.state = {
          items: [
            {
              icon: 'https://assets.brandfolder.com/pxxurk-498mrk-eokkbz/v/6077624/original/B2B%20Mgmt%20Navy.png',
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              description: 'Integer sit amet sapien blandit, scelerisque leo porttitor, euismod dolor. Sed dignissim purus in arcu rutrum blandit. ',
              href: 'https://community.boomi.com/s/article/Announcing-Boomi-Bot-Framework',
            },
            {
              icon: 'https://assets.brandfolder.com/pxxurk-498mrk-eokkbz/v/6077624/original/B2B%20Mgmt%20Navy.png',
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              description: 'Integer sit amet sapien blandit, scelerisque leo porttitor, euismod dolor. Sed dignissim purus in arcu rutrum blandit. ',
              href: 'https://community.boomi.com/s/article/Announcing-Boomi-Bot-Framework',
            },
            {
              icon: 'https://assets.brandfolder.com/pxxurk-498mrk-eokkbz/v/6077624/original/B2B%20Mgmt%20Navy.png',
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              description: 'Integer sit amet sapien blandit, scelerisque leo porttitor, euismod dolor. Sed dignissim purus in arcu rutrum blandit. ',
              href: 'https://community.boomi.com/s/article/Announcing-Boomi-Bot-Framework',
            },
            {
              icon: 'https://assets.brandfolder.com/pxxurk-498mrk-eokkbz/v/6077624/original/B2B%20Mgmt%20Navy.png',
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              description: 'Integer sit amet sapien blandit, scelerisque leo porttitor, euismod dolor. Sed dignissim purus in arcu rutrum blandit. ',
              href: 'https://community.boomi.com/s/article/Announcing-Boomi-Bot-Framework',
            },
            {
              icon: 'https://assets.brandfolder.com/pxxurk-498mrk-eokkbz/v/6077624/original/B2B%20Mgmt%20Navy.png',
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              description: 'Integer sit amet sapien blandit, scelerisque leo porttitor, euismod dolor. Sed dignissim purus in arcu rutrum blandit. ',
              href: 'https://community.boomi.com/s/article/Announcing-Boomi-Bot-Framework',
            },
            {
              icon: 'https://assets.brandfolder.com/pxxurk-498mrk-eokkbz/v/6077624/original/B2B%20Mgmt%20Navy.png',
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              description: 'Integer sit amet sapien blandit, scelerisque leo porttitor, euismod dolor. Sed dignissim purus in arcu rutrum blandit. ',
              href: 'https://community.boomi.com/s/article/Announcing-Boomi-Bot-Framework',
            },

            {
              icon: 'https://assets.brandfolder.com/pxxurk-498mrk-eokkbz/v/6077624/original/B2B%20Mgmt%20Navy.png',
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              description: 'Integer sit amet sapien blandit, scelerisque leo porttitor, euismod dolor. Sed dignissim purus in arcu rutrum blandit. ',
              href: 'https://community.boomi.com/s/article/Announcing-Boomi-Bot-Framework',
            },
            {
              icon: 'https://assets.brandfolder.com/pxxurk-498mrk-eokkbz/v/6077624/original/B2B%20Mgmt%20Navy.png',
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              description: 'Integer sit amet sapien blandit, scelerisque leo porttitor, euismod dolor. Sed dignissim purus in arcu rutrum blandit. ',
              href: 'https://community.boomi.com/s/article/Announcing-Boomi-Bot-Framework',
            },
                     ],
      };
  }

    componentDidMount() {

        // Get the component's model, which includes any values bound to it
        // const model = manywho.model.getComponent(this.props.id, this.props.flowKey);
        // const columns = manywho.component.getDisplayColumns(model.columns);
        // // Create the map in an element on the page

        //     // Add Later
        //     // const grade = result.properties.find((property: any) => property.typeElementPropertyId === columns[6].typeElementPropertyId);

        // // data for options & this.setstate

        // model.objectData.forEach((result: any) => {
        //     const id = result.properties.find((property: any) => property.typeElementPropertyId === columns[0].typeElementPropertyId);
        //     const name = result.properties.find((property: any) => property.typeElementPropertyId === columns[1].typeElementPropertyId);
        //     const href = result.properties.find((property: any) => property.typeElementPropertyId === columns[3].typeElementPropertyId);
        //     const target = result.properties.find((property: any) => property.typeElementPropertyId === columns[2].typeElementPropertyId);

        //     // this.state.items.push({
        //     //     id: id.contentValue,
        //     //     name: name.contentValue,
        //     //     href: href.contentValue,
        //     //     target: target.contentValue,
        //     // });

        // });

        // const itemArray = this.state.items;
        // const map1 = itemArray.map((x) => x);
        // console.log(map1);
        // this.setState({
        //   items: map1,
        // });
    }
    render() {
        return (
            <div className="wrapper">
                  <div className="tile-wrapper">
                    <ul className="container">
                        { this.state.items.map((value, index) => {
                          return <li key={index}>
                            <div><img className="tile-icon" src={value.icon} alt=""/></div>
                            <div><h2>{value.title}</h2></div>
                            <div><p>{value.description}</p></div>
                            <a className="btn" href={value.href} target="_blank">Learn More</a>
                          </li>;
                          })
                        }
                      </ul>
                  </div>

            </div>

        );
    }
}
manywho.component.register('custom-tiles', Tiles);
export default Tiles;
