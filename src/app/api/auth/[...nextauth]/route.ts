import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { SiweMessage } from "siwe";

const providers = [
  CredentialsProvider({
    async authorize(credentials) {
      try {
        const siwe = new SiweMessage(JSON.parse(credentials?.message || "{}"));
        const nextAuthUrl = new URL(process.env.NEXTAUTH_URL as string);
        const result = await siwe.verify({
          signature: credentials?.signature || "",
          domain: nextAuthUrl.host,
        });

        if (result.success) {
          return {
            id: siwe.address,
          };
        }
        return null;
      } catch (e) {
        return null;
      }
    },
    credentials: {
      message: {
        label: "Message",
        placeholder: "0x0",
        type: "text",
      },
      signature: {
        label: "Signature",
        placeholder: "0x0",
        type: "text",
      },
    },
    name: "Ethereum",
  }),
];

const handler = NextAuth({
  providers,
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({user}) {
        // connectToDb();
        try {
          console.log(user,'erwrewrwerewrewrew');
          // 如果数据库里面没有用户的话，就把用户插到数据库当中
          // const user = await User.findOne({ email: profile.email });

          // if (!user) {
          //   const newUser = new User({
          //     username: profile.login,
          //     email: profile.email,
          //     image: profile.avatar_url,
          //   });

          //   await newUser.save();
          // }
        } catch (err) {
          return false;
        }
      
      return true;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.address = token.sub;
      session.user.name = token.sub;
      return session;
    },
  },
});

export { handler as GET, handler as POST };