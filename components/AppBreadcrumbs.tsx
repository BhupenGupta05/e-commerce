import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
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
        <Breadcrumb className={className}>
            <BreadcrumbList>
                {items.map((item, idx) => {
                    const isLast = idx === items.length - 1;

                    return (
                        <div
                            key={`${item.label}-${idx}`}
                            className="flex items-center"
                        >
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage>
                                        {item.label}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link
                                            href={item.href ?? "#"}
                                        >
                                            {item.label}
                                        </Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {!isLast && <BreadcrumbSeparator />}
                        </div>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}