declare var manywho: any;

import * as React from 'react';
import Tile from './Tile';

class Tiles extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
          items: [],
          itemTable: [],
      };
  }

    tileLoop = () => {
    const model = manywho.model.getComponent(this.props.id, this.props.flowKey);
    const columns = manywho.component.getDisplayColumns(model.columns);

    // const testAr = this.state.itemTable.push(model.objectData.map((x) => x));
    let i;
    let d;
    const sample = new Array();
    const Data = model.objectData;

    console.log('Data =??????????????????????', Data);
    console.log(Data.length);

    for (i = 0; i < Data.length; i++) {
      const devName = Data[i].properties.map((x) => x.developerName);
      const tableContent = Data[i].properties.map((x) => x.contentValue);
      this.state.itemTable.push(tableContent);
    }

    console.log('Item Table',
    this.state.itemTable);

    model.objectData.forEach((result: any) => {
        const icon = result.properties.find((property: any) => property.typeElementPropertyId === columns[0].typeElementPropertyId);
        const categories = result.properties.find((property: any) => property.typeElementPropertyId === columns[1].typeElementPropertyId);
        const example = result.properties.find((property: any) => property.typeElementPropertyId === columns[2].typeElementPropertyId);
        const learnmore = result.properties.find((property: any) => property.typeElementPropertyId === columns[3].typeElementPropertyId);
        const title = result.properties.find((property: any) => property.typeElementPropertyId === columns[4].typeElementPropertyId);
        const description = result.properties.find((property: any) => property.typeElementPropertyId === columns[5].typeElementPropertyId);
        const image = result.properties.find((property: any) => property.typeElementPropertyId === columns[6].typeElementPropertyId);
        const order = result.properties.find((property: any) => property.typeElementPropertyId === columns[7].typeElementPropertyId);

        this.state.items.push({
          icon: icon.contentValue,
          categories: categories.contentValue,
          example: example.contentValue,
          learnmore: learnmore.contentValue,
          title: title.contentValue,
          description: description.contentValue,
          image: image.contentValue,
          order: order.contentValue,
        });

    });
  }
    componentDidMount() {
    this.tileLoop();
  }
    render() {
      const state = this.state;
      const categorySplit = () => {
        return state.items.map((a, i) => a.categories.split(','));
      };
      const tileListing = [].concat(this.state.items)
      .sort((a, b) => a.order - b.order)
      .map((value, i) =>
          <Tile
            key={i}
            icon={value.icon}
            image={value.image}
            title={value.title}
            description={value.description}
            categories={categorySplit()[i].map((t) => <span className="label label-warning">{t}</span>)}
            example={value.example}
            learnmore={value.learnmore}
            order={value.order}
          />,
      );
      console.log();
      return (
            <div className="wrapper">
                  <div className="tile-wrapper">
                    <ul className="tile-listing">
                      {tileListing}
                    </ul>
                  </div>
            </div>

        );
    }
}

manywho.component.register('tile-component', Tiles);
export default Tiles;
