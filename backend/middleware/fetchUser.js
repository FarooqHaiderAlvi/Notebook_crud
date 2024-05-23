var jwt = require('jsonwebtoken');

const JWT_SECRET = "learnmern";

const fetchUser = (req,res,next) => {

    //  get the user from jwt token and append id to req.user
    const token=req.header('auth-token')
    console.log('i am here in auth-token....')
    
    if(!token){
        return res.status(401).send({error:"please access using a valid token"})
    }
    try{
        const data=jwt.verify(token,JWT_SECRET)
        req.user=data.user
        
    
        next()

    }
    catch(error){
        return res.status(401).send({error:"please access using a valid token"})

    }

}
module.exports=fetchUser



// Middleware Function: The fetchUser function is a middleware 
// function designed to be used with Express.js. Middleware functions
//  have access to the request (req) and response (res) objects, and
//   they can also control the flow of the request-response cycle.

// Token Extraction: It extracts the JWT token from the request headers.
//  The token is typically sent in the Authorization header with a value like Bearer <token>.

// Token Verification: It verifies the extracted token using the jwt.verify() function.
//  If the token is valid and has been signed with the correct secret key, jwt.verify() will return the decoded payload of the token.

// Handling Verification Result: If the token is successfully verified, 
// the decoded user data (data.user) is attached to the request object (req.user).
//  This allows subsequent middleware functions or route handlers to access 
//  the authenticated user's data.