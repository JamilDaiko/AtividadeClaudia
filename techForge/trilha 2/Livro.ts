class Livro{
    private titulo: string;
    private autor: string;
    private paginas: number;
    public lido: boolean;

    constructor(titulo: string,autor: string, paginas: number, lido: boolean){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    marcarLido(): void{
        this.lido = true;
        console.log(`O Livro ${this.titulo} foi marcado como lido`)

    }
}

const livro1 = new Livro("O poder do hábito","Charles Duhigg",408,false)
console.log(`Lido:${livro1.lido}`);
livro1.marcarLido();
console.log(`Lido:${livro1.lido}`);