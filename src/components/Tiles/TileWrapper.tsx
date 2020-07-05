declare var manywho: any;

import * as React from 'react';
import Tiles from './Tiles';

class Loader extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
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
