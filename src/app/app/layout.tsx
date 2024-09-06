import { Sidebar, SidebarFooter, SidebarHeader, SidebarHeaderTitle, SidebarMain, SidebarNav, SidebarNavHeader, SidebarNavLink, SidebarNavMain } from "@/components/dashboard/sidebar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="grid grid-cols-[16rem_1fr] gap-4">
            <Sidebar>
                <SidebarHeader>
                    <h1></h1>
                </SidebarHeader>
                <SidebarMain>
                    <SidebarNav>
                        <SidebarNavMain>
                            <SidebarNavLink href="/app">Tarefas</SidebarNavLink>
                            <SidebarNavLink href="/app/settings">Configurações</SidebarNavLink>
                        </SidebarNavMain>
                    </SidebarNav>
                    <SidebarNav>
                        <SidebarNavHeader>
                            <SidebarHeaderTitle>
                                Links Extras
                            </SidebarHeaderTitle>
                        </SidebarNavHeader>
                        <SidebarNavMain>
                            <SidebarNavLink href="/">Precisa de Ajuda?</SidebarNavLink>
                            <SidebarNavLink href="/">Site</SidebarNavLink>
                        </SidebarNavMain>
                    </SidebarNav>
                </SidebarMain>
                <SidebarFooter>
                    <h1>USer</h1>
                </SidebarFooter>
            </Sidebar>

            <main>
                {children}
            </main>
        </div>
    )
}