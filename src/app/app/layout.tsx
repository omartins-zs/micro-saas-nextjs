import { Sidebar } from "@/components/dashboard/sidebar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="grid grid-cols-[16rem_1fr] gap-4">
            <Sidebar
                paths={[
                    {
                        href: '/',
                        label: 'Tarefas'
                    }
                ]}
            />
            <main>
                {children}
            </main>
        </div>
    )
}