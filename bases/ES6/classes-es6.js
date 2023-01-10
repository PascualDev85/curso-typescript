(() => {
  class Avenger {
    name;
    power;

    constructor(name = "Sin nombre", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  const hulk = new Avenger("Hulk", 1000);

  console.log(hulk);

  class Flying extends Avenger {
    flying;

    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const falcon = new Flying("Falcon", 100);
  console.log(falcon);
})();
