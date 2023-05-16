/* eslint-disable react/jsx-no-comment-textnodes */
type SelectType = {
  setStatus: Function;
  setCategory: Function;
};

const Filter = (props: SelectType) => {
  const changeSelectStatus = (event: any) => setStatus(event.target.value);
  const changeSelectCategory = (event: any) => setCategory(event.target.value);
  const { setStatus, setCategory } = props;

  return (
    <div>
      <h4>Add Filter</h4>
      <form>
        <label htmlFor="typeList" className="form-label">
          Select category
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="typeList"
          onChange={changeSelectCategory}
        >
          <option selected disabled> -- Pick Category -- </option>
          <option value="Interrogation">Interrogation</option>
          <option value="Pilot">Pilot</option>
          <option value="Scout">Scout</option>
          <option value="Astromech">Astromech</option>
          <option value="Battle">Battle</option>
          <option value="Assassin">Assassin</option>
          <option value="Protocol">Protocol</option>
          <option value="Torture">Torture</option>
        </select>

        <label htmlFor="statusList" className="form-label mt-2">
          Select status
        </label>
        <select
          className="form-select mb-4"
          aria-label="Default select example"
          id="statusList"
          onChange={changeSelectStatus}
        >
          <option selected disabled> -- Pick Status -- </option>
          <option value="New">New</option>
          <option value="Used">Used</option>
        </select>
        <div className="d-grid gap-2 mt-2">
          <button type="button" className="btn btn-dark">
            Apply filter
          </button>
        </div>
      </form>
    </div>
  );
};
export default Filter;
