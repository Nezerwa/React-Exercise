<div className=" bg-white text-center border shadow-xl rounded-lg w-[400px] bg-transparent border-gray-200 group">
  <div className="flip-inner relative [perspective:1000px] [transition: transform 0.8s] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition">
    <div className="flip-front h-full w-full [-webkit-backface-visibility:hidden] [backface-visibility:hidden] bg-white">
      <div>
        <img src={avatar} alt="avatar" />
        <h3 className="font-bold">{`${first_name} ${last_name}`}</h3>
        <p className="text-lg">{employment.title}</p>
      </div>
    </div>
    <div className="flip-back h-full w-full [-webkit-backface-visibility:hidden] [backface-visibility:hidden]">
      <h2 className="font-bold">More information Above</h2>
      <p className="text-lg">{email}</p>
      <p className="text-lg">{gender}</p>
      <p className="text-lg">{address.city}</p>
    </div>
  </div>
</div>;
