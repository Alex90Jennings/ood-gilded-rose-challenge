const NormalItem = require('./normal_item')

class Sulfuras extends NormalItem {
  constructor(item) {
    super(item)
  }
  updateQuality() {this.item.quality = 80}
}

module.exports = Sulfuras
