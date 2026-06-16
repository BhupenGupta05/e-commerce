"use client";

import { trackSave } from "@/app/actions/event";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

interface Props {
    productId: string;
    initialSaved?: boolean;
}

export default function WishlistButton({ productId, initialSaved = false }: Props) {
    const [saved, setSaved] = useState(initialSaved);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleClick = () => {
        const newSaved = !saved;
        setSaved(newSaved); //update instantly

        startTransition(async () => {
            const result = await trackSave(productId);

            if (!result.success && result.error === "unauthenticated") {
                setSaved(!newSaved); //rollback
                router.push(`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`);
                return;
            }
            if (!result.success) {
                setSaved(!newSaved); //rollback on any error
                return;
            }

            //sync with what server actually did
            setSaved(result.action === "saved");
        })
    }

    return (
        <button
            type="button"
            aria-label={saved ? "Remove from favourites" : "Add to favourites"}
            aria-pressed={saved}
            disabled={isPending}
            onClick={handleClick}
            className="flex items-center justify-center cursor-pointer disabled:opacity-50 transition-opacity"
        >
            {saved
                ? <IoMdHeart size={24} className="text-red-500" />
                : <IoMdHeartEmpty size={24} />
            }

        </button>

    )
}