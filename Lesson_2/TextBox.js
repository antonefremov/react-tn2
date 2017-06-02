function TextBox(children) {
  return <span>{children.text}</span>;
}

TextBox.defaultProps = {
  children: "N/A"
}

TextBox.propTypes = {
  children: PropTypes.string.isRequired
}
