import { data } from "./db/db";
import "./App.css";
import { Card } from "./components/Card/Card";

function App() {
  const { continents } = data;

  return (
    <div>
      <h1>Welcome to trip advisor</h1>

      <h2 className="sub-heading">Top Continents For Your Holiday</h2>
      <div className="card-wrapper">
        {continents.map(({ id, image, name }) => (
          <Card key={id} id={id} image={image} name={name} link={"country"} />
        ))}
      </div>
    </div>
  );
}

export default App;
