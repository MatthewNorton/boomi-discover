declare var manywho: any;

import * as React from 'react';

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
      </div>
  </div>
</li>);
};
class Tiles extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
          items: [],
          visibility: 'Boomi Solutions',
          filter: '',
      };

      this.tileFilterAction = this.tileFilterAction.bind(this);
      this.renderTiles = this.renderTiles.bind(this);
      this.urlParam = this.urlParam.bind(this);
    }
    componentDidMount() {
      this.tileLoop();
      this.urlParam();

    }
    tileLoop = () => {

      const modelAll = manywho.model.getComponents(this.props.flowKey);
      const model = manywho.model.getComponent(this.props.id, this.props.flowKey);
      const columns = manywho.component.getDisplayColumns(model.columns);
      const dataTable = model.objectData;

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
            // Fixes and null values
      this.state.items.forEach(function(o) {
              Object.keys(o).forEach(function(k) {
                  if (o[k] === null) {
                      o[k] = '';
                  }
              });
          });

  }
    urlParam = () => {
      const params = new URLSearchParams(document.location.search.substring(1));
      const param = params.get('f'); // is the string "Jonathan"
      if (param === null) {
        this.setState({
          visibility: 'Boomi Solutions',
        });
      } else {
        this.setState({
          visibility: param,
        });
      }

    }

    tileFilterAction = (event) => {
      this.setState({
        visibility: event.target.getAttribute('data-value'),
      });
    }

    renderTiles = (

    ) => {
      return this.state.items.filter((item) => {
          return (
            this.state.visibility !== 'Boomi Solutions') ? (item.tags.toLowerCase().split(',').join(',').indexOf(this.state.visibility.toLowerCase(), -1) > -1) : true;
        }).sort((a, b) => a.order - b.order).map((value, i) => {
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

    tagNav = () => {
            // List of Tags
      // const addAll = tagObj.push('All');
      // Seperate strings into invidiaul tags arrays
      const tagSplit = this.state.items.map((x) => (x.tags.split(',')));
      // Merge Tags & sort
      const tagArray = [].concat(...tagSplit);
      // Remove Duplicates
      const tags = [...new Set(tagArray)];
      return (<div className="tag-nav-wrapper">
        <div className="tag-nav-headline">
          <h2>{this.state.visibility}</h2>
        </div>
        <div className="tag-nav-listing">
          <ul>
            <li className="tag-nav-item"><button data-value="Boomi Solutions" onClick={this.tileFilterAction}>All</button></li>
            {tags.sort().map((tag, i) => <li key={i} className="tag-nav-item"><button className="" data-value={tag.toLowerCase()} onClick={this.tileFilterAction}>{tag}</button></li>)}
          </ul>
        </div>
      </div>);
    }
    render() {
      console.log('Filtering for ➡️', this.state.visibility);
      return (
            <div className="wrapper">
                  {this.tagNav()}
                  <div className="tile-wrapper">
                    <ul className="tile-listing">
                      {this.renderTiles()}
                    </ul>
                  </div>
            </div>

        );
    }
}

// class MediaApp extends React.Component<any, any> {

  /* UI ______________
      - Tags
      - Tag
    - Tiles
      - Tile
  */
// }

// class ImageWithStatusText extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { imageStatus: 'loading' };
//   }

//   handleImageLoaded() {
//     this.setState({ imageStatus: 'loaded' });
//   }

//   handleImageErrored() {
//     this.setState({ imageStatus: 'failed to load' });
//   }

//   render() {
//     return (
//       <div>
//         <img
//           src={this.props.imageUrl}
//           onLoad={this.handleImageLoaded.bind(this)}
//           onError={this.handleImageErrored.bind(this)}
//         />
//         {this.state.imageStatus}
//       </div>
//     );
//   }
// }

manywho.component.register('tile-component', Tiles);
export default Tiles;
