class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

const itemNames = {
  "Aged Brie": require('./aged_brie.js'),
  "Backstage passes to a TAFKAL80ETC concert": require('./backstage_passes.js'),
  "Sulfuras, Hand of Ragnaros": require('./sulfuras.js'),
  "Conjured Mana Cake": require('./conjured'),
  "Normal item": require('./normal_item.js')
}

class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++){
      const item = this.items[i]
      const itemClass = itemNames[item.name] || itemNames["Normal item"]
      const itemInstance = new itemClass(item)
      itemInstance.update() 
    }
    return this.items
    /*
    return this.items.map(item => {
      const itemClass = ITEMS[item.name] || ITEMS["Normal item"]
      const itemInstance = new itemClass(item)
      itemInstance.update() 
    return item
    })
    */
  }
}

module.exports = {
  Item,
  Shop
}
