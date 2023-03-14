//Todo: File saver library

class Content_card{

    constructor(card_class){
        //TODO: content of card can be stored in card?
        this.card = document.createDocumentFragment()
        this.card.classList = card_class
    }

    create_content_card(){
        this.location_element.appendChild(this.card)
    }

    add_image(target_location, img_id, img_src, size){
        const img = document.createElement('img')
        img.id = img_id
        img.src = img_src
        img.width = `${size}`
        img.height = `${size}`

        target_location.appendChild(img)
    }

    add_div(target_location, div_id){

        const div = document.createElement('div')
        div.id = div_id

        target_location.appendChild(div)
    }

    add_paragraph(target_location, paragraph_id, paragraph_text){
        const paragraph = document.createElement('p')
        paragraph.id = paragraph_id
        paragraph.textContent = paragraph_text

        target_location.appendChild(paragraph)
    }

    add_button(target_location, action){}

}


class Collection_content_card{

    constructor(master_location, children_class){
        // master location is the location where all the cards will be stored
        this.master_location = master_location
        this.children_class = children_class

        this.content_card_array = [];
    }

    append_content(content){

        const child = document.createElement("div")
        child.classList = this.children_class

        const target_content = document.getElementById(this.master_location)
        console.log(target_content)
        child.appendChild(content)

        this.content_card_array.push(child)
        target_content.appendChild(child)
    }
    
    remove_content(content_id, content){
        //target content for content to be removed from
        const target_content = document.getElementtById(content_id)
        target_content.removeChild(content)
    }
}
//a button which when pressed creates content(an element or whatever) in a specified location

const add_task_button = document.getElementById("add_task")

window.onload = winInit;
function winInit() {
    const test_collection_cards = new Collection_content_card( "placeholder", "placeholder_child")
    
    add_task_button.addEventListener("click", async function(){

        const task_name = document.getElementById("task_name_input").value


        const test_card = new Content_card("test_card_id")
        test_card.add_div(test_card.card, "test_div")
        test_card.add_paragraph(test_card.card, task_name, task_name)
        
        
        test_card.add_image(test_card.card, "test_img", image_array[image_array.length-1], 100)
    
        test_collection_cards.append_content(test_card.card)

    })
}


let image_input = document.getElementById("image_input");
let uploaded_image =""
let image_array = []

//TODO: image is added to image_array, then it is added to a file when the + button is clicked. 
//When a task is removed, the image in the images file is also removed





image_input.addEventListener("change", function() {
    read_image(image_input, push_to_image_array, image_array)
});





function push_to_image_array(image, array){    // Behandler CSV-data
    array.push(image)
    console.log(array)
}

function read_image(image_input,callback, array){ // Leser fil basert på popup-dialog (fra HTML Input tag type 'file')
	let file   = image_input.files[0];
	let reader = new FileReader();
	reader.onload = function(evt) {
					let fileContent = evt.target.result;
					callback(fileContent, array);
				    };
    reader.readAsDataURL(file);
}