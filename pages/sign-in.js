import { useState, useCallback } from "react";
import Modal from "../components/modal";
import PortalPopup from "../components/portal-popup";
import styles from "./sign-in.module.css";

const SignIn = () => {
  const [isModalPopupOpen, setModalPopupOpen] = useState(false);

  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.signIn}>
        <img className={styles.signInChild} alt="" src="/rectangle-1@2x.png" />
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/rectangle-2.svg" />
          <b className={styles.signIn1}>Sign in</b>
        </div>
        <div className={styles.createAFreeContainer}>
          <p className={styles.createAFree}>
            Create a free account and get full access to all features for 30
            days.
          </p>
          <p className={styles.createAFree}>
            No credit card needed. Trusted by over 4,000 professionals.
          </p>
        </div>
        <div className={styles.usernameParent}>
          <label className={styles.username}>Username*</label>
          <input
            className={styles.groupItem}
            placeholder="Enter your username"
            type="text"
          />
        </div>
        <div className={styles.passwordParent}>
          <label className={styles.password}>Password*</label>
          <input
            className={styles.groupItem}
            placeholder="Create a password"
            type="text"
          />
        </div>
        <button className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <b className={styles.signIn2}>{`Sign in `}</b>
        </button>
        <div className={styles.mustBeAt}>Must be at least 6 characters.</div>
        <button className={styles.areYouNewContainer} onClick={openModalPopup}>
          <span
            className={styles.areYouNew}
          >{`Are you new to our service? `}</span>
          <span className={styles.signUp}>Sign up</span>
          <span className={styles.areYouNew}>{` `}</span>
        </button>
        <div className={styles.vectorGroup}>
          <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
          <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
          <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
          <div className={styles.div}>5.0</div>
        </div>
        <div className={styles.text}>{` `}</div>
        <div className={styles.from200ReviewsParent}>
          <div className={styles.from200Reviews}>from 200+ reviews</div>
          <img className={styles.groupIcon} alt="" src="/group-40.svg" />
        </div>
        <img className={styles.fichier141} alt="" src="/fichier-14-2@2x.png" />
        <img className={styles.vectorIcon5} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon6} alt="" src="/vector5.svg" />
      </div>
      {isModalPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalPopup}
        >
          <Modal onClose={closeModalPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default SignIn;
