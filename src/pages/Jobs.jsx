
import { useGetJobQuery } from '../store/slice/jobsApi'

const Jobs = () => {


    const {
        data,
        isLoading,
        isError } = useGetJobQuery()

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error</h1>
    }

    return (
        <div className=" p-4 border border-red-500 rounded gap-3 flex flex-col">
            <div className="text-3xl flex justify-center"><h2>Jobs</h2> </div>

            {data.slice().reverse().map((job) => (
                <div key={job.id} className="p-3 mb-4 border border-white rounded-lg ">
                    <h3 className="text-xl text-yellow-900 py-4">{job.title}</h3>
                    <p>{job.description}</p>
                    <p>Salary: {job.salary}</p>
                    <p>Loacation : {job.location}</p>


                </div>
            ))}
        </div>
    )
}

export default Jobs
