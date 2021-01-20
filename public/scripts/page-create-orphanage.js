const map = L.map('mapid').setView([-3.0931911,-60.0251001], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon = L.icon({

iconUrl: "/images/map-marker.svg",
iconSize: [58, 68],
iconAnchor: [29, 68],
})

let marker;

// create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon Layer
    marker= L.marker([lat, lng] , { icon })
    .addTo(map);
})
   
//photos upload
function addPhotoField(){
    //pegar o container de fotos
    const container = document.querySelector('#images')
    //pegar o container para duplicar
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

//verificar se o campo esta vazio
const input = newFieldContainer.children[0]
 if(input.value==""){
     return
 }
input.value= ""


    //limpar o campo antes de adicionar ao container de images
    newFieldContainer.children[0].value = ""

    //adicionar o clone ao container de images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

//deletar o campo
span.parentNode.remove()

}

//select do sim e não
function toggleSelect(event) {


   //retirar a classe active nos botão

    document.querySelectorAll('.button-select button')
    .forEach(function (button)  {

        button.classList.remove('active')
    })

//colocar no botão clicado
const button = event.currentTarget
button.classList.add('active')



//atualizar o input hidden do valor selecionado
const input = document.querySelector('[name="open_on_weekends"]')

//verificar se sim ou nao
input.value = button.dataset.value

}
