import React, { useContext } from 'react';
import { LangContext } from '../../pages/resume';
import styles from '../../styles/education.module.css';

function Education() {
  const lang = useContext(LangContext);

  let title = 'Education';
  let education = [
    {
      school: "Stevens Institute of Technology",
      image: "https://media-exp1.licdn.com/dms/image/C560BAQGBZSn1pn_X7A/company-logo_100_100/0/1519856338281?e=1655942400&v=beta&t=Cz4GRG7d9m3BAOGnclz4SUxenrGOq8P29sB0IqOObq0",
      degree: "Master of Engineering (M.Eng.), Electrical and Electronics Engineering",
      duration: "2013 – 2015",
    },
    {
      school: "East China University of Science and Technology",
      image: "https://media-exp1.licdn.com/dms/image/C4E0BAQGQRN2f7g43mg/company-logo_100_100/0/1519871402439?e=1655942400&v=beta&t=pPI8iAEr6cKYdgAs0C6oXA4pDDG9tO-UoiPO1VXBmV4",
      degree: "Bachelor of Applied Science (B.A.Sc.), Electrical and Electronics Engineering",
      duration: "2009 – 2013",
    },
  ];

  if (lang === 'cn') {
    title = '教育背景';
    education = [
      {
        school: "斯蒂文斯理工学院 Stevens Institute of Technology",
        image: "https://media-exp1.licdn.com/dms/image/C560BAQGBZSn1pn_X7A/company-logo_100_100/0/1519856338281?e=1655942400&v=beta&t=Cz4GRG7d9m3BAOGnclz4SUxenrGOq8P29sB0IqOObq0",
        degree: "工学硕士学位，电子电气工程",
        duration: "2013 – 2015",
      },
      {
        school: "华东理工大学",
        image: "https://media-exp1.licdn.com/dms/image/C4E0BAQGQRN2f7g43mg/company-logo_100_100/0/1519871402439?e=1655942400&v=beta&t=pPI8iAEr6cKYdgAs0C6oXA4pDDG9tO-UoiPO1VXBmV4",
        degree: "理学学士学位，电子电气工程",
        duration: "2009 – 2013",
      },
    ];
  }

  return (
    <div className={`container ${ styles.education }`}>
      <div className="title">{ title }</div>
      {
        education.map(edu => {
          return (
            <div className={ styles.educationItem } key={ edu.school }>
              <img className={ styles.educationImg } src={ edu.image } />
              <div className={ styles.educationContent }>
                <div className={ styles.educationSchool }>{ edu.school }</div>
                <div className={`${ styles.educationDegree } secondary-text`}>{ edu.degree }</div>
                <div className={`${ styles.educationDuration } secondary-text`}>{ edu.duration }</div>
              </div>
            </div>
          );
        })    
      }
    </div>
  );
}

export default Education;
