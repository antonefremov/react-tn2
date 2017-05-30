function BlogItem(props) {
  const {image, text} = props
  return <div>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt}/>
      <br/>
      <TextBox text={text}/>
    </div>
}
