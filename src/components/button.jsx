function ButtonComponent(props) {
  const clickHandler = () => {
    alert(`You have clicked on ${props.children}`);
  };
  return (
    <div>
      <button
        className=" bg-gray-400 text-xl text-white rounded w-40"
        onClick={clickHandler}
      >
        Button {props.children}
      </button>
    </div>
  );
}

export default ButtonComponent;
