import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required, minLengthCreator, validEmail, matchInput} from '../../utils/validators'
import {Input} from '../formComponent/FormsControls'

const minLength8 = minLengthCreator(8);
let RegisterForm = props => {

    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field className={'inp_txt'} component={Input}
                   type="text" name="name" placeholder="Name"
                   validate={[required]}/>
            <Field className={'inp_txt'} component={Input}
                   type="text" name="surname" placeholder="Surname"
                   validate={[required]}/>
            <Field className={'inp_txt'} component={Input}
                   type="text" name="email" placeholder="E-mail"
                   validate={[required, validEmail]}/>
            <Field className={'inp_pass'} component={Input}
                   type="password" name="password" placeholder="Password"
                   validate={[required, minLength8]}/>
            <Field className={'inp_pass'} component={Input}
                   type="password" name="password2"
                   placeholder="Retype password"
                   validate={[required, matchInput]}/>

            <button className={'inp_sbm'} type="submit" label="submit">Submit</button>
        </form>
    );

}


RegisterForm = reduxForm({
    form: 'login',
})(RegisterForm);

export default RegisterForm;