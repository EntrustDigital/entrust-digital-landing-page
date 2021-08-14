export const goToSection = (section, func) => {
    if(section === '') {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        const targetSection = document.querySelector(section);
        const targetSectionPositionTop = targetSection.offsetTop;
        window.scroll({
            top: targetSectionPositionTop,
            behavior: 'smooth'
        });
    };
    window.location.hash = section;
    if(func) {
        func(false);
    }
    console.log(section);
};