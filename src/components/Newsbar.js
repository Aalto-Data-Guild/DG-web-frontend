import Newselement from "./Newselement";
import { useState } from "react";

const news = [
  {
    name: "DG Newsletter",
    date: "2022-06-23",
    id: 1,
    icon: "./news.svg",
  },
  {
    name: "Sitsit",
    date: "2022-06-11",
    icon: "./IE_Logo.svg",
    id: 2,
  },
  {
    name: "DG Newsletter",
    date: "2022-06-02",
    icon: "./news.svg",
    id: 3,
  },
  {
    name: "DGCC Event",
    date: "2022-02-18",
    icon: "./DGCC_Logo.svg",
    id: 4,
  },
  {
    name: "DG Newsletter",
    date: "2022-09-23",
    id: 5,
    icon: "./news.svg",
  },
  {
    name: "DG Newsletter",
    date: "2022-10-23",
    id: 6,
    icon: "./news.svg",
  },
  {
    name: "DG Newsletter",
    date: "2022-11-23",
    id: 7,
    icon: "./news.svg",
  },
];

const Newsbar = () => {
  const [page, setPage] = useState(0);
  const numPages = Math.ceil(news.length / 4);

  const nextPage = (event) => {
    event.preventDefault();
    setPage(page + 1 >= numPages ? page : page + 1);
  };

  const prevPage = (event) => {
    event.preventDefault();
    setPage(page - 1 < 0 ? page : page - 1);
  };

  // TODO: Fix key attribute generation

  return (
    <div className="newsbox">
      <ul className="newsbar">
        <li key={-1}>
          <button onClick={prevPage}> Previous </button>
        </li>
        {news.slice(page * 4, page * 4 + 4).map((piece) => (
          <li key={piece.id}>
            <Newselement
              name={piece.name}
              date={piece.date}
              icon={piece.icon}
              id={piece.id}
            />
          </li>
        ))}
        <li key={-2}>
          <button onClick={nextPage}> Next</button>
        </li>
      </ul>
      <div className="dotbox">
        {[...Array(numPages).keys()].map((x) => (
          <div className={page === x ? "activecircle" : "circle"}></div>
        ))}
      </div>
    </div>
  );
};

export default Newsbar;
