export const useDoIfTypeof = (_data, _array) => {
  _array.forEach(el => {
    if (typeof _data === el.typeof) {
      el.function
      return
    }
  })
}