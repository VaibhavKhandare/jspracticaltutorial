function Product(name, price) {
  this.name = name;
  this.price = price;
  this.inStock = true;
  
  this.applyDiscount = function(percentage) {
    this.price *= (1 - percentage / 100);
  };
}

const laptop = new Product('MacBook Pro', 1999);
console.log(laptop.name);
console.log(laptop.price);

laptop.applyDiscount(10);
console.log(laptop.price);

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.isActive = true;
  }
  
  deactivate() {
    this.isActive = false;
  }
  
  getInfo() {
    return `${this.username} (${this.email})`;
  }
}

const user = new User('johndoe', 'john@example.com');
console.log(user.getInfo());
user.deactivate();
console.log(user.isActive);

class PremiumUser extends User {
  constructor(username, email, credits) {
    super(username, email);
    this.credits = credits;
  }
  
  useCredit(amount) {
    if (this.credits >= amount) {
      this.credits -= amount;
      return true;
    }
    return false;
  }
}

const premiumUser = new PremiumUser('alice', 'alice@example.com', 100);
console.log(premiumUser.useCredit(30));
console.log(premiumUser.credits);
