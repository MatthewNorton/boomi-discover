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
            const button2ndTitle = result.properties.find((property: any) => property.typeElementPropertyId === columns[8].typeElementPropertyId);
            const button2ndHref = result.properties.find((property: any) => property.typeElementPropertyId === columns[9].typeElementPropertyId);
            const button2ndTarget = result.properties.find((property: any) => property.typeElementPropertyId === columns[10].typeElementPropertyId);

            this.state.items.push({
              title: title.contentValue,
              description: description.contentValue,
              buttonTitle: buttonTitle.contentValue,
              buttonHref: buttonHref.contentValue,
              buttonTarget: buttonTarget.contentValue,
              backgroundGradient: backgroundGradient.contentValue,
              backgroundPattern: backgroundPattern.contentValue,
              videoSource: videoSource.contentValue,
              button2ndTitle: button2ndTitle.contentValue,
              button2ndHref: button2ndHref.contentValue,
              button2ndTarget: button2ndTarget.contentValue,
            });

        });
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
                      <a href={value.buttonHref} target={value.buttonTarget} title={value.buttonTitle} className="btn btn-primary">{value.buttonTitle}</a>
                      <a href={value.button2ndHref} target={value.button2ndTarget} title={value.button2ndTitle} className="btn btn-primary ghost">{value.button2ndTitle}</a>
                    </div>

                    <div className="hero-dot">
                      <div id="hero-video">
                          <video
                            playsinline={true}
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            width="100%"
                            height="100%"
                            >
                            <source src={value.videoSource} type="video/mp4"/>
                          </video>
                        </div>
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
