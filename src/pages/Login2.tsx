import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login2.module.css";

const Login2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTHUMBELINAContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.login2}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-15@2x.png" />
        <div className={styles.frameItem} />
        <div className={styles.loginParent}>
          <b className={styles.login}>Login</b>
          <div className={styles.instanceWrapper}>
            <input
              className={styles.instanceChild}
              placeholder="Username"
              type="email"
            />
          </div>
          <button className={styles.submitWrapper}>
            <div className={styles.submit}>Submit</div>
          </button>
          <b className={styles.enterYourEmail}>
            Enter your Email and Password to Start Generating!
          </b>
          <div className={styles.forgotPassword}>Forgot Password</div>
          <input
            className={styles.frameInner}
            placeholder="Password"
            type="password"
          />
        </div>
        <b className={styles.welcomeBack}>Welcome Back!</b>
        <b
          className={styles.youCanSign}
        >{`you can sign in to access your existing profile `}</b>
        <div className={styles.thumbelina} onClick={onTHUMBELINAContainerClick}>
          <b className={styles.thumbelina1}>{`THUMBELINA      `}</b>
        </div>
        <img
          className={styles.imageRemovebgPreview12}
          alt=""
          src="/imageremovebgpreview-1-2@2x.png"
        />
      </div>
    </div>
  );
};

export default Login2;
