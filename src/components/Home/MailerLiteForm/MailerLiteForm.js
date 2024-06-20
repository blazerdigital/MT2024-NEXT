import React, { useEffect } from 'react';
import styles from './MailerLiteForm.module.css';

const MailerLiteForm = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127';
    script1.type = 'text/javascript';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.innerHTML = `fetch("https://assets.mailerlite.com/jsonp/991576/forms/124465333938423484/takel")`;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className={styles.mlFormContainer}>
      <div id="mlb2-15721833" className={`${styles.mlFormEmbedContainer} ml-subscribe-form ml-subscribe-form-15721833`}>
        <div className={styles.mlFormAlignCenter}>
          <div className={`${styles.mlFormEmbedWrapper} embedForm`}>
            <div className={`${styles.mlFormEmbedBody} ml-form-embedBodyDefault row-form`}>
              <div className={styles.mlFormEmbedContent}>
                <h4 className={styles.newsletterhead}>Massive Theory Show Newsletter</h4>
                <p>Subscribe to Show Updates and New Release</p>
              </div>
              <form
                className="ml-block-form"
                action="https://assets.mailerlite.com/jsonp/991576/forms/124465333938423484/subscribe"
                data-code=""
                method="post"
                target="_blank"
              >
                <div className="ml-form-formContent">
                  <div className={`${styles.mlFormFieldRow} ml-last-item`}>
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <input
                        aria-label="email"
                        aria-required="true"
                        type="email"
                        className="form-control"
                        data-inputmask=""
                        name="fields[email]"
                        placeholder="Email"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.mlFormEmbedPermissions}>
                  <div className={`${styles.mlFormEmbedPermissionsContent} default privacy-policy`}>
                    <p>You can unsubscribe anytime. For more details, review our Privacy Policy.</p>
                  </div>
                </div>
                <div className={`${styles.mlFormCheckboxRow} ml-validate-required`}>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="labelDescription">
                      Opt in to receive news and updates.
                    </span>
                  </label>
                </div>
                <div className={`${styles.mlFormRecaptcha} ml-validate-required`}>
                  <div className="g-recaptcha" data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD"></div>
                </div>
                <input type="hidden" name="ml-submit" value="1" />
                <div className={styles.mlFormEmbedSubmit}>
                  <button type="submit" className="primary">Subscribe</button>
                  <button disabled="disabled" style={{ display: 'none' }} type="button" className="loading">
                    <div className={styles.mlFormEmbedSubmitLoad}></div>
                    <span className="sr-only">Loading...</span>
                  </button>
                </div>
                <input type="hidden" name="anticsrf" value="true" />
              </form>
            </div>
            <div className={`${styles.mlFormSuccessBody} row-success`} style={{ display: 'none' }}>
              <div className={styles.mlFormSuccessContent}>
                <h4>Thank you!</h4>
                <p>You have successfully joined our subscriber list.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailerLiteForm;
