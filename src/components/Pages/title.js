import { useEffect } from "react";

const Title = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);
  return props.children;
};

export default Title;