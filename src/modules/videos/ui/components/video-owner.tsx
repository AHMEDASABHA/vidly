import React from "react";
import Link from "next/link";
import type { VideoGetOneOutput } from "../../types";
import { UserAvatar } from "@/components/user-avatar";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import SubscriptionButton from "@/modules/subscriptions/ui/components/subscription-button";
import UserInfo from "@/modules/users/ui/components/user-info";

export default function VideoOwner({
  user,
  videoId,
}: {
  user: VideoGetOneOutput["user"];
  videoId: string;
}) {
  const { userId: clerkUserId } = useAuth();

  return (
    <div className="flex items-center sm:items-start justify-between sm:justify-start gap-3 min-w-0">
      <Link href={`/users/${user.id}`}>
        <div className="flex items-center gap-3 min-w-0">
          <UserAvatar size="lg" imageUrl={user.imageUrl} name={user.name} />
          <div className="flex flex-col gap-1">
            <UserInfo size="lg" name={user.name} />
            <span className="text-sm text-muted-foreground line-clamp-1">
              {/* TODO: probably fill subscribers count */}
              {0} subscribers
            </span>
          </div>
        </div>
      </Link>
      {clerkUserId === user.clerkId ? (
        <Button variant="secondary" className="rounded-full" asChild>
          <Link href={`/studio/videos/${videoId}`}>Edit video</Link>
        </Button>
      ) : (
        <SubscriptionButton
          onClick={() => {}}
          disabled={false}
          isSubscribed={false}
          className="flex-none"
        />
      )}
    </div>
  );
}
