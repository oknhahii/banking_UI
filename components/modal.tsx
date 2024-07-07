import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./modal.module.css";

export type ModalType = {
  className?: string;
  onClose?: () => void;
};

const Modal: NextPage<ModalType> = ({ className = "", onClose }) => {
  const router = useRouter();

  const onButtonsComponentClick = useCallback(() => {
    router.push("/create-customer");
  }, [router]);

  const onButtonsComponentClick1 = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return (
    <div className={[styles.modal, className].join(" ")}>
      <div className={styles.headingBodyBtnPCont1}>
        <div className={styles.headingBodyBtn}>
          <div className={styles.headingContent}>
            <div className={styles.iconText}>
              <div className={styles.checkIcon}>
                <img className={styles.tickCircleIcon} alt="" />
              </div>
              <div className={styles.areYouSureDoYouWantToAcParent}>
                <div className={styles.areYouSure}>
                  Are you have any account before?
                </div>
                <div className={styles.theEditedChanges}>
                  The edited changes have been saved and you can review them
                  later if you need to.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.btnsGrp1}>
            <button
              className={styles.buttonsComponent}
              onClick={onButtonsComponentClick}
            >
              <div className={styles.button}>No</div>
            </button>
            <button
              className={styles.buttonsComponent1}
              onClick={onButtonsComponentClick1}
            >
              <div className={styles.button1}>Yes</div>
            </button>
          </div>
        </div>
      </div>
      <button className={styles.crossIconF1} onClick={onClose}>
        <img
          className={styles.vuesaxlinearcloseCircleIcon}
          alt=""
          src="/vuesaxlinearclosecircle.svg"
        />
      </button>
    </div>
  );
};

export default Modal;
