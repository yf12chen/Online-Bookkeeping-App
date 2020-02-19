export const LIST_VIEW='List'
export const CHART_VIEW='Chart'

export const addZeroToMonth =(n)=>{
    return n<10?`0${n}`:n;
}

export const range=(size, startAt=0)=>{
    const result=[];
    for (let i=0;i<size;i++) {
        result.push(startAt+i);
    }
    return result;
}