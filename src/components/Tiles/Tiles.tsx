declare var manywho: any;

import * as React from 'react';
import { registerItems } from '../../interfaces/services/component';
// import someColor from '../Tags/Tag2';
// // import SomeChildComponent; '../Tags/Tag2';
// import Tags from '../Tags/Tags';
import Tile from './Tile';

class Tiles extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
          items: [],
          tags: [],
          itemTable: [],
          moreItems: manywho.model.getComponents(this.props.flowKey),
      };
  }

    tileLoop = () => {
    const modelAll = manywho.model.getComponents(this.props.flowKey);
    const model = manywho.model.getComponent(this.props.id, this.props.flowKey);
    const columns = manywho.component.getDisplayColumns(model.columns);
    const Data = model.objectData;

    // console.log(model.objectData);
    // console.log('Data =??????????????????????', Data);
    // // console.log(Data.length);

    // for (i = 0; Data != null && i < Data.length; i++) {
    //   const devName = Data[i].properties.map((x) => x.developerName);
    //   const tableContent = Data[i].properties.map((x) => x.contentValue);
    //   console.log('Table Content', tableContent);
    //   this.state.itemTable.push(tableContent);
    // }

    // console.log('Item Table===>',
    //   this.state.itemTable[4],

    // );

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
        this.state.tags.push({
          categories: categories.contentValue,
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
      const tileListing = [].concat(this.state.items).sort((a, b) => a.order - b.order)
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

      // Fixes and null values
      this.state.items.forEach(function(o) {
          Object.keys(o).forEach(function(k) {
              if (o[k] === null) {
                  o[k] = '';
              }
          });
      });

      // List of Tags
      const tagObj = state.tags;

      // Seperate strings into invidiaul tags arrays
      const tagSplit = tagObj.map((x) => (x.categories.split(',')));

      // Merge Tags & sort
      const tagArray = [].concat(...tagSplit);

      // Remove Duplicates
      const tags = [...new Set(tagArray)];

      const tagItems = tags.sort().map((tag) => <h3>{tag}</h3>);

      return (
            <div className="wrapper">
                  <h1>Filtering</h1>
                  {tagItems}
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
