import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <section className="hero">
                <div className="hero-content fade-in">
                    {/* Note: You need to ensure the image is in public/images/profile.jpg */}
                    <div className="flex justify-center">
                        <img
                            src="/images/profile.jpg"
                            alt="Neil Vincent Monsalud"
                            className="profile-img"
                        />
                    </div>
                    <h1 className="text-[2.5rem] m-0 tracking-tighter font-bold">Neil Vincent Monsalud</h1>
                    <p className="subtitle text-[1.1rem] text-[#555] mt-2 mb-6">
                        Marketing Strategist & Photographer in Tokyo
                    </p>
                    <div className="social-links mb-6">
                        <a
                            href="https://linkedin.com/in/YOURUSERNAME"
                            target="_blank"
                            className="mx-2 text-[var(--accent-color)] text-[1.6rem] no-underline transition-colors hover:text-[#ff9900]"
                        >
                            <i className="ri-linkedin-box-fill"></i>
                        </a>
                        <a
                            href="https://instagram.com/YOURUSERNAME"
                            target="_blank"
                            className="mx-2 text-[var(--accent-color)] text-[1.6rem] no-underline transition-colors hover:text-[#ff9900]"
                        >
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a
                            href="https://x.com/YOURUSERNAME"
                            target="_blank"
                            className="mx-2 text-[var(--accent-color)] text-[1.6rem] no-underline transition-colors hover:text-[#ff9900]"
                        >
                            <i className="ri-twitter-x-line"></i>
                        </a>
                    </div>
                    <Link href="/works" className="btn">
                        View My Work
                    </Link>
                </div>
            </section>
        </main>
    );
}
