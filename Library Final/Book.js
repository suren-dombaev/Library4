function RandomName(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

class Book {
    constructor() {
        this.id = RandomName(3);
        this.title = RandomName(10);
        this.author = RandomName(10);
        this.pagecount = RandomName(10);
        this.content=[RandomName(5),RandomName(5), RandomName(5)]
    }
}
