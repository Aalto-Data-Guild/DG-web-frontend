import Newselement from "./Newselement";
const news = [
  {
    name: "DG Newsletter",
    date: "2022-06-23",
    type: "NEWSLETTER",
    id: 1,
  },
  {
    name: "Sitsit",
    date: "2022-06-11",
    type: "IE",
    id: 2,
  },
  {
    name: "DG Newsletter",
    date: "2022-06-02",
    type: "NEWSLETTER",
    id: 3,
  },
  {
    name: "DGCC Event",
    date: "2022-02-18",
    type: "DGCC",
    id: 4,
  },
];

const Newsbar = () => {
  return (
    <div>
      <ul className="newsbar">
        {news.map((piece) => (
          <li key={piece.id}>
            <Newselement
              name={piece.name}
              date={piece.date}
              type={piece.type}
              id={piece.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Newsbar;
