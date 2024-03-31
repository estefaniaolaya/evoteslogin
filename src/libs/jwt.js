import { TOKEN_SECRET } from "../config.js";
import jwt from 'jsonwebtoken';


export function createAccessToken(payloand) {
return new Promise ((resolve, reject) => {
    jwt.sign(
        payloand,
        TOKEN_SECRET,{
            expiresIn: "1d",
        }
    , 
    
    (err, token) => {
        if (err)reject (err)
        resolve(token)
    
        
    }
    
    
    );
})
}
