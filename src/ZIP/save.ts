import JSZip from 'jszip'
import xmlbuild from './xmlbuild'
import { ImageStateType } from '../Interface/interface'

type DataType = {
  basicStatus: {
    name: string
    value: number
  }[]
}

const saveInZip = (data: DataType, image: ImageStateType): void => {
  const xml = xmlbuild(data, image.identifier)
  const zip = new JSZip()
  const folder = zip.folder('zip_xml')
  folder?.file('data.xml', xml)
  if (image.file !== undefined) {
    folder?.file(`image.${image.type}`, image.file)
  }

  zip.generateAsync({ type: 'blob' }).then((blob) => {
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'zip_xml.zip'
    link.click()
    link.remove()
  })
}

export default saveInZip
