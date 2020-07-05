declare var manywho: any;

import * as React from 'react';
import TagNav from './TagNav';
import Tile from './Tile';

// Debugging
const logEntries = [];
function Log(
    label,
    value,
  ) {
    const logEntry = {
      label: value,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
  }
/* ########################## */
/* ##### Tag Navigation ##### */
/* ########################## */
{/* <TagNav
    items = {this.state.items},
    headline = {this.state.visibility},
    buttonAction = {this.tileFilterAction}

> */}

/* ########################## */
/* ##### TILES COMPONENT  ##### */
/* ########################## */

class Tiles extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: [],
            visibility: 'Boomi Solutions',
            filter: '',
        };

        this.tileFilterAction = this.tileFilterAction.bind(this);
        this.tileList = this.tileList.bind(this);
        this.tagParam = this.tagParam.bind(this);
    }
    /* ----------------------------
     Wait to apply functions after runtime.
    --------------------------------*/
    componentDidMount() {
        this.tileLoop();
        this.tagParam();
    }

    /* ----------------------------
      Loops through the table of data
    --------------------------------*/

    tileLoop = () => {
        const modelAll = manywho.model.getComponents(this.props.flowKey);
        const model = manywho.model.getComponent(
            this.props.id,
            this.props.flowKey,
        );
        const columns = manywho.component.getDisplayColumns(model.columns);
        const dataTable = model.objectData;

        dataTable.forEach((result: any) => {
            const icon = result.properties.find(
                (property: any) =>
                    property.typeElementPropertyId ===
                    columns[0].typeElementPropertyId,
            );
            const tags = result.properties.find(
                (property: any) =>
                    property.typeElementPropertyId ===
                    columns[1].typeElementPropertyId,
            );
            const liveUrl = result.properties.find(
                (property: any) =>
                    property.typeElementPropertyId ===
                    columns[2].typeElementPropertyId,
            );
            const learnUrl = result.properties.find(
                (property: any) =>
                    property.typeElementPropertyId ===
                    columns[3].typeElementPropertyId,
            );
            const title = result.properties.find(
                (property: any) =>
                    property.typeElementPropertyId ===
                    columns[4].typeElementPropertyId,
            );
            const description = result.properties.find(
                (property: any) =>
                    property.typeElementPropertyId ===
                    columns[5].typeElementPropertyId,
            );
            const image = result.properties.find(
                (property: any) =>
                    property.typeElementPropertyId ===
                    columns[6].typeElementPropertyId,
            );
            const order = result.properties.find(
                (property: any) =>
                    property.typeElementPropertyId ===
                    columns[7].typeElementPropertyId,
            );
            /* ----------------------------
          Adds looped data to state array.
          --------------------------------*/
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

        /* ----------------------------
      Error cleanup by replacing
      null values with an empty string.
    --------------------------------*/
        this.state.items.forEach(function(o) {
            Object.keys(o).forEach(function(k) {
                if (o[k] === null) {
                    o[k] = '';
                }
            });
        });
    }
    /* ----------------------------
      function that is used for &f= url parameter. Example:

    --------------------------------*/
    tagParam = () => {
        const params = new URLSearchParams(
            document.location.search.substring(1),
        );
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
    tileFilter = () => {};

    tileList = () => {
        const visibility = this.state.visibility;
        const items = this.state.items;
        const filterItems = items.filter((item) => {
            return visibility !== 'Boomi Solutions'
                ? item.tags
                      .toLowerCase()
                      .split(',')
                      .join(',')
                      .indexOf(visibility.toLowerCase(), -1) > -1
                : true;
        });
        const sortItems = filterItems.sort((a, b) => a.order - b.order);
        const mapItems  = filterItems.map((value, i) => {
            return (
                <Tile
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
                />
            );
        });
        Log('Filter Items', filterItems);
        return mapItems;
    }
    tagNav = () => {
        // List of Tags
        const tagSplit = this.state.items.map((x) => x.tags.split(','));
        // Merge Tags & sort
        const tagArray = [].concat(...tagSplit);
        // Remove Duplicates
        const tags = [...new Set(tagArray)];
        return (
            <div className="tag-nav-wrapper">
                <div className="tag-nav-headline">
                    <h2>{this.state.visibility}</h2>
                </div>
                <div className="tag-nav-listing">
                    <ul>
                        <li className="tag-nav-item">
                            <button
                                data-value="Boomi Solutions"
                                onClick={this.tileFilterAction}
                            >
                                All
                            </button>
                        </li>
                        {tags.sort().map((tag, i) => (
                            <li key={i} className="tag-nav-item">
                                <button
                                    className=""
                                    data-value={tag.toLowerCase()}
                                    onClick={this.tileFilterAction}
                                >
                                    {tag}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="wrapper">
            <TagNav
                items={this.state.items}
                headline={this.state.visibility}
                buttonAction={this.tileFilterAction}
            />
                <div className="tile-wrapper">
                    <ul className="tile-listing">{this.tileList()}</ul>
                </div>
            </div>
        );
    }
}

manywho.component.register('tile-component', Tiles);
export default Tiles;
