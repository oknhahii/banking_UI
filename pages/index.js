import { useState, useCallback } from "react";
import Link from "next/link";
import Modal from "../components/modal";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const MainPage = () => {
  const [isModalPopupOpen, setModalPopupOpen] = useState(false);
  const router = useRouter();

  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);

  const onPERSONClick = useCallback(() => {
    router.push("/loan-packet");
  }, [router]);

  return (
    <>
      <button className={styles.mainPage}>
        <span className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/vector-1.svg" />
          <img className={styles.groupItem} alt="" src="/vector-3.svg" />
          <img className={styles.groupInner} alt="" src="/vector-2.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector-4.svg" />
        </span>
        <header className={styles.heroSection}>
          <Link className={styles.signinBtn} href="/sign-in">
            <button className={styles.signinBtnChild} />
            <b className={styles.signIn}>Sign in</b>
          </Link>
          <button className={styles.signupbtn} onClick={openModalPopup}>
            <div className={styles.signupbtnChild} />
            <b className={styles.signUp}>Sign up</b>
          </button>
          <button className={styles.person} onClick={onPERSONClick}>
            PERSON
          </button>
          <button className={styles.sme} onClick={onPERSONClick}>
            SME
          </button>
          <button
            className={styles.househouldBusiness}
            onClick={onPERSONClick}
          >{`HOUSEHOULD BUSINESS `}</button>
          <button className={styles.enterprise} onClick={onPERSONClick}>
            ENTERPRISE
          </button>
          <img
            className={styles.heroSectionChild}
            alt=""
            src="/group-22@2x.png"
          />
          <div className={styles.groupParent}>
            <div className={styles.intoRealityParent}>
              <b className={styles.intoReality}>
                <span className={styles.into}>{`Into `}</span>
                <span className={styles.reality}>Reality</span>
              </b>
              <b className={styles.turnYourDreamsContainer}>
                <span
                  className={styles.turnYourDreams}
                >{`Turn your dreams `}</span>
                <span className={styles.span}>{`   `}</span>
              </b>
            </div>
            <div className={styles.loremIpsumDolorContainer}>
              <p
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}</p>
              <p
                className={styles.loremIpsumDolor}
              >{`sed do eiusmod tempor incididunt ut labore et dolore `}</p>
              <p className={styles.nislTinciduntEget}>
                nisl tincidunt eget. Lectus mauris eros in vitae .
              </p>
            </div>
          </div>
          <Link className={styles.loanNow} href="/form">
            <div className={styles.rectangleParent}>
              <button className={styles.rectangleButton} />
              <b className={styles.loanNow1}>Loan now</b>
            </div>
            <a className={styles.outlineArrowSmallRight} href="#">
              <div className={styles.shape} />
            </a>
          </Link>
          <div className={styles.heroSectionItem} />
          <div className={styles.locationIconParent}>
            <img
              className={styles.locationIcon}
              alt=""
              src="/locationicon.svg"
            />
            <div className={styles.vienamHaNoiContainer}>
              <p className={styles.loremIpsumDolor}>
                VieNam Ha Noi, Hoang Mai, Dai Kim
              </p>
              <p className={styles.nislTinciduntEget}>Nguyen Xien</p>
            </div>
            <a className={styles.payUsA} href="https://thanglong.edu.vn/">
              Pay Us a Visit
            </a>
          </div>
          <a
            className={styles.anhphuwowng2kgmailcomParent}
            href="mailto:anhphuwowng2k@gmail.com"
          >
            <div className={styles.anhphuwowng2kgmailcom}>
              anhphuwowng2k@gmail.com
            </div>
            <b className={styles.sendUsA}>Send Us a Message</b>
            <div className={styles.outlineMail}>
              <div className={styles.shape1} />
            </div>
          </a>
          <a className={styles.parent} href="tel:0987654321">
            <div className={styles.div}>(110) 1111-1010</div>
            <b className={styles.giveUsA}>Give Us a Call</b>
            <img
              className={styles.outlinePhoneCall}
              alt=""
              src="/outline--phonecall.svg"
            />
          </a>
          <img className={styles.heroSectionInner} alt="" src="/vector-5.svg" />
          <img
            className={styles.heroSectionChild1}
            alt=""
            src="/vector-6.svg"
          />
          <a className={styles.toplogo} href="#">
            <div className={styles.bankParent}>
              <div className={styles.bank}>Bank</div>
              <div className={styles.v}>
                <span className={styles.v1}>{`V `}</span>
                <span className={styles.span1}>{` `}</span>
              </div>
            </div>
          </a>
        </header>
        <span className={styles.vectorGroup}>
          <img className={styles.groupChild1} alt="" src="/vector-7.svg" />
          <img className={styles.groupChild2} alt="" src="/vector-8.svg" />
        </span>
        <div className={styles.aboutSection}>
          <div className={styles.introductionParent}>
            <b className={styles.introduction}>INTRODUCTION</b>
            <div className={styles.toCreditPacket}>TO CREDIT PACKET</div>
          </div>
          <div className={styles.aboutParent}>
            <b className={styles.introduction}>ABOUT</b>
            <div className={styles.newCreditPacket}>NEW CREDIT PACKET</div>
          </div>
          <div className={styles.vitaeSapienPellentesqueContainer}>
            <p
              className={styles.loremIpsumDolor}
            >{`Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat `}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo `}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare `}</p>
            <p className={styles.nislTinciduntEget}>
              lectus sit amet est placerat in. Lectus magna fringilla urna
              porttitor rhoncus vitae.
            </p>
          </div>
          <div className={styles.egetMiProinContainer}>
            <p
              className={styles.loremIpsumDolor}
            >{`Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus `}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida `}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. `}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet `}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam `}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet `}</p>
            <p className={styles.loremIpsumDolor}>
              cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem
              nulla pha
            </p>
            <p className={styles.loremIpsumDolor}>
              retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam
              sollicitudi
            </p>
            <p className={styles.nislTinciduntEget}>n tempor.</p>
          </div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <Link className={styles.rectangleGroup} href="/loan-packet">
            <div className={styles.rectangleDiv} />
            <b className={styles.letsGetIn}>LET’S GET IN TOUCH</b>
          </Link>
          <img
            className={styles.component1Icon}
            alt=""
            src="/component-1.svg"
          />
        </div>
        <section className={styles.techSection}>
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group1@2x.png"
          />
          <div className={styles.technologiesServicesParent}>
            <b className={styles.introduction}>{`TECHNOLOGIES & SERVICES`}</b>
            <div className={styles.usedBy}>USED BY</div>
          </div>
          <Link className={styles.ellipseParent} href="/form">
            <div className={styles.ellipseDiv} />
            <div className={styles.groupChild3} />
            <img
              className={styles.outlineChevronSmallDown}
              alt=""
              src="/outline--chevronsmalldown.svg"
            />
          </Link>
          <img
            className={styles.hydraTech21Icon}
            alt=""
            src="/hydratech2-1@2x.png"
          />
          <img
            className={styles.hydraTech41Icon}
            alt=""
            src="/hydratech4-1@2x.png"
          />
        </section>
        <span className={styles.vectorContainer}>
          <img className={styles.groupChild4} alt="" src="/vector-15.svg" />
          <img className={styles.groupChild5} alt="" src="/vector-18.svg" />
          <img className={styles.groupChild6} alt="" src="/vector-19.svg" />
          <img className={styles.groupChild7} alt="" src="/vector-14.svg" />
        </span>
        <footer className={styles.footerSection}>
          <b className={styles.aboutServicesTechnologiesContainer}>
            <p className={styles.services}>ABOUT</p>
            <p className={styles.services}>SERVICES</p>
            <p className={styles.services}>TECHNOLOGIES</p>
            <p className={styles.services}>HOW TO</p>
          </b>
          <b
            className={styles.vbankLandingPage}
          >{`2024 © VBANK LANDING PAGE - BY ANH PHUONG - ALL RIGHTS RESERVED `}</b>
          <b className={styles.faqSitemapConditionsContainer}>
            <p className={styles.services}>F.A.Q</p>
            <p className={styles.services}>SITEMAP</p>
            <p className={styles.services}>CONDITIONS</p>
            <p className={styles.nislTinciduntEget}>LICENSES</p>
          </b>
          <b className={styles.socializeWithHydra}>SOCIALIZE WITH HYDRA</b>
          <img className={styles.pinterestIcon} alt="" src="/pinterest.svg" />
          <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
          <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
          <img className={styles.linkedinIcon} alt="" src="/linkedin.svg" />
          <img className={styles.youtubeIcon} alt="" src="/youtube.svg" />
          <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <b className={styles.loanNow2}>Loan now</b>
          </div>
          <img
            className={styles.footerSectionChild}
            alt=""
            src="/vector-17.svg"
          />
          <img
            className={styles.footerSectionItem}
            alt=""
            src="/vector-20.svg"
          />
          <img
            className={styles.footerSectionInner}
            alt=""
            src="/vector-21.svg"
          />
          <img
            className={styles.footerSectionChild1}
            alt=""
            src="/vector-21.svg"
          />
          <div className={styles.frameDiv}>
            <div className={styles.bankParent}>
              <div className={styles.bank1}>Bank</div>
              <div className={styles.v}>
                <span className={styles.v1}>{`V `}</span>
                <span className={styles.span1}>{` `}</span>
              </div>
            </div>
          </div>
        </footer>
      </button>
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

export default MainPage;