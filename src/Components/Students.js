import React, { useState } from "react";
import data from "../studentsData";
import edit from "../../src/Images/edit.png";
import remove from "../../src/Images/remove.png";
import AddModal from "./AddModal";
import RemoveModal from "./RemoveModal";
import EditModal from "./EditModal";

const Students = () => {
  const [modal, setModal] = useState(false);
  const [removeModal, setRemoveModal] = useState({});

  console.log(removeModal);
  return (
    <div>
      <div className="flex justify-between p-4">
        <p className="text-xl font-bold">Students</p>
        <label
          htmlFor="addModal"
          onClick={() => setModal(true)}
          className="bg-[#38B5EB] text-white px-6 py-1 rounded-lg cursor-pointer"
        >
          + ADD
        </label>
      </div>
      <div className="relative overflow-x-auto p-4">
        <div className="border border-inherit h-[100vh] rounded-xl">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>Student Name</th>
                <th>Class</th>
                <th>Result</th>
                <th>Score</th>
                <th>Grade</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((student) => (
                <tr className="hover cursor-pointer">
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.class}</td>
                  {student.result === "Passed" ? (
                    <td>
                      <p className="text-white text-center bg-green-500 rounded-3xl w-[80px] px-1">
                        {student.result}
                      </p>
                    </td>
                  ) : (
                    <td>
                      <p className="text-white text-center bg-red-500 rounded-3xl w-[70px] px-1">
                        {student.result}
                      </p>
                    </td>
                  )}
                  <td>{student.score}</td>
                  {student.grade === "Excellent" ? (
                    <td>
                      <p className="text-green-500 font-bold">
                        {student.grade}
                      </p>
                    </td>
                  ) : student.grade === "Poor" ? (
                    <td>
                      <p className="text-red-500 font-bold">{student.grade}</p>
                    </td>
                  ) : (
                    <td>
                      <p className="text-blue-500 font-bold">{student.grade}</p>
                    </td>
                  )}
                  <td>
                    <div className="flex gap-4 opacity-0 hover:opacity-100">
                      
                      <label className="cursor-pointer" htmlFor="editModal" onClick={() => setModal(true)}><img src={edit} alt="" /></label>
                      <label className="cursor-pointer" htmlFor="removeModal" onClick={() => setRemoveModal(student)}><img src={remove} alt="" /></label>
                      
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {modal && <AddModal ></AddModal>}
      {modal && <EditModal></EditModal>}
      {removeModal && <RemoveModal removeModal={removeModal}></RemoveModal>}

      <p className="text-left ml-4">
        Showing {data.length - 1} of {data.length-1} entries
      </p>
    </div>
  );
};

export default Students;
