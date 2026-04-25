export default function ProfileCard() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4
                      bg-neutral-900 border border-neutral-800 
                      rounded-2xl p-5
                      shadow-[0_0_25px_rgba(59,130,246,0.25)]"
      >
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          <img
            src="/the-gpu-explorer-profile.jpg"
            alt="profile"
            className="w-20 h-20 rounded-full object-cover 
                       border-2 border-blue-500/40
                       shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          />

          <div>
            <h2 className="text-white text-lg font-semibold">
              The GPU Explorer
            </h2>
            <p className="text-neutral-400 text-sm">
              Chill channel for all the cool retards .... PC tech, Games,
              Technology.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <a
          href="https://www.youtube.com/@Madmax0620"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-6 py-2 
             rounded-xl font-medium
             shadow-[0_0_15px_rgba(59,130,246,0.4)]
             hover:scale-105 transition-all duration-200
             inline-block"
        >
          Subscribe Now
        </a>
      </div>
    </div>
  );
}
