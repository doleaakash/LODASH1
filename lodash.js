var myApp = angular.module("dec",[]);
myApp.controller("con",function($scope){
_ 

       var data = [{ 
        firstName: 'Akash',
        lastName: 'Dole',
        gender: 'Male',
        age: '26',
        salary: '1000',
        active: 'True'},

        {firstName: 'ram',
        lastName: 'sin',
        gender: 'female',
        age: '20',
        salary: '2000',
        active: 'True'},
        

    ]
// var a = [1,2,3,4,5,6,,7,8,9,10]
//var r = _.random(1,2,3,4,5,6,7,8,9,10)
//console.log(r)
  

   //var a = _.min([4, 2, 8, 6]);
   //console.log(a)
   //$scope.a=a;

//var array =[1,2,3]
//var b =_.reverse (array);
//console.log(b)

 //var a = _.indexOf([1, 2, 1, 2], 2);
 //console.log(a)
 //$scope.a=a;


   //     var c =_.join(['a', 'b', 'c'], '~');
     //console.log(c)

//      var users = [
//       { 'user': 'barney',  'age': 36, 'active': true },
//         { 'user': 'fred',    'age': 40, 'active': false },
//         { 'user': 'pebbles', 'age': 1,  'active': true }
//       ];
//      var b = _.find(users, function(o) { return o.age < 40; });
//        console.log(b)
//       $scope.b=b;
     
//var a = _.compact([0, 1, false, 2, '', 3]);
  //  console.log(a)
       
 //$scope.array=[];

    // _.times(100, function(n) {
      // $scope.array.push(n);})
  
  //})


 //$scope.array=[];{
  //for(i=0;i<100;i++)
    // $scope.array.push(i);}



 //_.map($scope.data, function(n) {
   //  return age;})
  

   //     array=[1,2,3,4],
//     other=_.concat(array[2],6,7),
//   console.log(other)
//  $scope.other=other;{}


//           var age= [
//         { 'user': 'fred',   'age': 48 },
//         { 'user': 'barney', 'age': 36 },
//         { 'user': 'fred',   'age': 40 },
//         { 'user': 'barney', 'age': 34 }
//  ];
//      var a = _.sortBy(age, [function(o) { return o.age;}]);
//  console.log("age",a);


//  other =_.chunk(['a', 'b', 'c', 'd'], 2);
   // console.log(other)
         

   //var a=_.times(3, String);
//console.log(a)




            

       $scope.data= data;
    
});