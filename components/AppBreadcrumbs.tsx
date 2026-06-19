import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import React from "react";
import Link from "next/link";

export interface BreadcrumbItemType {
    label: string;
    href?: string;
}

interface Props {
    items: BreadcrumbItemType[];
    className?: string;
}

export default function AppBreadcrumbs({
    items,
    className,
}: Props) {
    return (
        <BreadcrumbList className={className}>
            {items.map((item, idx) => {
                const isLast = idx === items.length - 1;

                return (
                    <React.Fragment key={`${item.label}-${idx}`}>
                        <BreadcrumbItem>
                            {isLast ? (
                                <BreadcrumbPage>{item.label}</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink asChild>
                                    <Link href={item.href ?? "#"}>
                                        {item.label}
                                    </Link>
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>

                        {!isLast && <BreadcrumbSeparator />}
                    </React.Fragment>
                );
            })}
        </BreadcrumbList>
    )
}