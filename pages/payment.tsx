import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Link from "next/link";
import Modal from "../components/modal";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import styles from "./payment.module.css";

const Payment: NextPage = () => {
  const [isModalPopupOpen, setModalPopupOpen] = useState(false);
  const router = useRouter();

  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);

  const onGroupButtonClick = useCallback(() => {
    router.push("/form");
  }, [router]);

  return (
    <>
      <div className={styles.payment}>
        <img className={styles.paymentChild} alt="" src="/vector-11.svg" />
        <img className={styles.paymentItem} alt="" src="/vector-31.svg" />
        <img className={styles.paymentInner} alt="" src="/vector-22.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-41.svg" />
        <img className={styles.paymentChild1} alt="" src="/vector-71.svg" />
        <img className={styles.paymentChild2} alt="" src="/vector-81.svg" />
        <img className={styles.paymentChild3} alt="" src="/vector-14.svg" />
        <img className={styles.paymentChild4} alt="" src="/vector-15.svg" />
        <img className={styles.paymentChild5} alt="" src="/vector-18.svg" />
        <img className={styles.paymentChild6} alt="" src="/vector-19.svg" />
        <div className={styles.footerSection}>
          <b className={styles.aboutServicesTechnologiesContainer}>
            <p className={styles.about}>ABOUT</p>
            <p className={styles.about}>SERVICES</p>
            <p className={styles.about}>TECHNOLOGIES</p>
            <p className={styles.about}>HOW TO</p>
          </b>
          <b
            className={styles.vbankLandingPage}
          >{`2024 © VBANK LANDING PAGE - BY ANH PHUONG - ALL RIGHTS RESERVED `}</b>
          <b className={styles.faqSitemapConditionsContainer}>
            <p className={styles.about}>F.A.Q</p>
            <p className={styles.about}>SITEMAP</p>
            <p className={styles.about}>CONDITIONS</p>
            <p className={styles.licenses}>LICENSES</p>
          </b>
          <b className={styles.socializeWithHydra}>SOCIALIZE WITH HYDRA</b>
          <img className={styles.pinterestIcon} alt="" src="/pinterest.svg" />
          <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
          <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
          <img className={styles.linkedinIcon} alt="" src="/linkedin.svg" />
          <img className={styles.youtubeIcon} alt="" src="/youtube.svg" />
          <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
          <button className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <b className={styles.letBorrowNow}>Let borrow now!</b>
          </button>
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
              <div className={styles.bank}>Bank</div>
              <div className={styles.v}>
                <span>{`V `}</span>
                <span className={styles.span}>{` `}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.servicesSection}>
          <div className={styles.groupParent}>
            <div className={styles.whatIsParent}>
              <b className={styles.whatIs}>WHAT IS</b>
              <div className={styles.loanPackets}>LOAN PACKETS?</div>
            </div>
            <div className={styles.vitaeSapienPellentesqueContainer}>
              <p
                className={styles.vitaeSapienPellentesque}
              >{`Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat `}</p>
              <p
                className={styles.vitaeSapienPellentesque}
              >{`nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo `}</p>
              <p
                className={styles.vitaeSapienPellentesque}
              >{`quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare `}</p>
              <p className={styles.licenses}>
                lectus sit amet est placerat in. Lectus magna fringilla urna
                porttitor rhoncus vitae.
              </p>
            </div>
            <img
              className={styles.component2Icon}
              alt=""
              src="/component-2.svg"
            />
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupItem} />
              <div className={styles.groupInner} />
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group6@2x.png"
              />
              <b className={styles.simulation}>SIMULATION</b>
              <img className={styles.groupChild1} alt="" src="/vector-10.svg" />
              <div className={styles.vitaeSapienPellentesqueContainer1}>
                <p className={styles.vitaeSapienPellentesque}>
                  Vitae sapien pellentesque habitant morbi
                </p>
                <p
                  className={styles.nuncViverraAliquet}
                >{`nunc. Viverra aliquet  porttitor rhoncus `}</p>
                <p className={styles.licenses}>
                  libero justo laoreet sit amet vitae.
                </p>
              </div>
              <button
                className={styles.rectangleContainer}
                onClick={onGroupButtonClick}
              >
                <div className={styles.rectangleDiv} />
                <b className={styles.loanNow}>LOAN NOW</b>
              </button>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.groupItem} />
              <div className={styles.groupInner} />
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group7@2x.png"
              />
              <b className={styles.education}>EDUCATION</b>
              <img className={styles.groupChild1} alt="" src="/vector-10.svg" />
              <div className={styles.vitaeSapienPellentesqueContainer1}>
                <p className={styles.vitaeSapienPellentesque}>
                  Vitae sapien pellentesque habitant morbi
                </p>
                <p
                  className={styles.nuncViverraAliquet}
                >{`nunc. Viverra aliquet  porttitor rhoncus `}</p>
                <p className={styles.licenses}>
                  libero justo laoreet sit amet vitae.
                </p>
              </div>
              <button
                className={styles.rectangleContainer}
                onClick={onGroupButtonClick}
              >
                <div className={styles.rectangleDiv} />
                <b className={styles.loanNow}>LOAN NOW</b>
              </button>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.groupItem} />
              <div className={styles.groupInner} />
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group8@2x.png"
              />
              <b className={styles.selfCare}>SELF-CARE</b>
              <img className={styles.groupChild1} alt="" src="/vector-10.svg" />
              <div className={styles.vitaeSapienPellentesqueContainer1}>
                <p className={styles.vitaeSapienPellentesque}>
                  Vitae sapien pellentesque habitant morbi
                </p>
                <p
                  className={styles.nuncViverraAliquet}
                >{`nunc. Viverra aliquet  porttitor rhoncus `}</p>
                <p className={styles.licenses}>
                  libero justo laoreet sit amet vitae.
                </p>
              </div>
              <button
                className={styles.rectangleContainer}
                onClick={onGroupButtonClick}
              >
                <div
                  className={styles.groupChild8}
                  onClick={onGroupButtonClick}
                />
                <b className={styles.loanNow}>LOAN NOW</b>
              </button>
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.groupItem} />
              <img
                className={styles.groupIcon}
                alt=""
                src="/group-761@2x.png"
              />
              <b className={styles.selfCare}>OUTDOOR</b>
              <img className={styles.groupChild1} alt="" src="/vector-10.svg" />
              <div className={styles.vitaeSapienPellentesqueContainer1}>
                <p className={styles.vitaeSapienPellentesque}>
                  Vitae sapien pellentesque habitant morbi
                </p>
                <p
                  className={styles.nuncViverraAliquet}
                >{`nunc. Viverra aliquet  porttitor rhoncus `}</p>
                <p className={styles.licenses}>
                  libero justo laoreet sit amet vitae.
                </p>
              </div>
              <button className={styles.rectangleContainer}>
                <div
                  className={styles.groupChild8}
                  onClick={onGroupButtonClick}
                />
                <b className={styles.loanNow}>LOAN NOW</b>
              </button>
            </div>
          </div>
        </div>
        <header className={styles.heroSection}>
          <Link className={styles.groupA} href="/">
            <div className={styles.groupChild12} />
            <b className={styles.signIn}>Sign in</b>
          </Link>
          <button className={styles.person}>PERSON</button>
          <button className={styles.sme}>SME</button>
          <button
            className={styles.househouldBusiness}
          >{`HOUSEHOULD BUSINESS `}</button>
          <button className={styles.enterprise}>ENTERPRISE</button>
          <button className={styles.rectangleParent5} onClick={openModalPopup}>
            <div className={styles.groupChild13} />
            <b className={styles.signUp}>Sign up</b>
          </button>
          <img
            className={styles.heroSectionChild}
            alt=""
            src="/group-22@2x.png"
          />
          <div className={styles.groupParent1}>
            <div className={styles.intoRealityParent}>
              <b className={styles.intoReality}>
                <span>{`Into `}</span>
                <span className={styles.reality}>Reality</span>
              </b>
              <b className={styles.turnYourDreamsContainer}>
                <span
                  className={styles.turnYourDreams}
                >{`Turn your dreams `}</span>
                <span className={styles.span1}>{`   `}</span>
              </b>
            </div>
            <div className={styles.loremIpsumDolorContainer}>
              <p
                className={styles.vitaeSapienPellentesque}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}</p>
              <p
                className={styles.vitaeSapienPellentesque}
              >{`sed do eiusmod tempor incididunt ut labore et dolore `}</p>
              <p className={styles.licenses}>
                nisl tincidunt eget. Lectus mauris eros in vitae .
              </p>
            </div>
          </div>
          <Link className={styles.groupParent2} href="/form">
            <div className={styles.rectangleParent6}>
              <div className={styles.groupChild} />
              <b className={styles.loanNow4}>Loan now</b>
            </div>
            <img
              className={styles.outlineArrowSmallRight}
              alt=""
              src="/outline--arrowsmallright.svg"
            />
          </Link>
          <div className={styles.heroSectionItem} />
          <a className={styles.locationIconParent} href="#">
            <img
              className={styles.locationIcon}
              alt=""
              src="/locationicon.svg"
            />
            <div className={styles.vienamHaNoiContainer}>
              <p className={styles.vitaeSapienPellentesque}>
                VieNam Ha Noi, Hoang Mai, Dai Kim
              </p>
              <p className={styles.licenses}>Nguyen Xien</p>
            </div>
            <b className={styles.payUsA}>Pay Us a Visit</b>
          </a>
          <img className={styles.heroSectionInner} alt="" src="/vector-5.svg" />
          <img
            className={styles.heroSectionChild1}
            alt=""
            src="/vector-6.svg"
          />
          <a
            className={styles.anhphuwowng2kgmailcomParent}
            href="mailto:anhphuwowng2k@gmail.com"
          >
            <div className={styles.anhphuwowng2kgmailcom}>
              anhphuwowng2k@gmail.com
            </div>
            <b className={styles.sendUsA}>Send Us a Message</b>
            <img
              className={styles.outlineMail}
              alt=""
              src="/outline--mail.svg"
            />
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
          <div className={styles.heroSectionInner1}>
            <div className={styles.bankParent}>
              <div className={styles.bank1}>Bank</div>
              <div className={styles.v}>
                <span>{`V `}</span>
                <span className={styles.span}>{` `}</span>
              </div>
            </div>
          </div>
        </header>
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

export default Payment;