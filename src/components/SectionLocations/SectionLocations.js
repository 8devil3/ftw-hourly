import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import milano from './images/milano.png';
import roma from './images/roma.png';
import torino from './images/torino.png';
import firenze from './images/firenze.png';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      {/* <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div> */}
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Milano',
          milano,
          'address=Milano%2C provincia di Milano%2C Italia&bounds=45.535879%2C9.278131%2C45.386746%2C9.041552'
        )}
        {locationLink(
          'Roma',
          roma,
          'address=Roma%2C Roma%2C Italia&bounds=42.140911%2C12.855979%2C41.65548%2C12.234478'
        )}
        {locationLink(
          'Torino',
          torino,
          'address=Torino%2C provincia di Torino%2C Italia&bounds=45.140261%2C7.773509%2C45.005561%2C7.578021'
        )}
        {locationLink(
          'Firenze',
          firenze,
          'address=Firenze%2C provincia di Firenze%2C Italia&bounds=43.83523%2C11.340048%2C43.72593%2C11.149911'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
