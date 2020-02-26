export const LIST_VIEW = 'List'
export const CHART_VIEW = 'Chart'
export const TYPE_INCOME = 'income'
export const TYPE_EXPENSE = 'expense'

export const addZeroToMonth = (n) => {
    return n < 10 ? `0${n}` : n;
}

export const range = (size, startAt = 0) => {
    const result = [];
    for (let i = 0; i < size; i++) {
        result.push(startAt + i);
    }
    return result;
}

export const parseToYearAndMonth = (str) => {
    const date = str ? new Date(str) : new Date();
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1
    }
}

export const isValidDate = (dateString) => {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false;  // Invalid format
    const d = new Date(dateString);
    if (Number.isNaN(d.getTime())) return false; // Invalid date
    return d.toISOString().slice(0, 10) === dateString;
}