class Content_card{

    constructor(card_location){
        this.card_location = card_location
        //TODO: content of card can be stored in card?
        this.card = document.createElement("div")
    }

    create_content_card(){
        this.card_location.appendChild(card)
    }

    add_image(location){}

    add_div(location){}

    add_paragraph(location){}

    add_button(location, action){}

}

function append_button(element_id, content){
    //target element for content to be appended to
    const target_element = document.getElementById(element_id)
    target_element.appendChild(content)
}

function remove_button(element_id, content){
    //target element for content to be removed from
    const target_element = document.getElementById(element_id)
    target_element.removeChild(content)
}


const skip_sang_knapp = document.createElement("button")
const skip_sang_bilde = document.createElement("img");
skip_sang_bilde.src = "./bilder/next_track_button_larger.png"
skip_sang_bilde.id = ("skip_sang_bilde");
skip_sang_knapp.removeChild(skip_sang_bilde); 
skip_sang_knapp.addEventListener('click', () => {})
