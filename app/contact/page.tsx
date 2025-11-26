import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <main>
            <section className="page-content fade-in">
                <h1 className="text-3xl font-bold mb-8 text-center">Get in Touch</h1>
                <p className="mb-4 text-center">
                    If you’d like to collaborate, commission a shoot, or just say hello —
                    reach out below:
                </p>
                <div className="text-center mb-8">
                    <span className="mr-2">📧</span>
                    <a
                        href="mailto:hello@neilmonsalud.com"
                        className="text-[var(--accent-color)] hover:underline"
                    >
                        hello@neilmonsalud.com
                    </a>
                </div>


                <ContactForm />
            </section>
        </main>
    );
}
