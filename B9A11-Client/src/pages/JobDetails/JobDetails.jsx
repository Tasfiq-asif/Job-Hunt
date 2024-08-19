import { useContext } from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { IoHourglassOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

function JobDetails() {
  const jobs = useLoaderData();
  const { user } = useContext(AuthContext);
  
  
  const {
    customerName: name,
    email,

    image,
    deadlineDate,
    postDate,
    jobTitle,
    jobDescription,
    jobCategory,
    salaryRange,
    _id,
  } = jobs;
  
 
  const handleapplyModal = async (userId) => {

     if (!userId) {
       // Handle the case where user ID is not available
       console.error("User ID is not available");
       return;
     }

    const deadline = new Date(deadlineDate); // Convert deadlineDate string to Date object
    const today = new Date();
    const appliedJobsResponse = await fetch(
      `https://jobhunt-server-seven.vercel.app/appliedjobs?${userId}`
    );
    if (!appliedJobsResponse.ok) {
      // Handle the case where fetching applied jobs failed
      console.error("Failed to fetch applied jobs");
      return;
    }
    const appliedJobs = await appliedJobsResponse.json();

    const jobIds = appliedJobs.map((job) => job._id);

    if (user?.email === email) {
      // Check if the user is the poster of the job
      toast.error("You can't apply for the job you posted");
    } else if (deadline < today) {
      // Check if the deadline has passed
      toast.error("The deadline for this job has passed");
    } else if (jobIds.includes(_id)) {
      // Check if the user has already applied for this job
      toast.toast.error("You have already applied for this job");
    } else {
      document.getElementById("my_modal_4").showModal();
    }
  };

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const resume = form.resume.value;

    const job = {
      name,
      applicantEmail:user.email,
      image,
      deadlineDate,
      postDate,
      jobTitle,
      jobDescription,
      jobCategory,
      salaryRange,
      _id,
      resume,
    };

    fetch("https://jobhunt-server-seven.vercel.app/appliedJobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(job),
    })
      .then((res) => res.json())
      .then((data) => {
   
        if (data.insertedId) {
          toast.success("Job applied successfully");
          form.reset();
          const modal = document.getElementById("my_modal_4");
          modal.close();
        }
      });
  };

  return (
    <div>
      <div
        className="flex  flex-col gap-2 lg:flex-row justify-between lg:items-start  items-center ml-4
      "
      >
        <div className="w-2/3 lg:w-1/3 mt-16">
          <figure className="w-2/3">
            <img src={image} alt="" />
          </figure>
          <h2 className=" text-normal font-bold mt-3">
            {" "}
            Job Title: <span className=" font-normal">{jobTitle}</span>
          </h2>
          <div className="flex items-center mt-3 gap-2">
            <span className="font-bold">Job Type:</span> <IoLocationOutline />{" "}
            {jobCategory}
          </div>
          <div className="flex items-center mt-3 gap-3">
            <span className="font-bold">Job Posted:</span> <BsCalendar2Date />{" "}
            {postDate}
          </div>
          <div className="flex items-center mt-3 gap-3">
            <span className="font-bold">Application Deadline:</span>{" "}
            <IoHourglassOutline /> {deadlineDate}
          </div>
          <div className="flex items-center my-3 gap-3">
            <span className="font-bold">Salary:</span> <MdOutlineAttachMoney />{" "}
            {salaryRange === "entry"
              ? "$30000 - $55000"
              : salaryRange === "mid"
              ? "$56000-$85000"
              : salaryRange === "senior"
              ? "$86000-$120000"
              : salaryRange === "manager"
              ? "$120000+"
              : ""}{" "}
            (Annual)
          </div>

          <button
            onClick={() => handleapplyModal(user?.email)}
            className="btn bg-[#2a68ff] text-white hover:bg-transparent hover:text-[#2a68ff] hover:border  hover:border-[#2a68ff] w-3/4 "
          >
            Apply
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="Name"
                  defaultValue={user?.displayName}
                  placeholder="Name"
                  className="input input-bordered"
                  readOnly
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="email"
                  className="input input-bordered"
                  readOnly
                />
              </div>

              <form onSubmit={handleApply}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Resume Link </span>
                  </label>
                  <input
                    type="text"
                    name="resume"
                    placeholder="Resume URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="modal-action">
                  {/* if there is a button, it will close the modal */}
                  <button
                    type="submit"
                    className="btn bg-[#2a68ff] text-white hover:bg-transparent hover:text-[#2a68ff] hover:border  hover:border-[#2a68ff]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>

        {/* description */}

        <div className="border-t-2 lg:border-t-0 py-8 lg:border-l-2 w-full lg:w-2/3  px-8 h-full mt-16">
          <h2 className="text-xl font-bold mb-5"> Job Description:</h2>
          <div style={{ maxHeight: "75vh", overflowY: "auto" }}>
            <p>{jobDescription}</p>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default JobDetails;
