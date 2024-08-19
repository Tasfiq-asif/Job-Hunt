import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

function AllJobs() {
    const {user} = useContext(AuthContext)
    const [jobs, setJobs] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
      fetch(`https://jobhunt-server-seven.vercel.app/jobPosts`)
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }, []);

     const filteredJobs = jobs.filter((job) =>
       job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
     );


   

  return (
    <div>
      <div className="flex items-center gap-x-3 mt-20 justify-center">
        <h2 className="text-2xl text-center font-medium  ">Total Jobs</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {jobs.length} Job
        </span>
      </div>
      <div className=" w-full border px-[200px] py-[30px] mx-auto flex justify-center rounded-3xl mb-14 my-6 bg-base-200 items-center py-2">
        <h1 className="mr-2 font-bold">Search</h1>
        <input
          type="text"
          placeholder="Search by job title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border  rounded-md px-3 py-2 "
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job Title</th>
              <th>Job Posting Date</th>
              <th>Application Deadline</th>
              <th>Salary range</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {filteredJobs.map((job) => (
              <tr key={job._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="">
                      <div className=" w-12 h-12">
                        <img src={job.image} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.customerName}</div>
                      <div className="text-sm opacity-50">{job.email}</div>
                    </div>
                  </div>
                </td>
                <td>{job.jobTitle}</td>
                <td>{job.postDate}</td>
                <td>{job.deadlineDate}</td>
                <td>
                  {job.salaryRange === "entry"
                    ? "$30000 - $55000"
                    : job.salaryRange === "mid"
                    ? "$56000-$85000"
                    : job.salaryRange === "senior"
                    ? "$86000-$120000"
                    : job.salaryRange === "manager"
                    ? "$120000+"
                    : ""}
                </td>
                <td>
                  {user && user.email ? (
                    <Link to={`/jobs/${job._id}`}>
                      <button className="btn btn-xs bg-[#2a68ff] text-white hover:bg-transparent hover:text-[#2a68ff] hover:border  hover:border-[#2a68ff] ">
                        details
                      </button>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <button className="btn btn-xs bg-[#2a68ff] text-white hover:bg-transparent hover:text-[#2a68ff] hover:border  hover:border-[#2a68ff] ">
                        Login to view details
                      </button>
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllJobs