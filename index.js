//Initiate class for folders
class Folder {
    constructor(name) {
        this.location = name
    }
}

//Initiate the Class for the list
class List {
    constructor(head = null) {
        this.head = head
    }
}

//Create the My PC folder, document folder, and program files folder
let pcFolder = new Folder('My PC')
let documentsFolder = new Folder("Documents")
let programFilesFolder = new Folder("Program Files")

//Link the document folders and program file folders into the pcFolder directory
pcFolder.documents = documentsFolder
pcFolder.programsFiles = programFilesFolder

//Make the 'MY PC' folder to the head of the List constructor, also referred to as the computer
let computer = new List(pcFolder)
console.log(computer.head)