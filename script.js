const btn = document.querySelector(".generate-advice");
const advice = document.querySelector(".advice");
const adviceNo = document.querySelector(".advice-no");
const loadingScreen = document.querySelector(".loading-screen");



async function getAdvice() {
  checkLoading(true);
  
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  console.log(data);

  advice.textContent = data.slip.advice;
  adviceNo.textContent = "#" + data.slip.id;
  console.log(Object.values(data.slip)[0]);
  
  checkLoading(false);
}

getAdvice();
btn.addEventListener("click", () => {
    getAdvice();
})

function checkLoading(loading) {
    if(loading == true) {
        btn.textContent = "LOADİNG...";
        btn.style.pointerEvents = "none";
        loadingScreen.style.display = "block"
    } else {
        btn.textContent = "I DEMAND MORE!";
        btn.style.pointerEvents = "auto";
        loadingScreen.style.display = "none"
    }
};
