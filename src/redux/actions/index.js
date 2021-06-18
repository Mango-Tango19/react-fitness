const filterChanged = filter => {
  return {
    type: 'FILTER_CHANGED',
    payload: filter,
  }
}

const filterReset = () => {
  return {
    type: 'FILTER_RESET',
  }
}
export { filterChanged, filterReset }
