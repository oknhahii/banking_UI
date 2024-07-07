import type { NextPage } from "next";
import styles from "./sign-up.module.css";

const SignUp: NextPage = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <h1 className={styles.signUp1}>Sign up</h1>
      </div>
      <input
        className={styles.signUpChild}
        placeholder="Enter your username"
        type="text"
      />
      <input
        className={styles.signUpItem}
        placeholder="Enter your email"
        type="text"
      />
      <input
        className={styles.signUpInner}
        placeholder="Enter your password"
        type="text"
      />
      <button className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <b className={styles.singUp}>Sing Up</b>
      </button>
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon4} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
      <input
        className={styles.groupInput}
        placeholder="Your phone number"
        type="text"
      />
      <input
        className={styles.signUpChild1}
        placeholder="Confirm your password"
        type="text"
      />
      <select className={styles.smeParent}>
        <option value="2">SME</option>
        <option value="4">Enterprise</option>
      </select>
      <div className={styles.parent}>
        <label className={styles.label} for="file-107:1910">
          <div className={styles.groupInner} />
          <div className={styles.uploadYouProfile}>
            Upload you profile image
          </div>
          <img className={styles.vectorIcon6} alt="" src="/vector5.svg" />
        </label>
        <input className={styles.input} type="file" id="file-107:1910" />
      </div>
      <input
        className={styles.signUpChild2}
        placeholder="Enter your idnumber"
        type="text"
      />
    </div>
  );
};

export default SignUp;
