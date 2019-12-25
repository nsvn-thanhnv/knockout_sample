// Here's my data model
var ViewModel = function (first, last) {
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);

    this.fullName = ko.computed(function () {
        // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
        return this.firstName() + " " + this.lastName();
    }, this);
};

var vm = new ViewModel("Thanh", "Nguyen");

ko.applyBindings(vm, document.body); // This makes Knockout get to work

