"use client";

import { useRouter } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";

export default function BackButton() {
    const router = useRouter();
    return (
        <button
            type="button"
            onClick={() => router.back()}
            aria-label="Go back"
            className="md:hidden cursor-pointer">
            <IoChevronBackOutline size={24} />
        </button>
    )
}