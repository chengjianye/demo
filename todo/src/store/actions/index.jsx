export function underway(payload) {
    return {
        type: "UNDERWAY",
        payload
    }
}

export function completed(payload) {
    return {
        type: "COMPLETED",
        payload
    }
}