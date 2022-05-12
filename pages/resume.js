import Head from 'next/head';
import Link from 'next/link';
import React, { createContext, useState } from 'react';
import BasicInfo from '../components/resume/basicInfo';
import Skill from '../components/resume/skill';
import Experience from '../components/resume/experience';
import Education from '../components/resume/education';
import styles from '../styles/resume.module.css';

const siteTitle = 'Xuchang Chen\' Resume';
const enLang = 'en';
const cnLang = 'cn';
export const LangContext = createContext(enLang);

export default function Resume() {
  const [lang, setLang] = useState(enLang);

  const toggleLanguage = () => {
    setLang(lang === enLang ? cnLang : enLang);
  };

  return (
    <LangContext.Provider value={ lang }>
      <div className={ styles.resumeContainer }>
        <div className={ styles.resumeAction }>
          <div className={`hidden-print ${ styles.resumeActionItem }`}  onClick={ toggleLanguage }>
            <Link href="">
              <a>{ lang === enLang ? '中文' : 'English' }</a>
            </Link>
          </div>
          <div className={`hidden-print ${ styles.resumeActionItem }`}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        </div>
        <BasicInfo />
        <Skill />
        <Experience />
        <Education />
      </div>
    </LangContext.Provider>
  );
}
