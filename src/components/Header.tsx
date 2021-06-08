import { useCallback, useState, useEffect, useRef, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store';
import { setLanguage } from '../store/actions/langActions';
import { Typography } from '@material-ui/core';
import  i18n from '../config/i18n';
import {useTranslation} from "react-i18next"
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  fixed?: boolean;
  transparent?: boolean;
}

export const Header = ({ fixed, transparent } :HeaderProps) => {
  const { language } = useSelector((state: RootState) => state.lang);
  const dispatch = useDispatch();
  
  const { t } = useTranslation(); 

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownEl = useRef<HTMLUListElement>(null);

  const handleClickOutside = useCallback((e) => {
    if(showDropdown && e.target.closest('.dropdown') !== dropdownEl.current) {
      setShowDropdown(false);
    }
  }, [showDropdown, setShowDropdown, dropdownEl]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [handleClickOutside]);

  const chooseLanguageHandler = (value: string) => {
    setShowDropdown(false);
    dispatch(setLanguage(value.toUpperCase()));
    i18n.changeLanguage(value);
  }

  return(
    <header className={"header header--fixed"}  id="myHeader">
      <div className="container">
        <Typography variant="h4" component="h4"
            align="center">{t("textSelectTable",language)}  </Typography> 
        <div className="header__nav">
          <div className="header__nav_lang">
            <p className="selected" onClick={() => setShowDropdown(true)}>{language}</p>
            {showDropdown && <ul className="dropdown" ref={dropdownEl}>
                <li onClick={() => chooseLanguageHandler('en')}>EN</li>  
                <li onClick={() => chooseLanguageHandler('es')}>ES</li>  
              </ul>
            }
          </div>
          <ul className="header__nav_menu">
            <li><NavLink to="/" exact>{t('home', language)}</NavLink></li>
            <li><NavLink to="/about" exact>{t('about', language)}</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default  Header;