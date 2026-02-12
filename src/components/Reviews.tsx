"use client";

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Dictionary } from '@/get-dictionary';

interface Review {
    id: number;
    name: string;
    avatarLetter?: string;
    avatarUrl?: string;
    rating: number;
    text: string;
}

interface ReviewCardProps {
    review: Review;
    isExpanded: boolean;
    onToggleExpand: (id: number) => void;
}

const ReviewCard = ({ review, isExpanded, onToggleExpand }: ReviewCardProps) => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="bg-slate-50 rounded-2xl p-8 h-full flex flex-col min-h-[250px]">
            <div className="flex items-start mb-6">
                <div className="flex items-center gap-4">
                    {review.avatarUrl ? (
                        <Image
                            src={review.avatarUrl}
                            alt={review.name}
                            width={56}
                            height={56}
                            className="w-14 h-14 rounded-full object-cover border-2 border-blue-600"
                        />
                    ) : (
                        <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                            {review.avatarLetter}
                        </div>
                    )}
                    <div>
                        <p className="font-bold text-gray-900 text-lg">
                            {review.name}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
            </div>

            <div ref={contentRef} className="transition-all duration-300 ease-in-out overflow-hidden" style={{ maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : '4.5rem' /* approx 3 lines */ }}>
                <p className="text-gray-700 text-base leading-relaxed">
                    {review.text}
                </p>
            </div>

            {review.text.length > 120 && (
                <button
                    onClick={() => onToggleExpand(review.id)}
                    className="text-blue-600 font-semibold text-sm hover:underline mt-4 self-start"
                >
                    {isExpanded ? "Read less" : "Read more"}
                </button>
            )}
        </div>
    );
};


export default function Reviews ({ dict }: { dict: Dictionary['reviews'] }) {
    const reviewsData: Review[] = dict.items;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);
    const [cardWidth, setCardWidth] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);
    const [expandedReviewId, setExpandedReviewId] = useState<number | null>(null);

    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchMoveX, setTouchMoveX] = useState<number | null>(null);

    const handleToggleExpand = (reviewId: number) => {
        setExpandedReviewId(prevId => (prevId === reviewId ? null : reviewId));
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)');
        setIsDesktop(mediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    useEffect(() => {
        if (cardRef.current) {
            setCardWidth(cardRef.current.offsetWidth);
        }
        const handleResize = () => {
            if (cardRef.current) {
                setCardWidth(cardRef.current.offsetWidth);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isDesktop]);

        const reviewsPerPage = isDesktop ? 3 : 1;
    const maxIndex = reviewsData.length - reviewsPerPage;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
    };

    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [isDesktop, currentIndex, maxIndex]);

    const handleTouchStart = (e: React.TouchEvent) => {
        if (isDesktop) return;
        setTouchStartX(e.touches[0].clientX);
        setTouchMoveX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (isDesktop) return;
        setTouchMoveX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (isDesktop || touchStartX === null || touchMoveX === null) return;

        const touchDiff = touchStartX - touchMoveX;
        if (touchDiff > 50) { // Swiped left
            handleNext();
        } else if (touchDiff < -50) { // Swiped right
            handlePrev();
        }

        setTouchStartX(null);
        setTouchMoveX(null);
    };


    return (
        <section id="reviews" className="bg-zinc-300 py-20 font-sans">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                    {dict.title}
                </h2>
                <p className="text-lg text-gray-900 mb-12">
                    {dict.subtitle}
                </p>
            </div>

            <div className="relative max-w-7xl mx-auto flex items-start justify-center">
                <button
                    onClick={handlePrev}
                    className="absolute -left-4 top-[125px] -translate-y-1/2 z-20 bg-slate-50 p-3 rounded-full shadow-lg hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer hidden lg:block"
                    aria-label="Previous review"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                <div className="w-full overflow-hidden">
                    <div
                        className="flex items-start transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {reviewsData.map((review, index) => (
                            <div
                                ref={index === 0 ? cardRef : null}
                                key={review.id}
                                className="w-full lg:w-1/3 flex-shrink-0"
                                style={{ padding: '0 12px' }}
                            >
                                <ReviewCard
                                    review={review}
                                    isExpanded={expandedReviewId === review.id}
                                    onToggleExpand={handleToggleExpand}
                                />
                            </div>
                        ))}
                    </div>
                </div>


                <button
                    onClick={handleNext}
                    className="absolute -right-4 top-[125px] -translate-y-1/2 z-20 bg-slate-50 p-3 rounded-full shadow-lg hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer hidden lg:block"
                    aria-label="Next review"
                >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
            </div>
            <div className="flex justify-center mt-8">
            </div>
        </section>
    );
};