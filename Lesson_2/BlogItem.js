function BlogItem(props) {
  const {text, image, details} = props
  return <div>
      <TextBox text={text}/>
      <br/>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt}/>
      <br/>
      <Like likes={details.likes}/>
      <Details details={details}/>
      <br/>
    </div>
}

BlogItem.propTypes = {
    key: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    }),
    details: PropTypes.shape({
      author: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      likes: PropTypes.number
    })
}
