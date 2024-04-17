import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                username:{label:"username",type:"text",placeholder:"Email Id"},
                passowrd:{label:"password",type:"text",placeholder:"Password"},
            },
            async authorize(credentials:any){
                console.log(credentials)

                return {
                    id: "user1",
                    email:credentials.username,
                    name: "yash",
                };
            }

        })
    ],
    secret:process.env.NEXTAUTH_SECRET
})

export {handler as GET , handler as POST}