declare var manywho: any;
import * as React from 'react';

/* ########################## */
/* Converts & Loops through a Flow Table into an Array of Data (Data JSON) */
/* ########################## */

const TileData: any = () => {
    const dataItems = [];

    const modelAll = manywho.model.getComponents(this.props.flowKey);
    const model = manywho.model.getComponent(
        this.props.id,
        this.props.flowKey,
    );
    const columns = manywho.component.getDisplayColumns(model.columns);
    const flowTable = model.objectflow;

    flowTable.forEach((result: any) => {
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
        dataItems.push({
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
    // dataItems.fetchPosts().then((response) => {
    //     this.setState({
    //       posts: response.posts,
    //     });
    //   });

    // console.log(this.state.posts);
    /* ----------------------------
  Error cleanup by replacing
  null values with an empty string.
--------------------------------*/
    dataItems.forEach(function(o) {
        Object.keys(o).forEach(function(k) {
            if (o[k] === null) {
                o[k] = '';
            }
        });
    });
    console.log(dataItems);
    return dataItems;
};

export default TileData;
