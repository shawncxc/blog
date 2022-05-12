import React, { useContext } from 'react';
import me from '../../public/images/me.jpeg';
import { LangContext } from '../../pages/resume';
import styles from '../../styles/skill.module.css';

function Skill() {
  const lang = useContext(LangContext);

  let title = 'Skill';
  let skills = {
    'Mangement': ["Scrum master", "Sprint planning and grooming"],
    Language: ["JavaScript", "Java", "Python"],
    Frontend: ["React", "JQuery", "Webpack", "HTML", "CSS", "Bootstrap"],
    Backend: ["Node.js (Express, Koa)", "Meteor.js", "Mongoose"],
    Database: ["MongoDB", "Elasticsearch", "Redis", "PostgresQL", "MySQL"],
    Testing: ["Selenium", "Mocha"],
    'Version control': ["Git"],
  };

  if (lang === 'cn') {
    title = '技能';
    skills = {
      管理: ["敏捷开发专家", "跨时区团队管理"],
      开发语言: ["JavaScript(精通)", "Java(掌握)", "Python(掌握)"],
      前端: ["React", "JQuery", "Webpack", "HTML", "CSS", "Bootstrap"],
      后端: ["Node.js (Express, Koa)", "Meteor.js", "Mongoose"],
      数据库: ["MongoDB", "Elasticsearch", "Redis", "PostgresQL", "MySQL"],
      测试: ["Selenium", "Mocha"],
      版本控制: ["Git"],
      语言:["英语(能与外国同事、客户流利交流)", "普通话(母语水平)"],
    };
  }

  return (
    <div className={`container bottom-divider ${ styles.skill }`}>
      <div className="title">{ title }</div>
      <div className={ styles.skillCategoryContainer }>
        <div className={ styles.skillCategoryCol }>
        {
          Object.keys(skills).map(category => {
            return (
              <div className={ styles.skillCategoryItem } key={ category }>
                { category + ":" }
              </div>
            );
          })
        }
        </div>
        <div className={ styles.skillCategoryCol }>
        {
          Object.keys(skills).map(category => {
            return (
              <div className={styles.skillItem } key={ category } style={ lang === 'cn' ? { marginTop: '1px' } : {}}>
                {
                  skills[category].join(", ")
                }
              </div>
            );
          })
        }
        </div>
        <div className={ styles.skillCategoryCol } style={{ marginLeft: "auto" }}>
        {
          lang === 'cn' ?
          <img src="/images/me.jpeg" alt="me" height="144" /> : ""
        }
        </div>
      </div>
    </div>
  );
}

export default Skill;
