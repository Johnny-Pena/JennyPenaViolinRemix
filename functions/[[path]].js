import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";

// The server build file is generated by `remix build`
import * as build from "../build/server";

export const onRequest = createPagesFunctionHandler({ build });