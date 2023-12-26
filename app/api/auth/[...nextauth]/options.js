import GoogleProvider from 'next-auth/providers/google'

export const options = {
    providers: [
        GoogleProvider({
            profile(profile){
                console.log("Google Profile : ",profile);
                return {
                    ...profile,
                    id: profile.sub,
                    userRole: 'Google User'
                }
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    callbacks: {
        async jwt({token, user}){
            console.log("jwt token : ",token);
            console.log("jwt user : ",user);
            if(token && user){
                token.role = user.userRole;
                token.picture = user.picture;
            }
            return token;
        },
        async session({session, token}){
            console.log("session token : ",token);
            console.log("session session : ",session);
            if(session?.user){
                session.user.role = token.role;
                session.user.picture = token.picture;
            }
            return session;
        }
    }
}