"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to submit");

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (status === "success") {
        return (
            <div className="text-center p-6 bg-green-50 border border-green-200 rounded-lg text-green-700">
                <p className="font-bold text-xl mb-2">Message Sent!</p>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm underline hover:text-green-900"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-[var(--accent-color)] text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
            >
                {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
            {status === "error" && (
                <p className="mt-4 text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
            )}
        </form>
    );
}
