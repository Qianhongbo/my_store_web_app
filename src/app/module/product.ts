// * data.json

// export class Product {
//   id: number;
//   name: string;
//   price: number;
//   url: string;
//   description: string;

//   constructor() {
//     this.id = 1;
//     this.name = '';
//     this.price = 99999;
//     this.url = '';
//     this.description = '';
//   }

// }

// * fake product api 

export class Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;

  constructor() {
      this.id = 1;
      this.title = '';
      this.price = 0;
      this.description = '';
      this.category = '';
      this.image = '';
      this.amount = 1;
  }

}