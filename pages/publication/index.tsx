import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../../styles/Publication.module.css'
const inter = Inter({ subsets: ['latin'] })
import Header from '../../components/Header'

export default function Publication() {
  return (
    <>
    <Header />
    <main>
    <h1 className={styles.header1}>論文</h1>
      <ul className={styles.certificate_list}>
        <li>鷲見公崇，吉川大弘,，古橋 武，“ 簡易脳波計による P300 計測の可能性に関する検討 ”日本知能情報ファジィ学会誌　知能と情報，Vol32, No5, pp869-872, 2020</li>
      </ul>
    <h1 className={styles.header1}>国内会議</h1>
    <ul className={styles.certificate_list}>
        <li>鷲見公崇，三輪晃暉，吉川大弘，古橋武，“ 認知症の兆候検出のための脳波を用いた MMSE スコア推定 ”，令和元年度 電気・電子・情報関係学会 東海支部連合大会，2019</li>
        <li>鷲見公崇，吉川大弘，古橋武，“ 簡易脳波計による P300 計測の可能性に関する検討 ”，第 48 回東海ファジィ研究会，2020</li>
    </ul>
    </main>
    </>
  )
}