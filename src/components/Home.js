import { Button } from "react-bootstrap";
import { tourData } from "../utils/mock-data";

const Home = () => {
  return (
    <div>
      <h2>TOURS</h2>
      <ul>
        {tourData.map((tour, index) => (
          <div key={index} className="tour-item">
            <div className="tour-list">
              <strong>{tour.date}</strong>
              <p>{tour.location}</p>
              <p>{tour.venue}</p>
            </div>
            <Button variant="dark">BUY TICKETS</Button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
