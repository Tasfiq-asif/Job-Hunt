import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoFilterOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


function AppliedJobs() {
    const { user, loading } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);
    const [selectedTab, setSelectedTab] = useState();
 
  const [isOpen, setIsOpen] = useState(false);

    const url = `https://jobhunt-server-seven.vercel.app/appliedjobs?email=${user?.email}`;

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }, [url]);
  

      const filteredJobs = () => {
    switch (selectedTab) {
      case "All":
        return jobs;
      case "Remote":
        return jobs.filter(job => job.jobCategory === "Remote");
      case "On-Site":
        return jobs.filter(job => job.jobCategory === "OnSite");
      case "Hybrid":
        return jobs.filter(job => job.jobCategory === "Hybrid");
      case "PartTime":
        return jobs.filter(job => job.jobCategory === "PartTime");
      default:
        return jobs;
    }
  };
  return (
    <div>
      <div>
        <div className="flex items-center gap-x-3 my-20 justify-center">
          <h2 className="text-2xl text-center font-medium  ">
            My Applied Jobs
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {jobs.length} Job
          </span>
        </div>
        {jobs.length === 0 && (
          <h1 className="text-2xl text-center font-bold h-[75vh] mt-12 p-7">
            You have not added any Job yet
          </h1>
        )}
        <div className="overflow-x-auto h-[75vh]">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Job Title</th>
                <th>Job Posting Date</th>
                <th>Application Deadline</th>
                <th>Salary range</th>
                <th>
                  Job Category
                  <div className="relative inline-block">
                    {/* Dropdown toggle button */}
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="relative z-10 block p-2  border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none"
                    >
                      <IoFilterOutline />
                    </button>

                    {/* Dropdown menu */}
                    {isOpen && (
                      <div
                        onClick={() => setIsOpen(false)}
                        className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl"
                      >
                        <a
                          onClick={() => {
                            setSelectedTab("All");
                            setIsOpen(false);
                          }}
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 hover:bg-blue-600 hover:text-white "
                        >
                          All
                        </a>
                        <a
                          onClick={() => {
                            setSelectedTab("On-Site");
                            setIsOpen(false);
                          }}
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 hover:bg-blue-600 hover:text-white "
                        >
                          On Site
                        </a>
                        <a
                          onClick={() => {
                            setSelectedTab("Remote");
                            setIsOpen(false);
                          }}
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 hover:bg-blue-600 hover:text-white "
                        >
                          Remote
                        </a>
                        <a
                          onClick={() => {
                            setSelectedTab("PartTime");
                            setIsOpen(false);
                          }}
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 hover:bg-blue-600 hover:text-white "
                        >
                          Part-Time
                        </a>
                        <a
                          onClick={() => {
                            setSelectedTab("Hybrid");
                            setIsOpen(false);
                          }}
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Hybrid
                        </a>
                      </div>
                    )}
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {filteredJobs().map((job) => (
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
                  <td>{job.jobCategory}</td>
                  <td>
                  
                      <Link to={`/jobs/${job._id}`}>
                        <button className="btn btn-xs bg-[#2a68ff] text-white hover:bg-transparent hover:text-[#2a68ff] hover:border  hover:border-[#2a68ff] ">
                          details
                        </button>
                      </Link>
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AppliedJobs