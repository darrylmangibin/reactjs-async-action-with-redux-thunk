import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts =  () => {
  return function(dispatch, getState) {
    const response = jsonPlaceholder.get('/posts')
    return {
      type: 'FETCH_POSTS',
      payload: response
    }
  }
}