export const findStar = (arr: number[]) => {
    const res = 5 - arr.length
    const newArr = []
    for(let i = 0; i < res; i++)
        newArr.push(i)
    return newArr
}