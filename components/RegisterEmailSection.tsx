import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const RegisterEmailSection = () => {
    return (
        <div style={{
            height: '55vh',
            paddingInline: '4rem',
            paddingTop: '4rem',
            marginBottom: '40px'
        }}
            className='bg-gray-100'
        >
            <div className='flex flex-col items-center justify-center pb-4'>
                <h1 className='text-3xl font-bold pb-6'>Want First Dibs?</h1>
                <p className='text-center font-medium pb-6'>Join our email list and be the first to know about new limited edition products, <br /> material innovations, and lots of other fun updates.</p>
                <div className='pb-6'>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="email" placeholder="Enter Your Email Address" />
                        <Button type="submit">Subscribe</Button>
                    </div>
                </div>
                <p className='text-center font-medium pb-6 text-sm'>Note: You can opt-out at any time. See our <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms</span>.</p>
            </div>
        </div>
    );
};

export default RegisterEmailSection;