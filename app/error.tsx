"use client";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    console.error(error);

    return (
        <>
            <h2>Something went wrong</h2>

            <button onClick={() => reset()}>
                Try again
            </button>
        </>
    )
}