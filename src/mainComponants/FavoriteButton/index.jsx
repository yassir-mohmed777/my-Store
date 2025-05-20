import { CiHeart } from "react-icons/ci";
import { toast } from "react-toastify";   
import { useFavoriteStore } from "../../zustand-store";
import { IoMdHeart } from "react-icons/io";
import styles from './index.module.css'
export default function FavoriteButton({ productId }) {
  const { toggleFavorite, isFavorite } = useFavoriteStore();
  const favorite = isFavorite(productId);

  const handleClick = (e) => {
    e.stopPropagation();
    toggleFavorite(productId);
    toast.success(favorite ? "تمت الازالة" : "تمت الاضافة الى المفضلة" , {
      position: "bottom-center",
    });
  };



  return (
    <button onClick={handleClick} className={styles.BtnIcon}>
        {
            favorite ? <IoMdHeart className={styles.redIcon}/> : <CiHeart className={styles.grayIcon} />
        }
    </button>
  );
} 
