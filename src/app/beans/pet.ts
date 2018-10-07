
export class Pet {

    name : String;
    sex : String;
    animal : String;
    breed : String;
    photo : Array<String>;
    size : String;
    age : String;

    location : String;
    description : String;


    getName(){
        return this.name;
    }

    getSex(){
        return this.sex;
    }

    getAnimal(){
        return this.animal;
    }

    getBreed(){
        return this.breed;
    }

    getPhoto(){
        return this.photo;
    }

    getSize(){
        return this.size;
    }

    getAge(){
        return this.age;
    }

    getLocation(){
        return this.location;
    }

    getDescription(){
        return this.description;
    }


    setName(name){
        this.name = name;
    }

    setSex(sex){
        this.sex = sex;
    }

    setAnimal(animal){
        this.animal = animal;
    }

    setBreed(breed){
        this.breed = breed;
    }

    setPhoto(photos){
        this.photo = photos;
    }

    setSize(size){
        this.size = size;
    }

    setAge(age){
        this.age = age;
    }

    setLocation(location){
        this.location = location;
    }

    setDescription(description){
        this.description = description;
    }
}