# Emigma creation and solving

## Concepts

### For the definition of the enigma
- Category : The group of instances (Ex: Name, Position, Seniority)
- Instance : The element of a category (Ex: Quentin, Electrician, 5 years)
- Property : An inherent characteristic of an instance not explicited dut used in the clues (Ex: Order of comparison, Male or female, Even or odd)
- Clue : Formalized part of information that defines the enigma
- Phrasing† : Statement of the enigma that includes one or many clues

† Not needed for solving but useful for understanding the enigma

### For the solving of the enigma


## Caregory

A category is a group of instances that share a common property. The instances are the elements of the category.

### Categories from the example
- First name
- Last name
- Position
- Seniority

## Instance

An instance is an element of a category. It is a specific element that can be identified by its properties.

### Instances from the example
- First name: Benoît, Quentin, Daniel, Mathieu, Laurent
- Last name: Bouchard, Maréchal, Ledoux, Anderson, Forest
- Position: Baggage handler, Electrician, Security guard, Air traffic controller, Anouncer
- Seniority: 2 years, 3 years, 4 years, 5 years, 6 years

## Property

A property is an inherent characteristic of an instance that is not explicited but used in the clues.

### Properties from the example
- Order of the seniority (2 years = 0, 3 years = 1, 4 years = 2, 5 years = 3, 6 years = 4) represented in the clues as #;

## Format of a clue

A clue is a kind of formula that uses the properties of the instances and the categories to deduce the relations.

A clue can use a property of an instance, the relation between two instances or an entire category.

### Clues from the example

1. position.baggage_handler = seniority.6_years
   1. ∴ position.baggage_handler != seniority.4_years != seniority.5_years != seniority.7_years != seniority.8_years
   2. ∴ seniority.6_years != position.electrician != position.security_guard != position.air_traffic_controller != position.announcer
2. seniority.#(position.electrician) > seniority.#(lastname.ledoux) 
   1. ∴ position.electrician != lastname.ledoux
   2. ∴ seniority.#(0) != position.electrician
   3. ∴ seniority.#(4) != lastname.ledoux
3. firstname.quentin = seniority.5_years
   1. ∴ firstname.quentin != seniority.4_years != seniority.6_years != seniority.7_years != seniority.8_years
   2. ∴ seniority.5_years != firstname.benoît != firstname.daniel != firstname.mathieu != firstname.laurent
   3. + 1.1.a ≡ prenom.quentin != position.baggage_handler
4. seniority.#(lastname.maréchal > position.air_traffic_controller > firstname.daniel)
   1. ∴ position.air_traffic_controller != firstname.daniel != lastname.maréchal
   2. ∴ seniority.#(0) != lastname.maréchal != position.air_traffic_controller
   3. ∴ seniority.#(4) != position.air_traffic_controller != firstname.daniel
   4. ∴ seniority.#(1) != lastname.maréchal
      1. + 3 ≡ prenom.quentin != lastname.maréchal
   5. ∴ seniority.#(3) != firstname.daniel
5. seniority.#(lastname.forest < lastname.bouchard)
   1. ∴ lastname.forest != lastname.bouchard (!truism)
   2. ∴ seniority.#(0) != lastname.bouchard
   3. ∴ seniority.#(4) != lastname.forest
6. firstname.mathieu = position.security_guard
   1. ∴ firstname.mathieu != position.baggage_handler != position.electrician != position.air_traffic_controller != position.announcer
   2. ∴ position.security_guard != firstname.benoît != firstname.quentin != firstname.daniel != firstname.laurent
7. firstname.laurent = lastname.anderson
   1. ∴ firstname.laurent != lastname.bouchard != lastname.maréchal != lastname.ledoux != lastname.forest
   2. ∴ lastname.anderson != firstname.benoît != firstname.quentin != firstname.daniel != firstname.mathieu
8. seniority.#(firstname.laurent < position.air_traffic_controller)
   1. ∴ seniority.#(0) != position.air_traffic_controller
   2. ∴ seniority.#(4) != firstname.laurent
9.  seniority.#(lastname.anderson < position.air_traffic_controller) 
   1. ∴ seniority.#(0) != position.air_traffic_controller ★
   2. ∴ seniority.#(4) != lastname.anderson
    




unicode meaning "hence" : ∴
unicode meaning "meaning" : ≡
unicode meaning "star" : ★

## Example english
Enigma: At the airport

Five men work at the airport. They hold different positions and did not all start working at the same time. What is the name of each, their position, and their seniority?
The clues:

- The baggage handler joined the team six years ago.
- The electrician has been working at the airport longer than Ledoux.
- Quentin has been working at the airport for five years.
- The air traffic controller has been working there longer than Daniel, but less time than Maréchal.
- Forest has not been employed longer than Bouchard.
- Mathieu loves his job as a security guard.
- Laurent Anderson has not been working at the airport as long as the one whose voice is heard regularly.