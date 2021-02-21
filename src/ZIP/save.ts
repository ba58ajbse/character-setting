import JSZip from 'jszip'
import xmlbuild from './xmlbuild'

type DataType = {
  basicStatus: {
    name: string
    value: number
  }[]
}

const saveInZip = (data: DataType): void => {
  const xml = xmlbuild(data)
  const zip = new JSZip()
  const folder = zip.folder('zip_xml')
  folder?.file('data.xml', xml)
  // folder?.file('type, file')

  zip.generateAsync({ type: 'blob' }).then((blob) => {
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'zip_xml.zip'
    link.click()
    link.remove()
  })
}

export default saveInZip
