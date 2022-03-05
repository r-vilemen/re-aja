import { Target } from "puppeteer-core";
import { useChallenges } from "../hooks/useChallenges";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useChallenges();

  return (
    <div className={styles.profileContainer}>
      <a href="https://github.com/Rodrigo-Vilemen" target="_blank">
      <img style={{width: 100, borderRadius: 50}} src="https://github.com/Rodrigo-Vilemen.png" alt="Rodrigo Vilemen" />
        </a>
      <div>
        <a href="https://github.com/Rodrigo-Vilemen" target="_blank">
          <strong>Rodrigo Vilemen</strong>
        </a>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Nível: {level}
        </p>
      </div>
    </div>
  );
}
