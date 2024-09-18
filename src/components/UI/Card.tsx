'use client'
import React from 'react';
import {Card as NextUiCard, CardFooter, Image, Button, CardHeader} from "@nextui-org/react";
import {format} from "date-fns";

import { IPost } from '@/src/types';

const Card = ({post}:{post:IPost}) => {
    const {title,category,images, city, dateFound, _id}= post || {};


    return (
        <NextUiCard
        isFooterBlurred
        className="border-none"
        radius="lg"
      >
        <CardHeader className='absolute top-1 z-10 flex-col items-start'>
            <p className='absolute -top-0 right-1 rounded-full bg-black px-2 text-tiny uppercase'>{category?.name}</p>
            <h4 className='mt- rounded bg-black/30 p-1 text-2xl font-medium text-white'>{title}</h4>
        </CardHeader>
        <Image
        removeWrapper
          alt="Woman listing to music"
          className="object-cover scale-120 z-0 h-full w-full -translate-y-6"
      
          src={images[0]}
         
        />
        <CardFooter className="before:bg-white/10 border-white/20 border-t-1 overflow-hidden py-1 
        absolute before:rounded-t-xl rounded-t-large bottom-0  shadow-small  z-10
        flex justify-between
        ">
         <div>
         <p className="text-tiny text-white/80">{city}</p>
         <p className="text-tiny text-white/80">{format(new Date(dateFound),'dd MM yyyy')}</p>
         </div>
          <Button className="text-tiny text-white bg-black/60"  radius="lg" size="sm" variant="flat">
            Details
          </Button>
        </CardFooter>
      </NextUiCard>
    );
};

export default Card;