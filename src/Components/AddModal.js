import React, { useRef, useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    studentName: yup.string().required(),
    class: yup.number().positive().integer().min(1).max(12).required(),
    score: yup.number().positive().integer().min(0).max(100).required()
})

const AddModal = () => {
    const [score, setScore] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors }, getValues
      } = useForm({ resolver: yupResolver(schema)});
    
     const submitForm = (data) => {console.log(data);}

    const handleChange= () => {    
        const singleValue = getValues("score");
        setScore(singleValue);
     }

  
      return (
        <div>
          <input type="checkbox" id="addModal" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box h-[500px]">
              <h3 class="text-lg font-bold my-2">Add Student</h3>
              <hr className=" border-[#D3D6DB] border-solid w-full mb-4" />


            { /* ADDStudent  */}
              <form onSubmit={handleSubmit(submitForm)}>

                {/* Name */}
                <label className="uppercase text-gray-400 ">Student Name*</label> 
                <input className="border w-full rounded-lg mb-4" type="text" name="studentName"  
                {...register("studentName")}/>
                
              {errors.studentName && <p className="text-red-500 mb-4">Error: Name field cannot be left blank</p> }
    
                {/* Class  */}
                <label className="uppercase text-gray-400">Class*</label>
                <input className="border w-full rounded-lg" type="text" name="class" 
                {...register("class")} />
                <p className="text-xs text-gray-400 mb-4">Please input values between 1 {"&"} 12</p>
                {errors.class && <p className="text-red-500 mb-4">Error: Please input values between 1 {"&"} 12</p> }

               {/* Score  */}
                <label className="uppercase text-gray-400">Score*</label>
                <input className="border w-full rounded-lg" type="text" name="score" 
                {...register("score")} id="score" onBlur={handleChange}/>
                <p className="text-xs text-gray-400 mb-4">Please input values between 0 {"&"} 100</p>
                {errors.score && <p className="text-red-500 mb-4">Error: Score field cannot be left blank</p> }

                {/* Result  */}
                <label className="uppercase text-gray-400">Result</label>
                {score>= 31 ? <p className="text-white text-center bg-green-500 rounded-3xl w-[80px] px-1 my-2">
                        Passed
                      </p>
                      : score >0 ?
                      <p className="text-white text-center bg-red-500 rounded-3xl w-[70px] px-1 my-2">
                        Failed
                      </p> : <p>-</p>
                      }

                 {/* Grade  */}
                <label className="uppercase text-gray-400">Grade</label>
                {score>= 76 ? <p className="text-green-500 font-bold my-2">
                        Excellent
                      </p>
                      : score >= 31 ?
                      <p className="text-blue-500 font-bold my-2">
                        Average
                      </p> :
                       score > 0 ?
                       <p className="text-red-500 font-bold my-2">
                         Poor
                       </p> : <p>-</p>
                      }
    
                <hr className=" border-[#D3D6DB] border-solid w-full" />
    
                {/* Button  */}
                <label className="absolute right-28 my-3 text-[#2CA4D8] border border-[#2CA4D8] px-5 py-1 rounded-xl mr-6 uppercase" htmlFor="addModal">Cancel</label>
                <input className="absolute right-4 my-3 text-white border bg-[#2CA4D8] px-5 py-1 rounded-xl uppercase" type="submit" value="Confirm" id="submit" />
              </form>
    
            </div>
          </div>
        </div>
      );
};

export default AddModal;
