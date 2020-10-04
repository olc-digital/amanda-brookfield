import React, {useContext} from 'react'
import styled from 'styled-components'
import ModalContext from '../providers/Modal'

const Iframe = styled.iframe`
  outline: 'none',
  border: 'none',
  margin: -12,
  width: 'calc(100% + 24px)',
  height: 'calc(100% + 24px)',
`

const useNewsletterSignup = () => {
  const {openModal} = useContext(ModalContext)

  const openSignupModal = () => {
    openModal(
      <Iframe
        style={{
          outline: 'none',
          border: 'none',
          margin: -12,
          width: 'calc(100% + 24px)',
          height: 'calc(100% + 24px)',
        }}
        src="https://bit.ly/AmandaBrookfieldNewsletter"
      />,
    )
  }

  return {openSignupModal}
}

export default useNewsletterSignup
