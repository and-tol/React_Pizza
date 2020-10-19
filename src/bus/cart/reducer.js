const initialState = {

}

export const cartReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case 'typeName':
    return { ...state, ...payload }

  default:
    return state
  }
}
