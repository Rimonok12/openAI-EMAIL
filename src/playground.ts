import { db } from "./server/db";
// import { User } from "@clerk/nextjs/server";
try {
  await db.user.create({
    data: {
      emailAddress: 'example@example.com',
      firstName: 'John',
      lastName: 'Doe',
    },
  });
} catch (error) {
  if (error.code === 'P2002') {
    console.log('A user with this email already exists.');
    // Handle accordingly, such as by returning a custom error message
  } else {
    throw error;
  }
}

console.log("Done")