fun main() {
    

}

//1. **Ancestral Stories:** In many African cultures, the art of storytelling is passed
//down from generation to generation. Imagine you're creating an application that
//records these oral stories and translates them into different languages. The
//stories vary by length, moral lessons, and the age group they are intended for.
//Think about how you would model `Story`, `StoryTeller`, and `Translator`
//objects, and how inheritance might come into play if there are different types of
//stories or storytellers.

class Story(var name: String, var language: String, var agegroup: String)


class Storyteller(var name: String, var length: Int, var agegroup: String)


class Translator(var name: String, var languages: String)


//2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
//The app needs to handle recipes from different African countries, each with its
//unique ingredients, preparation time, cooking method, and nutritional
//information. Consider creating a `Recipe` class, and think about how you might
//create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
//`EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
//methods.

class Recipe(var recipeName: String, var ingredients : String, var prepTime: Int, var cookingMethod: String, var nutritionalInformation: String)


class MoroccanRecipe(var recipeName: String, var ingredients : String, var prepTime: Int, var cookingMethod: String, var nutritionalInformation: String, var morrocanMeat: String)


class EthipianRecipe(var recipeName: String, var ingredients : String, var prepTime: Int, var cookingMethod: String, var nutritionalInformation: String,var ethiopianMeat: String)


class NigerianRecipe(var recipeName: String, var ingredients : String, var prepTime: Int, var cookingMethod: String, var nutritionalInformation: String,var nigerianMeat: String)


//3. **Wildlife Preservation:** You're a wildlife conservationist working on a
//program to track different species in a national park. Each species has its own
//characteristics and behaviors, such as its diet, typical lifespan, migration
//patterns, etc. Some species might be predators, others prey. You'll need to
//create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
//these classes might relate to each other through inheritance.

class Species (speciesName: String,speciesDiet: String,speciesLifespan:Int)

class Predator(speciesName: String,speciesDiet:String,speciesLifespan:Int,predatorSpecies:String)

class Prey(eciesName: String,speciesDiet:String,speciesLifespan:Int,preySpecies:String)


//4. **African Music Festival:** You're in charge of organizing a Pan-African music
//festival. Many artists from different countries, each with their own musical style
//and instruments, are scheduled to perform. You need to write a program to
//manage the festival lineup, schedule, and stage arrangements. Think about how
//you might model the `Artist`, `Performance`, and `Stage` classes, and consider
//how you might use inheritance if there are different types of performances or
//stages.












//5. Create a class called Product with attributes for name, price, and quantity.
//Implement a method to calculate the total value of the product (price * quantity).
//Create multiple objects of the Product class and calculate their total values.
//6. Implement a class called Student with attributes for name, age, and grades (a
//list of integers). Include methods to calculate the average grade, display the
//student information, and determine if the student has passed (average grade >=
//60). Create objects for the Student class and demonstrate the usage of these
//methods.





//7. Create a FlightBooking class that represents a flight booking system. Implement
//methods to search for available flights based on destination and date, reserve
//seats for customers, manage passenger information, and generate booking
//confirmations.









//8. Create a LibraryCatalog class that handles the cataloging and management of
//books in a library. Implement methods to add new books, search for books by
//title or author, keep track of available copies, and display book details.


class LibraryCatalog{
    fun addNewBooks(title: String,author: String,copies: Int){
        book.add(Book(title,author,copies))
    }
}
    fun searchTitle(title: String){
        books.filter (title)
    }
    fun searchAuthor(author:String){
        books.filter (author)
    }
    fun availableCopies(title: String){

    }
    fun displayDetails(author: String,title:String,copies: Int)
