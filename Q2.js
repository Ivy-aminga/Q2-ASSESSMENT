// 1. **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

class Story {
    constructor(length,Stories,agegroup){
        this.length = length;
        this.Stories = Stories;
        this.agegroup = agegroup;
    }
}

class StoryTeller{
    constructor(name,language){
        this.name = name;
        this.language = language;
    }
    storytelling(){
    }
}

class Translator {
    constructor(name,language){
        this.name = name;
        this.language = language
    } 
}
  


// 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

class Recipe{
    constructor(ingredients,prepTime,cookingMethod,nutritional,name){
        this.ingredients = ingredients;
        this.prepTime = prepTime;
        this.cookingMethod = cookingMethod;
        this.nutritional = nutritional;
        this.name = name;

    }
}


class MoroccanRecipe{
    constructor(ingredients,prepTime,cookingMethod,nutritional,name,morrocanMeat){
        this.ingredients = ingredients;
        this.prepTime = prepTime;
        this.cookingMethod = cookingMethod;
        this.nutritional = nutritional;
        this.name = name;
        this.morrocanMeat = morrocanMeat
    }
}



class EthiopianRecipe{
    constructor(ingredients,prepTime,cookingMethod,nutritional,name,ethiopianMeat){
        this.ingredients = ingredients;
        this.prepTime = prepTime;
        this.cookingMethod = cookingMethod;
        this.nutritional = nutritional;
        this.name = name;
    this.ethiopianMeat = ethiopianMeat
    }
}


class NigerianRecipe{
    constructor(ingredients,prepTime,cookingMethod,nutritional,name,nigerianMeat){
        this.ingredients = ingredients;
        this.prepTime = prepTime;
        this.cookingMethod = cookingMethod;
        this.nutritional = nutritional;
        this.name = name;
        this.nigerianMeat = nigerianMeat
        }
    }



// 3. **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to
// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.


class Species{
    constructor(speciesName,speciesDiet,speciesLifespan){
        this.speciesName = speciesName;
        this.speciesDiet = speciesDiet;
        this.speciesLifespan = speciesLifespan;
    }
}

class Predator{
    constructor(speciesName,speciesDiet,speciesLifespan,predatorSpecies){
        this.speciesName = speciesName;
        this.speciesDiet = speciesDiet;
        this.speciesLifespan = speciesLifespan;
        this.predatorSpecies = predatorSpecies
        
    }
}

class Prey{
    constructor(speciesName,speciesDiet,speciesLifespan,preySpecies){
        this.speciesName = speciesName;
        this.speciesDiet = speciesDiet;
        this.speciesLifespan = speciesLifespan;
        this.predatorSpecies = predatorSpecies
        
    }

}
  

// 4. **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.








// 5. Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.
// 6. Implement a class called Student with attributes for name, age, and grades (a
// list of integers). Include methods to calculate the average grade, display the
// student information, and determine if the student has passed (average grade >=
// 60). Create objects for the Student class and demonstrate the usage of these
// methods.









// 7. Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.






// 8. Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.

class LibraryCatalog{
    constructor(books){
        this.books = []
    }
}

newBook(title,author,availableCopies){
}

searchBoks(title,author,availableCopies){

}

displyBook(title,author,availableCopies){

}

