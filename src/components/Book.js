import React from "react";

const Book = (props) => {
  // console.log(props["books-img-src"]);
  return (
    <div className="w-48 mx-12  my-4 flex flex-col items-center">
      <div className="overflow-hidden rounded-lg">
        <img src={props["books-img-src"]} alt={props.name} className="w-full h-auto" />
      </div>
      <div className="mt-2 text-center whitespace-nowrap overflow-hidden overflow-ellipsis">
        <p className="text-sm">{props.name}</p> 
      </div>
    </div>
  );
};

export default Book;
