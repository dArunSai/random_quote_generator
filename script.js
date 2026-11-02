const btn = document.getElementById("btn");
const text = document.getElementById("div1");
const text1 = document.getElementById("div2");
const sec1 = document.getElementById("sec1");
async function fetchData() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const quote = data.slip.advice;
    // console.log(quote);
    return quote;
  } catch (error) {
    console.error("There was a problem fetching the data:", error);
  }
}

btn.addEventListener("click", async () => {
  const current_quote = await fetchData();
  text.textContent = current_quote;
  text.style.display = "block";
  text.style.textAlign = "center";
  text1.style.margin = "10px auto 0 auto";
});

btn.addEventListener("mouseleave", () => {
  sec1.style.borderColor = "";
  sec1.style.boxShadow = "";
});
