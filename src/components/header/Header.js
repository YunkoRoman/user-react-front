import React, {Component}  from 'react';
import {Link} from "react-router-dom";

import './Header.css'
import {connect} from "react-redux";
import {checkUser} from "../../actions/checkUser-actions";

class Header extends Component {

componentDidMount(){
    const token = localStorage.getItem('token');
    this.props.checkUser(token);

}
    exit = () => {
        localStorage.removeItem('token');
        window.location.reload(false)
    };





    render() {
        const AuthPanel = () => (
            <div className={'user_panel_auth__box'}>

                <Link to="/login" className={'user_panel_auth__box__enter'}>
                    Sign in
                </Link>
                <Link to="/registration"
                      className={'user_panel_auth__box__registration'}>
                    Registration
                </Link>
            </div>
        );
        const  UserPanel = () => (
            <div className={'user_panel_auth__box'}>

                <Link to="" className={'user__panel__reg_user'}>
                    <img src={process.env.PUBLIC_URL + '/userIcon.png'} alt=""/>
                </Link>
                <div className={'user_panel_auth__box__exit'}>
                <span className={'user_panel_auth__box__exit__btn'}
                      onClick={this.exit}>Exit</span>
                </div>
            </div>
        );
        return (

            <div>
                <header className={'header shadow'}>

                    <div className={'top_panel'}>
                        <div className={'other_info'}>

                        </div>
                        <div className={'user_panel_auth'}>
                            {this.props.successUserCheck.data ? <UserPanel/> : <AuthPanel/>}

                        </div>
                    </div>
                    <div className={'header_footer'}>
                        <div className={'head_logo'}>
                            <Link to={'/'}>Home Logo </Link>
                        </div>
                        <div className={'restaurant_address'}>
                            <span className={'restaurant_address__town'}> Town </span>
                            <span className={'restaurant_address__slash'}>/</span>
                            <span className={'restaurant_address__district'}>District </span>
                            <Link to={'/navigate'} className={'restaurant_address__marker'}> <img width={'22px'}
                                                                                                  src={process.env.PUBLIC_URL + '/icon-marker.png'}
                                                                                                  alt=""/></Link>
                        </div>
                        <div className={'search_box'}>
                            <form className={'search_box__form'}>
                                <input type="text" className="search_form__textbox" placeholder="Пошук закладу "/>
                                <button className="search_form__button">
                                    <img src={process.env.PUBLIC_URL + '/search_icon.png'}/>
                                </button>
                            </form>
                        </div>
                    </div>
                </header>

            </div>
        )
    }

};
const mapStateToProps = (state) => {
    return {
        successUserCheck: state.successUserCheck,

    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        checkUser: (token) => dispatch(checkUser(token))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header)