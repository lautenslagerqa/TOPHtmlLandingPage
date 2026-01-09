const btns = document.querySelectorAll("button");
console.log("hello world");
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        alert("Hello World");

    });
});