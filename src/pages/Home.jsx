import { useDispatch, useSelector } from "react-redux"
import { CompanyCard } from "../components/CompanyCard"
import { useEffect } from "react"
import { getCompanies } from "../store/slices/companySlice"


const Home = () => {
  const dispatch = useDispatch()

  const companyState = useSelector((state) => state.company)

  useEffect(() => {
    dispatch(getCompanies())
  }, [])

  if (companyState.loading) {
    return <div>Loading...</div>
  }

  if (companyState.isError) {
    return <div>Error: {companyState.message}</div>
  }

  return (
    <div className="px-10 py-5">

        <div className="flex flex-wrap gap-3">
          {
            companyState.companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))
          }
          
        </div>
    </div>
  )
}

export default Home