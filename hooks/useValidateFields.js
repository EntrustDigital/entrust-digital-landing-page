export const useValidateFields = () => {
  return (fields = []) => {
    let errs = {}
    const checkRequired = (name, val, messages) => {
      if(!val || val === '') errs[name] = messages?.required
    }
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      const name = field?.inputProps?.name
      const value = field?.inputProps?.value
      const messages = field?.messages
      if(field.required) {
        checkRequired(name, value, messages)
      }
    }
    return Object.entries(errs).length > 0 ? errs : null
  } 
}