"use client";
import {Button} from "@/components/ui/button";
import {FcGoogle} from "react-icons/fc";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "@/lib/firebase.config";

const GoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Google Login Successful", user);
        } catch (error) {
            console.error("Google Login Error", error);
        }
    }
    return <Button variant={"outline"} className={`flex justify-between gap-2 p-3 items-center cursor-pointer`} onClick={() => handleGoogleLogin()}>
        <FcGoogle />
        <span>Continue with Google</span>
    </Button>
}

export default GoogleLogin;