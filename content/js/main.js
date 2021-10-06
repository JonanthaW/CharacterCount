window.onload = () => {
  document.querySelector(".characters-list h3").innerText = "0";

  // sending values to HTML
  document.querySelector(".text-container textarea").addEventListener("input", () => {
    document.querySelector(".characters-list h3").innerText = document.querySelector(".text-container textarea").value.length;
  })

  // copying text from textarea
  document.querySelector(".character-container button").addEventListener("click", () => {
    document.querySelector("textarea").select()
    document.execCommand("copy");
    document.querySelector(".character-container button").innerText = "copied!";
    setTimeout(() => {
      document.querySelector(".character-container button").innerText = "copy text";
    }, 2000)
  })
}
