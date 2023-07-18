const HOC = (Component) => {
  const WithVisible = ({ visible, ...rest }) => {
    if (!visible) return null;
    return <Component {...rest} />;
  };

  return WithVisible;
};

export default HOC;
