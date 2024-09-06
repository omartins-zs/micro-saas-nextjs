/*


type SidebarProps = {
    paths: Array<{
        label: string
        href: string
    }>
}

export function Sidebar({ paths }: SidebarProps) {
    return (
        <aside className="border-r border-border">
            <nav>
                {paths.map(path => (
                    <a key={path.href} href="{path.href}">{path.label}</a>
                ))}
            </nav>
        </aside>
    )
}


*/

import { cn } from "@/lib/utils"
import Link from "next/link"

export type SidebarGenericProps<T = unknown> = {
    children: React.ReactNode
    className?: string
} & T

export function Sidebar({ className, children }: SidebarGenericProps) {
    return (
        <aside className={cn(['', className])}>
            {children}
        </aside>
    )
}

export function SidebarHeader({ className, children }: SidebarGenericProps) {
    return (
        <header className={cn(['', className])}>
            {children}
        </header>
    )
}
export function SidebarHeaderTitle({ className, children }: SidebarGenericProps) {
    return (
        <h2 className={cn(['', className])}>
            {children}
        </h2>
    )
}

export function SidebarMain({ className, children }: SidebarGenericProps) {
    return (
        <main className={cn(['', className])}>
            {children}
        </main>
    )
}

export function SidebarNav({ className, children }: SidebarGenericProps) {
    return (
        <nav className={cn(['', className])}>
            {children}
        </nav>
    )
}

export function SidebarNavHeader({ className, children }: SidebarGenericProps) {
    return (
        <header className={cn(['', className])}>
            {children}
        </header>
    )
}

export function SidebarNavHeaderTitle({ className, children }: SidebarGenericProps) {
    return (
        <h4 className={cn(['', className])}>
            {children}
        </h4>
    )
}

export function SidebarNavMain({ className, children }: SidebarGenericProps) {
    return (
        <main className={cn(['', className])}>
            {children}
        </main>
    )
}

type SidebarNavLinkProps = {
    href: string
}

export function SidebarNavLink({ className, children, href }: SidebarGenericProps<SidebarNavLinkProps>) {
    return (
        <Link href={href} className={cn(['', className])}>
            {children}
        </Link>
    )
}

export function SidebarFooter({ className, children }: SidebarGenericProps) {
    return (
        <footer className={cn(['', className])}>
            {children}
        </footer>
    )
}
