import  { useEffect, useState } from 'react'
import Card from './Card';
import Tabs from "./Tabs"; 


function Cards() {
    const [jobs,setJobs] = useState([])
    const [selectedTab, setSelectedTab] = useState("All");
    useEffect(() => {
      fetch("https://jobhunt-server-seven.vercel.app/jobPosts")
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }, []);

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
    <div className="mt-4">
      <div className="text-center">
        <h1 className="text-3xl font-semibold lg:text-4xl">Job By Preference</h1>
      </div>
      <div>
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className=" px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto  justify-items-center">
          {filteredJobs()
            .slice(0, 8)
            .map((job) => (
              <Card key={job._id} job={job}></Card>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Cards