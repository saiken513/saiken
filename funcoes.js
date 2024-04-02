frasePreferida0 = document.getElementById("frasePreferida0");
frasePreferida0.innerHTML = user.favoriteQuotes[0];

frasePreferida1 = document.getElementById("frasePreferida1");
frasePreferida1.innerHTML = user.favoriteQuotes[1];

frasePreferida2 = document.getElementById("frasePreferida2");
frasePreferida2.innerHTML = user.favoriteQuotes[2];

nome= document.getElementById("nome");
nome.innerHTML = user.name;

idade= document.getElementById("idade");
idade.innerHTML = user.age;

ocupacao= document.getElementById("ocupacao");
ocupacao.innerHTML = user.ocupation;

bio= document.getElementById("bio");
bio.innerHTML = user.bio;

nascimento= document.getElementById("nascimento");
nascimento.innerHTML = user.birthdate;

imagem= document.getElementById("imagem");
imagem.src = user.image;

imagem2= document.getElementById("imagem2");
imagem2.src = user.image2;