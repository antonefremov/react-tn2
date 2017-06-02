const DOM = React.DOM;
//const moment = moment;

const posts = [
  {
    key: 1,
    text : 'A kitten says Hello',
    image : {
      src: 'http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg',
      width: '260px',
      height: '160px',
      alt: 'A cat picture'
    },
    details: {
      author: 'John Grant',
      createdAt: moment("20170520", "YYYYMMDD").fromNow(),
      updatedAt: moment().subtract(3,'days').calendar(),
      likes: 5
    }
 },
 {
   key: 2,
   text : 'A doggy says Bye-bye',
   image : {
      src: 'https://www.cdc.gov/features/dog-bite-prevention/dog-bite-prevention_456px.jpg',
      width: '270px',
      height: '180px',
      alt: 'A dog picture'
    },
    details: {
      author: 'Sinead OConnor',
      createdAt: moment().startOf('week').fromNow(),
      updatedAt: moment().startOf('day').fromNow(),
      likes: 15
    }
 },
 {
   key: 3,
   text : "Arnie says he'd be back",
   image : {
      src: 'https://ih1.redbubble.net/image.77561382.6850/raf,750x1000,075,t,101010:01c5ca27c6.u2.jpg',
      width: '270px',
      height: '320px',
      alt: 'Terminator picture'
   },
   details: {
      author: 'Robert Lewis Stephenson',
      createdAt: moment("20160820", "YYYYMMDD").fromNow(),
      updatedAt: moment().subtract(22,'weeks').calendar(),
      likes: 24
   }
 }
]

function TextBox(children) {
  return <span>''{children.text}''</span>;
}

function Image(props) {
    return <img src={props.src}
                width={props.width}
                height={props.height}
                alt={props.alt}/>;
}

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

function Details(details) {
  return <div>
    <span>by {details.details.author}</span>
    <br/>
    <span>Created At: {details.details.createdAt}</span>
    <br/>
    <span>Last Edited At: {details.details.updatedAt}</span>
  </div>;
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
          <BlogItem key={post.key} text={post.text} image={post.image} details={post.details}/>
        )
      )
    )
}

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes || 0
    }
    this.addLike = this.addLike.bind(this)
  }

  addLike() {
    this.setState({ likes: this.state.likes + 1 })
  }

  render() {
    return (
      <div>
        {this.state.likes}
        <button onClick={this.addLike} >Like!</button>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(BlogContainer),
  document.getElementById('app')
)
