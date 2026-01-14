export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <p style={{ color: "var(--text-secondary)", marginBottom: 28 }}>
          Last updated: {new Date().getFullYear()}
        </p>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            1. Introduction
          </h2>
          <p>
            Welcome to <strong>WeatherPro</strong>. Your privacy is important to
            us. This Privacy Policy explains what information we collect, how we
            use it, and your rights when using our website.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            2. Information We Collect
          </h2>
          <p>
            We do not collect any personally identifiable information such as
            your name, email address, or phone number.
          </p>
          <p>
            When you use our website, we may automatically collect limited
            non-personal data including:
          </p>
          <ul style={{ paddingLeft: 20 }}>
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Anonymous usage statistics</li>
          </ul>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            3. How We Use Your Information
          </h2>
          <p>We use the collected information to:</p>
          <ul style={{ paddingLeft: 20 }}>
            <li>Provide and improve our weather services</li>
            <li>Analyze website performance and usage</li>
            <li>Ensure website security and prevent abuse</li>
          </ul>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            4. Third-Party Services
          </h2>
          <p>
            Our website may use third-party services such as weather data APIs
            and analytics tools. These services may collect information in
            accordance with their own privacy policies.
          </p>
          <p>
            We are not responsible for the privacy practices of third-party
            services.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            5. Cookies
          </h2>
          <p>
            We may use cookies or similar technologies to enhance user
            experience, analyze trends, and improve our services. You can choose
            to disable cookies through your browser settings.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            6. Data Security
          </h2>
          <p>
            We take reasonable measures to protect your information. However, no
            method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            7. Your Rights
          </h2>
          <p>
            You have the right to access, correct, or delete any personal
            information we may hold about you. Since we do not store personal
            data, these rights generally do not apply.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            8. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us with comment.
          </p>
        </section>
      </div>
    </main>
  );
}
