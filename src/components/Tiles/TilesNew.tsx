declare var manywho: any;

import * as React from 'react';
import { registerItems } from '../../interfaces/services/component';
// import someColor from '../Tags/Tag2';
// // import SomeChildComponent; '../Tags/Tag2';
// import Tags from '../Tags/Tags';
// import Tile from './Tile';

/* ########################## */
/* ##### TILE ##### */
/* ########################## */
const Tile = ({
  icon,
  tagged,
  liveUrl,
  learnUrl,
  title,
  description,
  image,
  order,
  click }) => {
  return (<li key={tagged} className="tile-item">
  <div className="tile-img">
      <img src={image} alt={title}/>
  </div>
  <div className="tile-content" data-order={order}>
      <div className="tile-icon"><img src={icon} alt={title} /></div>
      <div className="tile-title"><h4>{title}</h4></div>
      <div className="tile-description"><p>{description}</p></div>
      <div className="tile-learn"><a className="btn btn-success" href={learnUrl} target="_blank">Learn More</a></div>
      {liveUrl.length > 0  &&
          <div className="tile-live">
              <a href={liveUrl} className="btn btn-success ghost" target="_blank">Live Example</a>
          </div>
      }
      <div className="tile-label">
        {tagged.map((tag) => <span data-value={tag} onClick={click} className="label label-warning">{tag}</span>)}
        {/* {props.tags} */}
      </div>
  </div>
</li>);
};

/* ########################## */
/* ##### TILE LISTING ##### */
/* ########################## */

/* ########################## */
/* ##### Filter Nav ##### */
/* ########################## */

/* ########################## */
/* ##### FLOW TABLE ##### */
/* ########################## */
// const tileLoop = ({

// }) => {

// }

/* ########################## */
/* ##### EVENTS ##### */
/* ########################## */

/* ########################## */
/* ##### MAIN APP (TIED EVERYTHING NICELY) ##### */
/* ########################## */

// const TagsList = ({tags, onTagDelete, hashtag}) => {
//   const list = tags.map((tag, index) => (
//     <Tag
//       name={tag}
//       onDelete={onTagDelete}
//       index={index}
//       hashtag={hashtag} />
//   ));
//   return (
//     <ul name="tagsList" className="tagsList">
//       {list}
//     </ul>
//   );
// };

// const tileListing = (props) => {
//   return props.tile.map((value, i) => <Tile
//       key={i}
//       icon={value.icon}
//       image={value.image}
//       title={value.title}
//       description={value.description}
//       tags={value.tags}
//       liveUrl={value.liveUrl}
//       learnUrl={value.learnUrl}
//       order={value.order}
//     />,
//     );
// };

