import { User } from "@prisma/client";
import { Auth } from "@supabase/ui";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CreateIntern from "../components/Forms/CreateIntern";
import getUser from "../lib/helpers/getUser";

const OnboardingPage = () => {
  const router = useRouter();
  const [userDb, setUserDb] = useState<User | null | undefined>(undefined);
  const { user } = Auth.useUser();
  useEffect(() => {
    if (user && user.email !== "" && user.email !== undefined) {
      (async () => {
        const userDbRes = await getUser(user.email || "");
        setUserDb(userDbRes);
        if (!userDbRes || !userDbRes.email) {
          router.push("/onboarding");
        }
      })();
    }
    if (!user) {
      router.push("/login");
    } else if (userDb) {
      router.push("/");
    }
  }, [user, router, userDb]);
  if (user) return <CreateIntern user={user} />;
  else {
    return <></>;
  }
};

export default OnboardingPage;
