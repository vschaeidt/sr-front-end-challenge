import React from 'react';
import PropTypes from 'prop-types';

const BREAKPOINTS = {
    MOBILE: 768,
    TABLET: 1024,
    DESKTOP: 1400,
};

const Img = ({ src, alt, mobileSrc, tabletSrc, desktopSrc }) => {
    return (
        <picture>
            {desktopSrc && <source media={`(max-width: ${BREAKPOINTS.DESKTOP}px)`} srcSet={desktopSrc} />}
            {tabletSrc && <source media={`(max-width: ${BREAKPOINTS.TABLET}px)`} srcSet={tabletSrc} />}
            {mobileSrc && <source media={`(max-width: ${BREAKPOINTS.MOBILE}px)`} srcSet={mobileSrc} />}
            <img src={src} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} />
        </picture>
    );
};

Img.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    mobileSrc: PropTypes.string,
    tabletSrc: PropTypes.string,
    desktopSrc: PropTypes.string,
};

export default Img;

