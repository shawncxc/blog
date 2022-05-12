import React, { useContext } from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { LangContext } from '../../pages/resume';
import styles from '../../styles/basicInfo.module.css';

function BasicInfo() {
  const lang = useContext(LangContext);

  let basicInfo = {
    name: "Xuchang Chen",
    github: "https://github.com/shawncxc",
    linkedin: "https://www.linkedin.com/in/xuchangchen",
    address: "Shanghai, China",
    email: "chen_xu_chang@163.com",
  };

  if (lang === 'cn') {
    basicInfo = {
      name: "陈旭昶",
      github: "https://github.com/shawncxc",
      linkedin: "https://www.linkedin.com/in/xuchangchen",
      address: "上海",
      phone: "15021627210",
      email: "chen_xu_chang@163.com",
      age: "31岁",
      education: "硕士",
    };
  }

  return (
    <div className={`container bottom-divider ${styles.basicInfo}`}>
      <div className={ styles.basicInfoPrimary }>
        <div className={ styles.basicInfoPrimaryItem }>{ basicInfo.name }</div>
      </div>
      <div className={ styles.basicInfoSecondary }>
        <div className={ styles.basicInfoSecondaryRow }>
          <div className={ styles.basicInfoSecondaryItem } style={{ margin: 0 }}>{ basicInfo.address }</div>
          {
            basicInfo.age ?
            <div className={ styles.basicInfoSecondaryItem } style={{ margin: 0 }}>/{ basicInfo.age }</div> : ""
          }
          {
            basicInfo.education ?
            <div className={ styles.basicInfoSecondaryItem } style={{ margin: 0 }}>/{ basicInfo.education }</div> : ""
          }
          {
            basicInfo.phone ?
            <div className={ styles.basicInfoSecondaryItem } style={{ margin: 0 }}>/{ basicInfo.phone }</div> : ""
          }
        </div>
        <div className={ styles.basicInfoSecondaryRow }>
          <div className={ styles.basicInfoSecondaryItem }><FaEnvelope className={ styles.basicInfoIcon } /> { basicInfo.email }</div>
          <div className={ styles.basicInfoSecondaryItem }><FaLinkedinIn className={ styles.basicInfoIcon } /> { basicInfo.linkedin }</div>
          <div className={ styles.basicInfoSecondaryItem }><FaGithub className={ styles.basicInfoIcon } /> { basicInfo.github }</div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
