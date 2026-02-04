import React, { useMemo, useState } from 'react';
import styles from './Admit.module.css';
import admitData from './AdmitConfig.json';

const Admit = () => {
  const [formState, setFormState] = useState({
    financialYear: '',
    month: '',
    amountType: 'received',
    amount: '',
    file: null,
    notes: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const endpoint = useMemo(
    () => process.env.REACT_APP_ACCOUNTS_SUBMIT_ENDPOINT || '',
    []
  );

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    if (!endpoint) {
      setStatus({
        type: 'error',
        message:
          'Submission endpoint is not configured. Add REACT_APP_ACCOUNTS_SUBMIT_ENDPOINT to your environment.'
      });
      return;
    }

    setIsSubmitting(true);
    const payload = new FormData();
    payload.append('financialYear', formState.financialYear);
    payload.append('month', formState.month);
    payload.append('amountType', formState.amountType);
    payload.append('amount', formState.amount);
    payload.append('notes', formState.notes);
    if (formState.file) {
      payload.append('file', formState.file);
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: payload
      });
      if (!response.ok) {
        throw new Error('Submission failed. Please try again.');
      }
      setStatus({
        type: 'success',
        message: 'Entry submitted successfully to Google Sheets and Drive.'
      });
      setFormState({
        financialYear: '',
        month: '',
        amountType: 'received',
        amount: '',
        file: null,
        notes: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error.message ||
          'Unable to submit right now. Please check the configuration.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.AdmitContainer}>
      <div className={styles.AdmitHeader}>
        <h2>Admit Section</h2>
        <p>
          This section highlights volunteer profiles, transparent panchayat
          account summaries, and working details for ongoing village
          development. Use it to add and review information in a structured
          way.
        </p>
      </div>

      <div className={styles.SectionWrapper}>
        <h3 className={styles.SectionTitle}>Volunteer Profiles</h3>
        <div className={styles.SectionGrid}>
          {admitData.volunteerProfiles.map((profile) => (
            <div className={styles.Card} key={profile.name}>
              <h4>{profile.name}</h4>
              <p>{profile.role}</p>
              <ul>
                {profile.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.SectionWrapper}>
        <h3 className={styles.SectionTitle}>Panchayat Account Details</h3>
        <div className={styles.SectionGrid}>
          {admitData.panchayatAccounts.map((account) => (
            <div className={styles.Card} key={account.title}>
              <h4>{account.title}</h4>
              <ul>
                {account.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.SectionWrapper}>
        <h3 className={styles.SectionTitle}>
          Peddaharivanam Village Accounts Entry
        </h3>
        <p className={styles.SectionDescription}>
          Use this form to log financial year entries, month-wise receipts or
          expenses, and upload supporting documents. Submitted data is stored in
          Google Sheets and uploaded files go to the configured Google Drive
          folder.
        </p>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <div className={styles.FormGrid}>
            <label className={styles.FormField}>
              Financial Year
              <input
                type="text"
                name="financialYear"
                value={formState.financialYear}
                onChange={handleChange}
                placeholder="2024-2025"
                required
              />
            </label>
            <label className={styles.FormField}>
              Month
              <input
                type="text"
                name="month"
                value={formState.month}
                onChange={handleChange}
                placeholder="January"
                required
              />
            </label>
            <label className={styles.FormField}>
              Amount Type
              <select
                name="amountType"
                value={formState.amountType}
                onChange={handleChange}
                required
              >
                <option value="received">Amount Received</option>
                <option value="expense">Expense</option>
              </select>
            </label>
            <label className={styles.FormField}>
              Amount
              <input
                type="number"
                name="amount"
                value={formState.amount}
                onChange={handleChange}
                placeholder="0"
                min="0"
                step="0.01"
                required
              />
            </label>
            <label className={styles.FormField}>
              Upload File
              <input
                type="file"
                name="file"
                onChange={handleChange}
                accept=".pdf,.jpg,.jpeg,.png"
              />
            </label>
            <label className={`${styles.FormField} ${styles.FullWidth}`}>
              Notes
              <textarea
                name="notes"
                value={formState.notes}
                onChange={handleChange}
                placeholder="Optional notes about this entry"
                rows="3"
              />
            </label>
          </div>
          <div className={styles.FormActions}>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting…' : 'Submit Entry'}
            </button>
            {status.message ? (
              <span
                className={`${styles.FormStatus} ${
                  status.type === 'error' ? styles.Error : styles.Success
                }`}
              >
                {status.message}
              </span>
            ) : null}
          </div>
        </form>
        <div className={styles.FormHint}>
          <p>
            Configure the submit endpoint using
            <code>REACT_APP_ACCOUNTS_SUBMIT_ENDPOINT</code> in your environment
            to connect the form to Google Sheets and Drive.
          </p>
        </div>
      </div>

      <div className={styles.SectionWrapper}>
        <h3 className={styles.SectionTitle}>Working Details</h3>
        <div className={styles.SectionGrid}>
          {admitData.workingDetails.map((work) => (
            <div className={styles.Card} key={work.title}>
              <h4>{work.title}</h4>
              <ul>
                {work.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admit;
