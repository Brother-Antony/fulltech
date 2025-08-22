window.addEventListener("DOMContentLoaded", () => {
    renderRecipes()
    dropdownMenu()
})

async function renderRecipes() {
    const recipesList = document.querySelector(".recipes__list")

    fetch("/data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            return response.json()
        })
        .then(data => {
            const { recetas } = data

            recetas.forEach(receta => {
                const recetaItem = document.createElement("a")
                recetaItem.href = receta.url
                recetaItem.target = "_blank"
                recetaItem.classList.add("recipes__item")

                recetaItem.innerHTML = `
                    <img src="${receta.image}" alt="${receta.title}" >
                    <h3>${receta.title}</h3>
                `

                recipesList.appendChild(recetaItem)
            })
        })
        .catch(error => {
            console.error("Hubo un problema al cargar las recetas:", error)
        })
}

function dropdownMenu() {
    const header = document.querySelector(".header")
    const dropdownToggle = document.querySelector(".dropdown-toggle")
    const closeDropdown = document.querySelector(".close-dropdown")
    const dropdownMenu = document.querySelector(".dropdown__menu")
    const bodyBlur = document.querySelector(".body-blur")
    const chevron = document.querySelector(".header__nav--chevron")

    const prueba = document.querySelector(".prueba")

    // prueba.forEach(btn => {
    //     console.log(btn)
    // })

    // dropdownToggle.forEach((btn) => {
        dropdownToggle.addEventListener("click", () => {
            dropdownMenu.classList.toggle("show")
            bodyBlur.classList.toggle("rotate")
            closeDropdown.classList.toggle("active")

            if (dropdownMenu.classList.contains("show")) {
                bodyBlur.classList.add("show")
                document.body.style.transform = "hidden"
            } else {
                bodyBlur.classList.remove("show")
                document.body.style.transform = ""
            }
        })
    // })
}
