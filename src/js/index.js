import { generateGame } from "./game.js";
import { handleClick } from "./eventHandlers.js";

/**
 * Вызов необходимых функций при загрузке страницы.
 */
document.addEventListener("DOMContentLoaded", () => {
  generateGame(); //Генерация поля игры
  document.addEventListener("click", handleClick); //Прикрепление обработчиков событий.
});
