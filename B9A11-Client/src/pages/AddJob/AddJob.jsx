import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function AddJob() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleJobPost = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const postDate = form.postDate.value;
    const deadlineDate = form.deadlineDate.value;
    const image = form.image.value;
    const description = form.description.value;
    const email = user?.email;
    const jobTitle = form.jobTitle.value;
    const jobCategory = form.category.value;
    const salaryRange = form.salary.value;

    const jobPost = {
      customerName: name,
      email,
      image,
      deadlineDate,
      postDate,
      jobTitle: jobTitle,
      jobDescription: description,
      jobCategory,
      salaryRange,
      applicantNumber:0
    };

    fetch("https://jobhunt-server-seven.vercel.app/jobposts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobPost),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.insertedId) {
          toast("Job added successfully");
          form.reset();
          navigate("/myjobs");
        }
      });
  };
  return (
    <div className="mx-4">
      <h2 className="flex items-center gap-x-3 my-16 justify-center text-2xl font-medium ">
        Add job
      </h2>
      <form onSubmit={handleJobPost}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Banner image Url</span>
            </label>
            <input
              type="url"
              name="image"
              className="input input-bordered"
              placeholder="Banner image"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Job title</span>
            </label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="name"
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range(Per annum)</span>
            </label>
            <select
              name="salary"
              className="select select-bordered "
              defaultValue=""
            >
              <option disabled value="">
                Select
              </option>
              <option value="entry">Entry level: $30000 - $55000</option>
              <option value="mid">Mid Level: $56000-$85000</option>
              <option value="senior">Senior Level: $86000-$120000 </option>
              <option value="manager">Managerial: $120000+</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job-Description</span>
            </label>
            <textarea
              type="text"
              name="description"
              placeholder="enter the job description"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Posting Date</span>
            </label>
            <input
              type="date"
              name="postDate"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Application Deadline</span>
            </label>
            <input
              type="date"
              name="deadlineDate"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Category</span>
            </label>
            <select
              name="category"
              className="select select-bordered "
              defaultValue=""
            >
              <option disabled value="">
                Select
              </option>
              <option value="Remote">Remote</option>
              <option value="OnSite">On Site</option>
              <option value="PartTime">Part time</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-[#2a68ff] text-white hover:bg-transparent hover:text-[#2a68ff] hover:border  hover:border-[#2a68ff]"
            type="submit"
            value=" Add Job"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddJob;
