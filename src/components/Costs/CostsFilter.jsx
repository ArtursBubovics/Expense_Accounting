import "./CostsFilter.css";


function CostsFilter(props){


  
  function yearChangeHandler(event){
    const selectedYear = event.target.value;
    props.onSaveCostData(selectedYear);
  }

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Year Selection</label>
        <select value={props.year} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;