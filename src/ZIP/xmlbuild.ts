import { create } from 'xmlbuilder2'

type DataType = {
  basicStatus: {
    name: string
    value: number
  }[]
}

const xmlbuild = (data: DataType): string => {
  const doc = create().ele('character').dec({ encoding: 'UTF-8' })
  const character = doc.ele('data').att('name', 'character')

  // 基礎ステータス
  const basicStatus = character.ele('data').att('name', 'basicStatus')
  data.basicStatus.forEach((status) => {
    const { name } = status
    const { value } = status
    basicStatus.ele('data').att('name', name).txt(String(value))
  })

  const xml = doc.end({ prettyPrint: true })

  return xml
}

export default xmlbuild
