
let btn = document.querySelector("#btn");
let inp = document.querySelector("#inp");
let h1 = document.querySelector("h1");

function btnclicked() {
    inp.click();
};

btn.addEventListener("click", btnclicked);

function changedSomething(edata) {
    const fileName = edata.target.files[0];
    if (fileName) {
        btn.textContent = fileName.name;
        h1.style.display = "block";
    }

};

inp.addEventListener("change", changedSomething);



