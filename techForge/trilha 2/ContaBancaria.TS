class ContaBancaria {
    private titular: string;
    private saldo: number;

    constructor(titular: string, saldo: number) {
        this.saldo = saldo;
        this.titular = titular;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo = this.saldo + valor;
            console.log(`Deposito de R$${valor} realizado com sucesso`);
        } else {
            console.log(`Valor de deposito invalido`);
        }
    }

    sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo = this.saldo - valor;
            console.log(`Saque de R$${valor} realizado com sucesso`);
        } else{ 
            console.log(`Saldo insuficiente`);
        }
    }

    getSaldo(): number {
        return this.saldo;
    }

    getTitular(): string {
        return this.titular;
    }

}  


const conta = new ContaBancaria("Jamil", 900);
conta.depositar(300);
console.log(`Saldo atual: R$${conta.getSaldo()}`);
conta.sacar(200);
console.log(`Saldo atual: R$${conta.getSaldo()}`);