const buttonSwitch = document.querySelector("#switch");
const handleClickButton = () => {
    const root = document.documentElement;

    if(root.classList.contains('dark')) {
        root.classList.remove('dark');
        root.classList.add('light');
    }
    else {
        root.classList.remove('light');
        root.classList.add('dark');
    }
};

buttonSwitch.addEventListener('click', handleClickButton);