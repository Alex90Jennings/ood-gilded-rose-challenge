const NormalItem = require('./normal_item')

class Conjured extends NormalItem {
  constructor(item) {
    super(item)
  }

  updateQuality() {
    if (this.item.quality === 1) {this.item.quality = 0}
    if (this.item.sellIn < 0 && this.item.quality === 3) {this.item.quality = 0}
    if (this.item.quality > 0) {this.item.quality = this.item.quality - 2}
    if (this.item.sellIn < 0 && this.item.quality > 0) {this.item.quality = this.item.quality - 2}
  }
}

module.exports = Conjured
