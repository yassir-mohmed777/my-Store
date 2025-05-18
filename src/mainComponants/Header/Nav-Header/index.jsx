import { useState } from 'react'
import styles from '../index.module.css'
import { IoClose } from 'react-icons/io5'
export default function NavHeader() {
  const [hedden , sethedden] = useState(true)

  if (!hedden) return null

  return (
    <div
      className={`col-12 py-1 d-flex align-items-center justify-content-center position-relative ${styles.navHeader}`}
    >
      <IoClose
        onClick={() => sethedden(false)}
        className="position-absolute start-0 ms-3 fs-5"
        role='button'
      />
      
      <p className="m-0 text-white">توصيل مجاني للطلبات فوق 499 ريال داخل المملكة!</p>
    </div>
  )
}
