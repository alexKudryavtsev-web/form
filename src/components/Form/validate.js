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

export default validate