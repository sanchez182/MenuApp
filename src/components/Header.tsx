import { useCallback, useState, useEffect, useRef, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store';
import { setLanguage } from '../store/actions/langActions';
import { Typography } from '@material-ui/core';
import { translate } from '../config/i18n';

interface HeaderProps {
  fixed?: boolean;
  transparent?: boolean;
}

const Header: FC<HeaderProps> = ({ fixed, transparent }) => {
  const { language } = useSelector((state: RootState) => state.lang);
  const dispatch = useDispatch();
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
    dispatch(setLanguage(value));
  }

  return(
    <header className={"header header--fixed"}  id="myHeader">
      <div className="container">
        <Typography variant="h4" component="h4"
            align="center">{translate("textSelectTable",language)}  </Typography>
        <div className="header__nav">
          <div className="header__nav_lang">
            <p className="selected" onClick={() => setShowDropdown(true)}>{language}</p>
            {showDropdown && <ul className="dropdown" ref={dropdownEl}>
                <li onClick={() => chooseLanguageHandler('EN')}>EN</li>  
                <li onClick={() => chooseLanguageHandler('ES')}>ES</li>  
              </ul>
            }
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;