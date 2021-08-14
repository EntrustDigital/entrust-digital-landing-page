export const toggleDropdown = (e) => {
    const dropdownMenu = e.target.parentElement.nextElementSibling;
    if(dropdownMenu.style.maxHeight){
        dropdownMenu.style.maxHeight = '';
    } else {
        dropdownMenu.style.maxHeight = `${dropdownMenu.scrollHeight}px`;
    }
}