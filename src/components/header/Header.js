import React from 'react';
import {Link} from "react-router-dom";

import './Header.css'

const Header = () => {


    return (
        <div>
            <header className={'header shadow'}>
                <div className={'top_panel'}>
                    <div className={'other_info'}>

                    </div>
                    <div className={'user_panel_auth'}>
                        <div className={'user_panel_auth__box'}>
                            <Link to="" className={'user_panel_auth__box__basket'}>
                                <img src={process.env.PUBLIC_URL + '/basket_icon.png'} alt="Basket"/>
                            </Link>
                            <Link to="/login" className={'user_panel_auth__box__enter'}>
                                Вхід
                            </Link>
                            <Link to="/registration"
                                  className={'user_panel_auth__box__registration'}>
                                Реєстрація
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={'header_footer'}>
                    <div className={'head_logo'}>
                        <a href={''}>Home Logo </a>
                    </div>
                    <div className={'restaurant_address'}>
                        <span className={'restaurant_address__town'}> Town </span>
                        <span className={'restaurant_address__slash'}>/</span>
                        <span className={'restaurant_address__district'}>District </span>
                        <Link to={'/navigate'} className={'restaurant_address__marker'}> <img  width={'22px'} src={process.env.PUBLIC_URL + '/icon-marker.png'} alt=""/></Link>
                    </div>
                    <div className={'search_box'}>
                        <form className={'search_box__form'} >
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

};

export default Header;