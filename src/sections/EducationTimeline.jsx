import React from "react";
import { GraduationCap } from "lucide-react";

const EducationTimeline = () => {
    const education = [
        {
            year: "2024 - Present",
            degree: "Bachelor of Information Technology",
            school: "Herald College Kathmandu",
            desc: "Focused on web development, database design, and software engineering fundamentals.",
        },
        {
            year: "2020 - 2022",
            degree: "High School (+2 in Science)",
            school: "New Horizon Gautaum buddha Higher Secondary School",
            desc: "Studied Biology and mathematics, developing strong analytical and logical thinking.",
        },
        {
            year: "2010 - 2020",
            degree: "School Leaving Certificate (SLC)",
            school: "Butwal Glory English Boarding School",
            desc: "Built strong foundations in core academic subjects and technology curiosity.",
        },
    ];

    return (
        <section className="bg-gradient-to-r from-slate-900 to-gray-800 text-white py-16 px-6 sm:px-20 pt-40">
            <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
                <GraduationCap className="inline-block w-10 h-10 mr-2 text-cyan-400" />
                Education
            </h2>

            <div className="relative border-l-4 border-cyan-500 max-w-3xl mx-auto">
                {education.map((item, index) => (
                    <div key={index} className="mb-10 ml-6 group">
                        {/* Dot */}
                        <span className="absolute -left-1.5 flex h-2 w-2 items-center justify-center rounded-full bg-cyan-500 ring-2 ring-slate-900 transition-all duration-500 group-hover:ring-cyan-500" />

                        {/* Card */}
                        <div className="p-6 bg-slate-800 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-500">
                            <h3 className="text-xl font-semibold text-cyan-400">{item.degree}</h3>
                            <span className="text-sm text-gray-400">{item.year}</span>
                            <p className="text-gray-300 mt-2 font-medium">{item.school}</p>
                            <p className="text-gray-400 mt-2 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EducationTimeline;
