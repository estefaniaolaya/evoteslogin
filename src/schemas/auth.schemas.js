import {z} from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error:  'Username is required.'
    }),
    email: z.string({
        required_error:  'email is required.'
    }).email({
        message: 'Please enter a valid email address.'
    }),
    password: z.string({
        required_error:  'pass is required.'
    }).min(6,{
        message: 'Please pass almenos 6 caracteres .'
    }),
    

})

export const loginSchema = z.object({
    email: z.string({
        require_error:  'email is required.'
    }).email({
        message: 'email invalid.'
    }),
    password: z.string({
        require_error:  'pass is required.'
    }).min(6,{
        message: 'Please pass required 6 caracteres .'
    }),
   

})