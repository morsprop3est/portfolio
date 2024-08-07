import styles from "./page.module.scss";

import MainBackground from '@/components/MainBackground/MainBackground';
import Header from '@/components/Header/Header';



export default function Home() {
  return (
    <main>
      <div>
          <Header/>
      </div>
        <MainBackground/>
    </main>
  );
}
