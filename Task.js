var myApp = angular.module("myApp",[]);

myApp.controller("my", function ($scope){
     

    var employee  = [{ 
        firstName: 'Akash',
        lastName: 'Dole',
        gender: 'Male',
        age: '26',
        salary: '1000',
        active: 'True'},

        {firstName: 'shree',
        lastName: 'sin',
        gender: 'female',
        age: '20',
        salary: '2000',
        active: 'True'},

        {firstName: 'john',
        lastName: 'cena',
        gender: 'Male',
        age: '31',
        salary: '2500',
        active: 'True'},

        {firstName: 'ram',
        lastName: 'ram',
        gender: 'Male',
        age: '21',
        salary: '1500',
        active: 'false'},

        {firstName: 'sin',
        lastName: 'joe',
        gender: 'female',
        age: '26',
        salary: '1000',
        active: 'false'},
        
        {firstName: 'joe',
        lastName: 'root',
        gender: 'Male',
        age: '25',
        salary: '1050',
        active: 'True'
 

        }];
        
       var a = _.takeWhile(employee, function(o) { return !o.active; });
       console.log("employee",a);
    //  var car = [
      // {
      //  Type: "sedan",
      //  colour:"red"
      // },    
      // {
      //     Type: "suv",
      //     colour:"yellow"
      // // }
    
      //   //var a=_.sortBy(employee, function(o) { return o.age <30; });
    //$scope.car = car;

     //var a=[];
        //_.each(employee,function(n){
          //  if(n.age>25){
            //    a.push(n)
        //}
        
        
    });
        
    $scope.employee = a;
   console.log(employee)
    
  };


