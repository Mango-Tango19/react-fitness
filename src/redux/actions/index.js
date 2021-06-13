const filterChaged = filters => {
  return {
    type: 'FILTER_CHANGED',
    payload: filters,
  }
}
export { filterChaged }
