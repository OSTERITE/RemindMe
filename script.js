//Todo: File saver library

class Content_card{

    constructor(card_location, card_id){
        //TODO: content of card can be stored in card?
        this.card_location = card_location
        this.location_element = document.getElementById(card_location)
        
        this.card = document.createElement("div")
        this.card.id = card_id
    }

    create_content_card(){
        this.location_element.appendChild(this.card)
    }

    add_image(target_location){}

    add_div(target_location, div_id){
        const div_location = document.getElementById(target_location)
        console.log(div_location)
        const div = document.createElement('div')
        div.id = div_id
        div_location.appendChild(div)
    }

    add_paragraph(target_location){}

    add_button(target_location, action){}

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

window.onload = winInit;
function winInit() {
    const test_card = new Content_card("placeholder", "test_card_id")
    test_card.create_content_card()
    test_card.add_div("test_card_id", "test_div")
}

// const skip_sang_knapp = document.createElement("button")
// const skip_sang_bilde = document.createElement("img");
// skip_sang_bilde.src = "./bilder/next_track_button_larger.png"
// skip_sang_bilde.id = ("skip_sang_bilde");
// skip_sang_knapp.removeChild(skip_sang_bilde); 
// skip_sang_knapp.addEventListener('click', () => {})
