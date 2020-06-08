declare var manywho: any;
import * as React from 'react';

class Basic extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
          items: [],
      };
  }
    tileLoop = () => {
    const model = manywho.model.getComponent(this.props.id, this.props.flowKey);
    const columns = manywho.component.getDisplayColumns(model.columns);

    // Should not recieve Null
    console.log('Table Array', model.objectData);

    model.objectData.forEach((result: any) => {
        const title = result.properties.find((property: any) => property.typeElementPropertyId === columns[0].typeElementPropertyId);

        // Adds Title Proptery to array to be displayed.
        this.state.items.push({
          title: title.contentValue,
        });

    });
  }
    componentDidMount() {
    // Loaded functions after run time. (Required or otherwise return undefined)
    this.tileLoop();
  }
    render() {
      return (
            <div className="wrapper">
                  <div className="tile-wrapper">
                    <ul className="tile-listing">
                      {this.state.items.title}
                    </ul>
                  </div>
            </div>

        );
    }
}

manywho.component.register('basic-component', Basic);
export default Basic;
