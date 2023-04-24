document.querySelector("#cifrar").addEventListener("submit", (e)=>{
  e.preventDefault();
  const equivalencias = {
    "A": "..-...",
    "B": "-.....",
    "C": ".-.-..",
    "D": "..-...",
    "E": "...-..",
    "F": "-...-.",
    "G": "..-.--",
    "H": ".--...",
    "I": "--..-.",
    "J": "...--.",
    "K": ".---..",
    "L": "--....",
    "M": ".---..",
    "N": "---...",
    "O": "--..-.",
    "P": "-..--.",
    "Q": "....-.",
    "R": "..-...",
    "S": "-....-",
    "T": ".-.-.-",
    "U": "..-..-",
    "V": "...-.-", 
    "W": "-...--",
    "X": "..-.--",
    "Y": ".--..-",
    "Z": "--..--",
    " ": "------"
  };
  let texto = document.getElementById('oracion').value.toUpperCase(); // Obtener el valor del input y convertir todo el texto a mayúsculas
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    resultado += equivalencias[texto[i]] || texto[i];
  }
  document.getElementById("mensaje").textContent = resultado; // Asignar el resultado al elemento HTML
})