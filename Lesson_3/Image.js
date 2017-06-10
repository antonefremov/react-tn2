import React from 'react';
import PropTypes from 'prop-types';

function Image(props) {
    return <img src={props.src}
                width={props.width}
                height={props.height}
                alt={props.alt}/>;
}

Image.defaultProps = {
    src: "./../DefaultBlogImage.jpg",
    alt: "No Image Provided",
    width: "200px",
    height: "100px"
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Image;
