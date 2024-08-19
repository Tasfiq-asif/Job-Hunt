
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Card({ job }) {
 

  // eslint-disable-next-line react/prop-types
  const dateString = job.deadlineDate;
  // eslint-disable-next-line react/prop-types
  const dateComponents = dateString.split("-");

  const year = parseInt(dateComponents[0], 10);
  const month = parseInt(dateComponents[1], 10);
  const day = parseInt(dateComponents[2], 10);

  const formattedDay = (day < 10 ? "0" : "") + day;
  const formattedMonth = (month < 10 ? "0" : "") + month;
  const formattedYear = year.toString().slice(-2);
  const formattedDate = `${formattedDay}/${formattedMonth}/${formattedYear}`;

   // eslint-disable-next-line react/prop-types
   const dateString1 = job.postDate;
   // eslint-disable-next-line react/prop-types
   const dateComponents1 = dateString1.split("-");

   const year1 = parseInt(dateComponents1[0], 10);
   const month1 = parseInt(dateComponents1[1], 10);
   const day1 = parseInt(dateComponents1[2], 10);

   const formattedDay1 = (day1 < 10 ? "0" : "") + day1;
   const formattedMonth1 = (month1 < 10 ? "0" : "") + month1;
   const formattedYear1 = year1.toString().slice(-2);
   const formattedDate1 = `${formattedDay1}/${formattedMonth1}/${formattedYear1}`;



  return (
    <div>
      <Link to={`/jobs/${job._id}`}>
        <div className="card relative w-[230px] h-[300px]  shadow-2xl  hover:bg-[#2a68ff] hover:text-white cursor-pointer">
          <div className="px-[20px] py-5 items-center hover:text-white">
            <div className="flex justify-between items-center text-center h-[55px]">
              <h2 className="text-[16px] font-semibold  mx-auto">
                {job.jobTitle}
              </h2>
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex items-center gap-3 text-[12px]">
                <span className="pl-2 mt-[20px] ">Applicanats:</span>

                <span className=" border px-[8px] mt-[20px]  text-black rounded-lg bg-blue-200">
                  {" "}
                  {job.applicantNumber}
                </span>
              </div>
            </div>

            <div className="text-[13px] text-[#95959] pt-[30px] border-t-[2px] mt-[10px]">
              {/* {job.jobDescription.trim().split(/\s+/).slice(0, 10).join(" ")} */}
              <div className="flex items-center justify-center gap-3 ">
                <h6 className=" pb-2">{job.salaryRange} level </h6>
                <h6 className="  mb-2 text-md ">
                  <span
                    style={{
                      backgroundColor:
                        job.jobCategory === "Remote"
                          ? "#5B9BD5"
                          : job.jobCategory === "PartTime"
                          ? "#ED7D31"
                          : job.jobCategory === "Hybrid"
                          ? "#70AD47"
                          : job.jobCategory === "OnSite"
                          ? "#FFC000"
                          : "#A5A5A5",
                    }}
                    className="bg-green-200 px-2 rounded-xl text-black"
                  >
                    {job.jobCategory}
                  </span>
                </h6>
              </div>
              <div className="flex items-center justify-center text-[12px] mb-2 mt-2">
                <span className="pl-2 pr-1 font-bold  ">Job Posted:</span>

                <span> {formattedDate1}</span>
              </div>
              <div className="flex items-center justify-center text-[12px]">
                <span className="pl-2 pr-1 font-bold ">Deadline:</span>

                <span> {formattedDate}</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <figure className=" absolute bottom-8 left-3 pt-10">
                <img src={job.image} className="rounded-xl w-[70px] h-7" />
              </figure>
              <div className="flex gap-0">
                <RxArrowTopRight className="absolute bottom-[20px] right-5 w-[35px] h-[35px]  group-hover:text-blue-500 group-hover:rotate-45 duration-100 " />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
