import * as React from 'react';
declare var manywho: any;

class SomeChildComponent extends React.Component<any, {color, tagMode, tagColumns}> {
    getData = (Data) => {
        const tagModel = manywho.model.getComponent(this.props.id, this.props.flowKey);
        const tagColumns = manywho.component.getDisplayColumns(tagModel.columns);
        tagModel.objectData.forEach((result: any) => {
            const tag = result.properties.find((property: any) => property.typeElementPropertyId === tagColumns[0].typeElementPropertyId);
            console.log(tag);

        });
        return (
            <div>Example</div>
        );

    }
    render() {

        return <p>My favorite color is <div onClick={this.getData}>Test</div>
        {this.getData}
        </p>;
    }
  }
manywho.component.register('tags', SomeChildComponent);
export default SomeChildComponent;
