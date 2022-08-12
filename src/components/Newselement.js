const Newselement = ({ name, date, icon, id }) => {
  const style = { "list-style": "none" };

  return (
    <div>
      <ul>
        <li key={id * 10 + 1} style={style}>
          <img alt="news element icon" src={icon} />
        </li>
        <li key={id * 10 + 2} style={style}>
          {name}
        </li>
        <li key={id * 10 + 3} style={style}>
          {date}
        </li>
      </ul>
    </div>
  );
};

export default Newselement;
