import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { DatePicker } from "antd";
import styles from "./create-customer.module.css";

const CreateCustomer: NextPage = () => {
  return (
    <div className={styles.createCustomer}>
      <div className={styles.createCustomerInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <h1 className={styles.createCustomer1}>Create customer</h1>
        </div>
      </div>
      <div className={styles.nameParent}>
        <label className={styles.name}>Name</label>
        <input
          className={styles.groupItem}
          placeholder="Enter your name"
          type="text"
        />
      </div>
      <div className={styles.idNumberParent}>
        <label className={styles.idNumber}>ID number</label>
        <input
          className={styles.groupInner}
          placeholder="Enter your idnumber"
          type="text"
        />
      </div>
      <div className={styles.addressParent}>
        <b className={styles.address}>Address</b>
        <input
          className={styles.groupInput}
          placeholder="Enter your address"
          type="text"
        />
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
      <button className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <b className={styles.createCustomer2}>Create customer</b>
      </button>
      <img className={styles.fichier142} alt="" src="/fichier-14-1@2x.png" />
      <DatePicker
        className={styles.createCustomerChild}
        placeholder="Enter your birth day"
        allowClear={false}
        bordered={false}
      />
      <div className={styles.parent}>
        <label className={styles.label} for="file-107:1922">
          <div className={styles.groupChild1} />
          <div className={styles.uploadFromOf}>Upload from of your id card</div>
          <img className={styles.vectorIcon3} alt="" src="/vector5.svg" />
        </label>
        <input className={styles.input} type="file" id="file-107:1922" />
      </div>
      <div className={styles.group}>
        <label className={styles.label} for="file-107:1921">
          <div className={styles.groupChild2} />
          <div className={styles.uploadFromOf1}>
            Upload from of your id card
          </div>
          <img className={styles.vectorIcon4} alt="" src="/vector5.svg" />
        </label>
        <input className={styles.input} type="file" id="file-107:1921" />
      </div>
      <div className={styles.container}>
        <label className={styles.label} for="file-107:1920">
          <div className={styles.groupChild3} />
          <div className={styles.uploadFromOf2}>
            Upload from of your id card
          </div>
          <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
        </label>
        <input className={styles.input} type="file" id="file-107:1920" />
      </div>
    </div>
  );
};

export default CreateCustomer;
