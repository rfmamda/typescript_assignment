/*
// Task 2
const person_name="Eric";
console.log("hello "+person_name+"! would you like to learn some python today?");
//Task 2

//Task 3
const myname1="ramsha";
const myname2="RAMSHA"
let lowercase_name;
let uppercase_name;
let titlecase_name;
console.log(myname2);
lowercase_name=myname2.toLowerCase();
console.log(lowercase_name);
console.log(myname1);
uppercase_name=myname1.toUpperCase();
console.log(uppercase_name);
titlecase_name=myname1[0].toUpperCase()+myname1.substr(1);
console.log(titlecase_name);
//Task 3

//Task 4
console.log("Quaid e Azam once said,"+"\""+"with Unity, Faith and Discipline we will compare with any nation of the world."+"\"");
//Task 4

//Task 5
const famous_person="Quaid e Azam";
const famous_quote="with Unity, Faith and Discipline we will compare with any nation of the world.";
console.log(famous_person+" once said, "+"\""+famous_quote+"\"");
//Task 5

//Task 6
const my_name="\t"+" ramsha "+"\t";
console.log(my_name);
let strip_name=my_name.trim();
console.log(strip_name);
//Task 6

//Task 7 & 8
const add=4+4;
const sub=12-4;
const mul=4*2;
const div=16/2;
console.log("4+4= "+add);
console.log("12-4= "+sub);
console.log("4*2= "+mul);
console.log("16/2= "+div);
//Task 7 & 8;

//Task 9
const myfav_num = 0;
let msg = "my favourite number is " + myfav_num;
console.log(msg);
//Task 9

//Task 11
const frnd_names = ["aqsa", "mehwish", "sidra", "marium"];
for(let i=0; i<frnd_names.length; i++)
{
    console.log(frnd_names[i]);
}
//Task 11


//Task 12
const greet_frnd = ["aqsa", "mehwish", "sidra", "marium"];
for(let i=0; i<greet_frnd.length;i++)
{
    console.log("Hi! "+greet_frnd[i]+",How are you?");
}
//Task 12

//Task 13
const transport_modes = ["Car", "Motorcylce", "Aeroplane"]
const fav_trasport = ["vitz","honda","emirate airline"];
for(let i=0;i<transport_modes.length;i++)
{
    console.log("my favourite "+transport_modes[i]+" is "+fav_trasport[i]);
}
//Task 13
*/
// //Task 14
// //const guest_list=new Array("aqsa","mehwish","sidra","marium");
// const guest_list = new Array();
// guest_list.push("aqsa");
// guest_list.push("mehwish");
// guest_list.push("sidra");
// guest_list.push("marium");
// for (var i = 0; i < guest_list.length; i++) {
//     console.log("hey " + guest_list[i] + ",would you like to join us on dinner?");
// }
// //Task 14

// //Task 15
// let guest_come = [true, false, true, false];
// let count = 0;
// let replace_guest = ["areeba", "hafsa"];
// for (let i = 0; i < guest_list.length; i++) {
//     if (guest_come[i] == false) {

//         console.log("the name of guest who cant make it is " + guest_list[i]);
//         // guest_list.pop();
//         guest_list[i] = replace_guest[count];
//         //guest_list.push(replace_guest[count]);
//         count++;
//     }
// }
// //Task 15

// //Task 16
// console.log("the new guestlist is:");
// for (let i = 0; i < guest_list.length; i++) {
//     console.log(guest_list[i]);
// }


// //Task 16
// console.log("hey guyz! we have a big roundtable for dinner");
// let new_guest = new Array("marium","mehwish","bushra");
// let guest_count = 0;
// let no_of_iteration=0;
// //new_guest.push("bushra");
// //new_guest.push("haya");
// //new_guest.push("mehwsih");
// let new_guestlist = new Array();
// let total_guest = guest_list.length + new_guest.length;
// console.log(total_guest);
// console.log("the updated guestlist is:" + new_guestlist);
// new_guestlist[0] = new_guest[guest_count++];
// let index = Math.ceil(total_guest/2);
// for (i = 0; i < index-1; i++) 
// {
//     new_guestlist.push(guest_list[i]);
//     no_of_iteration+=i;
// }
// new_guestlist.push(new_guest[guest_count++]);
// while(no_of_iteration!=guest_list.length)
// {
//     new_guestlist.push(guest_list[no_of_iteration]);
//     no_of_iteration++;
// }
//  new_guestlist.push( new_guest[guest_count]);
//   for(i=0;i<new_guestlist.length;i++)
//   {
//           console.log(new_guestlist[i]);
 
//   }

// //Task 16

// //Task 17
// console.log("Sorry guyz! cannot get table for dinner now, we can invite only 2 guests")
// let pop_guest;
// while(total_guest!=2)
// {
//    pop_guest= new_guestlist.pop();
//    console.log(pop_guest+" sorry cannot inivite you at dinner");
//     total_guest--;
// }
// for(i=0;i<total_guest;i++)
// {
//     console.log("hey "+new_guestlist[i]+" you are invited to dinner");
// }
// // Task17

// Task18
let placeList=["Pakistan","Turkey","Canada","Suadia Arabia","Dubai"];
let sortedArray=new Array();
let reverseOrder=new Array();
let temp;
console.log("the list of places is:");
for( let i=0; i<placeList.length; i++)
{
    console.log(placeList[i]);
    sortedArray.push(placeList[i]);
}
for(let i=0; i<sortedArray.length; i++)
{
    for(let j=i+1; j<sortedArray.length; j++)
    {
        if(sortedArray[i][0]>sortedArray[j][0])
        {
            temp=sortedArray[i];
            sortedArray[i]=sortedArray[j];
            sortedArray[j]=temp;
        }
    }
}
console.log("\nthe list of places in alphabetical order is:");
for(let i=0;i<sortedArray.length;i++)
{
    console.log(sortedArray[i]);
}
console.log("\nthe original list of places is:");
for( let i=0; i<placeList.length; i++)
{
    console.log(placeList[i]);
}
console.log("\nthe sortedlist of places in reverse alphabetical order is:");
for(let i=sortedArray.length-1;i>=0;i--)
{
    console.log(sortedArray[i]);
}
 console.log("\nthe original list of places is:");
 for( let i=0; i<placeList.length; i++)
 {
     console.log(placeList[i]);
}
console.log("\nthe original list in reverse order is:");
for(let i=4; i>=0; i--)
{
    //reverseOrder.push(placeList[i]);
    console.log(placeList[i]);
}
console.log("\nthe original list in original order is:");
for(let i=0; i<placeList.length; i++)
{
    console.log(placeList[i]);
}