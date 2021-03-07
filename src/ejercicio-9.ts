function pokemonCombat(pokemon1: string, pokemon2: string, attack: number, oppDefense: number): number {
    let effectiveness: number = 0;
    
    if (pokemon1 == pokemon2) {
      effectiveness = 0.5;
    } else {
      switch (pokemon1) {
        case "water":
          if (pokemon2 == "fire") {
            effectiveness = 2;
          }
          if ((pokemon2 == "electric") || (pokemon2 == "grass")) {
            effectiveness = 0.5;
          }
  
          break;
        
        case "fire":
          if (pokemon2 == "grass") {
            effectiveness = 2;
          }
          if (pokemon2 == "water") {
            effectiveness = 0.5;
          }
          if (pokemon2 == "electric") {
            effectiveness = 1;
          }   
        break;
        
        case "grass":
          if (pokemon2 == "water") {
            effectiveness = 2;
          }
  
          if (pokemon2 == "electric") {
            effectiveness = 1;
          }
  
          if (pokemon2 == "fire") {
            effectiveness = 0.5;
          }
  
          break;
  
        case "electric":
          if (pokemon2 == "water") {
            effectiveness = 2;
          }
  
          if ((pokemon2 == "fire") || (pokemon2 == "grass")) {
            effectiveness = 1;
          }
  
          break;
      }
    }
  
    let damage = 50 * (attack / oppDefense) * effectiveness;
    return damage;
  }
  
  console.log(`Zapdos (attack = 10) vs Kyogre (defensa = 8)`);
  console.log(`damage from Zapdos to Kyogre: ${pokemonCombat("electric", "water", 10, 8)}`);
  console.log(`\nTreeko (attack = 8) vs Torchic (defensa = 6)`);
  console.log(`damage from Treeko to Torchic: ${pokemonCombat("grass", "fire", 8, 6)}`);