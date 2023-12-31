import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials';

export const options = {
    providers: [
        GoogleProvider({
            profile(profile){
                return {
                    ...profile,
                    id: profile.sub,
                    userRole: 'Google User'
                }
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                email:{
                    label:'Email',
                    type:'email'
                },
                password:{
                    label:'Password',
                    type:'password'
                }
            },
            async authorize(credentials){
                try {
                    console.log("Credentials : ",credentials);
                } catch (error) {
                    console.error("Credential error : ",error);
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, user}){
            if(token && user){
                token.role = user.userRole;
                token.picture = user.picture;
            }
            return token;
        },
        async session({session, token}){
            if(session?.user){
                session.user.role = token.role;
                session.user.picture = token.picture;
            }
            return session;
        }
    }
}