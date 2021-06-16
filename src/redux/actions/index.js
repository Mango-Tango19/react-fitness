const filterChanged = filter => {
  return {
    type: 'FILTER_CHANGED',
    payload: filter,
  }
}
export { filterChanged }
