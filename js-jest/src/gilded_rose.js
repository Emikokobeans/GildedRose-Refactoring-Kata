const {
  NormalItem,
  AgedBrie,
  Legendary,
  BackstagePass,
  ConjuredItem,
} = require('./item'); 


class Shop {
  constructor(items=[]){
    this.items = items.map((item) => {
      switch (item.name) {
        case 'Sulfuras, Hand of Ragnaros': 
          return new Legendary(item.name, item.sellIn, item.quality);
        case 'Aged Brie': 
          return new AgedBrie(item.sellIn, item.quality);
        case 'Backstage passes to a TAFKAL80ETC concert':
          return new BackstagePass(item.sellIn, item.quality)
        case 'Conjured Item':
          return new ConjuredItem(item.name, item.sellIn, item.quality)
        default: 
          return new NormalItem(item.name, item.sellIn, item.quality);
      }
    });
  }

//       if (this.items[i].name === "Aged Brie" && this.items[i].quality < 50) {
//         this.items[i].quality = this.items[i].quality + 1;
//       } else if (this.items[i].sellIn <= 0 && this.items[i].quality >= 2) {
//         this.items[i].quality = this.items[i].quality - 2;
//       } else if (this.items[i].quality >= 1){
//       this.items[i].quality = this.items[i].quality - 1;
// }
// this.items[i].sellIn = this.items[i].sellIn - 1;

    //   if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //     if (this.items[i].quality > 0) {
    //       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //         this.items[i].quality = this.items[i].quality - 1;
    //       }
    //     }
    //   } else {
    //     if (this.items[i].quality < 50) {
    //       this.items[i].quality = this.items[i].quality + 1;
    //       if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].sellIn < 11) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1;
    //           }
    //         }
    //         if (this.items[i].sellIn < 6) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1;
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //     this.items[i].sellIn = this.items[i].sellIn - 1;
    //   }
    //   if (this.items[i].sellIn < 0) {
    //     if (this.items[i].name != 'Aged Brie') {
    //       if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].quality > 0) {
    //           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //             this.items[i].quality = this.items[i].quality - 1;
    //           }
    //         }
    //       } else {
    //         this.items[i].quality = this.items[i].quality - this.items[i].quality;
    //       }
    //     } else {
    //       if (this.items[i].quality < 50) {
    //         this.items[i].quality = this.items[i].quality + 1;
    //       }
    //     }
    //  }

    updateQuality() {
      this.items.forEach((item) => item.update());
            return this.items;
     


  }
}

module.exports = {
  Shop
}
