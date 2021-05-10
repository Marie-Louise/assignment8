class Mkulima{
    constructor(farms,products,orders,vendors) {
        this.farms=[];
        this.products=[];
        this.orders=[];
        this.vendors=[];

    }
    addFarm(farmId,farmName,farmerName,phoneNumber,address){
        var farm={
            farmId:farmId,
            farmName:farmName,
            farmerName:farmerName,
            phoneNumber:phoneNumber,
            address:address,
        }
        return farm
      }
      removeFarm(farmId){
          this.farms.shift(farmId)
          return this.farms
      }
    updateFarm(farmId,farmName,farmerName,phoneNumber,address){
        let newFarm=this.farms.find(newFarm=>newFarm.farmerName=="Marie")
        newFarm={
            farmId:farmId,
            farmName:farmName,
            farmerName:farmName,
            phoneNumber:phoneNumber,
            address:address,
        }
        return newFarm
    }
    getFarm(farmId,farmName,farmerName,phoneNumber,address){
        let getFarm1=this.farms.find(getFarm1=>getFarm1.address=="KENYA")
        return getFarm1
    }
    addProduct(productId,name,price){
        var product={
            productId:productId,
            name:name,
            price:price,
        }
        return product
    }
    removeProduct(productId){
        this.products.shift(productId)
        return this.products
    }
    updateProduct(productId,name,price){
        let newProduct=this.farms.find(newProduct=>newProduct.name=="Banana")
        newProduct={
            ProductId:productId,
            name:name,
            price:price,
        }
        return newProduct
    }
    getProduct(productId){
    let getProduct1=this.farms.find(getProduct1=>getProduct1.product==this.product)
    return getProduct1

  }
  printProduct(products,price){
      var product2={
          products:products,
          price:price,
      }
      return product2
  }
  calculateOrderCost(price,quantity){
      let orderCost=this.farms.find(orderCost=>orderCost.productId==productId)
      console.log(`${price*quantity}`);
      return orderCost
  }
  
 }

let farm=new Mkulima (1223,"UGANDA","Marie","250781849006","ZAMBIA")
console.log(farm.addFarm(18767,"zimbabwe","Louise","250786694438","Kigali"));
console.log(farm.removeFarm(19999));
console.log(farm.updateFarm(1212,"Kagera","Marie","250784567657","RWANDA"));
console.log(farm.updateFarm("kenya"));
console.log(farm.addProduct(345454,"Banana","RWF 56"));
console.log(farm.removeProduct(34534));
console.log(farm.updateProduct(2233,"Juice","KEZ 45"));
console.log(farm.getProduct("Juice"));
console.log(farm.printProduct("Banana","KES 34","Mango","KEZ 435"));
console.log(farm.calculateOrderCost(876,45));