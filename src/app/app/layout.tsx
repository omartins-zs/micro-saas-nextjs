import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div>
            <header>Teste</header>
            {children}
        </div>
    )
}