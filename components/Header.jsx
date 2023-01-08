import Link from 'next/link';
import styles from '../styles/Header.module.css'

 function Header() {
     return <header className={styles.header}>
             <h1  className={styles.name}>Sumi Kimitaka</h1>
             <ul className={styles.navigation}>
                <li><Link href="/">Profile</Link>
                </li>
                 <li><Link href="/publication">Publication</Link></li>
                 
             </ul>
       </header>;
   }

   export default Header;