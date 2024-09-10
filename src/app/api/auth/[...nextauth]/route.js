import UserModal from "app/DBconfig/model/user";
import { connectMongoDB } from "app/DBconfig/mongoDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {},
      async authorize(credentials, req) {
        // connect with Database
        await connectMongoDB();

        // try to story data in database
        const user = await UserModal.findOne({
          // @ts-ignore
          Email: credentials.Email,
        });

        if (user) {
          //check password
// hash password
// @ts-ignore
const hashedPassword = await bcrypt.compare(credentials.Password, user.Password);
if (hashedPassword) {
  return user;
}        
        } else {
          return null;
        }
      },
    }),
  ],

  secret: "68lalvqRDlJGUpaXnQQeIYK58eYeePkpaZIGKBVtuFI=",

  pages: {
    signIn: "/signin",
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
