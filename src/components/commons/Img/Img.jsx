import './_Img.scss'

const Img = ({image, className, icon, ...props}) => {
  return (
      <img src={image} className={`${icon && 'icon'} ${className}`} {...props}/>
  )
}

export default Img