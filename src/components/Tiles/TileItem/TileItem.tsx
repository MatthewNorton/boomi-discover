import * as React from 'react';
/* ########################## */
/* ##### INVIDIUAL TILE Template ##### */
/* ########################## */
const Tile = (props: {
    icon: string,
    tagged: any,
    liveUrl: string,
    learnUrl: string,
    title: string,
    description: string,
    image: string,
    order: string,

}) => {
    return (
        <li key={props.tagged} className="tile-item">
            <div className="tile-img">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="tile-content" data-order={props.order}>
                <div className="tile-icon">
                    <img src={props.icon} alt={props.title} />
                </div>
                <div className="tile-title">
                    <h3>{props.title}</h3>
                </div>
                <div className="tile-description">
                    <p>{props.description}</p>
                </div>
                <div className="tile-cta">
                    {props.liveUrl.length > 0 && (

                        <a
                            href={props.liveUrl}
                            data-name="Live Example"
                            className="btn btn-primary cta-primary"
                            target="_blank"
                        />
                )}
                    <a
                        className="btn btn-primary ghost cta-secondary"
                        data-name="Learn More"
                        href={props.learnUrl}
                        target="_blank"
                    />
                </div>
                <div className="tile-label">
                    {props.tagged.map((tag: any) => (
                        <span
                            data-value={tag}
                            className="label label-warning"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </li>
    );
};

export default Tile;
