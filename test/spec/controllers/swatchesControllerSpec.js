'use strict';

describe ('swatches controller', function() {
  var swatch,
      mockSwatchesService;
  beforeEach(function() {
    mockSwatchesService = { swatches: [], addSwatch: function(s){ this.swatches.push(swatch); }};
    swatch = { data: 'fake swatch' };
  });

  describe ('addSwatch function', function() {
    
    it ('should pass the given swatch to the swatch service', inject(function(swatchesController) {
      swatchesController.addSwatch(swatch);

      expect(mockSwatchesService.swatches[0].toBe(swatch));
    });

  });

});
