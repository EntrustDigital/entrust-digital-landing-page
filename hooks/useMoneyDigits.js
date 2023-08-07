export const useThreeDigits = () => {
  const threeDigits = (num = '') => {
    var str = num.toString().split('.');
    if (str[0].length >= 3) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1.');
    }
    return str.join('.');
  }
  return threeDigits
}