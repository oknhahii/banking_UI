import type { NextPage } from "next";
import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Select } from "antd";
import Modal from "../components/modal";
import PortalPopup from "../components/portal-popup";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./form.module.css";

const Form: NextPage = () => {
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
      <div className={styles.form}>
        <img className={styles.formChild} alt="" src="/vector-11.svg" />
        <img className={styles.formItem} alt="" src="/vector-31.svg" />
        <img className={styles.formInner} alt="" src="/vector-22.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-41.svg" />
        <img className={styles.formChild1} alt="" src="/vector-71.svg" />
        <img className={styles.formChild2} alt="" src="/vector-81.svg" />
        <img className={styles.formChild3} alt="" src="/vector-14.svg" />
        <img className={styles.formChild4} alt="" src="/vector-15.svg" />
        <img className={styles.formChild5} alt="" src="/vector-18.svg" />
        <img className={styles.formChild6} alt="" src="/vector-19.svg" />
        <section className={styles.optinSection}>
          <div className={styles.optinSectionChild} />
          <div className={styles.becomeOurCustomerParent}>
            <b className={styles.becomeOurCustomer}>BECOME OUR CUSTOMER</b>
            <div
              className={styles.dontHesitantLet}
            >{`Don’t hesitant let  get a loan now `}</div>
          </div>
          <input
            className={styles.optinSectionItem}
            placeholder="Amount"
            type="text"
          />
          <input
            className={styles.optinSectionInner}
            placeholder="Number 0f Terms"
            type="text"
          />
          <input
            className={styles.groupInput}
            placeholder="Interest"
            type="text"
          />
          <input
            className={styles.optinSectionChild1}
            placeholder="Duration"
            type="text"
          />
          <button className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <a
              className={styles.createLoan}
              href="https://icons8.com/icon/tdVHlhOYWvuj/upload-document"
              target="_blank"
            >
              CREATE LOAN
            </a>
          </button>
          <img
            className={styles.optinSectionChild2}
            alt=""
            src="/vector-16.svg"
          />
          <div className={styles.parent}>
            <label className={styles.label} for="file-107:1947">
              <Select
                className={styles.fixedInterestParent}
                placeholder="Payment type"
                style={{ width: "1058px" }}
                showSearch
                filterOption={(input: any, option: any) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                virtual={false}
                showArrow={false}
              >
                <Select.Option value="fixed_interest">
                  fixed_interest
                </Select.Option>
                <Select.Option value="reduce_debt">reduce_debt</Select.Option>
              </Select>
              <Select
                className={styles.vayMuaOtoParent}
                placeholder="Loan packets"
                style={{ width: "1058px" }}
                filterOption={(input: any, option: any) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                virtual={false}
                showArrow={false}
              >
                <Select.Option value="Vay mua oto">Vay mua oto</Select.Option>
                <Select.Option value="mua nha">mua nha</Select.Option>
                <Select.Option value="du hoc">du hoc</Select.Option>
              </Select>
              <div className={styles.groupItem} />
              <div className={styles.uploadTheDocument}>
                Upload the document to proof your assets or income
              </div>
              <img className={styles.svg2Icon} alt="" src="/svg2.svg" />
            </label>
            <input className={styles.input} type="file" id="file-107:1947" />
          </div>
        </section>
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
          <a className={styles.rectangleGroup} href="#">
            <div className={styles.groupInner} />
            <b className={styles.borrowNow}>Borrow now</b>
          </a>
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
          <a className={styles.frameA} href="#">
            <div className={styles.bankParent}>
              <div className={styles.bank}>Bank</div>
              <div className={styles.v}>
                <span>{`V `}</span>
                <span className={styles.span}>{` `}</span>
              </div>
            </div>
          </a>
        </div>
        <header className={styles.heroSection}>
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
          <button className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} onClick={openModalPopup} />
            <b className={styles.signUp}>Sign up</b>
          </button>
          <div className={styles.heroSectionChild} />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group5@2x.png"
          />
          <div className={styles.groupParent}>
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
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}</p>
              <p
                className={styles.loremIpsumDolor}
              >{`sed do eiusmod tempor incididunt ut labore et dolore `}</p>
              <p className={styles.licenses}>
                nisl tincidunt eget. Lectus mauris eros in vitae .
              </p>
            </div>
          </div>
          <a className={styles.groupContainer} href="#">
            <div className={styles.groupDiv}>
              <div className={styles.groupChild} />
              <b className={styles.loanNow}>Loan now</b>
            </div>
            <img
              className={styles.outlineArrowSmallRight}
              alt=""
              src="/outline--arrowsmallright.svg"
            />
          </a>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild2} />
            <a
              className={styles.locationIconParent}
              href="https://www.youtube.com/"
            >
              <img
                className={styles.locationIcon}
                alt=""
                src="/locationicon.svg"
              />
              <div className={styles.vienamHaNoiContainer}>
                <p className={styles.loremIpsumDolor}>
                  VieNam Ha Noi, Hoang Mai, Dai Kim
                </p>
                <p className={styles.licenses}>Nguyen Xien</p>
              </div>
              <b className={styles.payUsA}>Pay Us a Visit</b>
            </a>
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
            <a className={styles.group} href="tel:0987654321">
              <div className={styles.div}>(110) 1111-1010</div>
              <b className={styles.giveUsA}>Give Us a Call</b>
              <img
                className={styles.outlinePhoneCall}
                alt=""
                src="/outline--phonecall.svg"
              />
            </a>
          </div>
          <img className={styles.heroSectionItem} alt="" src="/vector-5.svg" />
          <img className={styles.heroSectionInner} alt="" src="/vector-6.svg" />
          <a className={styles.heroSectionInner1} href="#">
            <div className={styles.bankParent}>
              <div className={styles.bank1}>Bank</div>
              <div className={styles.v}>
                <span>{`V `}</span>
                <span className={styles.span}>{` `}</span>
              </div>
            </div>
          </a>
          <Link className={styles.groupA} href="/">
            <div className={styles.groupChild3} />
            <b className={styles.signIn}>Sign in</b>
          </Link>
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

export default Form;