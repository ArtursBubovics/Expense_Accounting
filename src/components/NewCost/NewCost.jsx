import CostForm from "./CostForm";
import CostStartForm from "./CostStartForm";
import "./NewCost.css"
import { useState } from "react";

function NewCost(props) {

    const [isVisible, setFormVisibility] = useState(false);

    function saveCostDataHandler(inputCostData) {
        const costData = {

            ...inputCostData,
            id: Math.random().toString()
        }

        props.onAddCost(costData);

    }

    function saveCostButtonHandler(inputCostButtonValue){
        setFormVisibility(inputCostButtonValue);
    }

    if (isVisible) {
        return (<div className="new-cost">
            <CostForm onSaveCostData={saveCostDataHandler} 
            onSaveCostButtonValue={saveCostButtonHandler} />
        </div>)
    } else {
        return (<div className="new-cost">
            <CostStartForm onSaveCostButtonValue={saveCostButtonHandler}/>
        </div>)
    }

}

export default NewCost;