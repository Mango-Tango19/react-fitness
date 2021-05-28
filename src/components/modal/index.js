import React, { useState, useEffect } from 'react'
import { modalWrapperUnVisible, modalWrapperVisible, modalContent } from './modal.module.scss'

const Modal = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={visible ? modalWrapperVisible : modalWrapperUnVisible}>
      {visible && (
        <div className={modalContent}>
          <button onClick={() => setVisible(false)}>remove modal</button>
          <p>Subscribe to our channel!</p>
        </div>
      )}
    </div>
  )
}

export default Modal
