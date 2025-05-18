import styles from './index.module.css'
import ProductCart from '../PoductCart'
import ButtonView from '../ButtonVeiw'
import ProductSliderPhone from '../ProductSliderPhone'

export default function TopSellingSection({Products}) {

  return (
     <div className="col-12 my-5">
         <div className="container">
           <h2 className="text-center mb-3" id={styles.h2}>الأعلى مبيعا</h2>
           <div className='col-12'>
           <ProductCart products={Products} />
            <ProductSliderPhone products={Products}/>
           </div>
           <ButtonView catID={"03c8e441-33f4-4da7-8dc1-5f775cc2265d"}/>
         </div>
       </div>
  )
}
