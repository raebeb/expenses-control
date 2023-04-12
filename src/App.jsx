import {useState} from 'react'
import Header from './components/Header'
import Modal from "./components/Modal.jsx";
import NewSpentIcon from './img/nuevo-gasto.svg'


function App() {
    const [budget, setBudget] = useState(0)
    const [isValidBudget, setIsValidBudget] = useState(false)
    const [modal, setModal] = useState(false)
    const [modalAnimation, setModalAnimation] = useState(false)

    const handleNewSpent = () => {
        setModal(true)

        setTimeout(() => {
            setModalAnimation(true)
        }, 500)
    }

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
                        onClick={handleNewSpent}
                    />
                </div>)}

            {modal && <Modal
                setModal={setModal}
                modalAnimation={modalAnimation}
                setModalAnimation={setModalAnimation}
            />}

        </div>
    )
}

export default App
