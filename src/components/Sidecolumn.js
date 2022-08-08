import Sidetext from "./Sidetext";

const Sidecolumn = ({ contents }) => {
  return (
    <div id="sidecol">
      {contents.map((piece) => (
        // Sidetext is the component rendering each paragraph
        <Sidetext key={piece.id} header={piece.header} text={piece.text} />
      ))}
    </div>
  );
};

export default Sidecolumn;
