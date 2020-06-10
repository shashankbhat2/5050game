import React,{useState} from 'react'
import Modal from './Modal'

const Content = props => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const showTrueImageHandler =() => {
        setShowConfirmModal(true)
    }

    const closeTrueImageHandler =() =>{
        setShowConfirmModal(false)

    }
    return (
        <React.Fragment>
        <Modal show={showConfirmModal} image={props.image} alt={props.name}    type={props.type}     div={<button closeClass onClick={closeTrueImageHandler} id="close-class">ⓧ</button>}></Modal>
        <div className="card-body" onClick={showTrueImageHandler}>
          <div className="title-span"><p>{props.title}</p></div>
          <div className="img-span" >
          <img src={props.image} alt={props.name} />
          </div>
        </div>
        </React.Fragment>
      );
}


export default Content