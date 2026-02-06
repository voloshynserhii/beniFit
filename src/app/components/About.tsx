import React from 'react';

const About = () => {
    return (
        <section id="about" className="bg-zinc-300 py-20 font-sans">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight text-center">
                    About Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-12 text-center">
                    We are dedicated to helping you achieve your fitness goals with personalized training and expert guidance.
                </p>

                <div className="prose prose-lg mx-auto text-gray-700">
                    <p>
                        Welcome to beniFit! We believe that fitness is a journey, not a destination. Our philosophy is centered around creating sustainable, healthy habits that last a lifetime. We were founded on the principle that everyone deserves access to high-quality fitness coaching, tailored to their individual needs and goals.
                    </p>
                    <p>
                        Our team of certified personal trainers is passionate about what they do. With years of experience in various disciplines, including strength training, injury rehabilitation, and nutritional guidance, we are equipped to help you overcome any obstacle. We work with you to create a plan that is not only effective but also enjoyable.
                    </p>
                    <p>
                        Whether you are just starting your fitness journey or you are an experienced athlete looking to push your limits, we are here to support you every step of the way. Join our community and let's build a stronger, healthier you, together.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
