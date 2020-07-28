import React, {Component} from 'react';
import Modal from 'react-modal';
import {connect} from "react-redux";
import {openModalPage} from "../../actions/modalPage-actions";
import style from './modalPage.module.css'


class ModalPage extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this)
    }
    componentWillMount() {
        Modal.setAppElement('body');
    }
    closeModal(){
        this.props.closeModal(false)
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.stateModalPage}
                    onRequestClose={this.closeModal}
                    style={style.modalPage__box}>
                    <div className={style.modalPage__header}>
                        <button onClick={this.closeModal}> Close </button>
                    </div>
                    <div className={style.modalPage__body}>

                    </div>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stateModalPage: state.modalPageReducer.modalState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: (bool) => dispatch(openModalPage(bool)),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage)
