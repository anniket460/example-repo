const form = document.getElementById("form");
const fname = document.getElementById("fname");
const comments = document.getElementById("comments");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, messege) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = messege;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSucess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const fnameValue = fname.value.trim();
  const commentsValue = comments.value.trim();

  if (fnameValue === "") {
    setError(fname, "Name Required");
  } else {
    setSucess(fname);
  }
};
