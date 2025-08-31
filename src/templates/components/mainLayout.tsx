export default function MainLayout({
  children,
  height = "min-h-screen",
  className = "",
  backgroundColor = "bg-white",
  flower = true,
}: {
  children?: React.ReactNode;
  className?: string;
  height?: string;
  backgroundColor?: string;
  flower?: boolean;
}) {
  return (
    <section className={`relative w-full ${height} flex flex-col justify-center items-center ${backgroundColor} p-32 px-10 ${className}`}>
      {flower && (
        <div className={`w-full h-full overflow-hidden absolute z-0`}>
          {/* Background decorative elements */}
          <img src="/images/bercak2.png" alt="" className="absolute -left-56 top-1/2 opacity-20" />
          <img src="/images/bercak2.png" alt="" className="absolute -right-48 top-[15%] opacity-20" />

          {/* Corner flowers - Top corners */}
          <img src="/images/bunga3.png" alt="" className="absolute top-0 left-0 w-[50dvw] max-w-56 z-0" />
          <img src="/images/bunga3.png" alt="" className="absolute top-0 right-0 w-[50dvw] max-w-56 z-0 -scale-x-100" />

          {/* Corner flowers - Bottom corners */}
          <img src="/images/bunga3.png" alt="" className="absolute bottom-0 left-0 w-[50dvw] max-w-56 z-0 -scale-y-100" />
          <img src="/images/bunga3.png" alt="" className="absolute bottom-0 right-0 w-[50dvw] max-w-56 z-0 -scale-y-100 -scale-x-100" />
        </div>
      )}

      {children}
    </section>
  );
}
