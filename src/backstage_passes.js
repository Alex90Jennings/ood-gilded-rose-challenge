const NormalItem = require('./normal_item.js')

class BackstagePasses extends NormalItem {
  constructor(item) {
    super(item)
  }

  updateQuality() {
    if (this.item.sellIn < 50 && this.item.quality < 50) {this.item.quality++}
    if (this.item.sellIn < 10 && this.item.quality < 50) {this.item.quality++}
    if (this.item.sellIn < 5 && this.item.quality < 50) {this.item.quality++}
    if (this.item.sellIn < 0) {this.item.quality = 0}
  }
}

module.exports = BackstagePasses
