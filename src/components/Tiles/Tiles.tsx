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
        this.searchParam = this.searchParam.bind(this);
    }
    /* ----------------------------
     Wait to load data after runtime.
    --------------------------------*/

    /* Loads the Flow data & &f= param functionality after run time */

    componentDidMount() {
        this.flowData();
        this.tagParam();
        this.searchParam(

        );
        // Searching for tile based on text from each tile. 


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
            var nullCheck = true;
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
      function that is used for &f= or &s= url parameter. Example:
    --------------------------------*/
    
    searchParam = () => {
        const sParams = new URLSearchParams(
            document.location.search.substring(1),
        );
        const sParam = sParams.get('s'); //        &f=Retail will filter retail
        if (sParam === null) {
            this.setState({
                search: '',
            });
        } else {
            this.setState({
                search: sParam,
            });
        }
    }

    tagParam = () => {
        const params = new URLSearchParams(
            document.location.search.substring(1),
        );
        const param = params.get('f'); //        &f=Retail will filter retail
        console.log(param);
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
    searchTile = (arr, str) => {
        return arr.filter(x => Object.values(x).join(' ').toLowerCase().includes(str.toLowerCase()))
    }

 render() {
     /* ----------------------------
    SEARCH Filter
    --------------------------------*/

    const filtered = this.searchTile(this.state.items, this.state.search);
    
    // console.log(this.props.tileFilteredList());


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
