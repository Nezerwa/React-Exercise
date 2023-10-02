function Flip({
  avatar,
  first_name,
  last_name,
  employment,
  email,
  gender,
  address,
}) {
  return (
    <div className=" bg-white text-center border shadow-xl rounded-lg w-[400px]">
      <div className="flip-inner">
        <div className="flip-front">
          <div>
            <img src={avatar} alt="avatar" />
            <h3 className="font-bold">{`${first_name} ${last_name}`}</h3>
            <p className="text-lg">{employment.title}</p>
          </div>
        </div>
        <div className="flip-back">
          <h2 className="font-bold">More information Above</h2>
          <p className="text-lg">{email}</p>
          <p className="text-lg">{gender}</p>
          <p className="text-lg">{address.city}</p>
        </div>
      </div>
    </div>
  );
}
export default Flip;
