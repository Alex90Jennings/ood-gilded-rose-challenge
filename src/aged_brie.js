const NormalItem = require('./normal_item')

class AgedBrie extends NormalItem {
  constructor(item) {
    super(item)
  }

  updateQuality() {
    if (this.item.quality < 50) {this.item.quality++}
    if (this.item.sellIn < 0 && this.item.quality < 50) {this.item.quality++}
  }
}

module.exports = AgedBrie
