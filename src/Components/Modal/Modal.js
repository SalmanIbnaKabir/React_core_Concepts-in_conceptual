import React from "react";

const Modal = (props) => {
  // console.log(props);
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-96">
          <label
            onClick={() => props.setModalData(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold my-3">Gun Name: {props?.data?.name}</h3>
          <img src={props.data.img} className='w-96 rounded-md shadow-md h-44' alt="" />
          <p className="py-4">
            Action: {props.data.action ? props.data.action : "Not Found"}
          </p>
          <p className="py-4">
            Capacity: {props.data.capacity ? props.data.capacity : "Not Found"}
          </p>
          <p className="py-4">
            Category: {props.data.category ? props.data.category : "Not Found"}
          </p>
          <p className="py-4 text-error">
            Price: {props.data.price ? props.data.price : "Not Found"}{props.data.price ? '$' : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
