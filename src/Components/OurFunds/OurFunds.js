import React from 'react';
import styles from "./OurFunds.module.css";

const OurFunds = () => {
    const SheetURL = "https://docs.google.com/spreadsheets/d/1NkNY9FzI-y--8xINtvH1Qkj3qRsUMqbEM8X5JPWfx-c/edit?gid=2013768182#gid=2013768182&range=A3:B6"
  return (
    <div>
       <h3>Our Funds summary</h3>
      <iframe
        src={SheetURL}
        width="100%"
        height="600px"
        title="Google Sheet"
      ></iframe>
    </div>
  )
}

export default OurFunds
