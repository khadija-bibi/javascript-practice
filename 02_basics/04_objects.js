// const tinderUser = new Object()

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "khadija",
      lastname: "Bibi",
    },
  },
};
// console.log(regularUser.fullname.userfullname)
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({ }, obj1, obj2)  //targer, source
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "gcsdhvc@gmail.com",
  },
  {
    id: 1,
    email: "gcsdhvc@gmail.com",
  },
  {
    id: 1,
    email: "gcsdhvc@gmail.com",
  },
  {
    id: 1,
    email: "gcsdhvc@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstuctor: "hitesh",
};

// console.log(course.courseInstuctor);

const { courseInstuctor} = course;
// console.log(courseInstuctor);

const { courseInstuctor: instuctor} = course;
console.log(instuctor);

//----react----
// const navbar= () =>{

// }
// navbar(company = "hitesh")

//----APIs----
     //JSON
    //  {
    //     "courseName": "js in hindi",
    //     "price": "999",
    //     "courseInstuctor": "hitesh",
    //   };
