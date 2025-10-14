import Image from "next/image"
import Link from "next/link"
import { Children } from "react"

export const AuthLayout = ({children}: {children: React.ReactNode;}) => {
    return(
        <div className="bg-muted flex min-h-svh flex-col justify-center items-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Link href="/" className="flex items-center gap-2 self-center font-medium">
                    <Image 
                        src="/logos/logo.svg"
                        alt="noden8ion"
                        width={250}
                        height={250}
                    />
                </Link>
                {children}
            </div>
        </div>
    );
};