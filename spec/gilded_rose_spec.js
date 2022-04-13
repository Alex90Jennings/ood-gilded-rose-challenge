var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
    it("should reduce quality by 1", function() {
      const gildedRose = new Shop([ new Item("foo", 5, 1) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("foo");
      expect(items[0].quality).toEqual(0);
    });

    it("should reduce quality by 1, but never below 0", function() {
      const gildedRose = new Shop([ new Item("foo", 5, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("foo");
      expect(items[0].quality).toEqual(0);
    });

    it("should reduce sell-in by 1, and can go bellow 0", function() {
      const gildedRose = new Shop([ new Item("foo", 1, 2) ]);
      gildedRose.updateQuality();
      gildedRose.updateQuality();
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("foo");
      expect(items[0].sellIn).toEqual(-2);
      expect(items[0].quality).toEqual(0);
    });

    it("Once the sell by date has passed, Quality degrades twice as fast", function() {
      const gildedRose = new Shop([ new Item("foo", 0, 10) ]);
      gildedRose.updateQuality();
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("foo");
      expect(items[0].quality).toEqual(6);
      expect(items[0].sellIn).toEqual(-2);
    });
});
