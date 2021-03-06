import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styles from './service.module.scss';

const Service = ({ title, text, image }) => {
  const imageData = image.childImageSharp.fluid;

  return (
    <section className={styles.service}>
      <Img className={styles.image} fluid={imageData} />
      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </section>
  );
};

Service.propTypes = {
  image: PropTypes.object.isRequired, // eslint-disable-line
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Service;
