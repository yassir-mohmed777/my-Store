import styles from './index.module.css'

export default function NavHeader() {
  return (
    <div className='col-12 d-flex align-items-center justify-content-center p-5' id={styles.navHead}>
        <h4 className='text-white'>Profile</h4>
    </div>
  )
}
