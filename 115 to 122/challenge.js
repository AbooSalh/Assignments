let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
if (chosen == 1) {
  let [
    a
  ] = myFriends;
  let {title,age,available,skills:[
    one,two
  ]} = a
  console.log(title)

  console.log(age)
  if(available == true){
    console.log("available")
  }else{
    console.log("not available")
  }
  console.log(two)
}
if (chosen == 2) {
    let [
        a,b
      ] = myFriends;
      let {title,age,available,skills:[
        one,two
      ]} = b
      console.log(title)
      console.log(age)
      if(available == true){
        console.log("available")
      }else{
        console.log("not available")
      }
      console.log(two)
}
if (chosen == 3) {
    let [
        a,b,c
      ] = myFriends;
      let {title,age,available,skills:[
        one,two
      ]} = c
      console.log(title)
      console.log(age)
      if(available == true){
        console.log("available")
      }else{
        console.log("not available")
      }
      console.log(two)
}
// done //