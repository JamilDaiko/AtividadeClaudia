class Temperatura{
    public celcius: number;
    
    constructor(celcius:number){
        this.celcius = celcius
    }

    convetorEmFahrenheitEKelvin(fahrenheit:0,kelvin:0): void{
        fahrenheit = (this.celcius * 9/5)+32
        console.log(`A temperatura é de ${fahrenheit} fahrenheit `);
        kelvin =  this.celcius + 273.15
        console.log(`A temperatura é de ${kelvin} kelvin `);
    }
}

const temperatura1 = new Temperatura(26);
console.log(`A temperatura é de ${temperatura1.celcius} celcius `);
temperatura1.convetorEmFahrenheitEKelvin();