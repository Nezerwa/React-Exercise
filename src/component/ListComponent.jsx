function ListComponent({ items }) {
  return (
    <div className="flex flex-col justify-center items-center h-72">
      <ul className="flex flex-col gap-5">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListComponent;
