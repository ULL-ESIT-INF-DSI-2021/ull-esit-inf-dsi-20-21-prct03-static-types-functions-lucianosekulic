function isValidISBN(ISBN: string): boolean {
    ISBN = ISBN.replace(/[-]/g, "");
    if (ISBN.length < 10) {
      return false; 
    }
    let add: number = 0;
    for (let i = 0; i < ISBN.length; i++) {
      if ((ISBN[i] == "X") || (ISBN[i] == "x")) {
        add += (10 * (ISBN.length - i));
      } else {
        add += (parseInt(ISBN[i]) * (ISBN.length - i));
      }
    }
    if (add % 11 == 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let ISBN_Test1: string = "3-598-21507-X";
  let ISBN_Test2: string = "359821507X";
  let ISBN_Test3: string = "97-5-97";
  let ISBN_Test4: string = "55";
  
  let ISBN_Result: boolean = isValidISBN(ISBN_Test1);
  console.log(`is the ISBN ${ISBN_Test1} correct? answer: ${ISBN_Result}`);
  ISBN_Result = isValidISBN(ISBN_Test2);
  console.log(`is the ISBN ${ISBN_Test2} correct? answer: ${ISBN_Result}`);
  ISBN_Result = isValidISBN(ISBN_Test3);
  console.log(`is the ISBN ${ISBN_Test3} correct? answer: ${ISBN_Result}`);
  ISBN_Result = isValidISBN(ISBN_Test4);
  console.log(`is the ISBN ${ISBN_Test4} correct? answer: ${ISBN_Result}`);