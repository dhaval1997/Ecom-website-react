import { Button } from "react-bootstrap";

const tourData = [
  {
    date: "JUL 16",
    location: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL 19",
    location: "TORONTO, ON",
    venue: "BUDWEISER STAGE",
  },
  {
    date: "JUL 22",
    location: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    location: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    location: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
  },
  {
    date: "AUG 7",
    location: "CONCORD, CA",
    venue: "CONCORD PAVILION",
  },
];

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
