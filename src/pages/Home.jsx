import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCompany } from "../store/slice/companySlice"
import { useGetCompanyQuery } from "../store/slice/companyApi"


const Home = () => {
  // const dispatch = useDispatch()
  //  const companyState = useSelector((state) => state.company)
  //   useEffect(() => {
  //     dispatch(getCompany())
  //   }, [dispatch])

  //  if (companyState.isLoading) {
  //     return <h1>Loading...</h1>
  //   }


  const {
    data,
    isLoading,
    isError,

  } = useGetCompanyQuery()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>Error</h1>
  }

  return (
    <div className=" p-4 border border-red-500 rounded gap-3">


      {data.slice().reverse().map((company) => (
        <div key={company.id} className="p-3 mb-4 border border-white rounded-lg ">
          <h3 className="text-xl text-yellow-900 py-4">{company.name}</h3>
          <p>{company.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Home