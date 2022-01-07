function test(max){
		document.getElementById("testfield").innerHTML = '';
		for (let i = 0; i<max; i++) {
			var r = Math.floor(Math.random() * meals.length);
			document.getElementById("testfield").value += meals[r].name + "<br>";
		}
}

function max_menu(meal_list) {
		var count = 0;
		for (i in meal_list){
				count+= meal_list[i].max;
			}
		return count;
	}

function count(list, target) {
		var counter = 0;
		for (i in list){
				if (list[i] == target){
						counter++;
					}
			}
		return counter;
	}

function get_group_max(meal, group_list){
	for i in group_list{
		if (meal.group == group_list[i].group){
			return group_list[i].max;
		}
	}
	return null;
}

function generate(n, meal_list){
		max_n = max_menu(meal_list);
		if (n > max_n) {
				n = max_n;
			}
		var wlist = makelist(meal_list);
		var menu = [];
		for (let i=0; i < n; i++){
				var max_meal = false;
				do {
						var r = Math.floor(Math.random() * wlist.length);
						var meal_index = wlist[r];
						var meal = meal_list[meal_index];
						var group_max = get_group_max(meal, groups);
					if (meal.max <= count(menu, meal_index)){
								max_meal = true;
						} else {
								menu.push(wlist[r]);
								max_meal = false;
								}
					} while (max_meal);
			}
		return menu;
	}

function makelist(list){
		var newlist = [];
		for (let i=0; i < list.length; i++){
				for (let j=0; j < meals[i].weight*100; j++){
					newlist.push(i);
					}
			}
		return newlist;
	}

function printmenu(){
		var nb_meals = document.getElementById("quantity").value;
		var menu = generate(nb_meals, meals);
		document.getElementById("menu").value = '';
		for (let i = 0; i < menu.length; i++) {
				var meal = meals[menu[i]];
				document.getElementById("menu").value += meal.name + "\r\n";
			}
	}

function copymenu(){
		var text = document.getElementById("menu");
		text.select();
	  text.setSelectionRange(0, 99999);
		document.execCommand('copy');
		text.blur();
	}
