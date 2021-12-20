const Item = require('./item');


class BackstagePass extends Item {
    constructor(sellIn, quality) {
        super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
      }

      qualityCalc() {
        if (this.sellIn <= 0) return 0; 
        if (this.sellIn <= 5) return this.quality + 3;
        if (this.sellIn <= 10) return this.quality + 2;
        return this.quality + 1;
      }

      update() {
        this.quality = Math.min(50, this.qualityCalc());    
        this.sellIn -= 1;
    
      }
}

module.exports = BackstagePass