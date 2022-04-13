var {Shop, Item} = require('../src/gilded_rose.js');
describe("Backstage Passes", function() {
    it("The Quality of a backstage pass is never more than 50", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].quality).toEqual(50);
    expect(items[0].sellIn).toEqual(3);
    });

    it("Backstage passes increases in quality", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 2, 15) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].quality).toBeGreaterThan(15);
    });

    it("Backstage passes increases by 2 in quality if sellIn is between 6 and 10", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 8, 15) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].quality).toEqual(19);
    });

    it("Backstage passes increases by 3 in quality if sellIn is between 0 and 5", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 15) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].quality).toEqual(21);
    });

    it("Backstage passes quality becomes 0 if sellIn is below 0", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 2, 15) ]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].quality).toEqual(0);
    });
});
