import * as React from 'react';

/* ########################## */
/* ##### INVIDIUAL TILE Template ##### */
/* ########################## */

const TagNav = ({
    items,
    headline,
    buttonAction,
}) => {
    // List of Tags
    const tagSplit = items.map((x) => x.tags.split(','));
    // Merge Tags & sort
    const tagArray = [].concat(...tagSplit);
    // Remove Duplicates
    const tags = [...new Set(tagArray)];
    return (
        <div className="tag-nav-wrapper">
            <div className="tag-nav-headline">
                <h2>{headline}</h2>
            </div>
            <div className="tag-nav-listing">
                <ul>
                    <li className="tag-nav-item">
                        <button
                            data-value="Boomi Solutions"
                            onClick={buttonAction}
                        >
                            All
                        </button>
                    </li>
                    {tags.sort().map((tag, i) => (
                        <li key={i} className="tag-nav-item">
                            <button
                                className=""
                                data-value={tag.toLowerCase()}
                                onClick={buttonAction}
                            >
                                {tag}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default TagNav;
