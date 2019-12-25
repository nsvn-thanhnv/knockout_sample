## Note
+ Sử dụng ko.dataFor(param): Kiểm tra xem mình binding vào đâu
+ Sử dụng ko.toJS(param): Đưa 1 object observable về Json để request lên sever 
```
var v2 = ko.dataFor(document.body)
undefined
v2
ViewModel {firstName: ƒ, lastName: ƒ, fullName: ƒ}
vm
ViewModel {firstName: ƒ, lastName: ƒ, fullName: ƒ}firstName: ƒ ()lastName: ƒ ()fullName: ƒ ()__proto__: Object
ko.toJS(vm)
{firstName: "Thanh", lastName: "Nguyen", fullName: "Thanh Nguyen"}firstName: "Thanh"lastName: "Nguyen"fullName: "Thanh Nguyen"__proto__: Object
var model ={ firstName: vm.firstName(), lastName: vm.lastName() }
undefined
model
{firstName: "Thanh", lastName: "Nguyen"}firstName: "Thanh"lastName: "Nguyen"__proto__: Object
v2
ViewModel {firstName: ƒ, lastName: ƒ, fullName: ƒ}
v2.firstName('Thanh Ngaos')
ViewModel {firstName: ƒ, lastName: ƒ, fullName: ƒ}
```