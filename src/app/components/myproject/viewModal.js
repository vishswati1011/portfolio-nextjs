import React, { useEffect,useState,useRef } from 'react';
import styles from './modal.module.css';
import Image from 'next/image';

const VideoModal = ({imageUrl,modalShow,setModalShow}) => {
    // const [image, setImage] = useState('');
    // const [showModal, setShowModal] = useState(false);

    // const playVideo = (url) => {
    //     setImage(url);
    //     setShowModal(true); 
    //   };
    const closeModal = () => {
      setModalShow(false);
    };
    const menuRef = useRef(); 
    useEffect(() =>{

        const handleClickOutside = (event) => {
          if(menuRef.current && !menuRef.current.contains(event.target)){
            setModalShow(false);
          }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        }
    },[modalShow])

    return (
        <>
          {/* <span className="tag tag-red" onClick={() => playVideo(imageUrl)}>Play</span> */}
          {modalShow && (
            <div 
            className={styles.extra_large_modal + " modal fade  bd-example-modal-lg show d-block"}
            tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div 
              className={styles.modal_dialog + " modal-dialog modal-lg"}
              ref={menuRef}
              >
                <div className="modal-content">
                  <button type="button" className={styles.close_icon + " close"} onClick={closeModal}>close &times;</button>
                   <Image src={imageUrl} alt="video" className={styles.video} width={600} height={300}/> 
                </div>
              </div>
            </div>
          )}
        </>
    )
}

export default VideoModal;
