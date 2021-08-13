import React, { useCallback, useState, useMemo } from 'react'
import styled from 'styled-components'

import Button from '../Button'
import CardIcon from '../CardIcon'
import Modal, { ModalProps } from '..//Modal'
import ModalActions from '..//ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'

interface DisclaimerModal extends ModalProps {
  onConfirm: () => void
}

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: 25%;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

const DisclaimerModal: React.FC<DisclaimerModal> = ({
  onConfirm,
  onDismiss,
}) => {
  const [step, setStep] = useState('disclaimer')

  const handleConfirm = useCallback(() => {
    onConfirm()
    onDismiss()
  }, [onConfirm, onDismiss])

  const modalContent = useMemo(() => {
    if (step === 'disclaimer') {
      return (
        <div>
          <p> With great pleasure we would like to welcome you the Googli.Eth's Dao farm (dGGL Farm)!
          </p>
          <p> dGGL Farm will be the home of our frontend launch, and provides
              an interface for all interactions based on the SushiSwap protocol.
          </p>
          <p> Development will be on going to get dGGL Farm completely
              polished.
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <StyledLink target="_blank" href="https://googli.eth">
            Click here to access dGGL Farm.
          </StyledLink>
        </div>
      )
    }
  }, [step])

  const button = useMemo(() => {
    if (step === 'disclaimer') {
      return (
        <Button
          text="Next"
          variant="secondary"
          onClick={() => setStep('uniswap')}
        />
      )
    } else {
      return <Button text="Continue To Classic" onClick={handleConfirm} />
    }
  }, [setStep, step, handleConfirm])

  return (
    <Modal>
      <ModalTitle text={`Announcement`} />
      <ModalContent>{modalContent}</ModalContent>
      <ModalActions>{button}</ModalActions>
    </Modal>
  )
}

export default DisclaimerModal