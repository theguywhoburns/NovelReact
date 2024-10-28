import React, { useState } from "react"
import { Modal, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from "react-native"

interface BottomSheetModalProps {
  visible: boolean
  onClose: () => void
  children: React.ReactNode
}

export const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
  visible,
  onClose,
  children,
}) => {
  const [_, setHeight] = useState(0)

  const handleLayout = (event: any) => {
    const { height } = event.nativeEvent.layout
    setHeight(height)
  }

  return (
    <Modal visible={visible} transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <View
            style={[styles.container, { minHeight: 200, maxHeight: "80%" }]}
            onLayout={handleLayout}
          >
            <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16,
  },
  content: {
    padding: 16,
  },
})
