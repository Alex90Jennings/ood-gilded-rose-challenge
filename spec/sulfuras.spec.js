var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
    it("Sulfuras never decreases in quality and never has to be sold", function() {
        const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 1, 80) ]);
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
        expect(items[0].sellIn).toEqual(-1);
        expect(items[0].quality).toEqual(80);
    });
});
