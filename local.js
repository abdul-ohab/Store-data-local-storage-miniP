
const selectFontSize = document.querySelector("#select");
const selectBgColor = document.querySelector("#selection");
const resetButton = document.querySelector("#btn");
const mainElement = document.querySelector("main");

const setValues = (fontSize,bgColor) =>{
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize =  fontSize;
    mainElement.style.backgroundColor = bgColor;
}

const loadLocalStorage = (event) =>{
    const fontSize = localStorage.getItem("fontSize");
    const bgColor = localStorage.getItem("bgColor");

    if(fontSize && bgColor){
         setValues(fontSize,bgColor);
    }
    if(!fontSize && !bgColor){
        setValues("16px","aqua");
    }
    if(!fontSize && bgColor){
        setValues("16px",bgColor);
    }
    if(fontSize && !bgColor){
        setValues(fontSize,"aqua");
    }
}

const changeFontSize = (event) =>{
    const selectedFontsize = event.target.value;
    mainElement.style.fontSize = selectedFontsize;
    localStorage.setItem("fontSize",selectedFontsize);
}

const changeBgColor = (event) =>{
    const selectedBgColor = event.target.value;
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem("bgColor",selectedBgColor);
}

const clearLocalStorage = (event) =>{
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgColor");
    setValues("16px","aqua");
}

selectFontSize.addEventListener("change",changeFontSize);
selectBgColor.addEventListener("change",changeBgColor);
resetButton.addEventListener("click",clearLocalStorage);

loadLocalStorage();