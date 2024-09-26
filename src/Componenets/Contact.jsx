
import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting }
    } = useForm();


    const delay=(t)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{resolve();},t*1000);
        })
    }
    const onSubmit = async(data) => {
        await delay(3)
        console.log(data);
    };

    return (
        <div id='contact' className='flex justify-center items-center min-h-screen bg-black bg-opacity-50'>
            <div className='w-full max-w-md p-8 bg-black border-4   bg-opacity-100 rounded-lg shadow-lg backdrop-blur-md'>
                <h1 className='font-bold text-3xl text-center mb-6'>Contact Me</h1>
                {isSubmitting && <div>Sending...</div>}
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 text-black'>
                    <input 
                        type="text" 
                        placeholder='Name' 
                        {...register("Name", { required: { value: true, message: "Name must be entered" } })} 
                        className='p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    {errors.Name && <div className='text-red-500 text-sm'>{errors.Name.message}</div>}

                    <input 
                        type="email" 
                        placeholder='Email' 
                        {...register("email", { required: { value: true, message: "Enter Email" } })} 
                        className='p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    {errors.email && <div className='text-red-500 text-sm'>{errors.email.message}</div>}

                    <textarea 
                        placeholder='Message' 
                        {...register("message", { required: { value: true, message: "Write a Message" } })} 
                        className='p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none'
                    />
                    {errors.message && <div className='text-red-500 text-sm'>{errors.message.message}</div>}

                <input type="submit" value="submit" 
                disabled={isSubmitting} 
                className='w-full py-3 bg-blue-500 cursor-pointer disabled:bg-slate-500 text-white rounded-md hover:bg-blue-600 transition duration-300' />
                   
                </form>
            </div>
        </div>
    );
};

export default Contact;
