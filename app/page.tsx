"use client"
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import {useEffect} from "react";

export default function Home() {
  const { user } = useUser();

  const createUser = useMutation(api.user.createUser);



  const CheckUser =async () => {

    if (!user || !user.primaryEmailAddress?.emailAddress || !user.imageUrl || !user.fullName) {
      console.error("User data is incomplete.");
      return;
    }

    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress,
      imageUrl:user.imageUrl,
      userName:user.fullName
    });

    console.log(result)
  };

  useEffect (()=>{
    user&& CheckUser();
  },[user])

  return (
    <div>
      <div>Home </div>
      <Button>Subs</Button>
      <UserButton />
    </div>
  );
}
