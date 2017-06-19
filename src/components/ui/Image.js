import React from 'react';
import PropTypes from 'prop-types';
import {Image as ImageControl} from 'semantic-ui-react';

function Image(props) {
  return (
    <ImageControl
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
      shape='rounded'
    />
  );
}

Image.defaultProps = {
  src: './../DefaultBlogImage.jpg',
  alt: 'No Image Provided',
  width: '200px',
  height: '100px'
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Image;
