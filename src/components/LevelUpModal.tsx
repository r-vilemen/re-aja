import Image from 'next/image';
import { useChallenges } from '../hooks/useChallenges';
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useChallenges();

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <header>{level}</header>

        <strong>Parabéns !</strong>
        <p>Você alcançou um novo nível.</p>

        <button type="button" onClick={closeLevelUpModal} title="Close Modal">
          <Image width={100} height={100} src="/icons/close.svg"  alt='close' />
        </button>
      </div>
    </div>
  );
}