import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ABOUT.module.css";

const ABOUT: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGENERATORTextClick = useCallback(() => {
    navigate("/prompt2");
  }, [navigate]);

  const onPRICESTextClick = useCallback(() => {
    navigate("/price");
  }, [navigate]);

  return (
    <div className={styles.about}>
      <div className={styles.thumbelina} />
      <b className={styles.over700Teams}>OVER 700 TEAMS WORLDWIDE RELY ON US</b>
      <img
        className={styles.d5dfLogo21Icon}
        alt=""
        src="/6d5dflogo-2-1@2x.png"
      />
      <img
        className={styles.c210Logo111Icon}
        alt=""
        src="/5c210logo-11-1@2x.png"
      />
      <img
        className={styles.d1cabLogo51Icon}
        alt=""
        src="/d1cablogo-5-1@2x.png"
      />
      <img
        className={styles.ce4Logo411Icon}
        alt=""
        src="/28ce4logo-41-1@2x.png"
      />
      <img className={styles.logo31Icon} alt="" src="/85363logo-3-1@2x.png" />
      <div className={styles.aboutInner}>
        <div className={styles.componentChild} />
      </div>
      <b className={styles.joinOurCommunity}>JOIN OUR COMMUNITY</b>
      <div className={styles.aboutChild} />
      <b className={styles.visitForums}>VISIT FORUMS</b>
      <img
        className={styles.a39e1WomanDevelopersFvwlqxwIcon}
        alt=""
        src="/a39e1womandevelopersfvwlqxwz1p-1@2x.png"
      />
      <div className={styles.aCaringDesigner}>
        A caring designer community to share knowledge with...
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.componentItem} />
        <div className={styles.componentInner} />
        <div className={styles.rectangleDiv} />
        <b className={styles.seeSupportPrograms}>SEE SUPPORT PROGRAMS</b>
      </div>
      <b className={styles.softwareSupport}>SOFTWARE SUPPORT</b>
      <div className={styles.compatibleWithAll}>
        Compatible with all of your favourite design programs...
      </div>
      <img
        className={styles.column2Image11Icon}
        alt=""
        src="/32721column-2-image1-1@2x.png"
      />
      <div className={styles.aboutInner1}>
        <div className={styles.componentItem} />
      </div>
      <b className={styles.blog}>BLOG</b>
      <div className={styles.aboutItem} />
      <b className={styles.readBlog}>READ BLOG</b>
      <img className={styles.oig1Icon} alt="" src="/oig-1@2x.png" />
      <div className={styles.wantToBe}>
        Want to be first in line to learn tips and tricks for supercharging your
        mockups with Thumbelina? There are many helpful resources in our blog...
      </div>
      <div className={styles.frameDiv} />
      <div className={styles.thumbelina1}>
        <b className={styles.thumbelina2}>{`THUMBELINA      `}</b>
      </div>
      <div className={styles.navbar}>
        <div className={styles.about1}>ABOUT</div>
        <div className={styles.generator} onClick={onGENERATORTextClick}>
          GENERATOR
        </div>
        <div className={styles.prices} onClick={onPRICESTextClick}>
          PRICES
        </div>
      </div>
    </div>
  );
};

export default ABOUT;
