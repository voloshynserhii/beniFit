export default async function Home({ dict }: { dict: any }) {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 uppercase tracking-wide">
                    {dict?.title}
                </h2>
                <div className="flex  flex-col">
                    {dict?.items.map((item: string, index: number) => (
                        <div key={index} className="p-1 flex flex-row items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0"></div>
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};