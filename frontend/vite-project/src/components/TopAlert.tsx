import ticket from "../../assets/icons/ticket-percent.svg"
import closeIcon from "../../assets/icons/icon-union.svg"
import { useState } from "react"
import { Link } from "react-router-dom"

const TopAlert = () => {
  const [showAlert, setShowAlert] = useState(true)

  const closeAlert = () => {
    setShowAlert(false)
  }
  return (
    <>
      {showAlert && (
        <div className=" bg-neutral-2 h-10 pb-2 pl-4 pr-4 pt-2 ">
          <div className="flex justify-end">
            <div className="caption-1-semi text-neutral-5 flex flex-1 justify-center gap-3">
              <img src={ticket} alt="ticket-icon" />
              <p>30% off storewide — Limited time!</p>
              <Link to={"/shop"}>
                <button className="button-xs text-secondary-blue border-b-secondary-blue border-b border-solid">
                  Shop Now →
                </button>
              </Link>
            </div>
            <button className="cursor-pointer" onClick={closeAlert}>
              <img src={closeIcon} alt="close-icon" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default TopAlert
