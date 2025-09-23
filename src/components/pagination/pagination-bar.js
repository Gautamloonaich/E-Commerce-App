"use client"
import { Pagination } from "@heroui/react";

export function Paginationbar() {
    return (
        <>
            <Pagination
                showControls
                loop
                showShadow
                initialPage={1}
                size="lg"
                total={3}
                classNames={{ wrapper: "gap-2 sm:gap-3" }}
                className=""
            />
        </>
    );
}