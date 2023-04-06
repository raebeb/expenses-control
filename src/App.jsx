import {useState} from 'react'
import Header from './components/Header'
import NewSpentIcon from './img/nuevo-gasto.svg'


function App() {
    const [budget, setBudget] = useState(0)
    const [isValidBudget, setIsValidBudget] = useState(false)
    return (
        <div>
            <Header
                budget={budget}
                setBudget={setBudget}
                isValidBudget={isValidBudget}
                setIsValidBudget={setIsValidBudget}
            />

            { isValidBudget && (
                <div className="nuevo-gasto">
                    <img
                        src={NewSpentIcon}
                        alt="New Spent Icon"
                    />
                </div>)}
        </div>
    )
}

export default App
