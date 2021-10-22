import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
const Bun = (type) => {
  let { title } = useParams();
  return <p>BUN NAME {title}</p>
}

export default Bun