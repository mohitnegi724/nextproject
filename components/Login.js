import React, { Fragment } from 'react';

export default function Login() {
    return(
        <Fragment>
          <div className="centerContainer">
            <div className="loginPart">
            <div className="loginWithGoogle">
              <div className="google-btn">
                <a href="/api/auth/google">
                  <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                  </div>
                  <p className="btn-text"><b>Sign in with google</b></p>
                </a>
              </div>
            </div>
          </div>
          <div className="quotePart">
            <span className="quote">
              For victory in life, we've got to keep focused on the goal, and the goal is Heaven.
            </span>
            <br/>
            <small className="by">
            - by Lou Holtz
            </small>
          </div>
          </div>
          <style jsx>
            {`
            .centerContainer {
              display: flex;
              flex-direction: column-reverse;
              align-item: center;
              width: 100%;
              height:100%;
              justify-content: center;
            }
            .centerContainer > div {
              margin: 40px 0;
            }
            .quotePart {
              color: #e5e5e5;
              line-height:1.5;
            }
            .quote {
              font-size: 30px;
            }
            .by {
              color: #bdbdbe;
            }
            `}
          </style>
        </Fragment>
    )
}