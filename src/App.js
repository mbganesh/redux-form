import "./App.css";
import SignInForm from "./Components/SignInForm";
import SignUpForm from "./Components/SignUpForm";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const isSignUp = useSelector((state) => state.formselector.value.isSignUp);

  return (
    <div className="App">{isSignUp ? <SignInForm /> : <SignUpForm />}</div>
  );
}

export default App;
