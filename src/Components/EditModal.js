import React, { useRef } from "react";
import { useForm } from "react-hook-form";

const EditModal = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const score = useRef(null);

  const submit = () => {
    const final = score.current;
    console.log(final);
  };

  return (
    <div className="uppercase">
      <input type="checkbox" id="editModal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box ">
          <h3 class="text-lg font-bold my-4">Edit Student</h3>
          <hr className=" border-[#D3D6DB] border-solid w-full " />
          <div>
            <label>Student Name*</label> <br />
            <input
              className="border w-full rounded"
              {...register("studentName", { required: true })}
            />
            {errors.studentName?.type === "required" &&
              "Name field cannot be left blank"}{" "}
            <br />
            <label>Class*</label> <br />
            <input
              className="border w-full rounded"
              {...register("class", { required: true })}
            />
            {errors.class && (
              <p>Error: Please input values between 1 {"&"} 12</p>
            )}{" "}
            <p className="text-gray-400 text-sm">
              Please input values between 1 {"&"} 12
            </p>
            <label>Score*</label> <br />
            <input
              ref={score}
              className="border w-full rounded"
              {...register("score", { required: "Email Address is required" })}
            />
            <p className="text-gray-400 text-sm">
              Please input values between 0 {"&"} 100
            </p>
            <p>{errors.score?.message}</p>
            <label htmlFor="">Result</label>
            <p className="mb-4">-</p>
            <label htmlFor="">Grade</label>
            <p className="mb-4">-</p>
            <hr className=" border-[#D3D6DB] border-solid w-full " />
            <div className="my-6 flex justify-end">
              <label
                className="my-6 flex justify-end text-[#2CA4D8] border border-[#2CA4D8] px-6 py-2 rounded-xl mr-4"
                htmlFor="editModal"
              >
                Cancel
              </label>
              <label
                className="my-6 flex justify-end text-white border bg-[#2CA4D8] px-6 py-2 rounded-xl"
                onClick={submit}
              >
                Submit
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
