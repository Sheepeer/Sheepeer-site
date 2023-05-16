import { GitHub, AttachEmail, QuestionAnswer } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";
import { MENU } from "../header";
import Contact from "./contact";

const GITHUB_SRC = "https://github.com/Sheepeer";
const EMAIL = "mattinayoung@gmail.com";
const WECHAT = "Mattina_young";
const INS_SRC = "";
const TWITTER_SRC = "";

const FRIEND_LINKS: string[] = ["https://blog.itswincer.com"];

const CONTACT_LIST = [
  { icon: <GitHub />, link: GITHUB_SRC },
  { icon: <AttachEmail />, link: EMAIL },
  { icon: <QuestionAnswer />, link: WECHAT },
];

const Footer = () => {
  return (
    <div className={styles["footer-root"]}>
      <Contact list={CONTACT_LIST} />
      <div className={styles["main"]}>
        <div className={styles["title"]}>Menu</div>
        {MENU.map(({ path, label }) => (
          <Link href={path} key={label}>
            <div className={styles["item"]}>{label}</div>
          </Link>
        ))}
      </div>
      <div className={styles["main"]}>
        <div className={styles["title"]}>Friend Links</div>
        {FRIEND_LINKS.map((item) => (
          <a href={item} target="blank" className={styles["item"]} key={item}>
            {item}
          </a>
        ))}
      </div>
      {/* <div className={styles['contact']}>
        <div className={styles['board']}>
          <Image
            className={styles['wechat']}
            src={'/wechat.jpg'}
            width={150}
            height={150}
            alt='wechat QR code' />
        </div>
        <div className={styles['social']}>
          <Link href={GITHUB_SRC}><GitHub /></Link>
          <Link href={INS_SRC}><InstagramIcon /></Link>
          <Link href={TWITTER_SRC}><TwitterIcon /></Link>
          <span>zhihu</span>
        </div>
      </div> */}
      <div className={styles["p"]}>© From 2022, created by Sheepeer</div>
    </div>
  );
};

export default Footer;
