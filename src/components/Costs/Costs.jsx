import './Costs.css';
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
import CostList from './CostList';
import CostDiagram from './CostDiagram';


function Costs(props) {

    const [chooseYear, setChooseYear] = useState('2021');

    function saveChooseYear(selectedYear) {
        console.log(selectedYear);
        setChooseYear(selectedYear);

    }

    const filteredCosts = props.costs.filter(function (cost) {
        return cost.date.getFullYear() == chooseYear
    })

    
    return (
        <div>
            <Card className='costs'>
                <CostsFilter year={chooseYear} onSaveCostData={saveChooseYear} />
                <CostDiagram costs={filteredCosts}/>
                <CostList costs={filteredCosts}/>
            </Card>
        </div>
    )
}

export default Costs;