var {Shop, Item} = require('../src/gilded_rose.js');
describe("Conjured", function() {
    it("Conjured items quality decrease by 2 each day", function() {
        const gildedRose = new Shop([ new Item("Conjured Mana Cake", 5, 15) ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Conjured Mana Cake");
        expect(items[0].quality).toEqual(9);
    });

    it("Conjured items quality decrease by 2 each day, but not below 0", function() {
        const gildedRose = new Shop([ new Item("Conjured Mana Cake", 5, 5) ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Conjured Mana Cake");
        expect(items[0].quality).toEqual(0);
    });

    it("Conjured items quality decrease by 4 each day after sellIn is below 0", function() {
        const gildedRose = new Shop([ new Item("Conjured Mana Cake", 0, 10) ]);
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Conjured Mana Cake");
        expect(items[0].quality).toEqual(2);
    });

    it("Conjured items quality decrease by 4 each day after sellIn is below 0, but not below 0", function() {
        const gildedRose = new Shop([ new Item("Conjured Mana Cake", 0, 7) ]);
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Conjured Mana Cake");
        expect(items[0].quality).toEqual(0);
    });
});
