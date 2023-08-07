export const useInitials = () => {
 const initials = (string) => {
    if(!string) return
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

    let initials = [...string.matchAll(rgx)] || [];

    initials = (
      (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
    ).toUpperCase();
    
    return initials
 }
 return initials
}