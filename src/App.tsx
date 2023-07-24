import { greet } from "./utils/greet";

function App(): JSX.Element {
  return <h1>{greet("Worldlings!!")}</h1>;
}

export default App;
