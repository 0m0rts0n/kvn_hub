const statusText = document.getElementById("statusText");
const output = document.getElementById("output");
const reloadButton = document.getElementById("reloadButton");

async function loadTextFile() {
  statusText.textContent = "Загрузка...";
  output.textContent = "";

  try {
    const response = await fetch(`./data.txt?v=${Date.now()}`, {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const text = await response.text();
    output.textContent = text.trim() || "Файл пуст.";
    statusText.textContent = "Файл успешно загружен.";
  } catch (error) {
    output.textContent =
      "Не удалось прочитать data.txt.\n" +
      "Проверьте, что файл опубликован вместе со страницей GitHub Pages.";
    statusText.textContent = `Ошибка: ${error.message}`;
  }
}

reloadButton.addEventListener("click", loadTextFile);
loadTextFile();
