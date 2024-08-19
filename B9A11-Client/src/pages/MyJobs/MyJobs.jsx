import  { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';



function MyJobs() {
    const { user,loading } = useContext(AuthContext);
    const [jobs,setJobs]= useState([])
    const url = `https://jobhunt-server-seven.vercel.app
/jobPosts?email=${user?.email}`;
   
  

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setJobs(data))
    },[url])
    

     const handleDelete = (_id) => {
       Swal.fire({
         title: "Are you sure you want to delete",
         text: "you won't be able to revert",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, Delete",
       }).then((result) => {
         if (result.isConfirmed) {
           // Perform deletion logic here
           Swal.fire("You have successfully deleted");
           fetch(`https://jobhunt-server-seven.vercel.app
/jobPosts/${_id}`, {
             method: "DELETE",
           })
             .then((res) => res.json())
             .then((data) => {
              
               if (data.deletedCount > 0) {
                 Swal.fire("You have successfully deleted");
                 const remaining = jobs.filter(
                   (job) => job._id !== _id
                  );
                  setJobs(remaining)
                 
               }
             });
         }
       });
     };

 

  return (
    <div>
      <div className="flex items-center gap-x-3 my-20 justify-center">
        <h2 className="text-2xl text-center font-medium  ">My Posted Jobs</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {jobs.length} Job
        </span>
      </div>
      { jobs.length === 0 && (
        <h1 className="text-2xl text-center font-bold h-[75vh] mt-12 p-7">
          You have not added any Job yet
        </h1>
      )}
      {!loading && (
        <div>
          {jobs.map((job, index) => (
            <div key={index} className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Deadline</th>
                    <th> Update</th>
                    <th>
                      <label>Delete</label>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className=" w-[200px]  p-1">
                            <img src={job.image} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{job.customerName}</div>
                          <div className="text-sm opacity-50">{job.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="flex flex-col justify-center items-start h-[200px] text-start w-[200px]">
                      {job.jobTitle}
                      <br />
                      <div className="flex gap-2">
                        <span className="badge badge-ghost badge-sm mt-2 ">
                          {job.jobCategory}
                        </span>
                        <span className="badge badge-ghost badge-sm mt-2 ">
                          {job.salaryRange}
                        </span>
                      </div>
                    </td>
                    <td>{job.deadlineDate}</td>
                    <th>
                      <Link to={`/update/${job._id}`}>
                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </button>
                      </Link>
                    </th>
                    <th>
                      <label>
                        {/* <button onClick={()=>handleDelete(job._id)} className="btn btn-sm hover:bg-red-600 border-none btn-circle btn-outline">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button> */}
                        <button
                          onClick={() => handleDelete(job._id)}
                          className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </label>
                    </th>
                  </tr>
                </tbody>
                {/* foot */}
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyJobs