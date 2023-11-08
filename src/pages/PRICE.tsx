import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PRICE.module.css";

const PRICE: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTHUMBELINAContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onABOUTTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onGENERATORTextClick = useCallback(() => {
    navigate("/prompt2");
  }, [navigate]);

  return (
    <div className={styles.price}>
      <div className={styles.frame}>
        <div className={styles.frameInner}>
          <div className={styles.instanceChild} />
        </div>
        <div className={styles.frameChild} />
        <b className={styles.soloRecommended}>SOLO (Recommended)</b>
        <div className={styles.frameItem} />
        <b className={styles.free15Day}>FREE 15 DAY TRIAL</b>
        <div className={styles.perfectForTheContainer}>
          <p className={styles.perfectForThe}>
            Perfect for the creative professional
          </p>
          <p className={styles.perfectForThe}>&nbsp;</p>
          <ul className={styles.advancedThumbnailCustomizati}>
            <li className={styles.noWatermarksSay}>
              Advanced Thumbnail Customization: Dive deeper into design with
              enhanced editing options.
            </li>
            <li className={styles.noWatermarksSay}>
              No Watermarks: Say goodbye to watermarked thumbnails and showcase
              your content professionally.
            </li>
            <li className={styles.noWatermarksSay}>
              Priority Support: Enjoy faster assistance with priority customer
              support.
            </li>
            <li>
              Solo Creators: Tailored for independent content creators and small
              businesses.
            </li>
          </ul>
        </div>
        <b className={styles.intro}>INTRO</b>
        <div className={styles.goodForTryingContainer}>
          <p className={styles.perfectForThe}>
            Good for trying out, or the occasional design project.
          </p>
          <p className={styles.perfectForThe}>&nbsp;</p>
          <ul className={styles.advancedThumbnailCustomizati}>
            <li className={styles.noWatermarksSay}>
              Basic Thumbnail Creation: Get started for free and create simple,
              eye-catching thumbnails.
            </li>
            <li className={styles.noWatermarksSay}>
              Limited Access: Enjoy essential features and template options
            </li>
            <li className={styles.noWatermarksSay}>
              Watermarked Output: Your thumbnails may include a watermark on the
              free plan.
            </li>
            <li className={styles.noWatermarksSay}>
              Ideal for Beginners: Perfect for individuals looking to enhance
              their content on a budget.
            </li>
          </ul>
          <p className={styles.perfectForThe}>&nbsp;</p>
          <p className={styles.perfectForThe}>&nbsp;</p>
          <p className={styles.perfectForThe}>&nbsp;</p>
          <p className={styles.perfectForThe}>&nbsp;</p>
        </div>
        <div className={styles.rectangleDiv} />
        <b className={styles.logIn}>LOG IN</b>
        <div className={styles.frameInner1}>
          <div className={styles.instanceItem} />
        </div>
        <b className={styles.teams}>TEAMS</b>
        <b className={styles.free15Day1}>FREE 15 DAY TRIAL</b>
        <div className={styles.greatForAgenciesContainer}>
          <p className={styles.perfectForThe}>
            Great for agencies and production organizations.
          </p>
          <p className={styles.perfectForThe}>&nbsp;</p>
          <ul className={styles.advancedThumbnailCustomizati}>
            <li className={styles.noWatermarksSay}>
              Collaborative Workspace: Create, share, and edit thumbnails with
              your team members.
            </li>
            <li className={styles.noWatermarksSay}>
              Team Access: Multiple team members can access and contribute to
              your thumbnail projects.
            </li>
            <li className={styles.noWatermarksSay}>
              Pro-Level Features: Unlock advanced tools and features for
              professional-quality thumbnails.
            </li>
            <li>
              Business-Ready: Designed for businesses, agencies, and content
              teams.
            </li>
          </ul>
        </div>
        <div className={styles.frameChild1} />
        <b className={styles.free15Day2}>FREE 15 DAY TRIAL</b>
      </div>
      <div className={styles.frame1}>
        <div className={styles.frame2}>
          <div className={styles.frame3}>
            <div className={styles.ourPricingStructureContainer}>
              <span>Our pricing structure is built to</span>
              <span className={styles.span}>{` `}</span>
              <span>
                be affordable for everyone from individual designers to teams.
              </span>
            </div>
          </div>
          <div className={styles.frame4}>
            <div
              className={styles.thumbelina}
              onClick={onTHUMBELINAContainerClick}
            >
              <b className={styles.thumbelina1}>{`THUMBELINA      `}</b>
            </div>
          </div>
        </div>
        <div className={styles.frame5}>
          <div className={styles.frame6}>
            <div className={styles.ourPricing}>Our Pricing</div>
          </div>
          <div className={styles.navbar}>
            <div className={styles.about} onClick={onABOUTTextClick}>
              ABOUT
            </div>
            <div className={styles.generator} onClick={onGENERATORTextClick}>
              GENERATOR
            </div>
            <div className={styles.prices}>PRICES</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PRICE;
