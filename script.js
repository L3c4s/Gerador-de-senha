const passInput = document.querySelector("#inputPasswordId");
const lenInput = document.querySelector("#inputLengthId");
const infoLength = document.querySelector('label[for="inputLengthId"]');
const btnGerar = document.querySelector("#btnGerar");
const btnCompartilhar = document.querySelector("#btnCompartilhar");

const chkLower = document.querySelector("#chkLowerId");
const chkUpper = document.querySelector("#chkUpperId");
const chkNumber = document.querySelector("#chkNumberId");
const chkSymbols = document.querySelector("#chkSymbolsId");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%"];

const caracters = Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 97));
const LowercaseCaracters = caracters.map((item) => item);
const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase());

infoLength.innerHTML = lenInput.value;

lenInput.addEventListener("change", () => {
  infoLength.innerHTML = lenInput.value;
});

btnGerar.addEventListener("click", () => {
  generatePassword(
    chkNumber.checked,
    chkSymbols.checked,
    chkLower.checked,
    chkUpper.checked,
    lenInput.value
  );
});

btnCompartilhar.addEventListener("click", () => {
  compartilharSenha(passInput.value);
});

const generatePassword = (
  hasNumbers,
  hasSymbols,
  hasLowercase,
  hasUppercase,
  length
) => {
  const newArray = [
    ...(hasNumbers ? numbers : []),
    ...(hasSymbols ? symbols : []),
    ...(hasLowercase ? LowercaseCaracters : []),
    ...(hasUppercase ? UppercaseCaracters : []),
  ];

  if (newArray.length === 0) {
    alert("Selecione pelo menos uma opção para gerar a senha.");
    return;
  }

  const maxLength = 128; // Defina um comprimento máximo razoável
  const minLength = 1;   // Defina um comprimento mínimo razoável

  length = parseInt(length, 10);

  if (isNaN(length) || length < minLength || length > maxLength) {
    alert(`O comprimento da senha deve estar entre ${minLength} e ${maxLength}.`);
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * newArray.length);
    password += newArray[randomIndex];
  }

  passInput.value = password;
};

const generateRandomName = () => {
  const names = ["Aline", "Bruno", "Felipe", "Karol", "Diogo", "Fernando"];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

const compartilharSenha = (senha) => {
  const nomeAleatorio = generateRandomName();
  alert(`Sua senha foi compartilhadar por ${nomeAleatorio}: ${senha}`);
};

