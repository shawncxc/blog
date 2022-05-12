import React, { useContext } from 'react';
import { LangContext } from '../../pages/resume';
import styles from '../../styles/experience.module.css';

function Experience() {
  const lang = useContext(LangContext);

  let title = 'Experience';
  let experience = [
    {
      company: "ServiceNow",
      image: "https://media-exp1.licdn.com/dms/image/C560BAQEuzVBzTq8wqA/company-logo_100_100/0/1642492123759?e=1655942400&v=beta&t=mHX55yF2l5XJDmBhN7AaX6IRWaRrqnsCHfpm6vpTkQg",
      title: "Staff Software Engineer",
      duration: "Sep 2020 - Mar 2022",
      location: "San Francisco, CA",
      content:
        `<li>Helped grow business unit's annual contract value (ACV) from 100M to 200M in two year (2020 - 2022).</li>` +
        `<li>Managed and led a group of 10 engineers based in both US and India while still implementing functionalities.</li>` +
        `<li>Acted as the scrum master to conduct meetings for sprint planning and grooming.</li>` +
        `<li>Coordinated between product manager and team members to better achieve project requirements and goals.</li>` +
        `<li>Communicated directly with customers to understand user needs, then utilized feedback and turn it into product roadmap as enhancement goals.</li>` +
        `<li>Conduct team retrospectives after each major release to enhance team work efficiency.</li>`,
    },
    {
      company: "ServiceNow",
      image: "https://media-exp1.licdn.com/dms/image/C560BAQEuzVBzTq8wqA/company-logo_100_100/0/1642492123759?e=1655942400&v=beta&t=mHX55yF2l5XJDmBhN7AaX6IRWaRrqnsCHfpm6vpTkQg",
      title: "Senior Software Engineer",
      duration: "Feb 2019 - Sep 2020",
      location: "San Francisco, CA",
      content:
        `<li>Led, designed and implemented a brand new React, Redux and Webpack based cyber security case management portal for the security analysts to manage, investigate and remediate cyber security alerts.</li>` +
        `<li>Implemented Node.js based RESTful APIs for the above cyber security portal to consume.</li>` +
        `<li>Conduct technical design reviews on critical features and functionalities within the team of 5 engineers.</li>` +
        `<li>Wrote automated end to end tests using Selenium.</li>`,
    },
    {
      company: "ServiceNow",
      image: "https://media-exp1.licdn.com/dms/image/C560BAQEuzVBzTq8wqA/company-logo_100_100/0/1642492123759?e=1655942400&v=beta&t=mHX55yF2l5XJDmBhN7AaX6IRWaRrqnsCHfpm6vpTkQg",
      title: "Software Engineer",
      duration: "Apr 2017 - Feb 2019",
      location: "San Francisco, CA",
      content:
        `<li>Mostly worked on the integration part of the ServiceNow cyber security orchestration automation and response (SOAR) application.</li>` +
        `<li>Implemented high data volumn ingestion for third party vulnerability scanner like Qualys, Rapid7, etc. to bring vulnerability data onto ServiceNow platform. (1M records per day on an average customer)</li>` +
        `<li>Created REST API based Splunk integration to forward log alerts to ServiceNow platform near real-time.</li>` +
        `<li>Created a Python based plugin in IBM QRadar app store that forwards log alerts to ServiceNow platform near real-time.</li>` +
        `<li>Created an AWS Security Hub integration to forward critical log events using Lambda (Node.js) and CloudWatch to ServiceNow platform near real-time.</li>` +
        `<li>Implemented Java based unit test (JUnit) to ensure the quality of the integration application.</li>` +
        `<li>Worked with support engineers and customers closely on resolving P1 cases to ensure that the customers have a great experience with our product.</li>`,
    },
    {
      company: "Dispatchr - Joined the startup as employee No.7",
      image: "https://media-exp1.licdn.com/dms/image/C4D0BAQEWiug11pKndQ/company-logo_100_100/0/1519910063963?e=1655942400&v=beta&t=j5XCx70dMUpFL5nbHrymDq9XTTqlM68pFEmhXuJItCo",
      title: "Full Stack Developer",
      duration: "Nov 2015 - Apr 2017",
      location: "San Francisco, CA",
      content:
        `<li>Built geo-location based asset management system for large utility companies like Pacific Gas and Electric Company (PG&E) and Southern California Edison (SCE) to digitalize their work flow and improve the work efficiency.</li>` +
        `<li>Implemented a Node.js-Mongo based RESTful service for data consumption from the mobile end which is used by the crew on the field to receive and update tasks.</li>` +
        `<li>Designed and implemented Meteor.js based web portal for the manager persona to assign tasks and view reports.</li>` +
        `<li>Integrated ESRI ArcGIS system to fetch the GIS data and ingest into the database.</li>` +
        `<li>Leveraged read-only Elasticsearch geo-clustering to render tasks geographically which improved the rendering speed by 50x.</li>` +
        `<li>Wrote unit tests for RESTful API using Mocha and automated end to end tests for web application using Selenium WebdriverIO, which decreased the system failing rate by 5x.</li>`,
    },
  ];

  if (lang === 'cn') {
    title = '工作经历';
    experience = [
      {
        company: "ServiceNow",
        image: "https://media-exp1.licdn.com/dms/image/C560BAQEuzVBzTq8wqA/company-logo_100_100/0/1642492123759?e=1655942400&v=beta&t=mHX55yF2l5XJDmBhN7AaX6IRWaRrqnsCHfpm6vpTkQg",
        title: "资深软件工程师 - Team Leader",
        duration: "2020 9月 - 2022 3月",
        location: "美国，旧金山",
        content:
          `<li>帮助我们部门（网络安全运用 Security Operactions Business Unit）的年销售额（ACV）在两年间（2020 - 2022）从1亿美金成长为了2亿美金。</li>` +
          `<li>在完成个人工作的基础上管理并领导一个跨双时区（印度 - 美国）的10人小组。</li>` +
          `<li>作为小组的敏捷开发专家（scrum master）带领小组成员对冲刺阶段（sprint）的工作（story）进行计划以及分配。</li>` +
          `<li>和产品经理有效沟通，成为产品与开发的桥梁，从而使组员能够更加好地理解产品的需求、时间线以及最终目标。</li>` +
          `<li>与客户进行线上线下的沟通，充分理解客户的需求。针对这些反馈，和产品经理一起总结并将这些需求加入未来的产品路线图。</li>` +
          `<li>带领小组开展回顾会议，总结探讨需要改善的地方从而使得未来的敏捷开发更加人性且有效。`,
      },
      {
        company: "ServiceNow",
        image: "https://media-exp1.licdn.com/dms/image/C560BAQEuzVBzTq8wqA/company-logo_100_100/0/1642492123759?e=1655942400&v=beta&t=mHX55yF2l5XJDmBhN7AaX6IRWaRrqnsCHfpm6vpTkQg",
        title: "高级软件工程师",
        duration: "2019 2月 - 2020 9月",
        location: "美国，旧金山",
        content:
          `<li>带领5人小组设计并开发了基于Node.js、React、Redux和Webpack技术栈的web端网络安全事件管理平台，该平台可以使网络安全分析员收集网络安全威胁情报、管理网络安全事件并最终消除安全隐患。</li>` +
            `<ul>` + 
              `<li>运用React和Redux实现了网络安全事件管理平台的前端，同时运用了第三方框架Highcharts实现了对事件相关的网络威胁情报、事后报告以及网络安全防御的数据可视化处理。</li>` +
              `<li>建立了基于Node.js的RESTful service用以支持React web端。</li>` +
              `<li>实现了基于Selenium的web前端自动化闭环功能性测试。</li>` +
            `</ul>` +
          `<li>带领小组成员开展了针对关键功能模块的技术设计上的审核讨论。</li>`,
      },
      {
        company: "ServiceNow",
        image: "https://media-exp1.licdn.com/dms/image/C560BAQEuzVBzTq8wqA/company-logo_100_100/0/1642492123759?e=1655942400&v=beta&t=mHX55yF2l5XJDmBhN7AaX6IRWaRrqnsCHfpm6vpTkQg",
        title: "软件工程师",
        duration: "2017 4月 - 2019 2月",
        location: "美国，旧金山",
        content:
          `<li>主要负责在ServiceNow的网络安全编排自动化和响应平台（SOAR）上开发针对第三方的网络安全信息（漏洞信息以及防火墙警报）的集成。</li>` +
          `<li>实现了将第三方网络漏洞扫描平台（Qualys，Rapid7等）的数据集成到ServiceNow平台上，从而使用户能够在一个平台上管理监并控多个第三方的数据源。</li>` +
          `<li>在ServiceNow平台上设计并开发了多个针对第三方日志警报的近实时集成，从而使得用户能够在一个平台上管理并监控多个第三方日志警报源：</li>` +
            `<ul>` +
              `<li>设计并实现了基于REST、针对Splunk的日志警报集成。</li>` +
              `<li>设计并开发了基于IBM QRadar Python框架、针对IBM QRadar的日志警报集成。</li>` +
              `<li>设计并开发了基于Lambda（Node.js）和CloudWatch、针对AWS Security Hub的日志警报集成。</li>` +
            `</ul>` +
            `<li>运用Java（JUnit）实现对于集成应用的模块化测试。</li>` +
            `<li>和支持工程师以及客户紧密地联合在一起来解决P1级别的客户问题，从而确保了客户能够拥有优质的用户体验。</li>`,
      },
      {
        company: "Dispatchr - 初创公司第七位员工",
        image: "https://media-exp1.licdn.com/dms/image/C4D0BAQEWiug11pKndQ/company-logo_100_100/0/1519910063963?e=1655942400&v=beta&t=j5XCx70dMUpFL5nbHrymDq9XTTqlM68pFEmhXuJItCo",
        title: "全栈工程师",
        duration: "2015 11月 - 2017 4月",
        location: "美国，旧金山",
        content:
          `<li>参与开发了基于地理位置的线上设施管理平台，该平台被北美各大电力公司（例如：Pacific Gas and Electric Company (PG&E)，Southern California Edison (SCE)，等等）运用来：` +
          `<ul>` +
            `<li>可视化不同地点的修理、应急、日常维护任务及其状态。</li>` +
            `<li>分配任务至现场工人的移动端，并计算任务最优路径。</li>` +
            `<li>对工程进展进行可视化并提供电子报告。</li>` +
          `</ul>` +
          `<li>运用Node.js和MongoDB实现了一个基于REST的API。该API被用于对工地现场工作人员的移动设备提供数据支持，从而使他们能够及时接受任务、获悉路线、反馈进度。</li>` +
          `<li>设计并实现了以Meteor.js为框架的网页端App。管理者用户使用该App进行基于地理位置的工作分配，并且可以运用App中的数据可视化功能来了解并上报工作进度。</li>` +
          `<li>设计并实现了一个基于Node.js的数据收集服务。该服务将ESRI ArcGIS平台上的设施地理位置信息整合并集成到我方平台中统一管理，并且为工作分配提供数据支持。</li>` +
          `<li>运用了基于只读型Elasticsearch的Geo Clustering功能提升了地理位置信息在网页App端的显示速度，显示速度提升达50x。</li>` +
          `<li>运用Mocha完成了针对REST API的单元测试，运用Selenium完成了针对网页前端的自动化闭环测试。</li>`,
      },
    ];
  }

  return (
    <div className={`container bottom-divider ${ styles.experience }`}>
      <div className="title">{ title }</div>
      {
        experience.map(exp => {
          return (
            <div className={ styles.experienceItem } key={ exp.title }>
              <img className={ styles.experienceImg } src={ exp.image } />
              <div className={ styles.experienceContent }>
                <div className={ styles.experienceTitle }>{ exp.title }</div>
                <div className={`${ styles.experienceCompany } secondary-text`}>{ exp.company }</div>
                <div className={`${ styles.experienceDuration } secondary-text`}>{ exp.duration }</div>
                <div className={`${ styles.experienceLocation } secondary-text`}>{ exp.location }</div>
                <div className={ styles.experienceText } dangerouslySetInnerHTML={{ __html: exp.content }} />
                  {/* {
                    exp.content.map((line, index) => <li key={ index }>{ line }</li>)
                  }
                </div> */}
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Experience;
