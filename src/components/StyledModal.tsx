import { Modal, Pressable, View } from "react-native"
import StyledText from "./StyledText"
import { button, modalAccountSetup } from "themes/appTheme"
import { useRef, useState } from "react"
import { StyledModalProps } from "interfaces/IStyledModal"

const StyledModal = ({ text, visible }: StyledModalProps) => {
  const modalRef = useRef<boolean>(visible)
  const [modal, setModal] = useState<boolean>(visible)

  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modal}
      onRequestClose={() => setModal(!modal)}
    >
      <View style={modalAccountSetup.centerView}>
        <View style={modalAccountSetup.container}>
          <StyledText semiBold lgX2>{text}</StyledText>
          <Pressable style={button.secondary} onPress={handleModal}>
            <StyledText semiBold lg white>Close</StyledText>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default StyledModal