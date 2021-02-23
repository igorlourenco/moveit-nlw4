import styles from '../styles/components/Profile.module.css'

export function Profile (){
  return (
      <div className={styles.profileContainer}>
        <img src="https://github.com/igorlrnc.png" alt="Igor"/>
        <div>
          <strong>Igor</strong>
          <p>
            <img src="icons/level.svg" alt="level"/>
            Level 2</p>
        </div>
      </div>
  )
}
