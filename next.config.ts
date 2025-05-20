import { IS_ENVIRONMENT_DEV } from "@/app/env";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators:IS_ENVIRONMENT_DEV===true?false:IS_ENVIRONMENT_DEV
};

export default nextConfig;
