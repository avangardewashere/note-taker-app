"use client"
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import React from 'react'
 
 function Dashboad() {
   const {user} = useUser();

   const fileList = useQuery(api.dfStorage.GetUserFiles,{
    userEmail:`${user?.primaryEmailAddress?.emailAddress}`
   })

   console.log(fileList);

   return (
     <div className='p-8'>
      <h2 className="font-medium text-3-xl">
        Workspace
      </h2>

      <div>
        {fileList?.map((file,index)=>{
          return(
            <div>
              pota
            </div>
          )
        })}
      </div>
     </div>
   )
 }
 
 export default Dashboad
 