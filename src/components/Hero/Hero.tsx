declare var manywho: any;

import * as React from 'react';

class Hero extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
        items: [],
    };
}
  heroBuild = () => {

        // Get the component's model, which includes any values bound to it
        const model = manywho.model.getComponent(this.props.id, this.props.flowKey);
        const columns = manywho.component.getDisplayColumns(model.columns);

        // Create the map in an element on the page

            // Add Later
            // const grade = result.properties.find((property: any) => property.typeElementPropertyId === columns[6].typeElementPropertyId);

        // data for options & this.setstate

        model.objectData.forEach((result: any) => {
            const title = result.properties.find((property: any) => property.typeElementPropertyId === columns[0].typeElementPropertyId);
            const description = result.properties.find((property: any) => property.typeElementPropertyId === columns[1].typeElementPropertyId);
            const buttonTitle = result.properties.find((property: any) => property.typeElementPropertyId === columns[2].typeElementPropertyId);
            const buttonHref = result.properties.find((property: any) => property.typeElementPropertyId === columns[3].typeElementPropertyId);
            const buttonTarget = result.properties.find((property: any) => property.typeElementPropertyId === columns[4].typeElementPropertyId);
            const backgroundGradient = result.properties.find((property: any) => property.typeElementPropertyId === columns[5].typeElementPropertyId);
            const backgroundPattern = result.properties.find((property: any) => property.typeElementPropertyId === columns[6].typeElementPropertyId);
            const videoSource = result.properties.find((property: any) => property.typeElementPropertyId === columns[7].typeElementPropertyId);

            this.state.items.push({
              title: title.contentValue,
              description: description.contentValue,
              buttonTitle: buttonTitle.contentValue,
              buttonHref: buttonHref.contentValue,
              buttonTarget: buttonTarget.contentValue,
              backgroundGradient: backgroundGradient.contentValue,
              backgroundPattern: backgroundPattern.contentValue,
              videoSource: videoSource.contentValue,
            });

        });

        const itemArray = this.state.items;
        const map1 = itemArray.map((x) => x);
        console.log('Title', map1);
    }

  componentDidMount() {
      this.heroBuild();
    }
  render() {

      return (<div className="wrapper">
            { this.state.items.map((value, index) => {
              return <div className="hero-container">
                <div className="hero-wrapper">
                   <div key={index} className="hero-content">
                      <h1 className="hero-title">{value.title}</h1>
                      <h3 className="hero-description">{value.description}</h3>
                      <a href={value.buttonHref} target={value.buttonTarget} className="btn btn-primary">{value.buttonTitle}</a>
                    </div>

                    <div className="hero-dot">
                      <video
                        playsinline={true}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        width="100%"
                        height="100%"
                        >
                        <source src={value.videoSource} type="video/mp4"></source>
                      </video>
                    </div>
                </div>
              </div>;
              })
            }
          </div>
        );
    }
}
manywho.component.register('hero', Hero);
export default Hero;
