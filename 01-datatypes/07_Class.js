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
