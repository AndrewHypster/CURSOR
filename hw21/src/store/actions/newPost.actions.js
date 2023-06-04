export const NEW_POST_COUNT_TYPE = 'NEW_POST_COUNT_TYPE'

export const setNewPostAction = (...some) => {
  return {
    type: NEW_POST_COUNT_TYPE,
    payload: some
  }
}