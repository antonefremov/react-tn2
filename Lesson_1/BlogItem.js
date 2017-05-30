function BlogItem(props) {
  const {imageProps, spanText} = props
  return <div>
      <Image src={imageProps.src} width={imageProps.width} height={imageProps.height} alt={imageProps.alt}/>
      <br/>
      <TextBox text={spanText.text}/>
    </div>
}
