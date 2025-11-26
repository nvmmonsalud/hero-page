import Link from "next/link";

export default function Works() {
    return (
        <main>
            <section className="page-content fade-in">
                <h1 className="text-3xl font-bold mb-8 text-center">My Works</h1>
                <div className="work-grid">
                    <Link href="/works/portraits" className="work-card">
                        Portrait
                    </Link>
                    <Link href="/works/corporate" className="work-card">
                        Corporate
                    </Link>
                    <Link href="/works/commercial" className="work-card">
                        Commercial
                    </Link>
                    <Link href="/works/wedding" className="work-card">
                        Wedding
                    </Link>
                </div>
            </section>
        </main>
    );
}
