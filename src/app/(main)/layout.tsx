import Layout from "@/components/theme/Layout";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout footerClass="black-bg" logoWhite={true}>
      {children}
    </Layout>
  );
}
