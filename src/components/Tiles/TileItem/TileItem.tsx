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
    click: any,

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
                    <h4>{props.title}</h4>
                </div>
                <div className="tile-description">
                    <p>{props.description}</p>
                </div>
                {props.liveUrl.length > 0 && (
                    <div className="tile-live">
                        <a
                            href={props.liveUrl}
                            data-name="Live Example"
                            className="btn btn-primary"
                            target="_blank"
                        />
                    </div>
                )}
                <div className="tile-learn">
                    <a
                        className="btn btn-primary ghost"
                        data-name="Learn More"
                        href={props.learnUrl}
                        target="_blank"
                    />
                </div>

                <div className="tile-label">
                    {props.tagged.map((tag: any) => (
                        <span
                            data-value={tag}
                            onClick={props.click}
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
