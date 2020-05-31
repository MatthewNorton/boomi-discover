declare var manywho: any;

import * as React from 'react';
import { t } from 'testcafe';

class Tiles extends React.Component<any, any> {
    constructor(props: any) {
      super(props);

      this.state = {
          items: [

            {
                icon: 'https://files-manywho-com.s3.amazonaws.com/833169c7-3807-43da-b087-0995e4eb67c4/Charity-and-Donation-LG.png',
                title: 'Answers On Demand (Boomi for Good)',
                description: 'Communicate with everyone using this easy-to-implement FAQ Portal and chatbot. This solution can be seamlessly integrated into any existing website. [Free]',
                categories: 'Customer Experience, Workforce Agility',
                example: 'https://boomi.to/bfg',
                Learnmore: 'https://community.boomi.com/s/article/Boomi-For-Good',
            },
            {
                icon: 'https://files-manywho-com.s3.amazonaws.com/833169c7-3807-43da-b087-0995e4eb67c4/Campaign-Statistics-LG.png',
                title: 'Tracking Dashboard',
                description: 'Create a dashboard to display critical data for faster business decisions. This example of a Dashboard for COVID-19 can be duplicated, an use different types of data. [Free]',
                categories: 'Business Analytics, Dashboard, Management, Customer Experience',
                example: 'https://boomi.to/Covid19Tracking',
                Learnmore: 'https://community.boomi.com/s/article/Boomi-and-data-analysis-around-Covid-19-tracking',
            },
            {
                icon: 'https://files-manywho-com.s3.amazonaws.com/833169c7-3807-43da-b087-0995e4eb67c4/Faster-Thinking-LG.png',
                title: 'Boomi Bot framework',
                description: 'A package of pre-built assets to quickly build your chatbot. It supports any combination of business rules and AI, using low-code application development. [Free]',
                categories: 'Customer Experience , Call center Accelerator',
                example: '',
                Learnmore: 'https://community.boomi.com/s/article/Announcing-Boomi-Bot-Framework',
            },
            {
                icon: 'https://files-manywho-com.s3.amazonaws.com/833169c7-3807-43da-b087-0995e4eb67c4/Custom-Code-Implementation-LG.png',
                title: 'Task Management Framework',
                description: 'Agility is the keyword to deliver quick business wins. The tracker application can be used to manage and track tasks across teams, business units, and partners. [Free]',
                categories: 'Project management tracker, Marketing activities tracker',
                example: 'https://boomi.to/taskr',
                Learnmore: 'https://community.boomi.com/s/article/Task-Management-Framework',
            },
            {
                icon: 'https://files-manywho-com.s3.amazonaws.com/833169c7-3807-43da-b087-0995e4eb67c4/Global-Organization-LG.png',
                title: 'Employee Onboarding',
                description: 'Save time onboarding employees, customers, and partners by connecting multiple systems and streamlining processes.[Free]',
                categories: 'Workforce Agility',
                example: 'https://boomi.to/onboard',
                Learnmore: 'https://community.boomi.com/s/article/Video-walkthrough-of-how-Boomi-can-help-with-onboarding-and-offboarding',
            },
            {
                icon: 'https://files-manywho-com.s3.amazonaws.com/833169c7-3807-43da-b087-0995e4eb67c4/Market-Store-LG.png',
                title: 'Retail360',
                description: 'Increase customer engagement by streamline e-commerce operations and reduce costs regardless of the underlying application, catalog, market, or channel. [Free]',
                categories: 'Supply Chain, Retail Order-to-Cash',
                example: 'https://boomi.to/retail360',
                Learnmore: 'https://community.boomi.com/s/article/Retail-360',
            },
            {
                icon: 'https://files-manywho-com.s3.amazonaws.com/833169c7-3807-43da-b087-0995e4eb67c4/Geography-Globe-LG.png',
                title: 'Short URL',
                description: 'Shorten, administer, and track usage of URLs through a managed service application. Use this code to adapt to your needs. [Free]',
                categories: 'e-Commerce, Marketing',
                example: 'https://boomi.to/',
                Learnmore: 'https://community.boomi.com/s/article/Short-URL-Management-using-Boomi',
            },
            {
                icon: 'https://files-manywho-com.s3.amazonaws.com/833169c7-3807-43da-b087-0995e4eb67c4/Automated-Solutions-LG.png',
                title: 'Raspberry Pi',
                description: 'Got innovative ideas? We got you cover to have fun and create something new using Boomi and a Raspberry Pi device. [Free]',
                categories: 'Innovation, IoT, AI',
                example: 'https://boomi.to/rpi',
                Learnmore: 'https://community.boomi.com/s/article/Raspberry-Pi-and-Boomi',
            },
          ],
      };
  }
    render() {
      const state = this.state;
      console.log(this.state);
      const itemProps = this.props;
      console.log('props', this.props);

      const itemArray = state.items.map((x, i) => {
        return x.categories.map((category, j) => {category; });
        },
      );
      console.log(itemArray);
      let example;
      // console.log('Item Array', itemArray);
      // console.log('test element', state.items[0].title);
      return (
            <div className="wrapper">
                  <div className="tile-wrapper">
                    <ul className="container">
                        { state.items.map((value, index) => {
                          return <li className="tile-item" key={index}>
                            <div className="tile-icon"><img src={value.icon} alt={value.title} /></div>
                            <div className="tile-title"><h4>{value.title}</h4></div>
                            <div className="tile-description"><p>{value.description}</p></div>
                            <div className="tile-learnmore"><a className="btn btn-success" href={value.learnmore} target="_blank">Learn More</a></div>
                            { value.example.length > 0 &&
                                <div className="tile-example">
                                  <a href={value.example} className="btn btn-success ghost" target="_blank">Live Example</a>
                                </div>
                            }
                            {/* <div className="tile-label">{value.categories.map((t) => <span className="label label-warning">{t}</span>)}</div> */}
                          </li>;
                          })
                        }
                      </ul>
                  </div>

            </div>

        );
    }
}

manywho.component.register('custom-tiles', Tiles);
export default Tiles;
