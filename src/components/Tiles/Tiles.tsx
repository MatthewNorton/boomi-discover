declare const manywho: any;
import * as React from 'react';
import SearchBar from './SearchTile/SearchBar';
import TagNav from './TagNav/TagNav';
import Tile from './Tile/Tile';

/* ########################## */
/* ##### TILES COMPONENT  ##### */
/* ########################## */

class Tiles extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            items: [], /* The array flowData is placed in */
            defaultTag: ' ',
            search: '',
        };
        this.tileFilterAction = this.tileFilterAction.bind(this); // filter ONCLICK action
        this.tileFilteredList = this.tileFilteredList.bind(this); // the filterList after the onclick takes places
        this.searchTiles= this.searchTiles.bind(this); // the filterList after the onclick takes places
        this.tagParam = this.tagParam.bind(this);
    }
    /* ----------------------------
     Wait to load data after runtime.
    --------------------------------*/

    /* Loads the Flow data & &f= param functionality after run time */

    componentDidMount() {
        this.flowData();
        this.tagParam();
    }

    flowData = () => {
        const modelAll = manywho.model.getComponents(this.props.flowKey);
        const items = this.state.items;
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
            items.push({
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
        items.forEach(function(o) {
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
        const param = params.get('f'); //        &f=Retail will filter retail
        if (param === null) {
            this.setState({
                defaultTag: 'All',
            });
        } else {
            this.setState({
                defaultTag: param,
            });
        }
    }

    /* ----------------------------
    ACTION: Click state Creating a clickable filter. Clicking a tag will filter the tiles.
    --------------------------------*/
    tileFilterAction = (event) => {
        this.setState({
            // If default tag === All clear the tag from search to display every tile. Otherwise filter tiles to the tag clicked.
            search:( (event.target.getAttribute('data-value') === 'All' ? '' : event.target.getAttribute('data-value'))),
            defaultTag: event.target.getAttribute('data-value')
        });

    }

    /* ----------------------------
    FILTEREDLIST: Click state Creating a clickable filter. Clicking a tag will filter the tiles.
    --------------------------------*/
    tileFilteredList = () => {
        const defaultTag = this.state.defaultTag;
        const items = this.state.items;
    /* Filter will search through the array based on defaultTag. IE: if data-value === */

        const filterItems = items.filter((item) => {
            // If does NOT = all, then filter based on the data-value.
            return defaultTag !== 'All' ? item.tags.toLowerCase().split(',').join(',').indexOf(defaultTag.toLowerCase(), -1) > -1 : true;

        });

    }

    /* ----------------------------
    SEARCH Event Handler
    --------------------------------*/
    searchTiles = (event) => {
        this.setState({
            search: event.target.value
        });
    }

    /* ----------------------------
    SEARCH Filter
    --------------------------------*/

 render() {
     /* ----------------------------
    SEARCH Filter
    --------------------------------*/
    const tiles = this.state.items;

    // Searching for tile based on text from each tile. 
    let searchTile = (arr, str) => {
        return arr.filter(x => Object.values(x)
         .join(' ')
         .toLowerCase()
         .includes(str.toLowerCase())
         )
    }
    // console.log(this.props.tileFilteredList());
    const filtered = searchTile(tiles, this.state.search);


    return (
        <React.StrictMode>
            <div className="wrapper">
                <SearchBar
                   inputValue={this.state.search}
                   itemSearchOnChange={this.searchTiles}

                />
                <TagNav
                    items={this.state.items}
                    buttonAction={this.tileFilterAction}
                    activeClass=""

                />
                <div className="tile-wrapper">

                    <ul className="tile-listing">
                        {filtered.map((value, i) => {

                            return <Tile
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
                                />;
                        })
                        }

                    </ul>
                </div>
            </div>
        </React.StrictMode>
        );
    }
}

manywho.component.register('tile-component', Tiles);
export default Tiles;
