import React, {useContext} from 'react'

const NewsletterShout = () => {
  const {openModal} = useContext(ModalContext)

  return (
    <SketchButton
      as="a"
      size="xl"
      onClick={() => {
        openModal(
          <iframe
            style={{
              outline: 'none',
              border: 'none',
              margin: -12,
              width: 'calc(100% + 24px)',
              height: 'calc(100% + 24px)',
            }}
            src="http://bit.ly/AmandaBrookfieldNewsletter"
          />,
        )
      }}
    >
      Subscribe to my Newsletter
    </SketchButton>
  )
}

export default NewsletterShout
