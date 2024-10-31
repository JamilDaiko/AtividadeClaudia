class Produto{
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string,preco: number,quantidade: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularValorTotalEmEstoque(total = 0): void{
       total = this.preco * this.quantidade
       console.log(`Total do valor no estoque é ${total} `)
    }
}

const produto1 = new Produto("Telefone",1900,5);
produto1.calcularValorTotalEmEstoque();