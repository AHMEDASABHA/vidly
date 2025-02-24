import { AlertTriangleIcon } from "lucide-react";
import type { VideoGetOneOutput } from "../../types";

interface VideoBannerProps {
  status: VideoGetOneOutput["muxStatus"];
}

export default function VideoBanner({ status }: VideoBannerProps) {
  if (status === "ready") return null;
  return (
    <div className="bg-yellow-400 py-3 px-4 rounded-b-xl flex items-center gap-2">
      <AlertTriangleIcon className="size-4 text-black shrink-0" />
      <p className="text-sx md:text-sm font-medium text-black line-clamp-1">
      This video is still begin processing.
      </p>
    </div>
  );
}
