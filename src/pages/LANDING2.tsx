import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LANDING2.module.css";

const LANDING2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/prompt2");
  }, [navigate]);

  const onFrame1Click = useCallback(() => {
    navigate("/login2");
  }, [navigate]);

  const onABOUTTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onGENERATORTextClick = useCallback(() => {
    navigate("/prompt2");
  }, [navigate]);

  const onPRICESTextClick = useCallback(() => {
    navigate("/price");
  }, [navigate]);

  return (
    <div className={styles.landing2}>
      <div className={styles.frame} onClick={onFrameContainerClick}>
        <button className={styles.letsStart}>Let’s Start!</button>
      </div>
      <div className={styles.frame1}>
        <div className={styles.frame2} />
        <div className={styles.streamlineYourThumbnail}>
          Streamline your thumbnail creation with AI-powered design,
          effortlessly generating stunning thumbnails through the magic of
          artificial intelligence.
        </div>
      </div>
      <div className={styles.thumbnailGenerator}>THUMBNAIL GENERATOR</div>
      <nav className={styles.frame3} onClick={onFrame1Click}>
        <div className={styles.frame4}>
          <b className={styles.logIn}>Log In</b>
        </div>
      </nav>
      <div className={styles.navbar}>
        <div className={styles.about} onClick={onABOUTTextClick}>
          ABOUT
        </div>
        <div className={styles.generator} onClick={onGENERATORTextClick}>
          GENERATOR
        </div>
        <div className={styles.prices} onClick={onPRICESTextClick}>
          PRICES
        </div>
      </div>
      <div className={styles.thumbelina}>
        <b className={styles.thumbelina1}>{`THUMBELINA      `}</b>
      </div>
    </div>
  );
};

export default LANDING2;
