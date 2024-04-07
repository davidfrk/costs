import styles from './Submit.module.css'

function Submit ({ text }) {
  return (
    <div>
      <button className={styles.button}>{text}</button>
    </div>
  )
}

export default Submit