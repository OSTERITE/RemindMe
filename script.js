//Todo: File saver library

class Content_card{

    constructor(card_id){
        //TODO: content of card can be stored in card?
        this.card = document.createElement("div")
        this.card.id = card_id
    }

    create_content_card(){
        this.location_element.appendChild(this.card)
    }

    add_image(target_location){}

    add_div(target_location, div_id){
        console.log(target_location)
        const div_location = document.getElementById(target_location)
        const div = document.createElement('div')
        div.id = div_id
        console.log(div)
        div_location.appendChild(div)
    }

    add_paragraph(target_location){}

    add_button(target_location, action){}

}

class Collection_content_card{

    constructor(master_location, master_id){
        this.master = document.createElement('div')
        this.master.id = master_id
        this.master_location = document.getElementById(master_location)
        console.log(this.master_location)
        this.master_location.appendChild(this.master)
        this.content_card_array = [];
    }

    append_content(content_id, content){
        //target content for content to be appended to
        const target_content = document.getElementById(content_id)
        this.content_card_array.push(content)
        target_content.appendChild(content)
    }
    
    remove_content(content_id, content){
        //target content for content to be removed from
        const target_content = document.getElementtById(content_id)
        target_content.removeChild(content)
    }
}
//a button which when pressed creates content(an element or whatever) in a specified location


window.onload = winInit;
function winInit() {
    const test_collection_cards = new Collection_content_card("placeholder", "collection")
    const test_card = new Content_card("test_card_id")
    // test_card.create_content_card()
    test_card.add_div("test_card_id", "test_div")
    test_collection_cards.append_content("test_card", test_card)
    console.log(test_collection_cards)
}


// const skip_sang_knapp = document.createElement("button")
// const skip_sang_bilde = document.createElement("img");
// skip_sang_bilde.src = "./bilder/next_track_button_larger.png"
// skip_sang_bilde.id = ("skip_sang_bilde");
// skip_sang_knapp.removeChild(skip_sang_bilde); 
// skip_sang_knapp.addEventListener('click', () => {})
