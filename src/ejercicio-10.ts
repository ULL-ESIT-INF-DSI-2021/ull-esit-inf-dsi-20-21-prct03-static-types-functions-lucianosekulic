function isValidUsername(username: string): boolean {
    const userNameLength: number = username.length;
  
    if ((userNameLength >= 4) && (userNameLength <= 30)) {
      if ((username[0] != "_") && (username[userNameLength - 1] != "_")) {
        if ((/[A-Z]/.test(username)) && (/[a-z]/.test(username)) && (/[0-9]/.test(username)) && (/[$_-]/.test(username))) {
          if ((!/[A-Z][A-Z][A-Z]/.test(username)) && (!/[a-z][a-z][a-z]/.test(username)) && (!/[0-9][0-9][0-9]/.test(username)) && (!/[$_-][$_-][$_-]/.test(username))) {
            return true;
          }
        }
      }
    }
    return false;
  }
  
  console.log(`user u__hello$122__ : ${isValidUsername("u__hello$122__")}`);
  console.log(`user Lucho97$ : ${isValidUsername("Lucho97$")}`);