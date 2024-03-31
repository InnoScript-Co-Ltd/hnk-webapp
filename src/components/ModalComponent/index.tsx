import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.css'
import { IReducer } from '@/store/store';
import { closeModal } from '@/store/modalSlice';
import {motion} from 'framer-motion'

const ModalComponent = () => {
    const modal = useSelector((state: IReducer) => state.modal);
    const dispatch = useDispatch();

    const onClickOk = () => {
        dispatch(closeModal());
    }

    const modalVariant = {
        initial: { scale: 0, opacity: 0},
        open: { scale: 1, opacity: 1},
        exit: { scale: 0, opacity: 0},
    }

  return (
    <div className={styles.modalWrapper}>
        <motion.div 
        variants={modalVariant}
        initial='initial'
        animate='open'
        exit='exit'
        style={{
            border: modal.theme === 'success' ? '1px solid #00FF38' : '1px solid #ff0000 '
        }} 
        className={styles.modalContainer}
        >
            <div style={{color: modal.theme === 'success' ? '#00FF38' : '#ff0000'}} className={styles.modalTitle}>
                {modal.title}
            </div>
            <div className={styles.modalMessage}>
                {modal.message}
            </div>
            
            <div className={styles.modalBtnSection}>
                <button 
                style=
                {{
                    border: modal.theme === 'success' ? '1px solid #00FF38' : '1px solid #ff0000 '
                    }} 
                    onClick={onClickOk} 
                    className={styles.modalBtnStyle}
                    >
                    OK
                </button>
            </div>
        </motion.div>
    </div>
  )
}

export default ModalComponent