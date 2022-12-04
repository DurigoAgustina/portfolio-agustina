import './_Title.scss'

const Title = ({Type, children, color}) => {
  return (
    <Type className={`title title-${Type} title-${color}`}>{ children }</Type>
  )
}

export default Title