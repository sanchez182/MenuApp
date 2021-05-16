import React, { Fragment, FC } from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import aboutImg from '../assets/about.jpg';
import { RootState } from '../store';
import { translate } from '../config/i18n';

const About: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);

  return(
    <Fragment>
      <Header />
      <section className="about">
        <div className="container">
          <h1>{translate('about', language)}</h1>
          <img src={aboutImg} alt="" />
          <p>{translate('aboutUsText', language)}</p>
        </div>
      </section>
    </Fragment>
  );
}

export default About;