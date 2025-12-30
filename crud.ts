import { faker } from "@faker-js/faker";
import { prisma } from "./lib/prisma";


async function run() {
    // const createUser=await prisma.user.create({
    //     data:{
    //         name:"paglu",
    //         email:"pago@new.com"
    //     }
    // })

    // console.log('crate user:',createUser);

    //! create post
    // const createPost=await prisma.post.create({
    //     data:{
    //         title:"this is first title",
    //         content:"this is content",
    //         userId:5
    //     }
    // })
    // console.log('crate post',createPost);

    //! create profile
    // const createProfile=await prisma.profile.create({
    //     data:{
    //         bio:"this is bio",
    //         userId:1
    //     }
    // })
    // console.log('crate profile:',createProfile);


    //! get all user
    // const allUser=await prisma.user.findMany({
    //     // include:{
    //     //     post:true,
    //     //     profile:true
    //     // }
    //     select:{
    //         post:true,
    //         profile:true,
    //         name:true
    //     }
    // })
    
    // console.dir(allUser,{depth:Infinity});


    //! update profile

    // const updateProfile=await prisma.profile.update({
    //     where:{
    //         userId:1
    //     },
    //     data:{
    //         bio:"this is last new updated bio"
    //     },
    //     select:{
    //         bio:true,
    //         id:true,
    //         user:{
    //             select:{
    //                 name:true,
    //                 email:true
    //             }
    //         }
    //     }
    // })

    // console.log(updateProfile);


    //! delete
    // const delteUser=await prisma.user.delete({
    //     where:{
    //         id:3
    //     }
    // })
    // console.log(delteUser);


    //! get data by id
    // const getUserById=await prisma.user.findUnique({
    //     where:{
    //         id:3
    //     },
    //     include:{
    //         post:true,
    //         profile:true
    //     }
    // })

    // console.log(getUserById);


    //! upsert

    // const upsertUser=await  prisma.user.upsert({
    //     where:{
    //         email:'new@gmail.com'
    //     },
    //     update:{
    //         name:"nam ke tor"
    //     },
    //     create:{
    //         name:"nam ke",
    //         email:'new@gmail.com'
    //     }
    // })

    // console.log(upsertUser);
}

run()


const data=Array.from({length:100}).map(()=>({
    firstName:faker.person.fullName()
}))

console.log(data);