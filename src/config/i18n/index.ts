  
import en from './en.json';
import es from './es.json';

export const translate = (key: string, language: string): string => {
  let langData: { [key: string]: string } = {};

  if(language === 'EN') {
    langData = en;
  }else if(language === 'ES') {
    langData = es;
  }

  return langData[key];
}