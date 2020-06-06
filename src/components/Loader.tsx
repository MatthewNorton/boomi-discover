declare var manywho: any;

import * as React from 'react';
import Tags from './Tags/Tags';
import Tiles from './Tiles/Tiles';

class Loader extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {

  }
    render() {
        return (
        <div className="wrapper">
            <Tiles />
        </div>

    );

  }
}

manywho.component.register('loader', Loader);
export default Loader;
