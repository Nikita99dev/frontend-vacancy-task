export const stringParser = (number: number) => {
    return number.toString().split('').reverse().join('').match(/.{1,3}/g)?.map(el=>el.split('').reverse().join('')).reverse().join(' ')
}
export const persentageParser = (number: number) => {
    return `${number >= 0 ? number: `${number.toString().slice(1)}`}%`
}