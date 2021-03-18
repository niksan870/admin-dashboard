export default (previousState = 0, { type, payload }) => {
    console.log(12312)
    if (type === 'GET_USER_GOALS') {
        return payload.rate;
    }
    return previousState;
}
