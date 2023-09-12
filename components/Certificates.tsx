import certificates from "@/constants/certificates";
import getFormattedDate from "@/lib/getFormattedDate";

function Certificates() {
  return (
    <div className="prose   mt-16 mb-8">
      <h2 className="text-accent">Certificates</h2>
      <div className="not-prose">
        {certificates.map((cert) => {
          return (
            <div key={cert.id} className=" mb-4">
              <div className="flex w-full items-center gap-4">
                <div className="flex flex-col w-full">
                  <div className="flex sm:flex-row flex-col w-full items-start justify-between">
                    <div className="flex-1 text-base-content">{cert.name}</div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        className="text-primary hover:underline hover:text-primary-focus"
                      >
                        See Online
                      </a>
                    )}
                  </div>
                  <div className="text-sm text-base-content/80 flex items-center justify-between">
                    <div>
                      from{" "}
                      <span className="w-64 link text-secondary">
                        {cert.from}
                      </span>
                    </div>
                    <div>{getFormattedDate(cert.date)}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Certificates;
