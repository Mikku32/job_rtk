

export const CompanyCard = ({
    company
}) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={company.logo}
      alt={company.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{company.name}</h2>
    <p>{company.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">See More</button>
    </div>
  </div>
</div>
  )
}
