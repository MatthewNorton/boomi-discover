import * as React from 'react';

/* ########################## */
/* ##### INVIDIUAL TILE Template ##### */
/* ########################## */
const Tile = ({
    icon,
    tagged,
    liveUrl,
    learnUrl,
    title,
    description,
    image,
    order,
    click,
}) => {
    return (
        <li key={tagged} className="tile-item">
            <div className="tile-img">
                <img src={image} alt={title} />
            </div>
            <div className="tile-content" data-order={order}>
                <div className="tile-icon">
                    <img src={icon} alt={title} />
                </div>
                <div className="tile-title">
                    <h4>{title}</h4>
                </div>
                <div className="tile-description">
                    <p>{description}</p>
                </div>
                <div className="tile-learn">
                    <a
                        className="btn btn-success"
                        data-name="Learn More"
                        href={learnUrl}
                        target="_blank"
                    ></a>
                </div>
                {liveUrl.length > 0 && (
                    <div className="tile-live">
                        <a
                            href={liveUrl}
                            data-name="Live Example"
                            className="btn btn-success ghost"
                            target="_blank"
                        ></a>
                    </div>
                )}
                <div className="tile-label">
                    {tagged.map((tag) => (
                        <span
                            data-value={tag}
                            onClick={click}
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
