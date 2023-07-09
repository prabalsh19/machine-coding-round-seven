import { useParams } from "react-router-dom";
import { data } from "../../db/db";
import { Card } from "../../components/Card/Card";
export const Citi = () => {
  const { id } = useParams();
  const { continents } = data;
  const selectedContinent = continents.find((continent) => continent.id == id);

  return (
    <>
      <h2>Top Cities in {selectedContinent?.name} for your next holiday</h2>
      <div className="card-wrapper">
        {selectedContinent?.countries.map((countries) => (
          <Card key={id} {...countries} link={"cities"} />
        ))}
      </div>
    </>
  );
};
