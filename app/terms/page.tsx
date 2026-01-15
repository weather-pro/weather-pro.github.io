export default function TermsPage() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: 20,
          padding: "40px 36px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 20 }}>
          Terms of Use
        </h1>

        <p style={{ color: "var(--text-secondary)", marginBottom: 28 }}>
          Last updated: {new Date().getFullYear()}
        </p>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using <strong>WeatherPro</strong> (the “Website”),
            you agree to be bound by these Terms of Use and all applicable laws
            and regulations. If you do not agree with any part of these terms,
            you must not use this website.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            2. Use of the Service
          </h2>
          <p>
            The Website provides weather information for informational purposes
            only. You agree to use the Website solely for lawful purposes and in
            a manner that does not infringe the rights of, restrict, or inhibit
            anyone else’s use and enjoyment of the Website.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            3. No Warranty
          </h2>
          <p>
            The weather data and information provided on this Website are
            supplied on an “as is” and “as available” basis. We make no
            warranties, express or implied, regarding the accuracy,
            completeness, or reliability of the information.
          </p>
          <p>
            You acknowledge that weather conditions may change rapidly and that
            any reliance on the information provided is at your own risk.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            4. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, we shall not be liable for
            any direct, indirect, incidental, consequential, or special damages
            arising out of or in connection with your use of or inability to use
            the Website, even if we have been advised of the possibility of such
            damages.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            5. Intellectual Property
          </h2>
          <p>
            All content, design, text, graphics, and other materials on this
            Website are the property of <strong>World Weather</strong> or its
            licensors and are protected by applicable intellectual property
            laws. You may not reproduce, distribute, or create derivative works
            without our prior written consent.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            6. Third-Party Services
          </h2>
          <p>
            This Website may rely on third-party services, including weather
            data providers and analytics tools. We are not responsible for the
            content, accuracy, or availability of such third-party services.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            7. Modifications to the Terms
          </h2>
          <p>
            We reserve the right to update or modify these Terms of Use at any
            time without prior notice. Any changes will be effective immediately
            upon posting on this page. Your continued use of the Website
            constitutes acceptance of the revised terms.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            8. Termination
          </h2>
          <p>
            We may suspend or terminate your access to the Website at any time,
            without notice, for conduct that we believe violates these Terms of
            Use or is otherwise harmful to other users or the Website.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            9. Contact
          </h2>
          <p>
            If you have any questions regarding these Terms of Use, please
            contact us with comment.
          </p>
        </section>
      </div>
    </main>
  );
}
