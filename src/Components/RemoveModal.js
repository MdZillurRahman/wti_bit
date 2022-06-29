import React from "react";

const RemoveModal = ({removeModal}) => {


  return (
    <div >
      <input type="checkbox" id="removeModal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box ">
          <h3 class="text-lg font-bold my-4">Remove Student</h3>
          <hr className=" border-[#D3D6DB] border-solid w-full " />
          <div>
            <p className="my-4 font-bold">Are you sure you want to remove the current student from the list?</p>
            <p className="text-gray-300 text-md uppercase">Student Name</p>
            <p className="mb-4">{removeModal.name}</p>
            <p className="text-gray-300 text-md uppercase">Class</p>
            <p className="mb-4">{removeModal.class}</p>
            <hr className=" border-[#D3D6DB] border-solid w-full " />
            
            <div className="flex justify-end">
                <label className="my-6 flex justify-end text-[#2CA4D8] border border-[#2CA4D8] px-6 py-2 rounded-xl mr-4" htmlFor="removeModal">Cancel</label>
                <label className="my-6 flex justify-end text-white border bg-red-500 px-6 py-2 rounded-xl">Remove</label>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveModal;
