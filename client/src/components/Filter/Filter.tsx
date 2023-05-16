/* eslint-disable react/jsx-no-comment-textnodes */
const Filter = () => {
  return (
    <div>
      <h4>Add Filter</h4>
      <form>
        <label htmlFor="typeList" className="form-label">
          Select type
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="typeList"
        >
          <option defaultValue={0}>Open this select menu</option>
          <option value="1">Interrogation</option>
          <option value="2">Pilot</option>
          <option value="3">Scout</option>
          <option value="4">Astromech</option>
          <option value="5">Battle</option>
          <option value="6">Assassin</option>
          <option value="7">Protocol</option>
          <option value="8">Torture</option>
        </select>

        <label htmlFor="statusList" className="form-label mt-2">
          Select status
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="statusList"
        >
          <option defaultValue={0}>Open this select menu</option>
          <option value="New">New</option>
          <option value="Used">Used</option>
        </select>

        <label htmlFor="priceRange" className="form-label mt-2">
          Price range
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="5"
          id="priceRange"
        />
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
