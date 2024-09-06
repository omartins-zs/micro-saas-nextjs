import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="grid grid-cols-[16rem_1fr] gap-4">
            <main>
                {children}
            </main>
        </div>
    )
}