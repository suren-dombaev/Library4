class Library {
    books=[];
    employees=[];
    faculty=[];
    students=[];
    auth=[];

    addBook (book) {
        this.books.push(book);
    }

    getAllAuthor(){
        for(let i=0; i<this.books.length;i++){
            console.log(this.books[i].author);
        }
    }
   getBooksOfAuthor(){
         let author=document.getElementById('searchAuthor').value;
         for(let i=0; i<this.books.length;i++){
             if(this.books[i].author==author){




             }

         }
     }
    authorReport(a){
        for (let i = 0; i<this.books.length; i++){
            if(this.books[i].author==a){
                console.log(a+" "+ this.books[i].title);
            }
        }
    }
    takeBook(id){
        for (let i = 0; i<this.books.length; i++){
            if(this.id==id){
                console.log(this.books[i]);
            }
        }
    }
    searchbyText(text){
        for(let i=0; i<this.books.length;i++){
            let index;
            for(let k=0;k<this.books[i].content.length;k++){
                if (this.books[i].content[k]=text){
                    index=i

                }
            }
            console.log(this.books[i]);
        }

    }

    removeUser(human,id) {
        if (human.role = employee) {
            this.employees.splice(id,1);
        }
        if(human.role=student) {
            this.students.splice(id,1);
        }
        if(human.role=faculty){
            this.faculty.splice(id,1);
        }
    }
    editUser(human,id,firstname,lastname,phone,email,role) {
        if (human.role == employee) {
            this.employees[id].firstname = firstname;
            this.employees[id].lastname = lastname;
            this.employees[id].phone = phone;
            this.employees[id].email = email;
            this.employees[id].role = role;
        }
        if(human.role==studnet){
            this.students[id].firstname=firstname;
            this.students[id].lastname=lastname;
            this.students[id].phone=phone;
            this.students[id].email=email;
            this.students[id].role=role;
        }
        if(human.role==faculty){
            this.faculty[id].firstname=firstname;
            this.faculty[id].lastname=lastname;
            this.faculty[id].phone=phone;
            this.faculty[id].email=email;
            this.faculty[id].role=role;
        }
    }


    IssueofBook (booktitle){
        for(let i; i<this.books.length;i++){
            if(this.books[i].title==booktitle){
                console.log('The book exists in Library');
                break
            }
            else{
                continue;
            }
        }
    }
    addUser(human,username,password){
        if(human.role=='student'){
            this.students.push(human);
            this.auth.push({human:human,username:username,password:password});
        }
        if(human.role=='faculty'){
            this.faculty.push(human);
            this.auth.push({human:human,username:username,password:password});
        }
        if(human.role=='employee'){
            this.employees.push(human);
            this.auth.push({human:human,username:username,password:password});

        }
    }



}


function authorReport(){
    let author=document.getElementById('AuthorReport').value;
    for (let i = 0; i<library.books.length; i++){
        if(library.books[i].book.author==author){
            alert(author+" "+ library.books[i].book.title);
        }
    }
}
function searchbyText(){
    let index;
    let text=document.getElementById('searchByContent').value;
    for(let i=0; i<library.books.length;i++){

        for(let k=0;k<library.books[i].book.content.length;k++){
            if (library.books[i].book.content[k]==text){
                index=i;

            }

        }

    }
    console.log(library.books[index]);
}
function TakeBook () {
    let booktitle = document.getElementById('booktitle').value;
    for (let i=0; i < library.books.length; i++) {
        if (library.books[i].book.title == booktitle) {
            if (library.books[i].status == true)
                library.books[i].status = false;
            break;
        } else if (library.books[i].status == false) {
            alert('The book is not available now');
            break;
        } else {
            alert('There is no such book in library');
        }

    }
}
function  addBook () {
    let book=document.getElementById('newbook').value;
    library.books.push({book:book,status:true});

}

function addUser(){
    let human=document.getElementById('human').value;
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    let role=document.getElementById('role').value;
    if(role=='student'){
        library.students.push(human);
        library.auth.push({human:human,username:username,password:password});
    }
    if(role=='faculty'){
        library.faculty.push(human);
        library.auth.push({human:human,username:username,password:password});
    }
    if(role=='employee'){
        library.employees.push(human);
        library.auth.push({human:human,username:username,password:password});

    }
}
function   removeUser() {
    let username=document.getElementById('removingUN').value;
    let role=document.getElementById('removingRole').value;
    for(let i=0; i<library[role].length ;i++){
        if(library[role][i].username===username){
            library[role].splice(i,1);
            break;
        }
    }
}

let library = new Library();

