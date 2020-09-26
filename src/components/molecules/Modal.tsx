import React from 'react'
import styled from 'styled-components'

const ModalWrapper = styled.div`
  background-color: white;
`

const ModalHeader = styled.div`
  padding: 8px 12px;
`

const ModalBody = styled.div`
  padding: 12px;
`

const Modal = ({heading, children}) => (
  <ModalWrapper className="modal">
    {heading && (
      <ModalHeader>
        <h3>{heading}</h3>
      </ModalHeader>
    )}
    <ModalBody>{children}</ModalBody>
  </ModalWrapper>
)

export default Modal
