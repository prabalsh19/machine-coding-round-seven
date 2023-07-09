import { useParams } from "react-router-dom";
import { data } from "../../db/db";
import { Card } from "../../components/Card/Card";
export const Citi = (props) => {
  console.log(props);

  return (
    <>
      <h2>Top Cities in for your next holiday</h2>
      <div className="card-wrapper"></div>
    </>
  );
};
