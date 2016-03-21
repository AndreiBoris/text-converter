/* global ko */

var ConverterViewModel = (function(self, ko) {
    'use strict';
    self.input = ko.observable('');
    self.output = ko.observable('');

    self.convertApostrophes = ko.observable(true);
    self.convertNewlines = ko.observable(true);

    self.convert = function() {
        var text = self.input();
        if (self.convertApostrophes()){
            text = text.replace(/'/g, '\\\'');
        }
        if (self.convertNewlines()){
            text = text.replace(/\n/g, '\\n');
        }
        self.output(text);
    };

    /**
     * Add the above methods to ConverterViewModel
     */
    return self;

}(ConverterViewModel || {}, ko));

// Apply Knockout bindings
ko.applyBindings(ConverterViewModel);