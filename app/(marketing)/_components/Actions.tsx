import Link from "next/link";

export default function Actions() {
    return (
        <div className="flex justify-between gap-8">
            <Link
                href="/discover"
                className="flex btn-primary px-10 py-3 text-sm capitalize font-medium">
                Explore your picks
            </Link>

            <Link
                href="/login"
                className="flex btn-secondary px-10 py-3 text-sm capitalize font-medium">
                See how it works
            </Link>
        </div>
    )
}