import { IoIosTrendingUp } from "react-icons/io";
import TopCategories from "../TopCategories";

export default function Header() {
    return (
        <section className="px-3 md:px-4">
            <div className="flex flex-col items-start">
                <div className="flex flex-col items-start w-full">
                    {/* Badge */}
                    <div className="inline-flex gap-1.5 items-center rounded-full bg-gray-50 px-3 py-1.5 md:px-4 md:py-2 border border-indigo-100">
                        <IoIosTrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                        <p className="text-[10px] font-medium md:text-sm">
                            Trending this week
                        </p>
                    </div>

                    {/* Heading with line break on all screens */}
                    <h1 className="mt-3 max-w-2xl text-3xl tracking-tight font-semibold md:text-5xl lg:text-6xl">
                        What everyone's
                        <br />
                        loving right now.
                    </h1>

                    {/* Subtitle */}
                    <h3 className="mt-2 text-sm text-gray-600 md:text-base max-w-xl">
                        Browse and save items - your personal feed builds itself.
                    </h3>
                </div>

                {/* FILTERS */}
                <div className="mt-6">
                     <TopCategories />
                </div>
               
            </div>
        </section>
    );
}