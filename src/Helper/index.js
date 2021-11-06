export const countScheduled = (data) => {
    return data.filter((list) => list.status=== 0).length
}

export const countDone = (data) => {
    return data.filter((list) => list.status=== 1).length
}
