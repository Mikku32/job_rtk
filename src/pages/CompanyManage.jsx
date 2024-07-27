import { useDispatch, useSelector } from "react-redux";
import { createCompany, getCompanies } from "../store/slices/companySlice";

export const CompanyManage = () => {
  const dispatch = useDispatch();

  const companyState = useSelector((state) => state.company);

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const logo = e.target.logo.value;
    const website = e.target.website.value;

    try {
      await dispatch(
        createCompany({
          name,
          description,
          logo,
          website,
        })
      ).unwrap();
    } catch (error) {
      alert("error");
    }
  };

  if (companyState.createLoading) {
    return <div>Creating Company...</div>;
  }

  if (companyState.createError) {
    return <div>Error: </div>;
  }

  return (
    <form id="manage" onSubmit={onSubmit}>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" id="name" className="grow" placeholder="Name" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          id="description"
          type="text"
          className="grow"
          placeholder="description"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input id="logo" type="text" className="grow" placeholder="Logo" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          id="website"
          type="text"
          className="grow"
          placeholder="Website"
        />
      </label>

      <button className="btn" type="submit" form="manage">
        Create
      </button>
    </form>
  );
};
