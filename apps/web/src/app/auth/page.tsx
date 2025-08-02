import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import GoogleLogin from "@/components/GoogleLogin";

const Auth = () => {
    return (
        <div className={`items-center justify-center flex w-full h-screen`}>
            <div>
                <Card>
                    <CardHeader  className={`text-center text-xl`}>
                        <CardTitle>Enter CallBits</CardTitle>
                        <CardDescription>The first virtual event hall.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <GoogleLogin />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Auth;