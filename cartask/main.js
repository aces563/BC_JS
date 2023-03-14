const vehicleLicence = document.querySelector('#plate')
const vehicleMake = document.querySelector('#make')
const vehicleOwner = document.querySelector('#owner')
const vehiclePrice = document.querySelector('#price')
const vehicleColour = document.querySelector('#colour')
const addButton = document.querySelector('#add-car')
const resetButton = document.querySelector('#reset')

const searchInput = document.querySelector('#search')

const searchButton = document.querySelector('#search-button')

const searchResult = document.querySelector('#search-result')

const licence = document.querySelector('#carlicence')
const maker = document.querySelector('#carmake')
const owner = document.querySelector('#carowner')
const price = document.querySelector('#carprice')
const colour = document.querySelector('#carcolour')
const theDiscount = document.querySelector('#cardiscount')

const theInput = [vehicleColour, vehicleLicence, vehicleOwner, vehiclePrice, vehicleMake]
let detailsArea = document.querySelector('#details-area')

let vehicles = [];

function Car(licence, make, owner, price, colour){
    this.carLicence = licence
    this.carMake = make
    this.carOwner = owner
    this.carPrice = price
    this.carColour = colour
    this.discount = function(){
        let carDiscount = 0;
        if (this.carPrice > 20000){
            carDiscount =  (25/100) * this.carPrice
            return carDiscount
        }
        else if (this.carPrice < 5000){
            carDiscount =  (10/100) * this.carPrice
            return carDiscount
        }
        else{
            carDiscount =  (15/100) * this.carPrice
            return carDiscount
        }
    }
}

function addCar(e, licencePlate = vehicleLicence){
    e.preventDefault()
    for(i = 0; i < vehicles.length; i++){
        if(vehicleLicence.value == vehicles[i].carLicence){
           return alert('That licence plate number already exists');
        } 
    }
            licencePlate = new Car(vehicleLicence.value, vehicleMake.value, vehicleOwner.value, vehiclePrice.value, vehicleColour.value,)

                    vehicles.push(licencePlate);
                
            detailsArea.innerHTML='';
            for(const vehicle of vehicles){
        
                const tr=document.createElement('tr');
                tr.appendChild(createCell(vehicle.carLicence));
                tr.appendChild(createCell(vehicle.carMake));
                tr.appendChild(createCell(vehicle.carOwner));
                tr.appendChild(createCell(vehicle.carPrice));
                tr.appendChild(createCell(vehicle.carColour));
                detailsArea.appendChild(tr);
            }
    }

function searchCar(e) {
    e.preventDefault()
    for (const vehicle of vehicles){
        if(searchInput.value == vehicle.carLicence){
            licence.textContent = vehicle.carLicence
            maker.textContent = vehicle.carMake
            owner.textContent = vehicle.carOwner
            price.textContent = vehicle.carPrice
            colour.textContent = vehicle.carColour
            theDiscount.textContent = vehicle.discount()

        }      
    }
    return null;
}
addButton.addEventListener('click', addCar)
searchButton.addEventListener('click', searchCar)

function createCell(text){
    const td=document.createElement('td');
    td.textContent=text;
    return td;
}