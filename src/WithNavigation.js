import { useNavigate } from "react-router-dom";

export function withNavigation(Component) {
  return function WrappedComponent(props) {
    let navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}