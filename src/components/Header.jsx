import NewBudget from './NewBudget'
import BudgetControl from "./BudgetControl.jsx";

const Header = ({budget, setBudget, isValidBudget, setIsValidBudget}) => {
    return (
        <header>
            <h1>Expenses control</h1>
            {isValidBudget ? (
                <BudgetControl
                    budget={budget}
                />
            ) : (
                <NewBudget
                    budget={budget}
                    setBudget={setBudget}
                    isValidBudget={isValidBudget}
                    setIsValidBudget={setIsValidBudget}
                />
            )}

        </header>


    )
}

export default Header;