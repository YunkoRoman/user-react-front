import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {restListFetchData} from "../../actions/restaurantsList-actions";
import './Body.css';


class Body extends Component {

    componentDidMount() {
        const {result} = this.props;
        console.log(result);
        if (result.length === 0) this.props.fetchData()
    }

    renderRestaurants = ({id, name, description, path_to_img}) => {
        return (
            <Link to={''} className={'bodyComponent__restBox shadow'} key={id}>
                <div className={'bodyComponent__restBox__img'}>
                    <img src={path_to_img} alt="RestaurantPhoto"/>
                </div>
                <div className={'bodyComponent__restBox__body'}>
                    <span className={'bodyComponent__restBox__body__name'}>
                        {name}
                    </span>
                    <span className={'bodyComponent__restBox__body__desc'}>
                        {description}
                    </span>
                </div>
            </Link>
        )
    }

    render() {
        const {result} = this.props;
        const {data} = result;
        if (this.props.restListIsLoadig) {
            return <h1>Loading…</h1>;
        }
        if (data !== undefined) {
            const {msg} = data;
            return (
                <div className={'bodyComponent'}>
                    {msg.map(this.renderRestaurants)}
                </div>
            )
        }
        return (
            <div>

            </div>
        )


    }
}

const mapStateToProps = (state) => {

    return {
        result: state.result
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(restListFetchData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Body)
