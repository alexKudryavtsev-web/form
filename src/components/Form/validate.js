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
