import React, { Component } from 'react';
import Input from '../../component/UI/input/input';
import Authorization from '../../hoc/Authorization/Authorization';
import MainButton from '../../component/UI/main-button/main-button';
import {Link} from 'react-router-dom';
import { reduxForm } from "redux-form";
import { formValidator } from '../../utils/validator';
import { connect } from 'react-redux';
import save from '../../store/action/save/save';
import { withFirestore } from 'react-firestore';
import './signIn.scss';
import requestWrapper from '../../utils/const/requestWrapper';
import ErrorMessage from '../../component/ErrorMessage/ErrorMessage';
import isEmpty from '../../utils/const/isEmpty';
import { onlyEmail, passLength } from '../../utils/validator';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formElements: [
                {
                    name: 'loginField',
                    type: 'string',
                    placeholder: 'email',
                    typeValidation: onlyEmail
                },
                {
                    name: 'passwordField',
                    type: 'password',
                    placeholder: 'пароль',
                    typeValidation: passLength(8)
                }
            ],

            style: {
                width: '100%',
                marginTop: '12px',
                position: 'relative'
            },

            errorMessage: '',

            users: []
        }
    }

    

    handleSubmit = (fields) => {
        const { history } = this.props;
        const userData = {
            login: fields.loginField,
            password: fields.passwordField
        }

        const user = this.state.users.find(user => {
            if(
                (user.login === userData.login || user.telephone === userData.login) && 
                (user.password === userData.password)
            ) {
                return user;
            }
        });

        if(isEmpty(user)) {
            this.props.userSave(user);
            history.push("/");
        } else {
            this.setState({
                errorMessage: 'Неверный логин или пароль.'
            })
        }
    }

    componentDidMount() {
        requestWrapper('users')
            .then(users => {
                this.setState({
                    users
                })
            })
    }

    render() {
        return (
            <Authorization>
                <div className='sign-in-container'>
                    <div className='content'>
                        <h2>Вход в личный кабинет</h2>
                        <form 
                            onSubmit={this.props.handleSubmit(this.handleSubmit)} 
                            className='form'
                        >
                            {this.state.formElements.map((element, index) => {
                                return (
                                    <Input
                                        key={index}
                                        name={element.name}
                                        type={element.type}
                                        styleCss={this.state.style}
                                        placeholder={element.placeholder}
                                        validate={element.typeValidation ? element.typeValidation : null}
                                    />
                                )
                            })}

                            <MainButton
                                type='main'
                                styleCss={this.state.style}
                            >
                                Войти в систему
                            </MainButton>
                        </form>
                        <Link
                            to='/sign-up'
                        >
                            Зарегистрироваться
                        </Link>
                        {this.state.errorMessage ? 
                            <ErrorMessage 
                                message={this.state.errorMessage}
                                styleCss={{
                                    marginTop: '35px'
                                }}
                            />
                            :
                            null
                        }
                    </div>
                </div>
            </Authorization>
        )
    }
}

const connectedToReduxForm = reduxForm({
    form: 'loginForm',
    validate: formValidator,
});

const mapDispatchToProps = (dispatch) => {
    return {
        userSave: (user) => dispatch(save(user))
    }
}

const connectedSignIn = connect(null, mapDispatchToProps)(connectedToReduxForm(withFirestore(SignIn)))


export default connectedSignIn;