(function() {
	'use strict';
	var shoppingList = [
				{
			name : "Cookies",
			quantity : "10 Packets"
		},
		{
			name : "Dairy Milk",
			quantity : "20 Packets"
		},
		{
			name : "Chips",
			quantity : "5 Packets"
		},
		{
			name : "Pizza",
			quantity : "2 Packets"
		},
		{
			name : "Milk Shake",
			quantity : "12 Packets"
		}
	];


	angular.module('ShopApp',[])
	.controller('ListSelectController',ListSelectController)
	.controller('ListAddController',ListAddController)
	.service('ShopService',ShopService);
	

	ListSelectController.$inject = ["ShopService"];
	function ListSelectController(ShopService){
		var list = this;
		list.items = shoppingList;
		list.message = "";
		list.remove = function(index){
			list.items = ShopService.removeItem(index);
		}

	}

	ListAddController.$inject = ["ShopService"];
	function ListAddController(ShopService){
		var add = this;
		add.items = ShopService.getItem();
	}

	function ShopService(){
		var service = this;
		var list1 = shoppingList;
		var list2 = [];

		service.removeItem = function(itemIndex){
			list2.push(list1[itemIndex]);

			list1.splice(itemIndex,1);
			return list1;

		};
		service.getItem = function(){
			return list2;
		}

	 

	}


	
})();