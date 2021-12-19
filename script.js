let buttonUpper = document.getElementById("upper-case");
let buttonLower = document.getElementById("lower-case");
let buttonProper = document.getElementById("proper-case");
let buttonSentence = document.getElementById("sentence-case");
let buttonSave = document.getElementById("save-text-file");


buttonUpper.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toUpperCase();
});

buttonLower.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toLowerCase();
});

buttonProper.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    let words = text.toLowerCase().split(" ");
    words.forEach((word, index) => {
        words[index] = word.substr(0, 1).toUpperCase() + word.substr(1);
    });
    document.querySelector("textarea").value = words.join(" ");
});

buttonSentence.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    let sentences = text.toLowerCase().split(". ");
    sentences.forEach((sentence, index) => {
        sentences[index] = sentence.substr(0, 1).toUpperCase() + sentence.substr(1);
    });
    document.querySelector("textarea").value = sentences.join(". ");
});


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
buttonSave.addEventListener("click", function() {
    let text = document.getElementById("text-area").value;
    download("text.txt", text);
})





