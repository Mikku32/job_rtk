import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCompany } from "../store/slice/companySlice"


const Home = () => {
const dispatch = useDispatch()
 const companyState = useSelector((state) => state.company)
  useEffect(() => {
    dispatch(getCompany())
  }, [dispatch])

 if (companyState.isLoading) {
    return <h1>Loading...</h1>
  }
  
  return (
    <div className="px-10 py-5">

      <h2>hey</h2>
      {companyState.companies.map((company) => (
        <div key={company.id}>
          <h3>{company.name}</h3>
          <p>{company.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Home