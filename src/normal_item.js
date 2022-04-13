class NormalItem {
  constructor(item) {
    this.item = item
  }
  updateSellIn() {
    this.item.sellIn--
  }

  updateQuality() {
    if (this.item.quality > 0) {this.item.quality--}
    if (this.item.sellIn < 0 && this.item.quality > 0) {this.item.quality--}
  }

  update() {
    this.updateSellIn()
    this.updateQuality()
  }
}

module.exports = NormalItem
