import "./CostForm.css"
import { useState } from "react";

function CostForm(props) {

    const [inputName, setInputName] = useState('');

    const [inputAmount, setInputAmount] = useState('');

    const [inputDate, setInputDate] = useState('');
    /*
    2nd option
        const [userInput, setUserInput] = useState({
            name: '',
            amount: '',
            date: ''
        });
    */
    function nameChangeHandler(event) {
        setInputName(event.target.value)
        /*
        2nd option
        setUserInput({
            ...userInput,
            name: event.target.value
        })*/

        /*
        3rd option
        setUserInput(function(previousState){
            return {
                ...previousState,
                name: event.target.value
            }
        })
        */
    }

    function amountChangeHandler(event) {
        setInputAmount(event.target.value)
    }

    function dateChangeHandler(event) {
        setInputDate(event.target.value)
    }

    function submitHandler(event) {
        console.log('go')
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }

        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    }

    function buttonClickHandler(){
        props.onSaveCostButtonValue(false);
    }

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Title</label>
                <input type="text" value={inputName} onChange={nameChangeHandler} />
            </div>
            <div className="new-cost__control">
                <label>Amount</label>
                <input value={inputAmount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-cost__control">
                <label>Date</label>
                <input value={inputDate} type="date" min="2019-01-01" step="2023-12-31" onChange={dateChangeHandler} />
            </div>
            <div className="new-cost__actions">
                <button type="submit">Add Expense</button>
            </div>
            <div className="new-cost__actions">
                <button type="button" onClick={buttonClickHandler}>Cancel</button>
            </div>

        </div>
    </form>
}

export default CostForm;