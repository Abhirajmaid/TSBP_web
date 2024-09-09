"use client";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { buttonVariants } from "@/src/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const Navlinks = ({ links, isCollapsed }) => {
  const pathname = usePathname();

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 pt-4 data-[collapsed=true]:py-2 data-[collapsed=true]:pt-4"
    >
      <nav className="grid gap-3 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <TooltipProvider key={index}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      buttonVariants({
                        variant: link.href == pathname ? "default" : "ghost",
                        size: "icon",
                      }),
                      "h-9 w-9",
                      link.href == pathname &&
                        "bg-primary text-muted-foreground hover:bg-primary hover:text-white text-white"
                    )}
                  >
                    <Icon icon={link.icon} className="h-5 w-5" />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {link.title}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Link
              key={index}
              href={link.href}
              className={cn(
                buttonVariants({
                  variant: link.href == pathname ? "default" : "ghost",
                  size: "sm",
                }),
                link.href == pathname &&
                  "bg-primary text-white hover:bg-primary hover:text-white ",
                "justify-start text-md"
              )}
            >
              <Icon icon={link.icon} className="mr-2 h-5 w-5" />
              {link.title}
            </Link>
          )
        )}
      </nav>
    </div>
  );
};

export default Navlinks;
