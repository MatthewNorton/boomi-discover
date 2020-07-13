declare var manywho: any;

/* Workflow Component Structure

 2. Tile Nav [Where the tag nav module lives]
 3. Tile Item [Where the individual tile module lives]
 4. Tile Wrapper [Is where all the modules come together form the tile component]

 [Tile Item] & [Tag Nav] =>
 [Tile Wrapper]

*/

import * as React from 'react';
import TagNav from './TagNav/TagNav';
import Tile from './TileItem/TileItem';

/* ########################## */
/* ##### TILES COMPONENT  ##### */
/* ########################## */

class TileWrapper extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            items: [],
            visibility: 'Boomi Solutions',
        };
        this.tileFilterAction = this.tileFilterAction.bind(this);
        this.tileFilteredList = this.tileFilteredList.bind(this);
        this.tagParam = this.tagParam.bind(this);
    }
    /* ----------------------------
     Wait to load data after runtime.
    --------------------------------*/

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
        // items.fetchPosts().then((response) => {
        //     this.setState({
        //       posts: response.posts,
        //     });
        //   });

        // console.log(this.state.posts);
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
        const param = params.get('f'); // is the string "Customer Experience"
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

    /* ----------------------------
    ACTION: Click state Creating a clickable filter. Clicking a tag will filter the tiles.

    --------------------------------*/
    tileFilterAction = (event) => {
        this.setState({
            visibility: event.target.getAttribute('data-value'),
        });

    }

    /* ----------------------------
    FILTEREDLIST: Click state Creating a clickable filter. Clicking a tag will filter the tiles.

    --------------------------------*/
    tileFilteredList = () => {
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
                    click={value.click}
                />
            );
        });

        return mapItems;
    }

    render() {
        return (
            <div className="wrapper">

                <TagNav
                    items={this.state.items}
                    buttonAction={this.tileFilterAction}
                    activeClass="test"

                />
                <div className="tile-wrapper">
                    <ul className="tile-listing">{this.tileFilteredList()}</ul>
                </div>
            </div>
        );
    }
}

manywho.component.register('tile-component', TileWrapper);
export default TileWrapper;
