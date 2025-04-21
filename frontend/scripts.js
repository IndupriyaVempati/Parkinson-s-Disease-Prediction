document
  .getElementById("predictForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch(
      "http://127.0.0.1:8000/pred-parkinson-disease",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    document.getElementById("result").innerText = result.pred_msg;
  });
