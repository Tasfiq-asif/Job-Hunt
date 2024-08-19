import  { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";

function UpdateJob() {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const job = useLoaderData();
    
  const {  customerName,
    deadlineDate,
    email,
    image,
    jobCategory,
    jobTitle, 
    jobDescription,
    postDate,
    salaryRange,_id} =job

    const handleUpdate= async(e)=>{
        e.preventDefault()
        const form = e.target;
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
        };

        try {
      const { data } = await axios.put(
        `https://jobhunt-server-seven.vercel.app/jobPosts/${_id}`,
        jobPost
      )
 
      toast.success('Job Data Updated Successfully!')
      navigate('/myjobs')
    } catch (err) {
    
      toast.error(err.message)
    }

    }


  return (
    <div className="mx-4">
      <h2 className="text-center text-3xl font-bold mt-14 mb-9">Update job</h2>
      <form onSubmit={handleUpdate}>
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
              defaultValue={image}
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
              defaultValue={jobTitle}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={customerName}
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
              defaultValue={email}
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
              defaultValue={salaryRange}
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
              defaultValue={jobDescription}
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
              defaultValue={postDate}
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
              defaultValue={deadlineDate}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Category</span>
            </label>
            <select
              name="category"
              className="select select-bordered "
              defaultValue={jobCategory}
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
            value=" Update"
          />
        </div>
      </form>
      {/* <ToastContainer /> */}
      <Toaster />
    </div>
  );
}

export default UpdateJob