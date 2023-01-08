import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/Header'
import { FaGithub, FaTwitter} from "react-icons/fa"
import {IoMdMail} from "react-icons/io"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="this is personal profile page. my name is sumi kimitaka, I'm Japanese." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <div className={styles.profile}>
        <img className={styles.profile_img} src="/my_face.JPEG" alt="My face" />
        <div>
          <p>名前：鷲見公崇</p>
          <p>所属：emol株式会社</p>
          <p>専門：生体信号処理、脳波</p>
          <p>email: kmsumi7321@gmai.com <IoMdMail /></p>
          <a href='https://github.com/undaria' target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href='https://twitter.com/kmsumi732' target="_blank" rel="noreferrer"> <FaTwitter /></a>
        </div> 
        </div>

        <h1 className={styles.header1}>資格</h1>
        <ul className={styles.certificate_list}>
          <li>基本情報技術者</li>
          <li>統計検定2級</li>
          <li>TOEIC 895点</li>
        </ul>

        <h1 className={styles.header1}>経歴</h1>
        <ul className={styles.table_with_time}>
          <li>
            <p className={styles.time_header}>2022.4 ~ 現在</p>
            <p className={styles.table_item}>emol株式会社</p>
          </li>
          <li>
            <p className={styles.time_header}>2020.4 ~ 2022.3</p>
            <p className={styles.table_item}>名古屋大学大学院　工学研究科　情報・通信工学専攻</p>
          </li>
          <li>
            <p className={styles.time_header}>2016.4 ~ 2020.3</p>
            <p className={styles.table_item}>名古屋大学　工学部　電気電子・情報工学科</p>
          </li>
        </ul>

    </main>
    </>
  )
}
