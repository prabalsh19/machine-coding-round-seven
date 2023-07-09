import { useParams } from "react-router-dom";
import { data } from "../../db/db";
import { Card } from "../../components/Card/Card";
export const Country = () => {
  const { id } = useParams();
  const { continents } = data;
  const selectedContinent = continents.find((continent) => continent.id == id);
  console.log(selectedContinent);
  return (
    <>
      <h2>Top Countries in {selectedContinent?.name} for your next holiday</h2>
      <div className="card-wrapper">
        {selectedContinent?.countries.map((countries) => {
          console.log(countries);
          return <Card key={id} {...countries} link={"cities"} />;
        })}
      </div>
    </>
  );
};
