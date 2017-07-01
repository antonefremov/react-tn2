const DOM = React.DOM;

const posts = [
  {
    key: 1,
    image : {
      src: 'http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg',
      width: '260px',
      height: '160px',
      alt: 'A cat picture'
    },
    text : 'A kitten says Hello'
 },
 {
   key: 2,
   image : {
      src: 'https://www.cdc.gov/features/dog-bite-prevention/dog-bite-prevention_456px.jpg',
      width: '270px',
      height: '180px',
      alt: 'A dog picture'
    },
    text : 'A doggy says Bye-bye'
 },
 {
   key: 3,
   image : {
      src: 'https://ih1.redbubble.net/image.77561382.6850/raf,750x1000,075,t,101010:01c5ca27c6.u2.jpg',
      width: '270px',
      height: '320px',
      alt: 'Terminator picture'
    },
    text : "Arnie says he'd be back"
 }
]

function TextBox(children) {
  return <span>{children.text}</span>;
}

function Image(props) {
    return <img src={props.src}
                width={props.width}
                height={props.height}
                alt={props.alt}/>;
}

function BlogItem(props) {
  const {image, text} = props
  return <div>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt}/>
      <br/>
      <TextBox text={text}/>
    </div>
}

class BlogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
  }

  render() {
    const { posts } = this.state;
    return React.createElement(BlogList, { posts });
  }
}

const BlogList = ({ posts }) => {
  return DOM.ul(
      null,
      _.map(
        posts,
        (post) => (
          <BlogItem key={post.key} image={post.image} text={post.text}/>
        )
      )
    )
}

ReactDOM.render(
  React.createElement(BlogContainer),
  document.getElementById('app')
)