class Tiles extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
          items: [],
          s: [],
          visibility: 'Boomi Solutions',
      };

      this.tileFilterAction = this.tileFilterAction.bind(this);
      this.renderTiles = this.renderTiles.bind(this);

    }

    tileFilterAction = (event) => {
      this.setState({
        visibility: event.target.getAttribute('data-value'),
      });
    }

    renderTiles = () => {
      return this.state.items.filter((item) => {
          return (
            // this.state.visibility !== 'all') ? (item.tags.toLowerCase() === this.state.visibility.toLowerCase()) : true;
            this.state.visibility !== 'Boomi Solutions') ? (item.tags.split(',').join(',').indexOf(this.state.visibility, -1) > -1) : true;
        }).map((value, i) => {
          return (<Tile
            key={i}
            icon={value.icon}
            image={value.image}
            title={value.title}
            description={value.description}
            tagged={value.tags.split(',')}
            liveUrl={value.liveUrl}
            learnUrl={value.learnUrl}
            order={value.order}
            click={this.tileFilterAction}
          />);
          });
    }
    tileLoop = () => {
      const modelAll = manywho.model.getComponents(this.props.flowKey);
      const model = manywho.model.getComponent(this.props.id, this.props.flowKey);
      const columns = manywho.component.getDisplayColumns(model.columns);
      const dataTable = model.objectData;
      let newRow;
      // let test;
      // // for (let i = 0; dataTable.length > i; i++) {
      // //     test = dataTable[i].properties;
      // //     i++;
      // //   }
      // let g;

      const test = [];
      for (let i = 0; dataTable.length > i; i++) {
        console.log(dataTable[i].properties);
        const c = dataTable[i].properties[i].contentValue;
        const d = dataTable[i].properties[i].developerName;
        newRow = {[d]: c};
        // console.log(newRow);

        // const a = test.map((x) => [x.developerName]:x.contentValue);
        // const b = test.map((x) => x.contentValue);
        // console.log(
        //   {[a]: b},
        // );
        // this.state.s.push({
        //   [dataTable[i].properties.developerName]: dataTable[i].properties.contentValue,
        // });
        // for (let p = 0; property.length > p; p++) {
        //   console.log(property[i]);
        // }
        i++;
      }
      for (const a of test) {
        console.log(a.contentValue);

      }
      // for (const row of dataTable) {
      //   for (const property of newRow) {
      //     new Row = {
      //       [[property.developerName]: property.contentValue]
      //     }
      //   }
      // }

      // console.log(newRow);
      // console.log(this.state.s);
      // dataTable.forEach((result: any) => {
      //   console.log(result.map((x) => x.properties));

      //   result.properties.forEach((property) => {

      //   });
      // });

      // console.log(g);

      // for (let i = 0; newItem.properties.length > i; i++) {
        // newItem.push(row.properties[i].developerName);
      // }
      // console.log(this.state.s);
      // console.log(newItem.map((x) => x));

      // for (let i = 0; dataTable.length > i; i++) {
      //   let col;
      //   // console.log(col[i]);
      //   console.log(result.properties.find((property: any) => property.typeElementPropertyId === columns[i].typeElementPropertyId));
      // }

      dataTable.forEach((result: any) => {

          const icon = result.properties.find((property: any) => property.typeElementPropertyId === columns[0].typeElementPropertyId);
          const tags = result.properties.find((property: any) => property.typeElementPropertyId === columns[1].typeElementPropertyId);
          const liveUrl = result.properties.find((property: any) => property.typeElementPropertyId === columns[2].typeElementPropertyId);
          const learnUrl = result.properties.find((property: any) => property.typeElementPropertyId === columns[3].typeElementPropertyId);
          const title = result.properties.find((property: any) => property.typeElementPropertyId === columns[4].typeElementPropertyId);
          const description = result.properties.find((property: any) => property.typeElementPropertyId === columns[5].typeElementPropertyId);
          const image = result.properties.find((property: any) => property.typeElementPropertyId === columns[6].typeElementPropertyId);
          const order = result.properties.find((property: any) => property.typeElementPropertyId === columns[7].typeElementPropertyId);

          this.state.items.push({
            icon: icon.contentValue,
            tags: tags.contentValue,
            liveUrl: liveUrl.contentValue,
            learnUrl: learnUrl.contentValue,
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

      // Fixes and null values
      this.state.items.forEach(function(o) {
          Object.keys(o).forEach(function(k) {
              if (o[k] === null) {
                  o[k] = '';
              }
          });
      });

      // List of Tags
      // const addAll = tagObj.push('All');
      // Seperate strings into invidiaul tags arrays
      const tagSplit = this.state.items.map((x) => (x.tags.split(',')));
      // Merge Tags & sort
      const tagArray = [].concat(...tagSplit);
      // Remove Duplicates
      const tags = [...new Set(tagArray)];
      const tagNav = <div className="tag-nav-wrapper">
          <div className="tag-nav-headline">
            <h2>{this.state.visibility}</h2>
          </div>
          <div className="tag-nav-listing">
            <button className="tag-nav-item" data-value="Boomi Solutions" onClick={this.tileFilterAction}>All</button>
            {tags.sort().map((tag, i) => <button className="tag-nav-item" data-value={tag} onClick={this.tileFilterAction}>{tag}</button>)}
          </div>

        </div>;

    //     return
    //         {/* <button className="button cell large-4" value="all" onClick={this.cardFilterAction}>All</button> */}
    //         {
    //           tags.sort().map((tag, i) => <button className="button cell large-4" value={...tag} onClick={this.cardFilterAction}>{tag}</button>)}
    //     </div>;
    // };

      return (
            <div className="wrapper">
                  {tagNav}

                  <div className="tile-wrapper">
                    <ul className="tile-listing">
                      {this.renderTiles()}
                    </ul>
                  </div>
            </div>

        );
    }
}

manywho.component.register('tile-component', Tiles);
export default Tiles;
