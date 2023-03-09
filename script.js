//Todo: File saver library

class Content_card{

    constructor(card_id){
        //TODO: content of card can be stored in card?
        this.card = document.createElement("div")
        this.card.classList = card_id
        console.log(this.card, 'hjei')
    }

    create_content_card(){
        this.location_element.appendChild(this.card)
    }

    add_image(target_location){}

    add_div(target_location, div_id){
        const div = document.createElement('div')
        div.id = div_id

        console.log(target_location, 'hade')
        target_location.appendChild(div)
    }

    add_paragraph(target_location){}

    add_button(target_location, action){}

}

class Collection_content_card{

    constructor(master_location, children_class){
        this.master_location = master_location
        this.child = document.createElement('div')
        this.child.classList = children_class

        this.content_card_array = [];
    }

    append_content(content){

        const target_content = document.getElementById(this.master_location)
        const target_content2 = document.getElementById("placeholder2")
        this.child.appendChild(content)

        this.content_card_array.push(content)
        target_content.appendChild(this.child)
        target_content2.appendChild(this.child)
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
    const test_collection_cards = new Collection_content_card( "placeholder", "placeholder_child")
    
    const test_card = new Content_card("test_card_id")
    test_card.add_div(test_card.card, "test_div")

    const add_button = document.getElementById("add_task")

    add_button.addEventListener("click", function() {
        
        test_collection_cards.append_content(test_card.card)}
    
        
    )

    // test_collection_cards.append_content(test_card.card)
}