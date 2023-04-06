import {useState} from "react";
import Message from "./Message.jsx";

const NewBudget = ({budget, setBudget}) => {
    const [message, setMessage] = useState("")
    const handleBudget = (e) => {
        e.preventDefault();
        if (budget < 1 || isNaN(budget)) {
            setMessage("Budget is not valid")
        } else {
            setMessage("Budget is valid")
        }
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handleBudget} className="formulario">
            <div className="campo">
                <label>Define Budget</label>
                <input
                    className="nuevo-presupuesto"
                    type="text"
                    placeholder="Add your budget"
                    value={budget}
                    onChange={e => setBudget(parseInt(e.target.value))}
                />
            </div>
            <input type="submit"  value="Add Budget" />
            {message && <Message kind="error">{message}</Message>}
        </form>
    </div>
  )
}

export default NewBudget;