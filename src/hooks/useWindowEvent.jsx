export const useWindowEvent = () => {
  const windowResize = (_data, _biggerIsEqualTo, _setState, _return) => {
    function find() {
      for (let i = 0; i < _data.length; i++) {
        if(window.innerWidth >= _data[i][_biggerIsEqualTo]) {
          _setState(_data[i][_return])
        }
      }
    }
    find()
    window.addEventListener('resize', function() {
      find()
    })
  }
  return { windowResize }
}