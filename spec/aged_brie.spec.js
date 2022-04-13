var {Shop, Item} = require('../src/gilded_rose.js');
describe("Aged Brie", function() {
    let gildedRose
    beforeEach(() => {        
        gildedRose = new Shop([ new Item("Aged Brie", 5, 48) ]);
    });

    it("The Quality of aged brie is never more than 50", function() {
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Aged Brie");
        expect(items[0].quality).toEqual(50);
        expect(items[0].sellIn).toEqual(2);
    });
    
    it("aged brie increases by 1 the quality each day", function() {
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Aged Brie");
        expect(items[0].quality).toEqual(50);
        expect(items[0].sellIn).toEqual(3);
    });
});

