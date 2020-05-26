import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from '../formComponent/FormsControls'


let SingInForm = props => {
    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field className={'inp_txt'} component={Input}
                   type="text" name="email" placeholder="Email"/>
            <Field className={'inp_txt'} component={Input}
                   type="password" name="password" placeholder="Password"/>

            <button className={'inp_sbm'} type="submit" label="submit">Submit</button>
        </form>
    )
};

SingInForm = reduxForm({
    form: 'Auth',
})(SingInForm);

export default SingInForm;