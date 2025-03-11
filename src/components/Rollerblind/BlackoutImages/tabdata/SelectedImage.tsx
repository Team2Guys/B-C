import { Image } from 'antd'
import React from 'react'

interface SelectedImagePROP {
    selectedImage:any
    closeModal:any
}

function SelectedImage({selectedImage, closeModal}:SelectedImagePROP) {
  return (
    <div className="relative">
      <Image
      src={selectedImage}
      alt="Zoomed"
      className="max-w-[90vh] max-h-[90vh] object-contain"
      preview={{ visible: true, onVisibleChange: (visible) => !visible && closeModal() }}/>
      </div>

  )
}

export default SelectedImage