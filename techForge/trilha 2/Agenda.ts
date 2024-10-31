class Agenda {
    compromissos: string[];

    constructor(compromissos:string[]) {
        this.compromissos = compromissos;
    }

    listarCompromissos(): void {
        console.log("Compromissos:");
         this.compromissos.forEach((compromisso, index) => {
            console.log(`${index + 1}. ${compromisso}`);
        });
    }
}

const agenda1 = new Agenda(["Reunião com o cliente às 10h","Consulta médica às 15h"]);
agenda1.listarCompromissos();