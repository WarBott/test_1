export const required = value => {
    if (value) return undefined;
    return 'Неправильный формат';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Лимит символов, максимально: ${maxLength} `;
    return undefined;
}
