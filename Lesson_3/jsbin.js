const DOM = React.DOM;

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
      likes: 2
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
      createdAt: moment("20170510", "YYYYMMDD").fromNow(),
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

function TextBox(props) {
  return <span>{props.children}</span>;
}

function Image(props) {
  return <img src={props.src}
                width={props.width}
                height={props.height}
                alt={props.alt}/>;
}

function BlogItem({post, addLike}) {
  return <div>
      <TextBox>{post.text}</TextBox>
      <Image {...post.image}/>
      <Like postId={post.key} likes={post.details.likes} addLike={addLike}/>
      <Details {...post.details}/>
    </div>
}

function Details(props) {
  return <div>
    <span>by {props.author}</span>
    <br/>
    { !!props.createdAt && <span>Created At: {props.createdAt}</span> }
    <br/>
    { !!props.updatedAt && <span>Updated At: {props.updatedAt}</span> }
  </div>;
}

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
    this.addLike = this.addLike.bind(this);
  }

  addLike(id) {
    const {posts} = _.cloneDeep(this.state);
    const postIndex = posts.findIndex((item) => item.key === id);

    if (postIndex > -1) {
      const newPost = posts[postIndex];
      newPost.details.likes = +newPost.details.likes + 1;
      this.setState({posts});
    }
  }

  render() {
    return (
      <BlogList posts={this.state.posts} addLike={this.addLike}/>
    )
  }
}

const BlogList = ({ posts, addLike }) => {
  return DOM.ul(
      null,
      _.map(
        posts,
        (post) => (
          <BlogItem key={post.key} post={post} addLike={addLike}/>
        )
      )
    )
}

function Like(props) {
  const {postId, likes, addLike} = props
  return (
      <div>
        {props.likes}
        <button onClick={() => props.addLike(postId)}>Like!</button>
      </div>
    );
}

ReactDOM.render(
  React.createElement(BlogPage),
  document.getElementById('app')
)
