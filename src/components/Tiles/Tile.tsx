import * as React from 'react';

interface TileProps {
    icon: string;
    categories: string;
    example: string;
    learnmore: string;
    title: string;
    description: string;
    image: string;
    order: number;
}
const Tile: React.FC<TileProps> = ({ icon, categories, example, learnmore, title, description, image, order }) => {
    return <li className="tile-item">
            <div className="tile-img">
                <img src={image} alt={title}/>
            </div>
            <div className="tile-content" data-order={order}>
                <div className="tile-icon"><img src={icon} alt={title} /></div>
                <div className="tile-title"><h4>{title}</h4></div>
                <div className="tile-description"><p>{description}</p></div>
                <div className="tile-learnmore"><a className="btn btn-success" href={learnmore} target="_blank">Learn More</a></div>
                { example === null &&
                    <div className="tile-example">
                        <a href={example} className="btn btn-success ghost" target="_blank">Live Example</a>
                    </div>
                }
                <div className="tile-label">{categories}</div>
            </div>
        </li>;

};

Tile.defaultProps = {
    icon: 'https://files-manywho-com.s3.amazonaws.com/833169c7-3807-43da-b087-0995e4eb67c4/Charity-and-Donation-LG.png',
    title: 'Answers On Demand (Boomi for Good)',
    description: 'Communicate with everyone using this easy-to-implement FAQ Portal and chatbot. This solution can be seamlessly integrated into any existing website. [Free]',
    categories: 'Customer Experience, Workforce Agility',
    image: 'https://files-manywho-com.s3.amazonaws.com/833169c7-3807-43da-b087-0995e4eb67c4/tile_bg-header-1.jpg',
    example: 'https://boomi.to/bfg',
    learnmore: 'https://community.boomi.com/s/article/Boomi-For-Good',
    order: 0,

};

export default Tile;
