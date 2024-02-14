export default function Quote(props) {
  return (
    <>
      <div className="Quote">
        <p className="font-bold">{props.quote.content}</p>
        <h1>{props.quote.author}</h1>
      </div>
    </>
  );
}
