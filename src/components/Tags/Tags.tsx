declare var manywho: any;
import * as React from 'react';

const ListItem = (props) => {
    return(
       // Using Props handleClick as callback function
             <div onClick={() => props.handleClick(props.rowData)}>
                  <p> {props.rowData.company} </p>
                <p> {props.rowData.contact} </p>
                <p> {props.rowData.country} </p>
              </div>
    );
   };

class Tags extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            tagModel: manywho.model.getComponent(this.props.id, this.props.flowKey),
            tagList: [],
        };
    }
    componentDidMount() {
        const tagModel = manywho.model.getComponent(this.props.id, this.props.flowKey);
        const tagColumns = manywho.component.getDisplayColumns(tagModel.columns);
        console.log(tagModel);
        tagModel.objectData.forEach((result: any) => {
            const tag = result.properties.find((property: any) => property.typeElementPropertyId === tagColumns[0].typeElementPropertyId);
            this.state.tagList.push(tag.contentValue);

        });
    }
    getData = (rowData) => {
    // This is the row data from ChildComponent
        console.log(rowData);
        const tagModel = manywho.model.getComponent(this.props.id, this.props.flowKey);
        const tagColumns = manywho.component.getDisplayColumns(tagModel.columns);

        console.log(this.state.tagItem.map((x) => <li>{x}</li>));
    }

    render() {
        return(<div>
            {this.state.tagList.map((x) => <div>{x}</div>)}
        </div>);
    }
  }

manywho.component.register('tags', Tags);
export default Tags;
