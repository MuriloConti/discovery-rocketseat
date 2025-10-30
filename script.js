function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light")
  //  } else {
  //    html.classList.add("light")
  //  }

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tive light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tive light mode, adicionar a imagem light
    img.setAttribute(
      "alt",
      "Foto de Mike Brito de oculos escuro, sorrindo e tela azul no fundo"
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute(
      "alt",
      "Foto de Miky Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    )
  }
}
