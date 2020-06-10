import React from 'react'
import ReactDOM from "react-dom";
import "./Modal.css";
import Backdrop from './Backdrop'
import {CSSTransition} from 'react-transition-group'
const ModalOverlay = props => {
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <div className={`modal__footer ${props.footerClass}`}>
                {props.div}
            </div>
                <h2>{props.header}</h2>
            <form onSubmit={ props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
            <h1   className="img-type">{props.type}</h1>
            <img src={props.image} alt={props.title} className="modal-image"></img>
            </form>
        </div>
    )
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}

const Modal = props => {
    return(
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancel} />}
            <CSSTransition 
                in = {props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames='modal'
            >
            <ModalOverlay {...props}></ModalOverlay>
            </CSSTransition>
        </React.Fragment>
    )
};

export default Modal;