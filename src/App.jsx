import { createRoot } from "react-dom/client";

const App = () => {
  return <p>Hello From Rehan Qasim. The Content is coming soon.</p>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
