import React, {useState} from 'react'
import styled from 'styled-components'

const Modal = ({body, heading}) => {
  const ModalWrapper = styled.div`
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 55vw;
    height: 60vh;
    transform: translate(-50%, -50%);
  `

  const ModalHeader = styled.div`
    padding: 8px 12px;
  `

  const ModalBody = styled.div`
    padding: 12px;
    height: 100%;
  `

  return (
    <ModalWrapper
      className="modal"
      onClick={e => {
        e.stopPropagation()
      }}
    >
      {heading && (
        <ModalHeader>
          <h3>{heading}</h3>
        </ModalHeader>
      )}
      <ModalBody>{body}</ModalBody>
    </ModalWrapper>
  )
}

export const ModalContext = React.createContext({
  openModal: () => {},
  closeModal: () => {},
})

export const ModalProvider = ({children}) => {
  const [modalBody, setModalBody] = useState([])
  const [modalHeading, setModalHeading] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = (body, heading = '') => {
    if (!body) return

    setModalBody(body)
    setModalHeading(heading)
    setModalOpen(true)

    if (window?.document?.body) {
      window.document.body.style.overflow = 'hidden'
    }
  }

  const closeModal = () => {
    if (window?.document?.body) {
      window.document.body.style.overflow = 'visible'
    }

    setModalOpen(false)
    setModalBody([])
    setModalHeading('')
  }

  const ModalWrapper = styled.div`
    position: fixed;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  `

  return (
    <ModalContext.Provider
      value={{openModal, closeModal}}
      style={modalOpen ? {overflow: 'hidden'} : null}
    >
      {children}
      <ModalWrapper
        onClick={() => {
          closeModal()
        }}
        style={modalOpen ? {opacity: 1, pointerEvents: 'auto'} : {}}
      >
        <Modal body={modalBody} heading={modalHeading} />
      </ModalWrapper>
    </ModalContext.Provider>
  )
}

export default ModalContext
