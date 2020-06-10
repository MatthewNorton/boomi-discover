declare var manywho: any;

import * as React from 'react';
import { registerItems } from '../../interfaces/services/component';
// import someColor from '../Tags/Tag2';
// // import SomeChildComponent; '../Tags/Tag2';
// import Tags from '../Tags/Tags';
// import Tile from './Tile';

interface TileProps {
  icon: string;
  categories: string;
  example: string;
  learnmore: string;
  title: string;
  description: string;
  image: string;
  order: number;
}
class Tile extends React.Component<any, TileProps> {
  constructor(props) {
    super(props);
  }
  render() {
    const props = this.props;
    return (<li key={props.categories} className="tile-item">
            <div className="tile-img">
                <img src={props.image} alt={props.title}/>
            </div>
            <div className="tile-content" data-order={props.order}>
                <div className="tile-icon"><img src={props.icon} alt={props.title} /></div>
                <div className="tile-title"><h4>{props.title}</h4></div>
                <div className="tile-description"><p>{props.description}</p></div>
                <div className="tile-learnmore"><a className="btn btn-success" href={props.learnmore} target="_blank">Learn More</a></div>
                {props.example.length > 0  &&
                    <div className="tile-example">
                        <a href={props.example} className="btn btn-success ghost" target="_blank">Live Example</a>
                    </div>
                }
                <div className="tile-label">
                  {this.props.categories.map((tag) => <span data-value={tag} onClick={props.click} className="label label-warning">{tag}</span>)}
                  {/* {props.categories} */}
                </div>

            </div>
        </li>);
  }
}

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

const tileListing = (props) => {
  return props.tile.map((value, i) => <Tile
      key={i}
      icon={value.icon}
      image={value.image}
      title={value.title}
      description={value.description}
      // description={value.categories}
      categories={value.categories}
      example={value.example}
      learnmore={value.learnmore}
      order={value.order}
    />,
    );
};

class Tiles extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
          items: [],
          tags: [],
          visibility: 'Boomi Solutions',
      };

      this.cardFilterAction = this.cardFilterAction.bind(this);
      this.renderCards = this.renderCards.bind(this);

    }

    tileLoop = () => {
      const modelAll = manywho.model.getComponents(this.props.flowKey);
      const model = manywho.model.getComponent(this.props.id, this.props.flowKey);
      const columns = manywho.component.getDisplayColumns(model.columns);
      const dataTable = model.objectData;

      dataTable.forEach((result: any) => {

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
            tags: categories.contentValue,
          });
      });
    }

    cardFilterAction = (event) => {
      this.setState({
        visibility: event.target.getAttribute('data-value'),
      });
      console.log(this.state.visibility);

    }

    renderCards = () => {
      const state = this.state;
      const tileListing = [].concat(this.state.items).sort((a, b) => a.order - b.order);
      const category = state.items.map((a, i) => a.categories);
      const Split = state.items.map((a, i) => a.categories.split(', '));
      const tileCategory = [...new Set(Split)];
      console.log(this.state.items.indexOf(this.state.visibility) > -1);
      return this.state.items.filter((item) => {
          return (
            // this.state.visibility !== 'all') ? (item.categories.toLowerCase() === this.state.visibility.toLowerCase()) : true;
            this.state.visibility !== 'Boomi Solutions') ? (item.categories.split(',').join(',').indexOf(this.state.visibility, -1) > -1) : true;
        }).map((value, i) => {
          return (<Tile
            key={i}
            icon={value.icon}
            image={value.image}
            title={value.title}
            description={value.description}
            // description={value.categories}
            categories={value.categories.split(',')}
            example={value.example}
            learnmore={value.learnmore}
            order={value.order}
            click={this.cardFilterAction}
          />);
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
      const tagObj = this.state.tags;
      // const addAll = tagObj.push('All');
      // Seperate strings into invidiaul tags arrays
      const tagSplit = tagObj.map((x) => (x.tags.split(',')));
      // Merge Tags & sort
      const tagArray = [].concat(...tagSplit);
      // Remove Duplicates
      const tags = [...new Set(tagArray)];
      const tagNav = <div className="tag-nav-wrapper">
          <div className="tag-nav-headline">
            <h2>{this.state.visibility}</h2>
          </div>
          <div className="tag-nav-listing">
            <button className="tag-nav-item" data-value="Boomi Solutions" onClick={this.cardFilterAction}>All</button>
            {tags.sort().map((tag, i) => <button className="tag-nav-item" data-value={tag} onClick={this.cardFilterAction}>{tag}</button>)}
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
                      {this.renderCards()}
                    </ul>
                  </div>
            </div>

        );
    }
}

manywho.component.register('tile-component', Tiles);
export default Tiles;
