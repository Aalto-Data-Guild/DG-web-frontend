const Newselement = ({ name, date, type, id }) => {
  const icon = (x) => {
    switch (x) {
      case "NEWSLETTER": {
        return "./news.svg";
      }
      case "IE": {
        return "./IE_Logo.svg";
      }
      case "DGCC": {
        return "./DGCC_Logo.svg";
      }
      default: {
        return "./news.svg";
      }
    }
  };
  return (
    <div>
      <ul>
        <li key={id * 10 + 1}>
          <img alt="news element icon" src={icon(type)} />
        </li>
        <li key={id * 10 + 2}>{name}</li>
        <li key={id * 10 + 3}>{date}</li>
      </ul>
    </div>
  );
};

export default Newselement;
