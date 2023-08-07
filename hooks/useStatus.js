import { STATUS } from "../constants/statusConstants"

export default function useStatus() {

  // COMMON STATUS HANDLER
  const findStatus = (list = [], selector, value) => {
    const stat = list.find(x => x[selector] === value)
    return stat
  }
  const findByIdHandler = (list, id) => findStatus(list, 'id', id)
  const findByStatusHandler = (list, status) => findStatus(list, 'status', status)
  const checkStatusHandler = (status, status2, findHandler) => {
    let sameStatus = true
    if(status !== status2) sameStatus = false
    sameStatus.data = sameStatus ? findHandler(status) : null
    return sameStatus
  }

  const baseConstructor = (statusName) => {
    const existList = STATUS.find(x => x.name === statusName)
    const findById = (id) => findByIdHandler(existList?.list, id)
    const findByStatus = (status) => findByStatusHandler(existList?.list, status)
    const checkStatus = (status, status2) => checkStatusHandler(status, status2, findByStatus)


    let handler = {}

    existList.list.forEach(list => {
      const title = list.status
      const splittedTitle = title.split(' ')
      let newSplittedTitle = []
      splittedTitle.forEach(spl => {        
        const newSpl = spl.charAt(0).toUpperCase() + spl.slice(1)
        newSplittedTitle.push(newSpl)
      })
      const newTitle = newSplittedTitle.join('')
      handler[`is${newTitle}`] = (status) => checkStatus(status, title)
    })

    return {
      list: existList.list,
      findById,
      findByStatus,
      checkStatus,
      ...handler
    }
  }

  return {
    list: STATUS,
    cv: baseConstructor('cv'),
    talent: baseConstructor('talent')
  }
}