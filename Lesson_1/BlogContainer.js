class BlogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs };
  }

  render() {
    const { blogs } = this.state;
    return React.createElement(BlogList, { blogs });
  }
}

const BlogList = ({ blogs }) => {
  return DOM.ul(
      null,
      _.map(
        blogs,
        (blog, key) => (
          <BlogItem key={key} imageProps={blog.imageProps} spanText={blog.spanText}/>
        )
      )
    )
}
