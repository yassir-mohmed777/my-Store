import styles from "./index.module.css";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import cash from "./Imgs/cash.svg";
import master from "./Imgs/master.svg";
import Pay from "./Imgs/Pay.svg";
import stcpay from "./Imgs/stcpay.svg";
import tamara from "./Imgs/tamara.svg";
import visa from "./Imgs/visa.svg";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="col-12" id={styles.Contant}>
      <div className="container col-12 pt-5 ">
        <div className="d-flex flex-wrap col-12" id={styles.border}>
          <div className="col-12 col-md-6 col-lg-4  mb-4">
            <h2 className="mb-4 ">Rosmet</h2>
            <p>
              لدينا ملابس تناسب أسلوبك <br /> والتي ستفتخر بارتدائها. من النساء إلى الرجال.
            </p>
            <div className="d-flex mt-5 fs-2 gap-3">
              <FaFacebook />
              <RiTwitterXLine />
              <FaInstagram />
              <FaGithub />
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 d-flex flex-column"
            id={styles.Link}
          >
            <h4 className="mb-3">روابط مهمة</h4>
            <Link>سياسة الشحن والتوصيل</Link>
            <Link>سياسة الاستبدال والإسترجاع</Link>
            <Link>سياسة الخصوصية</Link>
            <Link>فروعنا</Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h4 className="mb-5">طرق الدفع</h4>
            <div className="d-flex flex-wrap gap-2">
              <img src={cash} />
              <img src={master} />
              <img src={Pay} />
              <img src={stcpay} />
              <img src={tamara} />
              <img src={visa} />
            </div>
          </div>
        </div>
        <h4 className="text-center my-3">
          جميع الحقوق محفوظة | روزميت © 2025
        </h4>
      </div>
    </div>
  );
}
