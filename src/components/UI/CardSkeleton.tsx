'use client'
import React from 'react';
import {Card as NextUiCard, CardFooter, CardHeader, Skeleton} from "@nextui-org/react";

const CardSkeleton = () => {

    return (
      <Skeleton>

<NextUiCard
        isFooterBlurred
        className="border-none"
        radius="lg"
      >
        <CardHeader className='absolute top-1 z-10 flex-col items-start'>
            <p className='absolute -top-0 right-1 rounded-full bg-black px-2 text-tiny uppercase' />
           
        </CardHeader>
     
        <CardFooter className="before:bg-white/10 border-white/20 border-t-1 overflow-hidden py-1 
        absolute before:rounded-t-xl rounded-t-large bottom-0  shadow-small  z-10
        flex justify-between
        ">
         <div>
         <p className="text-tiny text-white/80" />
         <p className="text-tiny text-white/80" />
         </div>
     
        </CardFooter>
      </NextUiCard>
      </Skeleton>
    );
};

export default CardSkeleton;