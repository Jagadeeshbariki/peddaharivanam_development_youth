import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccountData from './Account_config.json';
import styles from './Account.module.css'
// import OurFunds from '../OurFunds/OurFunds';

const Account = () => {
  return (<div>

    <div className={styles.Accounting_Dashboard}>
      <h2>Pedda Harivanam Accounting Dashboard</h2>
      <iframe height="450" title='Dashborad' src="https://lookerstudio.google.com/embed/reporting/fb3f640c-29ab-4e04-8130-60fb0e63948a/page/hZKFF" frameborder="0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>
    </div>
    <div className={`${styles.ConsolidatedReport}`}>
     <a href='https://egramswaraj.gov.in/FileRedirect.jsp?FD=ExpFY2024-2025/28&name=203887.html' target='_blank' rel="noopener noreferrer">Consolidated Report</a>
    </div>
    <Accordion defaultActiveKey="0">
      {AccountData.map((finance, yearIndex) => (
        <Accordion.Item eventKey={`year-${yearIndex}`} key={yearIndex}>
          <Accordion.Header>{finance.year}</Accordion.Header>
          <Accordion.Body>
            <Accordion>
              {finance.Months.map((monthData, monthIndex) => (
                <Accordion.Item
                  eventKey={`month-${yearIndex}-${monthIndex}`}
                  key={monthIndex}
                >
                  <Accordion.Header>{monthData.month}</Accordion.Header>
                  <Accordion.Body>
                    <h5>Income</h5>
                    {monthData.details.Income.length > 0 ? (
                      monthData.details.Income.map((income, incomeIndex) => (
                        <div key={incomeIndex}>
                          
                          <a
                            href={income.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p>{income.description}</p>
                          </a>
                        </div>
                      ))
                    ) : (
                      <p>No Income recorded for this month</p>
                    )}

                    <h5>Expenditure</h5>
                    {monthData.details.Expenditure.length > 0 ? (
                      monthData.details.Expenditure.map(
                        (expenditure, expenditureIndex) => (
                          <div key={expenditureIndex}>
                            
                            <a
                              href={expenditure.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <p>{expenditure.description}</p>
                            </a>
                          </div>
                        )
                      )
                    ) : (
                      <p>No Expenditure recorded for this month</p>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
      {/* <div>
        <OurFunds/>
      </div> */}
  </div>);
};

export default Account;
