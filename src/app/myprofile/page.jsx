'use client'
import UpdateProfile from '@/components/UpdateProfile';
import { useSession } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const MyProfile = () => {

    const { data } = useSession()
    const user = data?.user




    return (
        <div className="w-7xl my-20 mx-auto rounded-lg" >
            <div className='border p-5 rounded-lg  flex flex-col justify-center items-center space-y-3  relative '>
                <Avatar className='relative aspect-square  w-80 h-80'>
                    <Avatar.Image className='object-cover ' alt={user?.name} src={user?.image} />
                </Avatar>
                <h2 className='font-bold text-2xl'>{user?.name}</h2>
                <h1>{user?.email}</h1>
                <UpdateProfile />
            </div>
        </div>
    );
};

export default MyProfile;