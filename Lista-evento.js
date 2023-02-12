var gender = "Feminino";
var student = "Lab 365";
var age = 50;

if (student == "Lab 365" || age >= 60) {
  console.log(
    "Bem vindo ao nosso evento! Você é um convidado especial e tem passe livre, aproveite!"
  );
} else if (gender == "Feminino") {
  console.log("Bem vinda ao nosso evento! Seu ticket é de 50 reais.");
} else {
  console.log("Bem vindo ao nosso evento! Seu ticket é de 80 reais.");
}
