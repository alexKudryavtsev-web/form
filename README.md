# redux form
Классический подход к формам в `react` заключается в создание нескольких свойств и валидации во время `submit`.

Это удобно, когда полей мало, но если форма содержит 3 и более полей, то начнется путаница, особенно в валидации.

Однако если в проекте используется `redux`, то можно облегчить работу с формами специальном библиотекой `redux-form`.

# redux form install
Установка через `npm`:

    npm i redux-form

Теперь в `index.js` необходимо добавить `reducer` из пакета `redux-form` и подключить в `store`:

    import { createStore, combineReducers } from 'redux'
    import { reducer } from 'redux-form'

    const store = createStore(
        combineReducers({
            form: reducer
        })
    )
# [Шаблон](https://github.com/alexKudryavtsev-web/form/tree/defaultValue/src)
Шаблон заключается в создании отдельного компонента для формы и компонента, который представляет ему обработчик `onSubmit`.

**Form.js**

    import React from 'react'
    import { Field, reduxForm } from 'redux-form'
    
    function FormLogin(props) {
        const { handleSubmit } = props
        
        return (
            <form onSubmit={handleSubmit}>
                <button type='submit'>Submit</button>
            </form>
        )
    }
    
    export default reduxForm({ form: 'login' })(FormLogin)

**App.js**

    function App() {
        function submit(obj) {
            console.log('form', obj)
        }
        
        return <div>
            <h1>Redux Form</h1>
            <FormLogin onSubmit={submit}/>
        </div>
    }

# [Field](https://github.com/alexKudryavtsev-web/form/tree/field/src)

Для полей есть отдельный компонент `Field`. Ему необходимо передать два пропса - `name` и `component`:

    <Field
        name='name'
        component='input'
        type='text'
        placeholder='name'
    />

Хорой практикой считается создание переиспользуемых компонентов:

    function textInput(props) {
        return <>
            <input
                className='Text'
                type='text'
                {...props.input}
                placeholder={props.input.name}
            />
        </>
    }
    <Field
        name='fio'
        component={textInput}
    />

# [default values](https://github.com/alexKudryavtsev-web/form/tree/defaultValue)
Установить значение по-умолчанию можно так:

    const defaultValues = {
        fio: 'Vasy Pupkin',
        password: '',
        confirmPassword: ''
    }

    return <main className='App'>
        <Title />
        <Form
            onSubmit={submit}
            initialValues={defaultValues}
        />
    </main>

# [Validate](https://github.com/alexKudryavtsev-web/form/tree/validate/src)

Есть несколько способов валидация. Самый простой - это создание отдельной функции.

    function validate(inputs) {
        const err = {}
        const { fio, password, confirmPassword } = inputs
    
        if (!fio)
            err.fio = 'Fio is empty'
        else if (fio.length < 2 || fio.length > 22)
            err.fio = 'Fio too small / large'

        if (!password)
            err.password = 'Password is empty'
        else if (password.length < 6)
            err.password = 'Password is small'

        if (confirmPassword !== password)
            err.confirmPassword = 'Password mismatch'

        return err
    }

Теперь необходимо реализовать вывод ошибок в компоненте поля:

    {props.meta.error && props.meta.touched &&
        <div className='Warning'>
            {props.meta.error}
        </div>
    }   

# [Field Level Validate](https://github.com/alexKudryavtsev-web/form/tree/fieldLevelValidate)

Другой способ - это создание множества функций

    export const required = value =>
        value
            ? undefined
            : 'Field is empty'

    export function range(min = 2, max = 22) {
        return function (value) {
            return value.length <= min || value.length >= max
                ? `Field small(${min}) / large(${max})`
                : undefined
        }
    }

    export const matchPassword = (value, all) =>
        value === all.password
            ? undefined
            : 'Password mismatch'
    
    <Field
        name='fio'
        component={textInput}
        validate={[required, range()]}
    />
    <Field
        name='password'
        component={passwordInput}
        validate={[required, range(2, 10)]}
    />
    <Field
        name='confirm-password'
        component={passwordInput}
        validate={[matchPassword]}
    />

# [submission](https://github.com/alexKudryavtsev-web/form/tree/submission)

Последнее что надо упомянуть – это валидация в момент отправки формы. Это можно сделать ошибку  `SubmissionError`:

    const names = [
      'admin', 'Alex', 'Mark'
    ]
    
    function submit(obj) {
        if (names.includes(obj.name))
            throw new SubmissionError({
                name: 'Имя'
            })
        console.log('form', obj)
    }


