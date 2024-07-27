import { CompanyCard } from "../components/CompanyCard";
import { useGetCompaniesQuery } from "../store/slices/companyApi";

const Home = () => {
  const { data, isLoading, isError, error } = useGetCompaniesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="px-10 py-5">
      <div className="flex flex-wrap gap-3">
        {data.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default Home;
