export default function Quote(props) {
  return (
    <>
      <div className="Quote m-4 w-64 rounded-lg border-2 border-black p-4 text-center ">
        <p className=" font-bold">{props.data.content}</p>
        <h1>{props.data.author}</h1>
      </div>
    </>
  );
}
