let itemCreator = (function() {

  function generateSKU(itemName, category) {
    if (itemName.split().length === 2 && itemName.split()[0].length === 2) {
      return itemName.split()[0] + itemName.split()[0][0] + category.slice(0, 2);
    } else {
      return itemName.slice(0, 3).toUpperCase() + 
              category.slice(0, 2).toUpperCase();
    }
  }

  function isValidName(name) {
    return name.split(' ').join('').length >= 5;
  }

  function isValidCategory(category) {
    return category.split(' ').length === 1 && category.split(' ')[0].length >= 5;
  }

  function isQuantityProvided(quantity) {
    return quantity !== undefined;
  }

  return function(itemName, category, quantity) {
    if (isValidName(itemName) && isValidCategory(category) && isQuantityProvided(quantity)) {
      this.skuCode = generateSKU(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  }
})();

let ItemManager = {
  items: [],

  getItem(sku) {
    return this.items.filter(function(item) {
      return item.skuCode === sku;
    })[0];
  },

  create(itemName, category, quantity) {
    let item = new itemCreator(itemName, category, quantity);
    if (item.notValid) return false;
    this.items.push(item);
  },

  update(sku, obj) {
    Object.assign(this.getItem(sku), obj);
  },

  delete(sku) {
    this.items.splice(this.items.indexOf(this.getItem(sku)), 1);
  },

  inStock() {
    return this.items.filter(function(item) {
      return item.quantity > 0;
    });
  },

  itemsInCategory(category) {
    return this.items.filter(function(item) {
      return item.category === category;
    });
  }
}

let ReportManager = {
  init(itemMngr) {
    this.items = itemMngr;
  },
  
  createReporter(sku) {
    const item = this.items.getItem(sku);

    return {
      itemInfo() {
        for (let key in item) {
          console.log(`${key}: ${item[key]}`);
        }
      }
    }
  },
  
  reportInStock() {
    return this.items.items.reduce(function(acc, item) {
      if (item.quantity > 0) {
        acc.push(item.itemName);
        return acc;
      } else return acc;
    }, []).join(', ');
  }
}

console.log(ItemManager.create('basket ball', 'sports', 0));           // valid item
console.log(ItemManager.create('asd', 'sports', 0));
console.log(ItemManager.create('soccer ball', 'sports', 5));           // valid item
console.log(ItemManager.create('football', 'sports'));
console.log(ItemManager.create('football', 'sports', 3));              // valid item
console.log(ItemManager.create('kitchen pot', 'cooking items', 0));
console.log(ItemManager.create('kitchen pot', 'cooking', 3));          // valid item

// returns list with the 4 valid items
console.log(ItemManager.items);

console.log(ReportManager.init(ItemManager));
// logs soccer ball,football,kitchen pot
console.log(ReportManager.reportInStock());

console.log(ItemManager.update('SOCSP', { quantity: 0 }));
// returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());
// football,kitchen pot
console.log(ReportManager.reportInStock());

// returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));

console.log(ItemManager.delete('SOCSP'));
// returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
console.log(kitchenPotReporter.itemInfo());
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

console.log(ItemManager.update('KITCO', { quantity: 10 }));
console.log(kitchenPotReporter.itemInfo());
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10