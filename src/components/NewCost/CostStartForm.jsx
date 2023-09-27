import "./CostStartForm.css"

function CostStartForm(props) {

    function buttonClickHandler() {
        props.onSaveCostButtonValue(true);
    }

    return <div className="start-cost__controls">
        <div className="start-cost__actions">
            <button type="button" onClick={buttonClickHandler}>Add New Expenses</button>
        </div>
    </div>
}

export default CostStartForm;