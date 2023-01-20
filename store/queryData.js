export const state = () => ({
  userData: []
})
export const mutation = {
  SET_USER_DATA: (state, users) => {
    state.userData = users
  }
}
