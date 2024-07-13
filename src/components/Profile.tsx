import Image from "next/image";
import { useChallenges } from "../hooks/useChallenges";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useChallenges();

  return (
    <div className={styles.profileContainer}>
      <a title="Perfil do Github" rel="noopener" href="https://github.com/r-vilemen" target="_blank">
        <Image
          style={{ width: 100, borderRadius: 50 }}
          width={100}
          height={100}
          src="https://github.com/r-vilemen.png"
          alt="Rodrigo Vilemen"
        />
      </a>
      <div>
        <a rel="noopener" href="https://github.com/r-vilemen" target="_blank">
          <strong>Rodrigo Vilemen</strong>
        </a>
        <p>
          <Image width={20} height={19}  src="icons/level.svg" alt="Level" />
          Nível: {level}
        </p>
      </div>
    </div>
  );
}
