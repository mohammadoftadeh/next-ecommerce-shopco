import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { useRouter } from "next/router";

const BreadcrumbCart = () => {
  const router = useRouter();
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Cart", href: router.pathname },
  ];

  return (
    <Breadcrumb className="mb-2 sm:mb-6">
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <BreadcrumbItem key={index}>
            {index < breadcrumbs.length - 1 ? (
              <BreadcrumbLink asChild>
                <Link href={breadcrumb.href}>{breadcrumb.name}</Link>
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{breadcrumb.name}</BreadcrumbPage>
            )}
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbCart;
