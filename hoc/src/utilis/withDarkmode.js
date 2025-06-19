

const withDarkmode = (Component) => {
  const styles = {
    backgroundColor: '#212529',
    color: '#eee'
  };

  return (props) => {
    return (
      <div style={styles}>
        <Component {...props} />
      </div>
    );
  };
};

export default withDarkmode;