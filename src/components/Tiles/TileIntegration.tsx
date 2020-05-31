declare var manywho: any;

import * as React from 'react';

class Tiles extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
          items: [],
      };
  }
    tileLoop = () => {
    const model = manywho.model.getComponent(this.props.id, this.props.flowKey);
    const columns = manywho.component.getDisplayColumns(model.columns);

    model.objectData.forEach((result: any) => {
        const icon = result.properties.find((property: any) => property.typeElementPropertyId === columns[0].typeElementPropertyId);
        const categories = result.properties.find((property: any) => property.typeElementPropertyId === columns[1].typeElementPropertyId);
        const example = result.properties.find((property: any) => property.typeElementPropertyId === columns[2].typeElementPropertyId);
        const learnmore = result.properties.find((property: any) => property.typeElementPropertyId === columns[3].typeElementPropertyId);
        const title = result.properties.find((property: any) => property.typeElementPropertyId === columns[4].typeElementPropertyId);
        const description = result.properties.find((property: any) => property.typeElementPropertyId === columns[5].typeElementPropertyId);
        const image = result.properties.find((property: any) => property.typeElementPropertyId === columns[6].typeElementPropertyId);

        this.state.items.push({
          icon: icon.contentValue,
          categories: categories.contentValue,
          example: example.contentValue,
          learnmore: learnmore.contentValue,
          title: title.contentValue,
          description: description.contentValue,
          image: image.contentValue,
        });

    });

    // const itemArray = this.state.items;
    // const map1 = itemArray.map((x) => x);
    // console.log(map1);
  }
    componentDidMount() {
    this.tileLoop();
  }
    render() {
      const state = this.state;
      /* List the categories in one long array and split them based on commas */
      const categoryArray = () => {
        return state.items.map((a, i) => a.categories.split(','));
      };
      return (
            <div className="wrapper">
                  <div className="tile-wrapper">
                    <ul className="container">
                        { this.state.items.map((value, index) => {
                          return <li className="tile-item" key={index}>
                            <div className="tile-img">
                              <img src={value.image} alt=""/>
                            </div>
                            <div className="tile-content">
                              <div className="tile-icon"><img src={value.icon} alt={value.title} /></div>
                              <div className="tile-title"><h4>{value.title}</h4></div>
                              <div className="tile-description"><p>{value.description}</p></div>
                              <div className="tile-learnmore"><a className="btn btn-success" href={value.learnmore} target="_blank">Learn More</a></div>
                              { value.example.length > 0 &&
                                  <div className="tile-example">
                                    <a href={value.example} className="btn btn-success ghost" target="_blank">Live Example</a>
                                  </div>
                              }
                              <div className="tile-label"> {
                                categoryArray()[index].map((t) =>
                                  <span className="label label-warning">{t}</span>)
                                }
                              </div>

                            </div>

                          </li>;
                          })
                        }
                      </ul>
                  </div>

            </div>

        );
    }
}

manywho.component.register('tile-component', Tiles);
export default Tiles;
