import * as React from 'react';

/* ########################## */
/* ##### INVIDIUAL TILE Template ##### */
/* ########################## */

const TagNav = ({
    items,
    buttonAction,
    activeClass,
}) => {
    // List ALLLLL of the Tags + duplicates
    const tagSplit = items.map((x) => x.tags.split(','));
    // Merge Tags & sort
    const tagArray = [].concat(...tagSplit);
    // Remove Duplicates
    const tags = [...new Set(tagArray)];

    return (
        <div className="tag-nav-wrapper">
            <div className="tag-nav-listing">
                <ul>
                    <li className="tag-nav-item">
                        <button
                            data-value="All" // All by default means it will display ALL the tiles
                            onClick={buttonAction}
                            className={activeClass}
                        >
                            All
                        </button>
                    </li>
                    {tags.sort().map((tag, i) => (
                        <li key={i} className="tag-nav-item">
                            <button key={i}
                                data-value={tag.toLowerCase()}
                                onClick={buttonAction}
                                className={activeClass}
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
