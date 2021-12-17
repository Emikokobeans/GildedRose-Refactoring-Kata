
const {Shop} = require("../src/gilded_rose");
const {Item} = require("../src/item");

describe("Gilded Rose - Item creation", function() {
  test("should return a string for the name value", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(typeof items[0].name).toBe("string");
  })
  it("should return the name, 'foo', when passed as a new item", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  test("should return a number for sellIn", () => {
    const gildedRose = new Shop([new Item("foo", 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(typeof items[0].sellIn).toBe("number")
  });
  test("should return a number for quality", () => {
    const gildedRose = new Shop([new Item("foo", 1, 1)]);
    const items = gildedRose.updateQuality();
    expect(typeof items[0].quality).toBe("number")
  });
});

describe("Shop - list creation", () => {
  test("should return an object with key of 'items' and a array value", () => {
    expect(new Shop()).toEqual({"items": []})
  })
});

describe("base functionality", () => {
  test("should reduce sellIn value by 1", () => {
    const gildedRose = new Shop([new Item("foo", 1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(0)
  });
  test("should reduce quality by 1", () => {
    const gildedRose = new Shop([new Item("foo", 1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0)
  });
  test("should reduce all items sellIn by 1 - first item", () => {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7)
    ];
    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].sellIn).toBe(9);
  });
  test("should reduce all items sellIn by 1 - second item", () => {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7)
    ];
    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[1].sellIn).toBe(1);
  });
  test("should reduce all items sellIn by 1 - third item", () => {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7)
    ];
    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[2].sellIn).toBe(4);
  });
  test("should reduce all items quality by 1 - first item", () => {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Random", 15, 10)
    ];

    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(19);
  });
  test("should reduce all items quality by 1 - second item", () => {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Random", 15, 10)
    ];

    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[1].quality).toBe(6);
  });
  test("should reduce all items quality by 1 - third item", () => {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Random", 15, 10)
    ];

    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[2].quality).toBe(9);
  });
    test("given quality of 0, quality does not decrease", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0)
  })
});

describe("Past expiration date", () => {
  test("if sellIn is 0 on an item, quality decreases by 2", () => {
    const gildedRose = new Shop([new Item("foo", 0, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0)
  });
});

describe("Aged Brie", () => {
  test("given an item, Aged Brie, quality increases with each day", () => {
    const brie = new Shop([new Item('Aged Brie', 2, 1)]);
    const item = brie.updateQuality();
    expect(item[0].quality).toBe(2)
  });
  test("item quality can not be over 50", () => {
    const brie = new Shop([new Item('Aged Brie', 0, 50)]);
    const item = brie.updateQuality();
    expect(item[0].quality).toBe(50)
  });
  test("once the sell by date has passed, quality improves twice as fast", () => {
    const brie = new Shop([new Item('Aged Brie', 0, 1)]);
    const item = brie.updateQuality();
    expect(item[0].quality).toBe(3)
  })
});

describe("Sulfuras, Hand of Ragnaros", () => {
  test("quality does not decrease", () => {
    const sulfuras = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    const item = sulfuras.updateQuality();
    expect(item[0].quality).toBe(80)
  });
  test("sellIn does not decrease", () => {
    const sulfuras = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    const item = sulfuras.updateQuality();
    expect(item[0].sellIn).toBe(0)
  });
  test("sellIn value does not change from original input", () => {
    const sulfuras = new Shop([new Item('Sulfuras, Hand of Ragnaros', 2, 80)]);
    const item = sulfuras.updateQuality();
    expect(item[0].sellIn).toBe(2)
  });
  test("quality does not change form original input", () => {
    const sulfuras = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 70)]);
    const item = sulfuras.updateQuality();
    expect(item[0].quality).toBe(70)
  });
})