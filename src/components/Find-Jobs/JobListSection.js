import JobCard from "./job-card-component/JobCard"
export default function JobListSection (){
    return(
        <div className="container mx-auto md:px-8 px-4 py-4 md:mt-4">
        <div className="flex flex-wrap flex-row justify-center mb-6">
          <div className=" md:w-4/12 w-full">
            <div className="">
              <JobCard />
            </div>
          </div>
          <div className="md:w-4/12 w-full">
            <div className="">
            <JobCard />
            </div>
          </div>
          <div className="md:w-4/12 w-full">
          <JobCard />
          </div>
        </div>
        <div className="flex flex-wrap flex-row justify-center">
          <div className=" md:w-4/12 w-full">
            <div className="">
              <JobCard />
            </div>
          </div>
          <div className="md:w-4/12 w-full">
            <div className="">
            <JobCard />
            </div>
          </div>
          <div className="md:w-4/12 w-full">
          <JobCard />
          </div>
        </div>
      </div>
    )
}