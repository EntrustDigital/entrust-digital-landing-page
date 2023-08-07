
export const useStyles = (styles, classNames = []) => {
  let newArr = []
  for (let i = 0; i < classNames.length; i++) {
    const className = classNames[i];
    className !== '' && newArr.push(styles[className])
  }
  return newArr.join(' ')
}