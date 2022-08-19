const firstName = prompt("Haloo, siapa nama depan kamu?");
const lastName = prompt("Kalau nama belakang kamu?");
const language = prompt("Kamu ngomong pake bahasa apa?");
 
const user = {
   name: {
       first: firstName,
       last: lastName,
   },
   language: language
};
 
if (user.language === "English") {
   alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Javanese") {
   alert("Seneng ketemu sampeyan " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Korean") {
   alert("Mannaseo bangawo, " + user.name.first + " " + user.name.last + "!");
} else {
   alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
}