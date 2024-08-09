import styles from "./page.module.scss";

import MainBackground from '@/components/MainBackground/MainBackground';
import Header from '@/components/Header/Header';
import WelcomeSection from '@/components/WelcomeSection/WelcomeSection';




export default function Home() {
  return (
    <main>
      <div>
          <Header/>
          <WelcomeSection/>
      </div>
        <MainBackground/>
    </main>
  );
}
